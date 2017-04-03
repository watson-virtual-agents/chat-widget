/*
* (C) Copyright IBM Corp. 2017. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
* in compliance with the License. You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software distributed under the License
* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
* or implied. See the License for the specific language governing permissions and limitations under
* the License.
*/

var layouts = require('./layouts');
var events = require('./events');
var eventHandlers = require('./events/handlers');
var BotSDK = require('@watson-virtual-agent/client-sdk/lib/web');
var state = require('./state');
var context = require('./context');
var utils = require('./utils');
var profile = require('./profile');
var assign = require('lodash/assign');
var styles = require('./styles');
var defaultStyles = styles.defaultStyles;


var layoutInit = {};
var registeredLayouts = [];

function registerEvents(tryIt, playback) {
  events.subscribe('start', eventHandlers.start);
  events.subscribe('chatID', eventHandlers.chatID);
  events.subscribe('resize', eventHandlers.resize);
  events.subscribe('disable-input', eventHandlers.input.disableInput);
  events.subscribe('enable-loading', eventHandlers.input.enableLoadingInput);
  events.subscribe('disable-loading', eventHandlers.input.disableLoadingInput);
  events.subscribe('scroll-to-bottom', eventHandlers.scrollToBottom);
  events.subscribe('receive', eventHandlers.receive);
  if (playback === true) { //TODO: remove if playback when Dashboard code is updated
    events.subscribe('send', eventHandlers.sendMock);
  } else {
    events.subscribe('clear', eventHandlers.clear);
    events.subscribe('send', eventHandlers.send.send);
    events.subscribe('retry', eventHandlers.send.retry);
    events.subscribe('send-input-message', eventHandlers.sendInputMessage);
    events.subscribe('enable-retry', eventHandlers.error.retry);
    events.subscribe('enable-input', eventHandlers.input.enableInput);
    events.subscribe('focus-input', eventHandlers.input.focusInput);
    events.subscribe('send-mock', eventHandlers.sendMock);
    events.subscribe('error-clear', eventHandlers.error.clearError);
    events.subscribe('reset', eventHandlers.reset);
  }
  if (tryIt === true) {
    events.subscribe('try-it-error', eventHandlers.error.tryIt);
    events.subscribe('try-it-layout-subscription', eventHandlers.tryIt.layoutError);
    events.subscribe('try-it-action-subscription', eventHandlers.tryIt.actionError);
    events.subscribe('try-it-receive-intent-data', eventHandlers.tryIt.intent);
  }
}

function registerLayouts() {
  registerLayout('show-locations', layouts.showLocations.init, true);
  registerLayout('choose-location-type', layouts.chooseLocationType.init, true);
  registerLayout('request-geolocation-latlong', layouts.requestGeolocationLatlong.init, true);
  registerLayout('request-geolocation-zipcode', layouts.requestGeolocationZipcode.init, true);
  registerLayout('choose', layouts.choose.init, true);
  registerLayout('form', layouts.form.init, true);
  registerLayout('cc-validator', layouts.creditCard.init, true);
  registerLayout('error', layouts.error.init, true);
  for (var i = 0; i < registeredLayouts.length; i++)
    layoutInit[registeredLayouts[i]]();
}

function init(config) {
  var current = state.get();
  if (current.active === true) {
    return destroy()
      .then(function() {
        return init(config);
      });
  }

  var root = (typeof config.el === 'string') ? document.getElementById(config.el) : config.el;
  var SDKconfig = utils.getSDKConfig(config);

  return new window.Promise(function(resolve, reject) {
    var defaultState = {
      active: true,
      root: root,
      mapsServer: process.env.MAPS_SERVER || 'https://dp1-i-serve-maps.mybluemix.net/',
      botID: config.botID,
      styles: assign({}, defaultStyles, config.styles),
      baseURL: SDKconfig.baseURL || 'https://api.ibm.com/virtualagent/run/api/v1/',
      originalContent: root.innerHTML,
      handleInput: {
        default: true
      },
      minSeconds: (!config.minSeconds && config.minSeconds !== 0) ? 0.75 : config.minSeconds,
      chatStyleID: 'chatStyleID-' + utils.getUUID(),
      tryIt: config.tryIt || false,
      playback: config.playback || false //TODO: remove playback when Dashboard code is updated
    };
    if (utils.checkRoot(root)) {
      if (config.errorHandler)
        events.subscribe('httpError', config.errorHandler, config.errorHandlerContext);
      else
        events.subscribe('httpError', eventHandlers.error.httpError);
      registerEvents(config.tryIt, config.playback);
      registerLayouts();
      //TODO: remove if playback when Dashboard code is updated
      if (config.playback === true) {
        events.publish('start', defaultState);
        setTimeout(function() {
          events.publish('chatID', 'playback');
        }, 0);
        setTimeout(function() {
          resolve();
        }, 0);
      } else if (config.botID) {
        events.publish('start', defaultState);
        events.publish('enable-loading');
        events.publish('disable-input');
        BotSDK
          .configure( SDKconfig )
          .start( config.botID )
          .then( function(res) {
            events.publish('chatID', res.chatID);
            events.publish('receive', res);
          })['catch']( function(err) {
            events.publish('httpError', err);
          }).then(function() {
            setTimeout(function() {
              events.publish('enable-input');
              resolve();
            }, 0);
          });
      } else {
        console.error('BotID is required!');
        destroy();
        reject({
          error: 'BotID is required!'
        });
      }
    } else {
      console.error('Element for chat does not exist!');
      destroy();
      reject({
        error: 'Element for chat does not exist!'
      });
    }
  });
}

function registerLayout(layout, init, defaultSetup) {
  if (layout && init && typeof init === 'function') {
    if (registeredLayouts.indexOf(layout) === -1 || !defaultSetup) {
      registeredLayouts.push(layout);
      layoutInit[layout] = init;
    }
  } else {
    console.error('registerLayout was configured incorrectly.');
  }
}

function send(message) {
  if (message) {
    var current = state.get();
    if (current.active) {
      events.publish('send', {
        text: message
      });
    }
  } else {
    console.error('The message was empty.');
  }
}

function receive(message) {
  if (message) {
    var current = state.get();
    if (current.active)
      events.publish('receive', message);
  } else {
    console.error('The message was empty.');
  }
}

function sendMock(message) {
  if (message) {
    var current = state.get();
    if (current.active) {
      events.publish('send-mock', {
        text: message
      });
    }
  } else {
    console.error('The message was empty.');
  }
}

function sendSilently(message) {
  if (message) {
    var current = state.get();
    if (current.active) {
      events.publish('send', {
        text: message,
        silent: true
      });
    }
  } else {
    console.error('The message was empty.');
  }
}

function enableCustomInputHandler(config) {
  if (config && config.callback && typeof config.callback === 'function') {
    state.set({
      handleInput: {
        default: false,
        callback: config.callback,
        context: config.context
      }
    });
  } else {
    console.error('Invalid configuration of enableCustomInputHandler');
  }
}

function disableCustomInputHandler() {
  state.set({
    handleInput: {
      default: true
    }
  });
}

function focusInput() {
  var current = state.get();
  if (current.active)
    events.publish('focus-input');
}

function disableInput() {
  var current = state.get();
  if (current.active)
    events.publish('disable-input');
}

function enableInput() {
  var current = state.get();
  if (current.active)
    events.publish('enable-input');
}

function debug() {
  state.set({
    DEBUG: true
  });
}

function destroy() {
  return new window.Promise(function(resolve) {
    var current = state.get();
    if (current.active) {
      styles.removeStyles(current.root, current.chatStyleID, current.chatID);
      if (current.root && current.onResize) {
        utils.removeResizeListener(current.root, current.onResize);
        utils.endVisibilityCheck();
        if (typeof current.originalContent !== 'undefined' && current.root)
          current.root.innerHTML = current.originalContent;
      }
      events.publish('destroy');
      events.destroy();
      state.destroy();
    }
    resolve();
  });
}

function restart() {
  console.warn('The IBMChat.restart method is deprecated. Use IBMChat.clear() instead.');
  return new window.Promise(function(resolve, reject) {
    var current = state.get();
    destroy().then(function() {
      setTimeout(function() {
        init({ el: current.root, botID: current.botID, baseURL: current.baseURL }).then(function() {
          resolve();
        })['catch'](function(e) {
          reject(e);
        });
      }, 10);
    })['catch'](function(e) {
      reject(e);
    });
  });
}

module.exports = {
  profile: profile,
  init: init,
  registerLayout: registerLayout,
  send: send,
  receive: receive,
  sendMock: sendMock,
  sendSilently: sendSilently,
  enableCustomInputHandler: enableCustomInputHandler,
  disableCustomInputHandler: disableCustomInputHandler,
  focusInput: focusInput,
  disableInput: disableInput,
  enableInput: enableInput,
  subscribe: events.subscribe,
  subscribeOnce: events.subscribeOnce,
  publish: events.publish,
  debug: debug,
  destroy: destroy,
  restart: restart,
  currentSubscriptions: events.currentSubscriptions,
  hasSubscription: events.hasSubscription,
  completeEvent: events.completeEvent,
  state: state,
  context: context,
  clear: function() {
    events.publish('restart');
  }
};

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
var utils = require('./utils');
var profile = require('./profile');
var Promise = require('es6-promise').Promise;
var assign = require('lodash/assign');
var defaultStyles = require('./styles');

var baseURL = 'https://api.ibm.com/virtualagent/run/api/v1/';
var layoutInit = {};
var registeredLayouts = [];

function checkRoot(el) {
  if (typeof el === 'string' && document.getElementById(el))
    return true;
  else if (el.nodeType && el.nodeType === 1)
    return true;
  else
    return false;
}

function getSDKConfig(config) {
  var SDKconfig = {};
  SDKconfig.baseURL = config.baseURL || baseURL;
  if (config.withCredentials)
    SDKconfig.withCredentials = config.withCredentials;
  if (config.XIBMClientID)
    SDKconfig.XIBMClientID = config.XIBMClientID;
  if (config.XIBMClientSecret)
    SDKconfig.XIBMClientSecret = config.XIBMClientSecret;
  if (config.userID)
    SDKconfig.userID = config.userID;
  if (config.userLatLon)
    SDKconfig.userLatLon = config.userLatLon;
  return SDKconfig;
}

function registerEvents(tryIt, playback) {
  events.subscribe('start', eventHandlers.start);
  events.subscribe('chatID', eventHandlers.chatID);
  events.subscribe('resize', eventHandlers.resize);
  events.subscribe('disable-input', eventHandlers.input.disableInput);
  events.subscribe('enable-loading', eventHandlers.input.enableLoadingInput);
  events.subscribe('disable-loading', eventHandlers.input.disableLoadingInput);
  events.subscribe('scroll-to-bottom', eventHandlers.scrollToBottom);
  events.subscribe('receive', eventHandlers.receive);
  if (tryIt === true) {
    events.subscribe('try-it-error', eventHandlers.error.tryIt);
    events.subscribe('try-it-layout-subscription', eventHandlers.tryIt.layoutError);
    events.subscribe('try-it-action-subscription', eventHandlers.tryIt.actionError);
    events.subscribe('try-it-receive-intent-data', eventHandlers.tryIt.intent);
  }
  if (playback === true) { //TODO: remove if playback when Dashboard code is updated
    events.subscribe('send', eventHandlers.sendMock);
  } else {
    events.subscribe('clear', eventHandlers.clear);
    events.subscribe('send', eventHandlers.send);
    events.subscribe('send-input-message', eventHandlers.sendInputMessage);
    events.subscribe('enable-input', eventHandlers.input.enableInput);
    events.subscribe('focus-input', eventHandlers.input.focusInput);
    events.subscribe('send-mock', eventHandlers.sendMock);
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
        init(config);
      });
  }

  var root = (typeof config.el === 'string') ? document.getElementById(config.el) : config.el;
  var SDKconfig = getSDKConfig(config);

  return new Promise(function(resolve, reject) {
    var defaultState = {
      active: true,
      root: root,
      mapsServer: process.env.MAPS_SERVER || 'https://dp1-i-serve-maps.mybluemix.net/',
      botID: config.botID,
      styles: assign({}, defaultStyles, config.styles),
      baseURL: SDKconfig.baseURL,
      originalContent: root.innerHTML,
      handleInput: {
        default: true
      },
      chatStyleID: 'chatStyleID-' + utils.guid(),
      tryIt: config.tryIt || false,
      playback: config.playback || false //TODO: remove playback when Dashboard code is updated
    };
    if (checkRoot(root)) {
      if (config.errorHandler)
        events.subscribe('error', config.errorHandler, config.errorHandlerContext);
      else
        events.subscribe('error', eventHandlers.error.default);
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
        BotSDK
          .configure( SDKconfig )
          .start( config.botID )
          .then( function(res) {
            events.publish('chatID', res.chatID);
            events.publish('receive', res);
          })['catch']( function(err) {
            events.publish('error', err);
          }).then(function() {
            setTimeout(function() {
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
  return new Promise(function(resolve) {
    var current = state.get();
    if (current.active) {
      if (current.root && current.onResize)
        utils.removeResizeListener(current.root, current.onResize);
      events.publish('destroy');
      events.destroy();
      if (typeof current.originalContent !== 'undefined' && current.root)
        current.root.innerHTML = current.originalContent;
      state.destroy();
    }
    resolve();
  });
}

function restart() {
  console.warn('The IBMChat.restart method is deprecated.');
  return new Promise(function(resolve, reject) {
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

function clear() {
  return _clear(true);
}

function _clear(destroyPrevious) {
  return new Promise(function(resolve, reject) {
    var current = state.get();
    var SDKconfig = getSDKConfig(current);
    if (checkRoot(current.root)) {
      reject({
        error: 'Element for chat does not exist!'
      });
    }
    if (!current.botID) {
      reject({
        error: 'BotID is required!'
      });
    }
    BotSDK
      .configure( SDKconfig )
      .start( current.botID )
      .then( function(res) {
        events.publish('chatID', res.chatID);
        if (destroyPrevious)
          events.publish('clear');
        events.publish('receive', res);
      })['catch']( function(err) {
        events.publish('error', err);
      }).then(function() {
        setTimeout(function() {
          resolve();
        },0);
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
  clear: clear
};

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

var events = require('./events');
var eventHandlers = require('./events/handlers');
var BotSDK = require('./sdk');
var state = require('./state');
var context = require('./context');
var utils = require('./utils');
var profile = require('./profile');
var assign = require('lodash/assign');
var styles = require('./styles');
var defaultStyles = styles.defaultStyles;

function registerEvents(tryIt, playback) {
  events.subscribe('start', eventHandlers.start);
  events.subscribe('sessionID', eventHandlers.sessionID);
  events.subscribe('resize', eventHandlers.resize);
  events.subscribe('disable-input', eventHandlers.input.disableInput);
  events.subscribe('enable-loading', eventHandlers.input.enableLoadingInput);
  events.subscribe('disable-loading', eventHandlers.input.disableLoadingInput);
  events.subscribe('scroll-to-bottom', eventHandlers.scrollToBottom);
  events.subscribe('receive', eventHandlers.receive);
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

  // i18n
  var locale = config.locale || 'en';  // default to english
  state.set({
    locale: locale
  });
  if (config.defaultCountry) {
    state.set({
      defaultCountry: config.defaultCountry
    });
  }
  if (config.langBundle) {
    if (typeof config.langBundle === 'object') {
      // store language bundle that matches locale
      var bundle = config.langBundle[locale];
      if (!bundle) {
        // couldn't find a bundle associated with locale, default to english
        console.warn('Could not find language bundle for ' + locale + '. ' +
                      'Defaulting to English.');
        locale = 'en';
        bundle = config.langBundle.en;
      }
      state.set({
        locale: locale,
        langBundle: bundle
      });
    }
  }

  return new window.Promise(function(resolve, reject) {
    var defaultState = {
      active: true,
      root: root,
      styles: assign({}, defaultStyles, config.styles),
      baseURL: SDKconfig.baseURL,
      apiKey: SDKconfig.apiKey,
      originalContent: root.innerHTML,
      handleInput: {
        default: true
      },
      minSeconds: (!config.minSeconds && config.minSeconds !== 0) ? 0.75 : config.minSeconds,
      chatStyleID: 'chatStyleID-' + utils.getUUID(),
      tryIt: false,
      playback: false
    };
    if (utils.checkRoot(root)) {
      if (config.errorHandler)
        events.subscribe('httpError', config.errorHandler, config.errorHandlerContext);
      else
        events.subscribe('httpError', eventHandlers.error.httpError);
      registerEvents(config.tryIt, config.playback);
      events.publish('start', defaultState);
      events.publish('disable-input');
      BotSDK
        .configure( SDKconfig )
        .start()
        .then( function(data) {
          events.publish('sessionID', data.session_id);
          return data.session_id;
        })
        .then(function() {
          events.publish('send', {
            silent: true,
            text: ''
          });
        })['catch']( function(err) {
          events.publish('httpError', err);
        }).then(function() {
          setTimeout(function() {
            events.publish('enable-input');
            resolve();
          }, 0);
        });
    } else {
      console.error('Element for chat does not exist!');
      destroy();
      reject({
        error: 'Element for chat does not exist!'
      });
    }
  });
}

function send(message, emptyOK) {
  if (message || emptyOK) {
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

function sendSilently(message, emptyOK) {
  if (message || emptyOK) {
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
      styles.removeStyles(current.root, current.chatStyleID, current.sessionID);
      if (current.root && current.onResize) {
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
    events.publish('reset');
  }
};

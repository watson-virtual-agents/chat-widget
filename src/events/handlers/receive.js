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

var BotSDK = require('@watson-virtual-agent/client-sdk/lib/web');
var state = require('../../state');
var events = require('../../events');
var utils = require('../../utils');
var assign = require('lodash/assign');
var templates = require('../../templates');

function _actions(data, tryIt, debug) {
  var msg = data.message;
  if (msg && msg.action && msg.action.name) {
    var action = 'action:' + msg.action.name;
    if (events.hasSubscription(action)) {
      events.publish(action, data, events.completeEvent);
      if (debug)
        console.log('Call to ' + action);
    } else {
      if (debug)
        console.warn('Nothing is subscribed to ' + action);
      if (tryIt)
        events.publish('try-it-action-subscription', action);
    }
  }
  events.publish('enable-input');
  events.publish('disable-loading');
  events.publish('scroll-to-bottom');
  if (utils.isVisible())
    events.publish('focus-input');
}

function _layouts(data, tryIt, debug) {
  var msg = data.message;
  if (msg && msg.layout && msg.layout.name) {
    var layout = 'layout:' + msg.layout.name;
    if (events.hasSubscription(layout)) {
      setTimeout(function() {
        events.publish(layout, data);
        if (debug)
          console.log('Call to ' + layout);
      }, 10);
    } else {
      if (debug)
        console.warn('Nothing is subscribed to ' + layout);
      if (tryIt)
        events.publish('try-it-layout-subscription', layout);
    }
  }
}

function _intents(data) {
  var msg = data.message;
  var getIntentField = function(msg) {
    if (!msg || !msg.log_data)
      return false;
    if (msg.log_data.wva_top_intent && typeof msg.log_data.wva_top_intent === 'object' && msg.log_data.wva_top_intent.intent)
      return msg.log_data.wva_top_intent.intent;
    else if (msg.log_data.intents && msg.log_data.intents.length > 0 && msg.log_data.intents[0].intent)
      return msg.log_data.intents[0].intent;
    else
      return false;
  };
  var intent = getIntentField(msg);
  if (msg && msg.log_data && msg.log_data.show_intent_link === true && intent) {
    events.publish('try-it-get-intent-data', {
      element: data.intentElement,
      intent: intent
    });
  }
}

function receive(data) {
  setTimeout(function() {
    _receive(data);
  }, 0);
}

function _receive(data) {
  var parsed = (typeof data === 'string') ? { message: { text: data } } : data;
  parsed = BotSDK.parse(parsed);
  var current = state.get();
  state.set({
    messages: [].concat(current.messages || [], parsed),
    errorCount: 0
  });
  var msg = parsed.message;
  var msgText = (msg && msg.text) ? ((Array.isArray(msg.text) && msg.text.length > 0) ? msg.text : [msg.text]) : [''];
  var containers = [];
  var messages = [];
  var layouts = [];
  var intents = [];
  var datas = [];
  var turnElm = document.createElement('div');

  turnElm.classList.add('IBMChat-watson-turn');
  current.chatHolder.appendChild(turnElm);

  for (var i = 0; i < msgText.length; i++) {
    var holder = document.createElement('div');
    var msgData = assign({}, parsed, { uuid: utils.getUUID() });
    holder.classList.add(msgData.uuid);
    holder.innerHTML = templates.receive;
    containers.push(holder.querySelector('.IBMChat-watson-message-container'));
    messages.push(document.createElement('div'));
    layouts.push(document.createElement('div'));
    layouts[i].classList.add('IBMChat-watson-layout');
    intents.push(document.createElement('div'));
    intents[i].classList.add('IBMChat-watson-intent');

    if ((msgText[i] && msgText[i].length > 0) || (msg && msg.layout && msg.layout.name && i === (msgText.length - 1))) {
      var line = document.createElement('div');
      line.classList.add('IBMChat-watson-message-line');
      containers[i].appendChild(line);
      messages[i].classList.add('IBMChat-watson-message');
      utils.writeMessage(messages[i], msgText[i]);
    }

    turnElm.appendChild(holder);

    containers[i].appendChild(messages[i]);
    containers[i].appendChild(intents[i]);
    containers[i].appendChild(layouts[i]);

    msgData.element = containers[i];
    msgData.layoutElement = layouts[i];
    msgData.msgElement = messages[i];
    msgData.intentElement = intents[i];
    datas.push(msgData);

    if (current.tryIt && i === (msgText.length - 1))
      _intents(datas[i]);
    if (msg && msg.layout && ((msg.layout.index !== undefined && msg.layout.index == i) ||(msg.layout.index === undefined && i == (msgText.length - 1))))
      _layouts(datas[i], current.tryIt, current.DEBUG);
    if (i === (msgText.length - 1))
      _actions(datas[i], current.tryIt, current.DEBUG);
  }

}

module.exports = receive;

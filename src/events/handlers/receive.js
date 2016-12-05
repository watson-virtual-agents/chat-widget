/*
* (C) Copyright IBM Corp. 2016. All Rights Reserved.
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
  events.publish('disable-loading');
  events.publish('focus-input');
  setTimeout(function() {
    events.publish('scroll-to-bottom');
  }, 20);
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

function receive(data) {
  var parsed = (typeof data === 'string') ? { message: { text: data } } : data;
  var current = state.getState();
  state.setState({
    messages: [].concat(current.messages || [], parsed),
    hasError: false
  });
  var msg = parsed.message;
  var msgText = (msg && msg.text) ? ((Array.isArray(msg.text) && msg.text.length > 0) ? msg.text : [msg.text]) : [''];
  var containers = [];
  var messages = [];
  var layouts = [];
  var datas = [];
  for (var i = 0; i < msgText.length; i++) {
    var holder = document.createElement('div');
    var msgData = assign({}, parsed, { uuid: utils.getUUID() });
    holder.classList.add(msgData.uuid);
    holder.innerHTML = templates.receive;
    containers.push(holder.querySelector('.IBMChat-watson-message-container'));
    messages.push(document.createElement('div'));
    layouts.push(document.createElement('div'));
    layouts[i].classList.add('IBMChat-watson-layout');
    if ((msgText[i] && msgText[i].length > 0) || (msg && msg.layout && msg.layout.name && i === (msgText.length - 1))) {
      messages[i].classList.add('IBMChat-watson-message');
      messages[i].classList.add('IBMChat-watson-message-theme');
      utils.writeMessage(messages[i], msgText[i]);
      current.chatHolder.appendChild(holder);
    }
    containers[i].appendChild(messages[i]);
    containers[i].appendChild(layouts[i]);
    msgData.element = containers[i];
    msgData.layoutElement = layouts[i];
    msgData.msgElement = messages[i];
    datas.push(msgData);
    if (msg && msg.layout && ((msg.layout.index !== undefined && msg.layout.index == i) ||(msg.layout.index === undefined && i == (msgText.length - 1))))
      _layouts(datas[i], current.tryIt, current.DEBUG);
    if (i === (msgText.length - 1))
      _actions(datas[i], current.tryIt, current.DEBUG);
  }

}

module.exports = receive;

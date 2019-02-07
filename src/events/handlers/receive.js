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

var BotSDK = require('../../sdk');
var state = require('../../state');
var utils = require('../../utils');
var assign = require('lodash/assign');
var templates = require('../../templates');
var events = require('../../events');

var activeClassName = 'IBMChat-accent-colors';

function generateButtonHandler(button, option) {
  return function (e) {
    button.classList.add(activeClassName);
    button.classList.add('IBMChat-accent-colors');
    events.publish('send', {
      silent: true,
      text: option.value.input.text
    });
  }
}

function writeMessage(el, message) {
  if (message.response_type == "text") {
    el.innerHTML = message.text;
  } else if (message.response_type == "image") {
    el.innerHTML = '<img src="' + message.source + ' style="max-width: 100%;" />';
  } else if (message.response_type == "option") {
    var html = '';
    var listeners = [];
    message.options.forEach(function(option) {
      var uuid = utils.getUUID();
      var className = 'button' + uuid;
      listeners.push({
        className: className,
        value: option.value
      });
      html += '<p><button class="IBMChat-accent-colors-button ' + className + '">' + option.label + '</button></p>';
    });
    el.innerHTML = html;
    listeners.forEach(function(option) {
      var button = el.querySelector('.' + option.className);
      var handler = generateButtonHandler(button, option);
      button.addEventListener('click', handler.bind(this));
    });
  }
}

function receive(data) {
  setTimeout(function() {
    _receive(data);
  }, 0);
}

function _receive(data) {
  var parsed = (Array.isArray(data)) ? data : [{ response_type: 'text', text: data }];
  parsed = BotSDK.parse(parsed);
  var current = state.get();
  state.set({
    messages: [].concat(current.messages || [], parsed),
    errorCount: 0
  });
 
  var containers = [];
  var messages = [];
  var datas = [];
  var turnElm = document.createElement('div');

  turnElm.classList.add('IBMChat-watson-turn');
  current.chatHolder.appendChild(turnElm);

  for (var i = 0; i < parsed.length; i++) {
    var holder = document.createElement('div');
    var msgData = assign({}, parsed, { uuid: utils.getUUID() });
    holder.classList.add(msgData.uuid);
    holder.innerHTML = templates.receive;
    containers.push(holder.querySelector('.IBMChat-watson-message-container'));
    messages.push(document.createElement('div'));
    var line = document.createElement('div');

    if ((parsed[i] && parsed[i].response_type)) {
      line.classList.add('IBMChat-watson-message-line');
      containers[i].appendChild(line);
      messages[i].classList.add('IBMChat-watson-message');
      writeMessage(messages[i], parsed[i]);
    }

    turnElm.appendChild(holder);

    containers[i].appendChild(messages[i]);

    msgData.element = containers[i];
    msgData.msgElement = messages[i];
    datas.push(msgData);

  }

}

module.exports = receive;

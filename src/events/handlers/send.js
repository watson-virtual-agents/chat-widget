/**
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
var BotSDK = require('@watson-virtual-agent/client-sdk/lib/web');
var utils = require('../../utils');
var assign = require('lodash/assign');
var templates = require('../../templates');

function send(data) {
  if (data && data.text && data.text.length > 0) {
    var current = state.getState();
    addToSendQueue(data);
    if (!current.inProgress)
      agentSend();
  }
}

function addToSendQueue(data) {
  var current = state.getState();
  var queue = current.sendQueue || [];
  var newQueue = queue.slice(0);
  newQueue.push(data);
  state.setState({
    sendQueue: newQueue
  });
}

function always() {
  events.publish('disable-loading');
  state.setState({
    inProgress: false
  });
  if (state.getState().sendQueue.length > 0)
    agentSend();
}

function resolve() {
  always();
}

function reject(e) {
  events.publish('error', arguments);
  console.error(e.stack);
  always();
}

function sendToBot(data) {
  var current = state.getState();
  events.publish('enable-loading');
  events.publish('scroll-to-bottom');
  events.publish('focus-input');
  BotSDK
    .send( current.botID, current.chatID, data.text )
    .then( function(res) {
      events.publish('receive', res);
      resolve();
    })
    .catch( function(e) {
      reject(e);
    });
}

function agentSend() {
  var current = state.getState();
  var newData = assign({}, current.sendQueue[0], { uuid: utils.getUUID() });
  var msg = newData.text || '';
  state.setState({
    inProgress: true,
    sendQueue: current.sendQueue.slice(1, current.sendQueue.length),
    messages: [].concat(current.messages || [], newData)
  });
  current.root.querySelector('.IBMChat-chat-textbox').value = '';
  if (!newData.silent) {
    current.chatHolder.innerHTML += utils.compile(templates.send, { 'data.uuid': newData.uuid });
    current.chatHolder.querySelector('#' + newData.uuid + ' .IBMChat-user-message').textContent = msg;
    events.publish('scroll-to-bottom');
  }
  events.publish('enable-loading');
  if (current.handleInput.default)
    sendToBot(newData);
  else if (current.handleInput.context)
    current.handleInput.callback.bind(current.handleInput.context, newData.text, resolve, reject);
  else
    current.handleInput.callback(newData.text, resolve, reject);
}

module.exports = send;

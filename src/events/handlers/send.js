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

var state = require('../../state');
var events = require('../../events');
var BotSDK = require('@watson-virtual-agent/client-sdk/lib/web');
var utils = require('../../utils');
var assign = require('lodash/assign');
var templates = require('../../templates');

function send(data) {
  setTimeout(function() {
    _send(data);
  }, 0);
}

function _send(data) {
  if (data && data.text && data.text.length > 0) {
    var current = state.get();
    addToSendQueue(data);
    if (!current.inProgress)
      agentSend();
  }
}

function addToSendQueue(data) {
  var current = state.get();
  var queue = current.sendQueue || [];
  var newQueue = queue.slice(0);
  newQueue.push(data);
  state.set({
    sendQueue: newQueue
  });
}

function resolve(sent, received) {
  var current = state.get();
  state.set({
    errorCount: 0,
    sendQueue: current.sendQueue.slice(1, current.sendQueue.length),
    messages: [].concat(current.messages || [], sent),
    inProgress: false
  });
  events.publish('receive', received);
  events.publish('error-clear');
  events.publish('disable-loading');
  events.publish('scroll-to-bottom');
  if (state.get().sendQueue.length > 0)
    agentSend();
}

function reject() {
  events.publish('httpError', arguments);
}

function sendToBot(data, retry) {

  function delay(cb) {
    var newTime = Date.now();
    var diff = newTime - starttime;
    var minWaitTime = minSeconds * 1000;
    var timeout = minWaitTime - diff;
    if (timeout > 0) {
      setTimeout(function() {
        cb();
      }, timeout);
    } else {
      cb();
    }
  }

  var current = state.get();
  var starttime = Date.now();
  var minSeconds = current.minSeconds;

  if (!retry)
    events.publish('enable-loading');
  events.publish('focus-input');

  BotSDK
    .send( current.botID, current.chatID, data.text, current.context )
    .then( function(res) {
      delay(function() {
        resolve(data, res);
      });
    })
    .catch(function(e) {
      delay(function() {
        reject(e);
      });
    });
}

function agentSend(retry) {
  var current = state.get();
  var newData = assign({}, current.sendQueue[0], { uuid: utils.getUUID() });
  var msg = newData.text || '';
  state.set({
    inProgress: true
  });
  current.root.querySelector('.IBMChat-chat-textbox').value = '';
  if (!newData.silent && !retry) {
    current.chatHolder.innerHTML += utils.compile(templates.send, { 'data.uuid': newData.uuid });
    current.chatHolder.querySelector('#' + newData.uuid + ' .IBMChat-user-message').textContent = msg;
    events.publish('scroll-to-bottom');
  }
  if (current.handleInput.default)
    sendToBot(newData, retry);
  else if (current.handleInput.context)
    current.handleInput.callback.bind(current.handleInput.context, newData.text, resolve, reject);
  else
    current.handleInput.callback(newData.text, resolve, reject);
}

function retry() {
  var current = state.get();
  if (current.sendQueue && current.sendQueue.length > 0)
    agentSend(true);
  else
    events.publish('reset');
}

module.exports = {
  send: send,
  retry: retry
};

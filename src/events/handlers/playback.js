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
var utils = require('../../utils');
var events = require('../../events');
var assign = require('lodash/assign');
var templates = require('../../templates');

function start(config) {
  var current;
  var data = {};
  data[config.chatID] = config;
  state.set(data);
  current = state.get()[config.chatID];
  utils.attachPlaybackStyles(config.chatID);
  current.root.className += " chatID-" + current.chatID;
  current.root.innerHTML = templates.start;
  current.container = current.root.querySelector('.IBMChat-chat-container');
  current.chatHolder = current.root.querySelector('.IBMChat-messages');
  current.innerContainer = current.root.querySelector('.IBMChat-inner-container');
  data[config.chatID] = current;
  state.set(data);
  current.chatHolder.style.paddingBottom = '1em';

  window.addEventListener('resize', utils.debounce(function() {
    events.publish('playback-resize-' + config.chatID, config.chatID);
  }, 1000));

  window.addEventListener('orientationchange', function() {
    events.publish('playback-resize-' + config.chatID, config.chatID);
  });


  events.publish('playback-resize-' + config.chatID, config.chatID);
}

function send(obj) {
  var chatID = obj.chatID;
  var data = obj.data;
  if (data.text && data.text.length > 0) {
    var current = state.get()[chatID];
    var newData = assign({}, data, { uuid: utils.getUUID() });
    current.chatHolder.innerHTML += utils.compile(templates.send, { 'data.uuid': newData.uuid });
    current.chatHolder.querySelector('#' + newData.uuid + ' .IBMChat-user-message').textContent = data.text;
    events.publish('playback-scroll-to-bottom-' + chatID, chatID);
  }
}

function receive(obj) {
  var chatID = obj.chatID;
  var data = obj.data;
  var checkData = (typeof data === 'string') ? { message: { text: data } } : data;
  var current = state.get()[chatID];
  data = assign({}, checkData, { uuid: utils.getUUID() });
  var msg = (data.message && data.message.text) ? ((Array.isArray(data.message.text)) ? data.message.text : [data.message.text]) : [''];
  if (msg.length === 0)
    msg = [''];
  for (var i = 0; i < msg.length; i++) {
    var item;
    current.chatHolder.innerHTML += utils.compile(templates.receive, { 'data.uuid': data.uuid });
    item = current.chatHolder.querySelector('.' + data.uuid + ':last-child .IBMChat-watson-message');
    utils.writeMessage(item, msg[i]);
  }
  events.publish('playback-scroll-to-bottom-' + chatID, chatID);
}

function clear(chatID) {
  var current = state.get()[chatID];
  current.chatHolder.innerHTML = '';
}

function destroy(chatID) {
  var current = state.get()[chatID];
  var obj = {};
  obj[chatID] = undefined;
  state.set(obj);
  current.root.innerHTML = current.originalContent;
}

function scrollToBottom(chatID) {
  var current = state.get()[chatID];
  current.chatHolder.scrollTop = current.chatHolder.scrollHeight;
}

function resize(chatID) {
  setTimeout(function() {
    var current = state.get()[chatID];
    if (current.active) {
      current.chatHolder.style.maxHeight = (current.root.getBoundingClientRect().height - current.inputHolder.getBoundingClientRect().height) + 'px';
      current.chatHolder.style.maxWidth = ((current.root.getBoundingClientRect().width > 288) ? current.root.getBoundingClientRect().width : 288) + 'px';
    }
  }, 300);
}

module.exports = {
  start: start,
  send: send,
  receive: receive,
  clear: clear,
  destroy: destroy,
  resize: resize,
  scrollToBottom: scrollToBottom
};

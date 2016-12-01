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
var utils = require('../../utils');
var events = require('../../events');
var templates = require('../../templates');

function start(data) {
  var current;
  state.set(data);
  current = state.get();
  utils.attachStyles();
  current.root.classList.add("chatID-" + current.chatID);
  current.root.innerHTML = templates.start;
  var outerContainer = current.root.querySelector('.IBMChat-outer-container');
  var elements = {
    container: current.root.querySelector('.IBMChat-chat-container'),
    chatHolder: current.root.querySelector('.IBMChat-messages'),
    innerContainer: current.root.querySelector('.IBMChat-inner-container'),
  };
  //TODO: remove if conditional after Dashboard implements new playback
  if (current.playback !== true) {
    var chatBox = document.createElement('div');
    chatBox.classList.add('IBMChat-input-container');
    chatBox.classList.add('IBMChat-input-container-theme');
    chatBox.innerHTML = utils.compile(templates.input, {
      placeholder: 'Enter message...'
    });
    outerContainer.appendChild(chatBox);
    elements.inputHolder = current.root.querySelector('.IBMChat-input-container');
    elements.input = current.root.querySelector('.IBMChat-chat-textbox');
    elements.inputClone = current.root.querySelector('.IBMChat-chat-textbox-clone');
    elements.form = current.root.querySelector('.IBMChat-input-form');
    elements.loader = current.root.querySelector('.IBMChat-input-loading');
    elements.originalInputHeight = window.getComputedStyle(elements.input).getPropertyValue('height').replace('px', '');
    elements.form.addEventListener('submit', function(e) {
      e.preventDefault();
    });

    elements.input.addEventListener('keyup', function(e) {
      if (e.keyCode === 13) {
        events.publish('send-input-message');
        elements.inputClone.innerHTML = '';
        elements.input.style.overflow = 'hidden';
        elements.input.style.height = elements.originalInputHeight + "px";
        state.set({
          inputHeight: elements.originalInputHeight
        });
        events.publish('resize');
      } else {
        events.publish('resize-input');
      }
    });

    elements.input.addEventListener('focus', function() {
      events.publish('resize');
    });

    elements.input.addEventListener('blur', function() {
      events.publish('resize');
    });
  }

  window.addEventListener('resize', utils.debounce(function() {
    events.publish('resize');
  }, 300));

  window.addEventListener('orientationchange', function() {
    events.publish('resize');
  });

  state.setState(elements);
  events.publish('resize-input');
  events.publish('resize');
}

module.exports = start;

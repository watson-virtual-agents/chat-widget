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
var templates = require('../../templates');

function start(data) {
  var current;
  state.set(data);
  current = state.get();
  utils.attachStyles();
  current.root.classList.add("chatID-" + current.chatID);
  current.root.innerHTML = templates.start;
  var addState = {
    outerContainer: current.root.querySelector('.IBMChat-outer-container'),
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
    addState.outerContainer.appendChild(chatBox);
    addState.inputHolder = current.root.querySelector('.IBMChat-input-container');
    addState.input = current.root.querySelector('.IBMChat-chat-textbox');
    addState.inputClone = current.root.querySelector('.IBMChat-chat-textbox-clone');
    addState.form = current.root.querySelector('.IBMChat-input-form');
    addState.loader = current.root.querySelector('.IBMChat-input-loading');
    addState.originalInputHeight = Math.ceil(window.getComputedStyle(addState.input).getPropertyValue('height').replace('px', ''));
    addState.form.addEventListener('submit', function(e) {
      e.preventDefault();
    });
    addState.onResize = function() {
      events.publish('resize');
    };
    if (current.tryIt) {
      addState.chatHolder.addEventListener('click', function(e) {
        if (e.target.dataset && e.target.dataset.intent) {
          var data = e.target.dataset.intent;
          e.preventDefault();
          events.publish('try-it-show-intent', JSON.parse(data));
        }
      });
    }
    addState.input.addEventListener('keyup', function(e) {
      if (e.keyCode === 13) {
        events.publish('send-input-message');
        addState.inputClone.innerHTML = '';
        addState.input.style.overflow = 'hidden';
        addState.input.style.height = addState.originalInputHeight + "px";
        state.set({
          inputHeight: addState.originalInputHeight
        });
        events.publish('resize');
      }
      events.publish('resize');
    });

    addState.input.addEventListener('focus', function() {
      events.publish('resize');
    });

    addState.input.addEventListener('blur', function() {
      events.publish('resize');
    });
  }

  window.addEventListener('resize', utils.debounce(function() {
    events.publish('resize');
  }, 300));

  window.addEventListener('orientationchange', function() {
    events.publish('resize');
  });

  state.setState(addState);
  utils.checkVisibility();
  utils.addResizeListener(current.root, addState.onResize);
  events.publish('resize');
}

module.exports = start;

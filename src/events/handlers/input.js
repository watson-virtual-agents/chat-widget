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
var utils = require('../../utils');
var templates = require('../../templates');

function enableInput() {
  var current = state.get();
  state.set({ disableInput: false });
  current.input.removeAttribute('disabled');
}

function disableInput() {
  var current = state.get();
  state.set({ disableInput: true });
  current.input.setAttribute('disabled', 'disabled');
}

function enableLoadingInput(text) {
  var current, loader;
  setTimeout(function() {
    current = state.get();
    text = text || 'Agent is thinking...';
    loader = current.root.querySelector('.IBMChat-loading-container');
    if (loader)
      current.chatHolder.removeChild(loader);
  }, 0);

  setTimeout(function() {
    current.chatHolder.innerHTML += utils.compile(templates.loading, {
      retryAttempt: 'Attempting to reconnect...',
      retry: 'restart the conversation.'
    });
  }, 0);

  setTimeout(function() {
    loader = current.root.querySelector('.IBMChat-loading');
    var loaderText = current.root.querySelector('.IBMChat-loading-message-text');
    loader.classList.remove('IBMChat-hidden');
    loaderText.textContent = text;
    events.publish('resize');
  }, 0);
}

function disableLoadingInput() {
  setTimeout(function() {
    var current = state.get();
    var loader = current.root.querySelector('.IBMChat-loading-container');

    if (loader)
      current.chatHolder.removeChild(loader);
    events.publish('resize');
  }, 0);
}

function focusInput() {
  var current = state.get();
  current.input.focus();
}

module.exports = {
  enableInput: enableInput,
  disableInput: disableInput,
  enableLoadingInput: enableLoadingInput,
  disableLoadingInput: disableLoadingInput,
  focusInput: focusInput
};

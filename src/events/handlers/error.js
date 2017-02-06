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

var events = require('../../events');
var state = require('../../state');

var errorMessageMap = {
  basic: 'I am sorry, I am having difficulties.'
};

function clearError() {
  setTimeout(function() {
    var current = state.get();
    var loader = current.root.querySelector('.IBMChat-loading-container');
    if (loader)
      current.chatHolder.removeChild(loader);
    state.set({
      errorCount: 0
    });
  }, 0);
}

function httpError(err) {
  setTimeout(function() {
    console.error(err);
    var current = state.get();
    var text = errorMessageMap.basic;
    var errorCount = current.errorCount || 0;
    if (err.status && errorMessageMap[err.status])
      text = errorMessageMap[err.status];
    events.publish('enable-loading', text);
    state.set({
      errorCount: errorCount + 1
    });
    events.publish('enable-retry');
  }, 0);
}

function retry() {
  setTimeout(function() {
    var current = state.get();
    var errorCount = current.errorCount;
    var loaderRetryMessage = current.root.querySelector('.IBMChat-loading-retry-message');
    var loader = current.root.querySelector('.IBMChat-loading');
    var loaderFailure = current.root.querySelector('.IBMChat-loading-failure-message');
    var loaderFailureMessage = current.root.querySelector('.IBMChat-loading-failure-message-text');
    if (errorCount > 4) {
      var loaderFailureMessageText = 'I cannot complete your request. You can try a new request or ';
      if (!current.chatID) {
        loaderFailureMessageText = 'I cannot complete your request. Please ';
        events.publish('disable-input');
      } else {
        events.publish('enable-input');
      }
      loader.classList.add('IBMChat-hidden');
      loaderFailureMessage.innerText = loaderFailureMessageText;
      loaderFailure.classList.remove('IBMChat-hidden');
      events.publish('scroll-to-bottom');
      state.set({
        sendQueue: [],
        inProgress: false
      });
    } else if (errorCount !== 0) {
      loaderFailure.classList.add('IBMChat-hidden');
      loaderRetryMessage.classList.remove('IBMChat-hidden');
      setTimeout(function() {
        events.publish('retry');
      }, 5000);
    }
  }, 0);
}

function tryIt(data) {
  events.publish('layout:error', data);
}

module.exports = {
  httpError: httpError,
  retry: retry,
  clearError: clearError,
  tryIt: tryIt
};

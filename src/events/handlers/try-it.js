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

function _addDataSet(data) {
  var current = state.get();
  var queue = current.intents || [];
  var newQueue = queue.slice(0);
  var count = newQueue.push(data);
  state.set({
    intents: newQueue
  });
  return count - 1;
}

function actionError(action) {
  events.publish('receive', {
    message: {
      layout: {
        name: 'error',
        message: 'A subscription was called to ' + action + '. Nothing is subscribed to this action in the Try-It interface. This is probably due to you using a custom workspace. On your own site, you should have code to handle this action.'
      }
    }
  });
}

function layoutError(layout) {
  events.publish('receive', {
    message: {
      layout: {
        name: 'error',
        message: 'A subscription was called to ' + layout + '. Nothing is subscribed to this layout in the Try-It interface. This is probably due to you using a custom workspace. On your own site, you should have code to handle this layout.'
      }
    }
  });
}

function intent(data) {
  var element = data.element;
  var link = document.createElement('a');
  link.setAttribute('href', 'javascript:void(0)');
  if (data.private) {
    link.textContent = '#' + data.intent;
    link.setAttribute('data-private', data.intent);
  } else {
    link.textContent = data.blueprint.label;
    link.setAttribute('data-intent', _addDataSet(data));
  }
  element.appendChild(link);
}

module.exports = {
  actionError: actionError,
  layoutError: layoutError,
  intent: intent
};

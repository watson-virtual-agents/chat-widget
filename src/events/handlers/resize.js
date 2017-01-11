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

var debugResize = false;
var timeout;

function _getHeight(element) {
  return window.getComputedStyle(element).getPropertyValue('height').replace('px', '');
}

function resize() {
  clearTimeout(timeout);
  timeout = setTimeout(function() {
    timeout = null;
    _resize();
  }, 200);
}

function _resize() {

  var current = state.get();
  if (current.isVisible && current.active) {
    var maxInputPercentage = 35,
      newState = {},
      containerHeight = 0,
      chatHolderHeight = 0,
      inputHolderHeight = 0,
      rootHeight = current.root.clientHeight,
      rootWidth = current.root.clientWidth,
      maxInputHeight = rootHeight * (maxInputPercentage / 100),
      calculatedMaxInputHeight = (maxInputHeight > 96) ? maxInputHeight : 96,
      cloneHeight = (current.input) ? _getHeight(current.inputClone) : null,
      inputHeight = (current.input) ? (_getHeight(current.input)) : 0,
      newInputClone = (current.input && current.input.value && current.input.value.length > 0) ? current.input.value.replace(/\n/g, '<br />') : 'Enter message...',
      currentInputClone = (current.input) ? current.inputClone.innerHTML : null;

    var chatChanged = function() {
      return (newState.rootWidth !== undefined || newState.chatHolderHeight !== undefined || newState.rootHeight !== undefined || newState.isLarge !== undefined || newState.containerHeight !== undefined || newState.inputHeight !== undefined);
    };

    setTimeout(function() {
      if (current.rootHeight !== rootHeight) {
        if (current.DEBUG && debugResize)
          console.log('New Root Height:', rootHeight);
        newState.rootHeight = rootHeight;
      }
      if (current.rootWidth !== rootWidth) {
        if (current.DEBUG && debugResize)
          console.log('New Root Width:', rootWidth);
        newState.rootWidth = rootWidth;
        current.chat.style.width = rootWidth + 'px';
        newState.rootWidth = rootWidth;
      }
    }, 0);

    setTimeout(function() {
      if (current.input) {
        if (currentInputClone !== newInputClone) {
          current.inputClone.innerHTML = newInputClone;
          cloneHeight = _getHeight(current.inputClone);
          /*if (current.DEBUG && debugResize)
            console.log('Clone does not match input:', 'current:', currentInputClone, 'new:', newInputClone, 'height:', cloneHeight);*/
        }

        if (current.inputHeight !== cloneHeight) {
          if (current.DEBUG && debugResize)
            console.log('Input height does not match:', current.inputHeight, inputHeight);
          inputHeight = (calculatedMaxInputHeight > cloneHeight) ? cloneHeight : calculatedMaxInputHeight;
        }

        if (current.inputHeight !== inputHeight) {
          if (current.DEBUG && debugResize)
            console.log('New Input Height:', current.inputHeight, inputHeight);
          current.input.style.height = inputHeight + "px";
          newState.inputHeight = inputHeight;
        }
      }

      if (current.input)
        inputHolderHeight = _getHeight(current.inputHolder);
      chatHolderHeight = _getHeight(current.chatHolder);
      containerHeight = Math.floor(rootHeight - inputHolderHeight);
    }, 0);

    setTimeout(function() {

      if (chatHolderHeight < containerHeight)
        chatHolderHeight = 'auto';
      else
        chatHolderHeight = containerHeight + 'px';

      if (current.containerHeight !== containerHeight) {
        if (current.DEBUG && debugResize)
          console.log('New Container Height:', containerHeight);
        current.innerContainer.style.height = containerHeight + "px";
        newState.containerHeight = containerHeight;
      }

      if (chatHolderHeight !== 'auto' && current.chatHolderHeight !== chatHolderHeight) {
        if (current.DEBUG && debugResize)
          console.log('New Chat Holder Height: ' + chatHolderHeight);
        newState.chatHolderHeight = chatHolderHeight;
        current.chatHolder.style.height = chatHolderHeight;
      }

      if (rootWidth >= 480) {
        current.root.classList.add('IBMChat-isLarge');
        if (!current.isLarge)
          newState.isLarge = true;
      } else {
        current.root.classList.remove('IBMChat-isLarge');
        if (current.isLarge)
          newState.isLarge = false;
      }

      if (chatChanged())
        state.set(newState);

    }, 0);
  }
}

module.exports = resize;

/*
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
var debugResize = false;

function _cloneHeight(inputClone) {
  return Math.ceil(window.getComputedStyle(inputClone).getPropertyValue('height').replace('px', ''));
}

function resize() {
  var current = state.get();
  if (current.isVisible && current.active) {
    setTimeout(function() {
      var maxInputPercentage = 35,
        containerHeight,
        inputHolderHeight,
        chatHolderHeight,
        rootHeight = Math.floor(current.root.clientHeight),
        rootWidth = Math.floor(current.root.clientWidth),
        maxInputHeight = rootHeight * (maxInputPercentage / 100),
        calculatedMaxInputHeight = (maxInputHeight > 96) ? maxInputHeight : 96,
        cloneHeight = _cloneHeight(current.inputClone),
        newState = {},
        inputHeight = (current.input) ? (current.input.getBoundingClientRect().height) : 0,
        newInputClone = (current.input.value && current.input.value.length > 0) ? current.input.value.replace(/\n/g, '<br />') : 'Enter message...',
        currentInputClone = current.inputClone.innerHTML;

      if (current.rootHeight !== rootHeight) {
        if (current.DEBUG && debugResize)
          console.log('New Root Height:', rootHeight);
        newState.rootHeight = rootHeight;
        current.outerContainer.style.height = rootHeight + "px";
      }

      if (current.inputClone && current.inputHeight !== inputHeight) {
        if (current.DEBUG && debugResize)
          console.log('Input height does not match:', current.inputHeight, inputHeight);
        if (currentInputClone !== newInputClone) {
          if (current.DEBUG && debugResize)
            console.log('Clone does not match input:', currentInputClone, newInputClone);
          current.inputClone.innerHTML = newInputClone;
          cloneHeight = _cloneHeight(current.inputClone);
        }
        inputHeight = (calculatedMaxInputHeight > cloneHeight) ? cloneHeight : calculatedMaxInputHeight;
      }

      if (current.inputHeight !== inputHeight) {
        if (current.DEBUG && debugResize)
          console.log('New Input Height:', current.inputHeight, inputHeight);
        current.input.style.height = inputHeight + "px";
        newState.inputHeight = inputHeight;
      }

      inputHolderHeight = Math.ceil(window.getComputedStyle(current.inputHolder).getPropertyValue('height').replace('px', ''));
      chatHolderHeight = Math.floor(window.getComputedStyle(current.chatHolder).getPropertyValue('height').replace('px', ''));
      containerHeight = Math.floor(rootHeight - inputHolderHeight);

      if (current.containerHeight !== containerHeight) {
        if (current.DEBUG && debugResize)
          console.log('New Container Height:', containerHeight);
        current.innerContainer.style.height = containerHeight + "px";
        newState.containerHeight = containerHeight;
      }
      if (chatHolderHeight < containerHeight)
        chatHolderHeight = 'auto';
      else
        chatHolderHeight = containerHeight + 'px';
      if (current.chatHolderHeight !== chatHolderHeight) {
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
      if (current.rootWidth !== rootWidth)
        newState.rootWidth = rootWidth;

      if (newState.rootWidth !== undefined || newState.chatHolderHeight !== undefined || newState.rootHeight !== undefined || newState.isLarge !== undefined || newState.containerHeight !== undefined || newState.inputHeight !== undefined)
        state.set(newState);
    }, 0);
  }
}

module.exports = resize;

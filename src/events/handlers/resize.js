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

function resize() {
  var current = state.getState();
  if (current.isVisible) {
    var maxInputPercentage = 35;
    setTimeout(function() {
      if (current.active && current.inputClone) {
        var cloneHeight;
        var inputHeight;
        var maxInputHeight = (window.getComputedStyle(current.root).getPropertyValue('height').replace('px', '')) * (maxInputPercentage / 100);
        maxInputHeight = (maxInputHeight > 96) ? maxInputHeight : 96;
        current.inputClone.innerHTML = (current.input.value && current.input.value.length > 0) ? current.input.value.replace(/\n/g, '<br />') : 'Enter message...';
        cloneHeight = window.getComputedStyle(current.inputClone).getPropertyValue('height').replace('px', '');
        inputHeight = (maxInputHeight > cloneHeight) ? cloneHeight : maxInputHeight;
        current.input.style.overflow = 'hidden';
        state.set({
          inputHeight: inputHeight
        });
        current.input.style.height = inputHeight + "px";
        current = state.getState();
      }
    }, 50);
    setTimeout(function() {
      current = state.getState();
      if (current.active) {
        var inputHeight = (current.inputHolder) ? (current.inputHolder.getBoundingClientRect().height) : 0;
        current.chatHolder.style.maxHeight = (current.root.getBoundingClientRect().height - inputHeight) + 'px';
        current.chatHolder.style.maxWidth = ((current.root.getBoundingClientRect().width > 288) ? current.root.getBoundingClientRect().width : 288) + 'px';
        if (current.root.getBoundingClientRect().width >= 480)
          current.root.classList.add('IBMChat-isLarge');
        else
          current.root.classList.remove('IBMChat-isLarge');
      }
    }, 100);
  }
}

module.exports = resize;

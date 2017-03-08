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

var requestFrame = (function() {
  var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) {
    return window.setTimeout(fn, 20);
  };
  return function(fn) {
    return raf(fn);
  };
})();

var cancelFrame = (function() {
  var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame ||
         window.clearTimeout;
  return function(id) {
    return cancel(id);
  };
})();

function resizeListener(e) {
  var win = e.target || e.srcElement;
  if (win.__resizeRAF__)
    cancelFrame(win.__resizeRAF__);
  win.__resizeRAF__ = requestFrame(function() {
    var trigger = win.__resizeTrigger__ || {};
    if (trigger.__resizeListeners__ && trigger.__resizeListeners__.length > 0) {
      trigger.__resizeListeners__.forEach(function(fn) {
        if (fn && typeof fn === 'function')
          fn.call(trigger, e);
      });
    }
  });
}

function objectLoad() {
  this.contentDocument.defaultView.__resizeTrigger__ = this.__resizeElement__;
  this.contentDocument.defaultView.addEventListener('resize', resizeListener);
}

var addResizeListener = function(element, fn) {
  if (element) {
    if (!element.__resizeListeners__) {
      element.__resizeListeners__ = [];
      if (document.attachEvent) {
        element.__resizeTrigger__ = element;
        element.attachEvent('onresize', resizeListener);
      } else {
        var obj = element.__resizeTrigger__ = document.createElement('object');
        if (getComputedStyle(element).position == 'static')
          element.classList.add('IBMChat-relative');
        obj.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
        obj.__resizeElement__ = element;
        obj.onload = objectLoad;
        obj.type = 'text/html';
        element.appendChild(obj);
      }
    }
    element.__resizeListeners__.push(fn);
  }
};

var removeResizeListener = function(element, fn) {
  if (element && (element.__resizeListeners__ || element.__resizeTrigger__)) {
    element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
    if (!element.__resizeListeners__.length) {
      if (document.attachEvent) {
        element.detachEvent('onresize', resizeListener);
      } else if (element.__resizeTrigger__.contentDocument) {
        element.__resizeTrigger__.contentDocument.defaultView.removeEventListener('resize', resizeListener);
        element.__resizeTrigger__ = !element.removeChild(element.__resizeTrigger__);
      }
    }
  }
};

module.exports = {
  addResizeListener: addResizeListener,
  removeResizeListener: removeResizeListener
};

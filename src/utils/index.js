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

var state = require('../state');
var events = require('../events');
var styles = require('./styles');
var writeMessage = require('./writeMessage');
var resize = require('./resize');
function _render(el, state) {
  if (el)
    el.setAttribute('class', 'IBMChat-ibm-spinner IBMChat-input-loading IBMChat-' + state + '-spin');
}

var spinner = {
  show: function(el) {
    _render(el, 'init');
  },
  hide: function(el) {
    _render(el, 'end');
  }
};

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function serialize(obj) {
  var str = [];
  for (var p in obj) {
    if (obj.hasOwnProperty(p))
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
  }
  return str.join('&');
}

function compile(str, options) {
  if (options && Object.keys(options).length > 0) {
    Object.keys(options).forEach(function(key) {
      str = str.split('${' + key + '}').join(options[key]);
    });
  }
  return str;
}

function getUUID() {
  var d = new Date().getTime();
  if ( window.performance && typeof window.performance.now === 'function' )
    d += performance.now();
  return 'IBMChat-' + ('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (d + Math.random()*16)%16 | 0;
    d = Math.floor(d/16);
    return (( c == 'x' ? r : (r&0x3|0x8)).toString(16));
  }));
}

function hasClass(element, className) {
  var thatClass = " " + className + " ";
  return ( (" " + element.className + " ").replace(/[\n\t]/g, " ").indexOf(thatClass) > -1 );
}

function appendToEach(appendTo, content) {
  for (var i = 0; i < appendTo.length; i++) {
    var clone = content.cloneNode(true);
    appendTo[i].appendChild(clone);
  }
}

function isVisible(elem) {
  return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
}

var _currentVisibilityCheck;

function checkVisibility() {
  var current = state.get();
  if (_currentVisibilityCheck)
    clearTimeout(_currentVisibilityCheck);
  if (isVisible(current.root)) {
    if (!current.isVisible) {
      state.set({
        isVisible: true
      });
    }
    events.publish('resize');
    _currentVisibilityCheck = setTimeout(checkVisibility, 1000);
  } else {
    if (current.isVisible) {
      state.set({
        isVisible: false
      });
    }
    _currentVisibilityCheck = setTimeout(checkVisibility, 300);
  }
}

module.exports = {
  appendToEach: appendToEach,
  debounce: debounce,
  serialize: serialize,
  hasClass: hasClass,
  getUUID: getUUID,
  attachStyles: styles.attachStyles,
  attachPlaybackStyles: styles.attachPlaybackStyles,
  convertHexToRGBA: styles.convertHexToRGBA,
  normalizeToHex: styles.normalizeToHex,
  spinner: spinner,
  compile: compile,
  writeMessage: writeMessage,
  addResizeListener: resize.addResizeListener,
  removeResizeListener: resize.removeResizeListener,
  isVisible: isVisible,
  checkVisibility: checkVisibility
};

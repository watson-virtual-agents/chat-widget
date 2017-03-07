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
var writeMessage = require('./writeMessage');
var resize = require('./resize');

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
  if (options && Array.isArray(Object.keys(options)) && Object.keys(options).length > 0) {
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
  if (elem)
    return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
  else
    return false;
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

function endVisibilityCheck() {
  if (_currentVisibilityCheck)
    clearTimeout(_currentVisibilityCheck);
}

function checkRoot(el) {
  if (typeof el === 'string' && document.getElementById(el))
    return true;
  else if (el.nodeType && el.nodeType === 1)
    return true;
  else
    return false;
}

function getSDKConfig(config) {
  var SDKconfig = {};
  var baseURL = 'https://api.ibm.com/virtualagent/run/api/v1/';
  SDKconfig.baseURL = config.baseURL || baseURL;
  if (config.withCredentials)
    SDKconfig.withCredentials = config.withCredentials;
  if (config.XIBMClientID)
    SDKconfig.XIBMClientID = config.XIBMClientID;
  if (config.XIBMClientSecret)
    SDKconfig.XIBMClientSecret = config.XIBMClientSecret;
  if (config.userID)
    SDKconfig.userID = config.userID;
  if (config.userLatLon)
    SDKconfig.userLatLon = config.userLatLon;
  return SDKconfig;
}

module.exports = {
  appendToEach: appendToEach,
  debounce: debounce,
  serialize: serialize,
  hasClass: hasClass,
  getUUID: getUUID,
  compile: compile,
  writeMessage: writeMessage,
  addResizeListener: resize.addResizeListener,
  removeResizeListener: resize.removeResizeListener,
  isVisible: isVisible,
  checkVisibility: checkVisibility,
  checkRoot: checkRoot,
  getSDKConfig: getSDKConfig,
  endVisibilityCheck: endVisibilityCheck
};

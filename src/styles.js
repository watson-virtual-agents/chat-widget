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

var state = require('./state');
var css = require('./styles.css');

var defaultStyles = {
  background: 'rgba(61, 61, 61, 1)',
  accentBackground: '#BA8FF7',
  accentText: '#ffffff',
  text: '#ffffff',
  link: '#AF6EE8',
  secondaryBackground: 'rgba(90, 90, 90, 1)',
  secondaryText: 'rgba(247, 247, 247, 1)',
  inputBackground: 'rgba(90, 90, 90, 1)',
  inputText: 'rgba(247, 247, 247, 1)',
  errorBackground: '#e86e6e',
  errorText: '#ffffff',
  fontSize: '15px',
  fontFamily: '"Helvetica Neue",HelveticaNeue,Helvetica,sans-serif'
};

function _attachStylesToDOM(styles, current) {
  var css = document.createElement('style');
  css.type = "text/css";
  css.classList.add('styles-' + current.chatStyleID);
  if (css.styleSheet)
    css.styleSheet.cssText = styles;
  else
    css.appendChild(document.createTextNode(styles));
  document.getElementsByTagName("head")[0].appendChild(css);
}

function _getStyles(current) {
  var containerClass = "." + current.chatStyleID;
  var noOpacityBackgroundArray = _hexToRGBArray(normalizeToHex(current.styles.background));
  var noOpacityBackground = "rgba(" + noOpacityBackgroundArray[0] + "," + noOpacityBackgroundArray[1] + "," + noOpacityBackgroundArray[2] + ",0.8)";
  var opacityBackground = "rgba(" + noOpacityBackgroundArray[0] + "," + noOpacityBackgroundArray[1] + "," + noOpacityBackgroundArray[2] + ",0)";
  var styles = '';
  styles += containerClass + "{ overflow:hidden;}";
  styles += containerClass + " .IBMChat-outer-container {font-size: " + current.styles.fontSize + "; line-height: " + current.styles.fontSize + "; font-family: " + current.styles.fontFamily + ";}";
  styles += containerClass + " .IBMChat-outer-container textarea {font-size: " + current.styles.fontSize + "; font-family: " + current.styles.fontFamily + ";}";
  styles += containerClass + " .IBMChat-default-colors {background-color: " + current.styles.background + "; color: " + current.styles.text + ";}";
  styles += containerClass + " .IBMChat-secondary-colors {background-color: " + current.styles.secondaryBackground + "; color: " + current.styles.secondaryText + ";}";
  styles += containerClass + " .IBMChat-secondary-colors-button {background-color: transparent; border: 1px solid " + current.styles.secondaryBackground + "; color: " + current.styles.secondaryBackground + ";}";
  styles += containerClass + " .IBMChat-accent-colors {background-color: " + current.styles.accentBackground + "; border: 1px solid " + current.styles.accentBackground + "; color: " + current.styles.accentText + ";}";
  styles += containerClass + " .IBMChat-accent-colors-button {background-color: transparent; border: 1px solid " + current.styles.accentBackground + "; color: " + current.styles.accentBackground + ";}";
  styles += containerClass + " .IBMChat-accent-colors-button:hover {background-color: " + current.styles.accentBackground + "; border: 1px solid " + current.styles.accentBackground + "; color: " + current.styles.accentText + ";}";
  styles += containerClass + " .IBMChat-accent-colors-button[disabled]:hover {background-color: transparent; border: 1px solid " + current.styles.accentBackground + "; color: " + current.styles.accentBackground + ";}";
  styles += containerClass + " .IBMChat-error-colors {background-color: " + current.styles.errorBackground + "; color: " + current.styles.errorText + ";}";
  styles += containerClass + " .IBMChat-input-colors {background-color: " + current.styles.inputBackground + "; color: " + current.styles.inputText + "; border-bottom: 1px solid " + current.styles.inputText + ";}";
  styles += containerClass + " .IBMChat-watson-message-line {border-left: 3px solid " + current.styles.accentBackground + ";}";
  styles += containerClass + " a {border: 0; color: " + current.styles.link + "; font-weight: normal; text-decoration: none; font-size:1em;}";
  styles += containerClass + " a:hover, ";
  styles += containerClass + " a:visited, ";
  styles += containerClass + " a:active {color: " + current.styles.link + "; font-weight: normal; text-decoration: underline; font-size:1em;}";
  styles += containerClass + " .IBMChat-chat-textbox {border-bottom: solid 1px " + current.styles.text + ";}";
  styles += containerClass + " .IBMChat-chat-textbox:focus {border-bottom: solid 2px " + current.styles.accentBackground + ";}";
  styles += containerClass + " ::-webkit-input-placeholder {color: " + _placeHolderColor(current.styles.inputText, current.styles.inputBackground) + ";}";
  styles += containerClass + " ::-moz-placeholder {color: " + _placeHolderColor(current.styles.inputText, current.styles.inputBackground) + "; opacity: 1;}";
  styles += containerClass + " :-ms-input-placeholder {color: " + _placeHolderColor(current.styles.inputText, current.styles.inputBackground) + "; opacity: 1;}";
  styles += containerClass + " .IBMChat-ball {fill: " + normalizeToHex(current.styles.accentBackground) + ";}";
  styles += containerClass + " .IBMChat-fade {left: 0; height: 10%; max-height: 32px; position: absolute; top: 0; width: 100%; z-index: 2; background: linear-gradient(to bottom, " + noOpacityBackground + " 0%, " + opacityBackground + " 100%);}";
  styles += containerClass + " .IBMChat-loading-message {color: " + _placeHolderColor(current.styles.inputText, current.styles.inputBackground) + ";}";
  return styles;
}

function _placeHolderColor(text, background) {
  var rgb_beginning = _hexToRGBArray(normalizeToHex(text)),
    rgb_end = _hexToRGBArray(normalizeToHex(background)),
    p = 0.6,
    w = p * 2 - 1,
    w1 = (w + 1) / 2.0,
    w2 = 1 - w1,
    rgb = [
      parseInt(rgb_beginning[0] * w1 + rgb_end[0] * w2),
      parseInt(rgb_beginning[1] * w1 + rgb_end[1] * w2),
      parseInt(rgb_beginning[2] * w1 + rgb_end[2] * w2)
    ];
  var rgba = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
  return normalizeToHex(rgba);
}

function normalizeToHex(color) {
  function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ?
      ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
  }
  if (color.indexOf('#') > -1)
    return color;
  else
    return '#' + rgb2hex(color);
}

function _hexToRGBArray(hex) {
  var rgb = [];
  hex = hex.replace('#', '');
  rgb.push(parseInt(hex.substring(0, 2), 16));
  rgb.push(parseInt(hex.substring(2, 4), 16));
  rgb.push(parseInt(hex.substring(4, 6), 16));
  return rgb;
}

function convertHexToRGBA(hex, opacity) {
  var rgb = _hexToRGBArray(hex),
    r = rgb[0],
    g = rgb[1],
    b = rgb[2];
  return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
}


function attachPlaybackStyles(chatID) {
  var current = state.get()[chatID];
  var styles = _getStyles(current);
  _attachStylesToDOM(styles);
}

function attachStyles() {
  var current = state.get();
  var styles = _getStyles(current);
  _attachStylesToDOM(css, current);
  _attachStylesToDOM(styles, current);
}

function removeStyles(root, chatStyleID, chatID) {
  var elements = document.querySelectorAll('.styles-' + chatStyleID);
  if (elements && elements.length > 0) {
    for (var i = 0; elements.length > i; i++)
      elements[i].parentNode.removeChild(elements[i]);
  }
  if (root)
    root.classList.remove('IBMChat-isLarge', 'IBMChat-relative', chatStyleID, 'chatID-' + chatID);
}

module.exports = {
  defaultStyles: defaultStyles,
  attachStyles: attachStyles,
  removeStyles: removeStyles,
  attachPlaybackStyles: attachPlaybackStyles,
  convertHexToRGBA: convertHexToRGBA,
  normalizeToHex: normalizeToHex
};

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

function _attachStylesToDOM(styles) {
  var css = document.createElement('style');
  css.type = "text/css";
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
  var styles = containerClass + "{\n overflow:hidden;;\n}\n" +
              containerClass + " .IBMChat-outer-container {\n  font-size: " + current.styles.fontSize + ";\n line-height: " + current.styles.fontSize + ";\n  font-family: " + current.styles.fontFamily + ";\n}\n" +
              containerClass + " .IBMChat-outer-container textarea {\n  font-size: " + current.styles.fontSize + ";\n  font-family: " + current.styles.fontFamily + ";\n}\n" +
              containerClass + " .IBMChat-default-colors {\n  background-color: " + current.styles.background + ";\n  color: " + current.styles.text + ";\n}\n" +
              containerClass + " .IBMChat-secondary-colors {\n  background-color: " + current.styles.secondaryBackground + ";\n  color: " + current.styles.secondaryText + ";\n}\n" +
              containerClass + " .IBMChat-secondary-colors-button {\n  background-color: transparent; border: 1px solid " + current.styles.secondaryBackground + ";\n color: " + current.styles.secondaryBackground + ";\n}\n" +
              containerClass + " .IBMChat-accent-colors {\n  background-color: " + current.styles.accentBackground + ";\n  border: 1px solid " + current.styles.accentBackground + ";\n color: " + current.styles.accentText + ";\n}\n" +
              containerClass + " .IBMChat-accent-colors-button {\n  background-color: transparent; border: 1px solid " + current.styles.accentBackground + ";\n color: " + current.styles.accentBackground + ";\n}\n" +
              containerClass + " .IBMChat-accent-colors-button:hover {\n  background-color: " + current.styles.accentBackground + ";\n border: 1px solid " + current.styles.accentBackground + ";\n  color: " + current.styles.accentText + ";\n}\n" +
              containerClass + " .IBMChat-accent-colors-button[disabled]:hover {\n  background-color: transparent; border: 1px solid " + current.styles.accentBackground + ";\n color: " + current.styles.accentBackground + ";\n}\n" +
              containerClass + " .IBMChat-error-colors {\n  background-color: " + current.styles.errorBackground + ";\n  color: " + current.styles.errorText + ";\n}\n" +
              containerClass + " .IBMChat-input-colors {\n  background-color: " + current.styles.inputBackground + ";\n  color: " + current.styles.inputText + ";\n border-bottom: 1px solid " + current.styles.inputText + ";\n}\n" +
              containerClass + " .IBMChat-watson-message-line-theme {\n\tborder-left: 3px solid " + current.styles.accentBackground + ";\n}\n" +
              containerClass + " a {\n\tborder: 0;\n\tcolor: " + current.styles.link + ";\n\tfont-weight: normal;\n\ttext-decoration: none;\n\tfont-size:1em;\n}\n" +
              containerClass + " a:hover,\n" +
              containerClass + " a:visited,\n" +
              containerClass + " a:active {\n\tcolor: " + current.styles.link + ";\n\tfont-weight: normal;\n\ttext-decoration: underline;\n\tfont-size:1em;\n}\n" +
              containerClass + " .IBMChat-chat-textbox-theme {\n  border-bottom: solid 1px " + current.styles.text + ";\n}\n" +
              containerClass + " .IBMChat-chat-textbox-theme:focus {\n  border-bottom: solid 2px " + current.styles.accentBackground + ";\n}\n" +
              containerClass + " .IBMChat-ibm-spinner {\n\tstroke: " + current.styles.accentBackground + ";\n}" +
              containerClass + " ::-webkit-input-placeholder {\n  color: " + _placeHolderColor(current.styles.inputText, current.styles.inputBackground) + ";\n}\n" +
              containerClass + " ::-moz-placeholder {\n  color: " + _placeHolderColor(current.styles.inputText, current.styles.inputBackground) + ";\n  opacity: 1;\n}\n" +
              containerClass + " :-ms-input-placeholder {\n  color: " + _placeHolderColor(current.styles.inputText, current.styles.inputBackground) + ";\n  opacity: 1;\n}\n";
  if (!current.playback)
    styles += containerClass + " .IBMChat-fade {\n\t left: 0;\n\theight: 10%;\n\tmax-height: 32px;\n\tposition: absolute;\n\ttop: 0;\n\twidth: 100%;\n\tz-index: 2;\n\tbackground: linear-gradient(to bottom, " + noOpacityBackground + " 0%, " + opacityBackground + " 100%);\n}\n";
  return styles;
}

function _placeHolderColor(text, background) {
  var rgb_beginning = _hexToRGBArray(normalizeToHex(text)),
    rgb_end = _hexToRGBArray(normalizeToHex(background)),
    p = 0.55,
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
    ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
  }
  if (color.indexOf('#') > -1)
    return color;
  else
    return '#' + rgb2hex(color);
}

function _hexToRGBArray(hex) {
  var rgb = [];
  hex = hex.replace('#','');
  rgb.push(parseInt(hex.substring(0,2), 16));
  rgb.push(parseInt(hex.substring(2,4), 16));
  rgb.push(parseInt(hex.substring(4,6), 16));
  return rgb;
}

function convertHexToRGBA(hex, opacity) {
  var rgb = _hexToRGBArray(hex),
    r = rgb[0],
    g = rgb[1],
    b = rgb[2];
  return 'rgba('+r+','+g+','+b+','+opacity/100+')';
}


function attachPlaybackStyles(chatID) {
  var current = state.get()[chatID];
  var styles = _getStyles(current);
  _attachStylesToDOM(styles);
}

function attachStyles() {
  var current = state.get();
  var styles = _getStyles(current);
  _attachStylesToDOM(styles);
}

module.exports = {
  attachStyles: attachStyles,
  attachPlaybackStyles: attachPlaybackStyles,
  convertHexToRGBA: convertHexToRGBA,
  normalizeToHex: normalizeToHex
};

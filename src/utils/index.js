/**
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

var state = require('../state');
var writeMessage = require('./writeMessage');

function _render(el, state) {
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

function _getStyles(current) {
	var containerClass = ".chatID-" + current.chatID;
	var styles = containerClass + " .IBMChat-default-colors {\n  background-color: " + current.styles.background + ";\n  color: " + current.styles.text + ";\n}\n" +
							containerClass + " .IBMChat-secondary-colors {\n  background-color: " + current.styles.secondaryBackground + ";\n  color: " + current.styles.secondaryText + ";\n}\n" +
							containerClass + " .IBMChat-accent-colors {\n  background-color: " + current.styles.accentBackground + ";\n  color: " + current.styles.accentText + ";\n}\n" +
							containerClass + " .IBMChat-error-colors {\n  background-color: " + current.styles.errorBackground + ";\n  color: " + current.styles.errorText + ";\n}\n" +
							containerClass + " .IBMChat-input-colors {\n  background-color: " + current.styles.inputBackground + ";\n  color: " + current.styles.inputText + ";\n}\n" +
							containerClass + " .IBMChat-watson-message-theme > div {\n\tborder-left: 3px solid " + current.styles.accentBackground + ";\n}\n" +
							containerClass + " a,\n" +
							containerClass + " a:hover,\n" +
							containerClass + " a:visited,\n" +
							containerClass + " a:active {\n\tcolor: " + current.styles.link + ";\n}\n" +
							containerClass + " .IBMChat-chat-textbox-theme {\n  border-bottom: solid 1px " + current.styles.text + ";\n}\n" +
							containerClass + " .IBMChat-chat-textbox-theme:focus {\n  border-bottom: solid 2px " + current.styles.accentBackground + ";\n}\n" +
							containerClass + " .IBMChat-ibm-spinner {\n\tstroke: " + current.styles.accentBackground + ";\n}";
	return styles;
}


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
	const str = [];
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

function _attachStylesToDOM(styles) {
	var css = document.createElement('style');
	css.type = "text/css";
	if (css.styleSheet)
		css.styleSheet.cssText = styles;
	else
		css.appendChild(document.createTextNode(styles));
	document.getElementsByTagName("head")[0].appendChild(css);
}

function attachPlaybackStyles(chatID) {
	var current = state.getState()[chatID];
	var styles = _getStyles(current);
	_attachStylesToDOM(styles);
}

function attachStyles() {
	var current = state.getState();
	var styles = _getStyles(current);
	_attachStylesToDOM(styles);
}

function hasClass(element, className) {
	var thatClass = " " + className + " ";
	return ( (" " + element.className + " ").replace(/[\n\t]/g, " ").indexOf(thatClass) > -1 );
}

module.exports = {
	debounce: debounce,
	serialize: serialize,
	hasClass: hasClass,
	getUUID: getUUID,
	attachStyles: attachStyles,
	attachPlaybackStyles: attachPlaybackStyles,
	spinner: spinner,
	compile: compile,
	writeMessage: writeMessage
};

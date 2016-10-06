(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("IBMChat", [], factory);
	else if(typeof exports === 'object')
		exports["IBMChat"] = factory();
	else
		root["IBMChat"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

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
	
	__webpack_require__(1);
	
	var bootstrap = __webpack_require__(4);
	
	/**
	 * @namespace IBMChat
	 */
	
	module.exports = {
		/**
		 * Generate the chat widget into an element.
		 * @function init
		 * @memberof IBMChat
		 * @param {Object} config
		 * @param {string} config.el - Takes a string representing the ID of an html element to be rendered to OR a selected element
		 * @param {string} config.botID - The unique identifier of your Virtual Agent.
		 * @param {string} config.userID - A hashed non-identifiable (i.e. not a users email address or public user id) unique ID used for tracking in the Engagement Metrics dashboard.
		 * @param {string} config.baseURL=https://api.ibm.com/virtualagent/run/api/v1/ - optional: specifies a different bot hosting server. The most common usecase for this param is to point the widget to a server that will add X-IBM-Client-Id and X-IBM-Client-Secret headers to the request.
		 * @param {string} config.XIBMClientID - optional: Your IBMClientID... this should not be made public in a public environment. Including this will add X-IBM-Client-Id as a header to your request.
		 * @param {string} config.XIBMClientSecret - optional: Your IBMClientSecret... this should not be made public in a public environment. Including this will add X-IBM-Client-Secret as a header to your request.
		 * @param {Function} config.errorHandler - optional: A function that takes an error object as a param if there is a problem with communicating with your Virtual Agent. By default, if an error is received, the user is escalated to a live agent. You may, however, want to handle some errors differently (401 for instance)
		 * @param {Object} config.errorHandlerContext - optional: A "this" value for the errorHanlder.
		 * @param {Object} config.styles - optional: Override default styling.
		 * @param {string} config.styles.background=rgba(61, 61, 61, 1) - optional: rgba(X, X, X, X) or hex code for background color
		 * @param {string} config.styles.text=rgba(255, 255, 255, 1) - optional: rgba(X, X, X, X) or hex code for main text color
		 * @param {string} config.styles.link=rgba(255, 255, 255, 1) - optional: rgba(X, X, X, X) or hex code for color of links in text
		 * @param {string} config.styles.secondaryBackground=rgba(70, 70, 70, 1) - optional: rgba(X, X, X, X) or hex code for background color of chat bubbles and other secondary info
		 * @param {string} config.styles.secondaryText=rgba(247, 247, 247, 1) - optional: rgba(X, X, X, X) or hex code for color of chat bubble text and other secondary info
		 * @param {string} config.styles.inputBackground=rgba(70, 70, 70, 1) - optional: rgba(X, X, X, X) or hex code for background color of input elements in forms
		 * @param {string} config.styles.inputText=rgba(247, 247, 247, 1) - optional: rgba(X, X, X, X) or hex code for color of input text in forms
		 * @param {string} config.styles.accentText=rgba(255, 255, 255, 1) - optional: rgba(X, X, X, X) or hex code for text colors to be used in conjunction with accentBackground i.e. button text
		 * @param {string} config.styles.accentBackground=rgba(175, 110, 232, 1) - optional: rgba(X, X, X, X) or hex code for accent colors used by the chat application i.e. buttons
		 * @example
		 * IBMChat.init({
		 *  el: 'my_div',
		 *  botID: 'xxxxxxxxxxxxxx'
		 *  styles: {
		 *    background: "#000000"
		 *  }
		 * }).then(function(){
		 *     console.log('initialize');
		 * });
		 * //or
		 * var el = document.querySelector('.my-widget-container');
		 * IBMChat.init({
		 *  el: el,
		 *  botID: 'xxxxxxxxxxxxxx'
		 *  styles: {
		 *    background: "#000000"
		 *  }
		 * }).then(function(){
		 *     console.log('initialize');
		 * });
		 * @returns {Promise} Returns: A promise so you can call functions after the widget has been initialized.
		 */
		init: bootstrap.init,
		/**
		 * Restart the chat widget. The same chat widget is rendered in the same html element as was specified in the init method.
		 * @function restart
		 * @memberof IBMChat
		 * @example
		 * IBMChat.restart().then(function(){
		 *     console.log('restarted');
		 * });
		 * @returns {Promise} Returns: A promise so you can call functions after the widget has been initialized.
		 */
		restart: bootstrap.restart,
		/**
		 * Destroy the chat widget and restore the original HTML content. Useful if the chat widget is displayed in a modal, for example, and you want it to go away when the modal is closed.
		 * @function destroy
		 * @memberof IBMChat
		 * @example
		 * IBMChat.destroy().then(function(){
		 *     console.log('destroyed');
		 * });
		 * @returns {Promise} Returns: A promise so you can call functions after the widget has been destroyed.
		 */
		destroy: bootstrap.destroy,
	
		/**
		 * Send a message to the chat widget from outside the chat widget. This message will be displayed in the interface.
		 * @function send
		 * @memberof IBMChat
		 * @param {string} message - A message you want to send to the chat widget.
		 * @example
		 * IBMChat.send('Hello world.');
		 */
		send: bootstrap.send,
	
		/**
		 * Mock receiving a message to the chat widget from outside the chat widget.
		 * @function receive
		 * @memberof IBMChat
		 * @param {string} message - A message you want to show as received in the chat widget.
		 * @example
		 * IBMChat.receive('Hello world.');
		 */
		receive: bootstrap.receive,
	
		/**
		 * Send a message to the chat widget from outside the chat widget. This message will be displayed in the interface, but will not actually get sent to the server.
		 * @function sendMock
		 * @memberof IBMChat
		 * @param {string} message - A message you want to pretend to send to the chat widget.
		 * @example
		 * IBMChat.sendMock('Hello world.');
		 */
		sendMock: bootstrap.sendMock,
	
		/**
		 * Send a message to the chat widget from outside the chat widget. This message will NOT be displayed in the interface.
		 * @function sendSilently
		 * @memberof IBMChat
		 * @param {string} message - A message you want to send to the chat widget, but not de displayed in the interface.
		 * @example
		 * IBMChat.sendSilently('Hello world.');
		 */
		sendSilently: bootstrap.sendSilently,
	
		/**
		 * Register a custom layout with the chat widget. Call registerLayout() before you call init().
		 * @function registerLayout
		 * @memberof IBMChat
		 * @param {string} layout - The name of the layout your bot will provide when it is triggered to render a layout.
		 * @param {function} init - A function that runs one time, when the chat widget is bootstrapped. Be sure to subscribe to the "layout:YOUR_LAYOUT_NAME" event in this function.
		 * @example
		 * var PlumberBrothers = require('../plumber-brothers-game');
		 * var config = {};
		 *
		 * function initGame() {
		 *   IBMChat.subscribe('layout:plumber-brothers-game', function(obj) {
		 *     var uuid = obj.uuid;
		 *     var parentElement = obj.element;
		 *     var layoutElement = obj.layoutElement;
		 *     var msgElement = obj.msgElement;
		 *     var message = obj.message;
		 *     var data = obj.data;
		 *     msgElement.textContent = 'Loading Plumber Brothers!';
		 *     var brothers = new PlumberBrothers();
		 *     brothers.render(layoutElement, data).then(function() {
		 *       msgElement.textContent = 'Enjoy your game of Plumber Brothers!';
		 *     });
		 *   }
		 * });
		 *
		 * IBMChat.registerLayout('plumber-brothers-game', initGame);
		 * IBMChat.init(config);
		 */
		registerLayout: bootstrap.registerLayout,
	
		/**
		 * Set focus to the chat text box. Useful if you want users to be able to just start typing into the text box without having to click in the text box first to set focus.
		 * @function focusInput
		 * @memberof IBMChat
		 * @example
		 * IBMChat.focusInput();
		 */
	
		focusInput: bootstrap.focusInput,
		/**
		 * Prevent users from submitting messages in the chat text box. Useful when you want the user to interact with a layout instead.
		 * @function disableInput
		 * @memberof IBMChat
		 * @example
		 * IBMChat.disableInput();
		 */
		disableInput: bootstrap.disableInput,
	
		/**
		 * Enable users to submit messages in the chat text box. Useful when you want users to be able to return to adding messages to the chat text box after interacting with a layout.
		 * @function enableInput
		 * @memberof IBMChat
		 * @example
		 * IBMChat.enableInput();
		 */
		enableInput: bootstrap.enableInput,
	
		/**
		 * Subscribe to an IBMChat event.
		 * @function subscribe
		 * @memberof IBMChat
		 * @param {string} eventName - Takes a string representing the name of the event
		 * @param {function} callback - function to run when event is called
		 * @param context - optional: value of "this" in the function
		 * @example
		 * IBMChat.subscribe('the-end-of-the-world', function(message) {
		 *   console.log(message);
		 * });
		 */
		subscribe: bootstrap.subscribe,
		/**
		 * Publish an IBMChat event.
		 * @function publish
		 * @memberof IBMChat
		 * @param {string} eventName - A string that represents the name of the event data
		 * @param data - Data to pass to the callback function of any subscribed functions. Accepts any data type.
		 * @example
		 * IBMChat.publish('the-end-of-the-world', 'panic!');
		 */
		publish: bootstrap.publish,
	
		/**
		 * @namespace profile
		 * @memberof IBMChat
		 */
		profile: {
			/**
			* Get an item from the user profile based on key.
			* @memberof IBMChat.profile
			* @function get
			* @param {string} key - The named key of the value you are accessing.
			* @example
			* IBMChat.profile.get('first_name');
			* @returns {Any} Returns: the value of the key in the profile map.
			*/
			get: bootstrap.profile.get,
			/**
			* Set an item from the user profile based on key.
			* @memberof IBMChat.profile
			* @function set
			* @param {string} key - The named key of the value you are setting.
			* @param {string} value - The value you are setting.
			* @returns {Object} Returns: An instance of profile for chaining.
			* @example
			* IBMChat.profile.set('first_name', 'john');
			*/
			set: bootstrap.profile.set,
			/**
			* See if an item from the user profile exists based on key.
			* @memberof IBMChat.profile
			* @function has
			* @param {string} key - The named key of the value you are checking the existance of.
			* @example
			* IBMChat.profile.has('first_name');
			* @returns {Boolean} Returns: Boolean indicating if the key exists.
			*/
			has: bootstrap.profile.has,
			/**
			* Clear the entire user profile.
			* @memberof IBMChat.profile
			* @function clear
			* @returns {Object} Returns: An instance of profile for chaining.
			* @example
			* IBMChat.profile.clear();
			*/
			clear: bootstrap.profile.clear,
			/**
			* Delete an item from the user profile based on key.
			* @memberof IBMChat.profile
			* @function delete
			* @returns {Object} Returns: An instance of profile for chaining.
			* @param {string} key - The named key of the value you are deleting.
			* @example
			* IBMChat.profile.delete('first_name');
			*/
			delete: bootstrap.profile.delete,
			/**
			* Iterate over the profile.
			* @memberof IBMChat.profile
			* @function forEach
			* @param {function} callback - The function you are calling on each item in the profile object. This function is passed key as the first argument and value as the second argument.
			* @param {Object} this - (optional) The context you wish to call the callback in.
			* @returns {Object} Returns: An instance of profile for chaining.
			* @example
			* IBMChat.profile.forEach(function(key, value) {
			*   console.log(key, value);
			* });
			*/
			forEach: bootstrap.profile.forEach
		},
	
		/**
		 * @ignore
		 */
		currentSubscriptions: bootstrap.currentSubscriptions,
		/**
		 * @ignore
		 */
		debug: bootstrap.debug
	};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(3)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/raw-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../node_modules/raw-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = "/**\n* (C) Copyright IBM Corp. 2016. All Rights Reserved.\n*\n* Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this file except\n* in compliance with the License. You may obtain a copy of the License at\n*\n* http://www.apache.org/licenses/LICENSE-2.0\n*\n* Unless required by applicable law or agreed to in writing, software distributed under the License\n* is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express\n* or implied. See the License for the specific language governing permissions and limitations under\n* the License.\n*/\n\n.IBMChat-outer-container {\n\tmax-width: 768px;\n  min-width: 288px;\n  margin: 0 auto 0 auto;\n  border: none;\n\tmin-height:100px;\n  height: 100%;\n  box-sizing: border-box;\n\tpadding:0;\n\tdisplay:table;\n\twidth:100%;\n\ttext-align: left;\n}\n\n\n/* Agent Component */\n\n.IBMChat-inner-container {\n\tdisplay:table-cell;\n\theight:100%;\n\tmargin: 0;\n\tpadding: 0 8px 0 8px;\n\tvertical-align: bottom;\n}\n\n/* Chat Component */\n\n.IBMChat-chat-container {\n\tdisplay:table-row;\n\tmargin: 0;\n\tpadding:\n}\n\n/* Messages Component */\n\n.IBMChat-messages {\n\toverflow-y: auto;\n\toverflow-x: hidden;\n\theight:auto;\n}\n\n.IBMChat-messages > div .IBMChat-watson-layout {\n\topacity:0.8;\n}\n\n.IBMChat-messages > div:last-child .IBMChat-watson-layout {\n\topacity:1;\n}\n\n.IBMChat-messages label {\n\tdisplay:block;\n\tfont-weight:bold;\n\ttext-transform: capitalize;\n\tpadding-bottom:0.25em;\n}\n\n.IBMChat-messages input {\n\tborder-radius: 0;\n\tborder: 0;\n\tpadding:0.25em;\n}\n\n.IBMChat-messages button {\n\tbackground: none;\n\tborder: 0;\n\tcolor: inherit;\n\tfont: inherit;\n\tline-height: normal;\n\toverflow: visible;\n\tpadding: 0;\n\t-webkit-appearance: button; /* for input */\n\t-webkit-user-select: none; /* for button */\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tborder-radius: 2em;\n\tcursor: pointer;\n\tline-height: 2.5em;\n\tmargin:0;\n}\n\n.IBMChat-messages button[disabled=\"true\"] {\n\tcursor: default;\n  opacity:.8;\n}\n\n.IBMChat-messages button::-moz-focus-inner {\n\tborder: 0;\n\tpadding: 0;\n}\n\n/* WatsonMessage Component */\n\n.IBMChat-watson-message-container {\n\tmargin: 1em 0 1em 0;\n}\n\n.IBMChat-watson-message {\n\tmargin-right:2em;\n\tpadding: 0.1em;\n\tpadding-left: 1em;\n}\n\n.IBMChat-watson-layout {\n\tmargin: 0 1em 0 1em;\n}\n\n/* UserMessage Component */\n\n.IBMChat-user-message-container {\n  margin: 1em 0 1em 2em;\n}\n\n.IBMChat-user-message {\n  padding:1em;\n\tmargin:0 1em 0 0;\n\tborder-radius: 0.5em;\n}\n\n/* Input Component */\n\n.IBMChat-input-container {\n\tdisplay:table-row;\n\theight:72px;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n.IBMChat-input-form {\n\tdisplay:table-cell;\n\tposition:relative;\n\theight: 24px;\n\tpadding:24px 24px 0 24px;\n}\n\n.IBMChat-chat-textbox {\n  border: none;\n\tborder-radius: 0;\n  color: inherit;\n  background: transparent;\n  font-size:1em;\n  margin:0;\n  padding:0 0 3px 0;\n  width:100%;\n}\n\n.IBMChat-chat-textbox[disabled='disabled'] {\n\topacity:0.5;\n}\n\n.IBMChat-input-form ::-webkit-input-placeholder {\n\topacity:1;\n}\n\n.IBMChat-chat-textbox:focus {\n  outline: none;\n  padding:0 0 2px 0;\n}\n\n/* Spinner */\n.IBMChat-input-loading {\n\tz-index: 2;\n\tposition:absolute;\n\tright: 16px;\n\ttop: 15px;\n\theight:32px;\n\twidth:32px;\n}\n\n.IBMChat-ibm-spinner-start {\n\topacity:0;\n}\n\n.IBMChat-ibm-spinner {\n\tfill: transparent;\n\tstroke-width: 3;\n\tstroke-linecap: \"butt\";\n\tstroke-dasharray: 1;\n\tstroke-dashoffset: 1;\n}\n\n/* initial rotation and stroke animation and infinite rotation*/\n.IBMChat-init-spin {\n\tanimation: init-rotate 150ms linear forwards, rotate-loop 2000ms linear infinite;\n}\n\n.IBMChat-init-spin svg circle {\n\tanimation: init-stroke 1000ms linear;\n}\n\n.IBMChat-end-spin svg circle {\n\tdisplay:none;\n}\n\n/* initial rotation */\n\n@keyframes init-rotate {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t100% {\n\t\ttransform: rotate(180deg);\n\t}\n}\n\n/* looping rotation */\n@keyframes rotate-loop {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n/* initial stroke animation */\n\n@keyframes init-stroke {\n\t0% {\n\t\topacity: 0;\n\t}\n\t100% {\n\t\topacity: 1;\n\t}\n}\n"

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var eventHandlers = __webpack_require__(5);
	var layouts = __webpack_require__(46);
	var events = __webpack_require__(33);
	var BotSDK = __webpack_require__(39);
	var state = __webpack_require__(7);
	var profile = __webpack_require__(70);
	var Promise = __webpack_require__(78).Promise;
	var assign = __webpack_require__(8);
	var defaultStyles = __webpack_require__(83);
	
	var layoutInit = {};
	var registeredLayouts = [];
	
	function registerEvents(playback) {
		events.subscribe('start', eventHandlers.start);
		events.subscribe('resize', eventHandlers.resize);
		events.subscribe('disable-input', eventHandlers.input.disableInput);
		events.subscribe('enable-loading', eventHandlers.input.enableLoadingInput);
		events.subscribe('disable-loading', eventHandlers.input.disableLoadingInput);
		events.subscribe('scroll-to-bottom', eventHandlers.scrollToBottom);
		events.subscribe('receive', eventHandlers.receive);
		if (playback === true) {
			events.subscribe('send', eventHandlers.sendMock);
		} else {
			events.subscribe('send', eventHandlers.send);
			events.subscribe('send-input-message', eventHandlers.sendInputMessage);
			events.subscribe('enable-input', eventHandlers.input.enableInput);
			events.subscribe('focus-input', eventHandlers.input.focusInput);
			events.subscribe('send-mock', eventHandlers.sendMock);
		}
	}
	
	function registerLayouts() {
		registerLayout('show-locations', layouts.showLocations.init, true);
		registerLayout('choose-location-type', layouts.chooseLocationType.init, true);
		registerLayout('request-geolocation-latlong', layouts.requestGeolocationLatlong.init, true);
		registerLayout('choose', layouts.choose.init, true);
		registerLayout('form', layouts.form.init, true);
		registerLayout('cc-validator', layouts.creditCard.init, true);
		for (var i = 0; i < registeredLayouts.length; i++)
			layoutInit[registeredLayouts[i]]();
	}
	
	function init(config) {
		var root = (typeof config.el === 'string') ? document.getElementById(config.el) : config.el;
		var SDKconfig = {};
		SDKconfig.baseURL = config.baseURL || 'https://api.ibm.com/virtualagent/run/api/v1/';
		if (config.withCredentials)
			SDKconfig.withCredentials = config.withCredentials;
		if (config.XIBMClientID)
			SDKconfig.XIBMClientID = config.XIBMClientID;
		if (config.XIBMClientSecret)
			SDKconfig.XIBMClientSecret = config.XIBMClientSecret;
		if (config.userID)
			SDKconfig.userID = config.userID;
			/*
		// TODO: , allow entering in old chatID
		const sessionChatID = window.sessionStorage.getItem('IBMChatChatID') || null;
		if (chatID || sessionChatID)
			config.chatID = (chatID) ? chatID : sessionChatID;
		*/
		return new Promise(function(resolve, reject) {
			var current = state.getState();
			if (current.active === true) {
				resolve();
				return;
			}
			if (root) {
				if (config.errorHandler)
					events.subscribe('error', config.errorHandler, config.errorHandlerContext);
				else
					events.subscribe('error', eventHandlers.error);
	
				if (config.playback === true) {
					registerEvents(true);
					registerLayouts();
					events.publish('start', {
						active: true,
						root: root,
						mapsServer: ("https://dd1-i-serve-maps.mybluemix.net") || 'https://dp1-i-serve-maps.mybluemix.net/',
						styles: assign({}, defaultStyles, config.styles),
						originalContent: root.innerHTML,
						chatId: '42',
						playback: true
					});
					resolve();
				} else if (config.botID) {
					BotSDK
						.configure( SDKconfig )
						.start( config.botID )
						.then( function(res) {
							var chatID = res.chatID;
							window.sessionStorage.setItem('IBMChatChatID', chatID);
							registerLayouts();
							registerEvents();
							events.publish('start', {
								active: true,
								root: root,
								mapsServer: ("https://dd1-i-serve-maps.mybluemix.net") || 'https://dp1-i-serve-maps.mybluemix.net/',
								botID: config.botID,
								chatID: chatID,
								styles: assign({}, defaultStyles, config.styles),
								baseURL: config.baseURL,
								originalContent: root.innerHTML
							});
							events.publish('receive', res);
							resolve();
						})['catch']( function(err) {
							reject(err);
						});
				} else {
					reject({
						error: 'BotID is required!'
					});
				}
			} else {
				reject({
					error: 'Element for chat does not exist!'
				});
			}
		});
	}
	
	function registerLayout(layout, init, defaultSetup) {
		if (registeredLayouts.indexOf(layout) === -1 || !defaultSetup) {
			registeredLayouts.push(layout);
			layoutInit[layout] = init;
		}
	}
	
	function send(message) {
		var current = state.getState();
		if (current.active) {
			events.publish('send', {
				text: message
			});
		}
	}
	
	function receive(message) {
		var current = state.getState();
		if (current.active)
			events.publish('receive', message);
	}
	
	function sendMock(message) {
		var current = state.getState();
		if (current.active) {
			events.publish('send-mock', {
				text: message
			});
		}
	}
	
	function sendSilently(message) {
		var current = state.getState();
		if (current.active) {
			events.publish('send', {
				text: message,
				silent: true
			});
		}
	}
	
	function focusInput() {
		var current = state.getState();
		if (current.active)
			events.publish('focus-input');
	}
	
	function disableInput() {
		var current = state.getState();
		if (current.active)
			events.publish('disable-input');
	}
	
	function enableInput() {
		var current = state.getState();
		if (current.active)
			events.publish('enable-input');
	}
	
	function debug() {
		state.setState({
			DEBUG: true
		});
	}
	
	function destroy() {
		return new Promise(function(resolve, reject) {
			var current = state.getState();
			if (current.root) {
				events.publish('destroy');
				events.destroy(); //remove all events
				current.root.innerHTML = current.originalContent; //restore original content to div
				state.destroyState();
				resolve();
			} else {
				reject('IBMChat has no instance to destroy.');
			}
		});
	}
	
	function restart() {
		return new Promise(function(resolve, reject) {
			var current = state.getState();
			destroy().then(function() {
				init({ el: current.root, botID: current.botID, baseURL: current.baseURL }).then(function() {
					resolve();
				})['catch'](function(e) {
					reject(e);
				});
			})['catch'](function(e) {
				reject(e);
			});
		});
	}
	
	module.exports = {
		profile: profile,
		init: init,
		registerLayout: registerLayout,
		send: send,
		receive: receive,
		sendMock: sendMock,
		sendSilently: sendSilently,
		focusInput: focusInput,
		disableInput: disableInput,
		enableInput: enableInput,
		subscribe: events.subscribe,
		publish: events.publish,
		debug: debug,
		destroy: destroy,
		restart: restart,
		currentSubscriptions: events.currentSubscriptions,
		hasSubscription: events.hasSubscription,
		completeEvent: events.completeEvent
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var start = __webpack_require__(6);
	var resize = __webpack_require__(35);
	var receive = __webpack_require__(36);
	var send = __webpack_require__(38);
	var sendMock = __webpack_require__(41);
	var sendInputMessage = __webpack_require__(42);
	var input = __webpack_require__(43);
	var error = __webpack_require__(44);
	var scrollToBottom = __webpack_require__(45);
	
	module.exports = {
		resize: resize,
		start: start,
		send: send,
		sendMock: sendMock,
		receive: receive,
		input: input,
		error: error,
		scrollToBottom: scrollToBottom,
		sendInputMessage: sendInputMessage
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var state = __webpack_require__(7);
	var utils = __webpack_require__(32);
	var events = __webpack_require__(33);
	var templates = {
		start: __webpack_require__(34)
	};
	function start(data) {
		var current;
		state.setState(data);
		current = state.getState();
		utils.attachStyles();
		current.root.className += " chatID-" + current.chatID;
		current.root.innerHTML = templates.start;
		var elements = {
			container: current.root.querySelector('.IBMChat-chat-container'),
			chatHolder: current.root.querySelector('.IBMChat-messages'),
			innerContainer: current.root.querySelector('.IBMChat-inner-container'),
			input: current.root.querySelector('.IBMChat-chat-textbox'),
			form: current.root.querySelector('.IBMChat-input-form'),
			loader: current.root.querySelector('.IBMChat-input-loading'),
			inputHolder: current.root.querySelector('.IBMChat-input-container')
		};
	
		if (current.playback === true)
			elements.inputHolder.parentNode.removeChild(elements.inputHolder);
	
		state.setState(elements);
		elements.form.addEventListener('submit', function(e) {
			e.preventDefault();
		});
	
		elements.input.addEventListener('keypress', function(e) {
			if (e.keyCode === 13)
				events.publish('send-input-message');
		});
	
		elements.input.addEventListener('focus', function() {
			events.publish('resize');
		});
	
		elements.input.addEventListener('blur', function() {
			events.publish('resize');
		});
	
		window.addEventListener('resize', utils.debounce(function() {
			events.publish('resize');
		}, 1000));
	
		window.addEventListener('orientationchange', function() {
			events.publish('resize');
		});
	
		events.publish('resize');
	}
	
	module.exports = start;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var states = [];
	var state = {};
	var assign = __webpack_require__(8);
	
	function getState() {
		return state;
	}
	function destroyState() {
		state = {};
		setState({});
	}
	
	function setState(updated) {
		state = assign({}, state, updated);
		if (state.DEBUG) {
			states.push(state);
			console.log('STATE HISTORY: ', states);
			console.log('NEW STATE: ', state);
		}
	}
	
	function getStyles() {
		var current = getState();
		return current.styles;
	}
	
	function getProfile() {
		var current = getState();
		return current.profile || {};
	}
	
	function setProfile(data) {
		setState({
			profile: assign({}, getProfile(), data)
		});
	}
	
	module.exports ={
		getState: getState,
		setState: setState,
		destroyState: destroyState,
		getProfile: getProfile,
		setProfile: setProfile,
		getStyles: getStyles
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(9),
	    copyObject = __webpack_require__(11),
	    createAssigner = __webpack_require__(12),
	    isArrayLike = __webpack_require__(16),
	    isPrototype = __webpack_require__(21),
	    keys = __webpack_require__(22);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
	var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');
	
	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assignIn
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assign({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var assign = createAssigner(function(object, source) {
	  if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});
	
	module.exports = assign;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(10);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}
	
	module.exports = assignValue;


/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	module.exports = eq;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(9);
	
	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	
	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;
	
	    assignValue(object, key, newValue === undefined ? source[key] : newValue);
	  }
	  return object;
	}
	
	module.exports = copyObject;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(13),
	    isIterateeCall = __webpack_require__(15);
	
	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;
	
	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;
	
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	module.exports = createAssigner;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(14);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);
	
	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}
	
	module.exports = baseRest;


/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}
	
	module.exports = apply;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(10),
	    isArrayLike = __webpack_require__(16),
	    isIndex = __webpack_require__(20),
	    isObject = __webpack_require__(18);
	
	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}
	
	module.exports = isIterateeCall;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(17),
	    isLength = __webpack_require__(19);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	module.exports = isArrayLike;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 19 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 20 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}
	
	module.exports = isIndex;


/***/ },
/* 21 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	module.exports = isPrototype;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(23),
	    baseKeys = __webpack_require__(29),
	    isArrayLike = __webpack_require__(16);
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	module.exports = keys;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(24),
	    isArguments = __webpack_require__(25),
	    isArray = __webpack_require__(28),
	    isIndex = __webpack_require__(20);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];
	
	  var length = result.length,
	      skipIndexes = !!length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = arrayLikeKeys;


/***/ },
/* 24 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(26);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	module.exports = isArguments;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(16),
	    isObjectLike = __webpack_require__(27);
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	module.exports = isArrayLikeObject;


/***/ },
/* 27 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 28 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(21),
	    nativeKeys = __webpack_require__(30);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeys;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(31);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;


/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var state = __webpack_require__(7);
	
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
	
	function _getStyles() {
		var current = state.getState();
		var containerClass = ".chatID-" + current.chatID;
		var styles = containerClass + " .IBMChat-default-colors {\n  background-color: " + current.styles.background + ";\n  color: " + current.styles.text + ";\n}\n" +
								containerClass + " .IBMChat-secondary-colors {\n  background-color: " + current.styles.secondaryBackground + ";\n  color: " + current.styles.secondaryText + ";\n}\n" +
								containerClass + " .IBMChat-accent-colors {\n  background-color: " + current.styles.accentBackground + ";\n  color: " + current.styles.accentText + ";\n}\n" +
								containerClass + " .IBMChat-input-colors {\n  background-color: " + current.styles.inputBackground + ";\n  color: " + current.styles.inputText + ";\n}\n" +
								containerClass + " .IBMChat-watson-message-theme {\n\tborder-left: 3px solid " + current.styles.accentBackground + ";\n}\n" +
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
	
	function attachStyles() {
		var styles = _getStyles();
		var css = document.createElement('style');
		css.type = "text/css";
		if (css.styleSheet)
			css.styleSheet.cssText = styles;
		else
			css.appendChild(document.createTextNode(styles));
		document.getElementsByTagName("head")[0].appendChild(css);
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
		spinner: spinner,
		compile: compile
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var state = __webpack_require__(7);
	
	var events = [];
	
	function completeEvent(response) {
		switch (response) {
		case true:
			publish('send', {
				message: 'success',
				silent: true
			});
			break;
		case false:
			publish('send', {
				message: 'failure',
				silent: true
			});
			break;
		default:
			publish('send', {
				message: 'cancel',
				silent: true
			});
		}
	}
	
	function destroy() {
		events = [];
	}
	
	function unsubscribe(event, handler, context) {
		if (typeof context === undefined)
			context = handler;
	}
	
	function currentSubscriptions() {
		return events.slice(0);
	}
	
	function hasSubscription(action) {
		var subscriptions = currentSubscriptions();
		for (var i = 0; i < subscriptions.length; i++) {
			var subscription = subscriptions[i];
			if (subscription && subscription.event === action)
				return true;
		}
		return false;
	}
	
	function subscribe(event, handler, context) {
		if (typeof context === undefined)
			context = handler;
		var index = events.push({ event: event, handler: handler.bind(context) }) - 1;
		return {
			remove: function() {
				delete events[index];
			}
		};
	}
	
	function publish(event, data, cb) {
		var current = state.getState();
		var wasSubscription = false;
		for (var i = 0; i < events.length; i++) {
			if (events[i] && events[i].event && events[i].event === event) {
				if (current.DEBUG) {
					wasSubscription = true;
					console.log('Subscription to ' + event + ' was called: ', data);
				}
				events[i].handler.call(undefined, data, cb);
			}
		}
		if (current.DEBUG && event.indexOf('layout') == -1 && !wasSubscription)
			console.warn('Nothing is subscribed to ' + event);
	}
	
	module.exports = {
		destroy: destroy,
		unsubscribe: unsubscribe,
		currentSubscriptions: currentSubscriptions,
		hasSubscription: hasSubscription,
		subscribe: subscribe,
		publish: publish,
		completeEvent: completeEvent
	};


/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "<div class=\"IBMChat-outer-container IBMChat-outer-container-theme IBMChat-default-colors\">\n\t<div class=\"IBMChat-chat-container IBMChat-chat-container-theme\">\n\t\t<div class=\"IBMChat-inner-container IBMChat-inner-container-theme\">\n\t\t\t<div class=\"IBMChat-messages IBMChat-messages-theme\"></div>\n\t\t</div>\n\t</div>\n\t<div class=\"IBMChat-input-container IBMChat-input-container-theme\">\n\t\t<form class=\"IBMChat-input-form IBMChat-input-form-theme\">\n\t\t\t<input aria-labelledby=\"Enter a Message\" type=\"text\" class=\"IBMChat-chat-textbox IBMChat-chat-textbox-theme\" placeholder=\"Enter message...\" />\n\t\t\t<div class=\"IBMChat-ibm-spinner-start IBMChat-input-loading IBMChat-input-loading-theme\">\n\t\t\t\t<svg class=\"IBMChat-ibm-spinner\" width=32 height=32 viewBox=\"-16 -16 32 32\">\n\t\t\t\t\t<circle cx=0 cy=0 r=8 /></svg>\n\t\t\t\t</svg>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n"

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var state = __webpack_require__(7);
	
	function resize() {
		setTimeout(function() {
			var current = state.getState();
			if (current.active) {
				current.chatHolder.style.maxHeight = (current.root.getBoundingClientRect().height - current.inputHolder.getBoundingClientRect().height) + 'px';
				current.chatHolder.style.maxWidth = ((current.root.getBoundingClientRect().width > 288) ? current.root.getBoundingClientRect().width : 288) + 'px';
			}
		}, 300);
	}
	
	module.exports = resize;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var state = __webpack_require__(7);
	var events = __webpack_require__(33);
	var utils = __webpack_require__(32);
	var assign = __webpack_require__(8);
	var templates = {
		receive: __webpack_require__(37)
	};
	
	function writeMessage(element, text) {
		var exp = /(((https?:\/\/)|(www\.))[^\s]+)/gi;
		var linked = text.replace(exp,'|||$1|||');
		var arr = linked.split('|||');
		for (var i = 0; i < arr.length; i++) {
			var child = document.createElement('span');
			var newtext = arr[i].replace(exp, '<a href="$1" target="_blank">$1</a>');
			if (newtext === arr[i])
				child = _addLineEndings(child, newtext);
			else
				child.innerHTML = newtext;
			element.appendChild(child);
		}
	}
	
	function _addLineEndings(el, newtext) {
		var arr = newtext.split('\n');
		if (arr.length === 1) {
			el.textContent = arr[0];
		} else {
			for (var i = 0; i < arr.length; i++) {
				if (arr[i].length > 0) {
					var child = document.createElement('span');
					child.textContent = arr[i];
					el.appendChild(child);
				}
				if (i < arr.length - 1)
					el.appendChild(document.createElement('br'));
			}
		}
		return el;
	}
	
	function _layoutAndActions(debug, data) {
		data.element = document.querySelector('.' + data.uuid + ':last-child');
		data.layoutElement = data.element.querySelector('.IBMChat-watson-layout');
		data.msgElement = data.element.querySelector('.IBMChat-watson-message');
	
		if (data.message && data.message.action && data.message.action.name) {
			var action = 'action:' + data.message.action.name;
			if (events.hasSubscription(action)) {
				events.publish(action, data, events.completeEvent);
				if (debug)
					console.log('Call to ' + action);
			} else if (debug) {
				console.warn('Nothing is subscribed to ' + action);
			}
		}
	
		if (data.message && data.message.layout && data.message.layout.name) {
			var layout = 'layout:' + data.message.layout.name;
			if (events.hasSubscription(layout)) {
				events.publish(layout, data);
				if (debug)
					console.log('Call to ' + layout);
			} else if (debug) {
				console.warn('Nothing is subscribed to ' + layout);
			}
		}
	
		events.publish('disable-loading');
		events.publish('scroll-to-bottom');
		events.publish('focus-input');
	}
	
	function receive(data) {
		var checkData = (typeof data === 'string') ? { message: { text: data } } : data;
		var current = state.getState();
		data = assign({}, checkData, { uuid: utils.getUUID() });
		state.setState({
			messages: [].concat(current.messages || [], data),
			hasError: false
		});
		var msg = (data.message && data.message.text) ? ((Array.isArray(data.message.text)) ? data.message.text : [data.message.text]) : [''];
		if (msg.length === 0)
			msg = [''];
		for (var i = 0; i < msg.length; i++) {
			var item;
			current.chatHolder.innerHTML += utils.compile(templates.receive, { 'data.uuid': data.uuid });
			item = current.chatHolder.querySelector('.' + data.uuid + ':last-child .IBMChat-watson-message');
			writeMessage(item, msg[i]);
			if (i === (msg.length - 1))
				_layoutAndActions(current.DEBUG, data);
		}
	
		/*
		make an option for auto adding aria stuff
		*/
	}
	
	module.exports = receive;


/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${data.uuid}\" class=\"IBMChat-watson-message-container IBMChat-watson-message-container-theme\">\n\t<div class=\"IBMChat-watson-message IBMChat-watson-message-theme\"></div>\n\t<div class=\"IBMChat-watson-layout\"></div>\n</div>\n"

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var state = __webpack_require__(7);
	var events = __webpack_require__(33);
	var BotSDK = __webpack_require__(39);
	var utils = __webpack_require__(32);
	var assign = __webpack_require__(8);
	var templates = {
		send: __webpack_require__(40)
	};
	
	function send(data) {
		if (data.text && data.text.length > 0) {
			var current = state.getState();
			addToSendQueue(data);
			if (!current.inProgress)
				agentSend();
		}
	}
	
	function addToSendQueue(data) {
		var current = state.getState();
		var queue = current.sendQueue || [];
		var newQueue = queue.slice(0);
		newQueue.push(data);
		state.setState({
			sendQueue: newQueue
		});
	}
	
	function agentSend() {
		var current = state.getState();
		events.publish('enable-loading');
		var newData = assign({}, current.sendQueue[0], { uuid: utils.getUUID() });
		state.setState({
			inProgress: true,
			sendQueue: current.sendQueue.slice(0, -1),
			messages: [].concat(current.messages || [], newData)
		});
		BotSDK
			.send( current.botID, current.chatID, newData.text )
			.then( function(res) {
				current = state.getState();
				state.setState({
					inProgress: false
				});
				events.publish('disable-loading');
				events.publish('receive', res);
				if (current.sendQueue.length > 0)
					agentSend();
			})
			.catch( function(e) {
				state.setState({
					inProgress: false
				});
				events.publish('disable-loading');
				events.publish('error', arguments);
				console.error(e.stack);
			});
		current.root.querySelector('.IBMChat-chat-textbox').value = '';
	
		current = state.getState();
		var msg = newData.text || '';
		if (!newData.silent) {
			current.chatHolder.innerHTML += utils.compile(templates.send, { 'data.uuid': newData.uuid });
			current.chatHolder.querySelector('#' + newData.uuid + ' .IBMChat-user-message').textContent = msg;
			events.publish('scroll-to-bottom');
		}
	}
	
	module.exports = send;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define("SDK",[],e):"object"==typeof exports?exports.SDK=e():t.SDK=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(22)},function(t,e){"use strict";function n(t){return"[object Array]"===b.call(t)}function r(t){return"[object ArrayBuffer]"===b.call(t)}function o(t){return"undefined"!=typeof FormData&&t instanceof FormData}function i(t){var e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function u(t){return"string"==typeof t}function s(t){return"number"==typeof t}function c(t){return"undefined"==typeof t}function a(t){return null!==t&&"object"==typeof t}function f(t){return"[object Date]"===b.call(t)}function l(t){return"[object File]"===b.call(t)}function p(t){return"[object Blob]"===b.call(t)}function h(t){return"[object Function]"===b.call(t)}function d(t){return a(t)&&h(t.pipe)}function m(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function v(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function y(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function g(t,e){if(null!==t&&"undefined"!=typeof t)if("object"==typeof t||n(t)||(t=[t]),n(t))for(var r=0,o=t.length;r<o;r++)e.call(null,t[r],r,t);else for(var i in t)t.hasOwnProperty(i)&&e.call(null,t[i],i,t)}function w(){function t(t,n){"object"==typeof e[n]&&"object"==typeof t?e[n]=w(e[n],t):e[n]=t}for(var e={},n=0,r=arguments.length;n<r;n++)g(arguments[n],t);return e}var b=Object.prototype.toString;t.exports={isArray:n,isArrayBuffer:r,isFormData:o,isArrayBufferView:i,isString:u,isNumber:s,isObject:a,isUndefined:c,isDate:f,isFile:l,isBlob:p,isFunction:h,isStream:d,isURLSearchParams:m,isStandardBrowserEnv:y,forEach:g,merge:w,trim:v}},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function u(){m&&h&&(m=!1,h.length?d=h.concat(d):v=-1,d.length&&s())}function s(){if(!m){var t=o(u);m=!0;for(var e=d.length;e;){for(h=d,d=[];++v<e;)h&&h[v].run();v=-1,e=d.length}h=null,m=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function a(){}var f,l,p=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(t){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(t){l=r}}();var h,d=[],m=!1,v=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];d.push(new c(t,e)),1!==d.length||m||o(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=a,p.addListener=a,p.once=a,p.off=a,p.removeListener=a,p.removeAllListeners=a,p.emit=a,p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(t,e,n){(function(e){"use strict";var r=n(1),o=n(12),i=n(18),u=n(4),s=n(16),c="undefined"!=typeof window&&window.btoa||n(11),a=n(19);t.exports=function(t,f,l){var p=l.data,h=l.headers;r.isFormData(p)&&delete h["Content-Type"];var d=new XMLHttpRequest,m="onreadystatechange",v=!1;if("test"===e.env.NODE_ENV||"undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||s(l.url)||(d=new window.XDomainRequest,m="onload",v=!0,d.onprogress=function(){},d.ontimeout=function(){}),l.auth){var y=l.auth.username||"",g=l.auth.password||"";h.Authorization="Basic "+c(y+":"+g)}if(d.open(l.method.toUpperCase(),o(l.url,l.params,l.paramsSerializer),!0),d.timeout=l.timeout,d[m]=function(){if(d&&(4===d.readyState||v)&&0!==d.status){var e="getAllResponseHeaders"in d?i(d.getAllResponseHeaders()):null,n=l.responseType&&"text"!==l.responseType?d.response:d.responseText,r={data:u(n,e,l.transformResponse),status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:e,config:l,request:d};a(t,f,r),d=null}},d.onerror=function(){f(new Error("Network Error")),d=null},d.ontimeout=function(){var t=new Error("timeout of "+l.timeout+"ms exceeded");t.timeout=l.timeout,t.code="ECONNABORTED",f(t),d=null},r.isStandardBrowserEnv()){var w=n(14),b=l.withCredentials||s(l.url)?w.read(l.xsrfCookieName):void 0;b&&(h[l.xsrfHeaderName]=b)}if("setRequestHeader"in d&&r.forEach(h,function(t,e){"undefined"==typeof p&&"content-type"===e.toLowerCase()?delete h[e]:d.setRequestHeader(e,t)}),l.withCredentials&&(d.withCredentials=!0),l.responseType)try{d.responseType=l.responseType}catch(x){if("json"!==d.responseType)throw x}l.progress&&("post"===l.method||"put"===l.method?d.upload.addEventListener("progress",l.progress):"get"===l.method&&d.addEventListener("progress",l.progress)),void 0===p&&(p=null),d.send(p)}}).call(e,n(2))},function(t,e,n){"use strict";var r=n(1);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},function(t,e,n){t.exports=n(6)},function(t,e,n){"use strict";function r(t){this.defaults=i.merge({},t),this.interceptors={request:new s,response:new s}}var o=n(9),i=n(1),u=n(8),s=n(7),c=n(15),a=n(13),f=n(10),l=n(4);r.prototype.request=function(t){"string"==typeof t&&(t=i.merge({url:arguments[0]},arguments[1])),t=i.merge(o,this.defaults,{method:"get"},t),t.baseURL&&!c(t.url)&&(t.url=a(t.baseURL,t.url)),t.withCredentials=t.withCredentials||this.defaults.withCredentials,t.data=l(t.data,t.headers,t.transformRequest),t.headers=i.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),i.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]});var e=[u,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n};var p=new r(o),h=t.exports=f(r.prototype.request,p);h.request=f(r.prototype.request,p),h.Axios=r,h.defaults=p.defaults,h.interceptors=p.interceptors,h.create=function(t){return new r(t)},h.all=function(t){return Promise.all(t)},h.spread=n(20),i.forEach(["delete","get","head"],function(t){r.prototype[t]=function(e,n){return this.request(i.merge(n||{},{method:t,url:e}))},h[t]=f(r.prototype[t],p)}),i.forEach(["post","put","patch"],function(t){r.prototype[t]=function(e,n,r){return this.request(i.merge(r||{},{method:t,url:e,data:n}))},h[t]=f(r.prototype[t],p)})},function(t,e,n){"use strict";function r(){this.handlers=[]}var o=n(1);r.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=r},function(t,e,n){(function(e){"use strict";t.exports=function(t){return new Promise(function(r,o){try{var i;"function"==typeof t.adapter?i=t.adapter:"undefined"!=typeof XMLHttpRequest?i=n(3):"undefined"!=typeof e&&(i=n(3)),"function"==typeof i&&i(r,o,t)}catch(u){o(u)}})}}).call(e,n(2))},function(t,e,n){"use strict";function r(t,e){!o.isUndefined(t)&&o.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var o=n(1),i=n(17),u=/^\)\]\}',?\n/,s={"Content-Type":"application/x-www-form-urlencoded"};t.exports={transformRequest:[function(t,e){return i(e,"Content-Type"),o.isFormData(t)||o.isArrayBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t)?t:o.isArrayBufferView(t)?t.buffer:o.isURLSearchParams(t)?(r(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):o.isObject(t)?(r(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t){t=t.replace(u,"");try{t=JSON.parse(t)}catch(e){}}return t}],headers:{common:{Accept:"application/json, text/plain, */*"},patch:o.merge(s),post:o.merge(s),put:o.merge(s)},timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}}},function(t,e){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},function(t,e){"use strict";function n(){this.message="String contains an invalid character"}function r(t){for(var e,r,i=String(t),u="",s=0,c=o;i.charAt(0|s)||(c="=",s%1);u+=c.charAt(63&e>>8-s%1*8)){if(r=i.charCodeAt(s+=.75),r>255)throw new n;e=e<<8|r}return u}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",t.exports=r},function(t,e,n){"use strict";function r(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(1);t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(o.isURLSearchParams(e))i=e.toString();else{var u=[];o.forEach(e,function(t,e){null!==t&&"undefined"!=typeof t&&(o.isArray(t)&&(e+="[]"),o.isArray(t)||(t=[t]),o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),u.push(r(e)+"="+r(t))}))}),i=u.join("&")}return i&&(t+=(t.indexOf("?")===-1?"?":"&")+i),t}},function(t,e){"use strict";t.exports=function(t,e){return t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,"")}},function(t,e,n){"use strict";var r=n(1);t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,o,i,u){var s=[];s.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),u===!0&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(t,e){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e,n){"use strict";var r=n(1);t.exports=r.isStandardBrowserEnv()?function(){function t(t){var e=t;return n&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(n){var o=r.isString(n)?t(n):n;return o.protocol===e.protocol&&o.host===e.host}}():function(){return function(){return!0}}()},function(t,e,n){"use strict";var r=n(1);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},function(t,e,n){"use strict";var r=n(1);t.exports=function(t){var e,n,o,i={};return t?(r.forEach(t.split("\n"),function(t){o=t.indexOf(":"),e=r.trim(t.substr(0,o)).toLowerCase(),n=r.trim(t.substr(o+1)),e&&(i[e]=i[e]?i[e]+", "+n:n)}),i):i}},function(t,e){"use strict";t.exports=function(t,e,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?e(n):t(n)}},function(t,e){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},function(t,e,n){var r;(function(t,o,i){/*!
		 * @overview es6-promise - a tiny implementation of Promises/A+.
		 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
		 * @license   Licensed under MIT license
		 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
		 * @version   3.2.1
		 */
	(function(){"use strict";function u(t){return"function"==typeof t||"object"==typeof t&&null!==t}function s(t){return"function"==typeof t}function c(t){G=t}function a(t){tt=t}function f(){return function(){t.nextTick(m)}}function l(){return function(){Y(m)}}function p(){var t=0,e=new rt(m),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function h(){var t=new MessageChannel;return t.port1.onmessage=m,function(){t.port2.postMessage(0)}}function d(){return function(){setTimeout(m,1)}}function m(){for(var t=0;t<Z;t+=2){var e=ut[t],n=ut[t+1];e(n),ut[t]=void 0,ut[t+1]=void 0}Z=0}function v(){try{var t=n(27);return Y=t.runOnLoop||t.runOnContext,l()}catch(e){return d()}}function y(t,e){var n=this,r=new this.constructor(w);void 0===r[at]&&M(r);var o=n._state;if(o){var i=arguments[o-1];tt(function(){L(o,r,i,n._result)})}else D(n,r,t,e);return r}function g(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(w);return C(n,t),n}function w(){}function b(){return new TypeError("You cannot resolve a promise with itself")}function x(){return new TypeError("A promises callback cannot return that same promise.")}function _(t){try{return t.then}catch(e){return ht.error=e,ht}}function A(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function E(t,e,n){tt(function(t){var r=!1,o=A(n,e,function(n){r||(r=!0,e!==n?C(t,n):R(t,n))},function(e){r||(r=!0,O(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,O(t,o))},t)}function S(t,e){e._state===lt?R(t,e._result):e._state===pt?O(t,e._result):D(e,void 0,function(e){C(t,e)},function(e){O(t,e)})}function j(t,e,n){e.constructor===t.constructor&&n===st&&constructor.resolve===ct?S(t,e):n===ht?O(t,ht.error):void 0===n?R(t,e):s(n)?E(t,e,n):R(t,e)}function C(t,e){t===e?O(t,b()):u(e)?j(t,e,_(e)):R(t,e)}function T(t){t._onerror&&t._onerror(t._result),B(t)}function R(t,e){t._state===ft&&(t._result=e,t._state=lt,0!==t._subscribers.length&&tt(B,t))}function O(t,e){t._state===ft&&(t._state=pt,t._result=e,tt(T,t))}function D(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+lt]=n,o[i+pt]=r,0===i&&t._state&&tt(B,t)}function B(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r,o,i=t._result,u=0;u<e.length;u+=3)r=e[u],o=e[u+n],r?L(n,r,o,i):o(i);t._subscribers.length=0}}function I(){this.error=null}function q(t,e){try{return t(e)}catch(n){return dt.error=n,dt}}function L(t,e,n,r){var o,i,u,c,a=s(n);if(a){if(o=q(n,r),o===dt?(c=!0,i=o.error,o=null):u=!0,e===o)return void O(e,x())}else o=r,u=!0;e._state!==ft||(a&&u?C(e,o):c?O(e,i):t===lt?R(e,o):t===pt&&O(e,o))}function P(t,e){try{e(function(e){C(t,e)},function(e){O(t,e)})}catch(n){O(t,n)}}function U(){return mt++}function M(t){t[at]=mt++,t._state=void 0,t._result=void 0,t._subscribers=[]}function N(t){return new bt(this,t).promise}function X(t){var e=this;return new e(Q(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){e(new TypeError("You must pass an array to race."))})}function F(t){var e=this,n=new e(w);return O(n,t),n}function k(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function H(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function K(t){this[at]=U(),this._result=this._state=void 0,this._subscribers=[],w!==t&&("function"!=typeof t&&k(),this instanceof K?P(this,t):H())}function V(t,e){this._instanceConstructor=t,this.promise=new t(w),this.promise[at]||M(this.promise),Q(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?R(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&R(this.promise,this._result))):O(this.promise,z())}function z(){return new Error("Array Methods must be provided an Array")}function $(){var t;if("undefined"!=typeof o)t=o;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;n&&"[object Promise]"===Object.prototype.toString.call(n.resolve())&&!n.cast||(t.Promise=wt)}var J;J=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var Y,G,W,Q=J,Z=0,tt=function(t,e){ut[Z]=t,ut[Z+1]=e,Z+=2,2===Z&&(G?G(m):W())},et="undefined"!=typeof window?window:void 0,nt=et||{},rt=nt.MutationObserver||nt.WebKitMutationObserver,ot="undefined"==typeof self&&"undefined"!=typeof t&&"[object process]"==={}.toString.call(t),it="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,ut=new Array(1e3);W=ot?f():rt?p():it?h():void 0===et?v():d();var st=y,ct=g,at=Math.random().toString(36).substring(16),ft=void 0,lt=1,pt=2,ht=new I,dt=new I,mt=0,vt=N,yt=X,gt=F,wt=K;K.all=vt,K.race=yt,K.resolve=ct,K.reject=gt,K._setScheduler=c,K._setAsap=a,K._asap=tt,K.prototype={constructor:K,then:st,"catch":function(t){return this.then(null,t)}};var bt=V;V.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===ft&&n<t;n++)this._eachEntry(e[n],n)},V.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===ct){var o=_(t);if(o===st&&t._state!==ft)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===wt){var i=new n(w);j(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){e(t)}),e)}else this._willSettleAt(r(t),e)},V.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===ft&&(this._remaining--,t===pt?O(r,n):this._result[e]=n),0===this._remaining&&R(r,this._result)},V.prototype._willSettleAt=function(t,e){var n=this;D(t,void 0,function(t){n._settledAt(lt,e,t)},function(t){n._settledAt(pt,e,t)})};var xt=$,_t={Promise:wt,polyfill:xt};n(25).amd?(r=function(){return _t}.call(e,n,e,i),!(void 0!==r&&(i.exports=r))):"undefined"!=typeof i&&i.exports?i.exports=_t:"undefined"!=typeof this&&(this.ES6Promise=_t),xt()}).call(this)}).call(e,n(2),function(){return this}(),n(26)(t))},function(t,e,n){"undefined"==typeof Promise&&n(21).polyfill();var r=n(24),o=n(5),i=n(23),u={baseURL:"https://dev.api.ibm.com/virtualagent/development/api/v1/",timeout:3e4,userID:null,withCredentials:!1,XIBMClientID:!1,XIBMClientSecret:!1},s=o.create(u),c=/\|&(.*?)\|/g,a=function(t){for(var e=0;e<t.text.length;e++){var n=t.text[e].match(c)||[];t.text[e]=n.reduce(function(t,e){const n=e.slice(2,-1),r=i.get(n);return t.replace(e,r)},t.text[e])}return t},f=t.exports={configure:function(t){return r(u,t),s=o.create({baseURL:u.baseURL,timeout:u.timeout,withCredentials:u.withCredentials,headers:u.XIBMClientID&&u.XIBMClientSecret?{"X-IBM-Client-Id":u.XIBMClientID,"X-IBM-Client-Secret":u.XIBMClientSecret}:{}}),f},start:function(t){var e=l(),n={userID:u.userID},r="/bots/"+t+"/dialogs",o={headers:{"X-Request-ID":e}};return s.post(r,n,o).then(function(t){return{chatID:t.data.dialog_id,message:a(t.data.message)}})["catch"](function(t){console.error("Request failed:",e),p(t)})},send:function(t,e,n){var r=l(),o={message:n,userID:u.userID},i="/bots/"+t+"/dialogs/"+e+"/messages",c="message="+encodeURIComponent(n),f={headers:{"X-Request-ID":r}};return s.post(i+"?"+c,o,f).then(function(t){return{message:a(t.data.message)}})["catch"](function(t){console.error("Request failed:",r),p(t)})},profile:{get:i.get,set:i.set,has:i.has,clear:i.clear,"delete":i["delete"],forEach:i.forEach}},l=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,n="x"==t?e:3&e|8;return n.toString(16)})},p=function(t){if(!t.status)throw t;var e=t.status,n=t.statusText,r=new Error(n);throw r.status=e,r}},function(t,e){var n={},r={set:function(t,e){return n[t]=e,r},get:function(t){return n[t]||""},has:function(t){return void 0!==n[t]},clear:function(){return n={},r},"delete":function(t){return delete n[t],r},forEach:function(t,e){return Object.keys(n).forEach(function(r){e?t(r,n[r]).bind(e):t(r,n[r])}),r}};t.exports=r},function(t,e){function n(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function r(t){return function(e){return null==e?void 0:e[t]}}function o(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}function i(t,e){return function(n){return t(e(n))}}function u(t,e,n){var r=t[e];B.call(t,e)&&m(r,n)&&(void 0!==n||e in t)||(t[e]=n)}function s(t,e){return null!=t&&(B.call(t,e)||"object"==typeof t&&e in t&&null===F(t))}function c(t,e){return e=U(void 0===e?t.length-1:e,0),function(){for(var r=arguments,o=-1,i=U(r.length-e,0),u=Array(i);++o<i;)u[o]=r[e+o];o=-1;for(var s=Array(e+1);++o<e;)s[o]=r[o];return s[e]=u,n(t,this,s)}}function a(t,e,n,r){n||(n={});for(var o=-1,i=e.length;++o<i;){var s=e[o],c=r?r(n[s],t[s],s,n,t):void 0;u(n,s,void 0===c?t[s]:c)}return n}function f(t){return c(function(e,n){var r=-1,o=n.length,i=o>1?n[o-1]:void 0,u=o>2?n[2]:void 0;for(i=t.length>3&&"function"==typeof i?(o--,i):void 0,u&&h(n[0],n[1],u)&&(i=o<3?void 0:i,o=1),e=Object(e);++r<o;){var s=n[r];s&&t(e,s,r,i)}return e})}function l(t){var e=t?t.length:void 0;return b(e)&&(k(t)||A(t)||v(t))?o(e,String):null}function p(t,e){return e=null==e?S:e,!!e&&("number"==typeof t||O.test(t))&&t>-1&&t%1==0&&t<e}function h(t,e,n){if(!x(n))return!1;var r=typeof e;return!!("number"==r?y(n)&&p(e,n.length):"string"==r&&e in n)&&m(n[e],t)}function d(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||D;return t===n}function m(t,e){return t===e||t!==t&&e!==e}function v(t){return g(t)&&B.call(t,"callee")&&(!q.call(t,"callee")||I.call(t)==j)}function y(t){return null!=t&&b(X(t))&&!w(t)}function g(t){return _(t)&&y(t)}function w(t){var e=x(t)?I.call(t):"";return e==C||e==T}function b(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=S}function x(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function _(t){return!!t&&"object"==typeof t}function A(t){return"string"==typeof t||!k(t)&&_(t)&&I.call(t)==R}function E(t){var e=d(t);if(!e&&!y(t))return N(t);var n=l(t),r=!!n,o=n||[],i=o.length;for(var u in t)!s(t,u)||r&&("length"==u||p(u,i))||e&&"constructor"==u||o.push(u);return o}var S=9007199254740991,j="[object Arguments]",C="[object Function]",T="[object GeneratorFunction]",R="[object String]",O=/^(?:0|[1-9]\d*)$/,D=Object.prototype,B=D.hasOwnProperty,I=D.toString,q=D.propertyIsEnumerable,L=Object.getPrototypeOf,P=Object.keys,U=Math.max,M=!q.call({valueOf:1},"valueOf"),N=i(P,Object),X=r("length"),F=i(L,Object),k=Array.isArray,H=f(function(t,e){if(M||d(e)||y(e))return void a(e,E(e),t);for(var n in e)B.call(e,n)&&u(t,n,e[n])});t.exports=H},function(t,e){t.exports=function(){throw new Error("define cannot be used indirect")}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e){}])});

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "<div id=\"${data.uuid}\" class=\"IBMChat-user-message-container IBMChat-user-message-container-theme\">\n\t<div class=\"IBMChat-user-message IBMChat-user-message-theme IBMChat-secondary-colors\"></div>\n</div>\n"

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var state = __webpack_require__(7);
	var events = __webpack_require__(33);
	var utils = __webpack_require__(32);
	var assign = __webpack_require__(8);
	var templates = {
		send: __webpack_require__(40)
	};
	
	function sendMock(data) {
		if (data.text && data.text.length > 0) {
			var current = state.getState();
			var newData = assign({}, data, { uuid: utils.getUUID() });
			current.chatHolder.innerHTML += utils.compile(templates.send, { 'data.uuid': newData.uuid });
			current.chatHolder.querySelector('#' + newData.uuid + ' .IBMChat-user-message').textContent = data.text;
			events.publish('scroll-to-bottom');
		}
	}
	
	module.exports = sendMock;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var state = __webpack_require__(7);
	var events = __webpack_require__(33);
	
	function sendInputMessage() {
		var current = state.getState();
		if (!current.inProgress && !current.disableInput) {
			var text = current.root.querySelector('.IBMChat-chat-textbox').value;
			events.publish('send', {
				text: text
			});
			text = '';
		}
	}
	
	module.exports = sendInputMessage;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var state = __webpack_require__(7);
	var utils = __webpack_require__(32);
	
	function enableInput() {
		var current = state.getState();
		var disableInput = (current.disableInput) ? (current.disableInput - 1) :0;
		state.setState({ disableInput: disableInput });
		if (!disableInput)
			current.input.removeAttribute('disabled');
	}
	
	function disableInput() {
		var current = state.getState();
		var disableInput = (current.disableInput) ? (current.disableInput + 1) : 1;
		state.setState({ disableInput: disableInput });
		current.input.setAttribute('disabled', 'disabled');
	}
	
	function enableLoadingInput() {
		var current = state.getState();
		var loading = (current.loading) ? (current.loading + 1) : 1;
		state.setState({
			loading: loading
		});
		utils.spinner.show(current.loader);
	}
	
	function disableLoadingInput() {
		var current = state.getState();
		var loading = (current.loading) ? (current.loading - 1) : 0;
		state.setState({
			loading: loading
		});
		if (loading === 0)
			utils.spinner.hide(current.loader);
	}
	
	function focusInput() {
		var current = state.getState();
		current.input.focus();
	}
	
	module.exports = {
		enableInput: enableInput,
		disableInput: disableInput,
		enableLoadingInput: enableLoadingInput,
		disableLoadingInput: disableLoadingInput,
		focusInput: focusInput
	};


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var events = __webpack_require__(33);
	var state = __webpack_require__(7);
	
	function error(err) {
		var current = state.getState();
		var text = 'I am sorry, I am having difficulties.';
		if (current.hadError)
			text += ' Please try again later.';
		else
			text += ' To speak with a human agent, type "agent".';
		if (err.status)
			text += ' (error: ' + err.status + ')';
		state.setState({
			hadError: true
		});
		events.publish('receive', text);
	}
	
	module.exports = error;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var state = __webpack_require__(7);
	
	function scrollToBottom() {
		var current = state.getState();
		current.chatHolder.scrollTop = current.chatHolder.scrollHeight;
	}
	
	module.exports = scrollToBottom;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var showLocationsLayout = __webpack_require__(47);
	var requestGeolocationLatlongLayout = __webpack_require__(58);
	var chooseLocationTypeLayout = __webpack_require__(59);
	var chooseLayout = __webpack_require__(63);
	var formLayout = __webpack_require__(67);
	var creditCardLayout = __webpack_require__(73);
	
	module.exports = {
		showLocations: showLocationsLayout,
		requestGeolocationLatlong: requestGeolocationLatlongLayout,
		chooseLocationType: chooseLocationTypeLayout,
		choose: chooseLayout,
		creditCard: creditCardLayout,
		form: formLayout
	};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

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
	
	__webpack_require__(48);
	
	var events = __webpack_require__(33);
	var subscribe = events.subscribe;
	var publish = events.publish;
	var state = __webpack_require__(7);
	var getState = state.getState;
	var setState = state.setState;
	var utils = __webpack_require__(32);
	
	var first = true;
	var displayLength = 3;
	var breakpointWidths = ['720', '680', '640', '580', '512', '480', '420', '360', '320', '288', '256'];
	var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	var showLocations = {};
	var locationIDs = [];
	var chatWidth = 748;
	var currentBreakpointKey = 0;
	var pixelRatio = window.devicePixelRatio || 1;
	var ns = 'IBMChat-map';
	
	var templates = {
		base: __webpack_require__(50),
		addLocationsItem: __webpack_require__(51),
		addLocationItem: __webpack_require__(52),
		hoursClosed: __webpack_require__(53),
		hoursOpen: __webpack_require__(54),
		hoursTodayOpen: __webpack_require__(55),
		hoursTodayClosed: __webpack_require__(56)
	};
	
	var strings = {
		locations: {
			none: 'We could not find any locations close to you.',
			single: 'Here are the details for the ${location} location...',
			list: 'Here are the locations I found close to you:'
		}
	};
	
	var showLocationsLayout = {
		init: function() {
			subscribe('layout:show-locations', function(data) {
				var showLocation = new ShowLocations(data);
				locationIDs.push(data.uuid);
				showLocations[data.uuid] = showLocation;
			});
			window.addEventListener('resize', utils.debounce(function() {
				setTimeout(function() {
					sizeMap();
				}, 500);
			}, 500));
		}
	};
	
	var alphaMap = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
	
	function initialSize(width) {
		for (var i = 0; i < breakpointWidths.length; i++) {
			if ((i === breakpointWidths.length - 1) || (breakpointWidths[i] >= width && breakpointWidths[i + 1] < width)) {
				currentBreakpointKey = i;
				chatWidth = width;
				return;
			}
		}
	}
	
	function sameSize() {
		var width = showLocations[locationIDs[0]].getWidth();
		var isSameSize = (breakpointWidths[currentBreakpointKey] >= width && breakpointWidths[currentBreakpointKey + 1] < width);
		return isSameSize;
	}
	
	function sizeMap() {
		if (locationIDs.length > 0 && showLocations[locationIDs[0]].getWidth() && !sameSize()) {
			var width = showLocations[locationIDs[0]].getWidth();
			for (var i = 0; i < breakpointWidths.length; i++) {
				if ((i === breakpointWidths.length - 1) || (breakpointWidths[i] >= width && breakpointWidths[i + 1] < width)) {
					currentBreakpointKey = i;
					chatWidth = width;
					for (var j = 0; j < locationIDs.length; j++) {
						if (showLocations[locationIDs[j]].data.length > 0)
							showLocations[locationIDs[j]].reDrawMap();
					}
					return;
				}
			}
		}
	}
	
	function createPhoneArray(el, items) {
		if (items) {
			for (var i = 0; i < items.length; i++) {
				var itemChild = document.createElement('div');
				var text = __webpack_require__(57);
				itemChild.className = ns + '-contact-row';
				itemChild.innerHTML = utils.compile(text, {
					ns: ns
				});
				var typeEl = itemChild.querySelector('.' + ns + '-contact-type');
				var dataEl = itemChild.querySelector('.' + ns + '-contact-data');
				typeEl.textContent = items[i].type;
				dataEl.textContent = items[i].number;
				el.appendChild(itemChild);
			}
		}
	}
	
	function formatAMPM(time) {
		try {
			var split = time.split(':');
			var hours = split[0];
			var minutes = split[1];
			var ampm = hours >= 12 ? 'pm' : 'am';
			hours = hours % 12;
			hours = hours ? hours : 12;
			return hours + ':' + minutes + ' ' + ampm;
		}
		catch (e) {
			return '-';
		}
	}
	
	function parseAddress(address) {
		var arr = address.split(',');
		var first = arr.shift();
		var text = '';
		for (var i = 0; i < arr.length; i++) {
			text += arr[i];
			if (i < (arr.length - 1))
				text += ',';
		}
		return {
			address1: first,
			address2: text
		};
	}
	
	function createHours(hoursEl, moreHoursEl, hours) {
		if (hours) {
			var today = new Date().getDay();
			var todaysHours = hours[today];
			var el = document.createElement('div');
			if (todaysHours && todaysHours.isOpen) {
				el.innerHTML = utils.compile(templates.hoursTodayOpen, {
					ns: ns,
					open: formatAMPM(todaysHours.open),
					close: formatAMPM(todaysHours.close)
				});
			} else {
				el.innerHTML = utils.compile(templates.hoursTodayClosed, {
					ns: ns
				});
			}
			hoursEl.appendChild(el);
			for (var i = 0; i < hours.length; i++) {
				var childEl = document.createElement('div');
				childEl.setAttribute('class', ns + '-days-hours');
				if (hours[i] && hours[i].isOpen) {
					childEl.innerHTML = utils.compile(templates.hoursOpen, {
						ns: ns,
						day: days[i],
						open: formatAMPM(hours[i].open),
						close: formatAMPM(hours[i].close)
					});
				} else {
					childEl.innerHTML = utils.compile(templates.hoursClosed, {
						ns: ns,
						day: days[i]
					});
				}
				moreHoursEl.appendChild(childEl);
			}
		}
	}
	
	function distance(item) {
		if (!item.distance)
			return;
		var distanceLength = (item.distance.toFixed(1) === 0.0) ? 0.1 : item.distance.toFixed(1);
		var distanceLengthMeasure = (item.distanceMeasure === 'miles') ? 'm' : 'km';
		return distanceLength + distanceLengthMeasure;
	}
	
	function ShowLocations(data) {
		this.init(data);
	}
	
	ShowLocations.prototype = {
		init: function(data) {
			this.data = (data.message.data !== undefined && data.message.data.location_data !== undefined) ? data.message.data.location_data : [];
			if (this.data.length > 1) {
				setState({
					location_data: this.data
				});
			}
			this.eventListeners = [];
			this.parentElement = data.element;
			this.layoutElement = data.layoutElement;
			this.msgElement = data.msgElement;
			switch (this.data.length) {
			case 0:
				this.msgElement.textContent = strings.locations.none;
				break;
			case 1:
				this.msgElement.textContent = utils.compile(strings.locations.single, { location: this.data[0].address.address });
				break;
			default:
				this.msgElement.textContent = strings.locations.list;
			}
	
			if (this.data.length > 0) {
				var text = templates.base;
				this.uuid = data.uuid;
				if (first) {
					initialSize(this.getWidth());
					first = false;
				}
				this.map = document.createElement('div');
				this.map.innerHTML = utils.compile(text, { ns: ns });
				this.mapElement = this.map.querySelector('.' + ns + '-img');
				this.dataElement = this.map.querySelector('.' + ns + '-data');
				this.mapElement.appendChild(this.drawLocations());
				this.dataElement.appendChild(this.addDetails());
				this.layoutElement.appendChild(this.map);
			}
		},
		getWidth: function() {
			var width = this.parentElement.querySelector('.IBMChat-watson-layout:last-child').clientWidth;
			return width;
		},
		reDrawMap: function() {
			this.mapElement.innerHTML = '';
			this.mapElement.appendChild(this.drawLocations());
		},
		addDetails: function() {
			if (this.data.length > 1)
				return this.addLocations();
			else
				return this.addLocation();
		},
		drawLocations: function() {
			var current = getState();
			var img = document.createElement('img');
			var width = this.getWidth();
			var config = {
				size: width + 'x180',
				scale: pixelRatio
			};
			this.uri = current.mapsServer + '?';
			this.uri += utils.serialize(config);
			this.uri += '&locations=';
			var locations = '';
			for (var i = 0; (i < displayLength && i < this.data.length); i++) {
				var item = this.data[i];
				locations += (i === 0 ) ? item.address.lat + ',' + item.address.lng : '+' + item.address.lat + ',' + item.address.lng;
			}
			this.uri += encodeURIComponent(locations);
			this.uri += '&color=' + encodeURIComponent(current.styles.accentBackground.replace('#', ''));
			img.setAttribute('width', '100%');
			img.setAttribute('src', this.uri);
			return img;
		},
		handleClick: function() {
			this.className = ns + '-location-active';
			showLocations[this.dataset.uuid].removeAllEventListeners();
			publish('receive', {
				message: {
					text: [utils.compile(strings.locations.single, { location: showLocations[this.dataset.uuid].data[this.dataset.id - 1].address.address })],
					layout: {
						name: 'show-locations'
					},
					data: {
						/* jshint ignore:start */
						location_data: [showLocations[this.dataset.uuid].data[this.dataset.id - 1]]
						/* jshint ignore:end */
					}
				}
			});
		},
		removeAllEventListeners: function() {
			if (this.eventListeners.length > 0) {
				this.dataElement.classList.remove(ns + '-clickable');
				for (var i = 0; i < this.eventListeners.length; i++)
					this.eventListeners[i].removeEventListener('click', this.handleClick);
				this.eventListeners = [];
			}
		},
		addLocation: function() {
			var container = document.createElement('div');
			var el = document.createElement('div');
			var locationData = getState().location_data;
			var item = this.data[0];
			var createDom = function(el) {
				var text = templates.addLocationItem;
				el.innerHTML = utils.compile(text, { ns: ns });
				return {
					link: el.querySelector('.' + ns + '-locations-item-data-address-link'),
					label: el.querySelector('.' + ns + '-locations-item-data-title'),
					address: el.querySelector('.' + ns + '-locations-item-data-address'),
					address1: document.createElement('span'),
					address2: document.createElement('span'),
					phone: el.querySelector('.' + ns + '-locations-item-data-phone'),
					email: el.querySelector('.' + ns + '-locations-item-data-email'),
					hours: el.querySelector('.' + ns + '-locations-item-data-hours'),
					parentEl: el.querySelector('.' + ns + '-locations-item-data'),
					hoursButton: el.querySelector('.' + ns + '-locations-item-data-hours-button'),
					moreHours: el.querySelector('.' + ns + '-locations-item-data-more-hours'),
					distance: el.querySelector('.' + ns + '-locations-item-distance'),
					backHolder: el.querySelector('.' + ns + '-locations-item-data-section'),
					back: el.querySelector('.' + ns + '-locations-all')
				};
			};
			var dom = createDom(el);
			if (item.label)
				dom.label.textContent = item.label;
			else
				dom.parentEl.removeChild(dom.label);
	
			var addresses = parseAddress(item.address.address);
			dom.address1.textContent = addresses.address1;
			dom.address2.textContent = addresses.address2;
			dom.address.appendChild(dom.address1);
			dom.address.appendChild(document.createElement('br'));
			dom.address.appendChild(dom.address2);
			dom.link.setAttribute('href', 'https://maps.google.com/?q=' + encodeURIComponent(item.address.address));
			dom.link.setAttribute('target', '_blank');
			dom.distance.textContent = distance(item) || '';
	
			if (item.email) {
				const linkEl = document.createElement('a');
				linkEl.setAttribute('href', 'mailto:' + item.email);
				linkEl.setAttribute('target', '_blank');
				linkEl.textContent = item.email;
				dom.email.appendChild(linkEl);
			} else {
				dom.email.parentNode.removeChild(dom.email);
			}
	
			if (item.phones && item.phones.length > 0)
				createPhoneArray(dom.phone, item.phones);
			else
				dom.phone.parentNode.removeChild(dom.phone);
	
			if (item.days && item.days.length > 0) {
				createHours(dom.hours, dom.moreHours, item.days);
				dom.hoursButton.addEventListener('click', function(e) {
					e.preventDefault();
					dom.parentEl.removeChild(dom.hoursButton);
					dom.moreHours.setAttribute('class', ns + '-locations-item-data-more-hours');
					publish('focus-input');
					publish('scroll-to-bottom');
				});
			} else {
				dom.hours.parentNode.removeChild(dom.hours);
				dom.hoursButton.parentNode.removeChild(dom.hoursButton);
			}
	
			if (locationData && locationData.length > 1) {
				dom.back.addEventListener('click', function(e) {
					e.preventDefault();
					publish('receive', {
						message: {
							text: [strings.locations.list],
							layout: {
								name: 'show-locations'
							},
							data: {
								/* jshint ignore:start */
								location_data: locationData
								/* jshint ignore:end */
							}
						}
					});
				});
			} else {
				dom.backHolder.parentNode.removeChild(dom.backHolder);
			}
			container.appendChild(el);
			return container;
		},
		addLocations: function() {
			var current = getState();
			var createDom = function(el, i, uuid) {
				el.addEventListener('click', this.handleClick);
				el.dataset.uuid = uuid;
				el.dataset.id = i + 1;
				var text = templates.addLocationsItem;
				el.innerHTML = utils.compile(text, { ns: ns });
				this.eventListeners.push(el);
				return {
					icon: el.querySelector('.' + ns + '-locations-item-icon'),
					label: el.querySelector('.' + ns + '-locations-item-data-title'),
					address: el.querySelector('.' + ns + '-locations-item-data-address'),
					address1: document.createElement('span'),
					address2: document.createElement('span'),
					distance: el.querySelector('.' + ns + '-locations-item-distance')
				};
			};
	
			var container = document.createElement('div');
	
			for (var i = 0; (i < displayLength && i < this.data.length); i++) {
				var el = document.createElement('div');
				var item = this.data[i];
				var dom = createDom.call(this, el, i, this.uuid);
				var box = document.createElement('div');
				box.setAttribute('style', 'font-weight:bold; color:' + current.styles.accentText + '; background: ' + current.styles.accentBackground + '; line-height: 24px; height:24px; width:24px; margin-left:8px;');
				box.textContent = alphaMap[i];
				dom.icon.appendChild(box);
				dom.label.textContent = item.label || '';
				var addresses = parseAddress(item.address.address);
				dom.address1.textContent = addresses.address1;
				dom.address2.textContent = addresses.address2;
				dom.address.appendChild(dom.address1);
				dom.address.appendChild(document.createElement('br'));
				dom.address.appendChild(dom.address2);
				dom.distance.textContent = distance(item) || '';
				container.appendChild(el);
			}
			return container;
		}
	};
	
	module.exports = showLocationsLayout;


/***/ },
/* 48 */
[84, 49],
/* 49 */
/***/ function(module, exports) {

	module.exports = "/**\n* (C) Copyright IBM Corp. 2016. All Rights Reserved.\n*\n* Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this file except\n* in compliance with the License. You may obtain a copy of the License at\n*\n* http://www.apache.org/licenses/LICENSE-2.0\n*\n* Unless required by applicable law or agreed to in writing, software distributed under the License\n* is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express\n* or implied. See the License for the specific language governing permissions and limitations under\n* the License.\n*/\n\n.IBMChat-map {\n\tmargin-top:1em;\n}\n\n.IBMChat-map-img {\n\theight:180px;\n}\n\n.IBMChat-map-img img {\n\theight:180px;\n}\n\n.IBMChat-map-multiple-locations {\n\tcursor: default;\n\topacity:0.3;\n\tdisplay: table;\n\twidth: 100%;\n}\n\n.IBMChat-map-multiple-locations .IBMChat-map-locations-row {\n\tdisplay:table-row;\n\twidth: 100%;\n}\n\n.IBMChat-map-multiple-locations .IBMChat-map-locations-cell {\n\tdisplay: table-cell;\n\toverflow: hidden;\n\tword-wrap: break-word;\n}\n\n.IBMChat-map-location-active .IBMChat-map-multiple-locations {\n\topacity: 1;\n}\n\n.IBMChat-map-clickable .IBMChat-map-locations-item.IBMChat-map-multiple-locations {\n\tpadding: 1em 0 1em 0;\n\tcursor: pointer;\n\topacity: 1;\n}\n\n.IBMChat-map-data-section {\n\tmargin-top:0.5em;\n}\n\n.IBMChat-map-locations-item {\n\tpadding: 1em;\n\tborder-bottom:1px solid #505050;\n}\n\n\n.IBMChat-map-locations-item-icon {\n\ttext-align:center;\n\twidth: 40px;\n}\n\n.IBMChat-map-locations-item-data {\n\tpadding:0 4px 0 4px;\n\tfont-size:0.9em;\n}\n.IBMChat-map-locations-item-data-title {\n\tfont-weight: bold;\n\tpadding-bottom:0.5em;\n}\n.IBMChat-map-locations-item-data-items {\n\tfont-size: 0.9em;\n}\n\n.IBMChat-map-locations-item-data-section {\n\tpadding-bottom:1em;\n}\n\n.IBMChat-map-locations-item-data-email {\n\tpadding-bottom:1em;\n}\n\n.IBMChat-map-locations-item-data-phone {\n\tdisplay: table;\n\tmax-width:400px;\n\twidth: 100%;\n\tpadding-bottom:1em;\n}\n.IBMChat-map-contact-row {\n\tpadding-bottom:1em;\n}\n\n.IBMChat-map-hours-open {\n\tpadding-bottom:0.5em;\n}\n\n.IBMChat-map-contact-type {\n\tfont-style:italic;\n\tfont-size:0.9em;\n}\n.IBMChat-map-contact-data {\n\n}\n\na.IBMChat-map-locations-item-data-address-link,\na.IBMChat-map-locations-item-data-address-link:hover,\na.IBMChat-map-locations-item-data-address-link:visited,\na.IBMChat-map-locations-item-data-address-link:active,\n.IBMChat-map-contact-data a,\n.IBMChat-map-contact-data a:hover,\n.IBMChat-map-contact-data a:active,\n.IBMChat-map-contact-data a:visited {\n\tfont-weight:normal;\n\tfont-size:0.9em;\n}\n\n.IBMChat-map-locations-item-distance {\n\twidth:64px;\n\tfont-size:0.9em;\n}\n\nbutton.IBMChat-map-locations-item-data-hours-button {\n\tfont-size:0.9em;\n\tpadding: 0 1em 0 1em;\n\tline-height:1.5em;\n\tmargin-top:1em;\n}\n\nbutton.IBMChat-map-locations-all {\n\tfont-size:0.9em;\n\tpadding: 0 1em 0 1em;\n\tline-height:1.5em;\n}\n\n.IBMChat-map-locations-item-data-more-hours {\n\tdisplay: table;\n}\n\n.IBMChat-map-locations-item-data-more-hours.IBMChat-map-hidden {\n\tdisplay: none;\n}\n\n.IBMChat-map-days-hours {\n\tdisplay: table-row;\n}\n\n.IBMChat-map-days-hours-day, .IBMChat-map-days-hours-hours, .IBMChat-map-days-hours-closed {\n\tdisplay: table-cell;\n\tmargin: 0;\n\tpadding:0.75em 1em 0 0;\n\toverflow: hidden;\n\tword-wrap: break-word;\n}\n\n.IBMChat-map-days-hours > div:last-child {\n\tpadding: 0.75em 0 0 0 !important;\n}\n"

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}\">\n\t<div class=\"${ns}-img\"></div>\n\t<div class=\"${ns}-data ${ns}-clickable\"></div>\n</div>\n"

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-locations-item ${ns}-multiple-locations ${ns}-data-section IBMChat-secondary-colors\">\n\t<div class=\"${ns}-locations-row\">\n\t\t<div class=\"${ns}-locations-item-icon ${ns}-locations-cell\"></div>\n\t\t<div class=\"${ns}-locations-item-data ${ns}-locations-cell\">\n\t\t\t<div class=\"${ns}-locations-item-data-title\"></div>\n\t\t\t<div class=\"${ns}-locations-item-data-items\">\n\t\t\t\t<div class=\"${ns}-locations-item-data-address\"></div>\n\t\t\t\t<div class=\"${ns}-locations-item-distance\"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-locations-item ${ns}-data-section IBMChat-secondary-colors\">\n\t<div class=\"${ns}-locations-item-data-section\">\n\t\t<button class=\"${ns}-locations-all IBMChat-accent-colors\">Back to All Locations</button>\n\t</div>\n\t<div class=\"${ns}-locations-item-data\">\n\t\t<div class=\"${ns}-locations-item-data-title\"></div>\n\t\t<div class=\"${ns}-locations-item-data-items\">\n\t\t\t<div class=\"${ns}-locations-item-data-section\">\n\t\t\t\t<a class=\"${ns}-locations-item-data-address-link\">\n\t\t\t\t\t<div class=\"${ns}-locations-item-data-address\"></div>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"${ns}-locations-item-data-email\"></div>\n\t\t\t<div class=\"${ns}-locations-item-data-phone\"></div>\n\t\t\t<div class=\"${ns}-locations-item-data-hours\"></div>\n\t\t</div>\n\t\t<button class=\"${ns}-locations-item-data-hours-button IBMChat-accent-colors\">More Hours</button>\n\t\t<div class=\"${ns}-locations-item-data-items\">\n\t\t\t<div class=\"${ns}-locations-item-data-more-hours ${ns}-hidden\"></div>\n\t\t</div>\n\t</div>\n\t<div class=\"${ns}-locations-item-distance\"></div>\n</div>\n"

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-days-hours-day\">\n\t${day}\n</div>\n<div class=\"${ns}-days-hours-hours\">\n\tClosed\n</div>\n"

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-days-hours-day\">\n\t${day}\n</div>\n<div class=\"${ns}-days-hours-hours\">\n\t${open} &ndash; ${close}\n</div>\n"

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-hours-open\">Open today:</div>\n<div class=\"${ns}-hours-today\">\n\t${open} &ndash; ${close}\n</div>\n"

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-hours-open\">Closed today.</div>\n"

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-contact-type\"></div>\n<div class=\"${ns}-contact-data\"></div>\n"

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var events = __webpack_require__(33);
	var subscribe = events.subscribe;
	var publish = events.publish;
	
	var requestGeolocationLatlongs = [];
	
	var requestGeolocationLatlongLayout = {
		init: function() {
			subscribe('layout:request-geolocation-latlong', function(data) {
				var requestGeolocationLatlong = new RequestGeolocationLatlong(data);
				requestGeolocationLatlongs[data.uuid] = requestGeolocationLatlong;
			});
		}
	};
	
	function RequestGeolocationLatlong(data) {
		this.init(data);
	}
	
	RequestGeolocationLatlong.prototype = {
		init: function(data) {
			this.data = data.data;
			this.uuid = data.uuid;
			this.parentElement = data.element;
			this.layoutElement = data.layoutElement;
			publish('enable-loading');
			publish('disable-input');
			navigator.geolocation.getCurrentPosition(
					function(position) {
						publish('enable-input');
						publish('disable-loading');
						publish('send', {
							text: position.coords.latitude + ',' + position.coords.longitude,
							silent: true
						});
					},
					function() {
						publish('enable-input');
						publish('disable-loading');
						publish('send', {
							text: '0,0',
							silent: true
						});
					}
				);
		}
	};
	
	module.exports = requestGeolocationLatlongLayout;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

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
	
	__webpack_require__(60);
	
	var events = __webpack_require__(33);
	var subscribe = events.subscribe;
	var publish = events.publish;
	var activeClassName = 'IBMChat-accent-colors';
	var inactiveClassName = 'IBMChat-secondary-colors';
	var utils = __webpack_require__(32);
	
	var ns = 'IBMChat-islocationapi';
	var chooseLocationTypes = [];
	
	var chooseLocationTypeLayout = {
		init: function() {
			subscribe('layout:choose-location-type', function(data) {
				var chooseLocationType = new ChooseLocationType(data);
				chooseLocationTypes[data.uuid] = chooseLocationType;
			});
		}
	};
	
	var values = {
		postalcode: 'zipcode',
		geolocation: 'latlong'
	};
	
	var templates = {
		base: __webpack_require__(62)
	};
	
	function ChooseLocationType(data) {
		this.init(data);
	}
	
	ChooseLocationType.prototype = {
		init: function(data) {
			this.data = data.data;
			this.uuid = data.uuid;
			if ('navigator' in window && 'geolocation' in navigator) {
				this.eventListeners = [];
				this.parentElement = data.element;
				this.layoutElement = data.layoutElement;
				this.el = document.createElement('div');
				this.el.innerHTML = utils.compile(templates.base, {
					ns: ns,
					'values.geolocation': values.geolocation,
					'values.postalcode': values.postalcode
				});
				this.layoutElement.appendChild(this.el);
				this.buttons = this.layoutElement.querySelectorAll('button');
				for (var i = 0; i < this.buttons.length; i++) {
					this.buttons[i].dataset.uuid = this.uuid;
					this.buttons[i].addEventListener('click', this.handleClick);
					this.eventListeners.push(this.buttons[i]);
				}
				if (this.eventListeners.length > 0)
					this.subscribeSend = subscribe('send', this.removeAllEventListeners.bind(this));
			} else {
				publish('send', {
					text: values.postalcode,
					silent: true
				});
			}
		},
		handleClick: function() {
			var data = {
				silent: true,
				text: null
			};
			data.text = this.dataset.input;
			this.classList.add(activeClassName);
			this.classList.remove(inactiveClassName);
			publish('send', data);
			publish('focus-input');
		},
		removeAllEventListeners: function() {
			if (this.eventListeners.length > 0) {
				for (var i = 0; i < this.eventListeners.length; i++) {
					this.eventListeners[i].removeEventListener('click', this.handleClick);
					this.eventListeners[i].setAttribute('disabled', true);
				}
				this.eventListeners = [];
			}
			this.subscribeSend.remove();
		}
	};
	
	module.exports = chooseLocationTypeLayout;


/***/ },
/* 60 */
[84, 61],
/* 61 */
/***/ function(module, exports) {

	module.exports = "/**\n* (C) Copyright IBM Corp. 2016. All Rights Reserved.\n*\n* Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this file except\n* in compliance with the License. You may obtain a copy of the License at\n*\n* http://www.apache.org/licenses/LICENSE-2.0\n*\n* Unless required by applicable law or agreed to in writing, software distributed under the License\n* is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express\n* or implied. See the License for the specific language governing permissions and limitations under\n* the License.\n*/\n\n.IBMChat-islocationapi-container {\n\ttext-align:center;\n}\n\n.IBMChat-islocationapi-container button {\n\tmargin: 1em auto 0 auto;\n\tmin-width:200px;\n\tmax-width:240px;\n\twidth:75%;\n}\n\n.IBMChat-islocationapi-container div:last-child {\n\tmargin-bottom: 1em;\n}\n"

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-container\">\n\t<div><button class=\"IBMChat-secondary-colors\" data-input=\"${values.geolocation}\">Use My Current Location</button></div>\n\t<div><button class=\"IBMChat-secondary-colors\" data-input=\"${values.postalcode}\">A Zip Code</button></div>\n</div>\n"

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

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
	
	__webpack_require__(64);
	
	var events = __webpack_require__(33);
	var subscribe = events.subscribe;
	var publish = events.publish;
	var utils = __webpack_require__(32);
	var ns = 'IBMChat-choose';
	var activeClassName = 'IBMChat-accent-colors';
	var inactiveClassName = 'IBMChat-secondary-colors';
	var widgets = [];
	var templates = {
		button: __webpack_require__(66)
	};
	
	var chooseLayout = {
		init: function() {
			subscribe('layout:choose', function(data) {
				var widget = new Choose(data);
				widgets[data.uuid] = widget;
			});
			subscribe('layout:confirm', function(data) {
				var widget = new Choose(data);
				widgets[data.uuid] = widget;
			});
		}
	};
	
	function Choose(data) {
		this.init(data);
	}
	
	Choose.prototype.init = function(data) {
		this.allowMultiple = (data.message.inputvalidation.someOf !== undefined);
		this.values = [];
		this.data = (this.allowMultiple) ? data.message.inputvalidation.someOf : data.message.inputvalidation.oneOf;
		this.uuid = data.uuid;
		this.parentElement = data.element;
		this.layoutElement = data.layoutElement;
		this.msgElement = data.msgElement;
		this.drawButtons();
		this.subscribeSend = subscribe('send', this.removeAllEventListeners.bind(this));
	};
	
	Choose.prototype.eventListeners = [];
	
	Choose.prototype.drawButtons = function() {
		var tmpl = templates.button;
		this.el = document.createElement('div');
		this.el.classList.add(ns + '-container');
	
		for (var i = 0; i < this.data.length; i++) {
			var text = this.data[i];
			var buttonHolder = document.createElement('div');
			buttonHolder.classList.add(ns + '-option');
			var parsed = utils.compile(tmpl, {
				text: text
			});
			var button;
			buttonHolder.innerHTML = parsed;
			this.el.appendChild(buttonHolder);
			button = buttonHolder.querySelector('button');
			button.setAttribute('data-uuid', this.uuid);
			button.classList.add(inactiveClassName);
			this.addListener(button);
		}
	
		if (this.allowMultiple) {
			var submit = document.createElement('div');
			var submitBtn = utils.compile(templates.field, {
				text: 'Submit'
			});
			submit.className = ns + '-submit';
			submit.innerHTML = submitBtn;
			this.submitButton = submit.querySelector('button');
			this.submitButton.classList = activeClassName;
			this.submitButton.setAttribute('disabled', true);
			this.el.appendChild(submit);
			this.addSubmitListener(this.submitButton);
		}
	
		this.layoutElement.appendChild(this.el);
	};
	
	Choose.prototype.handleClick = function() {
		var data = {
			silent: true,
			text: null
		};
		data.text = this.dataset.input;
		this.className = activeClassName + ' IBMChat-accent-colors';
		publish('send', data);
	};
	
	Choose.prototype.handleMultiClick = function() {
		var buttons;
		var instance = widgets[this.dataset.uuid];
		if (utils.hasClass(this, activeClassName)) {
			this.classList.add(inactiveClassName);
			this.classList.remove(activeClassName);
		} else {
			this.classList.add(activeClassName);
			this.classList.remove(inactiveClassName);
		}
		buttons = instance.el.querySelectorAll('.' + ns + '-option .' + activeClassName);
		if (buttons.length > 0)
			instance.submitButton.removeAttribute('disabled');
		else
			instance.submitButton.setAttribute('disabled', true);
	};
	
	Choose.prototype.handleSubmit = function() {
		var buttons = this.el.querySelectorAll('.' + activeClassName);
		for (var i = 0; i < buttons.length; i++)
			this.values.push(buttons[i].dataset.input);
		publish('send', {
			silent: true,
			text: this.values.toString()
		});
	};
	
	Choose.prototype.addListener = function(el) {
		if (this.allowMultiple)
			el.addEventListener('click', this.handleMultiClick);
		else
			el.addEventListener('click', this.handleClick);
		this.eventListeners.push(el);
	};
	
	Choose.prototype.addSubmitListener = function(el) {
		el.addEventListener('click', this.handleSubmit.bind(this));
		this.eventListeners.push(el);
	};
	
	Choose.prototype.removeAllEventListeners = function() {
		if (this.eventListeners.length > 0) {
			for (var i = 0; i < this.eventListeners.length; i++) {
				this.eventListeners[i].removeEventListener('click', this.handleClick);
				this.eventListeners[i].setAttribute('disabled', true);
			}
			this.eventListeners = [];
			this.subscribeSend.remove();
		}
	};
	
	module.exports = chooseLayout;


/***/ },
/* 64 */
[84, 65],
/* 65 */
/***/ function(module, exports) {

	module.exports = "/**\n* (C) Copyright IBM Corp. 2016. All Rights Reserved.\n*\n* Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this file except\n* in compliance with the License. You may obtain a copy of the License at\n*\n* http://www.apache.org/licenses/LICENSE-2.0\n*\n* Unless required by applicable law or agreed to in writing, software distributed under the License\n* is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express\n* or implied. See the License for the specific language governing permissions and limitations under\n* the License.\n*/\n\n.IBMChat-choose-container {\n\ttext-align:center;\n\tpadding:1em;\n}\n\n.IBMChat-choose-container span {\n\tdisplay:inline-block;\n\tmargin: 1em 1em 0 1em;\n}\n\n.IBMChat-choose-container div {\n\tmargin: 1em auto 0 auto;\n}\n\n.IBMChat-choose-container button {\n\tmin-width:230px;\n\tmax-width:270px;\n}\n"

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = "<button class=\"IBMChat-secondary-colors\" data-input=\"${text}\">${text}</button>\n"

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

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
	
	__webpack_require__(68);
	
	var events = __webpack_require__(33);
	var profile = __webpack_require__(70);
	var subscribe = events.subscribe;
	var publish = events.publish;
	var activeClassName = 'IBMChat-accent-colors';
	var inactiveClassName = 'IBMChat-secondary-colors';
	var utils = __webpack_require__(32);
	var ns = 'IBMChat-form';
	var widgets = [];
	var templates = {
		base: __webpack_require__(71),
		field: __webpack_require__(72)
	};
	
	var formLayout = {
		init: function() {
			subscribe('layout:form', function(data) {
				var widget = new Form(data);
				widgets[data.uuid] = widget;
			});
		}
	};
	
	function Form(data) {
		this.init(data);
	}
	
	Form.prototype.init = function(data) {
		this.data = data.message.store || [];
		this.action = data.message.action || '';
		this.uuid = data.uuid;
		this.parentElement = data.element;
		this.layoutElement = data.layoutElement;
		this.msgElement = data.msgElement;
		this.drawForm();
		this.subscribeSend = subscribe('send', this.removeAllEventListeners.bind(this));
		publish('disable-input');
	};
	
	Form.prototype.drawForm = function() {
		var base = document.createElement('div');
		var formFields;
		base.innerHTML = templates.base;
		formFields = base.querySelector('.IBMChat-form-fields');
		for (var i = 0; i < this.data.length; i++) {
			var field = document.createElement('div');
			field.innerHTML = utils.compile(templates.field, {
				label: this.data[i].label || '',
				name: this.data[i].name,
				value: ''
			});
			field.className = ns + '-fields-row';
			formFields.appendChild(field);
		}
		this.fields = formFields.querySelectorAll('input');
		this.submitButton = base.querySelector('.' + ns + '-submit');
		this.cancelButton = base.querySelector('.' + ns + '-cancel');
		this.submitButton.classList.add(activeClassName);
		this.cancelButton.classList.add(inactiveClassName);
		this.layoutElement.appendChild(base);
		this.fields[0].focus();
		this.addListeners();
	};
	
	Form.prototype.handleSubmit = function() {
		if (this.validateFields() === true) {
			for (var i = 0; i < this.fields.length; i++) {
				var field = this.fields[i];
				profile.set(field.getAttribute('name'), field.value);
			}
			publish('send', {
				silent: true,
				text: 'success'
			});
			publish('enable-input');
		}
	};
	
	Form.prototype.validateFields = function() {
		var valid = true;
		for (var i = 0; i < this.data.length; i++) {
			if (this.data[i].required && this.data[i].required != 'false') {
				if (!this.fields[i].value || this.fields[i].value.length === 0) {
					this.showError(this.fields[i].getAttribute('name'), 'This field is required.');
					valid = false;
				}
			}
		}
		return valid;
	};
	
	Form.prototype.showError = function(name, error) {
		var el = this.layoutElement.querySelector('[data-name="' + name + '"]');
		el.textContent = error;
		el.style.display = 'block';
	};
	
	Form.prototype.hideErrors = function() {
		var els = this.layoutElement.querySelectorAll('[data-name]');
		for (var i = 0; i < els.length; i++) {
			els[i].textContent = '';
			els[i].style.display = 'none';
		}
	};
	
	Form.prototype.handleEnter = function(e) {
		if (e.keyCode === 13)
			this.handleSubmit();
	};
	
	Form.prototype.handleCancel = function() {
		publish('send', {
			silent: true,
			text: 'cancel'
		});
		publish('enable-input');
	};
	
	Form.prototype.addListeners = function() {
		this.cancelButton.addEventListener('click', this.handleCancel.bind(this));
		this.submitButton.addEventListener('click', this.handleSubmit.bind(this));
		for (var i = 0; i < this.fields.length; i++)
			this.fields[i].addEventListener('keypress', this.handleEnter.bind(this));
	};
	
	Form.prototype.removeAllEventListeners = function() {
		this.cancelButton.removeEventListener('click', this.handleCancel.bind(this));
		this.cancelButton.setAttribute('disabled', true);
		this.submitButton.removeEventListener('click', this.handleSubmit.bind(this));
		this.submitButton.setAttribute('disabled', true);
		for (var i = 0; i < this.fields.length; i++) {
			this.fields[i].removeEventListener('keypress', this.handleEnter.bind(this));
			this.fields[i].setAttribute('disabled', true);
		}
	
		this.subscribeSend.remove();
	};
	
	module.exports = formLayout;


/***/ },
/* 68 */
[84, 69],
/* 69 */
/***/ function(module, exports) {

	module.exports = "/**\n* (C) Copyright IBM Corp. 2016. All Rights Reserved.\n*\n* Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this file except\n* in compliance with the License. You may obtain a copy of the License at\n*\n* http://www.apache.org/licenses/LICENSE-2.0\n*\n* Unless required by applicable law or agreed to in writing, software distributed under the License\n* is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express\n* or implied. See the License for the specific language governing permissions and limitations under\n* the License.\n*/\n\n.IBMChat-form-container {\n\ttext-align:center;\n\tpadding:1em;\n}\n\n.IBMChat-form-fields {\n\tmargin:auto;\n\ttext-align:left;\n\tmax-width:360px;\n\twidth:100%;\n}\n\n.IBMChat-form-fields-row {\n\tpadding-bottom:1.5em;\n}\n\n.IBMChat-form-fields-row input {\n\twidth: 100%;\n}\n\n.IBMChat-form-buttons {\n\twidth: 100%;\n\tmax-width: 360px;\n\theight: 2.5em;\n\ttext-align:center;\n\tmargin:auto;\n}\n\n.IBMChat-form-buttons button {\n\tline-height: 2.5em;\n\twidth: 100px;\n}\n\n.IBMChat-form-cancel {\n\tfloat:left;\n\tmax-width: 50%;\n}\n.IBMChat-form-submit {\n\tfloat:right;\n\tmax-width: 50%;\n}\n"

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var BotSDK = __webpack_require__(39);
	var profile = BotSDK.profile;
	
	module.exports = profile;


/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "<div class=\"IBMChat-form-container\">\n\t<div class=\"IBMChat-form-fields\"></div>\n\t<div class=\"IBMChat-form-buttons\">\n\t\t<button class=\"IBMChat-form-cancel\">Cancel</button>\n\t\t<button class=\"IBMChat-form-submit\">Submit</button>\n\t</div>\n</div>\n"

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = "<label>${label}</label>\n<input type=\"text\" class=\"IBMChat-input-colors\" name=\"${name}\" value=\"${value}\" />\n<div class=\"IBMChat-input-error\" data-name=\"${name}\"></div>\n"

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

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
	
	__webpack_require__(74);
	
	var events = __webpack_require__(33);
	var state = __webpack_require__(7);
	var subscribe = events.subscribe;
	var publish = events.publish;
	var utils = __webpack_require__(32);
	var validation = __webpack_require__(76);
	var ns = 'IBMChat-creditcard';
	var widgets = [];
	var templates = {
		base: __webpack_require__(77)
	};
	
	var creditCardLayout = {
		init: function() {
			subscribe('layout:cc-validator', function(data) {
				var widget = new CreditCard(data);
				widgets[data.uuid] = widget;
			});
		}
	};
	
	function CreditCard(data) {
		this.init(data);
	}
	
	CreditCard.prototype.init = function(data) {
		this.data = data.message.layout.data || {};
		this.data.acceptedCards = this.data.types;
		this.uuid = data.uuid;
		this.parentElement = data.element;
		this.layoutElement = data.layoutElement;
		this.msgElement = data.msgElement;
		this.drawForm();
	};
	
	CreditCard.prototype.drawForm = function() {
		var text = templates.base;
		this.el = document.createElement('div');
		text = utils.compile(templates.base, {
			ns: ns
		});
		this.el.innerHTML = text;
		this.layoutElement.appendChild(this.el);
		this.cancelButton = this.el.querySelector('.' + ns + '-cancel');
		this.continueButton = this.el.querySelector('.' + ns + '-continue');
		this.formElements = {};
		this.fields = this.el.querySelectorAll('input');
		for (var i = 0; i < this.fields.length; i++) {
			var field = this.fields[i];
			var name = field.getAttribute('name');
			this.formElements[name] = field;
		}
		this.addListeners();
	};
	
	CreditCard.prototype.addListeners = function() {
		this.cancelButton.addEventListener('click', this.handleCancel.bind(this));
		this.continueButton.addEventListener('click', this.handleContinue.bind(this));
	};
	
	CreditCard.prototype.addError = function(name, msg) {
		var errorElement = this.el.querySelector('[data-validation-for="' + name + '"]');
		errorElement.dataset.valid = false;
		errorElement.textContent = msg;
	};
	
	CreditCard.prototype.removeError = function(name) {
		var errorElement = this.el.querySelector('[data-validation-for="' + name + '"]');
		errorElement.dataset.valid = true;
		errorElement.textContent = '';
	};
	
	CreditCard.prototype.validate = function() {
		var valid = true;
		this.formData = {};
		for (var i = 0; i < this.fields.length; i++) {
			var field = this.fields[i];
			var name = field.getAttribute('name');
			this.formData[name] = field.value;
		}
	
		if (this.formData.cc_full_name.length === 0) {
			this.addError('cc_full_name', 'This field is required.');
			valid = false;
		} else {
			this.removeError('cc_full_name');
		}
	
		var cc = validation.validateCard(this.data.acceptedCards, this.formData.cc_number);
		if (!cc.valid) {
			this.addError('cc_number', cc.message);
			valid = false;
		} else {
			this.removeError('cc_full_name');
		}
	
		var exp = validation.validateExp(this.formData.cc_exp_date_month, this.formData.cc_exp_date_year);
		if (!exp.valid) {
			this.addError('cc_exp_date', exp.message);
			valid = false;
		} else {
			this.removeError('cc_exp_date');
		}
	
		var cvv = validation.validateCVV(this.formData.cc_code);
		if (!cvv.valid) {
			this.addError('cc_code', cvv.message);
			valid = false;
		} else {
			this.removeError('cc_code');
		}
		return valid;
	};
	
	CreditCard.prototype.handleContinue = function() {
		if (this.validate()) {
			this.formData.cc_exp_date = this.formData.cc_exp_date_month + '/' + this.formData.cc_exp_date_year;
			state.setProfile({
				selectedCard: this.formData
			});
			publish('send', {
				silent: true,
				text: 'success'
			});
		}
	};
	
	CreditCard.prototype.handleCancel = function() {
		publish('send', {
			silent: true,
			text: 'cancel'
		});
	};
	
	CreditCard.prototype.removeAllEventListeners = function() {
		this.cancelButton.removeEventListener('click', this.handleCancel.bind(this));
		this.cancelButton.setAttribute('disabled', true);
		this.submitButton.removeEventListener('click', this.handleSubmit.bind(this));
		this.submitButton.setAttribute('disabled', true);
		for (var j = 0; j < this.fields.length; j++)
			this.fields[j].setAttribute('disabled', true);
	
		this.subscribeSend.remove();
	};
	
	module.exports = creditCardLayout;


/***/ },
/* 74 */
[84, 75],
/* 75 */
/***/ function(module, exports) {

	module.exports = "/**\n* (C) Copyright IBM Corp. 2016. All Rights Reserved.\n*\n* Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this file except\n* in compliance with the License. You may obtain a copy of the License at\n*\n* http://www.apache.org/licenses/LICENSE-2.0\n*\n* Unless required by applicable law or agreed to in writing, software distributed under the License\n* is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express\n* or implied. See the License for the specific language governing permissions and limitations under\n* the License.\n*/\n\n.IBMChat-creditcard-container {\n\tpadding: 1em;\n\ttext-align:center;\n}\n\n.IBMChat-creditcard-rows {\n\tmargin:auto;\n\ttext-align:left;\n\tmax-width:360px;\n\twidth:100%;\n}\n\n.IBMChat-creditcard-row {\n\ttext-align:left;\n\tpadding-bottom:1em;\n}\n\n.IBMChat-creditcard-row input {\n\twidth:100%;\n}\n\ndiv[data-validation-for] {\n\tpadding-top:0.5em;\n}\n\n.IBMChat-creditcard-col {\n\tdisplay:inline-block;\n}\n\n.IBMChat-creditcard-col input{\n\ttext-align:center;\n\twidth:40px;\n}\n\n.IBMChat-creditcard-col:last-child input {\n\twidth:60px;\n}\n\n.IBMChat-creditcard-buttons {\n\theight:2.5em;\n}\n\n.IBMChat-creditcard-buttons button {\n\twidth:90px;\n\tfloat:left;\n}\n\n.IBMChat-creditcard-buttons button:last-child {\n\tfloat:right;\n}\n"

/***/ },
/* 76 */
/***/ function(module, exports) {

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
	
	//https://en.wikipedia.org/wiki/Payment_card_number
	
	var state = {
		acceptedCards: [],
		cardNumber: '',
		cardType: ''
	};
	
	var messages = {
		required: 'This field is required.',
		acceptedCard: function() {
			var text = 'We accept ';
			for (i = 0; i < state.acceptedCards.length; i++) {
				if (i > 0)
					text += ', ';
				if (i === (state.acceptedCards.length - 1))
					text += ' and ';
				text += cardData[state.acceptedCards[i]].human;
			}
			text += '. Please use a valid card.';
			return text;
		},
		invalid: 'Your credit card number is invalid.',
		invalidExpiration: 'Your credit card expiration date is invalid.',
		invalidCvv: 'Your CVV is invalid.'
	};
	
	var cardData = {
		"visa": {
			human: "Visa",
			prefixes: [4],
			lengths: [13, 16, 19]
		},
		"mastercard": {
			human: "MasterCard",
			prefixes: [51, 52, 53, 54, 55],
			lengths: [16]
		},
		"amex": {
			human: "American Express",
			prefixes: [34, 37],
			lengths: [15]
		},
		"discover": {
			human: "Discover",
			prefixes: [6011, 65],
			lengths: [16, 19]
		}
	};
	
	var i;
	//MasterCard adding these numbers in 2017
	for (i = 2221; i <= 2720; i++)
		cardData.mastercard.prefixes.push(i);
	
	for (i = 622126; i <= 622925; i++)
		cardData.discover.prefixes.push(i);
	
	for (i = 644; i <= 649; i++)
		cardData.discover.prefixes.push(i);
	
	function _detectCard() {
		for (var i = 0; i < state.acceptedCards.length; i++) {
			var data = cardData[state.acceptedCards[i]];
			for (var j = 0; j < data.prefixes.length; j++) {
				var x = data.prefixes[j].toString();
				if (state.cardNumber.substring(0, x.length) === x) {
					state.cardType = state.acceptedCards[i];
					return true;
				}
			}
		}
		return false;
	}
	
	function _checkKuhn() {
		var checksum = 0; // running checksum total
		var j = 1; // takes value of 1 or 2
	
		// Process each digit one by one starting at the right
		var calc;
		for (var i = state.cardNumber.length - 1; i >= 0; i--) {
			// Extract the next digit and multiply by 1 or 2 on alternative digits.
			calc = Number(state.cardNumber.charAt(i)) * j;
	
			// If the result is in two digits add 1 to the checksum total
			if (calc > 9) {
				checksum = checksum + 1;
				calc = calc - 10;
			}
	
			// Add the units element to the checksum total
			checksum = checksum + calc;
	
			// Switch the value of j
			j = (j == 1) ? 2 : 1;
		}
	
		// All done - if checksum is divisible by 10, it is a valid modulus 10.
		// If not, report an error.
		return (checksum % 10 != 0) ? false : true;
	}
	
	function validateCard(acceptedCards, cardNumber) {
		state.acceptedCards = acceptedCards;
		state.cardNumber = cardNumber.replace(/\D/g,''); //strip extra characters
		if (cardNumber.length === 0) {
			return {
				"message": messages.required,
				"valid": false
			};
		}
		if (state.cardNumber.length === 0) {
			return {
				"message": messages.required,
				"valid": false
			};
		}
		if (_detectCard()) {
			if (state.acceptedCards.indexOf(state.cardType) === -1) {
				return {
					"message": messages.acceptedCard(),
					"valid": false
				};
			}
			if (cardData[state.cardType].lengths.indexOf(state.cardNumber.length) === -1) {
				return {
					"message": messages.invalid,
					"valid": false
				};
			}
			if (_checkKuhn() === false) {
				return {
					"message": messages.invalid,
					"valid": false
				};
			}
		} else {
			return {
				"message": messages.invalid,
				"valid": false
			};
		}
	
		return {
			"valid": true
		};
	}
	
	function validateExp(userM, userY) {
		var d = new Date();
		var month = d.getMonth();
		var year = d.getFullYear();
	
		if (userM.length === 0 || userY.length === 0 || userM.replace(/\D/g,'').length === 0 || userY.replace(/\D/g,'').length === 0) {
			return {
				"message": messages.required,
				"valid": false
			};
		}
	
		userM = parseInt(userM, 10);
		userY = parseInt('20' + '' + userY, 10);
		if (userM > 12 || userM < 1 || (userY < year || (userY === year && userM < month))) {
			return {
				"message": messages.invalidExpiration,
				"valid": false
			};
		}
		return {
			"valid": true
		};
	}
	
	function validateCVV(CVV) {
		if (CVV.length === 0) {
			return {
				"message": messages.required,
				"valid": false
			};
		}
		if (!isNaN(CVV) && (CVV > 9999 || CVV < 100)) {
			return {
				"message": messages.invalidCvv,
				"valid": false
			};
		}
		return {
			"valid": true
		};
	}
	
	module.exports = {
		validateCard: validateCard,
		validateExp: validateExp,
		validateCVV: validateCVV,
		cardData: cardData
	};


/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-container\">\n\t<div class=\"${ns}-rows\">\n\t\t<div class=\"${ns}-row\">\n\t\t\t<label>Name on Card</label>\n\t\t\t<input type=\"text\" class=\"IBMChat-input-colors\" name=\"cc_full_name\" />\n\t\t\t<div data-validation-for=\"cc_full_name\" data-valid=\"true\"></div>\n\t\t</div>\n\t\t<div class=\"${ns}-row\">\n\t\t\t<label>Credit Card Number</label>\n\t\t\t<input type=\"text\" class=\"IBMChat-input-colors\" name=\"cc_number\" />\n\t\t\t<div data-validation-for=\"cc_number\" data-valid=\"true\"></div>\n\t\t</div>\n\t\t<div class=\"${ns}-row\">\n\t\t\t<label>Expiration Date</label>\n\t\t\t<div class=\"${ns}-col\">\n\t\t\t\t<input class=\"${ns}-date IBMChat-input-colors\" type=\"text\" name=\"cc_exp_date_month\" />\n\t\t\t\t/\n\t\t\t\t<input class=\"${ns}-date IBMChat-input-colors\" type=\"text\" name=\"cc_exp_date_year\" />\n\t\t\t\t<div data-validation-for=\"cc_exp_date\" data-valid=\"true\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"${ns}-row\">\n\t\t\t<label>CVV</label>\n\t\t\t<div class=\"${ns}-col\">\n\t\t\t\t<input class=\"${ns}-cvv IBMChat-input-colors\" type=\"text\" name=\"cc_code\" />\n\t\t\t\t<div data-validation-for=\"cc_code\" data-valid=\"true\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"${ns}-row ${ns}-buttons\">\n\t\t\t<button class=\"${ns}-cancel IBMChat-secondary-colors\">Cancel</button>\n\t\t\t<button class=\"${ns}-continue IBMChat-input-colors\">Continue</button>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var require;var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process, global, module) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   3.2.1
	 */
	
	(function() {
	    "use strict";
	    function lib$es6$promise$utils$$objectOrFunction(x) {
	      return typeof x === 'function' || (typeof x === 'object' && x !== null);
	    }
	
	    function lib$es6$promise$utils$$isFunction(x) {
	      return typeof x === 'function';
	    }
	
	    function lib$es6$promise$utils$$isMaybeThenable(x) {
	      return typeof x === 'object' && x !== null;
	    }
	
	    var lib$es6$promise$utils$$_isArray;
	    if (!Array.isArray) {
	      lib$es6$promise$utils$$_isArray = function (x) {
	        return Object.prototype.toString.call(x) === '[object Array]';
	      };
	    } else {
	      lib$es6$promise$utils$$_isArray = Array.isArray;
	    }
	
	    var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
	    var lib$es6$promise$asap$$len = 0;
	    var lib$es6$promise$asap$$vertxNext;
	    var lib$es6$promise$asap$$customSchedulerFn;
	
	    var lib$es6$promise$asap$$asap = function asap(callback, arg) {
	      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
	      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
	      lib$es6$promise$asap$$len += 2;
	      if (lib$es6$promise$asap$$len === 2) {
	        // If len is 2, that means that we need to schedule an async flush.
	        // If additional callbacks are queued before the queue is flushed, they
	        // will be processed by this flush that we are scheduling.
	        if (lib$es6$promise$asap$$customSchedulerFn) {
	          lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
	        } else {
	          lib$es6$promise$asap$$scheduleFlush();
	        }
	      }
	    }
	
	    function lib$es6$promise$asap$$setScheduler(scheduleFn) {
	      lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
	    }
	
	    function lib$es6$promise$asap$$setAsap(asapFn) {
	      lib$es6$promise$asap$$asap = asapFn;
	    }
	
	    var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
	    var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
	    var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
	    var lib$es6$promise$asap$$isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';
	
	    // test for web worker but not in IE10
	    var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
	      typeof importScripts !== 'undefined' &&
	      typeof MessageChannel !== 'undefined';
	
	    // node
	    function lib$es6$promise$asap$$useNextTick() {
	      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	      // see https://github.com/cujojs/when/issues/410 for details
	      return function() {
	        process.nextTick(lib$es6$promise$asap$$flush);
	      };
	    }
	
	    // vertx
	    function lib$es6$promise$asap$$useVertxTimer() {
	      return function() {
	        lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
	      };
	    }
	
	    function lib$es6$promise$asap$$useMutationObserver() {
	      var iterations = 0;
	      var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
	      var node = document.createTextNode('');
	      observer.observe(node, { characterData: true });
	
	      return function() {
	        node.data = (iterations = ++iterations % 2);
	      };
	    }
	
	    // web worker
	    function lib$es6$promise$asap$$useMessageChannel() {
	      var channel = new MessageChannel();
	      channel.port1.onmessage = lib$es6$promise$asap$$flush;
	      return function () {
	        channel.port2.postMessage(0);
	      };
	    }
	
	    function lib$es6$promise$asap$$useSetTimeout() {
	      return function() {
	        setTimeout(lib$es6$promise$asap$$flush, 1);
	      };
	    }
	
	    var lib$es6$promise$asap$$queue = new Array(1000);
	    function lib$es6$promise$asap$$flush() {
	      for (var i = 0; i < lib$es6$promise$asap$$len; i+=2) {
	        var callback = lib$es6$promise$asap$$queue[i];
	        var arg = lib$es6$promise$asap$$queue[i+1];
	
	        callback(arg);
	
	        lib$es6$promise$asap$$queue[i] = undefined;
	        lib$es6$promise$asap$$queue[i+1] = undefined;
	      }
	
	      lib$es6$promise$asap$$len = 0;
	    }
	
	    function lib$es6$promise$asap$$attemptVertx() {
	      try {
	        var r = require;
	        var vertx = __webpack_require__(81);
	        lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
	        return lib$es6$promise$asap$$useVertxTimer();
	      } catch(e) {
	        return lib$es6$promise$asap$$useSetTimeout();
	      }
	    }
	
	    var lib$es6$promise$asap$$scheduleFlush;
	    // Decide what async method to use to triggering processing of queued callbacks:
	    if (lib$es6$promise$asap$$isNode) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
	    } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
	    } else if (lib$es6$promise$asap$$isWorker) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
	    } else if (lib$es6$promise$asap$$browserWindow === undefined && "function" === 'function') {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertx();
	    } else {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
	    }
	    function lib$es6$promise$then$$then(onFulfillment, onRejection) {
	      var parent = this;
	
	      var child = new this.constructor(lib$es6$promise$$internal$$noop);
	
	      if (child[lib$es6$promise$$internal$$PROMISE_ID] === undefined) {
	        lib$es6$promise$$internal$$makePromise(child);
	      }
	
	      var state = parent._state;
	
	      if (state) {
	        var callback = arguments[state - 1];
	        lib$es6$promise$asap$$asap(function(){
	          lib$es6$promise$$internal$$invokeCallback(state, child, callback, parent._result);
	        });
	      } else {
	        lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
	      }
	
	      return child;
	    }
	    var lib$es6$promise$then$$default = lib$es6$promise$then$$then;
	    function lib$es6$promise$promise$resolve$$resolve(object) {
	      /*jshint validthis:true */
	      var Constructor = this;
	
	      if (object && typeof object === 'object' && object.constructor === Constructor) {
	        return object;
	      }
	
	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	      lib$es6$promise$$internal$$resolve(promise, object);
	      return promise;
	    }
	    var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
	    var lib$es6$promise$$internal$$PROMISE_ID = Math.random().toString(36).substring(16);
	
	    function lib$es6$promise$$internal$$noop() {}
	
	    var lib$es6$promise$$internal$$PENDING   = void 0;
	    var lib$es6$promise$$internal$$FULFILLED = 1;
	    var lib$es6$promise$$internal$$REJECTED  = 2;
	
	    var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();
	
	    function lib$es6$promise$$internal$$selfFulfillment() {
	      return new TypeError("You cannot resolve a promise with itself");
	    }
	
	    function lib$es6$promise$$internal$$cannotReturnOwn() {
	      return new TypeError('A promises callback cannot return that same promise.');
	    }
	
	    function lib$es6$promise$$internal$$getThen(promise) {
	      try {
	        return promise.then;
	      } catch(error) {
	        lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
	        return lib$es6$promise$$internal$$GET_THEN_ERROR;
	      }
	    }
	
	    function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	      try {
	        then.call(value, fulfillmentHandler, rejectionHandler);
	      } catch(e) {
	        return e;
	      }
	    }
	
	    function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
	       lib$es6$promise$asap$$asap(function(promise) {
	        var sealed = false;
	        var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
	          if (sealed) { return; }
	          sealed = true;
	          if (thenable !== value) {
	            lib$es6$promise$$internal$$resolve(promise, value);
	          } else {
	            lib$es6$promise$$internal$$fulfill(promise, value);
	          }
	        }, function(reason) {
	          if (sealed) { return; }
	          sealed = true;
	
	          lib$es6$promise$$internal$$reject(promise, reason);
	        }, 'Settle: ' + (promise._label || ' unknown promise'));
	
	        if (!sealed && error) {
	          sealed = true;
	          lib$es6$promise$$internal$$reject(promise, error);
	        }
	      }, promise);
	    }
	
	    function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
	      if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
	        lib$es6$promise$$internal$$fulfill(promise, thenable._result);
	      } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, thenable._result);
	      } else {
	        lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {
	          lib$es6$promise$$internal$$resolve(promise, value);
	        }, function(reason) {
	          lib$es6$promise$$internal$$reject(promise, reason);
	        });
	      }
	    }
	
	    function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable, then) {
	      if (maybeThenable.constructor === promise.constructor &&
	          then === lib$es6$promise$then$$default &&
	          constructor.resolve === lib$es6$promise$promise$resolve$$default) {
	        lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
	      } else {
	        if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
	          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
	        } else if (then === undefined) {
	          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	        } else if (lib$es6$promise$utils$$isFunction(then)) {
	          lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
	        } else {
	          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	        }
	      }
	    }
	
	    function lib$es6$promise$$internal$$resolve(promise, value) {
	      if (promise === value) {
	        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFulfillment());
	      } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
	        lib$es6$promise$$internal$$handleMaybeThenable(promise, value, lib$es6$promise$$internal$$getThen(value));
	      } else {
	        lib$es6$promise$$internal$$fulfill(promise, value);
	      }
	    }
	
	    function lib$es6$promise$$internal$$publishRejection(promise) {
	      if (promise._onerror) {
	        promise._onerror(promise._result);
	      }
	
	      lib$es6$promise$$internal$$publish(promise);
	    }
	
	    function lib$es6$promise$$internal$$fulfill(promise, value) {
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
	
	      promise._result = value;
	      promise._state = lib$es6$promise$$internal$$FULFILLED;
	
	      if (promise._subscribers.length !== 0) {
	        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
	      }
	    }
	
	    function lib$es6$promise$$internal$$reject(promise, reason) {
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
	      promise._state = lib$es6$promise$$internal$$REJECTED;
	      promise._result = reason;
	
	      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
	    }
	
	    function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
	      var subscribers = parent._subscribers;
	      var length = subscribers.length;
	
	      parent._onerror = null;
	
	      subscribers[length] = child;
	      subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
	      subscribers[length + lib$es6$promise$$internal$$REJECTED]  = onRejection;
	
	      if (length === 0 && parent._state) {
	        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
	      }
	    }
	
	    function lib$es6$promise$$internal$$publish(promise) {
	      var subscribers = promise._subscribers;
	      var settled = promise._state;
	
	      if (subscribers.length === 0) { return; }
	
	      var child, callback, detail = promise._result;
	
	      for (var i = 0; i < subscribers.length; i += 3) {
	        child = subscribers[i];
	        callback = subscribers[i + settled];
	
	        if (child) {
	          lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
	        } else {
	          callback(detail);
	        }
	      }
	
	      promise._subscribers.length = 0;
	    }
	
	    function lib$es6$promise$$internal$$ErrorObject() {
	      this.error = null;
	    }
	
	    var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();
	
	    function lib$es6$promise$$internal$$tryCatch(callback, detail) {
	      try {
	        return callback(detail);
	      } catch(e) {
	        lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
	        return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
	      }
	    }
	
	    function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
	      var hasCallback = lib$es6$promise$utils$$isFunction(callback),
	          value, error, succeeded, failed;
	
	      if (hasCallback) {
	        value = lib$es6$promise$$internal$$tryCatch(callback, detail);
	
	        if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
	          failed = true;
	          error = value.error;
	          value = null;
	        } else {
	          succeeded = true;
	        }
	
	        if (promise === value) {
	          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
	          return;
	        }
	
	      } else {
	        value = detail;
	        succeeded = true;
	      }
	
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) {
	        // noop
	      } else if (hasCallback && succeeded) {
	        lib$es6$promise$$internal$$resolve(promise, value);
	      } else if (failed) {
	        lib$es6$promise$$internal$$reject(promise, error);
	      } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
	        lib$es6$promise$$internal$$fulfill(promise, value);
	      } else if (settled === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, value);
	      }
	    }
	
	    function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
	      try {
	        resolver(function resolvePromise(value){
	          lib$es6$promise$$internal$$resolve(promise, value);
	        }, function rejectPromise(reason) {
	          lib$es6$promise$$internal$$reject(promise, reason);
	        });
	      } catch(e) {
	        lib$es6$promise$$internal$$reject(promise, e);
	      }
	    }
	
	    var lib$es6$promise$$internal$$id = 0;
	    function lib$es6$promise$$internal$$nextId() {
	      return lib$es6$promise$$internal$$id++;
	    }
	
	    function lib$es6$promise$$internal$$makePromise(promise) {
	      promise[lib$es6$promise$$internal$$PROMISE_ID] = lib$es6$promise$$internal$$id++;
	      promise._state = undefined;
	      promise._result = undefined;
	      promise._subscribers = [];
	    }
	
	    function lib$es6$promise$promise$all$$all(entries) {
	      return new lib$es6$promise$enumerator$$default(this, entries).promise;
	    }
	    var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
	    function lib$es6$promise$promise$race$$race(entries) {
	      /*jshint validthis:true */
	      var Constructor = this;
	
	      if (!lib$es6$promise$utils$$isArray(entries)) {
	        return new Constructor(function(resolve, reject) {
	          reject(new TypeError('You must pass an array to race.'));
	        });
	      } else {
	        return new Constructor(function(resolve, reject) {
	          var length = entries.length;
	          for (var i = 0; i < length; i++) {
	            Constructor.resolve(entries[i]).then(resolve, reject);
	          }
	        });
	      }
	    }
	    var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
	    function lib$es6$promise$promise$reject$$reject(reason) {
	      /*jshint validthis:true */
	      var Constructor = this;
	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	      lib$es6$promise$$internal$$reject(promise, reason);
	      return promise;
	    }
	    var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;
	
	
	    function lib$es6$promise$promise$$needsResolver() {
	      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	    }
	
	    function lib$es6$promise$promise$$needsNew() {
	      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	    }
	
	    var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
	    /**
	      Promise objects represent the eventual result of an asynchronous operation. The
	      primary way of interacting with a promise is through its `then` method, which
	      registers callbacks to receive either a promise's eventual value or the reason
	      why the promise cannot be fulfilled.
	
	      Terminology
	      -----------
	
	      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	      - `thenable` is an object or function that defines a `then` method.
	      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	      - `exception` is a value that is thrown using the throw statement.
	      - `reason` is a value that indicates why a promise was rejected.
	      - `settled` the final resting state of a promise, fulfilled or rejected.
	
	      A promise can be in one of three states: pending, fulfilled, or rejected.
	
	      Promises that are fulfilled have a fulfillment value and are in the fulfilled
	      state.  Promises that are rejected have a rejection reason and are in the
	      rejected state.  A fulfillment value is never a thenable.
	
	      Promises can also be said to *resolve* a value.  If this value is also a
	      promise, then the original promise's settled state will match the value's
	      settled state.  So a promise that *resolves* a promise that rejects will
	      itself reject, and a promise that *resolves* a promise that fulfills will
	      itself fulfill.
	
	
	      Basic Usage:
	      ------------
	
	      ```js
	      var promise = new Promise(function(resolve, reject) {
	        // on success
	        resolve(value);
	
	        // on failure
	        reject(reason);
	      });
	
	      promise.then(function(value) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```
	
	      Advanced Usage:
	      ---------------
	
	      Promises shine when abstracting away asynchronous interactions such as
	      `XMLHttpRequest`s.
	
	      ```js
	      function getJSON(url) {
	        return new Promise(function(resolve, reject){
	          var xhr = new XMLHttpRequest();
	
	          xhr.open('GET', url);
	          xhr.onreadystatechange = handler;
	          xhr.responseType = 'json';
	          xhr.setRequestHeader('Accept', 'application/json');
	          xhr.send();
	
	          function handler() {
	            if (this.readyState === this.DONE) {
	              if (this.status === 200) {
	                resolve(this.response);
	              } else {
	                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	              }
	            }
	          };
	        });
	      }
	
	      getJSON('/posts.json').then(function(json) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```
	
	      Unlike callbacks, promises are great composable primitives.
	
	      ```js
	      Promise.all([
	        getJSON('/posts'),
	        getJSON('/comments')
	      ]).then(function(values){
	        values[0] // => postsJSON
	        values[1] // => commentsJSON
	
	        return values;
	      });
	      ```
	
	      @class Promise
	      @param {function} resolver
	      Useful for tooling.
	      @constructor
	    */
	    function lib$es6$promise$promise$$Promise(resolver) {
	      this[lib$es6$promise$$internal$$PROMISE_ID] = lib$es6$promise$$internal$$nextId();
	      this._result = this._state = undefined;
	      this._subscribers = [];
	
	      if (lib$es6$promise$$internal$$noop !== resolver) {
	        typeof resolver !== 'function' && lib$es6$promise$promise$$needsResolver();
	        this instanceof lib$es6$promise$promise$$Promise ? lib$es6$promise$$internal$$initializePromise(this, resolver) : lib$es6$promise$promise$$needsNew();
	      }
	    }
	
	    lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
	    lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
	    lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
	    lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;
	    lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;
	    lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;
	    lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;
	
	    lib$es6$promise$promise$$Promise.prototype = {
	      constructor: lib$es6$promise$promise$$Promise,
	
	    /**
	      The primary way of interacting with a promise is through its `then` method,
	      which registers callbacks to receive either a promise's eventual value or the
	      reason why the promise cannot be fulfilled.
	
	      ```js
	      findUser().then(function(user){
	        // user is available
	      }, function(reason){
	        // user is unavailable, and you are given the reason why
	      });
	      ```
	
	      Chaining
	      --------
	
	      The return value of `then` is itself a promise.  This second, 'downstream'
	      promise is resolved with the return value of the first promise's fulfillment
	      or rejection handler, or rejected if the handler throws an exception.
	
	      ```js
	      findUser().then(function (user) {
	        return user.name;
	      }, function (reason) {
	        return 'default name';
	      }).then(function (userName) {
	        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	        // will be `'default name'`
	      });
	
	      findUser().then(function (user) {
	        throw new Error('Found user, but still unhappy');
	      }, function (reason) {
	        throw new Error('`findUser` rejected and we're unhappy');
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	      });
	      ```
	      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	
	      ```js
	      findUser().then(function (user) {
	        throw new PedagogicalException('Upstream error');
	      }).then(function (value) {
	        // never reached
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // The `PedgagocialException` is propagated all the way down to here
	      });
	      ```
	
	      Assimilation
	      ------------
	
	      Sometimes the value you want to propagate to a downstream promise can only be
	      retrieved asynchronously. This can be achieved by returning a promise in the
	      fulfillment or rejection handler. The downstream promise will then be pending
	      until the returned promise is settled. This is called *assimilation*.
	
	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // The user's comments are now available
	      });
	      ```
	
	      If the assimliated promise rejects, then the downstream promise will also reject.
	
	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // If `findCommentsByAuthor` fulfills, we'll have the value here
	      }, function (reason) {
	        // If `findCommentsByAuthor` rejects, we'll have the reason here
	      });
	      ```
	
	      Simple Example
	      --------------
	
	      Synchronous Example
	
	      ```javascript
	      var result;
	
	      try {
	        result = findResult();
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	
	      Errback Example
	
	      ```js
	      findResult(function(result, err){
	        if (err) {
	          // failure
	        } else {
	          // success
	        }
	      });
	      ```
	
	      Promise Example;
	
	      ```javascript
	      findResult().then(function(result){
	        // success
	      }, function(reason){
	        // failure
	      });
	      ```
	
	      Advanced Example
	      --------------
	
	      Synchronous Example
	
	      ```javascript
	      var author, books;
	
	      try {
	        author = findAuthor();
	        books  = findBooksByAuthor(author);
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	
	      Errback Example
	
	      ```js
	
	      function foundBooks(books) {
	
	      }
	
	      function failure(reason) {
	
	      }
	
	      findAuthor(function(author, err){
	        if (err) {
	          failure(err);
	          // failure
	        } else {
	          try {
	            findBoooksByAuthor(author, function(books, err) {
	              if (err) {
	                failure(err);
	              } else {
	                try {
	                  foundBooks(books);
	                } catch(reason) {
	                  failure(reason);
	                }
	              }
	            });
	          } catch(error) {
	            failure(err);
	          }
	          // success
	        }
	      });
	      ```
	
	      Promise Example;
	
	      ```javascript
	      findAuthor().
	        then(findBooksByAuthor).
	        then(function(books){
	          // found books
	      }).catch(function(reason){
	        // something went wrong
	      });
	      ```
	
	      @method then
	      @param {Function} onFulfilled
	      @param {Function} onRejected
	      Useful for tooling.
	      @return {Promise}
	    */
	      then: lib$es6$promise$then$$default,
	
	    /**
	      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	      as the catch block of a try/catch statement.
	
	      ```js
	      function findAuthor(){
	        throw new Error('couldn't find that author');
	      }
	
	      // synchronous
	      try {
	        findAuthor();
	      } catch(reason) {
	        // something went wrong
	      }
	
	      // async with promises
	      findAuthor().catch(function(reason){
	        // something went wrong
	      });
	      ```
	
	      @method catch
	      @param {Function} onRejection
	      Useful for tooling.
	      @return {Promise}
	    */
	      'catch': function(onRejection) {
	        return this.then(null, onRejection);
	      }
	    };
	    var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;
	    function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
	      this._instanceConstructor = Constructor;
	      this.promise = new Constructor(lib$es6$promise$$internal$$noop);
	
	      if (!this.promise[lib$es6$promise$$internal$$PROMISE_ID]) {
	        lib$es6$promise$$internal$$makePromise(this.promise);
	      }
	
	      if (lib$es6$promise$utils$$isArray(input)) {
	        this._input     = input;
	        this.length     = input.length;
	        this._remaining = input.length;
	
	        this._result = new Array(this.length);
	
	        if (this.length === 0) {
	          lib$es6$promise$$internal$$fulfill(this.promise, this._result);
	        } else {
	          this.length = this.length || 0;
	          this._enumerate();
	          if (this._remaining === 0) {
	            lib$es6$promise$$internal$$fulfill(this.promise, this._result);
	          }
	        }
	      } else {
	        lib$es6$promise$$internal$$reject(this.promise, lib$es6$promise$enumerator$$validationError());
	      }
	    }
	
	    function lib$es6$promise$enumerator$$validationError() {
	      return new Error('Array Methods must be provided an Array');
	    }
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
	      var length  = this.length;
	      var input   = this._input;
	
	      for (var i = 0; this._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
	        this._eachEntry(input[i], i);
	      }
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
	      var c = this._instanceConstructor;
	      var resolve = c.resolve;
	
	      if (resolve === lib$es6$promise$promise$resolve$$default) {
	        var then = lib$es6$promise$$internal$$getThen(entry);
	
	        if (then === lib$es6$promise$then$$default &&
	            entry._state !== lib$es6$promise$$internal$$PENDING) {
	          this._settledAt(entry._state, i, entry._result);
	        } else if (typeof then !== 'function') {
	          this._remaining--;
	          this._result[i] = entry;
	        } else if (c === lib$es6$promise$promise$$default) {
	          var promise = new c(lib$es6$promise$$internal$$noop);
	          lib$es6$promise$$internal$$handleMaybeThenable(promise, entry, then);
	          this._willSettleAt(promise, i);
	        } else {
	          this._willSettleAt(new c(function(resolve) { resolve(entry); }), i);
	        }
	      } else {
	        this._willSettleAt(resolve(entry), i);
	      }
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
	      var promise = this.promise;
	
	      if (promise._state === lib$es6$promise$$internal$$PENDING) {
	        this._remaining--;
	
	        if (state === lib$es6$promise$$internal$$REJECTED) {
	          lib$es6$promise$$internal$$reject(promise, value);
	        } else {
	          this._result[i] = value;
	        }
	      }
	
	      if (this._remaining === 0) {
	        lib$es6$promise$$internal$$fulfill(promise, this._result);
	      }
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
	      var enumerator = this;
	
	      lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {
	        enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
	      }, function(reason) {
	        enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
	      });
	    };
	    function lib$es6$promise$polyfill$$polyfill() {
	      var local;
	
	      if (typeof global !== 'undefined') {
	          local = global;
	      } else if (typeof self !== 'undefined') {
	          local = self;
	      } else {
	          try {
	              local = Function('return this')();
	          } catch (e) {
	              throw new Error('polyfill failed because global object is unavailable in this environment');
	          }
	      }
	
	      var P = local.Promise;
	
	      if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
	        return;
	      }
	
	      local.Promise = lib$es6$promise$promise$$default;
	    }
	    var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;
	
	    var lib$es6$promise$umd$$ES6Promise = {
	      'Promise': lib$es6$promise$promise$$default,
	      'polyfill': lib$es6$promise$polyfill$$default
	    };
	
	    /* global define:true module:true window: true */
	    if ("function" === 'function' && __webpack_require__(82)['amd']) {
	      !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return lib$es6$promise$umd$$ES6Promise; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module !== 'undefined' && module['exports']) {
	      module['exports'] = lib$es6$promise$umd$$ES6Promise;
	    } else if (typeof this !== 'undefined') {
	      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
	    }
	
	    lib$es6$promise$polyfill$$default();
	}).call(this);
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(79), (function() { return this; }()), __webpack_require__(80)(module)))

/***/ },
/* 79 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 81 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 83 */
/***/ function(module, exports) {

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
	
	var defaultStyles = {
		background: 'rgba(61, 61, 61, 1)',
		accentBackground: 'rgba(175, 110, 232, 1)',
		accentText: 'rgba(255, 255, 255, 1)',
		text: 'rgba(255, 255, 255, 1)',
		link: 'rgba(255, 255, 255, 1)',
		secondaryBackground: 'rgba(70, 70, 70, 1)',
		secondaryText: 'rgba(247, 247, 247, 1)',
		inputBackground: 'rgba(70, 70, 70, 1)',
		inputText: 'rgba(247, 247, 247, 1)'
	};
	
	module.exports = defaultStyles;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(__webpack_module_template_argument_0__);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(3)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/raw-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../../../node_modules/raw-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }
/******/ ])))
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0NWE2NmM3NTYyNWFlOTM5OWMxYyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3M/MjY5OSIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRIYW5kbGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRIYW5kbGVycy9ldmVudHMvc3RhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXNzaWduVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvZXEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcHlPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NyZWF0ZUFzc2lnbmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXBwbHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzSXRlcmF0ZWVDYWxsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5TGlrZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50SGFuZGxlcnMvdGVtcGxhdGVzL3N0YXJ0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50SGFuZGxlcnMvZXZlbnRzL3Jlc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRIYW5kbGVycy9ldmVudHMvcmVjZWl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRIYW5kbGVycy90ZW1wbGF0ZXMvcmVjZWl2ZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9ldmVudEhhbmRsZXJzL2V2ZW50cy9zZW5kLmpzIiwid2VicGFjazovLy8uL34vQHdhdHNvbi12aXJ0dWFsLWFnZW50L2NsaWVudC1zZGsvbGliL3dlYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRIYW5kbGVycy90ZW1wbGF0ZXMvc2VuZC5odG1sIiwid2VicGFjazovLy8uL3NyYy9ldmVudEhhbmRsZXJzL2V2ZW50cy9zZW5kLW1vY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50SGFuZGxlcnMvZXZlbnRzL3NlbmQtaW5wdXQtbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRIYW5kbGVycy9ldmVudHMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50SGFuZGxlcnMvZXZlbnRzL2Vycm9yLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudEhhbmRsZXJzL2V2ZW50cy9zY3JvbGwtdG8tYm90dG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvdGVtcGxhdGVzL2Jhc2UuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy90ZW1wbGF0ZXMvYWRkLWxvY2F0aW9ucy1pdGVtLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvdGVtcGxhdGVzL2FkZC1sb2NhdGlvbi1pdGVtLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvdGVtcGxhdGVzL2hvdXJzLWNsb3NlZC5odG1sIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3RlbXBsYXRlcy9ob3Vycy1vcGVuLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvdGVtcGxhdGVzL2hvdXJzLXRvZGF5LW9wZW4uaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy90ZW1wbGF0ZXMvaG91cnMtdG9kYXktY2xvc2VkLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvdGVtcGxhdGVzL2NyZWF0ZS1kb20tYXJyYXkuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9yZXF1ZXN0LWdlb2xvY2F0aW9uLWxhdGxvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvY2hvb3NlLWxvY2F0aW9uLXR5cGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvY2hvb3NlLWxvY2F0aW9uLXR5cGUvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9jaG9vc2UtbG9jYXRpb24tdHlwZS90ZW1wbGF0ZXMvYmFzZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2Nob29zZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9jaG9vc2Uvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9jaG9vc2UvdGVtcGxhdGVzL2J1dHRvbi5odG1sIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2Zvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvZm9ybS9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL3NyYy9wcm9maWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2Zvcm0vdGVtcGxhdGVzL2Jhc2UuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9mb3JtL3RlbXBsYXRlcy9maWVsZC5odG1sIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2NjLXZhbGlkYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9jYy12YWxpZGF0b3Ivc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9jYy12YWxpZGF0b3IvdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9jYy12YWxpZGF0b3IvdGVtcGxhdGVzL2Jhc2UuaHRtbCIsIndlYnBhY2s6Ly8vLi9+L2VzNi1wcm9taXNlL2Rpc3QvZXM2LXByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vdmVydHggKGlnbm9yZWQpIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvc3R5bGVzLmNzcz85ZmI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBLGtFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLE9BQU87QUFDbkIsYUFBWSxPQUFPO0FBQ25CLGFBQVksT0FBTztBQUNuQixhQUFZLE9BQU87QUFDbkIsYUFBWSxPQUFPO0FBQ25CLGFBQVksT0FBTztBQUNuQixhQUFZLE9BQU87QUFDbkIsYUFBWSxTQUFTO0FBQ3JCLGFBQVksT0FBTztBQUNuQixhQUFZLE9BQU87QUFDbkIsYUFBWSxPQUFPO0FBQ25CLGFBQVksT0FBTztBQUNuQixhQUFZLE9BQU87QUFDbkIsYUFBWSxPQUFPO0FBQ25CLGFBQVksT0FBTztBQUNuQixhQUFZLE9B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QUFDNUU7QUFDQSxLQUFJO0FBQ0o7QUFDQSxLQUFJO0FBQ0osSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDM1BBO0FBQ0E7QUFDQTtBQUNBLGtFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBOztBQUVBOzs7Ozs7O0FDckVBO0FBQ0E7QUFDQTtBQUNBLGtFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7O0FBRUE7QUFDQSxtQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0Esa0VBQWlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBaUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBLGtFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0Esa0VBQWlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTBDLFNBQVM7QUFDbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBRUE7QUFDQTtBQUNBLHNCQUFxQiwrQkFBK0I7QUFDcEQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixRQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0EsVUFBUztBQUNULHdCQUF1QixRQUFRO0FBQy9COztBQUVBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtRUFBa0UsUUFBUTs7QUFFMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1FQUFrRSxRQUFRO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBcUMsUUFBUTs7QUFFN0M7O0FBRUEsc0JBQXFCLHdCQUF3QjtBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUDtBQUNBO0FBQ0EsMEJBQXlCLFlBQVk7QUFDckM7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0EsZUFBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlO0FBQ2Y7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQSxlQUFjLFNBQVM7QUFDdkIsZUFBYyxTQUFTO0FBQ3ZCO0FBQ0EsZ0JBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQSxlQUFjLFNBQVM7QUFDdkI7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXFCLGtFQUFrRTtBQUN2RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULHVEQUFzRCxnQkFBZ0IsRUFBRTtBQUN4RTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxREFBeUIsd0NBQXdDLEVBQUU7QUFDbkUsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxFQUFDOzs7Ozs7Ozs7QUM3N0JEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCLFVBQVU7Ozs7Ozs7QUNuTHRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEEsZ0I7Ozs7OztBQ0FBLDhCQUE2QixtREFBbUQ7Ozs7Ozs7QUNBaEY7QUFDQTtBQUNBO0FBQ0Esa0VBQWlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDMUJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQXNGO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsaUNBQWdDLFVBQVUsRUFBRTtBQUM1QyxFIiwiZmlsZSI6IklCTUNoYXRDbGllbnQtbGF0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJJQk1DaGF0XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIklCTUNoYXRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSUJNQ2hhdFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNDVhNjZjNzU2MjVhZTkzOTljMWNcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnJlcXVpcmUoJy4vc3R5bGVzLmNzcycpO1xuXG52YXIgYm9vdHN0cmFwID0gcmVxdWlyZSgnLi9ib290c3RyYXAnKTtcblxuLyoqXG4gKiBAbmFtZXNwYWNlIElCTUNoYXRcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0LyoqXG5cdCAqIEdlbmVyYXRlIHRoZSBjaGF0IHdpZGdldCBpbnRvIGFuIGVsZW1lbnQuXG5cdCAqIEBmdW5jdGlvbiBpbml0XG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5lbCAtIFRha2VzIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgSUQgb2YgYW4gaHRtbCBlbGVtZW50IHRvIGJlIHJlbmRlcmVkIHRvIE9SIGEgc2VsZWN0ZWQgZWxlbWVudFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLmJvdElEIC0gVGhlIHVuaXF1ZSBpZGVudGlmaWVyIG9mIHlvdXIgVmlydHVhbCBBZ2VudC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy51c2VySUQgLSBBIGhhc2hlZCBub24taWRlbnRpZmlhYmxlIChpLmUuIG5vdCBhIHVzZXJzIGVtYWlsIGFkZHJlc3Mgb3IgcHVibGljIHVzZXIgaWQpIHVuaXF1ZSBJRCB1c2VkIGZvciB0cmFja2luZyBpbiB0aGUgRW5nYWdlbWVudCBNZXRyaWNzIGRhc2hib2FyZC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5iYXNlVVJMPWh0dHBzOi8vYXBpLmlibS5jb20vdmlydHVhbGFnZW50L3J1bi9hcGkvdjEvIC0gb3B0aW9uYWw6IHNwZWNpZmllcyBhIGRpZmZlcmVudCBib3QgaG9zdGluZyBzZXJ2ZXIuIFRoZSBtb3N0IGNvbW1vbiB1c2VjYXNlIGZvciB0aGlzIHBhcmFtIGlzIHRvIHBvaW50IHRoZSB3aWRnZXQgdG8gYSBzZXJ2ZXIgdGhhdCB3aWxsIGFkZCBYLUlCTS1DbGllbnQtSWQgYW5kIFgtSUJNLUNsaWVudC1TZWNyZXQgaGVhZGVycyB0byB0aGUgcmVxdWVzdC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5YSUJNQ2xpZW50SUQgLSBvcHRpb25hbDogWW91ciBJQk1DbGllbnRJRC4uLiB0aGlzIHNob3VsZCBub3QgYmUgbWFkZSBwdWJsaWMgaW4gYSBwdWJsaWMgZW52aXJvbm1lbnQuIEluY2x1ZGluZyB0aGlzIHdpbGwgYWRkIFgtSUJNLUNsaWVudC1JZCBhcyBhIGhlYWRlciB0byB5b3VyIHJlcXVlc3QuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuWElCTUNsaWVudFNlY3JldCAtIG9wdGlvbmFsOiBZb3VyIElCTUNsaWVudFNlY3JldC4uLiB0aGlzIHNob3VsZCBub3QgYmUgbWFkZSBwdWJsaWMgaW4gYSBwdWJsaWMgZW52aXJvbm1lbnQuIEluY2x1ZGluZyB0aGlzIHdpbGwgYWRkIFgtSUJNLUNsaWVudC1TZWNyZXQgYXMgYSBoZWFkZXIgdG8geW91ciByZXF1ZXN0LlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb25maWcuZXJyb3JIYW5kbGVyIC0gb3B0aW9uYWw6IEEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhbiBlcnJvciBvYmplY3QgYXMgYSBwYXJhbSBpZiB0aGVyZSBpcyBhIHByb2JsZW0gd2l0aCBjb21tdW5pY2F0aW5nIHdpdGggeW91ciBWaXJ0dWFsIEFnZW50LiBCeSBkZWZhdWx0LCBpZiBhbiBlcnJvciBpcyByZWNlaXZlZCwgdGhlIHVzZXIgaXMgZXNjYWxhdGVkIHRvIGEgbGl2ZSBhZ2VudC4gWW91IG1heSwgaG93ZXZlciwgd2FudCB0byBoYW5kbGUgc29tZSBlcnJvcnMgZGlmZmVyZW50bHkgKDQwMSBmb3IgaW5zdGFuY2UpXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcuZXJyb3JIYW5kbGVyQ29udGV4dCAtIG9wdGlvbmFsOiBBIFwidGhpc1wiIHZhbHVlIGZvciB0aGUgZXJyb3JIYW5sZGVyLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLnN0eWxlcyAtIG9wdGlvbmFsOiBPdmVycmlkZSBkZWZhdWx0IHN0eWxpbmcuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuc3R5bGVzLmJhY2tncm91bmQ9cmdiYSg2MSwgNjEsIDYxLCAxKSAtIG9wdGlvbmFsOiByZ2JhKFgsIFgsIFgsIFgpIG9yIGhleCBjb2RlIGZvciBiYWNrZ3JvdW5kIGNvbG9yXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuc3R5bGVzLnRleHQ9cmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAtIG9wdGlvbmFsOiByZ2JhKFgsIFgsIFgsIFgpIG9yIGhleCBjb2RlIGZvciBtYWluIHRleHQgY29sb3Jcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zdHlsZXMubGluaz1yZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIC0gb3B0aW9uYWw6IHJnYmEoWCwgWCwgWCwgWCkgb3IgaGV4IGNvZGUgZm9yIGNvbG9yIG9mIGxpbmtzIGluIHRleHRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zdHlsZXMuc2Vjb25kYXJ5QmFja2dyb3VuZD1yZ2JhKDcwLCA3MCwgNzAsIDEpIC0gb3B0aW9uYWw6IHJnYmEoWCwgWCwgWCwgWCkgb3IgaGV4IGNvZGUgZm9yIGJhY2tncm91bmQgY29sb3Igb2YgY2hhdCBidWJibGVzIGFuZCBvdGhlciBzZWNvbmRhcnkgaW5mb1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnN0eWxlcy5zZWNvbmRhcnlUZXh0PXJnYmEoMjQ3LCAyNDcsIDI0NywgMSkgLSBvcHRpb25hbDogcmdiYShYLCBYLCBYLCBYKSBvciBoZXggY29kZSBmb3IgY29sb3Igb2YgY2hhdCBidWJibGUgdGV4dCBhbmQgb3RoZXIgc2Vjb25kYXJ5IGluZm9cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zdHlsZXMuaW5wdXRCYWNrZ3JvdW5kPXJnYmEoNzAsIDcwLCA3MCwgMSkgLSBvcHRpb25hbDogcmdiYShYLCBYLCBYLCBYKSBvciBoZXggY29kZSBmb3IgYmFja2dyb3VuZCBjb2xvciBvZiBpbnB1dCBlbGVtZW50cyBpbiBmb3Jtc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnN0eWxlcy5pbnB1dFRleHQ9cmdiYSgyNDcsIDI0NywgMjQ3LCAxKSAtIG9wdGlvbmFsOiByZ2JhKFgsIFgsIFgsIFgpIG9yIGhleCBjb2RlIGZvciBjb2xvciBvZiBpbnB1dCB0ZXh0IGluIGZvcm1zXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuc3R5bGVzLmFjY2VudFRleHQ9cmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAtIG9wdGlvbmFsOiByZ2JhKFgsIFgsIFgsIFgpIG9yIGhleCBjb2RlIGZvciB0ZXh0IGNvbG9ycyB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYWNjZW50QmFja2dyb3VuZCBpLmUuIGJ1dHRvbiB0ZXh0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuc3R5bGVzLmFjY2VudEJhY2tncm91bmQ9cmdiYSgxNzUsIDExMCwgMjMyLCAxKSAtIG9wdGlvbmFsOiByZ2JhKFgsIFgsIFgsIFgpIG9yIGhleCBjb2RlIGZvciBhY2NlbnQgY29sb3JzIHVzZWQgYnkgdGhlIGNoYXQgYXBwbGljYXRpb24gaS5lLiBidXR0b25zXG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQuaW5pdCh7XG5cdCAqICBlbDogJ215X2RpdicsXG5cdCAqICBib3RJRDogJ3h4eHh4eHh4eHh4eHh4J1xuXHQgKiAgc3R5bGVzOiB7XG5cdCAqICAgIGJhY2tncm91bmQ6IFwiIzAwMDAwMFwiXG5cdCAqICB9XG5cdCAqIH0pLnRoZW4oZnVuY3Rpb24oKXtcblx0ICogICAgIGNvbnNvbGUubG9nKCdpbml0aWFsaXplJyk7XG5cdCAqIH0pO1xuXHQgKiAvL29yXG5cdCAqIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teS13aWRnZXQtY29udGFpbmVyJyk7XG5cdCAqIElCTUNoYXQuaW5pdCh7XG5cdCAqICBlbDogZWwsXG5cdCAqICBib3RJRDogJ3h4eHh4eHh4eHh4eHh4J1xuXHQgKiAgc3R5bGVzOiB7XG5cdCAqICAgIGJhY2tncm91bmQ6IFwiIzAwMDAwMFwiXG5cdCAqICB9XG5cdCAqIH0pLnRoZW4oZnVuY3Rpb24oKXtcblx0ICogICAgIGNvbnNvbGUubG9nKCdpbml0aWFsaXplJyk7XG5cdCAqIH0pO1xuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX0gUmV0dXJuczogQSBwcm9taXNlIHNvIHlvdSBjYW4gY2FsbCBmdW5jdGlvbnMgYWZ0ZXIgdGhlIHdpZGdldCBoYXMgYmVlbiBpbml0aWFsaXplZC5cblx0ICovXG5cdGluaXQ6IGJvb3RzdHJhcC5pbml0LFxuXHQvKipcblx0ICogUmVzdGFydCB0aGUgY2hhdCB3aWRnZXQuIFRoZSBzYW1lIGNoYXQgd2lkZ2V0IGlzIHJlbmRlcmVkIGluIHRoZSBzYW1lIGh0bWwgZWxlbWVudCBhcyB3YXMgc3BlY2lmaWVkIGluIHRoZSBpbml0IG1ldGhvZC5cblx0ICogQGZ1bmN0aW9uIHJlc3RhcnRcblx0ICogQG1lbWJlcm9mIElCTUNoYXRcblx0ICogQGV4YW1wbGVcblx0ICogSUJNQ2hhdC5yZXN0YXJ0KCkudGhlbihmdW5jdGlvbigpe1xuXHQgKiAgICAgY29uc29sZS5sb2coJ3Jlc3RhcnRlZCcpO1xuXHQgKiB9KTtcblx0ICogQHJldHVybnMge1Byb21pc2V9IFJldHVybnM6IEEgcHJvbWlzZSBzbyB5b3UgY2FuIGNhbGwgZnVuY3Rpb25zIGFmdGVyIHRoZSB3aWRnZXQgaGFzIGJlZW4gaW5pdGlhbGl6ZWQuXG5cdCAqL1xuXHRyZXN0YXJ0OiBib290c3RyYXAucmVzdGFydCxcblx0LyoqXG5cdCAqIERlc3Ryb3kgdGhlIGNoYXQgd2lkZ2V0IGFuZCByZXN0b3JlIHRoZSBvcmlnaW5hbCBIVE1MIGNvbnRlbnQuIFVzZWZ1bCBpZiB0aGUgY2hhdCB3aWRnZXQgaXMgZGlzcGxheWVkIGluIGEgbW9kYWwsIGZvciBleGFtcGxlLCBhbmQgeW91IHdhbnQgaXQgdG8gZ28gYXdheSB3aGVuIHRoZSBtb2RhbCBpcyBjbG9zZWQuXG5cdCAqIEBmdW5jdGlvbiBkZXN0cm95XG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQuZGVzdHJveSgpLnRoZW4oZnVuY3Rpb24oKXtcblx0ICogICAgIGNvbnNvbGUubG9nKCdkZXN0cm95ZWQnKTtcblx0ICogfSk7XG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfSBSZXR1cm5zOiBBIHByb21pc2Ugc28geW91IGNhbiBjYWxsIGZ1bmN0aW9ucyBhZnRlciB0aGUgd2lkZ2V0IGhhcyBiZWVuIGRlc3Ryb3llZC5cblx0ICovXG5cdGRlc3Ryb3k6IGJvb3RzdHJhcC5kZXN0cm95LFxuXG5cdC8qKlxuXHQgKiBTZW5kIGEgbWVzc2FnZSB0byB0aGUgY2hhdCB3aWRnZXQgZnJvbSBvdXRzaWRlIHRoZSBjaGF0IHdpZGdldC4gVGhpcyBtZXNzYWdlIHdpbGwgYmUgZGlzcGxheWVkIGluIHRoZSBpbnRlcmZhY2UuXG5cdCAqIEBmdW5jdGlvbiBzZW5kXG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIC0gQSBtZXNzYWdlIHlvdSB3YW50IHRvIHNlbmQgdG8gdGhlIGNoYXQgd2lkZ2V0LlxuXHQgKiBAZXhhbXBsZVxuXHQgKiBJQk1DaGF0LnNlbmQoJ0hlbGxvIHdvcmxkLicpO1xuXHQgKi9cblx0c2VuZDogYm9vdHN0cmFwLnNlbmQsXG5cblx0LyoqXG5cdCAqIE1vY2sgcmVjZWl2aW5nIGEgbWVzc2FnZSB0byB0aGUgY2hhdCB3aWRnZXQgZnJvbSBvdXRzaWRlIHRoZSBjaGF0IHdpZGdldC5cblx0ICogQGZ1bmN0aW9uIHJlY2VpdmVcblx0ICogQG1lbWJlcm9mIElCTUNoYXRcblx0ICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgLSBBIG1lc3NhZ2UgeW91IHdhbnQgdG8gc2hvdyBhcyByZWNlaXZlZCBpbiB0aGUgY2hhdCB3aWRnZXQuXG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQucmVjZWl2ZSgnSGVsbG8gd29ybGQuJyk7XG5cdCAqL1xuXHRyZWNlaXZlOiBib290c3RyYXAucmVjZWl2ZSxcblxuXHQvKipcblx0ICogU2VuZCBhIG1lc3NhZ2UgdG8gdGhlIGNoYXQgd2lkZ2V0IGZyb20gb3V0c2lkZSB0aGUgY2hhdCB3aWRnZXQuIFRoaXMgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZCBpbiB0aGUgaW50ZXJmYWNlLCBidXQgd2lsbCBub3QgYWN0dWFsbHkgZ2V0IHNlbnQgdG8gdGhlIHNlcnZlci5cblx0ICogQGZ1bmN0aW9uIHNlbmRNb2NrXG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIC0gQSBtZXNzYWdlIHlvdSB3YW50IHRvIHByZXRlbmQgdG8gc2VuZCB0byB0aGUgY2hhdCB3aWRnZXQuXG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQuc2VuZE1vY2soJ0hlbGxvIHdvcmxkLicpO1xuXHQgKi9cblx0c2VuZE1vY2s6IGJvb3RzdHJhcC5zZW5kTW9jayxcblxuXHQvKipcblx0ICogU2VuZCBhIG1lc3NhZ2UgdG8gdGhlIGNoYXQgd2lkZ2V0IGZyb20gb3V0c2lkZSB0aGUgY2hhdCB3aWRnZXQuIFRoaXMgbWVzc2FnZSB3aWxsIE5PVCBiZSBkaXNwbGF5ZWQgaW4gdGhlIGludGVyZmFjZS5cblx0ICogQGZ1bmN0aW9uIHNlbmRTaWxlbnRseVxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSAtIEEgbWVzc2FnZSB5b3Ugd2FudCB0byBzZW5kIHRvIHRoZSBjaGF0IHdpZGdldCwgYnV0IG5vdCBkZSBkaXNwbGF5ZWQgaW4gdGhlIGludGVyZmFjZS5cblx0ICogQGV4YW1wbGVcblx0ICogSUJNQ2hhdC5zZW5kU2lsZW50bHkoJ0hlbGxvIHdvcmxkLicpO1xuXHQgKi9cblx0c2VuZFNpbGVudGx5OiBib290c3RyYXAuc2VuZFNpbGVudGx5LFxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlciBhIGN1c3RvbSBsYXlvdXQgd2l0aCB0aGUgY2hhdCB3aWRnZXQuIENhbGwgcmVnaXN0ZXJMYXlvdXQoKSBiZWZvcmUgeW91IGNhbGwgaW5pdCgpLlxuXHQgKiBAZnVuY3Rpb24gcmVnaXN0ZXJMYXlvdXRcblx0ICogQG1lbWJlcm9mIElCTUNoYXRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGxheW91dCAtIFRoZSBuYW1lIG9mIHRoZSBsYXlvdXQgeW91ciBib3Qgd2lsbCBwcm92aWRlIHdoZW4gaXQgaXMgdHJpZ2dlcmVkIHRvIHJlbmRlciBhIGxheW91dC5cblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gaW5pdCAtIEEgZnVuY3Rpb24gdGhhdCBydW5zIG9uZSB0aW1lLCB3aGVuIHRoZSBjaGF0IHdpZGdldCBpcyBib290c3RyYXBwZWQuIEJlIHN1cmUgdG8gc3Vic2NyaWJlIHRvIHRoZSBcImxheW91dDpZT1VSX0xBWU9VVF9OQU1FXCIgZXZlbnQgaW4gdGhpcyBmdW5jdGlvbi5cblx0ICogQGV4YW1wbGVcblx0ICogdmFyIFBsdW1iZXJCcm90aGVycyA9IHJlcXVpcmUoJy4uL3BsdW1iZXItYnJvdGhlcnMtZ2FtZScpO1xuXHQgKiB2YXIgY29uZmlnID0ge307XG5cdCAqXG5cdCAqIGZ1bmN0aW9uIGluaXRHYW1lKCkge1xuXHQgKiAgIElCTUNoYXQuc3Vic2NyaWJlKCdsYXlvdXQ6cGx1bWJlci1icm90aGVycy1nYW1lJywgZnVuY3Rpb24ob2JqKSB7XG5cdCAqICAgICB2YXIgdXVpZCA9IG9iai51dWlkO1xuXHQgKiAgICAgdmFyIHBhcmVudEVsZW1lbnQgPSBvYmouZWxlbWVudDtcblx0ICogICAgIHZhciBsYXlvdXRFbGVtZW50ID0gb2JqLmxheW91dEVsZW1lbnQ7XG5cdCAqICAgICB2YXIgbXNnRWxlbWVudCA9IG9iai5tc2dFbGVtZW50O1xuXHQgKiAgICAgdmFyIG1lc3NhZ2UgPSBvYmoubWVzc2FnZTtcblx0ICogICAgIHZhciBkYXRhID0gb2JqLmRhdGE7XG5cdCAqICAgICBtc2dFbGVtZW50LnRleHRDb250ZW50ID0gJ0xvYWRpbmcgUGx1bWJlciBCcm90aGVycyEnO1xuXHQgKiAgICAgdmFyIGJyb3RoZXJzID0gbmV3IFBsdW1iZXJCcm90aGVycygpO1xuXHQgKiAgICAgYnJvdGhlcnMucmVuZGVyKGxheW91dEVsZW1lbnQsIGRhdGEpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdCAqICAgICAgIG1zZ0VsZW1lbnQudGV4dENvbnRlbnQgPSAnRW5qb3kgeW91ciBnYW1lIG9mIFBsdW1iZXIgQnJvdGhlcnMhJztcblx0ICogICAgIH0pO1xuXHQgKiAgIH1cblx0ICogfSk7XG5cdCAqXG5cdCAqIElCTUNoYXQucmVnaXN0ZXJMYXlvdXQoJ3BsdW1iZXItYnJvdGhlcnMtZ2FtZScsIGluaXRHYW1lKTtcblx0ICogSUJNQ2hhdC5pbml0KGNvbmZpZyk7XG5cdCAqL1xuXHRyZWdpc3RlckxheW91dDogYm9vdHN0cmFwLnJlZ2lzdGVyTGF5b3V0LFxuXG5cdC8qKlxuXHQgKiBTZXQgZm9jdXMgdG8gdGhlIGNoYXQgdGV4dCBib3guIFVzZWZ1bCBpZiB5b3Ugd2FudCB1c2VycyB0byBiZSBhYmxlIHRvIGp1c3Qgc3RhcnQgdHlwaW5nIGludG8gdGhlIHRleHQgYm94IHdpdGhvdXQgaGF2aW5nIHRvIGNsaWNrIGluIHRoZSB0ZXh0IGJveCBmaXJzdCB0byBzZXQgZm9jdXMuXG5cdCAqIEBmdW5jdGlvbiBmb2N1c0lucHV0XG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQuZm9jdXNJbnB1dCgpO1xuXHQgKi9cblxuXHRmb2N1c0lucHV0OiBib290c3RyYXAuZm9jdXNJbnB1dCxcblx0LyoqXG5cdCAqIFByZXZlbnQgdXNlcnMgZnJvbSBzdWJtaXR0aW5nIG1lc3NhZ2VzIGluIHRoZSBjaGF0IHRleHQgYm94LiBVc2VmdWwgd2hlbiB5b3Ugd2FudCB0aGUgdXNlciB0byBpbnRlcmFjdCB3aXRoIGEgbGF5b3V0IGluc3RlYWQuXG5cdCAqIEBmdW5jdGlvbiBkaXNhYmxlSW5wdXRcblx0ICogQG1lbWJlcm9mIElCTUNoYXRcblx0ICogQGV4YW1wbGVcblx0ICogSUJNQ2hhdC5kaXNhYmxlSW5wdXQoKTtcblx0ICovXG5cdGRpc2FibGVJbnB1dDogYm9vdHN0cmFwLmRpc2FibGVJbnB1dCxcblxuXHQvKipcblx0ICogRW5hYmxlIHVzZXJzIHRvIHN1Ym1pdCBtZXNzYWdlcyBpbiB0aGUgY2hhdCB0ZXh0IGJveC4gVXNlZnVsIHdoZW4geW91IHdhbnQgdXNlcnMgdG8gYmUgYWJsZSB0byByZXR1cm4gdG8gYWRkaW5nIG1lc3NhZ2VzIHRvIHRoZSBjaGF0IHRleHQgYm94IGFmdGVyIGludGVyYWN0aW5nIHdpdGggYSBsYXlvdXQuXG5cdCAqIEBmdW5jdGlvbiBlbmFibGVJbnB1dFxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAZXhhbXBsZVxuXHQgKiBJQk1DaGF0LmVuYWJsZUlucHV0KCk7XG5cdCAqL1xuXHRlbmFibGVJbnB1dDogYm9vdHN0cmFwLmVuYWJsZUlucHV0LFxuXG5cdC8qKlxuXHQgKiBTdWJzY3JpYmUgdG8gYW4gSUJNQ2hhdCBldmVudC5cblx0ICogQGZ1bmN0aW9uIHN1YnNjcmliZVxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gVGFrZXMgYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBuYW1lIG9mIHRoZSBldmVudFxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIGZ1bmN0aW9uIHRvIHJ1biB3aGVuIGV2ZW50IGlzIGNhbGxlZFxuXHQgKiBAcGFyYW0gY29udGV4dCAtIG9wdGlvbmFsOiB2YWx1ZSBvZiBcInRoaXNcIiBpbiB0aGUgZnVuY3Rpb25cblx0ICogQGV4YW1wbGVcblx0ICogSUJNQ2hhdC5zdWJzY3JpYmUoJ3RoZS1lbmQtb2YtdGhlLXdvcmxkJywgZnVuY3Rpb24obWVzc2FnZSkge1xuXHQgKiAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuXHQgKiB9KTtcblx0ICovXG5cdHN1YnNjcmliZTogYm9vdHN0cmFwLnN1YnNjcmliZSxcblx0LyoqXG5cdCAqIFB1Ymxpc2ggYW4gSUJNQ2hhdCBldmVudC5cblx0ICogQGZ1bmN0aW9uIHB1Ymxpc2hcblx0ICogQG1lbWJlcm9mIElCTUNoYXRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtIEEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgbmFtZSBvZiB0aGUgZXZlbnQgZGF0YVxuXHQgKiBAcGFyYW0gZGF0YSAtIERhdGEgdG8gcGFzcyB0byB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gb2YgYW55IHN1YnNjcmliZWQgZnVuY3Rpb25zLiBBY2NlcHRzIGFueSBkYXRhIHR5cGUuXG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQucHVibGlzaCgndGhlLWVuZC1vZi10aGUtd29ybGQnLCAncGFuaWMhJyk7XG5cdCAqL1xuXHRwdWJsaXNoOiBib290c3RyYXAucHVibGlzaCxcblxuXHQvKipcblx0ICogQG5hbWVzcGFjZSBwcm9maWxlXG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqL1xuXHRwcm9maWxlOiB7XG5cdFx0LyoqXG5cdFx0KiBHZXQgYW4gaXRlbSBmcm9tIHRoZSB1c2VyIHByb2ZpbGUgYmFzZWQgb24ga2V5LlxuXHRcdCogQG1lbWJlcm9mIElCTUNoYXQucHJvZmlsZVxuXHRcdCogQGZ1bmN0aW9uIGdldFxuXHRcdCogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBuYW1lZCBrZXkgb2YgdGhlIHZhbHVlIHlvdSBhcmUgYWNjZXNzaW5nLlxuXHRcdCogQGV4YW1wbGVcblx0XHQqIElCTUNoYXQucHJvZmlsZS5nZXQoJ2ZpcnN0X25hbWUnKTtcblx0XHQqIEByZXR1cm5zIHtBbnl9IFJldHVybnM6IHRoZSB2YWx1ZSBvZiB0aGUga2V5IGluIHRoZSBwcm9maWxlIG1hcC5cblx0XHQqL1xuXHRcdGdldDogYm9vdHN0cmFwLnByb2ZpbGUuZ2V0LFxuXHRcdC8qKlxuXHRcdCogU2V0IGFuIGl0ZW0gZnJvbSB0aGUgdXNlciBwcm9maWxlIGJhc2VkIG9uIGtleS5cblx0XHQqIEBtZW1iZXJvZiBJQk1DaGF0LnByb2ZpbGVcblx0XHQqIEBmdW5jdGlvbiBzZXRcblx0XHQqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUgbmFtZWQga2V5IG9mIHRoZSB2YWx1ZSB5b3UgYXJlIHNldHRpbmcuXG5cdFx0KiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBUaGUgdmFsdWUgeW91IGFyZSBzZXR0aW5nLlxuXHRcdCogQHJldHVybnMge09iamVjdH0gUmV0dXJuczogQW4gaW5zdGFuY2Ugb2YgcHJvZmlsZSBmb3IgY2hhaW5pbmcuXG5cdFx0KiBAZXhhbXBsZVxuXHRcdCogSUJNQ2hhdC5wcm9maWxlLnNldCgnZmlyc3RfbmFtZScsICdqb2huJyk7XG5cdFx0Ki9cblx0XHRzZXQ6IGJvb3RzdHJhcC5wcm9maWxlLnNldCxcblx0XHQvKipcblx0XHQqIFNlZSBpZiBhbiBpdGVtIGZyb20gdGhlIHVzZXIgcHJvZmlsZSBleGlzdHMgYmFzZWQgb24ga2V5LlxuXHRcdCogQG1lbWJlcm9mIElCTUNoYXQucHJvZmlsZVxuXHRcdCogQGZ1bmN0aW9uIGhhc1xuXHRcdCogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBuYW1lZCBrZXkgb2YgdGhlIHZhbHVlIHlvdSBhcmUgY2hlY2tpbmcgdGhlIGV4aXN0YW5jZSBvZi5cblx0XHQqIEBleGFtcGxlXG5cdFx0KiBJQk1DaGF0LnByb2ZpbGUuaGFzKCdmaXJzdF9uYW1lJyk7XG5cdFx0KiBAcmV0dXJucyB7Qm9vbGVhbn0gUmV0dXJuczogQm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRoZSBrZXkgZXhpc3RzLlxuXHRcdCovXG5cdFx0aGFzOiBib290c3RyYXAucHJvZmlsZS5oYXMsXG5cdFx0LyoqXG5cdFx0KiBDbGVhciB0aGUgZW50aXJlIHVzZXIgcHJvZmlsZS5cblx0XHQqIEBtZW1iZXJvZiBJQk1DaGF0LnByb2ZpbGVcblx0XHQqIEBmdW5jdGlvbiBjbGVhclxuXHRcdCogQHJldHVybnMge09iamVjdH0gUmV0dXJuczogQW4gaW5zdGFuY2Ugb2YgcHJvZmlsZSBmb3IgY2hhaW5pbmcuXG5cdFx0KiBAZXhhbXBsZVxuXHRcdCogSUJNQ2hhdC5wcm9maWxlLmNsZWFyKCk7XG5cdFx0Ki9cblx0XHRjbGVhcjogYm9vdHN0cmFwLnByb2ZpbGUuY2xlYXIsXG5cdFx0LyoqXG5cdFx0KiBEZWxldGUgYW4gaXRlbSBmcm9tIHRoZSB1c2VyIHByb2ZpbGUgYmFzZWQgb24ga2V5LlxuXHRcdCogQG1lbWJlcm9mIElCTUNoYXQucHJvZmlsZVxuXHRcdCogQGZ1bmN0aW9uIGRlbGV0ZVxuXHRcdCogQHJldHVybnMge09iamVjdH0gUmV0dXJuczogQW4gaW5zdGFuY2Ugb2YgcHJvZmlsZSBmb3IgY2hhaW5pbmcuXG5cdFx0KiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIG5hbWVkIGtleSBvZiB0aGUgdmFsdWUgeW91IGFyZSBkZWxldGluZy5cblx0XHQqIEBleGFtcGxlXG5cdFx0KiBJQk1DaGF0LnByb2ZpbGUuZGVsZXRlKCdmaXJzdF9uYW1lJyk7XG5cdFx0Ki9cblx0XHRkZWxldGU6IGJvb3RzdHJhcC5wcm9maWxlLmRlbGV0ZSxcblx0XHQvKipcblx0XHQqIEl0ZXJhdGUgb3ZlciB0aGUgcHJvZmlsZS5cblx0XHQqIEBtZW1iZXJvZiBJQk1DaGF0LnByb2ZpbGVcblx0XHQqIEBmdW5jdGlvbiBmb3JFYWNoXG5cdFx0KiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIFRoZSBmdW5jdGlvbiB5b3UgYXJlIGNhbGxpbmcgb24gZWFjaCBpdGVtIGluIHRoZSBwcm9maWxlIG9iamVjdC4gVGhpcyBmdW5jdGlvbiBpcyBwYXNzZWQga2V5IGFzIHRoZSBmaXJzdCBhcmd1bWVudCBhbmQgdmFsdWUgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cblx0XHQqIEBwYXJhbSB7T2JqZWN0fSB0aGlzIC0gKG9wdGlvbmFsKSBUaGUgY29udGV4dCB5b3Ugd2lzaCB0byBjYWxsIHRoZSBjYWxsYmFjayBpbi5cblx0XHQqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnM6IEFuIGluc3RhbmNlIG9mIHByb2ZpbGUgZm9yIGNoYWluaW5nLlxuXHRcdCogQGV4YW1wbGVcblx0XHQqIElCTUNoYXQucHJvZmlsZS5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcblx0XHQqICAgY29uc29sZS5sb2coa2V5LCB2YWx1ZSk7XG5cdFx0KiB9KTtcblx0XHQqL1xuXHRcdGZvckVhY2g6IGJvb3RzdHJhcC5wcm9maWxlLmZvckVhY2hcblx0fSxcblxuXHQvKipcblx0ICogQGlnbm9yZVxuXHQgKi9cblx0Y3VycmVudFN1YnNjcmlwdGlvbnM6IGJvb3RzdHJhcC5jdXJyZW50U3Vic2NyaXB0aW9ucyxcblx0LyoqXG5cdCAqIEBpZ25vcmVcblx0ICovXG5cdGRlYnVnOiBib290c3RyYXAuZGVidWdcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL3Jhdy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi9ub2RlX21vZHVsZXMvcmF3LWxvYWRlci9pbmRleC5qcyEuL3N0eWxlcy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL3Jhdy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N0eWxlcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyoqXFxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxcbipcXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcXFwiTGljZW5zZVxcXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcXG4qXFxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcXG4qXFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXFxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcXFwiQVMgSVNcXFwiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3NcXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcXG4qIHRoZSBMaWNlbnNlLlxcbiovXFxuXFxuLklCTUNoYXQtb3V0ZXItY29udGFpbmVyIHtcXG5cXHRtYXgtd2lkdGg6IDc2OHB4O1xcbiAgbWluLXdpZHRoOiAyODhweDtcXG4gIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcXG4gIGJvcmRlcjogbm9uZTtcXG5cXHRtaW4taGVpZ2h0OjEwMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRwYWRkaW5nOjA7XFxuXFx0ZGlzcGxheTp0YWJsZTtcXG5cXHR3aWR0aDoxMDAlO1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcblxcbi8qIEFnZW50IENvbXBvbmVudCAqL1xcblxcbi5JQk1DaGF0LWlubmVyLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTp0YWJsZS1jZWxsO1xcblxcdGhlaWdodDoxMDAlO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwIDhweCAwIDhweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbn1cXG5cXG4vKiBDaGF0IENvbXBvbmVudCAqL1xcblxcbi5JQk1DaGF0LWNoYXQtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OnRhYmxlLXJvdztcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzpcXG59XFxuXFxuLyogTWVzc2FnZXMgQ29tcG9uZW50ICovXFxuXFxuLklCTUNoYXQtbWVzc2FnZXMge1xcblxcdG92ZXJmbG93LXk6IGF1dG87XFxuXFx0b3ZlcmZsb3cteDogaGlkZGVuO1xcblxcdGhlaWdodDphdXRvO1xcbn1cXG5cXG4uSUJNQ2hhdC1tZXNzYWdlcyA+IGRpdiAuSUJNQ2hhdC13YXRzb24tbGF5b3V0IHtcXG5cXHRvcGFjaXR5OjAuODtcXG59XFxuXFxuLklCTUNoYXQtbWVzc2FnZXMgPiBkaXY6bGFzdC1jaGlsZCAuSUJNQ2hhdC13YXRzb24tbGF5b3V0IHtcXG5cXHRvcGFjaXR5OjE7XFxufVxcblxcbi5JQk1DaGF0LW1lc3NhZ2VzIGxhYmVsIHtcXG5cXHRkaXNwbGF5OmJsb2NrO1xcblxcdGZvbnQtd2VpZ2h0OmJvbGQ7XFxuXFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuXFx0cGFkZGluZy1ib3R0b206MC4yNWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1tZXNzYWdlcyBpbnB1dCB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0cGFkZGluZzowLjI1ZW07XFxufVxcblxcbi5JQk1DaGF0LW1lc3NhZ2VzIGJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHRsaW5lLWhlaWdodDogbm9ybWFsO1xcblxcdG92ZXJmbG93OiB2aXNpYmxlO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIGZvciBpbnB1dCAqL1xcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIGZvciBidXR0b24gKi9cXG5cXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xcblxcdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAyZW07XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGxpbmUtaGVpZ2h0OiAyLjVlbTtcXG5cXHRtYXJnaW46MDtcXG59XFxuXFxuLklCTUNoYXQtbWVzc2FnZXMgYnV0dG9uW2Rpc2FibGVkPVxcXCJ0cnVlXFxcIl0ge1xcblxcdGN1cnNvcjogZGVmYXVsdDtcXG4gIG9wYWNpdHk6Ljg7XFxufVxcblxcbi5JQk1DaGF0LW1lc3NhZ2VzIGJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lciB7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbi8qIFdhdHNvbk1lc3NhZ2UgQ29tcG9uZW50ICovXFxuXFxuLklCTUNoYXQtd2F0c29uLW1lc3NhZ2UtY29udGFpbmVyIHtcXG5cXHRtYXJnaW46IDFlbSAwIDFlbSAwO1xcbn1cXG5cXG4uSUJNQ2hhdC13YXRzb24tbWVzc2FnZSB7XFxuXFx0bWFyZ2luLXJpZ2h0OjJlbTtcXG5cXHRwYWRkaW5nOiAwLjFlbTtcXG5cXHRwYWRkaW5nLWxlZnQ6IDFlbTtcXG59XFxuXFxuLklCTUNoYXQtd2F0c29uLWxheW91dCB7XFxuXFx0bWFyZ2luOiAwIDFlbSAwIDFlbTtcXG59XFxuXFxuLyogVXNlck1lc3NhZ2UgQ29tcG9uZW50ICovXFxuXFxuLklCTUNoYXQtdXNlci1tZXNzYWdlLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDFlbSAwIDFlbSAyZW07XFxufVxcblxcbi5JQk1DaGF0LXVzZXItbWVzc2FnZSB7XFxuICBwYWRkaW5nOjFlbTtcXG5cXHRtYXJnaW46MCAxZW0gMCAwO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbn1cXG5cXG4vKiBJbnB1dCBDb21wb25lbnQgKi9cXG5cXG4uSUJNQ2hhdC1pbnB1dC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6dGFibGUtcm93O1xcblxcdGhlaWdodDo3MnB4O1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4uSUJNQ2hhdC1pbnB1dC1mb3JtIHtcXG5cXHRkaXNwbGF5OnRhYmxlLWNlbGw7XFxuXFx0cG9zaXRpb246cmVsYXRpdmU7XFxuXFx0aGVpZ2h0OiAyNHB4O1xcblxcdHBhZGRpbmc6MjRweCAyNHB4IDAgMjRweDtcXG59XFxuXFxuLklCTUNoYXQtY2hhdC10ZXh0Ym94IHtcXG4gIGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZToxZW07XFxuICBtYXJnaW46MDtcXG4gIHBhZGRpbmc6MCAwIDNweCAwO1xcbiAgd2lkdGg6MTAwJTtcXG59XFxuXFxuLklCTUNoYXQtY2hhdC10ZXh0Ym94W2Rpc2FibGVkPSdkaXNhYmxlZCddIHtcXG5cXHRvcGFjaXR5OjAuNTtcXG59XFxuXFxuLklCTUNoYXQtaW5wdXQtZm9ybSA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcblxcdG9wYWNpdHk6MTtcXG59XFxuXFxuLklCTUNoYXQtY2hhdC10ZXh0Ym94OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOjAgMCAycHggMDtcXG59XFxuXFxuLyogU3Bpbm5lciAqL1xcbi5JQk1DaGF0LWlucHV0LWxvYWRpbmcge1xcblxcdHotaW5kZXg6IDI7XFxuXFx0cG9zaXRpb246YWJzb2x1dGU7XFxuXFx0cmlnaHQ6IDE2cHg7XFxuXFx0dG9wOiAxNXB4O1xcblxcdGhlaWdodDozMnB4O1xcblxcdHdpZHRoOjMycHg7XFxufVxcblxcbi5JQk1DaGF0LWlibS1zcGlubmVyLXN0YXJ0IHtcXG5cXHRvcGFjaXR5OjA7XFxufVxcblxcbi5JQk1DaGF0LWlibS1zcGlubmVyIHtcXG5cXHRmaWxsOiB0cmFuc3BhcmVudDtcXG5cXHRzdHJva2Utd2lkdGg6IDM7XFxuXFx0c3Ryb2tlLWxpbmVjYXA6IFxcXCJidXR0XFxcIjtcXG5cXHRzdHJva2UtZGFzaGFycmF5OiAxO1xcblxcdHN0cm9rZS1kYXNob2Zmc2V0OiAxO1xcbn1cXG5cXG4vKiBpbml0aWFsIHJvdGF0aW9uIGFuZCBzdHJva2UgYW5pbWF0aW9uIGFuZCBpbmZpbml0ZSByb3RhdGlvbiovXFxuLklCTUNoYXQtaW5pdC1zcGluIHtcXG5cXHRhbmltYXRpb246IGluaXQtcm90YXRlIDE1MG1zIGxpbmVhciBmb3J3YXJkcywgcm90YXRlLWxvb3AgMjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLklCTUNoYXQtaW5pdC1zcGluIHN2ZyBjaXJjbGUge1xcblxcdGFuaW1hdGlvbjogaW5pdC1zdHJva2UgMTAwMG1zIGxpbmVhcjtcXG59XFxuXFxuLklCTUNoYXQtZW5kLXNwaW4gc3ZnIGNpcmNsZSB7XFxuXFx0ZGlzcGxheTpub25lO1xcbn1cXG5cXG4vKiBpbml0aWFsIHJvdGF0aW9uICovXFxuXFxuQGtleWZyYW1lcyBpbml0LXJvdGF0ZSB7XFxuXFx0MCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcblxcdH1cXG5cXHQxMDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcblxcdH1cXG59XFxuXFxuLyogbG9vcGluZyByb3RhdGlvbiAqL1xcbkBrZXlmcmFtZXMgcm90YXRlLWxvb3Age1xcblxcdDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG5cXHR9XFxuXFx0MTAwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG5cXHR9XFxufVxcblxcbi8qIGluaXRpYWwgc3Ryb2tlIGFuaW1hdGlvbiAqL1xcblxcbkBrZXlmcmFtZXMgaW5pdC1zdHJva2Uge1xcblxcdDAlIHtcXG5cXHRcXHRvcGFjaXR5OiAwO1xcblxcdH1cXG5cXHQxMDAlIHtcXG5cXHRcXHRvcGFjaXR5OiAxO1xcblxcdH1cXG59XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYXctbG9hZGVyIS4vc3JjL3N0eWxlcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBldmVudEhhbmRsZXJzID0gcmVxdWlyZSgnLi9ldmVudEhhbmRsZXJzL2luZGV4LmpzJyk7XG52YXIgbGF5b3V0cyA9IHJlcXVpcmUoJy4vbGF5b3V0cycpO1xudmFyIGV2ZW50cyA9IHJlcXVpcmUoJy4vZXZlbnRzJyk7XG52YXIgQm90U0RLID0gcmVxdWlyZSgnQHdhdHNvbi12aXJ0dWFsLWFnZW50L2NsaWVudC1zZGsvbGliL3dlYicpO1xudmFyIHN0YXRlID0gcmVxdWlyZSgnLi9zdGF0ZScpO1xudmFyIHByb2ZpbGUgPSByZXF1aXJlKCcuL3Byb2ZpbGUnKTtcbnZhciBQcm9taXNlID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ2xvZGFzaC9hc3NpZ24nKTtcbnZhciBkZWZhdWx0U3R5bGVzID0gcmVxdWlyZSgnLi9zdHlsZXMnKTtcblxudmFyIGxheW91dEluaXQgPSB7fTtcbnZhciByZWdpc3RlcmVkTGF5b3V0cyA9IFtdO1xuXG5mdW5jdGlvbiByZWdpc3RlckV2ZW50cyhwbGF5YmFjaykge1xuXHRldmVudHMuc3Vic2NyaWJlKCdzdGFydCcsIGV2ZW50SGFuZGxlcnMuc3RhcnQpO1xuXHRldmVudHMuc3Vic2NyaWJlKCdyZXNpemUnLCBldmVudEhhbmRsZXJzLnJlc2l6ZSk7XG5cdGV2ZW50cy5zdWJzY3JpYmUoJ2Rpc2FibGUtaW5wdXQnLCBldmVudEhhbmRsZXJzLmlucHV0LmRpc2FibGVJbnB1dCk7XG5cdGV2ZW50cy5zdWJzY3JpYmUoJ2VuYWJsZS1sb2FkaW5nJywgZXZlbnRIYW5kbGVycy5pbnB1dC5lbmFibGVMb2FkaW5nSW5wdXQpO1xuXHRldmVudHMuc3Vic2NyaWJlKCdkaXNhYmxlLWxvYWRpbmcnLCBldmVudEhhbmRsZXJzLmlucHV0LmRpc2FibGVMb2FkaW5nSW5wdXQpO1xuXHRldmVudHMuc3Vic2NyaWJlKCdzY3JvbGwtdG8tYm90dG9tJywgZXZlbnRIYW5kbGVycy5zY3JvbGxUb0JvdHRvbSk7XG5cdGV2ZW50cy5zdWJzY3JpYmUoJ3JlY2VpdmUnLCBldmVudEhhbmRsZXJzLnJlY2VpdmUpO1xuXHRpZiAocGxheWJhY2sgPT09IHRydWUpIHtcblx0XHRldmVudHMuc3Vic2NyaWJlKCdzZW5kJywgZXZlbnRIYW5kbGVycy5zZW5kTW9jayk7XG5cdH0gZWxzZSB7XG5cdFx0ZXZlbnRzLnN1YnNjcmliZSgnc2VuZCcsIGV2ZW50SGFuZGxlcnMuc2VuZCk7XG5cdFx0ZXZlbnRzLnN1YnNjcmliZSgnc2VuZC1pbnB1dC1tZXNzYWdlJywgZXZlbnRIYW5kbGVycy5zZW5kSW5wdXRNZXNzYWdlKTtcblx0XHRldmVudHMuc3Vic2NyaWJlKCdlbmFibGUtaW5wdXQnLCBldmVudEhhbmRsZXJzLmlucHV0LmVuYWJsZUlucHV0KTtcblx0XHRldmVudHMuc3Vic2NyaWJlKCdmb2N1cy1pbnB1dCcsIGV2ZW50SGFuZGxlcnMuaW5wdXQuZm9jdXNJbnB1dCk7XG5cdFx0ZXZlbnRzLnN1YnNjcmliZSgnc2VuZC1tb2NrJywgZXZlbnRIYW5kbGVycy5zZW5kTW9jayk7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJMYXlvdXRzKCkge1xuXHRyZWdpc3RlckxheW91dCgnc2hvdy1sb2NhdGlvbnMnLCBsYXlvdXRzLnNob3dMb2NhdGlvbnMuaW5pdCwgdHJ1ZSk7XG5cdHJlZ2lzdGVyTGF5b3V0KCdjaG9vc2UtbG9jYXRpb24tdHlwZScsIGxheW91dHMuY2hvb3NlTG9jYXRpb25UeXBlLmluaXQsIHRydWUpO1xuXHRyZWdpc3RlckxheW91dCgncmVxdWVzdC1nZW9sb2NhdGlvbi1sYXRsb25nJywgbGF5b3V0cy5yZXF1ZXN0R2VvbG9jYXRpb25MYXRsb25nLmluaXQsIHRydWUpO1xuXHRyZWdpc3RlckxheW91dCgnY2hvb3NlJywgbGF5b3V0cy5jaG9vc2UuaW5pdCwgdHJ1ZSk7XG5cdHJlZ2lzdGVyTGF5b3V0KCdmb3JtJywgbGF5b3V0cy5mb3JtLmluaXQsIHRydWUpO1xuXHRyZWdpc3RlckxheW91dCgnY2MtdmFsaWRhdG9yJywgbGF5b3V0cy5jcmVkaXRDYXJkLmluaXQsIHRydWUpO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdGVyZWRMYXlvdXRzLmxlbmd0aDsgaSsrKVxuXHRcdGxheW91dEluaXRbcmVnaXN0ZXJlZExheW91dHNbaV1dKCk7XG59XG5cbmZ1bmN0aW9uIGluaXQoY29uZmlnKSB7XG5cdHZhciByb290ID0gKHR5cGVvZiBjb25maWcuZWwgPT09ICdzdHJpbmcnKSA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy5lbCkgOiBjb25maWcuZWw7XG5cdHZhciBTREtjb25maWcgPSB7fTtcblx0U0RLY29uZmlnLmJhc2VVUkwgPSBjb25maWcuYmFzZVVSTCB8fCAnaHR0cHM6Ly9hcGkuaWJtLmNvbS92aXJ0dWFsYWdlbnQvcnVuL2FwaS92MS8nO1xuXHRpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscylcblx0XHRTREtjb25maWcud2l0aENyZWRlbnRpYWxzID0gY29uZmlnLndpdGhDcmVkZW50aWFscztcblx0aWYgKGNvbmZpZy5YSUJNQ2xpZW50SUQpXG5cdFx0U0RLY29uZmlnLlhJQk1DbGllbnRJRCA9IGNvbmZpZy5YSUJNQ2xpZW50SUQ7XG5cdGlmIChjb25maWcuWElCTUNsaWVudFNlY3JldClcblx0XHRTREtjb25maWcuWElCTUNsaWVudFNlY3JldCA9IGNvbmZpZy5YSUJNQ2xpZW50U2VjcmV0O1xuXHRpZiAoY29uZmlnLnVzZXJJRClcblx0XHRTREtjb25maWcudXNlcklEID0gY29uZmlnLnVzZXJJRDtcblx0XHQvKlxuXHQvLyBUT0RPOiAsIGFsbG93IGVudGVyaW5nIGluIG9sZCBjaGF0SURcblx0Y29uc3Qgc2Vzc2lvbkNoYXRJRCA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdJQk1DaGF0Q2hhdElEJykgfHwgbnVsbDtcblx0aWYgKGNoYXRJRCB8fCBzZXNzaW9uQ2hhdElEKVxuXHRcdGNvbmZpZy5jaGF0SUQgPSAoY2hhdElEKSA/IGNoYXRJRCA6IHNlc3Npb25DaGF0SUQ7XG5cdCovXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdFx0aWYgKGN1cnJlbnQuYWN0aXZlID09PSB0cnVlKSB7XG5cdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChyb290KSB7XG5cdFx0XHRpZiAoY29uZmlnLmVycm9ySGFuZGxlcilcblx0XHRcdFx0ZXZlbnRzLnN1YnNjcmliZSgnZXJyb3InLCBjb25maWcuZXJyb3JIYW5kbGVyLCBjb25maWcuZXJyb3JIYW5kbGVyQ29udGV4dCk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGV2ZW50cy5zdWJzY3JpYmUoJ2Vycm9yJywgZXZlbnRIYW5kbGVycy5lcnJvcik7XG5cblx0XHRcdGlmIChjb25maWcucGxheWJhY2sgPT09IHRydWUpIHtcblx0XHRcdFx0cmVnaXN0ZXJFdmVudHModHJ1ZSk7XG5cdFx0XHRcdHJlZ2lzdGVyTGF5b3V0cygpO1xuXHRcdFx0XHRldmVudHMucHVibGlzaCgnc3RhcnQnLCB7XG5cdFx0XHRcdFx0YWN0aXZlOiB0cnVlLFxuXHRcdFx0XHRcdHJvb3Q6IHJvb3QsXG5cdFx0XHRcdFx0bWFwc1NlcnZlcjogcHJvY2Vzcy5lbnYuTUFQU19TRVJWRVIgfHwgJ2h0dHBzOi8vZHAxLWktc2VydmUtbWFwcy5teWJsdWVtaXgubmV0LycsXG5cdFx0XHRcdFx0c3R5bGVzOiBhc3NpZ24oe30sIGRlZmF1bHRTdHlsZXMsIGNvbmZpZy5zdHlsZXMpLFxuXHRcdFx0XHRcdG9yaWdpbmFsQ29udGVudDogcm9vdC5pbm5lckhUTUwsXG5cdFx0XHRcdFx0Y2hhdElkOiAnNDInLFxuXHRcdFx0XHRcdHBsYXliYWNrOiB0cnVlXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9IGVsc2UgaWYgKGNvbmZpZy5ib3RJRCkge1xuXHRcdFx0XHRCb3RTREtcblx0XHRcdFx0XHQuY29uZmlndXJlKCBTREtjb25maWcgKVxuXHRcdFx0XHRcdC5zdGFydCggY29uZmlnLmJvdElEIClcblx0XHRcdFx0XHQudGhlbiggZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdFx0XHR2YXIgY2hhdElEID0gcmVzLmNoYXRJRDtcblx0XHRcdFx0XHRcdHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdJQk1DaGF0Q2hhdElEJywgY2hhdElEKTtcblx0XHRcdFx0XHRcdHJlZ2lzdGVyTGF5b3V0cygpO1xuXHRcdFx0XHRcdFx0cmVnaXN0ZXJFdmVudHMoKTtcblx0XHRcdFx0XHRcdGV2ZW50cy5wdWJsaXNoKCdzdGFydCcsIHtcblx0XHRcdFx0XHRcdFx0YWN0aXZlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRyb290OiByb290LFxuXHRcdFx0XHRcdFx0XHRtYXBzU2VydmVyOiBwcm9jZXNzLmVudi5NQVBTX1NFUlZFUiB8fCAnaHR0cHM6Ly9kcDEtaS1zZXJ2ZS1tYXBzLm15Ymx1ZW1peC5uZXQvJyxcblx0XHRcdFx0XHRcdFx0Ym90SUQ6IGNvbmZpZy5ib3RJRCxcblx0XHRcdFx0XHRcdFx0Y2hhdElEOiBjaGF0SUQsXG5cdFx0XHRcdFx0XHRcdHN0eWxlczogYXNzaWduKHt9LCBkZWZhdWx0U3R5bGVzLCBjb25maWcuc3R5bGVzKSxcblx0XHRcdFx0XHRcdFx0YmFzZVVSTDogY29uZmlnLmJhc2VVUkwsXG5cdFx0XHRcdFx0XHRcdG9yaWdpbmFsQ29udGVudDogcm9vdC5pbm5lckhUTUxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0ZXZlbnRzLnB1Ymxpc2goJ3JlY2VpdmUnLCByZXMpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdH0pWydjYXRjaCddKCBmdW5jdGlvbihlcnIpIHtcblx0XHRcdFx0XHRcdHJlamVjdChlcnIpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVqZWN0KHtcblx0XHRcdFx0XHRlcnJvcjogJ0JvdElEIGlzIHJlcXVpcmVkISdcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlamVjdCh7XG5cdFx0XHRcdGVycm9yOiAnRWxlbWVudCBmb3IgY2hhdCBkb2VzIG5vdCBleGlzdCEnXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlckxheW91dChsYXlvdXQsIGluaXQsIGRlZmF1bHRTZXR1cCkge1xuXHRpZiAocmVnaXN0ZXJlZExheW91dHMuaW5kZXhPZihsYXlvdXQpID09PSAtMSB8fCAhZGVmYXVsdFNldHVwKSB7XG5cdFx0cmVnaXN0ZXJlZExheW91dHMucHVzaChsYXlvdXQpO1xuXHRcdGxheW91dEluaXRbbGF5b3V0XSA9IGluaXQ7XG5cdH1cbn1cblxuZnVuY3Rpb24gc2VuZChtZXNzYWdlKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0aWYgKGN1cnJlbnQuYWN0aXZlKSB7XG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0XHR0ZXh0OiBtZXNzYWdlXG5cdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVjZWl2ZShtZXNzYWdlKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0aWYgKGN1cnJlbnQuYWN0aXZlKVxuXHRcdGV2ZW50cy5wdWJsaXNoKCdyZWNlaXZlJywgbWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIHNlbmRNb2NrKG1lc3NhZ2UpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHRpZiAoY3VycmVudC5hY3RpdmUpIHtcblx0XHRldmVudHMucHVibGlzaCgnc2VuZC1tb2NrJywge1xuXHRcdFx0dGV4dDogbWVzc2FnZVxuXHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHNlbmRTaWxlbnRseShtZXNzYWdlKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0aWYgKGN1cnJlbnQuYWN0aXZlKSB7XG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0XHR0ZXh0OiBtZXNzYWdlLFxuXHRcdFx0c2lsZW50OiB0cnVlXG5cdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZm9jdXNJbnB1dCgpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHRpZiAoY3VycmVudC5hY3RpdmUpXG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ2ZvY3VzLWlucHV0Jyk7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVJbnB1dCgpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHRpZiAoY3VycmVudC5hY3RpdmUpXG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ2Rpc2FibGUtaW5wdXQnKTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlSW5wdXQoKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0aWYgKGN1cnJlbnQuYWN0aXZlKVxuXHRcdGV2ZW50cy5wdWJsaXNoKCdlbmFibGUtaW5wdXQnKTtcbn1cblxuZnVuY3Rpb24gZGVidWcoKSB7XG5cdHN0YXRlLnNldFN0YXRlKHtcblx0XHRERUJVRzogdHJ1ZVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gZGVzdHJveSgpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0XHRpZiAoY3VycmVudC5yb290KSB7XG5cdFx0XHRldmVudHMucHVibGlzaCgnZGVzdHJveScpO1xuXHRcdFx0ZXZlbnRzLmRlc3Ryb3koKTsgLy9yZW1vdmUgYWxsIGV2ZW50c1xuXHRcdFx0Y3VycmVudC5yb290LmlubmVySFRNTCA9IGN1cnJlbnQub3JpZ2luYWxDb250ZW50OyAvL3Jlc3RvcmUgb3JpZ2luYWwgY29udGVudCB0byBkaXZcblx0XHRcdHN0YXRlLmRlc3Ryb3lTdGF0ZSgpO1xuXHRcdFx0cmVzb2x2ZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZWplY3QoJ0lCTUNoYXQgaGFzIG5vIGluc3RhbmNlIHRvIGRlc3Ryb3kuJyk7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gcmVzdGFydCgpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0XHRkZXN0cm95KCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdGluaXQoeyBlbDogY3VycmVudC5yb290LCBib3RJRDogY3VycmVudC5ib3RJRCwgYmFzZVVSTDogY3VycmVudC5iYXNlVVJMIH0pLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdH0pWydjYXRjaCddKGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0cmVqZWN0KGUpO1xuXHRcdFx0fSk7XG5cdFx0fSlbJ2NhdGNoJ10oZnVuY3Rpb24oZSkge1xuXHRcdFx0cmVqZWN0KGUpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHByb2ZpbGU6IHByb2ZpbGUsXG5cdGluaXQ6IGluaXQsXG5cdHJlZ2lzdGVyTGF5b3V0OiByZWdpc3RlckxheW91dCxcblx0c2VuZDogc2VuZCxcblx0cmVjZWl2ZTogcmVjZWl2ZSxcblx0c2VuZE1vY2s6IHNlbmRNb2NrLFxuXHRzZW5kU2lsZW50bHk6IHNlbmRTaWxlbnRseSxcblx0Zm9jdXNJbnB1dDogZm9jdXNJbnB1dCxcblx0ZGlzYWJsZUlucHV0OiBkaXNhYmxlSW5wdXQsXG5cdGVuYWJsZUlucHV0OiBlbmFibGVJbnB1dCxcblx0c3Vic2NyaWJlOiBldmVudHMuc3Vic2NyaWJlLFxuXHRwdWJsaXNoOiBldmVudHMucHVibGlzaCxcblx0ZGVidWc6IGRlYnVnLFxuXHRkZXN0cm95OiBkZXN0cm95LFxuXHRyZXN0YXJ0OiByZXN0YXJ0LFxuXHRjdXJyZW50U3Vic2NyaXB0aW9uczogZXZlbnRzLmN1cnJlbnRTdWJzY3JpcHRpb25zLFxuXHRoYXNTdWJzY3JpcHRpb246IGV2ZW50cy5oYXNTdWJzY3JpcHRpb24sXG5cdGNvbXBsZXRlRXZlbnQ6IGV2ZW50cy5jb21wbGV0ZUV2ZW50XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9ib290c3RyYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGFydCA9IHJlcXVpcmUoJy4vZXZlbnRzL3N0YXJ0Jyk7XG52YXIgcmVzaXplID0gcmVxdWlyZSgnLi9ldmVudHMvcmVzaXplJyk7XG52YXIgcmVjZWl2ZSA9IHJlcXVpcmUoJy4vZXZlbnRzL3JlY2VpdmUnKTtcbnZhciBzZW5kID0gcmVxdWlyZSgnLi9ldmVudHMvc2VuZCcpO1xudmFyIHNlbmRNb2NrID0gcmVxdWlyZSgnLi9ldmVudHMvc2VuZC1tb2NrJyk7XG52YXIgc2VuZElucHV0TWVzc2FnZSA9IHJlcXVpcmUoJy4vZXZlbnRzL3NlbmQtaW5wdXQtbWVzc2FnZScpO1xudmFyIGlucHV0ID0gcmVxdWlyZSgnLi9ldmVudHMvaW5wdXQnKTtcbnZhciBlcnJvciA9IHJlcXVpcmUoJy4vZXZlbnRzL2Vycm9yJyk7XG52YXIgc2Nyb2xsVG9Cb3R0b20gPSByZXF1aXJlKCcuL2V2ZW50cy9zY3JvbGwtdG8tYm90dG9tJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRyZXNpemU6IHJlc2l6ZSxcblx0c3RhcnQ6IHN0YXJ0LFxuXHRzZW5kOiBzZW5kLFxuXHRzZW5kTW9jazogc2VuZE1vY2ssXG5cdHJlY2VpdmU6IHJlY2VpdmUsXG5cdGlucHV0OiBpbnB1dCxcblx0ZXJyb3I6IGVycm9yLFxuXHRzY3JvbGxUb0JvdHRvbTogc2Nyb2xsVG9Cb3R0b20sXG5cdHNlbmRJbnB1dE1lc3NhZ2U6IHNlbmRJbnB1dE1lc3NhZ2Vcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2V2ZW50SGFuZGxlcnMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4uLy4uL3N0YXRlJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xudmFyIGV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2V2ZW50cycpO1xudmFyIHRlbXBsYXRlcyA9IHtcblx0c3RhcnQ6IHJlcXVpcmUoJy4uL3RlbXBsYXRlcy9zdGFydC5odG1sJylcbn07XG5mdW5jdGlvbiBzdGFydChkYXRhKSB7XG5cdHZhciBjdXJyZW50O1xuXHRzdGF0ZS5zZXRTdGF0ZShkYXRhKTtcblx0Y3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdHV0aWxzLmF0dGFjaFN0eWxlcygpO1xuXHRjdXJyZW50LnJvb3QuY2xhc3NOYW1lICs9IFwiIGNoYXRJRC1cIiArIGN1cnJlbnQuY2hhdElEO1xuXHRjdXJyZW50LnJvb3QuaW5uZXJIVE1MID0gdGVtcGxhdGVzLnN0YXJ0O1xuXHR2YXIgZWxlbWVudHMgPSB7XG5cdFx0Y29udGFpbmVyOiBjdXJyZW50LnJvb3QucXVlcnlTZWxlY3RvcignLklCTUNoYXQtY2hhdC1jb250YWluZXInKSxcblx0XHRjaGF0SG9sZGVyOiBjdXJyZW50LnJvb3QucXVlcnlTZWxlY3RvcignLklCTUNoYXQtbWVzc2FnZXMnKSxcblx0XHRpbm5lckNvbnRhaW5lcjogY3VycmVudC5yb290LnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LWlubmVyLWNvbnRhaW5lcicpLFxuXHRcdGlucHV0OiBjdXJyZW50LnJvb3QucXVlcnlTZWxlY3RvcignLklCTUNoYXQtY2hhdC10ZXh0Ym94JyksXG5cdFx0Zm9ybTogY3VycmVudC5yb290LnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LWlucHV0LWZvcm0nKSxcblx0XHRsb2FkZXI6IGN1cnJlbnQucm9vdC5xdWVyeVNlbGVjdG9yKCcuSUJNQ2hhdC1pbnB1dC1sb2FkaW5nJyksXG5cdFx0aW5wdXRIb2xkZXI6IGN1cnJlbnQucm9vdC5xdWVyeVNlbGVjdG9yKCcuSUJNQ2hhdC1pbnB1dC1jb250YWluZXInKVxuXHR9O1xuXG5cdGlmIChjdXJyZW50LnBsYXliYWNrID09PSB0cnVlKVxuXHRcdGVsZW1lbnRzLmlucHV0SG9sZGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudHMuaW5wdXRIb2xkZXIpO1xuXG5cdHN0YXRlLnNldFN0YXRlKGVsZW1lbnRzKTtcblx0ZWxlbWVudHMuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9KTtcblxuXHRlbGVtZW50cy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGUpIHtcblx0XHRpZiAoZS5rZXlDb2RlID09PSAxMylcblx0XHRcdGV2ZW50cy5wdWJsaXNoKCdzZW5kLWlucHV0LW1lc3NhZ2UnKTtcblx0fSk7XG5cblx0ZWxlbWVudHMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbigpIHtcblx0XHRldmVudHMucHVibGlzaCgncmVzaXplJyk7XG5cdH0pO1xuXG5cdGVsZW1lbnRzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbigpIHtcblx0XHRldmVudHMucHVibGlzaCgncmVzaXplJyk7XG5cdH0pO1xuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1dGlscy5kZWJvdW5jZShmdW5jdGlvbigpIHtcblx0XHRldmVudHMucHVibGlzaCgncmVzaXplJyk7XG5cdH0sIDEwMDApKTtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRldmVudHMucHVibGlzaCgncmVzaXplJyk7XG5cdH0pO1xuXG5cdGV2ZW50cy5wdWJsaXNoKCdyZXNpemUnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFydDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRIYW5kbGVycy9ldmVudHMvc3RhcnQuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGF0ZXMgPSBbXTtcbnZhciBzdGF0ZSA9IHt9O1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ2xvZGFzaC9hc3NpZ24nKTtcblxuZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG5cdHJldHVybiBzdGF0ZTtcbn1cbmZ1bmN0aW9uIGRlc3Ryb3lTdGF0ZSgpIHtcblx0c3RhdGUgPSB7fTtcblx0c2V0U3RhdGUoe30pO1xufVxuXG5mdW5jdGlvbiBzZXRTdGF0ZSh1cGRhdGVkKSB7XG5cdHN0YXRlID0gYXNzaWduKHt9LCBzdGF0ZSwgdXBkYXRlZCk7XG5cdGlmIChzdGF0ZS5ERUJVRykge1xuXHRcdHN0YXRlcy5wdXNoKHN0YXRlKTtcblx0XHRjb25zb2xlLmxvZygnU1RBVEUgSElTVE9SWTogJywgc3RhdGVzKTtcblx0XHRjb25zb2xlLmxvZygnTkVXIFNUQVRFOiAnLCBzdGF0ZSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKCkge1xuXHR2YXIgY3VycmVudCA9IGdldFN0YXRlKCk7XG5cdHJldHVybiBjdXJyZW50LnN0eWxlcztcbn1cblxuZnVuY3Rpb24gZ2V0UHJvZmlsZSgpIHtcblx0dmFyIGN1cnJlbnQgPSBnZXRTdGF0ZSgpO1xuXHRyZXR1cm4gY3VycmVudC5wcm9maWxlIHx8IHt9O1xufVxuXG5mdW5jdGlvbiBzZXRQcm9maWxlKGRhdGEpIHtcblx0c2V0U3RhdGUoe1xuXHRcdHByb2ZpbGU6IGFzc2lnbih7fSwgZ2V0UHJvZmlsZSgpLCBkYXRhKVxuXHR9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPXtcblx0Z2V0U3RhdGU6IGdldFN0YXRlLFxuXHRzZXRTdGF0ZTogc2V0U3RhdGUsXG5cdGRlc3Ryb3lTdGF0ZTogZGVzdHJveVN0YXRlLFxuXHRnZXRQcm9maWxlOiBnZXRQcm9maWxlLFxuXHRzZXRQcm9maWxlOiBzZXRQcm9maWxlLFxuXHRnZXRTdHlsZXM6IGdldFN0eWxlc1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3RhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25WYWx1ZScpLFxuICAgIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAgY3JlYXRlQXNzaWduZXIgPSByZXF1aXJlKCcuL19jcmVhdGVBc3NpZ25lcicpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKiBEZXRlY3QgaWYgcHJvcGVydGllcyBzaGFkb3dpbmcgdGhvc2Ugb24gYE9iamVjdC5wcm90b3R5cGVgIGFyZSBub24tZW51bWVyYWJsZS4gKi9cbnZhciBub25FbnVtU2hhZG93cyA9ICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgJ3ZhbHVlT2YnOiAxIH0sICd2YWx1ZU9mJyk7XG5cbi8qKlxuICogQXNzaWducyBvd24gZW51bWVyYWJsZSBzdHJpbmcga2V5ZWQgcHJvcGVydGllcyBvZiBzb3VyY2Ugb2JqZWN0cyB0byB0aGVcbiAqIGRlc3RpbmF0aW9uIG9iamVjdC4gU291cmNlIG9iamVjdHMgYXJlIGFwcGxpZWQgZnJvbSBsZWZ0IHRvIHJpZ2h0LlxuICogU3Vic2VxdWVudCBzb3VyY2VzIG92ZXJ3cml0ZSBwcm9wZXJ0eSBhc3NpZ25tZW50cyBvZiBwcmV2aW91cyBzb3VyY2VzLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBtdXRhdGVzIGBvYmplY3RgIGFuZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYE9iamVjdC5hc3NpZ25gXShodHRwczovL21kbi5pby9PYmplY3QvYXNzaWduKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMTAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHsuLi5PYmplY3R9IFtzb3VyY2VzXSBUaGUgc291cmNlIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICogQHNlZSBfLmFzc2lnbkluXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqIH1cbiAqXG4gKiBmdW5jdGlvbiBCYXIoKSB7XG4gKiAgIHRoaXMuYyA9IDM7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5iID0gMjtcbiAqIEJhci5wcm90b3R5cGUuZCA9IDQ7XG4gKlxuICogXy5hc3NpZ24oeyAnYSc6IDAgfSwgbmV3IEZvbywgbmV3IEJhcik7XG4gKiAvLyA9PiB7ICdhJzogMSwgJ2MnOiAzIH1cbiAqL1xudmFyIGFzc2lnbiA9IGNyZWF0ZUFzc2lnbmVyKGZ1bmN0aW9uKG9iamVjdCwgc291cmNlKSB7XG4gIGlmIChub25FbnVtU2hhZG93cyB8fCBpc1Byb3RvdHlwZShzb3VyY2UpIHx8IGlzQXJyYXlMaWtlKHNvdXJjZSkpIHtcbiAgICBjb3B5T2JqZWN0KHNvdXJjZSwga2V5cyhzb3VyY2UpLCBvYmplY3QpO1xuICAgIHJldHVybjtcbiAgfVxuICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH1cbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2Fzc2lnbi5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnblZhbHVlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19hc3NpZ25WYWx1ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2VxLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyk7XG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3Qoc291cmNlLCBwcm9wcywgb2JqZWN0LCBjdXN0b21pemVyKSB7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkID8gc291cmNlW2tleV0gOiBuZXdWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5T2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19jb3B5T2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBiYXNlUmVzdCA9IHJlcXVpcmUoJy4vX2Jhc2VSZXN0JyksXG4gICAgaXNJdGVyYXRlZUNhbGwgPSByZXF1aXJlKCcuL19pc0l0ZXJhdGVlQ2FsbCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiBsaWtlIGBfLmFzc2lnbmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFzc2lnbmVyIFRoZSBmdW5jdGlvbiB0byBhc3NpZ24gdmFsdWVzLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYXNzaWduZXIgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFzc2lnbmVyKGFzc2lnbmVyKSB7XG4gIHJldHVybiBiYXNlUmVzdChmdW5jdGlvbihvYmplY3QsIHNvdXJjZXMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gc291cmNlcy5sZW5ndGgsXG4gICAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPiAxID8gc291cmNlc1tsZW5ndGggLSAxXSA6IHVuZGVmaW5lZCxcbiAgICAgICAgZ3VhcmQgPSBsZW5ndGggPiAyID8gc291cmNlc1syXSA6IHVuZGVmaW5lZDtcblxuICAgIGN1c3RvbWl6ZXIgPSAoYXNzaWduZXIubGVuZ3RoID4gMyAmJiB0eXBlb2YgY3VzdG9taXplciA9PSAnZnVuY3Rpb24nKVxuICAgICAgPyAobGVuZ3RoLS0sIGN1c3RvbWl6ZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChndWFyZCAmJiBpc0l0ZXJhdGVlQ2FsbChzb3VyY2VzWzBdLCBzb3VyY2VzWzFdLCBndWFyZCkpIHtcbiAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPCAzID8gdW5kZWZpbmVkIDogY3VzdG9taXplcjtcbiAgICAgIGxlbmd0aCA9IDE7XG4gICAgfVxuICAgIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICB2YXIgc291cmNlID0gc291cmNlc1tpbmRleF07XG4gICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIGFzc2lnbmVyKG9iamVjdCwgc291cmNlLCBpbmRleCwgY3VzdG9taXplcik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUFzc2lnbmVyO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19jcmVhdGVBc3NpZ25lci5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYXBwbHkgPSByZXF1aXJlKCcuL19hcHBseScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucmVzdGAgd2hpY2ggZG9lc24ndCB2YWxpZGF0ZSBvciBjb2VyY2UgYXJndW1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VSZXN0KGZ1bmMsIHN0YXJ0KSB7XG4gIHN0YXJ0ID0gbmF0aXZlTWF4KHN0YXJ0ID09PSB1bmRlZmluZWQgPyAoZnVuYy5sZW5ndGggLSAxKSA6IHN0YXJ0LCAwKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBuYXRpdmVNYXgoYXJncy5sZW5ndGggLSBzdGFydCwgMCksXG4gICAgICAgIGFycmF5ID0gQXJyYXkobGVuZ3RoKTtcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBhcnJheVtpbmRleF0gPSBhcmdzW3N0YXJ0ICsgaW5kZXhdO1xuICAgIH1cbiAgICBpbmRleCA9IC0xO1xuICAgIHZhciBvdGhlckFyZ3MgPSBBcnJheShzdGFydCArIDEpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgc3RhcnQpIHtcbiAgICAgIG90aGVyQXJnc1tpbmRleF0gPSBhcmdzW2luZGV4XTtcbiAgICB9XG4gICAgb3RoZXJBcmdzW3N0YXJ0XSA9IGFycmF5O1xuICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VSZXN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19iYXNlUmVzdC5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEEgZmFzdGVyIGFsdGVybmF0aXZlIHRvIGBGdW5jdGlvbiNhcHBseWAsIHRoaXMgZnVuY3Rpb24gaW52b2tlcyBgZnVuY2BcbiAqIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIGB0aGlzQXJnYCBhbmQgdGhlIGFyZ3VtZW50cyBvZiBgYXJnc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGludm9rZS5cbiAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHtBcnJheX0gYXJncyBUaGUgYXJndW1lbnRzIHRvIGludm9rZSBgZnVuY2Agd2l0aC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXN1bHQgb2YgYGZ1bmNgLlxuICovXG5mdW5jdGlvbiBhcHBseShmdW5jLCB0aGlzQXJnLCBhcmdzKSB7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZyk7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXBwbHk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2FwcGx5LmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSB2YWx1ZSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gaW5kZXggVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBpbmRleCBvciBrZXkgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IG9iamVjdCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIG9iamVjdCBhcmd1bWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0l0ZXJhdGVlQ2FsbCh2YWx1ZSwgaW5kZXgsIG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgaW5kZXg7XG4gIGlmICh0eXBlID09ICdudW1iZXInXG4gICAgICAgID8gKGlzQXJyYXlMaWtlKG9iamVjdCkgJiYgaXNJbmRleChpbmRleCwgb2JqZWN0Lmxlbmd0aCkpXG4gICAgICAgIDogKHR5cGUgPT0gJ3N0cmluZycgJiYgaW5kZXggaW4gb2JqZWN0KVxuICAgICAgKSB7XG4gICAgcmV0dXJuIGVxKG9iamVjdFtpbmRleF0sIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJdGVyYXRlZUNhbGw7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2lzSXRlcmF0ZWVDYWxsLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDgtOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheSBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gaXNPYmplY3QodmFsdWUpID8gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc0Z1bmN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzT2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc0xlbmd0aC5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJlxuICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19pc0luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Byb3RvdHlwZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXMgPSByZXF1aXJlKCcuL19iYXNlS2V5cycpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2tleXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGJhc2VUaW1lcyA9IHJlcXVpcmUoJy4vX2Jhc2VUaW1lcycpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgLy8gU2FmYXJpIDguMSBtYWtlcyBgYXJndW1lbnRzLmNhbGxlZWAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgLy8gU2FmYXJpIDkgbWFrZXMgYGFyZ3VtZW50cy5sZW5ndGhgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIHZhciByZXN1bHQgPSAoaXNBcnJheSh2YWx1ZSkgfHwgaXNBcmd1bWVudHModmFsdWUpKVxuICAgID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKVxuICAgIDogW107XG5cbiAgdmFyIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGgsXG4gICAgICBza2lwSW5kZXhlcyA9ICEhbGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKGtleSA9PSAnbGVuZ3RoJyB8fCBpc0luZGV4KGtleSwgbGVuZ3RoKSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TGlrZUtleXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVGltZXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNBcnJheUxpa2VPYmplY3QgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuICAvLyBTYWZhcmkgOC4xIG1ha2VzIGBhcmd1bWVudHMuY2FsbGVlYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICByZXR1cm4gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICghcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpIHx8IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IGFyZ3NUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzQXJndW1lbnRzLmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2VPYmplY3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaXNBcnJheUxpa2VPYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzQXJyYXkuanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2Jhc2VLZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5cztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fbmF0aXZlS2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19vdmVyQXJnLmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIHN0YXRlID0gcmVxdWlyZSgnLi9zdGF0ZScpO1xuXG5mdW5jdGlvbiBfcmVuZGVyKGVsLCBzdGF0ZSkge1xuXHRlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0lCTUNoYXQtaWJtLXNwaW5uZXIgSUJNQ2hhdC1pbnB1dC1sb2FkaW5nIElCTUNoYXQtJyArIHN0YXRlICsgJy1zcGluJyk7XG59XG5cbnZhciBzcGlubmVyID0ge1xuXHRzaG93OiBmdW5jdGlvbihlbCkge1xuXHRcdF9yZW5kZXIoZWwsICdpbml0Jyk7XG5cdH0sXG5cdGhpZGU6IGZ1bmN0aW9uKGVsKSB7XG5cdFx0X3JlbmRlcihlbCwgJ2VuZCcpO1xuXHR9XG59O1xuXG5mdW5jdGlvbiBfZ2V0U3R5bGVzKCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdHZhciBjb250YWluZXJDbGFzcyA9IFwiLmNoYXRJRC1cIiArIGN1cnJlbnQuY2hhdElEO1xuXHR2YXIgc3R5bGVzID0gY29udGFpbmVyQ2xhc3MgKyBcIiAuSUJNQ2hhdC1kZWZhdWx0LWNvbG9ycyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiArIGN1cnJlbnQuc3R5bGVzLmJhY2tncm91bmQgKyBcIjtcXG4gIGNvbG9yOiBcIiArIGN1cnJlbnQuc3R5bGVzLnRleHQgKyBcIjtcXG59XFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRjb250YWluZXJDbGFzcyArIFwiIC5JQk1DaGF0LXNlY29uZGFyeS1jb2xvcnMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogXCIgKyBjdXJyZW50LnN0eWxlcy5zZWNvbmRhcnlCYWNrZ3JvdW5kICsgXCI7XFxuICBjb2xvcjogXCIgKyBjdXJyZW50LnN0eWxlcy5zZWNvbmRhcnlUZXh0ICsgXCI7XFxufVxcblwiICtcblx0XHRcdFx0XHRcdFx0Y29udGFpbmVyQ2xhc3MgKyBcIiAuSUJNQ2hhdC1hY2NlbnQtY29sb3JzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IFwiICsgY3VycmVudC5zdHlsZXMuYWNjZW50QmFja2dyb3VuZCArIFwiO1xcbiAgY29sb3I6IFwiICsgY3VycmVudC5zdHlsZXMuYWNjZW50VGV4dCArIFwiO1xcbn1cXG5cIiArXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lckNsYXNzICsgXCIgLklCTUNoYXQtaW5wdXQtY29sb3JzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IFwiICsgY3VycmVudC5zdHlsZXMuaW5wdXRCYWNrZ3JvdW5kICsgXCI7XFxuICBjb2xvcjogXCIgKyBjdXJyZW50LnN0eWxlcy5pbnB1dFRleHQgKyBcIjtcXG59XFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRjb250YWluZXJDbGFzcyArIFwiIC5JQk1DaGF0LXdhdHNvbi1tZXNzYWdlLXRoZW1lIHtcXG5cXHRib3JkZXItbGVmdDogM3B4IHNvbGlkIFwiICsgY3VycmVudC5zdHlsZXMuYWNjZW50QmFja2dyb3VuZCArIFwiO1xcbn1cXG5cIiArXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lckNsYXNzICsgXCIgYSxcXG5cIiArXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lckNsYXNzICsgXCIgYTpob3ZlcixcXG5cIiArXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lckNsYXNzICsgXCIgYTp2aXNpdGVkLFxcblwiICtcblx0XHRcdFx0XHRcdFx0Y29udGFpbmVyQ2xhc3MgKyBcIiBhOmFjdGl2ZSB7XFxuXFx0Y29sb3I6IFwiICsgY3VycmVudC5zdHlsZXMubGluayArIFwiO1xcbn1cXG5cIiArXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lckNsYXNzICsgXCIgLklCTUNoYXQtY2hhdC10ZXh0Ym94LXRoZW1lIHtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBcIiArIGN1cnJlbnQuc3R5bGVzLnRleHQgKyBcIjtcXG59XFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRjb250YWluZXJDbGFzcyArIFwiIC5JQk1DaGF0LWNoYXQtdGV4dGJveC10aGVtZTpmb2N1cyB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggXCIgKyBjdXJyZW50LnN0eWxlcy5hY2NlbnRCYWNrZ3JvdW5kICsgXCI7XFxufVxcblwiICtcblx0XHRcdFx0XHRcdFx0Y29udGFpbmVyQ2xhc3MgKyBcIiAuSUJNQ2hhdC1pYm0tc3Bpbm5lciB7XFxuXFx0c3Ryb2tlOiBcIiArIGN1cnJlbnQuc3R5bGVzLmFjY2VudEJhY2tncm91bmQgKyBcIjtcXG59XCI7XG5cdHJldHVybiBzdHlsZXM7XG59XG5cblxuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG5cdHZhciB0aW1lb3V0O1xuXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuXHRcdHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGltZW91dCA9IG51bGw7XG5cdFx0XHRpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0XHR9O1xuXHRcdHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG5cdFx0aWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZShvYmopIHtcblx0Y29uc3Qgc3RyID0gW107XG5cdGZvciAodmFyIHAgaW4gb2JqKSB7XG5cdFx0aWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSlcblx0XHRcdHN0ci5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChwKSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChvYmpbcF0pKTtcblx0fVxuXHRyZXR1cm4gc3RyLmpvaW4oJyYnKTtcbn1cblxuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcblx0aWYgKG9wdGlvbnMgJiYgT2JqZWN0LmtleXMob3B0aW9ucykubGVuZ3RoID4gMCkge1xuXHRcdE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG5cdFx0XHRzdHIgPSBzdHIuc3BsaXQoJyR7JyArIGtleSArICd9Jykuam9pbihvcHRpb25zW2tleV0pO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiBzdHI7XG59XG5cbmZ1bmN0aW9uIGdldFVVSUQoKSB7XG5cdHZhciBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdGlmICggd2luZG93LnBlcmZvcm1hbmNlICYmIHR5cGVvZiB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID09PSAnZnVuY3Rpb24nIClcblx0XHRkICs9IHBlcmZvcm1hbmNlLm5vdygpO1xuXHRyZXR1cm4gJ0lCTUNoYXQtJyArICgneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKGMpIHtcblx0XHR2YXIgciA9IChkICsgTWF0aC5yYW5kb20oKSoxNiklMTYgfCAwO1xuXHRcdGQgPSBNYXRoLmZsb29yKGQvMTYpO1xuXHRcdHJldHVybiAoKCBjID09ICd4JyA/IHIgOiAociYweDN8MHg4KSkudG9TdHJpbmcoMTYpKTtcblx0fSkpO1xufVxuXG5mdW5jdGlvbiBhdHRhY2hTdHlsZXMoKSB7XG5cdHZhciBzdHlsZXMgPSBfZ2V0U3R5bGVzKCk7XG5cdHZhciBjc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXHRjc3MudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0aWYgKGNzcy5zdHlsZVNoZWV0KVxuXHRcdGNzcy5zdHlsZVNoZWV0LmNzc1RleHQgPSBzdHlsZXM7XG5cdGVsc2Vcblx0XHRjc3MuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3R5bGVzKSk7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChjc3MpO1xufVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcblx0dmFyIHRoYXRDbGFzcyA9IFwiIFwiICsgY2xhc3NOYW1lICsgXCIgXCI7XG5cdHJldHVybiAoIChcIiBcIiArIGVsZW1lbnQuY2xhc3NOYW1lICsgXCIgXCIpLnJlcGxhY2UoL1tcXG5cXHRdL2csIFwiIFwiKS5pbmRleE9mKHRoYXRDbGFzcykgPiAtMSApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0ZGVib3VuY2U6IGRlYm91bmNlLFxuXHRzZXJpYWxpemU6IHNlcmlhbGl6ZSxcblx0aGFzQ2xhc3M6IGhhc0NsYXNzLFxuXHRnZXRVVUlEOiBnZXRVVUlELFxuXHRhdHRhY2hTdHlsZXM6IGF0dGFjaFN0eWxlcyxcblx0c3Bpbm5lcjogc3Bpbm5lcixcblx0Y29tcGlsZTogY29tcGlsZVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdXRpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgc3RhdGUgPSByZXF1aXJlKCcuL3N0YXRlJyk7XG5cbnZhciBldmVudHMgPSBbXTtcblxuZnVuY3Rpb24gY29tcGxldGVFdmVudChyZXNwb25zZSkge1xuXHRzd2l0Y2ggKHJlc3BvbnNlKSB7XG5cdGNhc2UgdHJ1ZTpcblx0XHRwdWJsaXNoKCdzZW5kJywge1xuXHRcdFx0bWVzc2FnZTogJ3N1Y2Nlc3MnLFxuXHRcdFx0c2lsZW50OiB0cnVlXG5cdFx0fSk7XG5cdFx0YnJlYWs7XG5cdGNhc2UgZmFsc2U6XG5cdFx0cHVibGlzaCgnc2VuZCcsIHtcblx0XHRcdG1lc3NhZ2U6ICdmYWlsdXJlJyxcblx0XHRcdHNpbGVudDogdHJ1ZVxuXHRcdH0pO1xuXHRcdGJyZWFrO1xuXHRkZWZhdWx0OlxuXHRcdHB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0XHRtZXNzYWdlOiAnY2FuY2VsJyxcblx0XHRcdHNpbGVudDogdHJ1ZVxuXHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdGV2ZW50cyA9IFtdO1xufVxuXG5mdW5jdGlvbiB1bnN1YnNjcmliZShldmVudCwgaGFuZGxlciwgY29udGV4dCkge1xuXHRpZiAodHlwZW9mIGNvbnRleHQgPT09IHVuZGVmaW5lZClcblx0XHRjb250ZXh0ID0gaGFuZGxlcjtcbn1cblxuZnVuY3Rpb24gY3VycmVudFN1YnNjcmlwdGlvbnMoKSB7XG5cdHJldHVybiBldmVudHMuc2xpY2UoMCk7XG59XG5cbmZ1bmN0aW9uIGhhc1N1YnNjcmlwdGlvbihhY3Rpb24pIHtcblx0dmFyIHN1YnNjcmlwdGlvbnMgPSBjdXJyZW50U3Vic2NyaXB0aW9ucygpO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN1YnNjcmlwdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgc3Vic2NyaXB0aW9uID0gc3Vic2NyaXB0aW9uc1tpXTtcblx0XHRpZiAoc3Vic2NyaXB0aW9uICYmIHN1YnNjcmlwdGlvbi5ldmVudCA9PT0gYWN0aW9uKVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnQsIGhhbmRsZXIsIGNvbnRleHQpIHtcblx0aWYgKHR5cGVvZiBjb250ZXh0ID09PSB1bmRlZmluZWQpXG5cdFx0Y29udGV4dCA9IGhhbmRsZXI7XG5cdHZhciBpbmRleCA9IGV2ZW50cy5wdXNoKHsgZXZlbnQ6IGV2ZW50LCBoYW5kbGVyOiBoYW5kbGVyLmJpbmQoY29udGV4dCkgfSkgLSAxO1xuXHRyZXR1cm4ge1xuXHRcdHJlbW92ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRkZWxldGUgZXZlbnRzW2luZGV4XTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2goZXZlbnQsIGRhdGEsIGNiKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0dmFyIHdhc1N1YnNjcmlwdGlvbiA9IGZhbHNlO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdGlmIChldmVudHNbaV0gJiYgZXZlbnRzW2ldLmV2ZW50ICYmIGV2ZW50c1tpXS5ldmVudCA9PT0gZXZlbnQpIHtcblx0XHRcdGlmIChjdXJyZW50LkRFQlVHKSB7XG5cdFx0XHRcdHdhc1N1YnNjcmlwdGlvbiA9IHRydWU7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdTdWJzY3JpcHRpb24gdG8gJyArIGV2ZW50ICsgJyB3YXMgY2FsbGVkOiAnLCBkYXRhKTtcblx0XHRcdH1cblx0XHRcdGV2ZW50c1tpXS5oYW5kbGVyLmNhbGwodW5kZWZpbmVkLCBkYXRhLCBjYik7XG5cdFx0fVxuXHR9XG5cdGlmIChjdXJyZW50LkRFQlVHICYmIGV2ZW50LmluZGV4T2YoJ2xheW91dCcpID09IC0xICYmICF3YXNTdWJzY3JpcHRpb24pXG5cdFx0Y29uc29sZS53YXJuKCdOb3RoaW5nIGlzIHN1YnNjcmliZWQgdG8gJyArIGV2ZW50KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGRlc3Ryb3k6IGRlc3Ryb3ksXG5cdHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZSxcblx0Y3VycmVudFN1YnNjcmlwdGlvbnM6IGN1cnJlbnRTdWJzY3JpcHRpb25zLFxuXHRoYXNTdWJzY3JpcHRpb246IGhhc1N1YnNjcmlwdGlvbixcblx0c3Vic2NyaWJlOiBzdWJzY3JpYmUsXG5cdHB1Ymxpc2g6IHB1Ymxpc2gsXG5cdGNvbXBsZXRlRXZlbnQ6IGNvbXBsZXRlRXZlbnRcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2V2ZW50cy5qc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiSUJNQ2hhdC1vdXRlci1jb250YWluZXIgSUJNQ2hhdC1vdXRlci1jb250YWluZXItdGhlbWUgSUJNQ2hhdC1kZWZhdWx0LWNvbG9yc1xcXCI+XFxuXFx0PGRpdiBjbGFzcz1cXFwiSUJNQ2hhdC1jaGF0LWNvbnRhaW5lciBJQk1DaGF0LWNoYXQtY29udGFpbmVyLXRoZW1lXFxcIj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJJQk1DaGF0LWlubmVyLWNvbnRhaW5lciBJQk1DaGF0LWlubmVyLWNvbnRhaW5lci10aGVtZVxcXCI+XFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiSUJNQ2hhdC1tZXNzYWdlcyBJQk1DaGF0LW1lc3NhZ2VzLXRoZW1lXFxcIj48L2Rpdj5cXG5cXHRcXHQ8L2Rpdj5cXG5cXHQ8L2Rpdj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCJJQk1DaGF0LWlucHV0LWNvbnRhaW5lciBJQk1DaGF0LWlucHV0LWNvbnRhaW5lci10aGVtZVxcXCI+XFxuXFx0XFx0PGZvcm0gY2xhc3M9XFxcIklCTUNoYXQtaW5wdXQtZm9ybSBJQk1DaGF0LWlucHV0LWZvcm0tdGhlbWVcXFwiPlxcblxcdFxcdFxcdDxpbnB1dCBhcmlhLWxhYmVsbGVkYnk9XFxcIkVudGVyIGEgTWVzc2FnZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcIklCTUNoYXQtY2hhdC10ZXh0Ym94IElCTUNoYXQtY2hhdC10ZXh0Ym94LXRoZW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgbWVzc2FnZS4uLlxcXCIgLz5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJJQk1DaGF0LWlibS1zcGlubmVyLXN0YXJ0IElCTUNoYXQtaW5wdXQtbG9hZGluZyBJQk1DaGF0LWlucHV0LWxvYWRpbmctdGhlbWVcXFwiPlxcblxcdFxcdFxcdFxcdDxzdmcgY2xhc3M9XFxcIklCTUNoYXQtaWJtLXNwaW5uZXJcXFwiIHdpZHRoPTMyIGhlaWdodD0zMiB2aWV3Qm94PVxcXCItMTYgLTE2IDMyIDMyXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHQ8Y2lyY2xlIGN4PTAgY3k9MCByPTggLz48L3N2Zz5cXG5cXHRcXHRcXHRcXHQ8L3N2Zz5cXG5cXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHQ8L2Zvcm0+XFxuXFx0PC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2V2ZW50SGFuZGxlcnMvdGVtcGxhdGVzL3N0YXJ0Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgc3RhdGUgPSByZXF1aXJlKCcuLi8uLi9zdGF0ZScpO1xuXG5mdW5jdGlvbiByZXNpemUoKSB7XG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHRcdGlmIChjdXJyZW50LmFjdGl2ZSkge1xuXHRcdFx0Y3VycmVudC5jaGF0SG9sZGVyLnN0eWxlLm1heEhlaWdodCA9IChjdXJyZW50LnJvb3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC0gY3VycmVudC5pbnB1dEhvbGRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpICsgJ3B4Jztcblx0XHRcdGN1cnJlbnQuY2hhdEhvbGRlci5zdHlsZS5tYXhXaWR0aCA9ICgoY3VycmVudC5yb290LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoID4gMjg4KSA/IGN1cnJlbnQucm9vdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCA6IDI4OCkgKyAncHgnO1xuXHRcdH1cblx0fSwgMzAwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXNpemU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2V2ZW50SGFuZGxlcnMvZXZlbnRzL3Jlc2l6ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4uLy4uL3N0YXRlJyk7XG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ2xvZGFzaC9hc3NpZ24nKTtcbnZhciB0ZW1wbGF0ZXMgPSB7XG5cdHJlY2VpdmU6IHJlcXVpcmUoJy4uL3RlbXBsYXRlcy9yZWNlaXZlLmh0bWwnKVxufTtcblxuZnVuY3Rpb24gd3JpdGVNZXNzYWdlKGVsZW1lbnQsIHRleHQpIHtcblx0dmFyIGV4cCA9IC8oKChodHRwcz86XFwvXFwvKXwod3d3XFwuKSlbXlxcc10rKS9naTtcblx0dmFyIGxpbmtlZCA9IHRleHQucmVwbGFjZShleHAsJ3x8fCQxfHx8Jyk7XG5cdHZhciBhcnIgPSBsaW5rZWQuc3BsaXQoJ3x8fCcpO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBjaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHR2YXIgbmV3dGV4dCA9IGFycltpXS5yZXBsYWNlKGV4cCwgJzxhIGhyZWY9XCIkMVwiIHRhcmdldD1cIl9ibGFua1wiPiQxPC9hPicpO1xuXHRcdGlmIChuZXd0ZXh0ID09PSBhcnJbaV0pXG5cdFx0XHRjaGlsZCA9IF9hZGRMaW5lRW5kaW5ncyhjaGlsZCwgbmV3dGV4dCk7XG5cdFx0ZWxzZVxuXHRcdFx0Y2hpbGQuaW5uZXJIVE1MID0gbmV3dGV4dDtcblx0XHRlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcblx0fVxufVxuXG5mdW5jdGlvbiBfYWRkTGluZUVuZGluZ3MoZWwsIG5ld3RleHQpIHtcblx0dmFyIGFyciA9IG5ld3RleHQuc3BsaXQoJ1xcbicpO1xuXHRpZiAoYXJyLmxlbmd0aCA9PT0gMSkge1xuXHRcdGVsLnRleHRDb250ZW50ID0gYXJyWzBdO1xuXHR9IGVsc2Uge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoYXJyW2ldLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dmFyIGNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRjaGlsZC50ZXh0Q29udGVudCA9IGFycltpXTtcblx0XHRcdFx0ZWwuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGkgPCBhcnIubGVuZ3RoIC0gMSlcblx0XHRcdFx0ZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBlbDtcbn1cblxuZnVuY3Rpb24gX2xheW91dEFuZEFjdGlvbnMoZGVidWcsIGRhdGEpIHtcblx0ZGF0YS5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBkYXRhLnV1aWQgKyAnOmxhc3QtY2hpbGQnKTtcblx0ZGF0YS5sYXlvdXRFbGVtZW50ID0gZGF0YS5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LXdhdHNvbi1sYXlvdXQnKTtcblx0ZGF0YS5tc2dFbGVtZW50ID0gZGF0YS5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LXdhdHNvbi1tZXNzYWdlJyk7XG5cblx0aWYgKGRhdGEubWVzc2FnZSAmJiBkYXRhLm1lc3NhZ2UuYWN0aW9uICYmIGRhdGEubWVzc2FnZS5hY3Rpb24ubmFtZSkge1xuXHRcdHZhciBhY3Rpb24gPSAnYWN0aW9uOicgKyBkYXRhLm1lc3NhZ2UuYWN0aW9uLm5hbWU7XG5cdFx0aWYgKGV2ZW50cy5oYXNTdWJzY3JpcHRpb24oYWN0aW9uKSkge1xuXHRcdFx0ZXZlbnRzLnB1Ymxpc2goYWN0aW9uLCBkYXRhLCBldmVudHMuY29tcGxldGVFdmVudCk7XG5cdFx0XHRpZiAoZGVidWcpXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdDYWxsIHRvICcgKyBhY3Rpb24pO1xuXHRcdH0gZWxzZSBpZiAoZGVidWcpIHtcblx0XHRcdGNvbnNvbGUud2FybignTm90aGluZyBpcyBzdWJzY3JpYmVkIHRvICcgKyBhY3Rpb24pO1xuXHRcdH1cblx0fVxuXG5cdGlmIChkYXRhLm1lc3NhZ2UgJiYgZGF0YS5tZXNzYWdlLmxheW91dCAmJiBkYXRhLm1lc3NhZ2UubGF5b3V0Lm5hbWUpIHtcblx0XHR2YXIgbGF5b3V0ID0gJ2xheW91dDonICsgZGF0YS5tZXNzYWdlLmxheW91dC5uYW1lO1xuXHRcdGlmIChldmVudHMuaGFzU3Vic2NyaXB0aW9uKGxheW91dCkpIHtcblx0XHRcdGV2ZW50cy5wdWJsaXNoKGxheW91dCwgZGF0YSk7XG5cdFx0XHRpZiAoZGVidWcpXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdDYWxsIHRvICcgKyBsYXlvdXQpO1xuXHRcdH0gZWxzZSBpZiAoZGVidWcpIHtcblx0XHRcdGNvbnNvbGUud2FybignTm90aGluZyBpcyBzdWJzY3JpYmVkIHRvICcgKyBsYXlvdXQpO1xuXHRcdH1cblx0fVxuXG5cdGV2ZW50cy5wdWJsaXNoKCdkaXNhYmxlLWxvYWRpbmcnKTtcblx0ZXZlbnRzLnB1Ymxpc2goJ3Njcm9sbC10by1ib3R0b20nKTtcblx0ZXZlbnRzLnB1Ymxpc2goJ2ZvY3VzLWlucHV0Jyk7XG59XG5cbmZ1bmN0aW9uIHJlY2VpdmUoZGF0YSkge1xuXHR2YXIgY2hlY2tEYXRhID0gKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykgPyB7IG1lc3NhZ2U6IHsgdGV4dDogZGF0YSB9IH0gOiBkYXRhO1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdGRhdGEgPSBhc3NpZ24oe30sIGNoZWNrRGF0YSwgeyB1dWlkOiB1dGlscy5nZXRVVUlEKCkgfSk7XG5cdHN0YXRlLnNldFN0YXRlKHtcblx0XHRtZXNzYWdlczogW10uY29uY2F0KGN1cnJlbnQubWVzc2FnZXMgfHwgW10sIGRhdGEpLFxuXHRcdGhhc0Vycm9yOiBmYWxzZVxuXHR9KTtcblx0dmFyIG1zZyA9IChkYXRhLm1lc3NhZ2UgJiYgZGF0YS5tZXNzYWdlLnRleHQpID8gKChBcnJheS5pc0FycmF5KGRhdGEubWVzc2FnZS50ZXh0KSkgPyBkYXRhLm1lc3NhZ2UudGV4dCA6IFtkYXRhLm1lc3NhZ2UudGV4dF0pIDogWycnXTtcblx0aWYgKG1zZy5sZW5ndGggPT09IDApXG5cdFx0bXNnID0gWycnXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbTtcblx0XHRjdXJyZW50LmNoYXRIb2xkZXIuaW5uZXJIVE1MICs9IHV0aWxzLmNvbXBpbGUodGVtcGxhdGVzLnJlY2VpdmUsIHsgJ2RhdGEudXVpZCc6IGRhdGEudXVpZCB9KTtcblx0XHRpdGVtID0gY3VycmVudC5jaGF0SG9sZGVyLnF1ZXJ5U2VsZWN0b3IoJy4nICsgZGF0YS51dWlkICsgJzpsYXN0LWNoaWxkIC5JQk1DaGF0LXdhdHNvbi1tZXNzYWdlJyk7XG5cdFx0d3JpdGVNZXNzYWdlKGl0ZW0sIG1zZ1tpXSk7XG5cdFx0aWYgKGkgPT09IChtc2cubGVuZ3RoIC0gMSkpXG5cdFx0XHRfbGF5b3V0QW5kQWN0aW9ucyhjdXJyZW50LkRFQlVHLCBkYXRhKTtcblx0fVxuXG5cdC8qXG5cdG1ha2UgYW4gb3B0aW9uIGZvciBhdXRvIGFkZGluZyBhcmlhIHN0dWZmXG5cdCovXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVjZWl2ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRIYW5kbGVycy9ldmVudHMvcmVjZWl2ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiJHtkYXRhLnV1aWR9XFxcIiBjbGFzcz1cXFwiSUJNQ2hhdC13YXRzb24tbWVzc2FnZS1jb250YWluZXIgSUJNQ2hhdC13YXRzb24tbWVzc2FnZS1jb250YWluZXItdGhlbWVcXFwiPlxcblxcdDxkaXYgY2xhc3M9XFxcIklCTUNoYXQtd2F0c29uLW1lc3NhZ2UgSUJNQ2hhdC13YXRzb24tbWVzc2FnZS10aGVtZVxcXCI+PC9kaXY+XFxuXFx0PGRpdiBjbGFzcz1cXFwiSUJNQ2hhdC13YXRzb24tbGF5b3V0XFxcIj48L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRIYW5kbGVycy90ZW1wbGF0ZXMvcmVjZWl2ZS5odG1sXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIHN0YXRlID0gcmVxdWlyZSgnLi4vLi4vc3RhdGUnKTtcbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcbnZhciBCb3RTREsgPSByZXF1aXJlKCdAd2F0c29uLXZpcnR1YWwtYWdlbnQvY2xpZW50LXNkay9saWIvd2ViJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ2xvZGFzaC9hc3NpZ24nKTtcbnZhciB0ZW1wbGF0ZXMgPSB7XG5cdHNlbmQ6IHJlcXVpcmUoJy4uL3RlbXBsYXRlcy9zZW5kLmh0bWwnKVxufTtcblxuZnVuY3Rpb24gc2VuZChkYXRhKSB7XG5cdGlmIChkYXRhLnRleHQgJiYgZGF0YS50ZXh0Lmxlbmd0aCA+IDApIHtcblx0XHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdFx0YWRkVG9TZW5kUXVldWUoZGF0YSk7XG5cdFx0aWYgKCFjdXJyZW50LmluUHJvZ3Jlc3MpXG5cdFx0XHRhZ2VudFNlbmQoKTtcblx0fVxufVxuXG5mdW5jdGlvbiBhZGRUb1NlbmRRdWV1ZShkYXRhKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0dmFyIHF1ZXVlID0gY3VycmVudC5zZW5kUXVldWUgfHwgW107XG5cdHZhciBuZXdRdWV1ZSA9IHF1ZXVlLnNsaWNlKDApO1xuXHRuZXdRdWV1ZS5wdXNoKGRhdGEpO1xuXHRzdGF0ZS5zZXRTdGF0ZSh7XG5cdFx0c2VuZFF1ZXVlOiBuZXdRdWV1ZVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWdlbnRTZW5kKCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdGV2ZW50cy5wdWJsaXNoKCdlbmFibGUtbG9hZGluZycpO1xuXHR2YXIgbmV3RGF0YSA9IGFzc2lnbih7fSwgY3VycmVudC5zZW5kUXVldWVbMF0sIHsgdXVpZDogdXRpbHMuZ2V0VVVJRCgpIH0pO1xuXHRzdGF0ZS5zZXRTdGF0ZSh7XG5cdFx0aW5Qcm9ncmVzczogdHJ1ZSxcblx0XHRzZW5kUXVldWU6IGN1cnJlbnQuc2VuZFF1ZXVlLnNsaWNlKDAsIC0xKSxcblx0XHRtZXNzYWdlczogW10uY29uY2F0KGN1cnJlbnQubWVzc2FnZXMgfHwgW10sIG5ld0RhdGEpXG5cdH0pO1xuXHRCb3RTREtcblx0XHQuc2VuZCggY3VycmVudC5ib3RJRCwgY3VycmVudC5jaGF0SUQsIG5ld0RhdGEudGV4dCApXG5cdFx0LnRoZW4oIGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0Y3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdFx0XHRzdGF0ZS5zZXRTdGF0ZSh7XG5cdFx0XHRcdGluUHJvZ3Jlc3M6IGZhbHNlXG5cdFx0XHR9KTtcblx0XHRcdGV2ZW50cy5wdWJsaXNoKCdkaXNhYmxlLWxvYWRpbmcnKTtcblx0XHRcdGV2ZW50cy5wdWJsaXNoKCdyZWNlaXZlJywgcmVzKTtcblx0XHRcdGlmIChjdXJyZW50LnNlbmRRdWV1ZS5sZW5ndGggPiAwKVxuXHRcdFx0XHRhZ2VudFNlbmQoKTtcblx0XHR9KVxuXHRcdC5jYXRjaCggZnVuY3Rpb24oZSkge1xuXHRcdFx0c3RhdGUuc2V0U3RhdGUoe1xuXHRcdFx0XHRpblByb2dyZXNzOiBmYWxzZVxuXHRcdFx0fSk7XG5cdFx0XHRldmVudHMucHVibGlzaCgnZGlzYWJsZS1sb2FkaW5nJyk7XG5cdFx0XHRldmVudHMucHVibGlzaCgnZXJyb3InLCBhcmd1bWVudHMpO1xuXHRcdFx0Y29uc29sZS5lcnJvcihlLnN0YWNrKTtcblx0XHR9KTtcblx0Y3VycmVudC5yb290LnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LWNoYXQtdGV4dGJveCcpLnZhbHVlID0gJyc7XG5cblx0Y3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdHZhciBtc2cgPSBuZXdEYXRhLnRleHQgfHwgJyc7XG5cdGlmICghbmV3RGF0YS5zaWxlbnQpIHtcblx0XHRjdXJyZW50LmNoYXRIb2xkZXIuaW5uZXJIVE1MICs9IHV0aWxzLmNvbXBpbGUodGVtcGxhdGVzLnNlbmQsIHsgJ2RhdGEudXVpZCc6IG5ld0RhdGEudXVpZCB9KTtcblx0XHRjdXJyZW50LmNoYXRIb2xkZXIucXVlcnlTZWxlY3RvcignIycgKyBuZXdEYXRhLnV1aWQgKyAnIC5JQk1DaGF0LXVzZXItbWVzc2FnZScpLnRleHRDb250ZW50ID0gbXNnO1xuXHRcdGV2ZW50cy5wdWJsaXNoKCdzY3JvbGwtdG8tYm90dG9tJyk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZW5kO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9ldmVudEhhbmRsZXJzL2V2ZW50cy9zZW5kLmpzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiU0RLXCIsW10sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5TREs9ZSgpOnQuU0RLPWUoKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXtmdW5jdGlvbiBlKHIpe2lmKG5bcl0pcmV0dXJuIG5bcl0uZXhwb3J0czt2YXIgbz1uW3JdPXtleHBvcnRzOnt9LGlkOnIsbG9hZGVkOiExfTtyZXR1cm4gdFtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxlKSxvLmxvYWRlZD0hMCxvLmV4cG9ydHN9dmFyIG49e307cmV0dXJuIGUubT10LGUuYz1uLGUucD1cIlwiLGUoMCl9KFtmdW5jdGlvbih0LGUsbil7dC5leHBvcnRzPW4oMjIpfSxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4odCl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09Yi5jYWxsKHQpfWZ1bmN0aW9uIHIodCl7cmV0dXJuXCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiPT09Yi5jYWxsKHQpfWZ1bmN0aW9uIG8odCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEZvcm1EYXRhJiZ0IGluc3RhbmNlb2YgRm9ybURhdGF9ZnVuY3Rpb24gaSh0KXt2YXIgZTtyZXR1cm4gZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgQXJyYXlCdWZmZXImJkFycmF5QnVmZmVyLmlzVmlldz9BcnJheUJ1ZmZlci5pc1ZpZXcodCk6dCYmdC5idWZmZXImJnQuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXJ9ZnVuY3Rpb24gdSh0KXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdH1mdW5jdGlvbiBzKHQpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiB0fWZ1bmN0aW9uIGModCl7cmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIHR9ZnVuY3Rpb24gYSh0KXtyZXR1cm4gbnVsbCE9PXQmJlwib2JqZWN0XCI9PXR5cGVvZiB0fWZ1bmN0aW9uIGYodCl7cmV0dXJuXCJbb2JqZWN0IERhdGVdXCI9PT1iLmNhbGwodCl9ZnVuY3Rpb24gbCh0KXtyZXR1cm5cIltvYmplY3QgRmlsZV1cIj09PWIuY2FsbCh0KX1mdW5jdGlvbiBwKHQpe3JldHVyblwiW29iamVjdCBCbG9iXVwiPT09Yi5jYWxsKHQpfWZ1bmN0aW9uIGgodCl7cmV0dXJuXCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT09Yi5jYWxsKHQpfWZ1bmN0aW9uIGQodCl7cmV0dXJuIGEodCkmJmgodC5waXBlKX1mdW5jdGlvbiBtKHQpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBVUkxTZWFyY2hQYXJhbXMmJnQgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXN9ZnVuY3Rpb24gdih0KXtyZXR1cm4gdC5yZXBsYWNlKC9eXFxzKi8sXCJcIikucmVwbGFjZSgvXFxzKiQvLFwiXCIpfWZ1bmN0aW9uIHkoKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnR9ZnVuY3Rpb24gZyh0LGUpe2lmKG51bGwhPT10JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgdClpZihcIm9iamVjdFwiPT10eXBlb2YgdHx8bih0KXx8KHQ9W3RdKSxuKHQpKWZvcih2YXIgcj0wLG89dC5sZW5ndGg7cjxvO3IrKyllLmNhbGwobnVsbCx0W3JdLHIsdCk7ZWxzZSBmb3IodmFyIGkgaW4gdCl0Lmhhc093blByb3BlcnR5KGkpJiZlLmNhbGwobnVsbCx0W2ldLGksdCl9ZnVuY3Rpb24gdygpe2Z1bmN0aW9uIHQodCxuKXtcIm9iamVjdFwiPT10eXBlb2YgZVtuXSYmXCJvYmplY3RcIj09dHlwZW9mIHQ/ZVtuXT13KGVbbl0sdCk6ZVtuXT10fWZvcih2YXIgZT17fSxuPTAscj1hcmd1bWVudHMubGVuZ3RoO248cjtuKyspZyhhcmd1bWVudHNbbl0sdCk7cmV0dXJuIGV9dmFyIGI9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZzt0LmV4cG9ydHM9e2lzQXJyYXk6bixpc0FycmF5QnVmZmVyOnIsaXNGb3JtRGF0YTpvLGlzQXJyYXlCdWZmZXJWaWV3OmksaXNTdHJpbmc6dSxpc051bWJlcjpzLGlzT2JqZWN0OmEsaXNVbmRlZmluZWQ6Yyxpc0RhdGU6Zixpc0ZpbGU6bCxpc0Jsb2I6cCxpc0Z1bmN0aW9uOmgsaXNTdHJlYW06ZCxpc1VSTFNlYXJjaFBhcmFtczptLGlzU3RhbmRhcmRCcm93c2VyRW52OnksZm9yRWFjaDpnLG1lcmdlOncsdHJpbTp2fX0sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiBuKCl7dGhyb3cgbmV3IEVycm9yKFwic2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiByKCl7dGhyb3cgbmV3IEVycm9yKFwiY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfWZ1bmN0aW9uIG8odCl7aWYoZj09PXNldFRpbWVvdXQpcmV0dXJuIHNldFRpbWVvdXQodCwwKTtpZigoZj09PW58fCFmKSYmc2V0VGltZW91dClyZXR1cm4gZj1zZXRUaW1lb3V0LHNldFRpbWVvdXQodCwwKTt0cnl7cmV0dXJuIGYodCwwKX1jYXRjaChlKXt0cnl7cmV0dXJuIGYuY2FsbChudWxsLHQsMCl9Y2F0Y2goZSl7cmV0dXJuIGYuY2FsbCh0aGlzLHQsMCl9fX1mdW5jdGlvbiBpKHQpe2lmKGw9PT1jbGVhclRpbWVvdXQpcmV0dXJuIGNsZWFyVGltZW91dCh0KTtpZigobD09PXJ8fCFsKSYmY2xlYXJUaW1lb3V0KXJldHVybiBsPWNsZWFyVGltZW91dCxjbGVhclRpbWVvdXQodCk7dHJ5e3JldHVybiBsKHQpfWNhdGNoKGUpe3RyeXtyZXR1cm4gbC5jYWxsKG51bGwsdCl9Y2F0Y2goZSl7cmV0dXJuIGwuY2FsbCh0aGlzLHQpfX19ZnVuY3Rpb24gdSgpe20mJmgmJihtPSExLGgubGVuZ3RoP2Q9aC5jb25jYXQoZCk6dj0tMSxkLmxlbmd0aCYmcygpKX1mdW5jdGlvbiBzKCl7aWYoIW0pe3ZhciB0PW8odSk7bT0hMDtmb3IodmFyIGU9ZC5sZW5ndGg7ZTspe2ZvcihoPWQsZD1bXTsrK3Y8ZTspaCYmaFt2XS5ydW4oKTt2PS0xLGU9ZC5sZW5ndGh9aD1udWxsLG09ITEsaSh0KX19ZnVuY3Rpb24gYyh0LGUpe3RoaXMuZnVuPXQsdGhpcy5hcnJheT1lfWZ1bmN0aW9uIGEoKXt9dmFyIGYsbCxwPXQuZXhwb3J0cz17fTshZnVuY3Rpb24oKXt0cnl7Zj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBzZXRUaW1lb3V0P3NldFRpbWVvdXQ6bn1jYXRjaCh0KXtmPW59dHJ5e2w9XCJmdW5jdGlvblwiPT10eXBlb2YgY2xlYXJUaW1lb3V0P2NsZWFyVGltZW91dDpyfWNhdGNoKHQpe2w9cn19KCk7dmFyIGgsZD1bXSxtPSExLHY9LTE7cC5uZXh0VGljaz1mdW5jdGlvbih0KXt2YXIgZT1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aC0xKTtpZihhcmd1bWVudHMubGVuZ3RoPjEpZm9yKHZhciBuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyllW24tMV09YXJndW1lbnRzW25dO2QucHVzaChuZXcgYyh0LGUpKSwxIT09ZC5sZW5ndGh8fG18fG8ocyl9LGMucHJvdG90eXBlLnJ1bj1mdW5jdGlvbigpe3RoaXMuZnVuLmFwcGx5KG51bGwsdGhpcy5hcnJheSl9LHAudGl0bGU9XCJicm93c2VyXCIscC5icm93c2VyPSEwLHAuZW52PXt9LHAuYXJndj1bXSxwLnZlcnNpb249XCJcIixwLnZlcnNpb25zPXt9LHAub249YSxwLmFkZExpc3RlbmVyPWEscC5vbmNlPWEscC5vZmY9YSxwLnJlbW92ZUxpc3RlbmVyPWEscC5yZW1vdmVBbGxMaXN0ZW5lcnM9YSxwLmVtaXQ9YSxwLmJpbmRpbmc9ZnVuY3Rpb24odCl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWRcIil9LHAuY3dkPWZ1bmN0aW9uKCl7cmV0dXJuXCIvXCJ9LHAuY2hkaXI9ZnVuY3Rpb24odCl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkXCIpfSxwLnVtYXNrPWZ1bmN0aW9uKCl7cmV0dXJuIDB9fSxmdW5jdGlvbih0LGUsbil7KGZ1bmN0aW9uKGUpe1widXNlIHN0cmljdFwiO3ZhciByPW4oMSksbz1uKDEyKSxpPW4oMTgpLHU9big0KSxzPW4oMTYpLGM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93LmJ0b2F8fG4oMTEpLGE9bigxOSk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZixsKXt2YXIgcD1sLmRhdGEsaD1sLmhlYWRlcnM7ci5pc0Zvcm1EYXRhKHApJiZkZWxldGUgaFtcIkNvbnRlbnQtVHlwZVwiXTt2YXIgZD1uZXcgWE1MSHR0cFJlcXVlc3QsbT1cIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLHY9ITE7aWYoXCJ0ZXN0XCI9PT1lLmVudi5OT0RFX0VOVnx8XCJ1bmRlZmluZWRcIj09dHlwZW9mIHdpbmRvd3x8IXdpbmRvdy5YRG9tYWluUmVxdWVzdHx8XCJ3aXRoQ3JlZGVudGlhbHNcImluIGR8fHMobC51cmwpfHwoZD1uZXcgd2luZG93LlhEb21haW5SZXF1ZXN0LG09XCJvbmxvYWRcIix2PSEwLGQub25wcm9ncmVzcz1mdW5jdGlvbigpe30sZC5vbnRpbWVvdXQ9ZnVuY3Rpb24oKXt9KSxsLmF1dGgpe3ZhciB5PWwuYXV0aC51c2VybmFtZXx8XCJcIixnPWwuYXV0aC5wYXNzd29yZHx8XCJcIjtoLkF1dGhvcml6YXRpb249XCJCYXNpYyBcIitjKHkrXCI6XCIrZyl9aWYoZC5vcGVuKGwubWV0aG9kLnRvVXBwZXJDYXNlKCksbyhsLnVybCxsLnBhcmFtcyxsLnBhcmFtc1NlcmlhbGl6ZXIpLCEwKSxkLnRpbWVvdXQ9bC50aW1lb3V0LGRbbV09ZnVuY3Rpb24oKXtpZihkJiYoND09PWQucmVhZHlTdGF0ZXx8dikmJjAhPT1kLnN0YXR1cyl7dmFyIGU9XCJnZXRBbGxSZXNwb25zZUhlYWRlcnNcImluIGQ/aShkLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKTpudWxsLG49bC5yZXNwb25zZVR5cGUmJlwidGV4dFwiIT09bC5yZXNwb25zZVR5cGU/ZC5yZXNwb25zZTpkLnJlc3BvbnNlVGV4dCxyPXtkYXRhOnUobixlLGwudHJhbnNmb3JtUmVzcG9uc2UpLHN0YXR1czoxMjIzPT09ZC5zdGF0dXM/MjA0OmQuc3RhdHVzLHN0YXR1c1RleHQ6MTIyMz09PWQuc3RhdHVzP1wiTm8gQ29udGVudFwiOmQuc3RhdHVzVGV4dCxoZWFkZXJzOmUsY29uZmlnOmwscmVxdWVzdDpkfTthKHQsZixyKSxkPW51bGx9fSxkLm9uZXJyb3I9ZnVuY3Rpb24oKXtmKG5ldyBFcnJvcihcIk5ldHdvcmsgRXJyb3JcIikpLGQ9bnVsbH0sZC5vbnRpbWVvdXQ9ZnVuY3Rpb24oKXt2YXIgdD1uZXcgRXJyb3IoXCJ0aW1lb3V0IG9mIFwiK2wudGltZW91dCtcIm1zIGV4Y2VlZGVkXCIpO3QudGltZW91dD1sLnRpbWVvdXQsdC5jb2RlPVwiRUNPTk5BQk9SVEVEXCIsZih0KSxkPW51bGx9LHIuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSl7dmFyIHc9bigxNCksYj1sLndpdGhDcmVkZW50aWFsc3x8cyhsLnVybCk/dy5yZWFkKGwueHNyZkNvb2tpZU5hbWUpOnZvaWQgMDtiJiYoaFtsLnhzcmZIZWFkZXJOYW1lXT1iKX1pZihcInNldFJlcXVlc3RIZWFkZXJcImluIGQmJnIuZm9yRWFjaChoLGZ1bmN0aW9uKHQsZSl7XCJ1bmRlZmluZWRcIj09dHlwZW9mIHAmJlwiY29udGVudC10eXBlXCI9PT1lLnRvTG93ZXJDYXNlKCk/ZGVsZXRlIGhbZV06ZC5zZXRSZXF1ZXN0SGVhZGVyKGUsdCl9KSxsLndpdGhDcmVkZW50aWFscyYmKGQud2l0aENyZWRlbnRpYWxzPSEwKSxsLnJlc3BvbnNlVHlwZSl0cnl7ZC5yZXNwb25zZVR5cGU9bC5yZXNwb25zZVR5cGV9Y2F0Y2goeCl7aWYoXCJqc29uXCIhPT1kLnJlc3BvbnNlVHlwZSl0aHJvdyB4fWwucHJvZ3Jlc3MmJihcInBvc3RcIj09PWwubWV0aG9kfHxcInB1dFwiPT09bC5tZXRob2Q/ZC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsbC5wcm9ncmVzcyk6XCJnZXRcIj09PWwubWV0aG9kJiZkLmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLGwucHJvZ3Jlc3MpKSx2b2lkIDA9PT1wJiYocD1udWxsKSxkLnNlbmQocCl9fSkuY2FsbChlLG4oMikpfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bigxKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlLG4pe3JldHVybiByLmZvckVhY2gobixmdW5jdGlvbihuKXt0PW4odCxlKX0pLHR9fSxmdW5jdGlvbih0LGUsbil7dC5leHBvcnRzPW4oNil9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3RoaXMuZGVmYXVsdHM9aS5tZXJnZSh7fSx0KSx0aGlzLmludGVyY2VwdG9ycz17cmVxdWVzdDpuZXcgcyxyZXNwb25zZTpuZXcgc319dmFyIG89big5KSxpPW4oMSksdT1uKDgpLHM9big3KSxjPW4oMTUpLGE9bigxMyksZj1uKDEwKSxsPW4oNCk7ci5wcm90b3R5cGUucmVxdWVzdD1mdW5jdGlvbih0KXtcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9aS5tZXJnZSh7dXJsOmFyZ3VtZW50c1swXX0sYXJndW1lbnRzWzFdKSksdD1pLm1lcmdlKG8sdGhpcy5kZWZhdWx0cyx7bWV0aG9kOlwiZ2V0XCJ9LHQpLHQuYmFzZVVSTCYmIWModC51cmwpJiYodC51cmw9YSh0LmJhc2VVUkwsdC51cmwpKSx0LndpdGhDcmVkZW50aWFscz10LndpdGhDcmVkZW50aWFsc3x8dGhpcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMsdC5kYXRhPWwodC5kYXRhLHQuaGVhZGVycyx0LnRyYW5zZm9ybVJlcXVlc3QpLHQuaGVhZGVycz1pLm1lcmdlKHQuaGVhZGVycy5jb21tb258fHt9LHQuaGVhZGVyc1t0Lm1ldGhvZF18fHt9LHQuaGVhZGVyc3x8e30pLGkuZm9yRWFjaChbXCJkZWxldGVcIixcImdldFwiLFwiaGVhZFwiLFwicG9zdFwiLFwicHV0XCIsXCJwYXRjaFwiLFwiY29tbW9uXCJdLGZ1bmN0aW9uKGUpe2RlbGV0ZSB0LmhlYWRlcnNbZV19KTt2YXIgZT1bdSx2b2lkIDBdLG49UHJvbWlzZS5yZXNvbHZlKHQpO2Zvcih0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24odCl7ZS51bnNoaWZ0KHQuZnVsZmlsbGVkLHQucmVqZWN0ZWQpfSksdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbih0KXtlLnB1c2godC5mdWxmaWxsZWQsdC5yZWplY3RlZCl9KTtlLmxlbmd0aDspbj1uLnRoZW4oZS5zaGlmdCgpLGUuc2hpZnQoKSk7cmV0dXJuIG59O3ZhciBwPW5ldyByKG8pLGg9dC5leHBvcnRzPWYoci5wcm90b3R5cGUucmVxdWVzdCxwKTtoLnJlcXVlc3Q9ZihyLnByb3RvdHlwZS5yZXF1ZXN0LHApLGguQXhpb3M9cixoLmRlZmF1bHRzPXAuZGVmYXVsdHMsaC5pbnRlcmNlcHRvcnM9cC5pbnRlcmNlcHRvcnMsaC5jcmVhdGU9ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyByKHQpfSxoLmFsbD1mdW5jdGlvbih0KXtyZXR1cm4gUHJvbWlzZS5hbGwodCl9LGguc3ByZWFkPW4oMjApLGkuZm9yRWFjaChbXCJkZWxldGVcIixcImdldFwiLFwiaGVhZFwiXSxmdW5jdGlvbih0KXtyLnByb3RvdHlwZVt0XT1mdW5jdGlvbihlLG4pe3JldHVybiB0aGlzLnJlcXVlc3QoaS5tZXJnZShufHx7fSx7bWV0aG9kOnQsdXJsOmV9KSl9LGhbdF09ZihyLnByb3RvdHlwZVt0XSxwKX0pLGkuZm9yRWFjaChbXCJwb3N0XCIsXCJwdXRcIixcInBhdGNoXCJdLGZ1bmN0aW9uKHQpe3IucHJvdG90eXBlW3RdPWZ1bmN0aW9uKGUsbixyKXtyZXR1cm4gdGhpcy5yZXF1ZXN0KGkubWVyZ2Uocnx8e30se21ldGhvZDp0LHVybDplLGRhdGE6bn0pKX0saFt0XT1mKHIucHJvdG90eXBlW3RdLHApfSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKCl7dGhpcy5oYW5kbGVycz1bXX12YXIgbz1uKDEpO3IucHJvdG90eXBlLnVzZT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmhhbmRsZXJzLnB1c2goe2Z1bGZpbGxlZDp0LHJlamVjdGVkOmV9KSx0aGlzLmhhbmRsZXJzLmxlbmd0aC0xfSxyLnByb3RvdHlwZS5lamVjdD1mdW5jdGlvbih0KXt0aGlzLmhhbmRsZXJzW3RdJiYodGhpcy5oYW5kbGVyc1t0XT1udWxsKX0sci5wcm90b3R5cGUuZm9yRWFjaD1mdW5jdGlvbih0KXtvLmZvckVhY2godGhpcy5oYW5kbGVycyxmdW5jdGlvbihlKXtudWxsIT09ZSYmdChlKX0pfSx0LmV4cG9ydHM9cn0sZnVuY3Rpb24odCxlLG4peyhmdW5jdGlvbihlKXtcInVzZSBzdHJpY3RcIjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHIsbyl7dHJ5e3ZhciBpO1wiZnVuY3Rpb25cIj09dHlwZW9mIHQuYWRhcHRlcj9pPXQuYWRhcHRlcjpcInVuZGVmaW5lZFwiIT10eXBlb2YgWE1MSHR0cFJlcXVlc3Q/aT1uKDMpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBlJiYoaT1uKDMpKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBpJiZpKHIsbyx0KX1jYXRjaCh1KXtvKHUpfX0pfX0pLmNhbGwoZSxuKDIpKX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCxlKXshby5pc1VuZGVmaW5lZCh0KSYmby5pc1VuZGVmaW5lZCh0W1wiQ29udGVudC1UeXBlXCJdKSYmKHRbXCJDb250ZW50LVR5cGVcIl09ZSl9dmFyIG89bigxKSxpPW4oMTcpLHU9L15cXClcXF1cXH0nLD9cXG4vLHM9e1wiQ29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIn07dC5leHBvcnRzPXt0cmFuc2Zvcm1SZXF1ZXN0OltmdW5jdGlvbih0LGUpe3JldHVybiBpKGUsXCJDb250ZW50LVR5cGVcIiksby5pc0Zvcm1EYXRhKHQpfHxvLmlzQXJyYXlCdWZmZXIodCl8fG8uaXNTdHJlYW0odCl8fG8uaXNGaWxlKHQpfHxvLmlzQmxvYih0KT90Om8uaXNBcnJheUJ1ZmZlclZpZXcodCk/dC5idWZmZXI6by5pc1VSTFNlYXJjaFBhcmFtcyh0KT8ocihlLFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLThcIiksdC50b1N0cmluZygpKTpvLmlzT2JqZWN0KHQpPyhyKGUsXCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLThcIiksSlNPTi5zdHJpbmdpZnkodCkpOnR9XSx0cmFuc2Zvcm1SZXNwb25zZTpbZnVuY3Rpb24odCl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe3Q9dC5yZXBsYWNlKHUsXCJcIik7dHJ5e3Q9SlNPTi5wYXJzZSh0KX1jYXRjaChlKXt9fXJldHVybiB0fV0saGVhZGVyczp7Y29tbW9uOntBY2NlcHQ6XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIn0scGF0Y2g6by5tZXJnZShzKSxwb3N0Om8ubWVyZ2UocykscHV0Om8ubWVyZ2Uocyl9LHRpbWVvdXQ6MCx4c3JmQ29va2llTmFtZTpcIlhTUkYtVE9LRU5cIix4c3JmSGVhZGVyTmFtZTpcIlgtWFNSRi1UT0tFTlwiLG1heENvbnRlbnRMZW5ndGg6LTEsdmFsaWRhdGVTdGF0dXM6ZnVuY3Rpb24odCl7cmV0dXJuIHQ+PTIwMCYmdDwzMDB9fX0sZnVuY3Rpb24odCxlKXtcInVzZSBzdHJpY3RcIjt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtyZXR1cm4gZnVuY3Rpb24oKXtmb3IodmFyIG49bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpLHI9MDtyPG4ubGVuZ3RoO3IrKyluW3JdPWFyZ3VtZW50c1tyXTtyZXR1cm4gdC5hcHBseShlLG4pfX19LGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbigpe3RoaXMubWVzc2FnZT1cIlN0cmluZyBjb250YWlucyBhbiBpbnZhbGlkIGNoYXJhY3RlclwifWZ1bmN0aW9uIHIodCl7Zm9yKHZhciBlLHIsaT1TdHJpbmcodCksdT1cIlwiLHM9MCxjPW87aS5jaGFyQXQoMHxzKXx8KGM9XCI9XCIscyUxKTt1Kz1jLmNoYXJBdCg2MyZlPj44LXMlMSo4KSl7aWYocj1pLmNoYXJDb2RlQXQocys9Ljc1KSxyPjI1NSl0aHJvdyBuZXcgbjtlPWU8PDh8cn1yZXR1cm4gdX12YXIgbz1cIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCI7bi5wcm90b3R5cGU9bmV3IEVycm9yLG4ucHJvdG90eXBlLmNvZGU9NSxuLnByb3RvdHlwZS5uYW1lPVwiSW52YWxpZENoYXJhY3RlckVycm9yXCIsdC5leHBvcnRzPXJ9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybiBlbmNvZGVVUklDb21wb25lbnQodCkucmVwbGFjZSgvJTQwL2dpLFwiQFwiKS5yZXBsYWNlKC8lM0EvZ2ksXCI6XCIpLnJlcGxhY2UoLyUyNC9nLFwiJFwiKS5yZXBsYWNlKC8lMkMvZ2ksXCIsXCIpLnJlcGxhY2UoLyUyMC9nLFwiK1wiKS5yZXBsYWNlKC8lNUIvZ2ksXCJbXCIpLnJlcGxhY2UoLyU1RC9naSxcIl1cIil9dmFyIG89bigxKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlLG4pe2lmKCFlKXJldHVybiB0O3ZhciBpO2lmKG4paT1uKGUpO2Vsc2UgaWYoby5pc1VSTFNlYXJjaFBhcmFtcyhlKSlpPWUudG9TdHJpbmcoKTtlbHNle3ZhciB1PVtdO28uZm9yRWFjaChlLGZ1bmN0aW9uKHQsZSl7bnVsbCE9PXQmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiB0JiYoby5pc0FycmF5KHQpJiYoZSs9XCJbXVwiKSxvLmlzQXJyYXkodCl8fCh0PVt0XSksby5mb3JFYWNoKHQsZnVuY3Rpb24odCl7by5pc0RhdGUodCk/dD10LnRvSVNPU3RyaW5nKCk6by5pc09iamVjdCh0KSYmKHQ9SlNPTi5zdHJpbmdpZnkodCkpLHUucHVzaChyKGUpK1wiPVwiK3IodCkpfSkpfSksaT11LmpvaW4oXCImXCIpfXJldHVybiBpJiYodCs9KHQuaW5kZXhPZihcIj9cIik9PT0tMT9cIj9cIjpcIiZcIikraSksdH19LGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQucmVwbGFjZSgvXFwvKyQvLFwiXCIpK1wiL1wiK2UucmVwbGFjZSgvXlxcLysvLFwiXCIpfX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oMSk7dC5leHBvcnRzPXIuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKT9mdW5jdGlvbigpe3JldHVybnt3cml0ZTpmdW5jdGlvbih0LGUsbixvLGksdSl7dmFyIHM9W107cy5wdXNoKHQrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGUpKSxyLmlzTnVtYmVyKG4pJiZzLnB1c2goXCJleHBpcmVzPVwiK25ldyBEYXRlKG4pLnRvR01UU3RyaW5nKCkpLHIuaXNTdHJpbmcobykmJnMucHVzaChcInBhdGg9XCIrbyksci5pc1N0cmluZyhpKSYmcy5wdXNoKFwiZG9tYWluPVwiK2kpLHU9PT0hMCYmcy5wdXNoKFwic2VjdXJlXCIpLGRvY3VtZW50LmNvb2tpZT1zLmpvaW4oXCI7IFwiKX0scmVhZDpmdW5jdGlvbih0KXt2YXIgZT1kb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cChcIihefDtcXFxccyopKFwiK3QrXCIpPShbXjtdKilcIikpO3JldHVybiBlP2RlY29kZVVSSUNvbXBvbmVudChlWzNdKTpudWxsfSxyZW1vdmU6ZnVuY3Rpb24odCl7dGhpcy53cml0ZSh0LFwiXCIsRGF0ZS5ub3coKS04NjRlNSl9fX0oKTpmdW5jdGlvbigpe3JldHVybnt3cml0ZTpmdW5jdGlvbigpe30scmVhZDpmdW5jdGlvbigpe3JldHVybiBudWxsfSxyZW1vdmU6ZnVuY3Rpb24oKXt9fX0oKX0sZnVuY3Rpb24odCxlKXtcInVzZSBzdHJpY3RcIjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHQpfX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oMSk7dC5leHBvcnRzPXIuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKT9mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7dmFyIGU9dDtyZXR1cm4gbiYmKG8uc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUpLGU9by5ocmVmKSxvLnNldEF0dHJpYnV0ZShcImhyZWZcIixlKSx7aHJlZjpvLmhyZWYscHJvdG9jb2w6by5wcm90b2NvbD9vLnByb3RvY29sLnJlcGxhY2UoLzokLyxcIlwiKTpcIlwiLGhvc3Q6by5ob3N0LHNlYXJjaDpvLnNlYXJjaD9vLnNlYXJjaC5yZXBsYWNlKC9eXFw/LyxcIlwiKTpcIlwiLGhhc2g6by5oYXNoP28uaGFzaC5yZXBsYWNlKC9eIy8sXCJcIik6XCJcIixob3N0bmFtZTpvLmhvc3RuYW1lLHBvcnQ6by5wb3J0LHBhdGhuYW1lOlwiL1wiPT09by5wYXRobmFtZS5jaGFyQXQoMCk/by5wYXRobmFtZTpcIi9cIitvLnBhdGhuYW1lfX12YXIgZSxuPS8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtyZXR1cm4gZT10KHdpbmRvdy5sb2NhdGlvbi5ocmVmKSxmdW5jdGlvbihuKXt2YXIgbz1yLmlzU3RyaW5nKG4pP3Qobik6bjtyZXR1cm4gby5wcm90b2NvbD09PWUucHJvdG9jb2wmJm8uaG9zdD09PWUuaG9zdH19KCk6ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4hMH19KCl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDEpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3IuZm9yRWFjaCh0LGZ1bmN0aW9uKG4scil7ciE9PWUmJnIudG9VcHBlckNhc2UoKT09PWUudG9VcHBlckNhc2UoKSYmKHRbZV09bixkZWxldGUgdFtyXSl9KX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDEpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZSxuLG8saT17fTtyZXR1cm4gdD8oci5mb3JFYWNoKHQuc3BsaXQoXCJcXG5cIiksZnVuY3Rpb24odCl7bz10LmluZGV4T2YoXCI6XCIpLGU9ci50cmltKHQuc3Vic3RyKDAsbykpLnRvTG93ZXJDYXNlKCksbj1yLnRyaW0odC5zdWJzdHIobysxKSksZSYmKGlbZV09aVtlXT9pW2VdK1wiLCBcIituOm4pfSksaSk6aX19LGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztuLnN0YXR1cyYmciYmIXIobi5zdGF0dXMpP2Uobik6dChuKX19LGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gdC5hcHBseShudWxsLGUpfX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcjsoZnVuY3Rpb24odCxvLGkpey8qIVxuXHQgKiBAb3ZlcnZpZXcgZXM2LXByb21pc2UgLSBhIHRpbnkgaW1wbGVtZW50YXRpb24gb2YgUHJvbWlzZXMvQSsuXG5cdCAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE0IFllaHVkYSBLYXR6LCBUb20gRGFsZSwgU3RlZmFuIFBlbm5lciBhbmQgY29udHJpYnV0b3JzIChDb252ZXJzaW9uIHRvIEVTNiBBUEkgYnkgSmFrZSBBcmNoaWJhbGQpXG5cdCAqIEBsaWNlbnNlICAgTGljZW5zZWQgdW5kZXIgTUlUIGxpY2Vuc2Vcblx0ICogICAgICAgICAgICBTZWUgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2pha2VhcmNoaWJhbGQvZXM2LXByb21pc2UvbWFzdGVyL0xJQ0VOU0Vcblx0ICogQHZlcnNpb24gICAzLjIuMVxuXHQgKi9cbihmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHUodCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdHx8XCJvYmplY3RcIj09dHlwZW9mIHQmJm51bGwhPT10fWZ1bmN0aW9uIHModCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdH1mdW5jdGlvbiBjKHQpe0c9dH1mdW5jdGlvbiBhKHQpe3R0PXR9ZnVuY3Rpb24gZigpe3JldHVybiBmdW5jdGlvbigpe3QubmV4dFRpY2sobSl9fWZ1bmN0aW9uIGwoKXtyZXR1cm4gZnVuY3Rpb24oKXtZKG0pfX1mdW5jdGlvbiBwKCl7dmFyIHQ9MCxlPW5ldyBydChtKSxuPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpO3JldHVybiBlLm9ic2VydmUobix7Y2hhcmFjdGVyRGF0YTohMH0pLGZ1bmN0aW9uKCl7bi5kYXRhPXQ9Kyt0JTJ9fWZ1bmN0aW9uIGgoKXt2YXIgdD1uZXcgTWVzc2FnZUNoYW5uZWw7cmV0dXJuIHQucG9ydDEub25tZXNzYWdlPW0sZnVuY3Rpb24oKXt0LnBvcnQyLnBvc3RNZXNzYWdlKDApfX1mdW5jdGlvbiBkKCl7cmV0dXJuIGZ1bmN0aW9uKCl7c2V0VGltZW91dChtLDEpfX1mdW5jdGlvbiBtKCl7Zm9yKHZhciB0PTA7dDxaO3QrPTIpe3ZhciBlPXV0W3RdLG49dXRbdCsxXTtlKG4pLHV0W3RdPXZvaWQgMCx1dFt0KzFdPXZvaWQgMH1aPTB9ZnVuY3Rpb24gdigpe3RyeXt2YXIgdD1uKDI3KTtyZXR1cm4gWT10LnJ1bk9uTG9vcHx8dC5ydW5PbkNvbnRleHQsbCgpfWNhdGNoKGUpe3JldHVybiBkKCl9fWZ1bmN0aW9uIHkodCxlKXt2YXIgbj10aGlzLHI9bmV3IHRoaXMuY29uc3RydWN0b3Iodyk7dm9pZCAwPT09clthdF0mJk0ocik7dmFyIG89bi5fc3RhdGU7aWYobyl7dmFyIGk9YXJndW1lbnRzW28tMV07dHQoZnVuY3Rpb24oKXtMKG8scixpLG4uX3Jlc3VsdCl9KX1lbHNlIEQobixyLHQsZSk7cmV0dXJuIHJ9ZnVuY3Rpb24gZyh0KXt2YXIgZT10aGlzO2lmKHQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0LmNvbnN0cnVjdG9yPT09ZSlyZXR1cm4gdDt2YXIgbj1uZXcgZSh3KTtyZXR1cm4gQyhuLHQpLG59ZnVuY3Rpb24gdygpe31mdW5jdGlvbiBiKCl7cmV0dXJuIG5ldyBUeXBlRXJyb3IoXCJZb3UgY2Fubm90IHJlc29sdmUgYSBwcm9taXNlIHdpdGggaXRzZWxmXCIpfWZ1bmN0aW9uIHgoKXtyZXR1cm4gbmV3IFR5cGVFcnJvcihcIkEgcHJvbWlzZXMgY2FsbGJhY2sgY2Fubm90IHJldHVybiB0aGF0IHNhbWUgcHJvbWlzZS5cIil9ZnVuY3Rpb24gXyh0KXt0cnl7cmV0dXJuIHQudGhlbn1jYXRjaChlKXtyZXR1cm4gaHQuZXJyb3I9ZSxodH19ZnVuY3Rpb24gQSh0LGUsbixyKXt0cnl7dC5jYWxsKGUsbixyKX1jYXRjaChvKXtyZXR1cm4gb319ZnVuY3Rpb24gRSh0LGUsbil7dHQoZnVuY3Rpb24odCl7dmFyIHI9ITEsbz1BKG4sZSxmdW5jdGlvbihuKXtyfHwocj0hMCxlIT09bj9DKHQsbik6Uih0LG4pKX0sZnVuY3Rpb24oZSl7cnx8KHI9ITAsTyh0LGUpKX0sXCJTZXR0bGU6IFwiKyh0Ll9sYWJlbHx8XCIgdW5rbm93biBwcm9taXNlXCIpKTshciYmbyYmKHI9ITAsTyh0LG8pKX0sdCl9ZnVuY3Rpb24gUyh0LGUpe2UuX3N0YXRlPT09bHQ/Uih0LGUuX3Jlc3VsdCk6ZS5fc3RhdGU9PT1wdD9PKHQsZS5fcmVzdWx0KTpEKGUsdm9pZCAwLGZ1bmN0aW9uKGUpe0ModCxlKX0sZnVuY3Rpb24oZSl7Tyh0LGUpfSl9ZnVuY3Rpb24gaih0LGUsbil7ZS5jb25zdHJ1Y3Rvcj09PXQuY29uc3RydWN0b3ImJm49PT1zdCYmY29uc3RydWN0b3IucmVzb2x2ZT09PWN0P1ModCxlKTpuPT09aHQ/Tyh0LGh0LmVycm9yKTp2b2lkIDA9PT1uP1IodCxlKTpzKG4pP0UodCxlLG4pOlIodCxlKX1mdW5jdGlvbiBDKHQsZSl7dD09PWU/Tyh0LGIoKSk6dShlKT9qKHQsZSxfKGUpKTpSKHQsZSl9ZnVuY3Rpb24gVCh0KXt0Ll9vbmVycm9yJiZ0Ll9vbmVycm9yKHQuX3Jlc3VsdCksQih0KX1mdW5jdGlvbiBSKHQsZSl7dC5fc3RhdGU9PT1mdCYmKHQuX3Jlc3VsdD1lLHQuX3N0YXRlPWx0LDAhPT10Ll9zdWJzY3JpYmVycy5sZW5ndGgmJnR0KEIsdCkpfWZ1bmN0aW9uIE8odCxlKXt0Ll9zdGF0ZT09PWZ0JiYodC5fc3RhdGU9cHQsdC5fcmVzdWx0PWUsdHQoVCx0KSl9ZnVuY3Rpb24gRCh0LGUsbixyKXt2YXIgbz10Ll9zdWJzY3JpYmVycyxpPW8ubGVuZ3RoO3QuX29uZXJyb3I9bnVsbCxvW2ldPWUsb1tpK2x0XT1uLG9baStwdF09ciwwPT09aSYmdC5fc3RhdGUmJnR0KEIsdCl9ZnVuY3Rpb24gQih0KXt2YXIgZT10Ll9zdWJzY3JpYmVycyxuPXQuX3N0YXRlO2lmKDAhPT1lLmxlbmd0aCl7Zm9yKHZhciByLG8saT10Ll9yZXN1bHQsdT0wO3U8ZS5sZW5ndGg7dSs9MylyPWVbdV0sbz1lW3Urbl0scj9MKG4scixvLGkpOm8oaSk7dC5fc3Vic2NyaWJlcnMubGVuZ3RoPTB9fWZ1bmN0aW9uIEkoKXt0aGlzLmVycm9yPW51bGx9ZnVuY3Rpb24gcSh0LGUpe3RyeXtyZXR1cm4gdChlKX1jYXRjaChuKXtyZXR1cm4gZHQuZXJyb3I9bixkdH19ZnVuY3Rpb24gTCh0LGUsbixyKXt2YXIgbyxpLHUsYyxhPXMobik7aWYoYSl7aWYobz1xKG4sciksbz09PWR0PyhjPSEwLGk9by5lcnJvcixvPW51bGwpOnU9ITAsZT09PW8pcmV0dXJuIHZvaWQgTyhlLHgoKSl9ZWxzZSBvPXIsdT0hMDtlLl9zdGF0ZSE9PWZ0fHwoYSYmdT9DKGUsbyk6Yz9PKGUsaSk6dD09PWx0P1IoZSxvKTp0PT09cHQmJk8oZSxvKSl9ZnVuY3Rpb24gUCh0LGUpe3RyeXtlKGZ1bmN0aW9uKGUpe0ModCxlKX0sZnVuY3Rpb24oZSl7Tyh0LGUpfSl9Y2F0Y2gobil7Tyh0LG4pfX1mdW5jdGlvbiBVKCl7cmV0dXJuIG10Kyt9ZnVuY3Rpb24gTSh0KXt0W2F0XT1tdCsrLHQuX3N0YXRlPXZvaWQgMCx0Ll9yZXN1bHQ9dm9pZCAwLHQuX3N1YnNjcmliZXJzPVtdfWZ1bmN0aW9uIE4odCl7cmV0dXJuIG5ldyBidCh0aGlzLHQpLnByb21pc2V9ZnVuY3Rpb24gWCh0KXt2YXIgZT10aGlzO3JldHVybiBuZXcgZShRKHQpP2Z1bmN0aW9uKG4scil7Zm9yKHZhciBvPXQubGVuZ3RoLGk9MDtpPG87aSsrKWUucmVzb2x2ZSh0W2ldKS50aGVuKG4scil9OmZ1bmN0aW9uKHQsZSl7ZShuZXcgVHlwZUVycm9yKFwiWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byByYWNlLlwiKSl9KX1mdW5jdGlvbiBGKHQpe3ZhciBlPXRoaXMsbj1uZXcgZSh3KTtyZXR1cm4gTyhuLHQpLG59ZnVuY3Rpb24gaygpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGEgcmVzb2x2ZXIgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBwcm9taXNlIGNvbnN0cnVjdG9yXCIpfWZ1bmN0aW9uIEgoKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnUHJvbWlzZSc6IFBsZWFzZSB1c2UgdGhlICduZXcnIG9wZXJhdG9yLCB0aGlzIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uXCIpfWZ1bmN0aW9uIEsodCl7dGhpc1thdF09VSgpLHRoaXMuX3Jlc3VsdD10aGlzLl9zdGF0ZT12b2lkIDAsdGhpcy5fc3Vic2NyaWJlcnM9W10sdyE9PXQmJihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiZrKCksdGhpcyBpbnN0YW5jZW9mIEs/UCh0aGlzLHQpOkgoKSl9ZnVuY3Rpb24gVih0LGUpe3RoaXMuX2luc3RhbmNlQ29uc3RydWN0b3I9dCx0aGlzLnByb21pc2U9bmV3IHQodyksdGhpcy5wcm9taXNlW2F0XXx8TSh0aGlzLnByb21pc2UpLFEoZSk/KHRoaXMuX2lucHV0PWUsdGhpcy5sZW5ndGg9ZS5sZW5ndGgsdGhpcy5fcmVtYWluaW5nPWUubGVuZ3RoLHRoaXMuX3Jlc3VsdD1uZXcgQXJyYXkodGhpcy5sZW5ndGgpLDA9PT10aGlzLmxlbmd0aD9SKHRoaXMucHJvbWlzZSx0aGlzLl9yZXN1bHQpOih0aGlzLmxlbmd0aD10aGlzLmxlbmd0aHx8MCx0aGlzLl9lbnVtZXJhdGUoKSwwPT09dGhpcy5fcmVtYWluaW5nJiZSKHRoaXMucHJvbWlzZSx0aGlzLl9yZXN1bHQpKSk6Tyh0aGlzLnByb21pc2UseigpKX1mdW5jdGlvbiB6KCl7cmV0dXJuIG5ldyBFcnJvcihcIkFycmF5IE1ldGhvZHMgbXVzdCBiZSBwcm92aWRlZCBhbiBBcnJheVwiKX1mdW5jdGlvbiAkKCl7dmFyIHQ7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG8pdD1vO2Vsc2UgaWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYpdD1zZWxmO2Vsc2UgdHJ5e3Q9RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpfWNhdGNoKGUpe3Rocm93IG5ldyBFcnJvcihcInBvbHlmaWxsIGZhaWxlZCBiZWNhdXNlIGdsb2JhbCBvYmplY3QgaXMgdW5hdmFpbGFibGUgaW4gdGhpcyBlbnZpcm9ubWVudFwiKX12YXIgbj10LlByb21pc2U7biYmXCJbb2JqZWN0IFByb21pc2VdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobi5yZXNvbHZlKCkpJiYhbi5jYXN0fHwodC5Qcm9taXNlPXd0KX12YXIgSjtKPUFycmF5LmlzQXJyYXk/QXJyYXkuaXNBcnJheTpmdW5jdGlvbih0KXtyZXR1cm5cIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCl9O3ZhciBZLEcsVyxRPUosWj0wLHR0PWZ1bmN0aW9uKHQsZSl7dXRbWl09dCx1dFtaKzFdPWUsWis9MiwyPT09WiYmKEc/RyhtKTpXKCkpfSxldD1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp2b2lkIDAsbnQ9ZXR8fHt9LHJ0PW50Lk11dGF0aW9uT2JzZXJ2ZXJ8fG50LldlYktpdE11dGF0aW9uT2JzZXJ2ZXIsb3Q9XCJ1bmRlZmluZWRcIj09dHlwZW9mIHNlbGYmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiB0JiZcIltvYmplY3QgcHJvY2Vzc11cIj09PXt9LnRvU3RyaW5nLmNhbGwodCksaXQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgaW1wb3J0U2NyaXB0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIE1lc3NhZ2VDaGFubmVsLHV0PW5ldyBBcnJheSgxZTMpO1c9b3Q/ZigpOnJ0P3AoKTppdD9oKCk6dm9pZCAwPT09ZXQ/digpOmQoKTt2YXIgc3Q9eSxjdD1nLGF0PU1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygxNiksZnQ9dm9pZCAwLGx0PTEscHQ9MixodD1uZXcgSSxkdD1uZXcgSSxtdD0wLHZ0PU4seXQ9WCxndD1GLHd0PUs7Sy5hbGw9dnQsSy5yYWNlPXl0LEsucmVzb2x2ZT1jdCxLLnJlamVjdD1ndCxLLl9zZXRTY2hlZHVsZXI9YyxLLl9zZXRBc2FwPWEsSy5fYXNhcD10dCxLLnByb3RvdHlwZT17Y29uc3RydWN0b3I6Syx0aGVuOnN0LFwiY2F0Y2hcIjpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50aGVuKG51bGwsdCl9fTt2YXIgYnQ9VjtWLnByb3RvdHlwZS5fZW51bWVyYXRlPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PXRoaXMubGVuZ3RoLGU9dGhpcy5faW5wdXQsbj0wO3RoaXMuX3N0YXRlPT09ZnQmJm48dDtuKyspdGhpcy5fZWFjaEVudHJ5KGVbbl0sbil9LFYucHJvdG90eXBlLl9lYWNoRW50cnk9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yLHI9bi5yZXNvbHZlO2lmKHI9PT1jdCl7dmFyIG89Xyh0KTtpZihvPT09c3QmJnQuX3N0YXRlIT09ZnQpdGhpcy5fc2V0dGxlZEF0KHQuX3N0YXRlLGUsdC5fcmVzdWx0KTtlbHNlIGlmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIG8pdGhpcy5fcmVtYWluaW5nLS0sdGhpcy5fcmVzdWx0W2VdPXQ7ZWxzZSBpZihuPT09d3Qpe3ZhciBpPW5ldyBuKHcpO2ooaSx0LG8pLHRoaXMuX3dpbGxTZXR0bGVBdChpLGUpfWVsc2UgdGhpcy5fd2lsbFNldHRsZUF0KG5ldyBuKGZ1bmN0aW9uKGUpe2UodCl9KSxlKX1lbHNlIHRoaXMuX3dpbGxTZXR0bGVBdChyKHQpLGUpfSxWLnByb3RvdHlwZS5fc2V0dGxlZEF0PWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj10aGlzLnByb21pc2U7ci5fc3RhdGU9PT1mdCYmKHRoaXMuX3JlbWFpbmluZy0tLHQ9PT1wdD9PKHIsbik6dGhpcy5fcmVzdWx0W2VdPW4pLDA9PT10aGlzLl9yZW1haW5pbmcmJlIocix0aGlzLl9yZXN1bHQpfSxWLnByb3RvdHlwZS5fd2lsbFNldHRsZUF0PWZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcztEKHQsdm9pZCAwLGZ1bmN0aW9uKHQpe24uX3NldHRsZWRBdChsdCxlLHQpfSxmdW5jdGlvbih0KXtuLl9zZXR0bGVkQXQocHQsZSx0KX0pfTt2YXIgeHQ9JCxfdD17UHJvbWlzZTp3dCxwb2x5ZmlsbDp4dH07bigyNSkuYW1kPyhyPWZ1bmN0aW9uKCl7cmV0dXJuIF90fS5jYWxsKGUsbixlLGkpLCEodm9pZCAwIT09ciYmKGkuZXhwb3J0cz1yKSkpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBpJiZpLmV4cG9ydHM/aS5leHBvcnRzPV90OlwidW5kZWZpbmVkXCIhPXR5cGVvZiB0aGlzJiYodGhpcy5FUzZQcm9taXNlPV90KSx4dCgpfSkuY2FsbCh0aGlzKX0pLmNhbGwoZSxuKDIpLGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCksbigyNikodCkpfSxmdW5jdGlvbih0LGUsbil7XCJ1bmRlZmluZWRcIj09dHlwZW9mIFByb21pc2UmJm4oMjEpLnBvbHlmaWxsKCk7dmFyIHI9bigyNCksbz1uKDUpLGk9bigyMyksdT17YmFzZVVSTDpcImh0dHBzOi8vZGV2LmFwaS5pYm0uY29tL3ZpcnR1YWxhZ2VudC9kZXZlbG9wbWVudC9hcGkvdjEvXCIsdGltZW91dDozZTQsdXNlcklEOm51bGwsd2l0aENyZWRlbnRpYWxzOiExLFhJQk1DbGllbnRJRDohMSxYSUJNQ2xpZW50U2VjcmV0OiExfSxzPW8uY3JlYXRlKHUpLGM9L1xcfCYoLio/KVxcfC9nLGE9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTA7ZTx0LnRleHQubGVuZ3RoO2UrKyl7dmFyIG49dC50ZXh0W2VdLm1hdGNoKGMpfHxbXTt0LnRleHRbZV09bi5yZWR1Y2UoZnVuY3Rpb24odCxlKXtjb25zdCBuPWUuc2xpY2UoMiwtMSkscj1pLmdldChuKTtyZXR1cm4gdC5yZXBsYWNlKGUscil9LHQudGV4dFtlXSl9cmV0dXJuIHR9LGY9dC5leHBvcnRzPXtjb25maWd1cmU6ZnVuY3Rpb24odCl7cmV0dXJuIHIodSx0KSxzPW8uY3JlYXRlKHtiYXNlVVJMOnUuYmFzZVVSTCx0aW1lb3V0OnUudGltZW91dCx3aXRoQ3JlZGVudGlhbHM6dS53aXRoQ3JlZGVudGlhbHMsaGVhZGVyczp1LlhJQk1DbGllbnRJRCYmdS5YSUJNQ2xpZW50U2VjcmV0P3tcIlgtSUJNLUNsaWVudC1JZFwiOnUuWElCTUNsaWVudElELFwiWC1JQk0tQ2xpZW50LVNlY3JldFwiOnUuWElCTUNsaWVudFNlY3JldH06e319KSxmfSxzdGFydDpmdW5jdGlvbih0KXt2YXIgZT1sKCksbj17dXNlcklEOnUudXNlcklEfSxyPVwiL2JvdHMvXCIrdCtcIi9kaWFsb2dzXCIsbz17aGVhZGVyczp7XCJYLVJlcXVlc3QtSURcIjplfX07cmV0dXJuIHMucG9zdChyLG4sbykudGhlbihmdW5jdGlvbih0KXtyZXR1cm57Y2hhdElEOnQuZGF0YS5kaWFsb2dfaWQsbWVzc2FnZTphKHQuZGF0YS5tZXNzYWdlKX19KVtcImNhdGNoXCJdKGZ1bmN0aW9uKHQpe2NvbnNvbGUuZXJyb3IoXCJSZXF1ZXN0IGZhaWxlZDpcIixlKSxwKHQpfSl9LHNlbmQ6ZnVuY3Rpb24odCxlLG4pe3ZhciByPWwoKSxvPXttZXNzYWdlOm4sdXNlcklEOnUudXNlcklEfSxpPVwiL2JvdHMvXCIrdCtcIi9kaWFsb2dzL1wiK2UrXCIvbWVzc2FnZXNcIixjPVwibWVzc2FnZT1cIitlbmNvZGVVUklDb21wb25lbnQobiksZj17aGVhZGVyczp7XCJYLVJlcXVlc3QtSURcIjpyfX07cmV0dXJuIHMucG9zdChpK1wiP1wiK2MsbyxmKS50aGVuKGZ1bmN0aW9uKHQpe3JldHVybnttZXNzYWdlOmEodC5kYXRhLm1lc3NhZ2UpfX0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24odCl7Y29uc29sZS5lcnJvcihcIlJlcXVlc3QgZmFpbGVkOlwiLHIpLHAodCl9KX0scHJvZmlsZTp7Z2V0OmkuZ2V0LHNldDppLnNldCxoYXM6aS5oYXMsY2xlYXI6aS5jbGVhcixcImRlbGV0ZVwiOmlbXCJkZWxldGVcIl0sZm9yRWFjaDppLmZvckVhY2h9fSxsPWZ1bmN0aW9uKCl7cmV0dXJuXCJ4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHhcIi5yZXBsYWNlKC9beHldL2csZnVuY3Rpb24odCl7dmFyIGU9MTYqTWF0aC5yYW5kb20oKXwwLG49XCJ4XCI9PXQ/ZTozJmV8ODtyZXR1cm4gbi50b1N0cmluZygxNil9KX0scD1mdW5jdGlvbih0KXtpZighdC5zdGF0dXMpdGhyb3cgdDt2YXIgZT10LnN0YXR1cyxuPXQuc3RhdHVzVGV4dCxyPW5ldyBFcnJvcihuKTt0aHJvdyByLnN0YXR1cz1lLHJ9fSxmdW5jdGlvbih0LGUpe3ZhciBuPXt9LHI9e3NldDpmdW5jdGlvbih0LGUpe3JldHVybiBuW3RdPWUscn0sZ2V0OmZ1bmN0aW9uKHQpe3JldHVybiBuW3RdfHxcIlwifSxoYXM6ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMCE9PW5bdF19LGNsZWFyOmZ1bmN0aW9uKCl7cmV0dXJuIG49e30scn0sXCJkZWxldGVcIjpmdW5jdGlvbih0KXtyZXR1cm4gZGVsZXRlIG5bdF0scn0sZm9yRWFjaDpmdW5jdGlvbih0LGUpe3JldHVybiBPYmplY3Qua2V5cyhuKS5mb3JFYWNoKGZ1bmN0aW9uKHIpe2U/dChyLG5bcl0pLmJpbmQoZSk6dChyLG5bcl0pfSkscn19O3QuZXhwb3J0cz1yfSxmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIG4odCxlLG4pe3N3aXRjaChuLmxlbmd0aCl7Y2FzZSAwOnJldHVybiB0LmNhbGwoZSk7Y2FzZSAxOnJldHVybiB0LmNhbGwoZSxuWzBdKTtjYXNlIDI6cmV0dXJuIHQuY2FsbChlLG5bMF0sblsxXSk7Y2FzZSAzOnJldHVybiB0LmNhbGwoZSxuWzBdLG5bMV0sblsyXSl9cmV0dXJuIHQuYXBwbHkoZSxuKX1mdW5jdGlvbiByKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT92b2lkIDA6ZVt0XX19ZnVuY3Rpb24gbyh0LGUpe2Zvcih2YXIgbj0tMSxyPUFycmF5KHQpOysrbjx0OylyW25dPWUobik7cmV0dXJuIHJ9ZnVuY3Rpb24gaSh0LGUpe3JldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gdChlKG4pKX19ZnVuY3Rpb24gdSh0LGUsbil7dmFyIHI9dFtlXTtCLmNhbGwodCxlKSYmbShyLG4pJiYodm9pZCAwIT09bnx8ZSBpbiB0KXx8KHRbZV09bil9ZnVuY3Rpb24gcyh0LGUpe3JldHVybiBudWxsIT10JiYoQi5jYWxsKHQsZSl8fFwib2JqZWN0XCI9PXR5cGVvZiB0JiZlIGluIHQmJm51bGw9PT1GKHQpKX1mdW5jdGlvbiBjKHQsZSl7cmV0dXJuIGU9VSh2b2lkIDA9PT1lP3QubGVuZ3RoLTE6ZSwwKSxmdW5jdGlvbigpe2Zvcih2YXIgcj1hcmd1bWVudHMsbz0tMSxpPVUoci5sZW5ndGgtZSwwKSx1PUFycmF5KGkpOysrbzxpOyl1W29dPXJbZStvXTtvPS0xO2Zvcih2YXIgcz1BcnJheShlKzEpOysrbzxlOylzW29dPXJbb107cmV0dXJuIHNbZV09dSxuKHQsdGhpcyxzKX19ZnVuY3Rpb24gYSh0LGUsbixyKXtufHwobj17fSk7Zm9yKHZhciBvPS0xLGk9ZS5sZW5ndGg7KytvPGk7KXt2YXIgcz1lW29dLGM9cj9yKG5bc10sdFtzXSxzLG4sdCk6dm9pZCAwO3UobixzLHZvaWQgMD09PWM/dFtzXTpjKX1yZXR1cm4gbn1mdW5jdGlvbiBmKHQpe3JldHVybiBjKGZ1bmN0aW9uKGUsbil7dmFyIHI9LTEsbz1uLmxlbmd0aCxpPW8+MT9uW28tMV06dm9pZCAwLHU9bz4yP25bMl06dm9pZCAwO2ZvcihpPXQubGVuZ3RoPjMmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGk/KG8tLSxpKTp2b2lkIDAsdSYmaChuWzBdLG5bMV0sdSkmJihpPW88Mz92b2lkIDA6aSxvPTEpLGU9T2JqZWN0KGUpOysrcjxvOyl7dmFyIHM9bltyXTtzJiZ0KGUscyxyLGkpfXJldHVybiBlfSl9ZnVuY3Rpb24gbCh0KXt2YXIgZT10P3QubGVuZ3RoOnZvaWQgMDtyZXR1cm4gYihlKSYmKGsodCl8fEEodCl8fHYodCkpP28oZSxTdHJpbmcpOm51bGx9ZnVuY3Rpb24gcCh0LGUpe3JldHVybiBlPW51bGw9PWU/UzplLCEhZSYmKFwibnVtYmVyXCI9PXR5cGVvZiB0fHxPLnRlc3QodCkpJiZ0Pi0xJiZ0JTE9PTAmJnQ8ZX1mdW5jdGlvbiBoKHQsZSxuKXtpZigheChuKSlyZXR1cm4hMTt2YXIgcj10eXBlb2YgZTtyZXR1cm4hIShcIm51bWJlclwiPT1yP3kobikmJnAoZSxuLmxlbmd0aCk6XCJzdHJpbmdcIj09ciYmZSBpbiBuKSYmbShuW2VdLHQpfWZ1bmN0aW9uIGQodCl7dmFyIGU9dCYmdC5jb25zdHJ1Y3RvcixuPVwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUucHJvdG90eXBlfHxEO3JldHVybiB0PT09bn1mdW5jdGlvbiBtKHQsZSl7cmV0dXJuIHQ9PT1lfHx0IT09dCYmZSE9PWV9ZnVuY3Rpb24gdih0KXtyZXR1cm4gZyh0KSYmQi5jYWxsKHQsXCJjYWxsZWVcIikmJighcS5jYWxsKHQsXCJjYWxsZWVcIil8fEkuY2FsbCh0KT09ail9ZnVuY3Rpb24geSh0KXtyZXR1cm4gbnVsbCE9dCYmYihYKHQpKSYmIXcodCl9ZnVuY3Rpb24gZyh0KXtyZXR1cm4gXyh0KSYmeSh0KX1mdW5jdGlvbiB3KHQpe3ZhciBlPXgodCk/SS5jYWxsKHQpOlwiXCI7cmV0dXJuIGU9PUN8fGU9PVR9ZnVuY3Rpb24gYih0KXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgdCYmdD4tMSYmdCUxPT0wJiZ0PD1TfWZ1bmN0aW9uIHgodCl7dmFyIGU9dHlwZW9mIHQ7cmV0dXJuISF0JiYoXCJvYmplY3RcIj09ZXx8XCJmdW5jdGlvblwiPT1lKX1mdW5jdGlvbiBfKHQpe3JldHVybiEhdCYmXCJvYmplY3RcIj09dHlwZW9mIHR9ZnVuY3Rpb24gQSh0KXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdHx8IWsodCkmJl8odCkmJkkuY2FsbCh0KT09Un1mdW5jdGlvbiBFKHQpe3ZhciBlPWQodCk7aWYoIWUmJiF5KHQpKXJldHVybiBOKHQpO3ZhciBuPWwodCkscj0hIW4sbz1ufHxbXSxpPW8ubGVuZ3RoO2Zvcih2YXIgdSBpbiB0KSFzKHQsdSl8fHImJihcImxlbmd0aFwiPT11fHxwKHUsaSkpfHxlJiZcImNvbnN0cnVjdG9yXCI9PXV8fG8ucHVzaCh1KTtyZXR1cm4gb312YXIgUz05MDA3MTk5MjU0NzQwOTkxLGo9XCJbb2JqZWN0IEFyZ3VtZW50c11cIixDPVwiW29iamVjdCBGdW5jdGlvbl1cIixUPVwiW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl1cIixSPVwiW29iamVjdCBTdHJpbmddXCIsTz0vXig/OjB8WzEtOV1cXGQqKSQvLEQ9T2JqZWN0LnByb3RvdHlwZSxCPUQuaGFzT3duUHJvcGVydHksST1ELnRvU3RyaW5nLHE9RC5wcm9wZXJ0eUlzRW51bWVyYWJsZSxMPU9iamVjdC5nZXRQcm90b3R5cGVPZixQPU9iamVjdC5rZXlzLFU9TWF0aC5tYXgsTT0hcS5jYWxsKHt2YWx1ZU9mOjF9LFwidmFsdWVPZlwiKSxOPWkoUCxPYmplY3QpLFg9cihcImxlbmd0aFwiKSxGPWkoTCxPYmplY3QpLGs9QXJyYXkuaXNBcnJheSxIPWYoZnVuY3Rpb24odCxlKXtpZihNfHxkKGUpfHx5KGUpKXJldHVybiB2b2lkIGEoZSxFKGUpLHQpO2Zvcih2YXIgbiBpbiBlKUIuY2FsbChlLG4pJiZ1KHQsbixlW25dKX0pO3QuZXhwb3J0cz1IfSxmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbigpe3Rocm93IG5ldyBFcnJvcihcImRlZmluZSBjYW5ub3QgYmUgdXNlZCBpbmRpcmVjdFwiKX19LGZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiB0LndlYnBhY2tQb2x5ZmlsbHx8KHQuZGVwcmVjYXRlPWZ1bmN0aW9uKCl7fSx0LnBhdGhzPVtdLHQuY2hpbGRyZW49W10sdC53ZWJwYWNrUG9seWZpbGw9MSksdH19LGZ1bmN0aW9uKHQsZSl7fV0pfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vQHdhdHNvbi12aXJ0dWFsLWFnZW50L2NsaWVudC1zZGsvbGliL3dlYi5qc1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBpZD1cXFwiJHtkYXRhLnV1aWR9XFxcIiBjbGFzcz1cXFwiSUJNQ2hhdC11c2VyLW1lc3NhZ2UtY29udGFpbmVyIElCTUNoYXQtdXNlci1tZXNzYWdlLWNvbnRhaW5lci10aGVtZVxcXCI+XFxuXFx0PGRpdiBjbGFzcz1cXFwiSUJNQ2hhdC11c2VyLW1lc3NhZ2UgSUJNQ2hhdC11c2VyLW1lc3NhZ2UtdGhlbWUgSUJNQ2hhdC1zZWNvbmRhcnktY29sb3JzXFxcIj48L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRIYW5kbGVycy90ZW1wbGF0ZXMvc2VuZC5odG1sXG4gKiogbW9kdWxlIGlkID0gNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIHN0YXRlID0gcmVxdWlyZSgnLi4vLi4vc3RhdGUnKTtcbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnbG9kYXNoL2Fzc2lnbicpO1xudmFyIHRlbXBsYXRlcyA9IHtcblx0c2VuZDogcmVxdWlyZSgnLi4vdGVtcGxhdGVzL3NlbmQuaHRtbCcpXG59O1xuXG5mdW5jdGlvbiBzZW5kTW9jayhkYXRhKSB7XG5cdGlmIChkYXRhLnRleHQgJiYgZGF0YS50ZXh0Lmxlbmd0aCA+IDApIHtcblx0XHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdFx0dmFyIG5ld0RhdGEgPSBhc3NpZ24oe30sIGRhdGEsIHsgdXVpZDogdXRpbHMuZ2V0VVVJRCgpIH0pO1xuXHRcdGN1cnJlbnQuY2hhdEhvbGRlci5pbm5lckhUTUwgKz0gdXRpbHMuY29tcGlsZSh0ZW1wbGF0ZXMuc2VuZCwgeyAnZGF0YS51dWlkJzogbmV3RGF0YS51dWlkIH0pO1xuXHRcdGN1cnJlbnQuY2hhdEhvbGRlci5xdWVyeVNlbGVjdG9yKCcjJyArIG5ld0RhdGEudXVpZCArICcgLklCTUNoYXQtdXNlci1tZXNzYWdlJykudGV4dENvbnRlbnQgPSBkYXRhLnRleHQ7XG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ3Njcm9sbC10by1ib3R0b20nKTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNlbmRNb2NrO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9ldmVudEhhbmRsZXJzL2V2ZW50cy9zZW5kLW1vY2suanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgc3RhdGUgPSByZXF1aXJlKCcuLi8uLi9zdGF0ZScpO1xudmFyIGV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2V2ZW50cycpO1xuXG5mdW5jdGlvbiBzZW5kSW5wdXRNZXNzYWdlKCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdGlmICghY3VycmVudC5pblByb2dyZXNzICYmICFjdXJyZW50LmRpc2FibGVJbnB1dCkge1xuXHRcdHZhciB0ZXh0ID0gY3VycmVudC5yb290LnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LWNoYXQtdGV4dGJveCcpLnZhbHVlO1xuXHRcdGV2ZW50cy5wdWJsaXNoKCdzZW5kJywge1xuXHRcdFx0dGV4dDogdGV4dFxuXHRcdH0pO1xuXHRcdHRleHQgPSAnJztcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNlbmRJbnB1dE1lc3NhZ2U7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2V2ZW50SGFuZGxlcnMvZXZlbnRzL3NlbmQtaW5wdXQtbWVzc2FnZS5qc1xuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4uLy4uL3N0YXRlJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmFibGVJbnB1dCgpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHR2YXIgZGlzYWJsZUlucHV0ID0gKGN1cnJlbnQuZGlzYWJsZUlucHV0KSA/IChjdXJyZW50LmRpc2FibGVJbnB1dCAtIDEpIDowO1xuXHRzdGF0ZS5zZXRTdGF0ZSh7IGRpc2FibGVJbnB1dDogZGlzYWJsZUlucHV0IH0pO1xuXHRpZiAoIWRpc2FibGVJbnB1dClcblx0XHRjdXJyZW50LmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZUlucHV0KCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdHZhciBkaXNhYmxlSW5wdXQgPSAoY3VycmVudC5kaXNhYmxlSW5wdXQpID8gKGN1cnJlbnQuZGlzYWJsZUlucHV0ICsgMSkgOiAxO1xuXHRzdGF0ZS5zZXRTdGF0ZSh7IGRpc2FibGVJbnB1dDogZGlzYWJsZUlucHV0IH0pO1xuXHRjdXJyZW50LmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlTG9hZGluZ0lucHV0KCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdHZhciBsb2FkaW5nID0gKGN1cnJlbnQubG9hZGluZykgPyAoY3VycmVudC5sb2FkaW5nICsgMSkgOiAxO1xuXHRzdGF0ZS5zZXRTdGF0ZSh7XG5cdFx0bG9hZGluZzogbG9hZGluZ1xuXHR9KTtcblx0dXRpbHMuc3Bpbm5lci5zaG93KGN1cnJlbnQubG9hZGVyKTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZUxvYWRpbmdJbnB1dCgpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHR2YXIgbG9hZGluZyA9IChjdXJyZW50LmxvYWRpbmcpID8gKGN1cnJlbnQubG9hZGluZyAtIDEpIDogMDtcblx0c3RhdGUuc2V0U3RhdGUoe1xuXHRcdGxvYWRpbmc6IGxvYWRpbmdcblx0fSk7XG5cdGlmIChsb2FkaW5nID09PSAwKVxuXHRcdHV0aWxzLnNwaW5uZXIuaGlkZShjdXJyZW50LmxvYWRlcik7XG59XG5cbmZ1bmN0aW9uIGZvY3VzSW5wdXQoKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0Y3VycmVudC5pbnB1dC5mb2N1cygpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0ZW5hYmxlSW5wdXQ6IGVuYWJsZUlucHV0LFxuXHRkaXNhYmxlSW5wdXQ6IGRpc2FibGVJbnB1dCxcblx0ZW5hYmxlTG9hZGluZ0lucHV0OiBlbmFibGVMb2FkaW5nSW5wdXQsXG5cdGRpc2FibGVMb2FkaW5nSW5wdXQ6IGRpc2FibGVMb2FkaW5nSW5wdXQsXG5cdGZvY3VzSW5wdXQ6IGZvY3VzSW5wdXRcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2V2ZW50SGFuZGxlcnMvZXZlbnRzL2lucHV0LmpzXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIGV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2V2ZW50cycpO1xudmFyIHN0YXRlID0gcmVxdWlyZSgnLi4vLi4vc3RhdGUnKTtcblxuZnVuY3Rpb24gZXJyb3IoZXJyKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0dmFyIHRleHQgPSAnSSBhbSBzb3JyeSwgSSBhbSBoYXZpbmcgZGlmZmljdWx0aWVzLic7XG5cdGlmIChjdXJyZW50LmhhZEVycm9yKVxuXHRcdHRleHQgKz0gJyBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLic7XG5cdGVsc2Vcblx0XHR0ZXh0ICs9ICcgVG8gc3BlYWsgd2l0aCBhIGh1bWFuIGFnZW50LCB0eXBlIFwiYWdlbnRcIi4nO1xuXHRpZiAoZXJyLnN0YXR1cylcblx0XHR0ZXh0ICs9ICcgKGVycm9yOiAnICsgZXJyLnN0YXR1cyArICcpJztcblx0c3RhdGUuc2V0U3RhdGUoe1xuXHRcdGhhZEVycm9yOiB0cnVlXG5cdH0pO1xuXHRldmVudHMucHVibGlzaCgncmVjZWl2ZScsIHRleHQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVycm9yO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9ldmVudEhhbmRsZXJzL2V2ZW50cy9lcnJvci5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4uLy4uL3N0YXRlJyk7XG5cbmZ1bmN0aW9uIHNjcm9sbFRvQm90dG9tKCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdGN1cnJlbnQuY2hhdEhvbGRlci5zY3JvbGxUb3AgPSBjdXJyZW50LmNoYXRIb2xkZXIuc2Nyb2xsSGVpZ2h0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNjcm9sbFRvQm90dG9tO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9ldmVudEhhbmRsZXJzL2V2ZW50cy9zY3JvbGwtdG8tYm90dG9tLmpzXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIHNob3dMb2NhdGlvbnNMYXlvdXQgPSByZXF1aXJlKCcuL3Nob3ctbG9jYXRpb25zJyk7XG52YXIgcmVxdWVzdEdlb2xvY2F0aW9uTGF0bG9uZ0xheW91dCA9IHJlcXVpcmUoJy4vcmVxdWVzdC1nZW9sb2NhdGlvbi1sYXRsb25nJyk7XG52YXIgY2hvb3NlTG9jYXRpb25UeXBlTGF5b3V0ID0gcmVxdWlyZSgnLi9jaG9vc2UtbG9jYXRpb24tdHlwZScpO1xudmFyIGNob29zZUxheW91dCA9IHJlcXVpcmUoJy4vY2hvb3NlJyk7XG52YXIgZm9ybUxheW91dCA9IHJlcXVpcmUoJy4vZm9ybScpO1xudmFyIGNyZWRpdENhcmRMYXlvdXQgPSByZXF1aXJlKCcuL2NjLXZhbGlkYXRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0c2hvd0xvY2F0aW9uczogc2hvd0xvY2F0aW9uc0xheW91dCxcblx0cmVxdWVzdEdlb2xvY2F0aW9uTGF0bG9uZzogcmVxdWVzdEdlb2xvY2F0aW9uTGF0bG9uZ0xheW91dCxcblx0Y2hvb3NlTG9jYXRpb25UeXBlOiBjaG9vc2VMb2NhdGlvblR5cGVMYXlvdXQsXG5cdGNob29zZTogY2hvb3NlTGF5b3V0LFxuXHRjcmVkaXRDYXJkOiBjcmVkaXRDYXJkTGF5b3V0LFxuXHRmb3JtOiBmb3JtTGF5b3V0XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxucmVxdWlyZSgnLi9zdHlsZXMuY3NzJyk7XG5cbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcbnZhciBzdWJzY3JpYmUgPSBldmVudHMuc3Vic2NyaWJlO1xudmFyIHB1Ymxpc2ggPSBldmVudHMucHVibGlzaDtcbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4uLy4uL3N0YXRlJyk7XG52YXIgZ2V0U3RhdGUgPSBzdGF0ZS5nZXRTdGF0ZTtcbnZhciBzZXRTdGF0ZSA9IHN0YXRlLnNldFN0YXRlO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMnKTtcblxudmFyIGZpcnN0ID0gdHJ1ZTtcbnZhciBkaXNwbGF5TGVuZ3RoID0gMztcbnZhciBicmVha3BvaW50V2lkdGhzID0gWyc3MjAnLCAnNjgwJywgJzY0MCcsICc1ODAnLCAnNTEyJywgJzQ4MCcsICc0MjAnLCAnMzYwJywgJzMyMCcsICcyODgnLCAnMjU2J107XG52YXIgZGF5cyA9IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J107XG52YXIgc2hvd0xvY2F0aW9ucyA9IHt9O1xudmFyIGxvY2F0aW9uSURzID0gW107XG52YXIgY2hhdFdpZHRoID0gNzQ4O1xudmFyIGN1cnJlbnRCcmVha3BvaW50S2V5ID0gMDtcbnZhciBwaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbnZhciBucyA9ICdJQk1DaGF0LW1hcCc7XG5cbnZhciB0ZW1wbGF0ZXMgPSB7XG5cdGJhc2U6IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2Jhc2UuaHRtbCcpLFxuXHRhZGRMb2NhdGlvbnNJdGVtOiByZXF1aXJlKCcuL3RlbXBsYXRlcy9hZGQtbG9jYXRpb25zLWl0ZW0uaHRtbCcpLFxuXHRhZGRMb2NhdGlvbkl0ZW06IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2FkZC1sb2NhdGlvbi1pdGVtLmh0bWwnKSxcblx0aG91cnNDbG9zZWQ6IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2hvdXJzLWNsb3NlZC5odG1sJyksXG5cdGhvdXJzT3BlbjogcmVxdWlyZSgnLi90ZW1wbGF0ZXMvaG91cnMtb3Blbi5odG1sJyksXG5cdGhvdXJzVG9kYXlPcGVuOiByZXF1aXJlKCcuL3RlbXBsYXRlcy9ob3Vycy10b2RheS1vcGVuLmh0bWwnKSxcblx0aG91cnNUb2RheUNsb3NlZDogcmVxdWlyZSgnLi90ZW1wbGF0ZXMvaG91cnMtdG9kYXktY2xvc2VkLmh0bWwnKVxufTtcblxudmFyIHN0cmluZ3MgPSB7XG5cdGxvY2F0aW9uczoge1xuXHRcdG5vbmU6ICdXZSBjb3VsZCBub3QgZmluZCBhbnkgbG9jYXRpb25zIGNsb3NlIHRvIHlvdS4nLFxuXHRcdHNpbmdsZTogJ0hlcmUgYXJlIHRoZSBkZXRhaWxzIGZvciB0aGUgJHtsb2NhdGlvbn0gbG9jYXRpb24uLi4nLFxuXHRcdGxpc3Q6ICdIZXJlIGFyZSB0aGUgbG9jYXRpb25zIEkgZm91bmQgY2xvc2UgdG8geW91Oidcblx0fVxufTtcblxudmFyIHNob3dMb2NhdGlvbnNMYXlvdXQgPSB7XG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHN1YnNjcmliZSgnbGF5b3V0OnNob3ctbG9jYXRpb25zJywgZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0dmFyIHNob3dMb2NhdGlvbiA9IG5ldyBTaG93TG9jYXRpb25zKGRhdGEpO1xuXHRcdFx0bG9jYXRpb25JRHMucHVzaChkYXRhLnV1aWQpO1xuXHRcdFx0c2hvd0xvY2F0aW9uc1tkYXRhLnV1aWRdID0gc2hvd0xvY2F0aW9uO1xuXHRcdH0pO1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1dGlscy5kZWJvdW5jZShmdW5jdGlvbigpIHtcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHNpemVNYXAoKTtcblx0XHRcdH0sIDUwMCk7XG5cdFx0fSwgNTAwKSk7XG5cdH1cbn07XG5cbnZhciBhbHBoYU1hcCA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRyddO1xuXG5mdW5jdGlvbiBpbml0aWFsU2l6ZSh3aWR0aCkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGJyZWFrcG9pbnRXaWR0aHMubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoKGkgPT09IGJyZWFrcG9pbnRXaWR0aHMubGVuZ3RoIC0gMSkgfHwgKGJyZWFrcG9pbnRXaWR0aHNbaV0gPj0gd2lkdGggJiYgYnJlYWtwb2ludFdpZHRoc1tpICsgMV0gPCB3aWR0aCkpIHtcblx0XHRcdGN1cnJlbnRCcmVha3BvaW50S2V5ID0gaTtcblx0XHRcdGNoYXRXaWR0aCA9IHdpZHRoO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBzYW1lU2l6ZSgpIHtcblx0dmFyIHdpZHRoID0gc2hvd0xvY2F0aW9uc1tsb2NhdGlvbklEc1swXV0uZ2V0V2lkdGgoKTtcblx0dmFyIGlzU2FtZVNpemUgPSAoYnJlYWtwb2ludFdpZHRoc1tjdXJyZW50QnJlYWtwb2ludEtleV0gPj0gd2lkdGggJiYgYnJlYWtwb2ludFdpZHRoc1tjdXJyZW50QnJlYWtwb2ludEtleSArIDFdIDwgd2lkdGgpO1xuXHRyZXR1cm4gaXNTYW1lU2l6ZTtcbn1cblxuZnVuY3Rpb24gc2l6ZU1hcCgpIHtcblx0aWYgKGxvY2F0aW9uSURzLmxlbmd0aCA+IDAgJiYgc2hvd0xvY2F0aW9uc1tsb2NhdGlvbklEc1swXV0uZ2V0V2lkdGgoKSAmJiAhc2FtZVNpemUoKSkge1xuXHRcdHZhciB3aWR0aCA9IHNob3dMb2NhdGlvbnNbbG9jYXRpb25JRHNbMF1dLmdldFdpZHRoKCk7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBicmVha3BvaW50V2lkdGhzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoKGkgPT09IGJyZWFrcG9pbnRXaWR0aHMubGVuZ3RoIC0gMSkgfHwgKGJyZWFrcG9pbnRXaWR0aHNbaV0gPj0gd2lkdGggJiYgYnJlYWtwb2ludFdpZHRoc1tpICsgMV0gPCB3aWR0aCkpIHtcblx0XHRcdFx0Y3VycmVudEJyZWFrcG9pbnRLZXkgPSBpO1xuXHRcdFx0XHRjaGF0V2lkdGggPSB3aWR0aDtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBsb2NhdGlvbklEcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGlmIChzaG93TG9jYXRpb25zW2xvY2F0aW9uSURzW2pdXS5kYXRhLmxlbmd0aCA+IDApXG5cdFx0XHRcdFx0XHRzaG93TG9jYXRpb25zW2xvY2F0aW9uSURzW2pdXS5yZURyYXdNYXAoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBob25lQXJyYXkoZWwsIGl0ZW1zKSB7XG5cdGlmIChpdGVtcykge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtQ2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdHZhciB0ZXh0ID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMvY3JlYXRlLWRvbS1hcnJheS5odG1sJyk7XG5cdFx0XHRpdGVtQ2hpbGQuY2xhc3NOYW1lID0gbnMgKyAnLWNvbnRhY3Qtcm93Jztcblx0XHRcdGl0ZW1DaGlsZC5pbm5lckhUTUwgPSB1dGlscy5jb21waWxlKHRleHQsIHtcblx0XHRcdFx0bnM6IG5zXG5cdFx0XHR9KTtcblx0XHRcdHZhciB0eXBlRWwgPSBpdGVtQ2hpbGQucXVlcnlTZWxlY3RvcignLicgKyBucyArICctY29udGFjdC10eXBlJyk7XG5cdFx0XHR2YXIgZGF0YUVsID0gaXRlbUNoaWxkLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWNvbnRhY3QtZGF0YScpO1xuXHRcdFx0dHlwZUVsLnRleHRDb250ZW50ID0gaXRlbXNbaV0udHlwZTtcblx0XHRcdGRhdGFFbC50ZXh0Q29udGVudCA9IGl0ZW1zW2ldLm51bWJlcjtcblx0XHRcdGVsLmFwcGVuZENoaWxkKGl0ZW1DaGlsZCk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEFNUE0odGltZSkge1xuXHR0cnkge1xuXHRcdHZhciBzcGxpdCA9IHRpbWUuc3BsaXQoJzonKTtcblx0XHR2YXIgaG91cnMgPSBzcGxpdFswXTtcblx0XHR2YXIgbWludXRlcyA9IHNwbGl0WzFdO1xuXHRcdHZhciBhbXBtID0gaG91cnMgPj0gMTIgPyAncG0nIDogJ2FtJztcblx0XHRob3VycyA9IGhvdXJzICUgMTI7XG5cdFx0aG91cnMgPSBob3VycyA/IGhvdXJzIDogMTI7XG5cdFx0cmV0dXJuIGhvdXJzICsgJzonICsgbWludXRlcyArICcgJyArIGFtcG07XG5cdH1cblx0Y2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gJy0nO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHBhcnNlQWRkcmVzcyhhZGRyZXNzKSB7XG5cdHZhciBhcnIgPSBhZGRyZXNzLnNwbGl0KCcsJyk7XG5cdHZhciBmaXJzdCA9IGFyci5zaGlmdCgpO1xuXHR2YXIgdGV4dCA9ICcnO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuXHRcdHRleHQgKz0gYXJyW2ldO1xuXHRcdGlmIChpIDwgKGFyci5sZW5ndGggLSAxKSlcblx0XHRcdHRleHQgKz0gJywnO1xuXHR9XG5cdHJldHVybiB7XG5cdFx0YWRkcmVzczE6IGZpcnN0LFxuXHRcdGFkZHJlc3MyOiB0ZXh0XG5cdH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvdXJzKGhvdXJzRWwsIG1vcmVIb3Vyc0VsLCBob3Vycykge1xuXHRpZiAoaG91cnMpIHtcblx0XHR2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpLmdldERheSgpO1xuXHRcdHZhciB0b2RheXNIb3VycyA9IGhvdXJzW3RvZGF5XTtcblx0XHR2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRpZiAodG9kYXlzSG91cnMgJiYgdG9kYXlzSG91cnMuaXNPcGVuKSB7XG5cdFx0XHRlbC5pbm5lckhUTUwgPSB1dGlscy5jb21waWxlKHRlbXBsYXRlcy5ob3Vyc1RvZGF5T3Blbiwge1xuXHRcdFx0XHRuczogbnMsXG5cdFx0XHRcdG9wZW46IGZvcm1hdEFNUE0odG9kYXlzSG91cnMub3BlbiksXG5cdFx0XHRcdGNsb3NlOiBmb3JtYXRBTVBNKHRvZGF5c0hvdXJzLmNsb3NlKVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVsLmlubmVySFRNTCA9IHV0aWxzLmNvbXBpbGUodGVtcGxhdGVzLmhvdXJzVG9kYXlDbG9zZWQsIHtcblx0XHRcdFx0bnM6IG5zXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aG91cnNFbC5hcHBlbmRDaGlsZChlbCk7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3Vycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGNoaWxkRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGNoaWxkRWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIG5zICsgJy1kYXlzLWhvdXJzJyk7XG5cdFx0XHRpZiAoaG91cnNbaV0gJiYgaG91cnNbaV0uaXNPcGVuKSB7XG5cdFx0XHRcdGNoaWxkRWwuaW5uZXJIVE1MID0gdXRpbHMuY29tcGlsZSh0ZW1wbGF0ZXMuaG91cnNPcGVuLCB7XG5cdFx0XHRcdFx0bnM6IG5zLFxuXHRcdFx0XHRcdGRheTogZGF5c1tpXSxcblx0XHRcdFx0XHRvcGVuOiBmb3JtYXRBTVBNKGhvdXJzW2ldLm9wZW4pLFxuXHRcdFx0XHRcdGNsb3NlOiBmb3JtYXRBTVBNKGhvdXJzW2ldLmNsb3NlKVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNoaWxkRWwuaW5uZXJIVE1MID0gdXRpbHMuY29tcGlsZSh0ZW1wbGF0ZXMuaG91cnNDbG9zZWQsIHtcblx0XHRcdFx0XHRuczogbnMsXG5cdFx0XHRcdFx0ZGF5OiBkYXlzW2ldXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0bW9yZUhvdXJzRWwuYXBwZW5kQ2hpbGQoY2hpbGRFbCk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGRpc3RhbmNlKGl0ZW0pIHtcblx0aWYgKCFpdGVtLmRpc3RhbmNlKVxuXHRcdHJldHVybjtcblx0dmFyIGRpc3RhbmNlTGVuZ3RoID0gKGl0ZW0uZGlzdGFuY2UudG9GaXhlZCgxKSA9PT0gMC4wKSA/IDAuMSA6IGl0ZW0uZGlzdGFuY2UudG9GaXhlZCgxKTtcblx0dmFyIGRpc3RhbmNlTGVuZ3RoTWVhc3VyZSA9IChpdGVtLmRpc3RhbmNlTWVhc3VyZSA9PT0gJ21pbGVzJykgPyAnbScgOiAna20nO1xuXHRyZXR1cm4gZGlzdGFuY2VMZW5ndGggKyBkaXN0YW5jZUxlbmd0aE1lYXN1cmU7XG59XG5cbmZ1bmN0aW9uIFNob3dMb2NhdGlvbnMoZGF0YSkge1xuXHR0aGlzLmluaXQoZGF0YSk7XG59XG5cblNob3dMb2NhdGlvbnMucHJvdG90eXBlID0ge1xuXHRpbml0OiBmdW5jdGlvbihkYXRhKSB7XG5cdFx0dGhpcy5kYXRhID0gKGRhdGEubWVzc2FnZS5kYXRhICE9PSB1bmRlZmluZWQgJiYgZGF0YS5tZXNzYWdlLmRhdGEubG9jYXRpb25fZGF0YSAhPT0gdW5kZWZpbmVkKSA/IGRhdGEubWVzc2FnZS5kYXRhLmxvY2F0aW9uX2RhdGEgOiBbXTtcblx0XHRpZiAodGhpcy5kYXRhLmxlbmd0aCA+IDEpIHtcblx0XHRcdHNldFN0YXRlKHtcblx0XHRcdFx0bG9jYXRpb25fZGF0YTogdGhpcy5kYXRhXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0dGhpcy5ldmVudExpc3RlbmVycyA9IFtdO1xuXHRcdHRoaXMucGFyZW50RWxlbWVudCA9IGRhdGEuZWxlbWVudDtcblx0XHR0aGlzLmxheW91dEVsZW1lbnQgPSBkYXRhLmxheW91dEVsZW1lbnQ7XG5cdFx0dGhpcy5tc2dFbGVtZW50ID0gZGF0YS5tc2dFbGVtZW50O1xuXHRcdHN3aXRjaCAodGhpcy5kYXRhLmxlbmd0aCkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHRoaXMubXNnRWxlbWVudC50ZXh0Q29udGVudCA9IHN0cmluZ3MubG9jYXRpb25zLm5vbmU7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDE6XG5cdFx0XHR0aGlzLm1zZ0VsZW1lbnQudGV4dENvbnRlbnQgPSB1dGlscy5jb21waWxlKHN0cmluZ3MubG9jYXRpb25zLnNpbmdsZSwgeyBsb2NhdGlvbjogdGhpcy5kYXRhWzBdLmFkZHJlc3MuYWRkcmVzcyB9KTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHR0aGlzLm1zZ0VsZW1lbnQudGV4dENvbnRlbnQgPSBzdHJpbmdzLmxvY2F0aW9ucy5saXN0O1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMCkge1xuXHRcdFx0dmFyIHRleHQgPSB0ZW1wbGF0ZXMuYmFzZTtcblx0XHRcdHRoaXMudXVpZCA9IGRhdGEudXVpZDtcblx0XHRcdGlmIChmaXJzdCkge1xuXHRcdFx0XHRpbml0aWFsU2l6ZSh0aGlzLmdldFdpZHRoKCkpO1xuXHRcdFx0XHRmaXJzdCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5tYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdHRoaXMubWFwLmlubmVySFRNTCA9IHV0aWxzLmNvbXBpbGUodGV4dCwgeyBuczogbnMgfSk7XG5cdFx0XHR0aGlzLm1hcEVsZW1lbnQgPSB0aGlzLm1hcC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1pbWcnKTtcblx0XHRcdHRoaXMuZGF0YUVsZW1lbnQgPSB0aGlzLm1hcC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1kYXRhJyk7XG5cdFx0XHR0aGlzLm1hcEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5kcmF3TG9jYXRpb25zKCkpO1xuXHRcdFx0dGhpcy5kYXRhRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmFkZERldGFpbHMoKSk7XG5cdFx0XHR0aGlzLmxheW91dEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5tYXApO1xuXHRcdH1cblx0fSxcblx0Z2V0V2lkdGg6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB3aWR0aCA9IHRoaXMucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuSUJNQ2hhdC13YXRzb24tbGF5b3V0Omxhc3QtY2hpbGQnKS5jbGllbnRXaWR0aDtcblx0XHRyZXR1cm4gd2lkdGg7XG5cdH0sXG5cdHJlRHJhd01hcDogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5tYXBFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuXHRcdHRoaXMubWFwRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmRyYXdMb2NhdGlvbnMoKSk7XG5cdH0sXG5cdGFkZERldGFpbHM6IGZ1bmN0aW9uKCkge1xuXHRcdGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMSlcblx0XHRcdHJldHVybiB0aGlzLmFkZExvY2F0aW9ucygpO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiB0aGlzLmFkZExvY2F0aW9uKCk7XG5cdH0sXG5cdGRyYXdMb2NhdGlvbnM6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBjdXJyZW50ID0gZ2V0U3RhdGUoKTtcblx0XHR2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdFx0dmFyIHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpO1xuXHRcdHZhciBjb25maWcgPSB7XG5cdFx0XHRzaXplOiB3aWR0aCArICd4MTgwJyxcblx0XHRcdHNjYWxlOiBwaXhlbFJhdGlvXG5cdFx0fTtcblx0XHR0aGlzLnVyaSA9IGN1cnJlbnQubWFwc1NlcnZlciArICc/Jztcblx0XHR0aGlzLnVyaSArPSB1dGlscy5zZXJpYWxpemUoY29uZmlnKTtcblx0XHR0aGlzLnVyaSArPSAnJmxvY2F0aW9ucz0nO1xuXHRcdHZhciBsb2NhdGlvbnMgPSAnJztcblx0XHRmb3IgKHZhciBpID0gMDsgKGkgPCBkaXNwbGF5TGVuZ3RoICYmIGkgPCB0aGlzLmRhdGEubGVuZ3RoKTsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHRoaXMuZGF0YVtpXTtcblx0XHRcdGxvY2F0aW9ucyArPSAoaSA9PT0gMCApID8gaXRlbS5hZGRyZXNzLmxhdCArICcsJyArIGl0ZW0uYWRkcmVzcy5sbmcgOiAnKycgKyBpdGVtLmFkZHJlc3MubGF0ICsgJywnICsgaXRlbS5hZGRyZXNzLmxuZztcblx0XHR9XG5cdFx0dGhpcy51cmkgKz0gZW5jb2RlVVJJQ29tcG9uZW50KGxvY2F0aW9ucyk7XG5cdFx0dGhpcy51cmkgKz0gJyZjb2xvcj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGN1cnJlbnQuc3R5bGVzLmFjY2VudEJhY2tncm91bmQucmVwbGFjZSgnIycsICcnKSk7XG5cdFx0aW1nLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMTAwJScpO1xuXHRcdGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHRoaXMudXJpKTtcblx0XHRyZXR1cm4gaW1nO1xuXHR9LFxuXHRoYW5kbGVDbGljazogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5jbGFzc05hbWUgPSBucyArICctbG9jYXRpb24tYWN0aXZlJztcblx0XHRzaG93TG9jYXRpb25zW3RoaXMuZGF0YXNldC51dWlkXS5yZW1vdmVBbGxFdmVudExpc3RlbmVycygpO1xuXHRcdHB1Ymxpc2goJ3JlY2VpdmUnLCB7XG5cdFx0XHRtZXNzYWdlOiB7XG5cdFx0XHRcdHRleHQ6IFt1dGlscy5jb21waWxlKHN0cmluZ3MubG9jYXRpb25zLnNpbmdsZSwgeyBsb2NhdGlvbjogc2hvd0xvY2F0aW9uc1t0aGlzLmRhdGFzZXQudXVpZF0uZGF0YVt0aGlzLmRhdGFzZXQuaWQgLSAxXS5hZGRyZXNzLmFkZHJlc3MgfSldLFxuXHRcdFx0XHRsYXlvdXQ6IHtcblx0XHRcdFx0XHRuYW1lOiAnc2hvdy1sb2NhdGlvbnMnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHQvKiBqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG5cdFx0XHRcdFx0bG9jYXRpb25fZGF0YTogW3Nob3dMb2NhdGlvbnNbdGhpcy5kYXRhc2V0LnV1aWRdLmRhdGFbdGhpcy5kYXRhc2V0LmlkIC0gMV1dXG5cdFx0XHRcdFx0LyoganNoaW50IGlnbm9yZTplbmQgKi9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXHRyZW1vdmVBbGxFdmVudExpc3RlbmVyczogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHRoaXMuZXZlbnRMaXN0ZW5lcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5kYXRhRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKG5zICsgJy1jbGlja2FibGUnKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ldmVudExpc3RlbmVycy5sZW5ndGg7IGkrKylcblx0XHRcdFx0dGhpcy5ldmVudExpc3RlbmVyc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spO1xuXHRcdFx0dGhpcy5ldmVudExpc3RlbmVycyA9IFtdO1xuXHRcdH1cblx0fSxcblx0YWRkTG9jYXRpb246IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR2YXIgbG9jYXRpb25EYXRhID0gZ2V0U3RhdGUoKS5sb2NhdGlvbl9kYXRhO1xuXHRcdHZhciBpdGVtID0gdGhpcy5kYXRhWzBdO1xuXHRcdHZhciBjcmVhdGVEb20gPSBmdW5jdGlvbihlbCkge1xuXHRcdFx0dmFyIHRleHQgPSB0ZW1wbGF0ZXMuYWRkTG9jYXRpb25JdGVtO1xuXHRcdFx0ZWwuaW5uZXJIVE1MID0gdXRpbHMuY29tcGlsZSh0ZXh0LCB7IG5zOiBucyB9KTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGxpbms6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEtYWRkcmVzcy1saW5rJyksXG5cdFx0XHRcdGxhYmVsOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtaXRlbS1kYXRhLXRpdGxlJyksXG5cdFx0XHRcdGFkZHJlc3M6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEtYWRkcmVzcycpLFxuXHRcdFx0XHRhZGRyZXNzMTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuXHRcdFx0XHRhZGRyZXNzMjogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuXHRcdFx0XHRwaG9uZTogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWl0ZW0tZGF0YS1waG9uZScpLFxuXHRcdFx0XHRlbWFpbDogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWl0ZW0tZGF0YS1lbWFpbCcpLFxuXHRcdFx0XHRob3VyczogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWl0ZW0tZGF0YS1ob3VycycpLFxuXHRcdFx0XHRwYXJlbnRFbDogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWl0ZW0tZGF0YScpLFxuXHRcdFx0XHRob3Vyc0J1dHRvbjogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWl0ZW0tZGF0YS1ob3Vycy1idXR0b24nKSxcblx0XHRcdFx0bW9yZUhvdXJzOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtaXRlbS1kYXRhLW1vcmUtaG91cnMnKSxcblx0XHRcdFx0ZGlzdGFuY2U6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRpc3RhbmNlJyksXG5cdFx0XHRcdGJhY2tIb2xkZXI6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEtc2VjdGlvbicpLFxuXHRcdFx0XHRiYWNrOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtYWxsJylcblx0XHRcdH07XG5cdFx0fTtcblx0XHR2YXIgZG9tID0gY3JlYXRlRG9tKGVsKTtcblx0XHRpZiAoaXRlbS5sYWJlbClcblx0XHRcdGRvbS5sYWJlbC50ZXh0Q29udGVudCA9IGl0ZW0ubGFiZWw7XG5cdFx0ZWxzZVxuXHRcdFx0ZG9tLnBhcmVudEVsLnJlbW92ZUNoaWxkKGRvbS5sYWJlbCk7XG5cblx0XHR2YXIgYWRkcmVzc2VzID0gcGFyc2VBZGRyZXNzKGl0ZW0uYWRkcmVzcy5hZGRyZXNzKTtcblx0XHRkb20uYWRkcmVzczEudGV4dENvbnRlbnQgPSBhZGRyZXNzZXMuYWRkcmVzczE7XG5cdFx0ZG9tLmFkZHJlc3MyLnRleHRDb250ZW50ID0gYWRkcmVzc2VzLmFkZHJlc3MyO1xuXHRcdGRvbS5hZGRyZXNzLmFwcGVuZENoaWxkKGRvbS5hZGRyZXNzMSk7XG5cdFx0ZG9tLmFkZHJlc3MuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG5cdFx0ZG9tLmFkZHJlc3MuYXBwZW5kQ2hpbGQoZG9tLmFkZHJlc3MyKTtcblx0XHRkb20ubGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vP3E9JyArIGVuY29kZVVSSUNvbXBvbmVudChpdGVtLmFkZHJlc3MuYWRkcmVzcykpO1xuXHRcdGRvbS5saW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuXHRcdGRvbS5kaXN0YW5jZS50ZXh0Q29udGVudCA9IGRpc3RhbmNlKGl0ZW0pIHx8ICcnO1xuXG5cdFx0aWYgKGl0ZW0uZW1haWwpIHtcblx0XHRcdGNvbnN0IGxpbmtFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRcdGxpbmtFbC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnbWFpbHRvOicgKyBpdGVtLmVtYWlsKTtcblx0XHRcdGxpbmtFbC5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcblx0XHRcdGxpbmtFbC50ZXh0Q29udGVudCA9IGl0ZW0uZW1haWw7XG5cdFx0XHRkb20uZW1haWwuYXBwZW5kQ2hpbGQobGlua0VsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9tLmVtYWlsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tLmVtYWlsKTtcblx0XHR9XG5cblx0XHRpZiAoaXRlbS5waG9uZXMgJiYgaXRlbS5waG9uZXMubGVuZ3RoID4gMClcblx0XHRcdGNyZWF0ZVBob25lQXJyYXkoZG9tLnBob25lLCBpdGVtLnBob25lcyk7XG5cdFx0ZWxzZVxuXHRcdFx0ZG9tLnBob25lLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tLnBob25lKTtcblxuXHRcdGlmIChpdGVtLmRheXMgJiYgaXRlbS5kYXlzLmxlbmd0aCA+IDApIHtcblx0XHRcdGNyZWF0ZUhvdXJzKGRvbS5ob3VycywgZG9tLm1vcmVIb3VycywgaXRlbS5kYXlzKTtcblx0XHRcdGRvbS5ob3Vyc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRkb20ucGFyZW50RWwucmVtb3ZlQ2hpbGQoZG9tLmhvdXJzQnV0dG9uKTtcblx0XHRcdFx0ZG9tLm1vcmVIb3Vycy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEtbW9yZS1ob3VycycpO1xuXHRcdFx0XHRwdWJsaXNoKCdmb2N1cy1pbnB1dCcpO1xuXHRcdFx0XHRwdWJsaXNoKCdzY3JvbGwtdG8tYm90dG9tJyk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9tLmhvdXJzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tLmhvdXJzKTtcblx0XHRcdGRvbS5ob3Vyc0J1dHRvbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvbS5ob3Vyc0J1dHRvbik7XG5cdFx0fVxuXG5cdFx0aWYgKGxvY2F0aW9uRGF0YSAmJiBsb2NhdGlvbkRhdGEubGVuZ3RoID4gMSkge1xuXHRcdFx0ZG9tLmJhY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0cHVibGlzaCgncmVjZWl2ZScsIHtcblx0XHRcdFx0XHRtZXNzYWdlOiB7XG5cdFx0XHRcdFx0XHR0ZXh0OiBbc3RyaW5ncy5sb2NhdGlvbnMubGlzdF0sXG5cdFx0XHRcdFx0XHRsYXlvdXQ6IHtcblx0XHRcdFx0XHRcdFx0bmFtZTogJ3Nob3ctbG9jYXRpb25zJ1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdFx0LyoganNoaW50IGlnbm9yZTpzdGFydCAqL1xuXHRcdFx0XHRcdFx0XHRsb2NhdGlvbl9kYXRhOiBsb2NhdGlvbkRhdGFcblx0XHRcdFx0XHRcdFx0LyoganNoaW50IGlnbm9yZTplbmQgKi9cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvbS5iYWNrSG9sZGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tLmJhY2tIb2xkZXIpO1xuXHRcdH1cblx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQoZWwpO1xuXHRcdHJldHVybiBjb250YWluZXI7XG5cdH0sXG5cdGFkZExvY2F0aW9uczogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBnZXRTdGF0ZSgpO1xuXHRcdHZhciBjcmVhdGVEb20gPSBmdW5jdGlvbihlbCwgaSwgdXVpZCkge1xuXHRcdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrKTtcblx0XHRcdGVsLmRhdGFzZXQudXVpZCA9IHV1aWQ7XG5cdFx0XHRlbC5kYXRhc2V0LmlkID0gaSArIDE7XG5cdFx0XHR2YXIgdGV4dCA9IHRlbXBsYXRlcy5hZGRMb2NhdGlvbnNJdGVtO1xuXHRcdFx0ZWwuaW5uZXJIVE1MID0gdXRpbHMuY29tcGlsZSh0ZXh0LCB7IG5zOiBucyB9KTtcblx0XHRcdHRoaXMuZXZlbnRMaXN0ZW5lcnMucHVzaChlbCk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpY29uOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtaXRlbS1pY29uJyksXG5cdFx0XHRcdGxhYmVsOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtaXRlbS1kYXRhLXRpdGxlJyksXG5cdFx0XHRcdGFkZHJlc3M6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEtYWRkcmVzcycpLFxuXHRcdFx0XHRhZGRyZXNzMTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuXHRcdFx0XHRhZGRyZXNzMjogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuXHRcdFx0XHRkaXN0YW5jZTogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWl0ZW0tZGlzdGFuY2UnKVxuXHRcdFx0fTtcblx0XHR9O1xuXG5cdFx0dmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IChpIDwgZGlzcGxheUxlbmd0aCAmJiBpIDwgdGhpcy5kYXRhLmxlbmd0aCk7IGkrKykge1xuXHRcdFx0dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHR2YXIgaXRlbSA9IHRoaXMuZGF0YVtpXTtcblx0XHRcdHZhciBkb20gPSBjcmVhdGVEb20uY2FsbCh0aGlzLCBlbCwgaSwgdGhpcy51dWlkKTtcblx0XHRcdHZhciBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGJveC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2ZvbnQtd2VpZ2h0OmJvbGQ7IGNvbG9yOicgKyBjdXJyZW50LnN0eWxlcy5hY2NlbnRUZXh0ICsgJzsgYmFja2dyb3VuZDogJyArIGN1cnJlbnQuc3R5bGVzLmFjY2VudEJhY2tncm91bmQgKyAnOyBsaW5lLWhlaWdodDogMjRweDsgaGVpZ2h0OjI0cHg7IHdpZHRoOjI0cHg7IG1hcmdpbi1sZWZ0OjhweDsnKTtcblx0XHRcdGJveC50ZXh0Q29udGVudCA9IGFscGhhTWFwW2ldO1xuXHRcdFx0ZG9tLmljb24uYXBwZW5kQ2hpbGQoYm94KTtcblx0XHRcdGRvbS5sYWJlbC50ZXh0Q29udGVudCA9IGl0ZW0ubGFiZWwgfHwgJyc7XG5cdFx0XHR2YXIgYWRkcmVzc2VzID0gcGFyc2VBZGRyZXNzKGl0ZW0uYWRkcmVzcy5hZGRyZXNzKTtcblx0XHRcdGRvbS5hZGRyZXNzMS50ZXh0Q29udGVudCA9IGFkZHJlc3Nlcy5hZGRyZXNzMTtcblx0XHRcdGRvbS5hZGRyZXNzMi50ZXh0Q29udGVudCA9IGFkZHJlc3Nlcy5hZGRyZXNzMjtcblx0XHRcdGRvbS5hZGRyZXNzLmFwcGVuZENoaWxkKGRvbS5hZGRyZXNzMSk7XG5cdFx0XHRkb20uYWRkcmVzcy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcblx0XHRcdGRvbS5hZGRyZXNzLmFwcGVuZENoaWxkKGRvbS5hZGRyZXNzMik7XG5cdFx0XHRkb20uZGlzdGFuY2UudGV4dENvbnRlbnQgPSBkaXN0YW5jZShpdGVtKSB8fCAnJztcblx0XHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbCk7XG5cdFx0fVxuXHRcdHJldHVybiBjb250YWluZXI7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvd0xvY2F0aW9uc0xheW91dDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyoqXFxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxcbipcXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcXFwiTGljZW5zZVxcXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcXG4qXFxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcXG4qXFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXFxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcXFwiQVMgSVNcXFwiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3NcXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcXG4qIHRoZSBMaWNlbnNlLlxcbiovXFxuXFxuLklCTUNoYXQtbWFwIHtcXG5cXHRtYXJnaW4tdG9wOjFlbTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWltZyB7XFxuXFx0aGVpZ2h0OjE4MHB4O1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtaW1nIGltZyB7XFxuXFx0aGVpZ2h0OjE4MHB4O1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtbXVsdGlwbGUtbG9jYXRpb25zIHtcXG5cXHRjdXJzb3I6IGRlZmF1bHQ7XFxuXFx0b3BhY2l0eTowLjM7XFxuXFx0ZGlzcGxheTogdGFibGU7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5JQk1DaGF0LW1hcC1tdWx0aXBsZS1sb2NhdGlvbnMgLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1yb3cge1xcblxcdGRpc3BsYXk6dGFibGUtcm93O1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtbXVsdGlwbGUtbG9jYXRpb25zIC5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtY2VsbCB7XFxuXFx0ZGlzcGxheTogdGFibGUtY2VsbDtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWxvY2F0aW9uLWFjdGl2ZSAuSUJNQ2hhdC1tYXAtbXVsdGlwbGUtbG9jYXRpb25zIHtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtY2xpY2thYmxlIC5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS5JQk1DaGF0LW1hcC1tdWx0aXBsZS1sb2NhdGlvbnMge1xcblxcdHBhZGRpbmc6IDFlbSAwIDFlbSAwO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtZGF0YS1zZWN0aW9uIHtcXG5cXHRtYXJnaW4tdG9wOjAuNWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0ge1xcblxcdHBhZGRpbmc6IDFlbTtcXG5cXHRib3JkZXItYm90dG9tOjFweCBzb2xpZCAjNTA1MDUwO1xcbn1cXG5cXG5cXG4uSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0taWNvbiB7XFxuXFx0dGV4dC1hbGlnbjpjZW50ZXI7XFxuXFx0d2lkdGg6IDQwcHg7XFxufVxcblxcbi5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1kYXRhIHtcXG5cXHRwYWRkaW5nOjAgNHB4IDAgNHB4O1xcblxcdGZvbnQtc2l6ZTowLjllbTtcXG59XFxuLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWRhdGEtdGl0bGUge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHBhZGRpbmctYm90dG9tOjAuNWVtO1xcbn1cXG4uSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0tZGF0YS1pdGVtcyB7XFxuXFx0Zm9udC1zaXplOiAwLjllbTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWRhdGEtc2VjdGlvbiB7XFxuXFx0cGFkZGluZy1ib3R0b206MWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0tZGF0YS1lbWFpbCB7XFxuXFx0cGFkZGluZy1ib3R0b206MWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0tZGF0YS1waG9uZSB7XFxuXFx0ZGlzcGxheTogdGFibGU7XFxuXFx0bWF4LXdpZHRoOjQwMHB4O1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHBhZGRpbmctYm90dG9tOjFlbTtcXG59XFxuLklCTUNoYXQtbWFwLWNvbnRhY3Qtcm93IHtcXG5cXHRwYWRkaW5nLWJvdHRvbToxZW07XFxufVxcblxcbi5JQk1DaGF0LW1hcC1ob3Vycy1vcGVuIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTowLjVlbTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWNvbnRhY3QtdHlwZSB7XFxuXFx0Zm9udC1zdHlsZTppdGFsaWM7XFxuXFx0Zm9udC1zaXplOjAuOWVtO1xcbn1cXG4uSUJNQ2hhdC1tYXAtY29udGFjdC1kYXRhIHtcXG5cXG59XFxuXFxuYS5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1kYXRhLWFkZHJlc3MtbGluayxcXG5hLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWRhdGEtYWRkcmVzcy1saW5rOmhvdmVyLFxcbmEuSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0tZGF0YS1hZGRyZXNzLWxpbms6dmlzaXRlZCxcXG5hLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWRhdGEtYWRkcmVzcy1saW5rOmFjdGl2ZSxcXG4uSUJNQ2hhdC1tYXAtY29udGFjdC1kYXRhIGEsXFxuLklCTUNoYXQtbWFwLWNvbnRhY3QtZGF0YSBhOmhvdmVyLFxcbi5JQk1DaGF0LW1hcC1jb250YWN0LWRhdGEgYTphY3RpdmUsXFxuLklCTUNoYXQtbWFwLWNvbnRhY3QtZGF0YSBhOnZpc2l0ZWQge1xcblxcdGZvbnQtd2VpZ2h0Om5vcm1hbDtcXG5cXHRmb250LXNpemU6MC45ZW07XFxufVxcblxcbi5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1kaXN0YW5jZSB7XFxuXFx0d2lkdGg6NjRweDtcXG5cXHRmb250LXNpemU6MC45ZW07XFxufVxcblxcbmJ1dHRvbi5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1kYXRhLWhvdXJzLWJ1dHRvbiB7XFxuXFx0Zm9udC1zaXplOjAuOWVtO1xcblxcdHBhZGRpbmc6IDAgMWVtIDAgMWVtO1xcblxcdGxpbmUtaGVpZ2h0OjEuNWVtO1xcblxcdG1hcmdpbi10b3A6MWVtO1xcbn1cXG5cXG5idXR0b24uSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWFsbCB7XFxuXFx0Zm9udC1zaXplOjAuOWVtO1xcblxcdHBhZGRpbmc6IDAgMWVtIDAgMWVtO1xcblxcdGxpbmUtaGVpZ2h0OjEuNWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0tZGF0YS1tb3JlLWhvdXJzIHtcXG5cXHRkaXNwbGF5OiB0YWJsZTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWRhdGEtbW9yZS1ob3Vycy5JQk1DaGF0LW1hcC1oaWRkZW4ge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5JQk1DaGF0LW1hcC1kYXlzLWhvdXJzIHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1yb3c7XFxufVxcblxcbi5JQk1DaGF0LW1hcC1kYXlzLWhvdXJzLWRheSwgLklCTUNoYXQtbWFwLWRheXMtaG91cnMtaG91cnMsIC5JQk1DaGF0LW1hcC1kYXlzLWhvdXJzLWNsb3NlZCB7XFxuXFx0ZGlzcGxheTogdGFibGUtY2VsbDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzowLjc1ZW0gMWVtIDAgMDtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWRheXMtaG91cnMgPiBkaXY6bGFzdC1jaGlsZCB7XFxuXFx0cGFkZGluZzogMC43NWVtIDAgMCAwICFpbXBvcnRhbnQ7XFxufVxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmF3LWxvYWRlciEuL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3N0eWxlcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIiR7bnN9XFxcIj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1pbWdcXFwiPjwvZGl2PlxcblxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWRhdGEgJHtuc30tY2xpY2thYmxlXFxcIj48L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy90ZW1wbGF0ZXMvYmFzZS5odG1sXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbSAke25zfS1tdWx0aXBsZS1sb2NhdGlvbnMgJHtuc30tZGF0YS1zZWN0aW9uIElCTUNoYXQtc2Vjb25kYXJ5LWNvbG9yc1xcXCI+XFxuXFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLXJvd1xcXCI+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0taWNvbiAke25zfS1sb2NhdGlvbnMtY2VsbFxcXCI+PC9kaXY+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0tZGF0YSAke25zfS1sb2NhdGlvbnMtY2VsbFxcXCI+XFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0tZGF0YS10aXRsZVxcXCI+PC9kaXY+XFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0tZGF0YS1pdGVtc1xcXCI+XFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0tZGF0YS1hZGRyZXNzXFxcIj48L2Rpdj5cXG5cXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kaXN0YW5jZVxcXCI+PC9kaXY+XFxuXFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0PC9kaXY+XFxuXFx0PC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvdGVtcGxhdGVzL2FkZC1sb2NhdGlvbnMtaXRlbS5odG1sXG4gKiogbW9kdWxlIGlkID0gNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbSAke25zfS1kYXRhLXNlY3Rpb24gSUJNQ2hhdC1zZWNvbmRhcnktY29sb3JzXFxcIj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLXNlY3Rpb25cXFwiPlxcblxcdFxcdDxidXR0b24gY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1hbGwgSUJNQ2hhdC1hY2NlbnQtY29sb3JzXFxcIj5CYWNrIHRvIEFsbCBMb2NhdGlvbnM8L2J1dHRvbj5cXG5cXHQ8L2Rpdj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhXFxcIj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLXRpdGxlXFxcIj48L2Rpdj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLWl0ZW1zXFxcIj5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLXNlY3Rpb25cXFwiPlxcblxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLWFkZHJlc3MtbGlua1xcXCI+XFxuXFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0tZGF0YS1hZGRyZXNzXFxcIj48L2Rpdj5cXG5cXHRcXHRcXHRcXHQ8L2E+XFxuXFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0tZGF0YS1lbWFpbFxcXCI+PC9kaXY+XFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0tZGF0YS1waG9uZVxcXCI+PC9kaXY+XFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0tZGF0YS1ob3Vyc1xcXCI+PC9kaXY+XFxuXFx0XFx0PC9kaXY+XFxuXFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0tZGF0YS1ob3Vycy1idXR0b24gSUJNQ2hhdC1hY2NlbnQtY29sb3JzXFxcIj5Nb3JlIEhvdXJzPC9idXR0b24+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0tZGF0YS1pdGVtc1xcXCI+XFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0tZGF0YS1tb3JlLWhvdXJzICR7bnN9LWhpZGRlblxcXCI+PC9kaXY+XFxuXFx0XFx0PC9kaXY+XFxuXFx0PC9kaXY+XFxuXFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0tZGlzdGFuY2VcXFwiPjwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3RlbXBsYXRlcy9hZGQtbG9jYXRpb24taXRlbS5odG1sXG4gKiogbW9kdWxlIGlkID0gNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCIke25zfS1kYXlzLWhvdXJzLWRheVxcXCI+XFxuXFx0JHtkYXl9XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwiJHtuc30tZGF5cy1ob3Vycy1ob3Vyc1xcXCI+XFxuXFx0Q2xvc2VkXFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvdGVtcGxhdGVzL2hvdXJzLWNsb3NlZC5odG1sXG4gKiogbW9kdWxlIGlkID0gNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCIke25zfS1kYXlzLWhvdXJzLWRheVxcXCI+XFxuXFx0JHtkYXl9XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwiJHtuc30tZGF5cy1ob3Vycy1ob3Vyc1xcXCI+XFxuXFx0JHtvcGVufSAmbmRhc2g7ICR7Y2xvc2V9XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvdGVtcGxhdGVzL2hvdXJzLW9wZW4uaHRtbFxuICoqIG1vZHVsZSBpZCA9IDU0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiJHtuc30taG91cnMtb3BlblxcXCI+T3BlbiB0b2RheTo8L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCIke25zfS1ob3Vycy10b2RheVxcXCI+XFxuXFx0JHtvcGVufSAmbmRhc2g7ICR7Y2xvc2V9XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvdGVtcGxhdGVzL2hvdXJzLXRvZGF5LW9wZW4uaHRtbFxuICoqIG1vZHVsZSBpZCA9IDU1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiJHtuc30taG91cnMtb3BlblxcXCI+Q2xvc2VkIHRvZGF5LjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3RlbXBsYXRlcy9ob3Vycy10b2RheS1jbG9zZWQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiJHtuc30tY29udGFjdC10eXBlXFxcIj48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCIke25zfS1jb250YWN0LWRhdGFcXFwiPjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3RlbXBsYXRlcy9jcmVhdGUtZG9tLWFycmF5Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA1N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG52YXIgc3Vic2NyaWJlID0gZXZlbnRzLnN1YnNjcmliZTtcbnZhciBwdWJsaXNoID0gZXZlbnRzLnB1Ymxpc2g7XG5cbnZhciByZXF1ZXN0R2VvbG9jYXRpb25MYXRsb25ncyA9IFtdO1xuXG52YXIgcmVxdWVzdEdlb2xvY2F0aW9uTGF0bG9uZ0xheW91dCA9IHtcblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0c3Vic2NyaWJlKCdsYXlvdXQ6cmVxdWVzdC1nZW9sb2NhdGlvbi1sYXRsb25nJywgZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0dmFyIHJlcXVlc3RHZW9sb2NhdGlvbkxhdGxvbmcgPSBuZXcgUmVxdWVzdEdlb2xvY2F0aW9uTGF0bG9uZyhkYXRhKTtcblx0XHRcdHJlcXVlc3RHZW9sb2NhdGlvbkxhdGxvbmdzW2RhdGEudXVpZF0gPSByZXF1ZXN0R2VvbG9jYXRpb25MYXRsb25nO1xuXHRcdH0pO1xuXHR9XG59O1xuXG5mdW5jdGlvbiBSZXF1ZXN0R2VvbG9jYXRpb25MYXRsb25nKGRhdGEpIHtcblx0dGhpcy5pbml0KGRhdGEpO1xufVxuXG5SZXF1ZXN0R2VvbG9jYXRpb25MYXRsb25nLnByb3RvdHlwZSA9IHtcblx0aW5pdDogZnVuY3Rpb24oZGF0YSkge1xuXHRcdHRoaXMuZGF0YSA9IGRhdGEuZGF0YTtcblx0XHR0aGlzLnV1aWQgPSBkYXRhLnV1aWQ7XG5cdFx0dGhpcy5wYXJlbnRFbGVtZW50ID0gZGF0YS5lbGVtZW50O1xuXHRcdHRoaXMubGF5b3V0RWxlbWVudCA9IGRhdGEubGF5b3V0RWxlbWVudDtcblx0XHRwdWJsaXNoKCdlbmFibGUtbG9hZGluZycpO1xuXHRcdHB1Ymxpc2goJ2Rpc2FibGUtaW5wdXQnKTtcblx0XHRuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxuXHRcdFx0XHRmdW5jdGlvbihwb3NpdGlvbikge1xuXHRcdFx0XHRcdHB1Ymxpc2goJ2VuYWJsZS1pbnB1dCcpO1xuXHRcdFx0XHRcdHB1Ymxpc2goJ2Rpc2FibGUtbG9hZGluZycpO1xuXHRcdFx0XHRcdHB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0XHRcdFx0XHR0ZXh0OiBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUgKyAnLCcgKyBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlLFxuXHRcdFx0XHRcdFx0c2lsZW50OiB0cnVlXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHB1Ymxpc2goJ2VuYWJsZS1pbnB1dCcpO1xuXHRcdFx0XHRcdHB1Ymxpc2goJ2Rpc2FibGUtbG9hZGluZycpO1xuXHRcdFx0XHRcdHB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0XHRcdFx0XHR0ZXh0OiAnMCwwJyxcblx0XHRcdFx0XHRcdHNpbGVudDogdHJ1ZVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVlc3RHZW9sb2NhdGlvbkxhdGxvbmdMYXlvdXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvcmVxdWVzdC1nZW9sb2NhdGlvbi1sYXRsb25nL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxucmVxdWlyZSgnLi9zdHlsZXMuY3NzJyk7XG5cbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcbnZhciBzdWJzY3JpYmUgPSBldmVudHMuc3Vic2NyaWJlO1xudmFyIHB1Ymxpc2ggPSBldmVudHMucHVibGlzaDtcbnZhciBhY3RpdmVDbGFzc05hbWUgPSAnSUJNQ2hhdC1hY2NlbnQtY29sb3JzJztcbnZhciBpbmFjdGl2ZUNsYXNzTmFtZSA9ICdJQk1DaGF0LXNlY29uZGFyeS1jb2xvcnMnO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMnKTtcblxudmFyIG5zID0gJ0lCTUNoYXQtaXNsb2NhdGlvbmFwaSc7XG52YXIgY2hvb3NlTG9jYXRpb25UeXBlcyA9IFtdO1xuXG52YXIgY2hvb3NlTG9jYXRpb25UeXBlTGF5b3V0ID0ge1xuXHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHRzdWJzY3JpYmUoJ2xheW91dDpjaG9vc2UtbG9jYXRpb24tdHlwZScsIGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdHZhciBjaG9vc2VMb2NhdGlvblR5cGUgPSBuZXcgQ2hvb3NlTG9jYXRpb25UeXBlKGRhdGEpO1xuXHRcdFx0Y2hvb3NlTG9jYXRpb25UeXBlc1tkYXRhLnV1aWRdID0gY2hvb3NlTG9jYXRpb25UeXBlO1xuXHRcdH0pO1xuXHR9XG59O1xuXG52YXIgdmFsdWVzID0ge1xuXHRwb3N0YWxjb2RlOiAnemlwY29kZScsXG5cdGdlb2xvY2F0aW9uOiAnbGF0bG9uZydcbn07XG5cbnZhciB0ZW1wbGF0ZXMgPSB7XG5cdGJhc2U6IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2Jhc2UuaHRtbCcpXG59O1xuXG5mdW5jdGlvbiBDaG9vc2VMb2NhdGlvblR5cGUoZGF0YSkge1xuXHR0aGlzLmluaXQoZGF0YSk7XG59XG5cbkNob29zZUxvY2F0aW9uVHlwZS5wcm90b3R5cGUgPSB7XG5cdGluaXQ6IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHR0aGlzLmRhdGEgPSBkYXRhLmRhdGE7XG5cdFx0dGhpcy51dWlkID0gZGF0YS51dWlkO1xuXHRcdGlmICgnbmF2aWdhdG9yJyBpbiB3aW5kb3cgJiYgJ2dlb2xvY2F0aW9uJyBpbiBuYXZpZ2F0b3IpIHtcblx0XHRcdHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcblx0XHRcdHRoaXMucGFyZW50RWxlbWVudCA9IGRhdGEuZWxlbWVudDtcblx0XHRcdHRoaXMubGF5b3V0RWxlbWVudCA9IGRhdGEubGF5b3V0RWxlbWVudDtcblx0XHRcdHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdHRoaXMuZWwuaW5uZXJIVE1MID0gdXRpbHMuY29tcGlsZSh0ZW1wbGF0ZXMuYmFzZSwge1xuXHRcdFx0XHRuczogbnMsXG5cdFx0XHRcdCd2YWx1ZXMuZ2VvbG9jYXRpb24nOiB2YWx1ZXMuZ2VvbG9jYXRpb24sXG5cdFx0XHRcdCd2YWx1ZXMucG9zdGFsY29kZSc6IHZhbHVlcy5wb3N0YWxjb2RlXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMubGF5b3V0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcblx0XHRcdHRoaXMuYnV0dG9ucyA9IHRoaXMubGF5b3V0RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5idXR0b25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHRoaXMuYnV0dG9uc1tpXS5kYXRhc2V0LnV1aWQgPSB0aGlzLnV1aWQ7XG5cdFx0XHRcdHRoaXMuYnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spO1xuXHRcdFx0XHR0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2godGhpcy5idXR0b25zW2ldKTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmV2ZW50TGlzdGVuZXJzLmxlbmd0aCA+IDApXG5cdFx0XHRcdHRoaXMuc3Vic2NyaWJlU2VuZCA9IHN1YnNjcmliZSgnc2VuZCcsIHRoaXMucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMuYmluZCh0aGlzKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0XHRcdHRleHQ6IHZhbHVlcy5wb3N0YWxjb2RlLFxuXHRcdFx0XHRzaWxlbnQ6IHRydWVcblx0XHRcdH0pO1xuXHRcdH1cblx0fSxcblx0aGFuZGxlQ2xpY2s6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBkYXRhID0ge1xuXHRcdFx0c2lsZW50OiB0cnVlLFxuXHRcdFx0dGV4dDogbnVsbFxuXHRcdH07XG5cdFx0ZGF0YS50ZXh0ID0gdGhpcy5kYXRhc2V0LmlucHV0O1xuXHRcdHRoaXMuY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzc05hbWUpO1xuXHRcdHRoaXMuY2xhc3NMaXN0LnJlbW92ZShpbmFjdGl2ZUNsYXNzTmFtZSk7XG5cdFx0cHVibGlzaCgnc2VuZCcsIGRhdGEpO1xuXHRcdHB1Ymxpc2goJ2ZvY3VzLWlucHV0Jyk7XG5cdH0sXG5cdHJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzOiBmdW5jdGlvbigpIHtcblx0XHRpZiAodGhpcy5ldmVudExpc3RlbmVycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRMaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dGhpcy5ldmVudExpc3RlbmVyc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spO1xuXHRcdFx0XHR0aGlzLmV2ZW50TGlzdGVuZXJzW2ldLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcblx0XHR9XG5cdFx0dGhpcy5zdWJzY3JpYmVTZW5kLnJlbW92ZSgpO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNob29zZUxvY2F0aW9uVHlwZUxheW91dDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9jaG9vc2UtbG9jYXRpb24tdHlwZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyoqXFxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxcbipcXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcXFwiTGljZW5zZVxcXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcXG4qXFxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcXG4qXFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXFxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcXFwiQVMgSVNcXFwiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3NcXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcXG4qIHRoZSBMaWNlbnNlLlxcbiovXFxuXFxuLklCTUNoYXQtaXNsb2NhdGlvbmFwaS1jb250YWluZXIge1xcblxcdHRleHQtYWxpZ246Y2VudGVyO1xcbn1cXG5cXG4uSUJNQ2hhdC1pc2xvY2F0aW9uYXBpLWNvbnRhaW5lciBidXR0b24ge1xcblxcdG1hcmdpbjogMWVtIGF1dG8gMCBhdXRvO1xcblxcdG1pbi13aWR0aDoyMDBweDtcXG5cXHRtYXgtd2lkdGg6MjQwcHg7XFxuXFx0d2lkdGg6NzUlO1xcbn1cXG5cXG4uSUJNQ2hhdC1pc2xvY2F0aW9uYXBpLWNvbnRhaW5lciBkaXY6bGFzdC1jaGlsZCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jhdy1sb2FkZXIhLi9zcmMvbGF5b3V0cy9jaG9vc2UtbG9jYXRpb24tdHlwZS9zdHlsZXMuY3NzXG4gKiogbW9kdWxlIGlkID0gNjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCIke25zfS1jb250YWluZXJcXFwiPlxcblxcdDxkaXY+PGJ1dHRvbiBjbGFzcz1cXFwiSUJNQ2hhdC1zZWNvbmRhcnktY29sb3JzXFxcIiBkYXRhLWlucHV0PVxcXCIke3ZhbHVlcy5nZW9sb2NhdGlvbn1cXFwiPlVzZSBNeSBDdXJyZW50IExvY2F0aW9uPC9idXR0b24+PC9kaXY+XFxuXFx0PGRpdj48YnV0dG9uIGNsYXNzPVxcXCJJQk1DaGF0LXNlY29uZGFyeS1jb2xvcnNcXFwiIGRhdGEtaW5wdXQ9XFxcIiR7dmFsdWVzLnBvc3RhbGNvZGV9XFxcIj5BIFppcCBDb2RlPC9idXR0b24+PC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvY2hvb3NlLWxvY2F0aW9uLXR5cGUvdGVtcGxhdGVzL2Jhc2UuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnJlcXVpcmUoJy4vc3R5bGVzLmNzcycpO1xuXG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG52YXIgc3Vic2NyaWJlID0gZXZlbnRzLnN1YnNjcmliZTtcbnZhciBwdWJsaXNoID0gZXZlbnRzLnB1Ymxpc2g7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xudmFyIG5zID0gJ0lCTUNoYXQtY2hvb3NlJztcbnZhciBhY3RpdmVDbGFzc05hbWUgPSAnSUJNQ2hhdC1hY2NlbnQtY29sb3JzJztcbnZhciBpbmFjdGl2ZUNsYXNzTmFtZSA9ICdJQk1DaGF0LXNlY29uZGFyeS1jb2xvcnMnO1xudmFyIHdpZGdldHMgPSBbXTtcbnZhciB0ZW1wbGF0ZXMgPSB7XG5cdGJ1dHRvbjogcmVxdWlyZSgnLi90ZW1wbGF0ZXMvYnV0dG9uLmh0bWwnKVxufTtcblxudmFyIGNob29zZUxheW91dCA9IHtcblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0c3Vic2NyaWJlKCdsYXlvdXQ6Y2hvb3NlJywgZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0dmFyIHdpZGdldCA9IG5ldyBDaG9vc2UoZGF0YSk7XG5cdFx0XHR3aWRnZXRzW2RhdGEudXVpZF0gPSB3aWRnZXQ7XG5cdFx0fSk7XG5cdFx0c3Vic2NyaWJlKCdsYXlvdXQ6Y29uZmlybScsIGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdHZhciB3aWRnZXQgPSBuZXcgQ2hvb3NlKGRhdGEpO1xuXHRcdFx0d2lkZ2V0c1tkYXRhLnV1aWRdID0gd2lkZ2V0O1xuXHRcdH0pO1xuXHR9XG59O1xuXG5mdW5jdGlvbiBDaG9vc2UoZGF0YSkge1xuXHR0aGlzLmluaXQoZGF0YSk7XG59XG5cbkNob29zZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0dGhpcy5hbGxvd011bHRpcGxlID0gKGRhdGEubWVzc2FnZS5pbnB1dHZhbGlkYXRpb24uc29tZU9mICE9PSB1bmRlZmluZWQpO1xuXHR0aGlzLnZhbHVlcyA9IFtdO1xuXHR0aGlzLmRhdGEgPSAodGhpcy5hbGxvd011bHRpcGxlKSA/IGRhdGEubWVzc2FnZS5pbnB1dHZhbGlkYXRpb24uc29tZU9mIDogZGF0YS5tZXNzYWdlLmlucHV0dmFsaWRhdGlvbi5vbmVPZjtcblx0dGhpcy51dWlkID0gZGF0YS51dWlkO1xuXHR0aGlzLnBhcmVudEVsZW1lbnQgPSBkYXRhLmVsZW1lbnQ7XG5cdHRoaXMubGF5b3V0RWxlbWVudCA9IGRhdGEubGF5b3V0RWxlbWVudDtcblx0dGhpcy5tc2dFbGVtZW50ID0gZGF0YS5tc2dFbGVtZW50O1xuXHR0aGlzLmRyYXdCdXR0b25zKCk7XG5cdHRoaXMuc3Vic2NyaWJlU2VuZCA9IHN1YnNjcmliZSgnc2VuZCcsIHRoaXMucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMuYmluZCh0aGlzKSk7XG59O1xuXG5DaG9vc2UucHJvdG90eXBlLmV2ZW50TGlzdGVuZXJzID0gW107XG5cbkNob29zZS5wcm90b3R5cGUuZHJhd0J1dHRvbnMgPSBmdW5jdGlvbigpIHtcblx0dmFyIHRtcGwgPSB0ZW1wbGF0ZXMuYnV0dG9uO1xuXHR0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHRoaXMuZWwuY2xhc3NMaXN0LmFkZChucyArICctY29udGFpbmVyJyk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdGV4dCA9IHRoaXMuZGF0YVtpXTtcblx0XHR2YXIgYnV0dG9uSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0YnV0dG9uSG9sZGVyLmNsYXNzTGlzdC5hZGQobnMgKyAnLW9wdGlvbicpO1xuXHRcdHZhciBwYXJzZWQgPSB1dGlscy5jb21waWxlKHRtcGwsIHtcblx0XHRcdHRleHQ6IHRleHRcblx0XHR9KTtcblx0XHR2YXIgYnV0dG9uO1xuXHRcdGJ1dHRvbkhvbGRlci5pbm5lckhUTUwgPSBwYXJzZWQ7XG5cdFx0dGhpcy5lbC5hcHBlbmRDaGlsZChidXR0b25Ib2xkZXIpO1xuXHRcdGJ1dHRvbiA9IGJ1dHRvbkhvbGRlci5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcblx0XHRidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXV1aWQnLCB0aGlzLnV1aWQpO1xuXHRcdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKGluYWN0aXZlQ2xhc3NOYW1lKTtcblx0XHR0aGlzLmFkZExpc3RlbmVyKGJ1dHRvbik7XG5cdH1cblxuXHRpZiAodGhpcy5hbGxvd011bHRpcGxlKSB7XG5cdFx0dmFyIHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHZhciBzdWJtaXRCdG4gPSB1dGlscy5jb21waWxlKHRlbXBsYXRlcy5maWVsZCwge1xuXHRcdFx0dGV4dDogJ1N1Ym1pdCdcblx0XHR9KTtcblx0XHRzdWJtaXQuY2xhc3NOYW1lID0gbnMgKyAnLXN1Ym1pdCc7XG5cdFx0c3VibWl0LmlubmVySFRNTCA9IHN1Ym1pdEJ0bjtcblx0XHR0aGlzLnN1Ym1pdEJ1dHRvbiA9IHN1Ym1pdC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcblx0XHR0aGlzLnN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QgPSBhY3RpdmVDbGFzc05hbWU7XG5cdFx0dGhpcy5zdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuXHRcdHRoaXMuZWwuYXBwZW5kQ2hpbGQoc3VibWl0KTtcblx0XHR0aGlzLmFkZFN1Ym1pdExpc3RlbmVyKHRoaXMuc3VibWl0QnV0dG9uKTtcblx0fVxuXG5cdHRoaXMubGF5b3V0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbn07XG5cbkNob29zZS5wcm90b3R5cGUuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbigpIHtcblx0dmFyIGRhdGEgPSB7XG5cdFx0c2lsZW50OiB0cnVlLFxuXHRcdHRleHQ6IG51bGxcblx0fTtcblx0ZGF0YS50ZXh0ID0gdGhpcy5kYXRhc2V0LmlucHV0O1xuXHR0aGlzLmNsYXNzTmFtZSA9IGFjdGl2ZUNsYXNzTmFtZSArICcgSUJNQ2hhdC1hY2NlbnQtY29sb3JzJztcblx0cHVibGlzaCgnc2VuZCcsIGRhdGEpO1xufTtcblxuQ2hvb3NlLnByb3RvdHlwZS5oYW5kbGVNdWx0aUNsaWNrID0gZnVuY3Rpb24oKSB7XG5cdHZhciBidXR0b25zO1xuXHR2YXIgaW5zdGFuY2UgPSB3aWRnZXRzW3RoaXMuZGF0YXNldC51dWlkXTtcblx0aWYgKHV0aWxzLmhhc0NsYXNzKHRoaXMsIGFjdGl2ZUNsYXNzTmFtZSkpIHtcblx0XHR0aGlzLmNsYXNzTGlzdC5hZGQoaW5hY3RpdmVDbGFzc05hbWUpO1xuXHRcdHRoaXMuY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzc05hbWUpO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMuY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzc05hbWUpO1xuXHRcdHRoaXMuY2xhc3NMaXN0LnJlbW92ZShpbmFjdGl2ZUNsYXNzTmFtZSk7XG5cdH1cblx0YnV0dG9ucyA9IGluc3RhbmNlLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgbnMgKyAnLW9wdGlvbiAuJyArIGFjdGl2ZUNsYXNzTmFtZSk7XG5cdGlmIChidXR0b25zLmxlbmd0aCA+IDApXG5cdFx0aW5zdGFuY2Uuc3VibWl0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblx0ZWxzZVxuXHRcdGluc3RhbmNlLnN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG59O1xuXG5DaG9vc2UucHJvdG90eXBlLmhhbmRsZVN1Ym1pdCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgYnV0dG9ucyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnLicgKyBhY3RpdmVDbGFzc05hbWUpO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspXG5cdFx0dGhpcy52YWx1ZXMucHVzaChidXR0b25zW2ldLmRhdGFzZXQuaW5wdXQpO1xuXHRwdWJsaXNoKCdzZW5kJywge1xuXHRcdHNpbGVudDogdHJ1ZSxcblx0XHR0ZXh0OiB0aGlzLnZhbHVlcy50b1N0cmluZygpXG5cdH0pO1xufTtcblxuQ2hvb3NlLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKGVsKSB7XG5cdGlmICh0aGlzLmFsbG93TXVsdGlwbGUpXG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU11bHRpQ2xpY2spO1xuXHRlbHNlXG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrKTtcblx0dGhpcy5ldmVudExpc3RlbmVycy5wdXNoKGVsKTtcbn07XG5cbkNob29zZS5wcm90b3R5cGUuYWRkU3VibWl0TGlzdGVuZXIgPSBmdW5jdGlvbihlbCkge1xuXHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcykpO1xuXHR0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2goZWwpO1xufTtcblxuQ2hvb3NlLnByb3RvdHlwZS5yZW1vdmVBbGxFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5ldmVudExpc3RlbmVycy5sZW5ndGggPiAwKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmV2ZW50TGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0aGlzLmV2ZW50TGlzdGVuZXJzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljayk7XG5cdFx0XHR0aGlzLmV2ZW50TGlzdGVuZXJzW2ldLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcblx0XHR9XG5cdFx0dGhpcy5ldmVudExpc3RlbmVycyA9IFtdO1xuXHRcdHRoaXMuc3Vic2NyaWJlU2VuZC5yZW1vdmUoKTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjaG9vc2VMYXlvdXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvY2hvb3NlL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCIvKipcXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXFxuKlxcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFxcXCJMaWNlbnNlXFxcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxcbipcXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxcbipcXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFxcXCJBUyBJU1xcXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xcbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxcbiogdGhlIExpY2Vuc2UuXFxuKi9cXG5cXG4uSUJNQ2hhdC1jaG9vc2UtY29udGFpbmVyIHtcXG5cXHR0ZXh0LWFsaWduOmNlbnRlcjtcXG5cXHRwYWRkaW5nOjFlbTtcXG59XFxuXFxuLklCTUNoYXQtY2hvb3NlLWNvbnRhaW5lciBzcGFuIHtcXG5cXHRkaXNwbGF5OmlubGluZS1ibG9jaztcXG5cXHRtYXJnaW46IDFlbSAxZW0gMCAxZW07XFxufVxcblxcbi5JQk1DaGF0LWNob29zZS1jb250YWluZXIgZGl2IHtcXG5cXHRtYXJnaW46IDFlbSBhdXRvIDAgYXV0bztcXG59XFxuXFxuLklCTUNoYXQtY2hvb3NlLWNvbnRhaW5lciBidXR0b24ge1xcblxcdG1pbi13aWR0aDoyMzBweDtcXG5cXHRtYXgtd2lkdGg6MjcwcHg7XFxufVxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmF3LWxvYWRlciEuL3NyYy9sYXlvdXRzL2Nob29zZS9zdHlsZXMuY3NzXG4gKiogbW9kdWxlIGlkID0gNjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8YnV0dG9uIGNsYXNzPVxcXCJJQk1DaGF0LXNlY29uZGFyeS1jb2xvcnNcXFwiIGRhdGEtaW5wdXQ9XFxcIiR7dGV4dH1cXFwiPiR7dGV4dH08L2J1dHRvbj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9jaG9vc2UvdGVtcGxhdGVzL2J1dHRvbi5odG1sXG4gKiogbW9kdWxlIGlkID0gNjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxucmVxdWlyZSgnLi9zdHlsZXMuY3NzJyk7XG5cbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcbnZhciBwcm9maWxlID0gcmVxdWlyZSgnLi4vLi4vcHJvZmlsZScpO1xudmFyIHN1YnNjcmliZSA9IGV2ZW50cy5zdWJzY3JpYmU7XG52YXIgcHVibGlzaCA9IGV2ZW50cy5wdWJsaXNoO1xudmFyIGFjdGl2ZUNsYXNzTmFtZSA9ICdJQk1DaGF0LWFjY2VudC1jb2xvcnMnO1xudmFyIGluYWN0aXZlQ2xhc3NOYW1lID0gJ0lCTUNoYXQtc2Vjb25kYXJ5LWNvbG9ycyc7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xudmFyIG5zID0gJ0lCTUNoYXQtZm9ybSc7XG52YXIgd2lkZ2V0cyA9IFtdO1xudmFyIHRlbXBsYXRlcyA9IHtcblx0YmFzZTogcmVxdWlyZSgnLi90ZW1wbGF0ZXMvYmFzZS5odG1sJyksXG5cdGZpZWxkOiByZXF1aXJlKCcuL3RlbXBsYXRlcy9maWVsZC5odG1sJylcbn07XG5cbnZhciBmb3JtTGF5b3V0ID0ge1xuXHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHRzdWJzY3JpYmUoJ2xheW91dDpmb3JtJywgZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0dmFyIHdpZGdldCA9IG5ldyBGb3JtKGRhdGEpO1xuXHRcdFx0d2lkZ2V0c1tkYXRhLnV1aWRdID0gd2lkZ2V0O1xuXHRcdH0pO1xuXHR9XG59O1xuXG5mdW5jdGlvbiBGb3JtKGRhdGEpIHtcblx0dGhpcy5pbml0KGRhdGEpO1xufVxuXG5Gb3JtLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oZGF0YSkge1xuXHR0aGlzLmRhdGEgPSBkYXRhLm1lc3NhZ2Uuc3RvcmUgfHwgW107XG5cdHRoaXMuYWN0aW9uID0gZGF0YS5tZXNzYWdlLmFjdGlvbiB8fCAnJztcblx0dGhpcy51dWlkID0gZGF0YS51dWlkO1xuXHR0aGlzLnBhcmVudEVsZW1lbnQgPSBkYXRhLmVsZW1lbnQ7XG5cdHRoaXMubGF5b3V0RWxlbWVudCA9IGRhdGEubGF5b3V0RWxlbWVudDtcblx0dGhpcy5tc2dFbGVtZW50ID0gZGF0YS5tc2dFbGVtZW50O1xuXHR0aGlzLmRyYXdGb3JtKCk7XG5cdHRoaXMuc3Vic2NyaWJlU2VuZCA9IHN1YnNjcmliZSgnc2VuZCcsIHRoaXMucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMuYmluZCh0aGlzKSk7XG5cdHB1Ymxpc2goJ2Rpc2FibGUtaW5wdXQnKTtcbn07XG5cbkZvcm0ucHJvdG90eXBlLmRyYXdGb3JtID0gZnVuY3Rpb24oKSB7XG5cdHZhciBiYXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHZhciBmb3JtRmllbGRzO1xuXHRiYXNlLmlubmVySFRNTCA9IHRlbXBsYXRlcy5iYXNlO1xuXHRmb3JtRmllbGRzID0gYmFzZS5xdWVyeVNlbGVjdG9yKCcuSUJNQ2hhdC1mb3JtLWZpZWxkcycpO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGZpZWxkLmlubmVySFRNTCA9IHV0aWxzLmNvbXBpbGUodGVtcGxhdGVzLmZpZWxkLCB7XG5cdFx0XHRsYWJlbDogdGhpcy5kYXRhW2ldLmxhYmVsIHx8ICcnLFxuXHRcdFx0bmFtZTogdGhpcy5kYXRhW2ldLm5hbWUsXG5cdFx0XHR2YWx1ZTogJydcblx0XHR9KTtcblx0XHRmaWVsZC5jbGFzc05hbWUgPSBucyArICctZmllbGRzLXJvdyc7XG5cdFx0Zm9ybUZpZWxkcy5hcHBlbmRDaGlsZChmaWVsZCk7XG5cdH1cblx0dGhpcy5maWVsZHMgPSBmb3JtRmllbGRzLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG5cdHRoaXMuc3VibWl0QnV0dG9uID0gYmFzZS5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1zdWJtaXQnKTtcblx0dGhpcy5jYW5jZWxCdXR0b24gPSBiYXNlLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWNhbmNlbCcpO1xuXHR0aGlzLnN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNsYXNzTmFtZSk7XG5cdHRoaXMuY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoaW5hY3RpdmVDbGFzc05hbWUpO1xuXHR0aGlzLmxheW91dEVsZW1lbnQuYXBwZW5kQ2hpbGQoYmFzZSk7XG5cdHRoaXMuZmllbGRzWzBdLmZvY3VzKCk7XG5cdHRoaXMuYWRkTGlzdGVuZXJzKCk7XG59O1xuXG5Gb3JtLnByb3RvdHlwZS5oYW5kbGVTdWJtaXQgPSBmdW5jdGlvbigpIHtcblx0aWYgKHRoaXMudmFsaWRhdGVGaWVsZHMoKSA9PT0gdHJ1ZSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5maWVsZHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBmaWVsZCA9IHRoaXMuZmllbGRzW2ldO1xuXHRcdFx0cHJvZmlsZS5zZXQoZmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJyksIGZpZWxkLnZhbHVlKTtcblx0XHR9XG5cdFx0cHVibGlzaCgnc2VuZCcsIHtcblx0XHRcdHNpbGVudDogdHJ1ZSxcblx0XHRcdHRleHQ6ICdzdWNjZXNzJ1xuXHRcdH0pO1xuXHRcdHB1Ymxpc2goJ2VuYWJsZS1pbnB1dCcpO1xuXHR9XG59O1xuXG5Gb3JtLnByb3RvdHlwZS52YWxpZGF0ZUZpZWxkcyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgdmFsaWQgPSB0cnVlO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdGlmICh0aGlzLmRhdGFbaV0ucmVxdWlyZWQgJiYgdGhpcy5kYXRhW2ldLnJlcXVpcmVkICE9ICdmYWxzZScpIHtcblx0XHRcdGlmICghdGhpcy5maWVsZHNbaV0udmFsdWUgfHwgdGhpcy5maWVsZHNbaV0udmFsdWUubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHRoaXMuc2hvd0Vycm9yKHRoaXMuZmllbGRzW2ldLmdldEF0dHJpYnV0ZSgnbmFtZScpLCAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4nKTtcblx0XHRcdFx0dmFsaWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHZhbGlkO1xufTtcblxuRm9ybS5wcm90b3R5cGUuc2hvd0Vycm9yID0gZnVuY3Rpb24obmFtZSwgZXJyb3IpIHtcblx0dmFyIGVsID0gdGhpcy5sYXlvdXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5hbWU9XCInICsgbmFtZSArICdcIl0nKTtcblx0ZWwudGV4dENvbnRlbnQgPSBlcnJvcjtcblx0ZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59O1xuXG5Gb3JtLnByb3RvdHlwZS5oaWRlRXJyb3JzID0gZnVuY3Rpb24oKSB7XG5cdHZhciBlbHMgPSB0aGlzLmxheW91dEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmFtZV0nKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpKyspIHtcblx0XHRlbHNbaV0udGV4dENvbnRlbnQgPSAnJztcblx0XHRlbHNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0fVxufTtcblxuRm9ybS5wcm90b3R5cGUuaGFuZGxlRW50ZXIgPSBmdW5jdGlvbihlKSB7XG5cdGlmIChlLmtleUNvZGUgPT09IDEzKVxuXHRcdHRoaXMuaGFuZGxlU3VibWl0KCk7XG59O1xuXG5Gb3JtLnByb3RvdHlwZS5oYW5kbGVDYW5jZWwgPSBmdW5jdGlvbigpIHtcblx0cHVibGlzaCgnc2VuZCcsIHtcblx0XHRzaWxlbnQ6IHRydWUsXG5cdFx0dGV4dDogJ2NhbmNlbCdcblx0fSk7XG5cdHB1Ymxpc2goJ2VuYWJsZS1pbnB1dCcpO1xufTtcblxuRm9ybS5wcm90b3R5cGUuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDYW5jZWwuYmluZCh0aGlzKSk7XG5cdHRoaXMuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKSk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5maWVsZHMubGVuZ3RoOyBpKyspXG5cdFx0dGhpcy5maWVsZHNbaV0uYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCB0aGlzLmhhbmRsZUVudGVyLmJpbmQodGhpcykpO1xufTtcblxuRm9ybS5wcm90b3R5cGUucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5jYW5jZWxCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNhbmNlbC5iaW5kKHRoaXMpKTtcblx0dGhpcy5jYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuXHR0aGlzLnN1Ym1pdEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcykpO1xuXHR0aGlzLnN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5maWVsZHMubGVuZ3RoOyBpKyspIHtcblx0XHR0aGlzLmZpZWxkc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHRoaXMuaGFuZGxlRW50ZXIuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5maWVsZHNbaV0uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuXHR9XG5cblx0dGhpcy5zdWJzY3JpYmVTZW5kLnJlbW92ZSgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmb3JtTGF5b3V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL2Zvcm0vaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA2N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qKlxcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cXG4qXFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXFxcIkxpY2Vuc2VcXFwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcXG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XFxuKlxcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXFxuKlxcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXFxcIkFTIElTXFxcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXFxuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXFxuKiB0aGUgTGljZW5zZS5cXG4qL1xcblxcbi5JQk1DaGF0LWZvcm0tY29udGFpbmVyIHtcXG5cXHR0ZXh0LWFsaWduOmNlbnRlcjtcXG5cXHRwYWRkaW5nOjFlbTtcXG59XFxuXFxuLklCTUNoYXQtZm9ybS1maWVsZHMge1xcblxcdG1hcmdpbjphdXRvO1xcblxcdHRleHQtYWxpZ246bGVmdDtcXG5cXHRtYXgtd2lkdGg6MzYwcHg7XFxuXFx0d2lkdGg6MTAwJTtcXG59XFxuXFxuLklCTUNoYXQtZm9ybS1maWVsZHMtcm93IHtcXG5cXHRwYWRkaW5nLWJvdHRvbToxLjVlbTtcXG59XFxuXFxuLklCTUNoYXQtZm9ybS1maWVsZHMtcm93IGlucHV0IHtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLklCTUNoYXQtZm9ybS1idXR0b25zIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXgtd2lkdGg6IDM2MHB4O1xcblxcdGhlaWdodDogMi41ZW07XFxuXFx0dGV4dC1hbGlnbjpjZW50ZXI7XFxuXFx0bWFyZ2luOmF1dG87XFxufVxcblxcbi5JQk1DaGF0LWZvcm0tYnV0dG9ucyBidXR0b24ge1xcblxcdGxpbmUtaGVpZ2h0OiAyLjVlbTtcXG5cXHR3aWR0aDogMTAwcHg7XFxufVxcblxcbi5JQk1DaGF0LWZvcm0tY2FuY2VsIHtcXG5cXHRmbG9hdDpsZWZ0O1xcblxcdG1heC13aWR0aDogNTAlO1xcbn1cXG4uSUJNQ2hhdC1mb3JtLXN1Ym1pdCB7XFxuXFx0ZmxvYXQ6cmlnaHQ7XFxuXFx0bWF4LXdpZHRoOiA1MCU7XFxufVxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmF3LWxvYWRlciEuL3NyYy9sYXlvdXRzL2Zvcm0vc3R5bGVzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBCb3RTREsgPSByZXF1aXJlKCdAd2F0c29uLXZpcnR1YWwtYWdlbnQvY2xpZW50LXNkay9saWIvd2ViJyk7XG52YXIgcHJvZmlsZSA9IEJvdFNESy5wcm9maWxlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHByb2ZpbGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Byb2ZpbGUuanNcbiAqKiBtb2R1bGUgaWQgPSA3MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIklCTUNoYXQtZm9ybS1jb250YWluZXJcXFwiPlxcblxcdDxkaXYgY2xhc3M9XFxcIklCTUNoYXQtZm9ybS1maWVsZHNcXFwiPjwvZGl2PlxcblxcdDxkaXYgY2xhc3M9XFxcIklCTUNoYXQtZm9ybS1idXR0b25zXFxcIj5cXG5cXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJJQk1DaGF0LWZvcm0tY2FuY2VsXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJJQk1DaGF0LWZvcm0tc3VibWl0XFxcIj5TdWJtaXQ8L2J1dHRvbj5cXG5cXHQ8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9mb3JtL3RlbXBsYXRlcy9iYXNlLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA3MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxsYWJlbD4ke2xhYmVsfTwvbGFiZWw+XFxuPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJJQk1DaGF0LWlucHV0LWNvbG9yc1xcXCIgbmFtZT1cXFwiJHtuYW1lfVxcXCIgdmFsdWU9XFxcIiR7dmFsdWV9XFxcIiAvPlxcbjxkaXYgY2xhc3M9XFxcIklCTUNoYXQtaW5wdXQtZXJyb3JcXFwiIGRhdGEtbmFtZT1cXFwiJHtuYW1lfVxcXCI+PC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvZm9ybS90ZW1wbGF0ZXMvZmllbGQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDcyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnJlcXVpcmUoJy4vc3R5bGVzLmNzcycpO1xuXG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG52YXIgc3RhdGUgPSByZXF1aXJlKCcuLi8uLi9zdGF0ZScpO1xudmFyIHN1YnNjcmliZSA9IGV2ZW50cy5zdWJzY3JpYmU7XG52YXIgcHVibGlzaCA9IGV2ZW50cy5wdWJsaXNoO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMnKTtcbnZhciB2YWxpZGF0aW9uID0gcmVxdWlyZSgnLi92YWxpZGF0aW9uJyk7XG52YXIgbnMgPSAnSUJNQ2hhdC1jcmVkaXRjYXJkJztcbnZhciB3aWRnZXRzID0gW107XG52YXIgdGVtcGxhdGVzID0ge1xuXHRiYXNlOiByZXF1aXJlKCcuL3RlbXBsYXRlcy9iYXNlLmh0bWwnKVxufTtcblxudmFyIGNyZWRpdENhcmRMYXlvdXQgPSB7XG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHN1YnNjcmliZSgnbGF5b3V0OmNjLXZhbGlkYXRvcicsIGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdHZhciB3aWRnZXQgPSBuZXcgQ3JlZGl0Q2FyZChkYXRhKTtcblx0XHRcdHdpZGdldHNbZGF0YS51dWlkXSA9IHdpZGdldDtcblx0XHR9KTtcblx0fVxufTtcblxuZnVuY3Rpb24gQ3JlZGl0Q2FyZChkYXRhKSB7XG5cdHRoaXMuaW5pdChkYXRhKTtcbn1cblxuQ3JlZGl0Q2FyZC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0dGhpcy5kYXRhID0gZGF0YS5tZXNzYWdlLmxheW91dC5kYXRhIHx8IHt9O1xuXHR0aGlzLmRhdGEuYWNjZXB0ZWRDYXJkcyA9IHRoaXMuZGF0YS50eXBlcztcblx0dGhpcy51dWlkID0gZGF0YS51dWlkO1xuXHR0aGlzLnBhcmVudEVsZW1lbnQgPSBkYXRhLmVsZW1lbnQ7XG5cdHRoaXMubGF5b3V0RWxlbWVudCA9IGRhdGEubGF5b3V0RWxlbWVudDtcblx0dGhpcy5tc2dFbGVtZW50ID0gZGF0YS5tc2dFbGVtZW50O1xuXHR0aGlzLmRyYXdGb3JtKCk7XG59O1xuXG5DcmVkaXRDYXJkLnByb3RvdHlwZS5kcmF3Rm9ybSA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgdGV4dCA9IHRlbXBsYXRlcy5iYXNlO1xuXHR0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHRleHQgPSB1dGlscy5jb21waWxlKHRlbXBsYXRlcy5iYXNlLCB7XG5cdFx0bnM6IG5zXG5cdH0pO1xuXHR0aGlzLmVsLmlubmVySFRNTCA9IHRleHQ7XG5cdHRoaXMubGF5b3V0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcblx0dGhpcy5jYW5jZWxCdXR0b24gPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWNhbmNlbCcpO1xuXHR0aGlzLmNvbnRpbnVlQnV0dG9uID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1jb250aW51ZScpO1xuXHR0aGlzLmZvcm1FbGVtZW50cyA9IHt9O1xuXHR0aGlzLmZpZWxkcyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZpZWxkcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBmaWVsZCA9IHRoaXMuZmllbGRzW2ldO1xuXHRcdHZhciBuYW1lID0gZmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG5cdFx0dGhpcy5mb3JtRWxlbWVudHNbbmFtZV0gPSBmaWVsZDtcblx0fVxuXHR0aGlzLmFkZExpc3RlbmVycygpO1xufTtcblxuQ3JlZGl0Q2FyZC5wcm90b3R5cGUuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDYW5jZWwuYmluZCh0aGlzKSk7XG5cdHRoaXMuY29udGludWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNvbnRpbnVlLmJpbmQodGhpcykpO1xufTtcblxuQ3JlZGl0Q2FyZC5wcm90b3R5cGUuYWRkRXJyb3IgPSBmdW5jdGlvbihuYW1lLCBtc2cpIHtcblx0dmFyIGVycm9yRWxlbWVudCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignW2RhdGEtdmFsaWRhdGlvbi1mb3I9XCInICsgbmFtZSArICdcIl0nKTtcblx0ZXJyb3JFbGVtZW50LmRhdGFzZXQudmFsaWQgPSBmYWxzZTtcblx0ZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gbXNnO1xufTtcblxuQ3JlZGl0Q2FyZC5wcm90b3R5cGUucmVtb3ZlRXJyb3IgPSBmdW5jdGlvbihuYW1lKSB7XG5cdHZhciBlcnJvckVsZW1lbnQgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZhbGlkYXRpb24tZm9yPVwiJyArIG5hbWUgKyAnXCJdJyk7XG5cdGVycm9yRWxlbWVudC5kYXRhc2V0LnZhbGlkID0gdHJ1ZTtcblx0ZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG59O1xuXG5DcmVkaXRDYXJkLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgdmFsaWQgPSB0cnVlO1xuXHR0aGlzLmZvcm1EYXRhID0ge307XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5maWVsZHMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZmllbGQgPSB0aGlzLmZpZWxkc1tpXTtcblx0XHR2YXIgbmFtZSA9IGZpZWxkLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuXHRcdHRoaXMuZm9ybURhdGFbbmFtZV0gPSBmaWVsZC52YWx1ZTtcblx0fVxuXG5cdGlmICh0aGlzLmZvcm1EYXRhLmNjX2Z1bGxfbmFtZS5sZW5ndGggPT09IDApIHtcblx0XHR0aGlzLmFkZEVycm9yKCdjY19mdWxsX25hbWUnLCAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4nKTtcblx0XHR2YWxpZCA9IGZhbHNlO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMucmVtb3ZlRXJyb3IoJ2NjX2Z1bGxfbmFtZScpO1xuXHR9XG5cblx0dmFyIGNjID0gdmFsaWRhdGlvbi52YWxpZGF0ZUNhcmQodGhpcy5kYXRhLmFjY2VwdGVkQ2FyZHMsIHRoaXMuZm9ybURhdGEuY2NfbnVtYmVyKTtcblx0aWYgKCFjYy52YWxpZCkge1xuXHRcdHRoaXMuYWRkRXJyb3IoJ2NjX251bWJlcicsIGNjLm1lc3NhZ2UpO1xuXHRcdHZhbGlkID0gZmFsc2U7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5yZW1vdmVFcnJvcignY2NfZnVsbF9uYW1lJyk7XG5cdH1cblxuXHR2YXIgZXhwID0gdmFsaWRhdGlvbi52YWxpZGF0ZUV4cCh0aGlzLmZvcm1EYXRhLmNjX2V4cF9kYXRlX21vbnRoLCB0aGlzLmZvcm1EYXRhLmNjX2V4cF9kYXRlX3llYXIpO1xuXHRpZiAoIWV4cC52YWxpZCkge1xuXHRcdHRoaXMuYWRkRXJyb3IoJ2NjX2V4cF9kYXRlJywgZXhwLm1lc3NhZ2UpO1xuXHRcdHZhbGlkID0gZmFsc2U7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5yZW1vdmVFcnJvcignY2NfZXhwX2RhdGUnKTtcblx0fVxuXG5cdHZhciBjdnYgPSB2YWxpZGF0aW9uLnZhbGlkYXRlQ1ZWKHRoaXMuZm9ybURhdGEuY2NfY29kZSk7XG5cdGlmICghY3Z2LnZhbGlkKSB7XG5cdFx0dGhpcy5hZGRFcnJvcignY2NfY29kZScsIGN2di5tZXNzYWdlKTtcblx0XHR2YWxpZCA9IGZhbHNlO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMucmVtb3ZlRXJyb3IoJ2NjX2NvZGUnKTtcblx0fVxuXHRyZXR1cm4gdmFsaWQ7XG59O1xuXG5DcmVkaXRDYXJkLnByb3RvdHlwZS5oYW5kbGVDb250aW51ZSA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy52YWxpZGF0ZSgpKSB7XG5cdFx0dGhpcy5mb3JtRGF0YS5jY19leHBfZGF0ZSA9IHRoaXMuZm9ybURhdGEuY2NfZXhwX2RhdGVfbW9udGggKyAnLycgKyB0aGlzLmZvcm1EYXRhLmNjX2V4cF9kYXRlX3llYXI7XG5cdFx0c3RhdGUuc2V0UHJvZmlsZSh7XG5cdFx0XHRzZWxlY3RlZENhcmQ6IHRoaXMuZm9ybURhdGFcblx0XHR9KTtcblx0XHRwdWJsaXNoKCdzZW5kJywge1xuXHRcdFx0c2lsZW50OiB0cnVlLFxuXHRcdFx0dGV4dDogJ3N1Y2Nlc3MnXG5cdFx0fSk7XG5cdH1cbn07XG5cbkNyZWRpdENhcmQucHJvdG90eXBlLmhhbmRsZUNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuXHRwdWJsaXNoKCdzZW5kJywge1xuXHRcdHNpbGVudDogdHJ1ZSxcblx0XHR0ZXh0OiAnY2FuY2VsJ1xuXHR9KTtcbn07XG5cbkNyZWRpdENhcmQucHJvdG90eXBlLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuY2FuY2VsQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDYW5jZWwuYmluZCh0aGlzKSk7XG5cdHRoaXMuY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcblx0dGhpcy5zdWJtaXRCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpKTtcblx0dGhpcy5zdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuXHRmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuZmllbGRzLmxlbmd0aDsgaisrKVxuXHRcdHRoaXMuZmllbGRzW2pdLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcblxuXHR0aGlzLnN1YnNjcmliZVNlbmQucmVtb3ZlKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWRpdENhcmRMYXlvdXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvY2MtdmFsaWRhdG9yL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCIvKipcXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXFxuKlxcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFxcXCJMaWNlbnNlXFxcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxcbipcXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxcbipcXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFxcXCJBUyBJU1xcXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xcbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxcbiogdGhlIExpY2Vuc2UuXFxuKi9cXG5cXG4uSUJNQ2hhdC1jcmVkaXRjYXJkLWNvbnRhaW5lciB7XFxuXFx0cGFkZGluZzogMWVtO1xcblxcdHRleHQtYWxpZ246Y2VudGVyO1xcbn1cXG5cXG4uSUJNQ2hhdC1jcmVkaXRjYXJkLXJvd3Mge1xcblxcdG1hcmdpbjphdXRvO1xcblxcdHRleHQtYWxpZ246bGVmdDtcXG5cXHRtYXgtd2lkdGg6MzYwcHg7XFxuXFx0d2lkdGg6MTAwJTtcXG59XFxuXFxuLklCTUNoYXQtY3JlZGl0Y2FyZC1yb3cge1xcblxcdHRleHQtYWxpZ246bGVmdDtcXG5cXHRwYWRkaW5nLWJvdHRvbToxZW07XFxufVxcblxcbi5JQk1DaGF0LWNyZWRpdGNhcmQtcm93IGlucHV0IHtcXG5cXHR3aWR0aDoxMDAlO1xcbn1cXG5cXG5kaXZbZGF0YS12YWxpZGF0aW9uLWZvcl0ge1xcblxcdHBhZGRpbmctdG9wOjAuNWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1jcmVkaXRjYXJkLWNvbCB7XFxuXFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XFxufVxcblxcbi5JQk1DaGF0LWNyZWRpdGNhcmQtY29sIGlucHV0e1xcblxcdHRleHQtYWxpZ246Y2VudGVyO1xcblxcdHdpZHRoOjQwcHg7XFxufVxcblxcbi5JQk1DaGF0LWNyZWRpdGNhcmQtY29sOmxhc3QtY2hpbGQgaW5wdXQge1xcblxcdHdpZHRoOjYwcHg7XFxufVxcblxcbi5JQk1DaGF0LWNyZWRpdGNhcmQtYnV0dG9ucyB7XFxuXFx0aGVpZ2h0OjIuNWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1jcmVkaXRjYXJkLWJ1dHRvbnMgYnV0dG9uIHtcXG5cXHR3aWR0aDo5MHB4O1xcblxcdGZsb2F0OmxlZnQ7XFxufVxcblxcbi5JQk1DaGF0LWNyZWRpdGNhcmQtYnV0dG9ucyBidXR0b246bGFzdC1jaGlsZCB7XFxuXFx0ZmxvYXQ6cmlnaHQ7XFxufVxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmF3LWxvYWRlciEuL3NyYy9sYXlvdXRzL2NjLXZhbGlkYXRvci9zdHlsZXMuY3NzXG4gKiogbW9kdWxlIGlkID0gNzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxuLy9odHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9QYXltZW50X2NhcmRfbnVtYmVyXG5cbnZhciBzdGF0ZSA9IHtcblx0YWNjZXB0ZWRDYXJkczogW10sXG5cdGNhcmROdW1iZXI6ICcnLFxuXHRjYXJkVHlwZTogJydcbn07XG5cbnZhciBtZXNzYWdlcyA9IHtcblx0cmVxdWlyZWQ6ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLicsXG5cdGFjY2VwdGVkQ2FyZDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHRleHQgPSAnV2UgYWNjZXB0ICc7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHN0YXRlLmFjY2VwdGVkQ2FyZHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChpID4gMClcblx0XHRcdFx0dGV4dCArPSAnLCAnO1xuXHRcdFx0aWYgKGkgPT09IChzdGF0ZS5hY2NlcHRlZENhcmRzLmxlbmd0aCAtIDEpKVxuXHRcdFx0XHR0ZXh0ICs9ICcgYW5kICc7XG5cdFx0XHR0ZXh0ICs9IGNhcmREYXRhW3N0YXRlLmFjY2VwdGVkQ2FyZHNbaV1dLmh1bWFuO1xuXHRcdH1cblx0XHR0ZXh0ICs9ICcuIFBsZWFzZSB1c2UgYSB2YWxpZCBjYXJkLic7XG5cdFx0cmV0dXJuIHRleHQ7XG5cdH0sXG5cdGludmFsaWQ6ICdZb3VyIGNyZWRpdCBjYXJkIG51bWJlciBpcyBpbnZhbGlkLicsXG5cdGludmFsaWRFeHBpcmF0aW9uOiAnWW91ciBjcmVkaXQgY2FyZCBleHBpcmF0aW9uIGRhdGUgaXMgaW52YWxpZC4nLFxuXHRpbnZhbGlkQ3Z2OiAnWW91ciBDVlYgaXMgaW52YWxpZC4nXG59O1xuXG52YXIgY2FyZERhdGEgPSB7XG5cdFwidmlzYVwiOiB7XG5cdFx0aHVtYW46IFwiVmlzYVwiLFxuXHRcdHByZWZpeGVzOiBbNF0sXG5cdFx0bGVuZ3RoczogWzEzLCAxNiwgMTldXG5cdH0sXG5cdFwibWFzdGVyY2FyZFwiOiB7XG5cdFx0aHVtYW46IFwiTWFzdGVyQ2FyZFwiLFxuXHRcdHByZWZpeGVzOiBbNTEsIDUyLCA1MywgNTQsIDU1XSxcblx0XHRsZW5ndGhzOiBbMTZdXG5cdH0sXG5cdFwiYW1leFwiOiB7XG5cdFx0aHVtYW46IFwiQW1lcmljYW4gRXhwcmVzc1wiLFxuXHRcdHByZWZpeGVzOiBbMzQsIDM3XSxcblx0XHRsZW5ndGhzOiBbMTVdXG5cdH0sXG5cdFwiZGlzY292ZXJcIjoge1xuXHRcdGh1bWFuOiBcIkRpc2NvdmVyXCIsXG5cdFx0cHJlZml4ZXM6IFs2MDExLCA2NV0sXG5cdFx0bGVuZ3RoczogWzE2LCAxOV1cblx0fVxufTtcblxudmFyIGk7XG4vL01hc3RlckNhcmQgYWRkaW5nIHRoZXNlIG51bWJlcnMgaW4gMjAxN1xuZm9yIChpID0gMjIyMTsgaSA8PSAyNzIwOyBpKyspXG5cdGNhcmREYXRhLm1hc3RlcmNhcmQucHJlZml4ZXMucHVzaChpKTtcblxuZm9yIChpID0gNjIyMTI2OyBpIDw9IDYyMjkyNTsgaSsrKVxuXHRjYXJkRGF0YS5kaXNjb3Zlci5wcmVmaXhlcy5wdXNoKGkpO1xuXG5mb3IgKGkgPSA2NDQ7IGkgPD0gNjQ5OyBpKyspXG5cdGNhcmREYXRhLmRpc2NvdmVyLnByZWZpeGVzLnB1c2goaSk7XG5cbmZ1bmN0aW9uIF9kZXRlY3RDYXJkKCkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0YXRlLmFjY2VwdGVkQ2FyZHMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZGF0YSA9IGNhcmREYXRhW3N0YXRlLmFjY2VwdGVkQ2FyZHNbaV1dO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgZGF0YS5wcmVmaXhlcy5sZW5ndGg7IGorKykge1xuXHRcdFx0dmFyIHggPSBkYXRhLnByZWZpeGVzW2pdLnRvU3RyaW5nKCk7XG5cdFx0XHRpZiAoc3RhdGUuY2FyZE51bWJlci5zdWJzdHJpbmcoMCwgeC5sZW5ndGgpID09PSB4KSB7XG5cdFx0XHRcdHN0YXRlLmNhcmRUeXBlID0gc3RhdGUuYWNjZXB0ZWRDYXJkc1tpXTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gX2NoZWNrS3VobigpIHtcblx0dmFyIGNoZWNrc3VtID0gMDsgLy8gcnVubmluZyBjaGVja3N1bSB0b3RhbFxuXHR2YXIgaiA9IDE7IC8vIHRha2VzIHZhbHVlIG9mIDEgb3IgMlxuXG5cdC8vIFByb2Nlc3MgZWFjaCBkaWdpdCBvbmUgYnkgb25lIHN0YXJ0aW5nIGF0IHRoZSByaWdodFxuXHR2YXIgY2FsYztcblx0Zm9yICh2YXIgaSA9IHN0YXRlLmNhcmROdW1iZXIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHQvLyBFeHRyYWN0IHRoZSBuZXh0IGRpZ2l0IGFuZCBtdWx0aXBseSBieSAxIG9yIDIgb24gYWx0ZXJuYXRpdmUgZGlnaXRzLlxuXHRcdGNhbGMgPSBOdW1iZXIoc3RhdGUuY2FyZE51bWJlci5jaGFyQXQoaSkpICogajtcblxuXHRcdC8vIElmIHRoZSByZXN1bHQgaXMgaW4gdHdvIGRpZ2l0cyBhZGQgMSB0byB0aGUgY2hlY2tzdW0gdG90YWxcblx0XHRpZiAoY2FsYyA+IDkpIHtcblx0XHRcdGNoZWNrc3VtID0gY2hlY2tzdW0gKyAxO1xuXHRcdFx0Y2FsYyA9IGNhbGMgLSAxMDtcblx0XHR9XG5cblx0XHQvLyBBZGQgdGhlIHVuaXRzIGVsZW1lbnQgdG8gdGhlIGNoZWNrc3VtIHRvdGFsXG5cdFx0Y2hlY2tzdW0gPSBjaGVja3N1bSArIGNhbGM7XG5cblx0XHQvLyBTd2l0Y2ggdGhlIHZhbHVlIG9mIGpcblx0XHRqID0gKGogPT0gMSkgPyAyIDogMTtcblx0fVxuXG5cdC8vIEFsbCBkb25lIC0gaWYgY2hlY2tzdW0gaXMgZGl2aXNpYmxlIGJ5IDEwLCBpdCBpcyBhIHZhbGlkIG1vZHVsdXMgMTAuXG5cdC8vIElmIG5vdCwgcmVwb3J0IGFuIGVycm9yLlxuXHRyZXR1cm4gKGNoZWNrc3VtICUgMTAgIT0gMCkgPyBmYWxzZSA6IHRydWU7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2FyZChhY2NlcHRlZENhcmRzLCBjYXJkTnVtYmVyKSB7XG5cdHN0YXRlLmFjY2VwdGVkQ2FyZHMgPSBhY2NlcHRlZENhcmRzO1xuXHRzdGF0ZS5jYXJkTnVtYmVyID0gY2FyZE51bWJlci5yZXBsYWNlKC9cXEQvZywnJyk7IC8vc3RyaXAgZXh0cmEgY2hhcmFjdGVyc1xuXHRpZiAoY2FyZE51bWJlci5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0XCJtZXNzYWdlXCI6IG1lc3NhZ2VzLnJlcXVpcmVkLFxuXHRcdFx0XCJ2YWxpZFwiOiBmYWxzZVxuXHRcdH07XG5cdH1cblx0aWYgKHN0YXRlLmNhcmROdW1iZXIubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwibWVzc2FnZVwiOiBtZXNzYWdlcy5yZXF1aXJlZCxcblx0XHRcdFwidmFsaWRcIjogZmFsc2Vcblx0XHR9O1xuXHR9XG5cdGlmIChfZGV0ZWN0Q2FyZCgpKSB7XG5cdFx0aWYgKHN0YXRlLmFjY2VwdGVkQ2FyZHMuaW5kZXhPZihzdGF0ZS5jYXJkVHlwZSkgPT09IC0xKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcIm1lc3NhZ2VcIjogbWVzc2FnZXMuYWNjZXB0ZWRDYXJkKCksXG5cdFx0XHRcdFwidmFsaWRcIjogZmFsc2Vcblx0XHRcdH07XG5cdFx0fVxuXHRcdGlmIChjYXJkRGF0YVtzdGF0ZS5jYXJkVHlwZV0ubGVuZ3Rocy5pbmRleE9mKHN0YXRlLmNhcmROdW1iZXIubGVuZ3RoKSA9PT0gLTEpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFwibWVzc2FnZVwiOiBtZXNzYWdlcy5pbnZhbGlkLFxuXHRcdFx0XHRcInZhbGlkXCI6IGZhbHNlXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRpZiAoX2NoZWNrS3VobigpID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XCJtZXNzYWdlXCI6IG1lc3NhZ2VzLmludmFsaWQsXG5cdFx0XHRcdFwidmFsaWRcIjogZmFsc2Vcblx0XHRcdH07XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiB7XG5cdFx0XHRcIm1lc3NhZ2VcIjogbWVzc2FnZXMuaW52YWxpZCxcblx0XHRcdFwidmFsaWRcIjogZmFsc2Vcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRcInZhbGlkXCI6IHRydWVcblx0fTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHAodXNlck0sIHVzZXJZKSB7XG5cdHZhciBkID0gbmV3IERhdGUoKTtcblx0dmFyIG1vbnRoID0gZC5nZXRNb250aCgpO1xuXHR2YXIgeWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcblxuXHRpZiAodXNlck0ubGVuZ3RoID09PSAwIHx8IHVzZXJZLmxlbmd0aCA9PT0gMCB8fCB1c2VyTS5yZXBsYWNlKC9cXEQvZywnJykubGVuZ3RoID09PSAwIHx8IHVzZXJZLnJlcGxhY2UoL1xcRC9nLCcnKS5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0XCJtZXNzYWdlXCI6IG1lc3NhZ2VzLnJlcXVpcmVkLFxuXHRcdFx0XCJ2YWxpZFwiOiBmYWxzZVxuXHRcdH07XG5cdH1cblxuXHR1c2VyTSA9IHBhcnNlSW50KHVzZXJNLCAxMCk7XG5cdHVzZXJZID0gcGFyc2VJbnQoJzIwJyArICcnICsgdXNlclksIDEwKTtcblx0aWYgKHVzZXJNID4gMTIgfHwgdXNlck0gPCAxIHx8ICh1c2VyWSA8IHllYXIgfHwgKHVzZXJZID09PSB5ZWFyICYmIHVzZXJNIDwgbW9udGgpKSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRcIm1lc3NhZ2VcIjogbWVzc2FnZXMuaW52YWxpZEV4cGlyYXRpb24sXG5cdFx0XHRcInZhbGlkXCI6IGZhbHNlXG5cdFx0fTtcblx0fVxuXHRyZXR1cm4ge1xuXHRcdFwidmFsaWRcIjogdHJ1ZVxuXHR9O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNWVihDVlYpIHtcblx0aWYgKENWVi5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0XCJtZXNzYWdlXCI6IG1lc3NhZ2VzLnJlcXVpcmVkLFxuXHRcdFx0XCJ2YWxpZFwiOiBmYWxzZVxuXHRcdH07XG5cdH1cblx0aWYgKCFpc05hTihDVlYpICYmIChDVlYgPiA5OTk5IHx8IENWViA8IDEwMCkpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0XCJtZXNzYWdlXCI6IG1lc3NhZ2VzLmludmFsaWRDdnYsXG5cdFx0XHRcInZhbGlkXCI6IGZhbHNlXG5cdFx0fTtcblx0fVxuXHRyZXR1cm4ge1xuXHRcdFwidmFsaWRcIjogdHJ1ZVxuXHR9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0dmFsaWRhdGVDYXJkOiB2YWxpZGF0ZUNhcmQsXG5cdHZhbGlkYXRlRXhwOiB2YWxpZGF0ZUV4cCxcblx0dmFsaWRhdGVDVlY6IHZhbGlkYXRlQ1ZWLFxuXHRjYXJkRGF0YTogY2FyZERhdGFcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvY2MtdmFsaWRhdG9yL3ZhbGlkYXRpb24uanNcbiAqKiBtb2R1bGUgaWQgPSA3NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIiR7bnN9LWNvbnRhaW5lclxcXCI+XFxuXFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tcm93c1xcXCI+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tcm93XFxcIj5cXG5cXHRcXHRcXHQ8bGFiZWw+TmFtZSBvbiBDYXJkPC9sYWJlbD5cXG5cXHRcXHRcXHQ8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcIklCTUNoYXQtaW5wdXQtY29sb3JzXFxcIiBuYW1lPVxcXCJjY19mdWxsX25hbWVcXFwiIC8+XFxuXFx0XFx0XFx0PGRpdiBkYXRhLXZhbGlkYXRpb24tZm9yPVxcXCJjY19mdWxsX25hbWVcXFwiIGRhdGEtdmFsaWQ9XFxcInRydWVcXFwiPjwvZGl2PlxcblxcdFxcdDwvZGl2PlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LXJvd1xcXCI+XFxuXFx0XFx0XFx0PGxhYmVsPkNyZWRpdCBDYXJkIE51bWJlcjwvbGFiZWw+XFxuXFx0XFx0XFx0PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJJQk1DaGF0LWlucHV0LWNvbG9yc1xcXCIgbmFtZT1cXFwiY2NfbnVtYmVyXFxcIiAvPlxcblxcdFxcdFxcdDxkaXYgZGF0YS12YWxpZGF0aW9uLWZvcj1cXFwiY2NfbnVtYmVyXFxcIiBkYXRhLXZhbGlkPVxcXCJ0cnVlXFxcIj48L2Rpdj5cXG5cXHRcXHQ8L2Rpdj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1yb3dcXFwiPlxcblxcdFxcdFxcdDxsYWJlbD5FeHBpcmF0aW9uIERhdGU8L2xhYmVsPlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWNvbFxcXCI+XFxuXFx0XFx0XFx0XFx0PGlucHV0IGNsYXNzPVxcXCIke25zfS1kYXRlIElCTUNoYXQtaW5wdXQtY29sb3JzXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJjY19leHBfZGF0ZV9tb250aFxcXCIgLz5cXG5cXHRcXHRcXHRcXHQvXFxuXFx0XFx0XFx0XFx0PGlucHV0IGNsYXNzPVxcXCIke25zfS1kYXRlIElCTUNoYXQtaW5wdXQtY29sb3JzXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJjY19leHBfZGF0ZV95ZWFyXFxcIiAvPlxcblxcdFxcdFxcdFxcdDxkaXYgZGF0YS12YWxpZGF0aW9uLWZvcj1cXFwiY2NfZXhwX2RhdGVcXFwiIGRhdGEtdmFsaWQ9XFxcInRydWVcXFwiPjwvZGl2PlxcblxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdDwvZGl2PlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LXJvd1xcXCI+XFxuXFx0XFx0XFx0PGxhYmVsPkNWVjwvbGFiZWw+XFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tY29sXFxcIj5cXG5cXHRcXHRcXHRcXHQ8aW5wdXQgY2xhc3M9XFxcIiR7bnN9LWN2diBJQk1DaGF0LWlucHV0LWNvbG9yc1xcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiY2NfY29kZVxcXCIgLz5cXG5cXHRcXHRcXHRcXHQ8ZGl2IGRhdGEtdmFsaWRhdGlvbi1mb3I9XFxcImNjX2NvZGVcXFwiIGRhdGEtdmFsaWQ9XFxcInRydWVcXFwiPjwvZGl2PlxcblxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdDwvZGl2PlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LXJvdyAke25zfS1idXR0b25zXFxcIj5cXG5cXHRcXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCIke25zfS1jYW5jZWwgSUJNQ2hhdC1zZWNvbmRhcnktY29sb3JzXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cXHRcXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCIke25zfS1jb250aW51ZSBJQk1DaGF0LWlucHV0LWNvbG9yc1xcXCI+Q29udGludWU8L2J1dHRvbj5cXG5cXHRcXHQ8L2Rpdj5cXG5cXHQ8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9jYy12YWxpZGF0b3IvdGVtcGxhdGVzL2Jhc2UuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDc3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiFcbiAqIEBvdmVydmlldyBlczYtcHJvbWlzZSAtIGEgdGlueSBpbXBsZW1lbnRhdGlvbiBvZiBQcm9taXNlcy9BKy5cbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE0IFllaHVkYSBLYXR6LCBUb20gRGFsZSwgU3RlZmFuIFBlbm5lciBhbmQgY29udHJpYnV0b3JzIChDb252ZXJzaW9uIHRvIEVTNiBBUEkgYnkgSmFrZSBBcmNoaWJhbGQpXG4gKiBAbGljZW5zZSAgIExpY2Vuc2VkIHVuZGVyIE1JVCBsaWNlbnNlXG4gKiAgICAgICAgICAgIFNlZSBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vamFrZWFyY2hpYmFsZC9lczYtcHJvbWlzZS9tYXN0ZXIvTElDRU5TRVxuICogQHZlcnNpb24gICAzLjIuMVxuICovXG5cbihmdW5jdGlvbigpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkdXRpbHMkJG9iamVjdE9yRnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nIHx8ICh0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiYgeCAhPT0gbnVsbCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc0Z1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkdXRpbHMkJGlzTWF5YmVUaGVuYWJsZSh4KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHggPT09ICdvYmplY3QnICYmIHggIT09IG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSR1dGlscyQkX2lzQXJyYXk7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkdXRpbHMkJF9pc0FycmF5ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSR1dGlscyQkX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkdXRpbHMkJGlzQXJyYXkgPSBsaWIkZXM2JHByb21pc2UkdXRpbHMkJF9pc0FycmF5O1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkbGVuID0gMDtcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJHZlcnR4TmV4dDtcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGN1c3RvbVNjaGVkdWxlckZuO1xuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhc2FwID0gZnVuY3Rpb24gYXNhcChjYWxsYmFjaywgYXJnKSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkcXVldWVbbGliJGVzNiRwcm9taXNlJGFzYXAkJGxlbl0gPSBjYWxsYmFjaztcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZVtsaWIkZXM2JHByb21pc2UkYXNhcCQkbGVuICsgMV0gPSBhcmc7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkbGVuICs9IDI7XG4gICAgICBpZiAobGliJGVzNiRwcm9taXNlJGFzYXAkJGxlbiA9PT0gMikge1xuICAgICAgICAvLyBJZiBsZW4gaXMgMiwgdGhhdCBtZWFucyB0aGF0IHdlIG5lZWQgdG8gc2NoZWR1bGUgYW4gYXN5bmMgZmx1c2guXG4gICAgICAgIC8vIElmIGFkZGl0aW9uYWwgY2FsbGJhY2tzIGFyZSBxdWV1ZWQgYmVmb3JlIHRoZSBxdWV1ZSBpcyBmbHVzaGVkLCB0aGV5XG4gICAgICAgIC8vIHdpbGwgYmUgcHJvY2Vzc2VkIGJ5IHRoaXMgZmx1c2ggdGhhdCB3ZSBhcmUgc2NoZWR1bGluZy5cbiAgICAgICAgaWYgKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRjdXN0b21TY2hlZHVsZXJGbikge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRjdXN0b21TY2hlZHVsZXJGbihsaWIkZXM2JHByb21pc2UkYXNhcCQkZmx1c2gpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzY2hlZHVsZUZsdXNoKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2V0U2NoZWR1bGVyKHNjaGVkdWxlRm4pIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRjdXN0b21TY2hlZHVsZXJGbiA9IHNjaGVkdWxlRm47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJHNldEFzYXAoYXNhcEZuKSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXNhcCA9IGFzYXBGbjtcbiAgICB9XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGJyb3dzZXJXaW5kb3cgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpID8gd2luZG93IDogdW5kZWZpbmVkO1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkYnJvd3Nlckdsb2JhbCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRicm93c2VyV2luZG93IHx8IHt9O1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIgPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkYnJvd3Nlckdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRicm93c2VyR2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRpc05vZGUgPSB0eXBlb2Ygc2VsZiA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHt9LnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJztcblxuICAgIC8vIHRlc3QgZm9yIHdlYiB3b3JrZXIgYnV0IG5vdCBpbiBJRTEwXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRpc1dvcmtlciA9IHR5cGVvZiBVaW50OENsYW1wZWRBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIHR5cGVvZiBpbXBvcnRTY3JpcHRzICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgdHlwZW9mIE1lc3NhZ2VDaGFubmVsICE9PSAndW5kZWZpbmVkJztcblxuICAgIC8vIG5vZGVcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlTmV4dFRpY2soKSB7XG4gICAgICAvLyBub2RlIHZlcnNpb24gMC4xMC54IGRpc3BsYXlzIGEgZGVwcmVjYXRpb24gd2FybmluZyB3aGVuIG5leHRUaWNrIGlzIHVzZWQgcmVjdXJzaXZlbHlcbiAgICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vY3Vqb2pzL3doZW4vaXNzdWVzLzQxMCBmb3IgZGV0YWlsc1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRmbHVzaCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIHZlcnR4XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZVZlcnR4VGltZXIoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR2ZXJ0eE5leHQobGliJGVzNiRwcm9taXNlJGFzYXAkJGZsdXNoKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZU11dGF0aW9uT2JzZXJ2ZXIoKSB7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgbGliJGVzNiRwcm9taXNlJGFzYXAkJEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRmbHVzaCk7XG4gICAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgIG9ic2VydmVyLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIG5vZGUuZGF0YSA9IChpdGVyYXRpb25zID0gKytpdGVyYXRpb25zICUgMik7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIHdlYiB3b3JrZXJcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlTWVzc2FnZUNoYW5uZWwoKSB7XG4gICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkZmx1c2g7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlU2V0VGltZW91dCgpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgc2V0VGltZW91dChsaWIkZXM2JHByb21pc2UkYXNhcCQkZmx1c2gsIDEpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJHF1ZXVlID0gbmV3IEFycmF5KDEwMDApO1xuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRmbHVzaCgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGliJGVzNiRwcm9taXNlJGFzYXAkJGxlbjsgaSs9Mikge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkcXVldWVbaV07XG4gICAgICAgIHZhciBhcmcgPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkcXVldWVbaSsxXTtcblxuICAgICAgICBjYWxsYmFjayhhcmcpO1xuXG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZVtpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHF1ZXVlW2krMV0gPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW4gPSAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhdHRlbXB0VmVydHgoKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgciA9IHJlcXVpcmU7XG4gICAgICAgIHZhciB2ZXJ0eCA9IHIoJ3ZlcnR4Jyk7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR2ZXJ0eE5leHQgPSB2ZXJ0eC5ydW5Pbkxvb3AgfHwgdmVydHgucnVuT25Db250ZXh0O1xuICAgICAgICByZXR1cm4gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZVZlcnR4VGltZXIoKTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZVNldFRpbWVvdXQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJHNjaGVkdWxlRmx1c2g7XG4gICAgLy8gRGVjaWRlIHdoYXQgYXN5bmMgbWV0aG9kIHRvIHVzZSB0byB0cmlnZ2VyaW5nIHByb2Nlc3Npbmcgb2YgcXVldWVkIGNhbGxiYWNrczpcbiAgICBpZiAobGliJGVzNiRwcm9taXNlJGFzYXAkJGlzTm9kZSkge1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHNjaGVkdWxlRmx1c2ggPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlTmV4dFRpY2soKTtcbiAgICB9IGVsc2UgaWYgKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRCcm93c2VyTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHNjaGVkdWxlRmx1c2ggPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlTXV0YXRpb25PYnNlcnZlcigpO1xuICAgIH0gZWxzZSBpZiAobGliJGVzNiRwcm9taXNlJGFzYXAkJGlzV29ya2VyKSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIH0gZWxzZSBpZiAobGliJGVzNiRwcm9taXNlJGFzYXAkJGJyb3dzZXJXaW5kb3cgPT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHNjaGVkdWxlRmx1c2ggPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXR0ZW1wdFZlcnR4KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzY2hlZHVsZUZsdXNoID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZVNldFRpbWVvdXQoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHRoZW4kJHRoZW4ob25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pIHtcbiAgICAgIHZhciBwYXJlbnQgPSB0aGlzO1xuXG4gICAgICB2YXIgY2hpbGQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRub29wKTtcblxuICAgICAgaWYgKGNoaWxkW2xpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBST01JU0VfSURdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbWFrZVByb21pc2UoY2hpbGQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3RhdGUgPSBwYXJlbnQuX3N0YXRlO1xuXG4gICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzW3N0YXRlIC0gMV07XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhc2FwKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaW52b2tlQ2FsbGJhY2soc3RhdGUsIGNoaWxkLCBjYWxsYmFjaywgcGFyZW50Ll9yZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHN1YnNjcmliZShwYXJlbnQsIGNoaWxkLCBvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSR0aGVuJCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJHRoZW4kJHRoZW47XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVzb2x2ZSQkcmVzb2x2ZShvYmplY3QpIHtcbiAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuXG4gICAgICBpZiAob2JqZWN0ICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdC5jb25zdHJ1Y3RvciA9PT0gQ29uc3RydWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgIH1cblxuICAgICAgdmFyIHByb21pc2UgPSBuZXcgQ29uc3RydWN0b3IobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbm9vcCk7XG4gICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIG9iamVjdCk7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlc29sdmUkJGRlZmF1bHQgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZXNvbHZlJCRyZXNvbHZlO1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQUk9NSVNFX0lEID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDE2KTtcblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3AoKSB7fVxuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBFTkRJTkcgICA9IHZvaWQgMDtcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRlVMRklMTEVEID0gMTtcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUkVKRUNURUQgID0gMjtcblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUiA9IG5ldyBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRFcnJvck9iamVjdCgpO1xuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkc2VsZkZ1bGZpbGxtZW50KCkge1xuICAgICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoXCJZb3UgY2Fubm90IHJlc29sdmUgYSBwcm9taXNlIHdpdGggaXRzZWxmXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGNhbm5vdFJldHVybk93bigpIHtcbiAgICAgIHJldHVybiBuZXcgVHlwZUVycm9yKCdBIHByb21pc2VzIGNhbGxiYWNrIGNhbm5vdCByZXR1cm4gdGhhdCBzYW1lIHByb21pc2UuJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZ2V0VGhlbihwcm9taXNlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuO1xuICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUi5lcnJvciA9IGVycm9yO1xuICAgICAgICByZXR1cm4gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkdHJ5VGhlbih0aGVuLCB2YWx1ZSwgZnVsZmlsbG1lbnRIYW5kbGVyLCByZWplY3Rpb25IYW5kbGVyKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGZ1bGZpbGxtZW50SGFuZGxlciwgcmVqZWN0aW9uSGFuZGxlcik7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaGFuZGxlRm9yZWlnblRoZW5hYmxlKHByb21pc2UsIHRoZW5hYmxlLCB0aGVuKSB7XG4gICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAoZnVuY3Rpb24ocHJvbWlzZSkge1xuICAgICAgICB2YXIgc2VhbGVkID0gZmFsc2U7XG4gICAgICAgIHZhciBlcnJvciA9IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHRyeVRoZW4odGhlbiwgdGhlbmFibGUsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKHNlYWxlZCkgeyByZXR1cm47IH1cbiAgICAgICAgICBzZWFsZWQgPSB0cnVlO1xuICAgICAgICAgIGlmICh0aGVuYWJsZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAgIGlmIChzZWFsZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgc2VhbGVkID0gdHJ1ZTtcblxuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgICAgICB9LCAnU2V0dGxlOiAnICsgKHByb21pc2UuX2xhYmVsIHx8ICcgdW5rbm93biBwcm9taXNlJykpO1xuXG4gICAgICAgIGlmICghc2VhbGVkICYmIGVycm9yKSB7XG4gICAgICAgICAgc2VhbGVkID0gdHJ1ZTtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9LCBwcm9taXNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRoYW5kbGVPd25UaGVuYWJsZShwcm9taXNlLCB0aGVuYWJsZSkge1xuICAgICAgaWYgKHRoZW5hYmxlLl9zdGF0ZSA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRlVMRklMTEVEKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdGhlbmFibGUuX3Jlc3VsdCk7XG4gICAgICB9IGVsc2UgaWYgKHRoZW5hYmxlLl9zdGF0ZSA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUkVKRUNURUQpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHRoZW5hYmxlLl9yZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkc3Vic2NyaWJlKHRoZW5hYmxlLCB1bmRlZmluZWQsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUsIHRoZW4pIHtcbiAgICAgIGlmIChtYXliZVRoZW5hYmxlLmNvbnN0cnVjdG9yID09PSBwcm9taXNlLmNvbnN0cnVjdG9yICYmXG4gICAgICAgICAgdGhlbiA9PT0gbGliJGVzNiRwcm9taXNlJHRoZW4kJGRlZmF1bHQgJiZcbiAgICAgICAgICBjb25zdHJ1Y3Rvci5yZXNvbHZlID09PSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZXNvbHZlJCRkZWZhdWx0KSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZU93blRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoZW4gPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SLmVycm9yKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGVuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICAgICAgICB9IGVsc2UgaWYgKGxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNGdW5jdGlvbih0aGVuKSkge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZUZvcmVpZ25UaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlLCB0aGVuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSkge1xuICAgICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRzZWxmRnVsZmlsbG1lbnQoKSk7XG4gICAgICB9IGVsc2UgaWYgKGxpYiRlczYkcHJvbWlzZSR1dGlscyQkb2JqZWN0T3JGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaGFuZGxlTWF5YmVUaGVuYWJsZShwcm9taXNlLCB2YWx1ZSwgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZ2V0VGhlbih2YWx1ZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcHVibGlzaFJlamVjdGlvbihwcm9taXNlKSB7XG4gICAgICBpZiAocHJvbWlzZS5fb25lcnJvcikge1xuICAgICAgICBwcm9taXNlLl9vbmVycm9yKHByb21pc2UuX3Jlc3VsdCk7XG4gICAgICB9XG5cbiAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHB1Ymxpc2gocHJvbWlzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB2YWx1ZSkge1xuICAgICAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQRU5ESU5HKSB7IHJldHVybjsgfVxuXG4gICAgICBwcm9taXNlLl9yZXN1bHQgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3N0YXRlID0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRlVMRklMTEVEO1xuXG4gICAgICBpZiAocHJvbWlzZS5fc3Vic2NyaWJlcnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhc2FwKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHB1Ymxpc2gsIHByb21pc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZWFzb24pIHtcbiAgICAgIGlmIChwcm9taXNlLl9zdGF0ZSAhPT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUEVORElORykgeyByZXR1cm47IH1cbiAgICAgIHByb21pc2UuX3N0YXRlID0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUkVKRUNURUQ7XG4gICAgICBwcm9taXNlLl9yZXN1bHQgPSByZWFzb247XG5cbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhc2FwKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHB1Ymxpc2hSZWplY3Rpb24sIHByb21pc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHN1YnNjcmliZShwYXJlbnQsIGNoaWxkLCBvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbikge1xuICAgICAgdmFyIHN1YnNjcmliZXJzID0gcGFyZW50Ll9zdWJzY3JpYmVycztcbiAgICAgIHZhciBsZW5ndGggPSBzdWJzY3JpYmVycy5sZW5ndGg7XG5cbiAgICAgIHBhcmVudC5fb25lcnJvciA9IG51bGw7XG5cbiAgICAgIHN1YnNjcmliZXJzW2xlbmd0aF0gPSBjaGlsZDtcbiAgICAgIHN1YnNjcmliZXJzW2xlbmd0aCArIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEZVTEZJTExFRF0gPSBvbkZ1bGZpbGxtZW50O1xuICAgICAgc3Vic2NyaWJlcnNbbGVuZ3RoICsgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUkVKRUNURURdICA9IG9uUmVqZWN0aW9uO1xuXG4gICAgICBpZiAobGVuZ3RoID09PSAwICYmIHBhcmVudC5fc3RhdGUpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcHVibGlzaCwgcGFyZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRwdWJsaXNoKHByb21pc2UpIHtcbiAgICAgIHZhciBzdWJzY3JpYmVycyA9IHByb21pc2UuX3N1YnNjcmliZXJzO1xuICAgICAgdmFyIHNldHRsZWQgPSBwcm9taXNlLl9zdGF0ZTtcblxuICAgICAgaWYgKHN1YnNjcmliZXJzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm47IH1cblxuICAgICAgdmFyIGNoaWxkLCBjYWxsYmFjaywgZGV0YWlsID0gcHJvbWlzZS5fcmVzdWx0O1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN1YnNjcmliZXJzLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgICAgIGNoaWxkID0gc3Vic2NyaWJlcnNbaV07XG4gICAgICAgIGNhbGxiYWNrID0gc3Vic2NyaWJlcnNbaSArIHNldHRsZWRdO1xuXG4gICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGludm9rZUNhbGxiYWNrKHNldHRsZWQsIGNoaWxkLCBjYWxsYmFjaywgZGV0YWlsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFjayhkZXRhaWwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByb21pc2UuX3N1YnNjcmliZXJzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRXJyb3JPYmplY3QoKSB7XG4gICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkVFJZX0NBVENIX0VSUk9SID0gbmV3IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEVycm9yT2JqZWN0KCk7XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCR0cnlDYXRjaChjYWxsYmFjaywgZGV0YWlsKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZGV0YWlsKTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1IuZXJyb3IgPSBlO1xuICAgICAgICByZXR1cm4gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkVFJZX0NBVENIX0VSUk9SO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGludm9rZUNhbGxiYWNrKHNldHRsZWQsIHByb21pc2UsIGNhbGxiYWNrLCBkZXRhaWwpIHtcbiAgICAgIHZhciBoYXNDYWxsYmFjayA9IGxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNGdW5jdGlvbihjYWxsYmFjayksXG4gICAgICAgICAgdmFsdWUsIGVycm9yLCBzdWNjZWVkZWQsIGZhaWxlZDtcblxuICAgICAgaWYgKGhhc0NhbGxiYWNrKSB7XG4gICAgICAgIHZhbHVlID0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkdHJ5Q2F0Y2goY2FsbGJhY2ssIGRldGFpbCk7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1IpIHtcbiAgICAgICAgICBmYWlsZWQgPSB0cnVlO1xuICAgICAgICAgIGVycm9yID0gdmFsdWUuZXJyb3I7XG4gICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN1Y2NlZWRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkY2Fubm90UmV0dXJuT3duKCkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IGRldGFpbDtcbiAgICAgICAgc3VjY2VlZGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQRU5ESU5HKSB7XG4gICAgICAgIC8vIG5vb3BcbiAgICAgIH0gZWxzZSBpZiAoaGFzQ2FsbGJhY2sgJiYgc3VjY2VlZGVkKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChmYWlsZWQpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGVycm9yKTtcbiAgICAgIH0gZWxzZSBpZiAoc2V0dGxlZCA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRlVMRklMTEVEKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChzZXR0bGVkID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGluaXRpYWxpemVQcm9taXNlKHByb21pc2UsIHJlc29sdmVyKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXNvbHZlcihmdW5jdGlvbiByZXNvbHZlUHJvbWlzZSh2YWx1ZSl7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIHJlamVjdFByb21pc2UocmVhc29uKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaWQgPSAwO1xuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5leHRJZCgpIHtcbiAgICAgIHJldHVybiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRpZCsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG1ha2VQcm9taXNlKHByb21pc2UpIHtcbiAgICAgIHByb21pc2VbbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUFJPTUlTRV9JRF0gPSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRpZCsrO1xuICAgICAgcHJvbWlzZS5fc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICBwcm9taXNlLl9yZXN1bHQgPSB1bmRlZmluZWQ7XG4gICAgICBwcm9taXNlLl9zdWJzY3JpYmVycyA9IFtdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJGFsbCQkYWxsKGVudHJpZXMpIHtcbiAgICAgIHJldHVybiBuZXcgbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJGRlZmF1bHQodGhpcywgZW50cmllcykucHJvbWlzZTtcbiAgICB9XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJGFsbCQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJGFsbCQkYWxsO1xuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJhY2UkJHJhY2UoZW50cmllcykge1xuICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cbiAgICAgIGlmICghbGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc0FycmF5KGVudHJpZXMpKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29uc3RydWN0b3IoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYW4gYXJyYXkgdG8gcmFjZS4nKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3RvcihmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICB2YXIgbGVuZ3RoID0gZW50cmllcy5sZW5ndGg7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgQ29uc3RydWN0b3IucmVzb2x2ZShlbnRyaWVzW2ldKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJhY2UkJGRlZmF1bHQgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyYWNlJCRyYWNlO1xuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlamVjdCQkcmVqZWN0KHJlYXNvbikge1xuICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG4gICAgICB2YXIgcHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3RvcihsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRub29wKTtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZWplY3QkJGRlZmF1bHQgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZWplY3QkJHJlamVjdDtcblxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHByb21pc2UkJG5lZWRzUmVzb2x2ZXIoKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGEgcmVzb2x2ZXIgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBwcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHByb21pc2UkJG5lZWRzTmV3KCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Byb21pc2UnOiBQbGVhc2UgdXNlIHRoZSAnbmV3JyBvcGVyYXRvciwgdGhpcyBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLlwiKTtcbiAgICB9XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJGRlZmF1bHQgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZTtcbiAgICAvKipcbiAgICAgIFByb21pc2Ugb2JqZWN0cyByZXByZXNlbnQgdGhlIGV2ZW50dWFsIHJlc3VsdCBvZiBhbiBhc3luY2hyb25vdXMgb3BlcmF0aW9uLiBUaGVcbiAgICAgIHByaW1hcnkgd2F5IG9mIGludGVyYWN0aW5nIHdpdGggYSBwcm9taXNlIGlzIHRocm91Z2ggaXRzIGB0aGVuYCBtZXRob2QsIHdoaWNoXG4gICAgICByZWdpc3RlcnMgY2FsbGJhY2tzIHRvIHJlY2VpdmUgZWl0aGVyIGEgcHJvbWlzZSdzIGV2ZW50dWFsIHZhbHVlIG9yIHRoZSByZWFzb25cbiAgICAgIHdoeSB0aGUgcHJvbWlzZSBjYW5ub3QgYmUgZnVsZmlsbGVkLlxuXG4gICAgICBUZXJtaW5vbG9neVxuICAgICAgLS0tLS0tLS0tLS1cblxuICAgICAgLSBgcHJvbWlzZWAgaXMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uIHdpdGggYSBgdGhlbmAgbWV0aG9kIHdob3NlIGJlaGF2aW9yIGNvbmZvcm1zIHRvIHRoaXMgc3BlY2lmaWNhdGlvbi5cbiAgICAgIC0gYHRoZW5hYmxlYCBpcyBhbiBvYmplY3Qgb3IgZnVuY3Rpb24gdGhhdCBkZWZpbmVzIGEgYHRoZW5gIG1ldGhvZC5cbiAgICAgIC0gYHZhbHVlYCBpcyBhbnkgbGVnYWwgSmF2YVNjcmlwdCB2YWx1ZSAoaW5jbHVkaW5nIHVuZGVmaW5lZCwgYSB0aGVuYWJsZSwgb3IgYSBwcm9taXNlKS5cbiAgICAgIC0gYGV4Y2VwdGlvbmAgaXMgYSB2YWx1ZSB0aGF0IGlzIHRocm93biB1c2luZyB0aGUgdGhyb3cgc3RhdGVtZW50LlxuICAgICAgLSBgcmVhc29uYCBpcyBhIHZhbHVlIHRoYXQgaW5kaWNhdGVzIHdoeSBhIHByb21pc2Ugd2FzIHJlamVjdGVkLlxuICAgICAgLSBgc2V0dGxlZGAgdGhlIGZpbmFsIHJlc3Rpbmcgc3RhdGUgb2YgYSBwcm9taXNlLCBmdWxmaWxsZWQgb3IgcmVqZWN0ZWQuXG5cbiAgICAgIEEgcHJvbWlzZSBjYW4gYmUgaW4gb25lIG9mIHRocmVlIHN0YXRlczogcGVuZGluZywgZnVsZmlsbGVkLCBvciByZWplY3RlZC5cblxuICAgICAgUHJvbWlzZXMgdGhhdCBhcmUgZnVsZmlsbGVkIGhhdmUgYSBmdWxmaWxsbWVudCB2YWx1ZSBhbmQgYXJlIGluIHRoZSBmdWxmaWxsZWRcbiAgICAgIHN0YXRlLiAgUHJvbWlzZXMgdGhhdCBhcmUgcmVqZWN0ZWQgaGF2ZSBhIHJlamVjdGlvbiByZWFzb24gYW5kIGFyZSBpbiB0aGVcbiAgICAgIHJlamVjdGVkIHN0YXRlLiAgQSBmdWxmaWxsbWVudCB2YWx1ZSBpcyBuZXZlciBhIHRoZW5hYmxlLlxuXG4gICAgICBQcm9taXNlcyBjYW4gYWxzbyBiZSBzYWlkIHRvICpyZXNvbHZlKiBhIHZhbHVlLiAgSWYgdGhpcyB2YWx1ZSBpcyBhbHNvIGFcbiAgICAgIHByb21pc2UsIHRoZW4gdGhlIG9yaWdpbmFsIHByb21pc2UncyBzZXR0bGVkIHN0YXRlIHdpbGwgbWF0Y2ggdGhlIHZhbHVlJ3NcbiAgICAgIHNldHRsZWQgc3RhdGUuICBTbyBhIHByb21pc2UgdGhhdCAqcmVzb2x2ZXMqIGEgcHJvbWlzZSB0aGF0IHJlamVjdHMgd2lsbFxuICAgICAgaXRzZWxmIHJlamVjdCwgYW5kIGEgcHJvbWlzZSB0aGF0ICpyZXNvbHZlcyogYSBwcm9taXNlIHRoYXQgZnVsZmlsbHMgd2lsbFxuICAgICAgaXRzZWxmIGZ1bGZpbGwuXG5cblxuICAgICAgQmFzaWMgVXNhZ2U6XG4gICAgICAtLS0tLS0tLS0tLS1cblxuICAgICAgYGBganNcbiAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIC8vIG9uIHN1Y2Nlc3NcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG5cbiAgICAgICAgLy8gb24gZmFpbHVyZVxuICAgICAgICByZWplY3QocmVhc29uKTtcbiAgICAgIH0pO1xuXG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgLy8gb24gZnVsZmlsbG1lbnRcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAvLyBvbiByZWplY3Rpb25cbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEFkdmFuY2VkIFVzYWdlOlxuICAgICAgLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIFByb21pc2VzIHNoaW5lIHdoZW4gYWJzdHJhY3RpbmcgYXdheSBhc3luY2hyb25vdXMgaW50ZXJhY3Rpb25zIHN1Y2ggYXNcbiAgICAgIGBYTUxIdHRwUmVxdWVzdGBzLlxuXG4gICAgICBgYGBqc1xuICAgICAgZnVuY3Rpb24gZ2V0SlNPTih1cmwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCk7XG4gICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGhhbmRsZXI7XG4gICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgICB4aHIuc2VuZCgpO1xuXG4gICAgICAgICAgZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IHRoaXMuRE9ORSkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5yZXNwb25zZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignZ2V0SlNPTjogYCcgKyB1cmwgKyAnYCBmYWlsZWQgd2l0aCBzdGF0dXM6IFsnICsgdGhpcy5zdGF0dXMgKyAnXScpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBnZXRKU09OKCcvcG9zdHMuanNvbicpLnRoZW4oZnVuY3Rpb24oanNvbikge1xuICAgICAgICAvLyBvbiBmdWxmaWxsbWVudFxuICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIC8vIG9uIHJlamVjdGlvblxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgVW5saWtlIGNhbGxiYWNrcywgcHJvbWlzZXMgYXJlIGdyZWF0IGNvbXBvc2FibGUgcHJpbWl0aXZlcy5cblxuICAgICAgYGBganNcbiAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgZ2V0SlNPTignL3Bvc3RzJyksXG4gICAgICAgIGdldEpTT04oJy9jb21tZW50cycpXG4gICAgICBdKS50aGVuKGZ1bmN0aW9uKHZhbHVlcyl7XG4gICAgICAgIHZhbHVlc1swXSAvLyA9PiBwb3N0c0pTT05cbiAgICAgICAgdmFsdWVzWzFdIC8vID0+IGNvbW1lbnRzSlNPTlxuXG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBAY2xhc3MgUHJvbWlzZVxuICAgICAgQHBhcmFtIHtmdW5jdGlvbn0gcmVzb2x2ZXJcbiAgICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICAgIEBjb25zdHJ1Y3RvclxuICAgICovXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UocmVzb2x2ZXIpIHtcbiAgICAgIHRoaXNbbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUFJPTUlTRV9JRF0gPSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRuZXh0SWQoKTtcbiAgICAgIHRoaXMuX3Jlc3VsdCA9IHRoaXMuX3N0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3Vic2NyaWJlcnMgPSBbXTtcblxuICAgICAgaWYgKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3AgIT09IHJlc29sdmVyKSB7XG4gICAgICAgIHR5cGVvZiByZXNvbHZlciAhPT0gJ2Z1bmN0aW9uJyAmJiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkbmVlZHNSZXNvbHZlcigpO1xuICAgICAgICB0aGlzIGluc3RhbmNlb2YgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UgPyBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRpbml0aWFsaXplUHJvbWlzZSh0aGlzLCByZXNvbHZlcikgOiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkbmVlZHNOZXcoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5hbGwgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRhbGwkJGRlZmF1bHQ7XG4gICAgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UucmFjZSA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJhY2UkJGRlZmF1bHQ7XG4gICAgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UucmVzb2x2ZSA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlc29sdmUkJGRlZmF1bHQ7XG4gICAgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UucmVqZWN0ID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVqZWN0JCRkZWZhdWx0O1xuICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLl9zZXRTY2hlZHVsZXIgPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2V0U2NoZWR1bGVyO1xuICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLl9zZXRBc2FwID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHNldEFzYXA7XG4gICAgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UuX2FzYXAgPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXNhcDtcblxuICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLnByb3RvdHlwZSA9IHtcbiAgICAgIGNvbnN0cnVjdG9yOiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZSxcblxuICAgIC8qKlxuICAgICAgVGhlIHByaW1hcnkgd2F5IG9mIGludGVyYWN0aW5nIHdpdGggYSBwcm9taXNlIGlzIHRocm91Z2ggaXRzIGB0aGVuYCBtZXRob2QsXG4gICAgICB3aGljaCByZWdpc3RlcnMgY2FsbGJhY2tzIHRvIHJlY2VpdmUgZWl0aGVyIGEgcHJvbWlzZSdzIGV2ZW50dWFsIHZhbHVlIG9yIHRoZVxuICAgICAgcmVhc29uIHdoeSB0aGUgcHJvbWlzZSBjYW5ub3QgYmUgZnVsZmlsbGVkLlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uKHVzZXIpe1xuICAgICAgICAvLyB1c2VyIGlzIGF2YWlsYWJsZVxuICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgICAgLy8gdXNlciBpcyB1bmF2YWlsYWJsZSwgYW5kIHlvdSBhcmUgZ2l2ZW4gdGhlIHJlYXNvbiB3aHlcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIENoYWluaW5nXG4gICAgICAtLS0tLS0tLVxuXG4gICAgICBUaGUgcmV0dXJuIHZhbHVlIG9mIGB0aGVuYCBpcyBpdHNlbGYgYSBwcm9taXNlLiAgVGhpcyBzZWNvbmQsICdkb3duc3RyZWFtJ1xuICAgICAgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZpcnN0IHByb21pc2UncyBmdWxmaWxsbWVudFxuICAgICAgb3IgcmVqZWN0aW9uIGhhbmRsZXIsIG9yIHJlamVjdGVkIGlmIHRoZSBoYW5kbGVyIHRocm93cyBhbiBleGNlcHRpb24uXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIHVzZXIubmFtZTtcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgcmV0dXJuICdkZWZhdWx0IG5hbWUnO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAodXNlck5hbWUpIHtcbiAgICAgICAgLy8gSWYgYGZpbmRVc2VyYCBmdWxmaWxsZWQsIGB1c2VyTmFtZWAgd2lsbCBiZSB0aGUgdXNlcidzIG5hbWUsIG90aGVyd2lzZSBpdFxuICAgICAgICAvLyB3aWxsIGJlIGAnZGVmYXVsdCBuYW1lJ2BcbiAgICAgIH0pO1xuXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3VuZCB1c2VyLCBidXQgc3RpbGwgdW5oYXBweScpO1xuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BmaW5kVXNlcmAgcmVqZWN0ZWQgYW5kIHdlJ3JlIHVuaGFwcHknKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIC8vIG5ldmVyIHJlYWNoZWRcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgLy8gaWYgYGZpbmRVc2VyYCBmdWxmaWxsZWQsIGByZWFzb25gIHdpbGwgYmUgJ0ZvdW5kIHVzZXIsIGJ1dCBzdGlsbCB1bmhhcHB5Jy5cbiAgICAgICAgLy8gSWYgYGZpbmRVc2VyYCByZWplY3RlZCwgYHJlYXNvbmAgd2lsbCBiZSAnYGZpbmRVc2VyYCByZWplY3RlZCBhbmQgd2UncmUgdW5oYXBweScuXG4gICAgICB9KTtcbiAgICAgIGBgYFxuICAgICAgSWYgdGhlIGRvd25zdHJlYW0gcHJvbWlzZSBkb2VzIG5vdCBzcGVjaWZ5IGEgcmVqZWN0aW9uIGhhbmRsZXIsIHJlamVjdGlvbiByZWFzb25zIHdpbGwgYmUgcHJvcGFnYXRlZCBmdXJ0aGVyIGRvd25zdHJlYW0uXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFBlZGFnb2dpY2FsRXhjZXB0aW9uKCdVcHN0cmVhbSBlcnJvcicpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy8gbmV2ZXIgcmVhY2hlZFxuICAgICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy8gbmV2ZXIgcmVhY2hlZFxuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAvLyBUaGUgYFBlZGdhZ29jaWFsRXhjZXB0aW9uYCBpcyBwcm9wYWdhdGVkIGFsbCB0aGUgd2F5IGRvd24gdG8gaGVyZVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQXNzaW1pbGF0aW9uXG4gICAgICAtLS0tLS0tLS0tLS1cblxuICAgICAgU29tZXRpbWVzIHRoZSB2YWx1ZSB5b3Ugd2FudCB0byBwcm9wYWdhdGUgdG8gYSBkb3duc3RyZWFtIHByb21pc2UgY2FuIG9ubHkgYmVcbiAgICAgIHJldHJpZXZlZCBhc3luY2hyb25vdXNseS4gVGhpcyBjYW4gYmUgYWNoaWV2ZWQgYnkgcmV0dXJuaW5nIGEgcHJvbWlzZSBpbiB0aGVcbiAgICAgIGZ1bGZpbGxtZW50IG9yIHJlamVjdGlvbiBoYW5kbGVyLiBUaGUgZG93bnN0cmVhbSBwcm9taXNlIHdpbGwgdGhlbiBiZSBwZW5kaW5nXG4gICAgICB1bnRpbCB0aGUgcmV0dXJuZWQgcHJvbWlzZSBpcyBzZXR0bGVkLiBUaGlzIGlzIGNhbGxlZCAqYXNzaW1pbGF0aW9uKi5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICByZXR1cm4gZmluZENvbW1lbnRzQnlBdXRob3IodXNlcik7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChjb21tZW50cykge1xuICAgICAgICAvLyBUaGUgdXNlcidzIGNvbW1lbnRzIGFyZSBub3cgYXZhaWxhYmxlXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBJZiB0aGUgYXNzaW1saWF0ZWQgcHJvbWlzZSByZWplY3RzLCB0aGVuIHRoZSBkb3duc3RyZWFtIHByb21pc2Ugd2lsbCBhbHNvIHJlamVjdC5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICByZXR1cm4gZmluZENvbW1lbnRzQnlBdXRob3IodXNlcik7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChjb21tZW50cykge1xuICAgICAgICAvLyBJZiBgZmluZENvbW1lbnRzQnlBdXRob3JgIGZ1bGZpbGxzLCB3ZSdsbCBoYXZlIHRoZSB2YWx1ZSBoZXJlXG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIC8vIElmIGBmaW5kQ29tbWVudHNCeUF1dGhvcmAgcmVqZWN0cywgd2UnbGwgaGF2ZSB0aGUgcmVhc29uIGhlcmVcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIFNpbXBsZSBFeGFtcGxlXG4gICAgICAtLS0tLS0tLS0tLS0tLVxuXG4gICAgICBTeW5jaHJvbm91cyBFeGFtcGxlXG5cbiAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc3VsdCA9IGZpbmRSZXN1bHQoKTtcbiAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgfVxuICAgICAgYGBgXG5cbiAgICAgIEVycmJhY2sgRXhhbXBsZVxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFJlc3VsdChmdW5jdGlvbihyZXN1bHQsIGVycil7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAvLyBmYWlsdXJlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBQcm9taXNlIEV4YW1wbGU7XG5cbiAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgIGZpbmRSZXN1bHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XG4gICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAgIC8vIGZhaWx1cmVcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEFkdmFuY2VkIEV4YW1wbGVcbiAgICAgIC0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIFN5bmNocm9ub3VzIEV4YW1wbGVcblxuICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgdmFyIGF1dGhvciwgYm9va3M7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGF1dGhvciA9IGZpbmRBdXRob3IoKTtcbiAgICAgICAgYm9va3MgID0gZmluZEJvb2tzQnlBdXRob3IoYXV0aG9yKTtcbiAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgfVxuICAgICAgYGBgXG5cbiAgICAgIEVycmJhY2sgRXhhbXBsZVxuXG4gICAgICBgYGBqc1xuXG4gICAgICBmdW5jdGlvbiBmb3VuZEJvb2tzKGJvb2tzKSB7XG5cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZmFpbHVyZShyZWFzb24pIHtcblxuICAgICAgfVxuXG4gICAgICBmaW5kQXV0aG9yKGZ1bmN0aW9uKGF1dGhvciwgZXJyKXtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIGZhaWx1cmUoZXJyKTtcbiAgICAgICAgICAvLyBmYWlsdXJlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZpbmRCb29va3NCeUF1dGhvcihhdXRob3IsIGZ1bmN0aW9uKGJvb2tzLCBlcnIpIHtcbiAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGZhaWx1cmUoZXJyKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgZm91bmRCb29rcyhib29rcyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgICAgICAgICAgICAgIGZhaWx1cmUocmVhc29uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIGZhaWx1cmUoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBQcm9taXNlIEV4YW1wbGU7XG5cbiAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgIGZpbmRBdXRob3IoKS5cbiAgICAgICAgdGhlbihmaW5kQm9va3NCeUF1dGhvcikuXG4gICAgICAgIHRoZW4oZnVuY3Rpb24oYm9va3Mpe1xuICAgICAgICAgIC8vIGZvdW5kIGJvb2tzXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbihyZWFzb24pe1xuICAgICAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQG1ldGhvZCB0aGVuXG4gICAgICBAcGFyYW0ge0Z1bmN0aW9ufSBvbkZ1bGZpbGxlZFxuICAgICAgQHBhcmFtIHtGdW5jdGlvbn0gb25SZWplY3RlZFxuICAgICAgVXNlZnVsIGZvciB0b29saW5nLlxuICAgICAgQHJldHVybiB7UHJvbWlzZX1cbiAgICAqL1xuICAgICAgdGhlbjogbGliJGVzNiRwcm9taXNlJHRoZW4kJGRlZmF1bHQsXG5cbiAgICAvKipcbiAgICAgIGBjYXRjaGAgaXMgc2ltcGx5IHN1Z2FyIGZvciBgdGhlbih1bmRlZmluZWQsIG9uUmVqZWN0aW9uKWAgd2hpY2ggbWFrZXMgaXQgdGhlIHNhbWVcbiAgICAgIGFzIHRoZSBjYXRjaCBibG9jayBvZiBhIHRyeS9jYXRjaCBzdGF0ZW1lbnQuXG5cbiAgICAgIGBgYGpzXG4gICAgICBmdW5jdGlvbiBmaW5kQXV0aG9yKCl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGRuJ3QgZmluZCB0aGF0IGF1dGhvcicpO1xuICAgICAgfVxuXG4gICAgICAvLyBzeW5jaHJvbm91c1xuICAgICAgdHJ5IHtcbiAgICAgICAgZmluZEF1dGhvcigpO1xuICAgICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICAgIH1cblxuICAgICAgLy8gYXN5bmMgd2l0aCBwcm9taXNlc1xuICAgICAgZmluZEF1dGhvcigpLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBAbWV0aG9kIGNhdGNoXG4gICAgICBAcGFyYW0ge0Z1bmN0aW9ufSBvblJlamVjdGlvblxuICAgICAgVXNlZnVsIGZvciB0b29saW5nLlxuICAgICAgQHJldHVybiB7UHJvbWlzZX1cbiAgICAqL1xuICAgICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGlvbik7XG4gICAgICB9XG4gICAgfTtcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJGRlZmF1bHQgPSBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkRW51bWVyYXRvcjtcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkRW51bWVyYXRvcihDb25zdHJ1Y3RvciwgaW5wdXQpIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlQ29uc3RydWN0b3IgPSBDb25zdHJ1Y3RvcjtcbiAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3RvcihsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRub29wKTtcblxuICAgICAgaWYgKCF0aGlzLnByb21pc2VbbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUFJPTUlTRV9JRF0pIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbWFrZVByb21pc2UodGhpcy5wcm9taXNlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNBcnJheShpbnB1dCkpIHtcbiAgICAgICAgdGhpcy5faW5wdXQgICAgID0gaW5wdXQ7XG4gICAgICAgIHRoaXMubGVuZ3RoICAgICA9IGlucHV0Lmxlbmd0aDtcbiAgICAgICAgdGhpcy5fcmVtYWluaW5nID0gaW5wdXQubGVuZ3RoO1xuXG4gICAgICAgIHRoaXMuX3Jlc3VsdCA9IG5ldyBBcnJheSh0aGlzLmxlbmd0aCk7XG5cbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbCh0aGlzLnByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5sZW5ndGggPSB0aGlzLmxlbmd0aCB8fCAwO1xuICAgICAgICAgIHRoaXMuX2VudW1lcmF0ZSgpO1xuICAgICAgICAgIGlmICh0aGlzLl9yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwodGhpcy5wcm9taXNlLCB0aGlzLl9yZXN1bHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHRoaXMucHJvbWlzZSwgbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJHZhbGlkYXRpb25FcnJvcigpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkdmFsaWRhdGlvbkVycm9yKCkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignQXJyYXkgTWV0aG9kcyBtdXN0IGJlIHByb3ZpZGVkIGFuIEFycmF5Jyk7XG4gICAgfVxuXG4gICAgbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl9lbnVtZXJhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBsZW5ndGggID0gdGhpcy5sZW5ndGg7XG4gICAgICB2YXIgaW5wdXQgICA9IHRoaXMuX2lucHV0O1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgdGhpcy5fc3RhdGUgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBFTkRJTkcgJiYgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuX2VhY2hFbnRyeShpbnB1dFtpXSwgaSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fZWFjaEVudHJ5ID0gZnVuY3Rpb24oZW50cnksIGkpIHtcbiAgICAgIHZhciBjID0gdGhpcy5faW5zdGFuY2VDb25zdHJ1Y3RvcjtcbiAgICAgIHZhciByZXNvbHZlID0gYy5yZXNvbHZlO1xuXG4gICAgICBpZiAocmVzb2x2ZSA9PT0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVzb2x2ZSQkZGVmYXVsdCkge1xuICAgICAgICB2YXIgdGhlbiA9IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGdldFRoZW4oZW50cnkpO1xuXG4gICAgICAgIGlmICh0aGVuID09PSBsaWIkZXM2JHByb21pc2UkdGhlbiQkZGVmYXVsdCAmJlxuICAgICAgICAgICAgZW50cnkuX3N0YXRlICE9PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQRU5ESU5HKSB7XG4gICAgICAgICAgdGhpcy5fc2V0dGxlZEF0KGVudHJ5Ll9zdGF0ZSwgaSwgZW50cnkuX3Jlc3VsdCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoZW4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLl9yZW1haW5pbmctLTtcbiAgICAgICAgICB0aGlzLl9yZXN1bHRbaV0gPSBlbnRyeTtcbiAgICAgICAgfSBlbHNlIGlmIChjID09PSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkZGVmYXVsdCkge1xuICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IGMobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbm9vcCk7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaGFuZGxlTWF5YmVUaGVuYWJsZShwcm9taXNlLCBlbnRyeSwgdGhlbik7XG4gICAgICAgICAgdGhpcy5fd2lsbFNldHRsZUF0KHByb21pc2UsIGkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3dpbGxTZXR0bGVBdChuZXcgYyhmdW5jdGlvbihyZXNvbHZlKSB7IHJlc29sdmUoZW50cnkpOyB9KSwgaSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3dpbGxTZXR0bGVBdChyZXNvbHZlKGVudHJ5KSwgaSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fc2V0dGxlZEF0ID0gZnVuY3Rpb24oc3RhdGUsIGksIHZhbHVlKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9IHRoaXMucHJvbWlzZTtcblxuICAgICAgaWYgKHByb21pc2UuX3N0YXRlID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQRU5ESU5HKSB7XG4gICAgICAgIHRoaXMuX3JlbWFpbmluZy0tO1xuXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUkVKRUNURUQpIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3Jlc3VsdFtpXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB0aGlzLl9yZXN1bHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX3dpbGxTZXR0bGVBdCA9IGZ1bmN0aW9uKHByb21pc2UsIGkpIHtcbiAgICAgIHZhciBlbnVtZXJhdG9yID0gdGhpcztcblxuICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkc3Vic2NyaWJlKHByb21pc2UsIHVuZGVmaW5lZCwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgZW51bWVyYXRvci5fc2V0dGxlZEF0KGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEZVTEZJTExFRCwgaSwgdmFsdWUpO1xuICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIGVudW1lcmF0b3IuX3NldHRsZWRBdChsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRCwgaSwgcmVhc29uKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHBvbHlmaWxsJCRwb2x5ZmlsbCgpIHtcbiAgICAgIHZhciBsb2NhbDtcblxuICAgICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgbG9jYWwgPSBnbG9iYWw7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGxvY2FsID0gc2VsZjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgbG9jYWwgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdwb2x5ZmlsbCBmYWlsZWQgYmVjYXVzZSBnbG9iYWwgb2JqZWN0IGlzIHVuYXZhaWxhYmxlIGluIHRoaXMgZW52aXJvbm1lbnQnKTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBQID0gbG9jYWwuUHJvbWlzZTtcblxuICAgICAgaWYgKFAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFAucmVzb2x2ZSgpKSA9PT0gJ1tvYmplY3QgUHJvbWlzZV0nICYmICFQLmNhc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsb2NhbC5Qcm9taXNlID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkJGRlZmF1bHQ7XG4gICAgfVxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkcG9seWZpbGwkJGRlZmF1bHQgPSBsaWIkZXM2JHByb21pc2UkcG9seWZpbGwkJHBvbHlmaWxsO1xuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSR1bWQkJEVTNlByb21pc2UgPSB7XG4gICAgICAnUHJvbWlzZSc6IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRkZWZhdWx0LFxuICAgICAgJ3BvbHlmaWxsJzogbGliJGVzNiRwcm9taXNlJHBvbHlmaWxsJCRkZWZhdWx0XG4gICAgfTtcblxuICAgIC8qIGdsb2JhbCBkZWZpbmU6dHJ1ZSBtb2R1bGU6dHJ1ZSB3aW5kb3c6IHRydWUgKi9cbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmVbJ2FtZCddKSB7XG4gICAgICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBsaWIkZXM2JHByb21pc2UkdW1kJCRFUzZQcm9taXNlOyB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZVsnZXhwb3J0cyddKSB7XG4gICAgICBtb2R1bGVbJ2V4cG9ydHMnXSA9IGxpYiRlczYkcHJvbWlzZSR1bWQkJEVTNlByb21pc2U7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXNbJ0VTNlByb21pc2UnXSA9IGxpYiRlczYkcHJvbWlzZSR1bWQkJEVTNlByb21pc2U7XG4gICAgfVxuXG4gICAgbGliJGVzNiRwcm9taXNlJHBvbHlmaWxsJCRkZWZhdWx0KCk7XG59KS5jYWxsKHRoaXMpO1xuXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9lczYtcHJvbWlzZS9kaXN0L2VzNi1wcm9taXNlLmpzXG4gKiogbW9kdWxlIGlkID0gNzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA3OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0bW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDgwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiAoaWdub3JlZCkgKi9cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIHZlcnR4IChpZ25vcmVkKVxuICoqIG1vZHVsZSBpZCA9IDgxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJkZWZpbmUgY2Fubm90IGJlIHVzZWQgaW5kaXJlY3RcIik7IH07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogKHdlYnBhY2spL2J1aWxkaW4vYW1kLWRlZmluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDgyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBkZWZhdWx0U3R5bGVzID0ge1xuXHRiYWNrZ3JvdW5kOiAncmdiYSg2MSwgNjEsIDYxLCAxKScsXG5cdGFjY2VudEJhY2tncm91bmQ6ICdyZ2JhKDE3NSwgMTEwLCAyMzIsIDEpJyxcblx0YWNjZW50VGV4dDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxuXHR0ZXh0OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXG5cdGxpbms6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcblx0c2Vjb25kYXJ5QmFja2dyb3VuZDogJ3JnYmEoNzAsIDcwLCA3MCwgMSknLFxuXHRzZWNvbmRhcnlUZXh0OiAncmdiYSgyNDcsIDI0NywgMjQ3LCAxKScsXG5cdGlucHV0QmFja2dyb3VuZDogJ3JnYmEoNzAsIDcwLCA3MCwgMSknLFxuXHRpbnB1dFRleHQ6ICdyZ2JhKDI0NywgMjQ3LCAyNDcsIDEpJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0U3R5bGVzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA4M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jhdy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmF3LWxvYWRlci9pbmRleC5qcyEuL3N0eWxlcy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jhdy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvc3R5bGVzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9
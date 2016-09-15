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
		 * @param {string} config.baseURL='https://dev.api.ibm.com/virtualagent/development/api/v1/' - optional: specifies a different bot hosting server. The most common usecase for this param is to point the widget to a server that will add X-IBM-Client-Id and X-IBM-Client-Secret headers to the request.
		 * @param {string} config.XIBMClientID - optional: Your IBMClientID... this should not be made public in a public environment. Including this will add X-IBM-Client-Id as a header to your request.
		 * @param {string} config.XIBMClientSecret - optional: Your IBMClientSecret... this should not be made public in a public environment. Including this will add X-IBM-Client-Secret as a header to your request.
		 * @param {Object} config.styles - optional: Override default styling.
		 * @param {string} config.styles.background='#3d3d3d' - optional: hex code for background color
		 * @param {string} config.styles.text='#ffffff' - optional: hex code for main text color
		 * @param {string} config.styles.link='#ffffff' - optional: hex code for color of links in text
		 * @param {string} config.styles.secondaryBackground='#464646' - optional: hex code for background color of chat bubbles and other secondary info
		 * @param {string} config.styles.secondaryText='#f7f7f7' - optional: hex code for color of chat bubble text and other secondary info
		 * @param {string} config.styles.inputBackground='#464646' - optional: hex code for background color of input elements
		 * @param {string} config.styles.inputText='#f7f7f7' - optional: hex code for color of input text
		 * @param {string} config.styles.accentText='#ffffff' - optional: hex code for text colors to be used in conjunction with accentBackground i.e. button text
		 * @param {string} config.styles.accentBackground='#AF6EE8' - optional: hex code for accent colors used by the chat application i.e. buttons
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
		 *   console.log(messsage);
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

	module.exports = "/**\n* (C) Copyright IBM Corp. 2016. All Rights Reserved.\n*\n* Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this file except\n* in compliance with the License. You may obtain a copy of the License at\n*\n* http://www.apache.org/licenses/LICENSE-2.0\n*\n* Unless required by applicable law or agreed to in writing, software distributed under the License\n* is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express\n* or implied. See the License for the specific language governing permissions and limitations under\n* the License.\n*/\n\n.IBMChat-outer-container {\n\tmax-width: 768px;\n  min-width: 288px;\n  margin: 0 auto 0 auto;\n  border: none;\n\tmin-height:230px;\n  height: 100%;\n  box-sizing: border-box;\n\tpadding:0.5em;\n\tposition:relative;\n\tdisplay:table;\n\twidth:100%;\n\ttext-align: left;\n}\n\n\n/* Agent Component */\n\n.IBMChat-inner-container {\n\tdisplay:table-cell;\n\theight:100%;\n\tvertical-align: bottom;\n}\n\n/* Chat Component */\n\n.IBMChat-chat-container {\n\tdisplay:table-row;\n\theight:100%;\n}\n\n/* Messages Component */\n\n.IBMChat-messages {\n\toverflow-y: auto;\n\toverflow-x: hidden;\n\theight:auto;\n}\n\n.IBMChat-messages > div {\n\topacity:0.8;\n}\n\n.IBMChat-messages > div .IBMChat-watson-layout {\n\topacity:0.8;\n}\n\n.IBMChat-messages > div:last-child {\n\topacity:1;\n}\n\n.IBMChat-messages > div:last-child .IBMChat-watson-layout {\n\topacity:1;\n}\n\n.IBMChat-messages label {\n\tdisplay:block;\n\tfont-weight:bold;\n\ttext-transform: capitalize;\n\tpadding-bottom:0.25em;\n}\n\n.IBMChat-messages input {\n\tborder-radius: 0;\n\tborder: 0;\n\tpadding:0.25em;\n}\n\n.IBMChat-messages button {\n\tbackground: none;\n\tborder: 0;\n\tcolor: inherit;\n\tfont: inherit;\n\tline-height: normal;\n\toverflow: visible;\n\tpadding: 0;\n\t-webkit-appearance: button; /* for input */\n\t-webkit-user-select: none; /* for button */\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tborder-radius: 2em;\n\tcursor: pointer;\n\tline-height: 2.5em;\n\tmargin:0;\n}\n\n.IBMChat-messages button[disabled=\"true\"] {\n\tcursor: default;\n  opacity:.8;\n}\n\n.IBMChat-messages button::-moz-focus-inner {\n\tborder: 0;\n\tpadding: 0;\n}\n\n/* WatsonMessage Component */\n\n.IBMChat-watson-message-container {\n\tmargin: 1em 0 1em 0;\n}\n\n.IBMChat-watson-message {\n\tmargin-right:2em;\n\tpadding: 0.1em;\n\tpadding-left: 1em;\n}\n\n.IBMChat-watson-layout {\n\tmargin: 0 1em 0 1em;\n}\n\n/* UserMessage Component */\n\n.IBMChat-user-message-container {\n  margin: 1em 0 1em 2em;\n}\n\n.IBMChat-user-message {\n  padding:1em;\n\tmargin:0 1em 0 0;\n\tborder-radius: 0.5em;\n}\n\n/* Input Component */\n\n.IBMChat-input-container {\n\tdisplay:table-row;\n\theight:75px;\n}\n\n.IBMChat-input-form {\n\tdisplay:table-cell;\n\tposition:relative;\n\tpadding:24px 24px 0 24px;\n}\n\n.IBMChat-chat-textbox {\n  border: none;\n\tborder-radius: 0;\n  color: inherit;\n  background: transparent;\n  font-size:1em;\n  margin:0 0 1.625em 0;\n  padding:0 0 3px 0;\n  width:100%;\n}\n\n.IBMChat-chat-textbox[disabled='disabled'] {\n\topacity:0.5;\n}\n\n.IBMChat-input-form ::-webkit-input-placeholder {\n\topacity:1;\n}\n\n.IBMChat-chat-textbox:focus {\n  outline: none;\n  padding:0 0 2px 0;\n}\n\n/* Spinner */\n.IBMChat-input-loading {\n\tz-index: 2;\n\tposition:absolute;\n\tright: 16px;\n\ttop: 15px;\n\theight:32px;\n\twidth:32px;\n}\n\n.IBMChat-ibm-spinner-start {\n\topacity:0;\n}\n\n.IBMChat-ibm-spinner {\n\tfill: transparent;\n\tstroke-width: 3;\n\tstroke-linecap: \"butt\";\n\tstroke-dasharray: 1;\n\tstroke-dashoffset: 1;\n}\n\n/* initial rotation and stroke animation and infinite rotation*/\n.IBMChat-init-spin {\n\tanimation: init-rotate 150ms linear forwards, rotate-loop 2000ms linear infinite;\n}\n\n.IBMChat-init-spin svg circle {\n\tanimation: init-stroke 1000ms linear;\n}\n\n.IBMChat-end-spin svg circle {\n\tdisplay:none;\n}\n\n/* initial rotation */\n\n@keyframes init-rotate {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t100% {\n\t\ttransform: rotate(180deg);\n\t}\n}\n\n/* looping rotation */\n@keyframes rotate-loop {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n/* initial stroke animation */\n\n@keyframes init-stroke {\n\t0% {\n\t\topacity: 0;\n\t}\n\t100% {\n\t\topacity: 1;\n\t}\n}\n"

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
	var profile = __webpack_require__(66);
	var Promise = __webpack_require__(74).Promise;
	var assign = __webpack_require__(8);
	var defaultStyles = __webpack_require__(79);
	
	var layoutInit = {};
	var registeredLayouts = [];
	
	function registerEvents(playback) {
		events.subscribe('start', eventHandlers.start);
		events.subscribe('resize', eventHandlers.resize);
		events.subscribe('error', eventHandlers.error);
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
			events.subscribe('sendMock', eventHandlers.sendMock);
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
		if (config.baseURL)
			SDKconfig.baseURL = config.baseURL;
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
				if (config.playback === true) {
					registerEvents(true);
					registerLayouts();
					events.publish('start', {
						active: true,
						root: root,
						mapsServer: ("https://dd1-i-serve-maps.mybluemix.net") || 'https://dd1-i-serve-maps.mybluemix.net/',
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
								mapsServer: ("https://dd1-i-serve-maps.mybluemix.net") || 'https://dd1-i-serve-maps.mybluemix.net/',
								botID: config.botID,
								chatID: chatID,
								styles: assign({}, defaultStyles, config.styles),
								baseURL: config.baseURL,
								originalContent: root.innerHTML
							});
							events.publish('receive', res);
							resolve();
						})['catch']( function(err) {
							console.error('IBMChat:', err );
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
		if (true) {
			state.setState({
				DEBUG: true
			});
		}
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
		elements.form.addEventListener(
			"submit",
			function(e) {
				e.preventDefault();
			},
			false
		);
		elements.input.addEventListener(
			'keypress',
			function(e) {
				if (e.keyCode === 13)
					events.publish('send-input-message');
			},
			false
		);
		window.addEventListener('resize', utils.debounce(function() {
			events.publish('resize');
		}, 1000));
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
	
	function replaceAll(str, find, replace) {
		return str.split(find).join(replace);
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
		replaceAll: replaceAll,
		hasClass: hasClass,
		getUUID: getUUID,
		attachStyles: attachStyles,
		spinner: spinner
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
			if (events[i] && events[i].event === event) {
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
		var current = state.getState();
		if (current.active) {
			current.chatHolder.style.maxHeight = (current.root.getBoundingClientRect().height - current.inputHolder.getBoundingClientRect().height - 20) + 'px';
			current.chatHolder.style.maxWidth = ((current.root.getBoundingClientRect().width > 288) ? current.root.getBoundingClientRect().width : 288) + 'px';
		}
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
	var text = __webpack_require__(37);
	
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
	
	function receive(data) {
		var checkData = (typeof data === 'string') ? { message: { text: data } } : data;
		var current = state.getState();
		data = assign({}, checkData, { uuid: utils.getUUID() });
		state.setState({
			messages: [].concat(current.messages || [], data)
		});
		var msg = (data.message && data.message.text) ? ((Array.isArray(data.message.text)) ? data.message.text : [data.message.text]) : [''];
		for (var i = 0; i < msg.length; i++) {
			if (msg[i].length > 0) {
				var parsed = utils.replaceAll(text, '${data.uuid}', data.uuid);
				var item;
				current.chatHolder.innerHTML += parsed;
				item = current.chatHolder.querySelector('.' + data.uuid + ':last-child .IBMChat-watson-message');
				writeMessage(item, msg[i]);
			}
		}
		events.publish('focus-input');
	
		data.element = document.querySelector('.' + data.uuid + ':last-child');
		data.layoutElement = data.element.querySelector('.IBMChat-watson-layout');
		data.msgElement = data.element.querySelector('.IBMChat-watson-message');
	
		if (data.message && data.message.layout && data.message.layout.name) {
			var layout = 'layout:' + data.message.layout.name;
			if (events.hasSubscription(layout))
				events.publish(layout, data);
			else if (current.DEBUG)
				console.warn('Nothing is subscribed to ' + layout);
		}
	
		if (data.message && data.message.action && data.message.action.name) {
			var action = 'action:' + data.message.action.name;
			if (events.hasSubscription(action))
				events.publish(action, data, events.completeEvent);
			else if (current.DEBUG)
				console.warn('Nothing is subscribed to ' + action);
		}
	
		events.publish('disable-loading');
		events.publish('scroll-to-bottom');
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
			.catch( function(err) {
				state.setState({
					inProgress: false
				});
				events.publish('disable-loading');
				events.publish('error', err);
			});
		current.root.querySelector('.IBMChat-chat-textbox').value = '';
	
		current = state.getState();
		var msg = newData.text || '';
		if (!newData.silent) {
			var text = __webpack_require__(40);
			var parsed = utils.replaceAll(text, '${data.uuid}', newData.uuid);
			current.chatHolder.innerHTML += parsed;
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
	
	function sendMock(data) {
		if (data.text && data.text.length > 0) {
			var current = state.getState();
			var newData = assign({}, data, { uuid: utils.getUUID() });
			var text = __webpack_require__(40);
			var parsed = utils.replaceAll(text, '${data.uuid}', newData.uuid);
			current.chatHolder.innerHTML += parsed;
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
	
	var statusMap = {
		400: 'A bad request was made, somewhere. (400)',
		401: 'This request is unauthorized. (401)',
		403: 'This request is forbidden. (403)',
		404: 'The server is missing. (404)',
		405: 'Method not allowed. (405)',
		408: 'We took too long to respond, something must be wrong. (408)',
		412: 'The was an error on the server. (412)',
		500: 'The was an error on the server. (500)',
		501: 'The was an error on the server. (501)',
		502: 'The was an error on the server. (502)',
		503: 'The was an error on the server. (503)',
		504: 'The was an error on the server. (504)'
	};
	
	function generateErrorMessage(error) {
		if (typeof error === 'string')
			return error;
		else if (error.status && statusMap[error.status] !== undefined)
			return statusMap[error.status];
		else if (error.timeout)
			return 'The request took too long.';
		else
			return JSON.stringify(error);
	}
	
	function error(err) {
		console.error(arguments);
		console.error(generateErrorMessage(err));
		events.publish('send', {
			text: 'agent',
			silent: true
		});
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
	var requestGeolocationLatlongLayout = __webpack_require__(54);
	var chooseLocationTypeLayout = __webpack_require__(55);
	var chooseLayout = __webpack_require__(59);
	var formLayout = __webpack_require__(63);
	var creditCardLayout = __webpack_require__(69);
	
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
		addLocationItem: __webpack_require__(52)
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
				}, 1000);
			}, 1000));
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
				var text = __webpack_require__(53);
				itemChild.className = ns + '-contact-row';
				itemChild.innerHTML = utils.replaceAll(text, '${ns}', ns);
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
				el.innerHTML = '' +
					'<div class="' + ns + '-hours-open">Open today:</div>' +
					'<div class="' + ns + '-hours-today">' +
						formatAMPM(todaysHours.open) + ' &ndash; ' + formatAMPM(todaysHours.close) +
					'</div>';
			} else {
				el.innerHTML = '<div class="' + ns + '-hours-open">Closed today.</div>';
			}
			hoursEl.appendChild(el);
			for (var i = 0; i < hours.length; i++) {
				var childEl = document.createElement('div');
				childEl.setAttribute('class', ns + '-days-hours');
				if (hours[i] && hours[i].isOpen) {
					childEl.innerHTML = '' +
						'<div class="' + ns + '-days-hours-day">' +
							days[i] +
						'</div>' +
						'<div class="' + ns + '-days-hours-hours">' +
							formatAMPM(hours[i].open) + ' &ndash; ' + formatAMPM(hours[i].close) +
						'</div>';
				} else {
					childEl.innerHTML = '' +
					'<div class="' + ns + '-days-hours-day">' +
						days[i] +
					'</div>' +
					'<div class="' + ns + '-days-hours-closed">' +
						'Closed' +
					'</div>';
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
				this.msgElement.textContent = 'We could not find any locations close to you.';
				break;
			case 1:
				this.msgElement.textContent = 'Here are the details for the ' + this.data[0].address.address + ' location...';
				break;
			default:
				this.msgElement.textContent = 'Here are the locations I found close to you:';
			}
	
			if (this.data.length > 0) {
				var text = templates.base;
				this.uuid = data.uuid;
				if (first) {
					initialSize(this.getWidth());
					first = false;
				}
				this.map = document.createElement('div');
				this.map.innerHTML = utils.replaceAll(text, '${ns}', ns);
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
			/*
			for September version
			const data = {
				text: this.dataset.id,
				silent: true
			};*/
			this.className = ns + '-location-active';
			showLocations[this.dataset.uuid].removeAllEventListeners();
			//actions.publish('send', data); for September version
			publish('receive', {
				message: {
					text: ['Here are the details for this location.'],
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
				el.innerHTML = utils.replaceAll(text, '${ns}', ns);
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
			}
	
			if (locationData && locationData.length > 1) {
				dom.back.addEventListener('click', function(e) {
					e.preventDefault();
					publish('receive', {
						message: {
							text: ['Here are the locations I found close to you:'],
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
				el.innerHTML = utils.replaceAll(text, '${ns}', ns);
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
[80, 49],
/* 49 */
/***/ function(module, exports) {

	module.exports = "/**\n* (C) Copyright IBM Corp. 2016. All Rights Reserved.\n*\n* Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this file except\n* in compliance with the License. You may obtain a copy of the License at\n*\n* http://www.apache.org/licenses/LICENSE-2.0\n*\n* Unless required by applicable law or agreed to in writing, software distributed under the License\n* is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express\n* or implied. See the License for the specific language governing permissions and limitations under\n* the License.\n*/\n\n.IBMChat-map {\n\tmargin-top:1em;\n}\n\n.IBMChat-map-img {\n\theight:180px;\n}\n\n.IBMChat-map-img img {\n\theight:180px;\n}\n\n.IBMChat-map-multiple-locations {\n\tcursor: default;\n\topacity:0.3;\n}\n\n.IBMChat-map-location-active .IBMChat-map-multiple-locations {\n\topacity: 1;\n}\n\n.IBMChat-map-clickable .IBMChat-map-locations-item.IBMChat-map-multiple-locations {\n\tpadding: 1em 0 1em 0;\n\tcursor: pointer;\n\topacity: 1;\n}\n\n.IBMChat-map-data-section {\n\tmargin-top:0.5em;\n}\n\n.IBMChat-map-locations-item {\n\tpadding: 1em;\n\tborder-bottom:1px solid #505050;\n}\n\n.IBMChat-map-locations-item:after {\n\tvisibility: hidden;\n\tdisplay: block;\n\tfont-size: 0;\n\tcontent: \" \";\n\tclear: both;\n\theight: 0;\n }\n\n.IBMChat-map-locations-item-icon {\n\tpadding:0.5em 0.5em 0 0;\n\ttext-align:center;\n\twidth: 64px;\n\tfloat:left;\n}\n\n.IBMChat-map-locations-item-data {\n\tfloat:left;\n}\n.IBMChat-map-locations-item-data-title {\n\tfont-weight: bold;\n\tpadding-bottom:0.5em;\n}\n.IBMChat-map-locations-item-data-items {\n\tfont-size: 0.9em;\n}\n\n.IBMChat-map-locations-item-data-section {\n\tpadding-bottom:1em;\n}\n\n.IBMChat-map-locations-item-data-email {\n\tpadding-bottom:1em;\n}\n\n.IBMChat-map-locations-item-data-phone {\n\tdisplay: table;\n\tmax-width:400px;\n\twidth: 100%;\n\tpadding-bottom:1em;\n}\n.IBMChat-map-contact-row {\n\tpadding-bottom:1em;\n}\n\n.IBMChat-map-hours-open {\n\tpadding-bottom:0.5em;\n}\n\n.IBMChat-map-contact-type {\n\tfont-style:italic;\n\tfont-size:0.9em;\n}\n.IBMChat-map-contact-data {\n\n}\n\na.IBMChat-map-locations-item-data-address-link,\na.IBMChat-map-locations-item-data-address-link:hover,\na.IBMChat-map-locations-item-data-address-link:visited,\na.IBMChat-map-locations-item-data-address-link:active,\n.IBMChat-map-contact-data a,\n.IBMChat-map-contact-data a:hover,\n.IBMChat-map-contact-data a:active,\n.IBMChat-map-contact-data a:visited {\n\tfont-weight:normal;\n\tfont-size:0.9em;\n}\n\n.IBMChat-map-locations-item-distance {\n\twidth:64px;\n\tfont-size:0.9em;\n}\n\nbutton.IBMChat-map-locations-item-data-hours-button {\n\tfont-size:0.9em;\n\tpadding: 0 1em 0 1em;\n\tline-height:1.5em;\n\tmargin-top:1em;\n}\n\nbutton.IBMChat-map-locations-all {\n\tfont-size:0.9em;\n\tpadding: 0 1em 0 1em;\n\tline-height:1.5em;\n}\n\n.IBMChat-map-locations-item-data-more-hours {\n\tdisplay: table;\n}\n\n.IBMChat-map-locations-item-data-more-hours.IBMChat-map-hidden {\n\tdisplay: none;\n}\n\n.IBMChat-map-days-hours {\n\tdisplay: table-row;\n}\n\n.IBMChat-map-days-hours-day, .IBMChat-map-days-hours-hours, .IBMChat-map-days-hours-closed {\n\tdisplay: table-cell;\n\tmargin: 0;\n\tpadding:0.75em 1em 0 0;\n\toverflow: hidden;\n\twhite-space: nowrap;\n}\n\n.IBMChat-map-days-hours > div:last-child {\n\tpadding: 0.75em 0 0 0 !important;\n}\n"

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}\">\n\t<div class=\"${ns}-img\"></div>\n\t<div class=\"${ns}-data ${ns}-clickable\"></div>\n</div>\n"

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-locations-item ${ns}-multiple-locations ${ns}-data-section IBMChat-secondary-colors\">\n\t<div class=\"${ns}-locations-item-icon\"></div>\n\t<div class=\"${ns}-locations-item-data\">\n\t\t<div class=\"${ns}-locations-item-data-title\"></div>\n\t\t<div class=\"${ns}-locations-item-data-items\">\n\t\t\t<div class=\"${ns}-locations-item-data-address\"></div>\n\t\t</div>\n\t</div>\n\t<div class=\"${ns}-locations-item-distance\"></div>\n</div>\n"

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-locations-item ${ns}-data-section IBMChat-secondary-colors\">\n\t<div class=\"${ns}-locations-item-data-section\">\n\t\t<button class=\"${ns}-locations-all IBMChat-accent-colors\">Back to All Locations</button>\n\t</div>\n\t<div class=\"${ns}-locations-item-data\">\n\t\t<div class=\"${ns}-locations-item-data-title\"></div>\n\t\t<div class=\"${ns}-locations-item-data-items\">\n\t\t\t<div class=\"${ns}-locations-item-data-section\">\n\t\t\t\t<a class=\"${ns}-locations-item-data-address-link\">\n\t\t\t\t\t<div class=\"${ns}-locations-item-data-address\"></div>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"${ns}-locations-item-data-email\"></div>\n\t\t\t<div class=\"${ns}-locations-item-data-phone\"></div>\n\t\t\t<div class=\"${ns}-locations-item-data-hours\"></div>\n\t\t</div>\n\t\t<button class=\"${ns}-locations-item-data-hours-button IBMChat-accent-colors\">More Hours</button>\n\t\t<div class=\"${ns}-locations-item-data-items\">\n\t\t\t<div class=\"${ns}-locations-item-data-more-hours ${ns}-hidden\"></div>\n\t\t</div>\n\t</div>\n\t<div class=\"${ns}-locations-item-distance\"></div>\n</div>\n"

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-contact-type\"></div>\n<div class=\"${ns}-contact-data\"></div>\n"

/***/ },
/* 54 */
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
			publish('disable-input');
			navigator.geolocation.getCurrentPosition(
					function(position) {
						publish('enable-input');
						publish('send', {
							text: position.coords.latitude + ',' + position.coords.longitude,
							silent: true
						});
					},
					function() {
						publish('enable-input');
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
/* 55 */
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
	
	__webpack_require__(56);
	
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
		base: __webpack_require__(58)
	};
	
	function ChooseLocationType(data) {
		this.init(data);
	}
	
	ChooseLocationType.prototype = {
		init: function(data) {
			var text = templates.base;
			this.data = data.data;
			this.uuid = data.uuid;
			if ('navigator' in window && 'geolocation' in navigator) {
				this.eventListeners = [];
				this.parentElement = data.element;
				this.layoutElement = data.layoutElement;
				this.el = document.createElement('div');
				text = utils.replaceAll(text, '${ns}', ns);
				text = utils.replaceAll(text, '${values.geolocation}', values.geolocation);
				text = utils.replaceAll(text, '${values.postalcode}', values.postalcode);
				this.el.innerHTML = text;
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
/* 56 */
[80, 57],
/* 57 */
/***/ function(module, exports) {

	module.exports = "/**\n* (C) Copyright IBM Corp. 2016. All Rights Reserved.\n*\n* Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this file except\n* in compliance with the License. You may obtain a copy of the License at\n*\n* http://www.apache.org/licenses/LICENSE-2.0\n*\n* Unless required by applicable law or agreed to in writing, software distributed under the License\n* is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express\n* or implied. See the License for the specific language governing permissions and limitations under\n* the License.\n*/\n\n.IBMChat-islocationapi-container {\n\ttext-align:center;\n}\n\n.IBMChat-islocationapi-container button {\n\tmargin: 1em auto 0 auto;\n\tmin-width:200px;\n\tmax-width:240px;\n\twidth:75%;\n}\n\n.IBMChat-islocationapi-container div:last-child {\n\tmargin-bottom: 1em;\n}\n"

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-container\">\n\t<div><button class=\"IBMChat-secondary-colors\" data-input=\"${values.geolocation}\">Use My Current Location</button></div>\n\t<div><button class=\"IBMChat-secondary-colors\" data-input=\"${values.postalcode}\">A Zip Code</button></div>\n</div>\n"

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
	var utils = __webpack_require__(32);
	var ns = 'IBMChat-choose';
	var activeClassName = 'IBMChat-accent-colors';
	var inactiveClassName = 'IBMChat-secondary-colors';
	var widgets = [];
	var templates = {
		button: __webpack_require__(62)
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
			var val = this.data[i];
			var buttonHolder = document.createElement((this.data.length === 2) ? 'span' : 'div');
			buttonHolder.classList.add(ns + '-option');
			var parsed = utils.replaceAll(tmpl, '${text}', val);
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
			var submitBtn = utils.replaceAll(tmpl, '${text}', 'Submit');
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
/* 60 */
[80, 61],
/* 61 */
/***/ function(module, exports) {

	module.exports = "/**\n* (C) Copyright IBM Corp. 2016. All Rights Reserved.\n*\n* Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this file except\n* in compliance with the License. You may obtain a copy of the License at\n*\n* http://www.apache.org/licenses/LICENSE-2.0\n*\n* Unless required by applicable law or agreed to in writing, software distributed under the License\n* is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express\n* or implied. See the License for the specific language governing permissions and limitations under\n* the License.\n*/\n\n.IBMChat-choose-container {\n\ttext-align:center;\n\tpadding:1em;\n}\n\n.IBMChat-choose-container span {\n\tdisplay:inline-block;\n\tmargin: 1em 1em 0 1em;\n}\n\n.IBMChat-choose-container div {\n\tmargin: 1em auto 0 auto;\n}\n\n.IBMChat-choose-container button {\n\tmin-width:200px;\n\tmax-width:240px;\n}\n"

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = "<button class=\"IBMChat-secondary-colors\" data-input=\"${text}\">${text}</button>\n"

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
	var profile = __webpack_require__(66);
	var subscribe = events.subscribe;
	var publish = events.publish;
	var activeClassName = 'IBMChat-accent-colors';
	var inactiveClassName = 'IBMChat-secondary-colors';
	var utils = __webpack_require__(32);
	var ns = 'IBMChat-form';
	var widgets = [];
	var templates = {
		base: __webpack_require__(67),
		field: __webpack_require__(68)
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
	};
	
	Form.prototype.drawForm = function() {
		var base = document.createElement('div');
		var formFields;
		base.innerHTML = templates.base;
		formFields = base.querySelector('.IBMChat-form-fields');
		for (var i = 0; i < this.data.length; i++) {
			var field = document.createElement('div');
			var fieldTxt = templates.field;
			fieldTxt = utils.replaceAll(fieldTxt, '${label}', this.data[i].label || '');
			fieldTxt = utils.replaceAll(fieldTxt, '${name}', this.data[i].name);
			fieldTxt = utils.replaceAll(fieldTxt, '${value}', ''); //for future use
			field.innerHTML = fieldTxt;
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
		/*var action = 'action:' + this.action.name;
		if (hasSubscription(action)) {
			var data = {};
			for (var i = 0; i < this.fields.length; i++) {
				var field = this.fields[i];
				data[field.getAttribute('name')] = field.getAttribute('value');
			}
			publish(action, {
				actionData: this.action.data || {},
				formData: data
			});
		} else {
			var errorMsg = 'This chat is configured incorrectly. Nothing is subscribed to ' + action;
			publish('error', errorMsg);
			publish('send', {
				silent: true,
				text: 'failure'
			});
		}*/
		if (this.validateFields() === true) {
			for (var i = 0; i < this.fields.length; i++) {
				var field = this.fields[i];
				profile.set(field.getAttribute('name'), field.value);
			}
			publish('send', {
				silent: true,
				text: 'success'
			});
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
	
	Form.prototype.handleCancel = function() {
		publish('send', {
			silent: true,
			text: 'cancel'
		});
	};
	
	Form.prototype.addListeners = function() {
		this.cancelButton.addEventListener('click', this.handleCancel.bind(this));
		this.submitButton.addEventListener('click', this.handleSubmit.bind(this));
	};
	
	Form.prototype.removeAllEventListeners = function() {
		this.cancelButton.removeEventListener('click', this.handleCancel.bind(this));
		this.cancelButton.setAttribute('disabled', true);
		this.submitButton.removeEventListener('click', this.handleSubmit.bind(this));
		this.submitButton.setAttribute('disabled', true);
		for (var j = 0; j < this.fields.length; j++)
			this.fields[j].setAttribute('disabled', true);
		this.subscribeSend.remove();
	};
	
	module.exports = formLayout;


/***/ },
/* 64 */
[80, 65],
/* 65 */
/***/ function(module, exports) {

	module.exports = "/**\n* (C) Copyright IBM Corp. 2016. All Rights Reserved.\n*\n* Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this file except\n* in compliance with the License. You may obtain a copy of the License at\n*\n* http://www.apache.org/licenses/LICENSE-2.0\n*\n* Unless required by applicable law or agreed to in writing, software distributed under the License\n* is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express\n* or implied. See the License for the specific language governing permissions and limitations under\n* the License.\n*/\n\n.IBMChat-form-container {\n\ttext-align:center;\n\tpadding:1em;\n}\n\n.IBMChat-form-fields {\n\tmargin:auto;\n\ttext-align:left;\n\tmax-width:360px;\n\twidth:100%;\n}\n\n.IBMChat-form-fields-row {\n\tpadding-bottom:1.5em;\n}\n\n.IBMChat-form-fields-row input {\n\twidth: 100%;\n}\n\n.IBMChat-form-buttons {\n\twidth: 100%;\n\tmax-width: 360px;\n\theight: 2.5em;\n\ttext-align:center;\n\tmargin:auto;\n}\n\n.IBMChat-form-buttons button {\n\tline-height: 2.5em;\n\twidth: 100px;\n}\n\n.IBMChat-form-cancel {\n\tfloat:left;\n}\n.IBMChat-form-submit {\n\tfloat:right;\n}\n"

/***/ },
/* 66 */
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
/* 67 */
/***/ function(module, exports) {

	module.exports = "<div class=\"IBMChat-form-container\">\n\t<div class=\"IBMChat-form-fields\"></div>\n\t<div class=\"IBMChat-form-buttons\">\n\t\t<button class=\"IBMChat-form-cancel\">Cancel</button>\n\t\t<button class=\"IBMChat-form-submit\">Submit</button>\n\t</div>\n</div>\n"

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = "<label>${label}</label>\n<input type=\"text\" class=\"IBMChat-input-colors\" name=\"${name}\" value=\"${value}\" />\n<div class=\"IBMChat-input-error\" data-name=\"${name}\"></div>\n"

/***/ },
/* 69 */
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
	
	__webpack_require__(70);
	
	var events = __webpack_require__(33);
	var state = __webpack_require__(7);
	var subscribe = events.subscribe;
	var publish = events.publish;
	var utils = __webpack_require__(32);
	var validation = __webpack_require__(72);
	var ns = 'IBMChat-creditcard';
	var widgets = [];
	var templates = {
		base: __webpack_require__(73)
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
		text = utils.replaceAll(text, '${ns}', ns);
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
/* 70 */
[80, 71],
/* 71 */
/***/ function(module, exports) {

	module.exports = "/**\n* (C) Copyright IBM Corp. 2016. All Rights Reserved.\n*\n* Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this file except\n* in compliance with the License. You may obtain a copy of the License at\n*\n* http://www.apache.org/licenses/LICENSE-2.0\n*\n* Unless required by applicable law or agreed to in writing, software distributed under the License\n* is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express\n* or implied. See the License for the specific language governing permissions and limitations under\n* the License.\n*/\n\n.IBMChat-creditcard-container {\n\tpadding: 1em;\n\ttext-align:center;\n}\n\n.IBMChat-creditcard-rows {\n\tmargin:auto;\n\ttext-align:left;\n\tmax-width:360px;\n\twidth:100%;\n}\n\n.IBMChat-creditcard-row {\n\ttext-align:left;\n\tpadding-bottom:1em;\n}\n\n.IBMChat-creditcard-row input {\n\twidth:100%;\n}\n\ndiv[data-validation-for] {\n\tpadding-top:0.5em;\n}\n\n.IBMChat-creditcard-col {\n\tdisplay:inline-block;\n}\n\n.IBMChat-creditcard-col:last-child {\n\tpadding-left:1em;\n}\n\n.IBMChat-creditcard-col input{\n\ttext-align:center;\n\twidth:40px;\n}\n\n.IBMChat-creditcard-col:last-child input {\n\twidth:60px;\n}\n\n.IBMChat-creditcard-buttons {\n\theight:2.5em;\n}\n\n.IBMChat-creditcard-buttons button {\n\twidth:90px;\n\tfloat:left;\n}\n\n.IBMChat-creditcard-buttons button:last-child {\n\tfloat:right;\n}\n"

/***/ },
/* 72 */
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
/* 73 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-container\">\n\t<div class=\"${ns}-rows\">\n\t\t<div class=\"${ns}-row\">\n\t\t\t<input type=\"text\" class=\"IBMChat-input-colors\" name=\"cc_full_name\" placeholder=\"Name on Card\" />\n\t\t\t<div data-validation-for=\"cc_full_name\" data-valid=\"true\"></div>\n\t\t</div>\n\t\t<div class=\"${ns}-row\">\n\t\t\t<input type=\"text\" class=\"IBMChat-input-colors\" name=\"cc_number\" placeholder=\"Credit Card Number\" />\n\t\t\t<div data-validation-for=\"cc_number\" data-valid=\"true\"></div>\n\t\t</div>\n\t\t<div class=\"${ns}-row\">\n\t\t\t<div class=\"${ns}-col\">\n\t\t\t\t<input class=\"${ns}-date IBMChat-input-colors\" type=\"text\" name=\"cc_exp_date_month\" placeholder=\"MM\" />\n\t\t\t\t/\n\t\t\t\t<input class=\"${ns}-date IBMChat-input-colors\" type=\"text\" name=\"cc_exp_date_year\" placeholder=\"YY\" />\n\t\t\t\t<div data-validation-for=\"cc_exp_date\" data-valid=\"true\"></div>\n\t\t\t</div>\n\n\t\t\t<div class=\"${ns}-col\">\n\t\t\t\t<input class=\"${ns}-cvv IBMChat-input-colors\" type=\"text\" name=\"cc_code\" placeholder=\"CVV\" />\n\t\t\t\t<div data-validation-for=\"cc_code\" data-valid=\"true\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"${ns}-row ${ns}-buttons\">\n\t\t\t<button class=\"${ns}-cancel IBMChat-secondary-colors\">Cancel</button>\n\t\t\t<button class=\"${ns}-continue IBMChat-input-colors\">Continue</button>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ },
/* 74 */
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
	        var vertx = __webpack_require__(77);
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
	    if ("function" === 'function' && __webpack_require__(78)['amd']) {
	      !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return lib$es6$promise$umd$$ES6Promise; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module !== 'undefined' && module['exports']) {
	      module['exports'] = lib$es6$promise$umd$$ES6Promise;
	    } else if (typeof this !== 'undefined') {
	      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
	    }
	
	    lib$es6$promise$polyfill$$default();
	}).call(this);
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(75), (function() { return this; }()), __webpack_require__(76)(module)))

/***/ },
/* 75 */
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
/* 76 */
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
/* 77 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 79 */
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
		background: '#3d3d3d',
		accentBackground: '#AF6EE8',
		accentText: '#ffffff',
		text: '#ffffff',
		link: '#ffffff',
		secondaryBackground: '#464646',
		secondaryText: '#f7f7f7',
		inputBackground: '#464646',
		inputText: '#f7f7f7'
	};
	
	module.exports = defaultStyles;


/***/ },
/* 80 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiNmE1MGE5YjlhMWJiZDEzMjZlMyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3M/MjY5OSIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRIYW5kbGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRIYW5kbGVycy9ldmVudHMvc3RhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXNzaWduVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvZXEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcHlPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NyZWF0ZUFzc2lnbmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXBwbHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzSXRlcmF0ZWVDYWxsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5TGlrZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50SGFuZGxlcnMvdGVtcGxhdGVzL3N0YXJ0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50SGFuZGxlcnMvZXZlbnRzL3Jlc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRIYW5kbGVycy9ldmVudHMvcmVjZWl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRIYW5kbGVycy90ZW1wbGF0ZXMvcmVjZWl2ZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9ldmVudEhhbmRsZXJzL2V2ZW50cy9zZW5kLmpzIiwid2VicGFjazovLy8uL34vQHdhdHNvbi12aXJ0dWFsLWFnZW50L2NsaWVudC1zZGsvbGliL3dlYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRIYW5kbGVycy90ZW1wbGF0ZXMvc2VuZC5odG1sIiwid2VicGFjazovLy8uL3NyYy9ldmVudEhhbmRsZXJzL2V2ZW50cy9zZW5kLW1vY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50SGFuZGxlcnMvZXZlbnRzL3NlbmQtaW5wdXQtbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRIYW5kbGVycy9ldmVudHMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50SGFuZGxlcnMvZXZlbnRzL2Vycm9yLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudEhhbmRsZXJzL2V2ZW50cy9zY3JvbGwtdG8tYm90dG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvdGVtcGxhdGVzL2Jhc2UuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy90ZW1wbGF0ZXMvYWRkLWxvY2F0aW9ucy1pdGVtLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvdGVtcGxhdGVzL2FkZC1sb2NhdGlvbi1pdGVtLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvdGVtcGxhdGVzL2NyZWF0ZS1kb20tYXJyYXkuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9yZXF1ZXN0LWdlb2xvY2F0aW9uLWxhdGxvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvY2hvb3NlLWxvY2F0aW9uLXR5cGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvY2hvb3NlLWxvY2F0aW9uLXR5cGUvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9jaG9vc2UtbG9jYXRpb24tdHlwZS90ZW1wbGF0ZXMvYmFzZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2Nob29zZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9jaG9vc2Uvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9jaG9vc2UvdGVtcGxhdGVzL2J1dHRvbi5odG1sIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2Zvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvZm9ybS9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL3NyYy9wcm9maWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2Zvcm0vdGVtcGxhdGVzL2Jhc2UuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9mb3JtL3RlbXBsYXRlcy9maWVsZC5odG1sIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2NjLXZhbGlkYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9jYy12YWxpZGF0b3Ivc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9jYy12YWxpZGF0b3IvdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9jYy12YWxpZGF0b3IvdGVtcGxhdGVzL2Jhc2UuaHRtbCIsIndlYnBhY2s6Ly8vLi9+L2VzNi1wcm9taXNlL2Rpc3QvZXM2LXByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vdmVydHggKGlnbm9yZWQpIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvc3R5bGVzLmNzcz85ZmI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBLGtFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLE9BQU87QUFDbkIsYUFBWSxPQUFPO0FBQ25CLGFBQVksT0FBTztBQUNuQixhQUFZLE9BQU87QUFDbkIsYUFBWSxPQUFPO0FBQ25CLGFBQVksT0FBTztBQUNuQixhQUFZLE9BQU87QUFDbkIsYUFBWSxPQUFPO0FBQ25CLGFBQVksT0FBTztBQUNuQixhQUFZLE9BQU87QUFDbkIsYUFBWSxPQUFPO0FBQ25CLGFBQVksT0FBTztBQUNuQixhQUFZLE9BQU87QUFDbkIsYUFBWSxPQUFPO0FBQ25CLGFBQVksT0FBTztBQUNuQixhQUFZLE9BQU87QUFDbkIsYUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0wsZUFBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxlQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLGVBQWMsUUFBUTtBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxPQUFPO0FBQ25CLGFBQVksU0FBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxPQUFPO0FBQ25CLGFBQVksU0FBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBLGVBQWMsSUFBSTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLE9BQU87QUFDbkIsYUFBWSxPQUFPO0FBQ25CLGVBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBOzs7Ozs7O0FDcENBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLFNBQVM7QUFDcEIsWUFBVyxPQUFPO0FBQ2xCLGNBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxTQUFTO0FBQ3BCLFlBQVcsRUFBRTtBQUNiLFlBQVcsTUFBTTtBQUNqQixjQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLFlBQVcsRUFBRTtBQUNiLFlBQVcsRUFBRTtBQUNiLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM3QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2hDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyR0FBMEc7O0FBRTFHO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCLHNCQUFzQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBcUIsK0JBQStCO0FBQ3BEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsUUFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBLFVBQVM7QUFDVCx3QkFBdUIsUUFBUTtBQUMvQjs7QUFFQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUVBQWtFLFFBQVE7O0FBRTFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtRUFBa0UsUUFBUTtBQUMxRTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXFDLFFBQVE7O0FBRTdDOztBQUVBLHNCQUFxQix3QkFBd0I7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxRQUFPO0FBQ1A7QUFDQTtBQUNBLDBCQUF5QixZQUFZO0FBQ3JDO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQU87O0FBRVA7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBLGVBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0EsZUFBYyxTQUFTO0FBQ3ZCLGVBQWMsU0FBUztBQUN2QjtBQUNBLGdCQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0EsZUFBYyxTQUFTO0FBQ3ZCO0FBQ0EsZ0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNCQUFxQixrRUFBa0U7QUFDdkY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCx1REFBc0QsZ0JBQWdCLEVBQUU7QUFDeEU7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscURBQXlCLHdDQUF3QyxFQUFFO0FBQ25FLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7Ozs7Ozs7O0FDNzdCRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixVQUFVOzs7Ozs7O0FDbkx0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1RBLGdCOzs7Ozs7QUNBQSw4QkFBNkIsbURBQW1EOzs7Ozs7O0FDQWhGO0FBQ0E7QUFDQTtBQUNBLGtFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzFCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFzRjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRSIsImZpbGUiOiJJQk1DaGF0Q2xpZW50LWxhdGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiSUJNQ2hhdFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJJQk1DaGF0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIklCTUNoYXRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGI2YTUwYTliOWExYmJkMTMyNmUzXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG5yZXF1aXJlKCcuL3N0eWxlcy5jc3MnKTtcblxudmFyIGJvb3RzdHJhcCA9IHJlcXVpcmUoJy4vYm9vdHN0cmFwJyk7XG5cbi8qKlxuICogQG5hbWVzcGFjZSBJQk1DaGF0XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdC8qKlxuXHQgKiBHZW5lcmF0ZSB0aGUgY2hhdCB3aWRnZXQgaW50byBhbiBlbGVtZW50LlxuXHQgKiBAZnVuY3Rpb24gaW5pdFxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuZWwgLSBUYWtlcyBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIElEIG9mIGFuIGh0bWwgZWxlbWVudCB0byBiZSByZW5kZXJlZCB0byBPUiBhIHNlbGVjdGVkIGVsZW1lbnRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5ib3RJRCAtIFRoZSB1bmlxdWUgaWRlbnRpZmllciBvZiB5b3VyIFZpcnR1YWwgQWdlbnQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcudXNlcklEIC0gQSBoYXNoZWQgbm9uLWlkZW50aWZpYWJsZSAoaS5lLiBub3QgYSB1c2VycyBlbWFpbCBhZGRyZXNzIG9yIHB1YmxpYyB1c2VyIGlkKSB1bmlxdWUgSUQgdXNlZCBmb3IgdHJhY2tpbmcgaW4gdGhlIEVuZ2FnZW1lbnQgTWV0cmljcyBkYXNoYm9hcmQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuYmFzZVVSTD0naHR0cHM6Ly9kZXYuYXBpLmlibS5jb20vdmlydHVhbGFnZW50L2RldmVsb3BtZW50L2FwaS92MS8nIC0gb3B0aW9uYWw6IHNwZWNpZmllcyBhIGRpZmZlcmVudCBib3QgaG9zdGluZyBzZXJ2ZXIuIFRoZSBtb3N0IGNvbW1vbiB1c2VjYXNlIGZvciB0aGlzIHBhcmFtIGlzIHRvIHBvaW50IHRoZSB3aWRnZXQgdG8gYSBzZXJ2ZXIgdGhhdCB3aWxsIGFkZCBYLUlCTS1DbGllbnQtSWQgYW5kIFgtSUJNLUNsaWVudC1TZWNyZXQgaGVhZGVycyB0byB0aGUgcmVxdWVzdC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5YSUJNQ2xpZW50SUQgLSBvcHRpb25hbDogWW91ciBJQk1DbGllbnRJRC4uLiB0aGlzIHNob3VsZCBub3QgYmUgbWFkZSBwdWJsaWMgaW4gYSBwdWJsaWMgZW52aXJvbm1lbnQuIEluY2x1ZGluZyB0aGlzIHdpbGwgYWRkIFgtSUJNLUNsaWVudC1JZCBhcyBhIGhlYWRlciB0byB5b3VyIHJlcXVlc3QuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuWElCTUNsaWVudFNlY3JldCAtIG9wdGlvbmFsOiBZb3VyIElCTUNsaWVudFNlY3JldC4uLiB0aGlzIHNob3VsZCBub3QgYmUgbWFkZSBwdWJsaWMgaW4gYSBwdWJsaWMgZW52aXJvbm1lbnQuIEluY2x1ZGluZyB0aGlzIHdpbGwgYWRkIFgtSUJNLUNsaWVudC1TZWNyZXQgYXMgYSBoZWFkZXIgdG8geW91ciByZXF1ZXN0LlxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLnN0eWxlcyAtIG9wdGlvbmFsOiBPdmVycmlkZSBkZWZhdWx0IHN0eWxpbmcuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuc3R5bGVzLmJhY2tncm91bmQ9JyMzZDNkM2QnIC0gb3B0aW9uYWw6IGhleCBjb2RlIGZvciBiYWNrZ3JvdW5kIGNvbG9yXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuc3R5bGVzLnRleHQ9JyNmZmZmZmYnIC0gb3B0aW9uYWw6IGhleCBjb2RlIGZvciBtYWluIHRleHQgY29sb3Jcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zdHlsZXMubGluaz0nI2ZmZmZmZicgLSBvcHRpb25hbDogaGV4IGNvZGUgZm9yIGNvbG9yIG9mIGxpbmtzIGluIHRleHRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zdHlsZXMuc2Vjb25kYXJ5QmFja2dyb3VuZD0nIzQ2NDY0NicgLSBvcHRpb25hbDogaGV4IGNvZGUgZm9yIGJhY2tncm91bmQgY29sb3Igb2YgY2hhdCBidWJibGVzIGFuZCBvdGhlciBzZWNvbmRhcnkgaW5mb1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnN0eWxlcy5zZWNvbmRhcnlUZXh0PScjZjdmN2Y3JyAtIG9wdGlvbmFsOiBoZXggY29kZSBmb3IgY29sb3Igb2YgY2hhdCBidWJibGUgdGV4dCBhbmQgb3RoZXIgc2Vjb25kYXJ5IGluZm9cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zdHlsZXMuaW5wdXRCYWNrZ3JvdW5kPScjNDY0NjQ2JyAtIG9wdGlvbmFsOiBoZXggY29kZSBmb3IgYmFja2dyb3VuZCBjb2xvciBvZiBpbnB1dCBlbGVtZW50c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnN0eWxlcy5pbnB1dFRleHQ9JyNmN2Y3ZjcnIC0gb3B0aW9uYWw6IGhleCBjb2RlIGZvciBjb2xvciBvZiBpbnB1dCB0ZXh0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuc3R5bGVzLmFjY2VudFRleHQ9JyNmZmZmZmYnIC0gb3B0aW9uYWw6IGhleCBjb2RlIGZvciB0ZXh0IGNvbG9ycyB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYWNjZW50QmFja2dyb3VuZCBpLmUuIGJ1dHRvbiB0ZXh0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuc3R5bGVzLmFjY2VudEJhY2tncm91bmQ9JyNBRjZFRTgnIC0gb3B0aW9uYWw6IGhleCBjb2RlIGZvciBhY2NlbnQgY29sb3JzIHVzZWQgYnkgdGhlIGNoYXQgYXBwbGljYXRpb24gaS5lLiBidXR0b25zXG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQuaW5pdCh7XG5cdCAqICBlbDogJ215X2RpdicsXG5cdCAqICBib3RJRDogJ3h4eHh4eHh4eHh4eHh4J1xuXHQgKiAgc3R5bGVzOiB7XG5cdCAqICAgIGJhY2tncm91bmQ6IFwiIzAwMDAwMFwiXG5cdCAqICB9XG5cdCAqIH0pLnRoZW4oZnVuY3Rpb24oKXtcblx0ICogICAgIGNvbnNvbGUubG9nKCdpbml0aWFsaXplJyk7XG5cdCAqIH0pO1xuXHQgKiAvL29yXG5cdCAqIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teS13aWRnZXQtY29udGFpbmVyJyk7XG5cdCAqIElCTUNoYXQuaW5pdCh7XG5cdCAqICBlbDogZWwsXG5cdCAqICBib3RJRDogJ3h4eHh4eHh4eHh4eHh4J1xuXHQgKiAgc3R5bGVzOiB7XG5cdCAqICAgIGJhY2tncm91bmQ6IFwiIzAwMDAwMFwiXG5cdCAqICB9XG5cdCAqIH0pLnRoZW4oZnVuY3Rpb24oKXtcblx0ICogICAgIGNvbnNvbGUubG9nKCdpbml0aWFsaXplJyk7XG5cdCAqIH0pO1xuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX0gUmV0dXJuczogQSBwcm9taXNlIHNvIHlvdSBjYW4gY2FsbCBmdW5jdGlvbnMgYWZ0ZXIgdGhlIHdpZGdldCBoYXMgYmVlbiBpbml0aWFsaXplZC5cblx0ICovXG5cdGluaXQ6IGJvb3RzdHJhcC5pbml0LFxuXHQvKipcblx0ICogUmVzdGFydCB0aGUgY2hhdCB3aWRnZXQuIFRoZSBzYW1lIGNoYXQgd2lkZ2V0IGlzIHJlbmRlcmVkIGluIHRoZSBzYW1lIGh0bWwgZWxlbWVudCBhcyB3YXMgc3BlY2lmaWVkIGluIHRoZSBpbml0IG1ldGhvZC5cblx0ICogQGZ1bmN0aW9uIHJlc3RhcnRcblx0ICogQG1lbWJlcm9mIElCTUNoYXRcblx0ICogQGV4YW1wbGVcblx0ICogSUJNQ2hhdC5yZXN0YXJ0KCkudGhlbihmdW5jdGlvbigpe1xuXHQgKiAgICAgY29uc29sZS5sb2coJ3Jlc3RhcnRlZCcpO1xuXHQgKiB9KTtcblx0ICogQHJldHVybnMge1Byb21pc2V9IFJldHVybnM6IEEgcHJvbWlzZSBzbyB5b3UgY2FuIGNhbGwgZnVuY3Rpb25zIGFmdGVyIHRoZSB3aWRnZXQgaGFzIGJlZW4gaW5pdGlhbGl6ZWQuXG5cdCAqL1xuXHRyZXN0YXJ0OiBib290c3RyYXAucmVzdGFydCxcblx0LyoqXG5cdCAqIERlc3Ryb3kgdGhlIGNoYXQgd2lkZ2V0IGFuZCByZXN0b3JlIHRoZSBvcmlnaW5hbCBIVE1MIGNvbnRlbnQuIFVzZWZ1bCBpZiB0aGUgY2hhdCB3aWRnZXQgaXMgZGlzcGxheWVkIGluIGEgbW9kYWwsIGZvciBleGFtcGxlLCBhbmQgeW91IHdhbnQgaXQgdG8gZ28gYXdheSB3aGVuIHRoZSBtb2RhbCBpcyBjbG9zZWQuXG5cdCAqIEBmdW5jdGlvbiBkZXN0cm95XG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQuZGVzdHJveSgpLnRoZW4oZnVuY3Rpb24oKXtcblx0ICogICAgIGNvbnNvbGUubG9nKCdkZXN0cm95ZWQnKTtcblx0ICogfSk7XG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfSBSZXR1cm5zOiBBIHByb21pc2Ugc28geW91IGNhbiBjYWxsIGZ1bmN0aW9ucyBhZnRlciB0aGUgd2lkZ2V0IGhhcyBiZWVuIGRlc3Ryb3llZC5cblx0ICovXG5cdGRlc3Ryb3k6IGJvb3RzdHJhcC5kZXN0cm95LFxuXG5cdC8qKlxuXHQgKiBTZW5kIGEgbWVzc2FnZSB0byB0aGUgY2hhdCB3aWRnZXQgZnJvbSBvdXRzaWRlIHRoZSBjaGF0IHdpZGdldC4gVGhpcyBtZXNzYWdlIHdpbGwgYmUgZGlzcGxheWVkIGluIHRoZSBpbnRlcmZhY2UuXG5cdCAqIEBmdW5jdGlvbiBzZW5kXG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIC0gQSBtZXNzYWdlIHlvdSB3YW50IHRvIHNlbmQgdG8gdGhlIGNoYXQgd2lkZ2V0LlxuXHQgKiBAZXhhbXBsZVxuXHQgKiBJQk1DaGF0LnNlbmQoJ0hlbGxvIHdvcmxkLicpO1xuXHQgKi9cblx0c2VuZDogYm9vdHN0cmFwLnNlbmQsXG5cblx0LyoqXG5cdCAqIE1vY2sgcmVjZWl2aW5nIGEgbWVzc2FnZSB0byB0aGUgY2hhdCB3aWRnZXQgZnJvbSBvdXRzaWRlIHRoZSBjaGF0IHdpZGdldC5cblx0ICogQGZ1bmN0aW9uIHJlY2VpdmVcblx0ICogQG1lbWJlcm9mIElCTUNoYXRcblx0ICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgLSBBIG1lc3NhZ2UgeW91IHdhbnQgdG8gc2hvdyBhcyByZWNlaXZlZCBpbiB0aGUgY2hhdCB3aWRnZXQuXG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQucmVjZWl2ZSgnSGVsbG8gd29ybGQuJyk7XG5cdCAqL1xuXHRyZWNlaXZlOiBib290c3RyYXAucmVjZWl2ZSxcblxuXHQvKipcblx0ICogU2VuZCBhIG1lc3NhZ2UgdG8gdGhlIGNoYXQgd2lkZ2V0IGZyb20gb3V0c2lkZSB0aGUgY2hhdCB3aWRnZXQuIFRoaXMgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZCBpbiB0aGUgaW50ZXJmYWNlLCBidXQgd2lsbCBub3QgYWN0dWFsbHkgZ2V0IHNlbnQgdG8gdGhlIHNlcnZlci5cblx0ICogQGZ1bmN0aW9uIHNlbmRNb2NrXG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIC0gQSBtZXNzYWdlIHlvdSB3YW50IHRvIHByZXRlbmQgdG8gc2VuZCB0byB0aGUgY2hhdCB3aWRnZXQuXG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQuc2VuZE1vY2soJ0hlbGxvIHdvcmxkLicpO1xuXHQgKi9cblx0c2VuZE1vY2s6IGJvb3RzdHJhcC5zZW5kTW9jayxcblxuXHQvKipcblx0ICogU2VuZCBhIG1lc3NhZ2UgdG8gdGhlIGNoYXQgd2lkZ2V0IGZyb20gb3V0c2lkZSB0aGUgY2hhdCB3aWRnZXQuIFRoaXMgbWVzc2FnZSB3aWxsIE5PVCBiZSBkaXNwbGF5ZWQgaW4gdGhlIGludGVyZmFjZS5cblx0ICogQGZ1bmN0aW9uIHNlbmRTaWxlbnRseVxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSAtIEEgbWVzc2FnZSB5b3Ugd2FudCB0byBzZW5kIHRvIHRoZSBjaGF0IHdpZGdldCwgYnV0IG5vdCBkZSBkaXNwbGF5ZWQgaW4gdGhlIGludGVyZmFjZS5cblx0ICogQGV4YW1wbGVcblx0ICogSUJNQ2hhdC5zZW5kU2lsZW50bHkoJ0hlbGxvIHdvcmxkLicpO1xuXHQgKi9cblx0c2VuZFNpbGVudGx5OiBib290c3RyYXAuc2VuZFNpbGVudGx5LFxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlciBhIGN1c3RvbSBsYXlvdXQgd2l0aCB0aGUgY2hhdCB3aWRnZXQuIENhbGwgcmVnaXN0ZXJMYXlvdXQoKSBiZWZvcmUgeW91IGNhbGwgaW5pdCgpLlxuXHQgKiBAZnVuY3Rpb24gcmVnaXN0ZXJMYXlvdXRcblx0ICogQG1lbWJlcm9mIElCTUNoYXRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGxheW91dCAtIFRoZSBuYW1lIG9mIHRoZSBsYXlvdXQgeW91ciBib3Qgd2lsbCBwcm92aWRlIHdoZW4gaXQgaXMgdHJpZ2dlcmVkIHRvIHJlbmRlciBhIGxheW91dC5cblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gaW5pdCAtIEEgZnVuY3Rpb24gdGhhdCBydW5zIG9uZSB0aW1lLCB3aGVuIHRoZSBjaGF0IHdpZGdldCBpcyBib290c3RyYXBwZWQuIEJlIHN1cmUgdG8gc3Vic2NyaWJlIHRvIHRoZSBcImxheW91dDpZT1VSX0xBWU9VVF9OQU1FXCIgZXZlbnQgaW4gdGhpcyBmdW5jdGlvbi5cblx0ICogQGV4YW1wbGVcblx0ICogdmFyIFBsdW1iZXJCcm90aGVycyA9IHJlcXVpcmUoJy4uL3BsdW1iZXItYnJvdGhlcnMtZ2FtZScpO1xuXHQgKiB2YXIgY29uZmlnID0ge307XG5cdCAqXG5cdCAqIGZ1bmN0aW9uIGluaXRHYW1lKCkge1xuXHQgKiAgIElCTUNoYXQuc3Vic2NyaWJlKCdsYXlvdXQ6cGx1bWJlci1icm90aGVycy1nYW1lJywgZnVuY3Rpb24ob2JqKSB7XG5cdCAqICAgICB2YXIgdXVpZCA9IG9iai51dWlkO1xuXHQgKiAgICAgdmFyIHBhcmVudEVsZW1lbnQgPSBvYmouZWxlbWVudDtcblx0ICogICAgIHZhciBsYXlvdXRFbGVtZW50ID0gb2JqLmxheW91dEVsZW1lbnQ7XG5cdCAqICAgICB2YXIgbXNnRWxlbWVudCA9IG9iai5tc2dFbGVtZW50O1xuXHQgKiAgICAgdmFyIG1lc3NhZ2UgPSBvYmoubWVzc2FnZTtcblx0ICogICAgIHZhciBkYXRhID0gb2JqLmRhdGE7XG5cdCAqICAgICBtc2dFbGVtZW50LnRleHRDb250ZW50ID0gJ0xvYWRpbmcgUGx1bWJlciBCcm90aGVycyEnO1xuXHQgKiAgICAgdmFyIGJyb3RoZXJzID0gbmV3IFBsdW1iZXJCcm90aGVycygpO1xuXHQgKiAgICAgYnJvdGhlcnMucmVuZGVyKGxheW91dEVsZW1lbnQsIGRhdGEpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdCAqICAgICAgIG1zZ0VsZW1lbnQudGV4dENvbnRlbnQgPSAnRW5qb3kgeW91ciBnYW1lIG9mIFBsdW1iZXIgQnJvdGhlcnMhJztcblx0ICogICAgIH0pO1xuXHQgKiAgIH1cblx0ICogfSk7XG5cdCAqXG5cdCAqIElCTUNoYXQucmVnaXN0ZXJMYXlvdXQoJ3BsdW1iZXItYnJvdGhlcnMtZ2FtZScsIGluaXRHYW1lKTtcblx0ICogSUJNQ2hhdC5pbml0KGNvbmZpZyk7XG5cdCAqL1xuXHRyZWdpc3RlckxheW91dDogYm9vdHN0cmFwLnJlZ2lzdGVyTGF5b3V0LFxuXG5cdC8qKlxuXHQgKiBTZXQgZm9jdXMgdG8gdGhlIGNoYXQgdGV4dCBib3guIFVzZWZ1bCBpZiB5b3Ugd2FudCB1c2VycyB0byBiZSBhYmxlIHRvIGp1c3Qgc3RhcnQgdHlwaW5nIGludG8gdGhlIHRleHQgYm94IHdpdGhvdXQgaGF2aW5nIHRvIGNsaWNrIGluIHRoZSB0ZXh0IGJveCBmaXJzdCB0byBzZXQgZm9jdXMuXG5cdCAqIEBmdW5jdGlvbiBmb2N1c0lucHV0XG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQuZm9jdXNJbnB1dCgpO1xuXHQgKi9cblxuXHRmb2N1c0lucHV0OiBib290c3RyYXAuZm9jdXNJbnB1dCxcblx0LyoqXG5cdCAqIFByZXZlbnQgdXNlcnMgZnJvbSBzdWJtaXR0aW5nIG1lc3NhZ2VzIGluIHRoZSBjaGF0IHRleHQgYm94LiBVc2VmdWwgd2hlbiB5b3Ugd2FudCB0aGUgdXNlciB0byBpbnRlcmFjdCB3aXRoIGEgbGF5b3V0IGluc3RlYWQuXG5cdCAqIEBmdW5jdGlvbiBkaXNhYmxlSW5wdXRcblx0ICogQG1lbWJlcm9mIElCTUNoYXRcblx0ICogQGV4YW1wbGVcblx0ICogSUJNQ2hhdC5kaXNhYmxlSW5wdXQoKTtcblx0ICovXG5cdGRpc2FibGVJbnB1dDogYm9vdHN0cmFwLmRpc2FibGVJbnB1dCxcblxuXHQvKipcblx0ICogRW5hYmxlIHVzZXJzIHRvIHN1Ym1pdCBtZXNzYWdlcyBpbiB0aGUgY2hhdCB0ZXh0IGJveC4gVXNlZnVsIHdoZW4geW91IHdhbnQgdXNlcnMgdG8gYmUgYWJsZSB0byByZXR1cm4gdG8gYWRkaW5nIG1lc3NhZ2VzIHRvIHRoZSBjaGF0IHRleHQgYm94IGFmdGVyIGludGVyYWN0aW5nIHdpdGggYSBsYXlvdXQuXG5cdCAqIEBmdW5jdGlvbiBlbmFibGVJbnB1dFxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAZXhhbXBsZVxuXHQgKiBJQk1DaGF0LmVuYWJsZUlucHV0KCk7XG5cdCAqL1xuXHRlbmFibGVJbnB1dDogYm9vdHN0cmFwLmVuYWJsZUlucHV0LFxuXG5cdC8qKlxuXHQgKiBTdWJzY3JpYmUgdG8gYW4gSUJNQ2hhdCBldmVudC5cblx0ICogQGZ1bmN0aW9uIHN1YnNjcmliZVxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gVGFrZXMgYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBuYW1lIG9mIHRoZSBldmVudFxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIGZ1bmN0aW9uIHRvIHJ1biB3aGVuIGV2ZW50IGlzIGNhbGxlZFxuXHQgKiBAcGFyYW0gY29udGV4dCAtIG9wdGlvbmFsOiB2YWx1ZSBvZiBcInRoaXNcIiBpbiB0aGUgZnVuY3Rpb25cblx0ICogQGV4YW1wbGVcblx0ICogSUJNQ2hhdC5zdWJzY3JpYmUoJ3RoZS1lbmQtb2YtdGhlLXdvcmxkJywgZnVuY3Rpb24obWVzc2FnZSkge1xuXHQgKiAgIGNvbnNvbGUubG9nKG1lc3NzYWdlKTtcblx0ICogfSk7XG5cdCAqL1xuXHRzdWJzY3JpYmU6IGJvb3RzdHJhcC5zdWJzY3JpYmUsXG5cdC8qKlxuXHQgKiBQdWJsaXNoIGFuIElCTUNoYXQgZXZlbnQuXG5cdCAqIEBmdW5jdGlvbiBwdWJsaXNoXG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBBIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIG5hbWUgb2YgdGhlIGV2ZW50IGRhdGFcblx0ICogQHBhcmFtIGRhdGEgLSBEYXRhIHRvIHBhc3MgdG8gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIG9mIGFueSBzdWJzY3JpYmVkIGZ1bmN0aW9ucy4gQWNjZXB0cyBhbnkgZGF0YSB0eXBlLlxuXHQgKiBAZXhhbXBsZVxuXHQgKiBJQk1DaGF0LnB1Ymxpc2goJ3RoZS1lbmQtb2YtdGhlLXdvcmxkJywgJ3BhbmljIScpO1xuXHQgKi9cblx0cHVibGlzaDogYm9vdHN0cmFwLnB1Ymxpc2gsXG5cblx0LyoqXG5cdCAqIEBuYW1lc3BhY2UgcHJvZmlsZVxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKi9cblx0cHJvZmlsZToge1xuXHRcdC8qKlxuXHRcdCogR2V0IGFuIGl0ZW0gZnJvbSB0aGUgdXNlciBwcm9maWxlIGJhc2VkIG9uIGtleS5cblx0XHQqIEBtZW1iZXJvZiBJQk1DaGF0LnByb2ZpbGVcblx0XHQqIEBmdW5jdGlvbiBnZXRcblx0XHQqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUgbmFtZWQga2V5IG9mIHRoZSB2YWx1ZSB5b3UgYXJlIGFjY2Vzc2luZy5cblx0XHQqIEBleGFtcGxlXG5cdFx0KiBJQk1DaGF0LnByb2ZpbGUuZ2V0KCdmaXJzdF9uYW1lJyk7XG5cdFx0KiBAcmV0dXJucyB7QW55fSBSZXR1cm5zOiB0aGUgdmFsdWUgb2YgdGhlIGtleSBpbiB0aGUgcHJvZmlsZSBtYXAuXG5cdFx0Ki9cblx0XHRnZXQ6IGJvb3RzdHJhcC5wcm9maWxlLmdldCxcblx0XHQvKipcblx0XHQqIFNldCBhbiBpdGVtIGZyb20gdGhlIHVzZXIgcHJvZmlsZSBiYXNlZCBvbiBrZXkuXG5cdFx0KiBAbWVtYmVyb2YgSUJNQ2hhdC5wcm9maWxlXG5cdFx0KiBAZnVuY3Rpb24gc2V0XG5cdFx0KiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIG5hbWVkIGtleSBvZiB0aGUgdmFsdWUgeW91IGFyZSBzZXR0aW5nLlxuXHRcdCogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVGhlIHZhbHVlIHlvdSBhcmUgc2V0dGluZy5cblx0XHQqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnM6IEFuIGluc3RhbmNlIG9mIHByb2ZpbGUgZm9yIGNoYWluaW5nLlxuXHRcdCogQGV4YW1wbGVcblx0XHQqIElCTUNoYXQucHJvZmlsZS5zZXQoJ2ZpcnN0X25hbWUnLCAnam9obicpO1xuXHRcdCovXG5cdFx0c2V0OiBib290c3RyYXAucHJvZmlsZS5zZXQsXG5cdFx0LyoqXG5cdFx0KiBTZWUgaWYgYW4gaXRlbSBmcm9tIHRoZSB1c2VyIHByb2ZpbGUgZXhpc3RzIGJhc2VkIG9uIGtleS5cblx0XHQqIEBtZW1iZXJvZiBJQk1DaGF0LnByb2ZpbGVcblx0XHQqIEBmdW5jdGlvbiBoYXNcblx0XHQqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUgbmFtZWQga2V5IG9mIHRoZSB2YWx1ZSB5b3UgYXJlIGNoZWNraW5nIHRoZSBleGlzdGFuY2Ugb2YuXG5cdFx0KiBAZXhhbXBsZVxuXHRcdCogSUJNQ2hhdC5wcm9maWxlLmhhcygnZmlyc3RfbmFtZScpO1xuXHRcdCogQHJldHVybnMge0Jvb2xlYW59IFJldHVybnM6IEJvb2xlYW4gaW5kaWNhdGluZyBpZiB0aGUga2V5IGV4aXN0cy5cblx0XHQqL1xuXHRcdGhhczogYm9vdHN0cmFwLnByb2ZpbGUuaGFzLFxuXHRcdC8qKlxuXHRcdCogQ2xlYXIgdGhlIGVudGlyZSB1c2VyIHByb2ZpbGUuXG5cdFx0KiBAbWVtYmVyb2YgSUJNQ2hhdC5wcm9maWxlXG5cdFx0KiBAZnVuY3Rpb24gY2xlYXJcblx0XHQqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnM6IEFuIGluc3RhbmNlIG9mIHByb2ZpbGUgZm9yIGNoYWluaW5nLlxuXHRcdCogQGV4YW1wbGVcblx0XHQqIElCTUNoYXQucHJvZmlsZS5jbGVhcigpO1xuXHRcdCovXG5cdFx0Y2xlYXI6IGJvb3RzdHJhcC5wcm9maWxlLmNsZWFyLFxuXHRcdC8qKlxuXHRcdCogRGVsZXRlIGFuIGl0ZW0gZnJvbSB0aGUgdXNlciBwcm9maWxlIGJhc2VkIG9uIGtleS5cblx0XHQqIEBtZW1iZXJvZiBJQk1DaGF0LnByb2ZpbGVcblx0XHQqIEBmdW5jdGlvbiBkZWxldGVcblx0XHQqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnM6IEFuIGluc3RhbmNlIG9mIHByb2ZpbGUgZm9yIGNoYWluaW5nLlxuXHRcdCogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBuYW1lZCBrZXkgb2YgdGhlIHZhbHVlIHlvdSBhcmUgZGVsZXRpbmcuXG5cdFx0KiBAZXhhbXBsZVxuXHRcdCogSUJNQ2hhdC5wcm9maWxlLmRlbGV0ZSgnZmlyc3RfbmFtZScpO1xuXHRcdCovXG5cdFx0ZGVsZXRlOiBib290c3RyYXAucHJvZmlsZS5kZWxldGUsXG5cdFx0LyoqXG5cdFx0KiBJdGVyYXRlIG92ZXIgdGhlIHByb2ZpbGUuXG5cdFx0KiBAbWVtYmVyb2YgSUJNQ2hhdC5wcm9maWxlXG5cdFx0KiBAZnVuY3Rpb24gZm9yRWFjaFxuXHRcdCogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBUaGUgZnVuY3Rpb24geW91IGFyZSBjYWxsaW5nIG9uIGVhY2ggaXRlbSBpbiB0aGUgcHJvZmlsZSBvYmplY3QuIFRoaXMgZnVuY3Rpb24gaXMgcGFzc2VkIGtleSBhcyB0aGUgZmlyc3QgYXJndW1lbnQgYW5kIHZhbHVlIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuXG5cdFx0KiBAcGFyYW0ge09iamVjdH0gdGhpcyAtIChvcHRpb25hbCkgVGhlIGNvbnRleHQgeW91IHdpc2ggdG8gY2FsbCB0aGUgY2FsbGJhY2sgaW4uXG5cdFx0KiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zOiBBbiBpbnN0YW5jZSBvZiBwcm9maWxlIGZvciBjaGFpbmluZy5cblx0XHQqIEBleGFtcGxlXG5cdFx0KiBJQk1DaGF0LnByb2ZpbGUuZm9yRWFjaChmdW5jdGlvbihrZXksIHZhbHVlKSB7XG5cdFx0KiAgIGNvbnNvbGUubG9nKGtleSwgdmFsdWUpO1xuXHRcdCogfSk7XG5cdFx0Ki9cblx0XHRmb3JFYWNoOiBib290c3RyYXAucHJvZmlsZS5mb3JFYWNoXG5cdH0sXG5cblx0LyoqXG5cdCAqIEBpZ25vcmVcblx0ICovXG5cdGN1cnJlbnRTdWJzY3JpcHRpb25zOiBib290c3RyYXAuY3VycmVudFN1YnNjcmlwdGlvbnMsXG5cdC8qKlxuXHQgKiBAaWdub3JlXG5cdCAqL1xuXHRkZWJ1ZzogYm9vdHN0cmFwLmRlYnVnXG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy9yYXctbG9hZGVyL2luZGV4LmpzIS4vc3R5bGVzLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL3Jhdy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy9yYXctbG9hZGVyL2luZGV4LmpzIS4vc3R5bGVzLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdHlsZXMuY3NzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qKlxcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cXG4qXFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXFxcIkxpY2Vuc2VcXFwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcXG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XFxuKlxcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXFxuKlxcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXFxcIkFTIElTXFxcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXFxuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXFxuKiB0aGUgTGljZW5zZS5cXG4qL1xcblxcbi5JQk1DaGF0LW91dGVyLWNvbnRhaW5lciB7XFxuXFx0bWF4LXdpZHRoOiA3NjhweDtcXG4gIG1pbi13aWR0aDogMjg4cHg7XFxuICBtYXJnaW46IDAgYXV0byAwIGF1dG87XFxuICBib3JkZXI6IG5vbmU7XFxuXFx0bWluLWhlaWdodDoyMzBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0cGFkZGluZzowLjVlbTtcXG5cXHRwb3NpdGlvbjpyZWxhdGl2ZTtcXG5cXHRkaXNwbGF5OnRhYmxlO1xcblxcdHdpZHRoOjEwMCU7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuXFxuLyogQWdlbnQgQ29tcG9uZW50ICovXFxuXFxuLklCTUNoYXQtaW5uZXItY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OnRhYmxlLWNlbGw7XFxuXFx0aGVpZ2h0OjEwMCU7XFxuXFx0dmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG59XFxuXFxuLyogQ2hhdCBDb21wb25lbnQgKi9cXG5cXG4uSUJNQ2hhdC1jaGF0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTp0YWJsZS1yb3c7XFxuXFx0aGVpZ2h0OjEwMCU7XFxufVxcblxcbi8qIE1lc3NhZ2VzIENvbXBvbmVudCAqL1xcblxcbi5JQk1DaGF0LW1lc3NhZ2VzIHtcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcblxcdG92ZXJmbG93LXg6IGhpZGRlbjtcXG5cXHRoZWlnaHQ6YXV0bztcXG59XFxuXFxuLklCTUNoYXQtbWVzc2FnZXMgPiBkaXYge1xcblxcdG9wYWNpdHk6MC44O1xcbn1cXG5cXG4uSUJNQ2hhdC1tZXNzYWdlcyA+IGRpdiAuSUJNQ2hhdC13YXRzb24tbGF5b3V0IHtcXG5cXHRvcGFjaXR5OjAuODtcXG59XFxuXFxuLklCTUNoYXQtbWVzc2FnZXMgPiBkaXY6bGFzdC1jaGlsZCB7XFxuXFx0b3BhY2l0eToxO1xcbn1cXG5cXG4uSUJNQ2hhdC1tZXNzYWdlcyA+IGRpdjpsYXN0LWNoaWxkIC5JQk1DaGF0LXdhdHNvbi1sYXlvdXQge1xcblxcdG9wYWNpdHk6MTtcXG59XFxuXFxuLklCTUNoYXQtbWVzc2FnZXMgbGFiZWwge1xcblxcdGRpc3BsYXk6YmxvY2s7XFxuXFx0Zm9udC13ZWlnaHQ6Ym9sZDtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG5cXHRwYWRkaW5nLWJvdHRvbTowLjI1ZW07XFxufVxcblxcbi5JQk1DaGF0LW1lc3NhZ2VzIGlucHV0IHtcXG5cXHRib3JkZXItcmFkaXVzOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRwYWRkaW5nOjAuMjVlbTtcXG59XFxuXFxuLklCTUNoYXQtbWVzc2FnZXMgYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcblxcdGJvcmRlcjogMDtcXG5cXHRjb2xvcjogaW5oZXJpdDtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuXFx0b3ZlcmZsb3c6IHZpc2libGU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogZm9yIGlucHV0ICovXFxuXFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogZm9yIGJ1dHRvbiAqL1xcblxcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDJlbTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0bGluZS1oZWlnaHQ6IDIuNWVtO1xcblxcdG1hcmdpbjowO1xcbn1cXG5cXG4uSUJNQ2hhdC1tZXNzYWdlcyBidXR0b25bZGlzYWJsZWQ9XFxcInRydWVcXFwiXSB7XFxuXFx0Y3Vyc29yOiBkZWZhdWx0O1xcbiAgb3BhY2l0eTouODtcXG59XFxuXFxuLklCTUNoYXQtbWVzc2FnZXMgYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcXG5cXHRib3JkZXI6IDA7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuLyogV2F0c29uTWVzc2FnZSBDb21wb25lbnQgKi9cXG5cXG4uSUJNQ2hhdC13YXRzb24tbWVzc2FnZS1jb250YWluZXIge1xcblxcdG1hcmdpbjogMWVtIDAgMWVtIDA7XFxufVxcblxcbi5JQk1DaGF0LXdhdHNvbi1tZXNzYWdlIHtcXG5cXHRtYXJnaW4tcmlnaHQ6MmVtO1xcblxcdHBhZGRpbmc6IDAuMWVtO1xcblxcdHBhZGRpbmctbGVmdDogMWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC13YXRzb24tbGF5b3V0IHtcXG5cXHRtYXJnaW46IDAgMWVtIDAgMWVtO1xcbn1cXG5cXG4vKiBVc2VyTWVzc2FnZSBDb21wb25lbnQgKi9cXG5cXG4uSUJNQ2hhdC11c2VyLW1lc3NhZ2UtY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMWVtIDAgMWVtIDJlbTtcXG59XFxuXFxuLklCTUNoYXQtdXNlci1tZXNzYWdlIHtcXG4gIHBhZGRpbmc6MWVtO1xcblxcdG1hcmdpbjowIDFlbSAwIDA7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41ZW07XFxufVxcblxcbi8qIElucHV0IENvbXBvbmVudCAqL1xcblxcbi5JQk1DaGF0LWlucHV0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTp0YWJsZS1yb3c7XFxuXFx0aGVpZ2h0Ojc1cHg7XFxufVxcblxcbi5JQk1DaGF0LWlucHV0LWZvcm0ge1xcblxcdGRpc3BsYXk6dGFibGUtY2VsbDtcXG5cXHRwb3NpdGlvbjpyZWxhdGl2ZTtcXG5cXHRwYWRkaW5nOjI0cHggMjRweCAwIDI0cHg7XFxufVxcblxcbi5JQk1DaGF0LWNoYXQtdGV4dGJveCB7XFxuICBib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6MWVtO1xcbiAgbWFyZ2luOjAgMCAxLjYyNWVtIDA7XFxuICBwYWRkaW5nOjAgMCAzcHggMDtcXG4gIHdpZHRoOjEwMCU7XFxufVxcblxcbi5JQk1DaGF0LWNoYXQtdGV4dGJveFtkaXNhYmxlZD0nZGlzYWJsZWQnXSB7XFxuXFx0b3BhY2l0eTowLjU7XFxufVxcblxcbi5JQk1DaGF0LWlucHV0LWZvcm0gOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG5cXHRvcGFjaXR5OjE7XFxufVxcblxcbi5JQk1DaGF0LWNoYXQtdGV4dGJveDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzowIDAgMnB4IDA7XFxufVxcblxcbi8qIFNwaW5uZXIgKi9cXG4uSUJNQ2hhdC1pbnB1dC1sb2FkaW5nIHtcXG5cXHR6LWluZGV4OiAyO1xcblxcdHBvc2l0aW9uOmFic29sdXRlO1xcblxcdHJpZ2h0OiAxNnB4O1xcblxcdHRvcDogMTVweDtcXG5cXHRoZWlnaHQ6MzJweDtcXG5cXHR3aWR0aDozMnB4O1xcbn1cXG5cXG4uSUJNQ2hhdC1pYm0tc3Bpbm5lci1zdGFydCB7XFxuXFx0b3BhY2l0eTowO1xcbn1cXG5cXG4uSUJNQ2hhdC1pYm0tc3Bpbm5lciB7XFxuXFx0ZmlsbDogdHJhbnNwYXJlbnQ7XFxuXFx0c3Ryb2tlLXdpZHRoOiAzO1xcblxcdHN0cm9rZS1saW5lY2FwOiBcXFwiYnV0dFxcXCI7XFxuXFx0c3Ryb2tlLWRhc2hhcnJheTogMTtcXG5cXHRzdHJva2UtZGFzaG9mZnNldDogMTtcXG59XFxuXFxuLyogaW5pdGlhbCByb3RhdGlvbiBhbmQgc3Ryb2tlIGFuaW1hdGlvbiBhbmQgaW5maW5pdGUgcm90YXRpb24qL1xcbi5JQk1DaGF0LWluaXQtc3BpbiB7XFxuXFx0YW5pbWF0aW9uOiBpbml0LXJvdGF0ZSAxNTBtcyBsaW5lYXIgZm9yd2FyZHMsIHJvdGF0ZS1sb29wIDIwMDBtcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbi5JQk1DaGF0LWluaXQtc3BpbiBzdmcgY2lyY2xlIHtcXG5cXHRhbmltYXRpb246IGluaXQtc3Ryb2tlIDEwMDBtcyBsaW5lYXI7XFxufVxcblxcbi5JQk1DaGF0LWVuZC1zcGluIHN2ZyBjaXJjbGUge1xcblxcdGRpc3BsYXk6bm9uZTtcXG59XFxuXFxuLyogaW5pdGlhbCByb3RhdGlvbiAqL1xcblxcbkBrZXlmcmFtZXMgaW5pdC1yb3RhdGUge1xcblxcdDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG5cXHR9XFxuXFx0MTAwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG5cXHR9XFxufVxcblxcbi8qIGxvb3Bpbmcgcm90YXRpb24gKi9cXG5Aa2V5ZnJhbWVzIHJvdGF0ZS1sb29wIHtcXG5cXHQwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuXFx0fVxcblxcdDEwMCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuXFx0fVxcbn1cXG5cXG4vKiBpbml0aWFsIHN0cm9rZSBhbmltYXRpb24gKi9cXG5cXG5Aa2V5ZnJhbWVzIGluaXQtc3Ryb2tlIHtcXG5cXHQwJSB7XFxuXFx0XFx0b3BhY2l0eTogMDtcXG5cXHR9XFxuXFx0MTAwJSB7XFxuXFx0XFx0b3BhY2l0eTogMTtcXG5cXHR9XFxufVxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmF3LWxvYWRlciEuL3NyYy9zdHlsZXMuY3NzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge30sXHJcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHR2YXIgbWVtbztcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiBtZW1vO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdH0pLFxyXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0fSksXHJcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXHJcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXHJcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XHJcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcclxuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XHJcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XHJcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XHJcblx0aWYoaWR4ID49IDApIHtcclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG9iaik7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xyXG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xyXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcclxuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XHJcblxyXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgZXZlbnRIYW5kbGVycyA9IHJlcXVpcmUoJy4vZXZlbnRIYW5kbGVycy9pbmRleC5qcycpO1xudmFyIGxheW91dHMgPSByZXF1aXJlKCcuL2xheW91dHMnKTtcbnZhciBldmVudHMgPSByZXF1aXJlKCcuL2V2ZW50cycpO1xudmFyIEJvdFNESyA9IHJlcXVpcmUoJ0B3YXRzb24tdmlydHVhbC1hZ2VudC9jbGllbnQtc2RrL2xpYi93ZWInKTtcbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4vc3RhdGUnKTtcbnZhciBwcm9maWxlID0gcmVxdWlyZSgnLi9wcm9maWxlJyk7XG52YXIgUHJvbWlzZSA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdsb2Rhc2gvYXNzaWduJyk7XG52YXIgZGVmYXVsdFN0eWxlcyA9IHJlcXVpcmUoJy4vc3R5bGVzJyk7XG5cbnZhciBsYXlvdXRJbml0ID0ge307XG52YXIgcmVnaXN0ZXJlZExheW91dHMgPSBbXTtcblxuZnVuY3Rpb24gcmVnaXN0ZXJFdmVudHMocGxheWJhY2spIHtcblx0ZXZlbnRzLnN1YnNjcmliZSgnc3RhcnQnLCBldmVudEhhbmRsZXJzLnN0YXJ0KTtcblx0ZXZlbnRzLnN1YnNjcmliZSgncmVzaXplJywgZXZlbnRIYW5kbGVycy5yZXNpemUpO1xuXHRldmVudHMuc3Vic2NyaWJlKCdlcnJvcicsIGV2ZW50SGFuZGxlcnMuZXJyb3IpO1xuXHRldmVudHMuc3Vic2NyaWJlKCdkaXNhYmxlLWlucHV0JywgZXZlbnRIYW5kbGVycy5pbnB1dC5kaXNhYmxlSW5wdXQpO1xuXHRldmVudHMuc3Vic2NyaWJlKCdlbmFibGUtbG9hZGluZycsIGV2ZW50SGFuZGxlcnMuaW5wdXQuZW5hYmxlTG9hZGluZ0lucHV0KTtcblx0ZXZlbnRzLnN1YnNjcmliZSgnZGlzYWJsZS1sb2FkaW5nJywgZXZlbnRIYW5kbGVycy5pbnB1dC5kaXNhYmxlTG9hZGluZ0lucHV0KTtcblx0ZXZlbnRzLnN1YnNjcmliZSgnc2Nyb2xsLXRvLWJvdHRvbScsIGV2ZW50SGFuZGxlcnMuc2Nyb2xsVG9Cb3R0b20pO1xuXHRldmVudHMuc3Vic2NyaWJlKCdyZWNlaXZlJywgZXZlbnRIYW5kbGVycy5yZWNlaXZlKTtcblx0aWYgKHBsYXliYWNrID09PSB0cnVlKSB7XG5cdFx0ZXZlbnRzLnN1YnNjcmliZSgnc2VuZCcsIGV2ZW50SGFuZGxlcnMuc2VuZE1vY2spO1xuXHR9IGVsc2Uge1xuXHRcdGV2ZW50cy5zdWJzY3JpYmUoJ3NlbmQnLCBldmVudEhhbmRsZXJzLnNlbmQpO1xuXHRcdGV2ZW50cy5zdWJzY3JpYmUoJ3NlbmQtaW5wdXQtbWVzc2FnZScsIGV2ZW50SGFuZGxlcnMuc2VuZElucHV0TWVzc2FnZSk7XG5cdFx0ZXZlbnRzLnN1YnNjcmliZSgnZW5hYmxlLWlucHV0JywgZXZlbnRIYW5kbGVycy5pbnB1dC5lbmFibGVJbnB1dCk7XG5cdFx0ZXZlbnRzLnN1YnNjcmliZSgnZm9jdXMtaW5wdXQnLCBldmVudEhhbmRsZXJzLmlucHV0LmZvY3VzSW5wdXQpO1xuXHRcdGV2ZW50cy5zdWJzY3JpYmUoJ3NlbmRNb2NrJywgZXZlbnRIYW5kbGVycy5zZW5kTW9jayk7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJMYXlvdXRzKCkge1xuXHRyZWdpc3RlckxheW91dCgnc2hvdy1sb2NhdGlvbnMnLCBsYXlvdXRzLnNob3dMb2NhdGlvbnMuaW5pdCwgdHJ1ZSk7XG5cdHJlZ2lzdGVyTGF5b3V0KCdjaG9vc2UtbG9jYXRpb24tdHlwZScsIGxheW91dHMuY2hvb3NlTG9jYXRpb25UeXBlLmluaXQsIHRydWUpO1xuXHRyZWdpc3RlckxheW91dCgncmVxdWVzdC1nZW9sb2NhdGlvbi1sYXRsb25nJywgbGF5b3V0cy5yZXF1ZXN0R2VvbG9jYXRpb25MYXRsb25nLmluaXQsIHRydWUpO1xuXHRyZWdpc3RlckxheW91dCgnY2hvb3NlJywgbGF5b3V0cy5jaG9vc2UuaW5pdCwgdHJ1ZSk7XG5cdHJlZ2lzdGVyTGF5b3V0KCdmb3JtJywgbGF5b3V0cy5mb3JtLmluaXQsIHRydWUpO1xuXHRyZWdpc3RlckxheW91dCgnY2MtdmFsaWRhdG9yJywgbGF5b3V0cy5jcmVkaXRDYXJkLmluaXQsIHRydWUpO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdGVyZWRMYXlvdXRzLmxlbmd0aDsgaSsrKVxuXHRcdGxheW91dEluaXRbcmVnaXN0ZXJlZExheW91dHNbaV1dKCk7XG59XG5cbmZ1bmN0aW9uIGluaXQoY29uZmlnKSB7XG5cdHZhciByb290ID0gKHR5cGVvZiBjb25maWcuZWwgPT09ICdzdHJpbmcnKSA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy5lbCkgOiBjb25maWcuZWw7XG5cdHZhciBTREtjb25maWcgPSB7fTtcblx0aWYgKGNvbmZpZy5iYXNlVVJMKVxuXHRcdFNES2NvbmZpZy5iYXNlVVJMID0gY29uZmlnLmJhc2VVUkw7XG5cdGlmIChjb25maWcud2l0aENyZWRlbnRpYWxzKVxuXHRcdFNES2NvbmZpZy53aXRoQ3JlZGVudGlhbHMgPSBjb25maWcud2l0aENyZWRlbnRpYWxzO1xuXHRpZiAoY29uZmlnLlhJQk1DbGllbnRJRClcblx0XHRTREtjb25maWcuWElCTUNsaWVudElEID0gY29uZmlnLlhJQk1DbGllbnRJRDtcblx0aWYgKGNvbmZpZy5YSUJNQ2xpZW50U2VjcmV0KVxuXHRcdFNES2NvbmZpZy5YSUJNQ2xpZW50U2VjcmV0ID0gY29uZmlnLlhJQk1DbGllbnRTZWNyZXQ7XG5cdGlmIChjb25maWcudXNlcklEKVxuXHRcdFNES2NvbmZpZy51c2VySUQgPSBjb25maWcudXNlcklEO1xuXHRcdC8qXG5cdC8vIFRPRE86ICwgYWxsb3cgZW50ZXJpbmcgaW4gb2xkIGNoYXRJRFxuXHRjb25zdCBzZXNzaW9uQ2hhdElEID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ0lCTUNoYXRDaGF0SUQnKSB8fCBudWxsO1xuXHRpZiAoY2hhdElEIHx8IHNlc3Npb25DaGF0SUQpXG5cdFx0Y29uZmlnLmNoYXRJRCA9IChjaGF0SUQpID8gY2hhdElEIDogc2Vzc2lvbkNoYXRJRDtcblx0Ki9cblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0XHRpZiAoY3VycmVudC5hY3RpdmUgPT09IHRydWUpIHtcblx0XHRcdHJlc29sdmUoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKHJvb3QpIHtcblx0XHRcdGlmIChjb25maWcucGxheWJhY2sgPT09IHRydWUpIHtcblx0XHRcdFx0cmVnaXN0ZXJFdmVudHModHJ1ZSk7XG5cdFx0XHRcdHJlZ2lzdGVyTGF5b3V0cygpO1xuXHRcdFx0XHRldmVudHMucHVibGlzaCgnc3RhcnQnLCB7XG5cdFx0XHRcdFx0YWN0aXZlOiB0cnVlLFxuXHRcdFx0XHRcdHJvb3Q6IHJvb3QsXG5cdFx0XHRcdFx0bWFwc1NlcnZlcjogcHJvY2Vzcy5lbnYuTUFQU19TRVJWRVIgfHwgJ2h0dHBzOi8vZGQxLWktc2VydmUtbWFwcy5teWJsdWVtaXgubmV0LycsXG5cdFx0XHRcdFx0c3R5bGVzOiBhc3NpZ24oe30sIGRlZmF1bHRTdHlsZXMsIGNvbmZpZy5zdHlsZXMpLFxuXHRcdFx0XHRcdG9yaWdpbmFsQ29udGVudDogcm9vdC5pbm5lckhUTUwsXG5cdFx0XHRcdFx0Y2hhdElkOiAnNDInLFxuXHRcdFx0XHRcdHBsYXliYWNrOiB0cnVlXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9IGVsc2UgaWYgKGNvbmZpZy5ib3RJRCkge1xuXHRcdFx0XHRCb3RTREtcblx0XHRcdFx0XHQuY29uZmlndXJlKCBTREtjb25maWcgKVxuXHRcdFx0XHRcdC5zdGFydCggY29uZmlnLmJvdElEIClcblx0XHRcdFx0XHQudGhlbiggZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdFx0XHR2YXIgY2hhdElEID0gcmVzLmNoYXRJRDtcblx0XHRcdFx0XHRcdHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdJQk1DaGF0Q2hhdElEJywgY2hhdElEKTtcblx0XHRcdFx0XHRcdHJlZ2lzdGVyTGF5b3V0cygpO1xuXHRcdFx0XHRcdFx0cmVnaXN0ZXJFdmVudHMoKTtcblx0XHRcdFx0XHRcdGV2ZW50cy5wdWJsaXNoKCdzdGFydCcsIHtcblx0XHRcdFx0XHRcdFx0YWN0aXZlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRyb290OiByb290LFxuXHRcdFx0XHRcdFx0XHRtYXBzU2VydmVyOiBwcm9jZXNzLmVudi5NQVBTX1NFUlZFUiB8fCAnaHR0cHM6Ly9kZDEtaS1zZXJ2ZS1tYXBzLm15Ymx1ZW1peC5uZXQvJyxcblx0XHRcdFx0XHRcdFx0Ym90SUQ6IGNvbmZpZy5ib3RJRCxcblx0XHRcdFx0XHRcdFx0Y2hhdElEOiBjaGF0SUQsXG5cdFx0XHRcdFx0XHRcdHN0eWxlczogYXNzaWduKHt9LCBkZWZhdWx0U3R5bGVzLCBjb25maWcuc3R5bGVzKSxcblx0XHRcdFx0XHRcdFx0YmFzZVVSTDogY29uZmlnLmJhc2VVUkwsXG5cdFx0XHRcdFx0XHRcdG9yaWdpbmFsQ29udGVudDogcm9vdC5pbm5lckhUTUxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0ZXZlbnRzLnB1Ymxpc2goJ3JlY2VpdmUnLCByZXMpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdH0pWydjYXRjaCddKCBmdW5jdGlvbihlcnIpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ0lCTUNoYXQ6JywgZXJyICk7XG5cdFx0XHRcdFx0XHRyZWplY3QoZXJyKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlamVjdCh7XG5cdFx0XHRcdFx0ZXJyb3I6ICdCb3RJRCBpcyByZXF1aXJlZCEnXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZWplY3Qoe1xuXHRcdFx0XHRlcnJvcjogJ0VsZW1lbnQgZm9yIGNoYXQgZG9lcyBub3QgZXhpc3QhJ1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJMYXlvdXQobGF5b3V0LCBpbml0LCBkZWZhdWx0U2V0dXApIHtcblx0aWYgKHJlZ2lzdGVyZWRMYXlvdXRzLmluZGV4T2YobGF5b3V0KSA9PT0gLTEgfHwgIWRlZmF1bHRTZXR1cCkge1xuXHRcdHJlZ2lzdGVyZWRMYXlvdXRzLnB1c2gobGF5b3V0KTtcblx0XHRsYXlvdXRJbml0W2xheW91dF0gPSBpbml0O1xuXHR9XG59XG5cbmZ1bmN0aW9uIHNlbmQobWVzc2FnZSkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdGlmIChjdXJyZW50LmFjdGl2ZSkge1xuXHRcdGV2ZW50cy5wdWJsaXNoKCdzZW5kJywge1xuXHRcdFx0dGV4dDogbWVzc2FnZVxuXHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlY2VpdmUobWVzc2FnZSkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdGlmIChjdXJyZW50LmFjdGl2ZSlcblx0XHRldmVudHMucHVibGlzaCgncmVjZWl2ZScsIG1lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiBzZW5kTW9jayhtZXNzYWdlKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0aWYgKGN1cnJlbnQuYWN0aXZlKSB7XG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ3NlbmQtbW9jaycsIHtcblx0XHRcdHRleHQ6IG1lc3NhZ2Vcblx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBzZW5kU2lsZW50bHkobWVzc2FnZSkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdGlmIChjdXJyZW50LmFjdGl2ZSkge1xuXHRcdGV2ZW50cy5wdWJsaXNoKCdzZW5kJywge1xuXHRcdFx0dGV4dDogbWVzc2FnZSxcblx0XHRcdHNpbGVudDogdHJ1ZVxuXHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGZvY3VzSW5wdXQoKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0aWYgKGN1cnJlbnQuYWN0aXZlKVxuXHRcdGV2ZW50cy5wdWJsaXNoKCdmb2N1cy1pbnB1dCcpO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlSW5wdXQoKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0aWYgKGN1cnJlbnQuYWN0aXZlKVxuXHRcdGV2ZW50cy5wdWJsaXNoKCdkaXNhYmxlLWlucHV0Jyk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZUlucHV0KCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdGlmIChjdXJyZW50LmFjdGl2ZSlcblx0XHRldmVudHMucHVibGlzaCgnZW5hYmxlLWlucHV0Jyk7XG59XG5cbmZ1bmN0aW9uIGRlYnVnKCkge1xuXHRpZiAocHJvY2Vzcy5lbnYuREVCVUcpIHtcblx0XHRzdGF0ZS5zZXRTdGF0ZSh7XG5cdFx0XHRERUJVRzogdHJ1ZVxuXHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdFx0aWYgKGN1cnJlbnQucm9vdCkge1xuXHRcdFx0ZXZlbnRzLnB1Ymxpc2goJ2Rlc3Ryb3knKTtcblx0XHRcdGV2ZW50cy5kZXN0cm95KCk7IC8vcmVtb3ZlIGFsbCBldmVudHNcblx0XHRcdGN1cnJlbnQucm9vdC5pbm5lckhUTUwgPSBjdXJyZW50Lm9yaWdpbmFsQ29udGVudDsgLy9yZXN0b3JlIG9yaWdpbmFsIGNvbnRlbnQgdG8gZGl2XG5cdFx0XHRzdGF0ZS5kZXN0cm95U3RhdGUoKTtcblx0XHRcdHJlc29sdmUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVqZWN0KCdJQk1DaGF0IGhhcyBubyBpbnN0YW5jZSB0byBkZXN0cm95LicpO1xuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIHJlc3RhcnQoKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdFx0ZGVzdHJveSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHRpbml0KHsgZWw6IGN1cnJlbnQucm9vdCwgYm90SUQ6IGN1cnJlbnQuYm90SUQsIGJhc2VVUkw6IGN1cnJlbnQuYmFzZVVSTCB9KS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9KVsnY2F0Y2gnXShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdHJlamVjdChlKTtcblx0XHRcdH0pO1xuXHRcdH0pWydjYXRjaCddKGZ1bmN0aW9uKGUpIHtcblx0XHRcdHJlamVjdChlKTtcblx0XHR9KTtcblx0fSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRwcm9maWxlOiBwcm9maWxlLFxuXHRpbml0OiBpbml0LFxuXHRyZWdpc3RlckxheW91dDogcmVnaXN0ZXJMYXlvdXQsXG5cdHNlbmQ6IHNlbmQsXG5cdHJlY2VpdmU6IHJlY2VpdmUsXG5cdHNlbmRNb2NrOiBzZW5kTW9jayxcblx0c2VuZFNpbGVudGx5OiBzZW5kU2lsZW50bHksXG5cdGZvY3VzSW5wdXQ6IGZvY3VzSW5wdXQsXG5cdGRpc2FibGVJbnB1dDogZGlzYWJsZUlucHV0LFxuXHRlbmFibGVJbnB1dDogZW5hYmxlSW5wdXQsXG5cdHN1YnNjcmliZTogZXZlbnRzLnN1YnNjcmliZSxcblx0cHVibGlzaDogZXZlbnRzLnB1Ymxpc2gsXG5cdGRlYnVnOiBkZWJ1Zyxcblx0ZGVzdHJveTogZGVzdHJveSxcblx0cmVzdGFydDogcmVzdGFydCxcblx0Y3VycmVudFN1YnNjcmlwdGlvbnM6IGV2ZW50cy5jdXJyZW50U3Vic2NyaXB0aW9ucyxcblx0aGFzU3Vic2NyaXB0aW9uOiBldmVudHMuaGFzU3Vic2NyaXB0aW9uLFxuXHRjb21wbGV0ZUV2ZW50OiBldmVudHMuY29tcGxldGVFdmVudFxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYm9vdHN0cmFwLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgc3RhcnQgPSByZXF1aXJlKCcuL2V2ZW50cy9zdGFydCcpO1xudmFyIHJlc2l6ZSA9IHJlcXVpcmUoJy4vZXZlbnRzL3Jlc2l6ZScpO1xudmFyIHJlY2VpdmUgPSByZXF1aXJlKCcuL2V2ZW50cy9yZWNlaXZlJyk7XG52YXIgc2VuZCA9IHJlcXVpcmUoJy4vZXZlbnRzL3NlbmQnKTtcbnZhciBzZW5kTW9jayA9IHJlcXVpcmUoJy4vZXZlbnRzL3NlbmQtbW9jaycpO1xudmFyIHNlbmRJbnB1dE1lc3NhZ2UgPSByZXF1aXJlKCcuL2V2ZW50cy9zZW5kLWlucHV0LW1lc3NhZ2UnKTtcbnZhciBpbnB1dCA9IHJlcXVpcmUoJy4vZXZlbnRzL2lucHV0Jyk7XG52YXIgZXJyb3IgPSByZXF1aXJlKCcuL2V2ZW50cy9lcnJvcicpO1xudmFyIHNjcm9sbFRvQm90dG9tID0gcmVxdWlyZSgnLi9ldmVudHMvc2Nyb2xsLXRvLWJvdHRvbScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0cmVzaXplOiByZXNpemUsXG5cdHN0YXJ0OiBzdGFydCxcblx0c2VuZDogc2VuZCxcblx0c2VuZE1vY2s6IHNlbmRNb2NrLFxuXHRyZWNlaXZlOiByZWNlaXZlLFxuXHRpbnB1dDogaW5wdXQsXG5cdGVycm9yOiBlcnJvcixcblx0c2Nyb2xsVG9Cb3R0b206IHNjcm9sbFRvQm90dG9tLFxuXHRzZW5kSW5wdXRNZXNzYWdlOiBzZW5kSW5wdXRNZXNzYWdlXG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9ldmVudEhhbmRsZXJzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgc3RhdGUgPSByZXF1aXJlKCcuLi8uLi9zdGF0ZScpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMnKTtcbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcbnZhciB0ZW1wbGF0ZXMgPSB7XG5cdHN0YXJ0OiByZXF1aXJlKCcuLi90ZW1wbGF0ZXMvc3RhcnQuaHRtbCcpXG59O1xuZnVuY3Rpb24gc3RhcnQoZGF0YSkge1xuXHR2YXIgY3VycmVudDtcblx0c3RhdGUuc2V0U3RhdGUoZGF0YSk7XG5cdGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHR1dGlscy5hdHRhY2hTdHlsZXMoKTtcblx0Y3VycmVudC5yb290LmNsYXNzTmFtZSArPSBcIiBjaGF0SUQtXCIgKyBjdXJyZW50LmNoYXRJRDtcblx0Y3VycmVudC5yb290LmlubmVySFRNTCA9IHRlbXBsYXRlcy5zdGFydDtcblx0dmFyIGVsZW1lbnRzID0ge1xuXHRcdGNvbnRhaW5lcjogY3VycmVudC5yb290LnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LWNoYXQtY29udGFpbmVyJyksXG5cdFx0Y2hhdEhvbGRlcjogY3VycmVudC5yb290LnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LW1lc3NhZ2VzJyksXG5cdFx0aW5uZXJDb250YWluZXI6IGN1cnJlbnQucm9vdC5xdWVyeVNlbGVjdG9yKCcuSUJNQ2hhdC1pbm5lci1jb250YWluZXInKSxcblx0XHRpbnB1dDogY3VycmVudC5yb290LnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LWNoYXQtdGV4dGJveCcpLFxuXHRcdGZvcm06IGN1cnJlbnQucm9vdC5xdWVyeVNlbGVjdG9yKCcuSUJNQ2hhdC1pbnB1dC1mb3JtJyksXG5cdFx0bG9hZGVyOiBjdXJyZW50LnJvb3QucXVlcnlTZWxlY3RvcignLklCTUNoYXQtaW5wdXQtbG9hZGluZycpLFxuXHRcdGlucHV0SG9sZGVyOiBjdXJyZW50LnJvb3QucXVlcnlTZWxlY3RvcignLklCTUNoYXQtaW5wdXQtY29udGFpbmVyJylcblx0fTtcblxuXHRpZiAoY3VycmVudC5wbGF5YmFjayA9PT0gdHJ1ZSlcblx0XHRlbGVtZW50cy5pbnB1dEhvbGRlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnRzLmlucHV0SG9sZGVyKTtcblxuXHRzdGF0ZS5zZXRTdGF0ZShlbGVtZW50cyk7XG5cdGVsZW1lbnRzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcInN1Ym1pdFwiLFxuXHRcdGZ1bmN0aW9uKGUpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR9LFxuXHRcdGZhbHNlXG5cdCk7XG5cdGVsZW1lbnRzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0J2tleXByZXNzJyxcblx0XHRmdW5jdGlvbihlKSB7XG5cdFx0XHRpZiAoZS5rZXlDb2RlID09PSAxMylcblx0XHRcdFx0ZXZlbnRzLnB1Ymxpc2goJ3NlbmQtaW5wdXQtbWVzc2FnZScpO1xuXHRcdH0sXG5cdFx0ZmFsc2Vcblx0KTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHV0aWxzLmRlYm91bmNlKGZ1bmN0aW9uKCkge1xuXHRcdGV2ZW50cy5wdWJsaXNoKCdyZXNpemUnKTtcblx0fSwgMTAwMCkpO1xuXHRldmVudHMucHVibGlzaCgncmVzaXplJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhcnQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2V2ZW50SGFuZGxlcnMvZXZlbnRzL3N0YXJ0LmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgc3RhdGVzID0gW107XG52YXIgc3RhdGUgPSB7fTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdsb2Rhc2gvYXNzaWduJyk7XG5cbmZ1bmN0aW9uIGdldFN0YXRlKCkge1xuXHRyZXR1cm4gc3RhdGU7XG59XG5mdW5jdGlvbiBkZXN0cm95U3RhdGUoKSB7XG5cdHN0YXRlID0ge307XG5cdHNldFN0YXRlKHt9KTtcbn1cblxuZnVuY3Rpb24gc2V0U3RhdGUodXBkYXRlZCkge1xuXHRzdGF0ZSA9IGFzc2lnbih7fSwgc3RhdGUsIHVwZGF0ZWQpO1xuXHRpZiAoc3RhdGUuREVCVUcpIHtcblx0XHRzdGF0ZXMucHVzaChzdGF0ZSk7XG5cdFx0Y29uc29sZS5sb2coJ1NUQVRFIEhJU1RPUlk6ICcsIHN0YXRlcyk7XG5cdFx0Y29uc29sZS5sb2coJ05FVyBTVEFURTogJywgc3RhdGUpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlcygpIHtcblx0dmFyIGN1cnJlbnQgPSBnZXRTdGF0ZSgpO1xuXHRyZXR1cm4gY3VycmVudC5zdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGdldFByb2ZpbGUoKSB7XG5cdHZhciBjdXJyZW50ID0gZ2V0U3RhdGUoKTtcblx0cmV0dXJuIGN1cnJlbnQucHJvZmlsZSB8fCB7fTtcbn1cblxuZnVuY3Rpb24gc2V0UHJvZmlsZShkYXRhKSB7XG5cdHNldFN0YXRlKHtcblx0XHRwcm9maWxlOiBhc3NpZ24oe30sIGdldFByb2ZpbGUoKSwgZGF0YSlcblx0fSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID17XG5cdGdldFN0YXRlOiBnZXRTdGF0ZSxcblx0c2V0U3RhdGU6IHNldFN0YXRlLFxuXHRkZXN0cm95U3RhdGU6IGRlc3Ryb3lTdGF0ZSxcblx0Z2V0UHJvZmlsZTogZ2V0UHJvZmlsZSxcblx0c2V0UHJvZmlsZTogc2V0UHJvZmlsZSxcblx0Z2V0U3R5bGVzOiBnZXRTdHlsZXNcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N0YXRlLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYXNzaWduVmFsdWUnKSxcbiAgICBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGNyZWF0ZUFzc2lnbmVyID0gcmVxdWlyZSgnLi9fY3JlYXRlQXNzaWduZXInKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKiogRGV0ZWN0IGlmIHByb3BlcnRpZXMgc2hhZG93aW5nIHRob3NlIG9uIGBPYmplY3QucHJvdG90eXBlYCBhcmUgbm9uLWVudW1lcmFibGUuICovXG52YXIgbm9uRW51bVNoYWRvd3MgPSAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7ICd2YWx1ZU9mJzogMSB9LCAndmFsdWVPZicpO1xuXG4vKipcbiAqIEFzc2lnbnMgb3duIGVudW1lcmFibGUgc3RyaW5nIGtleWVkIHByb3BlcnRpZXMgb2Ygc291cmNlIG9iamVjdHMgdG8gdGhlXG4gKiBkZXN0aW5hdGlvbiBvYmplY3QuIFNvdXJjZSBvYmplY3RzIGFyZSBhcHBsaWVkIGZyb20gbGVmdCB0byByaWdodC5cbiAqIFN1YnNlcXVlbnQgc291cmNlcyBvdmVyd3JpdGUgcHJvcGVydHkgYXNzaWdubWVudHMgb2YgcHJldmlvdXMgc291cmNlcy5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgbXV0YXRlcyBgb2JqZWN0YCBhbmQgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BPYmplY3QuYXNzaWduYF0oaHR0cHM6Ly9tZG4uaW8vT2JqZWN0L2Fzc2lnbikuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEwLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7Li4uT2JqZWN0fSBbc291cmNlc10gVGhlIHNvdXJjZSBvYmplY3RzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqIEBzZWUgXy5hc3NpZ25JblxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiB9XG4gKlxuICogZnVuY3Rpb24gQmFyKCkge1xuICogICB0aGlzLmMgPSAzO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYiA9IDI7XG4gKiBCYXIucHJvdG90eXBlLmQgPSA0O1xuICpcbiAqIF8uYXNzaWduKHsgJ2EnOiAwIH0sIG5ldyBGb28sIG5ldyBCYXIpO1xuICogLy8gPT4geyAnYSc6IDEsICdjJzogMyB9XG4gKi9cbnZhciBhc3NpZ24gPSBjcmVhdGVBc3NpZ25lcihmdW5jdGlvbihvYmplY3QsIHNvdXJjZSkge1xuICBpZiAobm9uRW51bVNoYWRvd3MgfHwgaXNQcm90b3R5cGUoc291cmNlKSB8fCBpc0FycmF5TGlrZShzb3VyY2UpKSB7XG4gICAgY29weU9iamVjdChzb3VyY2UsIGtleXMoc291cmNlKSwgb2JqZWN0KTtcbiAgICByZXR1cm47XG4gIH1cbiAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9hc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gIGlmICghKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGVxKG9ialZhbHVlLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ25WYWx1ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fYXNzaWduVmFsdWUuanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9lcS5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25WYWx1ZScpO1xuXG4vKipcbiAqIENvcGllcyBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgaWRlbnRpZmllcnMgdG8gY29weS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvcGllZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5T2JqZWN0KHNvdXJjZSwgcHJvcHMsIG9iamVjdCwgY3VzdG9taXplcikge1xuICBvYmplY3QgfHwgKG9iamVjdCA9IHt9KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG5cbiAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUgPT09IHVuZGVmaW5lZCA/IHNvdXJjZVtrZXldIDogbmV3VmFsdWUpO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weU9iamVjdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fY29weU9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYmFzZVJlc3QgPSByZXF1aXJlKCcuL19iYXNlUmVzdCcpLFxuICAgIGlzSXRlcmF0ZWVDYWxsID0gcmVxdWlyZSgnLi9faXNJdGVyYXRlZUNhbGwnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgXy5hc3NpZ25gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhc3NpZ25lciBUaGUgZnVuY3Rpb24gdG8gYXNzaWduIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFzc2lnbmVyIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVBc3NpZ25lcihhc3NpZ25lcikge1xuICByZXR1cm4gYmFzZVJlc3QoZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2VzKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IHNvdXJjZXMubGVuZ3RoLFxuICAgICAgICBjdXN0b21pemVyID0gbGVuZ3RoID4gMSA/IHNvdXJjZXNbbGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQsXG4gICAgICAgIGd1YXJkID0gbGVuZ3RoID4gMiA/IHNvdXJjZXNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgICBjdXN0b21pemVyID0gKGFzc2lnbmVyLmxlbmd0aCA+IDMgJiYgdHlwZW9mIGN1c3RvbWl6ZXIgPT0gJ2Z1bmN0aW9uJylcbiAgICAgID8gKGxlbmd0aC0tLCBjdXN0b21pemVyKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZ3VhcmQgJiYgaXNJdGVyYXRlZUNhbGwoc291cmNlc1swXSwgc291cmNlc1sxXSwgZ3VhcmQpKSB7XG4gICAgICBjdXN0b21pemVyID0gbGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IGN1c3RvbWl6ZXI7XG4gICAgICBsZW5ndGggPSAxO1xuICAgIH1cbiAgICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgdmFyIHNvdXJjZSA9IHNvdXJjZXNbaW5kZXhdO1xuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBhc3NpZ25lcihvYmplY3QsIHNvdXJjZSwgaW5kZXgsIGN1c3RvbWl6ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVBc3NpZ25lcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fY3JlYXRlQXNzaWduZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFwcGx5ID0gcmVxdWlyZSgnLi9fYXBwbHknKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnJlc3RgIHdoaWNoIGRvZXNuJ3QgdmFsaWRhdGUgb3IgY29lcmNlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUmVzdChmdW5jLCBzdGFydCkge1xuICBzdGFydCA9IG5hdGl2ZU1heChzdGFydCA9PT0gdW5kZWZpbmVkID8gKGZ1bmMubGVuZ3RoIC0gMSkgOiBzdGFydCwgMCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuICAgICAgICBhcnJheSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgYXJyYXlbaW5kZXhdID0gYXJnc1tzdGFydCArIGluZGV4XTtcbiAgICB9XG4gICAgaW5kZXggPSAtMTtcbiAgICB2YXIgb3RoZXJBcmdzID0gQXJyYXkoc3RhcnQgKyAxKTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSBhcnJheTtcbiAgICByZXR1cm4gYXBwbHkoZnVuYywgdGhpcywgb3RoZXJBcmdzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUmVzdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fYmFzZVJlc3QuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBBIGZhc3RlciBhbHRlcm5hdGl2ZSB0byBgRnVuY3Rpb24jYXBwbHlgLCB0aGlzIGZ1bmN0aW9uIGludm9rZXMgYGZ1bmNgXG4gKiB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiBgdGhpc0FyZ2AgYW5kIHRoZSBhcmd1bWVudHMgb2YgYGFyZ3NgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBpbnZva2UgYGZ1bmNgIHdpdGguXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGBmdW5jYC5cbiAqL1xuZnVuY3Rpb24gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncykge1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcpO1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICB9XG4gIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcGx5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19hcHBseS5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgdmFsdWUgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IGluZGV4IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgaW5kZXggb3Iga2V5IGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBvYmplY3QgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBvYmplY3QgYXJndW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJdGVyYXRlZUNhbGwodmFsdWUsIGluZGV4LCBvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIGluZGV4O1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJ1xuICAgICAgICA/IChpc0FycmF5TGlrZShvYmplY3QpICYmIGlzSW5kZXgoaW5kZXgsIG9iamVjdC5sZW5ndGgpKVxuICAgICAgICA6ICh0eXBlID09ICdzdHJpbmcnICYmIGluZGV4IGluIG9iamVjdClcbiAgICAgICkge1xuICAgIHJldHVybiBlcShvYmplY3RbaW5kZXhdLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSXRlcmF0ZWVDYWxsO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19pc0l0ZXJhdGVlQ2FsbC5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc0FycmF5TGlrZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA4LTkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGlzT2JqZWN0KHZhbHVlKSA/IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc09iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaXNMZW5ndGguanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgJiZcbiAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJbmRleDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9faXNJbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9rZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBiYXNlVGltZXMgPSByZXF1aXJlKCcuL19iYXNlVGltZXMnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIC8vIFNhZmFyaSA4LjEgbWFrZXMgYGFyZ3VtZW50cy5jYWxsZWVgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIC8vIFNhZmFyaSA5IG1ha2VzIGBhcmd1bWVudHMubGVuZ3RoYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICB2YXIgcmVzdWx0ID0gKGlzQXJyYXkodmFsdWUpIHx8IGlzQXJndW1lbnRzKHZhbHVlKSlcbiAgICA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZylcbiAgICA6IFtdO1xuXG4gIHZhciBsZW5ndGggPSByZXN1bHQubGVuZ3RoLFxuICAgICAgc2tpcEluZGV4ZXMgPSAhIWxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChrZXkgPT0gJ2xlbmd0aCcgfHwgaXNJbmRleChrZXksIGxlbmd0aCkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUxpa2VLZXlzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19hcnJheUxpa2VLZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRpbWVzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19iYXNlVGltZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzQXJyYXlMaWtlT2JqZWN0ID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZU9iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcbiAgLy8gU2FmYXJpIDguMSBtYWtlcyBgYXJndW1lbnRzLmNhbGxlZWAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgcmV0dXJuIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAoIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKSB8fCBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBhcmdzVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlT2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzQXJyYXlMaWtlT2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc0FycmF5LmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19iYXNlS2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX25hdGl2ZUtleXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlckFyZztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fb3ZlckFyZy5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4vc3RhdGUnKTtcblxuZnVuY3Rpb24gX3JlbmRlcihlbCwgc3RhdGUpIHtcblx0ZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdJQk1DaGF0LWlibS1zcGlubmVyIElCTUNoYXQtaW5wdXQtbG9hZGluZyBJQk1DaGF0LScgKyBzdGF0ZSArICctc3BpbicpO1xufVxuXG52YXIgc3Bpbm5lciA9IHtcblx0c2hvdzogZnVuY3Rpb24oZWwpIHtcblx0XHRfcmVuZGVyKGVsLCAnaW5pdCcpO1xuXHR9LFxuXHRoaWRlOiBmdW5jdGlvbihlbCkge1xuXHRcdF9yZW5kZXIoZWwsICdlbmQnKTtcblx0fVxufTtcblxuZnVuY3Rpb24gX2dldFN0eWxlcygpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHR2YXIgY29udGFpbmVyQ2xhc3MgPSBcIi5jaGF0SUQtXCIgKyBjdXJyZW50LmNoYXRJRDtcblx0dmFyIHN0eWxlcyA9IGNvbnRhaW5lckNsYXNzICsgXCIgLklCTUNoYXQtZGVmYXVsdC1jb2xvcnMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogXCIgKyBjdXJyZW50LnN0eWxlcy5iYWNrZ3JvdW5kICsgXCI7XFxuICBjb2xvcjogXCIgKyBjdXJyZW50LnN0eWxlcy50ZXh0ICsgXCI7XFxufVxcblwiICtcblx0XHRcdFx0XHRcdFx0Y29udGFpbmVyQ2xhc3MgKyBcIiAuSUJNQ2hhdC1zZWNvbmRhcnktY29sb3JzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IFwiICsgY3VycmVudC5zdHlsZXMuc2Vjb25kYXJ5QmFja2dyb3VuZCArIFwiO1xcbiAgY29sb3I6IFwiICsgY3VycmVudC5zdHlsZXMuc2Vjb25kYXJ5VGV4dCArIFwiO1xcbn1cXG5cIiArXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lckNsYXNzICsgXCIgLklCTUNoYXQtYWNjZW50LWNvbG9ycyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiArIGN1cnJlbnQuc3R5bGVzLmFjY2VudEJhY2tncm91bmQgKyBcIjtcXG4gIGNvbG9yOiBcIiArIGN1cnJlbnQuc3R5bGVzLmFjY2VudFRleHQgKyBcIjtcXG59XFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRjb250YWluZXJDbGFzcyArIFwiIC5JQk1DaGF0LWlucHV0LWNvbG9ycyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiArIGN1cnJlbnQuc3R5bGVzLmlucHV0QmFja2dyb3VuZCArIFwiO1xcbiAgY29sb3I6IFwiICsgY3VycmVudC5zdHlsZXMuaW5wdXRUZXh0ICsgXCI7XFxufVxcblwiICtcblx0XHRcdFx0XHRcdFx0Y29udGFpbmVyQ2xhc3MgKyBcIiAuSUJNQ2hhdC13YXRzb24tbWVzc2FnZS10aGVtZSB7XFxuXFx0Ym9yZGVyLWxlZnQ6IDNweCBzb2xpZCBcIiArIGN1cnJlbnQuc3R5bGVzLmFjY2VudEJhY2tncm91bmQgKyBcIjtcXG59XFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRjb250YWluZXJDbGFzcyArIFwiIGEsXFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRjb250YWluZXJDbGFzcyArIFwiIGE6aG92ZXIsXFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRjb250YWluZXJDbGFzcyArIFwiIGE6dmlzaXRlZCxcXG5cIiArXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lckNsYXNzICsgXCIgYTphY3RpdmUge1xcblxcdGNvbG9yOiBcIiArIGN1cnJlbnQuc3R5bGVzLmxpbmsgKyBcIjtcXG59XFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRjb250YWluZXJDbGFzcyArIFwiIC5JQk1DaGF0LWNoYXQtdGV4dGJveC10aGVtZSB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggXCIgKyBjdXJyZW50LnN0eWxlcy50ZXh0ICsgXCI7XFxufVxcblwiICtcblx0XHRcdFx0XHRcdFx0Y29udGFpbmVyQ2xhc3MgKyBcIiAuSUJNQ2hhdC1jaGF0LXRleHRib3gtdGhlbWU6Zm9jdXMge1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IFwiICsgY3VycmVudC5zdHlsZXMuYWNjZW50QmFja2dyb3VuZCArIFwiO1xcbn1cXG5cIiArXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lckNsYXNzICsgXCIgLklCTUNoYXQtaWJtLXNwaW5uZXIge1xcblxcdHN0cm9rZTogXCIgKyBjdXJyZW50LnN0eWxlcy5hY2NlbnRCYWNrZ3JvdW5kICsgXCI7XFxufVwiO1xuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuXHR2YXIgdGltZW91dDtcblx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcblx0XHR2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdHRpbWVvdXQgPSBudWxsO1xuXHRcdFx0aWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG5cdFx0fTtcblx0XHR2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuXHRcdGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiBzZXJpYWxpemUob2JqKSB7XG5cdGNvbnN0IHN0ciA9IFtdO1xuXHRmb3IgKHZhciBwIGluIG9iaikge1xuXHRcdGlmIChvYmouaGFzT3duUHJvcGVydHkocCkpXG5cdFx0XHRzdHIucHVzaChlbmNvZGVVUklDb21wb25lbnQocCkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW3BdKSk7XG5cdH1cblx0cmV0dXJuIHN0ci5qb2luKCcmJyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VBbGwoc3RyLCBmaW5kLCByZXBsYWNlKSB7XG5cdHJldHVybiBzdHIuc3BsaXQoZmluZCkuam9pbihyZXBsYWNlKTtcbn1cblxuZnVuY3Rpb24gZ2V0VVVJRCgpIHtcblx0dmFyIGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0aWYgKCB3aW5kb3cucGVyZm9ybWFuY2UgJiYgdHlwZW9mIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgPT09ICdmdW5jdGlvbicgKVxuXHRcdGQgKz0gcGVyZm9ybWFuY2Uubm93KCk7XG5cdHJldHVybiAnSUJNQ2hhdC0nICsgKCd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24oYykge1xuXHRcdHZhciByID0gKGQgKyBNYXRoLnJhbmRvbSgpKjE2KSUxNiB8IDA7XG5cdFx0ZCA9IE1hdGguZmxvb3IoZC8xNik7XG5cdFx0cmV0dXJuICgoIGMgPT0gJ3gnID8gciA6IChyJjB4M3wweDgpKS50b1N0cmluZygxNikpO1xuXHR9KSk7XG59XG5cbmZ1bmN0aW9uIGF0dGFjaFN0eWxlcygpIHtcblx0dmFyIHN0eWxlcyA9IF9nZXRTdHlsZXMoKTtcblx0dmFyIGNzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cdGNzcy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRpZiAoY3NzLnN0eWxlU2hlZXQpXG5cdFx0Y3NzLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHN0eWxlcztcblx0ZWxzZVxuXHRcdGNzcy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHlsZXMpKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKGNzcyk7XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuXHR2YXIgdGhhdENsYXNzID0gXCIgXCIgKyBjbGFzc05hbWUgKyBcIiBcIjtcblx0cmV0dXJuICggKFwiIFwiICsgZWxlbWVudC5jbGFzc05hbWUgKyBcIiBcIikucmVwbGFjZSgvW1xcblxcdF0vZywgXCIgXCIpLmluZGV4T2YodGhhdENsYXNzKSA+IC0xICk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRkZWJvdW5jZTogZGVib3VuY2UsXG5cdHNlcmlhbGl6ZTogc2VyaWFsaXplLFxuXHRyZXBsYWNlQWxsOiByZXBsYWNlQWxsLFxuXHRoYXNDbGFzczogaGFzQ2xhc3MsXG5cdGdldFVVSUQ6IGdldFVVSUQsXG5cdGF0dGFjaFN0eWxlczogYXR0YWNoU3R5bGVzLFxuXHRzcGlubmVyOiBzcGlubmVyXG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy91dGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4vc3RhdGUnKTtcblxudmFyIGV2ZW50cyA9IFtdO1xuXG5mdW5jdGlvbiBjb21wbGV0ZUV2ZW50KHJlc3BvbnNlKSB7XG5cdHN3aXRjaCAocmVzcG9uc2UpIHtcblx0Y2FzZSB0cnVlOlxuXHRcdHB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0XHRtZXNzYWdlOiAnc3VjY2VzcycsXG5cdFx0XHRzaWxlbnQ6IHRydWVcblx0XHR9KTtcblx0XHRicmVhaztcblx0Y2FzZSBmYWxzZTpcblx0XHRwdWJsaXNoKCdzZW5kJywge1xuXHRcdFx0bWVzc2FnZTogJ2ZhaWx1cmUnLFxuXHRcdFx0c2lsZW50OiB0cnVlXG5cdFx0fSk7XG5cdFx0YnJlYWs7XG5cdGRlZmF1bHQ6XG5cdFx0cHVibGlzaCgnc2VuZCcsIHtcblx0XHRcdG1lc3NhZ2U6ICdjYW5jZWwnLFxuXHRcdFx0c2lsZW50OiB0cnVlXG5cdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZGVzdHJveSgpIHtcblx0ZXZlbnRzID0gW107XG59XG5cbmZ1bmN0aW9uIHVuc3Vic2NyaWJlKGV2ZW50LCBoYW5kbGVyLCBjb250ZXh0KSB7XG5cdGlmICh0eXBlb2YgY29udGV4dCA9PT0gdW5kZWZpbmVkKVxuXHRcdGNvbnRleHQgPSBoYW5kbGVyO1xufVxuXG5mdW5jdGlvbiBjdXJyZW50U3Vic2NyaXB0aW9ucygpIHtcblx0cmV0dXJuIGV2ZW50cy5zbGljZSgwKTtcbn1cblxuZnVuY3Rpb24gaGFzU3Vic2NyaXB0aW9uKGFjdGlvbikge1xuXHR2YXIgc3Vic2NyaXB0aW9ucyA9IGN1cnJlbnRTdWJzY3JpcHRpb25zKCk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic2NyaXB0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBzdWJzY3JpcHRpb24gPSBzdWJzY3JpcHRpb25zW2ldO1xuXHRcdGlmIChzdWJzY3JpcHRpb24gJiYgc3Vic2NyaXB0aW9uLmV2ZW50ID09PSBhY3Rpb24pXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHN1YnNjcmliZShldmVudCwgaGFuZGxlciwgY29udGV4dCkge1xuXHRpZiAodHlwZW9mIGNvbnRleHQgPT09IHVuZGVmaW5lZClcblx0XHRjb250ZXh0ID0gaGFuZGxlcjtcblx0dmFyIGluZGV4ID0gZXZlbnRzLnB1c2goeyBldmVudDogZXZlbnQsIGhhbmRsZXI6IGhhbmRsZXIuYmluZChjb250ZXh0KSB9KSAtIDE7XG5cdHJldHVybiB7XG5cdFx0cmVtb3ZlOiBmdW5jdGlvbigpIHtcblx0XHRcdGRlbGV0ZSBldmVudHNbaW5kZXhdO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gcHVibGlzaChldmVudCwgZGF0YSwgY2IpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHR2YXIgd2FzU3Vic2NyaXB0aW9uID0gZmFsc2U7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKGV2ZW50c1tpXSAmJiBldmVudHNbaV0uZXZlbnQgPT09IGV2ZW50KSB7XG5cdFx0XHRpZiAoY3VycmVudC5ERUJVRykge1xuXHRcdFx0XHR3YXNTdWJzY3JpcHRpb24gPSB0cnVlO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnU3Vic2NyaXB0aW9uIHRvICcgKyBldmVudCArICcgd2FzIGNhbGxlZDogJywgZGF0YSk7XG5cdFx0XHR9XG5cdFx0XHRldmVudHNbaV0uaGFuZGxlci5jYWxsKHVuZGVmaW5lZCwgZGF0YSwgY2IpO1xuXHRcdH1cblx0fVxuXHRpZiAoY3VycmVudC5ERUJVRyAmJiBldmVudC5pbmRleE9mKCdsYXlvdXQnKSA9PSAtMSAmJiAhd2FzU3Vic2NyaXB0aW9uKVxuXHRcdGNvbnNvbGUud2FybignTm90aGluZyBpcyBzdWJzY3JpYmVkIHRvICcgKyBldmVudCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRkZXN0cm95OiBkZXN0cm95LFxuXHR1bnN1YnNjcmliZTogdW5zdWJzY3JpYmUsXG5cdGN1cnJlbnRTdWJzY3JpcHRpb25zOiBjdXJyZW50U3Vic2NyaXB0aW9ucyxcblx0aGFzU3Vic2NyaXB0aW9uOiBoYXNTdWJzY3JpcHRpb24sXG5cdHN1YnNjcmliZTogc3Vic2NyaWJlLFxuXHRwdWJsaXNoOiBwdWJsaXNoLFxuXHRjb21wbGV0ZUV2ZW50OiBjb21wbGV0ZUV2ZW50XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9ldmVudHMuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIklCTUNoYXQtb3V0ZXItY29udGFpbmVyIElCTUNoYXQtb3V0ZXItY29udGFpbmVyLXRoZW1lIElCTUNoYXQtZGVmYXVsdC1jb2xvcnNcXFwiPlxcblxcdDxkaXYgY2xhc3M9XFxcIklCTUNoYXQtY2hhdC1jb250YWluZXIgSUJNQ2hhdC1jaGF0LWNvbnRhaW5lci10aGVtZVxcXCI+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiSUJNQ2hhdC1pbm5lci1jb250YWluZXIgSUJNQ2hhdC1pbm5lci1jb250YWluZXItdGhlbWVcXFwiPlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIklCTUNoYXQtbWVzc2FnZXMgSUJNQ2hhdC1tZXNzYWdlcy10aGVtZVxcXCI+PC9kaXY+XFxuXFx0XFx0PC9kaXY+XFxuXFx0PC9kaXY+XFxuXFx0PGRpdiBjbGFzcz1cXFwiSUJNQ2hhdC1pbnB1dC1jb250YWluZXIgSUJNQ2hhdC1pbnB1dC1jb250YWluZXItdGhlbWVcXFwiPlxcblxcdFxcdDxmb3JtIGNsYXNzPVxcXCJJQk1DaGF0LWlucHV0LWZvcm0gSUJNQ2hhdC1pbnB1dC1mb3JtLXRoZW1lXFxcIj5cXG5cXHRcXHRcXHQ8aW5wdXQgYXJpYS1sYWJlbGxlZGJ5PVxcXCJFbnRlciBhIE1lc3NhZ2VcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJJQk1DaGF0LWNoYXQtdGV4dGJveCBJQk1DaGF0LWNoYXQtdGV4dGJveC10aGVtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIG1lc3NhZ2UuLi5cXFwiIC8+XFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiSUJNQ2hhdC1pYm0tc3Bpbm5lci1zdGFydCBJQk1DaGF0LWlucHV0LWxvYWRpbmcgSUJNQ2hhdC1pbnB1dC1sb2FkaW5nLXRoZW1lXFxcIj5cXG5cXHRcXHRcXHRcXHQ8c3ZnIGNsYXNzPVxcXCJJQk1DaGF0LWlibS1zcGlubmVyXFxcIiB3aWR0aD0zMiBoZWlnaHQ9MzIgdmlld0JveD1cXFwiLTE2IC0xNiAzMiAzMlxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0PGNpcmNsZSBjeD0wIGN5PTAgcj04IC8+PC9zdmc+XFxuXFx0XFx0XFx0XFx0PC9zdmc+XFxuXFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0PC9mb3JtPlxcblxcdDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9ldmVudEhhbmRsZXJzL3RlbXBsYXRlcy9zdGFydC5odG1sXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIHN0YXRlID0gcmVxdWlyZSgnLi4vLi4vc3RhdGUnKTtcblxuZnVuY3Rpb24gcmVzaXplKCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdGlmIChjdXJyZW50LmFjdGl2ZSkge1xuXHRcdGN1cnJlbnQuY2hhdEhvbGRlci5zdHlsZS5tYXhIZWlnaHQgPSAoY3VycmVudC5yb290LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAtIGN1cnJlbnQuaW5wdXRIb2xkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC0gMjApICsgJ3B4Jztcblx0XHRjdXJyZW50LmNoYXRIb2xkZXIuc3R5bGUubWF4V2lkdGggPSAoKGN1cnJlbnQucm9vdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCA+IDI4OCkgPyBjdXJyZW50LnJvb3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggOiAyODgpICsgJ3B4Jztcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlc2l6ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRIYW5kbGVycy9ldmVudHMvcmVzaXplLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIHN0YXRlID0gcmVxdWlyZSgnLi4vLi4vc3RhdGUnKTtcbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnbG9kYXNoL2Fzc2lnbicpO1xudmFyIHRleHQgPSByZXF1aXJlKCcuLi90ZW1wbGF0ZXMvcmVjZWl2ZS5odG1sJyk7XG5cbmZ1bmN0aW9uIHdyaXRlTWVzc2FnZShlbGVtZW50LCB0ZXh0KSB7XG5cdHZhciBleHAgPSAvKCgoaHR0cHM/OlxcL1xcLyl8KHd3d1xcLikpW15cXHNdKykvZ2k7XG5cdHZhciBsaW5rZWQgPSB0ZXh0LnJlcGxhY2UoZXhwLCd8fHwkMXx8fCcpO1xuXHR2YXIgYXJyID0gbGlua2VkLnNwbGl0KCd8fHwnKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0dmFyIG5ld3RleHQgPSBhcnJbaV0ucmVwbGFjZShleHAsICc8YSBocmVmPVwiJDFcIiB0YXJnZXQ9XCJfYmxhbmtcIj4kMTwvYT4nKTtcblx0XHRpZiAobmV3dGV4dCA9PT0gYXJyW2ldKVxuXHRcdFx0Y2hpbGQgPSBfYWRkTGluZUVuZGluZ3MoY2hpbGQsIG5ld3RleHQpO1xuXHRcdGVsc2Vcblx0XHRcdGNoaWxkLmlubmVySFRNTCA9IG5ld3RleHQ7XG5cdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gX2FkZExpbmVFbmRpbmdzKGVsLCBuZXd0ZXh0KSB7XG5cdHZhciBhcnIgPSBuZXd0ZXh0LnNwbGl0KCdcXG4nKTtcblx0aWYgKGFyci5sZW5ndGggPT09IDEpIHtcblx0XHRlbC50ZXh0Q29udGVudCA9IGFyclswXTtcblx0fSBlbHNlIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGFycltpXS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHZhciBjaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0Y2hpbGQudGV4dENvbnRlbnQgPSBhcnJbaV07XG5cdFx0XHRcdGVsLmFwcGVuZENoaWxkKGNoaWxkKTtcblx0XHRcdH1cblx0XHRcdGlmIChpIDwgYXJyLmxlbmd0aCAtIDEpXG5cdFx0XHRcdGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZWw7XG59XG5cbmZ1bmN0aW9uIHJlY2VpdmUoZGF0YSkge1xuXHR2YXIgY2hlY2tEYXRhID0gKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykgPyB7IG1lc3NhZ2U6IHsgdGV4dDogZGF0YSB9IH0gOiBkYXRhO1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdGRhdGEgPSBhc3NpZ24oe30sIGNoZWNrRGF0YSwgeyB1dWlkOiB1dGlscy5nZXRVVUlEKCkgfSk7XG5cdHN0YXRlLnNldFN0YXRlKHtcblx0XHRtZXNzYWdlczogW10uY29uY2F0KGN1cnJlbnQubWVzc2FnZXMgfHwgW10sIGRhdGEpXG5cdH0pO1xuXHR2YXIgbXNnID0gKGRhdGEubWVzc2FnZSAmJiBkYXRhLm1lc3NhZ2UudGV4dCkgPyAoKEFycmF5LmlzQXJyYXkoZGF0YS5tZXNzYWdlLnRleHQpKSA/IGRhdGEubWVzc2FnZS50ZXh0IDogW2RhdGEubWVzc2FnZS50ZXh0XSkgOiBbJyddO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IG1zZy5sZW5ndGg7IGkrKykge1xuXHRcdGlmIChtc2dbaV0ubGVuZ3RoID4gMCkge1xuXHRcdFx0dmFyIHBhcnNlZCA9IHV0aWxzLnJlcGxhY2VBbGwodGV4dCwgJyR7ZGF0YS51dWlkfScsIGRhdGEudXVpZCk7XG5cdFx0XHR2YXIgaXRlbTtcblx0XHRcdGN1cnJlbnQuY2hhdEhvbGRlci5pbm5lckhUTUwgKz0gcGFyc2VkO1xuXHRcdFx0aXRlbSA9IGN1cnJlbnQuY2hhdEhvbGRlci5xdWVyeVNlbGVjdG9yKCcuJyArIGRhdGEudXVpZCArICc6bGFzdC1jaGlsZCAuSUJNQ2hhdC13YXRzb24tbWVzc2FnZScpO1xuXHRcdFx0d3JpdGVNZXNzYWdlKGl0ZW0sIG1zZ1tpXSk7XG5cdFx0fVxuXHR9XG5cdGV2ZW50cy5wdWJsaXNoKCdmb2N1cy1pbnB1dCcpO1xuXG5cdGRhdGEuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgZGF0YS51dWlkICsgJzpsYXN0LWNoaWxkJyk7XG5cdGRhdGEubGF5b3V0RWxlbWVudCA9IGRhdGEuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuSUJNQ2hhdC13YXRzb24tbGF5b3V0Jyk7XG5cdGRhdGEubXNnRWxlbWVudCA9IGRhdGEuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuSUJNQ2hhdC13YXRzb24tbWVzc2FnZScpO1xuXG5cdGlmIChkYXRhLm1lc3NhZ2UgJiYgZGF0YS5tZXNzYWdlLmxheW91dCAmJiBkYXRhLm1lc3NhZ2UubGF5b3V0Lm5hbWUpIHtcblx0XHR2YXIgbGF5b3V0ID0gJ2xheW91dDonICsgZGF0YS5tZXNzYWdlLmxheW91dC5uYW1lO1xuXHRcdGlmIChldmVudHMuaGFzU3Vic2NyaXB0aW9uKGxheW91dCkpXG5cdFx0XHRldmVudHMucHVibGlzaChsYXlvdXQsIGRhdGEpO1xuXHRcdGVsc2UgaWYgKGN1cnJlbnQuREVCVUcpXG5cdFx0XHRjb25zb2xlLndhcm4oJ05vdGhpbmcgaXMgc3Vic2NyaWJlZCB0byAnICsgbGF5b3V0KTtcblx0fVxuXG5cdGlmIChkYXRhLm1lc3NhZ2UgJiYgZGF0YS5tZXNzYWdlLmFjdGlvbiAmJiBkYXRhLm1lc3NhZ2UuYWN0aW9uLm5hbWUpIHtcblx0XHR2YXIgYWN0aW9uID0gJ2FjdGlvbjonICsgZGF0YS5tZXNzYWdlLmFjdGlvbi5uYW1lO1xuXHRcdGlmIChldmVudHMuaGFzU3Vic2NyaXB0aW9uKGFjdGlvbikpXG5cdFx0XHRldmVudHMucHVibGlzaChhY3Rpb24sIGRhdGEsIGV2ZW50cy5jb21wbGV0ZUV2ZW50KTtcblx0XHRlbHNlIGlmIChjdXJyZW50LkRFQlVHKVxuXHRcdFx0Y29uc29sZS53YXJuKCdOb3RoaW5nIGlzIHN1YnNjcmliZWQgdG8gJyArIGFjdGlvbik7XG5cdH1cblxuXHRldmVudHMucHVibGlzaCgnZGlzYWJsZS1sb2FkaW5nJyk7XG5cdGV2ZW50cy5wdWJsaXNoKCdzY3JvbGwtdG8tYm90dG9tJyk7XG5cdC8qXG5cdG1ha2UgYW4gb3B0aW9uIGZvciBhdXRvIGFkZGluZyBhcmlhIHN0dWZmXG5cdCovXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVjZWl2ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRIYW5kbGVycy9ldmVudHMvcmVjZWl2ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiJHtkYXRhLnV1aWR9XFxcIiBjbGFzcz1cXFwiSUJNQ2hhdC13YXRzb24tbWVzc2FnZS1jb250YWluZXIgSUJNQ2hhdC13YXRzb24tbWVzc2FnZS1jb250YWluZXItdGhlbWVcXFwiPlxcblxcdDxkaXYgY2xhc3M9XFxcIklCTUNoYXQtd2F0c29uLW1lc3NhZ2UgSUJNQ2hhdC13YXRzb24tbWVzc2FnZS10aGVtZVxcXCI+PC9kaXY+XFxuXFx0PGRpdiBjbGFzcz1cXFwiSUJNQ2hhdC13YXRzb24tbGF5b3V0XFxcIj48L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRIYW5kbGVycy90ZW1wbGF0ZXMvcmVjZWl2ZS5odG1sXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIHN0YXRlID0gcmVxdWlyZSgnLi4vLi4vc3RhdGUnKTtcbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcbnZhciBCb3RTREsgPSByZXF1aXJlKCdAd2F0c29uLXZpcnR1YWwtYWdlbnQvY2xpZW50LXNkay9saWIvd2ViJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ2xvZGFzaC9hc3NpZ24nKTtcblxuZnVuY3Rpb24gc2VuZChkYXRhKSB7XG5cdGlmIChkYXRhLnRleHQgJiYgZGF0YS50ZXh0Lmxlbmd0aCA+IDApIHtcblx0XHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdFx0YWRkVG9TZW5kUXVldWUoZGF0YSk7XG5cdFx0aWYgKCFjdXJyZW50LmluUHJvZ3Jlc3MpXG5cdFx0XHRhZ2VudFNlbmQoKTtcblx0fVxufVxuXG5mdW5jdGlvbiBhZGRUb1NlbmRRdWV1ZShkYXRhKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0dmFyIHF1ZXVlID0gY3VycmVudC5zZW5kUXVldWUgfHwgW107XG5cdHZhciBuZXdRdWV1ZSA9IHF1ZXVlLnNsaWNlKDApO1xuXHRuZXdRdWV1ZS5wdXNoKGRhdGEpO1xuXHRzdGF0ZS5zZXRTdGF0ZSh7XG5cdFx0c2VuZFF1ZXVlOiBuZXdRdWV1ZVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWdlbnRTZW5kKCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdGV2ZW50cy5wdWJsaXNoKCdlbmFibGUtbG9hZGluZycpO1xuXHR2YXIgbmV3RGF0YSA9IGFzc2lnbih7fSwgY3VycmVudC5zZW5kUXVldWVbMF0sIHsgdXVpZDogdXRpbHMuZ2V0VVVJRCgpIH0pO1xuXHRzdGF0ZS5zZXRTdGF0ZSh7XG5cdFx0aW5Qcm9ncmVzczogdHJ1ZSxcblx0XHRzZW5kUXVldWU6IGN1cnJlbnQuc2VuZFF1ZXVlLnNsaWNlKDAsIC0xKSxcblx0XHRtZXNzYWdlczogW10uY29uY2F0KGN1cnJlbnQubWVzc2FnZXMgfHwgW10sIG5ld0RhdGEpXG5cdH0pO1xuXHRCb3RTREtcblx0XHQuc2VuZCggY3VycmVudC5ib3RJRCwgY3VycmVudC5jaGF0SUQsIG5ld0RhdGEudGV4dCApXG5cdFx0LnRoZW4oIGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0Y3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdFx0XHRzdGF0ZS5zZXRTdGF0ZSh7XG5cdFx0XHRcdGluUHJvZ3Jlc3M6IGZhbHNlXG5cdFx0XHR9KTtcblx0XHRcdGV2ZW50cy5wdWJsaXNoKCdkaXNhYmxlLWxvYWRpbmcnKTtcblx0XHRcdGV2ZW50cy5wdWJsaXNoKCdyZWNlaXZlJywgcmVzKTtcblx0XHRcdGlmIChjdXJyZW50LnNlbmRRdWV1ZS5sZW5ndGggPiAwKVxuXHRcdFx0XHRhZ2VudFNlbmQoKTtcblx0XHR9KVxuXHRcdC5jYXRjaCggZnVuY3Rpb24oZXJyKSB7XG5cdFx0XHRzdGF0ZS5zZXRTdGF0ZSh7XG5cdFx0XHRcdGluUHJvZ3Jlc3M6IGZhbHNlXG5cdFx0XHR9KTtcblx0XHRcdGV2ZW50cy5wdWJsaXNoKCdkaXNhYmxlLWxvYWRpbmcnKTtcblx0XHRcdGV2ZW50cy5wdWJsaXNoKCdlcnJvcicsIGVycik7XG5cdFx0fSk7XG5cdGN1cnJlbnQucm9vdC5xdWVyeVNlbGVjdG9yKCcuSUJNQ2hhdC1jaGF0LXRleHRib3gnKS52YWx1ZSA9ICcnO1xuXG5cdGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHR2YXIgbXNnID0gbmV3RGF0YS50ZXh0IHx8ICcnO1xuXHRpZiAoIW5ld0RhdGEuc2lsZW50KSB7XG5cdFx0dmFyIHRleHQgPSByZXF1aXJlKCcuLi90ZW1wbGF0ZXMvc2VuZC5odG1sJyk7XG5cdFx0dmFyIHBhcnNlZCA9IHV0aWxzLnJlcGxhY2VBbGwodGV4dCwgJyR7ZGF0YS51dWlkfScsIG5ld0RhdGEudXVpZCk7XG5cdFx0Y3VycmVudC5jaGF0SG9sZGVyLmlubmVySFRNTCArPSBwYXJzZWQ7XG5cdFx0Y3VycmVudC5jaGF0SG9sZGVyLnF1ZXJ5U2VsZWN0b3IoJyMnICsgbmV3RGF0YS51dWlkICsgJyAuSUJNQ2hhdC11c2VyLW1lc3NhZ2UnKS50ZXh0Q29udGVudCA9IG1zZztcblx0XHRldmVudHMucHVibGlzaCgnc2Nyb2xsLXRvLWJvdHRvbScpO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2VuZDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRIYW5kbGVycy9ldmVudHMvc2VuZC5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcIlNES1wiLFtdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuU0RLPWUoKTp0LlNESz1lKCl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShyKXtpZihuW3JdKXJldHVybiBuW3JdLmV4cG9ydHM7dmFyIG89bltyXT17ZXhwb3J0czp7fSxpZDpyLGxvYWRlZDohMX07cmV0dXJuIHRbcl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsZSksby5sb2FkZWQ9ITAsby5leHBvcnRzfXZhciBuPXt9O3JldHVybiBlLm09dCxlLmM9bixlLnA9XCJcIixlKDApfShbZnVuY3Rpb24odCxlLG4pe3QuZXhwb3J0cz1uKDIyKX0sZnVuY3Rpb24odCxlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKHQpe3JldHVyblwiW29iamVjdCBBcnJheV1cIj09PWIuY2FsbCh0KX1mdW5jdGlvbiByKHQpe3JldHVyblwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIj09PWIuY2FsbCh0KX1mdW5jdGlvbiBvKHQpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBGb3JtRGF0YSYmdCBpbnN0YW5jZW9mIEZvcm1EYXRhfWZ1bmN0aW9uIGkodCl7dmFyIGU7cmV0dXJuIGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIEFycmF5QnVmZmVyJiZBcnJheUJ1ZmZlci5pc1ZpZXc/QXJyYXlCdWZmZXIuaXNWaWV3KHQpOnQmJnQuYnVmZmVyJiZ0LmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyfWZ1bmN0aW9uIHUodCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHR9ZnVuY3Rpb24gcyh0KXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgdH1mdW5jdGlvbiBjKHQpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiB0fWZ1bmN0aW9uIGEodCl7cmV0dXJuIG51bGwhPT10JiZcIm9iamVjdFwiPT10eXBlb2YgdH1mdW5jdGlvbiBmKHQpe3JldHVyblwiW29iamVjdCBEYXRlXVwiPT09Yi5jYWxsKHQpfWZ1bmN0aW9uIGwodCl7cmV0dXJuXCJbb2JqZWN0IEZpbGVdXCI9PT1iLmNhbGwodCl9ZnVuY3Rpb24gcCh0KXtyZXR1cm5cIltvYmplY3QgQmxvYl1cIj09PWIuY2FsbCh0KX1mdW5jdGlvbiBoKHQpe3JldHVyblwiW29iamVjdCBGdW5jdGlvbl1cIj09PWIuY2FsbCh0KX1mdW5jdGlvbiBkKHQpe3JldHVybiBhKHQpJiZoKHQucGlwZSl9ZnVuY3Rpb24gbSh0KXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgVVJMU2VhcmNoUGFyYW1zJiZ0IGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zfWZ1bmN0aW9uIHYodCl7cmV0dXJuIHQucmVwbGFjZSgvXlxccyovLFwiXCIpLnJlcGxhY2UoL1xccyokLyxcIlwiKX1mdW5jdGlvbiB5KCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50fWZ1bmN0aW9uIGcodCxlKXtpZihudWxsIT09dCYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQpaWYoXCJvYmplY3RcIj09dHlwZW9mIHR8fG4odCl8fCh0PVt0XSksbih0KSlmb3IodmFyIHI9MCxvPXQubGVuZ3RoO3I8bztyKyspZS5jYWxsKG51bGwsdFtyXSxyLHQpO2Vsc2UgZm9yKHZhciBpIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShpKSYmZS5jYWxsKG51bGwsdFtpXSxpLHQpfWZ1bmN0aW9uIHcoKXtmdW5jdGlvbiB0KHQsbil7XCJvYmplY3RcIj09dHlwZW9mIGVbbl0mJlwib2JqZWN0XCI9PXR5cGVvZiB0P2Vbbl09dyhlW25dLHQpOmVbbl09dH1mb3IodmFyIGU9e30sbj0wLHI9YXJndW1lbnRzLmxlbmd0aDtuPHI7bisrKWcoYXJndW1lbnRzW25dLHQpO3JldHVybiBlfXZhciBiPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7dC5leHBvcnRzPXtpc0FycmF5Om4saXNBcnJheUJ1ZmZlcjpyLGlzRm9ybURhdGE6byxpc0FycmF5QnVmZmVyVmlldzppLGlzU3RyaW5nOnUsaXNOdW1iZXI6cyxpc09iamVjdDphLGlzVW5kZWZpbmVkOmMsaXNEYXRlOmYsaXNGaWxlOmwsaXNCbG9iOnAsaXNGdW5jdGlvbjpoLGlzU3RyZWFtOmQsaXNVUkxTZWFyY2hQYXJhbXM6bSxpc1N0YW5kYXJkQnJvd3NlckVudjp5LGZvckVhY2g6ZyxtZXJnZTp3LHRyaW06dn19LGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gbigpe3Rocm93IG5ldyBFcnJvcihcInNldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWRcIil9ZnVuY3Rpb24gcigpe3Rocm93IG5ldyBFcnJvcihcImNsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiBvKHQpe2lmKGY9PT1zZXRUaW1lb3V0KXJldHVybiBzZXRUaW1lb3V0KHQsMCk7aWYoKGY9PT1ufHwhZikmJnNldFRpbWVvdXQpcmV0dXJuIGY9c2V0VGltZW91dCxzZXRUaW1lb3V0KHQsMCk7dHJ5e3JldHVybiBmKHQsMCl9Y2F0Y2goZSl7dHJ5e3JldHVybiBmLmNhbGwobnVsbCx0LDApfWNhdGNoKGUpe3JldHVybiBmLmNhbGwodGhpcyx0LDApfX19ZnVuY3Rpb24gaSh0KXtpZihsPT09Y2xlYXJUaW1lb3V0KXJldHVybiBjbGVhclRpbWVvdXQodCk7aWYoKGw9PT1yfHwhbCkmJmNsZWFyVGltZW91dClyZXR1cm4gbD1jbGVhclRpbWVvdXQsY2xlYXJUaW1lb3V0KHQpO3RyeXtyZXR1cm4gbCh0KX1jYXRjaChlKXt0cnl7cmV0dXJuIGwuY2FsbChudWxsLHQpfWNhdGNoKGUpe3JldHVybiBsLmNhbGwodGhpcyx0KX19fWZ1bmN0aW9uIHUoKXttJiZoJiYobT0hMSxoLmxlbmd0aD9kPWguY29uY2F0KGQpOnY9LTEsZC5sZW5ndGgmJnMoKSl9ZnVuY3Rpb24gcygpe2lmKCFtKXt2YXIgdD1vKHUpO209ITA7Zm9yKHZhciBlPWQubGVuZ3RoO2U7KXtmb3IoaD1kLGQ9W107Kyt2PGU7KWgmJmhbdl0ucnVuKCk7dj0tMSxlPWQubGVuZ3RofWg9bnVsbCxtPSExLGkodCl9fWZ1bmN0aW9uIGModCxlKXt0aGlzLmZ1bj10LHRoaXMuYXJyYXk9ZX1mdW5jdGlvbiBhKCl7fXZhciBmLGwscD10LmV4cG9ydHM9e307IWZ1bmN0aW9uKCl7dHJ5e2Y9XCJmdW5jdGlvblwiPT10eXBlb2Ygc2V0VGltZW91dD9zZXRUaW1lb3V0Om59Y2F0Y2godCl7Zj1ufXRyeXtsPVwiZnVuY3Rpb25cIj09dHlwZW9mIGNsZWFyVGltZW91dD9jbGVhclRpbWVvdXQ6cn1jYXRjaCh0KXtsPXJ9fSgpO3ZhciBoLGQ9W10sbT0hMSx2PS0xO3AubmV4dFRpY2s9ZnVuY3Rpb24odCl7dmFyIGU9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgtMSk7aWYoYXJndW1lbnRzLmxlbmd0aD4xKWZvcih2YXIgbj0xO248YXJndW1lbnRzLmxlbmd0aDtuKyspZVtuLTFdPWFyZ3VtZW50c1tuXTtkLnB1c2gobmV3IGModCxlKSksMSE9PWQubGVuZ3RofHxtfHxvKHMpfSxjLnByb3RvdHlwZS5ydW49ZnVuY3Rpb24oKXt0aGlzLmZ1bi5hcHBseShudWxsLHRoaXMuYXJyYXkpfSxwLnRpdGxlPVwiYnJvd3NlclwiLHAuYnJvd3Nlcj0hMCxwLmVudj17fSxwLmFyZ3Y9W10scC52ZXJzaW9uPVwiXCIscC52ZXJzaW9ucz17fSxwLm9uPWEscC5hZGRMaXN0ZW5lcj1hLHAub25jZT1hLHAub2ZmPWEscC5yZW1vdmVMaXN0ZW5lcj1hLHAucmVtb3ZlQWxsTGlzdGVuZXJzPWEscC5lbWl0PWEscC5iaW5kaW5nPWZ1bmN0aW9uKHQpe3Rocm93IG5ldyBFcnJvcihcInByb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkXCIpfSxwLmN3ZD1mdW5jdGlvbigpe3JldHVyblwiL1wifSxwLmNoZGlyPWZ1bmN0aW9uKHQpe3Rocm93IG5ldyBFcnJvcihcInByb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZFwiKX0scC51bWFzaz1mdW5jdGlvbigpe3JldHVybiAwfX0sZnVuY3Rpb24odCxlLG4peyhmdW5jdGlvbihlKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDEpLG89bigxMiksaT1uKDE4KSx1PW4oNCkscz1uKDE2KSxjPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdy5idG9hfHxuKDExKSxhPW4oMTkpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGYsbCl7dmFyIHA9bC5kYXRhLGg9bC5oZWFkZXJzO3IuaXNGb3JtRGF0YShwKSYmZGVsZXRlIGhbXCJDb250ZW50LVR5cGVcIl07dmFyIGQ9bmV3IFhNTEh0dHBSZXF1ZXN0LG09XCJvbnJlYWR5c3RhdGVjaGFuZ2VcIix2PSExO2lmKFwidGVzdFwiPT09ZS5lbnYuTk9ERV9FTlZ8fFwidW5kZWZpbmVkXCI9PXR5cGVvZiB3aW5kb3d8fCF3aW5kb3cuWERvbWFpblJlcXVlc3R8fFwid2l0aENyZWRlbnRpYWxzXCJpbiBkfHxzKGwudXJsKXx8KGQ9bmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCxtPVwib25sb2FkXCIsdj0hMCxkLm9ucHJvZ3Jlc3M9ZnVuY3Rpb24oKXt9LGQub250aW1lb3V0PWZ1bmN0aW9uKCl7fSksbC5hdXRoKXt2YXIgeT1sLmF1dGgudXNlcm5hbWV8fFwiXCIsZz1sLmF1dGgucGFzc3dvcmR8fFwiXCI7aC5BdXRob3JpemF0aW9uPVwiQmFzaWMgXCIrYyh5K1wiOlwiK2cpfWlmKGQub3BlbihsLm1ldGhvZC50b1VwcGVyQ2FzZSgpLG8obC51cmwsbC5wYXJhbXMsbC5wYXJhbXNTZXJpYWxpemVyKSwhMCksZC50aW1lb3V0PWwudGltZW91dCxkW21dPWZ1bmN0aW9uKCl7aWYoZCYmKDQ9PT1kLnJlYWR5U3RhdGV8fHYpJiYwIT09ZC5zdGF0dXMpe3ZhciBlPVwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzXCJpbiBkP2koZC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSk6bnVsbCxuPWwucmVzcG9uc2VUeXBlJiZcInRleHRcIiE9PWwucmVzcG9uc2VUeXBlP2QucmVzcG9uc2U6ZC5yZXNwb25zZVRleHQscj17ZGF0YTp1KG4sZSxsLnRyYW5zZm9ybVJlc3BvbnNlKSxzdGF0dXM6MTIyMz09PWQuc3RhdHVzPzIwNDpkLnN0YXR1cyxzdGF0dXNUZXh0OjEyMjM9PT1kLnN0YXR1cz9cIk5vIENvbnRlbnRcIjpkLnN0YXR1c1RleHQsaGVhZGVyczplLGNvbmZpZzpsLHJlcXVlc3Q6ZH07YSh0LGYsciksZD1udWxsfX0sZC5vbmVycm9yPWZ1bmN0aW9uKCl7ZihuZXcgRXJyb3IoXCJOZXR3b3JrIEVycm9yXCIpKSxkPW51bGx9LGQub250aW1lb3V0PWZ1bmN0aW9uKCl7dmFyIHQ9bmV3IEVycm9yKFwidGltZW91dCBvZiBcIitsLnRpbWVvdXQrXCJtcyBleGNlZWRlZFwiKTt0LnRpbWVvdXQ9bC50aW1lb3V0LHQuY29kZT1cIkVDT05OQUJPUlRFRFwiLGYodCksZD1udWxsfSxyLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpe3ZhciB3PW4oMTQpLGI9bC53aXRoQ3JlZGVudGlhbHN8fHMobC51cmwpP3cucmVhZChsLnhzcmZDb29raWVOYW1lKTp2b2lkIDA7YiYmKGhbbC54c3JmSGVhZGVyTmFtZV09Yil9aWYoXCJzZXRSZXF1ZXN0SGVhZGVyXCJpbiBkJiZyLmZvckVhY2goaCxmdW5jdGlvbih0LGUpe1widW5kZWZpbmVkXCI9PXR5cGVvZiBwJiZcImNvbnRlbnQtdHlwZVwiPT09ZS50b0xvd2VyQ2FzZSgpP2RlbGV0ZSBoW2VdOmQuc2V0UmVxdWVzdEhlYWRlcihlLHQpfSksbC53aXRoQ3JlZGVudGlhbHMmJihkLndpdGhDcmVkZW50aWFscz0hMCksbC5yZXNwb25zZVR5cGUpdHJ5e2QucmVzcG9uc2VUeXBlPWwucmVzcG9uc2VUeXBlfWNhdGNoKHgpe2lmKFwianNvblwiIT09ZC5yZXNwb25zZVR5cGUpdGhyb3cgeH1sLnByb2dyZXNzJiYoXCJwb3N0XCI9PT1sLm1ldGhvZHx8XCJwdXRcIj09PWwubWV0aG9kP2QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLGwucHJvZ3Jlc3MpOlwiZ2V0XCI9PT1sLm1ldGhvZCYmZC5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIixsLnByb2dyZXNzKSksdm9pZCAwPT09cCYmKHA9bnVsbCksZC5zZW5kKHApfX0pLmNhbGwoZSxuKDIpKX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oMSk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gci5mb3JFYWNoKG4sZnVuY3Rpb24obil7dD1uKHQsZSl9KSx0fX0sZnVuY3Rpb24odCxlLG4pe3QuZXhwb3J0cz1uKDYpfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXt0aGlzLmRlZmF1bHRzPWkubWVyZ2Uoe30sdCksdGhpcy5pbnRlcmNlcHRvcnM9e3JlcXVlc3Q6bmV3IHMscmVzcG9uc2U6bmV3IHN9fXZhciBvPW4oOSksaT1uKDEpLHU9big4KSxzPW4oNyksYz1uKDE1KSxhPW4oMTMpLGY9bigxMCksbD1uKDQpO3IucHJvdG90eXBlLnJlcXVlc3Q9ZnVuY3Rpb24odCl7XCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PWkubWVyZ2Uoe3VybDphcmd1bWVudHNbMF19LGFyZ3VtZW50c1sxXSkpLHQ9aS5tZXJnZShvLHRoaXMuZGVmYXVsdHMse21ldGhvZDpcImdldFwifSx0KSx0LmJhc2VVUkwmJiFjKHQudXJsKSYmKHQudXJsPWEodC5iYXNlVVJMLHQudXJsKSksdC53aXRoQ3JlZGVudGlhbHM9dC53aXRoQ3JlZGVudGlhbHN8fHRoaXMuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzLHQuZGF0YT1sKHQuZGF0YSx0LmhlYWRlcnMsdC50cmFuc2Zvcm1SZXF1ZXN0KSx0LmhlYWRlcnM9aS5tZXJnZSh0LmhlYWRlcnMuY29tbW9ufHx7fSx0LmhlYWRlcnNbdC5tZXRob2RdfHx7fSx0LmhlYWRlcnN8fHt9KSxpLmZvckVhY2goW1wiZGVsZXRlXCIsXCJnZXRcIixcImhlYWRcIixcInBvc3RcIixcInB1dFwiLFwicGF0Y2hcIixcImNvbW1vblwiXSxmdW5jdGlvbihlKXtkZWxldGUgdC5oZWFkZXJzW2VdfSk7dmFyIGU9W3Usdm9pZCAwXSxuPVByb21pc2UucmVzb2x2ZSh0KTtmb3IodGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe2UudW5zaGlmdCh0LmZ1bGZpbGxlZCx0LnJlamVjdGVkKX0pLHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24odCl7ZS5wdXNoKHQuZnVsZmlsbGVkLHQucmVqZWN0ZWQpfSk7ZS5sZW5ndGg7KW49bi50aGVuKGUuc2hpZnQoKSxlLnNoaWZ0KCkpO3JldHVybiBufTt2YXIgcD1uZXcgcihvKSxoPXQuZXhwb3J0cz1mKHIucHJvdG90eXBlLnJlcXVlc3QscCk7aC5yZXF1ZXN0PWYoci5wcm90b3R5cGUucmVxdWVzdCxwKSxoLkF4aW9zPXIsaC5kZWZhdWx0cz1wLmRlZmF1bHRzLGguaW50ZXJjZXB0b3JzPXAuaW50ZXJjZXB0b3JzLGguY3JlYXRlPWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgcih0KX0saC5hbGw9ZnVuY3Rpb24odCl7cmV0dXJuIFByb21pc2UuYWxsKHQpfSxoLnNwcmVhZD1uKDIwKSxpLmZvckVhY2goW1wiZGVsZXRlXCIsXCJnZXRcIixcImhlYWRcIl0sZnVuY3Rpb24odCl7ci5wcm90b3R5cGVbdF09ZnVuY3Rpb24oZSxuKXtyZXR1cm4gdGhpcy5yZXF1ZXN0KGkubWVyZ2Uobnx8e30se21ldGhvZDp0LHVybDplfSkpfSxoW3RdPWYoci5wcm90b3R5cGVbdF0scCl9KSxpLmZvckVhY2goW1wicG9zdFwiLFwicHV0XCIsXCJwYXRjaFwiXSxmdW5jdGlvbih0KXtyLnByb3RvdHlwZVt0XT1mdW5jdGlvbihlLG4scil7cmV0dXJuIHRoaXMucmVxdWVzdChpLm1lcmdlKHJ8fHt9LHttZXRob2Q6dCx1cmw6ZSxkYXRhOm59KSl9LGhbdF09ZihyLnByb3RvdHlwZVt0XSxwKX0pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcigpe3RoaXMuaGFuZGxlcnM9W119dmFyIG89bigxKTtyLnByb3RvdHlwZS51c2U9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5oYW5kbGVycy5wdXNoKHtmdWxmaWxsZWQ6dCxyZWplY3RlZDplfSksdGhpcy5oYW5kbGVycy5sZW5ndGgtMX0sci5wcm90b3R5cGUuZWplY3Q9ZnVuY3Rpb24odCl7dGhpcy5oYW5kbGVyc1t0XSYmKHRoaXMuaGFuZGxlcnNbdF09bnVsbCl9LHIucHJvdG90eXBlLmZvckVhY2g9ZnVuY3Rpb24odCl7by5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsZnVuY3Rpb24oZSl7bnVsbCE9PWUmJnQoZSl9KX0sdC5leHBvcnRzPXJ9LGZ1bmN0aW9uKHQsZSxuKXsoZnVuY3Rpb24oZSl7XCJ1c2Ugc3RyaWN0XCI7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyLG8pe3RyeXt2YXIgaTtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmFkYXB0ZXI/aT10LmFkYXB0ZXI6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFhNTEh0dHBSZXF1ZXN0P2k9bigzKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgZSYmKGk9bigzKSksXCJmdW5jdGlvblwiPT10eXBlb2YgaSYmaShyLG8sdCl9Y2F0Y2godSl7byh1KX19KX19KS5jYWxsKGUsbigyKSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQsZSl7IW8uaXNVbmRlZmluZWQodCkmJm8uaXNVbmRlZmluZWQodFtcIkNvbnRlbnQtVHlwZVwiXSkmJih0W1wiQ29udGVudC1UeXBlXCJdPWUpfXZhciBvPW4oMSksaT1uKDE3KSx1PS9eXFwpXFxdXFx9Jyw/XFxuLyxzPXtcIkNvbnRlbnQtVHlwZVwiOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJ9O3QuZXhwb3J0cz17dHJhbnNmb3JtUmVxdWVzdDpbZnVuY3Rpb24odCxlKXtyZXR1cm4gaShlLFwiQ29udGVudC1UeXBlXCIpLG8uaXNGb3JtRGF0YSh0KXx8by5pc0FycmF5QnVmZmVyKHQpfHxvLmlzU3RyZWFtKHQpfHxvLmlzRmlsZSh0KXx8by5pc0Jsb2IodCk/dDpvLmlzQXJyYXlCdWZmZXJWaWV3KHQpP3QuYnVmZmVyOm8uaXNVUkxTZWFyY2hQYXJhbXModCk/KHIoZSxcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04XCIpLHQudG9TdHJpbmcoKSk6by5pc09iamVjdCh0KT8ocihlLFwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04XCIpLEpTT04uc3RyaW5naWZ5KHQpKTp0fV0sdHJhbnNmb3JtUmVzcG9uc2U6W2Z1bmN0aW9uKHQpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXt0PXQucmVwbGFjZSh1LFwiXCIpO3RyeXt0PUpTT04ucGFyc2UodCl9Y2F0Y2goZSl7fX1yZXR1cm4gdH1dLGhlYWRlcnM6e2NvbW1vbjp7QWNjZXB0OlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qXCJ9LHBhdGNoOm8ubWVyZ2UocykscG9zdDpvLm1lcmdlKHMpLHB1dDpvLm1lcmdlKHMpfSx0aW1lb3V0OjAseHNyZkNvb2tpZU5hbWU6XCJYU1JGLVRPS0VOXCIseHNyZkhlYWRlck5hbWU6XCJYLVhTUkYtVE9LRU5cIixtYXhDb250ZW50TGVuZ3RoOi0xLHZhbGlkYXRlU3RhdHVzOmZ1bmN0aW9uKHQpe3JldHVybiB0Pj0yMDAmJnQ8MzAwfX19LGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKCl7Zm9yKHZhciBuPW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKSxyPTA7cjxuLmxlbmd0aDtyKyspbltyXT1hcmd1bWVudHNbcl07cmV0dXJuIHQuYXBwbHkoZSxuKX19fSxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oKXt0aGlzLm1lc3NhZ2U9XCJTdHJpbmcgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXJcIn1mdW5jdGlvbiByKHQpe2Zvcih2YXIgZSxyLGk9U3RyaW5nKHQpLHU9XCJcIixzPTAsYz1vO2kuY2hhckF0KDB8cyl8fChjPVwiPVwiLHMlMSk7dSs9Yy5jaGFyQXQoNjMmZT4+OC1zJTEqOCkpe2lmKHI9aS5jaGFyQ29kZUF0KHMrPS43NSkscj4yNTUpdGhyb3cgbmV3IG47ZT1lPDw4fHJ9cmV0dXJuIHV9dmFyIG89XCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiO24ucHJvdG90eXBlPW5ldyBFcnJvcixuLnByb3RvdHlwZS5jb2RlPTUsbi5wcm90b3R5cGUubmFtZT1cIkludmFsaWRDaGFyYWN0ZXJFcnJvclwiLHQuZXhwb3J0cz1yfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXtyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHQpLnJlcGxhY2UoLyU0MC9naSxcIkBcIikucmVwbGFjZSgvJTNBL2dpLFwiOlwiKS5yZXBsYWNlKC8lMjQvZyxcIiRcIikucmVwbGFjZSgvJTJDL2dpLFwiLFwiKS5yZXBsYWNlKC8lMjAvZyxcIitcIikucmVwbGFjZSgvJTVCL2dpLFwiW1wiKS5yZXBsYWNlKC8lNUQvZ2ksXCJdXCIpfXZhciBvPW4oMSk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuKXtpZighZSlyZXR1cm4gdDt2YXIgaTtpZihuKWk9bihlKTtlbHNlIGlmKG8uaXNVUkxTZWFyY2hQYXJhbXMoZSkpaT1lLnRvU3RyaW5nKCk7ZWxzZXt2YXIgdT1bXTtvLmZvckVhY2goZSxmdW5jdGlvbih0LGUpe251bGwhPT10JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgdCYmKG8uaXNBcnJheSh0KSYmKGUrPVwiW11cIiksby5pc0FycmF5KHQpfHwodD1bdF0pLG8uZm9yRWFjaCh0LGZ1bmN0aW9uKHQpe28uaXNEYXRlKHQpP3Q9dC50b0lTT1N0cmluZygpOm8uaXNPYmplY3QodCkmJih0PUpTT04uc3RyaW5naWZ5KHQpKSx1LnB1c2gocihlKStcIj1cIityKHQpKX0pKX0pLGk9dS5qb2luKFwiJlwiKX1yZXR1cm4gaSYmKHQrPSh0LmluZGV4T2YoXCI/XCIpPT09LTE/XCI/XCI6XCImXCIpK2kpLHR9fSxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3JldHVybiB0LnJlcGxhY2UoL1xcLyskLyxcIlwiKStcIi9cIitlLnJlcGxhY2UoL15cXC8rLyxcIlwiKX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDEpO3QuZXhwb3J0cz1yLmlzU3RhbmRhcmRCcm93c2VyRW52KCk/ZnVuY3Rpb24oKXtyZXR1cm57d3JpdGU6ZnVuY3Rpb24odCxlLG4sbyxpLHUpe3ZhciBzPVtdO3MucHVzaCh0K1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChlKSksci5pc051bWJlcihuKSYmcy5wdXNoKFwiZXhwaXJlcz1cIituZXcgRGF0ZShuKS50b0dNVFN0cmluZygpKSxyLmlzU3RyaW5nKG8pJiZzLnB1c2goXCJwYXRoPVwiK28pLHIuaXNTdHJpbmcoaSkmJnMucHVzaChcImRvbWFpbj1cIitpKSx1PT09ITAmJnMucHVzaChcInNlY3VyZVwiKSxkb2N1bWVudC5jb29raWU9cy5qb2luKFwiOyBcIil9LHJlYWQ6ZnVuY3Rpb24odCl7dmFyIGU9ZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoXCIoXnw7XFxcXHMqKShcIit0K1wiKT0oW147XSopXCIpKTtyZXR1cm4gZT9kZWNvZGVVUklDb21wb25lbnQoZVszXSk6bnVsbH0scmVtb3ZlOmZ1bmN0aW9uKHQpe3RoaXMud3JpdGUodCxcIlwiLERhdGUubm93KCktODY0ZTUpfX19KCk6ZnVuY3Rpb24oKXtyZXR1cm57d3JpdGU6ZnVuY3Rpb24oKXt9LHJlYWQ6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH0scmVtb3ZlOmZ1bmN0aW9uKCl7fX19KCl9LGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybi9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh0KX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDEpO3QuZXhwb3J0cz1yLmlzU3RhbmRhcmRCcm93c2VyRW52KCk/ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe3ZhciBlPXQ7cmV0dXJuIG4mJihvLnNldEF0dHJpYnV0ZShcImhyZWZcIixlKSxlPW8uaHJlZiksby5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZSkse2hyZWY6by5ocmVmLHByb3RvY29sOm8ucHJvdG9jb2w/by5wcm90b2NvbC5yZXBsYWNlKC86JC8sXCJcIik6XCJcIixob3N0Om8uaG9zdCxzZWFyY2g6by5zZWFyY2g/by5zZWFyY2gucmVwbGFjZSgvXlxcPy8sXCJcIik6XCJcIixoYXNoOm8uaGFzaD9vLmhhc2gucmVwbGFjZSgvXiMvLFwiXCIpOlwiXCIsaG9zdG5hbWU6by5ob3N0bmFtZSxwb3J0Om8ucG9ydCxwYXRobmFtZTpcIi9cIj09PW8ucGF0aG5hbWUuY2hhckF0KDApP28ucGF0aG5hbWU6XCIvXCIrby5wYXRobmFtZX19dmFyIGUsbj0vKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7cmV0dXJuIGU9dCh3aW5kb3cubG9jYXRpb24uaHJlZiksZnVuY3Rpb24obil7dmFyIG89ci5pc1N0cmluZyhuKT90KG4pOm47cmV0dXJuIG8ucHJvdG9jb2w9PT1lLnByb3RvY29sJiZvLmhvc3Q9PT1lLmhvc3R9fSgpOmZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuITB9fSgpfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bigxKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtyLmZvckVhY2godCxmdW5jdGlvbihuLHIpe3IhPT1lJiZyLnRvVXBwZXJDYXNlKCk9PT1lLnRvVXBwZXJDYXNlKCkmJih0W2VdPW4sZGVsZXRlIHRbcl0pfSl9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bigxKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGUsbixvLGk9e307cmV0dXJuIHQ/KHIuZm9yRWFjaCh0LnNwbGl0KFwiXFxuXCIpLGZ1bmN0aW9uKHQpe289dC5pbmRleE9mKFwiOlwiKSxlPXIudHJpbSh0LnN1YnN0cigwLG8pKS50b0xvd2VyQ2FzZSgpLG49ci50cmltKHQuc3Vic3RyKG8rMSkpLGUmJihpW2VdPWlbZV0/aVtlXStcIiwgXCIrbjpuKX0pLGkpOml9fSxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUsbil7dmFyIHI9bi5jb25maWcudmFsaWRhdGVTdGF0dXM7bi5zdGF0dXMmJnImJiFyKG4uc3RhdHVzKT9lKG4pOnQobil9fSxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIHQuYXBwbHkobnVsbCxlKX19fSxmdW5jdGlvbih0LGUsbil7dmFyIHI7KGZ1bmN0aW9uKHQsbyxpKXsvKiFcblx0ICogQG92ZXJ2aWV3IGVzNi1wcm9taXNlIC0gYSB0aW55IGltcGxlbWVudGF0aW9uIG9mIFByb21pc2VzL0ErLlxuXHQgKiBAY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNCBZZWh1ZGEgS2F0eiwgVG9tIERhbGUsIFN0ZWZhbiBQZW5uZXIgYW5kIGNvbnRyaWJ1dG9ycyAoQ29udmVyc2lvbiB0byBFUzYgQVBJIGJ5IEpha2UgQXJjaGliYWxkKVxuXHQgKiBAbGljZW5zZSAgIExpY2Vuc2VkIHVuZGVyIE1JVCBsaWNlbnNlXG5cdCAqICAgICAgICAgICAgU2VlIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9qYWtlYXJjaGliYWxkL2VzNi1wcm9taXNlL21hc3Rlci9MSUNFTlNFXG5cdCAqIEB2ZXJzaW9uICAgMy4yLjFcblx0ICovXG4oZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB1KHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHR8fFwib2JqZWN0XCI9PXR5cGVvZiB0JiZudWxsIT09dH1mdW5jdGlvbiBzKHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHR9ZnVuY3Rpb24gYyh0KXtHPXR9ZnVuY3Rpb24gYSh0KXt0dD10fWZ1bmN0aW9uIGYoKXtyZXR1cm4gZnVuY3Rpb24oKXt0Lm5leHRUaWNrKG0pfX1mdW5jdGlvbiBsKCl7cmV0dXJuIGZ1bmN0aW9uKCl7WShtKX19ZnVuY3Rpb24gcCgpe3ZhciB0PTAsZT1uZXcgcnQobSksbj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTtyZXR1cm4gZS5vYnNlcnZlKG4se2NoYXJhY3RlckRhdGE6ITB9KSxmdW5jdGlvbigpe24uZGF0YT10PSsrdCUyfX1mdW5jdGlvbiBoKCl7dmFyIHQ9bmV3IE1lc3NhZ2VDaGFubmVsO3JldHVybiB0LnBvcnQxLm9ubWVzc2FnZT1tLGZ1bmN0aW9uKCl7dC5wb3J0Mi5wb3N0TWVzc2FnZSgwKX19ZnVuY3Rpb24gZCgpe3JldHVybiBmdW5jdGlvbigpe3NldFRpbWVvdXQobSwxKX19ZnVuY3Rpb24gbSgpe2Zvcih2YXIgdD0wO3Q8Wjt0Kz0yKXt2YXIgZT11dFt0XSxuPXV0W3QrMV07ZShuKSx1dFt0XT12b2lkIDAsdXRbdCsxXT12b2lkIDB9Wj0wfWZ1bmN0aW9uIHYoKXt0cnl7dmFyIHQ9bigyNyk7cmV0dXJuIFk9dC5ydW5Pbkxvb3B8fHQucnVuT25Db250ZXh0LGwoKX1jYXRjaChlKXtyZXR1cm4gZCgpfX1mdW5jdGlvbiB5KHQsZSl7dmFyIG49dGhpcyxyPW5ldyB0aGlzLmNvbnN0cnVjdG9yKHcpO3ZvaWQgMD09PXJbYXRdJiZNKHIpO3ZhciBvPW4uX3N0YXRlO2lmKG8pe3ZhciBpPWFyZ3VtZW50c1tvLTFdO3R0KGZ1bmN0aW9uKCl7TChvLHIsaSxuLl9yZXN1bHQpfSl9ZWxzZSBEKG4scix0LGUpO3JldHVybiByfWZ1bmN0aW9uIGcodCl7dmFyIGU9dGhpcztpZih0JiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdC5jb25zdHJ1Y3Rvcj09PWUpcmV0dXJuIHQ7dmFyIG49bmV3IGUodyk7cmV0dXJuIEMobix0KSxufWZ1bmN0aW9uIHcoKXt9ZnVuY3Rpb24gYigpe3JldHVybiBuZXcgVHlwZUVycm9yKFwiWW91IGNhbm5vdCByZXNvbHZlIGEgcHJvbWlzZSB3aXRoIGl0c2VsZlwiKX1mdW5jdGlvbiB4KCl7cmV0dXJuIG5ldyBUeXBlRXJyb3IoXCJBIHByb21pc2VzIGNhbGxiYWNrIGNhbm5vdCByZXR1cm4gdGhhdCBzYW1lIHByb21pc2UuXCIpfWZ1bmN0aW9uIF8odCl7dHJ5e3JldHVybiB0LnRoZW59Y2F0Y2goZSl7cmV0dXJuIGh0LmVycm9yPWUsaHR9fWZ1bmN0aW9uIEEodCxlLG4scil7dHJ5e3QuY2FsbChlLG4scil9Y2F0Y2gobyl7cmV0dXJuIG99fWZ1bmN0aW9uIEUodCxlLG4pe3R0KGZ1bmN0aW9uKHQpe3ZhciByPSExLG89QShuLGUsZnVuY3Rpb24obil7cnx8KHI9ITAsZSE9PW4/Qyh0LG4pOlIodCxuKSl9LGZ1bmN0aW9uKGUpe3J8fChyPSEwLE8odCxlKSl9LFwiU2V0dGxlOiBcIisodC5fbGFiZWx8fFwiIHVua25vd24gcHJvbWlzZVwiKSk7IXImJm8mJihyPSEwLE8odCxvKSl9LHQpfWZ1bmN0aW9uIFModCxlKXtlLl9zdGF0ZT09PWx0P1IodCxlLl9yZXN1bHQpOmUuX3N0YXRlPT09cHQ/Tyh0LGUuX3Jlc3VsdCk6RChlLHZvaWQgMCxmdW5jdGlvbihlKXtDKHQsZSl9LGZ1bmN0aW9uKGUpe08odCxlKX0pfWZ1bmN0aW9uIGoodCxlLG4pe2UuY29uc3RydWN0b3I9PT10LmNvbnN0cnVjdG9yJiZuPT09c3QmJmNvbnN0cnVjdG9yLnJlc29sdmU9PT1jdD9TKHQsZSk6bj09PWh0P08odCxodC5lcnJvcik6dm9pZCAwPT09bj9SKHQsZSk6cyhuKT9FKHQsZSxuKTpSKHQsZSl9ZnVuY3Rpb24gQyh0LGUpe3Q9PT1lP08odCxiKCkpOnUoZSk/aih0LGUsXyhlKSk6Uih0LGUpfWZ1bmN0aW9uIFQodCl7dC5fb25lcnJvciYmdC5fb25lcnJvcih0Ll9yZXN1bHQpLEIodCl9ZnVuY3Rpb24gUih0LGUpe3QuX3N0YXRlPT09ZnQmJih0Ll9yZXN1bHQ9ZSx0Ll9zdGF0ZT1sdCwwIT09dC5fc3Vic2NyaWJlcnMubGVuZ3RoJiZ0dChCLHQpKX1mdW5jdGlvbiBPKHQsZSl7dC5fc3RhdGU9PT1mdCYmKHQuX3N0YXRlPXB0LHQuX3Jlc3VsdD1lLHR0KFQsdCkpfWZ1bmN0aW9uIEQodCxlLG4scil7dmFyIG89dC5fc3Vic2NyaWJlcnMsaT1vLmxlbmd0aDt0Ll9vbmVycm9yPW51bGwsb1tpXT1lLG9baStsdF09bixvW2krcHRdPXIsMD09PWkmJnQuX3N0YXRlJiZ0dChCLHQpfWZ1bmN0aW9uIEIodCl7dmFyIGU9dC5fc3Vic2NyaWJlcnMsbj10Ll9zdGF0ZTtpZigwIT09ZS5sZW5ndGgpe2Zvcih2YXIgcixvLGk9dC5fcmVzdWx0LHU9MDt1PGUubGVuZ3RoO3UrPTMpcj1lW3VdLG89ZVt1K25dLHI/TChuLHIsbyxpKTpvKGkpO3QuX3N1YnNjcmliZXJzLmxlbmd0aD0wfX1mdW5jdGlvbiBJKCl7dGhpcy5lcnJvcj1udWxsfWZ1bmN0aW9uIHEodCxlKXt0cnl7cmV0dXJuIHQoZSl9Y2F0Y2gobil7cmV0dXJuIGR0LmVycm9yPW4sZHR9fWZ1bmN0aW9uIEwodCxlLG4scil7dmFyIG8saSx1LGMsYT1zKG4pO2lmKGEpe2lmKG89cShuLHIpLG89PT1kdD8oYz0hMCxpPW8uZXJyb3Isbz1udWxsKTp1PSEwLGU9PT1vKXJldHVybiB2b2lkIE8oZSx4KCkpfWVsc2Ugbz1yLHU9ITA7ZS5fc3RhdGUhPT1mdHx8KGEmJnU/QyhlLG8pOmM/TyhlLGkpOnQ9PT1sdD9SKGUsbyk6dD09PXB0JiZPKGUsbykpfWZ1bmN0aW9uIFAodCxlKXt0cnl7ZShmdW5jdGlvbihlKXtDKHQsZSl9LGZ1bmN0aW9uKGUpe08odCxlKX0pfWNhdGNoKG4pe08odCxuKX19ZnVuY3Rpb24gVSgpe3JldHVybiBtdCsrfWZ1bmN0aW9uIE0odCl7dFthdF09bXQrKyx0Ll9zdGF0ZT12b2lkIDAsdC5fcmVzdWx0PXZvaWQgMCx0Ll9zdWJzY3JpYmVycz1bXX1mdW5jdGlvbiBOKHQpe3JldHVybiBuZXcgYnQodGhpcyx0KS5wcm9taXNlfWZ1bmN0aW9uIFgodCl7dmFyIGU9dGhpcztyZXR1cm4gbmV3IGUoUSh0KT9mdW5jdGlvbihuLHIpe2Zvcih2YXIgbz10Lmxlbmd0aCxpPTA7aTxvO2krKyllLnJlc29sdmUodFtpXSkudGhlbihuLHIpfTpmdW5jdGlvbih0LGUpe2UobmV3IFR5cGVFcnJvcihcIllvdSBtdXN0IHBhc3MgYW4gYXJyYXkgdG8gcmFjZS5cIikpfSl9ZnVuY3Rpb24gRih0KXt2YXIgZT10aGlzLG49bmV3IGUodyk7cmV0dXJuIE8obix0KSxufWZ1bmN0aW9uIGsoKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiWW91IG11c3QgcGFzcyBhIHJlc29sdmVyIGZ1bmN0aW9uIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgcHJvbWlzZSBjb25zdHJ1Y3RvclwiKX1mdW5jdGlvbiBIKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Byb21pc2UnOiBQbGVhc2UgdXNlIHRoZSAnbmV3JyBvcGVyYXRvciwgdGhpcyBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLlwiKX1mdW5jdGlvbiBLKHQpe3RoaXNbYXRdPVUoKSx0aGlzLl9yZXN1bHQ9dGhpcy5fc3RhdGU9dm9pZCAwLHRoaXMuX3N1YnNjcmliZXJzPVtdLHchPT10JiYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmaygpLHRoaXMgaW5zdGFuY2VvZiBLP1AodGhpcyx0KTpIKCkpfWZ1bmN0aW9uIFYodCxlKXt0aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yPXQsdGhpcy5wcm9taXNlPW5ldyB0KHcpLHRoaXMucHJvbWlzZVthdF18fE0odGhpcy5wcm9taXNlKSxRKGUpPyh0aGlzLl9pbnB1dD1lLHRoaXMubGVuZ3RoPWUubGVuZ3RoLHRoaXMuX3JlbWFpbmluZz1lLmxlbmd0aCx0aGlzLl9yZXN1bHQ9bmV3IEFycmF5KHRoaXMubGVuZ3RoKSwwPT09dGhpcy5sZW5ndGg/Uih0aGlzLnByb21pc2UsdGhpcy5fcmVzdWx0KToodGhpcy5sZW5ndGg9dGhpcy5sZW5ndGh8fDAsdGhpcy5fZW51bWVyYXRlKCksMD09PXRoaXMuX3JlbWFpbmluZyYmUih0aGlzLnByb21pc2UsdGhpcy5fcmVzdWx0KSkpOk8odGhpcy5wcm9taXNlLHooKSl9ZnVuY3Rpb24geigpe3JldHVybiBuZXcgRXJyb3IoXCJBcnJheSBNZXRob2RzIG11c3QgYmUgcHJvdmlkZWQgYW4gQXJyYXlcIil9ZnVuY3Rpb24gJCgpe3ZhciB0O2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBvKXQ9bztlbHNlIGlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmKXQ9c2VsZjtlbHNlIHRyeXt0PUZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKX1jYXRjaChlKXt0aHJvdyBuZXcgRXJyb3IoXCJwb2x5ZmlsbCBmYWlsZWQgYmVjYXVzZSBnbG9iYWwgb2JqZWN0IGlzIHVuYXZhaWxhYmxlIGluIHRoaXMgZW52aXJvbm1lbnRcIil9dmFyIG49dC5Qcm9taXNlO24mJlwiW29iamVjdCBQcm9taXNlXVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG4ucmVzb2x2ZSgpKSYmIW4uY2FzdHx8KHQuUHJvbWlzZT13dCl9dmFyIEo7Sj1BcnJheS5pc0FycmF5P0FycmF5LmlzQXJyYXk6ZnVuY3Rpb24odCl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpfTt2YXIgWSxHLFcsUT1KLFo9MCx0dD1mdW5jdGlvbih0LGUpe3V0W1pdPXQsdXRbWisxXT1lLForPTIsMj09PVomJihHP0cobSk6VygpKX0sZXQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dm9pZCAwLG50PWV0fHx7fSxydD1udC5NdXRhdGlvbk9ic2VydmVyfHxudC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyLG90PVwidW5kZWZpbmVkXCI9PXR5cGVvZiBzZWxmJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgdCYmXCJbb2JqZWN0IHByb2Nlc3NdXCI9PT17fS50b1N0cmluZy5jYWxsKHQpLGl0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBVaW50OENsYW1wZWRBcnJheSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGltcG9ydFNjcmlwdHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBNZXNzYWdlQ2hhbm5lbCx1dD1uZXcgQXJyYXkoMWUzKTtXPW90P2YoKTpydD9wKCk6aXQ/aCgpOnZvaWQgMD09PWV0P3YoKTpkKCk7dmFyIHN0PXksY3Q9ZyxhdD1NYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMTYpLGZ0PXZvaWQgMCxsdD0xLHB0PTIsaHQ9bmV3IEksZHQ9bmV3IEksbXQ9MCx2dD1OLHl0PVgsZ3Q9Rix3dD1LO0suYWxsPXZ0LEsucmFjZT15dCxLLnJlc29sdmU9Y3QsSy5yZWplY3Q9Z3QsSy5fc2V0U2NoZWR1bGVyPWMsSy5fc2V0QXNhcD1hLEsuX2FzYXA9dHQsSy5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOkssdGhlbjpzdCxcImNhdGNoXCI6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudGhlbihudWxsLHQpfX07dmFyIGJ0PVY7Vi5wcm90b3R5cGUuX2VudW1lcmF0ZT1mdW5jdGlvbigpe2Zvcih2YXIgdD10aGlzLmxlbmd0aCxlPXRoaXMuX2lucHV0LG49MDt0aGlzLl9zdGF0ZT09PWZ0JiZuPHQ7bisrKXRoaXMuX2VhY2hFbnRyeShlW25dLG4pfSxWLnByb3RvdHlwZS5fZWFjaEVudHJ5PWZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcy5faW5zdGFuY2VDb25zdHJ1Y3RvcixyPW4ucmVzb2x2ZTtpZihyPT09Y3Qpe3ZhciBvPV8odCk7aWYobz09PXN0JiZ0Ll9zdGF0ZSE9PWZ0KXRoaXMuX3NldHRsZWRBdCh0Ll9zdGF0ZSxlLHQuX3Jlc3VsdCk7ZWxzZSBpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBvKXRoaXMuX3JlbWFpbmluZy0tLHRoaXMuX3Jlc3VsdFtlXT10O2Vsc2UgaWYobj09PXd0KXt2YXIgaT1uZXcgbih3KTtqKGksdCxvKSx0aGlzLl93aWxsU2V0dGxlQXQoaSxlKX1lbHNlIHRoaXMuX3dpbGxTZXR0bGVBdChuZXcgbihmdW5jdGlvbihlKXtlKHQpfSksZSl9ZWxzZSB0aGlzLl93aWxsU2V0dGxlQXQocih0KSxlKX0sVi5wcm90b3R5cGUuX3NldHRsZWRBdD1mdW5jdGlvbih0LGUsbil7dmFyIHI9dGhpcy5wcm9taXNlO3IuX3N0YXRlPT09ZnQmJih0aGlzLl9yZW1haW5pbmctLSx0PT09cHQ/TyhyLG4pOnRoaXMuX3Jlc3VsdFtlXT1uKSwwPT09dGhpcy5fcmVtYWluaW5nJiZSKHIsdGhpcy5fcmVzdWx0KX0sVi5wcm90b3R5cGUuX3dpbGxTZXR0bGVBdD1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXM7RCh0LHZvaWQgMCxmdW5jdGlvbih0KXtuLl9zZXR0bGVkQXQobHQsZSx0KX0sZnVuY3Rpb24odCl7bi5fc2V0dGxlZEF0KHB0LGUsdCl9KX07dmFyIHh0PSQsX3Q9e1Byb21pc2U6d3QscG9seWZpbGw6eHR9O24oMjUpLmFtZD8ocj1mdW5jdGlvbigpe3JldHVybiBfdH0uY2FsbChlLG4sZSxpKSwhKHZvaWQgMCE9PXImJihpLmV4cG9ydHM9cikpKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgaSYmaS5leHBvcnRzP2kuZXhwb3J0cz1fdDpcInVuZGVmaW5lZFwiIT10eXBlb2YgdGhpcyYmKHRoaXMuRVM2UHJvbWlzZT1fdCkseHQoKX0pLmNhbGwodGhpcyl9KS5jYWxsKGUsbigyKSxmdW5jdGlvbigpe3JldHVybiB0aGlzfSgpLG4oMjYpKHQpKX0sZnVuY3Rpb24odCxlLG4pe1widW5kZWZpbmVkXCI9PXR5cGVvZiBQcm9taXNlJiZuKDIxKS5wb2x5ZmlsbCgpO3ZhciByPW4oMjQpLG89big1KSxpPW4oMjMpLHU9e2Jhc2VVUkw6XCJodHRwczovL2Rldi5hcGkuaWJtLmNvbS92aXJ0dWFsYWdlbnQvZGV2ZWxvcG1lbnQvYXBpL3YxL1wiLHRpbWVvdXQ6M2U0LHVzZXJJRDpudWxsLHdpdGhDcmVkZW50aWFsczohMSxYSUJNQ2xpZW50SUQ6ITEsWElCTUNsaWVudFNlY3JldDohMX0scz1vLmNyZWF0ZSh1KSxjPS9cXHwmKC4qPylcXHwvZyxhPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wO2U8dC50ZXh0Lmxlbmd0aDtlKyspe3ZhciBuPXQudGV4dFtlXS5tYXRjaChjKXx8W107dC50ZXh0W2VdPW4ucmVkdWNlKGZ1bmN0aW9uKHQsZSl7Y29uc3Qgbj1lLnNsaWNlKDIsLTEpLHI9aS5nZXQobik7cmV0dXJuIHQucmVwbGFjZShlLHIpfSx0LnRleHRbZV0pfXJldHVybiB0fSxmPXQuZXhwb3J0cz17Y29uZmlndXJlOmZ1bmN0aW9uKHQpe3JldHVybiByKHUsdCkscz1vLmNyZWF0ZSh7YmFzZVVSTDp1LmJhc2VVUkwsdGltZW91dDp1LnRpbWVvdXQsd2l0aENyZWRlbnRpYWxzOnUud2l0aENyZWRlbnRpYWxzLGhlYWRlcnM6dS5YSUJNQ2xpZW50SUQmJnUuWElCTUNsaWVudFNlY3JldD97XCJYLUlCTS1DbGllbnQtSWRcIjp1LlhJQk1DbGllbnRJRCxcIlgtSUJNLUNsaWVudC1TZWNyZXRcIjp1LlhJQk1DbGllbnRTZWNyZXR9Ont9fSksZn0sc3RhcnQ6ZnVuY3Rpb24odCl7dmFyIGU9bCgpLG49e3VzZXJJRDp1LnVzZXJJRH0scj1cIi9ib3RzL1wiK3QrXCIvZGlhbG9nc1wiLG89e2hlYWRlcnM6e1wiWC1SZXF1ZXN0LUlEXCI6ZX19O3JldHVybiBzLnBvc3QocixuLG8pLnRoZW4oZnVuY3Rpb24odCl7cmV0dXJue2NoYXRJRDp0LmRhdGEuZGlhbG9nX2lkLG1lc3NhZ2U6YSh0LmRhdGEubWVzc2FnZSl9fSlbXCJjYXRjaFwiXShmdW5jdGlvbih0KXtjb25zb2xlLmVycm9yKFwiUmVxdWVzdCBmYWlsZWQ6XCIsZSkscCh0KX0pfSxzZW5kOmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1sKCksbz17bWVzc2FnZTpuLHVzZXJJRDp1LnVzZXJJRH0saT1cIi9ib3RzL1wiK3QrXCIvZGlhbG9ncy9cIitlK1wiL21lc3NhZ2VzXCIsYz1cIm1lc3NhZ2U9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG4pLGY9e2hlYWRlcnM6e1wiWC1SZXF1ZXN0LUlEXCI6cn19O3JldHVybiBzLnBvc3QoaStcIj9cIitjLG8sZikudGhlbihmdW5jdGlvbih0KXtyZXR1cm57bWVzc2FnZTphKHQuZGF0YS5tZXNzYWdlKX19KVtcImNhdGNoXCJdKGZ1bmN0aW9uKHQpe2NvbnNvbGUuZXJyb3IoXCJSZXF1ZXN0IGZhaWxlZDpcIixyKSxwKHQpfSl9LHByb2ZpbGU6e2dldDppLmdldCxzZXQ6aS5zZXQsaGFzOmkuaGFzLGNsZWFyOmkuY2xlYXIsXCJkZWxldGVcIjppW1wiZGVsZXRlXCJdLGZvckVhY2g6aS5mb3JFYWNofX0sbD1mdW5jdGlvbigpe3JldHVyblwieHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4XCIucmVwbGFjZSgvW3h5XS9nLGZ1bmN0aW9uKHQpe3ZhciBlPTE2Kk1hdGgucmFuZG9tKCl8MCxuPVwieFwiPT10P2U6MyZlfDg7cmV0dXJuIG4udG9TdHJpbmcoMTYpfSl9LHA9ZnVuY3Rpb24odCl7aWYoIXQuc3RhdHVzKXRocm93IHQ7dmFyIGU9dC5zdGF0dXMsbj10LnN0YXR1c1RleHQscj1uZXcgRXJyb3Iobik7dGhyb3cgci5zdGF0dXM9ZSxyfX0sZnVuY3Rpb24odCxlKXt2YXIgbj17fSxyPXtzZXQ6ZnVuY3Rpb24odCxlKXtyZXR1cm4gblt0XT1lLHJ9LGdldDpmdW5jdGlvbih0KXtyZXR1cm4gblt0XXx8XCJcIn0saGFzOmZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDAhPT1uW3RdfSxjbGVhcjpmdW5jdGlvbigpe3JldHVybiBuPXt9LHJ9LFwiZGVsZXRlXCI6ZnVuY3Rpb24odCl7cmV0dXJuIGRlbGV0ZSBuW3RdLHJ9LGZvckVhY2g6ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LmtleXMobikuZm9yRWFjaChmdW5jdGlvbihyKXtlP3QocixuW3JdKS5iaW5kKGUpOnQocixuW3JdKX0pLHJ9fTt0LmV4cG9ydHM9cn0sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiBuKHQsZSxuKXtzd2l0Y2gobi5sZW5ndGgpe2Nhc2UgMDpyZXR1cm4gdC5jYWxsKGUpO2Nhc2UgMTpyZXR1cm4gdC5jYWxsKGUsblswXSk7Y2FzZSAyOnJldHVybiB0LmNhbGwoZSxuWzBdLG5bMV0pO2Nhc2UgMzpyZXR1cm4gdC5jYWxsKGUsblswXSxuWzFdLG5bMl0pfXJldHVybiB0LmFwcGx5KGUsbil9ZnVuY3Rpb24gcih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/dm9pZCAwOmVbdF19fWZ1bmN0aW9uIG8odCxlKXtmb3IodmFyIG49LTEscj1BcnJheSh0KTsrK248dDspcltuXT1lKG4pO3JldHVybiByfWZ1bmN0aW9uIGkodCxlKXtyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIHQoZShuKSl9fWZ1bmN0aW9uIHUodCxlLG4pe3ZhciByPXRbZV07Qi5jYWxsKHQsZSkmJm0ocixuKSYmKHZvaWQgMCE9PW58fGUgaW4gdCl8fCh0W2VdPW4pfWZ1bmN0aW9uIHModCxlKXtyZXR1cm4gbnVsbCE9dCYmKEIuY2FsbCh0LGUpfHxcIm9iamVjdFwiPT10eXBlb2YgdCYmZSBpbiB0JiZudWxsPT09Rih0KSl9ZnVuY3Rpb24gYyh0LGUpe3JldHVybiBlPVUodm9pZCAwPT09ZT90Lmxlbmd0aC0xOmUsMCksZnVuY3Rpb24oKXtmb3IodmFyIHI9YXJndW1lbnRzLG89LTEsaT1VKHIubGVuZ3RoLWUsMCksdT1BcnJheShpKTsrK288aTspdVtvXT1yW2Urb107bz0tMTtmb3IodmFyIHM9QXJyYXkoZSsxKTsrK288ZTspc1tvXT1yW29dO3JldHVybiBzW2VdPXUsbih0LHRoaXMscyl9fWZ1bmN0aW9uIGEodCxlLG4scil7bnx8KG49e30pO2Zvcih2YXIgbz0tMSxpPWUubGVuZ3RoOysrbzxpOyl7dmFyIHM9ZVtvXSxjPXI/cihuW3NdLHRbc10scyxuLHQpOnZvaWQgMDt1KG4scyx2b2lkIDA9PT1jP3Rbc106Yyl9cmV0dXJuIG59ZnVuY3Rpb24gZih0KXtyZXR1cm4gYyhmdW5jdGlvbihlLG4pe3ZhciByPS0xLG89bi5sZW5ndGgsaT1vPjE/bltvLTFdOnZvaWQgMCx1PW8+Mj9uWzJdOnZvaWQgMDtmb3IoaT10Lmxlbmd0aD4zJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBpPyhvLS0saSk6dm9pZCAwLHUmJmgoblswXSxuWzFdLHUpJiYoaT1vPDM/dm9pZCAwOmksbz0xKSxlPU9iamVjdChlKTsrK3I8bzspe3ZhciBzPW5bcl07cyYmdChlLHMscixpKX1yZXR1cm4gZX0pfWZ1bmN0aW9uIGwodCl7dmFyIGU9dD90Lmxlbmd0aDp2b2lkIDA7cmV0dXJuIGIoZSkmJihrKHQpfHxBKHQpfHx2KHQpKT9vKGUsU3RyaW5nKTpudWxsfWZ1bmN0aW9uIHAodCxlKXtyZXR1cm4gZT1udWxsPT1lP1M6ZSwhIWUmJihcIm51bWJlclwiPT10eXBlb2YgdHx8Ty50ZXN0KHQpKSYmdD4tMSYmdCUxPT0wJiZ0PGV9ZnVuY3Rpb24gaCh0LGUsbil7aWYoIXgobikpcmV0dXJuITE7dmFyIHI9dHlwZW9mIGU7cmV0dXJuISEoXCJudW1iZXJcIj09cj95KG4pJiZwKGUsbi5sZW5ndGgpOlwic3RyaW5nXCI9PXImJmUgaW4gbikmJm0obltlXSx0KX1mdW5jdGlvbiBkKHQpe3ZhciBlPXQmJnQuY29uc3RydWN0b3Isbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlLnByb3RvdHlwZXx8RDtyZXR1cm4gdD09PW59ZnVuY3Rpb24gbSh0LGUpe3JldHVybiB0PT09ZXx8dCE9PXQmJmUhPT1lfWZ1bmN0aW9uIHYodCl7cmV0dXJuIGcodCkmJkIuY2FsbCh0LFwiY2FsbGVlXCIpJiYoIXEuY2FsbCh0LFwiY2FsbGVlXCIpfHxJLmNhbGwodCk9PWopfWZ1bmN0aW9uIHkodCl7cmV0dXJuIG51bGwhPXQmJmIoWCh0KSkmJiF3KHQpfWZ1bmN0aW9uIGcodCl7cmV0dXJuIF8odCkmJnkodCl9ZnVuY3Rpb24gdyh0KXt2YXIgZT14KHQpP0kuY2FsbCh0KTpcIlwiO3JldHVybiBlPT1DfHxlPT1UfWZ1bmN0aW9uIGIodCl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIHQmJnQ+LTEmJnQlMT09MCYmdDw9U31mdW5jdGlvbiB4KHQpe3ZhciBlPXR5cGVvZiB0O3JldHVybiEhdCYmKFwib2JqZWN0XCI9PWV8fFwiZnVuY3Rpb25cIj09ZSl9ZnVuY3Rpb24gXyh0KXtyZXR1cm4hIXQmJlwib2JqZWN0XCI9PXR5cGVvZiB0fWZ1bmN0aW9uIEEodCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHR8fCFrKHQpJiZfKHQpJiZJLmNhbGwodCk9PVJ9ZnVuY3Rpb24gRSh0KXt2YXIgZT1kKHQpO2lmKCFlJiYheSh0KSlyZXR1cm4gTih0KTt2YXIgbj1sKHQpLHI9ISFuLG89bnx8W10saT1vLmxlbmd0aDtmb3IodmFyIHUgaW4gdCkhcyh0LHUpfHxyJiYoXCJsZW5ndGhcIj09dXx8cCh1LGkpKXx8ZSYmXCJjb25zdHJ1Y3RvclwiPT11fHxvLnB1c2godSk7cmV0dXJuIG99dmFyIFM9OTAwNzE5OTI1NDc0MDk5MSxqPVwiW29iamVjdCBBcmd1bWVudHNdXCIsQz1cIltvYmplY3QgRnVuY3Rpb25dXCIsVD1cIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCIsUj1cIltvYmplY3QgU3RyaW5nXVwiLE89L14oPzowfFsxLTldXFxkKikkLyxEPU9iamVjdC5wcm90b3R5cGUsQj1ELmhhc093blByb3BlcnR5LEk9RC50b1N0cmluZyxxPUQucHJvcGVydHlJc0VudW1lcmFibGUsTD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsUD1PYmplY3Qua2V5cyxVPU1hdGgubWF4LE09IXEuY2FsbCh7dmFsdWVPZjoxfSxcInZhbHVlT2ZcIiksTj1pKFAsT2JqZWN0KSxYPXIoXCJsZW5ndGhcIiksRj1pKEwsT2JqZWN0KSxrPUFycmF5LmlzQXJyYXksSD1mKGZ1bmN0aW9uKHQsZSl7aWYoTXx8ZChlKXx8eShlKSlyZXR1cm4gdm9pZCBhKGUsRShlKSx0KTtmb3IodmFyIG4gaW4gZSlCLmNhbGwoZSxuKSYmdSh0LG4sZVtuXSl9KTt0LmV4cG9ydHM9SH0sZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJkZWZpbmUgY2Fubm90IGJlIHVzZWQgaW5kaXJlY3RcIil9fSxmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gdC53ZWJwYWNrUG9seWZpbGx8fCh0LmRlcHJlY2F0ZT1mdW5jdGlvbigpe30sdC5wYXRocz1bXSx0LmNoaWxkcmVuPVtdLHQud2VicGFja1BvbHlmaWxsPTEpLHR9fSxmdW5jdGlvbih0LGUpe31dKX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L0B3YXRzb24tdmlydHVhbC1hZ2VudC9jbGllbnQtc2RrL2xpYi93ZWIuanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgaWQ9XFxcIiR7ZGF0YS51dWlkfVxcXCIgY2xhc3M9XFxcIklCTUNoYXQtdXNlci1tZXNzYWdlLWNvbnRhaW5lciBJQk1DaGF0LXVzZXItbWVzc2FnZS1jb250YWluZXItdGhlbWVcXFwiPlxcblxcdDxkaXYgY2xhc3M9XFxcIklCTUNoYXQtdXNlci1tZXNzYWdlIElCTUNoYXQtdXNlci1tZXNzYWdlLXRoZW1lIElCTUNoYXQtc2Vjb25kYXJ5LWNvbG9yc1xcXCI+PC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2V2ZW50SGFuZGxlcnMvdGVtcGxhdGVzL3NlbmQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4uLy4uL3N0YXRlJyk7XG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ2xvZGFzaC9hc3NpZ24nKTtcblxuZnVuY3Rpb24gc2VuZE1vY2soZGF0YSkge1xuXHRpZiAoZGF0YS50ZXh0ICYmIGRhdGEudGV4dC5sZW5ndGggPiAwKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHRcdHZhciBuZXdEYXRhID0gYXNzaWduKHt9LCBkYXRhLCB7IHV1aWQ6IHV0aWxzLmdldFVVSUQoKSB9KTtcblx0XHR2YXIgdGV4dCA9IHJlcXVpcmUoJy4uL3RlbXBsYXRlcy9zZW5kLmh0bWwnKTtcblx0XHR2YXIgcGFyc2VkID0gdXRpbHMucmVwbGFjZUFsbCh0ZXh0LCAnJHtkYXRhLnV1aWR9JywgbmV3RGF0YS51dWlkKTtcblx0XHRjdXJyZW50LmNoYXRIb2xkZXIuaW5uZXJIVE1MICs9IHBhcnNlZDtcblx0XHRjdXJyZW50LmNoYXRIb2xkZXIucXVlcnlTZWxlY3RvcignIycgKyBuZXdEYXRhLnV1aWQgKyAnIC5JQk1DaGF0LXVzZXItbWVzc2FnZScpLnRleHRDb250ZW50ID0gZGF0YS50ZXh0O1xuXHRcdGV2ZW50cy5wdWJsaXNoKCdzY3JvbGwtdG8tYm90dG9tJyk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZW5kTW9jaztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRIYW5kbGVycy9ldmVudHMvc2VuZC1tb2NrLmpzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIHN0YXRlID0gcmVxdWlyZSgnLi4vLi4vc3RhdGUnKTtcbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcblxuZnVuY3Rpb24gc2VuZElucHV0TWVzc2FnZSgpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHRpZiAoIWN1cnJlbnQuaW5Qcm9ncmVzcyAmJiAhY3VycmVudC5kaXNhYmxlSW5wdXQpIHtcblx0XHR2YXIgdGV4dCA9IGN1cnJlbnQucm9vdC5xdWVyeVNlbGVjdG9yKCcuSUJNQ2hhdC1jaGF0LXRleHRib3gnKS52YWx1ZTtcblx0XHRldmVudHMucHVibGlzaCgnc2VuZCcsIHtcblx0XHRcdHRleHQ6IHRleHRcblx0XHR9KTtcblx0XHR0ZXh0ID0gJyc7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZW5kSW5wdXRNZXNzYWdlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9ldmVudEhhbmRsZXJzL2V2ZW50cy9zZW5kLWlucHV0LW1lc3NhZ2UuanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgc3RhdGUgPSByZXF1aXJlKCcuLi8uLi9zdGF0ZScpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5hYmxlSW5wdXQoKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0dmFyIGRpc2FibGVJbnB1dCA9IChjdXJyZW50LmRpc2FibGVJbnB1dCkgPyAoY3VycmVudC5kaXNhYmxlSW5wdXQgLSAxKSA6MDtcblx0c3RhdGUuc2V0U3RhdGUoeyBkaXNhYmxlSW5wdXQ6IGRpc2FibGVJbnB1dCB9KTtcblx0aWYgKCFkaXNhYmxlSW5wdXQpXG5cdFx0Y3VycmVudC5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVJbnB1dCgpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHR2YXIgZGlzYWJsZUlucHV0ID0gKGN1cnJlbnQuZGlzYWJsZUlucHV0KSA/IChjdXJyZW50LmRpc2FibGVJbnB1dCArIDEpIDogMTtcblx0c3RhdGUuc2V0U3RhdGUoeyBkaXNhYmxlSW5wdXQ6IGRpc2FibGVJbnB1dCB9KTtcblx0Y3VycmVudC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZUxvYWRpbmdJbnB1dCgpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHR2YXIgbG9hZGluZyA9IChjdXJyZW50LmxvYWRpbmcpID8gKGN1cnJlbnQubG9hZGluZyArIDEpIDogMTtcblx0c3RhdGUuc2V0U3RhdGUoe1xuXHRcdGxvYWRpbmc6IGxvYWRpbmdcblx0fSk7XG5cdHV0aWxzLnNwaW5uZXIuc2hvdyhjdXJyZW50LmxvYWRlcik7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVMb2FkaW5nSW5wdXQoKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0dmFyIGxvYWRpbmcgPSAoY3VycmVudC5sb2FkaW5nKSA/IChjdXJyZW50LmxvYWRpbmcgLSAxKSA6IDA7XG5cdHN0YXRlLnNldFN0YXRlKHtcblx0XHRsb2FkaW5nOiBsb2FkaW5nXG5cdH0pO1xuXHRpZiAobG9hZGluZyA9PT0gMClcblx0XHR1dGlscy5zcGlubmVyLmhpZGUoY3VycmVudC5sb2FkZXIpO1xufVxuXG5mdW5jdGlvbiBmb2N1c0lucHV0KCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdGN1cnJlbnQuaW5wdXQuZm9jdXMoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGVuYWJsZUlucHV0OiBlbmFibGVJbnB1dCxcblx0ZGlzYWJsZUlucHV0OiBkaXNhYmxlSW5wdXQsXG5cdGVuYWJsZUxvYWRpbmdJbnB1dDogZW5hYmxlTG9hZGluZ0lucHV0LFxuXHRkaXNhYmxlTG9hZGluZ0lucHV0OiBkaXNhYmxlTG9hZGluZ0lucHV0LFxuXHRmb2N1c0lucHV0OiBmb2N1c0lucHV0XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9ldmVudEhhbmRsZXJzL2V2ZW50cy9pbnB1dC5qc1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcblxudmFyIHN0YXR1c01hcCA9IHtcblx0NDAwOiAnQSBiYWQgcmVxdWVzdCB3YXMgbWFkZSwgc29tZXdoZXJlLiAoNDAwKScsXG5cdDQwMTogJ1RoaXMgcmVxdWVzdCBpcyB1bmF1dGhvcml6ZWQuICg0MDEpJyxcblx0NDAzOiAnVGhpcyByZXF1ZXN0IGlzIGZvcmJpZGRlbi4gKDQwMyknLFxuXHQ0MDQ6ICdUaGUgc2VydmVyIGlzIG1pc3NpbmcuICg0MDQpJyxcblx0NDA1OiAnTWV0aG9kIG5vdCBhbGxvd2VkLiAoNDA1KScsXG5cdDQwODogJ1dlIHRvb2sgdG9vIGxvbmcgdG8gcmVzcG9uZCwgc29tZXRoaW5nIG11c3QgYmUgd3JvbmcuICg0MDgpJyxcblx0NDEyOiAnVGhlIHdhcyBhbiBlcnJvciBvbiB0aGUgc2VydmVyLiAoNDEyKScsXG5cdDUwMDogJ1RoZSB3YXMgYW4gZXJyb3Igb24gdGhlIHNlcnZlci4gKDUwMCknLFxuXHQ1MDE6ICdUaGUgd2FzIGFuIGVycm9yIG9uIHRoZSBzZXJ2ZXIuICg1MDEpJyxcblx0NTAyOiAnVGhlIHdhcyBhbiBlcnJvciBvbiB0aGUgc2VydmVyLiAoNTAyKScsXG5cdDUwMzogJ1RoZSB3YXMgYW4gZXJyb3Igb24gdGhlIHNlcnZlci4gKDUwMyknLFxuXHQ1MDQ6ICdUaGUgd2FzIGFuIGVycm9yIG9uIHRoZSBzZXJ2ZXIuICg1MDQpJ1xufTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVFcnJvck1lc3NhZ2UoZXJyb3IpIHtcblx0aWYgKHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycpXG5cdFx0cmV0dXJuIGVycm9yO1xuXHRlbHNlIGlmIChlcnJvci5zdGF0dXMgJiYgc3RhdHVzTWFwW2Vycm9yLnN0YXR1c10gIT09IHVuZGVmaW5lZClcblx0XHRyZXR1cm4gc3RhdHVzTWFwW2Vycm9yLnN0YXR1c107XG5cdGVsc2UgaWYgKGVycm9yLnRpbWVvdXQpXG5cdFx0cmV0dXJuICdUaGUgcmVxdWVzdCB0b29rIHRvbyBsb25nLic7XG5cdGVsc2Vcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoZXJyb3IpO1xufVxuXG5mdW5jdGlvbiBlcnJvcihlcnIpIHtcblx0Y29uc29sZS5lcnJvcihhcmd1bWVudHMpO1xuXHRjb25zb2xlLmVycm9yKGdlbmVyYXRlRXJyb3JNZXNzYWdlKGVycikpO1xuXHRldmVudHMucHVibGlzaCgnc2VuZCcsIHtcblx0XHR0ZXh0OiAnYWdlbnQnLFxuXHRcdHNpbGVudDogdHJ1ZVxuXHR9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcnJvcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRIYW5kbGVycy9ldmVudHMvZXJyb3IuanNcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgc3RhdGUgPSByZXF1aXJlKCcuLi8uLi9zdGF0ZScpO1xuXG5mdW5jdGlvbiBzY3JvbGxUb0JvdHRvbSgpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHRjdXJyZW50LmNoYXRIb2xkZXIuc2Nyb2xsVG9wID0gY3VycmVudC5jaGF0SG9sZGVyLnNjcm9sbEhlaWdodDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzY3JvbGxUb0JvdHRvbTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRIYW5kbGVycy9ldmVudHMvc2Nyb2xsLXRvLWJvdHRvbS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzaG93TG9jYXRpb25zTGF5b3V0ID0gcmVxdWlyZSgnLi9zaG93LWxvY2F0aW9ucycpO1xudmFyIHJlcXVlc3RHZW9sb2NhdGlvbkxhdGxvbmdMYXlvdXQgPSByZXF1aXJlKCcuL3JlcXVlc3QtZ2VvbG9jYXRpb24tbGF0bG9uZycpO1xudmFyIGNob29zZUxvY2F0aW9uVHlwZUxheW91dCA9IHJlcXVpcmUoJy4vY2hvb3NlLWxvY2F0aW9uLXR5cGUnKTtcbnZhciBjaG9vc2VMYXlvdXQgPSByZXF1aXJlKCcuL2Nob29zZScpO1xudmFyIGZvcm1MYXlvdXQgPSByZXF1aXJlKCcuL2Zvcm0nKTtcbnZhciBjcmVkaXRDYXJkTGF5b3V0ID0gcmVxdWlyZSgnLi9jYy12YWxpZGF0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHNob3dMb2NhdGlvbnM6IHNob3dMb2NhdGlvbnNMYXlvdXQsXG5cdHJlcXVlc3RHZW9sb2NhdGlvbkxhdGxvbmc6IHJlcXVlc3RHZW9sb2NhdGlvbkxhdGxvbmdMYXlvdXQsXG5cdGNob29zZUxvY2F0aW9uVHlwZTogY2hvb3NlTG9jYXRpb25UeXBlTGF5b3V0LFxuXHRjaG9vc2U6IGNob29zZUxheW91dCxcblx0Y3JlZGl0Q2FyZDogY3JlZGl0Q2FyZExheW91dCxcblx0Zm9ybTogZm9ybUxheW91dFxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnJlcXVpcmUoJy4vc3R5bGVzLmNzcycpO1xuXG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG52YXIgc3Vic2NyaWJlID0gZXZlbnRzLnN1YnNjcmliZTtcbnZhciBwdWJsaXNoID0gZXZlbnRzLnB1Ymxpc2g7XG52YXIgc3RhdGUgPSByZXF1aXJlKCcuLi8uLi9zdGF0ZScpO1xudmFyIGdldFN0YXRlID0gc3RhdGUuZ2V0U3RhdGU7XG52YXIgc2V0U3RhdGUgPSBzdGF0ZS5zZXRTdGF0ZTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzJyk7XG5cbnZhciBmaXJzdCA9IHRydWU7XG52YXIgZGlzcGxheUxlbmd0aCA9IDM7XG52YXIgYnJlYWtwb2ludFdpZHRocyA9IFsnNzIwJywgJzY4MCcsICc2NDAnLCAnNTgwJywgJzUxMicsICc0ODAnLCAnNDIwJywgJzM2MCcsICczMjAnLCAnMjg4JywgJzI1NiddO1xudmFyIGRheXMgPSBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddO1xudmFyIHNob3dMb2NhdGlvbnMgPSB7fTtcbnZhciBsb2NhdGlvbklEcyA9IFtdO1xudmFyIGNoYXRXaWR0aCA9IDc0ODtcbnZhciBjdXJyZW50QnJlYWtwb2ludEtleSA9IDA7XG52YXIgcGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG52YXIgbnMgPSAnSUJNQ2hhdC1tYXAnO1xuXG52YXIgdGVtcGxhdGVzID0ge1xuXHRiYXNlOiByZXF1aXJlKCcuL3RlbXBsYXRlcy9iYXNlLmh0bWwnKSxcblx0YWRkTG9jYXRpb25zSXRlbTogcmVxdWlyZSgnLi90ZW1wbGF0ZXMvYWRkLWxvY2F0aW9ucy1pdGVtLmh0bWwnKSxcblx0YWRkTG9jYXRpb25JdGVtOiByZXF1aXJlKCcuL3RlbXBsYXRlcy9hZGQtbG9jYXRpb24taXRlbS5odG1sJylcbn07XG5cbnZhciBzaG93TG9jYXRpb25zTGF5b3V0ID0ge1xuXHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHRzdWJzY3JpYmUoJ2xheW91dDpzaG93LWxvY2F0aW9ucycsIGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdHZhciBzaG93TG9jYXRpb24gPSBuZXcgU2hvd0xvY2F0aW9ucyhkYXRhKTtcblx0XHRcdGxvY2F0aW9uSURzLnB1c2goZGF0YS51dWlkKTtcblx0XHRcdHNob3dMb2NhdGlvbnNbZGF0YS51dWlkXSA9IHNob3dMb2NhdGlvbjtcblx0XHR9KTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXRpbHMuZGVib3VuY2UoZnVuY3Rpb24oKSB7XG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzaXplTWFwKCk7XG5cdFx0XHR9LCAxMDAwKTtcblx0XHR9LCAxMDAwKSk7XG5cdH1cbn07XG5cbnZhciBhbHBoYU1hcCA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRyddO1xuXG5mdW5jdGlvbiBpbml0aWFsU2l6ZSh3aWR0aCkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGJyZWFrcG9pbnRXaWR0aHMubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoKGkgPT09IGJyZWFrcG9pbnRXaWR0aHMubGVuZ3RoIC0gMSkgfHwgKGJyZWFrcG9pbnRXaWR0aHNbaV0gPj0gd2lkdGggJiYgYnJlYWtwb2ludFdpZHRoc1tpICsgMV0gPCB3aWR0aCkpIHtcblx0XHRcdGN1cnJlbnRCcmVha3BvaW50S2V5ID0gaTtcblx0XHRcdGNoYXRXaWR0aCA9IHdpZHRoO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBzYW1lU2l6ZSgpIHtcblx0dmFyIHdpZHRoID0gc2hvd0xvY2F0aW9uc1tsb2NhdGlvbklEc1swXV0uZ2V0V2lkdGgoKTtcblx0dmFyIGlzU2FtZVNpemUgPSAoYnJlYWtwb2ludFdpZHRoc1tjdXJyZW50QnJlYWtwb2ludEtleV0gPj0gd2lkdGggJiYgYnJlYWtwb2ludFdpZHRoc1tjdXJyZW50QnJlYWtwb2ludEtleSArIDFdIDwgd2lkdGgpO1xuXHRyZXR1cm4gaXNTYW1lU2l6ZTtcbn1cblxuZnVuY3Rpb24gc2l6ZU1hcCgpIHtcblx0aWYgKGxvY2F0aW9uSURzLmxlbmd0aCA+IDAgJiYgc2hvd0xvY2F0aW9uc1tsb2NhdGlvbklEc1swXV0uZ2V0V2lkdGgoKSAmJiAhc2FtZVNpemUoKSkge1xuXHRcdHZhciB3aWR0aCA9IHNob3dMb2NhdGlvbnNbbG9jYXRpb25JRHNbMF1dLmdldFdpZHRoKCk7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBicmVha3BvaW50V2lkdGhzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoKGkgPT09IGJyZWFrcG9pbnRXaWR0aHMubGVuZ3RoIC0gMSkgfHwgKGJyZWFrcG9pbnRXaWR0aHNbaV0gPj0gd2lkdGggJiYgYnJlYWtwb2ludFdpZHRoc1tpICsgMV0gPCB3aWR0aCkpIHtcblx0XHRcdFx0Y3VycmVudEJyZWFrcG9pbnRLZXkgPSBpO1xuXHRcdFx0XHRjaGF0V2lkdGggPSB3aWR0aDtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBsb2NhdGlvbklEcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGlmIChzaG93TG9jYXRpb25zW2xvY2F0aW9uSURzW2pdXS5kYXRhLmxlbmd0aCA+IDApXG5cdFx0XHRcdFx0XHRzaG93TG9jYXRpb25zW2xvY2F0aW9uSURzW2pdXS5yZURyYXdNYXAoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBob25lQXJyYXkoZWwsIGl0ZW1zKSB7XG5cdGlmIChpdGVtcykge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtQ2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdHZhciB0ZXh0ID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMvY3JlYXRlLWRvbS1hcnJheS5odG1sJyk7XG5cdFx0XHRpdGVtQ2hpbGQuY2xhc3NOYW1lID0gbnMgKyAnLWNvbnRhY3Qtcm93Jztcblx0XHRcdGl0ZW1DaGlsZC5pbm5lckhUTUwgPSB1dGlscy5yZXBsYWNlQWxsKHRleHQsICcke25zfScsIG5zKTtcblx0XHRcdHZhciB0eXBlRWwgPSBpdGVtQ2hpbGQucXVlcnlTZWxlY3RvcignLicgKyBucyArICctY29udGFjdC10eXBlJyk7XG5cdFx0XHR2YXIgZGF0YUVsID0gaXRlbUNoaWxkLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWNvbnRhY3QtZGF0YScpO1xuXHRcdFx0dHlwZUVsLnRleHRDb250ZW50ID0gaXRlbXNbaV0udHlwZTtcblx0XHRcdGRhdGFFbC50ZXh0Q29udGVudCA9IGl0ZW1zW2ldLm51bWJlcjtcblx0XHRcdGVsLmFwcGVuZENoaWxkKGl0ZW1DaGlsZCk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEFNUE0odGltZSkge1xuXHR0cnkge1xuXHRcdHZhciBzcGxpdCA9IHRpbWUuc3BsaXQoJzonKTtcblx0XHR2YXIgaG91cnMgPSBzcGxpdFswXTtcblx0XHR2YXIgbWludXRlcyA9IHNwbGl0WzFdO1xuXHRcdHZhciBhbXBtID0gaG91cnMgPj0gMTIgPyAncG0nIDogJ2FtJztcblx0XHRob3VycyA9IGhvdXJzICUgMTI7XG5cdFx0aG91cnMgPSBob3VycyA/IGhvdXJzIDogMTI7XG5cdFx0cmV0dXJuIGhvdXJzICsgJzonICsgbWludXRlcyArICcgJyArIGFtcG07XG5cdH1cblx0Y2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gJy0nO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHBhcnNlQWRkcmVzcyhhZGRyZXNzKSB7XG5cdHZhciBhcnIgPSBhZGRyZXNzLnNwbGl0KCcsJyk7XG5cdHZhciBmaXJzdCA9IGFyci5zaGlmdCgpO1xuXHR2YXIgdGV4dCA9ICcnO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuXHRcdHRleHQgKz0gYXJyW2ldO1xuXHRcdGlmIChpIDwgKGFyci5sZW5ndGggLSAxKSlcblx0XHRcdHRleHQgKz0gJywnO1xuXHR9XG5cdHJldHVybiB7XG5cdFx0YWRkcmVzczE6IGZpcnN0LFxuXHRcdGFkZHJlc3MyOiB0ZXh0XG5cdH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvdXJzKGhvdXJzRWwsIG1vcmVIb3Vyc0VsLCBob3Vycykge1xuXHRpZiAoaG91cnMpIHtcblx0XHR2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpLmdldERheSgpO1xuXHRcdHZhciB0b2RheXNIb3VycyA9IGhvdXJzW3RvZGF5XTtcblx0XHR2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRpZiAodG9kYXlzSG91cnMgJiYgdG9kYXlzSG91cnMuaXNPcGVuKSB7XG5cdFx0XHRlbC5pbm5lckhUTUwgPSAnJyArXG5cdFx0XHRcdCc8ZGl2IGNsYXNzPVwiJyArIG5zICsgJy1ob3Vycy1vcGVuXCI+T3BlbiB0b2RheTo8L2Rpdj4nICtcblx0XHRcdFx0JzxkaXYgY2xhc3M9XCInICsgbnMgKyAnLWhvdXJzLXRvZGF5XCI+JyArXG5cdFx0XHRcdFx0Zm9ybWF0QU1QTSh0b2RheXNIb3Vycy5vcGVuKSArICcgJm5kYXNoOyAnICsgZm9ybWF0QU1QTSh0b2RheXNIb3Vycy5jbG9zZSkgK1xuXHRcdFx0XHQnPC9kaXY+Jztcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWwuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCInICsgbnMgKyAnLWhvdXJzLW9wZW5cIj5DbG9zZWQgdG9kYXkuPC9kaXY+Jztcblx0XHR9XG5cdFx0aG91cnNFbC5hcHBlbmRDaGlsZChlbCk7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3Vycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGNoaWxkRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGNoaWxkRWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIG5zICsgJy1kYXlzLWhvdXJzJyk7XG5cdFx0XHRpZiAoaG91cnNbaV0gJiYgaG91cnNbaV0uaXNPcGVuKSB7XG5cdFx0XHRcdGNoaWxkRWwuaW5uZXJIVE1MID0gJycgK1xuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiJyArIG5zICsgJy1kYXlzLWhvdXJzLWRheVwiPicgK1xuXHRcdFx0XHRcdFx0ZGF5c1tpXSArXG5cdFx0XHRcdFx0JzwvZGl2PicgK1xuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiJyArIG5zICsgJy1kYXlzLWhvdXJzLWhvdXJzXCI+JyArXG5cdFx0XHRcdFx0XHRmb3JtYXRBTVBNKGhvdXJzW2ldLm9wZW4pICsgJyAmbmRhc2g7ICcgKyBmb3JtYXRBTVBNKGhvdXJzW2ldLmNsb3NlKSArXG5cdFx0XHRcdFx0JzwvZGl2Pic7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjaGlsZEVsLmlubmVySFRNTCA9ICcnICtcblx0XHRcdFx0JzxkaXYgY2xhc3M9XCInICsgbnMgKyAnLWRheXMtaG91cnMtZGF5XCI+JyArXG5cdFx0XHRcdFx0ZGF5c1tpXSArXG5cdFx0XHRcdCc8L2Rpdj4nICtcblx0XHRcdFx0JzxkaXYgY2xhc3M9XCInICsgbnMgKyAnLWRheXMtaG91cnMtY2xvc2VkXCI+JyArXG5cdFx0XHRcdFx0J0Nsb3NlZCcgK1xuXHRcdFx0XHQnPC9kaXY+Jztcblx0XHRcdH1cblx0XHRcdG1vcmVIb3Vyc0VsLmFwcGVuZENoaWxkKGNoaWxkRWwpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBkaXN0YW5jZShpdGVtKSB7XG5cdGlmICghaXRlbS5kaXN0YW5jZSlcblx0XHRyZXR1cm47XG5cdHZhciBkaXN0YW5jZUxlbmd0aCA9IChpdGVtLmRpc3RhbmNlLnRvRml4ZWQoMSkgPT09IDAuMCkgPyAwLjEgOiBpdGVtLmRpc3RhbmNlLnRvRml4ZWQoMSk7XG5cdHZhciBkaXN0YW5jZUxlbmd0aE1lYXN1cmUgPSAoaXRlbS5kaXN0YW5jZU1lYXN1cmUgPT09ICdtaWxlcycpID8gJ20nIDogJ2ttJztcblx0cmV0dXJuIGRpc3RhbmNlTGVuZ3RoICsgZGlzdGFuY2VMZW5ndGhNZWFzdXJlO1xufVxuXG5mdW5jdGlvbiBTaG93TG9jYXRpb25zKGRhdGEpIHtcblx0dGhpcy5pbml0KGRhdGEpO1xufVxuXG5TaG93TG9jYXRpb25zLnByb3RvdHlwZSA9IHtcblx0aW5pdDogZnVuY3Rpb24oZGF0YSkge1xuXHRcdHRoaXMuZGF0YSA9IChkYXRhLm1lc3NhZ2UuZGF0YSAhPT0gdW5kZWZpbmVkICYmIGRhdGEubWVzc2FnZS5kYXRhLmxvY2F0aW9uX2RhdGEgIT09IHVuZGVmaW5lZCkgPyBkYXRhLm1lc3NhZ2UuZGF0YS5sb2NhdGlvbl9kYXRhIDogW107XG5cdFx0aWYgKHRoaXMuZGF0YS5sZW5ndGggPiAxKSB7XG5cdFx0XHRzZXRTdGF0ZSh7XG5cdFx0XHRcdGxvY2F0aW9uX2RhdGE6IHRoaXMuZGF0YVxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcblx0XHR0aGlzLnBhcmVudEVsZW1lbnQgPSBkYXRhLmVsZW1lbnQ7XG5cdFx0dGhpcy5sYXlvdXRFbGVtZW50ID0gZGF0YS5sYXlvdXRFbGVtZW50O1xuXHRcdHRoaXMubXNnRWxlbWVudCA9IGRhdGEubXNnRWxlbWVudDtcblx0XHRzd2l0Y2ggKHRoaXMuZGF0YS5sZW5ndGgpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHR0aGlzLm1zZ0VsZW1lbnQudGV4dENvbnRlbnQgPSAnV2UgY291bGQgbm90IGZpbmQgYW55IGxvY2F0aW9ucyBjbG9zZSB0byB5b3UuJztcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMTpcblx0XHRcdHRoaXMubXNnRWxlbWVudC50ZXh0Q29udGVudCA9ICdIZXJlIGFyZSB0aGUgZGV0YWlscyBmb3IgdGhlICcgKyB0aGlzLmRhdGFbMF0uYWRkcmVzcy5hZGRyZXNzICsgJyBsb2NhdGlvbi4uLic7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0dGhpcy5tc2dFbGVtZW50LnRleHRDb250ZW50ID0gJ0hlcmUgYXJlIHRoZSBsb2NhdGlvbnMgSSBmb3VuZCBjbG9zZSB0byB5b3U6Jztcblx0XHR9XG5cblx0XHRpZiAodGhpcy5kYXRhLmxlbmd0aCA+IDApIHtcblx0XHRcdHZhciB0ZXh0ID0gdGVtcGxhdGVzLmJhc2U7XG5cdFx0XHR0aGlzLnV1aWQgPSBkYXRhLnV1aWQ7XG5cdFx0XHRpZiAoZmlyc3QpIHtcblx0XHRcdFx0aW5pdGlhbFNpemUodGhpcy5nZXRXaWR0aCgpKTtcblx0XHRcdFx0Zmlyc3QgPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHRoaXMubWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHR0aGlzLm1hcC5pbm5lckhUTUwgPSB1dGlscy5yZXBsYWNlQWxsKHRleHQsICcke25zfScsIG5zKTtcblx0XHRcdHRoaXMubWFwRWxlbWVudCA9IHRoaXMubWFwLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWltZycpO1xuXHRcdFx0dGhpcy5kYXRhRWxlbWVudCA9IHRoaXMubWFwLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWRhdGEnKTtcblx0XHRcdHRoaXMubWFwRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmRyYXdMb2NhdGlvbnMoKSk7XG5cdFx0XHR0aGlzLmRhdGFFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuYWRkRGV0YWlscygpKTtcblx0XHRcdHRoaXMubGF5b3V0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLm1hcCk7XG5cdFx0fVxuXHR9LFxuXHRnZXRXaWR0aDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHdpZHRoID0gdGhpcy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LXdhdHNvbi1sYXlvdXQ6bGFzdC1jaGlsZCcpLmNsaWVudFdpZHRoO1xuXHRcdHJldHVybiB3aWR0aDtcblx0fSxcblx0cmVEcmF3TWFwOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLm1hcEVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG5cdFx0dGhpcy5tYXBFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZHJhd0xvY2F0aW9ucygpKTtcblx0fSxcblx0YWRkRGV0YWlsczogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHRoaXMuZGF0YS5sZW5ndGggPiAxKVxuXHRcdFx0cmV0dXJuIHRoaXMuYWRkTG9jYXRpb25zKCk7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIHRoaXMuYWRkTG9jYXRpb24oKTtcblx0fSxcblx0ZHJhd0xvY2F0aW9uczogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBnZXRTdGF0ZSgpO1xuXHRcdHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0XHR2YXIgd2lkdGggPSB0aGlzLmdldFdpZHRoKCk7XG5cdFx0dmFyIGNvbmZpZyA9IHtcblx0XHRcdHNpemU6IHdpZHRoICsgJ3gxODAnLFxuXHRcdFx0c2NhbGU6IHBpeGVsUmF0aW9cblx0XHR9O1xuXHRcdHRoaXMudXJpID0gY3VycmVudC5tYXBzU2VydmVyICsgJz8nO1xuXHRcdHRoaXMudXJpICs9IHV0aWxzLnNlcmlhbGl6ZShjb25maWcpO1xuXHRcdHRoaXMudXJpICs9ICcmbG9jYXRpb25zPSc7XG5cdFx0dmFyIGxvY2F0aW9ucyA9ICcnO1xuXHRcdGZvciAodmFyIGkgPSAwOyAoaSA8IGRpc3BsYXlMZW5ndGggJiYgaSA8IHRoaXMuZGF0YS5sZW5ndGgpOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gdGhpcy5kYXRhW2ldO1xuXHRcdFx0bG9jYXRpb25zICs9IChpID09PSAwICkgPyBpdGVtLmFkZHJlc3MubGF0ICsgJywnICsgaXRlbS5hZGRyZXNzLmxuZyA6ICcrJyArIGl0ZW0uYWRkcmVzcy5sYXQgKyAnLCcgKyBpdGVtLmFkZHJlc3MubG5nO1xuXHRcdH1cblx0XHR0aGlzLnVyaSArPSBlbmNvZGVVUklDb21wb25lbnQobG9jYXRpb25zKTtcblx0XHR0aGlzLnVyaSArPSAnJmNvbG9yPScgKyBlbmNvZGVVUklDb21wb25lbnQoY3VycmVudC5zdHlsZXMuYWNjZW50QmFja2dyb3VuZC5yZXBsYWNlKCcjJywgJycpKTtcblx0XHRpbWcuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcxMDAlJyk7XG5cdFx0aW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgdGhpcy51cmkpO1xuXHRcdHJldHVybiBpbWc7XG5cdH0sXG5cdGhhbmRsZUNsaWNrOiBmdW5jdGlvbigpIHtcblx0XHQvKlxuXHRcdGZvciBTZXB0ZW1iZXIgdmVyc2lvblxuXHRcdGNvbnN0IGRhdGEgPSB7XG5cdFx0XHR0ZXh0OiB0aGlzLmRhdGFzZXQuaWQsXG5cdFx0XHRzaWxlbnQ6IHRydWVcblx0XHR9OyovXG5cdFx0dGhpcy5jbGFzc05hbWUgPSBucyArICctbG9jYXRpb24tYWN0aXZlJztcblx0XHRzaG93TG9jYXRpb25zW3RoaXMuZGF0YXNldC51dWlkXS5yZW1vdmVBbGxFdmVudExpc3RlbmVycygpO1xuXHRcdC8vYWN0aW9ucy5wdWJsaXNoKCdzZW5kJywgZGF0YSk7IGZvciBTZXB0ZW1iZXIgdmVyc2lvblxuXHRcdHB1Ymxpc2goJ3JlY2VpdmUnLCB7XG5cdFx0XHRtZXNzYWdlOiB7XG5cdFx0XHRcdHRleHQ6IFsnSGVyZSBhcmUgdGhlIGRldGFpbHMgZm9yIHRoaXMgbG9jYXRpb24uJ10sXG5cdFx0XHRcdGxheW91dDoge1xuXHRcdFx0XHRcdG5hbWU6ICdzaG93LWxvY2F0aW9ucydcblx0XHRcdFx0fSxcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdC8qIGpzaGludCBpZ25vcmU6c3RhcnQgKi9cblx0XHRcdFx0XHRsb2NhdGlvbl9kYXRhOiBbc2hvd0xvY2F0aW9uc1t0aGlzLmRhdGFzZXQudXVpZF0uZGF0YVt0aGlzLmRhdGFzZXQuaWQgLSAxXV1cblx0XHRcdFx0XHQvKiBqc2hpbnQgaWdub3JlOmVuZCAqL1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cdHJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzOiBmdW5jdGlvbigpIHtcblx0XHRpZiAodGhpcy5ldmVudExpc3RlbmVycy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLmRhdGFFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobnMgKyAnLWNsaWNrYWJsZScpO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmV2ZW50TGlzdGVuZXJzLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHR0aGlzLmV2ZW50TGlzdGVuZXJzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljayk7XG5cdFx0XHR0aGlzLmV2ZW50TGlzdGVuZXJzID0gW107XG5cdFx0fVxuXHR9LFxuXHRhZGRMb2NhdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHZhciBsb2NhdGlvbkRhdGEgPSBnZXRTdGF0ZSgpLmxvY2F0aW9uX2RhdGE7XG5cdFx0dmFyIGl0ZW0gPSB0aGlzLmRhdGFbMF07XG5cdFx0dmFyIGNyZWF0ZURvbSA9IGZ1bmN0aW9uKGVsKSB7XG5cdFx0XHR2YXIgdGV4dCA9IHRlbXBsYXRlcy5hZGRMb2NhdGlvbkl0ZW07XG5cdFx0XHRlbC5pbm5lckhUTUwgPSB1dGlscy5yZXBsYWNlQWxsKHRleHQsICcke25zfScsIG5zKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGxpbms6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEtYWRkcmVzcy1saW5rJyksXG5cdFx0XHRcdGxhYmVsOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtaXRlbS1kYXRhLXRpdGxlJyksXG5cdFx0XHRcdGFkZHJlc3M6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEtYWRkcmVzcycpLFxuXHRcdFx0XHRhZGRyZXNzMTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuXHRcdFx0XHRhZGRyZXNzMjogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuXHRcdFx0XHRwaG9uZTogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWl0ZW0tZGF0YS1waG9uZScpLFxuXHRcdFx0XHRlbWFpbDogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWl0ZW0tZGF0YS1lbWFpbCcpLFxuXHRcdFx0XHRob3VyczogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWl0ZW0tZGF0YS1ob3VycycpLFxuXHRcdFx0XHRwYXJlbnRFbDogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWl0ZW0tZGF0YScpLFxuXHRcdFx0XHRob3Vyc0J1dHRvbjogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWl0ZW0tZGF0YS1ob3Vycy1idXR0b24nKSxcblx0XHRcdFx0bW9yZUhvdXJzOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtaXRlbS1kYXRhLW1vcmUtaG91cnMnKSxcblx0XHRcdFx0ZGlzdGFuY2U6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRpc3RhbmNlJyksXG5cdFx0XHRcdGJhY2tIb2xkZXI6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEtc2VjdGlvbicpLFxuXHRcdFx0XHRiYWNrOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtYWxsJylcblx0XHRcdH07XG5cdFx0fTtcblx0XHR2YXIgZG9tID0gY3JlYXRlRG9tKGVsKTtcblx0XHRpZiAoaXRlbS5sYWJlbClcblx0XHRcdGRvbS5sYWJlbC50ZXh0Q29udGVudCA9IGl0ZW0ubGFiZWw7XG5cdFx0ZWxzZVxuXHRcdFx0ZG9tLnBhcmVudEVsLnJlbW92ZUNoaWxkKGRvbS5sYWJlbCk7XG5cdFx0XHRcblx0XHR2YXIgYWRkcmVzc2VzID0gcGFyc2VBZGRyZXNzKGl0ZW0uYWRkcmVzcy5hZGRyZXNzKTtcblx0XHRkb20uYWRkcmVzczEudGV4dENvbnRlbnQgPSBhZGRyZXNzZXMuYWRkcmVzczE7XG5cdFx0ZG9tLmFkZHJlc3MyLnRleHRDb250ZW50ID0gYWRkcmVzc2VzLmFkZHJlc3MyO1xuXHRcdGRvbS5hZGRyZXNzLmFwcGVuZENoaWxkKGRvbS5hZGRyZXNzMSk7XG5cdFx0ZG9tLmFkZHJlc3MuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG5cdFx0ZG9tLmFkZHJlc3MuYXBwZW5kQ2hpbGQoZG9tLmFkZHJlc3MyKTtcblx0XHRkb20ubGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vP3E9JyArIGVuY29kZVVSSUNvbXBvbmVudChpdGVtLmFkZHJlc3MuYWRkcmVzcykpO1xuXHRcdGRvbS5saW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuXHRcdGRvbS5kaXN0YW5jZS50ZXh0Q29udGVudCA9IGRpc3RhbmNlKGl0ZW0pIHx8ICcnO1xuXG5cdFx0aWYgKGl0ZW0uZW1haWwpIHtcblx0XHRcdGNvbnN0IGxpbmtFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRcdGxpbmtFbC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnbWFpbHRvOicgKyBpdGVtLmVtYWlsKTtcblx0XHRcdGxpbmtFbC5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcblx0XHRcdGxpbmtFbC50ZXh0Q29udGVudCA9IGl0ZW0uZW1haWw7XG5cdFx0XHRkb20uZW1haWwuYXBwZW5kQ2hpbGQobGlua0VsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9tLmVtYWlsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tLmVtYWlsKTtcblx0XHR9XG5cblx0XHRpZiAoaXRlbS5waG9uZXMgJiYgaXRlbS5waG9uZXMubGVuZ3RoID4gMClcblx0XHRcdGNyZWF0ZVBob25lQXJyYXkoZG9tLnBob25lLCBpdGVtLnBob25lcyk7XG5cdFx0ZWxzZVxuXHRcdFx0ZG9tLnBob25lLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tLnBob25lKTtcblxuXHRcdGlmIChpdGVtLmRheXMgJiYgaXRlbS5kYXlzLmxlbmd0aCA+IDApIHtcblx0XHRcdGNyZWF0ZUhvdXJzKGRvbS5ob3VycywgZG9tLm1vcmVIb3VycywgaXRlbS5kYXlzKTtcblx0XHRcdGRvbS5ob3Vyc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRkb20ucGFyZW50RWwucmVtb3ZlQ2hpbGQoZG9tLmhvdXJzQnV0dG9uKTtcblx0XHRcdFx0ZG9tLm1vcmVIb3Vycy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEtbW9yZS1ob3VycycpO1xuXHRcdFx0XHRwdWJsaXNoKCdmb2N1cy1pbnB1dCcpO1xuXHRcdFx0XHRwdWJsaXNoKCdzY3JvbGwtdG8tYm90dG9tJyk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9tLmhvdXJzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tLmhvdXJzKTtcblx0XHR9XG5cblx0XHRpZiAobG9jYXRpb25EYXRhICYmIGxvY2F0aW9uRGF0YS5sZW5ndGggPiAxKSB7XG5cdFx0XHRkb20uYmFjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRwdWJsaXNoKCdyZWNlaXZlJywge1xuXHRcdFx0XHRcdG1lc3NhZ2U6IHtcblx0XHRcdFx0XHRcdHRleHQ6IFsnSGVyZSBhcmUgdGhlIGxvY2F0aW9ucyBJIGZvdW5kIGNsb3NlIHRvIHlvdTonXSxcblx0XHRcdFx0XHRcdGxheW91dDoge1xuXHRcdFx0XHRcdFx0XHRuYW1lOiAnc2hvdy1sb2NhdGlvbnMnXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0XHQvKiBqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG5cdFx0XHRcdFx0XHRcdGxvY2F0aW9uX2RhdGE6IGxvY2F0aW9uRGF0YVxuXHRcdFx0XHRcdFx0XHQvKiBqc2hpbnQgaWdub3JlOmVuZCAqL1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9tLmJhY2tIb2xkZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb20uYmFja0hvbGRlcik7XG5cdFx0fVxuXHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbCk7XG5cdFx0cmV0dXJuIGNvbnRhaW5lcjtcblx0fSxcblx0YWRkTG9jYXRpb25zOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgY3VycmVudCA9IGdldFN0YXRlKCk7XG5cdFx0dmFyIGNyZWF0ZURvbSA9IGZ1bmN0aW9uKGVsLCBpLCB1dWlkKSB7XG5cdFx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spO1xuXHRcdFx0ZWwuZGF0YXNldC51dWlkID0gdXVpZDtcblx0XHRcdGVsLmRhdGFzZXQuaWQgPSBpICsgMTtcblx0XHRcdHZhciB0ZXh0ID0gdGVtcGxhdGVzLmFkZExvY2F0aW9uc0l0ZW07XG5cdFx0XHRlbC5pbm5lckhUTUwgPSB1dGlscy5yZXBsYWNlQWxsKHRleHQsICcke25zfScsIG5zKTtcblx0XHRcdHRoaXMuZXZlbnRMaXN0ZW5lcnMucHVzaChlbCk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpY29uOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtaXRlbS1pY29uJyksXG5cdFx0XHRcdGxhYmVsOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtaXRlbS1kYXRhLXRpdGxlJyksXG5cdFx0XHRcdGFkZHJlc3M6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEtYWRkcmVzcycpLFxuXHRcdFx0XHRhZGRyZXNzMTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuXHRcdFx0XHRhZGRyZXNzMjogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuXHRcdFx0XHRkaXN0YW5jZTogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWl0ZW0tZGlzdGFuY2UnKVxuXHRcdFx0fTtcblx0XHR9O1xuXG5cdFx0dmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IChpIDwgZGlzcGxheUxlbmd0aCAmJiBpIDwgdGhpcy5kYXRhLmxlbmd0aCk7IGkrKykge1xuXHRcdFx0dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHR2YXIgaXRlbSA9IHRoaXMuZGF0YVtpXTtcblx0XHRcdHZhciBkb20gPSBjcmVhdGVEb20uY2FsbCh0aGlzLCBlbCwgaSwgdGhpcy51dWlkKTtcblx0XHRcdHZhciBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGJveC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2ZvbnQtd2VpZ2h0OmJvbGQ7IGNvbG9yOicgKyBjdXJyZW50LnN0eWxlcy5hY2NlbnRUZXh0ICsgJzsgYmFja2dyb3VuZDogJyArIGN1cnJlbnQuc3R5bGVzLmFjY2VudEJhY2tncm91bmQgKyAnOyBsaW5lLWhlaWdodDogMjRweDsgaGVpZ2h0OjI0cHg7IHdpZHRoOjI0cHg7IG1hcmdpbi1sZWZ0OjhweDsnKTtcblx0XHRcdGJveC50ZXh0Q29udGVudCA9IGFscGhhTWFwW2ldO1xuXHRcdFx0ZG9tLmljb24uYXBwZW5kQ2hpbGQoYm94KTtcblx0XHRcdGRvbS5sYWJlbC50ZXh0Q29udGVudCA9IGl0ZW0ubGFiZWwgfHwgJyc7XG5cdFx0XHR2YXIgYWRkcmVzc2VzID0gcGFyc2VBZGRyZXNzKGl0ZW0uYWRkcmVzcy5hZGRyZXNzKTtcblx0XHRcdGRvbS5hZGRyZXNzMS50ZXh0Q29udGVudCA9IGFkZHJlc3Nlcy5hZGRyZXNzMTtcblx0XHRcdGRvbS5hZGRyZXNzMi50ZXh0Q29udGVudCA9IGFkZHJlc3Nlcy5hZGRyZXNzMjtcblx0XHRcdGRvbS5hZGRyZXNzLmFwcGVuZENoaWxkKGRvbS5hZGRyZXNzMSk7XG5cdFx0XHRkb20uYWRkcmVzcy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcblx0XHRcdGRvbS5hZGRyZXNzLmFwcGVuZENoaWxkKGRvbS5hZGRyZXNzMik7XG5cdFx0XHRkb20uZGlzdGFuY2UudGV4dENvbnRlbnQgPSBkaXN0YW5jZShpdGVtKSB8fCAnJztcblx0XHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbCk7XG5cdFx0fVxuXHRcdHJldHVybiBjb250YWluZXI7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvd0xvY2F0aW9uc0xheW91dDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyoqXFxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxcbipcXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcXFwiTGljZW5zZVxcXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcXG4qXFxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcXG4qXFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXFxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcXFwiQVMgSVNcXFwiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3NcXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcXG4qIHRoZSBMaWNlbnNlLlxcbiovXFxuXFxuLklCTUNoYXQtbWFwIHtcXG5cXHRtYXJnaW4tdG9wOjFlbTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWltZyB7XFxuXFx0aGVpZ2h0OjE4MHB4O1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtaW1nIGltZyB7XFxuXFx0aGVpZ2h0OjE4MHB4O1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtbXVsdGlwbGUtbG9jYXRpb25zIHtcXG5cXHRjdXJzb3I6IGRlZmF1bHQ7XFxuXFx0b3BhY2l0eTowLjM7XFxufVxcblxcbi5JQk1DaGF0LW1hcC1sb2NhdGlvbi1hY3RpdmUgLklCTUNoYXQtbWFwLW11bHRpcGxlLWxvY2F0aW9ucyB7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWNsaWNrYWJsZSAuSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0uSUJNQ2hhdC1tYXAtbXVsdGlwbGUtbG9jYXRpb25zIHtcXG5cXHRwYWRkaW5nOiAxZW0gMCAxZW0gMDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWRhdGEtc2VjdGlvbiB7XFxuXFx0bWFyZ2luLXRvcDowLjVlbTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtIHtcXG5cXHRwYWRkaW5nOiAxZW07XFxuXFx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzUwNTA1MDtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtOmFmdGVyIHtcXG5cXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Zm9udC1zaXplOiAwO1xcblxcdGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG5cXHRjbGVhcjogYm90aDtcXG5cXHRoZWlnaHQ6IDA7XFxuIH1cXG5cXG4uSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0taWNvbiB7XFxuXFx0cGFkZGluZzowLjVlbSAwLjVlbSAwIDA7XFxuXFx0dGV4dC1hbGlnbjpjZW50ZXI7XFxuXFx0d2lkdGg6IDY0cHg7XFxuXFx0ZmxvYXQ6bGVmdDtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWRhdGEge1xcblxcdGZsb2F0OmxlZnQ7XFxufVxcbi5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1kYXRhLXRpdGxlIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRwYWRkaW5nLWJvdHRvbTowLjVlbTtcXG59XFxuLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWRhdGEtaXRlbXMge1xcblxcdGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbi5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1kYXRhLXNlY3Rpb24ge1xcblxcdHBhZGRpbmctYm90dG9tOjFlbTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWRhdGEtZW1haWwge1xcblxcdHBhZGRpbmctYm90dG9tOjFlbTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWRhdGEtcGhvbmUge1xcblxcdGRpc3BsYXk6IHRhYmxlO1xcblxcdG1heC13aWR0aDo0MDBweDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwYWRkaW5nLWJvdHRvbToxZW07XFxufVxcbi5JQk1DaGF0LW1hcC1jb250YWN0LXJvdyB7XFxuXFx0cGFkZGluZy1ib3R0b206MWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtaG91cnMtb3BlbiB7XFxuXFx0cGFkZGluZy1ib3R0b206MC41ZW07XFxufVxcblxcbi5JQk1DaGF0LW1hcC1jb250YWN0LXR5cGUge1xcblxcdGZvbnQtc3R5bGU6aXRhbGljO1xcblxcdGZvbnQtc2l6ZTowLjllbTtcXG59XFxuLklCTUNoYXQtbWFwLWNvbnRhY3QtZGF0YSB7XFxuXFxufVxcblxcbmEuSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0tZGF0YS1hZGRyZXNzLWxpbmssXFxuYS5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1kYXRhLWFkZHJlc3MtbGluazpob3ZlcixcXG5hLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWRhdGEtYWRkcmVzcy1saW5rOnZpc2l0ZWQsXFxuYS5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1kYXRhLWFkZHJlc3MtbGluazphY3RpdmUsXFxuLklCTUNoYXQtbWFwLWNvbnRhY3QtZGF0YSBhLFxcbi5JQk1DaGF0LW1hcC1jb250YWN0LWRhdGEgYTpob3ZlcixcXG4uSUJNQ2hhdC1tYXAtY29udGFjdC1kYXRhIGE6YWN0aXZlLFxcbi5JQk1DaGF0LW1hcC1jb250YWN0LWRhdGEgYTp2aXNpdGVkIHtcXG5cXHRmb250LXdlaWdodDpub3JtYWw7XFxuXFx0Zm9udC1zaXplOjAuOWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0tZGlzdGFuY2Uge1xcblxcdHdpZHRoOjY0cHg7XFxuXFx0Zm9udC1zaXplOjAuOWVtO1xcbn1cXG5cXG5idXR0b24uSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0tZGF0YS1ob3Vycy1idXR0b24ge1xcblxcdGZvbnQtc2l6ZTowLjllbTtcXG5cXHRwYWRkaW5nOiAwIDFlbSAwIDFlbTtcXG5cXHRsaW5lLWhlaWdodDoxLjVlbTtcXG5cXHRtYXJnaW4tdG9wOjFlbTtcXG59XFxuXFxuYnV0dG9uLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1hbGwge1xcblxcdGZvbnQtc2l6ZTowLjllbTtcXG5cXHRwYWRkaW5nOiAwIDFlbSAwIDFlbTtcXG5cXHRsaW5lLWhlaWdodDoxLjVlbTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWRhdGEtbW9yZS1ob3VycyB7XFxuXFx0ZGlzcGxheTogdGFibGU7XFxufVxcblxcbi5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1kYXRhLW1vcmUtaG91cnMuSUJNQ2hhdC1tYXAtaGlkZGVuIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtZGF5cy1ob3VycyB7XFxuXFx0ZGlzcGxheTogdGFibGUtcm93O1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtZGF5cy1ob3Vycy1kYXksIC5JQk1DaGF0LW1hcC1kYXlzLWhvdXJzLWhvdXJzLCAuSUJNQ2hhdC1tYXAtZGF5cy1ob3Vycy1jbG9zZWQge1xcblxcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6MC43NWVtIDFlbSAwIDA7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtZGF5cy1ob3VycyA+IGRpdjpsYXN0LWNoaWxkIHtcXG5cXHRwYWRkaW5nOiAwLjc1ZW0gMCAwIDAgIWltcG9ydGFudDtcXG59XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYXctbG9hZGVyIS4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvc3R5bGVzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiJHtuc31cXFwiPlxcblxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWltZ1xcXCI+PC9kaXY+XFxuXFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tZGF0YSAke25zfS1jbGlja2FibGVcXFwiPjwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3RlbXBsYXRlcy9iYXNlLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtICR7bnN9LW11bHRpcGxlLWxvY2F0aW9ucyAke25zfS1kYXRhLXNlY3Rpb24gSUJNQ2hhdC1zZWNvbmRhcnktY29sb3JzXFxcIj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1pY29uXFxcIj48L2Rpdj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhXFxcIj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLXRpdGxlXFxcIj48L2Rpdj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLWl0ZW1zXFxcIj5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLWFkZHJlc3NcXFwiPjwvZGl2PlxcblxcdFxcdDwvZGl2PlxcblxcdDwvZGl2PlxcblxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRpc3RhbmNlXFxcIj48L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy90ZW1wbGF0ZXMvYWRkLWxvY2F0aW9ucy1pdGVtLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA1MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtICR7bnN9LWRhdGEtc2VjdGlvbiBJQk1DaGF0LXNlY29uZGFyeS1jb2xvcnNcXFwiPlxcblxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtc2VjdGlvblxcXCI+XFxuXFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWFsbCBJQk1DaGF0LWFjY2VudC1jb2xvcnNcXFwiPkJhY2sgdG8gQWxsIExvY2F0aW9uczwvYnV0dG9uPlxcblxcdDwvZGl2PlxcblxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGFcXFwiPlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtdGl0bGVcXFwiPjwvZGl2PlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtaXRlbXNcXFwiPlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtc2VjdGlvblxcXCI+XFxuXFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtYWRkcmVzcy1saW5rXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLWFkZHJlc3NcXFwiPjwvZGl2PlxcblxcdFxcdFxcdFxcdDwvYT5cXG5cXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLWVtYWlsXFxcIj48L2Rpdj5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLXBob25lXFxcIj48L2Rpdj5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLWhvdXJzXFxcIj48L2Rpdj5cXG5cXHRcXHQ8L2Rpdj5cXG5cXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLWhvdXJzLWJ1dHRvbiBJQk1DaGF0LWFjY2VudC1jb2xvcnNcXFwiPk1vcmUgSG91cnM8L2J1dHRvbj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLWl0ZW1zXFxcIj5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLW1vcmUtaG91cnMgJHtuc30taGlkZGVuXFxcIj48L2Rpdj5cXG5cXHRcXHQ8L2Rpdj5cXG5cXHQ8L2Rpdj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kaXN0YW5jZVxcXCI+PC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvdGVtcGxhdGVzL2FkZC1sb2NhdGlvbi1pdGVtLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIiR7bnN9LWNvbnRhY3QtdHlwZVxcXCI+PC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwiJHtuc30tY29udGFjdC1kYXRhXFxcIj48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy90ZW1wbGF0ZXMvY3JlYXRlLWRvbS1hcnJheS5odG1sXG4gKiogbW9kdWxlIGlkID0gNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIGV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2V2ZW50cycpO1xudmFyIHN1YnNjcmliZSA9IGV2ZW50cy5zdWJzY3JpYmU7XG52YXIgcHVibGlzaCA9IGV2ZW50cy5wdWJsaXNoO1xuXG52YXIgcmVxdWVzdEdlb2xvY2F0aW9uTGF0bG9uZ3MgPSBbXTtcblxudmFyIHJlcXVlc3RHZW9sb2NhdGlvbkxhdGxvbmdMYXlvdXQgPSB7XG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHN1YnNjcmliZSgnbGF5b3V0OnJlcXVlc3QtZ2VvbG9jYXRpb24tbGF0bG9uZycsIGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdHZhciByZXF1ZXN0R2VvbG9jYXRpb25MYXRsb25nID0gbmV3IFJlcXVlc3RHZW9sb2NhdGlvbkxhdGxvbmcoZGF0YSk7XG5cdFx0XHRyZXF1ZXN0R2VvbG9jYXRpb25MYXRsb25nc1tkYXRhLnV1aWRdID0gcmVxdWVzdEdlb2xvY2F0aW9uTGF0bG9uZztcblx0XHR9KTtcblx0fVxufTtcblxuZnVuY3Rpb24gUmVxdWVzdEdlb2xvY2F0aW9uTGF0bG9uZyhkYXRhKSB7XG5cdHRoaXMuaW5pdChkYXRhKTtcbn1cblxuUmVxdWVzdEdlb2xvY2F0aW9uTGF0bG9uZy5wcm90b3R5cGUgPSB7XG5cdGluaXQ6IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHR0aGlzLmRhdGEgPSBkYXRhLmRhdGE7XG5cdFx0dGhpcy51dWlkID0gZGF0YS51dWlkO1xuXHRcdHRoaXMucGFyZW50RWxlbWVudCA9IGRhdGEuZWxlbWVudDtcblx0XHR0aGlzLmxheW91dEVsZW1lbnQgPSBkYXRhLmxheW91dEVsZW1lbnQ7XG5cdFx0cHVibGlzaCgnZGlzYWJsZS1pbnB1dCcpO1xuXHRcdG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXG5cdFx0XHRcdGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cdFx0XHRcdFx0cHVibGlzaCgnZW5hYmxlLWlucHV0Jyk7XG5cdFx0XHRcdFx0cHVibGlzaCgnc2VuZCcsIHtcblx0XHRcdFx0XHRcdHRleHQ6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSArICcsJyArIHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsXG5cdFx0XHRcdFx0XHRzaWxlbnQ6IHRydWVcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cHVibGlzaCgnZW5hYmxlLWlucHV0Jyk7XG5cdFx0XHRcdFx0cHVibGlzaCgnc2VuZCcsIHtcblx0XHRcdFx0XHRcdHRleHQ6ICcwLDAnLFxuXHRcdFx0XHRcdFx0c2lsZW50OiB0cnVlXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWVzdEdlb2xvY2F0aW9uTGF0bG9uZ0xheW91dDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9yZXF1ZXN0LWdlb2xvY2F0aW9uLWxhdGxvbmcvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA1NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG5yZXF1aXJlKCcuL3N0eWxlcy5jc3MnKTtcblxudmFyIGV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2V2ZW50cycpO1xudmFyIHN1YnNjcmliZSA9IGV2ZW50cy5zdWJzY3JpYmU7XG52YXIgcHVibGlzaCA9IGV2ZW50cy5wdWJsaXNoO1xudmFyIGFjdGl2ZUNsYXNzTmFtZSA9ICdJQk1DaGF0LWFjY2VudC1jb2xvcnMnO1xudmFyIGluYWN0aXZlQ2xhc3NOYW1lID0gJ0lCTUNoYXQtc2Vjb25kYXJ5LWNvbG9ycyc7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xuXG52YXIgbnMgPSAnSUJNQ2hhdC1pc2xvY2F0aW9uYXBpJztcbnZhciBjaG9vc2VMb2NhdGlvblR5cGVzID0gW107XG5cbnZhciBjaG9vc2VMb2NhdGlvblR5cGVMYXlvdXQgPSB7XG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHN1YnNjcmliZSgnbGF5b3V0OmNob29zZS1sb2NhdGlvbi10eXBlJywgZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0dmFyIGNob29zZUxvY2F0aW9uVHlwZSA9IG5ldyBDaG9vc2VMb2NhdGlvblR5cGUoZGF0YSk7XG5cdFx0XHRjaG9vc2VMb2NhdGlvblR5cGVzW2RhdGEudXVpZF0gPSBjaG9vc2VMb2NhdGlvblR5cGU7XG5cdFx0fSk7XG5cdH1cbn07XG5cbnZhciB2YWx1ZXMgPSB7XG5cdHBvc3RhbGNvZGU6ICd6aXBjb2RlJyxcblx0Z2VvbG9jYXRpb246ICdsYXRsb25nJ1xufTtcblxudmFyIHRlbXBsYXRlcyA9IHtcblx0YmFzZTogcmVxdWlyZSgnLi90ZW1wbGF0ZXMvYmFzZS5odG1sJylcbn07XG5cbmZ1bmN0aW9uIENob29zZUxvY2F0aW9uVHlwZShkYXRhKSB7XG5cdHRoaXMuaW5pdChkYXRhKTtcbn1cblxuQ2hvb3NlTG9jYXRpb25UeXBlLnByb3RvdHlwZSA9IHtcblx0aW5pdDogZnVuY3Rpb24oZGF0YSkge1xuXHRcdHZhciB0ZXh0ID0gdGVtcGxhdGVzLmJhc2U7XG5cdFx0dGhpcy5kYXRhID0gZGF0YS5kYXRhO1xuXHRcdHRoaXMudXVpZCA9IGRhdGEudXVpZDtcblx0XHRpZiAoJ25hdmlnYXRvcicgaW4gd2luZG93ICYmICdnZW9sb2NhdGlvbicgaW4gbmF2aWdhdG9yKSB7XG5cdFx0XHR0aGlzLmV2ZW50TGlzdGVuZXJzID0gW107XG5cdFx0XHR0aGlzLnBhcmVudEVsZW1lbnQgPSBkYXRhLmVsZW1lbnQ7XG5cdFx0XHR0aGlzLmxheW91dEVsZW1lbnQgPSBkYXRhLmxheW91dEVsZW1lbnQ7XG5cdFx0XHR0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHR0ZXh0ID0gdXRpbHMucmVwbGFjZUFsbCh0ZXh0LCAnJHtuc30nLCBucyk7XG5cdFx0XHR0ZXh0ID0gdXRpbHMucmVwbGFjZUFsbCh0ZXh0LCAnJHt2YWx1ZXMuZ2VvbG9jYXRpb259JywgdmFsdWVzLmdlb2xvY2F0aW9uKTtcblx0XHRcdHRleHQgPSB1dGlscy5yZXBsYWNlQWxsKHRleHQsICcke3ZhbHVlcy5wb3N0YWxjb2RlfScsIHZhbHVlcy5wb3N0YWxjb2RlKTtcblx0XHRcdHRoaXMuZWwuaW5uZXJIVE1MID0gdGV4dDtcblx0XHRcdHRoaXMubGF5b3V0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcblx0XHRcdHRoaXMuYnV0dG9ucyA9IHRoaXMubGF5b3V0RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5idXR0b25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHRoaXMuYnV0dG9uc1tpXS5kYXRhc2V0LnV1aWQgPSB0aGlzLnV1aWQ7XG5cdFx0XHRcdHRoaXMuYnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spO1xuXHRcdFx0XHR0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2godGhpcy5idXR0b25zW2ldKTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmV2ZW50TGlzdGVuZXJzLmxlbmd0aCA+IDApXG5cdFx0XHRcdHRoaXMuc3Vic2NyaWJlU2VuZCA9IHN1YnNjcmliZSgnc2VuZCcsIHRoaXMucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMuYmluZCh0aGlzKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0XHRcdHRleHQ6IHZhbHVlcy5wb3N0YWxjb2RlLFxuXHRcdFx0XHRzaWxlbnQ6IHRydWVcblx0XHRcdH0pO1xuXHRcdH1cblx0fSxcblx0aGFuZGxlQ2xpY2s6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBkYXRhID0ge1xuXHRcdFx0c2lsZW50OiB0cnVlLFxuXHRcdFx0dGV4dDogbnVsbFxuXHRcdH07XG5cdFx0ZGF0YS50ZXh0ID0gdGhpcy5kYXRhc2V0LmlucHV0O1xuXHRcdHRoaXMuY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzc05hbWUpO1xuXHRcdHRoaXMuY2xhc3NMaXN0LnJlbW92ZShpbmFjdGl2ZUNsYXNzTmFtZSk7XG5cdFx0cHVibGlzaCgnc2VuZCcsIGRhdGEpO1xuXHRcdHB1Ymxpc2goJ2ZvY3VzLWlucHV0Jyk7XG5cdH0sXG5cdHJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzOiBmdW5jdGlvbigpIHtcblx0XHRpZiAodGhpcy5ldmVudExpc3RlbmVycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRMaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dGhpcy5ldmVudExpc3RlbmVyc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spO1xuXHRcdFx0XHR0aGlzLmV2ZW50TGlzdGVuZXJzW2ldLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcblx0XHR9XG5cdFx0dGhpcy5zdWJzY3JpYmVTZW5kLnJlbW92ZSgpO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNob29zZUxvY2F0aW9uVHlwZUxheW91dDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9jaG9vc2UtbG9jYXRpb24tdHlwZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDU1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyoqXFxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxcbipcXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcXFwiTGljZW5zZVxcXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcXG4qXFxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcXG4qXFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXFxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcXFwiQVMgSVNcXFwiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3NcXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcXG4qIHRoZSBMaWNlbnNlLlxcbiovXFxuXFxuLklCTUNoYXQtaXNsb2NhdGlvbmFwaS1jb250YWluZXIge1xcblxcdHRleHQtYWxpZ246Y2VudGVyO1xcbn1cXG5cXG4uSUJNQ2hhdC1pc2xvY2F0aW9uYXBpLWNvbnRhaW5lciBidXR0b24ge1xcblxcdG1hcmdpbjogMWVtIGF1dG8gMCBhdXRvO1xcblxcdG1pbi13aWR0aDoyMDBweDtcXG5cXHRtYXgtd2lkdGg6MjQwcHg7XFxuXFx0d2lkdGg6NzUlO1xcbn1cXG5cXG4uSUJNQ2hhdC1pc2xvY2F0aW9uYXBpLWNvbnRhaW5lciBkaXY6bGFzdC1jaGlsZCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jhdy1sb2FkZXIhLi9zcmMvbGF5b3V0cy9jaG9vc2UtbG9jYXRpb24tdHlwZS9zdHlsZXMuY3NzXG4gKiogbW9kdWxlIGlkID0gNTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCIke25zfS1jb250YWluZXJcXFwiPlxcblxcdDxkaXY+PGJ1dHRvbiBjbGFzcz1cXFwiSUJNQ2hhdC1zZWNvbmRhcnktY29sb3JzXFxcIiBkYXRhLWlucHV0PVxcXCIke3ZhbHVlcy5nZW9sb2NhdGlvbn1cXFwiPlVzZSBNeSBDdXJyZW50IExvY2F0aW9uPC9idXR0b24+PC9kaXY+XFxuXFx0PGRpdj48YnV0dG9uIGNsYXNzPVxcXCJJQk1DaGF0LXNlY29uZGFyeS1jb2xvcnNcXFwiIGRhdGEtaW5wdXQ9XFxcIiR7dmFsdWVzLnBvc3RhbGNvZGV9XFxcIj5BIFppcCBDb2RlPC9idXR0b24+PC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvY2hvb3NlLWxvY2F0aW9uLXR5cGUvdGVtcGxhdGVzL2Jhc2UuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDU4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnJlcXVpcmUoJy4vc3R5bGVzLmNzcycpO1xuXG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG52YXIgc3Vic2NyaWJlID0gZXZlbnRzLnN1YnNjcmliZTtcbnZhciBwdWJsaXNoID0gZXZlbnRzLnB1Ymxpc2g7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xudmFyIG5zID0gJ0lCTUNoYXQtY2hvb3NlJztcbnZhciBhY3RpdmVDbGFzc05hbWUgPSAnSUJNQ2hhdC1hY2NlbnQtY29sb3JzJztcbnZhciBpbmFjdGl2ZUNsYXNzTmFtZSA9ICdJQk1DaGF0LXNlY29uZGFyeS1jb2xvcnMnO1xudmFyIHdpZGdldHMgPSBbXTtcbnZhciB0ZW1wbGF0ZXMgPSB7XG5cdGJ1dHRvbjogcmVxdWlyZSgnLi90ZW1wbGF0ZXMvYnV0dG9uLmh0bWwnKVxufTtcblxudmFyIGNob29zZUxheW91dCA9IHtcblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0c3Vic2NyaWJlKCdsYXlvdXQ6Y2hvb3NlJywgZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0dmFyIHdpZGdldCA9IG5ldyBDaG9vc2UoZGF0YSk7XG5cdFx0XHR3aWRnZXRzW2RhdGEudXVpZF0gPSB3aWRnZXQ7XG5cdFx0fSk7XG5cdFx0c3Vic2NyaWJlKCdsYXlvdXQ6Y29uZmlybScsIGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdHZhciB3aWRnZXQgPSBuZXcgQ2hvb3NlKGRhdGEpO1xuXHRcdFx0d2lkZ2V0c1tkYXRhLnV1aWRdID0gd2lkZ2V0O1xuXHRcdH0pO1xuXHR9XG59O1xuXG5mdW5jdGlvbiBDaG9vc2UoZGF0YSkge1xuXHR0aGlzLmluaXQoZGF0YSk7XG59XG5cbkNob29zZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0dGhpcy5hbGxvd011bHRpcGxlID0gKGRhdGEubWVzc2FnZS5pbnB1dHZhbGlkYXRpb24uc29tZU9mICE9PSB1bmRlZmluZWQpO1xuXHR0aGlzLnZhbHVlcyA9IFtdO1xuXHR0aGlzLmRhdGEgPSAodGhpcy5hbGxvd011bHRpcGxlKSA/IGRhdGEubWVzc2FnZS5pbnB1dHZhbGlkYXRpb24uc29tZU9mIDogZGF0YS5tZXNzYWdlLmlucHV0dmFsaWRhdGlvbi5vbmVPZjtcblx0dGhpcy51dWlkID0gZGF0YS51dWlkO1xuXHR0aGlzLnBhcmVudEVsZW1lbnQgPSBkYXRhLmVsZW1lbnQ7XG5cdHRoaXMubGF5b3V0RWxlbWVudCA9IGRhdGEubGF5b3V0RWxlbWVudDtcblx0dGhpcy5tc2dFbGVtZW50ID0gZGF0YS5tc2dFbGVtZW50O1xuXHR0aGlzLmRyYXdCdXR0b25zKCk7XG5cdHRoaXMuc3Vic2NyaWJlU2VuZCA9IHN1YnNjcmliZSgnc2VuZCcsIHRoaXMucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMuYmluZCh0aGlzKSk7XG59O1xuXG5DaG9vc2UucHJvdG90eXBlLmV2ZW50TGlzdGVuZXJzID0gW107XG5cbkNob29zZS5wcm90b3R5cGUuZHJhd0J1dHRvbnMgPSBmdW5jdGlvbigpIHtcblx0dmFyIHRtcGwgPSB0ZW1wbGF0ZXMuYnV0dG9uO1xuXHR0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHRoaXMuZWwuY2xhc3NMaXN0LmFkZChucyArICctY29udGFpbmVyJyk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdmFsID0gdGhpcy5kYXRhW2ldO1xuXHRcdHZhciBidXR0b25Ib2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCh0aGlzLmRhdGEubGVuZ3RoID09PSAyKSA/ICdzcGFuJyA6ICdkaXYnKTtcblx0XHRidXR0b25Ib2xkZXIuY2xhc3NMaXN0LmFkZChucyArICctb3B0aW9uJyk7XG5cdFx0dmFyIHBhcnNlZCA9IHV0aWxzLnJlcGxhY2VBbGwodG1wbCwgJyR7dGV4dH0nLCB2YWwpO1xuXHRcdHZhciBidXR0b247XG5cdFx0YnV0dG9uSG9sZGVyLmlubmVySFRNTCA9IHBhcnNlZDtcblx0XHR0aGlzLmVsLmFwcGVuZENoaWxkKGJ1dHRvbkhvbGRlcik7XG5cdFx0YnV0dG9uID0gYnV0dG9uSG9sZGVyLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuXHRcdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXVpZCcsIHRoaXMudXVpZCk7XG5cdFx0YnV0dG9uLmNsYXNzTGlzdC5hZGQoaW5hY3RpdmVDbGFzc05hbWUpO1xuXHRcdHRoaXMuYWRkTGlzdGVuZXIoYnV0dG9uKTtcblx0fVxuXG5cdGlmICh0aGlzLmFsbG93TXVsdGlwbGUpIHtcblx0XHR2YXIgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dmFyIHN1Ym1pdEJ0biA9IHV0aWxzLnJlcGxhY2VBbGwodG1wbCwgJyR7dGV4dH0nLCAnU3VibWl0Jyk7XG5cdFx0c3VibWl0LmNsYXNzTmFtZSA9IG5zICsgJy1zdWJtaXQnO1xuXHRcdHN1Ym1pdC5pbm5lckhUTUwgPSBzdWJtaXRCdG47XG5cdFx0dGhpcy5zdWJtaXRCdXR0b24gPSBzdWJtaXQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG5cdFx0dGhpcy5zdWJtaXRCdXR0b24uY2xhc3NMaXN0ID0gYWN0aXZlQ2xhc3NOYW1lO1xuXHRcdHRoaXMuc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcblx0XHR0aGlzLmVsLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cdFx0dGhpcy5hZGRTdWJtaXRMaXN0ZW5lcih0aGlzLnN1Ym1pdEJ1dHRvbik7XG5cdH1cblxuXHR0aGlzLmxheW91dEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG59O1xuXG5DaG9vc2UucHJvdG90eXBlLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24oKSB7XG5cdHZhciBkYXRhID0ge1xuXHRcdHNpbGVudDogdHJ1ZSxcblx0XHR0ZXh0OiBudWxsXG5cdH07XG5cdGRhdGEudGV4dCA9IHRoaXMuZGF0YXNldC5pbnB1dDtcblx0dGhpcy5jbGFzc05hbWUgPSBhY3RpdmVDbGFzc05hbWUgKyAnIElCTUNoYXQtYWNjZW50LWNvbG9ycyc7XG5cdHB1Ymxpc2goJ3NlbmQnLCBkYXRhKTtcbn07XG5cbkNob29zZS5wcm90b3R5cGUuaGFuZGxlTXVsdGlDbGljayA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgYnV0dG9ucztcblx0dmFyIGluc3RhbmNlID0gd2lkZ2V0c1t0aGlzLmRhdGFzZXQudXVpZF07XG5cdGlmICh1dGlscy5oYXNDbGFzcyh0aGlzLCBhY3RpdmVDbGFzc05hbWUpKSB7XG5cdFx0dGhpcy5jbGFzc0xpc3QuYWRkKGluYWN0aXZlQ2xhc3NOYW1lKTtcblx0XHR0aGlzLmNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xhc3NOYW1lKTtcblx0fSBlbHNlIHtcblx0XHR0aGlzLmNsYXNzTGlzdC5hZGQoYWN0aXZlQ2xhc3NOYW1lKTtcblx0XHR0aGlzLmNsYXNzTGlzdC5yZW1vdmUoaW5hY3RpdmVDbGFzc05hbWUpO1xuXHR9XG5cdGJ1dHRvbnMgPSBpbnN0YW5jZS5lbC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIG5zICsgJy1vcHRpb24gLicgKyBhY3RpdmVDbGFzc05hbWUpO1xuXHRpZiAoYnV0dG9ucy5sZW5ndGggPiAwKVxuXHRcdGluc3RhbmNlLnN1Ym1pdEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cdGVsc2Vcblx0XHRpbnN0YW5jZS5zdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xufTtcblxuQ2hvb3NlLnByb3RvdHlwZS5oYW5kbGVTdWJtaXQgPSBmdW5jdGlvbigpIHtcblx0dmFyIGJ1dHRvbnMgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgYWN0aXZlQ2xhc3NOYW1lKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSsrKVxuXHRcdHRoaXMudmFsdWVzLnB1c2goYnV0dG9uc1tpXS5kYXRhc2V0LmlucHV0KTtcblx0cHVibGlzaCgnc2VuZCcsIHtcblx0XHRzaWxlbnQ6IHRydWUsXG5cdFx0dGV4dDogdGhpcy52YWx1ZXMudG9TdHJpbmcoKVxuXHR9KTtcbn07XG5cbkNob29zZS5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbihlbCkge1xuXHRpZiAodGhpcy5hbGxvd011bHRpcGxlKVxuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVNdWx0aUNsaWNrKTtcblx0ZWxzZVxuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljayk7XG5cdHRoaXMuZXZlbnRMaXN0ZW5lcnMucHVzaChlbCk7XG59O1xuXG5DaG9vc2UucHJvdG90eXBlLmFkZFN1Ym1pdExpc3RlbmVyID0gZnVuY3Rpb24oZWwpIHtcblx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpKTtcblx0dGhpcy5ldmVudExpc3RlbmVycy5wdXNoKGVsKTtcbn07XG5cbkNob29zZS5wcm90b3R5cGUucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcblx0aWYgKHRoaXMuZXZlbnRMaXN0ZW5lcnMubGVuZ3RoID4gMCkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ldmVudExpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dGhpcy5ldmVudExpc3RlbmVyc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spO1xuXHRcdFx0dGhpcy5ldmVudExpc3RlbmVyc1tpXS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdFx0fVxuXHRcdHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcblx0XHR0aGlzLnN1YnNjcmliZVNlbmQucmVtb3ZlKCk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY2hvb3NlTGF5b3V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL2Nob29zZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyoqXFxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxcbipcXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcXFwiTGljZW5zZVxcXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcXG4qXFxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcXG4qXFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXFxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcXFwiQVMgSVNcXFwiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3NcXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcXG4qIHRoZSBMaWNlbnNlLlxcbiovXFxuXFxuLklCTUNoYXQtY2hvb3NlLWNvbnRhaW5lciB7XFxuXFx0dGV4dC1hbGlnbjpjZW50ZXI7XFxuXFx0cGFkZGluZzoxZW07XFxufVxcblxcbi5JQk1DaGF0LWNob29zZS1jb250YWluZXIgc3BhbiB7XFxuXFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XFxuXFx0bWFyZ2luOiAxZW0gMWVtIDAgMWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1jaG9vc2UtY29udGFpbmVyIGRpdiB7XFxuXFx0bWFyZ2luOiAxZW0gYXV0byAwIGF1dG87XFxufVxcblxcbi5JQk1DaGF0LWNob29zZS1jb250YWluZXIgYnV0dG9uIHtcXG5cXHRtaW4td2lkdGg6MjAwcHg7XFxuXFx0bWF4LXdpZHRoOjI0MHB4O1xcbn1cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jhdy1sb2FkZXIhLi9zcmMvbGF5b3V0cy9jaG9vc2Uvc3R5bGVzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGJ1dHRvbiBjbGFzcz1cXFwiSUJNQ2hhdC1zZWNvbmRhcnktY29sb3JzXFxcIiBkYXRhLWlucHV0PVxcXCIke3RleHR9XFxcIj4ke3RleHR9PC9idXR0b24+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvY2hvb3NlL3RlbXBsYXRlcy9idXR0b24uaHRtbFxuICoqIG1vZHVsZSBpZCA9IDYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnJlcXVpcmUoJy4vc3R5bGVzLmNzcycpO1xuXG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG52YXIgcHJvZmlsZSA9IHJlcXVpcmUoJy4uLy4uL3Byb2ZpbGUnKTtcbnZhciBzdWJzY3JpYmUgPSBldmVudHMuc3Vic2NyaWJlO1xudmFyIHB1Ymxpc2ggPSBldmVudHMucHVibGlzaDtcbnZhciBhY3RpdmVDbGFzc05hbWUgPSAnSUJNQ2hhdC1hY2NlbnQtY29sb3JzJztcbnZhciBpbmFjdGl2ZUNsYXNzTmFtZSA9ICdJQk1DaGF0LXNlY29uZGFyeS1jb2xvcnMnO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMnKTtcbnZhciBucyA9ICdJQk1DaGF0LWZvcm0nO1xudmFyIHdpZGdldHMgPSBbXTtcbnZhciB0ZW1wbGF0ZXMgPSB7XG5cdGJhc2U6IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2Jhc2UuaHRtbCcpLFxuXHRmaWVsZDogcmVxdWlyZSgnLi90ZW1wbGF0ZXMvZmllbGQuaHRtbCcpXG59O1xuXG52YXIgZm9ybUxheW91dCA9IHtcblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0c3Vic2NyaWJlKCdsYXlvdXQ6Zm9ybScsIGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdHZhciB3aWRnZXQgPSBuZXcgRm9ybShkYXRhKTtcblx0XHRcdHdpZGdldHNbZGF0YS51dWlkXSA9IHdpZGdldDtcblx0XHR9KTtcblx0fVxufTtcblxuZnVuY3Rpb24gRm9ybShkYXRhKSB7XG5cdHRoaXMuaW5pdChkYXRhKTtcbn1cblxuRm9ybS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0dGhpcy5kYXRhID0gZGF0YS5tZXNzYWdlLnN0b3JlIHx8IFtdO1xuXHR0aGlzLmFjdGlvbiA9IGRhdGEubWVzc2FnZS5hY3Rpb24gfHwgJyc7XG5cdHRoaXMudXVpZCA9IGRhdGEudXVpZDtcblx0dGhpcy5wYXJlbnRFbGVtZW50ID0gZGF0YS5lbGVtZW50O1xuXHR0aGlzLmxheW91dEVsZW1lbnQgPSBkYXRhLmxheW91dEVsZW1lbnQ7XG5cdHRoaXMubXNnRWxlbWVudCA9IGRhdGEubXNnRWxlbWVudDtcblx0dGhpcy5kcmF3Rm9ybSgpO1xuXHR0aGlzLnN1YnNjcmliZVNlbmQgPSBzdWJzY3JpYmUoJ3NlbmQnLCB0aGlzLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzLmJpbmQodGhpcykpO1xufTtcblxuRm9ybS5wcm90b3R5cGUuZHJhd0Zvcm0gPSBmdW5jdGlvbigpIHtcblx0dmFyIGJhc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dmFyIGZvcm1GaWVsZHM7XG5cdGJhc2UuaW5uZXJIVE1MID0gdGVtcGxhdGVzLmJhc2U7XG5cdGZvcm1GaWVsZHMgPSBiYXNlLnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LWZvcm0tZmllbGRzJyk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dmFyIGZpZWxkVHh0ID0gdGVtcGxhdGVzLmZpZWxkO1xuXHRcdGZpZWxkVHh0ID0gdXRpbHMucmVwbGFjZUFsbChmaWVsZFR4dCwgJyR7bGFiZWx9JywgdGhpcy5kYXRhW2ldLmxhYmVsIHx8ICcnKTtcblx0XHRmaWVsZFR4dCA9IHV0aWxzLnJlcGxhY2VBbGwoZmllbGRUeHQsICcke25hbWV9JywgdGhpcy5kYXRhW2ldLm5hbWUpO1xuXHRcdGZpZWxkVHh0ID0gdXRpbHMucmVwbGFjZUFsbChmaWVsZFR4dCwgJyR7dmFsdWV9JywgJycpOyAvL2ZvciBmdXR1cmUgdXNlXG5cdFx0ZmllbGQuaW5uZXJIVE1MID0gZmllbGRUeHQ7XG5cdFx0ZmllbGQuY2xhc3NOYW1lID0gbnMgKyAnLWZpZWxkcy1yb3cnO1xuXHRcdGZvcm1GaWVsZHMuYXBwZW5kQ2hpbGQoZmllbGQpO1xuXHR9XG5cdHRoaXMuZmllbGRzID0gZm9ybUZpZWxkcy5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuXHR0aGlzLnN1Ym1pdEJ1dHRvbiA9IGJhc2UucXVlcnlTZWxlY3RvcignLicgKyBucyArICctc3VibWl0Jyk7XG5cdHRoaXMuY2FuY2VsQnV0dG9uID0gYmFzZS5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1jYW5jZWwnKTtcblx0dGhpcy5zdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzc05hbWUpO1xuXHR0aGlzLmNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKGluYWN0aXZlQ2xhc3NOYW1lKTtcblx0dGhpcy5sYXlvdXRFbGVtZW50LmFwcGVuZENoaWxkKGJhc2UpO1xuXHR0aGlzLmZpZWxkc1swXS5mb2N1cygpO1xuXHR0aGlzLmFkZExpc3RlbmVycygpO1xufTtcblxuRm9ybS5wcm90b3R5cGUuaGFuZGxlU3VibWl0ID0gZnVuY3Rpb24oKSB7XG5cdC8qdmFyIGFjdGlvbiA9ICdhY3Rpb246JyArIHRoaXMuYWN0aW9uLm5hbWU7XG5cdGlmIChoYXNTdWJzY3JpcHRpb24oYWN0aW9uKSkge1xuXHRcdHZhciBkYXRhID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZpZWxkcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGZpZWxkID0gdGhpcy5maWVsZHNbaV07XG5cdFx0XHRkYXRhW2ZpZWxkLmdldEF0dHJpYnV0ZSgnbmFtZScpXSA9IGZpZWxkLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcblx0XHR9XG5cdFx0cHVibGlzaChhY3Rpb24sIHtcblx0XHRcdGFjdGlvbkRhdGE6IHRoaXMuYWN0aW9uLmRhdGEgfHwge30sXG5cdFx0XHRmb3JtRGF0YTogZGF0YVxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBlcnJvck1zZyA9ICdUaGlzIGNoYXQgaXMgY29uZmlndXJlZCBpbmNvcnJlY3RseS4gTm90aGluZyBpcyBzdWJzY3JpYmVkIHRvICcgKyBhY3Rpb247XG5cdFx0cHVibGlzaCgnZXJyb3InLCBlcnJvck1zZyk7XG5cdFx0cHVibGlzaCgnc2VuZCcsIHtcblx0XHRcdHNpbGVudDogdHJ1ZSxcblx0XHRcdHRleHQ6ICdmYWlsdXJlJ1xuXHRcdH0pO1xuXHR9Ki9cblx0aWYgKHRoaXMudmFsaWRhdGVGaWVsZHMoKSA9PT0gdHJ1ZSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5maWVsZHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBmaWVsZCA9IHRoaXMuZmllbGRzW2ldO1xuXHRcdFx0cHJvZmlsZS5zZXQoZmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJyksIGZpZWxkLnZhbHVlKTtcblx0XHR9XG5cdFx0cHVibGlzaCgnc2VuZCcsIHtcblx0XHRcdHNpbGVudDogdHJ1ZSxcblx0XHRcdHRleHQ6ICdzdWNjZXNzJ1xuXHRcdH0pO1xuXHR9XG59O1xuXG5Gb3JtLnByb3RvdHlwZS52YWxpZGF0ZUZpZWxkcyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgdmFsaWQgPSB0cnVlO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdGlmICh0aGlzLmRhdGFbaV0ucmVxdWlyZWQgJiYgdGhpcy5kYXRhW2ldLnJlcXVpcmVkICE9ICdmYWxzZScpIHtcblx0XHRcdGlmICghdGhpcy5maWVsZHNbaV0udmFsdWUgfHwgdGhpcy5maWVsZHNbaV0udmFsdWUubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHRoaXMuc2hvd0Vycm9yKHRoaXMuZmllbGRzW2ldLmdldEF0dHJpYnV0ZSgnbmFtZScpLCAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4nKTtcblx0XHRcdFx0dmFsaWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHZhbGlkO1xufTtcblxuRm9ybS5wcm90b3R5cGUuc2hvd0Vycm9yID0gZnVuY3Rpb24obmFtZSwgZXJyb3IpIHtcblx0dmFyIGVsID0gdGhpcy5sYXlvdXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5hbWU9XCInICsgbmFtZSArICdcIl0nKTtcblx0ZWwudGV4dENvbnRlbnQgPSBlcnJvcjtcblx0ZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59O1xuXG5Gb3JtLnByb3RvdHlwZS5oaWRlRXJyb3JzID0gZnVuY3Rpb24oKSB7XG5cdHZhciBlbHMgPSB0aGlzLmxheW91dEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmFtZV0nKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpKyspIHtcblx0XHRlbHNbaV0udGV4dENvbnRlbnQgPSAnJztcblx0XHRlbHNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0fVxufTtcblxuRm9ybS5wcm90b3R5cGUuaGFuZGxlQ2FuY2VsID0gZnVuY3Rpb24oKSB7XG5cdHB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0c2lsZW50OiB0cnVlLFxuXHRcdHRleHQ6ICdjYW5jZWwnXG5cdH0pO1xufTtcblxuRm9ybS5wcm90b3R5cGUuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDYW5jZWwuYmluZCh0aGlzKSk7XG5cdHRoaXMuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKSk7XG59O1xuXG5Gb3JtLnByb3RvdHlwZS5yZW1vdmVBbGxFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLmNhbmNlbEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2FuY2VsLmJpbmQodGhpcykpO1xuXHR0aGlzLmNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdHRoaXMuc3VibWl0QnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKSk7XG5cdHRoaXMuc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcblx0Zm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmZpZWxkcy5sZW5ndGg7IGorKylcblx0XHR0aGlzLmZpZWxkc1tqXS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdHRoaXMuc3Vic2NyaWJlU2VuZC5yZW1vdmUoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZm9ybUxheW91dDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9mb3JtL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCIvKipcXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXFxuKlxcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFxcXCJMaWNlbnNlXFxcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxcbipcXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxcbipcXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFxcXCJBUyBJU1xcXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xcbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxcbiogdGhlIExpY2Vuc2UuXFxuKi9cXG5cXG4uSUJNQ2hhdC1mb3JtLWNvbnRhaW5lciB7XFxuXFx0dGV4dC1hbGlnbjpjZW50ZXI7XFxuXFx0cGFkZGluZzoxZW07XFxufVxcblxcbi5JQk1DaGF0LWZvcm0tZmllbGRzIHtcXG5cXHRtYXJnaW46YXV0bztcXG5cXHR0ZXh0LWFsaWduOmxlZnQ7XFxuXFx0bWF4LXdpZHRoOjM2MHB4O1xcblxcdHdpZHRoOjEwMCU7XFxufVxcblxcbi5JQk1DaGF0LWZvcm0tZmllbGRzLXJvdyB7XFxuXFx0cGFkZGluZy1ib3R0b206MS41ZW07XFxufVxcblxcbi5JQk1DaGF0LWZvcm0tZmllbGRzLXJvdyBpbnB1dCB7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5JQk1DaGF0LWZvcm0tYnV0dG9ucyB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWF4LXdpZHRoOiAzNjBweDtcXG5cXHRoZWlnaHQ6IDIuNWVtO1xcblxcdHRleHQtYWxpZ246Y2VudGVyO1xcblxcdG1hcmdpbjphdXRvO1xcbn1cXG5cXG4uSUJNQ2hhdC1mb3JtLWJ1dHRvbnMgYnV0dG9uIHtcXG5cXHRsaW5lLWhlaWdodDogMi41ZW07XFxuXFx0d2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4uSUJNQ2hhdC1mb3JtLWNhbmNlbCB7XFxuXFx0ZmxvYXQ6bGVmdDtcXG59XFxuLklCTUNoYXQtZm9ybS1zdWJtaXQge1xcblxcdGZsb2F0OnJpZ2h0O1xcbn1cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jhdy1sb2FkZXIhLi9zcmMvbGF5b3V0cy9mb3JtL3N0eWxlcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgQm90U0RLID0gcmVxdWlyZSgnQHdhdHNvbi12aXJ0dWFsLWFnZW50L2NsaWVudC1zZGsvbGliL3dlYicpO1xudmFyIHByb2ZpbGUgPSBCb3RTREsucHJvZmlsZTtcblxubW9kdWxlLmV4cG9ydHMgPSBwcm9maWxlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wcm9maWxlLmpzXG4gKiogbW9kdWxlIGlkID0gNjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJJQk1DaGF0LWZvcm0tY29udGFpbmVyXFxcIj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCJJQk1DaGF0LWZvcm0tZmllbGRzXFxcIj48L2Rpdj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCJJQk1DaGF0LWZvcm0tYnV0dG9uc1xcXCI+XFxuXFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiSUJNQ2hhdC1mb3JtLWNhbmNlbFxcXCI+Q2FuY2VsPC9idXR0b24+XFxuXFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiSUJNQ2hhdC1mb3JtLXN1Ym1pdFxcXCI+U3VibWl0PC9idXR0b24+XFxuXFx0PC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvZm9ybS90ZW1wbGF0ZXMvYmFzZS5odG1sXG4gKiogbW9kdWxlIGlkID0gNjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8bGFiZWw+JHtsYWJlbH08L2xhYmVsPlxcbjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiSUJNQ2hhdC1pbnB1dC1jb2xvcnNcXFwiIG5hbWU9XFxcIiR7bmFtZX1cXFwiIHZhbHVlPVxcXCIke3ZhbHVlfVxcXCIgLz5cXG48ZGl2IGNsYXNzPVxcXCJJQk1DaGF0LWlucHV0LWVycm9yXFxcIiBkYXRhLW5hbWU9XFxcIiR7bmFtZX1cXFwiPjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL2Zvcm0vdGVtcGxhdGVzL2ZpZWxkLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA2OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG5yZXF1aXJlKCcuL3N0eWxlcy5jc3MnKTtcblxudmFyIGV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2V2ZW50cycpO1xudmFyIHN0YXRlID0gcmVxdWlyZSgnLi4vLi4vc3RhdGUnKTtcbnZhciBzdWJzY3JpYmUgPSBldmVudHMuc3Vic2NyaWJlO1xudmFyIHB1Ymxpc2ggPSBldmVudHMucHVibGlzaDtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzJyk7XG52YXIgdmFsaWRhdGlvbiA9IHJlcXVpcmUoJy4vdmFsaWRhdGlvbicpO1xudmFyIG5zID0gJ0lCTUNoYXQtY3JlZGl0Y2FyZCc7XG52YXIgd2lkZ2V0cyA9IFtdO1xudmFyIHRlbXBsYXRlcyA9IHtcblx0YmFzZTogcmVxdWlyZSgnLi90ZW1wbGF0ZXMvYmFzZS5odG1sJylcbn07XG5cbnZhciBjcmVkaXRDYXJkTGF5b3V0ID0ge1xuXHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHRzdWJzY3JpYmUoJ2xheW91dDpjYy12YWxpZGF0b3InLCBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHR2YXIgd2lkZ2V0ID0gbmV3IENyZWRpdENhcmQoZGF0YSk7XG5cdFx0XHR3aWRnZXRzW2RhdGEudXVpZF0gPSB3aWRnZXQ7XG5cdFx0fSk7XG5cdH1cbn07XG5cbmZ1bmN0aW9uIENyZWRpdENhcmQoZGF0YSkge1xuXHR0aGlzLmluaXQoZGF0YSk7XG59XG5cbkNyZWRpdENhcmQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihkYXRhKSB7XG5cdHRoaXMuZGF0YSA9IGRhdGEubWVzc2FnZS5sYXlvdXQuZGF0YSB8fCB7fTtcblx0dGhpcy5kYXRhLmFjY2VwdGVkQ2FyZHMgPSB0aGlzLmRhdGEudHlwZXM7XG5cdHRoaXMudXVpZCA9IGRhdGEudXVpZDtcblx0dGhpcy5wYXJlbnRFbGVtZW50ID0gZGF0YS5lbGVtZW50O1xuXHR0aGlzLmxheW91dEVsZW1lbnQgPSBkYXRhLmxheW91dEVsZW1lbnQ7XG5cdHRoaXMubXNnRWxlbWVudCA9IGRhdGEubXNnRWxlbWVudDtcblx0dGhpcy5kcmF3Rm9ybSgpO1xufTtcblxuQ3JlZGl0Q2FyZC5wcm90b3R5cGUuZHJhd0Zvcm0gPSBmdW5jdGlvbigpIHtcblx0dmFyIHRleHQgPSB0ZW1wbGF0ZXMuYmFzZTtcblx0dGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR0ZXh0ID0gdXRpbHMucmVwbGFjZUFsbCh0ZXh0LCAnJHtuc30nLCBucyk7XG5cdHRoaXMuZWwuaW5uZXJIVE1MID0gdGV4dDtcblx0dGhpcy5sYXlvdXRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuXHR0aGlzLmNhbmNlbEJ1dHRvbiA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctY2FuY2VsJyk7XG5cdHRoaXMuY29udGludWVCdXR0b24gPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWNvbnRpbnVlJyk7XG5cdHRoaXMuZm9ybUVsZW1lbnRzID0ge307XG5cdHRoaXMuZmllbGRzID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZmllbGRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGZpZWxkID0gdGhpcy5maWVsZHNbaV07XG5cdFx0dmFyIG5hbWUgPSBmaWVsZC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcblx0XHR0aGlzLmZvcm1FbGVtZW50c1tuYW1lXSA9IGZpZWxkO1xuXHR9XG5cdHRoaXMuYWRkTGlzdGVuZXJzKCk7XG59O1xuXG5DcmVkaXRDYXJkLnByb3RvdHlwZS5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5jYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNhbmNlbC5iaW5kKHRoaXMpKTtcblx0dGhpcy5jb250aW51ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ29udGludWUuYmluZCh0aGlzKSk7XG59O1xuXG5DcmVkaXRDYXJkLnByb3RvdHlwZS5hZGRFcnJvciA9IGZ1bmN0aW9uKG5hbWUsIG1zZykge1xuXHR2YXIgZXJyb3JFbGVtZW50ID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS12YWxpZGF0aW9uLWZvcj1cIicgKyBuYW1lICsgJ1wiXScpO1xuXHRlcnJvckVsZW1lbnQuZGF0YXNldC52YWxpZCA9IGZhbHNlO1xuXHRlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBtc2c7XG59O1xuXG5DcmVkaXRDYXJkLnByb3RvdHlwZS5yZW1vdmVFcnJvciA9IGZ1bmN0aW9uKG5hbWUpIHtcblx0dmFyIGVycm9yRWxlbWVudCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignW2RhdGEtdmFsaWRhdGlvbi1mb3I9XCInICsgbmFtZSArICdcIl0nKTtcblx0ZXJyb3JFbGVtZW50LmRhdGFzZXQudmFsaWQgPSB0cnVlO1xuXHRlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbn07XG5cbkNyZWRpdENhcmQucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24oKSB7XG5cdHZhciB2YWxpZCA9IHRydWU7XG5cdHRoaXMuZm9ybURhdGEgPSB7fTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZpZWxkcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBmaWVsZCA9IHRoaXMuZmllbGRzW2ldO1xuXHRcdHZhciBuYW1lID0gZmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG5cdFx0dGhpcy5mb3JtRGF0YVtuYW1lXSA9IGZpZWxkLnZhbHVlO1xuXHR9XG5cblx0aWYgKHRoaXMuZm9ybURhdGEuY2NfZnVsbF9uYW1lLmxlbmd0aCA9PT0gMCkge1xuXHRcdHRoaXMuYWRkRXJyb3IoJ2NjX2Z1bGxfbmFtZScsICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLicpO1xuXHRcdHZhbGlkID0gZmFsc2U7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5yZW1vdmVFcnJvcignY2NfZnVsbF9uYW1lJyk7XG5cdH1cblxuXHR2YXIgY2MgPSB2YWxpZGF0aW9uLnZhbGlkYXRlQ2FyZCh0aGlzLmRhdGEuYWNjZXB0ZWRDYXJkcywgdGhpcy5mb3JtRGF0YS5jY19udW1iZXIpO1xuXHRpZiAoIWNjLnZhbGlkKSB7XG5cdFx0dGhpcy5hZGRFcnJvcignY2NfbnVtYmVyJywgY2MubWVzc2FnZSk7XG5cdFx0dmFsaWQgPSBmYWxzZTtcblx0fSBlbHNlIHtcblx0XHR0aGlzLnJlbW92ZUVycm9yKCdjY19mdWxsX25hbWUnKTtcblx0fVxuXG5cdHZhciBleHAgPSB2YWxpZGF0aW9uLnZhbGlkYXRlRXhwKHRoaXMuZm9ybURhdGEuY2NfZXhwX2RhdGVfbW9udGgsIHRoaXMuZm9ybURhdGEuY2NfZXhwX2RhdGVfeWVhcik7XG5cdGlmICghZXhwLnZhbGlkKSB7XG5cdFx0dGhpcy5hZGRFcnJvcignY2NfZXhwX2RhdGUnLCBleHAubWVzc2FnZSk7XG5cdFx0dmFsaWQgPSBmYWxzZTtcblx0fSBlbHNlIHtcblx0XHR0aGlzLnJlbW92ZUVycm9yKCdjY19leHBfZGF0ZScpO1xuXHR9XG5cblx0dmFyIGN2diA9IHZhbGlkYXRpb24udmFsaWRhdGVDVlYodGhpcy5mb3JtRGF0YS5jY19jb2RlKTtcblx0aWYgKCFjdnYudmFsaWQpIHtcblx0XHR0aGlzLmFkZEVycm9yKCdjY19jb2RlJywgY3Z2Lm1lc3NhZ2UpO1xuXHRcdHZhbGlkID0gZmFsc2U7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5yZW1vdmVFcnJvcignY2NfY29kZScpO1xuXHR9XG5cdHJldHVybiB2YWxpZDtcbn07XG5cbkNyZWRpdENhcmQucHJvdG90eXBlLmhhbmRsZUNvbnRpbnVlID0gZnVuY3Rpb24oKSB7XG5cdGlmICh0aGlzLnZhbGlkYXRlKCkpIHtcblx0XHR0aGlzLmZvcm1EYXRhLmNjX2V4cF9kYXRlID0gdGhpcy5mb3JtRGF0YS5jY19leHBfZGF0ZV9tb250aCArICcvJyArIHRoaXMuZm9ybURhdGEuY2NfZXhwX2RhdGVfeWVhcjtcblx0XHRzdGF0ZS5zZXRQcm9maWxlKHtcblx0XHRcdHNlbGVjdGVkQ2FyZDogdGhpcy5mb3JtRGF0YVxuXHRcdH0pO1xuXHRcdHB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0XHRzaWxlbnQ6IHRydWUsXG5cdFx0XHR0ZXh0OiAnc3VjY2Vzcydcblx0XHR9KTtcblx0fVxufTtcblxuQ3JlZGl0Q2FyZC5wcm90b3R5cGUuaGFuZGxlQ2FuY2VsID0gZnVuY3Rpb24oKSB7XG5cdHB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0c2lsZW50OiB0cnVlLFxuXHRcdHRleHQ6ICdjYW5jZWwnXG5cdH0pO1xufTtcblxuQ3JlZGl0Q2FyZC5wcm90b3R5cGUucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5jYW5jZWxCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNhbmNlbC5iaW5kKHRoaXMpKTtcblx0dGhpcy5jYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuXHR0aGlzLnN1Ym1pdEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcykpO1xuXHR0aGlzLnN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5maWVsZHMubGVuZ3RoOyBqKyspXG5cdFx0dGhpcy5maWVsZHNbal0uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuXG5cdHRoaXMuc3Vic2NyaWJlU2VuZC5yZW1vdmUoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlZGl0Q2FyZExheW91dDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9jYy12YWxpZGF0b3IvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA2OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qKlxcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cXG4qXFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXFxcIkxpY2Vuc2VcXFwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcXG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XFxuKlxcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXFxuKlxcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXFxcIkFTIElTXFxcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXFxuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXFxuKiB0aGUgTGljZW5zZS5cXG4qL1xcblxcbi5JQk1DaGF0LWNyZWRpdGNhcmQtY29udGFpbmVyIHtcXG5cXHRwYWRkaW5nOiAxZW07XFxuXFx0dGV4dC1hbGlnbjpjZW50ZXI7XFxufVxcblxcbi5JQk1DaGF0LWNyZWRpdGNhcmQtcm93cyB7XFxuXFx0bWFyZ2luOmF1dG87XFxuXFx0dGV4dC1hbGlnbjpsZWZ0O1xcblxcdG1heC13aWR0aDozNjBweDtcXG5cXHR3aWR0aDoxMDAlO1xcbn1cXG5cXG4uSUJNQ2hhdC1jcmVkaXRjYXJkLXJvdyB7XFxuXFx0dGV4dC1hbGlnbjpsZWZ0O1xcblxcdHBhZGRpbmctYm90dG9tOjFlbTtcXG59XFxuXFxuLklCTUNoYXQtY3JlZGl0Y2FyZC1yb3cgaW5wdXQge1xcblxcdHdpZHRoOjEwMCU7XFxufVxcblxcbmRpdltkYXRhLXZhbGlkYXRpb24tZm9yXSB7XFxuXFx0cGFkZGluZy10b3A6MC41ZW07XFxufVxcblxcbi5JQk1DaGF0LWNyZWRpdGNhcmQtY29sIHtcXG5cXHRkaXNwbGF5OmlubGluZS1ibG9jaztcXG59XFxuXFxuLklCTUNoYXQtY3JlZGl0Y2FyZC1jb2w6bGFzdC1jaGlsZCB7XFxuXFx0cGFkZGluZy1sZWZ0OjFlbTtcXG59XFxuXFxuLklCTUNoYXQtY3JlZGl0Y2FyZC1jb2wgaW5wdXR7XFxuXFx0dGV4dC1hbGlnbjpjZW50ZXI7XFxuXFx0d2lkdGg6NDBweDtcXG59XFxuXFxuLklCTUNoYXQtY3JlZGl0Y2FyZC1jb2w6bGFzdC1jaGlsZCBpbnB1dCB7XFxuXFx0d2lkdGg6NjBweDtcXG59XFxuXFxuLklCTUNoYXQtY3JlZGl0Y2FyZC1idXR0b25zIHtcXG5cXHRoZWlnaHQ6Mi41ZW07XFxufVxcblxcbi5JQk1DaGF0LWNyZWRpdGNhcmQtYnV0dG9ucyBidXR0b24ge1xcblxcdHdpZHRoOjkwcHg7XFxuXFx0ZmxvYXQ6bGVmdDtcXG59XFxuXFxuLklCTUNoYXQtY3JlZGl0Y2FyZC1idXR0b25zIGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG5cXHRmbG9hdDpyaWdodDtcXG59XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYXctbG9hZGVyIS4vc3JjL2xheW91dHMvY2MtdmFsaWRhdG9yL3N0eWxlcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG4vL2h0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1BheW1lbnRfY2FyZF9udW1iZXJcblxudmFyIHN0YXRlID0ge1xuXHRhY2NlcHRlZENhcmRzOiBbXSxcblx0Y2FyZE51bWJlcjogJycsXG5cdGNhcmRUeXBlOiAnJ1xufTtcblxudmFyIG1lc3NhZ2VzID0ge1xuXHRyZXF1aXJlZDogJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQuJyxcblx0YWNjZXB0ZWRDYXJkOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgdGV4dCA9ICdXZSBhY2NlcHQgJztcblx0XHRmb3IgKGkgPSAwOyBpIDwgc3RhdGUuYWNjZXB0ZWRDYXJkcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGkgPiAwKVxuXHRcdFx0XHR0ZXh0ICs9ICcsICc7XG5cdFx0XHRpZiAoaSA9PT0gKHN0YXRlLmFjY2VwdGVkQ2FyZHMubGVuZ3RoIC0gMSkpXG5cdFx0XHRcdHRleHQgKz0gJyBhbmQgJztcblx0XHRcdHRleHQgKz0gY2FyZERhdGFbc3RhdGUuYWNjZXB0ZWRDYXJkc1tpXV0uaHVtYW47XG5cdFx0fVxuXHRcdHRleHQgKz0gJy4gUGxlYXNlIHVzZSBhIHZhbGlkIGNhcmQuJztcblx0XHRyZXR1cm4gdGV4dDtcblx0fSxcblx0aW52YWxpZDogJ1lvdXIgY3JlZGl0IGNhcmQgbnVtYmVyIGlzIGludmFsaWQuJyxcblx0aW52YWxpZEV4cGlyYXRpb246ICdZb3VyIGNyZWRpdCBjYXJkIGV4cGlyYXRpb24gZGF0ZSBpcyBpbnZhbGlkLicsXG5cdGludmFsaWRDdnY6ICdZb3VyIENWViBpcyBpbnZhbGlkLidcbn07XG5cbnZhciBjYXJkRGF0YSA9IHtcblx0XCJ2aXNhXCI6IHtcblx0XHRodW1hbjogXCJWaXNhXCIsXG5cdFx0cHJlZml4ZXM6IFs0XSxcblx0XHRsZW5ndGhzOiBbMTMsIDE2LCAxOV1cblx0fSxcblx0XCJtYXN0ZXJjYXJkXCI6IHtcblx0XHRodW1hbjogXCJNYXN0ZXJDYXJkXCIsXG5cdFx0cHJlZml4ZXM6IFs1MSwgNTIsIDUzLCA1NCwgNTVdLFxuXHRcdGxlbmd0aHM6IFsxNl1cblx0fSxcblx0XCJhbWV4XCI6IHtcblx0XHRodW1hbjogXCJBbWVyaWNhbiBFeHByZXNzXCIsXG5cdFx0cHJlZml4ZXM6IFszNCwgMzddLFxuXHRcdGxlbmd0aHM6IFsxNV1cblx0fSxcblx0XCJkaXNjb3ZlclwiOiB7XG5cdFx0aHVtYW46IFwiRGlzY292ZXJcIixcblx0XHRwcmVmaXhlczogWzYwMTEsIDY1XSxcblx0XHRsZW5ndGhzOiBbMTYsIDE5XVxuXHR9XG59O1xuXG52YXIgaTtcbi8vTWFzdGVyQ2FyZCBhZGRpbmcgdGhlc2UgbnVtYmVycyBpbiAyMDE3XG5mb3IgKGkgPSAyMjIxOyBpIDw9IDI3MjA7IGkrKylcblx0Y2FyZERhdGEubWFzdGVyY2FyZC5wcmVmaXhlcy5wdXNoKGkpO1xuXG5mb3IgKGkgPSA2MjIxMjY7IGkgPD0gNjIyOTI1OyBpKyspXG5cdGNhcmREYXRhLmRpc2NvdmVyLnByZWZpeGVzLnB1c2goaSk7XG5cbmZvciAoaSA9IDY0NDsgaSA8PSA2NDk7IGkrKylcblx0Y2FyZERhdGEuZGlzY292ZXIucHJlZml4ZXMucHVzaChpKTtcblxuZnVuY3Rpb24gX2RldGVjdENhcmQoKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3RhdGUuYWNjZXB0ZWRDYXJkcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBkYXRhID0gY2FyZERhdGFbc3RhdGUuYWNjZXB0ZWRDYXJkc1tpXV07XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkYXRhLnByZWZpeGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHR2YXIgeCA9IGRhdGEucHJlZml4ZXNbal0udG9TdHJpbmcoKTtcblx0XHRcdGlmIChzdGF0ZS5jYXJkTnVtYmVyLnN1YnN0cmluZygwLCB4Lmxlbmd0aCkgPT09IHgpIHtcblx0XHRcdFx0c3RhdGUuY2FyZFR5cGUgPSBzdGF0ZS5hY2NlcHRlZENhcmRzW2ldO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBfY2hlY2tLdWhuKCkge1xuXHR2YXIgY2hlY2tzdW0gPSAwOyAvLyBydW5uaW5nIGNoZWNrc3VtIHRvdGFsXG5cdHZhciBqID0gMTsgLy8gdGFrZXMgdmFsdWUgb2YgMSBvciAyXG5cblx0Ly8gUHJvY2VzcyBlYWNoIGRpZ2l0IG9uZSBieSBvbmUgc3RhcnRpbmcgYXQgdGhlIHJpZ2h0XG5cdHZhciBjYWxjO1xuXHRmb3IgKHZhciBpID0gc3RhdGUuY2FyZE51bWJlci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdC8vIEV4dHJhY3QgdGhlIG5leHQgZGlnaXQgYW5kIG11bHRpcGx5IGJ5IDEgb3IgMiBvbiBhbHRlcm5hdGl2ZSBkaWdpdHMuXG5cdFx0Y2FsYyA9IE51bWJlcihzdGF0ZS5jYXJkTnVtYmVyLmNoYXJBdChpKSkgKiBqO1xuXG5cdFx0Ly8gSWYgdGhlIHJlc3VsdCBpcyBpbiB0d28gZGlnaXRzIGFkZCAxIHRvIHRoZSBjaGVja3N1bSB0b3RhbFxuXHRcdGlmIChjYWxjID4gOSkge1xuXHRcdFx0Y2hlY2tzdW0gPSBjaGVja3N1bSArIDE7XG5cdFx0XHRjYWxjID0gY2FsYyAtIDEwO1xuXHRcdH1cblxuXHRcdC8vIEFkZCB0aGUgdW5pdHMgZWxlbWVudCB0byB0aGUgY2hlY2tzdW0gdG90YWxcblx0XHRjaGVja3N1bSA9IGNoZWNrc3VtICsgY2FsYztcblxuXHRcdC8vIFN3aXRjaCB0aGUgdmFsdWUgb2YgalxuXHRcdGogPSAoaiA9PSAxKSA/IDIgOiAxO1xuXHR9XG5cblx0Ly8gQWxsIGRvbmUgLSBpZiBjaGVja3N1bSBpcyBkaXZpc2libGUgYnkgMTAsIGl0IGlzIGEgdmFsaWQgbW9kdWx1cyAxMC5cblx0Ly8gSWYgbm90LCByZXBvcnQgYW4gZXJyb3IuXG5cdHJldHVybiAoY2hlY2tzdW0gJSAxMCAhPSAwKSA/IGZhbHNlIDogdHJ1ZTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVDYXJkKGFjY2VwdGVkQ2FyZHMsIGNhcmROdW1iZXIpIHtcblx0c3RhdGUuYWNjZXB0ZWRDYXJkcyA9IGFjY2VwdGVkQ2FyZHM7XG5cdHN0YXRlLmNhcmROdW1iZXIgPSBjYXJkTnVtYmVyLnJlcGxhY2UoL1xcRC9nLCcnKTsgLy9zdHJpcCBleHRyYSBjaGFyYWN0ZXJzXG5cdGlmIChjYXJkTnVtYmVyLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRcIm1lc3NhZ2VcIjogbWVzc2FnZXMucmVxdWlyZWQsXG5cdFx0XHRcInZhbGlkXCI6IGZhbHNlXG5cdFx0fTtcblx0fVxuXHRpZiAoc3RhdGUuY2FyZE51bWJlci5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0XCJtZXNzYWdlXCI6IG1lc3NhZ2VzLnJlcXVpcmVkLFxuXHRcdFx0XCJ2YWxpZFwiOiBmYWxzZVxuXHRcdH07XG5cdH1cblx0aWYgKF9kZXRlY3RDYXJkKCkpIHtcblx0XHRpZiAoc3RhdGUuYWNjZXB0ZWRDYXJkcy5pbmRleE9mKHN0YXRlLmNhcmRUeXBlKSA9PT0gLTEpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFwibWVzc2FnZVwiOiBtZXNzYWdlcy5hY2NlcHRlZENhcmQoKSxcblx0XHRcdFx0XCJ2YWxpZFwiOiBmYWxzZVxuXHRcdFx0fTtcblx0XHR9XG5cdFx0aWYgKGNhcmREYXRhW3N0YXRlLmNhcmRUeXBlXS5sZW5ndGhzLmluZGV4T2Yoc3RhdGUuY2FyZE51bWJlci5sZW5ndGgpID09PSAtMSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XCJtZXNzYWdlXCI6IG1lc3NhZ2VzLmludmFsaWQsXG5cdFx0XHRcdFwidmFsaWRcIjogZmFsc2Vcblx0XHRcdH07XG5cdFx0fVxuXHRcdGlmIChfY2hlY2tLdWhuKCkgPT09IGZhbHNlKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcIm1lc3NhZ2VcIjogbWVzc2FnZXMuaW52YWxpZCxcblx0XHRcdFx0XCJ2YWxpZFwiOiBmYWxzZVxuXHRcdFx0fTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwibWVzc2FnZVwiOiBtZXNzYWdlcy5pbnZhbGlkLFxuXHRcdFx0XCJ2YWxpZFwiOiBmYWxzZVxuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdFwidmFsaWRcIjogdHJ1ZVxuXHR9O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cCh1c2VyTSwgdXNlclkpIHtcblx0dmFyIGQgPSBuZXcgRGF0ZSgpO1xuXHR2YXIgbW9udGggPSBkLmdldE1vbnRoKCk7XG5cdHZhciB5ZWFyID0gZC5nZXRGdWxsWWVhcigpO1xuXG5cdGlmICh1c2VyTS5sZW5ndGggPT09IDAgfHwgdXNlclkubGVuZ3RoID09PSAwIHx8IHVzZXJNLnJlcGxhY2UoL1xcRC9nLCcnKS5sZW5ndGggPT09IDAgfHwgdXNlclkucmVwbGFjZSgvXFxEL2csJycpLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRcIm1lc3NhZ2VcIjogbWVzc2FnZXMucmVxdWlyZWQsXG5cdFx0XHRcInZhbGlkXCI6IGZhbHNlXG5cdFx0fTtcblx0fVxuXG5cdHVzZXJNID0gcGFyc2VJbnQodXNlck0sIDEwKTtcblx0dXNlclkgPSBwYXJzZUludCgnMjAnICsgJycgKyB1c2VyWSwgMTApO1xuXHRpZiAodXNlck0gPiAxMiB8fCB1c2VyTSA8IDEgfHwgKHVzZXJZIDwgeWVhciB8fCAodXNlclkgPT09IHllYXIgJiYgdXNlck0gPCBtb250aCkpKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwibWVzc2FnZVwiOiBtZXNzYWdlcy5pbnZhbGlkRXhwaXJhdGlvbixcblx0XHRcdFwidmFsaWRcIjogZmFsc2Vcblx0XHR9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0XCJ2YWxpZFwiOiB0cnVlXG5cdH07XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ1ZWKENWVikge1xuXHRpZiAoQ1ZWLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRcIm1lc3NhZ2VcIjogbWVzc2FnZXMucmVxdWlyZWQsXG5cdFx0XHRcInZhbGlkXCI6IGZhbHNlXG5cdFx0fTtcblx0fVxuXHRpZiAoIWlzTmFOKENWVikgJiYgKENWViA+IDk5OTkgfHwgQ1ZWIDwgMTAwKSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRcIm1lc3NhZ2VcIjogbWVzc2FnZXMuaW52YWxpZEN2dixcblx0XHRcdFwidmFsaWRcIjogZmFsc2Vcblx0XHR9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0XCJ2YWxpZFwiOiB0cnVlXG5cdH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHR2YWxpZGF0ZUNhcmQ6IHZhbGlkYXRlQ2FyZCxcblx0dmFsaWRhdGVFeHA6IHZhbGlkYXRlRXhwLFxuXHR2YWxpZGF0ZUNWVjogdmFsaWRhdGVDVlYsXG5cdGNhcmREYXRhOiBjYXJkRGF0YVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9jYy12YWxpZGF0b3IvdmFsaWRhdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDcyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiJHtuc30tY29udGFpbmVyXFxcIj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1yb3dzXFxcIj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1yb3dcXFwiPlxcblxcdFxcdFxcdDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiSUJNQ2hhdC1pbnB1dC1jb2xvcnNcXFwiIG5hbWU9XFxcImNjX2Z1bGxfbmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIk5hbWUgb24gQ2FyZFxcXCIgLz5cXG5cXHRcXHRcXHQ8ZGl2IGRhdGEtdmFsaWRhdGlvbi1mb3I9XFxcImNjX2Z1bGxfbmFtZVxcXCIgZGF0YS12YWxpZD1cXFwidHJ1ZVxcXCI+PC9kaXY+XFxuXFx0XFx0PC9kaXY+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tcm93XFxcIj5cXG5cXHRcXHRcXHQ8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcIklCTUNoYXQtaW5wdXQtY29sb3JzXFxcIiBuYW1lPVxcXCJjY19udW1iZXJcXFwiIHBsYWNlaG9sZGVyPVxcXCJDcmVkaXQgQ2FyZCBOdW1iZXJcXFwiIC8+XFxuXFx0XFx0XFx0PGRpdiBkYXRhLXZhbGlkYXRpb24tZm9yPVxcXCJjY19udW1iZXJcXFwiIGRhdGEtdmFsaWQ9XFxcInRydWVcXFwiPjwvZGl2PlxcblxcdFxcdDwvZGl2PlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LXJvd1xcXCI+XFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tY29sXFxcIj5cXG5cXHRcXHRcXHRcXHQ8aW5wdXQgY2xhc3M9XFxcIiR7bnN9LWRhdGUgSUJNQ2hhdC1pbnB1dC1jb2xvcnNcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImNjX2V4cF9kYXRlX21vbnRoXFxcIiBwbGFjZWhvbGRlcj1cXFwiTU1cXFwiIC8+XFxuXFx0XFx0XFx0XFx0L1xcblxcdFxcdFxcdFxcdDxpbnB1dCBjbGFzcz1cXFwiJHtuc30tZGF0ZSBJQk1DaGF0LWlucHV0LWNvbG9yc1xcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiY2NfZXhwX2RhdGVfeWVhclxcXCIgcGxhY2Vob2xkZXI9XFxcIllZXFxcIiAvPlxcblxcdFxcdFxcdFxcdDxkaXYgZGF0YS12YWxpZGF0aW9uLWZvcj1cXFwiY2NfZXhwX2RhdGVcXFwiIGRhdGEtdmFsaWQ9XFxcInRydWVcXFwiPjwvZGl2PlxcblxcdFxcdFxcdDwvZGl2PlxcblxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWNvbFxcXCI+XFxuXFx0XFx0XFx0XFx0PGlucHV0IGNsYXNzPVxcXCIke25zfS1jdnYgSUJNQ2hhdC1pbnB1dC1jb2xvcnNcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImNjX2NvZGVcXFwiIHBsYWNlaG9sZGVyPVxcXCJDVlZcXFwiIC8+XFxuXFx0XFx0XFx0XFx0PGRpdiBkYXRhLXZhbGlkYXRpb24tZm9yPVxcXCJjY19jb2RlXFxcIiBkYXRhLXZhbGlkPVxcXCJ0cnVlXFxcIj48L2Rpdj5cXG5cXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHQ8L2Rpdj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1yb3cgJHtuc30tYnV0dG9uc1xcXCI+XFxuXFx0XFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiJHtuc30tY2FuY2VsIElCTUNoYXQtc2Vjb25kYXJ5LWNvbG9yc1xcXCI+Q2FuY2VsPC9idXR0b24+XFxuXFx0XFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiJHtuc30tY29udGludWUgSUJNQ2hhdC1pbnB1dC1jb2xvcnNcXFwiPkNvbnRpbnVlPC9idXR0b24+XFxuXFx0XFx0PC9kaXY+XFxuXFx0PC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvY2MtdmFsaWRhdG9yL3RlbXBsYXRlcy9iYXNlLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA3M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyohXG4gKiBAb3ZlcnZpZXcgZXM2LXByb21pc2UgLSBhIHRpbnkgaW1wbGVtZW50YXRpb24gb2YgUHJvbWlzZXMvQSsuXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNCBZZWh1ZGEgS2F0eiwgVG9tIERhbGUsIFN0ZWZhbiBQZW5uZXIgYW5kIGNvbnRyaWJ1dG9ycyAoQ29udmVyc2lvbiB0byBFUzYgQVBJIGJ5IEpha2UgQXJjaGliYWxkKVxuICogQGxpY2Vuc2UgICBMaWNlbnNlZCB1bmRlciBNSVQgbGljZW5zZVxuICogICAgICAgICAgICBTZWUgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2pha2VhcmNoaWJhbGQvZXM2LXByb21pc2UvbWFzdGVyL0xJQ0VOU0VcbiAqIEB2ZXJzaW9uICAgMy4yLjFcbiAqL1xuXG4oZnVuY3Rpb24oKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHV0aWxzJCRvYmplY3RPckZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIHggPT09ICdvYmplY3QnICYmIHggIT09IG51bGwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNGdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbic7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc01heWJlVGhlbmFibGUoeCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiB4ICE9PSBudWxsO1xuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkdXRpbHMkJF9pc0FycmF5O1xuICAgIGlmICghQXJyYXkuaXNBcnJheSkge1xuICAgICAgbGliJGVzNiRwcm9taXNlJHV0aWxzJCRfaXNBcnJheSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkdXRpbHMkJF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbiAgICB9XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc0FycmF5ID0gbGliJGVzNiRwcm9taXNlJHV0aWxzJCRfaXNBcnJheTtcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGxlbiA9IDA7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR2ZXJ0eE5leHQ7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRjdXN0b21TY2hlZHVsZXJGbjtcblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXNhcCA9IGZ1bmN0aW9uIGFzYXAoY2FsbGJhY2ssIGFyZykge1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHF1ZXVlW2xpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW5dID0gY2FsbGJhY2s7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkcXVldWVbbGliJGVzNiRwcm9taXNlJGFzYXAkJGxlbiArIDFdID0gYXJnO1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGxlbiArPSAyO1xuICAgICAgaWYgKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW4gPT09IDIpIHtcbiAgICAgICAgLy8gSWYgbGVuIGlzIDIsIHRoYXQgbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIHNjaGVkdWxlIGFuIGFzeW5jIGZsdXNoLlxuICAgICAgICAvLyBJZiBhZGRpdGlvbmFsIGNhbGxiYWNrcyBhcmUgcXVldWVkIGJlZm9yZSB0aGUgcXVldWUgaXMgZmx1c2hlZCwgdGhleVxuICAgICAgICAvLyB3aWxsIGJlIHByb2Nlc3NlZCBieSB0aGlzIGZsdXNoIHRoYXQgd2UgYXJlIHNjaGVkdWxpbmcuXG4gICAgICAgIGlmIChsaWIkZXM2JHByb21pc2UkYXNhcCQkY3VzdG9tU2NoZWR1bGVyRm4pIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkY3VzdG9tU2NoZWR1bGVyRm4obGliJGVzNiRwcm9taXNlJGFzYXAkJGZsdXNoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJHNldFNjaGVkdWxlcihzY2hlZHVsZUZuKSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkY3VzdG9tU2NoZWR1bGVyRm4gPSBzY2hlZHVsZUZuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzZXRBc2FwKGFzYXBGbikge1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAgPSBhc2FwRm47XG4gICAgfVxuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRicm93c2VyV2luZG93ID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSA/IHdpbmRvdyA6IHVuZGVmaW5lZDtcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGJyb3dzZXJHbG9iYWwgPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkYnJvd3NlcldpbmRvdyB8fCB7fTtcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJGJyb3dzZXJHbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBsaWIkZXM2JHByb21pc2UkYXNhcCQkYnJvd3Nlckdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkaXNOb2RlID0gdHlwZW9mIHNlbGYgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiB7fS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXSc7XG5cbiAgICAvLyB0ZXN0IGZvciB3ZWIgd29ya2VyIGJ1dCBub3QgaW4gSUUxMFxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkaXNXb3JrZXIgPSB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICB0eXBlb2YgaW1wb3J0U2NyaXB0cyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCAhPT0gJ3VuZGVmaW5lZCc7XG5cbiAgICAvLyBub2RlXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZU5leHRUaWNrKCkge1xuICAgICAgLy8gbm9kZSB2ZXJzaW9uIDAuMTAueCBkaXNwbGF5cyBhIGRlcHJlY2F0aW9uIHdhcm5pbmcgd2hlbiBuZXh0VGljayBpcyB1c2VkIHJlY3Vyc2l2ZWx5XG4gICAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2N1am9qcy93aGVuL2lzc3Vlcy80MTAgZm9yIGRldGFpbHNcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhsaWIkZXM2JHByb21pc2UkYXNhcCQkZmx1c2gpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyB2ZXJ0eFxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VWZXJ0eFRpbWVyKCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkdmVydHhOZXh0KGxpYiRlczYkcHJvbWlzZSRhc2FwJCRmbHVzaCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VNdXRhdGlvbk9ic2VydmVyKCkge1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgdmFyIG9ic2VydmVyID0gbmV3IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRCcm93c2VyTXV0YXRpb25PYnNlcnZlcihsaWIkZXM2JHByb21pc2UkYXNhcCQkZmx1c2gpO1xuICAgICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBub2RlLmRhdGEgPSAoaXRlcmF0aW9ucyA9ICsraXRlcmF0aW9ucyAlIDIpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyB3ZWIgd29ya2VyXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZU1lc3NhZ2VDaGFubmVsKCkge1xuICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJGZsdXNoO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSgwKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZVNldFRpbWVvdXQoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldFRpbWVvdXQobGliJGVzNiRwcm9taXNlJGFzYXAkJGZsdXNoLCAxKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZSA9IG5ldyBBcnJheSgxMDAwKTtcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkZmx1c2goKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW47IGkrPTIpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHF1ZXVlW2ldO1xuICAgICAgICB2YXIgYXJnID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHF1ZXVlW2krMV07XG5cbiAgICAgICAgY2FsbGJhY2soYXJnKTtcblxuICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkcXVldWVbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZVtpKzFdID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkbGVuID0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXR0ZW1wdFZlcnR4KCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHIgPSByZXF1aXJlO1xuICAgICAgICB2YXIgdmVydHggPSByKCd2ZXJ0eCcpO1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkdmVydHhOZXh0ID0gdmVydHgucnVuT25Mb29wIHx8IHZlcnR4LnJ1bk9uQ29udGV4dDtcbiAgICAgICAgcmV0dXJuIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VWZXJ0eFRpbWVyKCk7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VTZXRUaW1lb3V0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzY2hlZHVsZUZsdXNoO1xuICAgIC8vIERlY2lkZSB3aGF0IGFzeW5jIG1ldGhvZCB0byB1c2UgdG8gdHJpZ2dlcmluZyBwcm9jZXNzaW5nIG9mIHF1ZXVlZCBjYWxsYmFja3M6XG4gICAgaWYgKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRpc05vZGUpIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzY2hlZHVsZUZsdXNoID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZU5leHRUaWNrKCk7XG4gICAgfSBlbHNlIGlmIChsaWIkZXM2JHByb21pc2UkYXNhcCQkQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzY2hlZHVsZUZsdXNoID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZU11dGF0aW9uT2JzZXJ2ZXIoKTtcbiAgICB9IGVsc2UgaWYgKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRpc1dvcmtlcikge1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHNjaGVkdWxlRmx1c2ggPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlTWVzc2FnZUNoYW5uZWwoKTtcbiAgICB9IGVsc2UgaWYgKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRicm93c2VyV2luZG93ID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzY2hlZHVsZUZsdXNoID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJGF0dGVtcHRWZXJ0eCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VTZXRUaW1lb3V0KCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSR0aGVuJCR0aGVuKG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKSB7XG4gICAgICB2YXIgcGFyZW50ID0gdGhpcztcblxuICAgICAgdmFyIGNoaWxkID0gbmV3IHRoaXMuY29uc3RydWN0b3IobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbm9vcCk7XG5cbiAgICAgIGlmIChjaGlsZFtsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQUk9NSVNFX0lEXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG1ha2VQcm9taXNlKGNoaWxkKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXRlID0gcGFyZW50Ll9zdGF0ZTtcblxuICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50c1tzdGF0ZSAtIDFdO1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXNhcChmdW5jdGlvbigpe1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGludm9rZUNhbGxiYWNrKHN0YXRlLCBjaGlsZCwgY2FsbGJhY2ssIHBhcmVudC5fcmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRzdWJzY3JpYmUocGFyZW50LCBjaGlsZCwgb25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkdGhlbiQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSR0aGVuJCR0aGVuO1xuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlc29sdmUkJHJlc29sdmUob2JqZWN0KSB7XG4gICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcblxuICAgICAgaWYgKG9iamVjdCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QuY29uc3RydWN0b3IgPT09IENvbnN0cnVjdG9yKSB7XG4gICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3ApO1xuICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCBvYmplY3QpO1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZXNvbHZlJCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVzb2x2ZSQkcmVzb2x2ZTtcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUFJPTUlTRV9JRCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygxNik7XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRub29wKCkge31cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQRU5ESU5HICAgPSB2b2lkIDA7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEZVTEZJTExFRCA9IDE7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFJFSkVDVEVEICA9IDI7XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1IgPSBuZXcgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRXJyb3JPYmplY3QoKTtcblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHNlbGZGdWxmaWxsbWVudCgpIHtcbiAgICAgIHJldHVybiBuZXcgVHlwZUVycm9yKFwiWW91IGNhbm5vdCByZXNvbHZlIGEgcHJvbWlzZSB3aXRoIGl0c2VsZlwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRjYW5ub3RSZXR1cm5Pd24oKSB7XG4gICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcignQSBwcm9taXNlcyBjYWxsYmFjayBjYW5ub3QgcmV0dXJuIHRoYXQgc2FtZSBwcm9taXNlLicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGdldFRoZW4ocHJvbWlzZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbjtcbiAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1IuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgcmV0dXJuIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHRyeVRoZW4odGhlbiwgdmFsdWUsIGZ1bGZpbGxtZW50SGFuZGxlciwgcmVqZWN0aW9uSGFuZGxlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBmdWxmaWxsbWVudEhhbmRsZXIsIHJlamVjdGlvbkhhbmRsZXIpO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZUZvcmVpZ25UaGVuYWJsZShwcm9taXNlLCB0aGVuYWJsZSwgdGhlbikge1xuICAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhc2FwKGZ1bmN0aW9uKHByb21pc2UpIHtcbiAgICAgICAgdmFyIHNlYWxlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgZXJyb3IgPSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCR0cnlUaGVuKHRoZW4sIHRoZW5hYmxlLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgIGlmIChzZWFsZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgc2VhbGVkID0gdHJ1ZTtcbiAgICAgICAgICBpZiAodGhlbmFibGUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgICBpZiAoc2VhbGVkKSB7IHJldHVybjsgfVxuICAgICAgICAgIHNlYWxlZCA9IHRydWU7XG5cbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgICAgfSwgJ1NldHRsZTogJyArIChwcm9taXNlLl9sYWJlbCB8fCAnIHVua25vd24gcHJvbWlzZScpKTtcblxuICAgICAgICBpZiAoIXNlYWxlZCAmJiBlcnJvcikge1xuICAgICAgICAgIHNlYWxlZCA9IHRydWU7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSwgcHJvbWlzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaGFuZGxlT3duVGhlbmFibGUocHJvbWlzZSwgdGhlbmFibGUpIHtcbiAgICAgIGlmICh0aGVuYWJsZS5fc3RhdGUgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEZVTEZJTExFRCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHRoZW5hYmxlLl9yZXN1bHQpO1xuICAgICAgfSBlbHNlIGlmICh0aGVuYWJsZS5fc3RhdGUgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFJFSkVDVEVEKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCB0aGVuYWJsZS5fcmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHN1YnNjcmliZSh0aGVuYWJsZSwgdW5kZWZpbmVkLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaGFuZGxlTWF5YmVUaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlLCB0aGVuKSB7XG4gICAgICBpZiAobWF5YmVUaGVuYWJsZS5jb25zdHJ1Y3RvciA9PT0gcHJvbWlzZS5jb25zdHJ1Y3RvciAmJlxuICAgICAgICAgIHRoZW4gPT09IGxpYiRlczYkcHJvbWlzZSR0aGVuJCRkZWZhdWx0ICYmXG4gICAgICAgICAgY29uc3RydWN0b3IucmVzb2x2ZSA9PT0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVzb2x2ZSQkZGVmYXVsdCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRoYW5kbGVPd25UaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGVuID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUikge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUi5lcnJvcik7XG4gICAgICAgIH0gZWxzZSBpZiAodGhlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcbiAgICAgICAgfSBlbHNlIGlmIChsaWIkZXM2JHByb21pc2UkdXRpbHMkJGlzRnVuY3Rpb24odGhlbikpIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRoYW5kbGVGb3JlaWduVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSwgdGhlbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpIHtcbiAgICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkc2VsZkZ1bGZpbGxtZW50KCkpO1xuICAgICAgfSBlbHNlIGlmIChsaWIkZXM2JHByb21pc2UkdXRpbHMkJG9iamVjdE9yRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgdmFsdWUsIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGdldFRoZW4odmFsdWUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHB1Ymxpc2hSZWplY3Rpb24ocHJvbWlzZSkge1xuICAgICAgaWYgKHByb21pc2UuX29uZXJyb3IpIHtcbiAgICAgICAgcHJvbWlzZS5fb25lcnJvcihwcm9taXNlLl9yZXN1bHQpO1xuICAgICAgfVxuXG4gICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRwdWJsaXNoKHByb21pc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpIHtcbiAgICAgIGlmIChwcm9taXNlLl9zdGF0ZSAhPT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUEVORElORykgeyByZXR1cm47IH1cblxuICAgICAgcHJvbWlzZS5fcmVzdWx0ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zdGF0ZSA9IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEZVTEZJTExFRDtcblxuICAgICAgaWYgKHByb21pc2UuX3N1YnNjcmliZXJzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXNhcChsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRwdWJsaXNoLCBwcm9taXNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKSB7XG4gICAgICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBFTkRJTkcpIHsgcmV0dXJuOyB9XG4gICAgICBwcm9taXNlLl9zdGF0ZSA9IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFJFSkVDVEVEO1xuICAgICAgcHJvbWlzZS5fcmVzdWx0ID0gcmVhc29uO1xuXG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXNhcChsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRwdWJsaXNoUmVqZWN0aW9uLCBwcm9taXNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRzdWJzY3JpYmUocGFyZW50LCBjaGlsZCwgb25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pIHtcbiAgICAgIHZhciBzdWJzY3JpYmVycyA9IHBhcmVudC5fc3Vic2NyaWJlcnM7XG4gICAgICB2YXIgbGVuZ3RoID0gc3Vic2NyaWJlcnMubGVuZ3RoO1xuXG4gICAgICBwYXJlbnQuX29uZXJyb3IgPSBudWxsO1xuXG4gICAgICBzdWJzY3JpYmVyc1tsZW5ndGhdID0gY2hpbGQ7XG4gICAgICBzdWJzY3JpYmVyc1tsZW5ndGggKyBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRGVUxGSUxMRURdID0gb25GdWxmaWxsbWVudDtcbiAgICAgIHN1YnNjcmliZXJzW2xlbmd0aCArIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFJFSkVDVEVEXSAgPSBvblJlamVjdGlvbjtcblxuICAgICAgaWYgKGxlbmd0aCA9PT0gMCAmJiBwYXJlbnQuX3N0YXRlKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhc2FwKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHB1Ymxpc2gsIHBhcmVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcHVibGlzaChwcm9taXNlKSB7XG4gICAgICB2YXIgc3Vic2NyaWJlcnMgPSBwcm9taXNlLl9zdWJzY3JpYmVycztcbiAgICAgIHZhciBzZXR0bGVkID0gcHJvbWlzZS5fc3RhdGU7XG5cbiAgICAgIGlmIChzdWJzY3JpYmVycy5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XG5cbiAgICAgIHZhciBjaGlsZCwgY2FsbGJhY2ssIGRldGFpbCA9IHByb21pc2UuX3Jlc3VsdDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWJzY3JpYmVycy5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgICBjaGlsZCA9IHN1YnNjcmliZXJzW2ldO1xuICAgICAgICBjYWxsYmFjayA9IHN1YnNjcmliZXJzW2kgKyBzZXR0bGVkXTtcblxuICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRpbnZva2VDYWxsYmFjayhzZXR0bGVkLCBjaGlsZCwgY2FsbGJhY2ssIGRldGFpbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbGJhY2soZGV0YWlsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcm9taXNlLl9zdWJzY3JpYmVycy5sZW5ndGggPSAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEVycm9yT2JqZWN0KCkge1xuICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFRSWV9DQVRDSF9FUlJPUiA9IG5ldyBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRFcnJvck9iamVjdCgpO1xuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkdHJ5Q2F0Y2goY2FsbGJhY2ssIGRldGFpbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGRldGFpbCk7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkVFJZX0NBVENIX0VSUk9SLmVycm9yID0gZTtcbiAgICAgICAgcmV0dXJuIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFRSWV9DQVRDSF9FUlJPUjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRpbnZva2VDYWxsYmFjayhzZXR0bGVkLCBwcm9taXNlLCBjYWxsYmFjaywgZGV0YWlsKSB7XG4gICAgICB2YXIgaGFzQ2FsbGJhY2sgPSBsaWIkZXM2JHByb21pc2UkdXRpbHMkJGlzRnVuY3Rpb24oY2FsbGJhY2spLFxuICAgICAgICAgIHZhbHVlLCBlcnJvciwgc3VjY2VlZGVkLCBmYWlsZWQ7XG5cbiAgICAgIGlmIChoYXNDYWxsYmFjaykge1xuICAgICAgICB2YWx1ZSA9IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHRyeUNhdGNoKGNhbGxiYWNrLCBkZXRhaWwpO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkVFJZX0NBVENIX0VSUk9SKSB7XG4gICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcbiAgICAgICAgICBlcnJvciA9IHZhbHVlLmVycm9yO1xuICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdWNjZWVkZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGNhbm5vdFJldHVybk93bigpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBkZXRhaWw7XG4gICAgICAgIHN1Y2NlZWRlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9taXNlLl9zdGF0ZSAhPT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUEVORElORykge1xuICAgICAgICAvLyBub29wXG4gICAgICB9IGVsc2UgaWYgKGhhc0NhbGxiYWNrICYmIHN1Y2NlZWRlZCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoZmFpbGVkKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgICB9IGVsc2UgaWYgKHNldHRsZWQgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEZVTEZJTExFRCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoc2V0dGxlZCA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUkVKRUNURUQpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRpbml0aWFsaXplUHJvbWlzZShwcm9taXNlLCByZXNvbHZlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzb2x2ZXIoZnVuY3Rpb24gcmVzb2x2ZVByb21pc2UodmFsdWUpe1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICB9LCBmdW5jdGlvbiByZWplY3RQcm9taXNlKHJlYXNvbikge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGlkID0gMDtcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRuZXh0SWQoKSB7XG4gICAgICByZXR1cm4gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaWQrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRtYWtlUHJvbWlzZShwcm9taXNlKSB7XG4gICAgICBwcm9taXNlW2xpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBST01JU0VfSURdID0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaWQrKztcbiAgICAgIHByb21pc2UuX3N0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgcHJvbWlzZS5fcmVzdWx0ID0gdW5kZWZpbmVkO1xuICAgICAgcHJvbWlzZS5fc3Vic2NyaWJlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRhbGwkJGFsbChlbnRyaWVzKSB7XG4gICAgICByZXR1cm4gbmV3IGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRkZWZhdWx0KHRoaXMsIGVudHJpZXMpLnByb21pc2U7XG4gICAgfVxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRhbGwkJGRlZmF1bHQgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRhbGwkJGFsbDtcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyYWNlJCRyYWNlKGVudHJpZXMpIHtcbiAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuXG4gICAgICBpZiAoIWxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNBcnJheShlbnRyaWVzKSkge1xuICAgICAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGFuIGFycmF5IHRvIHJhY2UuJykpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29uc3RydWN0b3IoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgdmFyIGxlbmd0aCA9IGVudHJpZXMubGVuZ3RoO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIENvbnN0cnVjdG9yLnJlc29sdmUoZW50cmllc1tpXSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyYWNlJCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmFjZSQkcmFjZTtcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZWplY3QkJHJlamVjdChyZWFzb24pIHtcbiAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuICAgICAgdmFyIHByb21pc2UgPSBuZXcgQ29uc3RydWN0b3IobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbm9vcCk7XG4gICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVqZWN0JCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVqZWN0JCRyZWplY3Q7XG5cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRuZWVkc1Jlc29sdmVyKCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhIHJlc29sdmVyIGZ1bmN0aW9uIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgcHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRuZWVkc05ldygpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdQcm9taXNlJzogUGxlYXNlIHVzZSB0aGUgJ25ldycgb3BlcmF0b3IsIHRoaXMgb2JqZWN0IGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBjYWxsZWQgYXMgYSBmdW5jdGlvbi5cIik7XG4gICAgfVxuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2U7XG4gICAgLyoqXG4gICAgICBQcm9taXNlIG9iamVjdHMgcmVwcmVzZW50IHRoZSBldmVudHVhbCByZXN1bHQgb2YgYW4gYXN5bmNocm9ub3VzIG9wZXJhdGlvbi4gVGhlXG4gICAgICBwcmltYXJ5IHdheSBvZiBpbnRlcmFjdGluZyB3aXRoIGEgcHJvbWlzZSBpcyB0aHJvdWdoIGl0cyBgdGhlbmAgbWV0aG9kLCB3aGljaFxuICAgICAgcmVnaXN0ZXJzIGNhbGxiYWNrcyB0byByZWNlaXZlIGVpdGhlciBhIHByb21pc2UncyBldmVudHVhbCB2YWx1ZSBvciB0aGUgcmVhc29uXG4gICAgICB3aHkgdGhlIHByb21pc2UgY2Fubm90IGJlIGZ1bGZpbGxlZC5cblxuICAgICAgVGVybWlub2xvZ3lcbiAgICAgIC0tLS0tLS0tLS0tXG5cbiAgICAgIC0gYHByb21pc2VgIGlzIGFuIG9iamVjdCBvciBmdW5jdGlvbiB3aXRoIGEgYHRoZW5gIG1ldGhvZCB3aG9zZSBiZWhhdmlvciBjb25mb3JtcyB0byB0aGlzIHNwZWNpZmljYXRpb24uXG4gICAgICAtIGB0aGVuYWJsZWAgaXMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyBhIGB0aGVuYCBtZXRob2QuXG4gICAgICAtIGB2YWx1ZWAgaXMgYW55IGxlZ2FsIEphdmFTY3JpcHQgdmFsdWUgKGluY2x1ZGluZyB1bmRlZmluZWQsIGEgdGhlbmFibGUsIG9yIGEgcHJvbWlzZSkuXG4gICAgICAtIGBleGNlcHRpb25gIGlzIGEgdmFsdWUgdGhhdCBpcyB0aHJvd24gdXNpbmcgdGhlIHRocm93IHN0YXRlbWVudC5cbiAgICAgIC0gYHJlYXNvbmAgaXMgYSB2YWx1ZSB0aGF0IGluZGljYXRlcyB3aHkgYSBwcm9taXNlIHdhcyByZWplY3RlZC5cbiAgICAgIC0gYHNldHRsZWRgIHRoZSBmaW5hbCByZXN0aW5nIHN0YXRlIG9mIGEgcHJvbWlzZSwgZnVsZmlsbGVkIG9yIHJlamVjdGVkLlxuXG4gICAgICBBIHByb21pc2UgY2FuIGJlIGluIG9uZSBvZiB0aHJlZSBzdGF0ZXM6IHBlbmRpbmcsIGZ1bGZpbGxlZCwgb3IgcmVqZWN0ZWQuXG5cbiAgICAgIFByb21pc2VzIHRoYXQgYXJlIGZ1bGZpbGxlZCBoYXZlIGEgZnVsZmlsbG1lbnQgdmFsdWUgYW5kIGFyZSBpbiB0aGUgZnVsZmlsbGVkXG4gICAgICBzdGF0ZS4gIFByb21pc2VzIHRoYXQgYXJlIHJlamVjdGVkIGhhdmUgYSByZWplY3Rpb24gcmVhc29uIGFuZCBhcmUgaW4gdGhlXG4gICAgICByZWplY3RlZCBzdGF0ZS4gIEEgZnVsZmlsbG1lbnQgdmFsdWUgaXMgbmV2ZXIgYSB0aGVuYWJsZS5cblxuICAgICAgUHJvbWlzZXMgY2FuIGFsc28gYmUgc2FpZCB0byAqcmVzb2x2ZSogYSB2YWx1ZS4gIElmIHRoaXMgdmFsdWUgaXMgYWxzbyBhXG4gICAgICBwcm9taXNlLCB0aGVuIHRoZSBvcmlnaW5hbCBwcm9taXNlJ3Mgc2V0dGxlZCBzdGF0ZSB3aWxsIG1hdGNoIHRoZSB2YWx1ZSdzXG4gICAgICBzZXR0bGVkIHN0YXRlLiAgU28gYSBwcm9taXNlIHRoYXQgKnJlc29sdmVzKiBhIHByb21pc2UgdGhhdCByZWplY3RzIHdpbGxcbiAgICAgIGl0c2VsZiByZWplY3QsIGFuZCBhIHByb21pc2UgdGhhdCAqcmVzb2x2ZXMqIGEgcHJvbWlzZSB0aGF0IGZ1bGZpbGxzIHdpbGxcbiAgICAgIGl0c2VsZiBmdWxmaWxsLlxuXG5cbiAgICAgIEJhc2ljIFVzYWdlOlxuICAgICAgLS0tLS0tLS0tLS0tXG5cbiAgICAgIGBgYGpzXG4gICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAvLyBvbiBzdWNjZXNzXG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuXG4gICAgICAgIC8vIG9uIGZhaWx1cmVcbiAgICAgICAgcmVqZWN0KHJlYXNvbik7XG4gICAgICB9KTtcblxuICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIC8vIG9uIGZ1bGZpbGxtZW50XG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgLy8gb24gcmVqZWN0aW9uXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBBZHZhbmNlZCBVc2FnZTpcbiAgICAgIC0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBQcm9taXNlcyBzaGluZSB3aGVuIGFic3RyYWN0aW5nIGF3YXkgYXN5bmNocm9ub3VzIGludGVyYWN0aW9ucyBzdWNoIGFzXG4gICAgICBgWE1MSHR0cFJlcXVlc3Rgcy5cblxuICAgICAgYGBganNcbiAgICAgIGZ1bmN0aW9uIGdldEpTT04odXJsKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpO1xuICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBoYW5kbGVyO1xuICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgICAgeGhyLnNlbmQoKTtcblxuICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSB0aGlzLkRPTkUpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMucmVzcG9uc2UpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ2dldEpTT046IGAnICsgdXJsICsgJ2AgZmFpbGVkIHdpdGggc3RhdHVzOiBbJyArIHRoaXMuc3RhdHVzICsgJ10nKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZ2V0SlNPTignL3Bvc3RzLmpzb24nKS50aGVuKGZ1bmN0aW9uKGpzb24pIHtcbiAgICAgICAgLy8gb24gZnVsZmlsbG1lbnRcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAvLyBvbiByZWplY3Rpb25cbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIFVubGlrZSBjYWxsYmFja3MsIHByb21pc2VzIGFyZSBncmVhdCBjb21wb3NhYmxlIHByaW1pdGl2ZXMuXG5cbiAgICAgIGBgYGpzXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIGdldEpTT04oJy9wb3N0cycpLFxuICAgICAgICBnZXRKU09OKCcvY29tbWVudHMnKVxuICAgICAgXSkudGhlbihmdW5jdGlvbih2YWx1ZXMpe1xuICAgICAgICB2YWx1ZXNbMF0gLy8gPT4gcG9zdHNKU09OXG4gICAgICAgIHZhbHVlc1sxXSAvLyA9PiBjb21tZW50c0pTT05cblxuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQGNsYXNzIFByb21pc2VcbiAgICAgIEBwYXJhbSB7ZnVuY3Rpb259IHJlc29sdmVyXG4gICAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgICBAY29uc3RydWN0b3JcbiAgICAqL1xuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlKHJlc29sdmVyKSB7XG4gICAgICB0aGlzW2xpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBST01JU0VfSURdID0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbmV4dElkKCk7XG4gICAgICB0aGlzLl9yZXN1bHQgPSB0aGlzLl9zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N1YnNjcmliZXJzID0gW107XG5cbiAgICAgIGlmIChsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRub29wICE9PSByZXNvbHZlcikge1xuICAgICAgICB0eXBlb2YgcmVzb2x2ZXIgIT09ICdmdW5jdGlvbicgJiYgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJG5lZWRzUmVzb2x2ZXIoKTtcbiAgICAgICAgdGhpcyBpbnN0YW5jZW9mIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlID8gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaW5pdGlhbGl6ZVByb21pc2UodGhpcywgcmVzb2x2ZXIpIDogbGliJGVzNiRwcm9taXNlJHByb21pc2UkJG5lZWRzTmV3KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UuYWxsID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkYWxsJCRkZWZhdWx0O1xuICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLnJhY2UgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyYWNlJCRkZWZhdWx0O1xuICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLnJlc29sdmUgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZXNvbHZlJCRkZWZhdWx0O1xuICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLnJlamVjdCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlamVjdCQkZGVmYXVsdDtcbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5fc2V0U2NoZWR1bGVyID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHNldFNjaGVkdWxlcjtcbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5fc2V0QXNhcCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzZXRBc2FwO1xuICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLl9hc2FwID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXA7XG5cbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5wcm90b3R5cGUgPSB7XG4gICAgICBjb25zdHJ1Y3RvcjogbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UsXG5cbiAgICAvKipcbiAgICAgIFRoZSBwcmltYXJ5IHdheSBvZiBpbnRlcmFjdGluZyB3aXRoIGEgcHJvbWlzZSBpcyB0aHJvdWdoIGl0cyBgdGhlbmAgbWV0aG9kLFxuICAgICAgd2hpY2ggcmVnaXN0ZXJzIGNhbGxiYWNrcyB0byByZWNlaXZlIGVpdGhlciBhIHByb21pc2UncyBldmVudHVhbCB2YWx1ZSBvciB0aGVcbiAgICAgIHJlYXNvbiB3aHkgdGhlIHByb21pc2UgY2Fubm90IGJlIGZ1bGZpbGxlZC5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbih1c2VyKXtcbiAgICAgICAgLy8gdXNlciBpcyBhdmFpbGFibGVcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAgIC8vIHVzZXIgaXMgdW5hdmFpbGFibGUsIGFuZCB5b3UgYXJlIGdpdmVuIHRoZSByZWFzb24gd2h5XG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBDaGFpbmluZ1xuICAgICAgLS0tLS0tLS1cblxuICAgICAgVGhlIHJldHVybiB2YWx1ZSBvZiBgdGhlbmAgaXMgaXRzZWxmIGEgcHJvbWlzZS4gIFRoaXMgc2Vjb25kLCAnZG93bnN0cmVhbSdcbiAgICAgIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmaXJzdCBwcm9taXNlJ3MgZnVsZmlsbG1lbnRcbiAgICAgIG9yIHJlamVjdGlvbiBoYW5kbGVyLCBvciByZWplY3RlZCBpZiB0aGUgaGFuZGxlciB0aHJvd3MgYW4gZXhjZXB0aW9uLlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHJldHVybiB1c2VyLm5hbWU7XG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIHJldHVybiAnZGVmYXVsdCBuYW1lJztcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHVzZXJOYW1lKSB7XG4gICAgICAgIC8vIElmIGBmaW5kVXNlcmAgZnVsZmlsbGVkLCBgdXNlck5hbWVgIHdpbGwgYmUgdGhlIHVzZXIncyBuYW1lLCBvdGhlcndpc2UgaXRcbiAgICAgICAgLy8gd2lsbCBiZSBgJ2RlZmF1bHQgbmFtZSdgXG4gICAgICB9KTtcblxuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRm91bmQgdXNlciwgYnV0IHN0aWxsIHVuaGFwcHknKTtcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgZmluZFVzZXJgIHJlamVjdGVkIGFuZCB3ZSdyZSB1bmhhcHB5Jyk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAvLyBuZXZlciByZWFjaGVkXG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIC8vIGlmIGBmaW5kVXNlcmAgZnVsZmlsbGVkLCBgcmVhc29uYCB3aWxsIGJlICdGb3VuZCB1c2VyLCBidXQgc3RpbGwgdW5oYXBweScuXG4gICAgICAgIC8vIElmIGBmaW5kVXNlcmAgcmVqZWN0ZWQsIGByZWFzb25gIHdpbGwgYmUgJ2BmaW5kVXNlcmAgcmVqZWN0ZWQgYW5kIHdlJ3JlIHVuaGFwcHknLlxuICAgICAgfSk7XG4gICAgICBgYGBcbiAgICAgIElmIHRoZSBkb3duc3RyZWFtIHByb21pc2UgZG9lcyBub3Qgc3BlY2lmeSBhIHJlamVjdGlvbiBoYW5kbGVyLCByZWplY3Rpb24gcmVhc29ucyB3aWxsIGJlIHByb3BhZ2F0ZWQgZnVydGhlciBkb3duc3RyZWFtLlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHRocm93IG5ldyBQZWRhZ29naWNhbEV4Y2VwdGlvbignVXBzdHJlYW0gZXJyb3InKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIC8vIG5ldmVyIHJlYWNoZWRcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIC8vIG5ldmVyIHJlYWNoZWRcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgLy8gVGhlIGBQZWRnYWdvY2lhbEV4Y2VwdGlvbmAgaXMgcHJvcGFnYXRlZCBhbGwgdGhlIHdheSBkb3duIHRvIGhlcmVcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEFzc2ltaWxhdGlvblxuICAgICAgLS0tLS0tLS0tLS0tXG5cbiAgICAgIFNvbWV0aW1lcyB0aGUgdmFsdWUgeW91IHdhbnQgdG8gcHJvcGFnYXRlIHRvIGEgZG93bnN0cmVhbSBwcm9taXNlIGNhbiBvbmx5IGJlXG4gICAgICByZXRyaWV2ZWQgYXN5bmNocm9ub3VzbHkuIFRoaXMgY2FuIGJlIGFjaGlldmVkIGJ5IHJldHVybmluZyBhIHByb21pc2UgaW4gdGhlXG4gICAgICBmdWxmaWxsbWVudCBvciByZWplY3Rpb24gaGFuZGxlci4gVGhlIGRvd25zdHJlYW0gcHJvbWlzZSB3aWxsIHRoZW4gYmUgcGVuZGluZ1xuICAgICAgdW50aWwgdGhlIHJldHVybmVkIHByb21pc2UgaXMgc2V0dGxlZC4gVGhpcyBpcyBjYWxsZWQgKmFzc2ltaWxhdGlvbiouXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRDb21tZW50c0J5QXV0aG9yKHVzZXIpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoY29tbWVudHMpIHtcbiAgICAgICAgLy8gVGhlIHVzZXIncyBjb21tZW50cyBhcmUgbm93IGF2YWlsYWJsZVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgSWYgdGhlIGFzc2ltbGlhdGVkIHByb21pc2UgcmVqZWN0cywgdGhlbiB0aGUgZG93bnN0cmVhbSBwcm9taXNlIHdpbGwgYWxzbyByZWplY3QuXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRDb21tZW50c0J5QXV0aG9yKHVzZXIpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoY29tbWVudHMpIHtcbiAgICAgICAgLy8gSWYgYGZpbmRDb21tZW50c0J5QXV0aG9yYCBmdWxmaWxscywgd2UnbGwgaGF2ZSB0aGUgdmFsdWUgaGVyZVxuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAvLyBJZiBgZmluZENvbW1lbnRzQnlBdXRob3JgIHJlamVjdHMsIHdlJ2xsIGhhdmUgdGhlIHJlYXNvbiBoZXJlXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBTaW1wbGUgRXhhbXBsZVxuICAgICAgLS0tLS0tLS0tLS0tLS1cblxuICAgICAgU3luY2hyb25vdXMgRXhhbXBsZVxuXG4gICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICB0cnkge1xuICAgICAgICByZXN1bHQgPSBmaW5kUmVzdWx0KCk7XG4gICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAgIC8vIGZhaWx1cmVcbiAgICAgIH1cbiAgICAgIGBgYFxuXG4gICAgICBFcnJiYWNrIEV4YW1wbGVcblxuICAgICAgYGBganNcbiAgICAgIGZpbmRSZXN1bHQoZnVuY3Rpb24ocmVzdWx0LCBlcnIpe1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgUHJvbWlzZSBFeGFtcGxlO1xuXG4gICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICBmaW5kUmVzdWx0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xuICAgICAgICAvLyBzdWNjZXNzXG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgICAgICAvLyBmYWlsdXJlXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBBZHZhbmNlZCBFeGFtcGxlXG4gICAgICAtLS0tLS0tLS0tLS0tLVxuXG4gICAgICBTeW5jaHJvbm91cyBFeGFtcGxlXG5cbiAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgIHZhciBhdXRob3IsIGJvb2tzO1xuXG4gICAgICB0cnkge1xuICAgICAgICBhdXRob3IgPSBmaW5kQXV0aG9yKCk7XG4gICAgICAgIGJvb2tzICA9IGZpbmRCb29rc0J5QXV0aG9yKGF1dGhvcik7XG4gICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAgIC8vIGZhaWx1cmVcbiAgICAgIH1cbiAgICAgIGBgYFxuXG4gICAgICBFcnJiYWNrIEV4YW1wbGVcblxuICAgICAgYGBganNcblxuICAgICAgZnVuY3Rpb24gZm91bmRCb29rcyhib29rcykge1xuXG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGZhaWx1cmUocmVhc29uKSB7XG5cbiAgICAgIH1cblxuICAgICAgZmluZEF1dGhvcihmdW5jdGlvbihhdXRob3IsIGVycil7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBmYWlsdXJlKGVycik7XG4gICAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmaW5kQm9vb2tzQnlBdXRob3IoYXV0aG9yLCBmdW5jdGlvbihib29rcywgZXJyKSB7XG4gICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBmYWlsdXJlKGVycik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGZvdW5kQm9va3MoYm9va3MpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAgICAgICAgICAgICBmYWlsdXJlKHJlYXNvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICBmYWlsdXJlKGVycik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgUHJvbWlzZSBFeGFtcGxlO1xuXG4gICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICBmaW5kQXV0aG9yKCkuXG4gICAgICAgIHRoZW4oZmluZEJvb2tzQnlBdXRob3IpLlxuICAgICAgICB0aGVuKGZ1bmN0aW9uKGJvb2tzKXtcbiAgICAgICAgICAvLyBmb3VuZCBib29rc1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEBtZXRob2QgdGhlblxuICAgICAgQHBhcmFtIHtGdW5jdGlvbn0gb25GdWxmaWxsZWRcbiAgICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uUmVqZWN0ZWRcbiAgICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICAgIEByZXR1cm4ge1Byb21pc2V9XG4gICAgKi9cbiAgICAgIHRoZW46IGxpYiRlczYkcHJvbWlzZSR0aGVuJCRkZWZhdWx0LFxuXG4gICAgLyoqXG4gICAgICBgY2F0Y2hgIGlzIHNpbXBseSBzdWdhciBmb3IgYHRoZW4odW5kZWZpbmVkLCBvblJlamVjdGlvbilgIHdoaWNoIG1ha2VzIGl0IHRoZSBzYW1lXG4gICAgICBhcyB0aGUgY2F0Y2ggYmxvY2sgb2YgYSB0cnkvY2F0Y2ggc3RhdGVtZW50LlxuXG4gICAgICBgYGBqc1xuICAgICAgZnVuY3Rpb24gZmluZEF1dGhvcigpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkbid0IGZpbmQgdGhhdCBhdXRob3InKTtcbiAgICAgIH1cblxuICAgICAgLy8gc3luY2hyb25vdXNcbiAgICAgIHRyeSB7XG4gICAgICAgIGZpbmRBdXRob3IoKTtcbiAgICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gICAgICB9XG5cbiAgICAgIC8vIGFzeW5jIHdpdGggcHJvbWlzZXNcbiAgICAgIGZpbmRBdXRob3IoKS5jYXRjaChmdW5jdGlvbihyZWFzb24pe1xuICAgICAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQG1ldGhvZCBjYXRjaFxuICAgICAgQHBhcmFtIHtGdW5jdGlvbn0gb25SZWplY3Rpb25cbiAgICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICAgIEByZXR1cm4ge1Byb21pc2V9XG4gICAgKi9cbiAgICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3Rpb24pO1xuICAgICAgfVxuICAgIH07XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJEVudW1lcmF0b3I7XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJEVudW1lcmF0b3IoQ29uc3RydWN0b3IsIGlucHV0KSB7XG4gICAgICB0aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3I7XG4gICAgICB0aGlzLnByb21pc2UgPSBuZXcgQ29uc3RydWN0b3IobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbm9vcCk7XG5cbiAgICAgIGlmICghdGhpcy5wcm9taXNlW2xpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBST01JU0VfSURdKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG1ha2VQcm9taXNlKHRoaXMucHJvbWlzZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChsaWIkZXM2JHByb21pc2UkdXRpbHMkJGlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgIHRoaXMuX2lucHV0ICAgICA9IGlucHV0O1xuICAgICAgICB0aGlzLmxlbmd0aCAgICAgPSBpbnB1dC5sZW5ndGg7XG4gICAgICAgIHRoaXMuX3JlbWFpbmluZyA9IGlucHV0Lmxlbmd0aDtcblxuICAgICAgICB0aGlzLl9yZXN1bHQgPSBuZXcgQXJyYXkodGhpcy5sZW5ndGgpO1xuXG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwodGhpcy5wcm9taXNlLCB0aGlzLl9yZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubGVuZ3RoID0gdGhpcy5sZW5ndGggfHwgMDtcbiAgICAgICAgICB0aGlzLl9lbnVtZXJhdGUoKTtcbiAgICAgICAgICBpZiAodGhpcy5fcmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHRoaXMucHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdCh0aGlzLnByb21pc2UsIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCR2YWxpZGF0aW9uRXJyb3IoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJHZhbGlkYXRpb25FcnJvcigpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0FycmF5IE1ldGhvZHMgbXVzdCBiZSBwcm92aWRlZCBhbiBBcnJheScpO1xuICAgIH1cblxuICAgIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fZW51bWVyYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbGVuZ3RoICA9IHRoaXMubGVuZ3RoO1xuICAgICAgdmFyIGlucHV0ICAgPSB0aGlzLl9pbnB1dDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IHRoaXMuX3N0YXRlID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQRU5ESU5HICYmIGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLl9lYWNoRW50cnkoaW5wdXRbaV0sIGkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX2VhY2hFbnRyeSA9IGZ1bmN0aW9uKGVudHJ5LCBpKSB7XG4gICAgICB2YXIgYyA9IHRoaXMuX2luc3RhbmNlQ29uc3RydWN0b3I7XG4gICAgICB2YXIgcmVzb2x2ZSA9IGMucmVzb2x2ZTtcblxuICAgICAgaWYgKHJlc29sdmUgPT09IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlc29sdmUkJGRlZmF1bHQpIHtcbiAgICAgICAgdmFyIHRoZW4gPSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRnZXRUaGVuKGVudHJ5KTtcblxuICAgICAgICBpZiAodGhlbiA9PT0gbGliJGVzNiRwcm9taXNlJHRoZW4kJGRlZmF1bHQgJiZcbiAgICAgICAgICAgIGVudHJ5Ll9zdGF0ZSAhPT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUEVORElORykge1xuICAgICAgICAgIHRoaXMuX3NldHRsZWRBdChlbnRyeS5fc3RhdGUsIGksIGVudHJ5Ll9yZXN1bHQpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGVuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5fcmVtYWluaW5nLS07XG4gICAgICAgICAgdGhpcy5fcmVzdWx0W2ldID0gZW50cnk7XG4gICAgICAgIH0gZWxzZSBpZiAoYyA9PT0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkJGRlZmF1bHQpIHtcbiAgICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBjKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3ApO1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgZW50cnksIHRoZW4pO1xuICAgICAgICAgIHRoaXMuX3dpbGxTZXR0bGVBdChwcm9taXNlLCBpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl93aWxsU2V0dGxlQXQobmV3IGMoZnVuY3Rpb24ocmVzb2x2ZSkgeyByZXNvbHZlKGVudHJ5KTsgfSksIGkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl93aWxsU2V0dGxlQXQocmVzb2x2ZShlbnRyeSksIGkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX3NldHRsZWRBdCA9IGZ1bmN0aW9uKHN0YXRlLCBpLCB2YWx1ZSkge1xuICAgICAgdmFyIHByb21pc2UgPSB0aGlzLnByb21pc2U7XG5cbiAgICAgIGlmIChwcm9taXNlLl9zdGF0ZSA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUEVORElORykge1xuICAgICAgICB0aGlzLl9yZW1haW5pbmctLTtcblxuICAgICAgICBpZiAoc3RhdGUgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFJFSkVDVEVEKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9yZXN1bHRbaV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fcmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl93aWxsU2V0dGxlQXQgPSBmdW5jdGlvbihwcm9taXNlLCBpKSB7XG4gICAgICB2YXIgZW51bWVyYXRvciA9IHRoaXM7XG5cbiAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHN1YnNjcmliZShwcm9taXNlLCB1bmRlZmluZWQsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGVudW1lcmF0b3IuX3NldHRsZWRBdChsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRGVUxGSUxMRUQsIGksIHZhbHVlKTtcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICBlbnVtZXJhdG9yLl9zZXR0bGVkQXQobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUkVKRUNURUQsIGksIHJlYXNvbik7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwb2x5ZmlsbCQkcG9seWZpbGwoKSB7XG4gICAgICB2YXIgbG9jYWw7XG5cbiAgICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGxvY2FsID0gZ2xvYmFsO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBsb2NhbCA9IHNlbGY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGxvY2FsID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncG9seWZpbGwgZmFpbGVkIGJlY2F1c2UgZ2xvYmFsIG9iamVjdCBpcyB1bmF2YWlsYWJsZSBpbiB0aGlzIGVudmlyb25tZW50Jyk7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgUCA9IGxvY2FsLlByb21pc2U7XG5cbiAgICAgIGlmIChQICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChQLnJlc29sdmUoKSkgPT09ICdbb2JqZWN0IFByb21pc2VdJyAmJiAhUC5jYXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbG9jYWwuUHJvbWlzZSA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRkZWZhdWx0O1xuICAgIH1cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHBvbHlmaWxsJCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJHBvbHlmaWxsJCRwb2x5ZmlsbDtcblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkdW1kJCRFUzZQcm9taXNlID0ge1xuICAgICAgJ1Byb21pc2UnOiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkZGVmYXVsdCxcbiAgICAgICdwb2x5ZmlsbCc6IGxpYiRlczYkcHJvbWlzZSRwb2x5ZmlsbCQkZGVmYXVsdFxuICAgIH07XG5cbiAgICAvKiBnbG9iYWwgZGVmaW5lOnRydWUgbW9kdWxlOnRydWUgd2luZG93OiB0cnVlICovXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lWydhbWQnXSkge1xuICAgICAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gbGliJGVzNiRwcm9taXNlJHVtZCQkRVM2UHJvbWlzZTsgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGVbJ2V4cG9ydHMnXSkge1xuICAgICAgbW9kdWxlWydleHBvcnRzJ10gPSBsaWIkZXM2JHByb21pc2UkdW1kJCRFUzZQcm9taXNlO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzWydFUzZQcm9taXNlJ10gPSBsaWIkZXM2JHByb21pc2UkdW1kJCRFUzZQcm9taXNlO1xuICAgIH1cblxuICAgIGxpYiRlczYkcHJvbWlzZSRwb2x5ZmlsbCQkZGVmYXVsdCgpO1xufSkuY2FsbCh0aGlzKTtcblxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZXM2LXByb21pc2UvZGlzdC9lczYtcHJvbWlzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDc0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn1cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbiAqKiBtb2R1bGUgaWQgPSA3NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyogKGlnbm9yZWQpICovXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiB2ZXJ0eCAoaWdub3JlZClcbiAqKiBtb2R1bGUgaWQgPSA3N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiZGVmaW5lIGNhbm5vdCBiZSB1c2VkIGluZGlyZWN0XCIpOyB9O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9idWlsZGluL2FtZC1kZWZpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSA3OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgZGVmYXVsdFN0eWxlcyA9IHtcblx0YmFja2dyb3VuZDogJyMzZDNkM2QnLFxuXHRhY2NlbnRCYWNrZ3JvdW5kOiAnI0FGNkVFOCcsXG5cdGFjY2VudFRleHQ6ICcjZmZmZmZmJyxcblx0dGV4dDogJyNmZmZmZmYnLFxuXHRsaW5rOiAnI2ZmZmZmZicsXG5cdHNlY29uZGFyeUJhY2tncm91bmQ6ICcjNDY0NjQ2Jyxcblx0c2Vjb25kYXJ5VGV4dDogJyNmN2Y3ZjcnLFxuXHRpbnB1dEJhY2tncm91bmQ6ICcjNDY0NjQ2Jyxcblx0aW5wdXRUZXh0OiAnI2Y3ZjdmNydcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdFN0eWxlcztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3R5bGVzLmpzXG4gKiogbW9kdWxlIGlkID0gNzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yYXctbG9hZGVyL2luZGV4LmpzIS4vc3R5bGVzLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jhdy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yYXctbG9hZGVyL2luZGV4LmpzIS4vc3R5bGVzLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3N0eWxlcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==
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
	
	function _layoutAndActions(debug, data) {
		data.element = document.querySelector('.' + data.uuid + ':last-child');
		data.layoutElement = data.element.querySelector('.IBMChat-watson-layout');
		data.msgElement = data.element.querySelector('.IBMChat-watson-message');
	
		if (data.message && data.message.layout && data.message.layout.name) {
			var layout = 'layout:' + data.message.layout.name;
			if (events.hasSubscription(layout))
				events.publish(layout, data);
			else if (debug)
				console.warn('Nothing is subscribed to ' + layout);
		}
	
		if (data.message && data.message.action && data.message.action.name) {
			var action = 'action:' + data.message.action.name;
			if (events.hasSubscription(action))
				events.publish(action, data, events.completeEvent);
			else if (debug)
				console.warn('Nothing is subscribed to ' + action);
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
			messages: [].concat(current.messages || [], data)
		});
		var msg = (data.message && data.message.text) ? ((Array.isArray(data.message.text)) ? data.message.text : [data.message.text]) : [''];
		for (var i = 0; i < msg.length; i++) {
			var parsed = utils.replaceAll(text, '${data.uuid}', data.uuid);
			var item;
			current.chatHolder.innerHTML += parsed;
			item = current.chatHolder.querySelector('.' + data.uuid + ':last-child .IBMChat-watson-message');
			writeMessage(item, msg[i]);
			if (i === msg.length - 1)
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
		publish('disable-input');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0MWY3YzI4NzJkMDgzOTZlNDM4YyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3M/MjY5OSIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRIYW5kbGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRIYW5kbGVycy9ldmVudHMvc3RhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXNzaWduVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvZXEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcHlPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NyZWF0ZUFzc2lnbmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXBwbHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzSXRlcmF0ZWVDYWxsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5TGlrZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50SGFuZGxlcnMvdGVtcGxhdGVzL3N0YXJ0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50SGFuZGxlcnMvZXZlbnRzL3Jlc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRIYW5kbGVycy9ldmVudHMvcmVjZWl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRIYW5kbGVycy90ZW1wbGF0ZXMvcmVjZWl2ZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9ldmVudEhhbmRsZXJzL2V2ZW50cy9zZW5kLmpzIiwid2VicGFjazovLy8uL34vQHdhdHNvbi12aXJ0dWFsLWFnZW50L2NsaWVudC1zZGsvbGliL3dlYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRIYW5kbGVycy90ZW1wbGF0ZXMvc2VuZC5odG1sIiwid2VicGFjazovLy8uL3NyYy9ldmVudEhhbmRsZXJzL2V2ZW50cy9zZW5kLW1vY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50SGFuZGxlcnMvZXZlbnRzL3NlbmQtaW5wdXQtbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRIYW5kbGVycy9ldmVudHMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50SGFuZGxlcnMvZXZlbnRzL2Vycm9yLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudEhhbmRsZXJzL2V2ZW50cy9zY3JvbGwtdG8tYm90dG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvdGVtcGxhdGVzL2Jhc2UuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy90ZW1wbGF0ZXMvYWRkLWxvY2F0aW9ucy1pdGVtLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvdGVtcGxhdGVzL2FkZC1sb2NhdGlvbi1pdGVtLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvdGVtcGxhdGVzL2NyZWF0ZS1kb20tYXJyYXkuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9yZXF1ZXN0LWdlb2xvY2F0aW9uLWxhdGxvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvY2hvb3NlLWxvY2F0aW9uLXR5cGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvY2hvb3NlLWxvY2F0aW9uLXR5cGUvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9jaG9vc2UtbG9jYXRpb24tdHlwZS90ZW1wbGF0ZXMvYmFzZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2Nob29zZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9jaG9vc2Uvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9jaG9vc2UvdGVtcGxhdGVzL2J1dHRvbi5odG1sIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2Zvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvZm9ybS9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL3NyYy9wcm9maWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2Zvcm0vdGVtcGxhdGVzL2Jhc2UuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9mb3JtL3RlbXBsYXRlcy9maWVsZC5odG1sIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2NjLXZhbGlkYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9jYy12YWxpZGF0b3Ivc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9jYy12YWxpZGF0b3IvdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9jYy12YWxpZGF0b3IvdGVtcGxhdGVzL2Jhc2UuaHRtbCIsIndlYnBhY2s6Ly8vLi9+L2VzNi1wcm9taXNlL2Rpc3QvZXM2LXByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vdmVydHggKGlnbm9yZWQpIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvc3R5bGVzLmNzcz85ZmI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBLGtFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLE9BQU87QUFDbkIsYUFBWSxPQUFPO0FBQ25CLGFBQVksT0FBTztBQUNuQixhQUFZLE9BQU87QUFDbkIsYUFBWSxPQUFPO0FBQ25CLGFBQVksT0FBTztBQUNuQixhQUFZLE9BQU87QUFDbkIsYUFBWSxPQUFPO0FBQ25CLGFBQVksT0FBTztBQUNuQixhQUFZLE9BQU87QUFDbkIsYUFBWSxPQUFPO0FBQ25CLGFBQVksT0FBTztBQUNuQixhQUFZLE9BQU87QUFDbkIsYUFBWSxPQUFPO0FBQ25CLGFBQVksT0FBTztBQUNuQixhQUFZLE9BQU87QUFDbkIsYUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0wsZUFBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxlQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLGVBQWMsUUFBUTtBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxPQUFPO0FBQ25CLGFBQVksU0FBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxPQUFPO0FBQ25CLGFBQVksU0FBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBLGVBQWMsSUFBSTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLE9BQU87QUFDbkIsYUFBWSxPQUFPO0FBQ25CLGVBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBOzs7Ozs7O0FDcENBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLFNBQVM7QUFDcEIsWUFBVyxPQUFPO0FBQ2xCLGNBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxTQUFTO0FBQ3BCLFlBQVcsRUFBRTtBQUNiLFlBQVcsTUFBTTtBQUNqQixjQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLFlBQVcsRUFBRTtBQUNiLFlBQVcsRUFBRTtBQUNiLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM3QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2hDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtRUFBa0UsUUFBUTs7QUFFMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1FQUFrRSxRQUFRO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBcUMsUUFBUTs7QUFFN0M7O0FBRUEsc0JBQXFCLHdCQUF3QjtBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUDtBQUNBO0FBQ0EsMEJBQXlCLFlBQVk7QUFDckM7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0EsZUFBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlO0FBQ2Y7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQSxlQUFjLFNBQVM7QUFDdkIsZUFBYyxTQUFTO0FBQ3ZCO0FBQ0EsZ0JBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQSxlQUFjLFNBQVM7QUFDdkI7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXFCLGtFQUFrRTtBQUN2RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULHVEQUFzRCxnQkFBZ0IsRUFBRTtBQUN4RTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxREFBeUIsd0NBQXdDLEVBQUU7QUFDbkUsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxFQUFDOzs7Ozs7Ozs7QUM3N0JEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCLFVBQVU7Ozs7Ozs7QUNuTHRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEEsZ0I7Ozs7OztBQ0FBLDhCQUE2QixtREFBbUQ7Ozs7Ozs7QUNBaEY7QUFDQTtBQUNBO0FBQ0Esa0VBQWlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDMUJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQXNGO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsaUNBQWdDLFVBQVUsRUFBRTtBQUM1QyxFIiwiZmlsZSI6IklCTUNoYXRDbGllbnQtbGF0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJJQk1DaGF0XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIklCTUNoYXRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSUJNQ2hhdFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNDFmN2MyODcyZDA4Mzk2ZTQzOGNcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnJlcXVpcmUoJy4vc3R5bGVzLmNzcycpO1xuXG52YXIgYm9vdHN0cmFwID0gcmVxdWlyZSgnLi9ib290c3RyYXAnKTtcblxuLyoqXG4gKiBAbmFtZXNwYWNlIElCTUNoYXRcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0LyoqXG5cdCAqIEdlbmVyYXRlIHRoZSBjaGF0IHdpZGdldCBpbnRvIGFuIGVsZW1lbnQuXG5cdCAqIEBmdW5jdGlvbiBpbml0XG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5lbCAtIFRha2VzIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgSUQgb2YgYW4gaHRtbCBlbGVtZW50IHRvIGJlIHJlbmRlcmVkIHRvIE9SIGEgc2VsZWN0ZWQgZWxlbWVudFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLmJvdElEIC0gVGhlIHVuaXF1ZSBpZGVudGlmaWVyIG9mIHlvdXIgVmlydHVhbCBBZ2VudC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy51c2VySUQgLSBBIGhhc2hlZCBub24taWRlbnRpZmlhYmxlIChpLmUuIG5vdCBhIHVzZXJzIGVtYWlsIGFkZHJlc3Mgb3IgcHVibGljIHVzZXIgaWQpIHVuaXF1ZSBJRCB1c2VkIGZvciB0cmFja2luZyBpbiB0aGUgRW5nYWdlbWVudCBNZXRyaWNzIGRhc2hib2FyZC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5iYXNlVVJMPSdodHRwczovL2Rldi5hcGkuaWJtLmNvbS92aXJ0dWFsYWdlbnQvZGV2ZWxvcG1lbnQvYXBpL3YxLycgLSBvcHRpb25hbDogc3BlY2lmaWVzIGEgZGlmZmVyZW50IGJvdCBob3N0aW5nIHNlcnZlci4gVGhlIG1vc3QgY29tbW9uIHVzZWNhc2UgZm9yIHRoaXMgcGFyYW0gaXMgdG8gcG9pbnQgdGhlIHdpZGdldCB0byBhIHNlcnZlciB0aGF0IHdpbGwgYWRkIFgtSUJNLUNsaWVudC1JZCBhbmQgWC1JQk0tQ2xpZW50LVNlY3JldCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLlhJQk1DbGllbnRJRCAtIG9wdGlvbmFsOiBZb3VyIElCTUNsaWVudElELi4uIHRoaXMgc2hvdWxkIG5vdCBiZSBtYWRlIHB1YmxpYyBpbiBhIHB1YmxpYyBlbnZpcm9ubWVudC4gSW5jbHVkaW5nIHRoaXMgd2lsbCBhZGQgWC1JQk0tQ2xpZW50LUlkIGFzIGEgaGVhZGVyIHRvIHlvdXIgcmVxdWVzdC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5YSUJNQ2xpZW50U2VjcmV0IC0gb3B0aW9uYWw6IFlvdXIgSUJNQ2xpZW50U2VjcmV0Li4uIHRoaXMgc2hvdWxkIG5vdCBiZSBtYWRlIHB1YmxpYyBpbiBhIHB1YmxpYyBlbnZpcm9ubWVudC4gSW5jbHVkaW5nIHRoaXMgd2lsbCBhZGQgWC1JQk0tQ2xpZW50LVNlY3JldCBhcyBhIGhlYWRlciB0byB5b3VyIHJlcXVlc3QuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcuc3R5bGVzIC0gb3B0aW9uYWw6IE92ZXJyaWRlIGRlZmF1bHQgc3R5bGluZy5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zdHlsZXMuYmFja2dyb3VuZD0nIzNkM2QzZCcgLSBvcHRpb25hbDogaGV4IGNvZGUgZm9yIGJhY2tncm91bmQgY29sb3Jcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zdHlsZXMudGV4dD0nI2ZmZmZmZicgLSBvcHRpb25hbDogaGV4IGNvZGUgZm9yIG1haW4gdGV4dCBjb2xvclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnN0eWxlcy5saW5rPScjZmZmZmZmJyAtIG9wdGlvbmFsOiBoZXggY29kZSBmb3IgY29sb3Igb2YgbGlua3MgaW4gdGV4dFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnN0eWxlcy5zZWNvbmRhcnlCYWNrZ3JvdW5kPScjNDY0NjQ2JyAtIG9wdGlvbmFsOiBoZXggY29kZSBmb3IgYmFja2dyb3VuZCBjb2xvciBvZiBjaGF0IGJ1YmJsZXMgYW5kIG90aGVyIHNlY29uZGFyeSBpbmZvXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuc3R5bGVzLnNlY29uZGFyeVRleHQ9JyNmN2Y3ZjcnIC0gb3B0aW9uYWw6IGhleCBjb2RlIGZvciBjb2xvciBvZiBjaGF0IGJ1YmJsZSB0ZXh0IGFuZCBvdGhlciBzZWNvbmRhcnkgaW5mb1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnN0eWxlcy5pbnB1dEJhY2tncm91bmQ9JyM0NjQ2NDYnIC0gb3B0aW9uYWw6IGhleCBjb2RlIGZvciBiYWNrZ3JvdW5kIGNvbG9yIG9mIGlucHV0IGVsZW1lbnRzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuc3R5bGVzLmlucHV0VGV4dD0nI2Y3ZjdmNycgLSBvcHRpb25hbDogaGV4IGNvZGUgZm9yIGNvbG9yIG9mIGlucHV0IHRleHRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zdHlsZXMuYWNjZW50VGV4dD0nI2ZmZmZmZicgLSBvcHRpb25hbDogaGV4IGNvZGUgZm9yIHRleHQgY29sb3JzIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBhY2NlbnRCYWNrZ3JvdW5kIGkuZS4gYnV0dG9uIHRleHRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zdHlsZXMuYWNjZW50QmFja2dyb3VuZD0nI0FGNkVFOCcgLSBvcHRpb25hbDogaGV4IGNvZGUgZm9yIGFjY2VudCBjb2xvcnMgdXNlZCBieSB0aGUgY2hhdCBhcHBsaWNhdGlvbiBpLmUuIGJ1dHRvbnNcblx0ICogQGV4YW1wbGVcblx0ICogSUJNQ2hhdC5pbml0KHtcblx0ICogIGVsOiAnbXlfZGl2Jyxcblx0ICogIGJvdElEOiAneHh4eHh4eHh4eHh4eHgnXG5cdCAqICBzdHlsZXM6IHtcblx0ICogICAgYmFja2dyb3VuZDogXCIjMDAwMDAwXCJcblx0ICogIH1cblx0ICogfSkudGhlbihmdW5jdGlvbigpe1xuXHQgKiAgICAgY29uc29sZS5sb2coJ2luaXRpYWxpemUnKTtcblx0ICogfSk7XG5cdCAqIC8vb3Jcblx0ICogdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15LXdpZGdldC1jb250YWluZXInKTtcblx0ICogSUJNQ2hhdC5pbml0KHtcblx0ICogIGVsOiBlbCxcblx0ICogIGJvdElEOiAneHh4eHh4eHh4eHh4eHgnXG5cdCAqICBzdHlsZXM6IHtcblx0ICogICAgYmFja2dyb3VuZDogXCIjMDAwMDAwXCJcblx0ICogIH1cblx0ICogfSkudGhlbihmdW5jdGlvbigpe1xuXHQgKiAgICAgY29uc29sZS5sb2coJ2luaXRpYWxpemUnKTtcblx0ICogfSk7XG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfSBSZXR1cm5zOiBBIHByb21pc2Ugc28geW91IGNhbiBjYWxsIGZ1bmN0aW9ucyBhZnRlciB0aGUgd2lkZ2V0IGhhcyBiZWVuIGluaXRpYWxpemVkLlxuXHQgKi9cblx0aW5pdDogYm9vdHN0cmFwLmluaXQsXG5cdC8qKlxuXHQgKiBSZXN0YXJ0IHRoZSBjaGF0IHdpZGdldC4gVGhlIHNhbWUgY2hhdCB3aWRnZXQgaXMgcmVuZGVyZWQgaW4gdGhlIHNhbWUgaHRtbCBlbGVtZW50IGFzIHdhcyBzcGVjaWZpZWQgaW4gdGhlIGluaXQgbWV0aG9kLlxuXHQgKiBAZnVuY3Rpb24gcmVzdGFydFxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAZXhhbXBsZVxuXHQgKiBJQk1DaGF0LnJlc3RhcnQoKS50aGVuKGZ1bmN0aW9uKCl7XG5cdCAqICAgICBjb25zb2xlLmxvZygncmVzdGFydGVkJyk7XG5cdCAqIH0pO1xuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX0gUmV0dXJuczogQSBwcm9taXNlIHNvIHlvdSBjYW4gY2FsbCBmdW5jdGlvbnMgYWZ0ZXIgdGhlIHdpZGdldCBoYXMgYmVlbiBpbml0aWFsaXplZC5cblx0ICovXG5cdHJlc3RhcnQ6IGJvb3RzdHJhcC5yZXN0YXJ0LFxuXHQvKipcblx0ICogRGVzdHJveSB0aGUgY2hhdCB3aWRnZXQgYW5kIHJlc3RvcmUgdGhlIG9yaWdpbmFsIEhUTUwgY29udGVudC4gVXNlZnVsIGlmIHRoZSBjaGF0IHdpZGdldCBpcyBkaXNwbGF5ZWQgaW4gYSBtb2RhbCwgZm9yIGV4YW1wbGUsIGFuZCB5b3Ugd2FudCBpdCB0byBnbyBhd2F5IHdoZW4gdGhlIG1vZGFsIGlzIGNsb3NlZC5cblx0ICogQGZ1bmN0aW9uIGRlc3Ryb3lcblx0ICogQG1lbWJlcm9mIElCTUNoYXRcblx0ICogQGV4YW1wbGVcblx0ICogSUJNQ2hhdC5kZXN0cm95KCkudGhlbihmdW5jdGlvbigpe1xuXHQgKiAgICAgY29uc29sZS5sb2coJ2Rlc3Ryb3llZCcpO1xuXHQgKiB9KTtcblx0ICogQHJldHVybnMge1Byb21pc2V9IFJldHVybnM6IEEgcHJvbWlzZSBzbyB5b3UgY2FuIGNhbGwgZnVuY3Rpb25zIGFmdGVyIHRoZSB3aWRnZXQgaGFzIGJlZW4gZGVzdHJveWVkLlxuXHQgKi9cblx0ZGVzdHJveTogYm9vdHN0cmFwLmRlc3Ryb3ksXG5cblx0LyoqXG5cdCAqIFNlbmQgYSBtZXNzYWdlIHRvIHRoZSBjaGF0IHdpZGdldCBmcm9tIG91dHNpZGUgdGhlIGNoYXQgd2lkZ2V0LiBUaGlzIG1lc3NhZ2Ugd2lsbCBiZSBkaXNwbGF5ZWQgaW4gdGhlIGludGVyZmFjZS5cblx0ICogQGZ1bmN0aW9uIHNlbmRcblx0ICogQG1lbWJlcm9mIElCTUNoYXRcblx0ICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgLSBBIG1lc3NhZ2UgeW91IHdhbnQgdG8gc2VuZCB0byB0aGUgY2hhdCB3aWRnZXQuXG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQuc2VuZCgnSGVsbG8gd29ybGQuJyk7XG5cdCAqL1xuXHRzZW5kOiBib290c3RyYXAuc2VuZCxcblxuXHQvKipcblx0ICogTW9jayByZWNlaXZpbmcgYSBtZXNzYWdlIHRvIHRoZSBjaGF0IHdpZGdldCBmcm9tIG91dHNpZGUgdGhlIGNoYXQgd2lkZ2V0LlxuXHQgKiBAZnVuY3Rpb24gcmVjZWl2ZVxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSAtIEEgbWVzc2FnZSB5b3Ugd2FudCB0byBzaG93IGFzIHJlY2VpdmVkIGluIHRoZSBjaGF0IHdpZGdldC5cblx0ICogQGV4YW1wbGVcblx0ICogSUJNQ2hhdC5yZWNlaXZlKCdIZWxsbyB3b3JsZC4nKTtcblx0ICovXG5cdHJlY2VpdmU6IGJvb3RzdHJhcC5yZWNlaXZlLFxuXG5cdC8qKlxuXHQgKiBTZW5kIGEgbWVzc2FnZSB0byB0aGUgY2hhdCB3aWRnZXQgZnJvbSBvdXRzaWRlIHRoZSBjaGF0IHdpZGdldC4gVGhpcyBtZXNzYWdlIHdpbGwgYmUgZGlzcGxheWVkIGluIHRoZSBpbnRlcmZhY2UsIGJ1dCB3aWxsIG5vdCBhY3R1YWxseSBnZXQgc2VudCB0byB0aGUgc2VydmVyLlxuXHQgKiBAZnVuY3Rpb24gc2VuZE1vY2tcblx0ICogQG1lbWJlcm9mIElCTUNoYXRcblx0ICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgLSBBIG1lc3NhZ2UgeW91IHdhbnQgdG8gcHJldGVuZCB0byBzZW5kIHRvIHRoZSBjaGF0IHdpZGdldC5cblx0ICogQGV4YW1wbGVcblx0ICogSUJNQ2hhdC5zZW5kTW9jaygnSGVsbG8gd29ybGQuJyk7XG5cdCAqL1xuXHRzZW5kTW9jazogYm9vdHN0cmFwLnNlbmRNb2NrLFxuXG5cdC8qKlxuXHQgKiBTZW5kIGEgbWVzc2FnZSB0byB0aGUgY2hhdCB3aWRnZXQgZnJvbSBvdXRzaWRlIHRoZSBjaGF0IHdpZGdldC4gVGhpcyBtZXNzYWdlIHdpbGwgTk9UIGJlIGRpc3BsYXllZCBpbiB0aGUgaW50ZXJmYWNlLlxuXHQgKiBAZnVuY3Rpb24gc2VuZFNpbGVudGx5XG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIC0gQSBtZXNzYWdlIHlvdSB3YW50IHRvIHNlbmQgdG8gdGhlIGNoYXQgd2lkZ2V0LCBidXQgbm90IGRlIGRpc3BsYXllZCBpbiB0aGUgaW50ZXJmYWNlLlxuXHQgKiBAZXhhbXBsZVxuXHQgKiBJQk1DaGF0LnNlbmRTaWxlbnRseSgnSGVsbG8gd29ybGQuJyk7XG5cdCAqL1xuXHRzZW5kU2lsZW50bHk6IGJvb3RzdHJhcC5zZW5kU2lsZW50bHksXG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVyIGEgY3VzdG9tIGxheW91dCB3aXRoIHRoZSBjaGF0IHdpZGdldC4gQ2FsbCByZWdpc3RlckxheW91dCgpIGJlZm9yZSB5b3UgY2FsbCBpbml0KCkuXG5cdCAqIEBmdW5jdGlvbiByZWdpc3RlckxheW91dFxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGF5b3V0IC0gVGhlIG5hbWUgb2YgdGhlIGxheW91dCB5b3VyIGJvdCB3aWxsIHByb3ZpZGUgd2hlbiBpdCBpcyB0cmlnZ2VyZWQgdG8gcmVuZGVyIGEgbGF5b3V0LlxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBpbml0IC0gQSBmdW5jdGlvbiB0aGF0IHJ1bnMgb25lIHRpbWUsIHdoZW4gdGhlIGNoYXQgd2lkZ2V0IGlzIGJvb3RzdHJhcHBlZC4gQmUgc3VyZSB0byBzdWJzY3JpYmUgdG8gdGhlIFwibGF5b3V0OllPVVJfTEFZT1VUX05BTUVcIiBldmVudCBpbiB0aGlzIGZ1bmN0aW9uLlxuXHQgKiBAZXhhbXBsZVxuXHQgKiB2YXIgUGx1bWJlckJyb3RoZXJzID0gcmVxdWlyZSgnLi4vcGx1bWJlci1icm90aGVycy1nYW1lJyk7XG5cdCAqIHZhciBjb25maWcgPSB7fTtcblx0ICpcblx0ICogZnVuY3Rpb24gaW5pdEdhbWUoKSB7XG5cdCAqICAgSUJNQ2hhdC5zdWJzY3JpYmUoJ2xheW91dDpwbHVtYmVyLWJyb3RoZXJzLWdhbWUnLCBmdW5jdGlvbihvYmopIHtcblx0ICogICAgIHZhciB1dWlkID0gb2JqLnV1aWQ7XG5cdCAqICAgICB2YXIgcGFyZW50RWxlbWVudCA9IG9iai5lbGVtZW50O1xuXHQgKiAgICAgdmFyIGxheW91dEVsZW1lbnQgPSBvYmoubGF5b3V0RWxlbWVudDtcblx0ICogICAgIHZhciBtc2dFbGVtZW50ID0gb2JqLm1zZ0VsZW1lbnQ7XG5cdCAqICAgICB2YXIgbWVzc2FnZSA9IG9iai5tZXNzYWdlO1xuXHQgKiAgICAgdmFyIGRhdGEgPSBvYmouZGF0YTtcblx0ICogICAgIG1zZ0VsZW1lbnQudGV4dENvbnRlbnQgPSAnTG9hZGluZyBQbHVtYmVyIEJyb3RoZXJzISc7XG5cdCAqICAgICB2YXIgYnJvdGhlcnMgPSBuZXcgUGx1bWJlckJyb3RoZXJzKCk7XG5cdCAqICAgICBicm90aGVycy5yZW5kZXIobGF5b3V0RWxlbWVudCwgZGF0YSkudGhlbihmdW5jdGlvbigpIHtcblx0ICogICAgICAgbXNnRWxlbWVudC50ZXh0Q29udGVudCA9ICdFbmpveSB5b3VyIGdhbWUgb2YgUGx1bWJlciBCcm90aGVycyEnO1xuXHQgKiAgICAgfSk7XG5cdCAqICAgfVxuXHQgKiB9KTtcblx0ICpcblx0ICogSUJNQ2hhdC5yZWdpc3RlckxheW91dCgncGx1bWJlci1icm90aGVycy1nYW1lJywgaW5pdEdhbWUpO1xuXHQgKiBJQk1DaGF0LmluaXQoY29uZmlnKTtcblx0ICovXG5cdHJlZ2lzdGVyTGF5b3V0OiBib290c3RyYXAucmVnaXN0ZXJMYXlvdXQsXG5cblx0LyoqXG5cdCAqIFNldCBmb2N1cyB0byB0aGUgY2hhdCB0ZXh0IGJveC4gVXNlZnVsIGlmIHlvdSB3YW50IHVzZXJzIHRvIGJlIGFibGUgdG8ganVzdCBzdGFydCB0eXBpbmcgaW50byB0aGUgdGV4dCBib3ggd2l0aG91dCBoYXZpbmcgdG8gY2xpY2sgaW4gdGhlIHRleHQgYm94IGZpcnN0IHRvIHNldCBmb2N1cy5cblx0ICogQGZ1bmN0aW9uIGZvY3VzSW5wdXRcblx0ICogQG1lbWJlcm9mIElCTUNoYXRcblx0ICogQGV4YW1wbGVcblx0ICogSUJNQ2hhdC5mb2N1c0lucHV0KCk7XG5cdCAqL1xuXG5cdGZvY3VzSW5wdXQ6IGJvb3RzdHJhcC5mb2N1c0lucHV0LFxuXHQvKipcblx0ICogUHJldmVudCB1c2VycyBmcm9tIHN1Ym1pdHRpbmcgbWVzc2FnZXMgaW4gdGhlIGNoYXQgdGV4dCBib3guIFVzZWZ1bCB3aGVuIHlvdSB3YW50IHRoZSB1c2VyIHRvIGludGVyYWN0IHdpdGggYSBsYXlvdXQgaW5zdGVhZC5cblx0ICogQGZ1bmN0aW9uIGRpc2FibGVJbnB1dFxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAZXhhbXBsZVxuXHQgKiBJQk1DaGF0LmRpc2FibGVJbnB1dCgpO1xuXHQgKi9cblx0ZGlzYWJsZUlucHV0OiBib290c3RyYXAuZGlzYWJsZUlucHV0LFxuXG5cdC8qKlxuXHQgKiBFbmFibGUgdXNlcnMgdG8gc3VibWl0IG1lc3NhZ2VzIGluIHRoZSBjaGF0IHRleHQgYm94LiBVc2VmdWwgd2hlbiB5b3Ugd2FudCB1c2VycyB0byBiZSBhYmxlIHRvIHJldHVybiB0byBhZGRpbmcgbWVzc2FnZXMgdG8gdGhlIGNoYXQgdGV4dCBib3ggYWZ0ZXIgaW50ZXJhY3Rpbmcgd2l0aCBhIGxheW91dC5cblx0ICogQGZ1bmN0aW9uIGVuYWJsZUlucHV0XG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQuZW5hYmxlSW5wdXQoKTtcblx0ICovXG5cdGVuYWJsZUlucHV0OiBib290c3RyYXAuZW5hYmxlSW5wdXQsXG5cblx0LyoqXG5cdCAqIFN1YnNjcmliZSB0byBhbiBJQk1DaGF0IGV2ZW50LlxuXHQgKiBAZnVuY3Rpb24gc3Vic2NyaWJlXG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBUYWtlcyBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIG5hbWUgb2YgdGhlIGV2ZW50XG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gZnVuY3Rpb24gdG8gcnVuIHdoZW4gZXZlbnQgaXMgY2FsbGVkXG5cdCAqIEBwYXJhbSBjb250ZXh0IC0gb3B0aW9uYWw6IHZhbHVlIG9mIFwidGhpc1wiIGluIHRoZSBmdW5jdGlvblxuXHQgKiBAZXhhbXBsZVxuXHQgKiBJQk1DaGF0LnN1YnNjcmliZSgndGhlLWVuZC1vZi10aGUtd29ybGQnLCBmdW5jdGlvbihtZXNzYWdlKSB7XG5cdCAqICAgY29uc29sZS5sb2cobWVzc3NhZ2UpO1xuXHQgKiB9KTtcblx0ICovXG5cdHN1YnNjcmliZTogYm9vdHN0cmFwLnN1YnNjcmliZSxcblx0LyoqXG5cdCAqIFB1Ymxpc2ggYW4gSUJNQ2hhdCBldmVudC5cblx0ICogQGZ1bmN0aW9uIHB1Ymxpc2hcblx0ICogQG1lbWJlcm9mIElCTUNoYXRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtIEEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgbmFtZSBvZiB0aGUgZXZlbnQgZGF0YVxuXHQgKiBAcGFyYW0gZGF0YSAtIERhdGEgdG8gcGFzcyB0byB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gb2YgYW55IHN1YnNjcmliZWQgZnVuY3Rpb25zLiBBY2NlcHRzIGFueSBkYXRhIHR5cGUuXG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQucHVibGlzaCgndGhlLWVuZC1vZi10aGUtd29ybGQnLCAncGFuaWMhJyk7XG5cdCAqL1xuXHRwdWJsaXNoOiBib290c3RyYXAucHVibGlzaCxcblxuXHQvKipcblx0ICogQG5hbWVzcGFjZSBwcm9maWxlXG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqL1xuXHRwcm9maWxlOiB7XG5cdFx0LyoqXG5cdFx0KiBHZXQgYW4gaXRlbSBmcm9tIHRoZSB1c2VyIHByb2ZpbGUgYmFzZWQgb24ga2V5LlxuXHRcdCogQG1lbWJlcm9mIElCTUNoYXQucHJvZmlsZVxuXHRcdCogQGZ1bmN0aW9uIGdldFxuXHRcdCogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBuYW1lZCBrZXkgb2YgdGhlIHZhbHVlIHlvdSBhcmUgYWNjZXNzaW5nLlxuXHRcdCogQGV4YW1wbGVcblx0XHQqIElCTUNoYXQucHJvZmlsZS5nZXQoJ2ZpcnN0X25hbWUnKTtcblx0XHQqIEByZXR1cm5zIHtBbnl9IFJldHVybnM6IHRoZSB2YWx1ZSBvZiB0aGUga2V5IGluIHRoZSBwcm9maWxlIG1hcC5cblx0XHQqL1xuXHRcdGdldDogYm9vdHN0cmFwLnByb2ZpbGUuZ2V0LFxuXHRcdC8qKlxuXHRcdCogU2V0IGFuIGl0ZW0gZnJvbSB0aGUgdXNlciBwcm9maWxlIGJhc2VkIG9uIGtleS5cblx0XHQqIEBtZW1iZXJvZiBJQk1DaGF0LnByb2ZpbGVcblx0XHQqIEBmdW5jdGlvbiBzZXRcblx0XHQqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUgbmFtZWQga2V5IG9mIHRoZSB2YWx1ZSB5b3UgYXJlIHNldHRpbmcuXG5cdFx0KiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBUaGUgdmFsdWUgeW91IGFyZSBzZXR0aW5nLlxuXHRcdCogQHJldHVybnMge09iamVjdH0gUmV0dXJuczogQW4gaW5zdGFuY2Ugb2YgcHJvZmlsZSBmb3IgY2hhaW5pbmcuXG5cdFx0KiBAZXhhbXBsZVxuXHRcdCogSUJNQ2hhdC5wcm9maWxlLnNldCgnZmlyc3RfbmFtZScsICdqb2huJyk7XG5cdFx0Ki9cblx0XHRzZXQ6IGJvb3RzdHJhcC5wcm9maWxlLnNldCxcblx0XHQvKipcblx0XHQqIFNlZSBpZiBhbiBpdGVtIGZyb20gdGhlIHVzZXIgcHJvZmlsZSBleGlzdHMgYmFzZWQgb24ga2V5LlxuXHRcdCogQG1lbWJlcm9mIElCTUNoYXQucHJvZmlsZVxuXHRcdCogQGZ1bmN0aW9uIGhhc1xuXHRcdCogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBuYW1lZCBrZXkgb2YgdGhlIHZhbHVlIHlvdSBhcmUgY2hlY2tpbmcgdGhlIGV4aXN0YW5jZSBvZi5cblx0XHQqIEBleGFtcGxlXG5cdFx0KiBJQk1DaGF0LnByb2ZpbGUuaGFzKCdmaXJzdF9uYW1lJyk7XG5cdFx0KiBAcmV0dXJucyB7Qm9vbGVhbn0gUmV0dXJuczogQm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRoZSBrZXkgZXhpc3RzLlxuXHRcdCovXG5cdFx0aGFzOiBib290c3RyYXAucHJvZmlsZS5oYXMsXG5cdFx0LyoqXG5cdFx0KiBDbGVhciB0aGUgZW50aXJlIHVzZXIgcHJvZmlsZS5cblx0XHQqIEBtZW1iZXJvZiBJQk1DaGF0LnByb2ZpbGVcblx0XHQqIEBmdW5jdGlvbiBjbGVhclxuXHRcdCogQHJldHVybnMge09iamVjdH0gUmV0dXJuczogQW4gaW5zdGFuY2Ugb2YgcHJvZmlsZSBmb3IgY2hhaW5pbmcuXG5cdFx0KiBAZXhhbXBsZVxuXHRcdCogSUJNQ2hhdC5wcm9maWxlLmNsZWFyKCk7XG5cdFx0Ki9cblx0XHRjbGVhcjogYm9vdHN0cmFwLnByb2ZpbGUuY2xlYXIsXG5cdFx0LyoqXG5cdFx0KiBEZWxldGUgYW4gaXRlbSBmcm9tIHRoZSB1c2VyIHByb2ZpbGUgYmFzZWQgb24ga2V5LlxuXHRcdCogQG1lbWJlcm9mIElCTUNoYXQucHJvZmlsZVxuXHRcdCogQGZ1bmN0aW9uIGRlbGV0ZVxuXHRcdCogQHJldHVybnMge09iamVjdH0gUmV0dXJuczogQW4gaW5zdGFuY2Ugb2YgcHJvZmlsZSBmb3IgY2hhaW5pbmcuXG5cdFx0KiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIG5hbWVkIGtleSBvZiB0aGUgdmFsdWUgeW91IGFyZSBkZWxldGluZy5cblx0XHQqIEBleGFtcGxlXG5cdFx0KiBJQk1DaGF0LnByb2ZpbGUuZGVsZXRlKCdmaXJzdF9uYW1lJyk7XG5cdFx0Ki9cblx0XHRkZWxldGU6IGJvb3RzdHJhcC5wcm9maWxlLmRlbGV0ZSxcblx0XHQvKipcblx0XHQqIEl0ZXJhdGUgb3ZlciB0aGUgcHJvZmlsZS5cblx0XHQqIEBtZW1iZXJvZiBJQk1DaGF0LnByb2ZpbGVcblx0XHQqIEBmdW5jdGlvbiBmb3JFYWNoXG5cdFx0KiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIFRoZSBmdW5jdGlvbiB5b3UgYXJlIGNhbGxpbmcgb24gZWFjaCBpdGVtIGluIHRoZSBwcm9maWxlIG9iamVjdC4gVGhpcyBmdW5jdGlvbiBpcyBwYXNzZWQga2V5IGFzIHRoZSBmaXJzdCBhcmd1bWVudCBhbmQgdmFsdWUgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cblx0XHQqIEBwYXJhbSB7T2JqZWN0fSB0aGlzIC0gKG9wdGlvbmFsKSBUaGUgY29udGV4dCB5b3Ugd2lzaCB0byBjYWxsIHRoZSBjYWxsYmFjayBpbi5cblx0XHQqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnM6IEFuIGluc3RhbmNlIG9mIHByb2ZpbGUgZm9yIGNoYWluaW5nLlxuXHRcdCogQGV4YW1wbGVcblx0XHQqIElCTUNoYXQucHJvZmlsZS5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcblx0XHQqICAgY29uc29sZS5sb2coa2V5LCB2YWx1ZSk7XG5cdFx0KiB9KTtcblx0XHQqL1xuXHRcdGZvckVhY2g6IGJvb3RzdHJhcC5wcm9maWxlLmZvckVhY2hcblx0fSxcblxuXHQvKipcblx0ICogQGlnbm9yZVxuXHQgKi9cblx0Y3VycmVudFN1YnNjcmlwdGlvbnM6IGJvb3RzdHJhcC5jdXJyZW50U3Vic2NyaXB0aW9ucyxcblx0LyoqXG5cdCAqIEBpZ25vcmVcblx0ICovXG5cdGRlYnVnOiBib290c3RyYXAuZGVidWdcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL3Jhdy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi9ub2RlX21vZHVsZXMvcmF3LWxvYWRlci9pbmRleC5qcyEuL3N0eWxlcy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL3Jhdy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N0eWxlcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyoqXFxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxcbipcXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcXFwiTGljZW5zZVxcXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcXG4qXFxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcXG4qXFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXFxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcXFwiQVMgSVNcXFwiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3NcXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcXG4qIHRoZSBMaWNlbnNlLlxcbiovXFxuXFxuLklCTUNoYXQtb3V0ZXItY29udGFpbmVyIHtcXG5cXHRtYXgtd2lkdGg6IDc2OHB4O1xcbiAgbWluLXdpZHRoOiAyODhweDtcXG4gIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcXG4gIGJvcmRlcjogbm9uZTtcXG5cXHRtaW4taGVpZ2h0OjIzMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRwYWRkaW5nOjAuNWVtO1xcblxcdHBvc2l0aW9uOnJlbGF0aXZlO1xcblxcdGRpc3BsYXk6dGFibGU7XFxuXFx0d2lkdGg6MTAwJTtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG5cXG4vKiBBZ2VudCBDb21wb25lbnQgKi9cXG5cXG4uSUJNQ2hhdC1pbm5lci1jb250YWluZXIge1xcblxcdGRpc3BsYXk6dGFibGUtY2VsbDtcXG5cXHRoZWlnaHQ6MTAwJTtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbn1cXG5cXG4vKiBDaGF0IENvbXBvbmVudCAqL1xcblxcbi5JQk1DaGF0LWNoYXQtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OnRhYmxlLXJvdztcXG5cXHRoZWlnaHQ6MTAwJTtcXG59XFxuXFxuLyogTWVzc2FnZXMgQ29tcG9uZW50ICovXFxuXFxuLklCTUNoYXQtbWVzc2FnZXMge1xcblxcdG92ZXJmbG93LXk6IGF1dG87XFxuXFx0b3ZlcmZsb3cteDogaGlkZGVuO1xcblxcdGhlaWdodDphdXRvO1xcbn1cXG5cXG4uSUJNQ2hhdC1tZXNzYWdlcyA+IGRpdiB7XFxuXFx0b3BhY2l0eTowLjg7XFxufVxcblxcbi5JQk1DaGF0LW1lc3NhZ2VzID4gZGl2IC5JQk1DaGF0LXdhdHNvbi1sYXlvdXQge1xcblxcdG9wYWNpdHk6MC44O1xcbn1cXG5cXG4uSUJNQ2hhdC1tZXNzYWdlcyA+IGRpdjpsYXN0LWNoaWxkIHtcXG5cXHRvcGFjaXR5OjE7XFxufVxcblxcbi5JQk1DaGF0LW1lc3NhZ2VzID4gZGl2Omxhc3QtY2hpbGQgLklCTUNoYXQtd2F0c29uLWxheW91dCB7XFxuXFx0b3BhY2l0eToxO1xcbn1cXG5cXG4uSUJNQ2hhdC1tZXNzYWdlcyBsYWJlbCB7XFxuXFx0ZGlzcGxheTpibG9jaztcXG5cXHRmb250LXdlaWdodDpib2xkO1xcblxcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcblxcdHBhZGRpbmctYm90dG9tOjAuMjVlbTtcXG59XFxuXFxuLklCTUNoYXQtbWVzc2FnZXMgaW5wdXQge1xcblxcdGJvcmRlci1yYWRpdXM6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdHBhZGRpbmc6MC4yNWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1tZXNzYWdlcyBidXR0b24ge1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcXG5cXHRvdmVyZmxvdzogdmlzaWJsZTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiBmb3IgaW5wdXQgKi9cXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBmb3IgYnV0dG9uICovXFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMmVtO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRsaW5lLWhlaWdodDogMi41ZW07XFxuXFx0bWFyZ2luOjA7XFxufVxcblxcbi5JQk1DaGF0LW1lc3NhZ2VzIGJ1dHRvbltkaXNhYmxlZD1cXFwidHJ1ZVxcXCJdIHtcXG5cXHRjdXJzb3I6IGRlZmF1bHQ7XFxuICBvcGFjaXR5Oi44O1xcbn1cXG5cXG4uSUJNQ2hhdC1tZXNzYWdlcyBidXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xcblxcdGJvcmRlcjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiBXYXRzb25NZXNzYWdlIENvbXBvbmVudCAqL1xcblxcbi5JQk1DaGF0LXdhdHNvbi1tZXNzYWdlLWNvbnRhaW5lciB7XFxuXFx0bWFyZ2luOiAxZW0gMCAxZW0gMDtcXG59XFxuXFxuLklCTUNoYXQtd2F0c29uLW1lc3NhZ2Uge1xcblxcdG1hcmdpbi1yaWdodDoyZW07XFxuXFx0cGFkZGluZzogMC4xZW07XFxuXFx0cGFkZGluZy1sZWZ0OiAxZW07XFxufVxcblxcbi5JQk1DaGF0LXdhdHNvbi1sYXlvdXQge1xcblxcdG1hcmdpbjogMCAxZW0gMCAxZW07XFxufVxcblxcbi8qIFVzZXJNZXNzYWdlIENvbXBvbmVudCAqL1xcblxcbi5JQk1DaGF0LXVzZXItbWVzc2FnZS1jb250YWluZXIge1xcbiAgbWFyZ2luOiAxZW0gMCAxZW0gMmVtO1xcbn1cXG5cXG4uSUJNQ2hhdC11c2VyLW1lc3NhZ2Uge1xcbiAgcGFkZGluZzoxZW07XFxuXFx0bWFyZ2luOjAgMWVtIDAgMDtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVlbTtcXG59XFxuXFxuLyogSW5wdXQgQ29tcG9uZW50ICovXFxuXFxuLklCTUNoYXQtaW5wdXQtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OnRhYmxlLXJvdztcXG5cXHRoZWlnaHQ6NzVweDtcXG59XFxuXFxuLklCTUNoYXQtaW5wdXQtZm9ybSB7XFxuXFx0ZGlzcGxheTp0YWJsZS1jZWxsO1xcblxcdHBvc2l0aW9uOnJlbGF0aXZlO1xcblxcdHBhZGRpbmc6MjRweCAyNHB4IDAgMjRweDtcXG59XFxuXFxuLklCTUNoYXQtY2hhdC10ZXh0Ym94IHtcXG4gIGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZToxZW07XFxuICBtYXJnaW46MCAwIDEuNjI1ZW0gMDtcXG4gIHBhZGRpbmc6MCAwIDNweCAwO1xcbiAgd2lkdGg6MTAwJTtcXG59XFxuXFxuLklCTUNoYXQtY2hhdC10ZXh0Ym94W2Rpc2FibGVkPSdkaXNhYmxlZCddIHtcXG5cXHRvcGFjaXR5OjAuNTtcXG59XFxuXFxuLklCTUNoYXQtaW5wdXQtZm9ybSA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcblxcdG9wYWNpdHk6MTtcXG59XFxuXFxuLklCTUNoYXQtY2hhdC10ZXh0Ym94OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOjAgMCAycHggMDtcXG59XFxuXFxuLyogU3Bpbm5lciAqL1xcbi5JQk1DaGF0LWlucHV0LWxvYWRpbmcge1xcblxcdHotaW5kZXg6IDI7XFxuXFx0cG9zaXRpb246YWJzb2x1dGU7XFxuXFx0cmlnaHQ6IDE2cHg7XFxuXFx0dG9wOiAxNXB4O1xcblxcdGhlaWdodDozMnB4O1xcblxcdHdpZHRoOjMycHg7XFxufVxcblxcbi5JQk1DaGF0LWlibS1zcGlubmVyLXN0YXJ0IHtcXG5cXHRvcGFjaXR5OjA7XFxufVxcblxcbi5JQk1DaGF0LWlibS1zcGlubmVyIHtcXG5cXHRmaWxsOiB0cmFuc3BhcmVudDtcXG5cXHRzdHJva2Utd2lkdGg6IDM7XFxuXFx0c3Ryb2tlLWxpbmVjYXA6IFxcXCJidXR0XFxcIjtcXG5cXHRzdHJva2UtZGFzaGFycmF5OiAxO1xcblxcdHN0cm9rZS1kYXNob2Zmc2V0OiAxO1xcbn1cXG5cXG4vKiBpbml0aWFsIHJvdGF0aW9uIGFuZCBzdHJva2UgYW5pbWF0aW9uIGFuZCBpbmZpbml0ZSByb3RhdGlvbiovXFxuLklCTUNoYXQtaW5pdC1zcGluIHtcXG5cXHRhbmltYXRpb246IGluaXQtcm90YXRlIDE1MG1zIGxpbmVhciBmb3J3YXJkcywgcm90YXRlLWxvb3AgMjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLklCTUNoYXQtaW5pdC1zcGluIHN2ZyBjaXJjbGUge1xcblxcdGFuaW1hdGlvbjogaW5pdC1zdHJva2UgMTAwMG1zIGxpbmVhcjtcXG59XFxuXFxuLklCTUNoYXQtZW5kLXNwaW4gc3ZnIGNpcmNsZSB7XFxuXFx0ZGlzcGxheTpub25lO1xcbn1cXG5cXG4vKiBpbml0aWFsIHJvdGF0aW9uICovXFxuXFxuQGtleWZyYW1lcyBpbml0LXJvdGF0ZSB7XFxuXFx0MCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcblxcdH1cXG5cXHQxMDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcblxcdH1cXG59XFxuXFxuLyogbG9vcGluZyByb3RhdGlvbiAqL1xcbkBrZXlmcmFtZXMgcm90YXRlLWxvb3Age1xcblxcdDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG5cXHR9XFxuXFx0MTAwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG5cXHR9XFxufVxcblxcbi8qIGluaXRpYWwgc3Ryb2tlIGFuaW1hdGlvbiAqL1xcblxcbkBrZXlmcmFtZXMgaW5pdC1zdHJva2Uge1xcblxcdDAlIHtcXG5cXHRcXHRvcGFjaXR5OiAwO1xcblxcdH1cXG5cXHQxMDAlIHtcXG5cXHRcXHRvcGFjaXR5OiAxO1xcblxcdH1cXG59XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYXctbG9hZGVyIS4vc3JjL3N0eWxlcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBldmVudEhhbmRsZXJzID0gcmVxdWlyZSgnLi9ldmVudEhhbmRsZXJzL2luZGV4LmpzJyk7XG52YXIgbGF5b3V0cyA9IHJlcXVpcmUoJy4vbGF5b3V0cycpO1xudmFyIGV2ZW50cyA9IHJlcXVpcmUoJy4vZXZlbnRzJyk7XG52YXIgQm90U0RLID0gcmVxdWlyZSgnQHdhdHNvbi12aXJ0dWFsLWFnZW50L2NsaWVudC1zZGsvbGliL3dlYicpO1xudmFyIHN0YXRlID0gcmVxdWlyZSgnLi9zdGF0ZScpO1xudmFyIHByb2ZpbGUgPSByZXF1aXJlKCcuL3Byb2ZpbGUnKTtcbnZhciBQcm9taXNlID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ2xvZGFzaC9hc3NpZ24nKTtcbnZhciBkZWZhdWx0U3R5bGVzID0gcmVxdWlyZSgnLi9zdHlsZXMnKTtcblxudmFyIGxheW91dEluaXQgPSB7fTtcbnZhciByZWdpc3RlcmVkTGF5b3V0cyA9IFtdO1xuXG5mdW5jdGlvbiByZWdpc3RlckV2ZW50cyhwbGF5YmFjaykge1xuXHRldmVudHMuc3Vic2NyaWJlKCdzdGFydCcsIGV2ZW50SGFuZGxlcnMuc3RhcnQpO1xuXHRldmVudHMuc3Vic2NyaWJlKCdyZXNpemUnLCBldmVudEhhbmRsZXJzLnJlc2l6ZSk7XG5cdGV2ZW50cy5zdWJzY3JpYmUoJ2Vycm9yJywgZXZlbnRIYW5kbGVycy5lcnJvcik7XG5cdGV2ZW50cy5zdWJzY3JpYmUoJ2Rpc2FibGUtaW5wdXQnLCBldmVudEhhbmRsZXJzLmlucHV0LmRpc2FibGVJbnB1dCk7XG5cdGV2ZW50cy5zdWJzY3JpYmUoJ2VuYWJsZS1sb2FkaW5nJywgZXZlbnRIYW5kbGVycy5pbnB1dC5lbmFibGVMb2FkaW5nSW5wdXQpO1xuXHRldmVudHMuc3Vic2NyaWJlKCdkaXNhYmxlLWxvYWRpbmcnLCBldmVudEhhbmRsZXJzLmlucHV0LmRpc2FibGVMb2FkaW5nSW5wdXQpO1xuXHRldmVudHMuc3Vic2NyaWJlKCdzY3JvbGwtdG8tYm90dG9tJywgZXZlbnRIYW5kbGVycy5zY3JvbGxUb0JvdHRvbSk7XG5cdGV2ZW50cy5zdWJzY3JpYmUoJ3JlY2VpdmUnLCBldmVudEhhbmRsZXJzLnJlY2VpdmUpO1xuXHRpZiAocGxheWJhY2sgPT09IHRydWUpIHtcblx0XHRldmVudHMuc3Vic2NyaWJlKCdzZW5kJywgZXZlbnRIYW5kbGVycy5zZW5kTW9jayk7XG5cdH0gZWxzZSB7XG5cdFx0ZXZlbnRzLnN1YnNjcmliZSgnc2VuZCcsIGV2ZW50SGFuZGxlcnMuc2VuZCk7XG5cdFx0ZXZlbnRzLnN1YnNjcmliZSgnc2VuZC1pbnB1dC1tZXNzYWdlJywgZXZlbnRIYW5kbGVycy5zZW5kSW5wdXRNZXNzYWdlKTtcblx0XHRldmVudHMuc3Vic2NyaWJlKCdlbmFibGUtaW5wdXQnLCBldmVudEhhbmRsZXJzLmlucHV0LmVuYWJsZUlucHV0KTtcblx0XHRldmVudHMuc3Vic2NyaWJlKCdmb2N1cy1pbnB1dCcsIGV2ZW50SGFuZGxlcnMuaW5wdXQuZm9jdXNJbnB1dCk7XG5cdFx0ZXZlbnRzLnN1YnNjcmliZSgnc2VuZE1vY2snLCBldmVudEhhbmRsZXJzLnNlbmRNb2NrKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZWdpc3RlckxheW91dHMoKSB7XG5cdHJlZ2lzdGVyTGF5b3V0KCdzaG93LWxvY2F0aW9ucycsIGxheW91dHMuc2hvd0xvY2F0aW9ucy5pbml0LCB0cnVlKTtcblx0cmVnaXN0ZXJMYXlvdXQoJ2Nob29zZS1sb2NhdGlvbi10eXBlJywgbGF5b3V0cy5jaG9vc2VMb2NhdGlvblR5cGUuaW5pdCwgdHJ1ZSk7XG5cdHJlZ2lzdGVyTGF5b3V0KCdyZXF1ZXN0LWdlb2xvY2F0aW9uLWxhdGxvbmcnLCBsYXlvdXRzLnJlcXVlc3RHZW9sb2NhdGlvbkxhdGxvbmcuaW5pdCwgdHJ1ZSk7XG5cdHJlZ2lzdGVyTGF5b3V0KCdjaG9vc2UnLCBsYXlvdXRzLmNob29zZS5pbml0LCB0cnVlKTtcblx0cmVnaXN0ZXJMYXlvdXQoJ2Zvcm0nLCBsYXlvdXRzLmZvcm0uaW5pdCwgdHJ1ZSk7XG5cdHJlZ2lzdGVyTGF5b3V0KCdjYy12YWxpZGF0b3InLCBsYXlvdXRzLmNyZWRpdENhcmQuaW5pdCwgdHJ1ZSk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0ZXJlZExheW91dHMubGVuZ3RoOyBpKyspXG5cdFx0bGF5b3V0SW5pdFtyZWdpc3RlcmVkTGF5b3V0c1tpXV0oKTtcbn1cblxuZnVuY3Rpb24gaW5pdChjb25maWcpIHtcblx0dmFyIHJvb3QgPSAodHlwZW9mIGNvbmZpZy5lbCA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uZmlnLmVsKSA6IGNvbmZpZy5lbDtcblx0dmFyIFNES2NvbmZpZyA9IHt9O1xuXHRpZiAoY29uZmlnLmJhc2VVUkwpXG5cdFx0U0RLY29uZmlnLmJhc2VVUkwgPSBjb25maWcuYmFzZVVSTDtcblx0aWYgKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpXG5cdFx0U0RLY29uZmlnLndpdGhDcmVkZW50aWFscyA9IGNvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG5cdGlmIChjb25maWcuWElCTUNsaWVudElEKVxuXHRcdFNES2NvbmZpZy5YSUJNQ2xpZW50SUQgPSBjb25maWcuWElCTUNsaWVudElEO1xuXHRpZiAoY29uZmlnLlhJQk1DbGllbnRTZWNyZXQpXG5cdFx0U0RLY29uZmlnLlhJQk1DbGllbnRTZWNyZXQgPSBjb25maWcuWElCTUNsaWVudFNlY3JldDtcblx0aWYgKGNvbmZpZy51c2VySUQpXG5cdFx0U0RLY29uZmlnLnVzZXJJRCA9IGNvbmZpZy51c2VySUQ7XG5cdFx0Lypcblx0Ly8gVE9ETzogLCBhbGxvdyBlbnRlcmluZyBpbiBvbGQgY2hhdElEXG5cdGNvbnN0IHNlc3Npb25DaGF0SUQgPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnSUJNQ2hhdENoYXRJRCcpIHx8IG51bGw7XG5cdGlmIChjaGF0SUQgfHwgc2Vzc2lvbkNoYXRJRClcblx0XHRjb25maWcuY2hhdElEID0gKGNoYXRJRCkgPyBjaGF0SUQgOiBzZXNzaW9uQ2hhdElEO1xuXHQqL1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHRcdGlmIChjdXJyZW50LmFjdGl2ZSA9PT0gdHJ1ZSkge1xuXHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAocm9vdCkge1xuXHRcdFx0aWYgKGNvbmZpZy5wbGF5YmFjayA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRyZWdpc3RlckV2ZW50cyh0cnVlKTtcblx0XHRcdFx0cmVnaXN0ZXJMYXlvdXRzKCk7XG5cdFx0XHRcdGV2ZW50cy5wdWJsaXNoKCdzdGFydCcsIHtcblx0XHRcdFx0XHRhY3RpdmU6IHRydWUsXG5cdFx0XHRcdFx0cm9vdDogcm9vdCxcblx0XHRcdFx0XHRtYXBzU2VydmVyOiBwcm9jZXNzLmVudi5NQVBTX1NFUlZFUiB8fCAnaHR0cHM6Ly9kZDEtaS1zZXJ2ZS1tYXBzLm15Ymx1ZW1peC5uZXQvJyxcblx0XHRcdFx0XHRzdHlsZXM6IGFzc2lnbih7fSwgZGVmYXVsdFN0eWxlcywgY29uZmlnLnN0eWxlcyksXG5cdFx0XHRcdFx0b3JpZ2luYWxDb250ZW50OiByb290LmlubmVySFRNTCxcblx0XHRcdFx0XHRjaGF0SWQ6ICc0MicsXG5cdFx0XHRcdFx0cGxheWJhY2s6IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdH0gZWxzZSBpZiAoY29uZmlnLmJvdElEKSB7XG5cdFx0XHRcdEJvdFNES1xuXHRcdFx0XHRcdC5jb25maWd1cmUoIFNES2NvbmZpZyApXG5cdFx0XHRcdFx0LnN0YXJ0KCBjb25maWcuYm90SUQgKVxuXHRcdFx0XHRcdC50aGVuKCBmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0XHRcdHZhciBjaGF0SUQgPSByZXMuY2hhdElEO1xuXHRcdFx0XHRcdFx0d2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ0lCTUNoYXRDaGF0SUQnLCBjaGF0SUQpO1xuXHRcdFx0XHRcdFx0cmVnaXN0ZXJMYXlvdXRzKCk7XG5cdFx0XHRcdFx0XHRyZWdpc3RlckV2ZW50cygpO1xuXHRcdFx0XHRcdFx0ZXZlbnRzLnB1Ymxpc2goJ3N0YXJ0Jywge1xuXHRcdFx0XHRcdFx0XHRhY3RpdmU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdHJvb3Q6IHJvb3QsXG5cdFx0XHRcdFx0XHRcdG1hcHNTZXJ2ZXI6IHByb2Nlc3MuZW52Lk1BUFNfU0VSVkVSIHx8ICdodHRwczovL2RkMS1pLXNlcnZlLW1hcHMubXlibHVlbWl4Lm5ldC8nLFxuXHRcdFx0XHRcdFx0XHRib3RJRDogY29uZmlnLmJvdElELFxuXHRcdFx0XHRcdFx0XHRjaGF0SUQ6IGNoYXRJRCxcblx0XHRcdFx0XHRcdFx0c3R5bGVzOiBhc3NpZ24oe30sIGRlZmF1bHRTdHlsZXMsIGNvbmZpZy5zdHlsZXMpLFxuXHRcdFx0XHRcdFx0XHRiYXNlVVJMOiBjb25maWcuYmFzZVVSTCxcblx0XHRcdFx0XHRcdFx0b3JpZ2luYWxDb250ZW50OiByb290LmlubmVySFRNTFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRldmVudHMucHVibGlzaCgncmVjZWl2ZScsIHJlcyk7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdFx0fSlbJ2NhdGNoJ10oIGZ1bmN0aW9uKGVycikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcignSUJNQ2hhdDonLCBlcnIgKTtcblx0XHRcdFx0XHRcdHJlamVjdChlcnIpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVqZWN0KHtcblx0XHRcdFx0XHRlcnJvcjogJ0JvdElEIGlzIHJlcXVpcmVkISdcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlamVjdCh7XG5cdFx0XHRcdGVycm9yOiAnRWxlbWVudCBmb3IgY2hhdCBkb2VzIG5vdCBleGlzdCEnXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlckxheW91dChsYXlvdXQsIGluaXQsIGRlZmF1bHRTZXR1cCkge1xuXHRpZiAocmVnaXN0ZXJlZExheW91dHMuaW5kZXhPZihsYXlvdXQpID09PSAtMSB8fCAhZGVmYXVsdFNldHVwKSB7XG5cdFx0cmVnaXN0ZXJlZExheW91dHMucHVzaChsYXlvdXQpO1xuXHRcdGxheW91dEluaXRbbGF5b3V0XSA9IGluaXQ7XG5cdH1cbn1cblxuZnVuY3Rpb24gc2VuZChtZXNzYWdlKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0aWYgKGN1cnJlbnQuYWN0aXZlKSB7XG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0XHR0ZXh0OiBtZXNzYWdlXG5cdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVjZWl2ZShtZXNzYWdlKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0aWYgKGN1cnJlbnQuYWN0aXZlKVxuXHRcdGV2ZW50cy5wdWJsaXNoKCdyZWNlaXZlJywgbWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIHNlbmRNb2NrKG1lc3NhZ2UpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHRpZiAoY3VycmVudC5hY3RpdmUpIHtcblx0XHRldmVudHMucHVibGlzaCgnc2VuZC1tb2NrJywge1xuXHRcdFx0dGV4dDogbWVzc2FnZVxuXHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHNlbmRTaWxlbnRseShtZXNzYWdlKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0aWYgKGN1cnJlbnQuYWN0aXZlKSB7XG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0XHR0ZXh0OiBtZXNzYWdlLFxuXHRcdFx0c2lsZW50OiB0cnVlXG5cdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZm9jdXNJbnB1dCgpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHRpZiAoY3VycmVudC5hY3RpdmUpXG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ2ZvY3VzLWlucHV0Jyk7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVJbnB1dCgpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHRpZiAoY3VycmVudC5hY3RpdmUpXG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ2Rpc2FibGUtaW5wdXQnKTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlSW5wdXQoKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0aWYgKGN1cnJlbnQuYWN0aXZlKVxuXHRcdGV2ZW50cy5wdWJsaXNoKCdlbmFibGUtaW5wdXQnKTtcbn1cblxuZnVuY3Rpb24gZGVidWcoKSB7XG5cdGlmIChwcm9jZXNzLmVudi5ERUJVRykge1xuXHRcdHN0YXRlLnNldFN0YXRlKHtcblx0XHRcdERFQlVHOiB0cnVlXG5cdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZGVzdHJveSgpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0XHRpZiAoY3VycmVudC5yb290KSB7XG5cdFx0XHRldmVudHMucHVibGlzaCgnZGVzdHJveScpO1xuXHRcdFx0ZXZlbnRzLmRlc3Ryb3koKTsgLy9yZW1vdmUgYWxsIGV2ZW50c1xuXHRcdFx0Y3VycmVudC5yb290LmlubmVySFRNTCA9IGN1cnJlbnQub3JpZ2luYWxDb250ZW50OyAvL3Jlc3RvcmUgb3JpZ2luYWwgY29udGVudCB0byBkaXZcblx0XHRcdHN0YXRlLmRlc3Ryb3lTdGF0ZSgpO1xuXHRcdFx0cmVzb2x2ZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZWplY3QoJ0lCTUNoYXQgaGFzIG5vIGluc3RhbmNlIHRvIGRlc3Ryb3kuJyk7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gcmVzdGFydCgpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0XHRkZXN0cm95KCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdGluaXQoeyBlbDogY3VycmVudC5yb290LCBib3RJRDogY3VycmVudC5ib3RJRCwgYmFzZVVSTDogY3VycmVudC5iYXNlVVJMIH0pLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdH0pWydjYXRjaCddKGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0cmVqZWN0KGUpO1xuXHRcdFx0fSk7XG5cdFx0fSlbJ2NhdGNoJ10oZnVuY3Rpb24oZSkge1xuXHRcdFx0cmVqZWN0KGUpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHByb2ZpbGU6IHByb2ZpbGUsXG5cdGluaXQ6IGluaXQsXG5cdHJlZ2lzdGVyTGF5b3V0OiByZWdpc3RlckxheW91dCxcblx0c2VuZDogc2VuZCxcblx0cmVjZWl2ZTogcmVjZWl2ZSxcblx0c2VuZE1vY2s6IHNlbmRNb2NrLFxuXHRzZW5kU2lsZW50bHk6IHNlbmRTaWxlbnRseSxcblx0Zm9jdXNJbnB1dDogZm9jdXNJbnB1dCxcblx0ZGlzYWJsZUlucHV0OiBkaXNhYmxlSW5wdXQsXG5cdGVuYWJsZUlucHV0OiBlbmFibGVJbnB1dCxcblx0c3Vic2NyaWJlOiBldmVudHMuc3Vic2NyaWJlLFxuXHRwdWJsaXNoOiBldmVudHMucHVibGlzaCxcblx0ZGVidWc6IGRlYnVnLFxuXHRkZXN0cm95OiBkZXN0cm95LFxuXHRyZXN0YXJ0OiByZXN0YXJ0LFxuXHRjdXJyZW50U3Vic2NyaXB0aW9uczogZXZlbnRzLmN1cnJlbnRTdWJzY3JpcHRpb25zLFxuXHRoYXNTdWJzY3JpcHRpb246IGV2ZW50cy5oYXNTdWJzY3JpcHRpb24sXG5cdGNvbXBsZXRlRXZlbnQ6IGV2ZW50cy5jb21wbGV0ZUV2ZW50XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9ib290c3RyYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGFydCA9IHJlcXVpcmUoJy4vZXZlbnRzL3N0YXJ0Jyk7XG52YXIgcmVzaXplID0gcmVxdWlyZSgnLi9ldmVudHMvcmVzaXplJyk7XG52YXIgcmVjZWl2ZSA9IHJlcXVpcmUoJy4vZXZlbnRzL3JlY2VpdmUnKTtcbnZhciBzZW5kID0gcmVxdWlyZSgnLi9ldmVudHMvc2VuZCcpO1xudmFyIHNlbmRNb2NrID0gcmVxdWlyZSgnLi9ldmVudHMvc2VuZC1tb2NrJyk7XG52YXIgc2VuZElucHV0TWVzc2FnZSA9IHJlcXVpcmUoJy4vZXZlbnRzL3NlbmQtaW5wdXQtbWVzc2FnZScpO1xudmFyIGlucHV0ID0gcmVxdWlyZSgnLi9ldmVudHMvaW5wdXQnKTtcbnZhciBlcnJvciA9IHJlcXVpcmUoJy4vZXZlbnRzL2Vycm9yJyk7XG52YXIgc2Nyb2xsVG9Cb3R0b20gPSByZXF1aXJlKCcuL2V2ZW50cy9zY3JvbGwtdG8tYm90dG9tJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRyZXNpemU6IHJlc2l6ZSxcblx0c3RhcnQ6IHN0YXJ0LFxuXHRzZW5kOiBzZW5kLFxuXHRzZW5kTW9jazogc2VuZE1vY2ssXG5cdHJlY2VpdmU6IHJlY2VpdmUsXG5cdGlucHV0OiBpbnB1dCxcblx0ZXJyb3I6IGVycm9yLFxuXHRzY3JvbGxUb0JvdHRvbTogc2Nyb2xsVG9Cb3R0b20sXG5cdHNlbmRJbnB1dE1lc3NhZ2U6IHNlbmRJbnB1dE1lc3NhZ2Vcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2V2ZW50SGFuZGxlcnMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4uLy4uL3N0YXRlJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xudmFyIGV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2V2ZW50cycpO1xudmFyIHRlbXBsYXRlcyA9IHtcblx0c3RhcnQ6IHJlcXVpcmUoJy4uL3RlbXBsYXRlcy9zdGFydC5odG1sJylcbn07XG5mdW5jdGlvbiBzdGFydChkYXRhKSB7XG5cdHZhciBjdXJyZW50O1xuXHRzdGF0ZS5zZXRTdGF0ZShkYXRhKTtcblx0Y3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdHV0aWxzLmF0dGFjaFN0eWxlcygpO1xuXHRjdXJyZW50LnJvb3QuY2xhc3NOYW1lICs9IFwiIGNoYXRJRC1cIiArIGN1cnJlbnQuY2hhdElEO1xuXHRjdXJyZW50LnJvb3QuaW5uZXJIVE1MID0gdGVtcGxhdGVzLnN0YXJ0O1xuXHR2YXIgZWxlbWVudHMgPSB7XG5cdFx0Y29udGFpbmVyOiBjdXJyZW50LnJvb3QucXVlcnlTZWxlY3RvcignLklCTUNoYXQtY2hhdC1jb250YWluZXInKSxcblx0XHRjaGF0SG9sZGVyOiBjdXJyZW50LnJvb3QucXVlcnlTZWxlY3RvcignLklCTUNoYXQtbWVzc2FnZXMnKSxcblx0XHRpbm5lckNvbnRhaW5lcjogY3VycmVudC5yb290LnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LWlubmVyLWNvbnRhaW5lcicpLFxuXHRcdGlucHV0OiBjdXJyZW50LnJvb3QucXVlcnlTZWxlY3RvcignLklCTUNoYXQtY2hhdC10ZXh0Ym94JyksXG5cdFx0Zm9ybTogY3VycmVudC5yb290LnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LWlucHV0LWZvcm0nKSxcblx0XHRsb2FkZXI6IGN1cnJlbnQucm9vdC5xdWVyeVNlbGVjdG9yKCcuSUJNQ2hhdC1pbnB1dC1sb2FkaW5nJyksXG5cdFx0aW5wdXRIb2xkZXI6IGN1cnJlbnQucm9vdC5xdWVyeVNlbGVjdG9yKCcuSUJNQ2hhdC1pbnB1dC1jb250YWluZXInKVxuXHR9O1xuXG5cdGlmIChjdXJyZW50LnBsYXliYWNrID09PSB0cnVlKVxuXHRcdGVsZW1lbnRzLmlucHV0SG9sZGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudHMuaW5wdXRIb2xkZXIpO1xuXG5cdHN0YXRlLnNldFN0YXRlKGVsZW1lbnRzKTtcblx0ZWxlbWVudHMuZm9ybS5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFwic3VibWl0XCIsXG5cdFx0ZnVuY3Rpb24oZSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH0sXG5cdFx0ZmFsc2Vcblx0KTtcblx0ZWxlbWVudHMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHQna2V5cHJlc3MnLFxuXHRcdGZ1bmN0aW9uKGUpIHtcblx0XHRcdGlmIChlLmtleUNvZGUgPT09IDEzKVxuXHRcdFx0XHRldmVudHMucHVibGlzaCgnc2VuZC1pbnB1dC1tZXNzYWdlJyk7XG5cdFx0fSxcblx0XHRmYWxzZVxuXHQpO1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXRpbHMuZGVib3VuY2UoZnVuY3Rpb24oKSB7XG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ3Jlc2l6ZScpO1xuXHR9LCAxMDAwKSk7XG5cdGV2ZW50cy5wdWJsaXNoKCdyZXNpemUnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFydDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRIYW5kbGVycy9ldmVudHMvc3RhcnQuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGF0ZXMgPSBbXTtcbnZhciBzdGF0ZSA9IHt9O1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ2xvZGFzaC9hc3NpZ24nKTtcblxuZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG5cdHJldHVybiBzdGF0ZTtcbn1cbmZ1bmN0aW9uIGRlc3Ryb3lTdGF0ZSgpIHtcblx0c3RhdGUgPSB7fTtcblx0c2V0U3RhdGUoe30pO1xufVxuXG5mdW5jdGlvbiBzZXRTdGF0ZSh1cGRhdGVkKSB7XG5cdHN0YXRlID0gYXNzaWduKHt9LCBzdGF0ZSwgdXBkYXRlZCk7XG5cdGlmIChzdGF0ZS5ERUJVRykge1xuXHRcdHN0YXRlcy5wdXNoKHN0YXRlKTtcblx0XHRjb25zb2xlLmxvZygnU1RBVEUgSElTVE9SWTogJywgc3RhdGVzKTtcblx0XHRjb25zb2xlLmxvZygnTkVXIFNUQVRFOiAnLCBzdGF0ZSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKCkge1xuXHR2YXIgY3VycmVudCA9IGdldFN0YXRlKCk7XG5cdHJldHVybiBjdXJyZW50LnN0eWxlcztcbn1cblxuZnVuY3Rpb24gZ2V0UHJvZmlsZSgpIHtcblx0dmFyIGN1cnJlbnQgPSBnZXRTdGF0ZSgpO1xuXHRyZXR1cm4gY3VycmVudC5wcm9maWxlIHx8IHt9O1xufVxuXG5mdW5jdGlvbiBzZXRQcm9maWxlKGRhdGEpIHtcblx0c2V0U3RhdGUoe1xuXHRcdHByb2ZpbGU6IGFzc2lnbih7fSwgZ2V0UHJvZmlsZSgpLCBkYXRhKVxuXHR9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPXtcblx0Z2V0U3RhdGU6IGdldFN0YXRlLFxuXHRzZXRTdGF0ZTogc2V0U3RhdGUsXG5cdGRlc3Ryb3lTdGF0ZTogZGVzdHJveVN0YXRlLFxuXHRnZXRQcm9maWxlOiBnZXRQcm9maWxlLFxuXHRzZXRQcm9maWxlOiBzZXRQcm9maWxlLFxuXHRnZXRTdHlsZXM6IGdldFN0eWxlc1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3RhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25WYWx1ZScpLFxuICAgIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAgY3JlYXRlQXNzaWduZXIgPSByZXF1aXJlKCcuL19jcmVhdGVBc3NpZ25lcicpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKiBEZXRlY3QgaWYgcHJvcGVydGllcyBzaGFkb3dpbmcgdGhvc2Ugb24gYE9iamVjdC5wcm90b3R5cGVgIGFyZSBub24tZW51bWVyYWJsZS4gKi9cbnZhciBub25FbnVtU2hhZG93cyA9ICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgJ3ZhbHVlT2YnOiAxIH0sICd2YWx1ZU9mJyk7XG5cbi8qKlxuICogQXNzaWducyBvd24gZW51bWVyYWJsZSBzdHJpbmcga2V5ZWQgcHJvcGVydGllcyBvZiBzb3VyY2Ugb2JqZWN0cyB0byB0aGVcbiAqIGRlc3RpbmF0aW9uIG9iamVjdC4gU291cmNlIG9iamVjdHMgYXJlIGFwcGxpZWQgZnJvbSBsZWZ0IHRvIHJpZ2h0LlxuICogU3Vic2VxdWVudCBzb3VyY2VzIG92ZXJ3cml0ZSBwcm9wZXJ0eSBhc3NpZ25tZW50cyBvZiBwcmV2aW91cyBzb3VyY2VzLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBtdXRhdGVzIGBvYmplY3RgIGFuZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYE9iamVjdC5hc3NpZ25gXShodHRwczovL21kbi5pby9PYmplY3QvYXNzaWduKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMTAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHsuLi5PYmplY3R9IFtzb3VyY2VzXSBUaGUgc291cmNlIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICogQHNlZSBfLmFzc2lnbkluXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqIH1cbiAqXG4gKiBmdW5jdGlvbiBCYXIoKSB7XG4gKiAgIHRoaXMuYyA9IDM7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5iID0gMjtcbiAqIEJhci5wcm90b3R5cGUuZCA9IDQ7XG4gKlxuICogXy5hc3NpZ24oeyAnYSc6IDAgfSwgbmV3IEZvbywgbmV3IEJhcik7XG4gKiAvLyA9PiB7ICdhJzogMSwgJ2MnOiAzIH1cbiAqL1xudmFyIGFzc2lnbiA9IGNyZWF0ZUFzc2lnbmVyKGZ1bmN0aW9uKG9iamVjdCwgc291cmNlKSB7XG4gIGlmIChub25FbnVtU2hhZG93cyB8fCBpc1Byb3RvdHlwZShzb3VyY2UpIHx8IGlzQXJyYXlMaWtlKHNvdXJjZSkpIHtcbiAgICBjb3B5T2JqZWN0KHNvdXJjZSwga2V5cyhzb3VyY2UpLCBvYmplY3QpO1xuICAgIHJldHVybjtcbiAgfVxuICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH1cbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2Fzc2lnbi5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnblZhbHVlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19hc3NpZ25WYWx1ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2VxLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyk7XG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3Qoc291cmNlLCBwcm9wcywgb2JqZWN0LCBjdXN0b21pemVyKSB7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkID8gc291cmNlW2tleV0gOiBuZXdWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5T2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19jb3B5T2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBiYXNlUmVzdCA9IHJlcXVpcmUoJy4vX2Jhc2VSZXN0JyksXG4gICAgaXNJdGVyYXRlZUNhbGwgPSByZXF1aXJlKCcuL19pc0l0ZXJhdGVlQ2FsbCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiBsaWtlIGBfLmFzc2lnbmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFzc2lnbmVyIFRoZSBmdW5jdGlvbiB0byBhc3NpZ24gdmFsdWVzLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYXNzaWduZXIgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFzc2lnbmVyKGFzc2lnbmVyKSB7XG4gIHJldHVybiBiYXNlUmVzdChmdW5jdGlvbihvYmplY3QsIHNvdXJjZXMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gc291cmNlcy5sZW5ndGgsXG4gICAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPiAxID8gc291cmNlc1tsZW5ndGggLSAxXSA6IHVuZGVmaW5lZCxcbiAgICAgICAgZ3VhcmQgPSBsZW5ndGggPiAyID8gc291cmNlc1syXSA6IHVuZGVmaW5lZDtcblxuICAgIGN1c3RvbWl6ZXIgPSAoYXNzaWduZXIubGVuZ3RoID4gMyAmJiB0eXBlb2YgY3VzdG9taXplciA9PSAnZnVuY3Rpb24nKVxuICAgICAgPyAobGVuZ3RoLS0sIGN1c3RvbWl6ZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChndWFyZCAmJiBpc0l0ZXJhdGVlQ2FsbChzb3VyY2VzWzBdLCBzb3VyY2VzWzFdLCBndWFyZCkpIHtcbiAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPCAzID8gdW5kZWZpbmVkIDogY3VzdG9taXplcjtcbiAgICAgIGxlbmd0aCA9IDE7XG4gICAgfVxuICAgIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICB2YXIgc291cmNlID0gc291cmNlc1tpbmRleF07XG4gICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIGFzc2lnbmVyKG9iamVjdCwgc291cmNlLCBpbmRleCwgY3VzdG9taXplcik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUFzc2lnbmVyO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19jcmVhdGVBc3NpZ25lci5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYXBwbHkgPSByZXF1aXJlKCcuL19hcHBseScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucmVzdGAgd2hpY2ggZG9lc24ndCB2YWxpZGF0ZSBvciBjb2VyY2UgYXJndW1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VSZXN0KGZ1bmMsIHN0YXJ0KSB7XG4gIHN0YXJ0ID0gbmF0aXZlTWF4KHN0YXJ0ID09PSB1bmRlZmluZWQgPyAoZnVuYy5sZW5ndGggLSAxKSA6IHN0YXJ0LCAwKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBuYXRpdmVNYXgoYXJncy5sZW5ndGggLSBzdGFydCwgMCksXG4gICAgICAgIGFycmF5ID0gQXJyYXkobGVuZ3RoKTtcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBhcnJheVtpbmRleF0gPSBhcmdzW3N0YXJ0ICsgaW5kZXhdO1xuICAgIH1cbiAgICBpbmRleCA9IC0xO1xuICAgIHZhciBvdGhlckFyZ3MgPSBBcnJheShzdGFydCArIDEpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgc3RhcnQpIHtcbiAgICAgIG90aGVyQXJnc1tpbmRleF0gPSBhcmdzW2luZGV4XTtcbiAgICB9XG4gICAgb3RoZXJBcmdzW3N0YXJ0XSA9IGFycmF5O1xuICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VSZXN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19iYXNlUmVzdC5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEEgZmFzdGVyIGFsdGVybmF0aXZlIHRvIGBGdW5jdGlvbiNhcHBseWAsIHRoaXMgZnVuY3Rpb24gaW52b2tlcyBgZnVuY2BcbiAqIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIGB0aGlzQXJnYCBhbmQgdGhlIGFyZ3VtZW50cyBvZiBgYXJnc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGludm9rZS5cbiAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHtBcnJheX0gYXJncyBUaGUgYXJndW1lbnRzIHRvIGludm9rZSBgZnVuY2Agd2l0aC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXN1bHQgb2YgYGZ1bmNgLlxuICovXG5mdW5jdGlvbiBhcHBseShmdW5jLCB0aGlzQXJnLCBhcmdzKSB7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZyk7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXBwbHk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2FwcGx5LmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSB2YWx1ZSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gaW5kZXggVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBpbmRleCBvciBrZXkgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IG9iamVjdCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIG9iamVjdCBhcmd1bWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0l0ZXJhdGVlQ2FsbCh2YWx1ZSwgaW5kZXgsIG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgaW5kZXg7XG4gIGlmICh0eXBlID09ICdudW1iZXInXG4gICAgICAgID8gKGlzQXJyYXlMaWtlKG9iamVjdCkgJiYgaXNJbmRleChpbmRleCwgb2JqZWN0Lmxlbmd0aCkpXG4gICAgICAgIDogKHR5cGUgPT0gJ3N0cmluZycgJiYgaW5kZXggaW4gb2JqZWN0KVxuICAgICAgKSB7XG4gICAgcmV0dXJuIGVxKG9iamVjdFtpbmRleF0sIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJdGVyYXRlZUNhbGw7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2lzSXRlcmF0ZWVDYWxsLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDgtOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheSBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gaXNPYmplY3QodmFsdWUpID8gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc0Z1bmN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzT2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc0xlbmd0aC5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJlxuICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19pc0luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Byb3RvdHlwZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXMgPSByZXF1aXJlKCcuL19iYXNlS2V5cycpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2tleXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGJhc2VUaW1lcyA9IHJlcXVpcmUoJy4vX2Jhc2VUaW1lcycpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgLy8gU2FmYXJpIDguMSBtYWtlcyBgYXJndW1lbnRzLmNhbGxlZWAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgLy8gU2FmYXJpIDkgbWFrZXMgYGFyZ3VtZW50cy5sZW5ndGhgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIHZhciByZXN1bHQgPSAoaXNBcnJheSh2YWx1ZSkgfHwgaXNBcmd1bWVudHModmFsdWUpKVxuICAgID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKVxuICAgIDogW107XG5cbiAgdmFyIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGgsXG4gICAgICBza2lwSW5kZXhlcyA9ICEhbGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKGtleSA9PSAnbGVuZ3RoJyB8fCBpc0luZGV4KGtleSwgbGVuZ3RoKSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TGlrZUtleXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVGltZXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNBcnJheUxpa2VPYmplY3QgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuICAvLyBTYWZhcmkgOC4xIG1ha2VzIGBhcmd1bWVudHMuY2FsbGVlYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICByZXR1cm4gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICghcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpIHx8IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IGFyZ3NUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzQXJndW1lbnRzLmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2VPYmplY3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaXNBcnJheUxpa2VPYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzQXJyYXkuanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2Jhc2VLZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5cztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fbmF0aXZlS2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19vdmVyQXJnLmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIHN0YXRlID0gcmVxdWlyZSgnLi9zdGF0ZScpO1xuXG5mdW5jdGlvbiBfcmVuZGVyKGVsLCBzdGF0ZSkge1xuXHRlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0lCTUNoYXQtaWJtLXNwaW5uZXIgSUJNQ2hhdC1pbnB1dC1sb2FkaW5nIElCTUNoYXQtJyArIHN0YXRlICsgJy1zcGluJyk7XG59XG5cbnZhciBzcGlubmVyID0ge1xuXHRzaG93OiBmdW5jdGlvbihlbCkge1xuXHRcdF9yZW5kZXIoZWwsICdpbml0Jyk7XG5cdH0sXG5cdGhpZGU6IGZ1bmN0aW9uKGVsKSB7XG5cdFx0X3JlbmRlcihlbCwgJ2VuZCcpO1xuXHR9XG59O1xuXG5mdW5jdGlvbiBfZ2V0U3R5bGVzKCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdHZhciBjb250YWluZXJDbGFzcyA9IFwiLmNoYXRJRC1cIiArIGN1cnJlbnQuY2hhdElEO1xuXHR2YXIgc3R5bGVzID0gY29udGFpbmVyQ2xhc3MgKyBcIiAuSUJNQ2hhdC1kZWZhdWx0LWNvbG9ycyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiArIGN1cnJlbnQuc3R5bGVzLmJhY2tncm91bmQgKyBcIjtcXG4gIGNvbG9yOiBcIiArIGN1cnJlbnQuc3R5bGVzLnRleHQgKyBcIjtcXG59XFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRjb250YWluZXJDbGFzcyArIFwiIC5JQk1DaGF0LXNlY29uZGFyeS1jb2xvcnMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogXCIgKyBjdXJyZW50LnN0eWxlcy5zZWNvbmRhcnlCYWNrZ3JvdW5kICsgXCI7XFxuICBjb2xvcjogXCIgKyBjdXJyZW50LnN0eWxlcy5zZWNvbmRhcnlUZXh0ICsgXCI7XFxufVxcblwiICtcblx0XHRcdFx0XHRcdFx0Y29udGFpbmVyQ2xhc3MgKyBcIiAuSUJNQ2hhdC1hY2NlbnQtY29sb3JzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IFwiICsgY3VycmVudC5zdHlsZXMuYWNjZW50QmFja2dyb3VuZCArIFwiO1xcbiAgY29sb3I6IFwiICsgY3VycmVudC5zdHlsZXMuYWNjZW50VGV4dCArIFwiO1xcbn1cXG5cIiArXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lckNsYXNzICsgXCIgLklCTUNoYXQtaW5wdXQtY29sb3JzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IFwiICsgY3VycmVudC5zdHlsZXMuaW5wdXRCYWNrZ3JvdW5kICsgXCI7XFxuICBjb2xvcjogXCIgKyBjdXJyZW50LnN0eWxlcy5pbnB1dFRleHQgKyBcIjtcXG59XFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRjb250YWluZXJDbGFzcyArIFwiIC5JQk1DaGF0LXdhdHNvbi1tZXNzYWdlLXRoZW1lIHtcXG5cXHRib3JkZXItbGVmdDogM3B4IHNvbGlkIFwiICsgY3VycmVudC5zdHlsZXMuYWNjZW50QmFja2dyb3VuZCArIFwiO1xcbn1cXG5cIiArXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lckNsYXNzICsgXCIgYSxcXG5cIiArXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lckNsYXNzICsgXCIgYTpob3ZlcixcXG5cIiArXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lckNsYXNzICsgXCIgYTp2aXNpdGVkLFxcblwiICtcblx0XHRcdFx0XHRcdFx0Y29udGFpbmVyQ2xhc3MgKyBcIiBhOmFjdGl2ZSB7XFxuXFx0Y29sb3I6IFwiICsgY3VycmVudC5zdHlsZXMubGluayArIFwiO1xcbn1cXG5cIiArXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lckNsYXNzICsgXCIgLklCTUNoYXQtY2hhdC10ZXh0Ym94LXRoZW1lIHtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBcIiArIGN1cnJlbnQuc3R5bGVzLnRleHQgKyBcIjtcXG59XFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRjb250YWluZXJDbGFzcyArIFwiIC5JQk1DaGF0LWNoYXQtdGV4dGJveC10aGVtZTpmb2N1cyB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggXCIgKyBjdXJyZW50LnN0eWxlcy5hY2NlbnRCYWNrZ3JvdW5kICsgXCI7XFxufVxcblwiICtcblx0XHRcdFx0XHRcdFx0Y29udGFpbmVyQ2xhc3MgKyBcIiAuSUJNQ2hhdC1pYm0tc3Bpbm5lciB7XFxuXFx0c3Ryb2tlOiBcIiArIGN1cnJlbnQuc3R5bGVzLmFjY2VudEJhY2tncm91bmQgKyBcIjtcXG59XCI7XG5cdHJldHVybiBzdHlsZXM7XG59XG5cblxuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG5cdHZhciB0aW1lb3V0O1xuXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuXHRcdHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGltZW91dCA9IG51bGw7XG5cdFx0XHRpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0XHR9O1xuXHRcdHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG5cdFx0aWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZShvYmopIHtcblx0Y29uc3Qgc3RyID0gW107XG5cdGZvciAodmFyIHAgaW4gb2JqKSB7XG5cdFx0aWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSlcblx0XHRcdHN0ci5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChwKSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChvYmpbcF0pKTtcblx0fVxuXHRyZXR1cm4gc3RyLmpvaW4oJyYnKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUFsbChzdHIsIGZpbmQsIHJlcGxhY2UpIHtcblx0cmV0dXJuIHN0ci5zcGxpdChmaW5kKS5qb2luKHJlcGxhY2UpO1xufVxuXG5mdW5jdGlvbiBnZXRVVUlEKCkge1xuXHR2YXIgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHRpZiAoIHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB0eXBlb2Ygd2luZG93LnBlcmZvcm1hbmNlLm5vdyA9PT0gJ2Z1bmN0aW9uJyApXG5cdFx0ZCArPSBwZXJmb3JtYW5jZS5ub3coKTtcblx0cmV0dXJuICdJQk1DaGF0LScgKyAoJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbihjKSB7XG5cdFx0dmFyIHIgPSAoZCArIE1hdGgucmFuZG9tKCkqMTYpJTE2IHwgMDtcblx0XHRkID0gTWF0aC5mbG9vcihkLzE2KTtcblx0XHRyZXR1cm4gKCggYyA9PSAneCcgPyByIDogKHImMHgzfDB4OCkpLnRvU3RyaW5nKDE2KSk7XG5cdH0pKTtcbn1cblxuZnVuY3Rpb24gYXR0YWNoU3R5bGVzKCkge1xuXHR2YXIgc3R5bGVzID0gX2dldFN0eWxlcygpO1xuXHR2YXIgY3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblx0Y3NzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdGlmIChjc3Muc3R5bGVTaGVldClcblx0XHRjc3Muc3R5bGVTaGVldC5jc3NUZXh0ID0gc3R5bGVzO1xuXHRlbHNlXG5cdFx0Y3NzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0eWxlcykpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoY3NzKTtcbn1cblxuZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG5cdHZhciB0aGF0Q2xhc3MgPSBcIiBcIiArIGNsYXNzTmFtZSArIFwiIFwiO1xuXHRyZXR1cm4gKCAoXCIgXCIgKyBlbGVtZW50LmNsYXNzTmFtZSArIFwiIFwiKS5yZXBsYWNlKC9bXFxuXFx0XS9nLCBcIiBcIikuaW5kZXhPZih0aGF0Q2xhc3MpID4gLTEgKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGRlYm91bmNlOiBkZWJvdW5jZSxcblx0c2VyaWFsaXplOiBzZXJpYWxpemUsXG5cdHJlcGxhY2VBbGw6IHJlcGxhY2VBbGwsXG5cdGhhc0NsYXNzOiBoYXNDbGFzcyxcblx0Z2V0VVVJRDogZ2V0VVVJRCxcblx0YXR0YWNoU3R5bGVzOiBhdHRhY2hTdHlsZXMsXG5cdHNwaW5uZXI6IHNwaW5uZXJcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3V0aWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIHN0YXRlID0gcmVxdWlyZSgnLi9zdGF0ZScpO1xuXG52YXIgZXZlbnRzID0gW107XG5cbmZ1bmN0aW9uIGNvbXBsZXRlRXZlbnQocmVzcG9uc2UpIHtcblx0c3dpdGNoIChyZXNwb25zZSkge1xuXHRjYXNlIHRydWU6XG5cdFx0cHVibGlzaCgnc2VuZCcsIHtcblx0XHRcdG1lc3NhZ2U6ICdzdWNjZXNzJyxcblx0XHRcdHNpbGVudDogdHJ1ZVxuXHRcdH0pO1xuXHRcdGJyZWFrO1xuXHRjYXNlIGZhbHNlOlxuXHRcdHB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0XHRtZXNzYWdlOiAnZmFpbHVyZScsXG5cdFx0XHRzaWxlbnQ6IHRydWVcblx0XHR9KTtcblx0XHRicmVhaztcblx0ZGVmYXVsdDpcblx0XHRwdWJsaXNoKCdzZW5kJywge1xuXHRcdFx0bWVzc2FnZTogJ2NhbmNlbCcsXG5cdFx0XHRzaWxlbnQ6IHRydWVcblx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBkZXN0cm95KCkge1xuXHRldmVudHMgPSBbXTtcbn1cblxuZnVuY3Rpb24gdW5zdWJzY3JpYmUoZXZlbnQsIGhhbmRsZXIsIGNvbnRleHQpIHtcblx0aWYgKHR5cGVvZiBjb250ZXh0ID09PSB1bmRlZmluZWQpXG5cdFx0Y29udGV4dCA9IGhhbmRsZXI7XG59XG5cbmZ1bmN0aW9uIGN1cnJlbnRTdWJzY3JpcHRpb25zKCkge1xuXHRyZXR1cm4gZXZlbnRzLnNsaWNlKDApO1xufVxuXG5mdW5jdGlvbiBoYXNTdWJzY3JpcHRpb24oYWN0aW9uKSB7XG5cdHZhciBzdWJzY3JpcHRpb25zID0gY3VycmVudFN1YnNjcmlwdGlvbnMoKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdWJzY3JpcHRpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHN1YnNjcmlwdGlvbiA9IHN1YnNjcmlwdGlvbnNbaV07XG5cdFx0aWYgKHN1YnNjcmlwdGlvbiAmJiBzdWJzY3JpcHRpb24uZXZlbnQgPT09IGFjdGlvbilcblx0XHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50LCBoYW5kbGVyLCBjb250ZXh0KSB7XG5cdGlmICh0eXBlb2YgY29udGV4dCA9PT0gdW5kZWZpbmVkKVxuXHRcdGNvbnRleHQgPSBoYW5kbGVyO1xuXHR2YXIgaW5kZXggPSBldmVudHMucHVzaCh7IGV2ZW50OiBldmVudCwgaGFuZGxlcjogaGFuZGxlci5iaW5kKGNvbnRleHQpIH0pIC0gMTtcblx0cmV0dXJuIHtcblx0XHRyZW1vdmU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0ZGVsZXRlIGV2ZW50c1tpbmRleF07XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBwdWJsaXNoKGV2ZW50LCBkYXRhLCBjYikge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdHZhciB3YXNTdWJzY3JpcHRpb24gPSBmYWxzZTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoZXZlbnRzW2ldICYmIGV2ZW50c1tpXS5ldmVudCAmJiBldmVudHNbaV0uZXZlbnQgPT09IGV2ZW50KSB7XG5cdFx0XHRpZiAoY3VycmVudC5ERUJVRykge1xuXHRcdFx0XHR3YXNTdWJzY3JpcHRpb24gPSB0cnVlO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnU3Vic2NyaXB0aW9uIHRvICcgKyBldmVudCArICcgd2FzIGNhbGxlZDogJywgZGF0YSk7XG5cdFx0XHR9XG5cdFx0XHRldmVudHNbaV0uaGFuZGxlci5jYWxsKHVuZGVmaW5lZCwgZGF0YSwgY2IpO1xuXHRcdH1cblx0fVxuXHRpZiAoY3VycmVudC5ERUJVRyAmJiBldmVudC5pbmRleE9mKCdsYXlvdXQnKSA9PSAtMSAmJiAhd2FzU3Vic2NyaXB0aW9uKVxuXHRcdGNvbnNvbGUud2FybignTm90aGluZyBpcyBzdWJzY3JpYmVkIHRvICcgKyBldmVudCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRkZXN0cm95OiBkZXN0cm95LFxuXHR1bnN1YnNjcmliZTogdW5zdWJzY3JpYmUsXG5cdGN1cnJlbnRTdWJzY3JpcHRpb25zOiBjdXJyZW50U3Vic2NyaXB0aW9ucyxcblx0aGFzU3Vic2NyaXB0aW9uOiBoYXNTdWJzY3JpcHRpb24sXG5cdHN1YnNjcmliZTogc3Vic2NyaWJlLFxuXHRwdWJsaXNoOiBwdWJsaXNoLFxuXHRjb21wbGV0ZUV2ZW50OiBjb21wbGV0ZUV2ZW50XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9ldmVudHMuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIklCTUNoYXQtb3V0ZXItY29udGFpbmVyIElCTUNoYXQtb3V0ZXItY29udGFpbmVyLXRoZW1lIElCTUNoYXQtZGVmYXVsdC1jb2xvcnNcXFwiPlxcblxcdDxkaXYgY2xhc3M9XFxcIklCTUNoYXQtY2hhdC1jb250YWluZXIgSUJNQ2hhdC1jaGF0LWNvbnRhaW5lci10aGVtZVxcXCI+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiSUJNQ2hhdC1pbm5lci1jb250YWluZXIgSUJNQ2hhdC1pbm5lci1jb250YWluZXItdGhlbWVcXFwiPlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIklCTUNoYXQtbWVzc2FnZXMgSUJNQ2hhdC1tZXNzYWdlcy10aGVtZVxcXCI+PC9kaXY+XFxuXFx0XFx0PC9kaXY+XFxuXFx0PC9kaXY+XFxuXFx0PGRpdiBjbGFzcz1cXFwiSUJNQ2hhdC1pbnB1dC1jb250YWluZXIgSUJNQ2hhdC1pbnB1dC1jb250YWluZXItdGhlbWVcXFwiPlxcblxcdFxcdDxmb3JtIGNsYXNzPVxcXCJJQk1DaGF0LWlucHV0LWZvcm0gSUJNQ2hhdC1pbnB1dC1mb3JtLXRoZW1lXFxcIj5cXG5cXHRcXHRcXHQ8aW5wdXQgYXJpYS1sYWJlbGxlZGJ5PVxcXCJFbnRlciBhIE1lc3NhZ2VcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJJQk1DaGF0LWNoYXQtdGV4dGJveCBJQk1DaGF0LWNoYXQtdGV4dGJveC10aGVtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIG1lc3NhZ2UuLi5cXFwiIC8+XFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiSUJNQ2hhdC1pYm0tc3Bpbm5lci1zdGFydCBJQk1DaGF0LWlucHV0LWxvYWRpbmcgSUJNQ2hhdC1pbnB1dC1sb2FkaW5nLXRoZW1lXFxcIj5cXG5cXHRcXHRcXHRcXHQ8c3ZnIGNsYXNzPVxcXCJJQk1DaGF0LWlibS1zcGlubmVyXFxcIiB3aWR0aD0zMiBoZWlnaHQ9MzIgdmlld0JveD1cXFwiLTE2IC0xNiAzMiAzMlxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0PGNpcmNsZSBjeD0wIGN5PTAgcj04IC8+PC9zdmc+XFxuXFx0XFx0XFx0XFx0PC9zdmc+XFxuXFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0PC9mb3JtPlxcblxcdDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9ldmVudEhhbmRsZXJzL3RlbXBsYXRlcy9zdGFydC5odG1sXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIHN0YXRlID0gcmVxdWlyZSgnLi4vLi4vc3RhdGUnKTtcblxuZnVuY3Rpb24gcmVzaXplKCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdGlmIChjdXJyZW50LmFjdGl2ZSkge1xuXHRcdGN1cnJlbnQuY2hhdEhvbGRlci5zdHlsZS5tYXhIZWlnaHQgPSAoY3VycmVudC5yb290LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAtIGN1cnJlbnQuaW5wdXRIb2xkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC0gMjApICsgJ3B4Jztcblx0XHRjdXJyZW50LmNoYXRIb2xkZXIuc3R5bGUubWF4V2lkdGggPSAoKGN1cnJlbnQucm9vdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCA+IDI4OCkgPyBjdXJyZW50LnJvb3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggOiAyODgpICsgJ3B4Jztcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlc2l6ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRIYW5kbGVycy9ldmVudHMvcmVzaXplLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIHN0YXRlID0gcmVxdWlyZSgnLi4vLi4vc3RhdGUnKTtcbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnbG9kYXNoL2Fzc2lnbicpO1xudmFyIHRleHQgPSByZXF1aXJlKCcuLi90ZW1wbGF0ZXMvcmVjZWl2ZS5odG1sJyk7XG5cbmZ1bmN0aW9uIHdyaXRlTWVzc2FnZShlbGVtZW50LCB0ZXh0KSB7XG5cdHZhciBleHAgPSAvKCgoaHR0cHM/OlxcL1xcLyl8KHd3d1xcLikpW15cXHNdKykvZ2k7XG5cdHZhciBsaW5rZWQgPSB0ZXh0LnJlcGxhY2UoZXhwLCd8fHwkMXx8fCcpO1xuXHR2YXIgYXJyID0gbGlua2VkLnNwbGl0KCd8fHwnKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0dmFyIG5ld3RleHQgPSBhcnJbaV0ucmVwbGFjZShleHAsICc8YSBocmVmPVwiJDFcIiB0YXJnZXQ9XCJfYmxhbmtcIj4kMTwvYT4nKTtcblx0XHRpZiAobmV3dGV4dCA9PT0gYXJyW2ldKVxuXHRcdFx0Y2hpbGQgPSBfYWRkTGluZUVuZGluZ3MoY2hpbGQsIG5ld3RleHQpO1xuXHRcdGVsc2Vcblx0XHRcdGNoaWxkLmlubmVySFRNTCA9IG5ld3RleHQ7XG5cdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gX2FkZExpbmVFbmRpbmdzKGVsLCBuZXd0ZXh0KSB7XG5cdHZhciBhcnIgPSBuZXd0ZXh0LnNwbGl0KCdcXG4nKTtcblx0aWYgKGFyci5sZW5ndGggPT09IDEpIHtcblx0XHRlbC50ZXh0Q29udGVudCA9IGFyclswXTtcblx0fSBlbHNlIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGFycltpXS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHZhciBjaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0Y2hpbGQudGV4dENvbnRlbnQgPSBhcnJbaV07XG5cdFx0XHRcdGVsLmFwcGVuZENoaWxkKGNoaWxkKTtcblx0XHRcdH1cblx0XHRcdGlmIChpIDwgYXJyLmxlbmd0aCAtIDEpXG5cdFx0XHRcdGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZWw7XG59XG5cbmZ1bmN0aW9uIF9sYXlvdXRBbmRBY3Rpb25zKGRlYnVnLCBkYXRhKSB7XG5cdGRhdGEuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgZGF0YS51dWlkICsgJzpsYXN0LWNoaWxkJyk7XG5cdGRhdGEubGF5b3V0RWxlbWVudCA9IGRhdGEuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuSUJNQ2hhdC13YXRzb24tbGF5b3V0Jyk7XG5cdGRhdGEubXNnRWxlbWVudCA9IGRhdGEuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuSUJNQ2hhdC13YXRzb24tbWVzc2FnZScpO1xuXG5cdGlmIChkYXRhLm1lc3NhZ2UgJiYgZGF0YS5tZXNzYWdlLmxheW91dCAmJiBkYXRhLm1lc3NhZ2UubGF5b3V0Lm5hbWUpIHtcblx0XHR2YXIgbGF5b3V0ID0gJ2xheW91dDonICsgZGF0YS5tZXNzYWdlLmxheW91dC5uYW1lO1xuXHRcdGlmIChldmVudHMuaGFzU3Vic2NyaXB0aW9uKGxheW91dCkpXG5cdFx0XHRldmVudHMucHVibGlzaChsYXlvdXQsIGRhdGEpO1xuXHRcdGVsc2UgaWYgKGRlYnVnKVxuXHRcdFx0Y29uc29sZS53YXJuKCdOb3RoaW5nIGlzIHN1YnNjcmliZWQgdG8gJyArIGxheW91dCk7XG5cdH1cblxuXHRpZiAoZGF0YS5tZXNzYWdlICYmIGRhdGEubWVzc2FnZS5hY3Rpb24gJiYgZGF0YS5tZXNzYWdlLmFjdGlvbi5uYW1lKSB7XG5cdFx0dmFyIGFjdGlvbiA9ICdhY3Rpb246JyArIGRhdGEubWVzc2FnZS5hY3Rpb24ubmFtZTtcblx0XHRpZiAoZXZlbnRzLmhhc1N1YnNjcmlwdGlvbihhY3Rpb24pKVxuXHRcdFx0ZXZlbnRzLnB1Ymxpc2goYWN0aW9uLCBkYXRhLCBldmVudHMuY29tcGxldGVFdmVudCk7XG5cdFx0ZWxzZSBpZiAoZGVidWcpXG5cdFx0XHRjb25zb2xlLndhcm4oJ05vdGhpbmcgaXMgc3Vic2NyaWJlZCB0byAnICsgYWN0aW9uKTtcblx0fVxuXG5cdGV2ZW50cy5wdWJsaXNoKCdkaXNhYmxlLWxvYWRpbmcnKTtcblx0ZXZlbnRzLnB1Ymxpc2goJ3Njcm9sbC10by1ib3R0b20nKTtcblx0ZXZlbnRzLnB1Ymxpc2goJ2ZvY3VzLWlucHV0Jyk7XG59XG5cbmZ1bmN0aW9uIHJlY2VpdmUoZGF0YSkge1xuXHR2YXIgY2hlY2tEYXRhID0gKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykgPyB7IG1lc3NhZ2U6IHsgdGV4dDogZGF0YSB9IH0gOiBkYXRhO1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdGRhdGEgPSBhc3NpZ24oe30sIGNoZWNrRGF0YSwgeyB1dWlkOiB1dGlscy5nZXRVVUlEKCkgfSk7XG5cdHN0YXRlLnNldFN0YXRlKHtcblx0XHRtZXNzYWdlczogW10uY29uY2F0KGN1cnJlbnQubWVzc2FnZXMgfHwgW10sIGRhdGEpXG5cdH0pO1xuXHR2YXIgbXNnID0gKGRhdGEubWVzc2FnZSAmJiBkYXRhLm1lc3NhZ2UudGV4dCkgPyAoKEFycmF5LmlzQXJyYXkoZGF0YS5tZXNzYWdlLnRleHQpKSA/IGRhdGEubWVzc2FnZS50ZXh0IDogW2RhdGEubWVzc2FnZS50ZXh0XSkgOiBbJyddO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IG1zZy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBwYXJzZWQgPSB1dGlscy5yZXBsYWNlQWxsKHRleHQsICcke2RhdGEudXVpZH0nLCBkYXRhLnV1aWQpO1xuXHRcdHZhciBpdGVtO1xuXHRcdGN1cnJlbnQuY2hhdEhvbGRlci5pbm5lckhUTUwgKz0gcGFyc2VkO1xuXHRcdGl0ZW0gPSBjdXJyZW50LmNoYXRIb2xkZXIucXVlcnlTZWxlY3RvcignLicgKyBkYXRhLnV1aWQgKyAnOmxhc3QtY2hpbGQgLklCTUNoYXQtd2F0c29uLW1lc3NhZ2UnKTtcblx0XHR3cml0ZU1lc3NhZ2UoaXRlbSwgbXNnW2ldKTtcblx0XHRpZiAoaSA9PT0gbXNnLmxlbmd0aCAtIDEpXG5cdFx0XHRfbGF5b3V0QW5kQWN0aW9ucyhjdXJyZW50LkRFQlVHLCBkYXRhKTtcblx0fVxuXG5cdC8qXG5cdG1ha2UgYW4gb3B0aW9uIGZvciBhdXRvIGFkZGluZyBhcmlhIHN0dWZmXG5cdCovXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVjZWl2ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRIYW5kbGVycy9ldmVudHMvcmVjZWl2ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiJHtkYXRhLnV1aWR9XFxcIiBjbGFzcz1cXFwiSUJNQ2hhdC13YXRzb24tbWVzc2FnZS1jb250YWluZXIgSUJNQ2hhdC13YXRzb24tbWVzc2FnZS1jb250YWluZXItdGhlbWVcXFwiPlxcblxcdDxkaXYgY2xhc3M9XFxcIklCTUNoYXQtd2F0c29uLW1lc3NhZ2UgSUJNQ2hhdC13YXRzb24tbWVzc2FnZS10aGVtZVxcXCI+PC9kaXY+XFxuXFx0PGRpdiBjbGFzcz1cXFwiSUJNQ2hhdC13YXRzb24tbGF5b3V0XFxcIj48L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRIYW5kbGVycy90ZW1wbGF0ZXMvcmVjZWl2ZS5odG1sXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIHN0YXRlID0gcmVxdWlyZSgnLi4vLi4vc3RhdGUnKTtcbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcbnZhciBCb3RTREsgPSByZXF1aXJlKCdAd2F0c29uLXZpcnR1YWwtYWdlbnQvY2xpZW50LXNkay9saWIvd2ViJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ2xvZGFzaC9hc3NpZ24nKTtcblxuZnVuY3Rpb24gc2VuZChkYXRhKSB7XG5cdGlmIChkYXRhLnRleHQgJiYgZGF0YS50ZXh0Lmxlbmd0aCA+IDApIHtcblx0XHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdFx0YWRkVG9TZW5kUXVldWUoZGF0YSk7XG5cdFx0aWYgKCFjdXJyZW50LmluUHJvZ3Jlc3MpXG5cdFx0XHRhZ2VudFNlbmQoKTtcblx0fVxufVxuXG5mdW5jdGlvbiBhZGRUb1NlbmRRdWV1ZShkYXRhKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0dmFyIHF1ZXVlID0gY3VycmVudC5zZW5kUXVldWUgfHwgW107XG5cdHZhciBuZXdRdWV1ZSA9IHF1ZXVlLnNsaWNlKDApO1xuXHRuZXdRdWV1ZS5wdXNoKGRhdGEpO1xuXHRzdGF0ZS5zZXRTdGF0ZSh7XG5cdFx0c2VuZFF1ZXVlOiBuZXdRdWV1ZVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWdlbnRTZW5kKCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdGV2ZW50cy5wdWJsaXNoKCdlbmFibGUtbG9hZGluZycpO1xuXHR2YXIgbmV3RGF0YSA9IGFzc2lnbih7fSwgY3VycmVudC5zZW5kUXVldWVbMF0sIHsgdXVpZDogdXRpbHMuZ2V0VVVJRCgpIH0pO1xuXHRzdGF0ZS5zZXRTdGF0ZSh7XG5cdFx0aW5Qcm9ncmVzczogdHJ1ZSxcblx0XHRzZW5kUXVldWU6IGN1cnJlbnQuc2VuZFF1ZXVlLnNsaWNlKDAsIC0xKSxcblx0XHRtZXNzYWdlczogW10uY29uY2F0KGN1cnJlbnQubWVzc2FnZXMgfHwgW10sIG5ld0RhdGEpXG5cdH0pO1xuXHRCb3RTREtcblx0XHQuc2VuZCggY3VycmVudC5ib3RJRCwgY3VycmVudC5jaGF0SUQsIG5ld0RhdGEudGV4dCApXG5cdFx0LnRoZW4oIGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0Y3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdFx0XHRzdGF0ZS5zZXRTdGF0ZSh7XG5cdFx0XHRcdGluUHJvZ3Jlc3M6IGZhbHNlXG5cdFx0XHR9KTtcblx0XHRcdGV2ZW50cy5wdWJsaXNoKCdkaXNhYmxlLWxvYWRpbmcnKTtcblx0XHRcdGV2ZW50cy5wdWJsaXNoKCdyZWNlaXZlJywgcmVzKTtcblx0XHRcdGlmIChjdXJyZW50LnNlbmRRdWV1ZS5sZW5ndGggPiAwKVxuXHRcdFx0XHRhZ2VudFNlbmQoKTtcblx0XHR9KVxuXHRcdC5jYXRjaCggZnVuY3Rpb24oZXJyKSB7XG5cdFx0XHRzdGF0ZS5zZXRTdGF0ZSh7XG5cdFx0XHRcdGluUHJvZ3Jlc3M6IGZhbHNlXG5cdFx0XHR9KTtcblx0XHRcdGV2ZW50cy5wdWJsaXNoKCdkaXNhYmxlLWxvYWRpbmcnKTtcblx0XHRcdGV2ZW50cy5wdWJsaXNoKCdlcnJvcicsIGVycik7XG5cdFx0fSk7XG5cdGN1cnJlbnQucm9vdC5xdWVyeVNlbGVjdG9yKCcuSUJNQ2hhdC1jaGF0LXRleHRib3gnKS52YWx1ZSA9ICcnO1xuXG5cdGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHR2YXIgbXNnID0gbmV3RGF0YS50ZXh0IHx8ICcnO1xuXHRpZiAoIW5ld0RhdGEuc2lsZW50KSB7XG5cdFx0dmFyIHRleHQgPSByZXF1aXJlKCcuLi90ZW1wbGF0ZXMvc2VuZC5odG1sJyk7XG5cdFx0dmFyIHBhcnNlZCA9IHV0aWxzLnJlcGxhY2VBbGwodGV4dCwgJyR7ZGF0YS51dWlkfScsIG5ld0RhdGEudXVpZCk7XG5cdFx0Y3VycmVudC5jaGF0SG9sZGVyLmlubmVySFRNTCArPSBwYXJzZWQ7XG5cdFx0Y3VycmVudC5jaGF0SG9sZGVyLnF1ZXJ5U2VsZWN0b3IoJyMnICsgbmV3RGF0YS51dWlkICsgJyAuSUJNQ2hhdC11c2VyLW1lc3NhZ2UnKS50ZXh0Q29udGVudCA9IG1zZztcblx0XHRldmVudHMucHVibGlzaCgnc2Nyb2xsLXRvLWJvdHRvbScpO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2VuZDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRIYW5kbGVycy9ldmVudHMvc2VuZC5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcIlNES1wiLFtdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuU0RLPWUoKTp0LlNESz1lKCl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShyKXtpZihuW3JdKXJldHVybiBuW3JdLmV4cG9ydHM7dmFyIG89bltyXT17ZXhwb3J0czp7fSxpZDpyLGxvYWRlZDohMX07cmV0dXJuIHRbcl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsZSksby5sb2FkZWQ9ITAsby5leHBvcnRzfXZhciBuPXt9O3JldHVybiBlLm09dCxlLmM9bixlLnA9XCJcIixlKDApfShbZnVuY3Rpb24odCxlLG4pe3QuZXhwb3J0cz1uKDIyKX0sZnVuY3Rpb24odCxlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKHQpe3JldHVyblwiW29iamVjdCBBcnJheV1cIj09PWIuY2FsbCh0KX1mdW5jdGlvbiByKHQpe3JldHVyblwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIj09PWIuY2FsbCh0KX1mdW5jdGlvbiBvKHQpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBGb3JtRGF0YSYmdCBpbnN0YW5jZW9mIEZvcm1EYXRhfWZ1bmN0aW9uIGkodCl7dmFyIGU7cmV0dXJuIGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIEFycmF5QnVmZmVyJiZBcnJheUJ1ZmZlci5pc1ZpZXc/QXJyYXlCdWZmZXIuaXNWaWV3KHQpOnQmJnQuYnVmZmVyJiZ0LmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyfWZ1bmN0aW9uIHUodCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHR9ZnVuY3Rpb24gcyh0KXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgdH1mdW5jdGlvbiBjKHQpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiB0fWZ1bmN0aW9uIGEodCl7cmV0dXJuIG51bGwhPT10JiZcIm9iamVjdFwiPT10eXBlb2YgdH1mdW5jdGlvbiBmKHQpe3JldHVyblwiW29iamVjdCBEYXRlXVwiPT09Yi5jYWxsKHQpfWZ1bmN0aW9uIGwodCl7cmV0dXJuXCJbb2JqZWN0IEZpbGVdXCI9PT1iLmNhbGwodCl9ZnVuY3Rpb24gcCh0KXtyZXR1cm5cIltvYmplY3QgQmxvYl1cIj09PWIuY2FsbCh0KX1mdW5jdGlvbiBoKHQpe3JldHVyblwiW29iamVjdCBGdW5jdGlvbl1cIj09PWIuY2FsbCh0KX1mdW5jdGlvbiBkKHQpe3JldHVybiBhKHQpJiZoKHQucGlwZSl9ZnVuY3Rpb24gbSh0KXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgVVJMU2VhcmNoUGFyYW1zJiZ0IGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zfWZ1bmN0aW9uIHYodCl7cmV0dXJuIHQucmVwbGFjZSgvXlxccyovLFwiXCIpLnJlcGxhY2UoL1xccyokLyxcIlwiKX1mdW5jdGlvbiB5KCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50fWZ1bmN0aW9uIGcodCxlKXtpZihudWxsIT09dCYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQpaWYoXCJvYmplY3RcIj09dHlwZW9mIHR8fG4odCl8fCh0PVt0XSksbih0KSlmb3IodmFyIHI9MCxvPXQubGVuZ3RoO3I8bztyKyspZS5jYWxsKG51bGwsdFtyXSxyLHQpO2Vsc2UgZm9yKHZhciBpIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShpKSYmZS5jYWxsKG51bGwsdFtpXSxpLHQpfWZ1bmN0aW9uIHcoKXtmdW5jdGlvbiB0KHQsbil7XCJvYmplY3RcIj09dHlwZW9mIGVbbl0mJlwib2JqZWN0XCI9PXR5cGVvZiB0P2Vbbl09dyhlW25dLHQpOmVbbl09dH1mb3IodmFyIGU9e30sbj0wLHI9YXJndW1lbnRzLmxlbmd0aDtuPHI7bisrKWcoYXJndW1lbnRzW25dLHQpO3JldHVybiBlfXZhciBiPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7dC5leHBvcnRzPXtpc0FycmF5Om4saXNBcnJheUJ1ZmZlcjpyLGlzRm9ybURhdGE6byxpc0FycmF5QnVmZmVyVmlldzppLGlzU3RyaW5nOnUsaXNOdW1iZXI6cyxpc09iamVjdDphLGlzVW5kZWZpbmVkOmMsaXNEYXRlOmYsaXNGaWxlOmwsaXNCbG9iOnAsaXNGdW5jdGlvbjpoLGlzU3RyZWFtOmQsaXNVUkxTZWFyY2hQYXJhbXM6bSxpc1N0YW5kYXJkQnJvd3NlckVudjp5LGZvckVhY2g6ZyxtZXJnZTp3LHRyaW06dn19LGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gbigpe3Rocm93IG5ldyBFcnJvcihcInNldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWRcIil9ZnVuY3Rpb24gcigpe3Rocm93IG5ldyBFcnJvcihcImNsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiBvKHQpe2lmKGY9PT1zZXRUaW1lb3V0KXJldHVybiBzZXRUaW1lb3V0KHQsMCk7aWYoKGY9PT1ufHwhZikmJnNldFRpbWVvdXQpcmV0dXJuIGY9c2V0VGltZW91dCxzZXRUaW1lb3V0KHQsMCk7dHJ5e3JldHVybiBmKHQsMCl9Y2F0Y2goZSl7dHJ5e3JldHVybiBmLmNhbGwobnVsbCx0LDApfWNhdGNoKGUpe3JldHVybiBmLmNhbGwodGhpcyx0LDApfX19ZnVuY3Rpb24gaSh0KXtpZihsPT09Y2xlYXJUaW1lb3V0KXJldHVybiBjbGVhclRpbWVvdXQodCk7aWYoKGw9PT1yfHwhbCkmJmNsZWFyVGltZW91dClyZXR1cm4gbD1jbGVhclRpbWVvdXQsY2xlYXJUaW1lb3V0KHQpO3RyeXtyZXR1cm4gbCh0KX1jYXRjaChlKXt0cnl7cmV0dXJuIGwuY2FsbChudWxsLHQpfWNhdGNoKGUpe3JldHVybiBsLmNhbGwodGhpcyx0KX19fWZ1bmN0aW9uIHUoKXttJiZoJiYobT0hMSxoLmxlbmd0aD9kPWguY29uY2F0KGQpOnY9LTEsZC5sZW5ndGgmJnMoKSl9ZnVuY3Rpb24gcygpe2lmKCFtKXt2YXIgdD1vKHUpO209ITA7Zm9yKHZhciBlPWQubGVuZ3RoO2U7KXtmb3IoaD1kLGQ9W107Kyt2PGU7KWgmJmhbdl0ucnVuKCk7dj0tMSxlPWQubGVuZ3RofWg9bnVsbCxtPSExLGkodCl9fWZ1bmN0aW9uIGModCxlKXt0aGlzLmZ1bj10LHRoaXMuYXJyYXk9ZX1mdW5jdGlvbiBhKCl7fXZhciBmLGwscD10LmV4cG9ydHM9e307IWZ1bmN0aW9uKCl7dHJ5e2Y9XCJmdW5jdGlvblwiPT10eXBlb2Ygc2V0VGltZW91dD9zZXRUaW1lb3V0Om59Y2F0Y2godCl7Zj1ufXRyeXtsPVwiZnVuY3Rpb25cIj09dHlwZW9mIGNsZWFyVGltZW91dD9jbGVhclRpbWVvdXQ6cn1jYXRjaCh0KXtsPXJ9fSgpO3ZhciBoLGQ9W10sbT0hMSx2PS0xO3AubmV4dFRpY2s9ZnVuY3Rpb24odCl7dmFyIGU9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgtMSk7aWYoYXJndW1lbnRzLmxlbmd0aD4xKWZvcih2YXIgbj0xO248YXJndW1lbnRzLmxlbmd0aDtuKyspZVtuLTFdPWFyZ3VtZW50c1tuXTtkLnB1c2gobmV3IGModCxlKSksMSE9PWQubGVuZ3RofHxtfHxvKHMpfSxjLnByb3RvdHlwZS5ydW49ZnVuY3Rpb24oKXt0aGlzLmZ1bi5hcHBseShudWxsLHRoaXMuYXJyYXkpfSxwLnRpdGxlPVwiYnJvd3NlclwiLHAuYnJvd3Nlcj0hMCxwLmVudj17fSxwLmFyZ3Y9W10scC52ZXJzaW9uPVwiXCIscC52ZXJzaW9ucz17fSxwLm9uPWEscC5hZGRMaXN0ZW5lcj1hLHAub25jZT1hLHAub2ZmPWEscC5yZW1vdmVMaXN0ZW5lcj1hLHAucmVtb3ZlQWxsTGlzdGVuZXJzPWEscC5lbWl0PWEscC5iaW5kaW5nPWZ1bmN0aW9uKHQpe3Rocm93IG5ldyBFcnJvcihcInByb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkXCIpfSxwLmN3ZD1mdW5jdGlvbigpe3JldHVyblwiL1wifSxwLmNoZGlyPWZ1bmN0aW9uKHQpe3Rocm93IG5ldyBFcnJvcihcInByb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZFwiKX0scC51bWFzaz1mdW5jdGlvbigpe3JldHVybiAwfX0sZnVuY3Rpb24odCxlLG4peyhmdW5jdGlvbihlKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDEpLG89bigxMiksaT1uKDE4KSx1PW4oNCkscz1uKDE2KSxjPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdy5idG9hfHxuKDExKSxhPW4oMTkpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGYsbCl7dmFyIHA9bC5kYXRhLGg9bC5oZWFkZXJzO3IuaXNGb3JtRGF0YShwKSYmZGVsZXRlIGhbXCJDb250ZW50LVR5cGVcIl07dmFyIGQ9bmV3IFhNTEh0dHBSZXF1ZXN0LG09XCJvbnJlYWR5c3RhdGVjaGFuZ2VcIix2PSExO2lmKFwidGVzdFwiPT09ZS5lbnYuTk9ERV9FTlZ8fFwidW5kZWZpbmVkXCI9PXR5cGVvZiB3aW5kb3d8fCF3aW5kb3cuWERvbWFpblJlcXVlc3R8fFwid2l0aENyZWRlbnRpYWxzXCJpbiBkfHxzKGwudXJsKXx8KGQ9bmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCxtPVwib25sb2FkXCIsdj0hMCxkLm9ucHJvZ3Jlc3M9ZnVuY3Rpb24oKXt9LGQub250aW1lb3V0PWZ1bmN0aW9uKCl7fSksbC5hdXRoKXt2YXIgeT1sLmF1dGgudXNlcm5hbWV8fFwiXCIsZz1sLmF1dGgucGFzc3dvcmR8fFwiXCI7aC5BdXRob3JpemF0aW9uPVwiQmFzaWMgXCIrYyh5K1wiOlwiK2cpfWlmKGQub3BlbihsLm1ldGhvZC50b1VwcGVyQ2FzZSgpLG8obC51cmwsbC5wYXJhbXMsbC5wYXJhbXNTZXJpYWxpemVyKSwhMCksZC50aW1lb3V0PWwudGltZW91dCxkW21dPWZ1bmN0aW9uKCl7aWYoZCYmKDQ9PT1kLnJlYWR5U3RhdGV8fHYpJiYwIT09ZC5zdGF0dXMpe3ZhciBlPVwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzXCJpbiBkP2koZC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSk6bnVsbCxuPWwucmVzcG9uc2VUeXBlJiZcInRleHRcIiE9PWwucmVzcG9uc2VUeXBlP2QucmVzcG9uc2U6ZC5yZXNwb25zZVRleHQscj17ZGF0YTp1KG4sZSxsLnRyYW5zZm9ybVJlc3BvbnNlKSxzdGF0dXM6MTIyMz09PWQuc3RhdHVzPzIwNDpkLnN0YXR1cyxzdGF0dXNUZXh0OjEyMjM9PT1kLnN0YXR1cz9cIk5vIENvbnRlbnRcIjpkLnN0YXR1c1RleHQsaGVhZGVyczplLGNvbmZpZzpsLHJlcXVlc3Q6ZH07YSh0LGYsciksZD1udWxsfX0sZC5vbmVycm9yPWZ1bmN0aW9uKCl7ZihuZXcgRXJyb3IoXCJOZXR3b3JrIEVycm9yXCIpKSxkPW51bGx9LGQub250aW1lb3V0PWZ1bmN0aW9uKCl7dmFyIHQ9bmV3IEVycm9yKFwidGltZW91dCBvZiBcIitsLnRpbWVvdXQrXCJtcyBleGNlZWRlZFwiKTt0LnRpbWVvdXQ9bC50aW1lb3V0LHQuY29kZT1cIkVDT05OQUJPUlRFRFwiLGYodCksZD1udWxsfSxyLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpe3ZhciB3PW4oMTQpLGI9bC53aXRoQ3JlZGVudGlhbHN8fHMobC51cmwpP3cucmVhZChsLnhzcmZDb29raWVOYW1lKTp2b2lkIDA7YiYmKGhbbC54c3JmSGVhZGVyTmFtZV09Yil9aWYoXCJzZXRSZXF1ZXN0SGVhZGVyXCJpbiBkJiZyLmZvckVhY2goaCxmdW5jdGlvbih0LGUpe1widW5kZWZpbmVkXCI9PXR5cGVvZiBwJiZcImNvbnRlbnQtdHlwZVwiPT09ZS50b0xvd2VyQ2FzZSgpP2RlbGV0ZSBoW2VdOmQuc2V0UmVxdWVzdEhlYWRlcihlLHQpfSksbC53aXRoQ3JlZGVudGlhbHMmJihkLndpdGhDcmVkZW50aWFscz0hMCksbC5yZXNwb25zZVR5cGUpdHJ5e2QucmVzcG9uc2VUeXBlPWwucmVzcG9uc2VUeXBlfWNhdGNoKHgpe2lmKFwianNvblwiIT09ZC5yZXNwb25zZVR5cGUpdGhyb3cgeH1sLnByb2dyZXNzJiYoXCJwb3N0XCI9PT1sLm1ldGhvZHx8XCJwdXRcIj09PWwubWV0aG9kP2QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLGwucHJvZ3Jlc3MpOlwiZ2V0XCI9PT1sLm1ldGhvZCYmZC5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIixsLnByb2dyZXNzKSksdm9pZCAwPT09cCYmKHA9bnVsbCksZC5zZW5kKHApfX0pLmNhbGwoZSxuKDIpKX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oMSk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gci5mb3JFYWNoKG4sZnVuY3Rpb24obil7dD1uKHQsZSl9KSx0fX0sZnVuY3Rpb24odCxlLG4pe3QuZXhwb3J0cz1uKDYpfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXt0aGlzLmRlZmF1bHRzPWkubWVyZ2Uoe30sdCksdGhpcy5pbnRlcmNlcHRvcnM9e3JlcXVlc3Q6bmV3IHMscmVzcG9uc2U6bmV3IHN9fXZhciBvPW4oOSksaT1uKDEpLHU9big4KSxzPW4oNyksYz1uKDE1KSxhPW4oMTMpLGY9bigxMCksbD1uKDQpO3IucHJvdG90eXBlLnJlcXVlc3Q9ZnVuY3Rpb24odCl7XCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PWkubWVyZ2Uoe3VybDphcmd1bWVudHNbMF19LGFyZ3VtZW50c1sxXSkpLHQ9aS5tZXJnZShvLHRoaXMuZGVmYXVsdHMse21ldGhvZDpcImdldFwifSx0KSx0LmJhc2VVUkwmJiFjKHQudXJsKSYmKHQudXJsPWEodC5iYXNlVVJMLHQudXJsKSksdC53aXRoQ3JlZGVudGlhbHM9dC53aXRoQ3JlZGVudGlhbHN8fHRoaXMuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzLHQuZGF0YT1sKHQuZGF0YSx0LmhlYWRlcnMsdC50cmFuc2Zvcm1SZXF1ZXN0KSx0LmhlYWRlcnM9aS5tZXJnZSh0LmhlYWRlcnMuY29tbW9ufHx7fSx0LmhlYWRlcnNbdC5tZXRob2RdfHx7fSx0LmhlYWRlcnN8fHt9KSxpLmZvckVhY2goW1wiZGVsZXRlXCIsXCJnZXRcIixcImhlYWRcIixcInBvc3RcIixcInB1dFwiLFwicGF0Y2hcIixcImNvbW1vblwiXSxmdW5jdGlvbihlKXtkZWxldGUgdC5oZWFkZXJzW2VdfSk7dmFyIGU9W3Usdm9pZCAwXSxuPVByb21pc2UucmVzb2x2ZSh0KTtmb3IodGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe2UudW5zaGlmdCh0LmZ1bGZpbGxlZCx0LnJlamVjdGVkKX0pLHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24odCl7ZS5wdXNoKHQuZnVsZmlsbGVkLHQucmVqZWN0ZWQpfSk7ZS5sZW5ndGg7KW49bi50aGVuKGUuc2hpZnQoKSxlLnNoaWZ0KCkpO3JldHVybiBufTt2YXIgcD1uZXcgcihvKSxoPXQuZXhwb3J0cz1mKHIucHJvdG90eXBlLnJlcXVlc3QscCk7aC5yZXF1ZXN0PWYoci5wcm90b3R5cGUucmVxdWVzdCxwKSxoLkF4aW9zPXIsaC5kZWZhdWx0cz1wLmRlZmF1bHRzLGguaW50ZXJjZXB0b3JzPXAuaW50ZXJjZXB0b3JzLGguY3JlYXRlPWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgcih0KX0saC5hbGw9ZnVuY3Rpb24odCl7cmV0dXJuIFByb21pc2UuYWxsKHQpfSxoLnNwcmVhZD1uKDIwKSxpLmZvckVhY2goW1wiZGVsZXRlXCIsXCJnZXRcIixcImhlYWRcIl0sZnVuY3Rpb24odCl7ci5wcm90b3R5cGVbdF09ZnVuY3Rpb24oZSxuKXtyZXR1cm4gdGhpcy5yZXF1ZXN0KGkubWVyZ2Uobnx8e30se21ldGhvZDp0LHVybDplfSkpfSxoW3RdPWYoci5wcm90b3R5cGVbdF0scCl9KSxpLmZvckVhY2goW1wicG9zdFwiLFwicHV0XCIsXCJwYXRjaFwiXSxmdW5jdGlvbih0KXtyLnByb3RvdHlwZVt0XT1mdW5jdGlvbihlLG4scil7cmV0dXJuIHRoaXMucmVxdWVzdChpLm1lcmdlKHJ8fHt9LHttZXRob2Q6dCx1cmw6ZSxkYXRhOm59KSl9LGhbdF09ZihyLnByb3RvdHlwZVt0XSxwKX0pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcigpe3RoaXMuaGFuZGxlcnM9W119dmFyIG89bigxKTtyLnByb3RvdHlwZS51c2U9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5oYW5kbGVycy5wdXNoKHtmdWxmaWxsZWQ6dCxyZWplY3RlZDplfSksdGhpcy5oYW5kbGVycy5sZW5ndGgtMX0sci5wcm90b3R5cGUuZWplY3Q9ZnVuY3Rpb24odCl7dGhpcy5oYW5kbGVyc1t0XSYmKHRoaXMuaGFuZGxlcnNbdF09bnVsbCl9LHIucHJvdG90eXBlLmZvckVhY2g9ZnVuY3Rpb24odCl7by5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsZnVuY3Rpb24oZSl7bnVsbCE9PWUmJnQoZSl9KX0sdC5leHBvcnRzPXJ9LGZ1bmN0aW9uKHQsZSxuKXsoZnVuY3Rpb24oZSl7XCJ1c2Ugc3RyaWN0XCI7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyLG8pe3RyeXt2YXIgaTtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmFkYXB0ZXI/aT10LmFkYXB0ZXI6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFhNTEh0dHBSZXF1ZXN0P2k9bigzKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgZSYmKGk9bigzKSksXCJmdW5jdGlvblwiPT10eXBlb2YgaSYmaShyLG8sdCl9Y2F0Y2godSl7byh1KX19KX19KS5jYWxsKGUsbigyKSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQsZSl7IW8uaXNVbmRlZmluZWQodCkmJm8uaXNVbmRlZmluZWQodFtcIkNvbnRlbnQtVHlwZVwiXSkmJih0W1wiQ29udGVudC1UeXBlXCJdPWUpfXZhciBvPW4oMSksaT1uKDE3KSx1PS9eXFwpXFxdXFx9Jyw/XFxuLyxzPXtcIkNvbnRlbnQtVHlwZVwiOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJ9O3QuZXhwb3J0cz17dHJhbnNmb3JtUmVxdWVzdDpbZnVuY3Rpb24odCxlKXtyZXR1cm4gaShlLFwiQ29udGVudC1UeXBlXCIpLG8uaXNGb3JtRGF0YSh0KXx8by5pc0FycmF5QnVmZmVyKHQpfHxvLmlzU3RyZWFtKHQpfHxvLmlzRmlsZSh0KXx8by5pc0Jsb2IodCk/dDpvLmlzQXJyYXlCdWZmZXJWaWV3KHQpP3QuYnVmZmVyOm8uaXNVUkxTZWFyY2hQYXJhbXModCk/KHIoZSxcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04XCIpLHQudG9TdHJpbmcoKSk6by5pc09iamVjdCh0KT8ocihlLFwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04XCIpLEpTT04uc3RyaW5naWZ5KHQpKTp0fV0sdHJhbnNmb3JtUmVzcG9uc2U6W2Z1bmN0aW9uKHQpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXt0PXQucmVwbGFjZSh1LFwiXCIpO3RyeXt0PUpTT04ucGFyc2UodCl9Y2F0Y2goZSl7fX1yZXR1cm4gdH1dLGhlYWRlcnM6e2NvbW1vbjp7QWNjZXB0OlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qXCJ9LHBhdGNoOm8ubWVyZ2UocykscG9zdDpvLm1lcmdlKHMpLHB1dDpvLm1lcmdlKHMpfSx0aW1lb3V0OjAseHNyZkNvb2tpZU5hbWU6XCJYU1JGLVRPS0VOXCIseHNyZkhlYWRlck5hbWU6XCJYLVhTUkYtVE9LRU5cIixtYXhDb250ZW50TGVuZ3RoOi0xLHZhbGlkYXRlU3RhdHVzOmZ1bmN0aW9uKHQpe3JldHVybiB0Pj0yMDAmJnQ8MzAwfX19LGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKCl7Zm9yKHZhciBuPW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKSxyPTA7cjxuLmxlbmd0aDtyKyspbltyXT1hcmd1bWVudHNbcl07cmV0dXJuIHQuYXBwbHkoZSxuKX19fSxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oKXt0aGlzLm1lc3NhZ2U9XCJTdHJpbmcgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXJcIn1mdW5jdGlvbiByKHQpe2Zvcih2YXIgZSxyLGk9U3RyaW5nKHQpLHU9XCJcIixzPTAsYz1vO2kuY2hhckF0KDB8cyl8fChjPVwiPVwiLHMlMSk7dSs9Yy5jaGFyQXQoNjMmZT4+OC1zJTEqOCkpe2lmKHI9aS5jaGFyQ29kZUF0KHMrPS43NSkscj4yNTUpdGhyb3cgbmV3IG47ZT1lPDw4fHJ9cmV0dXJuIHV9dmFyIG89XCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiO24ucHJvdG90eXBlPW5ldyBFcnJvcixuLnByb3RvdHlwZS5jb2RlPTUsbi5wcm90b3R5cGUubmFtZT1cIkludmFsaWRDaGFyYWN0ZXJFcnJvclwiLHQuZXhwb3J0cz1yfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXtyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHQpLnJlcGxhY2UoLyU0MC9naSxcIkBcIikucmVwbGFjZSgvJTNBL2dpLFwiOlwiKS5yZXBsYWNlKC8lMjQvZyxcIiRcIikucmVwbGFjZSgvJTJDL2dpLFwiLFwiKS5yZXBsYWNlKC8lMjAvZyxcIitcIikucmVwbGFjZSgvJTVCL2dpLFwiW1wiKS5yZXBsYWNlKC8lNUQvZ2ksXCJdXCIpfXZhciBvPW4oMSk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuKXtpZighZSlyZXR1cm4gdDt2YXIgaTtpZihuKWk9bihlKTtlbHNlIGlmKG8uaXNVUkxTZWFyY2hQYXJhbXMoZSkpaT1lLnRvU3RyaW5nKCk7ZWxzZXt2YXIgdT1bXTtvLmZvckVhY2goZSxmdW5jdGlvbih0LGUpe251bGwhPT10JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgdCYmKG8uaXNBcnJheSh0KSYmKGUrPVwiW11cIiksby5pc0FycmF5KHQpfHwodD1bdF0pLG8uZm9yRWFjaCh0LGZ1bmN0aW9uKHQpe28uaXNEYXRlKHQpP3Q9dC50b0lTT1N0cmluZygpOm8uaXNPYmplY3QodCkmJih0PUpTT04uc3RyaW5naWZ5KHQpKSx1LnB1c2gocihlKStcIj1cIityKHQpKX0pKX0pLGk9dS5qb2luKFwiJlwiKX1yZXR1cm4gaSYmKHQrPSh0LmluZGV4T2YoXCI/XCIpPT09LTE/XCI/XCI6XCImXCIpK2kpLHR9fSxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3JldHVybiB0LnJlcGxhY2UoL1xcLyskLyxcIlwiKStcIi9cIitlLnJlcGxhY2UoL15cXC8rLyxcIlwiKX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDEpO3QuZXhwb3J0cz1yLmlzU3RhbmRhcmRCcm93c2VyRW52KCk/ZnVuY3Rpb24oKXtyZXR1cm57d3JpdGU6ZnVuY3Rpb24odCxlLG4sbyxpLHUpe3ZhciBzPVtdO3MucHVzaCh0K1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChlKSksci5pc051bWJlcihuKSYmcy5wdXNoKFwiZXhwaXJlcz1cIituZXcgRGF0ZShuKS50b0dNVFN0cmluZygpKSxyLmlzU3RyaW5nKG8pJiZzLnB1c2goXCJwYXRoPVwiK28pLHIuaXNTdHJpbmcoaSkmJnMucHVzaChcImRvbWFpbj1cIitpKSx1PT09ITAmJnMucHVzaChcInNlY3VyZVwiKSxkb2N1bWVudC5jb29raWU9cy5qb2luKFwiOyBcIil9LHJlYWQ6ZnVuY3Rpb24odCl7dmFyIGU9ZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoXCIoXnw7XFxcXHMqKShcIit0K1wiKT0oW147XSopXCIpKTtyZXR1cm4gZT9kZWNvZGVVUklDb21wb25lbnQoZVszXSk6bnVsbH0scmVtb3ZlOmZ1bmN0aW9uKHQpe3RoaXMud3JpdGUodCxcIlwiLERhdGUubm93KCktODY0ZTUpfX19KCk6ZnVuY3Rpb24oKXtyZXR1cm57d3JpdGU6ZnVuY3Rpb24oKXt9LHJlYWQ6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH0scmVtb3ZlOmZ1bmN0aW9uKCl7fX19KCl9LGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybi9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh0KX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDEpO3QuZXhwb3J0cz1yLmlzU3RhbmRhcmRCcm93c2VyRW52KCk/ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe3ZhciBlPXQ7cmV0dXJuIG4mJihvLnNldEF0dHJpYnV0ZShcImhyZWZcIixlKSxlPW8uaHJlZiksby5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZSkse2hyZWY6by5ocmVmLHByb3RvY29sOm8ucHJvdG9jb2w/by5wcm90b2NvbC5yZXBsYWNlKC86JC8sXCJcIik6XCJcIixob3N0Om8uaG9zdCxzZWFyY2g6by5zZWFyY2g/by5zZWFyY2gucmVwbGFjZSgvXlxcPy8sXCJcIik6XCJcIixoYXNoOm8uaGFzaD9vLmhhc2gucmVwbGFjZSgvXiMvLFwiXCIpOlwiXCIsaG9zdG5hbWU6by5ob3N0bmFtZSxwb3J0Om8ucG9ydCxwYXRobmFtZTpcIi9cIj09PW8ucGF0aG5hbWUuY2hhckF0KDApP28ucGF0aG5hbWU6XCIvXCIrby5wYXRobmFtZX19dmFyIGUsbj0vKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7cmV0dXJuIGU9dCh3aW5kb3cubG9jYXRpb24uaHJlZiksZnVuY3Rpb24obil7dmFyIG89ci5pc1N0cmluZyhuKT90KG4pOm47cmV0dXJuIG8ucHJvdG9jb2w9PT1lLnByb3RvY29sJiZvLmhvc3Q9PT1lLmhvc3R9fSgpOmZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuITB9fSgpfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bigxKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtyLmZvckVhY2godCxmdW5jdGlvbihuLHIpe3IhPT1lJiZyLnRvVXBwZXJDYXNlKCk9PT1lLnRvVXBwZXJDYXNlKCkmJih0W2VdPW4sZGVsZXRlIHRbcl0pfSl9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bigxKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGUsbixvLGk9e307cmV0dXJuIHQ/KHIuZm9yRWFjaCh0LnNwbGl0KFwiXFxuXCIpLGZ1bmN0aW9uKHQpe289dC5pbmRleE9mKFwiOlwiKSxlPXIudHJpbSh0LnN1YnN0cigwLG8pKS50b0xvd2VyQ2FzZSgpLG49ci50cmltKHQuc3Vic3RyKG8rMSkpLGUmJihpW2VdPWlbZV0/aVtlXStcIiwgXCIrbjpuKX0pLGkpOml9fSxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUsbil7dmFyIHI9bi5jb25maWcudmFsaWRhdGVTdGF0dXM7bi5zdGF0dXMmJnImJiFyKG4uc3RhdHVzKT9lKG4pOnQobil9fSxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIHQuYXBwbHkobnVsbCxlKX19fSxmdW5jdGlvbih0LGUsbil7dmFyIHI7KGZ1bmN0aW9uKHQsbyxpKXsvKiFcblx0ICogQG92ZXJ2aWV3IGVzNi1wcm9taXNlIC0gYSB0aW55IGltcGxlbWVudGF0aW9uIG9mIFByb21pc2VzL0ErLlxuXHQgKiBAY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNCBZZWh1ZGEgS2F0eiwgVG9tIERhbGUsIFN0ZWZhbiBQZW5uZXIgYW5kIGNvbnRyaWJ1dG9ycyAoQ29udmVyc2lvbiB0byBFUzYgQVBJIGJ5IEpha2UgQXJjaGliYWxkKVxuXHQgKiBAbGljZW5zZSAgIExpY2Vuc2VkIHVuZGVyIE1JVCBsaWNlbnNlXG5cdCAqICAgICAgICAgICAgU2VlIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9qYWtlYXJjaGliYWxkL2VzNi1wcm9taXNlL21hc3Rlci9MSUNFTlNFXG5cdCAqIEB2ZXJzaW9uICAgMy4yLjFcblx0ICovXG4oZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB1KHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHR8fFwib2JqZWN0XCI9PXR5cGVvZiB0JiZudWxsIT09dH1mdW5jdGlvbiBzKHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHR9ZnVuY3Rpb24gYyh0KXtHPXR9ZnVuY3Rpb24gYSh0KXt0dD10fWZ1bmN0aW9uIGYoKXtyZXR1cm4gZnVuY3Rpb24oKXt0Lm5leHRUaWNrKG0pfX1mdW5jdGlvbiBsKCl7cmV0dXJuIGZ1bmN0aW9uKCl7WShtKX19ZnVuY3Rpb24gcCgpe3ZhciB0PTAsZT1uZXcgcnQobSksbj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTtyZXR1cm4gZS5vYnNlcnZlKG4se2NoYXJhY3RlckRhdGE6ITB9KSxmdW5jdGlvbigpe24uZGF0YT10PSsrdCUyfX1mdW5jdGlvbiBoKCl7dmFyIHQ9bmV3IE1lc3NhZ2VDaGFubmVsO3JldHVybiB0LnBvcnQxLm9ubWVzc2FnZT1tLGZ1bmN0aW9uKCl7dC5wb3J0Mi5wb3N0TWVzc2FnZSgwKX19ZnVuY3Rpb24gZCgpe3JldHVybiBmdW5jdGlvbigpe3NldFRpbWVvdXQobSwxKX19ZnVuY3Rpb24gbSgpe2Zvcih2YXIgdD0wO3Q8Wjt0Kz0yKXt2YXIgZT11dFt0XSxuPXV0W3QrMV07ZShuKSx1dFt0XT12b2lkIDAsdXRbdCsxXT12b2lkIDB9Wj0wfWZ1bmN0aW9uIHYoKXt0cnl7dmFyIHQ9bigyNyk7cmV0dXJuIFk9dC5ydW5Pbkxvb3B8fHQucnVuT25Db250ZXh0LGwoKX1jYXRjaChlKXtyZXR1cm4gZCgpfX1mdW5jdGlvbiB5KHQsZSl7dmFyIG49dGhpcyxyPW5ldyB0aGlzLmNvbnN0cnVjdG9yKHcpO3ZvaWQgMD09PXJbYXRdJiZNKHIpO3ZhciBvPW4uX3N0YXRlO2lmKG8pe3ZhciBpPWFyZ3VtZW50c1tvLTFdO3R0KGZ1bmN0aW9uKCl7TChvLHIsaSxuLl9yZXN1bHQpfSl9ZWxzZSBEKG4scix0LGUpO3JldHVybiByfWZ1bmN0aW9uIGcodCl7dmFyIGU9dGhpcztpZih0JiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdC5jb25zdHJ1Y3Rvcj09PWUpcmV0dXJuIHQ7dmFyIG49bmV3IGUodyk7cmV0dXJuIEMobix0KSxufWZ1bmN0aW9uIHcoKXt9ZnVuY3Rpb24gYigpe3JldHVybiBuZXcgVHlwZUVycm9yKFwiWW91IGNhbm5vdCByZXNvbHZlIGEgcHJvbWlzZSB3aXRoIGl0c2VsZlwiKX1mdW5jdGlvbiB4KCl7cmV0dXJuIG5ldyBUeXBlRXJyb3IoXCJBIHByb21pc2VzIGNhbGxiYWNrIGNhbm5vdCByZXR1cm4gdGhhdCBzYW1lIHByb21pc2UuXCIpfWZ1bmN0aW9uIF8odCl7dHJ5e3JldHVybiB0LnRoZW59Y2F0Y2goZSl7cmV0dXJuIGh0LmVycm9yPWUsaHR9fWZ1bmN0aW9uIEEodCxlLG4scil7dHJ5e3QuY2FsbChlLG4scil9Y2F0Y2gobyl7cmV0dXJuIG99fWZ1bmN0aW9uIEUodCxlLG4pe3R0KGZ1bmN0aW9uKHQpe3ZhciByPSExLG89QShuLGUsZnVuY3Rpb24obil7cnx8KHI9ITAsZSE9PW4/Qyh0LG4pOlIodCxuKSl9LGZ1bmN0aW9uKGUpe3J8fChyPSEwLE8odCxlKSl9LFwiU2V0dGxlOiBcIisodC5fbGFiZWx8fFwiIHVua25vd24gcHJvbWlzZVwiKSk7IXImJm8mJihyPSEwLE8odCxvKSl9LHQpfWZ1bmN0aW9uIFModCxlKXtlLl9zdGF0ZT09PWx0P1IodCxlLl9yZXN1bHQpOmUuX3N0YXRlPT09cHQ/Tyh0LGUuX3Jlc3VsdCk6RChlLHZvaWQgMCxmdW5jdGlvbihlKXtDKHQsZSl9LGZ1bmN0aW9uKGUpe08odCxlKX0pfWZ1bmN0aW9uIGoodCxlLG4pe2UuY29uc3RydWN0b3I9PT10LmNvbnN0cnVjdG9yJiZuPT09c3QmJmNvbnN0cnVjdG9yLnJlc29sdmU9PT1jdD9TKHQsZSk6bj09PWh0P08odCxodC5lcnJvcik6dm9pZCAwPT09bj9SKHQsZSk6cyhuKT9FKHQsZSxuKTpSKHQsZSl9ZnVuY3Rpb24gQyh0LGUpe3Q9PT1lP08odCxiKCkpOnUoZSk/aih0LGUsXyhlKSk6Uih0LGUpfWZ1bmN0aW9uIFQodCl7dC5fb25lcnJvciYmdC5fb25lcnJvcih0Ll9yZXN1bHQpLEIodCl9ZnVuY3Rpb24gUih0LGUpe3QuX3N0YXRlPT09ZnQmJih0Ll9yZXN1bHQ9ZSx0Ll9zdGF0ZT1sdCwwIT09dC5fc3Vic2NyaWJlcnMubGVuZ3RoJiZ0dChCLHQpKX1mdW5jdGlvbiBPKHQsZSl7dC5fc3RhdGU9PT1mdCYmKHQuX3N0YXRlPXB0LHQuX3Jlc3VsdD1lLHR0KFQsdCkpfWZ1bmN0aW9uIEQodCxlLG4scil7dmFyIG89dC5fc3Vic2NyaWJlcnMsaT1vLmxlbmd0aDt0Ll9vbmVycm9yPW51bGwsb1tpXT1lLG9baStsdF09bixvW2krcHRdPXIsMD09PWkmJnQuX3N0YXRlJiZ0dChCLHQpfWZ1bmN0aW9uIEIodCl7dmFyIGU9dC5fc3Vic2NyaWJlcnMsbj10Ll9zdGF0ZTtpZigwIT09ZS5sZW5ndGgpe2Zvcih2YXIgcixvLGk9dC5fcmVzdWx0LHU9MDt1PGUubGVuZ3RoO3UrPTMpcj1lW3VdLG89ZVt1K25dLHI/TChuLHIsbyxpKTpvKGkpO3QuX3N1YnNjcmliZXJzLmxlbmd0aD0wfX1mdW5jdGlvbiBJKCl7dGhpcy5lcnJvcj1udWxsfWZ1bmN0aW9uIHEodCxlKXt0cnl7cmV0dXJuIHQoZSl9Y2F0Y2gobil7cmV0dXJuIGR0LmVycm9yPW4sZHR9fWZ1bmN0aW9uIEwodCxlLG4scil7dmFyIG8saSx1LGMsYT1zKG4pO2lmKGEpe2lmKG89cShuLHIpLG89PT1kdD8oYz0hMCxpPW8uZXJyb3Isbz1udWxsKTp1PSEwLGU9PT1vKXJldHVybiB2b2lkIE8oZSx4KCkpfWVsc2Ugbz1yLHU9ITA7ZS5fc3RhdGUhPT1mdHx8KGEmJnU/QyhlLG8pOmM/TyhlLGkpOnQ9PT1sdD9SKGUsbyk6dD09PXB0JiZPKGUsbykpfWZ1bmN0aW9uIFAodCxlKXt0cnl7ZShmdW5jdGlvbihlKXtDKHQsZSl9LGZ1bmN0aW9uKGUpe08odCxlKX0pfWNhdGNoKG4pe08odCxuKX19ZnVuY3Rpb24gVSgpe3JldHVybiBtdCsrfWZ1bmN0aW9uIE0odCl7dFthdF09bXQrKyx0Ll9zdGF0ZT12b2lkIDAsdC5fcmVzdWx0PXZvaWQgMCx0Ll9zdWJzY3JpYmVycz1bXX1mdW5jdGlvbiBOKHQpe3JldHVybiBuZXcgYnQodGhpcyx0KS5wcm9taXNlfWZ1bmN0aW9uIFgodCl7dmFyIGU9dGhpcztyZXR1cm4gbmV3IGUoUSh0KT9mdW5jdGlvbihuLHIpe2Zvcih2YXIgbz10Lmxlbmd0aCxpPTA7aTxvO2krKyllLnJlc29sdmUodFtpXSkudGhlbihuLHIpfTpmdW5jdGlvbih0LGUpe2UobmV3IFR5cGVFcnJvcihcIllvdSBtdXN0IHBhc3MgYW4gYXJyYXkgdG8gcmFjZS5cIikpfSl9ZnVuY3Rpb24gRih0KXt2YXIgZT10aGlzLG49bmV3IGUodyk7cmV0dXJuIE8obix0KSxufWZ1bmN0aW9uIGsoKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiWW91IG11c3QgcGFzcyBhIHJlc29sdmVyIGZ1bmN0aW9uIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgcHJvbWlzZSBjb25zdHJ1Y3RvclwiKX1mdW5jdGlvbiBIKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Byb21pc2UnOiBQbGVhc2UgdXNlIHRoZSAnbmV3JyBvcGVyYXRvciwgdGhpcyBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLlwiKX1mdW5jdGlvbiBLKHQpe3RoaXNbYXRdPVUoKSx0aGlzLl9yZXN1bHQ9dGhpcy5fc3RhdGU9dm9pZCAwLHRoaXMuX3N1YnNjcmliZXJzPVtdLHchPT10JiYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmaygpLHRoaXMgaW5zdGFuY2VvZiBLP1AodGhpcyx0KTpIKCkpfWZ1bmN0aW9uIFYodCxlKXt0aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yPXQsdGhpcy5wcm9taXNlPW5ldyB0KHcpLHRoaXMucHJvbWlzZVthdF18fE0odGhpcy5wcm9taXNlKSxRKGUpPyh0aGlzLl9pbnB1dD1lLHRoaXMubGVuZ3RoPWUubGVuZ3RoLHRoaXMuX3JlbWFpbmluZz1lLmxlbmd0aCx0aGlzLl9yZXN1bHQ9bmV3IEFycmF5KHRoaXMubGVuZ3RoKSwwPT09dGhpcy5sZW5ndGg/Uih0aGlzLnByb21pc2UsdGhpcy5fcmVzdWx0KToodGhpcy5sZW5ndGg9dGhpcy5sZW5ndGh8fDAsdGhpcy5fZW51bWVyYXRlKCksMD09PXRoaXMuX3JlbWFpbmluZyYmUih0aGlzLnByb21pc2UsdGhpcy5fcmVzdWx0KSkpOk8odGhpcy5wcm9taXNlLHooKSl9ZnVuY3Rpb24geigpe3JldHVybiBuZXcgRXJyb3IoXCJBcnJheSBNZXRob2RzIG11c3QgYmUgcHJvdmlkZWQgYW4gQXJyYXlcIil9ZnVuY3Rpb24gJCgpe3ZhciB0O2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBvKXQ9bztlbHNlIGlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmKXQ9c2VsZjtlbHNlIHRyeXt0PUZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKX1jYXRjaChlKXt0aHJvdyBuZXcgRXJyb3IoXCJwb2x5ZmlsbCBmYWlsZWQgYmVjYXVzZSBnbG9iYWwgb2JqZWN0IGlzIHVuYXZhaWxhYmxlIGluIHRoaXMgZW52aXJvbm1lbnRcIil9dmFyIG49dC5Qcm9taXNlO24mJlwiW29iamVjdCBQcm9taXNlXVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG4ucmVzb2x2ZSgpKSYmIW4uY2FzdHx8KHQuUHJvbWlzZT13dCl9dmFyIEo7Sj1BcnJheS5pc0FycmF5P0FycmF5LmlzQXJyYXk6ZnVuY3Rpb24odCl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpfTt2YXIgWSxHLFcsUT1KLFo9MCx0dD1mdW5jdGlvbih0LGUpe3V0W1pdPXQsdXRbWisxXT1lLForPTIsMj09PVomJihHP0cobSk6VygpKX0sZXQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dm9pZCAwLG50PWV0fHx7fSxydD1udC5NdXRhdGlvbk9ic2VydmVyfHxudC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyLG90PVwidW5kZWZpbmVkXCI9PXR5cGVvZiBzZWxmJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgdCYmXCJbb2JqZWN0IHByb2Nlc3NdXCI9PT17fS50b1N0cmluZy5jYWxsKHQpLGl0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBVaW50OENsYW1wZWRBcnJheSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGltcG9ydFNjcmlwdHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBNZXNzYWdlQ2hhbm5lbCx1dD1uZXcgQXJyYXkoMWUzKTtXPW90P2YoKTpydD9wKCk6aXQ/aCgpOnZvaWQgMD09PWV0P3YoKTpkKCk7dmFyIHN0PXksY3Q9ZyxhdD1NYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMTYpLGZ0PXZvaWQgMCxsdD0xLHB0PTIsaHQ9bmV3IEksZHQ9bmV3IEksbXQ9MCx2dD1OLHl0PVgsZ3Q9Rix3dD1LO0suYWxsPXZ0LEsucmFjZT15dCxLLnJlc29sdmU9Y3QsSy5yZWplY3Q9Z3QsSy5fc2V0U2NoZWR1bGVyPWMsSy5fc2V0QXNhcD1hLEsuX2FzYXA9dHQsSy5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOkssdGhlbjpzdCxcImNhdGNoXCI6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudGhlbihudWxsLHQpfX07dmFyIGJ0PVY7Vi5wcm90b3R5cGUuX2VudW1lcmF0ZT1mdW5jdGlvbigpe2Zvcih2YXIgdD10aGlzLmxlbmd0aCxlPXRoaXMuX2lucHV0LG49MDt0aGlzLl9zdGF0ZT09PWZ0JiZuPHQ7bisrKXRoaXMuX2VhY2hFbnRyeShlW25dLG4pfSxWLnByb3RvdHlwZS5fZWFjaEVudHJ5PWZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcy5faW5zdGFuY2VDb25zdHJ1Y3RvcixyPW4ucmVzb2x2ZTtpZihyPT09Y3Qpe3ZhciBvPV8odCk7aWYobz09PXN0JiZ0Ll9zdGF0ZSE9PWZ0KXRoaXMuX3NldHRsZWRBdCh0Ll9zdGF0ZSxlLHQuX3Jlc3VsdCk7ZWxzZSBpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBvKXRoaXMuX3JlbWFpbmluZy0tLHRoaXMuX3Jlc3VsdFtlXT10O2Vsc2UgaWYobj09PXd0KXt2YXIgaT1uZXcgbih3KTtqKGksdCxvKSx0aGlzLl93aWxsU2V0dGxlQXQoaSxlKX1lbHNlIHRoaXMuX3dpbGxTZXR0bGVBdChuZXcgbihmdW5jdGlvbihlKXtlKHQpfSksZSl9ZWxzZSB0aGlzLl93aWxsU2V0dGxlQXQocih0KSxlKX0sVi5wcm90b3R5cGUuX3NldHRsZWRBdD1mdW5jdGlvbih0LGUsbil7dmFyIHI9dGhpcy5wcm9taXNlO3IuX3N0YXRlPT09ZnQmJih0aGlzLl9yZW1haW5pbmctLSx0PT09cHQ/TyhyLG4pOnRoaXMuX3Jlc3VsdFtlXT1uKSwwPT09dGhpcy5fcmVtYWluaW5nJiZSKHIsdGhpcy5fcmVzdWx0KX0sVi5wcm90b3R5cGUuX3dpbGxTZXR0bGVBdD1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXM7RCh0LHZvaWQgMCxmdW5jdGlvbih0KXtuLl9zZXR0bGVkQXQobHQsZSx0KX0sZnVuY3Rpb24odCl7bi5fc2V0dGxlZEF0KHB0LGUsdCl9KX07dmFyIHh0PSQsX3Q9e1Byb21pc2U6d3QscG9seWZpbGw6eHR9O24oMjUpLmFtZD8ocj1mdW5jdGlvbigpe3JldHVybiBfdH0uY2FsbChlLG4sZSxpKSwhKHZvaWQgMCE9PXImJihpLmV4cG9ydHM9cikpKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgaSYmaS5leHBvcnRzP2kuZXhwb3J0cz1fdDpcInVuZGVmaW5lZFwiIT10eXBlb2YgdGhpcyYmKHRoaXMuRVM2UHJvbWlzZT1fdCkseHQoKX0pLmNhbGwodGhpcyl9KS5jYWxsKGUsbigyKSxmdW5jdGlvbigpe3JldHVybiB0aGlzfSgpLG4oMjYpKHQpKX0sZnVuY3Rpb24odCxlLG4pe1widW5kZWZpbmVkXCI9PXR5cGVvZiBQcm9taXNlJiZuKDIxKS5wb2x5ZmlsbCgpO3ZhciByPW4oMjQpLG89big1KSxpPW4oMjMpLHU9e2Jhc2VVUkw6XCJodHRwczovL2Rldi5hcGkuaWJtLmNvbS92aXJ0dWFsYWdlbnQvZGV2ZWxvcG1lbnQvYXBpL3YxL1wiLHRpbWVvdXQ6M2U0LHVzZXJJRDpudWxsLHdpdGhDcmVkZW50aWFsczohMSxYSUJNQ2xpZW50SUQ6ITEsWElCTUNsaWVudFNlY3JldDohMX0scz1vLmNyZWF0ZSh1KSxjPS9cXHwmKC4qPylcXHwvZyxhPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wO2U8dC50ZXh0Lmxlbmd0aDtlKyspe3ZhciBuPXQudGV4dFtlXS5tYXRjaChjKXx8W107dC50ZXh0W2VdPW4ucmVkdWNlKGZ1bmN0aW9uKHQsZSl7Y29uc3Qgbj1lLnNsaWNlKDIsLTEpLHI9aS5nZXQobik7cmV0dXJuIHQucmVwbGFjZShlLHIpfSx0LnRleHRbZV0pfXJldHVybiB0fSxmPXQuZXhwb3J0cz17Y29uZmlndXJlOmZ1bmN0aW9uKHQpe3JldHVybiByKHUsdCkscz1vLmNyZWF0ZSh7YmFzZVVSTDp1LmJhc2VVUkwsdGltZW91dDp1LnRpbWVvdXQsd2l0aENyZWRlbnRpYWxzOnUud2l0aENyZWRlbnRpYWxzLGhlYWRlcnM6dS5YSUJNQ2xpZW50SUQmJnUuWElCTUNsaWVudFNlY3JldD97XCJYLUlCTS1DbGllbnQtSWRcIjp1LlhJQk1DbGllbnRJRCxcIlgtSUJNLUNsaWVudC1TZWNyZXRcIjp1LlhJQk1DbGllbnRTZWNyZXR9Ont9fSksZn0sc3RhcnQ6ZnVuY3Rpb24odCl7dmFyIGU9bCgpLG49e3VzZXJJRDp1LnVzZXJJRH0scj1cIi9ib3RzL1wiK3QrXCIvZGlhbG9nc1wiLG89e2hlYWRlcnM6e1wiWC1SZXF1ZXN0LUlEXCI6ZX19O3JldHVybiBzLnBvc3QocixuLG8pLnRoZW4oZnVuY3Rpb24odCl7cmV0dXJue2NoYXRJRDp0LmRhdGEuZGlhbG9nX2lkLG1lc3NhZ2U6YSh0LmRhdGEubWVzc2FnZSl9fSlbXCJjYXRjaFwiXShmdW5jdGlvbih0KXtjb25zb2xlLmVycm9yKFwiUmVxdWVzdCBmYWlsZWQ6XCIsZSkscCh0KX0pfSxzZW5kOmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1sKCksbz17bWVzc2FnZTpuLHVzZXJJRDp1LnVzZXJJRH0saT1cIi9ib3RzL1wiK3QrXCIvZGlhbG9ncy9cIitlK1wiL21lc3NhZ2VzXCIsYz1cIm1lc3NhZ2U9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG4pLGY9e2hlYWRlcnM6e1wiWC1SZXF1ZXN0LUlEXCI6cn19O3JldHVybiBzLnBvc3QoaStcIj9cIitjLG8sZikudGhlbihmdW5jdGlvbih0KXtyZXR1cm57bWVzc2FnZTphKHQuZGF0YS5tZXNzYWdlKX19KVtcImNhdGNoXCJdKGZ1bmN0aW9uKHQpe2NvbnNvbGUuZXJyb3IoXCJSZXF1ZXN0IGZhaWxlZDpcIixyKSxwKHQpfSl9LHByb2ZpbGU6e2dldDppLmdldCxzZXQ6aS5zZXQsaGFzOmkuaGFzLGNsZWFyOmkuY2xlYXIsXCJkZWxldGVcIjppW1wiZGVsZXRlXCJdLGZvckVhY2g6aS5mb3JFYWNofX0sbD1mdW5jdGlvbigpe3JldHVyblwieHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4XCIucmVwbGFjZSgvW3h5XS9nLGZ1bmN0aW9uKHQpe3ZhciBlPTE2Kk1hdGgucmFuZG9tKCl8MCxuPVwieFwiPT10P2U6MyZlfDg7cmV0dXJuIG4udG9TdHJpbmcoMTYpfSl9LHA9ZnVuY3Rpb24odCl7aWYoIXQuc3RhdHVzKXRocm93IHQ7dmFyIGU9dC5zdGF0dXMsbj10LnN0YXR1c1RleHQscj1uZXcgRXJyb3Iobik7dGhyb3cgci5zdGF0dXM9ZSxyfX0sZnVuY3Rpb24odCxlKXt2YXIgbj17fSxyPXtzZXQ6ZnVuY3Rpb24odCxlKXtyZXR1cm4gblt0XT1lLHJ9LGdldDpmdW5jdGlvbih0KXtyZXR1cm4gblt0XXx8XCJcIn0saGFzOmZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDAhPT1uW3RdfSxjbGVhcjpmdW5jdGlvbigpe3JldHVybiBuPXt9LHJ9LFwiZGVsZXRlXCI6ZnVuY3Rpb24odCl7cmV0dXJuIGRlbGV0ZSBuW3RdLHJ9LGZvckVhY2g6ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LmtleXMobikuZm9yRWFjaChmdW5jdGlvbihyKXtlP3QocixuW3JdKS5iaW5kKGUpOnQocixuW3JdKX0pLHJ9fTt0LmV4cG9ydHM9cn0sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiBuKHQsZSxuKXtzd2l0Y2gobi5sZW5ndGgpe2Nhc2UgMDpyZXR1cm4gdC5jYWxsKGUpO2Nhc2UgMTpyZXR1cm4gdC5jYWxsKGUsblswXSk7Y2FzZSAyOnJldHVybiB0LmNhbGwoZSxuWzBdLG5bMV0pO2Nhc2UgMzpyZXR1cm4gdC5jYWxsKGUsblswXSxuWzFdLG5bMl0pfXJldHVybiB0LmFwcGx5KGUsbil9ZnVuY3Rpb24gcih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/dm9pZCAwOmVbdF19fWZ1bmN0aW9uIG8odCxlKXtmb3IodmFyIG49LTEscj1BcnJheSh0KTsrK248dDspcltuXT1lKG4pO3JldHVybiByfWZ1bmN0aW9uIGkodCxlKXtyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIHQoZShuKSl9fWZ1bmN0aW9uIHUodCxlLG4pe3ZhciByPXRbZV07Qi5jYWxsKHQsZSkmJm0ocixuKSYmKHZvaWQgMCE9PW58fGUgaW4gdCl8fCh0W2VdPW4pfWZ1bmN0aW9uIHModCxlKXtyZXR1cm4gbnVsbCE9dCYmKEIuY2FsbCh0LGUpfHxcIm9iamVjdFwiPT10eXBlb2YgdCYmZSBpbiB0JiZudWxsPT09Rih0KSl9ZnVuY3Rpb24gYyh0LGUpe3JldHVybiBlPVUodm9pZCAwPT09ZT90Lmxlbmd0aC0xOmUsMCksZnVuY3Rpb24oKXtmb3IodmFyIHI9YXJndW1lbnRzLG89LTEsaT1VKHIubGVuZ3RoLWUsMCksdT1BcnJheShpKTsrK288aTspdVtvXT1yW2Urb107bz0tMTtmb3IodmFyIHM9QXJyYXkoZSsxKTsrK288ZTspc1tvXT1yW29dO3JldHVybiBzW2VdPXUsbih0LHRoaXMscyl9fWZ1bmN0aW9uIGEodCxlLG4scil7bnx8KG49e30pO2Zvcih2YXIgbz0tMSxpPWUubGVuZ3RoOysrbzxpOyl7dmFyIHM9ZVtvXSxjPXI/cihuW3NdLHRbc10scyxuLHQpOnZvaWQgMDt1KG4scyx2b2lkIDA9PT1jP3Rbc106Yyl9cmV0dXJuIG59ZnVuY3Rpb24gZih0KXtyZXR1cm4gYyhmdW5jdGlvbihlLG4pe3ZhciByPS0xLG89bi5sZW5ndGgsaT1vPjE/bltvLTFdOnZvaWQgMCx1PW8+Mj9uWzJdOnZvaWQgMDtmb3IoaT10Lmxlbmd0aD4zJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBpPyhvLS0saSk6dm9pZCAwLHUmJmgoblswXSxuWzFdLHUpJiYoaT1vPDM/dm9pZCAwOmksbz0xKSxlPU9iamVjdChlKTsrK3I8bzspe3ZhciBzPW5bcl07cyYmdChlLHMscixpKX1yZXR1cm4gZX0pfWZ1bmN0aW9uIGwodCl7dmFyIGU9dD90Lmxlbmd0aDp2b2lkIDA7cmV0dXJuIGIoZSkmJihrKHQpfHxBKHQpfHx2KHQpKT9vKGUsU3RyaW5nKTpudWxsfWZ1bmN0aW9uIHAodCxlKXtyZXR1cm4gZT1udWxsPT1lP1M6ZSwhIWUmJihcIm51bWJlclwiPT10eXBlb2YgdHx8Ty50ZXN0KHQpKSYmdD4tMSYmdCUxPT0wJiZ0PGV9ZnVuY3Rpb24gaCh0LGUsbil7aWYoIXgobikpcmV0dXJuITE7dmFyIHI9dHlwZW9mIGU7cmV0dXJuISEoXCJudW1iZXJcIj09cj95KG4pJiZwKGUsbi5sZW5ndGgpOlwic3RyaW5nXCI9PXImJmUgaW4gbikmJm0obltlXSx0KX1mdW5jdGlvbiBkKHQpe3ZhciBlPXQmJnQuY29uc3RydWN0b3Isbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlLnByb3RvdHlwZXx8RDtyZXR1cm4gdD09PW59ZnVuY3Rpb24gbSh0LGUpe3JldHVybiB0PT09ZXx8dCE9PXQmJmUhPT1lfWZ1bmN0aW9uIHYodCl7cmV0dXJuIGcodCkmJkIuY2FsbCh0LFwiY2FsbGVlXCIpJiYoIXEuY2FsbCh0LFwiY2FsbGVlXCIpfHxJLmNhbGwodCk9PWopfWZ1bmN0aW9uIHkodCl7cmV0dXJuIG51bGwhPXQmJmIoWCh0KSkmJiF3KHQpfWZ1bmN0aW9uIGcodCl7cmV0dXJuIF8odCkmJnkodCl9ZnVuY3Rpb24gdyh0KXt2YXIgZT14KHQpP0kuY2FsbCh0KTpcIlwiO3JldHVybiBlPT1DfHxlPT1UfWZ1bmN0aW9uIGIodCl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIHQmJnQ+LTEmJnQlMT09MCYmdDw9U31mdW5jdGlvbiB4KHQpe3ZhciBlPXR5cGVvZiB0O3JldHVybiEhdCYmKFwib2JqZWN0XCI9PWV8fFwiZnVuY3Rpb25cIj09ZSl9ZnVuY3Rpb24gXyh0KXtyZXR1cm4hIXQmJlwib2JqZWN0XCI9PXR5cGVvZiB0fWZ1bmN0aW9uIEEodCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHR8fCFrKHQpJiZfKHQpJiZJLmNhbGwodCk9PVJ9ZnVuY3Rpb24gRSh0KXt2YXIgZT1kKHQpO2lmKCFlJiYheSh0KSlyZXR1cm4gTih0KTt2YXIgbj1sKHQpLHI9ISFuLG89bnx8W10saT1vLmxlbmd0aDtmb3IodmFyIHUgaW4gdCkhcyh0LHUpfHxyJiYoXCJsZW5ndGhcIj09dXx8cCh1LGkpKXx8ZSYmXCJjb25zdHJ1Y3RvclwiPT11fHxvLnB1c2godSk7cmV0dXJuIG99dmFyIFM9OTAwNzE5OTI1NDc0MDk5MSxqPVwiW29iamVjdCBBcmd1bWVudHNdXCIsQz1cIltvYmplY3QgRnVuY3Rpb25dXCIsVD1cIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCIsUj1cIltvYmplY3QgU3RyaW5nXVwiLE89L14oPzowfFsxLTldXFxkKikkLyxEPU9iamVjdC5wcm90b3R5cGUsQj1ELmhhc093blByb3BlcnR5LEk9RC50b1N0cmluZyxxPUQucHJvcGVydHlJc0VudW1lcmFibGUsTD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsUD1PYmplY3Qua2V5cyxVPU1hdGgubWF4LE09IXEuY2FsbCh7dmFsdWVPZjoxfSxcInZhbHVlT2ZcIiksTj1pKFAsT2JqZWN0KSxYPXIoXCJsZW5ndGhcIiksRj1pKEwsT2JqZWN0KSxrPUFycmF5LmlzQXJyYXksSD1mKGZ1bmN0aW9uKHQsZSl7aWYoTXx8ZChlKXx8eShlKSlyZXR1cm4gdm9pZCBhKGUsRShlKSx0KTtmb3IodmFyIG4gaW4gZSlCLmNhbGwoZSxuKSYmdSh0LG4sZVtuXSl9KTt0LmV4cG9ydHM9SH0sZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJkZWZpbmUgY2Fubm90IGJlIHVzZWQgaW5kaXJlY3RcIil9fSxmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gdC53ZWJwYWNrUG9seWZpbGx8fCh0LmRlcHJlY2F0ZT1mdW5jdGlvbigpe30sdC5wYXRocz1bXSx0LmNoaWxkcmVuPVtdLHQud2VicGFja1BvbHlmaWxsPTEpLHR9fSxmdW5jdGlvbih0LGUpe31dKX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L0B3YXRzb24tdmlydHVhbC1hZ2VudC9jbGllbnQtc2RrL2xpYi93ZWIuanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgaWQ9XFxcIiR7ZGF0YS51dWlkfVxcXCIgY2xhc3M9XFxcIklCTUNoYXQtdXNlci1tZXNzYWdlLWNvbnRhaW5lciBJQk1DaGF0LXVzZXItbWVzc2FnZS1jb250YWluZXItdGhlbWVcXFwiPlxcblxcdDxkaXYgY2xhc3M9XFxcIklCTUNoYXQtdXNlci1tZXNzYWdlIElCTUNoYXQtdXNlci1tZXNzYWdlLXRoZW1lIElCTUNoYXQtc2Vjb25kYXJ5LWNvbG9yc1xcXCI+PC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2V2ZW50SGFuZGxlcnMvdGVtcGxhdGVzL3NlbmQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4uLy4uL3N0YXRlJyk7XG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ2xvZGFzaC9hc3NpZ24nKTtcblxuZnVuY3Rpb24gc2VuZE1vY2soZGF0YSkge1xuXHRpZiAoZGF0YS50ZXh0ICYmIGRhdGEudGV4dC5sZW5ndGggPiAwKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHRcdHZhciBuZXdEYXRhID0gYXNzaWduKHt9LCBkYXRhLCB7IHV1aWQ6IHV0aWxzLmdldFVVSUQoKSB9KTtcblx0XHR2YXIgdGV4dCA9IHJlcXVpcmUoJy4uL3RlbXBsYXRlcy9zZW5kLmh0bWwnKTtcblx0XHR2YXIgcGFyc2VkID0gdXRpbHMucmVwbGFjZUFsbCh0ZXh0LCAnJHtkYXRhLnV1aWR9JywgbmV3RGF0YS51dWlkKTtcblx0XHRjdXJyZW50LmNoYXRIb2xkZXIuaW5uZXJIVE1MICs9IHBhcnNlZDtcblx0XHRjdXJyZW50LmNoYXRIb2xkZXIucXVlcnlTZWxlY3RvcignIycgKyBuZXdEYXRhLnV1aWQgKyAnIC5JQk1DaGF0LXVzZXItbWVzc2FnZScpLnRleHRDb250ZW50ID0gZGF0YS50ZXh0O1xuXHRcdGV2ZW50cy5wdWJsaXNoKCdzY3JvbGwtdG8tYm90dG9tJyk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZW5kTW9jaztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRIYW5kbGVycy9ldmVudHMvc2VuZC1tb2NrLmpzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIHN0YXRlID0gcmVxdWlyZSgnLi4vLi4vc3RhdGUnKTtcbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcblxuZnVuY3Rpb24gc2VuZElucHV0TWVzc2FnZSgpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHRpZiAoIWN1cnJlbnQuaW5Qcm9ncmVzcyAmJiAhY3VycmVudC5kaXNhYmxlSW5wdXQpIHtcblx0XHR2YXIgdGV4dCA9IGN1cnJlbnQucm9vdC5xdWVyeVNlbGVjdG9yKCcuSUJNQ2hhdC1jaGF0LXRleHRib3gnKS52YWx1ZTtcblx0XHRldmVudHMucHVibGlzaCgnc2VuZCcsIHtcblx0XHRcdHRleHQ6IHRleHRcblx0XHR9KTtcblx0XHR0ZXh0ID0gJyc7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZW5kSW5wdXRNZXNzYWdlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9ldmVudEhhbmRsZXJzL2V2ZW50cy9zZW5kLWlucHV0LW1lc3NhZ2UuanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgc3RhdGUgPSByZXF1aXJlKCcuLi8uLi9zdGF0ZScpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5hYmxlSW5wdXQoKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0dmFyIGRpc2FibGVJbnB1dCA9IChjdXJyZW50LmRpc2FibGVJbnB1dCkgPyAoY3VycmVudC5kaXNhYmxlSW5wdXQgLSAxKSA6MDtcblx0c3RhdGUuc2V0U3RhdGUoeyBkaXNhYmxlSW5wdXQ6IGRpc2FibGVJbnB1dCB9KTtcblx0aWYgKCFkaXNhYmxlSW5wdXQpXG5cdFx0Y3VycmVudC5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVJbnB1dCgpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHR2YXIgZGlzYWJsZUlucHV0ID0gKGN1cnJlbnQuZGlzYWJsZUlucHV0KSA/IChjdXJyZW50LmRpc2FibGVJbnB1dCArIDEpIDogMTtcblx0c3RhdGUuc2V0U3RhdGUoeyBkaXNhYmxlSW5wdXQ6IGRpc2FibGVJbnB1dCB9KTtcblx0Y3VycmVudC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZUxvYWRpbmdJbnB1dCgpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHR2YXIgbG9hZGluZyA9IChjdXJyZW50LmxvYWRpbmcpID8gKGN1cnJlbnQubG9hZGluZyArIDEpIDogMTtcblx0c3RhdGUuc2V0U3RhdGUoe1xuXHRcdGxvYWRpbmc6IGxvYWRpbmdcblx0fSk7XG5cdHV0aWxzLnNwaW5uZXIuc2hvdyhjdXJyZW50LmxvYWRlcik7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVMb2FkaW5nSW5wdXQoKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0dmFyIGxvYWRpbmcgPSAoY3VycmVudC5sb2FkaW5nKSA/IChjdXJyZW50LmxvYWRpbmcgLSAxKSA6IDA7XG5cdHN0YXRlLnNldFN0YXRlKHtcblx0XHRsb2FkaW5nOiBsb2FkaW5nXG5cdH0pO1xuXHRpZiAobG9hZGluZyA9PT0gMClcblx0XHR1dGlscy5zcGlubmVyLmhpZGUoY3VycmVudC5sb2FkZXIpO1xufVxuXG5mdW5jdGlvbiBmb2N1c0lucHV0KCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdGN1cnJlbnQuaW5wdXQuZm9jdXMoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGVuYWJsZUlucHV0OiBlbmFibGVJbnB1dCxcblx0ZGlzYWJsZUlucHV0OiBkaXNhYmxlSW5wdXQsXG5cdGVuYWJsZUxvYWRpbmdJbnB1dDogZW5hYmxlTG9hZGluZ0lucHV0LFxuXHRkaXNhYmxlTG9hZGluZ0lucHV0OiBkaXNhYmxlTG9hZGluZ0lucHV0LFxuXHRmb2N1c0lucHV0OiBmb2N1c0lucHV0XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9ldmVudEhhbmRsZXJzL2V2ZW50cy9pbnB1dC5qc1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcblxudmFyIHN0YXR1c01hcCA9IHtcblx0NDAwOiAnQSBiYWQgcmVxdWVzdCB3YXMgbWFkZSwgc29tZXdoZXJlLiAoNDAwKScsXG5cdDQwMTogJ1RoaXMgcmVxdWVzdCBpcyB1bmF1dGhvcml6ZWQuICg0MDEpJyxcblx0NDAzOiAnVGhpcyByZXF1ZXN0IGlzIGZvcmJpZGRlbi4gKDQwMyknLFxuXHQ0MDQ6ICdUaGUgc2VydmVyIGlzIG1pc3NpbmcuICg0MDQpJyxcblx0NDA1OiAnTWV0aG9kIG5vdCBhbGxvd2VkLiAoNDA1KScsXG5cdDQwODogJ1dlIHRvb2sgdG9vIGxvbmcgdG8gcmVzcG9uZCwgc29tZXRoaW5nIG11c3QgYmUgd3JvbmcuICg0MDgpJyxcblx0NDEyOiAnVGhlIHdhcyBhbiBlcnJvciBvbiB0aGUgc2VydmVyLiAoNDEyKScsXG5cdDUwMDogJ1RoZSB3YXMgYW4gZXJyb3Igb24gdGhlIHNlcnZlci4gKDUwMCknLFxuXHQ1MDE6ICdUaGUgd2FzIGFuIGVycm9yIG9uIHRoZSBzZXJ2ZXIuICg1MDEpJyxcblx0NTAyOiAnVGhlIHdhcyBhbiBlcnJvciBvbiB0aGUgc2VydmVyLiAoNTAyKScsXG5cdDUwMzogJ1RoZSB3YXMgYW4gZXJyb3Igb24gdGhlIHNlcnZlci4gKDUwMyknLFxuXHQ1MDQ6ICdUaGUgd2FzIGFuIGVycm9yIG9uIHRoZSBzZXJ2ZXIuICg1MDQpJ1xufTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVFcnJvck1lc3NhZ2UoZXJyb3IpIHtcblx0aWYgKHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycpXG5cdFx0cmV0dXJuIGVycm9yO1xuXHRlbHNlIGlmIChlcnJvci5zdGF0dXMgJiYgc3RhdHVzTWFwW2Vycm9yLnN0YXR1c10gIT09IHVuZGVmaW5lZClcblx0XHRyZXR1cm4gc3RhdHVzTWFwW2Vycm9yLnN0YXR1c107XG5cdGVsc2UgaWYgKGVycm9yLnRpbWVvdXQpXG5cdFx0cmV0dXJuICdUaGUgcmVxdWVzdCB0b29rIHRvbyBsb25nLic7XG5cdGVsc2Vcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoZXJyb3IpO1xufVxuXG5mdW5jdGlvbiBlcnJvcihlcnIpIHtcblx0Y29uc29sZS5lcnJvcihhcmd1bWVudHMpO1xuXHRjb25zb2xlLmVycm9yKGdlbmVyYXRlRXJyb3JNZXNzYWdlKGVycikpO1xuXHRldmVudHMucHVibGlzaCgnc2VuZCcsIHtcblx0XHR0ZXh0OiAnYWdlbnQnLFxuXHRcdHNpbGVudDogdHJ1ZVxuXHR9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcnJvcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRIYW5kbGVycy9ldmVudHMvZXJyb3IuanNcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgc3RhdGUgPSByZXF1aXJlKCcuLi8uLi9zdGF0ZScpO1xuXG5mdW5jdGlvbiBzY3JvbGxUb0JvdHRvbSgpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHRjdXJyZW50LmNoYXRIb2xkZXIuc2Nyb2xsVG9wID0gY3VycmVudC5jaGF0SG9sZGVyLnNjcm9sbEhlaWdodDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzY3JvbGxUb0JvdHRvbTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRIYW5kbGVycy9ldmVudHMvc2Nyb2xsLXRvLWJvdHRvbS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzaG93TG9jYXRpb25zTGF5b3V0ID0gcmVxdWlyZSgnLi9zaG93LWxvY2F0aW9ucycpO1xudmFyIHJlcXVlc3RHZW9sb2NhdGlvbkxhdGxvbmdMYXlvdXQgPSByZXF1aXJlKCcuL3JlcXVlc3QtZ2VvbG9jYXRpb24tbGF0bG9uZycpO1xudmFyIGNob29zZUxvY2F0aW9uVHlwZUxheW91dCA9IHJlcXVpcmUoJy4vY2hvb3NlLWxvY2F0aW9uLXR5cGUnKTtcbnZhciBjaG9vc2VMYXlvdXQgPSByZXF1aXJlKCcuL2Nob29zZScpO1xudmFyIGZvcm1MYXlvdXQgPSByZXF1aXJlKCcuL2Zvcm0nKTtcbnZhciBjcmVkaXRDYXJkTGF5b3V0ID0gcmVxdWlyZSgnLi9jYy12YWxpZGF0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHNob3dMb2NhdGlvbnM6IHNob3dMb2NhdGlvbnNMYXlvdXQsXG5cdHJlcXVlc3RHZW9sb2NhdGlvbkxhdGxvbmc6IHJlcXVlc3RHZW9sb2NhdGlvbkxhdGxvbmdMYXlvdXQsXG5cdGNob29zZUxvY2F0aW9uVHlwZTogY2hvb3NlTG9jYXRpb25UeXBlTGF5b3V0LFxuXHRjaG9vc2U6IGNob29zZUxheW91dCxcblx0Y3JlZGl0Q2FyZDogY3JlZGl0Q2FyZExheW91dCxcblx0Zm9ybTogZm9ybUxheW91dFxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnJlcXVpcmUoJy4vc3R5bGVzLmNzcycpO1xuXG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG52YXIgc3Vic2NyaWJlID0gZXZlbnRzLnN1YnNjcmliZTtcbnZhciBwdWJsaXNoID0gZXZlbnRzLnB1Ymxpc2g7XG52YXIgc3RhdGUgPSByZXF1aXJlKCcuLi8uLi9zdGF0ZScpO1xudmFyIGdldFN0YXRlID0gc3RhdGUuZ2V0U3RhdGU7XG52YXIgc2V0U3RhdGUgPSBzdGF0ZS5zZXRTdGF0ZTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzJyk7XG5cbnZhciBmaXJzdCA9IHRydWU7XG52YXIgZGlzcGxheUxlbmd0aCA9IDM7XG52YXIgYnJlYWtwb2ludFdpZHRocyA9IFsnNzIwJywgJzY4MCcsICc2NDAnLCAnNTgwJywgJzUxMicsICc0ODAnLCAnNDIwJywgJzM2MCcsICczMjAnLCAnMjg4JywgJzI1NiddO1xudmFyIGRheXMgPSBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddO1xudmFyIHNob3dMb2NhdGlvbnMgPSB7fTtcbnZhciBsb2NhdGlvbklEcyA9IFtdO1xudmFyIGNoYXRXaWR0aCA9IDc0ODtcbnZhciBjdXJyZW50QnJlYWtwb2ludEtleSA9IDA7XG52YXIgcGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG52YXIgbnMgPSAnSUJNQ2hhdC1tYXAnO1xuXG52YXIgdGVtcGxhdGVzID0ge1xuXHRiYXNlOiByZXF1aXJlKCcuL3RlbXBsYXRlcy9iYXNlLmh0bWwnKSxcblx0YWRkTG9jYXRpb25zSXRlbTogcmVxdWlyZSgnLi90ZW1wbGF0ZXMvYWRkLWxvY2F0aW9ucy1pdGVtLmh0bWwnKSxcblx0YWRkTG9jYXRpb25JdGVtOiByZXF1aXJlKCcuL3RlbXBsYXRlcy9hZGQtbG9jYXRpb24taXRlbS5odG1sJylcbn07XG5cbnZhciBzaG93TG9jYXRpb25zTGF5b3V0ID0ge1xuXHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHRzdWJzY3JpYmUoJ2xheW91dDpzaG93LWxvY2F0aW9ucycsIGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdHZhciBzaG93TG9jYXRpb24gPSBuZXcgU2hvd0xvY2F0aW9ucyhkYXRhKTtcblx0XHRcdGxvY2F0aW9uSURzLnB1c2goZGF0YS51dWlkKTtcblx0XHRcdHNob3dMb2NhdGlvbnNbZGF0YS51dWlkXSA9IHNob3dMb2NhdGlvbjtcblx0XHR9KTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXRpbHMuZGVib3VuY2UoZnVuY3Rpb24oKSB7XG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzaXplTWFwKCk7XG5cdFx0XHR9LCAxMDAwKTtcblx0XHR9LCAxMDAwKSk7XG5cdH1cbn07XG5cbnZhciBhbHBoYU1hcCA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRyddO1xuXG5mdW5jdGlvbiBpbml0aWFsU2l6ZSh3aWR0aCkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGJyZWFrcG9pbnRXaWR0aHMubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoKGkgPT09IGJyZWFrcG9pbnRXaWR0aHMubGVuZ3RoIC0gMSkgfHwgKGJyZWFrcG9pbnRXaWR0aHNbaV0gPj0gd2lkdGggJiYgYnJlYWtwb2ludFdpZHRoc1tpICsgMV0gPCB3aWR0aCkpIHtcblx0XHRcdGN1cnJlbnRCcmVha3BvaW50S2V5ID0gaTtcblx0XHRcdGNoYXRXaWR0aCA9IHdpZHRoO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBzYW1lU2l6ZSgpIHtcblx0dmFyIHdpZHRoID0gc2hvd0xvY2F0aW9uc1tsb2NhdGlvbklEc1swXV0uZ2V0V2lkdGgoKTtcblx0dmFyIGlzU2FtZVNpemUgPSAoYnJlYWtwb2ludFdpZHRoc1tjdXJyZW50QnJlYWtwb2ludEtleV0gPj0gd2lkdGggJiYgYnJlYWtwb2ludFdpZHRoc1tjdXJyZW50QnJlYWtwb2ludEtleSArIDFdIDwgd2lkdGgpO1xuXHRyZXR1cm4gaXNTYW1lU2l6ZTtcbn1cblxuZnVuY3Rpb24gc2l6ZU1hcCgpIHtcblx0aWYgKGxvY2F0aW9uSURzLmxlbmd0aCA+IDAgJiYgc2hvd0xvY2F0aW9uc1tsb2NhdGlvbklEc1swXV0uZ2V0V2lkdGgoKSAmJiAhc2FtZVNpemUoKSkge1xuXHRcdHZhciB3aWR0aCA9IHNob3dMb2NhdGlvbnNbbG9jYXRpb25JRHNbMF1dLmdldFdpZHRoKCk7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBicmVha3BvaW50V2lkdGhzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoKGkgPT09IGJyZWFrcG9pbnRXaWR0aHMubGVuZ3RoIC0gMSkgfHwgKGJyZWFrcG9pbnRXaWR0aHNbaV0gPj0gd2lkdGggJiYgYnJlYWtwb2ludFdpZHRoc1tpICsgMV0gPCB3aWR0aCkpIHtcblx0XHRcdFx0Y3VycmVudEJyZWFrcG9pbnRLZXkgPSBpO1xuXHRcdFx0XHRjaGF0V2lkdGggPSB3aWR0aDtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBsb2NhdGlvbklEcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGlmIChzaG93TG9jYXRpb25zW2xvY2F0aW9uSURzW2pdXS5kYXRhLmxlbmd0aCA+IDApXG5cdFx0XHRcdFx0XHRzaG93TG9jYXRpb25zW2xvY2F0aW9uSURzW2pdXS5yZURyYXdNYXAoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBob25lQXJyYXkoZWwsIGl0ZW1zKSB7XG5cdGlmIChpdGVtcykge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtQ2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdHZhciB0ZXh0ID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMvY3JlYXRlLWRvbS1hcnJheS5odG1sJyk7XG5cdFx0XHRpdGVtQ2hpbGQuY2xhc3NOYW1lID0gbnMgKyAnLWNvbnRhY3Qtcm93Jztcblx0XHRcdGl0ZW1DaGlsZC5pbm5lckhUTUwgPSB1dGlscy5yZXBsYWNlQWxsKHRleHQsICcke25zfScsIG5zKTtcblx0XHRcdHZhciB0eXBlRWwgPSBpdGVtQ2hpbGQucXVlcnlTZWxlY3RvcignLicgKyBucyArICctY29udGFjdC10eXBlJyk7XG5cdFx0XHR2YXIgZGF0YUVsID0gaXRlbUNoaWxkLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWNvbnRhY3QtZGF0YScpO1xuXHRcdFx0dHlwZUVsLnRleHRDb250ZW50ID0gaXRlbXNbaV0udHlwZTtcblx0XHRcdGRhdGFFbC50ZXh0Q29udGVudCA9IGl0ZW1zW2ldLm51bWJlcjtcblx0XHRcdGVsLmFwcGVuZENoaWxkKGl0ZW1DaGlsZCk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEFNUE0odGltZSkge1xuXHR0cnkge1xuXHRcdHZhciBzcGxpdCA9IHRpbWUuc3BsaXQoJzonKTtcblx0XHR2YXIgaG91cnMgPSBzcGxpdFswXTtcblx0XHR2YXIgbWludXRlcyA9IHNwbGl0WzFdO1xuXHRcdHZhciBhbXBtID0gaG91cnMgPj0gMTIgPyAncG0nIDogJ2FtJztcblx0XHRob3VycyA9IGhvdXJzICUgMTI7XG5cdFx0aG91cnMgPSBob3VycyA/IGhvdXJzIDogMTI7XG5cdFx0cmV0dXJuIGhvdXJzICsgJzonICsgbWludXRlcyArICcgJyArIGFtcG07XG5cdH1cblx0Y2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gJy0nO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHBhcnNlQWRkcmVzcyhhZGRyZXNzKSB7XG5cdHZhciBhcnIgPSBhZGRyZXNzLnNwbGl0KCcsJyk7XG5cdHZhciBmaXJzdCA9IGFyci5zaGlmdCgpO1xuXHR2YXIgdGV4dCA9ICcnO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuXHRcdHRleHQgKz0gYXJyW2ldO1xuXHRcdGlmIChpIDwgKGFyci5sZW5ndGggLSAxKSlcblx0XHRcdHRleHQgKz0gJywnO1xuXHR9XG5cdHJldHVybiB7XG5cdFx0YWRkcmVzczE6IGZpcnN0LFxuXHRcdGFkZHJlc3MyOiB0ZXh0XG5cdH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvdXJzKGhvdXJzRWwsIG1vcmVIb3Vyc0VsLCBob3Vycykge1xuXHRpZiAoaG91cnMpIHtcblx0XHR2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpLmdldERheSgpO1xuXHRcdHZhciB0b2RheXNIb3VycyA9IGhvdXJzW3RvZGF5XTtcblx0XHR2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRpZiAodG9kYXlzSG91cnMgJiYgdG9kYXlzSG91cnMuaXNPcGVuKSB7XG5cdFx0XHRlbC5pbm5lckhUTUwgPSAnJyArXG5cdFx0XHRcdCc8ZGl2IGNsYXNzPVwiJyArIG5zICsgJy1ob3Vycy1vcGVuXCI+T3BlbiB0b2RheTo8L2Rpdj4nICtcblx0XHRcdFx0JzxkaXYgY2xhc3M9XCInICsgbnMgKyAnLWhvdXJzLXRvZGF5XCI+JyArXG5cdFx0XHRcdFx0Zm9ybWF0QU1QTSh0b2RheXNIb3Vycy5vcGVuKSArICcgJm5kYXNoOyAnICsgZm9ybWF0QU1QTSh0b2RheXNIb3Vycy5jbG9zZSkgK1xuXHRcdFx0XHQnPC9kaXY+Jztcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWwuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCInICsgbnMgKyAnLWhvdXJzLW9wZW5cIj5DbG9zZWQgdG9kYXkuPC9kaXY+Jztcblx0XHR9XG5cdFx0aG91cnNFbC5hcHBlbmRDaGlsZChlbCk7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3Vycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGNoaWxkRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGNoaWxkRWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIG5zICsgJy1kYXlzLWhvdXJzJyk7XG5cdFx0XHRpZiAoaG91cnNbaV0gJiYgaG91cnNbaV0uaXNPcGVuKSB7XG5cdFx0XHRcdGNoaWxkRWwuaW5uZXJIVE1MID0gJycgK1xuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiJyArIG5zICsgJy1kYXlzLWhvdXJzLWRheVwiPicgK1xuXHRcdFx0XHRcdFx0ZGF5c1tpXSArXG5cdFx0XHRcdFx0JzwvZGl2PicgK1xuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiJyArIG5zICsgJy1kYXlzLWhvdXJzLWhvdXJzXCI+JyArXG5cdFx0XHRcdFx0XHRmb3JtYXRBTVBNKGhvdXJzW2ldLm9wZW4pICsgJyAmbmRhc2g7ICcgKyBmb3JtYXRBTVBNKGhvdXJzW2ldLmNsb3NlKSArXG5cdFx0XHRcdFx0JzwvZGl2Pic7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjaGlsZEVsLmlubmVySFRNTCA9ICcnICtcblx0XHRcdFx0JzxkaXYgY2xhc3M9XCInICsgbnMgKyAnLWRheXMtaG91cnMtZGF5XCI+JyArXG5cdFx0XHRcdFx0ZGF5c1tpXSArXG5cdFx0XHRcdCc8L2Rpdj4nICtcblx0XHRcdFx0JzxkaXYgY2xhc3M9XCInICsgbnMgKyAnLWRheXMtaG91cnMtY2xvc2VkXCI+JyArXG5cdFx0XHRcdFx0J0Nsb3NlZCcgK1xuXHRcdFx0XHQnPC9kaXY+Jztcblx0XHRcdH1cblx0XHRcdG1vcmVIb3Vyc0VsLmFwcGVuZENoaWxkKGNoaWxkRWwpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBkaXN0YW5jZShpdGVtKSB7XG5cdGlmICghaXRlbS5kaXN0YW5jZSlcblx0XHRyZXR1cm47XG5cdHZhciBkaXN0YW5jZUxlbmd0aCA9IChpdGVtLmRpc3RhbmNlLnRvRml4ZWQoMSkgPT09IDAuMCkgPyAwLjEgOiBpdGVtLmRpc3RhbmNlLnRvRml4ZWQoMSk7XG5cdHZhciBkaXN0YW5jZUxlbmd0aE1lYXN1cmUgPSAoaXRlbS5kaXN0YW5jZU1lYXN1cmUgPT09ICdtaWxlcycpID8gJ20nIDogJ2ttJztcblx0cmV0dXJuIGRpc3RhbmNlTGVuZ3RoICsgZGlzdGFuY2VMZW5ndGhNZWFzdXJlO1xufVxuXG5mdW5jdGlvbiBTaG93TG9jYXRpb25zKGRhdGEpIHtcblx0dGhpcy5pbml0KGRhdGEpO1xufVxuXG5TaG93TG9jYXRpb25zLnByb3RvdHlwZSA9IHtcblx0aW5pdDogZnVuY3Rpb24oZGF0YSkge1xuXHRcdHRoaXMuZGF0YSA9IChkYXRhLm1lc3NhZ2UuZGF0YSAhPT0gdW5kZWZpbmVkICYmIGRhdGEubWVzc2FnZS5kYXRhLmxvY2F0aW9uX2RhdGEgIT09IHVuZGVmaW5lZCkgPyBkYXRhLm1lc3NhZ2UuZGF0YS5sb2NhdGlvbl9kYXRhIDogW107XG5cdFx0aWYgKHRoaXMuZGF0YS5sZW5ndGggPiAxKSB7XG5cdFx0XHRzZXRTdGF0ZSh7XG5cdFx0XHRcdGxvY2F0aW9uX2RhdGE6IHRoaXMuZGF0YVxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcblx0XHR0aGlzLnBhcmVudEVsZW1lbnQgPSBkYXRhLmVsZW1lbnQ7XG5cdFx0dGhpcy5sYXlvdXRFbGVtZW50ID0gZGF0YS5sYXlvdXRFbGVtZW50O1xuXHRcdHRoaXMubXNnRWxlbWVudCA9IGRhdGEubXNnRWxlbWVudDtcblx0XHRzd2l0Y2ggKHRoaXMuZGF0YS5sZW5ndGgpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHR0aGlzLm1zZ0VsZW1lbnQudGV4dENvbnRlbnQgPSAnV2UgY291bGQgbm90IGZpbmQgYW55IGxvY2F0aW9ucyBjbG9zZSB0byB5b3UuJztcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMTpcblx0XHRcdHRoaXMubXNnRWxlbWVudC50ZXh0Q29udGVudCA9ICdIZXJlIGFyZSB0aGUgZGV0YWlscyBmb3IgdGhlICcgKyB0aGlzLmRhdGFbMF0uYWRkcmVzcy5hZGRyZXNzICsgJyBsb2NhdGlvbi4uLic7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0dGhpcy5tc2dFbGVtZW50LnRleHRDb250ZW50ID0gJ0hlcmUgYXJlIHRoZSBsb2NhdGlvbnMgSSBmb3VuZCBjbG9zZSB0byB5b3U6Jztcblx0XHR9XG5cblx0XHRpZiAodGhpcy5kYXRhLmxlbmd0aCA+IDApIHtcblx0XHRcdHZhciB0ZXh0ID0gdGVtcGxhdGVzLmJhc2U7XG5cdFx0XHR0aGlzLnV1aWQgPSBkYXRhLnV1aWQ7XG5cdFx0XHRpZiAoZmlyc3QpIHtcblx0XHRcdFx0aW5pdGlhbFNpemUodGhpcy5nZXRXaWR0aCgpKTtcblx0XHRcdFx0Zmlyc3QgPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHRoaXMubWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHR0aGlzLm1hcC5pbm5lckhUTUwgPSB1dGlscy5yZXBsYWNlQWxsKHRleHQsICcke25zfScsIG5zKTtcblx0XHRcdHRoaXMubWFwRWxlbWVudCA9IHRoaXMubWFwLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWltZycpO1xuXHRcdFx0dGhpcy5kYXRhRWxlbWVudCA9IHRoaXMubWFwLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWRhdGEnKTtcblx0XHRcdHRoaXMubWFwRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmRyYXdMb2NhdGlvbnMoKSk7XG5cdFx0XHR0aGlzLmRhdGFFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuYWRkRGV0YWlscygpKTtcblx0XHRcdHRoaXMubGF5b3V0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLm1hcCk7XG5cdFx0fVxuXHR9LFxuXHRnZXRXaWR0aDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHdpZHRoID0gdGhpcy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LXdhdHNvbi1sYXlvdXQ6bGFzdC1jaGlsZCcpLmNsaWVudFdpZHRoO1xuXHRcdHJldHVybiB3aWR0aDtcblx0fSxcblx0cmVEcmF3TWFwOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLm1hcEVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG5cdFx0dGhpcy5tYXBFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZHJhd0xvY2F0aW9ucygpKTtcblx0fSxcblx0YWRkRGV0YWlsczogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHRoaXMuZGF0YS5sZW5ndGggPiAxKVxuXHRcdFx0cmV0dXJuIHRoaXMuYWRkTG9jYXRpb25zKCk7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIHRoaXMuYWRkTG9jYXRpb24oKTtcblx0fSxcblx0ZHJhd0xvY2F0aW9uczogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBnZXRTdGF0ZSgpO1xuXHRcdHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0XHR2YXIgd2lkdGggPSB0aGlzLmdldFdpZHRoKCk7XG5cdFx0dmFyIGNvbmZpZyA9IHtcblx0XHRcdHNpemU6IHdpZHRoICsgJ3gxODAnLFxuXHRcdFx0c2NhbGU6IHBpeGVsUmF0aW9cblx0XHR9O1xuXHRcdHRoaXMudXJpID0gY3VycmVudC5tYXBzU2VydmVyICsgJz8nO1xuXHRcdHRoaXMudXJpICs9IHV0aWxzLnNlcmlhbGl6ZShjb25maWcpO1xuXHRcdHRoaXMudXJpICs9ICcmbG9jYXRpb25zPSc7XG5cdFx0dmFyIGxvY2F0aW9ucyA9ICcnO1xuXHRcdGZvciAodmFyIGkgPSAwOyAoaSA8IGRpc3BsYXlMZW5ndGggJiYgaSA8IHRoaXMuZGF0YS5sZW5ndGgpOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gdGhpcy5kYXRhW2ldO1xuXHRcdFx0bG9jYXRpb25zICs9IChpID09PSAwICkgPyBpdGVtLmFkZHJlc3MubGF0ICsgJywnICsgaXRlbS5hZGRyZXNzLmxuZyA6ICcrJyArIGl0ZW0uYWRkcmVzcy5sYXQgKyAnLCcgKyBpdGVtLmFkZHJlc3MubG5nO1xuXHRcdH1cblx0XHR0aGlzLnVyaSArPSBlbmNvZGVVUklDb21wb25lbnQobG9jYXRpb25zKTtcblx0XHR0aGlzLnVyaSArPSAnJmNvbG9yPScgKyBlbmNvZGVVUklDb21wb25lbnQoY3VycmVudC5zdHlsZXMuYWNjZW50QmFja2dyb3VuZC5yZXBsYWNlKCcjJywgJycpKTtcblx0XHRpbWcuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcxMDAlJyk7XG5cdFx0aW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgdGhpcy51cmkpO1xuXHRcdHJldHVybiBpbWc7XG5cdH0sXG5cdGhhbmRsZUNsaWNrOiBmdW5jdGlvbigpIHtcblx0XHQvKlxuXHRcdGZvciBTZXB0ZW1iZXIgdmVyc2lvblxuXHRcdGNvbnN0IGRhdGEgPSB7XG5cdFx0XHR0ZXh0OiB0aGlzLmRhdGFzZXQuaWQsXG5cdFx0XHRzaWxlbnQ6IHRydWVcblx0XHR9OyovXG5cdFx0dGhpcy5jbGFzc05hbWUgPSBucyArICctbG9jYXRpb24tYWN0aXZlJztcblx0XHRzaG93TG9jYXRpb25zW3RoaXMuZGF0YXNldC51dWlkXS5yZW1vdmVBbGxFdmVudExpc3RlbmVycygpO1xuXHRcdC8vYWN0aW9ucy5wdWJsaXNoKCdzZW5kJywgZGF0YSk7IGZvciBTZXB0ZW1iZXIgdmVyc2lvblxuXHRcdHB1Ymxpc2goJ3JlY2VpdmUnLCB7XG5cdFx0XHRtZXNzYWdlOiB7XG5cdFx0XHRcdHRleHQ6IFsnSGVyZSBhcmUgdGhlIGRldGFpbHMgZm9yIHRoaXMgbG9jYXRpb24uJ10sXG5cdFx0XHRcdGxheW91dDoge1xuXHRcdFx0XHRcdG5hbWU6ICdzaG93LWxvY2F0aW9ucydcblx0XHRcdFx0fSxcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdC8qIGpzaGludCBpZ25vcmU6c3RhcnQgKi9cblx0XHRcdFx0XHRsb2NhdGlvbl9kYXRhOiBbc2hvd0xvY2F0aW9uc1t0aGlzLmRhdGFzZXQudXVpZF0uZGF0YVt0aGlzLmRhdGFzZXQuaWQgLSAxXV1cblx0XHRcdFx0XHQvKiBqc2hpbnQgaWdub3JlOmVuZCAqL1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cdHJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzOiBmdW5jdGlvbigpIHtcblx0XHRpZiAodGhpcy5ldmVudExpc3RlbmVycy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLmRhdGFFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobnMgKyAnLWNsaWNrYWJsZScpO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmV2ZW50TGlzdGVuZXJzLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHR0aGlzLmV2ZW50TGlzdGVuZXJzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljayk7XG5cdFx0XHR0aGlzLmV2ZW50TGlzdGVuZXJzID0gW107XG5cdFx0fVxuXHR9LFxuXHRhZGRMb2NhdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHZhciBsb2NhdGlvbkRhdGEgPSBnZXRTdGF0ZSgpLmxvY2F0aW9uX2RhdGE7XG5cdFx0dmFyIGl0ZW0gPSB0aGlzLmRhdGFbMF07XG5cdFx0dmFyIGNyZWF0ZURvbSA9IGZ1bmN0aW9uKGVsKSB7XG5cdFx0XHR2YXIgdGV4dCA9IHRlbXBsYXRlcy5hZGRMb2NhdGlvbkl0ZW07XG5cdFx0XHRlbC5pbm5lckhUTUwgPSB1dGlscy5yZXBsYWNlQWxsKHRleHQsICcke25zfScsIG5zKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGxpbms6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEtYWRkcmVzcy1saW5rJyksXG5cdFx0XHRcdGxhYmVsOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtaXRlbS1kYXRhLXRpdGxlJyksXG5cdFx0XHRcdGFkZHJlc3M6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEtYWRkcmVzcycpLFxuXHRcdFx0XHRhZGRyZXNzMTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuXHRcdFx0XHRhZGRyZXNzMjogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuXHRcdFx0XHRwaG9uZTogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWl0ZW0tZGF0YS1waG9uZScpLFxuXHRcdFx0XHRlbWFpbDogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWl0ZW0tZGF0YS1lbWFpbCcpLFxuXHRcdFx0XHRob3VyczogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWl0ZW0tZGF0YS1ob3VycycpLFxuXHRcdFx0XHRwYXJlbnRFbDogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWl0ZW0tZGF0YScpLFxuXHRcdFx0XHRob3Vyc0J1dHRvbjogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWl0ZW0tZGF0YS1ob3Vycy1idXR0b24nKSxcblx0XHRcdFx0bW9yZUhvdXJzOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtaXRlbS1kYXRhLW1vcmUtaG91cnMnKSxcblx0XHRcdFx0ZGlzdGFuY2U6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRpc3RhbmNlJyksXG5cdFx0XHRcdGJhY2tIb2xkZXI6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEtc2VjdGlvbicpLFxuXHRcdFx0XHRiYWNrOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtYWxsJylcblx0XHRcdH07XG5cdFx0fTtcblx0XHR2YXIgZG9tID0gY3JlYXRlRG9tKGVsKTtcblx0XHRpZiAoaXRlbS5sYWJlbClcblx0XHRcdGRvbS5sYWJlbC50ZXh0Q29udGVudCA9IGl0ZW0ubGFiZWw7XG5cdFx0ZWxzZVxuXHRcdFx0ZG9tLnBhcmVudEVsLnJlbW92ZUNoaWxkKGRvbS5sYWJlbCk7XG5cdFx0XHRcblx0XHR2YXIgYWRkcmVzc2VzID0gcGFyc2VBZGRyZXNzKGl0ZW0uYWRkcmVzcy5hZGRyZXNzKTtcblx0XHRkb20uYWRkcmVzczEudGV4dENvbnRlbnQgPSBhZGRyZXNzZXMuYWRkcmVzczE7XG5cdFx0ZG9tLmFkZHJlc3MyLnRleHRDb250ZW50ID0gYWRkcmVzc2VzLmFkZHJlc3MyO1xuXHRcdGRvbS5hZGRyZXNzLmFwcGVuZENoaWxkKGRvbS5hZGRyZXNzMSk7XG5cdFx0ZG9tLmFkZHJlc3MuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG5cdFx0ZG9tLmFkZHJlc3MuYXBwZW5kQ2hpbGQoZG9tLmFkZHJlc3MyKTtcblx0XHRkb20ubGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vP3E9JyArIGVuY29kZVVSSUNvbXBvbmVudChpdGVtLmFkZHJlc3MuYWRkcmVzcykpO1xuXHRcdGRvbS5saW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuXHRcdGRvbS5kaXN0YW5jZS50ZXh0Q29udGVudCA9IGRpc3RhbmNlKGl0ZW0pIHx8ICcnO1xuXG5cdFx0aWYgKGl0ZW0uZW1haWwpIHtcblx0XHRcdGNvbnN0IGxpbmtFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRcdGxpbmtFbC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnbWFpbHRvOicgKyBpdGVtLmVtYWlsKTtcblx0XHRcdGxpbmtFbC5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcblx0XHRcdGxpbmtFbC50ZXh0Q29udGVudCA9IGl0ZW0uZW1haWw7XG5cdFx0XHRkb20uZW1haWwuYXBwZW5kQ2hpbGQobGlua0VsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9tLmVtYWlsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tLmVtYWlsKTtcblx0XHR9XG5cblx0XHRpZiAoaXRlbS5waG9uZXMgJiYgaXRlbS5waG9uZXMubGVuZ3RoID4gMClcblx0XHRcdGNyZWF0ZVBob25lQXJyYXkoZG9tLnBob25lLCBpdGVtLnBob25lcyk7XG5cdFx0ZWxzZVxuXHRcdFx0ZG9tLnBob25lLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tLnBob25lKTtcblxuXHRcdGlmIChpdGVtLmRheXMgJiYgaXRlbS5kYXlzLmxlbmd0aCA+IDApIHtcblx0XHRcdGNyZWF0ZUhvdXJzKGRvbS5ob3VycywgZG9tLm1vcmVIb3VycywgaXRlbS5kYXlzKTtcblx0XHRcdGRvbS5ob3Vyc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRkb20ucGFyZW50RWwucmVtb3ZlQ2hpbGQoZG9tLmhvdXJzQnV0dG9uKTtcblx0XHRcdFx0ZG9tLm1vcmVIb3Vycy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEtbW9yZS1ob3VycycpO1xuXHRcdFx0XHRwdWJsaXNoKCdmb2N1cy1pbnB1dCcpO1xuXHRcdFx0XHRwdWJsaXNoKCdzY3JvbGwtdG8tYm90dG9tJyk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9tLmhvdXJzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tLmhvdXJzKTtcblx0XHR9XG5cblx0XHRpZiAobG9jYXRpb25EYXRhICYmIGxvY2F0aW9uRGF0YS5sZW5ndGggPiAxKSB7XG5cdFx0XHRkb20uYmFjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRwdWJsaXNoKCdyZWNlaXZlJywge1xuXHRcdFx0XHRcdG1lc3NhZ2U6IHtcblx0XHRcdFx0XHRcdHRleHQ6IFsnSGVyZSBhcmUgdGhlIGxvY2F0aW9ucyBJIGZvdW5kIGNsb3NlIHRvIHlvdTonXSxcblx0XHRcdFx0XHRcdGxheW91dDoge1xuXHRcdFx0XHRcdFx0XHRuYW1lOiAnc2hvdy1sb2NhdGlvbnMnXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0XHQvKiBqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG5cdFx0XHRcdFx0XHRcdGxvY2F0aW9uX2RhdGE6IGxvY2F0aW9uRGF0YVxuXHRcdFx0XHRcdFx0XHQvKiBqc2hpbnQgaWdub3JlOmVuZCAqL1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9tLmJhY2tIb2xkZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb20uYmFja0hvbGRlcik7XG5cdFx0fVxuXHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbCk7XG5cdFx0cmV0dXJuIGNvbnRhaW5lcjtcblx0fSxcblx0YWRkTG9jYXRpb25zOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgY3VycmVudCA9IGdldFN0YXRlKCk7XG5cdFx0dmFyIGNyZWF0ZURvbSA9IGZ1bmN0aW9uKGVsLCBpLCB1dWlkKSB7XG5cdFx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spO1xuXHRcdFx0ZWwuZGF0YXNldC51dWlkID0gdXVpZDtcblx0XHRcdGVsLmRhdGFzZXQuaWQgPSBpICsgMTtcblx0XHRcdHZhciB0ZXh0ID0gdGVtcGxhdGVzLmFkZExvY2F0aW9uc0l0ZW07XG5cdFx0XHRlbC5pbm5lckhUTUwgPSB1dGlscy5yZXBsYWNlQWxsKHRleHQsICcke25zfScsIG5zKTtcblx0XHRcdHRoaXMuZXZlbnRMaXN0ZW5lcnMucHVzaChlbCk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpY29uOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtaXRlbS1pY29uJyksXG5cdFx0XHRcdGxhYmVsOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtaXRlbS1kYXRhLXRpdGxlJyksXG5cdFx0XHRcdGFkZHJlc3M6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEtYWRkcmVzcycpLFxuXHRcdFx0XHRhZGRyZXNzMTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuXHRcdFx0XHRhZGRyZXNzMjogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuXHRcdFx0XHRkaXN0YW5jZTogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWl0ZW0tZGlzdGFuY2UnKVxuXHRcdFx0fTtcblx0XHR9O1xuXG5cdFx0dmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IChpIDwgZGlzcGxheUxlbmd0aCAmJiBpIDwgdGhpcy5kYXRhLmxlbmd0aCk7IGkrKykge1xuXHRcdFx0dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHR2YXIgaXRlbSA9IHRoaXMuZGF0YVtpXTtcblx0XHRcdHZhciBkb20gPSBjcmVhdGVEb20uY2FsbCh0aGlzLCBlbCwgaSwgdGhpcy51dWlkKTtcblx0XHRcdHZhciBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGJveC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2ZvbnQtd2VpZ2h0OmJvbGQ7IGNvbG9yOicgKyBjdXJyZW50LnN0eWxlcy5hY2NlbnRUZXh0ICsgJzsgYmFja2dyb3VuZDogJyArIGN1cnJlbnQuc3R5bGVzLmFjY2VudEJhY2tncm91bmQgKyAnOyBsaW5lLWhlaWdodDogMjRweDsgaGVpZ2h0OjI0cHg7IHdpZHRoOjI0cHg7IG1hcmdpbi1sZWZ0OjhweDsnKTtcblx0XHRcdGJveC50ZXh0Q29udGVudCA9IGFscGhhTWFwW2ldO1xuXHRcdFx0ZG9tLmljb24uYXBwZW5kQ2hpbGQoYm94KTtcblx0XHRcdGRvbS5sYWJlbC50ZXh0Q29udGVudCA9IGl0ZW0ubGFiZWwgfHwgJyc7XG5cdFx0XHR2YXIgYWRkcmVzc2VzID0gcGFyc2VBZGRyZXNzKGl0ZW0uYWRkcmVzcy5hZGRyZXNzKTtcblx0XHRcdGRvbS5hZGRyZXNzMS50ZXh0Q29udGVudCA9IGFkZHJlc3Nlcy5hZGRyZXNzMTtcblx0XHRcdGRvbS5hZGRyZXNzMi50ZXh0Q29udGVudCA9IGFkZHJlc3Nlcy5hZGRyZXNzMjtcblx0XHRcdGRvbS5hZGRyZXNzLmFwcGVuZENoaWxkKGRvbS5hZGRyZXNzMSk7XG5cdFx0XHRkb20uYWRkcmVzcy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcblx0XHRcdGRvbS5hZGRyZXNzLmFwcGVuZENoaWxkKGRvbS5hZGRyZXNzMik7XG5cdFx0XHRkb20uZGlzdGFuY2UudGV4dENvbnRlbnQgPSBkaXN0YW5jZShpdGVtKSB8fCAnJztcblx0XHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbCk7XG5cdFx0fVxuXHRcdHJldHVybiBjb250YWluZXI7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvd0xvY2F0aW9uc0xheW91dDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyoqXFxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxcbipcXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcXFwiTGljZW5zZVxcXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcXG4qXFxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcXG4qXFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXFxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcXFwiQVMgSVNcXFwiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3NcXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcXG4qIHRoZSBMaWNlbnNlLlxcbiovXFxuXFxuLklCTUNoYXQtbWFwIHtcXG5cXHRtYXJnaW4tdG9wOjFlbTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWltZyB7XFxuXFx0aGVpZ2h0OjE4MHB4O1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtaW1nIGltZyB7XFxuXFx0aGVpZ2h0OjE4MHB4O1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtbXVsdGlwbGUtbG9jYXRpb25zIHtcXG5cXHRjdXJzb3I6IGRlZmF1bHQ7XFxuXFx0b3BhY2l0eTowLjM7XFxufVxcblxcbi5JQk1DaGF0LW1hcC1sb2NhdGlvbi1hY3RpdmUgLklCTUNoYXQtbWFwLW11bHRpcGxlLWxvY2F0aW9ucyB7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWNsaWNrYWJsZSAuSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0uSUJNQ2hhdC1tYXAtbXVsdGlwbGUtbG9jYXRpb25zIHtcXG5cXHRwYWRkaW5nOiAxZW0gMCAxZW0gMDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWRhdGEtc2VjdGlvbiB7XFxuXFx0bWFyZ2luLXRvcDowLjVlbTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtIHtcXG5cXHRwYWRkaW5nOiAxZW07XFxuXFx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzUwNTA1MDtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtOmFmdGVyIHtcXG5cXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Zm9udC1zaXplOiAwO1xcblxcdGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG5cXHRjbGVhcjogYm90aDtcXG5cXHRoZWlnaHQ6IDA7XFxuIH1cXG5cXG4uSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0taWNvbiB7XFxuXFx0cGFkZGluZzowLjVlbSAwLjVlbSAwIDA7XFxuXFx0dGV4dC1hbGlnbjpjZW50ZXI7XFxuXFx0d2lkdGg6IDY0cHg7XFxuXFx0ZmxvYXQ6bGVmdDtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWRhdGEge1xcblxcdGZsb2F0OmxlZnQ7XFxufVxcbi5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1kYXRhLXRpdGxlIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRwYWRkaW5nLWJvdHRvbTowLjVlbTtcXG59XFxuLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWRhdGEtaXRlbXMge1xcblxcdGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbi5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1kYXRhLXNlY3Rpb24ge1xcblxcdHBhZGRpbmctYm90dG9tOjFlbTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWRhdGEtZW1haWwge1xcblxcdHBhZGRpbmctYm90dG9tOjFlbTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWRhdGEtcGhvbmUge1xcblxcdGRpc3BsYXk6IHRhYmxlO1xcblxcdG1heC13aWR0aDo0MDBweDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwYWRkaW5nLWJvdHRvbToxZW07XFxufVxcbi5JQk1DaGF0LW1hcC1jb250YWN0LXJvdyB7XFxuXFx0cGFkZGluZy1ib3R0b206MWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtaG91cnMtb3BlbiB7XFxuXFx0cGFkZGluZy1ib3R0b206MC41ZW07XFxufVxcblxcbi5JQk1DaGF0LW1hcC1jb250YWN0LXR5cGUge1xcblxcdGZvbnQtc3R5bGU6aXRhbGljO1xcblxcdGZvbnQtc2l6ZTowLjllbTtcXG59XFxuLklCTUNoYXQtbWFwLWNvbnRhY3QtZGF0YSB7XFxuXFxufVxcblxcbmEuSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0tZGF0YS1hZGRyZXNzLWxpbmssXFxuYS5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1kYXRhLWFkZHJlc3MtbGluazpob3ZlcixcXG5hLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWRhdGEtYWRkcmVzcy1saW5rOnZpc2l0ZWQsXFxuYS5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1kYXRhLWFkZHJlc3MtbGluazphY3RpdmUsXFxuLklCTUNoYXQtbWFwLWNvbnRhY3QtZGF0YSBhLFxcbi5JQk1DaGF0LW1hcC1jb250YWN0LWRhdGEgYTpob3ZlcixcXG4uSUJNQ2hhdC1tYXAtY29udGFjdC1kYXRhIGE6YWN0aXZlLFxcbi5JQk1DaGF0LW1hcC1jb250YWN0LWRhdGEgYTp2aXNpdGVkIHtcXG5cXHRmb250LXdlaWdodDpub3JtYWw7XFxuXFx0Zm9udC1zaXplOjAuOWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0tZGlzdGFuY2Uge1xcblxcdHdpZHRoOjY0cHg7XFxuXFx0Zm9udC1zaXplOjAuOWVtO1xcbn1cXG5cXG5idXR0b24uSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0tZGF0YS1ob3Vycy1idXR0b24ge1xcblxcdGZvbnQtc2l6ZTowLjllbTtcXG5cXHRwYWRkaW5nOiAwIDFlbSAwIDFlbTtcXG5cXHRsaW5lLWhlaWdodDoxLjVlbTtcXG5cXHRtYXJnaW4tdG9wOjFlbTtcXG59XFxuXFxuYnV0dG9uLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1hbGwge1xcblxcdGZvbnQtc2l6ZTowLjllbTtcXG5cXHRwYWRkaW5nOiAwIDFlbSAwIDFlbTtcXG5cXHRsaW5lLWhlaWdodDoxLjVlbTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWRhdGEtbW9yZS1ob3VycyB7XFxuXFx0ZGlzcGxheTogdGFibGU7XFxufVxcblxcbi5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1kYXRhLW1vcmUtaG91cnMuSUJNQ2hhdC1tYXAtaGlkZGVuIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtZGF5cy1ob3VycyB7XFxuXFx0ZGlzcGxheTogdGFibGUtcm93O1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtZGF5cy1ob3Vycy1kYXksIC5JQk1DaGF0LW1hcC1kYXlzLWhvdXJzLWhvdXJzLCAuSUJNQ2hhdC1tYXAtZGF5cy1ob3Vycy1jbG9zZWQge1xcblxcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6MC43NWVtIDFlbSAwIDA7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtZGF5cy1ob3VycyA+IGRpdjpsYXN0LWNoaWxkIHtcXG5cXHRwYWRkaW5nOiAwLjc1ZW0gMCAwIDAgIWltcG9ydGFudDtcXG59XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYXctbG9hZGVyIS4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvc3R5bGVzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiJHtuc31cXFwiPlxcblxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWltZ1xcXCI+PC9kaXY+XFxuXFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tZGF0YSAke25zfS1jbGlja2FibGVcXFwiPjwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3RlbXBsYXRlcy9iYXNlLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtICR7bnN9LW11bHRpcGxlLWxvY2F0aW9ucyAke25zfS1kYXRhLXNlY3Rpb24gSUJNQ2hhdC1zZWNvbmRhcnktY29sb3JzXFxcIj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1pY29uXFxcIj48L2Rpdj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhXFxcIj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLXRpdGxlXFxcIj48L2Rpdj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLWl0ZW1zXFxcIj5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLWFkZHJlc3NcXFwiPjwvZGl2PlxcblxcdFxcdDwvZGl2PlxcblxcdDwvZGl2PlxcblxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRpc3RhbmNlXFxcIj48L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy90ZW1wbGF0ZXMvYWRkLWxvY2F0aW9ucy1pdGVtLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA1MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtICR7bnN9LWRhdGEtc2VjdGlvbiBJQk1DaGF0LXNlY29uZGFyeS1jb2xvcnNcXFwiPlxcblxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtc2VjdGlvblxcXCI+XFxuXFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWFsbCBJQk1DaGF0LWFjY2VudC1jb2xvcnNcXFwiPkJhY2sgdG8gQWxsIExvY2F0aW9uczwvYnV0dG9uPlxcblxcdDwvZGl2PlxcblxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGFcXFwiPlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtdGl0bGVcXFwiPjwvZGl2PlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtaXRlbXNcXFwiPlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtc2VjdGlvblxcXCI+XFxuXFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtYWRkcmVzcy1saW5rXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLWFkZHJlc3NcXFwiPjwvZGl2PlxcblxcdFxcdFxcdFxcdDwvYT5cXG5cXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLWVtYWlsXFxcIj48L2Rpdj5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLXBob25lXFxcIj48L2Rpdj5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLWhvdXJzXFxcIj48L2Rpdj5cXG5cXHRcXHQ8L2Rpdj5cXG5cXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLWhvdXJzLWJ1dHRvbiBJQk1DaGF0LWFjY2VudC1jb2xvcnNcXFwiPk1vcmUgSG91cnM8L2J1dHRvbj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLWl0ZW1zXFxcIj5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kYXRhLW1vcmUtaG91cnMgJHtuc30taGlkZGVuXFxcIj48L2Rpdj5cXG5cXHRcXHQ8L2Rpdj5cXG5cXHQ8L2Rpdj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtaXRlbS1kaXN0YW5jZVxcXCI+PC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvdGVtcGxhdGVzL2FkZC1sb2NhdGlvbi1pdGVtLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIiR7bnN9LWNvbnRhY3QtdHlwZVxcXCI+PC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwiJHtuc30tY29udGFjdC1kYXRhXFxcIj48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy90ZW1wbGF0ZXMvY3JlYXRlLWRvbS1hcnJheS5odG1sXG4gKiogbW9kdWxlIGlkID0gNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIGV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2V2ZW50cycpO1xudmFyIHN1YnNjcmliZSA9IGV2ZW50cy5zdWJzY3JpYmU7XG52YXIgcHVibGlzaCA9IGV2ZW50cy5wdWJsaXNoO1xuXG52YXIgcmVxdWVzdEdlb2xvY2F0aW9uTGF0bG9uZ3MgPSBbXTtcblxudmFyIHJlcXVlc3RHZW9sb2NhdGlvbkxhdGxvbmdMYXlvdXQgPSB7XG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHN1YnNjcmliZSgnbGF5b3V0OnJlcXVlc3QtZ2VvbG9jYXRpb24tbGF0bG9uZycsIGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdHZhciByZXF1ZXN0R2VvbG9jYXRpb25MYXRsb25nID0gbmV3IFJlcXVlc3RHZW9sb2NhdGlvbkxhdGxvbmcoZGF0YSk7XG5cdFx0XHRyZXF1ZXN0R2VvbG9jYXRpb25MYXRsb25nc1tkYXRhLnV1aWRdID0gcmVxdWVzdEdlb2xvY2F0aW9uTGF0bG9uZztcblx0XHR9KTtcblx0fVxufTtcblxuZnVuY3Rpb24gUmVxdWVzdEdlb2xvY2F0aW9uTGF0bG9uZyhkYXRhKSB7XG5cdHRoaXMuaW5pdChkYXRhKTtcbn1cblxuUmVxdWVzdEdlb2xvY2F0aW9uTGF0bG9uZy5wcm90b3R5cGUgPSB7XG5cdGluaXQ6IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHR0aGlzLmRhdGEgPSBkYXRhLmRhdGE7XG5cdFx0dGhpcy51dWlkID0gZGF0YS51dWlkO1xuXHRcdHRoaXMucGFyZW50RWxlbWVudCA9IGRhdGEuZWxlbWVudDtcblx0XHR0aGlzLmxheW91dEVsZW1lbnQgPSBkYXRhLmxheW91dEVsZW1lbnQ7XG5cdFx0cHVibGlzaCgnZGlzYWJsZS1pbnB1dCcpO1xuXHRcdG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXG5cdFx0XHRcdGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cdFx0XHRcdFx0cHVibGlzaCgnZW5hYmxlLWlucHV0Jyk7XG5cdFx0XHRcdFx0cHVibGlzaCgnc2VuZCcsIHtcblx0XHRcdFx0XHRcdHRleHQ6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSArICcsJyArIHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsXG5cdFx0XHRcdFx0XHRzaWxlbnQ6IHRydWVcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cHVibGlzaCgnZW5hYmxlLWlucHV0Jyk7XG5cdFx0XHRcdFx0cHVibGlzaCgnc2VuZCcsIHtcblx0XHRcdFx0XHRcdHRleHQ6ICcwLDAnLFxuXHRcdFx0XHRcdFx0c2lsZW50OiB0cnVlXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWVzdEdlb2xvY2F0aW9uTGF0bG9uZ0xheW91dDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9yZXF1ZXN0LWdlb2xvY2F0aW9uLWxhdGxvbmcvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA1NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG5yZXF1aXJlKCcuL3N0eWxlcy5jc3MnKTtcblxudmFyIGV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2V2ZW50cycpO1xudmFyIHN1YnNjcmliZSA9IGV2ZW50cy5zdWJzY3JpYmU7XG52YXIgcHVibGlzaCA9IGV2ZW50cy5wdWJsaXNoO1xudmFyIGFjdGl2ZUNsYXNzTmFtZSA9ICdJQk1DaGF0LWFjY2VudC1jb2xvcnMnO1xudmFyIGluYWN0aXZlQ2xhc3NOYW1lID0gJ0lCTUNoYXQtc2Vjb25kYXJ5LWNvbG9ycyc7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xuXG52YXIgbnMgPSAnSUJNQ2hhdC1pc2xvY2F0aW9uYXBpJztcbnZhciBjaG9vc2VMb2NhdGlvblR5cGVzID0gW107XG5cbnZhciBjaG9vc2VMb2NhdGlvblR5cGVMYXlvdXQgPSB7XG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHN1YnNjcmliZSgnbGF5b3V0OmNob29zZS1sb2NhdGlvbi10eXBlJywgZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0dmFyIGNob29zZUxvY2F0aW9uVHlwZSA9IG5ldyBDaG9vc2VMb2NhdGlvblR5cGUoZGF0YSk7XG5cdFx0XHRjaG9vc2VMb2NhdGlvblR5cGVzW2RhdGEudXVpZF0gPSBjaG9vc2VMb2NhdGlvblR5cGU7XG5cdFx0fSk7XG5cdH1cbn07XG5cbnZhciB2YWx1ZXMgPSB7XG5cdHBvc3RhbGNvZGU6ICd6aXBjb2RlJyxcblx0Z2VvbG9jYXRpb246ICdsYXRsb25nJ1xufTtcblxudmFyIHRlbXBsYXRlcyA9IHtcblx0YmFzZTogcmVxdWlyZSgnLi90ZW1wbGF0ZXMvYmFzZS5odG1sJylcbn07XG5cbmZ1bmN0aW9uIENob29zZUxvY2F0aW9uVHlwZShkYXRhKSB7XG5cdHRoaXMuaW5pdChkYXRhKTtcbn1cblxuQ2hvb3NlTG9jYXRpb25UeXBlLnByb3RvdHlwZSA9IHtcblx0aW5pdDogZnVuY3Rpb24oZGF0YSkge1xuXHRcdHZhciB0ZXh0ID0gdGVtcGxhdGVzLmJhc2U7XG5cdFx0dGhpcy5kYXRhID0gZGF0YS5kYXRhO1xuXHRcdHRoaXMudXVpZCA9IGRhdGEudXVpZDtcblx0XHRpZiAoJ25hdmlnYXRvcicgaW4gd2luZG93ICYmICdnZW9sb2NhdGlvbicgaW4gbmF2aWdhdG9yKSB7XG5cdFx0XHR0aGlzLmV2ZW50TGlzdGVuZXJzID0gW107XG5cdFx0XHR0aGlzLnBhcmVudEVsZW1lbnQgPSBkYXRhLmVsZW1lbnQ7XG5cdFx0XHR0aGlzLmxheW91dEVsZW1lbnQgPSBkYXRhLmxheW91dEVsZW1lbnQ7XG5cdFx0XHR0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHR0ZXh0ID0gdXRpbHMucmVwbGFjZUFsbCh0ZXh0LCAnJHtuc30nLCBucyk7XG5cdFx0XHR0ZXh0ID0gdXRpbHMucmVwbGFjZUFsbCh0ZXh0LCAnJHt2YWx1ZXMuZ2VvbG9jYXRpb259JywgdmFsdWVzLmdlb2xvY2F0aW9uKTtcblx0XHRcdHRleHQgPSB1dGlscy5yZXBsYWNlQWxsKHRleHQsICcke3ZhbHVlcy5wb3N0YWxjb2RlfScsIHZhbHVlcy5wb3N0YWxjb2RlKTtcblx0XHRcdHRoaXMuZWwuaW5uZXJIVE1MID0gdGV4dDtcblx0XHRcdHRoaXMubGF5b3V0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcblx0XHRcdHRoaXMuYnV0dG9ucyA9IHRoaXMubGF5b3V0RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5idXR0b25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHRoaXMuYnV0dG9uc1tpXS5kYXRhc2V0LnV1aWQgPSB0aGlzLnV1aWQ7XG5cdFx0XHRcdHRoaXMuYnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spO1xuXHRcdFx0XHR0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2godGhpcy5idXR0b25zW2ldKTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmV2ZW50TGlzdGVuZXJzLmxlbmd0aCA+IDApXG5cdFx0XHRcdHRoaXMuc3Vic2NyaWJlU2VuZCA9IHN1YnNjcmliZSgnc2VuZCcsIHRoaXMucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMuYmluZCh0aGlzKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0XHRcdHRleHQ6IHZhbHVlcy5wb3N0YWxjb2RlLFxuXHRcdFx0XHRzaWxlbnQ6IHRydWVcblx0XHRcdH0pO1xuXHRcdH1cblx0fSxcblx0aGFuZGxlQ2xpY2s6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBkYXRhID0ge1xuXHRcdFx0c2lsZW50OiB0cnVlLFxuXHRcdFx0dGV4dDogbnVsbFxuXHRcdH07XG5cdFx0ZGF0YS50ZXh0ID0gdGhpcy5kYXRhc2V0LmlucHV0O1xuXHRcdHRoaXMuY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzc05hbWUpO1xuXHRcdHRoaXMuY2xhc3NMaXN0LnJlbW92ZShpbmFjdGl2ZUNsYXNzTmFtZSk7XG5cdFx0cHVibGlzaCgnc2VuZCcsIGRhdGEpO1xuXHRcdHB1Ymxpc2goJ2ZvY3VzLWlucHV0Jyk7XG5cdH0sXG5cdHJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzOiBmdW5jdGlvbigpIHtcblx0XHRpZiAodGhpcy5ldmVudExpc3RlbmVycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRMaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dGhpcy5ldmVudExpc3RlbmVyc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spO1xuXHRcdFx0XHR0aGlzLmV2ZW50TGlzdGVuZXJzW2ldLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcblx0XHR9XG5cdFx0dGhpcy5zdWJzY3JpYmVTZW5kLnJlbW92ZSgpO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNob29zZUxvY2F0aW9uVHlwZUxheW91dDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9jaG9vc2UtbG9jYXRpb24tdHlwZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDU1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyoqXFxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxcbipcXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcXFwiTGljZW5zZVxcXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcXG4qXFxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcXG4qXFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXFxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcXFwiQVMgSVNcXFwiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3NcXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcXG4qIHRoZSBMaWNlbnNlLlxcbiovXFxuXFxuLklCTUNoYXQtaXNsb2NhdGlvbmFwaS1jb250YWluZXIge1xcblxcdHRleHQtYWxpZ246Y2VudGVyO1xcbn1cXG5cXG4uSUJNQ2hhdC1pc2xvY2F0aW9uYXBpLWNvbnRhaW5lciBidXR0b24ge1xcblxcdG1hcmdpbjogMWVtIGF1dG8gMCBhdXRvO1xcblxcdG1pbi13aWR0aDoyMDBweDtcXG5cXHRtYXgtd2lkdGg6MjQwcHg7XFxuXFx0d2lkdGg6NzUlO1xcbn1cXG5cXG4uSUJNQ2hhdC1pc2xvY2F0aW9uYXBpLWNvbnRhaW5lciBkaXY6bGFzdC1jaGlsZCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jhdy1sb2FkZXIhLi9zcmMvbGF5b3V0cy9jaG9vc2UtbG9jYXRpb24tdHlwZS9zdHlsZXMuY3NzXG4gKiogbW9kdWxlIGlkID0gNTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCIke25zfS1jb250YWluZXJcXFwiPlxcblxcdDxkaXY+PGJ1dHRvbiBjbGFzcz1cXFwiSUJNQ2hhdC1zZWNvbmRhcnktY29sb3JzXFxcIiBkYXRhLWlucHV0PVxcXCIke3ZhbHVlcy5nZW9sb2NhdGlvbn1cXFwiPlVzZSBNeSBDdXJyZW50IExvY2F0aW9uPC9idXR0b24+PC9kaXY+XFxuXFx0PGRpdj48YnV0dG9uIGNsYXNzPVxcXCJJQk1DaGF0LXNlY29uZGFyeS1jb2xvcnNcXFwiIGRhdGEtaW5wdXQ9XFxcIiR7dmFsdWVzLnBvc3RhbGNvZGV9XFxcIj5BIFppcCBDb2RlPC9idXR0b24+PC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvY2hvb3NlLWxvY2F0aW9uLXR5cGUvdGVtcGxhdGVzL2Jhc2UuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDU4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnJlcXVpcmUoJy4vc3R5bGVzLmNzcycpO1xuXG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG52YXIgc3Vic2NyaWJlID0gZXZlbnRzLnN1YnNjcmliZTtcbnZhciBwdWJsaXNoID0gZXZlbnRzLnB1Ymxpc2g7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xudmFyIG5zID0gJ0lCTUNoYXQtY2hvb3NlJztcbnZhciBhY3RpdmVDbGFzc05hbWUgPSAnSUJNQ2hhdC1hY2NlbnQtY29sb3JzJztcbnZhciBpbmFjdGl2ZUNsYXNzTmFtZSA9ICdJQk1DaGF0LXNlY29uZGFyeS1jb2xvcnMnO1xudmFyIHdpZGdldHMgPSBbXTtcbnZhciB0ZW1wbGF0ZXMgPSB7XG5cdGJ1dHRvbjogcmVxdWlyZSgnLi90ZW1wbGF0ZXMvYnV0dG9uLmh0bWwnKVxufTtcblxudmFyIGNob29zZUxheW91dCA9IHtcblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0c3Vic2NyaWJlKCdsYXlvdXQ6Y2hvb3NlJywgZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0dmFyIHdpZGdldCA9IG5ldyBDaG9vc2UoZGF0YSk7XG5cdFx0XHR3aWRnZXRzW2RhdGEudXVpZF0gPSB3aWRnZXQ7XG5cdFx0fSk7XG5cdFx0c3Vic2NyaWJlKCdsYXlvdXQ6Y29uZmlybScsIGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdHZhciB3aWRnZXQgPSBuZXcgQ2hvb3NlKGRhdGEpO1xuXHRcdFx0d2lkZ2V0c1tkYXRhLnV1aWRdID0gd2lkZ2V0O1xuXHRcdH0pO1xuXHR9XG59O1xuXG5mdW5jdGlvbiBDaG9vc2UoZGF0YSkge1xuXHR0aGlzLmluaXQoZGF0YSk7XG59XG5cbkNob29zZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0dGhpcy5hbGxvd011bHRpcGxlID0gKGRhdGEubWVzc2FnZS5pbnB1dHZhbGlkYXRpb24uc29tZU9mICE9PSB1bmRlZmluZWQpO1xuXHR0aGlzLnZhbHVlcyA9IFtdO1xuXHR0aGlzLmRhdGEgPSAodGhpcy5hbGxvd011bHRpcGxlKSA/IGRhdGEubWVzc2FnZS5pbnB1dHZhbGlkYXRpb24uc29tZU9mIDogZGF0YS5tZXNzYWdlLmlucHV0dmFsaWRhdGlvbi5vbmVPZjtcblx0dGhpcy51dWlkID0gZGF0YS51dWlkO1xuXHR0aGlzLnBhcmVudEVsZW1lbnQgPSBkYXRhLmVsZW1lbnQ7XG5cdHRoaXMubGF5b3V0RWxlbWVudCA9IGRhdGEubGF5b3V0RWxlbWVudDtcblx0dGhpcy5tc2dFbGVtZW50ID0gZGF0YS5tc2dFbGVtZW50O1xuXHR0aGlzLmRyYXdCdXR0b25zKCk7XG5cdHRoaXMuc3Vic2NyaWJlU2VuZCA9IHN1YnNjcmliZSgnc2VuZCcsIHRoaXMucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMuYmluZCh0aGlzKSk7XG59O1xuXG5DaG9vc2UucHJvdG90eXBlLmV2ZW50TGlzdGVuZXJzID0gW107XG5cbkNob29zZS5wcm90b3R5cGUuZHJhd0J1dHRvbnMgPSBmdW5jdGlvbigpIHtcblx0dmFyIHRtcGwgPSB0ZW1wbGF0ZXMuYnV0dG9uO1xuXHR0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHRoaXMuZWwuY2xhc3NMaXN0LmFkZChucyArICctY29udGFpbmVyJyk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdmFsID0gdGhpcy5kYXRhW2ldO1xuXHRcdHZhciBidXR0b25Ib2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCh0aGlzLmRhdGEubGVuZ3RoID09PSAyKSA/ICdzcGFuJyA6ICdkaXYnKTtcblx0XHRidXR0b25Ib2xkZXIuY2xhc3NMaXN0LmFkZChucyArICctb3B0aW9uJyk7XG5cdFx0dmFyIHBhcnNlZCA9IHV0aWxzLnJlcGxhY2VBbGwodG1wbCwgJyR7dGV4dH0nLCB2YWwpO1xuXHRcdHZhciBidXR0b247XG5cdFx0YnV0dG9uSG9sZGVyLmlubmVySFRNTCA9IHBhcnNlZDtcblx0XHR0aGlzLmVsLmFwcGVuZENoaWxkKGJ1dHRvbkhvbGRlcik7XG5cdFx0YnV0dG9uID0gYnV0dG9uSG9sZGVyLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuXHRcdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXVpZCcsIHRoaXMudXVpZCk7XG5cdFx0YnV0dG9uLmNsYXNzTGlzdC5hZGQoaW5hY3RpdmVDbGFzc05hbWUpO1xuXHRcdHRoaXMuYWRkTGlzdGVuZXIoYnV0dG9uKTtcblx0fVxuXG5cdGlmICh0aGlzLmFsbG93TXVsdGlwbGUpIHtcblx0XHR2YXIgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dmFyIHN1Ym1pdEJ0biA9IHV0aWxzLnJlcGxhY2VBbGwodG1wbCwgJyR7dGV4dH0nLCAnU3VibWl0Jyk7XG5cdFx0c3VibWl0LmNsYXNzTmFtZSA9IG5zICsgJy1zdWJtaXQnO1xuXHRcdHN1Ym1pdC5pbm5lckhUTUwgPSBzdWJtaXRCdG47XG5cdFx0dGhpcy5zdWJtaXRCdXR0b24gPSBzdWJtaXQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG5cdFx0dGhpcy5zdWJtaXRCdXR0b24uY2xhc3NMaXN0ID0gYWN0aXZlQ2xhc3NOYW1lO1xuXHRcdHRoaXMuc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcblx0XHR0aGlzLmVsLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cdFx0dGhpcy5hZGRTdWJtaXRMaXN0ZW5lcih0aGlzLnN1Ym1pdEJ1dHRvbik7XG5cdH1cblxuXHR0aGlzLmxheW91dEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG59O1xuXG5DaG9vc2UucHJvdG90eXBlLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24oKSB7XG5cdHZhciBkYXRhID0ge1xuXHRcdHNpbGVudDogdHJ1ZSxcblx0XHR0ZXh0OiBudWxsXG5cdH07XG5cdGRhdGEudGV4dCA9IHRoaXMuZGF0YXNldC5pbnB1dDtcblx0dGhpcy5jbGFzc05hbWUgPSBhY3RpdmVDbGFzc05hbWUgKyAnIElCTUNoYXQtYWNjZW50LWNvbG9ycyc7XG5cdHB1Ymxpc2goJ3NlbmQnLCBkYXRhKTtcbn07XG5cbkNob29zZS5wcm90b3R5cGUuaGFuZGxlTXVsdGlDbGljayA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgYnV0dG9ucztcblx0dmFyIGluc3RhbmNlID0gd2lkZ2V0c1t0aGlzLmRhdGFzZXQudXVpZF07XG5cdGlmICh1dGlscy5oYXNDbGFzcyh0aGlzLCBhY3RpdmVDbGFzc05hbWUpKSB7XG5cdFx0dGhpcy5jbGFzc0xpc3QuYWRkKGluYWN0aXZlQ2xhc3NOYW1lKTtcblx0XHR0aGlzLmNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xhc3NOYW1lKTtcblx0fSBlbHNlIHtcblx0XHR0aGlzLmNsYXNzTGlzdC5hZGQoYWN0aXZlQ2xhc3NOYW1lKTtcblx0XHR0aGlzLmNsYXNzTGlzdC5yZW1vdmUoaW5hY3RpdmVDbGFzc05hbWUpO1xuXHR9XG5cdGJ1dHRvbnMgPSBpbnN0YW5jZS5lbC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIG5zICsgJy1vcHRpb24gLicgKyBhY3RpdmVDbGFzc05hbWUpO1xuXHRpZiAoYnV0dG9ucy5sZW5ndGggPiAwKVxuXHRcdGluc3RhbmNlLnN1Ym1pdEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cdGVsc2Vcblx0XHRpbnN0YW5jZS5zdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xufTtcblxuQ2hvb3NlLnByb3RvdHlwZS5oYW5kbGVTdWJtaXQgPSBmdW5jdGlvbigpIHtcblx0dmFyIGJ1dHRvbnMgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgYWN0aXZlQ2xhc3NOYW1lKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSsrKVxuXHRcdHRoaXMudmFsdWVzLnB1c2goYnV0dG9uc1tpXS5kYXRhc2V0LmlucHV0KTtcblx0cHVibGlzaCgnc2VuZCcsIHtcblx0XHRzaWxlbnQ6IHRydWUsXG5cdFx0dGV4dDogdGhpcy52YWx1ZXMudG9TdHJpbmcoKVxuXHR9KTtcbn07XG5cbkNob29zZS5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbihlbCkge1xuXHRpZiAodGhpcy5hbGxvd011bHRpcGxlKVxuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVNdWx0aUNsaWNrKTtcblx0ZWxzZVxuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljayk7XG5cdHRoaXMuZXZlbnRMaXN0ZW5lcnMucHVzaChlbCk7XG59O1xuXG5DaG9vc2UucHJvdG90eXBlLmFkZFN1Ym1pdExpc3RlbmVyID0gZnVuY3Rpb24oZWwpIHtcblx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpKTtcblx0dGhpcy5ldmVudExpc3RlbmVycy5wdXNoKGVsKTtcbn07XG5cbkNob29zZS5wcm90b3R5cGUucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcblx0aWYgKHRoaXMuZXZlbnRMaXN0ZW5lcnMubGVuZ3RoID4gMCkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ldmVudExpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dGhpcy5ldmVudExpc3RlbmVyc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spO1xuXHRcdFx0dGhpcy5ldmVudExpc3RlbmVyc1tpXS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdFx0fVxuXHRcdHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcblx0XHR0aGlzLnN1YnNjcmliZVNlbmQucmVtb3ZlKCk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY2hvb3NlTGF5b3V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL2Nob29zZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyoqXFxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxcbipcXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcXFwiTGljZW5zZVxcXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcXG4qXFxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcXG4qXFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXFxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcXFwiQVMgSVNcXFwiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3NcXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcXG4qIHRoZSBMaWNlbnNlLlxcbiovXFxuXFxuLklCTUNoYXQtY2hvb3NlLWNvbnRhaW5lciB7XFxuXFx0dGV4dC1hbGlnbjpjZW50ZXI7XFxuXFx0cGFkZGluZzoxZW07XFxufVxcblxcbi5JQk1DaGF0LWNob29zZS1jb250YWluZXIgc3BhbiB7XFxuXFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XFxuXFx0bWFyZ2luOiAxZW0gMWVtIDAgMWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1jaG9vc2UtY29udGFpbmVyIGRpdiB7XFxuXFx0bWFyZ2luOiAxZW0gYXV0byAwIGF1dG87XFxufVxcblxcbi5JQk1DaGF0LWNob29zZS1jb250YWluZXIgYnV0dG9uIHtcXG5cXHRtaW4td2lkdGg6MjAwcHg7XFxuXFx0bWF4LXdpZHRoOjI0MHB4O1xcbn1cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jhdy1sb2FkZXIhLi9zcmMvbGF5b3V0cy9jaG9vc2Uvc3R5bGVzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGJ1dHRvbiBjbGFzcz1cXFwiSUJNQ2hhdC1zZWNvbmRhcnktY29sb3JzXFxcIiBkYXRhLWlucHV0PVxcXCIke3RleHR9XFxcIj4ke3RleHR9PC9idXR0b24+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvY2hvb3NlL3RlbXBsYXRlcy9idXR0b24uaHRtbFxuICoqIG1vZHVsZSBpZCA9IDYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnJlcXVpcmUoJy4vc3R5bGVzLmNzcycpO1xuXG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG52YXIgcHJvZmlsZSA9IHJlcXVpcmUoJy4uLy4uL3Byb2ZpbGUnKTtcbnZhciBzdWJzY3JpYmUgPSBldmVudHMuc3Vic2NyaWJlO1xudmFyIHB1Ymxpc2ggPSBldmVudHMucHVibGlzaDtcbnZhciBhY3RpdmVDbGFzc05hbWUgPSAnSUJNQ2hhdC1hY2NlbnQtY29sb3JzJztcbnZhciBpbmFjdGl2ZUNsYXNzTmFtZSA9ICdJQk1DaGF0LXNlY29uZGFyeS1jb2xvcnMnO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMnKTtcbnZhciBucyA9ICdJQk1DaGF0LWZvcm0nO1xudmFyIHdpZGdldHMgPSBbXTtcbnZhciB0ZW1wbGF0ZXMgPSB7XG5cdGJhc2U6IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2Jhc2UuaHRtbCcpLFxuXHRmaWVsZDogcmVxdWlyZSgnLi90ZW1wbGF0ZXMvZmllbGQuaHRtbCcpXG59O1xuXG52YXIgZm9ybUxheW91dCA9IHtcblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0c3Vic2NyaWJlKCdsYXlvdXQ6Zm9ybScsIGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdHZhciB3aWRnZXQgPSBuZXcgRm9ybShkYXRhKTtcblx0XHRcdHdpZGdldHNbZGF0YS51dWlkXSA9IHdpZGdldDtcblx0XHR9KTtcblx0fVxufTtcblxuZnVuY3Rpb24gRm9ybShkYXRhKSB7XG5cdHRoaXMuaW5pdChkYXRhKTtcbn1cblxuRm9ybS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0dGhpcy5kYXRhID0gZGF0YS5tZXNzYWdlLnN0b3JlIHx8IFtdO1xuXHR0aGlzLmFjdGlvbiA9IGRhdGEubWVzc2FnZS5hY3Rpb24gfHwgJyc7XG5cdHRoaXMudXVpZCA9IGRhdGEudXVpZDtcblx0dGhpcy5wYXJlbnRFbGVtZW50ID0gZGF0YS5lbGVtZW50O1xuXHR0aGlzLmxheW91dEVsZW1lbnQgPSBkYXRhLmxheW91dEVsZW1lbnQ7XG5cdHRoaXMubXNnRWxlbWVudCA9IGRhdGEubXNnRWxlbWVudDtcblx0dGhpcy5kcmF3Rm9ybSgpO1xuXHR0aGlzLnN1YnNjcmliZVNlbmQgPSBzdWJzY3JpYmUoJ3NlbmQnLCB0aGlzLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzLmJpbmQodGhpcykpO1xuXHRwdWJsaXNoKCdkaXNhYmxlLWlucHV0Jyk7XG59O1xuXG5Gb3JtLnByb3RvdHlwZS5kcmF3Rm9ybSA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgYmFzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR2YXIgZm9ybUZpZWxkcztcblx0YmFzZS5pbm5lckhUTUwgPSB0ZW1wbGF0ZXMuYmFzZTtcblx0Zm9ybUZpZWxkcyA9IGJhc2UucXVlcnlTZWxlY3RvcignLklCTUNoYXQtZm9ybS1maWVsZHMnKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR2YXIgZmllbGRUeHQgPSB0ZW1wbGF0ZXMuZmllbGQ7XG5cdFx0ZmllbGRUeHQgPSB1dGlscy5yZXBsYWNlQWxsKGZpZWxkVHh0LCAnJHtsYWJlbH0nLCB0aGlzLmRhdGFbaV0ubGFiZWwgfHwgJycpO1xuXHRcdGZpZWxkVHh0ID0gdXRpbHMucmVwbGFjZUFsbChmaWVsZFR4dCwgJyR7bmFtZX0nLCB0aGlzLmRhdGFbaV0ubmFtZSk7XG5cdFx0ZmllbGRUeHQgPSB1dGlscy5yZXBsYWNlQWxsKGZpZWxkVHh0LCAnJHt2YWx1ZX0nLCAnJyk7IC8vZm9yIGZ1dHVyZSB1c2Vcblx0XHRmaWVsZC5pbm5lckhUTUwgPSBmaWVsZFR4dDtcblx0XHRmaWVsZC5jbGFzc05hbWUgPSBucyArICctZmllbGRzLXJvdyc7XG5cdFx0Zm9ybUZpZWxkcy5hcHBlbmRDaGlsZChmaWVsZCk7XG5cdH1cblx0dGhpcy5maWVsZHMgPSBmb3JtRmllbGRzLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG5cdHRoaXMuc3VibWl0QnV0dG9uID0gYmFzZS5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1zdWJtaXQnKTtcblx0dGhpcy5jYW5jZWxCdXR0b24gPSBiYXNlLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWNhbmNlbCcpO1xuXHR0aGlzLnN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNsYXNzTmFtZSk7XG5cdHRoaXMuY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoaW5hY3RpdmVDbGFzc05hbWUpO1xuXHR0aGlzLmxheW91dEVsZW1lbnQuYXBwZW5kQ2hpbGQoYmFzZSk7XG5cdHRoaXMuZmllbGRzWzBdLmZvY3VzKCk7XG5cdHRoaXMuYWRkTGlzdGVuZXJzKCk7XG59O1xuXG5Gb3JtLnByb3RvdHlwZS5oYW5kbGVTdWJtaXQgPSBmdW5jdGlvbigpIHtcblx0aWYgKHRoaXMudmFsaWRhdGVGaWVsZHMoKSA9PT0gdHJ1ZSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5maWVsZHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBmaWVsZCA9IHRoaXMuZmllbGRzW2ldO1xuXHRcdFx0cHJvZmlsZS5zZXQoZmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJyksIGZpZWxkLnZhbHVlKTtcblx0XHR9XG5cdFx0cHVibGlzaCgnc2VuZCcsIHtcblx0XHRcdHNpbGVudDogdHJ1ZSxcblx0XHRcdHRleHQ6ICdzdWNjZXNzJ1xuXHRcdH0pO1xuXHRcdHB1Ymxpc2goJ2VuYWJsZS1pbnB1dCcpO1xuXHR9XG59O1xuXG5Gb3JtLnByb3RvdHlwZS52YWxpZGF0ZUZpZWxkcyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgdmFsaWQgPSB0cnVlO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdGlmICh0aGlzLmRhdGFbaV0ucmVxdWlyZWQgJiYgdGhpcy5kYXRhW2ldLnJlcXVpcmVkICE9ICdmYWxzZScpIHtcblx0XHRcdGlmICghdGhpcy5maWVsZHNbaV0udmFsdWUgfHwgdGhpcy5maWVsZHNbaV0udmFsdWUubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHRoaXMuc2hvd0Vycm9yKHRoaXMuZmllbGRzW2ldLmdldEF0dHJpYnV0ZSgnbmFtZScpLCAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4nKTtcblx0XHRcdFx0dmFsaWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHZhbGlkO1xufTtcblxuRm9ybS5wcm90b3R5cGUuc2hvd0Vycm9yID0gZnVuY3Rpb24obmFtZSwgZXJyb3IpIHtcblx0dmFyIGVsID0gdGhpcy5sYXlvdXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5hbWU9XCInICsgbmFtZSArICdcIl0nKTtcblx0ZWwudGV4dENvbnRlbnQgPSBlcnJvcjtcblx0ZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59O1xuXG5Gb3JtLnByb3RvdHlwZS5oaWRlRXJyb3JzID0gZnVuY3Rpb24oKSB7XG5cdHZhciBlbHMgPSB0aGlzLmxheW91dEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmFtZV0nKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpKyspIHtcblx0XHRlbHNbaV0udGV4dENvbnRlbnQgPSAnJztcblx0XHRlbHNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0fVxufTtcblxuRm9ybS5wcm90b3R5cGUuaGFuZGxlQ2FuY2VsID0gZnVuY3Rpb24oKSB7XG5cdHB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0c2lsZW50OiB0cnVlLFxuXHRcdHRleHQ6ICdjYW5jZWwnXG5cdH0pO1xuXHRwdWJsaXNoKCdlbmFibGUtaW5wdXQnKTtcbn07XG5cbkZvcm0ucHJvdG90eXBlLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLmNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2FuY2VsLmJpbmQodGhpcykpO1xuXHR0aGlzLnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcykpO1xufTtcblxuRm9ybS5wcm90b3R5cGUucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5jYW5jZWxCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNhbmNlbC5iaW5kKHRoaXMpKTtcblx0dGhpcy5jYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuXHR0aGlzLnN1Ym1pdEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcykpO1xuXHR0aGlzLnN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5maWVsZHMubGVuZ3RoOyBqKyspXG5cdFx0dGhpcy5maWVsZHNbal0uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuXHR0aGlzLnN1YnNjcmliZVNlbmQucmVtb3ZlKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1MYXlvdXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvZm9ybS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDYzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyoqXFxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxcbipcXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcXFwiTGljZW5zZVxcXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcXG4qXFxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcXG4qXFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXFxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcXFwiQVMgSVNcXFwiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3NcXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcXG4qIHRoZSBMaWNlbnNlLlxcbiovXFxuXFxuLklCTUNoYXQtZm9ybS1jb250YWluZXIge1xcblxcdHRleHQtYWxpZ246Y2VudGVyO1xcblxcdHBhZGRpbmc6MWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1mb3JtLWZpZWxkcyB7XFxuXFx0bWFyZ2luOmF1dG87XFxuXFx0dGV4dC1hbGlnbjpsZWZ0O1xcblxcdG1heC13aWR0aDozNjBweDtcXG5cXHR3aWR0aDoxMDAlO1xcbn1cXG5cXG4uSUJNQ2hhdC1mb3JtLWZpZWxkcy1yb3cge1xcblxcdHBhZGRpbmctYm90dG9tOjEuNWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1mb3JtLWZpZWxkcy1yb3cgaW5wdXQge1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uSUJNQ2hhdC1mb3JtLWJ1dHRvbnMge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1heC13aWR0aDogMzYwcHg7XFxuXFx0aGVpZ2h0OiAyLjVlbTtcXG5cXHR0ZXh0LWFsaWduOmNlbnRlcjtcXG5cXHRtYXJnaW46YXV0bztcXG59XFxuXFxuLklCTUNoYXQtZm9ybS1idXR0b25zIGJ1dHRvbiB7XFxuXFx0bGluZS1oZWlnaHQ6IDIuNWVtO1xcblxcdHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLklCTUNoYXQtZm9ybS1jYW5jZWwge1xcblxcdGZsb2F0OmxlZnQ7XFxufVxcbi5JQk1DaGF0LWZvcm0tc3VibWl0IHtcXG5cXHRmbG9hdDpyaWdodDtcXG59XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYXctbG9hZGVyIS4vc3JjL2xheW91dHMvZm9ybS9zdHlsZXMuY3NzXG4gKiogbW9kdWxlIGlkID0gNjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIEJvdFNESyA9IHJlcXVpcmUoJ0B3YXRzb24tdmlydHVhbC1hZ2VudC9jbGllbnQtc2RrL2xpYi93ZWInKTtcbnZhciBwcm9maWxlID0gQm90U0RLLnByb2ZpbGU7XG5cbm1vZHVsZS5leHBvcnRzID0gcHJvZmlsZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvZmlsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDY2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiSUJNQ2hhdC1mb3JtLWNvbnRhaW5lclxcXCI+XFxuXFx0PGRpdiBjbGFzcz1cXFwiSUJNQ2hhdC1mb3JtLWZpZWxkc1xcXCI+PC9kaXY+XFxuXFx0PGRpdiBjbGFzcz1cXFwiSUJNQ2hhdC1mb3JtLWJ1dHRvbnNcXFwiPlxcblxcdFxcdDxidXR0b24gY2xhc3M9XFxcIklCTUNoYXQtZm9ybS1jYW5jZWxcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblxcdFxcdDxidXR0b24gY2xhc3M9XFxcIklCTUNoYXQtZm9ybS1zdWJtaXRcXFwiPlN1Ym1pdDwvYnV0dG9uPlxcblxcdDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL2Zvcm0vdGVtcGxhdGVzL2Jhc2UuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDY3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGxhYmVsPiR7bGFiZWx9PC9sYWJlbD5cXG48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcIklCTUNoYXQtaW5wdXQtY29sb3JzXFxcIiBuYW1lPVxcXCIke25hbWV9XFxcIiB2YWx1ZT1cXFwiJHt2YWx1ZX1cXFwiIC8+XFxuPGRpdiBjbGFzcz1cXFwiSUJNQ2hhdC1pbnB1dC1lcnJvclxcXCIgZGF0YS1uYW1lPVxcXCIke25hbWV9XFxcIj48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9mb3JtL3RlbXBsYXRlcy9maWVsZC5odG1sXG4gKiogbW9kdWxlIGlkID0gNjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxucmVxdWlyZSgnLi9zdHlsZXMuY3NzJyk7XG5cbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4uLy4uL3N0YXRlJyk7XG52YXIgc3Vic2NyaWJlID0gZXZlbnRzLnN1YnNjcmliZTtcbnZhciBwdWJsaXNoID0gZXZlbnRzLnB1Ymxpc2g7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xudmFyIHZhbGlkYXRpb24gPSByZXF1aXJlKCcuL3ZhbGlkYXRpb24nKTtcbnZhciBucyA9ICdJQk1DaGF0LWNyZWRpdGNhcmQnO1xudmFyIHdpZGdldHMgPSBbXTtcbnZhciB0ZW1wbGF0ZXMgPSB7XG5cdGJhc2U6IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2Jhc2UuaHRtbCcpXG59O1xuXG52YXIgY3JlZGl0Q2FyZExheW91dCA9IHtcblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0c3Vic2NyaWJlKCdsYXlvdXQ6Y2MtdmFsaWRhdG9yJywgZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0dmFyIHdpZGdldCA9IG5ldyBDcmVkaXRDYXJkKGRhdGEpO1xuXHRcdFx0d2lkZ2V0c1tkYXRhLnV1aWRdID0gd2lkZ2V0O1xuXHRcdH0pO1xuXHR9XG59O1xuXG5mdW5jdGlvbiBDcmVkaXRDYXJkKGRhdGEpIHtcblx0dGhpcy5pbml0KGRhdGEpO1xufVxuXG5DcmVkaXRDYXJkLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oZGF0YSkge1xuXHR0aGlzLmRhdGEgPSBkYXRhLm1lc3NhZ2UubGF5b3V0LmRhdGEgfHwge307XG5cdHRoaXMuZGF0YS5hY2NlcHRlZENhcmRzID0gdGhpcy5kYXRhLnR5cGVzO1xuXHR0aGlzLnV1aWQgPSBkYXRhLnV1aWQ7XG5cdHRoaXMucGFyZW50RWxlbWVudCA9IGRhdGEuZWxlbWVudDtcblx0dGhpcy5sYXlvdXRFbGVtZW50ID0gZGF0YS5sYXlvdXRFbGVtZW50O1xuXHR0aGlzLm1zZ0VsZW1lbnQgPSBkYXRhLm1zZ0VsZW1lbnQ7XG5cdHRoaXMuZHJhd0Zvcm0oKTtcbn07XG5cbkNyZWRpdENhcmQucHJvdG90eXBlLmRyYXdGb3JtID0gZnVuY3Rpb24oKSB7XG5cdHZhciB0ZXh0ID0gdGVtcGxhdGVzLmJhc2U7XG5cdHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dGV4dCA9IHV0aWxzLnJlcGxhY2VBbGwodGV4dCwgJyR7bnN9JywgbnMpO1xuXHR0aGlzLmVsLmlubmVySFRNTCA9IHRleHQ7XG5cdHRoaXMubGF5b3V0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcblx0dGhpcy5jYW5jZWxCdXR0b24gPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWNhbmNlbCcpO1xuXHR0aGlzLmNvbnRpbnVlQnV0dG9uID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1jb250aW51ZScpO1xuXHR0aGlzLmZvcm1FbGVtZW50cyA9IHt9O1xuXHR0aGlzLmZpZWxkcyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZpZWxkcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBmaWVsZCA9IHRoaXMuZmllbGRzW2ldO1xuXHRcdHZhciBuYW1lID0gZmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG5cdFx0dGhpcy5mb3JtRWxlbWVudHNbbmFtZV0gPSBmaWVsZDtcblx0fVxuXHR0aGlzLmFkZExpc3RlbmVycygpO1xufTtcblxuQ3JlZGl0Q2FyZC5wcm90b3R5cGUuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDYW5jZWwuYmluZCh0aGlzKSk7XG5cdHRoaXMuY29udGludWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNvbnRpbnVlLmJpbmQodGhpcykpO1xufTtcblxuQ3JlZGl0Q2FyZC5wcm90b3R5cGUuYWRkRXJyb3IgPSBmdW5jdGlvbihuYW1lLCBtc2cpIHtcblx0dmFyIGVycm9yRWxlbWVudCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignW2RhdGEtdmFsaWRhdGlvbi1mb3I9XCInICsgbmFtZSArICdcIl0nKTtcblx0ZXJyb3JFbGVtZW50LmRhdGFzZXQudmFsaWQgPSBmYWxzZTtcblx0ZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gbXNnO1xufTtcblxuQ3JlZGl0Q2FyZC5wcm90b3R5cGUucmVtb3ZlRXJyb3IgPSBmdW5jdGlvbihuYW1lKSB7XG5cdHZhciBlcnJvckVsZW1lbnQgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZhbGlkYXRpb24tZm9yPVwiJyArIG5hbWUgKyAnXCJdJyk7XG5cdGVycm9yRWxlbWVudC5kYXRhc2V0LnZhbGlkID0gdHJ1ZTtcblx0ZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG59O1xuXG5DcmVkaXRDYXJkLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgdmFsaWQgPSB0cnVlO1xuXHR0aGlzLmZvcm1EYXRhID0ge307XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5maWVsZHMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZmllbGQgPSB0aGlzLmZpZWxkc1tpXTtcblx0XHR2YXIgbmFtZSA9IGZpZWxkLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuXHRcdHRoaXMuZm9ybURhdGFbbmFtZV0gPSBmaWVsZC52YWx1ZTtcblx0fVxuXG5cdGlmICh0aGlzLmZvcm1EYXRhLmNjX2Z1bGxfbmFtZS5sZW5ndGggPT09IDApIHtcblx0XHR0aGlzLmFkZEVycm9yKCdjY19mdWxsX25hbWUnLCAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4nKTtcblx0XHR2YWxpZCA9IGZhbHNlO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMucmVtb3ZlRXJyb3IoJ2NjX2Z1bGxfbmFtZScpO1xuXHR9XG5cblx0dmFyIGNjID0gdmFsaWRhdGlvbi52YWxpZGF0ZUNhcmQodGhpcy5kYXRhLmFjY2VwdGVkQ2FyZHMsIHRoaXMuZm9ybURhdGEuY2NfbnVtYmVyKTtcblx0aWYgKCFjYy52YWxpZCkge1xuXHRcdHRoaXMuYWRkRXJyb3IoJ2NjX251bWJlcicsIGNjLm1lc3NhZ2UpO1xuXHRcdHZhbGlkID0gZmFsc2U7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5yZW1vdmVFcnJvcignY2NfZnVsbF9uYW1lJyk7XG5cdH1cblxuXHR2YXIgZXhwID0gdmFsaWRhdGlvbi52YWxpZGF0ZUV4cCh0aGlzLmZvcm1EYXRhLmNjX2V4cF9kYXRlX21vbnRoLCB0aGlzLmZvcm1EYXRhLmNjX2V4cF9kYXRlX3llYXIpO1xuXHRpZiAoIWV4cC52YWxpZCkge1xuXHRcdHRoaXMuYWRkRXJyb3IoJ2NjX2V4cF9kYXRlJywgZXhwLm1lc3NhZ2UpO1xuXHRcdHZhbGlkID0gZmFsc2U7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5yZW1vdmVFcnJvcignY2NfZXhwX2RhdGUnKTtcblx0fVxuXG5cdHZhciBjdnYgPSB2YWxpZGF0aW9uLnZhbGlkYXRlQ1ZWKHRoaXMuZm9ybURhdGEuY2NfY29kZSk7XG5cdGlmICghY3Z2LnZhbGlkKSB7XG5cdFx0dGhpcy5hZGRFcnJvcignY2NfY29kZScsIGN2di5tZXNzYWdlKTtcblx0XHR2YWxpZCA9IGZhbHNlO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMucmVtb3ZlRXJyb3IoJ2NjX2NvZGUnKTtcblx0fVxuXHRyZXR1cm4gdmFsaWQ7XG59O1xuXG5DcmVkaXRDYXJkLnByb3RvdHlwZS5oYW5kbGVDb250aW51ZSA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy52YWxpZGF0ZSgpKSB7XG5cdFx0dGhpcy5mb3JtRGF0YS5jY19leHBfZGF0ZSA9IHRoaXMuZm9ybURhdGEuY2NfZXhwX2RhdGVfbW9udGggKyAnLycgKyB0aGlzLmZvcm1EYXRhLmNjX2V4cF9kYXRlX3llYXI7XG5cdFx0c3RhdGUuc2V0UHJvZmlsZSh7XG5cdFx0XHRzZWxlY3RlZENhcmQ6IHRoaXMuZm9ybURhdGFcblx0XHR9KTtcblx0XHRwdWJsaXNoKCdzZW5kJywge1xuXHRcdFx0c2lsZW50OiB0cnVlLFxuXHRcdFx0dGV4dDogJ3N1Y2Nlc3MnXG5cdFx0fSk7XG5cdH1cbn07XG5cbkNyZWRpdENhcmQucHJvdG90eXBlLmhhbmRsZUNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuXHRwdWJsaXNoKCdzZW5kJywge1xuXHRcdHNpbGVudDogdHJ1ZSxcblx0XHR0ZXh0OiAnY2FuY2VsJ1xuXHR9KTtcbn07XG5cbkNyZWRpdENhcmQucHJvdG90eXBlLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuY2FuY2VsQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDYW5jZWwuYmluZCh0aGlzKSk7XG5cdHRoaXMuY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcblx0dGhpcy5zdWJtaXRCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpKTtcblx0dGhpcy5zdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuXHRmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuZmllbGRzLmxlbmd0aDsgaisrKVxuXHRcdHRoaXMuZmllbGRzW2pdLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcblxuXHR0aGlzLnN1YnNjcmliZVNlbmQucmVtb3ZlKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWRpdENhcmRMYXlvdXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvY2MtdmFsaWRhdG9yL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCIvKipcXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXFxuKlxcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFxcXCJMaWNlbnNlXFxcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxcbipcXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxcbipcXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFxcXCJBUyBJU1xcXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xcbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxcbiogdGhlIExpY2Vuc2UuXFxuKi9cXG5cXG4uSUJNQ2hhdC1jcmVkaXRjYXJkLWNvbnRhaW5lciB7XFxuXFx0cGFkZGluZzogMWVtO1xcblxcdHRleHQtYWxpZ246Y2VudGVyO1xcbn1cXG5cXG4uSUJNQ2hhdC1jcmVkaXRjYXJkLXJvd3Mge1xcblxcdG1hcmdpbjphdXRvO1xcblxcdHRleHQtYWxpZ246bGVmdDtcXG5cXHRtYXgtd2lkdGg6MzYwcHg7XFxuXFx0d2lkdGg6MTAwJTtcXG59XFxuXFxuLklCTUNoYXQtY3JlZGl0Y2FyZC1yb3cge1xcblxcdHRleHQtYWxpZ246bGVmdDtcXG5cXHRwYWRkaW5nLWJvdHRvbToxZW07XFxufVxcblxcbi5JQk1DaGF0LWNyZWRpdGNhcmQtcm93IGlucHV0IHtcXG5cXHR3aWR0aDoxMDAlO1xcbn1cXG5cXG5kaXZbZGF0YS12YWxpZGF0aW9uLWZvcl0ge1xcblxcdHBhZGRpbmctdG9wOjAuNWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1jcmVkaXRjYXJkLWNvbCB7XFxuXFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XFxufVxcblxcbi5JQk1DaGF0LWNyZWRpdGNhcmQtY29sOmxhc3QtY2hpbGQge1xcblxcdHBhZGRpbmctbGVmdDoxZW07XFxufVxcblxcbi5JQk1DaGF0LWNyZWRpdGNhcmQtY29sIGlucHV0e1xcblxcdHRleHQtYWxpZ246Y2VudGVyO1xcblxcdHdpZHRoOjQwcHg7XFxufVxcblxcbi5JQk1DaGF0LWNyZWRpdGNhcmQtY29sOmxhc3QtY2hpbGQgaW5wdXQge1xcblxcdHdpZHRoOjYwcHg7XFxufVxcblxcbi5JQk1DaGF0LWNyZWRpdGNhcmQtYnV0dG9ucyB7XFxuXFx0aGVpZ2h0OjIuNWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1jcmVkaXRjYXJkLWJ1dHRvbnMgYnV0dG9uIHtcXG5cXHR3aWR0aDo5MHB4O1xcblxcdGZsb2F0OmxlZnQ7XFxufVxcblxcbi5JQk1DaGF0LWNyZWRpdGNhcmQtYnV0dG9ucyBidXR0b246bGFzdC1jaGlsZCB7XFxuXFx0ZmxvYXQ6cmlnaHQ7XFxufVxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmF3LWxvYWRlciEuL3NyYy9sYXlvdXRzL2NjLXZhbGlkYXRvci9zdHlsZXMuY3NzXG4gKiogbW9kdWxlIGlkID0gNzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxuLy9odHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9QYXltZW50X2NhcmRfbnVtYmVyXG5cbnZhciBzdGF0ZSA9IHtcblx0YWNjZXB0ZWRDYXJkczogW10sXG5cdGNhcmROdW1iZXI6ICcnLFxuXHRjYXJkVHlwZTogJydcbn07XG5cbnZhciBtZXNzYWdlcyA9IHtcblx0cmVxdWlyZWQ6ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLicsXG5cdGFjY2VwdGVkQ2FyZDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHRleHQgPSAnV2UgYWNjZXB0ICc7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHN0YXRlLmFjY2VwdGVkQ2FyZHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChpID4gMClcblx0XHRcdFx0dGV4dCArPSAnLCAnO1xuXHRcdFx0aWYgKGkgPT09IChzdGF0ZS5hY2NlcHRlZENhcmRzLmxlbmd0aCAtIDEpKVxuXHRcdFx0XHR0ZXh0ICs9ICcgYW5kICc7XG5cdFx0XHR0ZXh0ICs9IGNhcmREYXRhW3N0YXRlLmFjY2VwdGVkQ2FyZHNbaV1dLmh1bWFuO1xuXHRcdH1cblx0XHR0ZXh0ICs9ICcuIFBsZWFzZSB1c2UgYSB2YWxpZCBjYXJkLic7XG5cdFx0cmV0dXJuIHRleHQ7XG5cdH0sXG5cdGludmFsaWQ6ICdZb3VyIGNyZWRpdCBjYXJkIG51bWJlciBpcyBpbnZhbGlkLicsXG5cdGludmFsaWRFeHBpcmF0aW9uOiAnWW91ciBjcmVkaXQgY2FyZCBleHBpcmF0aW9uIGRhdGUgaXMgaW52YWxpZC4nLFxuXHRpbnZhbGlkQ3Z2OiAnWW91ciBDVlYgaXMgaW52YWxpZC4nXG59O1xuXG52YXIgY2FyZERhdGEgPSB7XG5cdFwidmlzYVwiOiB7XG5cdFx0aHVtYW46IFwiVmlzYVwiLFxuXHRcdHByZWZpeGVzOiBbNF0sXG5cdFx0bGVuZ3RoczogWzEzLCAxNiwgMTldXG5cdH0sXG5cdFwibWFzdGVyY2FyZFwiOiB7XG5cdFx0aHVtYW46IFwiTWFzdGVyQ2FyZFwiLFxuXHRcdHByZWZpeGVzOiBbNTEsIDUyLCA1MywgNTQsIDU1XSxcblx0XHRsZW5ndGhzOiBbMTZdXG5cdH0sXG5cdFwiYW1leFwiOiB7XG5cdFx0aHVtYW46IFwiQW1lcmljYW4gRXhwcmVzc1wiLFxuXHRcdHByZWZpeGVzOiBbMzQsIDM3XSxcblx0XHRsZW5ndGhzOiBbMTVdXG5cdH0sXG5cdFwiZGlzY292ZXJcIjoge1xuXHRcdGh1bWFuOiBcIkRpc2NvdmVyXCIsXG5cdFx0cHJlZml4ZXM6IFs2MDExLCA2NV0sXG5cdFx0bGVuZ3RoczogWzE2LCAxOV1cblx0fVxufTtcblxudmFyIGk7XG4vL01hc3RlckNhcmQgYWRkaW5nIHRoZXNlIG51bWJlcnMgaW4gMjAxN1xuZm9yIChpID0gMjIyMTsgaSA8PSAyNzIwOyBpKyspXG5cdGNhcmREYXRhLm1hc3RlcmNhcmQucHJlZml4ZXMucHVzaChpKTtcblxuZm9yIChpID0gNjIyMTI2OyBpIDw9IDYyMjkyNTsgaSsrKVxuXHRjYXJkRGF0YS5kaXNjb3Zlci5wcmVmaXhlcy5wdXNoKGkpO1xuXG5mb3IgKGkgPSA2NDQ7IGkgPD0gNjQ5OyBpKyspXG5cdGNhcmREYXRhLmRpc2NvdmVyLnByZWZpeGVzLnB1c2goaSk7XG5cbmZ1bmN0aW9uIF9kZXRlY3RDYXJkKCkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0YXRlLmFjY2VwdGVkQ2FyZHMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZGF0YSA9IGNhcmREYXRhW3N0YXRlLmFjY2VwdGVkQ2FyZHNbaV1dO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgZGF0YS5wcmVmaXhlcy5sZW5ndGg7IGorKykge1xuXHRcdFx0dmFyIHggPSBkYXRhLnByZWZpeGVzW2pdLnRvU3RyaW5nKCk7XG5cdFx0XHRpZiAoc3RhdGUuY2FyZE51bWJlci5zdWJzdHJpbmcoMCwgeC5sZW5ndGgpID09PSB4KSB7XG5cdFx0XHRcdHN0YXRlLmNhcmRUeXBlID0gc3RhdGUuYWNjZXB0ZWRDYXJkc1tpXTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gX2NoZWNrS3VobigpIHtcblx0dmFyIGNoZWNrc3VtID0gMDsgLy8gcnVubmluZyBjaGVja3N1bSB0b3RhbFxuXHR2YXIgaiA9IDE7IC8vIHRha2VzIHZhbHVlIG9mIDEgb3IgMlxuXG5cdC8vIFByb2Nlc3MgZWFjaCBkaWdpdCBvbmUgYnkgb25lIHN0YXJ0aW5nIGF0IHRoZSByaWdodFxuXHR2YXIgY2FsYztcblx0Zm9yICh2YXIgaSA9IHN0YXRlLmNhcmROdW1iZXIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHQvLyBFeHRyYWN0IHRoZSBuZXh0IGRpZ2l0IGFuZCBtdWx0aXBseSBieSAxIG9yIDIgb24gYWx0ZXJuYXRpdmUgZGlnaXRzLlxuXHRcdGNhbGMgPSBOdW1iZXIoc3RhdGUuY2FyZE51bWJlci5jaGFyQXQoaSkpICogajtcblxuXHRcdC8vIElmIHRoZSByZXN1bHQgaXMgaW4gdHdvIGRpZ2l0cyBhZGQgMSB0byB0aGUgY2hlY2tzdW0gdG90YWxcblx0XHRpZiAoY2FsYyA+IDkpIHtcblx0XHRcdGNoZWNrc3VtID0gY2hlY2tzdW0gKyAxO1xuXHRcdFx0Y2FsYyA9IGNhbGMgLSAxMDtcblx0XHR9XG5cblx0XHQvLyBBZGQgdGhlIHVuaXRzIGVsZW1lbnQgdG8gdGhlIGNoZWNrc3VtIHRvdGFsXG5cdFx0Y2hlY2tzdW0gPSBjaGVja3N1bSArIGNhbGM7XG5cblx0XHQvLyBTd2l0Y2ggdGhlIHZhbHVlIG9mIGpcblx0XHRqID0gKGogPT0gMSkgPyAyIDogMTtcblx0fVxuXG5cdC8vIEFsbCBkb25lIC0gaWYgY2hlY2tzdW0gaXMgZGl2aXNpYmxlIGJ5IDEwLCBpdCBpcyBhIHZhbGlkIG1vZHVsdXMgMTAuXG5cdC8vIElmIG5vdCwgcmVwb3J0IGFuIGVycm9yLlxuXHRyZXR1cm4gKGNoZWNrc3VtICUgMTAgIT0gMCkgPyBmYWxzZSA6IHRydWU7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2FyZChhY2NlcHRlZENhcmRzLCBjYXJkTnVtYmVyKSB7XG5cdHN0YXRlLmFjY2VwdGVkQ2FyZHMgPSBhY2NlcHRlZENhcmRzO1xuXHRzdGF0ZS5jYXJkTnVtYmVyID0gY2FyZE51bWJlci5yZXBsYWNlKC9cXEQvZywnJyk7IC8vc3RyaXAgZXh0cmEgY2hhcmFjdGVyc1xuXHRpZiAoY2FyZE51bWJlci5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0XCJtZXNzYWdlXCI6IG1lc3NhZ2VzLnJlcXVpcmVkLFxuXHRcdFx0XCJ2YWxpZFwiOiBmYWxzZVxuXHRcdH07XG5cdH1cblx0aWYgKHN0YXRlLmNhcmROdW1iZXIubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwibWVzc2FnZVwiOiBtZXNzYWdlcy5yZXF1aXJlZCxcblx0XHRcdFwidmFsaWRcIjogZmFsc2Vcblx0XHR9O1xuXHR9XG5cdGlmIChfZGV0ZWN0Q2FyZCgpKSB7XG5cdFx0aWYgKHN0YXRlLmFjY2VwdGVkQ2FyZHMuaW5kZXhPZihzdGF0ZS5jYXJkVHlwZSkgPT09IC0xKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcIm1lc3NhZ2VcIjogbWVzc2FnZXMuYWNjZXB0ZWRDYXJkKCksXG5cdFx0XHRcdFwidmFsaWRcIjogZmFsc2Vcblx0XHRcdH07XG5cdFx0fVxuXHRcdGlmIChjYXJkRGF0YVtzdGF0ZS5jYXJkVHlwZV0ubGVuZ3Rocy5pbmRleE9mKHN0YXRlLmNhcmROdW1iZXIubGVuZ3RoKSA9PT0gLTEpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFwibWVzc2FnZVwiOiBtZXNzYWdlcy5pbnZhbGlkLFxuXHRcdFx0XHRcInZhbGlkXCI6IGZhbHNlXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRpZiAoX2NoZWNrS3VobigpID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XCJtZXNzYWdlXCI6IG1lc3NhZ2VzLmludmFsaWQsXG5cdFx0XHRcdFwidmFsaWRcIjogZmFsc2Vcblx0XHRcdH07XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiB7XG5cdFx0XHRcIm1lc3NhZ2VcIjogbWVzc2FnZXMuaW52YWxpZCxcblx0XHRcdFwidmFsaWRcIjogZmFsc2Vcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRcInZhbGlkXCI6IHRydWVcblx0fTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHAodXNlck0sIHVzZXJZKSB7XG5cdHZhciBkID0gbmV3IERhdGUoKTtcblx0dmFyIG1vbnRoID0gZC5nZXRNb250aCgpO1xuXHR2YXIgeWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcblxuXHRpZiAodXNlck0ubGVuZ3RoID09PSAwIHx8IHVzZXJZLmxlbmd0aCA9PT0gMCB8fCB1c2VyTS5yZXBsYWNlKC9cXEQvZywnJykubGVuZ3RoID09PSAwIHx8IHVzZXJZLnJlcGxhY2UoL1xcRC9nLCcnKS5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0XCJtZXNzYWdlXCI6IG1lc3NhZ2VzLnJlcXVpcmVkLFxuXHRcdFx0XCJ2YWxpZFwiOiBmYWxzZVxuXHRcdH07XG5cdH1cblxuXHR1c2VyTSA9IHBhcnNlSW50KHVzZXJNLCAxMCk7XG5cdHVzZXJZID0gcGFyc2VJbnQoJzIwJyArICcnICsgdXNlclksIDEwKTtcblx0aWYgKHVzZXJNID4gMTIgfHwgdXNlck0gPCAxIHx8ICh1c2VyWSA8IHllYXIgfHwgKHVzZXJZID09PSB5ZWFyICYmIHVzZXJNIDwgbW9udGgpKSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRcIm1lc3NhZ2VcIjogbWVzc2FnZXMuaW52YWxpZEV4cGlyYXRpb24sXG5cdFx0XHRcInZhbGlkXCI6IGZhbHNlXG5cdFx0fTtcblx0fVxuXHRyZXR1cm4ge1xuXHRcdFwidmFsaWRcIjogdHJ1ZVxuXHR9O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNWVihDVlYpIHtcblx0aWYgKENWVi5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0XCJtZXNzYWdlXCI6IG1lc3NhZ2VzLnJlcXVpcmVkLFxuXHRcdFx0XCJ2YWxpZFwiOiBmYWxzZVxuXHRcdH07XG5cdH1cblx0aWYgKCFpc05hTihDVlYpICYmIChDVlYgPiA5OTk5IHx8IENWViA8IDEwMCkpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0XCJtZXNzYWdlXCI6IG1lc3NhZ2VzLmludmFsaWRDdnYsXG5cdFx0XHRcInZhbGlkXCI6IGZhbHNlXG5cdFx0fTtcblx0fVxuXHRyZXR1cm4ge1xuXHRcdFwidmFsaWRcIjogdHJ1ZVxuXHR9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0dmFsaWRhdGVDYXJkOiB2YWxpZGF0ZUNhcmQsXG5cdHZhbGlkYXRlRXhwOiB2YWxpZGF0ZUV4cCxcblx0dmFsaWRhdGVDVlY6IHZhbGlkYXRlQ1ZWLFxuXHRjYXJkRGF0YTogY2FyZERhdGFcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvY2MtdmFsaWRhdG9yL3ZhbGlkYXRpb24uanNcbiAqKiBtb2R1bGUgaWQgPSA3MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIiR7bnN9LWNvbnRhaW5lclxcXCI+XFxuXFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tcm93c1xcXCI+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tcm93XFxcIj5cXG5cXHRcXHRcXHQ8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcIklCTUNoYXQtaW5wdXQtY29sb3JzXFxcIiBuYW1lPVxcXCJjY19mdWxsX25hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJOYW1lIG9uIENhcmRcXFwiIC8+XFxuXFx0XFx0XFx0PGRpdiBkYXRhLXZhbGlkYXRpb24tZm9yPVxcXCJjY19mdWxsX25hbWVcXFwiIGRhdGEtdmFsaWQ9XFxcInRydWVcXFwiPjwvZGl2PlxcblxcdFxcdDwvZGl2PlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LXJvd1xcXCI+XFxuXFx0XFx0XFx0PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJJQk1DaGF0LWlucHV0LWNvbG9yc1xcXCIgbmFtZT1cXFwiY2NfbnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiQ3JlZGl0IENhcmQgTnVtYmVyXFxcIiAvPlxcblxcdFxcdFxcdDxkaXYgZGF0YS12YWxpZGF0aW9uLWZvcj1cXFwiY2NfbnVtYmVyXFxcIiBkYXRhLXZhbGlkPVxcXCJ0cnVlXFxcIj48L2Rpdj5cXG5cXHRcXHQ8L2Rpdj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1yb3dcXFwiPlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWNvbFxcXCI+XFxuXFx0XFx0XFx0XFx0PGlucHV0IGNsYXNzPVxcXCIke25zfS1kYXRlIElCTUNoYXQtaW5wdXQtY29sb3JzXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJjY19leHBfZGF0ZV9tb250aFxcXCIgcGxhY2Vob2xkZXI9XFxcIk1NXFxcIiAvPlxcblxcdFxcdFxcdFxcdC9cXG5cXHRcXHRcXHRcXHQ8aW5wdXQgY2xhc3M9XFxcIiR7bnN9LWRhdGUgSUJNQ2hhdC1pbnB1dC1jb2xvcnNcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImNjX2V4cF9kYXRlX3llYXJcXFwiIHBsYWNlaG9sZGVyPVxcXCJZWVxcXCIgLz5cXG5cXHRcXHRcXHRcXHQ8ZGl2IGRhdGEtdmFsaWRhdGlvbi1mb3I9XFxcImNjX2V4cF9kYXRlXFxcIiBkYXRhLXZhbGlkPVxcXCJ0cnVlXFxcIj48L2Rpdj5cXG5cXHRcXHRcXHQ8L2Rpdj5cXG5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1jb2xcXFwiPlxcblxcdFxcdFxcdFxcdDxpbnB1dCBjbGFzcz1cXFwiJHtuc30tY3Z2IElCTUNoYXQtaW5wdXQtY29sb3JzXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJjY19jb2RlXFxcIiBwbGFjZWhvbGRlcj1cXFwiQ1ZWXFxcIiAvPlxcblxcdFxcdFxcdFxcdDxkaXYgZGF0YS12YWxpZGF0aW9uLWZvcj1cXFwiY2NfY29kZVxcXCIgZGF0YS12YWxpZD1cXFwidHJ1ZVxcXCI+PC9kaXY+XFxuXFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0PC9kaXY+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tcm93ICR7bnN9LWJ1dHRvbnNcXFwiPlxcblxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcIiR7bnN9LWNhbmNlbCBJQk1DaGF0LXNlY29uZGFyeS1jb2xvcnNcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcIiR7bnN9LWNvbnRpbnVlIElCTUNoYXQtaW5wdXQtY29sb3JzXFxcIj5Db250aW51ZTwvYnV0dG9uPlxcblxcdFxcdDwvZGl2PlxcblxcdDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL2NjLXZhbGlkYXRvci90ZW1wbGF0ZXMvYmFzZS5odG1sXG4gKiogbW9kdWxlIGlkID0gNzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIVxuICogQG92ZXJ2aWV3IGVzNi1wcm9taXNlIC0gYSB0aW55IGltcGxlbWVudGF0aW9uIG9mIFByb21pc2VzL0ErLlxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTQgWWVodWRhIEthdHosIFRvbSBEYWxlLCBTdGVmYW4gUGVubmVyIGFuZCBjb250cmlidXRvcnMgKENvbnZlcnNpb24gdG8gRVM2IEFQSSBieSBKYWtlIEFyY2hpYmFsZClcbiAqIEBsaWNlbnNlICAgTGljZW5zZWQgdW5kZXIgTUlUIGxpY2Vuc2VcbiAqICAgICAgICAgICAgU2VlIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9qYWtlYXJjaGliYWxkL2VzNi1wcm9taXNlL21hc3Rlci9MSUNFTlNFXG4gKiBAdmVyc2lvbiAgIDMuMi4xXG4gKi9cblxuKGZ1bmN0aW9uKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSR1dGlscyQkb2JqZWN0T3JGdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiB4ICE9PSBudWxsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkdXRpbHMkJGlzRnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNNYXliZVRoZW5hYmxlKHgpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiYgeCAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHV0aWxzJCRfaXNBcnJheTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkpIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSR1dGlscyQkX2lzQXJyYXkgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGliJGVzNiRwcm9taXNlJHV0aWxzJCRfaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG4gICAgfVxuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNBcnJheSA9IGxpYiRlczYkcHJvbWlzZSR1dGlscyQkX2lzQXJyYXk7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW4gPSAwO1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkdmVydHhOZXh0O1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkY3VzdG9tU2NoZWR1bGVyRm47XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAgPSBmdW5jdGlvbiBhc2FwKGNhbGxiYWNrLCBhcmcpIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZVtsaWIkZXM2JHByb21pc2UkYXNhcCQkbGVuXSA9IGNhbGxiYWNrO1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHF1ZXVlW2xpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW4gKyAxXSA9IGFyZztcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW4gKz0gMjtcbiAgICAgIGlmIChsaWIkZXM2JHByb21pc2UkYXNhcCQkbGVuID09PSAyKSB7XG4gICAgICAgIC8vIElmIGxlbiBpcyAyLCB0aGF0IG1lYW5zIHRoYXQgd2UgbmVlZCB0byBzY2hlZHVsZSBhbiBhc3luYyBmbHVzaC5cbiAgICAgICAgLy8gSWYgYWRkaXRpb25hbCBjYWxsYmFja3MgYXJlIHF1ZXVlZCBiZWZvcmUgdGhlIHF1ZXVlIGlzIGZsdXNoZWQsIHRoZXlcbiAgICAgICAgLy8gd2lsbCBiZSBwcm9jZXNzZWQgYnkgdGhpcyBmbHVzaCB0aGF0IHdlIGFyZSBzY2hlZHVsaW5nLlxuICAgICAgICBpZiAobGliJGVzNiRwcm9taXNlJGFzYXAkJGN1c3RvbVNjaGVkdWxlckZuKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGN1c3RvbVNjaGVkdWxlckZuKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRmbHVzaCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHNjaGVkdWxlRmx1c2goKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzZXRTY2hlZHVsZXIoc2NoZWR1bGVGbikge1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGN1c3RvbVNjaGVkdWxlckZuID0gc2NoZWR1bGVGbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2V0QXNhcChhc2FwRm4pIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhc2FwID0gYXNhcEZuO1xuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkYnJvd3NlcldpbmRvdyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRicm93c2VyR2xvYmFsID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJGJyb3dzZXJXaW5kb3cgfHwge307XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRCcm93c2VyTXV0YXRpb25PYnNlcnZlciA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRicm93c2VyR2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgbGliJGVzNiRwcm9taXNlJGFzYXAkJGJyb3dzZXJHbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGlzTm9kZSA9IHR5cGVvZiBzZWxmID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYge30udG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nO1xuXG4gICAgLy8gdGVzdCBmb3Igd2ViIHdvcmtlciBidXQgbm90IGluIElFMTBcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGlzV29ya2VyID0gdHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgdHlwZW9mIGltcG9ydFNjcmlwdHMgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICB0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09ICd1bmRlZmluZWQnO1xuXG4gICAgLy8gbm9kZVxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VOZXh0VGljaygpIHtcbiAgICAgIC8vIG5vZGUgdmVyc2lvbiAwLjEwLnggZGlzcGxheXMgYSBkZXByZWNhdGlvbiB3YXJuaW5nIHdoZW4gbmV4dFRpY2sgaXMgdXNlZCByZWN1cnNpdmVseVxuICAgICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9jdWpvanMvd2hlbi9pc3N1ZXMvNDEwIGZvciBkZXRhaWxzXG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHByb2Nlc3MubmV4dFRpY2sobGliJGVzNiRwcm9taXNlJGFzYXAkJGZsdXNoKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gdmVydHhcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlVmVydHhUaW1lcigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHZlcnR4TmV4dChsaWIkZXM2JHByb21pc2UkYXNhcCQkZmx1c2gpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlTXV0YXRpb25PYnNlcnZlcigpIHtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBsaWIkZXM2JHByb21pc2UkYXNhcCQkQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIobGliJGVzNiRwcm9taXNlJGFzYXAkJGZsdXNoKTtcbiAgICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgbm9kZS5kYXRhID0gKGl0ZXJhdGlvbnMgPSArK2l0ZXJhdGlvbnMgJSAyKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gd2ViIHdvcmtlclxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VNZXNzYWdlQ2hhbm5lbCgpIHtcbiAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRmbHVzaDtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VTZXRUaW1lb3V0KCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXRUaW1lb3V0KGxpYiRlczYkcHJvbWlzZSRhc2FwJCRmbHVzaCwgMSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkcXVldWUgPSBuZXcgQXJyYXkoMTAwMCk7XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJGZsdXNoKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaWIkZXM2JHByb21pc2UkYXNhcCQkbGVuOyBpKz0yKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZVtpXTtcbiAgICAgICAgdmFyIGFyZyA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZVtpKzFdO1xuXG4gICAgICAgIGNhbGxiYWNrKGFyZyk7XG5cbiAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHF1ZXVlW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkcXVldWVbaSsxXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGxlbiA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJGF0dGVtcHRWZXJ0eCgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByID0gcmVxdWlyZTtcbiAgICAgICAgdmFyIHZlcnR4ID0gcigndmVydHgnKTtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHZlcnR4TmV4dCA9IHZlcnR4LnJ1bk9uTG9vcCB8fCB2ZXJ0eC5ydW5PbkNvbnRleHQ7XG4gICAgICAgIHJldHVybiBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlVmVydHhUaW1lcigpO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlU2V0VGltZW91dCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaDtcbiAgICAvLyBEZWNpZGUgd2hhdCBhc3luYyBtZXRob2QgdG8gdXNlIHRvIHRyaWdnZXJpbmcgcHJvY2Vzc2luZyBvZiBxdWV1ZWQgY2FsbGJhY2tzOlxuICAgIGlmIChsaWIkZXM2JHByb21pc2UkYXNhcCQkaXNOb2RlKSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VOZXh0VGljaygpO1xuICAgIH0gZWxzZSBpZiAobGliJGVzNiRwcm9taXNlJGFzYXAkJEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VNdXRhdGlvbk9ic2VydmVyKCk7XG4gICAgfSBlbHNlIGlmIChsaWIkZXM2JHByb21pc2UkYXNhcCQkaXNXb3JrZXIpIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzY2hlZHVsZUZsdXNoID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZU1lc3NhZ2VDaGFubmVsKCk7XG4gICAgfSBlbHNlIGlmIChsaWIkZXM2JHByb21pc2UkYXNhcCQkYnJvd3NlcldpbmRvdyA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhdHRlbXB0VmVydHgoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHNjaGVkdWxlRmx1c2ggPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlU2V0VGltZW91dCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkdGhlbiQkdGhlbihvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbikge1xuICAgICAgdmFyIHBhcmVudCA9IHRoaXM7XG5cbiAgICAgIHZhciBjaGlsZCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3ApO1xuXG4gICAgICBpZiAoY2hpbGRbbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUFJPTUlTRV9JRF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRtYWtlUHJvbWlzZShjaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGF0ZSA9IHBhcmVudC5fc3RhdGU7XG5cbiAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHNbc3RhdGUgLSAxXTtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAoZnVuY3Rpb24oKXtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRpbnZva2VDYWxsYmFjayhzdGF0ZSwgY2hpbGQsIGNhbGxiYWNrLCBwYXJlbnQuX3Jlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkc3Vic2NyaWJlKHBhcmVudCwgY2hpbGQsIG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHRoZW4kJGRlZmF1bHQgPSBsaWIkZXM2JHByb21pc2UkdGhlbiQkdGhlbjtcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZXNvbHZlJCRyZXNvbHZlKG9iamVjdCkge1xuICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cbiAgICAgIGlmIChvYmplY3QgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0LmNvbnN0cnVjdG9yID09PSBDb25zdHJ1Y3Rvcikge1xuICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3RvcihsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRub29wKTtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgb2JqZWN0KTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVzb2x2ZSQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlc29sdmUkJHJlc29sdmU7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBST01JU0VfSUQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMTYpO1xuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbm9vcCgpIHt9XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUEVORElORyAgID0gdm9pZCAwO1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRGVUxGSUxMRUQgPSAxO1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRCAgPSAyO1xuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SID0gbmV3IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEVycm9yT2JqZWN0KCk7XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRzZWxmRnVsZmlsbG1lbnQoKSB7XG4gICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihcIllvdSBjYW5ub3QgcmVzb2x2ZSBhIHByb21pc2Ugd2l0aCBpdHNlbGZcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkY2Fubm90UmV0dXJuT3duKCkge1xuICAgICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZXMgY2FsbGJhY2sgY2Fubm90IHJldHVybiB0aGF0IHNhbWUgcHJvbWlzZS4nKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRnZXRUaGVuKHByb21pc2UpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW47XG4gICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SLmVycm9yID0gZXJyb3I7XG4gICAgICAgIHJldHVybiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCR0cnlUaGVuKHRoZW4sIHZhbHVlLCBmdWxmaWxsbWVudEhhbmRsZXIsIHJlamVjdGlvbkhhbmRsZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgZnVsZmlsbG1lbnRIYW5kbGVyLCByZWplY3Rpb25IYW5kbGVyKTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRoYW5kbGVGb3JlaWduVGhlbmFibGUocHJvbWlzZSwgdGhlbmFibGUsIHRoZW4pIHtcbiAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXNhcChmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgICAgIHZhciBzZWFsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGVycm9yID0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkdHJ5VGhlbih0aGVuLCB0aGVuYWJsZSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICBpZiAoc2VhbGVkKSB7IHJldHVybjsgfVxuICAgICAgICAgIHNlYWxlZCA9IHRydWU7XG4gICAgICAgICAgaWYgKHRoZW5hYmxlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgaWYgKHNlYWxlZCkgeyByZXR1cm47IH1cbiAgICAgICAgICBzZWFsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICAgIH0sICdTZXR0bGU6ICcgKyAocHJvbWlzZS5fbGFiZWwgfHwgJyB1bmtub3duIHByb21pc2UnKSk7XG5cbiAgICAgICAgaWYgKCFzZWFsZWQgJiYgZXJyb3IpIHtcbiAgICAgICAgICBzZWFsZWQgPSB0cnVlO1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0sIHByb21pc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZU93blRoZW5hYmxlKHByb21pc2UsIHRoZW5hYmxlKSB7XG4gICAgICBpZiAodGhlbmFibGUuX3N0YXRlID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRGVUxGSUxMRUQpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB0aGVuYWJsZS5fcmVzdWx0KTtcbiAgICAgIH0gZWxzZSBpZiAodGhlbmFibGUuX3N0YXRlID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgdGhlbmFibGUuX3Jlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRzdWJzY3JpYmUodGhlbmFibGUsIHVuZGVmaW5lZCwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSwgdGhlbikge1xuICAgICAgaWYgKG1heWJlVGhlbmFibGUuY29uc3RydWN0b3IgPT09IHByb21pc2UuY29uc3RydWN0b3IgJiZcbiAgICAgICAgICB0aGVuID09PSBsaWIkZXM2JHByb21pc2UkdGhlbiQkZGVmYXVsdCAmJlxuICAgICAgICAgIGNvbnN0cnVjdG9yLnJlc29sdmUgPT09IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlc29sdmUkJGRlZmF1bHQpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaGFuZGxlT3duVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhlbiA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1IpIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1IuZXJyb3IpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgICAgIH0gZWxzZSBpZiAobGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc0Z1bmN0aW9uKHRoZW4pKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaGFuZGxlRm9yZWlnblRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUsIHRoZW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKSB7XG4gICAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHNlbGZGdWxmaWxsbWVudCgpKTtcbiAgICAgIH0gZWxzZSBpZiAobGliJGVzNiRwcm9taXNlJHV0aWxzJCRvYmplY3RPckZ1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIHZhbHVlLCBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRnZXRUaGVuKHZhbHVlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRwdWJsaXNoUmVqZWN0aW9uKHByb21pc2UpIHtcbiAgICAgIGlmIChwcm9taXNlLl9vbmVycm9yKSB7XG4gICAgICAgIHByb21pc2UuX29uZXJyb3IocHJvbWlzZS5fcmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcHVibGlzaChwcm9taXNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHZhbHVlKSB7XG4gICAgICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBFTkRJTkcpIHsgcmV0dXJuOyB9XG5cbiAgICAgIHByb21pc2UuX3Jlc3VsdCA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fc3RhdGUgPSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRGVUxGSUxMRUQ7XG5cbiAgICAgIGlmIChwcm9taXNlLl9zdWJzY3JpYmVycy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcHVibGlzaCwgcHJvbWlzZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbikge1xuICAgICAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQRU5ESU5HKSB7IHJldHVybjsgfVxuICAgICAgcHJvbWlzZS5fc3RhdGUgPSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRDtcbiAgICAgIHByb21pc2UuX3Jlc3VsdCA9IHJlYXNvbjtcblxuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcHVibGlzaFJlamVjdGlvbiwgcHJvbWlzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkc3Vic2NyaWJlKHBhcmVudCwgY2hpbGQsIG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKSB7XG4gICAgICB2YXIgc3Vic2NyaWJlcnMgPSBwYXJlbnQuX3N1YnNjcmliZXJzO1xuICAgICAgdmFyIGxlbmd0aCA9IHN1YnNjcmliZXJzLmxlbmd0aDtcblxuICAgICAgcGFyZW50Ll9vbmVycm9yID0gbnVsbDtcblxuICAgICAgc3Vic2NyaWJlcnNbbGVuZ3RoXSA9IGNoaWxkO1xuICAgICAgc3Vic2NyaWJlcnNbbGVuZ3RoICsgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRlVMRklMTEVEXSA9IG9uRnVsZmlsbG1lbnQ7XG4gICAgICBzdWJzY3JpYmVyc1tsZW5ndGggKyBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRF0gID0gb25SZWplY3Rpb247XG5cbiAgICAgIGlmIChsZW5ndGggPT09IDAgJiYgcGFyZW50Ll9zdGF0ZSkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXNhcChsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRwdWJsaXNoLCBwYXJlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHB1Ymxpc2gocHJvbWlzZSkge1xuICAgICAgdmFyIHN1YnNjcmliZXJzID0gcHJvbWlzZS5fc3Vic2NyaWJlcnM7XG4gICAgICB2YXIgc2V0dGxlZCA9IHByb21pc2UuX3N0YXRlO1xuXG4gICAgICBpZiAoc3Vic2NyaWJlcnMubGVuZ3RoID09PSAwKSB7IHJldHVybjsgfVxuXG4gICAgICB2YXIgY2hpbGQsIGNhbGxiYWNrLCBkZXRhaWwgPSBwcm9taXNlLl9yZXN1bHQ7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic2NyaWJlcnMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICAgICAgY2hpbGQgPSBzdWJzY3JpYmVyc1tpXTtcbiAgICAgICAgY2FsbGJhY2sgPSBzdWJzY3JpYmVyc1tpICsgc2V0dGxlZF07XG5cbiAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaW52b2tlQ2FsbGJhY2soc2V0dGxlZCwgY2hpbGQsIGNhbGxiYWNrLCBkZXRhaWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrKGRldGFpbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJvbWlzZS5fc3Vic2NyaWJlcnMubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRFcnJvck9iamVjdCgpIHtcbiAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1IgPSBuZXcgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRXJyb3JPYmplY3QoKTtcblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHRyeUNhdGNoKGNhbGxiYWNrLCBkZXRhaWwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhkZXRhaWwpO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFRSWV9DQVRDSF9FUlJPUi5lcnJvciA9IGU7XG4gICAgICAgIHJldHVybiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaW52b2tlQ2FsbGJhY2soc2V0dGxlZCwgcHJvbWlzZSwgY2FsbGJhY2ssIGRldGFpbCkge1xuICAgICAgdmFyIGhhc0NhbGxiYWNrID0gbGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc0Z1bmN0aW9uKGNhbGxiYWNrKSxcbiAgICAgICAgICB2YWx1ZSwgZXJyb3IsIHN1Y2NlZWRlZCwgZmFpbGVkO1xuXG4gICAgICBpZiAoaGFzQ2FsbGJhY2spIHtcbiAgICAgICAgdmFsdWUgPSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCR0cnlDYXRjaChjYWxsYmFjaywgZGV0YWlsKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFRSWV9DQVRDSF9FUlJPUikge1xuICAgICAgICAgIGZhaWxlZCA9IHRydWU7XG4gICAgICAgICAgZXJyb3IgPSB2YWx1ZS5lcnJvcjtcbiAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3VjY2VlZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRjYW5ub3RSZXR1cm5Pd24oKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gZGV0YWlsO1xuICAgICAgICBzdWNjZWVkZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBFTkRJTkcpIHtcbiAgICAgICAgLy8gbm9vcFxuICAgICAgfSBlbHNlIGlmIChoYXNDYWxsYmFjayAmJiBzdWNjZWVkZWQpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGZhaWxlZCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgICAgfSBlbHNlIGlmIChzZXR0bGVkID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRGVUxGSUxMRUQpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHNldHRsZWQgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFJFSkVDVEVEKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaW5pdGlhbGl6ZVByb21pc2UocHJvbWlzZSwgcmVzb2x2ZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc29sdmVyKGZ1bmN0aW9uIHJlc29sdmVQcm9taXNlKHZhbHVlKXtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gcmVqZWN0UHJvbWlzZShyZWFzb24pIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRpZCA9IDA7XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbmV4dElkKCkge1xuICAgICAgcmV0dXJuIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGlkKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbWFrZVByb21pc2UocHJvbWlzZSkge1xuICAgICAgcHJvbWlzZVtsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQUk9NSVNFX0lEXSA9IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGlkKys7XG4gICAgICBwcm9taXNlLl9zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHByb21pc2UuX3Jlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICAgIHByb21pc2UuX3N1YnNjcmliZXJzID0gW107XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHByb21pc2UkYWxsJCRhbGwoZW50cmllcykge1xuICAgICAgcmV0dXJuIG5ldyBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkZGVmYXVsdCh0aGlzLCBlbnRyaWVzKS5wcm9taXNlO1xuICAgIH1cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHByb21pc2UkYWxsJCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkYWxsJCRhbGw7XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmFjZSQkcmFjZShlbnRyaWVzKSB7XG4gICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcblxuICAgICAgaWYgKCFsaWIkZXM2JHByb21pc2UkdXRpbHMkJGlzQXJyYXkoZW50cmllcykpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3RvcihmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byByYWNlLicpKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHZhciBsZW5ndGggPSBlbnRyaWVzLmxlbmd0aDtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBDb25zdHJ1Y3Rvci5yZXNvbHZlKGVudHJpZXNbaV0pLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmFjZSQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJhY2UkJHJhY2U7XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVqZWN0JCRyZWplY3QocmVhc29uKSB7XG4gICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcbiAgICAgIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3ApO1xuICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlamVjdCQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlamVjdCQkcmVqZWN0O1xuXG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkbmVlZHNSZXNvbHZlcigpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYSByZXNvbHZlciBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIHByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkbmVlZHNOZXcoKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnUHJvbWlzZSc6IFBsZWFzZSB1c2UgdGhlICduZXcnIG9wZXJhdG9yLCB0aGlzIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uXCIpO1xuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlO1xuICAgIC8qKlxuICAgICAgUHJvbWlzZSBvYmplY3RzIHJlcHJlc2VudCB0aGUgZXZlbnR1YWwgcmVzdWx0IG9mIGFuIGFzeW5jaHJvbm91cyBvcGVyYXRpb24uIFRoZVxuICAgICAgcHJpbWFyeSB3YXkgb2YgaW50ZXJhY3Rpbmcgd2l0aCBhIHByb21pc2UgaXMgdGhyb3VnaCBpdHMgYHRoZW5gIG1ldGhvZCwgd2hpY2hcbiAgICAgIHJlZ2lzdGVycyBjYWxsYmFja3MgdG8gcmVjZWl2ZSBlaXRoZXIgYSBwcm9taXNlJ3MgZXZlbnR1YWwgdmFsdWUgb3IgdGhlIHJlYXNvblxuICAgICAgd2h5IHRoZSBwcm9taXNlIGNhbm5vdCBiZSBmdWxmaWxsZWQuXG5cbiAgICAgIFRlcm1pbm9sb2d5XG4gICAgICAtLS0tLS0tLS0tLVxuXG4gICAgICAtIGBwcm9taXNlYCBpcyBhbiBvYmplY3Qgb3IgZnVuY3Rpb24gd2l0aCBhIGB0aGVuYCBtZXRob2Qgd2hvc2UgYmVoYXZpb3IgY29uZm9ybXMgdG8gdGhpcyBzcGVjaWZpY2F0aW9uLlxuICAgICAgLSBgdGhlbmFibGVgIGlzIGFuIG9iamVjdCBvciBmdW5jdGlvbiB0aGF0IGRlZmluZXMgYSBgdGhlbmAgbWV0aG9kLlxuICAgICAgLSBgdmFsdWVgIGlzIGFueSBsZWdhbCBKYXZhU2NyaXB0IHZhbHVlIChpbmNsdWRpbmcgdW5kZWZpbmVkLCBhIHRoZW5hYmxlLCBvciBhIHByb21pc2UpLlxuICAgICAgLSBgZXhjZXB0aW9uYCBpcyBhIHZhbHVlIHRoYXQgaXMgdGhyb3duIHVzaW5nIHRoZSB0aHJvdyBzdGF0ZW1lbnQuXG4gICAgICAtIGByZWFzb25gIGlzIGEgdmFsdWUgdGhhdCBpbmRpY2F0ZXMgd2h5IGEgcHJvbWlzZSB3YXMgcmVqZWN0ZWQuXG4gICAgICAtIGBzZXR0bGVkYCB0aGUgZmluYWwgcmVzdGluZyBzdGF0ZSBvZiBhIHByb21pc2UsIGZ1bGZpbGxlZCBvciByZWplY3RlZC5cblxuICAgICAgQSBwcm9taXNlIGNhbiBiZSBpbiBvbmUgb2YgdGhyZWUgc3RhdGVzOiBwZW5kaW5nLCBmdWxmaWxsZWQsIG9yIHJlamVjdGVkLlxuXG4gICAgICBQcm9taXNlcyB0aGF0IGFyZSBmdWxmaWxsZWQgaGF2ZSBhIGZ1bGZpbGxtZW50IHZhbHVlIGFuZCBhcmUgaW4gdGhlIGZ1bGZpbGxlZFxuICAgICAgc3RhdGUuICBQcm9taXNlcyB0aGF0IGFyZSByZWplY3RlZCBoYXZlIGEgcmVqZWN0aW9uIHJlYXNvbiBhbmQgYXJlIGluIHRoZVxuICAgICAgcmVqZWN0ZWQgc3RhdGUuICBBIGZ1bGZpbGxtZW50IHZhbHVlIGlzIG5ldmVyIGEgdGhlbmFibGUuXG5cbiAgICAgIFByb21pc2VzIGNhbiBhbHNvIGJlIHNhaWQgdG8gKnJlc29sdmUqIGEgdmFsdWUuICBJZiB0aGlzIHZhbHVlIGlzIGFsc28gYVxuICAgICAgcHJvbWlzZSwgdGhlbiB0aGUgb3JpZ2luYWwgcHJvbWlzZSdzIHNldHRsZWQgc3RhdGUgd2lsbCBtYXRjaCB0aGUgdmFsdWUnc1xuICAgICAgc2V0dGxlZCBzdGF0ZS4gIFNvIGEgcHJvbWlzZSB0aGF0ICpyZXNvbHZlcyogYSBwcm9taXNlIHRoYXQgcmVqZWN0cyB3aWxsXG4gICAgICBpdHNlbGYgcmVqZWN0LCBhbmQgYSBwcm9taXNlIHRoYXQgKnJlc29sdmVzKiBhIHByb21pc2UgdGhhdCBmdWxmaWxscyB3aWxsXG4gICAgICBpdHNlbGYgZnVsZmlsbC5cblxuXG4gICAgICBCYXNpYyBVc2FnZTpcbiAgICAgIC0tLS0tLS0tLS0tLVxuXG4gICAgICBgYGBqc1xuICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gb24gc3VjY2Vzc1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcblxuICAgICAgICAvLyBvbiBmYWlsdXJlXG4gICAgICAgIHJlamVjdChyZWFzb24pO1xuICAgICAgfSk7XG5cbiAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAvLyBvbiBmdWxmaWxsbWVudFxuICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIC8vIG9uIHJlamVjdGlvblxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQWR2YW5jZWQgVXNhZ2U6XG4gICAgICAtLS0tLS0tLS0tLS0tLS1cblxuICAgICAgUHJvbWlzZXMgc2hpbmUgd2hlbiBhYnN0cmFjdGluZyBhd2F5IGFzeW5jaHJvbm91cyBpbnRlcmFjdGlvbnMgc3VjaCBhc1xuICAgICAgYFhNTEh0dHBSZXF1ZXN0YHMuXG5cbiAgICAgIGBgYGpzXG4gICAgICBmdW5jdGlvbiBnZXRKU09OKHVybCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgICAgICB4aHIub3BlbignR0VUJywgdXJsKTtcbiAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gaGFuZGxlcjtcbiAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICAgIHhoci5zZW5kKCk7XG5cbiAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gdGhpcy5ET05FKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdnZXRKU09OOiBgJyArIHVybCArICdgIGZhaWxlZCB3aXRoIHN0YXR1czogWycgKyB0aGlzLnN0YXR1cyArICddJykpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGdldEpTT04oJy9wb3N0cy5qc29uJykudGhlbihmdW5jdGlvbihqc29uKSB7XG4gICAgICAgIC8vIG9uIGZ1bGZpbGxtZW50XG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgLy8gb24gcmVqZWN0aW9uXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBVbmxpa2UgY2FsbGJhY2tzLCBwcm9taXNlcyBhcmUgZ3JlYXQgY29tcG9zYWJsZSBwcmltaXRpdmVzLlxuXG4gICAgICBgYGBqc1xuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRKU09OKCcvcG9zdHMnKSxcbiAgICAgICAgZ2V0SlNPTignL2NvbW1lbnRzJylcbiAgICAgIF0pLnRoZW4oZnVuY3Rpb24odmFsdWVzKXtcbiAgICAgICAgdmFsdWVzWzBdIC8vID0+IHBvc3RzSlNPTlxuICAgICAgICB2YWx1ZXNbMV0gLy8gPT4gY29tbWVudHNKU09OXG5cbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEBjbGFzcyBQcm9taXNlXG4gICAgICBAcGFyYW0ge2Z1bmN0aW9ufSByZXNvbHZlclxuICAgICAgVXNlZnVsIGZvciB0b29saW5nLlxuICAgICAgQGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZShyZXNvbHZlcikge1xuICAgICAgdGhpc1tsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQUk9NSVNFX0lEXSA9IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5leHRJZCgpO1xuICAgICAgdGhpcy5fcmVzdWx0ID0gdGhpcy5fc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdWJzY3JpYmVycyA9IFtdO1xuXG4gICAgICBpZiAobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbm9vcCAhPT0gcmVzb2x2ZXIpIHtcbiAgICAgICAgdHlwZW9mIHJlc29sdmVyICE9PSAnZnVuY3Rpb24nICYmIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRuZWVkc1Jlc29sdmVyKCk7XG4gICAgICAgIHRoaXMgaW5zdGFuY2VvZiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZSA/IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGluaXRpYWxpemVQcm9taXNlKHRoaXMsIHJlc29sdmVyKSA6IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRuZWVkc05ldygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLmFsbCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJGFsbCQkZGVmYXVsdDtcbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5yYWNlID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmFjZSQkZGVmYXVsdDtcbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5yZXNvbHZlID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVzb2x2ZSQkZGVmYXVsdDtcbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5yZWplY3QgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZWplY3QkJGRlZmF1bHQ7XG4gICAgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UuX3NldFNjaGVkdWxlciA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzZXRTY2hlZHVsZXI7XG4gICAgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UuX3NldEFzYXAgPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2V0QXNhcDtcbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5fYXNhcCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhc2FwO1xuXG4gICAgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UucHJvdG90eXBlID0ge1xuICAgICAgY29uc3RydWN0b3I6IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLFxuXG4gICAgLyoqXG4gICAgICBUaGUgcHJpbWFyeSB3YXkgb2YgaW50ZXJhY3Rpbmcgd2l0aCBhIHByb21pc2UgaXMgdGhyb3VnaCBpdHMgYHRoZW5gIG1ldGhvZCxcbiAgICAgIHdoaWNoIHJlZ2lzdGVycyBjYWxsYmFja3MgdG8gcmVjZWl2ZSBlaXRoZXIgYSBwcm9taXNlJ3MgZXZlbnR1YWwgdmFsdWUgb3IgdGhlXG4gICAgICByZWFzb24gd2h5IHRoZSBwcm9taXNlIGNhbm5vdCBiZSBmdWxmaWxsZWQuXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24odXNlcil7XG4gICAgICAgIC8vIHVzZXIgaXMgYXZhaWxhYmxlXG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgICAgICAvLyB1c2VyIGlzIHVuYXZhaWxhYmxlLCBhbmQgeW91IGFyZSBnaXZlbiB0aGUgcmVhc29uIHdoeVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQ2hhaW5pbmdcbiAgICAgIC0tLS0tLS0tXG5cbiAgICAgIFRoZSByZXR1cm4gdmFsdWUgb2YgYHRoZW5gIGlzIGl0c2VsZiBhIHByb21pc2UuICBUaGlzIHNlY29uZCwgJ2Rvd25zdHJlYW0nXG4gICAgICBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZmlyc3QgcHJvbWlzZSdzIGZ1bGZpbGxtZW50XG4gICAgICBvciByZWplY3Rpb24gaGFuZGxlciwgb3IgcmVqZWN0ZWQgaWYgdGhlIGhhbmRsZXIgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICByZXR1cm4gdXNlci5uYW1lO1xuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICByZXR1cm4gJ2RlZmF1bHQgbmFtZSc7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICh1c2VyTmFtZSkge1xuICAgICAgICAvLyBJZiBgZmluZFVzZXJgIGZ1bGZpbGxlZCwgYHVzZXJOYW1lYCB3aWxsIGJlIHRoZSB1c2VyJ3MgbmFtZSwgb3RoZXJ3aXNlIGl0XG4gICAgICAgIC8vIHdpbGwgYmUgYCdkZWZhdWx0IG5hbWUnYFxuICAgICAgfSk7XG5cbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvdW5kIHVzZXIsIGJ1dCBzdGlsbCB1bmhhcHB5Jyk7XG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYGZpbmRVc2VyYCByZWplY3RlZCBhbmQgd2UncmUgdW5oYXBweScpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy8gbmV2ZXIgcmVhY2hlZFxuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAvLyBpZiBgZmluZFVzZXJgIGZ1bGZpbGxlZCwgYHJlYXNvbmAgd2lsbCBiZSAnRm91bmQgdXNlciwgYnV0IHN0aWxsIHVuaGFwcHknLlxuICAgICAgICAvLyBJZiBgZmluZFVzZXJgIHJlamVjdGVkLCBgcmVhc29uYCB3aWxsIGJlICdgZmluZFVzZXJgIHJlamVjdGVkIGFuZCB3ZSdyZSB1bmhhcHB5Jy5cbiAgICAgIH0pO1xuICAgICAgYGBgXG4gICAgICBJZiB0aGUgZG93bnN0cmVhbSBwcm9taXNlIGRvZXMgbm90IHNwZWNpZnkgYSByZWplY3Rpb24gaGFuZGxlciwgcmVqZWN0aW9uIHJlYXNvbnMgd2lsbCBiZSBwcm9wYWdhdGVkIGZ1cnRoZXIgZG93bnN0cmVhbS5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICB0aHJvdyBuZXcgUGVkYWdvZ2ljYWxFeGNlcHRpb24oJ1Vwc3RyZWFtIGVycm9yJyk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAvLyBuZXZlciByZWFjaGVkXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAvLyBuZXZlciByZWFjaGVkXG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIC8vIFRoZSBgUGVkZ2Fnb2NpYWxFeGNlcHRpb25gIGlzIHByb3BhZ2F0ZWQgYWxsIHRoZSB3YXkgZG93biB0byBoZXJlXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBBc3NpbWlsYXRpb25cbiAgICAgIC0tLS0tLS0tLS0tLVxuXG4gICAgICBTb21ldGltZXMgdGhlIHZhbHVlIHlvdSB3YW50IHRvIHByb3BhZ2F0ZSB0byBhIGRvd25zdHJlYW0gcHJvbWlzZSBjYW4gb25seSBiZVxuICAgICAgcmV0cmlldmVkIGFzeW5jaHJvbm91c2x5LiBUaGlzIGNhbiBiZSBhY2hpZXZlZCBieSByZXR1cm5pbmcgYSBwcm9taXNlIGluIHRoZVxuICAgICAgZnVsZmlsbG1lbnQgb3IgcmVqZWN0aW9uIGhhbmRsZXIuIFRoZSBkb3duc3RyZWFtIHByb21pc2Ugd2lsbCB0aGVuIGJlIHBlbmRpbmdcbiAgICAgIHVudGlsIHRoZSByZXR1cm5lZCBwcm9taXNlIGlzIHNldHRsZWQuIFRoaXMgaXMgY2FsbGVkICphc3NpbWlsYXRpb24qLlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHJldHVybiBmaW5kQ29tbWVudHNCeUF1dGhvcih1c2VyKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNvbW1lbnRzKSB7XG4gICAgICAgIC8vIFRoZSB1c2VyJ3MgY29tbWVudHMgYXJlIG5vdyBhdmFpbGFibGVcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIElmIHRoZSBhc3NpbWxpYXRlZCBwcm9taXNlIHJlamVjdHMsIHRoZW4gdGhlIGRvd25zdHJlYW0gcHJvbWlzZSB3aWxsIGFsc28gcmVqZWN0LlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHJldHVybiBmaW5kQ29tbWVudHNCeUF1dGhvcih1c2VyKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNvbW1lbnRzKSB7XG4gICAgICAgIC8vIElmIGBmaW5kQ29tbWVudHNCeUF1dGhvcmAgZnVsZmlsbHMsIHdlJ2xsIGhhdmUgdGhlIHZhbHVlIGhlcmVcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgLy8gSWYgYGZpbmRDb21tZW50c0J5QXV0aG9yYCByZWplY3RzLCB3ZSdsbCBoYXZlIHRoZSByZWFzb24gaGVyZVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgU2ltcGxlIEV4YW1wbGVcbiAgICAgIC0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIFN5bmNocm9ub3VzIEV4YW1wbGVcblxuICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzdWx0ID0gZmluZFJlc3VsdCgpO1xuICAgICAgICAvLyBzdWNjZXNzXG4gICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAvLyBmYWlsdXJlXG4gICAgICB9XG4gICAgICBgYGBcblxuICAgICAgRXJyYmFjayBFeGFtcGxlXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kUmVzdWx0KGZ1bmN0aW9uKHJlc3VsdCwgZXJyKXtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIC8vIGZhaWx1cmVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBzdWNjZXNzXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIFByb21pc2UgRXhhbXBsZTtcblxuICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgZmluZFJlc3VsdCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcbiAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQWR2YW5jZWQgRXhhbXBsZVxuICAgICAgLS0tLS0tLS0tLS0tLS1cblxuICAgICAgU3luY2hyb25vdXMgRXhhbXBsZVxuXG4gICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICB2YXIgYXV0aG9yLCBib29rcztcblxuICAgICAgdHJ5IHtcbiAgICAgICAgYXV0aG9yID0gZmluZEF1dGhvcigpO1xuICAgICAgICBib29rcyAgPSBmaW5kQm9va3NCeUF1dGhvcihhdXRob3IpO1xuICAgICAgICAvLyBzdWNjZXNzXG4gICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAvLyBmYWlsdXJlXG4gICAgICB9XG4gICAgICBgYGBcblxuICAgICAgRXJyYmFjayBFeGFtcGxlXG5cbiAgICAgIGBgYGpzXG5cbiAgICAgIGZ1bmN0aW9uIGZvdW5kQm9va3MoYm9va3MpIHtcblxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBmYWlsdXJlKHJlYXNvbikge1xuXG4gICAgICB9XG5cbiAgICAgIGZpbmRBdXRob3IoZnVuY3Rpb24oYXV0aG9yLCBlcnIpe1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICAgIC8vIGZhaWx1cmVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZmluZEJvb29rc0J5QXV0aG9yKGF1dGhvciwgZnVuY3Rpb24oYm9va3MsIGVycikge1xuICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBmb3VuZEJvb2tzKGJvb2tzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAgICAgICAgICAgZmFpbHVyZShyZWFzb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBzdWNjZXNzXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIFByb21pc2UgRXhhbXBsZTtcblxuICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgZmluZEF1dGhvcigpLlxuICAgICAgICB0aGVuKGZpbmRCb29rc0J5QXV0aG9yKS5cbiAgICAgICAgdGhlbihmdW5jdGlvbihib29rcyl7XG4gICAgICAgICAgLy8gZm91bmQgYm9va3NcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBAbWV0aG9kIHRoZW5cbiAgICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uRnVsZmlsbGVkXG4gICAgICBAcGFyYW0ge0Z1bmN0aW9ufSBvblJlamVjdGVkXG4gICAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgICBAcmV0dXJuIHtQcm9taXNlfVxuICAgICovXG4gICAgICB0aGVuOiBsaWIkZXM2JHByb21pc2UkdGhlbiQkZGVmYXVsdCxcblxuICAgIC8qKlxuICAgICAgYGNhdGNoYCBpcyBzaW1wbHkgc3VnYXIgZm9yIGB0aGVuKHVuZGVmaW5lZCwgb25SZWplY3Rpb24pYCB3aGljaCBtYWtlcyBpdCB0aGUgc2FtZVxuICAgICAgYXMgdGhlIGNhdGNoIGJsb2NrIG9mIGEgdHJ5L2NhdGNoIHN0YXRlbWVudC5cblxuICAgICAgYGBganNcbiAgICAgIGZ1bmN0aW9uIGZpbmRBdXRob3IoKXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZG4ndCBmaW5kIHRoYXQgYXV0aG9yJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIHN5bmNocm9ub3VzXG4gICAgICB0cnkge1xuICAgICAgICBmaW5kQXV0aG9yKCk7XG4gICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgICAgfVxuXG4gICAgICAvLyBhc3luYyB3aXRoIHByb21pc2VzXG4gICAgICBmaW5kQXV0aG9yKCkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEBtZXRob2QgY2F0Y2hcbiAgICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uUmVqZWN0aW9uXG4gICAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgICBAcmV0dXJuIHtQcm9taXNlfVxuICAgICovXG4gICAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yO1xuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yKENvbnN0cnVjdG9yLCBpbnB1dCkge1xuICAgICAgdGhpcy5faW5zdGFuY2VDb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yO1xuICAgICAgdGhpcy5wcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3ApO1xuXG4gICAgICBpZiAoIXRoaXMucHJvbWlzZVtsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQUk9NSVNFX0lEXSkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRtYWtlUHJvbWlzZSh0aGlzLnByb21pc2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAobGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc0FycmF5KGlucHV0KSkge1xuICAgICAgICB0aGlzLl9pbnB1dCAgICAgPSBpbnB1dDtcbiAgICAgICAgdGhpcy5sZW5ndGggICAgID0gaW5wdXQubGVuZ3RoO1xuICAgICAgICB0aGlzLl9yZW1haW5pbmcgPSBpbnB1dC5sZW5ndGg7XG5cbiAgICAgICAgdGhpcy5fcmVzdWx0ID0gbmV3IEFycmF5KHRoaXMubGVuZ3RoKTtcblxuICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHRoaXMucHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmxlbmd0aCA9IHRoaXMubGVuZ3RoIHx8IDA7XG4gICAgICAgICAgdGhpcy5fZW51bWVyYXRlKCk7XG4gICAgICAgICAgaWYgKHRoaXMuX3JlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbCh0aGlzLnByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QodGhpcy5wcm9taXNlLCBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkdmFsaWRhdGlvbkVycm9yKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCR2YWxpZGF0aW9uRXJyb3IoKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdBcnJheSBNZXRob2RzIG11c3QgYmUgcHJvdmlkZWQgYW4gQXJyYXknKTtcbiAgICB9XG5cbiAgICBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX2VudW1lcmF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGxlbmd0aCAgPSB0aGlzLmxlbmd0aDtcbiAgICAgIHZhciBpbnB1dCAgID0gdGhpcy5faW5wdXQ7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyB0aGlzLl9zdGF0ZSA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUEVORElORyAmJiBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5fZWFjaEVudHJ5KGlucHV0W2ldLCBpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl9lYWNoRW50cnkgPSBmdW5jdGlvbihlbnRyeSwgaSkge1xuICAgICAgdmFyIGMgPSB0aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yO1xuICAgICAgdmFyIHJlc29sdmUgPSBjLnJlc29sdmU7XG5cbiAgICAgIGlmIChyZXNvbHZlID09PSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZXNvbHZlJCRkZWZhdWx0KSB7XG4gICAgICAgIHZhciB0aGVuID0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZ2V0VGhlbihlbnRyeSk7XG5cbiAgICAgICAgaWYgKHRoZW4gPT09IGxpYiRlczYkcHJvbWlzZSR0aGVuJCRkZWZhdWx0ICYmXG4gICAgICAgICAgICBlbnRyeS5fc3RhdGUgIT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBFTkRJTkcpIHtcbiAgICAgICAgICB0aGlzLl9zZXR0bGVkQXQoZW50cnkuX3N0YXRlLCBpLCBlbnRyeS5fcmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhlbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMuX3JlbWFpbmluZy0tO1xuICAgICAgICAgIHRoaXMuX3Jlc3VsdFtpXSA9IGVudHJ5O1xuICAgICAgICB9IGVsc2UgaWYgKGMgPT09IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRkZWZhdWx0KSB7XG4gICAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgYyhsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRub29wKTtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIGVudHJ5LCB0aGVuKTtcbiAgICAgICAgICB0aGlzLl93aWxsU2V0dGxlQXQocHJvbWlzZSwgaSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fd2lsbFNldHRsZUF0KG5ldyBjKGZ1bmN0aW9uKHJlc29sdmUpIHsgcmVzb2x2ZShlbnRyeSk7IH0pLCBpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fd2lsbFNldHRsZUF0KHJlc29sdmUoZW50cnkpLCBpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl9zZXR0bGVkQXQgPSBmdW5jdGlvbihzdGF0ZSwgaSwgdmFsdWUpIHtcbiAgICAgIHZhciBwcm9taXNlID0gdGhpcy5wcm9taXNlO1xuXG4gICAgICBpZiAocHJvbWlzZS5fc3RhdGUgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBFTkRJTkcpIHtcbiAgICAgICAgdGhpcy5fcmVtYWluaW5nLS07XG5cbiAgICAgICAgaWYgKHN0YXRlID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRCkge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fcmVzdWx0W2ldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3JlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fd2lsbFNldHRsZUF0ID0gZnVuY3Rpb24ocHJvbWlzZSwgaSkge1xuICAgICAgdmFyIGVudW1lcmF0b3IgPSB0aGlzO1xuXG4gICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRzdWJzY3JpYmUocHJvbWlzZSwgdW5kZWZpbmVkLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBlbnVtZXJhdG9yLl9zZXR0bGVkQXQobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRlVMRklMTEVELCBpLCB2YWx1ZSk7XG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgZW51bWVyYXRvci5fc2V0dGxlZEF0KGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFJFSkVDVEVELCBpLCByZWFzb24pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcG9seWZpbGwkJHBvbHlmaWxsKCkge1xuICAgICAgdmFyIGxvY2FsO1xuXG4gICAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBsb2NhbCA9IGdsb2JhbDtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgbG9jYWwgPSBzZWxmO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBsb2NhbCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3BvbHlmaWxsIGZhaWxlZCBiZWNhdXNlIGdsb2JhbCBvYmplY3QgaXMgdW5hdmFpbGFibGUgaW4gdGhpcyBlbnZpcm9ubWVudCcpO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIFAgPSBsb2NhbC5Qcm9taXNlO1xuXG4gICAgICBpZiAoUCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUC5yZXNvbHZlKCkpID09PSAnW29iamVjdCBQcm9taXNlXScgJiYgIVAuY2FzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxvY2FsLlByb21pc2UgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkZGVmYXVsdDtcbiAgICB9XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRwb2x5ZmlsbCQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRwb2x5ZmlsbCQkcG9seWZpbGw7XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHVtZCQkRVM2UHJvbWlzZSA9IHtcbiAgICAgICdQcm9taXNlJzogbGliJGVzNiRwcm9taXNlJHByb21pc2UkJGRlZmF1bHQsXG4gICAgICAncG9seWZpbGwnOiBsaWIkZXM2JHByb21pc2UkcG9seWZpbGwkJGRlZmF1bHRcbiAgICB9O1xuXG4gICAgLyogZ2xvYmFsIGRlZmluZTp0cnVlIG1vZHVsZTp0cnVlIHdpbmRvdzogdHJ1ZSAqL1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZVsnYW1kJ10pIHtcbiAgICAgIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGxpYiRlczYkcHJvbWlzZSR1bWQkJEVTNlByb21pc2U7IH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlWydleHBvcnRzJ10pIHtcbiAgICAgIG1vZHVsZVsnZXhwb3J0cyddID0gbGliJGVzNiRwcm9taXNlJHVtZCQkRVM2UHJvbWlzZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpc1snRVM2UHJvbWlzZSddID0gbGliJGVzNiRwcm9taXNlJHVtZCQkRVM2UHJvbWlzZTtcbiAgICB9XG5cbiAgICBsaWIkZXM2JHByb21pc2UkcG9seWZpbGwkJGRlZmF1bHQoKTtcbn0pLmNhbGwodGhpcyk7XG5cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2VzNi1wcm9taXNlL2Rpc3QvZXM2LXByb21pc2UuanNcbiAqKiBtb2R1bGUgaWQgPSA3NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDc1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4gKiogbW9kdWxlIGlkID0gNzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIChpZ25vcmVkKSAqL1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogdmVydHggKGlnbm9yZWQpXG4gKiogbW9kdWxlIGlkID0gNzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7IHRocm93IG5ldyBFcnJvcihcImRlZmluZSBjYW5ub3QgYmUgdXNlZCBpbmRpcmVjdFwiKTsgfTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAod2VicGFjaykvYnVpbGRpbi9hbWQtZGVmaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gNzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIGRlZmF1bHRTdHlsZXMgPSB7XG5cdGJhY2tncm91bmQ6ICcjM2QzZDNkJyxcblx0YWNjZW50QmFja2dyb3VuZDogJyNBRjZFRTgnLFxuXHRhY2NlbnRUZXh0OiAnI2ZmZmZmZicsXG5cdHRleHQ6ICcjZmZmZmZmJyxcblx0bGluazogJyNmZmZmZmYnLFxuXHRzZWNvbmRhcnlCYWNrZ3JvdW5kOiAnIzQ2NDY0NicsXG5cdHNlY29uZGFyeVRleHQ6ICcjZjdmN2Y3Jyxcblx0aW5wdXRCYWNrZ3JvdW5kOiAnIzQ2NDY0NicsXG5cdGlucHV0VGV4dDogJyNmN2Y3ZjcnXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRTdHlsZXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N0eWxlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDc5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmF3LWxvYWRlci9pbmRleC5qcyEuL3N0eWxlcy5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yYXctbG9hZGVyL2luZGV4LmpzIS4vc3R5bGVzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmF3LWxvYWRlci9pbmRleC5qcyEuL3N0eWxlcy5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy9zdHlsZXMuY3NzXG4gKiogbW9kdWxlIGlkID0gNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=
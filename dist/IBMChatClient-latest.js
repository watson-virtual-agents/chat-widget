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
	
	var IBMChat = {
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
		 * @returns {IBMChat} - Returns IBMChat for chaining.
		 * @example
		 * IBMChat.send('Hello world.');
		 */
		send: function(message) {
			bootstrap.send(message);
			return IBMChat;
		},
	
		/**
		 * Mock receiving a message to the chat widget from outside the chat widget.
		 * @function receive
		 * @memberof IBMChat
		 * @param {string} message - A message you want to show as received in the chat widget.
		 * @returns {IBMChat} - Returns IBMChat for chaining.
		 * @example
		 * IBMChat.receive('Hello world.');
		 */
		receive: function(message) {
			bootstrap.receive(message);
			return IBMChat;
		},
	
		/**
		 * Send a message to the chat widget from outside the chat widget. This message will be displayed in the interface, but will not actually get sent to the server.
		 * @function sendMock
		 * @memberof IBMChat
		 * @param {string} message - A message you want to pretend to send to the chat widget.
		 * @returns {IBMChat} - Returns IBMChat for chaining.
		 * @example
		 * IBMChat.sendMock('Hello world.');
		 */
		sendMock: function(message) {
			bootstrap.sendMock(message);
			return IBMChat;
		},
	
		/**
		 * Send a message to the chat widget from outside the chat widget. This message will NOT be displayed in the interface.
		 * @function sendSilently
		 * @memberof IBMChat
		 * @param {string} message - A message you want to send to the chat widget, but not de displayed in the interface.
		 * @returns {IBMChat} - Returns IBMChat for chaining.
		 * @example
		 * IBMChat.sendSilently('Hello world.');
		 */
		sendSilently: function(message) {
			bootstrap.sendSilently(message);
			return IBMChat;
		},
	
		/**
		 * Register a custom layout with the chat widget. Call registerLayout() before you call init().
		 * @function registerLayout
		 * @memberof IBMChat
		 * @param {string} layout - The name of the layout your bot will provide when it is triggered to render a layout.
		 * @param {function} init - A function that runs one time, when the chat widget is bootstrapped. Be sure to subscribe to the "layout:YOUR_LAYOUT_NAME" event in this function.
		 * @returns {IBMChat} - Returns IBMChat for chaining.
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
		registerLayout: function(layout, init) {
			bootstrap.registerLayout(layout, init);
			return IBMChat;
		},
	
		/**
		 * Override how inputs into the chat text box are handled. e.g. you may wish to send messages to your live agent instead of to your virtual agent.
		 * @function enableCustomInputHandler
		 * @memberof IBMChat
		 * @param {Object} config
		 * @param {function} config.callback - A function that receives a message and resolve and reject functions as params
		 * @param {boolean} config.context - (optional) A value for "this" in your callback function
		 * @returns {IBMChat} - Returns IBMChat for chaining.
		 * @example
		 * IBMChat.enableCustomInputHandler({
		 *   callback: function(message, resolve, reject) {
		 *     //do something like send the message to your live customer service rep
		 *     IBMChat.receive('A message from your live customer service rep');
		 *     resolve(); // gets rid of loading spinner and allows the chat text box to accept another message
		 *     // reject(error);
		 *  }
		 * });
		 */
	
		enableCustomInputHandler: function(config) {
			bootstrap.enableCustomInputHandler(config);
			return IBMChat;
		},
	
		/**
		 * Return chat input boxes handling to the default provided handler.
		 * @function disableCustomInputHandler
		 * @memberof IBMChat
		 * @returns {IBMChat} - Returns IBMChat for chaining.
		 * @example
		 * IBMChat.disableCustomInputHandler();
		 */
	
		disableCustomInputHandler: function() {
			bootstrap.disableCustomInputHandler();
			return IBMChat;
		},
	
		/**
		 * Set focus to the chat text box. Useful if you want users to be able to just start typing into the text box without having to click in the text box first to set focus.
		 * @function focusInput
		 * @memberof IBMChat
		 * @returns {IBMChat} - Returns IBMChat for chaining.
		 * @example
		 * IBMChat.focusInput();
		 */
	
		focusInput: function() {
			bootstrap.focusInput();
			return IBMChat;
		},
		/**
		 * Prevent users from submitting messages in the chat text box. Useful when you want the user to interact with a layout instead.
		 * @function disableInput
		 * @memberof IBMChat
		 * @returns {IBMChat} - Returns IBMChat for chaining.
		 * @example
		 * IBMChat.disableInput();
		 */
		disableInput: function() {
			bootstrap.disableInput();
			return IBMChat;
		},
	
		/**
		 * Enable users to submit messages in the chat text box. Useful when you want users to be able to return to adding messages to the chat text box after interacting with a layout.
		 * @function enableInput
		 * @returns {IBMChat} - Returns IBMChat for chaining.
		 * @example
		 * IBMChat.enableInput();
		 */
		enableInput: function() {
			bootstrap.enableInput();
			return IBMChat;
		},
	
		/**
		 * Subscribe to an IBMChat event.
		 * @function subscribe
		 * @memberof IBMChat
		 * @param {string} eventName - Takes a string representing the name of the event
		 * @param {function} callback - function to run when event is called
		 * @param context - optional: value of "this" in the function
		 * @returns {IBMChat} - Returns IBMChat for chaining.
		 * @example
		 * IBMChat.subscribe('the-end-of-the-world', function(message) {
		 *   console.log(message);
		 * });
		 */
		subscribe: function(eventName, callback) {
			bootstrap.subscribe(eventName, callback);
			return IBMChat;
		},
		/**
		 * Publish an IBMChat event.
		 * @function publish
		 * @memberof IBMChat
		 * @param {string} eventName - A string that represents the name of the event data
		 * @param data - Data to pass to the callback function of any subscribed functions. Accepts any data type.
		 * @returns {IBMChat} - Returns IBMChat for chaining.
		 * @example
		 * IBMChat.publish('the-end-of-the-world', 'panic!');
		 */
		publish: function(eventName) {
			bootstrap.publish(eventName);
			return IBMChat;
		},
	
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
			* @returns {IBMChat.profile} - Returns IBMChat.profile for chaining.
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
			* @returns {Boolean} - Boolean indicating if the key exists.
			*/
			has: bootstrap.profile.has,
			/**
			* Clear the entire user profile.
			* @memberof IBMChat.profile
			* @function clear
			* @returns {IBMChat.profile} - Returns IBMChat.profile for chaining.
			* @example
			* IBMChat.profile.clear();
			*/
			clear: bootstrap.profile.clear,
			/**
			* Delete an item from the user profile based on key.
			* @memberof IBMChat.profile
			* @function delete
			* @returns {IBMChat.profile} - Returns IBMChat.profile for chaining.
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
			* @returns {IBMChat.profile} - Returns IBMChat.profile for chaining.
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
		currentSubscriptions: function() {
			bootstrap.currentSubscriptions();
			return IBMChat;
		},
		/**
		* @ignore
		*/
		playback: bootstrap.playback,
	
		/**
		 * Turns on a whole bunch of verbose console.log statements!
		 * @function debug
		 * @memberof IBMChat
		 * @returns {IBMChat} - Returns IBMChat for chaining.
		 * @example
		 * IBMChat.debug()
		 */
		debug: function() {
			bootstrap.debug();
			return IBMChat;
		}
	
	};
	
	
	module.exports = IBMChat;


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

	module.exports = ".IBMChat-outer-container {\n\tmax-width: 768px;\n  min-width: 288px;\n  margin: 0 auto 0 auto;\n  border: none;\n\tmin-height:100px;\n  height: 100%;\n  box-sizing: border-box;\n\tpadding:0;\n\tdisplay:table;\n\twidth:100%;\n\ttext-align: left;\n}\n\n\n/* Agent Component */\n\n.IBMChat-inner-container {\n\tdisplay:table-cell;\n\theight:100%;\n\tmargin: 0;\n\tpadding: 0 8px 0 8px;\n\tvertical-align: bottom;\n}\n\n/* Chat Component */\n\n.IBMChat-chat-container {\n\tdisplay:table-row;\n\tmargin: 0;\n\tpadding:\n}\n\n/* Messages Component */\n\n.IBMChat-messages {\n\toverflow-y: auto;\n\toverflow-x: hidden;\n\theight:auto;\n}\n\n.IBMChat-messages > div .IBMChat-watson-layout {\n\topacity:0.8;\n}\n\n.IBMChat-messages > div:last-child .IBMChat-watson-layout {\n\topacity:1;\n}\n\n.IBMChat-messages label {\n\tdisplay:block;\n\tfont-weight:bold;\n\ttext-transform: capitalize;\n\tpadding-bottom:0.25em;\n}\n\n.IBMChat-messages input {\n\tborder-radius: 0;\n\tborder: 0;\n\tpadding:0.25em;\n}\n\n.IBMChat-messages button {\n\tbackground: none;\n\tborder: 0;\n\tcolor: inherit;\n\tfont: inherit;\n\tline-height: normal;\n\toverflow: visible;\n\tpadding: 0;\n\t-webkit-appearance: button; /* for input */\n\t-webkit-user-select: none; /* for button */\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tborder-radius: 2em;\n\tcursor: pointer;\n\tline-height: 2.5em;\n\tmargin:0;\n}\n\n.IBMChat-messages button[disabled=\"true\"] {\n\tcursor: default;\n  opacity:.8;\n}\n\n.IBMChat-messages button::-moz-focus-inner {\n\tborder: 0;\n\tpadding: 0;\n}\n\n/* WatsonMessage Component */\n\n.IBMChat-watson-message-container {\n\tmargin: 1em 0 1em 0;\n}\n\n.IBMChat-watson-message {\n\tmargin:1em 2em 1em 0;\n\tpadding: 0.1em;\n\tpadding-left: 1em;\n}\n\n.IBMChat-watson-layout {\n\tmargin: 0 1em 0 1em;\n}\n\n/* UserMessage Component */\n\n.IBMChat-user-message-container {\n  margin: 1em 0 1em 2em;\n}\n\n.IBMChat-user-message {\n  padding:1em;\n\tmargin:0 1em 0 0;\n\tborder-radius: 0.5em;\n}\n\n/* Input Component */\n\n.IBMChat-input-container {\n\tdisplay:table-row;\n\theight:72px;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n.IBMChat-input-form {\n\tdisplay:table-cell;\n\tposition:relative;\n\theight: 24px;\n\tpadding:24px 24px 0 24px;\n}\n\n.IBMChat-chat-textbox {\n  border: none;\n\tborder-radius: 0;\n  color: inherit;\n  background: transparent;\n  font-size:1em;\n  margin:0;\n  padding:0 0 3px 0;\n  width:100%;\n}\n\n.IBMChat-chat-textbox[disabled='disabled'] {\n\topacity:0.5;\n}\n\n.IBMChat-input-form ::-webkit-input-placeholder {\n\topacity:1;\n}\n\n.IBMChat-chat-textbox:focus {\n  outline: none;\n  padding:0 0 2px 0;\n}\n\n/* validation error message */\n.IBMChat-validation-error {\n\tcolor: #CB3333;\n\tpadding-top: 0.25em;\n\tfont-size: 0.9em;\n\theight: 1em;\n}\n\n/* Spinner */\n.IBMChat-input-loading {\n\tz-index: 2;\n\tposition:absolute;\n\tright: 16px;\n\ttop: 15px;\n\theight:32px;\n\twidth:32px;\n}\n\n.IBMChat-ibm-spinner-start {\n\topacity:0;\n}\n\n.IBMChat-ibm-spinner {\n\tfill: transparent;\n\tstroke-width: 3;\n\tstroke-linecap: \"butt\";\n\tstroke-dasharray: 1;\n\tstroke-dashoffset: 1;\n}\n\n/* initial rotation and stroke animation and infinite rotation*/\n.IBMChat-init-spin {\n\tanimation: init-rotate 150ms linear forwards, rotate-loop 2000ms linear infinite;\n}\n\n.IBMChat-init-spin svg circle {\n\tanimation: init-stroke 1000ms linear;\n}\n\n.IBMChat-end-spin svg circle {\n\tdisplay:none;\n}\n\n/* initial rotation */\n@keyframes init-rotate {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t100% {\n\t\ttransform: rotate(180deg);\n\t}\n}\n\n/* looping rotation */\n@keyframes rotate-loop {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n/* initial stroke animation */\n@keyframes init-stroke {\n\t0% {\n\t\topacity: 0;\n\t}\n\t100% {\n\t\topacity: 1;\n\t}\n}\n"

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
	
	var layouts = __webpack_require__(5);
	var events = __webpack_require__(9);
	var eventHandlers = __webpack_require__(66);
	var BotSDK = __webpack_require__(58);
	var state = __webpack_require__(10);
	var profile = __webpack_require__(57);
	var playback = __webpack_require__(82);
	var Promise = __webpack_require__(84).Promise;
	var assign = __webpack_require__(11);
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
		if (playback === true) { //TODO: remove if playback when Dashboard code is updated
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
	
		return new Promise(function(resolve, reject) {
			var current = state.getState();
			var defaultState = {
				active: true,
				root: root,
				mapsServer: ("https://dd1-i-serve-maps.mybluemix.net") || 'https://dp1-i-serve-maps.mybluemix.net/',
				botID: config.botID,
				styles: assign({}, defaultStyles, config.styles),
				baseURL: config.baseURL,
				originalContent: root.innerHTML,
				handleInput: {
					default: true
				},
				playback: config.playback || false //TODO: remove playback when Dashboard code is updated
			};
			if (current.active === true) {
				resolve();
				return;
			}
			if (root) {
				if (config.errorHandler)
					events.subscribe('error', config.errorHandler, config.errorHandlerContext);
				else
					events.subscribe('error', eventHandlers.error);
	
				//TODO: remove if playback when Dashboard code is updated
				if (config.playback === true) {
					defaultState.chatID = 'playback';
					registerEvents(true);
					registerLayouts();
					events.publish('start', defaultState);
					resolve();
				} else if (config.botID) {
					BotSDK
						.configure( SDKconfig )
						.start( config.botID )
						.then( function(res) {
							defaultState.chatID = res.chatID;
							window.sessionStorage.setItem('IBMChatChatID', res.chatID);
							registerLayouts();
							registerEvents();
							events.publish('start', defaultState);
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
		if (layout && init && typeof init === 'function') {
			if (registeredLayouts.indexOf(layout) === -1 || !defaultSetup) {
				registeredLayouts.push(layout);
				layoutInit[layout] = init;
			}
		} else {
			console.error('registerLayout was configured incorrectly.');
		}
	}
	
	function send(message) {
		if (message) {
			var current = state.getState();
			if (current.active) {
				events.publish('send', {
					text: message
				});
			}
		} else {
			console.error('The message was empty.');
		}
	}
	
	function receive(message) {
		if (message) {
			var current = state.getState();
			if (current.active)
				events.publish('receive', message);
		} else {
			console.error('The message was empty.');
		}
	}
	
	function sendMock(message) {
		if (message) {
			var current = state.getState();
			if (current.active) {
				events.publish('send-mock', {
					text: message
				});
			}
		} else {
			console.error('The message was empty.');
		}
	}
	
	function sendSilently(message) {
		if (message) {
			var current = state.getState();
			if (current.active) {
				events.publish('send', {
					text: message,
					silent: true
				});
			}
		} else {
			console.error('The message was empty.');
		}
	}
	
	function enableCustomInputHandler(config) {
		if (config && config.callback && typeof config.callback === 'function') {
			state.setState({
				handleInput: {
					default: false,
					callback: config.callback,
					context: config.context
				}
			});
		} else {
			console.error('Invalid configuration of enableCustomInputHandler');
		}
	}
	
	function disableCustomInputHandler() {
		state.setState({
			handleInput: {
				default: true
			}
		});
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
		enableCustomInputHandler: enableCustomInputHandler,
		disableCustomInputHandler: disableCustomInputHandler,
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
		completeEvent: events.completeEvent,
		playback: playback
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
	
	var showLocationsLayout = __webpack_require__(6);
	var requestGeolocationLatlongLayout = __webpack_require__(45);
	var chooseLocationTypeLayout = __webpack_require__(46);
	var chooseLayout = __webpack_require__(50);
	var formLayout = __webpack_require__(54);
	var creditCardLayout = __webpack_require__(61);
	
	module.exports = {
		showLocations: showLocationsLayout,
		requestGeolocationLatlong: requestGeolocationLatlongLayout,
		chooseLocationType: chooseLocationTypeLayout,
		choose: chooseLayout,
		creditCard: creditCardLayout,
		form: formLayout
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
	
	__webpack_require__(7);
	
	var events = __webpack_require__(9);
	var subscribe = events.subscribe;
	var publish = events.publish;
	var state = __webpack_require__(10);
	var getState = state.getState;
	var setState = state.setState;
	var utils = __webpack_require__(35);
	
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
		base: __webpack_require__(37),
		createDomArray: __webpack_require__(38),
		addLocationsItem: __webpack_require__(39),
		addLocationItem: __webpack_require__(40),
		hoursClosed: __webpack_require__(41),
		hoursOpen: __webpack_require__(42),
		hoursTodayOpen: __webpack_require__(43),
		hoursTodayClosed: __webpack_require__(44)
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
				var text = templates.createDomArray;
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
	
	function createHours(hoursEl, moreHoursEl, hours, timezone) {
		if (hours) {
			var today = new Date().getDay();
			var todaysHours = hours[today];
			var el = document.createElement('div');
			if (todaysHours && todaysHours.isOpen) {
				el.innerHTML = utils.compile(templates.hoursTodayOpen, {
					ns: ns,
					open: formatAMPM(todaysHours.open),
					close: formatAMPM(todaysHours.close),
					timezone: timezone
				});
			} else {
				el.innerHTML = utils.compile(templates.hoursTodayClosed, {
					ns: ns,
					timezone: timezone
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
	
			// name
			if (item.label)
				dom.label.textContent = item.label;
			else
				dom.parentEl.removeChild(dom.label);
			
			// addresses
			var addresses = parseAddress(item.address.address);
			dom.address1.textContent = addresses.address1;
			dom.address2.textContent = addresses.address2;
			dom.address.appendChild(dom.address1);
			dom.address.appendChild(document.createElement('br'));
			dom.address.appendChild(dom.address2);
			dom.link.setAttribute('href', 'https://maps.google.com/?q=' + encodeURIComponent(item.address.address));
			dom.link.setAttribute('target', '_blank');
			dom.distance.textContent = distance(item) || '';
			
			// email
			if (item.email) {
				const linkEl = document.createElement('a');
				linkEl.setAttribute('href', 'mailto:' + item.email);
				linkEl.setAttribute('target', '_blank');
				linkEl.textContent = item.email;
				dom.email.appendChild(linkEl);
			} else {
				dom.email.parentNode.removeChild(dom.email);
			}
			
			// phones
			if (item.phones && item.phones.length > 0)
				createPhoneArray(dom.phone, item.phones);
			else
				dom.phone.parentNode.removeChild(dom.phone);
			
			// hours
			if (item.days && item.days.length > 0) {
				createHours(dom.hours, dom.moreHours, item.days, item.address.timezone);
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
/* 7 */
[89, 8],
/* 8 */
/***/ function(module, exports) {

	module.exports = ".IBMChat-map {\n\tpadding: 0 0 1em 0;\n}\n\n.IBMChat-map-img {\n\theight:180px;\n}\n\n.IBMChat-map-img img {\n\theight:180px;\n}\n\n.IBMChat-map-multiple-locations {\n\tcursor: default;\n\topacity:0.3;\n\tdisplay: table;\n\twidth: 100%;\n}\n\n.IBMChat-map-multiple-locations .IBMChat-map-locations-row {\n\tdisplay:table-row;\n\twidth: 100%;\n}\n\n.IBMChat-map-multiple-locations .IBMChat-map-locations-cell {\n\tdisplay: table-cell;\n\toverflow: hidden;\n\tword-wrap: break-word;\n}\n\n.IBMChat-map-location-active .IBMChat-map-multiple-locations {\n\topacity: 1;\n}\n\n.IBMChat-map-clickable .IBMChat-map-locations-item.IBMChat-map-multiple-locations {\n\tpadding: 1em 0 1em 0;\n\tcursor: pointer;\n\topacity: 1;\n}\n\n.IBMChat-map-data-section {\n\tmargin-top:0.5em;\n}\n\n.IBMChat-map-locations-item {\n\tpadding: 1em;\n\tborder-bottom:1px solid #505050;\n}\n\n\n.IBMChat-map-locations-item-icon {\n\ttext-align:center;\n\twidth: 40px;\n}\n\n.IBMChat-map-locations-item-data {\n\tpadding:0 4px 0 4px;\n\tfont-size:0.9em;\n}\n.IBMChat-map-locations-item-data-title {\n\tfont-weight: bold;\n\tpadding-bottom:0.5em;\n}\n.IBMChat-map-locations-item-data-items {\n\tfont-size: 0.9em;\n}\n\n.IBMChat-map-locations-item-data-section {\n\tpadding-bottom:1em;\n}\n\n.IBMChat-map-locations-item-data-email {\n\tpadding-bottom:1em;\n}\n\n.IBMChat-map-locations-item-data-phone {\n\tdisplay: table;\n\tmax-width:400px;\n\twidth: 100%;\n\tpadding-bottom:1em;\n}\n.IBMChat-map-contact-row {\n\tpadding-bottom:1em;\n}\n\n.IBMChat-map-hours-open {\n\tpadding-bottom:0.5em;\n}\n\n.IBMChat-map-contact-type {\n\tfont-style:italic;\n\tfont-size:0.9em;\n}\n.IBMChat-map-contact-data {\n\n}\n\na.IBMChat-map-locations-item-data-address-link,\na.IBMChat-map-locations-item-data-address-link:hover,\na.IBMChat-map-locations-item-data-address-link:visited,\na.IBMChat-map-locations-item-data-address-link:active,\n.IBMChat-map-contact-data a,\n.IBMChat-map-contact-data a:hover,\n.IBMChat-map-contact-data a:active,\n.IBMChat-map-contact-data a:visited {\n\tfont-weight:normal;\n\tfont-size:0.9em;\n}\n\n.IBMChat-map-locations-item-distance {\n\twidth:64px;\n\tfont-size:0.9em;\n}\n\nbutton.IBMChat-map-locations-item-data-hours-button {\n\tfont-size:0.9em;\n\tpadding: 0 1em 0 1em;\n\tline-height:1.5em;\n\tmargin-top:1em;\n}\n\nbutton.IBMChat-map-locations-all {\n\tfont-size:0.9em;\n\tpadding: 0 1em 0 1em;\n\tline-height:1.5em;\n}\n\n.IBMChat-map-locations-item-data-more-hours {\n\tdisplay: table;\n}\n\n.IBMChat-map-locations-item-data-more-hours.IBMChat-map-hidden {\n\tdisplay: none;\n}\n\n.IBMChat-map-days-hours {\n\tdisplay: table-row;\n}\n\n.IBMChat-map-days-hours-day, .IBMChat-map-days-hours-hours, .IBMChat-map-days-hours-closed {\n\tdisplay: table-cell;\n\tmargin: 0;\n\tpadding:0.75em 1em 0 0;\n\toverflow: hidden;\n\tword-wrap: break-word;\n}\n\n.IBMChat-map-hours-timezone {\n\tfont-style: italic;\n\tfont-size: 0.8em;\n\tpadding-top: 0.5em;\n}\n\n.IBMChat-map-days-hours > div:last-child {\n\tpadding: 0.75em 0 0 0 !important;\n}\n"

/***/ },
/* 9 */
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
	
	var state = __webpack_require__(10);
	
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
/* 10 */
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
	var assign = __webpack_require__(11);
	
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(12),
	    copyObject = __webpack_require__(14),
	    createAssigner = __webpack_require__(15),
	    isArrayLike = __webpack_require__(19),
	    isPrototype = __webpack_require__(24),
	    keys = __webpack_require__(25);
	
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(13);
	
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
/* 13 */
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(12);
	
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(16),
	    isIterateeCall = __webpack_require__(18);
	
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(17);
	
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
/* 17 */
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(13),
	    isArrayLike = __webpack_require__(19),
	    isIndex = __webpack_require__(23),
	    isObject = __webpack_require__(21);
	
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(20),
	    isLength = __webpack_require__(22);
	
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(21);
	
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
/* 21 */
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
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(26),
	    baseKeys = __webpack_require__(32),
	    isArrayLike = __webpack_require__(19);
	
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(27),
	    isArguments = __webpack_require__(28),
	    isArray = __webpack_require__(31),
	    isIndex = __webpack_require__(23);
	
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
/* 27 */
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(29);
	
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(19),
	    isObjectLike = __webpack_require__(30);
	
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
/* 30 */
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
/* 31 */
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(24),
	    nativeKeys = __webpack_require__(33);
	
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(34);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;


/***/ },
/* 34 */
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
	
	var state = __webpack_require__(10);
	var writeMessage = __webpack_require__(36);
	
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


/***/ },
/* 36 */
/***/ function(module, exports) {

	//TODO: we also need to sniff for emails
	
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
	
	module.exports = writeMessage;


/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}\">\n\t<div class=\"${ns}-img\"></div>\n\t<div class=\"${ns}-data ${ns}-clickable\"></div>\n</div>\n"

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-contact-type\"></div>\n<div class=\"${ns}-contact-data\"></div>\n"

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-locations-item ${ns}-multiple-locations ${ns}-data-section IBMChat-secondary-colors\">\n\t<div class=\"${ns}-locations-row\">\n\t\t<div class=\"${ns}-locations-item-icon ${ns}-locations-cell\"></div>\n\t\t<div class=\"${ns}-locations-item-data ${ns}-locations-cell\">\n\t\t\t<div class=\"${ns}-locations-item-data-title\"></div>\n\t\t\t<div class=\"${ns}-locations-item-data-items\">\n\t\t\t\t<div class=\"${ns}-locations-item-data-address\"></div>\n\t\t\t\t<div class=\"${ns}-locations-item-distance\"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-locations-item ${ns}-data-section IBMChat-secondary-colors\">\n\t<div class=\"${ns}-locations-item-data-section\">\n\t\t<button class=\"${ns}-locations-all IBMChat-accent-colors\">Back to All Locations</button>\n\t</div>\n\t<div class=\"${ns}-locations-item-data\">\n\t\t<div class=\"${ns}-locations-item-data-title\"></div>\n\t\t<div class=\"${ns}-locations-item-data-items\">\n\t\t\t<div class=\"${ns}-locations-item-data-section\">\n\t\t\t\t<a class=\"${ns}-locations-item-data-address-link\">\n\t\t\t\t\t<div class=\"${ns}-locations-item-data-address\"></div>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"${ns}-locations-item-data-email\"></div>\n\t\t\t<div class=\"${ns}-locations-item-data-phone\"></div>\n\t\t\t<div class=\"${ns}-locations-item-data-timezone\"></div>\n\t\t\t<div class=\"${ns}-locations-item-data-hours\"></div>\n\t\t</div>\n\t\t<button class=\"${ns}-locations-item-data-hours-button IBMChat-accent-colors\">More Hours</button>\n\t\t<div class=\"${ns}-locations-item-data-items\">\n\t\t\t<div class=\"${ns}-locations-item-data-more-hours ${ns}-hidden\"></div>\n\t\t</div>\n\t</div>\n\t<div class=\"${ns}-locations-item-distance\"></div>\n</div>\n"

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-days-hours-day\">\n\t${day}\n</div>\n<div class=\"${ns}-days-hours-hours\">\n\tClosed\n</div>\n"

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-days-hours-day\">\n\t${day}\n</div>\n<div class=\"${ns}-days-hours-hours\">\n\t${open} &ndash; ${close}\n</div>\n"

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-hours-open\">Open today:</div>\n<div class=\"${ns}-hours-today\">\n\t${open} &ndash; ${close}\n</div>\n<div class=\"${ns}-hours-timezone\">( ${timezone} )</div>\n"

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-hours-open\">Closed today.</div>\n<div class=\"${ns}-hours-timezone\">( ${timezone} )</div>"

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
	
	var events = __webpack_require__(9);
	var subscribe = events.subscribe;
	var publish = events.publish;
	
	var requestGeolocationLatlongs = [];
	
	var LOCATION_TIMEOUT = 20 * 1000;
	
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
			this.timedOut = false;
			this.timeoutCheck = setTimeout(function() {
				this.timedOut = true;
				this.handleLocationNotShared();
			}.bind(this), LOCATION_TIMEOUT);
			publish('enable-loading');
			publish('disable-input');
			navigator.geolocation.getCurrentPosition(
				function(position) {
					if (this.timedOut) return false;
					clearTimeout(this.timeoutCheck);
					this.handleLocationShared(position);
				}.bind(this),
				function() {
					if (this.timedOut) return false;
					clearTimeout(this.timeoutCheck);
					this.handleLocationNotShared();
				}.bind(this),
				{ timeout: LOCATION_TIMEOUT }
			);
		},
		handleLocationShared: function(position) {
			publish('enable-input');
			publish('disable-loading');
			publish('send', {
				text: position.coords.latitude + ',' + position.coords.longitude,
				silent: true
			});
		},
		handleLocationNotShared: function() {
			publish('enable-input');
			publish('disable-loading');
			publish('receive', "You haven't shared your location on this website.");
			publish('send', {
				text: 'find nearest locations',
				silent: true
			});
		}
	};
	
	module.exports = requestGeolocationLatlongLayout;


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
	
	__webpack_require__(47);
	
	var events = __webpack_require__(9);
	var subscribe = events.subscribe;
	var publish = events.publish;
	var activeClassName = 'IBMChat-accent-colors';
	var inactiveClassName = 'IBMChat-secondary-colors';
	var utils = __webpack_require__(35);
	
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
		base: __webpack_require__(49)
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
/* 47 */
[89, 48],
/* 48 */
/***/ function(module, exports) {

	module.exports = ".IBMChat-islocationapi-container {\n\ttext-align:center;\n}\n\n.IBMChat-islocationapi-container button {\n\tmargin: 1em auto 0 auto;\n\tmin-width:200px;\n\tmax-width:240px;\n\twidth:75%;\n}\n\n.IBMChat-islocationapi-container div:last-child {\n\tmargin-bottom: 1em;\n}\n"

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-container\">\n\t<div><button class=\"IBMChat-secondary-colors\" data-input=\"${values.geolocation}\">Use My Current Location</button></div>\n\t<div><button class=\"IBMChat-secondary-colors\" data-input=\"${values.postalcode}\">A Zip Code</button></div>\n</div>\n"

/***/ },
/* 50 */
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
	
	__webpack_require__(51);
	
	var events = __webpack_require__(9);
	var subscribe = events.subscribe;
	var publish = events.publish;
	var utils = __webpack_require__(35);
	var ns = 'IBMChat-choose';
	var activeClassName = 'IBMChat-accent-colors';
	var inactiveClassName = 'IBMChat-secondary-colors';
	var widgets = [];
	var templates = {
		button: __webpack_require__(53)
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
/* 51 */
[89, 52],
/* 52 */
/***/ function(module, exports) {

	module.exports = ".IBMChat-choose-container {\n\ttext-align:center;\n\tpadding:0 0 1em 0;\n}\n\n.IBMChat-choose-container span {\n\tdisplay:inline-block;\n\tmargin: 1em 1em 0 1em;\n}\n\n.IBMChat-choose-container div {\n\tmargin: 1em auto 0 auto;\n}\n\n.IBMChat-choose-container button {\n\tmin-width:230px;\n\tmax-width:270px;\n}\n"

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = "<button class=\"IBMChat-secondary-colors\" data-input=\"${text}\">${text}</button>\n"

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
	
	__webpack_require__(55);
	
	var events = __webpack_require__(9);
	var profile = __webpack_require__(57);
	var utils = __webpack_require__(35);
	var subscribe = events.subscribe;
	var publish = events.publish;
	var ns = 'IBMChat-form';
	var activeClassName = 'IBMChat-accent-colors';
	var inactiveClassName = 'IBMChat-secondary-colors';
	var templates = {
		base: __webpack_require__(59),
		field: __webpack_require__(60)
	};
	var widgets = [];
	
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
		this.subscribeSend = subscribe('send', this.removeEventListeners.bind(this));
		publish('disable-input');
	};
	
	Form.prototype.drawForm = function() {
		var base = document.createElement('div');
		var formFields;
		base.innerHTML = templates.base;
		formFields = base.querySelector('.IBMChat-form-fields');
		this.data.forEach(function(datum) {
			var field = document.createElement('div');
			field.innerHTML = utils.compile(templates.field, {
				label: datum.label || '',
				name: datum.name,
				value: ''
			});
			field.className = ns + '-fields-row';
			formFields.appendChild(field);
		});
		this.fields = formFields.querySelectorAll('input');
		this.submitButton = base.querySelector('.' + ns + '-submit');
		this.cancelButton = base.querySelector('.' + ns + '-cancel');
		this.submitButton.classList.add(inactiveClassName);
		this.cancelButton.classList.add(inactiveClassName);
		this.layoutElement.appendChild(base);
		this.fields[0].focus();
		this.addEventListeners();
	};
	
	Form.prototype.handleSubmit = function() {
		if (this.validateFields() === true) {
			this.fields.forEach(function(field) {
				profile.set(field.getAttribute('name'), field.value);
			});
			this.submitButton.classList.add(activeClassName);
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
			if (this.data[i].required === 'true')
				valid = this.validateField(this.fields[i], this.data[i]);
		}
		return valid;
	};
	
	Form.prototype.validateField = function(field, datum) {
		var valid = true;
		if (!field.value || field.value.trim().length === 0) {
			this.addError(field.getAttribute('name'), 'This field is required.');
			if (valid) field.focus();
			valid = false;
		} else if (datum.validations && datum.validations.length !== 0) {
			for (var i = 0; i < datum.validations.length; i++) {
				var validation = datum.validations[i];
				var regex = new RegExp('/'+ validation.regex +'/');
				var matches = regex.test(field.value);
				if (!matches) {
					this.addError(field.getAttribute('name'), validation.message);
					if (valid) field.focus();
					valid = false;
					break;
				}
			}
		}
		return valid;
	};
	
	Form.prototype.addError = function(name, msg) {
		var el = this.layoutElement.querySelector('[data-validation-for="' + name + '"]');
		el.textContent = msg;
		el.style.display = 'block';
	};
	
	Form.prototype.removeError = function(name) {
		var el = this.layoutElement.querySelector('[data-validation-for="' + name + '"]');
		el.textContent = '';
	};
	
	Form.prototype.removeAllErrors = function() {
		var els = this.layoutElement.querySelectorAll('[data-validation-for]');
		els.forEach(function(el) {
			this.removeError(el);
		}, this);
	};
	
	Form.prototype.handleEnter = function(e) {
		if (e.keyCode === 13)
			this.handleSubmit();
	};
	
	Form.prototype.handleInput = function(e) {
		var name = e.target.name;
		this.removeError(name);
	};
	
	Form.prototype.handleCancel = function() {
		this.cancelButton.classList.add(activeClassName);
		publish('send', {
			silent: true,
			text: 'cancel'
		});
		publish('enable-input');
	};
	
	Form.prototype.addEventListeners = function() {
		this.cancelButton.addEventListener('click', this.handleCancel.bind(this));
		this.submitButton.addEventListener('click', this.handleSubmit.bind(this));
		this.fields.forEach(function(field) {
			field.addEventListener('keypress', this.handleEnter.bind(this));
			field.addEventListener('input', this.handleInput.bind(this));
		}, this);
	};
	
	Form.prototype.removeEventListeners = function() {
		this.cancelButton.removeEventListener('click', this.handleCancel.bind(this));
		this.cancelButton.setAttribute('disabled', true);
		this.submitButton.removeEventListener('click', this.handleSubmit.bind(this));
		this.submitButton.setAttribute('disabled', true);
		this.fields.forEach(function(field) {
			field.removeEventListener('keypress', this.handleEnter.bind(this));
			field.removeEventListener('input', this.handleInput.bind(this));
			field.setAttribute('disabled', true);
		}, this);
	
		this.subscribeSend.remove();
	};
	
	module.exports = formLayout;


/***/ },
/* 55 */
[89, 56],
/* 56 */
/***/ function(module, exports) {

	module.exports = ".IBMChat-form-container {\n\ttext-align:center;\n\tpadding:0 0 1em 0;\n}\n\n.IBMChat-form-fields {\n\tmargin:auto;\n\ttext-align:left;\n\tmax-width:360px;\n\twidth:100%;\n}\n\n.IBMChat-form-fields-row {\n\tpadding-bottom:0.75em;\n}\n\n.IBMChat-form-fields-row input {\n\twidth: 100%;\n}\n\n.IBMChat-form-buttons {\n\twidth: 100%;\n\tmax-width: 360px;\n\theight: 2.5em;\n\ttext-align:center;\n\tmargin:auto;\n}\n\n.IBMChat-form-buttons button {\n\tline-height: 2.5em;\n\twidth: 100px;\n}\n\n.IBMChat-form-cancel {\n\tfloat:left;\n\tmax-width: 50%;\n}\n.IBMChat-form-submit {\n\tfloat:right;\n\tmax-width: 50%;\n}\n"

/***/ },
/* 57 */
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
	
	var BotSDK = __webpack_require__(58);
	var profile = BotSDK.profile;
	
	module.exports = profile;


/***/ },
/* 58 */
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
/* 59 */
/***/ function(module, exports) {

	module.exports = "<div class=\"IBMChat-form-container\">\n\t<div class=\"IBMChat-form-fields\"></div>\n\t<div class=\"IBMChat-form-buttons\">\n\t\t<button class=\"IBMChat-form-cancel\">Cancel</button>\n\t\t<button class=\"IBMChat-form-submit\">Submit</button>\n\t</div>\n</div>\n"

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "<label>${label}</label>\n<input type=\"text\" class=\"IBMChat-input-colors\" name=\"${name}\" value=\"${value}\" />\n<div class=\"IBMChat-validation-error\" data-validation-for=\"${name}\"></div>\n"

/***/ },
/* 61 */
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
	
	__webpack_require__(62);
	
	var events = __webpack_require__(9);
	var state = __webpack_require__(10);
	var subscribe = events.subscribe;
	var publish = events.publish;
	var utils = __webpack_require__(35);
	var validation = __webpack_require__(64);
	var activeClassName = 'IBMChat-accent-colors';
	var ns = 'IBMChat-creditcard';
	var widgets = [];
	var templates = {
		base: __webpack_require__(65)
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
		this.subscribeSend = subscribe('send', this.removeAllEventListeners.bind(this));
		publish('disable-input');
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
		this.formElements['cc_full_name'].focus();
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
			if (valid) this.formElements['cc_full_name'].focus();
			valid = false;
		} else {
			this.removeError('cc_full_name');
		}
	
		var cc = validation.validateCard(this.data.acceptedCards, this.formData.cc_number);
		if (!cc.valid) {
			this.addError('cc_number', cc.message);
			if (valid) this.formElements['cc_number'].focus();
			valid = false;
		} else {
			this.removeError('cc_number');
		}
	
		var exp = validation.validateExp(this.formData.cc_exp_date_month, this.formData.cc_exp_date_year);
		if (!exp.valid) {
			this.addError('cc_exp_date', exp.message);
			if (valid) this.formElements['cc_exp_date_month'].focus();
			valid = false;
		} else {
			this.removeError('cc_exp_date');
		}
	
		var cvv = validation.validateCVV(this.formData.cc_code);
		if (!cvv.valid) {
			this.addError('cc_code', cvv.message);
			if (valid) this.formElements['cc_code'].focus();
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
		this.cancelButton.classList.add(activeClassName);
		publish('send', {
			silent: true,
			text: 'cancel'
		});
		publish('enable-input');
	};
	
	CreditCard.prototype.removeAllEventListeners = function() {
		this.cancelButton.removeEventListener('click', this.handleCancel.bind(this));
		this.cancelButton.setAttribute('disabled', true);
		this.continueButton.removeEventListener('click', this.handleContinue.bind(this));
		this.continueButton.setAttribute('disabled', true);
		for (var j = 0; j < this.fields.length; j++)
			this.fields[j].setAttribute('disabled', true);
	
		this.subscribeSend.remove();
	};
	
	module.exports = creditCardLayout;


/***/ },
/* 62 */
[89, 63],
/* 63 */
/***/ function(module, exports) {

	module.exports = ".IBMChat-creditcard-container {\n\ttext-align:center;\n\tpadding:0 0 1em 0;\n}\n\n.IBMChat-creditcard-rows {\n\tmargin:auto;\n\ttext-align:left;\n\tmax-width:360px;\n\twidth:100%;\n}\n\n.IBMChat-creditcard-row {\n\ttext-align:left;\n\tpadding-bottom:1em;\n}\n\n.IBMChat-creditcard-row input {\n\twidth:100%;\n}\n\ndiv[data-validation-for] {\n\tpadding-top:0.5em;\n}\n\n.IBMChat-creditcard-col {\n\tdisplay:inline-block;\n}\n\n.IBMChat-creditcard-col input{\n\ttext-align:center;\n\twidth:40px;\n}\n\n.IBMChat-creditcard-col:last-child input {\n\twidth:60px;\n}\n\n.IBMChat-creditcard-buttons {\n\theight:2.5em;\n}\n\n.IBMChat-creditcard-buttons button {\n\twidth:90px;\n\tfloat:left;\n}\n\n.IBMChat-creditcard-buttons button:last-child {\n\tfloat:right;\n}\n"

/***/ },
/* 64 */
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
		userY = parseInt(userY, 10);
	
		if (userM > 12 || userM < 1 || (userY > year + 20) || (userY < year || (userY === year && userM < month))) {
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
/* 65 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-container\">\n\t<div class=\"${ns}-rows\">\n\t\t<div class=\"${ns}-row\">\n\t\t\t<label>Name on Card</label>\n\t\t\t<input type=\"text\" class=\"IBMChat-input-colors\" name=\"cc_full_name\" />\n\t\t\t<div class=\"IBMChat-validation-error\" data-validation-for=\"cc_full_name\" data-valid=\"true\"></div>\n\t\t</div>\n\t\t<div class=\"${ns}-row\">\n\t\t\t<label>Credit Card Number</label>\n\t\t\t<input type=\"text\" class=\"IBMChat-input-colors\" name=\"cc_number\" />\n\t\t\t<div class=\"IBMChat-validation-error\" data-validation-for=\"cc_number\" data-valid=\"true\"></div>\n\t\t</div>\n\t\t<div class=\"${ns}-row\">\n\t\t\t<label>Expiration Date</label>\n\t\t\t<div class=\"${ns}-col\">\n\t\t\t\t<input class=\"${ns}-date IBMChat-input-colors\" type=\"text\" name=\"cc_exp_date_month\" placeholder=\"MM\" maxlength=\"2\" />\n\t\t\t\t<input class=\"${ns}-date IBMChat-input-colors\" type=\"text\" name=\"cc_exp_date_year\" placeholder=\"YYYY\" maxlength=\"4\" />\n\t\t\t\t<div class=\"IBMChat-validation-error\" data-validation-for=\"cc_exp_date\" data-valid=\"true\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"${ns}-row\">\n\t\t\t<label>CVV</label>\n\t\t\t<div class=\"${ns}-col\">\n\t\t\t\t<input class=\"${ns}-cvv IBMChat-input-colors\" type=\"text\" name=\"cc_code\" />\n\t\t\t\t<div class=\"IBMChat-validation-error\" data-validation-for=\"cc_code\" data-valid=\"true\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"${ns}-row ${ns}-buttons\">\n\t\t\t<button class=\"${ns}-cancel IBMChat-secondary-colors\">Cancel</button>\n\t\t\t<button class=\"${ns}-continue IBMChat-input-colors\">Continue</button>\n\t\t</div>\n\t</div>\n</div>\n"

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
	
	var start = __webpack_require__(67);
	var resize = __webpack_require__(73);
	var receive = __webpack_require__(74);
	var send = __webpack_require__(75);
	var sendMock = __webpack_require__(76);
	var sendInputMessage = __webpack_require__(77);
	var input = __webpack_require__(78);
	var error = __webpack_require__(79);
	var playback = __webpack_require__(80);
	var scrollToBottom = __webpack_require__(81);
	
	module.exports = {
		resize: resize,
		start: start,
		send: send,
		sendMock: sendMock,
		receive: receive,
		input: input,
		error: error,
		scrollToBottom: scrollToBottom,
		sendInputMessage: sendInputMessage,
		playback: playback
	};


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
	
	var state = __webpack_require__(10);
	var utils = __webpack_require__(35);
	var events = __webpack_require__(9);
	var templates = __webpack_require__(68);
	
	function start(data) {
		var current;
		state.setState(data);
		current = state.getState();
		utils.attachStyles();
		current.root.className += " chatID-" + current.chatID;
		current.root.innerHTML = templates.start;
		var outerContainer = current.root.querySelector('.IBMChat-outer-container');
		var chatBox = document.createElement('div');
		chatBox.classList.add('IBMChat-input-container');
		chatBox.classList.add('IBMChat-input-container-theme');
		chatBox.innerHTML = templates.input;
		outerContainer.appendChild(chatBox);
		var elements = {
			container: current.root.querySelector('.IBMChat-chat-container'),
			chatHolder: current.root.querySelector('.IBMChat-messages'),
			innerContainer: current.root.querySelector('.IBMChat-inner-container')
		};
		//TODO: remove if conditional after Dashboard implements new playback
		if (current.playback !== true) {
			elements.inputHolder = current.root.querySelector('.IBMChat-input-container');
			elements.input = current.root.querySelector('.IBMChat-chat-textbox');
			elements.form = current.root.querySelector('.IBMChat-input-form');
			elements.loader = current.root.querySelector('.IBMChat-input-loading');
	
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
		}
	
		window.addEventListener('resize', utils.debounce(function() {
			events.publish('resize');
		}, 1000));
	
		window.addEventListener('orientationchange', function() {
			events.publish('resize');
		});
	
		state.setState(elements);
		events.publish('resize');
	}
	
	module.exports = start;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		input: __webpack_require__(69),
		receive: __webpack_require__(70),
		send: __webpack_require__(71),
		start: __webpack_require__(72)
	};


/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "<form class=\"IBMChat-input-form IBMChat-input-form-theme\">\n\t<input aria-labelledby=\"Enter a Message\" type=\"text\" class=\"IBMChat-chat-textbox IBMChat-chat-textbox-theme\" placeholder=\"Enter message...\" />\n\t<div class=\"IBMChat-ibm-spinner-start IBMChat-input-loading IBMChat-input-loading-theme\">\n\t\t<svg class=\"IBMChat-ibm-spinner\" width=32 height=32 viewBox=\"-16 -16 32 32\">\n\t\t\t<circle cx=0 cy=0 r=8 /></svg>\n\t\t</svg>\n\t</div>\n</form>\n"

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${data.uuid}\" class=\"IBMChat-watson-message-container IBMChat-watson-message-container-theme\">\n\t<div class=\"IBMChat-watson-message IBMChat-watson-message-theme\"></div>\n\t<div class=\"IBMChat-watson-layout\"></div>\n</div>\n"

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "<div id=\"${data.uuid}\" class=\"IBMChat-user-message-container IBMChat-user-message-container-theme\">\n\t<div class=\"IBMChat-user-message IBMChat-user-message-theme IBMChat-secondary-colors\"></div>\n</div>\n"

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = "<div class=\"IBMChat-outer-container IBMChat-outer-container-theme IBMChat-default-colors\">\n\t<div class=\"IBMChat-chat-container IBMChat-chat-container-theme\">\n\t\t<div class=\"IBMChat-inner-container IBMChat-inner-container-theme\">\n\t\t\t<div class=\"IBMChat-messages IBMChat-messages-theme\"></div>\n\t\t</div>\n\t</div>\n</div>\n"

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
	
	var state = __webpack_require__(10);
	
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
/* 74 */
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
	
	var state = __webpack_require__(10);
	var events = __webpack_require__(9);
	var utils = __webpack_require__(35);
	var assign = __webpack_require__(11);
	var templates = __webpack_require__(68);
	
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
			utils.writeMessage(item, msg[i]);
			if (i === (msg.length - 1))
				_layoutAndActions(current.DEBUG, data);
		}
	}
	
	module.exports = receive;


/***/ },
/* 75 */
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
	
	var state = __webpack_require__(10);
	var events = __webpack_require__(9);
	var BotSDK = __webpack_require__(58);
	var utils = __webpack_require__(35);
	var assign = __webpack_require__(11);
	var templates = __webpack_require__(68);
	
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
	
	function always() {
		events.publish('disable-loading');
		state.setState({
			inProgress: false
		});
		if (state.getState().sendQueue.length > 0)
			agentSend();
	}
	
	function resolve() {
		always();
	}
	
	function reject(e) {
		events.publish('error', arguments);
		console.error(e.stack);
		always();
	}
	
	function sendToBot(data) {
		var current = state.getState();
		events.publish('enable-loading');
		BotSDK
			.send( current.botID, current.chatID, data.text )
			.then( function(res) {
				events.publish('receive', res);
				resolve();
			})
			.catch( function(e) {
				reject(e);
			});
	}
	
	function agentSend() {
		var current = state.getState();
		var newData = assign({}, current.sendQueue[0], { uuid: utils.getUUID() });
		var msg = newData.text || '';
		state.setState({
			inProgress: true,
			sendQueue: current.sendQueue.slice(1, current.sendQueue.length),
			messages: [].concat(current.messages || [], newData)
		});
		current.root.querySelector('.IBMChat-chat-textbox').value = '';
		if (!newData.silent) {
			current.chatHolder.innerHTML += utils.compile(templates.send, { 'data.uuid': newData.uuid });
			current.chatHolder.querySelector('#' + newData.uuid + ' .IBMChat-user-message').textContent = msg;
			events.publish('scroll-to-bottom');
		}
		events.publish('enable-loading');
		if (current.handleInput.default)
			sendToBot(newData);
		else if (current.handleInput.context)
			current.handleInput.callback.bind(current.handleInput.context, newData.text, resolve, reject);
		else
			current.handleInput.callback(newData.text, resolve, reject);
	}
	
	module.exports = send;


/***/ },
/* 76 */
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
	
	var state = __webpack_require__(10);
	var events = __webpack_require__(9);
	var utils = __webpack_require__(35);
	var assign = __webpack_require__(11);
	var templates = __webpack_require__(68);
	
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
/* 77 */
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
	
	var state = __webpack_require__(10);
	var events = __webpack_require__(9);
	
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
/* 78 */
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
	
	var state = __webpack_require__(10);
	var utils = __webpack_require__(35);
	
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
/* 79 */
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
	
	var events = __webpack_require__(9);
	var state = __webpack_require__(10);
	
	function error(err) {
		console.error(err);
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
/* 80 */
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
	
	var state = __webpack_require__(10);
	var utils = __webpack_require__(35);
	var events = __webpack_require__(9);
	var assign = __webpack_require__(11);
	var templates = __webpack_require__(68);
	
	function start(config) {
		var current;
		var data = {};
		data[config.chatID] = config;
		state.setState(data);
		current = state.getState()[config.chatID];
		utils.attachPlaybackStyles(config.chatID);
		current.root.className += " chatID-" + current.chatID;
		current.root.innerHTML = templates.start;
		current.container = current.root.querySelector('.IBMChat-chat-container');
		current.chatHolder = current.root.querySelector('.IBMChat-messages');
		current.innerContainer = current.root.querySelector('.IBMChat-inner-container');
		data[config.chatID] = current;
		state.setState(data);
		current.chatHolder.style.paddingBottom = '1em';
	
		window.addEventListener('resize', utils.debounce(function() {
			events.publish('playback-resize-' + config.chatID, config.chatID);
		}, 1000));
	
		window.addEventListener('orientationchange', function() {
			events.publish('playback-resize-' + config.chatID, config.chatID);
		});
	
	
		events.publish('playback-resize-' + config.chatID, config.chatID);
	}
	
	function send(obj) {
		var chatID = obj.chatID;
		var data = obj.data;
		console.log('obj', obj);
		if (data.text && data.text.length > 0) {
			var current = state.getState()[chatID];
			console.log('current', current);
			var newData = assign({}, data, { uuid: utils.getUUID() });
			current.chatHolder.innerHTML += utils.compile(templates.send, { 'data.uuid': newData.uuid });
			current.chatHolder.querySelector('#' + newData.uuid + ' .IBMChat-user-message').textContent = data.text;
			events.publish('playback-scroll-to-bottom-' + chatID, chatID);
		}
	}
	
	function receive(obj) {
		var chatID = obj.chatID;
		var data = obj.data;
		var checkData = (typeof data === 'string') ? { message: { text: data } } : data;
		var current = state.getState()[chatID];
		data = assign({}, checkData, { uuid: utils.getUUID() });
		var msg = (data.message && data.message.text) ? ((Array.isArray(data.message.text)) ? data.message.text : [data.message.text]) : [''];
		if (msg.length === 0)
			msg = [''];
		for (var i = 0; i < msg.length; i++) {
			var item;
			current.chatHolder.innerHTML += utils.compile(templates.receive, { 'data.uuid': data.uuid });
			item = current.chatHolder.querySelector('.' + data.uuid + ':last-child .IBMChat-watson-message');
			utils.writeMessage(item, msg[i]);
		}
		events.publish('playback-scroll-to-bottom-' + chatID, chatID);
	}
	
	function clear(chatID) {
		var current = state.getState()[chatID];
		current.chatHolder.innerHTML = '';
	}
	
	function destroy(chatID) {
		var current = state.getState()[chatID];
		var obj = {};
		obj[chatID] = undefined;
		state.setState(obj);
		current.root.innerHTML = current.originalContent;
	}
	
	function scrollToBottom(chatID) {
		var current = state.getState()[chatID];
		current.chatHolder.scrollTop = current.chatHolder.scrollHeight;
	}
	
	function resize(chatID) {
		setTimeout(function() {
			var current = state.getState()[chatID];
			if (current.active) {
				current.chatHolder.style.maxHeight = (current.root.getBoundingClientRect().height - current.inputHolder.getBoundingClientRect().height) + 'px';
				current.chatHolder.style.maxWidth = ((current.root.getBoundingClientRect().width > 288) ? current.root.getBoundingClientRect().width : 288) + 'px';
			}
		}, 300);
	}
	
	module.exports = {
		start: start,
		send: send,
		receive: receive,
		clear: clear,
		destroy: destroy,
		resize: resize,
		scrollToBottom: scrollToBottom
	};


/***/ },
/* 81 */
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
	
	var state = __webpack_require__(10);
	
	function scrollToBottom() {
		var current = state.getState();
		current.chatHolder.scrollTop = current.chatHolder.scrollHeight;
	}
	
	module.exports = scrollToBottom;


/***/ },
/* 82 */
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
	
	var events = __webpack_require__(9);
	var eventHandlers = __webpack_require__(66);
	var utils = __webpack_require__(35);
	var assign = __webpack_require__(11);
	var defaultStyles = __webpack_require__(83);
	
	var eventsArray = {};
	
	function init(config) {
		return new PlayBack(config);
	}
	
	function registerEvents(chatID) {
		eventsArray[chatID] = [];
		eventsArray[chatID].push(events.subscribe('playback-start-' + chatID, eventHandlers.playback.start));
		eventsArray[chatID].push(events.subscribe('playback-resize-' + chatID, eventHandlers.playback.resize));
		eventsArray[chatID].push(events.subscribe('playback-scroll-to-bottom-' + chatID, eventHandlers.playback.scrollToBottom));
		eventsArray[chatID].push(events.subscribe('playback-receive-' + chatID, eventHandlers.playback.receive));
		eventsArray[chatID].push(events.subscribe('playback-send-' + chatID, eventHandlers.playback.send));
		eventsArray[chatID].push(events.subscribe('playback-destroy-' + chatID, eventHandlers.playback.destroy));
		eventsArray[chatID].push(events.subscribe('playback-clear-' + chatID, eventHandlers.playback.clear));
	}
	
	function PlayBack(config) {
		var root = (typeof config.el === 'string') ? document.getElementById(config.el) : config.el;
		this.chatID = utils.getUUID();
		registerEvents(this.chatID);
		events.publish('playback-start-' + this.chatID, {
			chatID: this.chatID,
			root: (typeof config.el === 'string') ? document.getElementById(config.el) : config.el,
			mapsServer: ("https://dd1-i-serve-maps.mybluemix.net") || 'https://dp1-i-serve-maps.mybluemix.net/',
			styles: assign({}, defaultStyles, config.styles),
			originalContent: root.innerHTML
		});
		this.clear = function() {
			events.publish('playback-clear-' + this.chatID, this.chatID);
			return this;
		};
		this.destroy = function() {
			events.publish('playback-clear-' + this.chatID, this.chatID);
			events.publish('playback-destroy-' + this.chatID, this.chatID);
			for (var i = 0; i < eventsArray[this.chatID].length; i++)
				eventsArray[this.chatID][i].remove();
			delete eventsArray[this.chatID];
			delete this.clear;
			delete this.send;
			delete this.receive;
			delete this.destroy;
			delete this.chatID;
			return this;
		};
		this.send = function(data) {
			var chatID = this.chatID;
			events.publish('playback-send-' + chatID, { chatID: chatID, data: data });
			return this;
		};
		this.receive = function(data) {
			var chatID = this.chatID;
			events.publish('playback-receive-' + chatID, { chatID: chatID, data: data });
			return this;
		};
		return this;
	}
	
	
	module.exports = {
		init: init
	};


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
	        var vertx = __webpack_require__(87);
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
	    if ("function" === 'function' && __webpack_require__(88)['amd']) {
	      !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return lib$es6$promise$umd$$ES6Promise; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module !== 'undefined' && module['exports']) {
	      module['exports'] = lib$es6$promise$umd$$ES6Promise;
	    } else if (typeof this !== 'undefined') {
	      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
	    }
	
	    lib$es6$promise$polyfill$$default();
	}).call(this);
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(85), (function() { return this; }()), __webpack_require__(86)(module)))

/***/ },
/* 85 */
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
/* 86 */
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
/* 87 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 89 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3OTI3YTRlYjk5YWIwYTEyNjQxYyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3M/MjY5OSIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXNzaWduVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvZXEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcHlPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NyZWF0ZUFzc2lnbmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXBwbHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzSXRlcmF0ZWVDYWxsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5TGlrZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy93cml0ZU1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvdGVtcGxhdGVzL2Jhc2UuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy90ZW1wbGF0ZXMvY3JlYXRlLWRvbS1hcnJheS5odG1sIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3RlbXBsYXRlcy9hZGQtbG9jYXRpb25zLWl0ZW0uaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy90ZW1wbGF0ZXMvYWRkLWxvY2F0aW9uLWl0ZW0uaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy90ZW1wbGF0ZXMvaG91cnMtY2xvc2VkLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvdGVtcGxhdGVzL2hvdXJzLW9wZW4uaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy90ZW1wbGF0ZXMvaG91cnMtdG9kYXktb3Blbi5odG1sIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3RlbXBsYXRlcy9ob3Vycy10b2RheS1jbG9zZWQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9yZXF1ZXN0LWdlb2xvY2F0aW9uLWxhdGxvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvY2hvb3NlLWxvY2F0aW9uLXR5cGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvY2hvb3NlLWxvY2F0aW9uLXR5cGUvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9jaG9vc2UtbG9jYXRpb24tdHlwZS90ZW1wbGF0ZXMvYmFzZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2Nob29zZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9jaG9vc2Uvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9jaG9vc2UvdGVtcGxhdGVzL2J1dHRvbi5odG1sIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2Zvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvZm9ybS9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL3NyYy9wcm9maWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vQHdhdHNvbi12aXJ0dWFsLWFnZW50L2NsaWVudC1zZGsvbGliL3dlYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9mb3JtL3RlbXBsYXRlcy9iYXNlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvZm9ybS90ZW1wbGF0ZXMvZmllbGQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9jYy12YWxpZGF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvY2MtdmFsaWRhdG9yL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvY2MtdmFsaWRhdG9yL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvY2MtdmFsaWRhdG9yL3RlbXBsYXRlcy9iYXNlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9oYW5kbGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2hhbmRsZXJzL3N0YXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9pbnB1dC5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcmVjZWl2ZS5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvc2VuZC5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvc3RhcnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2hhbmRsZXJzL3Jlc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2hhbmRsZXJzL3JlY2VpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9oYW5kbGVycy9zZW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaGFuZGxlcnMvc2VuZC1tb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaGFuZGxlcnMvc2VuZC1pbnB1dC1tZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaGFuZGxlcnMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9oYW5kbGVycy9lcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2hhbmRsZXJzL3BsYXliYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaGFuZGxlcnMvc2Nyb2xsLXRvLWJvdHRvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWJhY2svaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzNi1wcm9taXNlL2Rpc3QvZXM2LXByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vdmVydHggKGlnbm9yZWQpIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3N0eWxlcy5jc3M/OWZiOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBaUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxPQUFPO0FBQ25CLGFBQVksT0FBTztBQUNuQixhQUFZLE9BQU87QUFDbkIsYUFBWSxPQUFPO0FBQ25CLGFBQVksT0FBTztBQUNuQixhQUFZLE9BQU87QUFDbkIsYUFBWSxPQUFP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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0EsT0FBTTtBQUNOLEtBQUk7QUFDSjtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQSxHQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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RUFBRTtBQUNiLFlBQVcsRUFBRTtBQUNiLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM3QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2hDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM5QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7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QTBHOztBQUUxRztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUE4QixzQkFBc0I7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXFCLCtCQUErQjtBQUNwRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQSxVQUFTO0FBQ1Qsd0JBQXVCLFFBQVE7QUFDL0I7O0FBRUE7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1FQUFrRSxRQUFROztBQUUxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUVBQWtFLFFBQVE7QUFDMUU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNDQUFxQyxRQUFROztBQUU3Qzs7QUFFQSxzQkFBcUIsd0JBQXdCO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVCxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0E7QUFDQSwwQkFBeUIsWUFBWTtBQUNyQztBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQSxlQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87O0FBRVA7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWU7QUFDZjtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYixZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBLGVBQWMsU0FBUztBQUN2QixlQUFjLFNBQVM7QUFDdkI7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBLGVBQWMsU0FBUztBQUN2QjtBQUNBLGdCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBcUIsa0VBQWtFO0FBQ3ZGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsdURBQXNELGdCQUFnQixFQUFFO0FBQ3hFO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFEQUF5Qix3Q0FBd0MsRUFBRTtBQUNuRSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEVBQUM7Ozs7Ozs7OztBQzc3QkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsVUFBVTs7Ozs7OztBQ25MdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNUQSxnQjs7Ozs7O0FDQUEsOEJBQTZCLG1EQUFtRDs7Ozs7OztBQ0FoRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFzRjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRSIsImZpbGUiOiJJQk1DaGF0Q2xpZW50LWxhdGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiSUJNQ2hhdFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJJQk1DaGF0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIklCTUNoYXRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDc5MjdhNGViOTlhYjBhMTI2NDFjXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG5yZXF1aXJlKCcuL3N0eWxlcy5jc3MnKTtcblxudmFyIGJvb3RzdHJhcCA9IHJlcXVpcmUoJy4vYm9vdHN0cmFwJyk7XG5cbi8qKlxuICogQG5hbWVzcGFjZSBJQk1DaGF0XG4gKi9cblxudmFyIElCTUNoYXQgPSB7XG5cdC8qKlxuXHQgKiBHZW5lcmF0ZSB0aGUgY2hhdCB3aWRnZXQgaW50byBhbiBlbGVtZW50LlxuXHQgKiBAZnVuY3Rpb24gaW5pdFxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuZWwgLSBUYWtlcyBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIElEIG9mIGFuIGh0bWwgZWxlbWVudCB0byBiZSByZW5kZXJlZCB0byBPUiBhIHNlbGVjdGVkIGVsZW1lbnRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5ib3RJRCAtIFRoZSB1bmlxdWUgaWRlbnRpZmllciBvZiB5b3VyIFZpcnR1YWwgQWdlbnQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcudXNlcklEIC0gQSBoYXNoZWQgbm9uLWlkZW50aWZpYWJsZSAoaS5lLiBub3QgYSB1c2VycyBlbWFpbCBhZGRyZXNzIG9yIHB1YmxpYyB1c2VyIGlkKSB1bmlxdWUgSUQgdXNlZCBmb3IgdHJhY2tpbmcgaW4gdGhlIEVuZ2FnZW1lbnQgTWV0cmljcyBkYXNoYm9hcmQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuYmFzZVVSTD1odHRwczovL2FwaS5pYm0uY29tL3ZpcnR1YWxhZ2VudC9ydW4vYXBpL3YxLyAtIG9wdGlvbmFsOiBzcGVjaWZpZXMgYSBkaWZmZXJlbnQgYm90IGhvc3Rpbmcgc2VydmVyLiBUaGUgbW9zdCBjb21tb24gdXNlY2FzZSBmb3IgdGhpcyBwYXJhbSBpcyB0byBwb2ludCB0aGUgd2lkZ2V0IHRvIGEgc2VydmVyIHRoYXQgd2lsbCBhZGQgWC1JQk0tQ2xpZW50LUlkIGFuZCBYLUlCTS1DbGllbnQtU2VjcmV0IGhlYWRlcnMgdG8gdGhlIHJlcXVlc3QuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuWElCTUNsaWVudElEIC0gb3B0aW9uYWw6IFlvdXIgSUJNQ2xpZW50SUQuLi4gdGhpcyBzaG91bGQgbm90IGJlIG1hZGUgcHVibGljIGluIGEgcHVibGljIGVudmlyb25tZW50LiBJbmNsdWRpbmcgdGhpcyB3aWxsIGFkZCBYLUlCTS1DbGllbnQtSWQgYXMgYSBoZWFkZXIgdG8geW91ciByZXF1ZXN0LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLlhJQk1DbGllbnRTZWNyZXQgLSBvcHRpb25hbDogWW91ciBJQk1DbGllbnRTZWNyZXQuLi4gdGhpcyBzaG91bGQgbm90IGJlIG1hZGUgcHVibGljIGluIGEgcHVibGljIGVudmlyb25tZW50LiBJbmNsdWRpbmcgdGhpcyB3aWxsIGFkZCBYLUlCTS1DbGllbnQtU2VjcmV0IGFzIGEgaGVhZGVyIHRvIHlvdXIgcmVxdWVzdC5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gY29uZmlnLmVycm9ySGFuZGxlciAtIG9wdGlvbmFsOiBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYW4gZXJyb3Igb2JqZWN0IGFzIGEgcGFyYW0gaWYgdGhlcmUgaXMgYSBwcm9ibGVtIHdpdGggY29tbXVuaWNhdGluZyB3aXRoIHlvdXIgVmlydHVhbCBBZ2VudC4gQnkgZGVmYXVsdCwgaWYgYW4gZXJyb3IgaXMgcmVjZWl2ZWQsIHRoZSB1c2VyIGlzIGVzY2FsYXRlZCB0byBhIGxpdmUgYWdlbnQuIFlvdSBtYXksIGhvd2V2ZXIsIHdhbnQgdG8gaGFuZGxlIHNvbWUgZXJyb3JzIGRpZmZlcmVudGx5ICg0MDEgZm9yIGluc3RhbmNlKVxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLmVycm9ySGFuZGxlckNvbnRleHQgLSBvcHRpb25hbDogQSBcInRoaXNcIiB2YWx1ZSBmb3IgdGhlIGVycm9ySGFubGRlci5cblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5zdHlsZXMgLSBvcHRpb25hbDogT3ZlcnJpZGUgZGVmYXVsdCBzdHlsaW5nLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnN0eWxlcy5iYWNrZ3JvdW5kPXJnYmEoNjEsIDYxLCA2MSwgMSkgLSBvcHRpb25hbDogcmdiYShYLCBYLCBYLCBYKSBvciBoZXggY29kZSBmb3IgYmFja2dyb3VuZCBjb2xvclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnN0eWxlcy50ZXh0PXJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgLSBvcHRpb25hbDogcmdiYShYLCBYLCBYLCBYKSBvciBoZXggY29kZSBmb3IgbWFpbiB0ZXh0IGNvbG9yXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuc3R5bGVzLmxpbms9cmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAtIG9wdGlvbmFsOiByZ2JhKFgsIFgsIFgsIFgpIG9yIGhleCBjb2RlIGZvciBjb2xvciBvZiBsaW5rcyBpbiB0ZXh0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuc3R5bGVzLnNlY29uZGFyeUJhY2tncm91bmQ9cmdiYSg3MCwgNzAsIDcwLCAxKSAtIG9wdGlvbmFsOiByZ2JhKFgsIFgsIFgsIFgpIG9yIGhleCBjb2RlIGZvciBiYWNrZ3JvdW5kIGNvbG9yIG9mIGNoYXQgYnViYmxlcyBhbmQgb3RoZXIgc2Vjb25kYXJ5IGluZm9cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zdHlsZXMuc2Vjb25kYXJ5VGV4dD1yZ2JhKDI0NywgMjQ3LCAyNDcsIDEpIC0gb3B0aW9uYWw6IHJnYmEoWCwgWCwgWCwgWCkgb3IgaGV4IGNvZGUgZm9yIGNvbG9yIG9mIGNoYXQgYnViYmxlIHRleHQgYW5kIG90aGVyIHNlY29uZGFyeSBpbmZvXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuc3R5bGVzLmlucHV0QmFja2dyb3VuZD1yZ2JhKDcwLCA3MCwgNzAsIDEpIC0gb3B0aW9uYWw6IHJnYmEoWCwgWCwgWCwgWCkgb3IgaGV4IGNvZGUgZm9yIGJhY2tncm91bmQgY29sb3Igb2YgaW5wdXQgZWxlbWVudHMgaW4gZm9ybXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zdHlsZXMuaW5wdXRUZXh0PXJnYmEoMjQ3LCAyNDcsIDI0NywgMSkgLSBvcHRpb25hbDogcmdiYShYLCBYLCBYLCBYKSBvciBoZXggY29kZSBmb3IgY29sb3Igb2YgaW5wdXQgdGV4dCBpbiBmb3Jtc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnN0eWxlcy5hY2NlbnRUZXh0PXJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgLSBvcHRpb25hbDogcmdiYShYLCBYLCBYLCBYKSBvciBoZXggY29kZSBmb3IgdGV4dCBjb2xvcnMgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGFjY2VudEJhY2tncm91bmQgaS5lLiBidXR0b24gdGV4dFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnN0eWxlcy5hY2NlbnRCYWNrZ3JvdW5kPXJnYmEoMTc1LCAxMTAsIDIzMiwgMSkgLSBvcHRpb25hbDogcmdiYShYLCBYLCBYLCBYKSBvciBoZXggY29kZSBmb3IgYWNjZW50IGNvbG9ycyB1c2VkIGJ5IHRoZSBjaGF0IGFwcGxpY2F0aW9uIGkuZS4gYnV0dG9uc1xuXHQgKiBAZXhhbXBsZVxuXHQgKiBJQk1DaGF0LmluaXQoe1xuXHQgKiAgZWw6ICdteV9kaXYnLFxuXHQgKiAgYm90SUQ6ICd4eHh4eHh4eHh4eHh4eCdcblx0ICogIHN0eWxlczoge1xuXHQgKiAgICBiYWNrZ3JvdW5kOiBcIiMwMDAwMDBcIlxuXHQgKiAgfVxuXHQgKiB9KS50aGVuKGZ1bmN0aW9uKCl7XG5cdCAqICAgICBjb25zb2xlLmxvZygnaW5pdGlhbGl6ZScpO1xuXHQgKiB9KTtcblx0ICogLy9vclxuXHQgKiB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXktd2lkZ2V0LWNvbnRhaW5lcicpO1xuXHQgKiBJQk1DaGF0LmluaXQoe1xuXHQgKiAgZWw6IGVsLFxuXHQgKiAgYm90SUQ6ICd4eHh4eHh4eHh4eHh4eCdcblx0ICogIHN0eWxlczoge1xuXHQgKiAgICBiYWNrZ3JvdW5kOiBcIiMwMDAwMDBcIlxuXHQgKiAgfVxuXHQgKiB9KS50aGVuKGZ1bmN0aW9uKCl7XG5cdCAqICAgICBjb25zb2xlLmxvZygnaW5pdGlhbGl6ZScpO1xuXHQgKiB9KTtcblx0ICogQHJldHVybnMge1Byb21pc2V9IFJldHVybnM6IEEgcHJvbWlzZSBzbyB5b3UgY2FuIGNhbGwgZnVuY3Rpb25zIGFmdGVyIHRoZSB3aWRnZXQgaGFzIGJlZW4gaW5pdGlhbGl6ZWQuXG5cdCAqL1xuXHRpbml0OiBib290c3RyYXAuaW5pdCxcblx0LyoqXG5cdCAqIFJlc3RhcnQgdGhlIGNoYXQgd2lkZ2V0LiBUaGUgc2FtZSBjaGF0IHdpZGdldCBpcyByZW5kZXJlZCBpbiB0aGUgc2FtZSBodG1sIGVsZW1lbnQgYXMgd2FzIHNwZWNpZmllZCBpbiB0aGUgaW5pdCBtZXRob2QuXG5cdCAqIEBmdW5jdGlvbiByZXN0YXJ0XG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQucmVzdGFydCgpLnRoZW4oZnVuY3Rpb24oKXtcblx0ICogICAgIGNvbnNvbGUubG9nKCdyZXN0YXJ0ZWQnKTtcblx0ICogfSk7XG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfSBSZXR1cm5zOiBBIHByb21pc2Ugc28geW91IGNhbiBjYWxsIGZ1bmN0aW9ucyBhZnRlciB0aGUgd2lkZ2V0IGhhcyBiZWVuIGluaXRpYWxpemVkLlxuXHQgKi9cblx0cmVzdGFydDogYm9vdHN0cmFwLnJlc3RhcnQsXG5cdC8qKlxuXHQgKiBEZXN0cm95IHRoZSBjaGF0IHdpZGdldCBhbmQgcmVzdG9yZSB0aGUgb3JpZ2luYWwgSFRNTCBjb250ZW50LiBVc2VmdWwgaWYgdGhlIGNoYXQgd2lkZ2V0IGlzIGRpc3BsYXllZCBpbiBhIG1vZGFsLCBmb3IgZXhhbXBsZSwgYW5kIHlvdSB3YW50IGl0IHRvIGdvIGF3YXkgd2hlbiB0aGUgbW9kYWwgaXMgY2xvc2VkLlxuXHQgKiBAZnVuY3Rpb24gZGVzdHJveVxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAZXhhbXBsZVxuXHQgKiBJQk1DaGF0LmRlc3Ryb3koKS50aGVuKGZ1bmN0aW9uKCl7XG5cdCAqICAgICBjb25zb2xlLmxvZygnZGVzdHJveWVkJyk7XG5cdCAqIH0pO1xuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX0gUmV0dXJuczogQSBwcm9taXNlIHNvIHlvdSBjYW4gY2FsbCBmdW5jdGlvbnMgYWZ0ZXIgdGhlIHdpZGdldCBoYXMgYmVlbiBkZXN0cm95ZWQuXG5cdCAqL1xuXHRkZXN0cm95OiBib290c3RyYXAuZGVzdHJveSxcblxuXHQvKipcblx0ICogU2VuZCBhIG1lc3NhZ2UgdG8gdGhlIGNoYXQgd2lkZ2V0IGZyb20gb3V0c2lkZSB0aGUgY2hhdCB3aWRnZXQuIFRoaXMgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZCBpbiB0aGUgaW50ZXJmYWNlLlxuXHQgKiBAZnVuY3Rpb24gc2VuZFxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSAtIEEgbWVzc2FnZSB5b3Ugd2FudCB0byBzZW5kIHRvIHRoZSBjaGF0IHdpZGdldC5cblx0ICogQHJldHVybnMge0lCTUNoYXR9IC0gUmV0dXJucyBJQk1DaGF0IGZvciBjaGFpbmluZy5cblx0ICogQGV4YW1wbGVcblx0ICogSUJNQ2hhdC5zZW5kKCdIZWxsbyB3b3JsZC4nKTtcblx0ICovXG5cdHNlbmQ6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcblx0XHRib290c3RyYXAuc2VuZChtZXNzYWdlKTtcblx0XHRyZXR1cm4gSUJNQ2hhdDtcblx0fSxcblxuXHQvKipcblx0ICogTW9jayByZWNlaXZpbmcgYSBtZXNzYWdlIHRvIHRoZSBjaGF0IHdpZGdldCBmcm9tIG91dHNpZGUgdGhlIGNoYXQgd2lkZ2V0LlxuXHQgKiBAZnVuY3Rpb24gcmVjZWl2ZVxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSAtIEEgbWVzc2FnZSB5b3Ugd2FudCB0byBzaG93IGFzIHJlY2VpdmVkIGluIHRoZSBjaGF0IHdpZGdldC5cblx0ICogQHJldHVybnMge0lCTUNoYXR9IC0gUmV0dXJucyBJQk1DaGF0IGZvciBjaGFpbmluZy5cblx0ICogQGV4YW1wbGVcblx0ICogSUJNQ2hhdC5yZWNlaXZlKCdIZWxsbyB3b3JsZC4nKTtcblx0ICovXG5cdHJlY2VpdmU6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcblx0XHRib290c3RyYXAucmVjZWl2ZShtZXNzYWdlKTtcblx0XHRyZXR1cm4gSUJNQ2hhdDtcblx0fSxcblxuXHQvKipcblx0ICogU2VuZCBhIG1lc3NhZ2UgdG8gdGhlIGNoYXQgd2lkZ2V0IGZyb20gb3V0c2lkZSB0aGUgY2hhdCB3aWRnZXQuIFRoaXMgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZCBpbiB0aGUgaW50ZXJmYWNlLCBidXQgd2lsbCBub3QgYWN0dWFsbHkgZ2V0IHNlbnQgdG8gdGhlIHNlcnZlci5cblx0ICogQGZ1bmN0aW9uIHNlbmRNb2NrXG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIC0gQSBtZXNzYWdlIHlvdSB3YW50IHRvIHByZXRlbmQgdG8gc2VuZCB0byB0aGUgY2hhdCB3aWRnZXQuXG5cdCAqIEByZXR1cm5zIHtJQk1DaGF0fSAtIFJldHVybnMgSUJNQ2hhdCBmb3IgY2hhaW5pbmcuXG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQuc2VuZE1vY2soJ0hlbGxvIHdvcmxkLicpO1xuXHQgKi9cblx0c2VuZE1vY2s6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcblx0XHRib290c3RyYXAuc2VuZE1vY2sobWVzc2FnZSk7XG5cdFx0cmV0dXJuIElCTUNoYXQ7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFNlbmQgYSBtZXNzYWdlIHRvIHRoZSBjaGF0IHdpZGdldCBmcm9tIG91dHNpZGUgdGhlIGNoYXQgd2lkZ2V0LiBUaGlzIG1lc3NhZ2Ugd2lsbCBOT1QgYmUgZGlzcGxheWVkIGluIHRoZSBpbnRlcmZhY2UuXG5cdCAqIEBmdW5jdGlvbiBzZW5kU2lsZW50bHlcblx0ICogQG1lbWJlcm9mIElCTUNoYXRcblx0ICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgLSBBIG1lc3NhZ2UgeW91IHdhbnQgdG8gc2VuZCB0byB0aGUgY2hhdCB3aWRnZXQsIGJ1dCBub3QgZGUgZGlzcGxheWVkIGluIHRoZSBpbnRlcmZhY2UuXG5cdCAqIEByZXR1cm5zIHtJQk1DaGF0fSAtIFJldHVybnMgSUJNQ2hhdCBmb3IgY2hhaW5pbmcuXG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQuc2VuZFNpbGVudGx5KCdIZWxsbyB3b3JsZC4nKTtcblx0ICovXG5cdHNlbmRTaWxlbnRseTogZnVuY3Rpb24obWVzc2FnZSkge1xuXHRcdGJvb3RzdHJhcC5zZW5kU2lsZW50bHkobWVzc2FnZSk7XG5cdFx0cmV0dXJuIElCTUNoYXQ7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVyIGEgY3VzdG9tIGxheW91dCB3aXRoIHRoZSBjaGF0IHdpZGdldC4gQ2FsbCByZWdpc3RlckxheW91dCgpIGJlZm9yZSB5b3UgY2FsbCBpbml0KCkuXG5cdCAqIEBmdW5jdGlvbiByZWdpc3RlckxheW91dFxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGF5b3V0IC0gVGhlIG5hbWUgb2YgdGhlIGxheW91dCB5b3VyIGJvdCB3aWxsIHByb3ZpZGUgd2hlbiBpdCBpcyB0cmlnZ2VyZWQgdG8gcmVuZGVyIGEgbGF5b3V0LlxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBpbml0IC0gQSBmdW5jdGlvbiB0aGF0IHJ1bnMgb25lIHRpbWUsIHdoZW4gdGhlIGNoYXQgd2lkZ2V0IGlzIGJvb3RzdHJhcHBlZC4gQmUgc3VyZSB0byBzdWJzY3JpYmUgdG8gdGhlIFwibGF5b3V0OllPVVJfTEFZT1VUX05BTUVcIiBldmVudCBpbiB0aGlzIGZ1bmN0aW9uLlxuXHQgKiBAcmV0dXJucyB7SUJNQ2hhdH0gLSBSZXR1cm5zIElCTUNoYXQgZm9yIGNoYWluaW5nLlxuXHQgKiBAZXhhbXBsZVxuXHQgKiB2YXIgUGx1bWJlckJyb3RoZXJzID0gcmVxdWlyZSgnLi4vcGx1bWJlci1icm90aGVycy1nYW1lJyk7XG5cdCAqIHZhciBjb25maWcgPSB7fTtcblx0ICpcblx0ICogZnVuY3Rpb24gaW5pdEdhbWUoKSB7XG5cdCAqICAgSUJNQ2hhdC5zdWJzY3JpYmUoJ2xheW91dDpwbHVtYmVyLWJyb3RoZXJzLWdhbWUnLCBmdW5jdGlvbihvYmopIHtcblx0ICogICAgIHZhciB1dWlkID0gb2JqLnV1aWQ7XG5cdCAqICAgICB2YXIgcGFyZW50RWxlbWVudCA9IG9iai5lbGVtZW50O1xuXHQgKiAgICAgdmFyIGxheW91dEVsZW1lbnQgPSBvYmoubGF5b3V0RWxlbWVudDtcblx0ICogICAgIHZhciBtc2dFbGVtZW50ID0gb2JqLm1zZ0VsZW1lbnQ7XG5cdCAqICAgICB2YXIgbWVzc2FnZSA9IG9iai5tZXNzYWdlO1xuXHQgKiAgICAgdmFyIGRhdGEgPSBvYmouZGF0YTtcblx0ICogICAgIG1zZ0VsZW1lbnQudGV4dENvbnRlbnQgPSAnTG9hZGluZyBQbHVtYmVyIEJyb3RoZXJzISc7XG5cdCAqICAgICB2YXIgYnJvdGhlcnMgPSBuZXcgUGx1bWJlckJyb3RoZXJzKCk7XG5cdCAqICAgICBicm90aGVycy5yZW5kZXIobGF5b3V0RWxlbWVudCwgZGF0YSkudGhlbihmdW5jdGlvbigpIHtcblx0ICogICAgICAgbXNnRWxlbWVudC50ZXh0Q29udGVudCA9ICdFbmpveSB5b3VyIGdhbWUgb2YgUGx1bWJlciBCcm90aGVycyEnO1xuXHQgKiAgICAgfSk7XG5cdCAqICAgfVxuXHQgKiB9KTtcblx0ICpcblx0ICogSUJNQ2hhdC5yZWdpc3RlckxheW91dCgncGx1bWJlci1icm90aGVycy1nYW1lJywgaW5pdEdhbWUpO1xuXHQgKiBJQk1DaGF0LmluaXQoY29uZmlnKTtcblx0ICovXG5cdHJlZ2lzdGVyTGF5b3V0OiBmdW5jdGlvbihsYXlvdXQsIGluaXQpIHtcblx0XHRib290c3RyYXAucmVnaXN0ZXJMYXlvdXQobGF5b3V0LCBpbml0KTtcblx0XHRyZXR1cm4gSUJNQ2hhdDtcblx0fSxcblxuXHQvKipcblx0ICogT3ZlcnJpZGUgaG93IGlucHV0cyBpbnRvIHRoZSBjaGF0IHRleHQgYm94IGFyZSBoYW5kbGVkLiBlLmcuIHlvdSBtYXkgd2lzaCB0byBzZW5kIG1lc3NhZ2VzIHRvIHlvdXIgbGl2ZSBhZ2VudCBpbnN0ZWFkIG9mIHRvIHlvdXIgdmlydHVhbCBhZ2VudC5cblx0ICogQGZ1bmN0aW9uIGVuYWJsZUN1c3RvbUlucHV0SGFuZGxlclxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbmZpZy5jYWxsYmFjayAtIEEgZnVuY3Rpb24gdGhhdCByZWNlaXZlcyBhIG1lc3NhZ2UgYW5kIHJlc29sdmUgYW5kIHJlamVjdCBmdW5jdGlvbnMgYXMgcGFyYW1zXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gY29uZmlnLmNvbnRleHQgLSAob3B0aW9uYWwpIEEgdmFsdWUgZm9yIFwidGhpc1wiIGluIHlvdXIgY2FsbGJhY2sgZnVuY3Rpb25cblx0ICogQHJldHVybnMge0lCTUNoYXR9IC0gUmV0dXJucyBJQk1DaGF0IGZvciBjaGFpbmluZy5cblx0ICogQGV4YW1wbGVcblx0ICogSUJNQ2hhdC5lbmFibGVDdXN0b21JbnB1dEhhbmRsZXIoe1xuXHQgKiAgIGNhbGxiYWNrOiBmdW5jdGlvbihtZXNzYWdlLCByZXNvbHZlLCByZWplY3QpIHtcblx0ICogICAgIC8vZG8gc29tZXRoaW5nIGxpa2Ugc2VuZCB0aGUgbWVzc2FnZSB0byB5b3VyIGxpdmUgY3VzdG9tZXIgc2VydmljZSByZXBcblx0ICogICAgIElCTUNoYXQucmVjZWl2ZSgnQSBtZXNzYWdlIGZyb20geW91ciBsaXZlIGN1c3RvbWVyIHNlcnZpY2UgcmVwJyk7XG5cdCAqICAgICByZXNvbHZlKCk7IC8vIGdldHMgcmlkIG9mIGxvYWRpbmcgc3Bpbm5lciBhbmQgYWxsb3dzIHRoZSBjaGF0IHRleHQgYm94IHRvIGFjY2VwdCBhbm90aGVyIG1lc3NhZ2Vcblx0ICogICAgIC8vIHJlamVjdChlcnJvcik7XG5cdCAqICB9XG5cdCAqIH0pO1xuXHQgKi9cblxuXHRlbmFibGVDdXN0b21JbnB1dEhhbmRsZXI6IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdGJvb3RzdHJhcC5lbmFibGVDdXN0b21JbnB1dEhhbmRsZXIoY29uZmlnKTtcblx0XHRyZXR1cm4gSUJNQ2hhdDtcblx0fSxcblxuXHQvKipcblx0ICogUmV0dXJuIGNoYXQgaW5wdXQgYm94ZXMgaGFuZGxpbmcgdG8gdGhlIGRlZmF1bHQgcHJvdmlkZWQgaGFuZGxlci5cblx0ICogQGZ1bmN0aW9uIGRpc2FibGVDdXN0b21JbnB1dEhhbmRsZXJcblx0ICogQG1lbWJlcm9mIElCTUNoYXRcblx0ICogQHJldHVybnMge0lCTUNoYXR9IC0gUmV0dXJucyBJQk1DaGF0IGZvciBjaGFpbmluZy5cblx0ICogQGV4YW1wbGVcblx0ICogSUJNQ2hhdC5kaXNhYmxlQ3VzdG9tSW5wdXRIYW5kbGVyKCk7XG5cdCAqL1xuXG5cdGRpc2FibGVDdXN0b21JbnB1dEhhbmRsZXI6IGZ1bmN0aW9uKCkge1xuXHRcdGJvb3RzdHJhcC5kaXNhYmxlQ3VzdG9tSW5wdXRIYW5kbGVyKCk7XG5cdFx0cmV0dXJuIElCTUNoYXQ7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFNldCBmb2N1cyB0byB0aGUgY2hhdCB0ZXh0IGJveC4gVXNlZnVsIGlmIHlvdSB3YW50IHVzZXJzIHRvIGJlIGFibGUgdG8ganVzdCBzdGFydCB0eXBpbmcgaW50byB0aGUgdGV4dCBib3ggd2l0aG91dCBoYXZpbmcgdG8gY2xpY2sgaW4gdGhlIHRleHQgYm94IGZpcnN0IHRvIHNldCBmb2N1cy5cblx0ICogQGZ1bmN0aW9uIGZvY3VzSW5wdXRcblx0ICogQG1lbWJlcm9mIElCTUNoYXRcblx0ICogQHJldHVybnMge0lCTUNoYXR9IC0gUmV0dXJucyBJQk1DaGF0IGZvciBjaGFpbmluZy5cblx0ICogQGV4YW1wbGVcblx0ICogSUJNQ2hhdC5mb2N1c0lucHV0KCk7XG5cdCAqL1xuXG5cdGZvY3VzSW5wdXQ6IGZ1bmN0aW9uKCkge1xuXHRcdGJvb3RzdHJhcC5mb2N1c0lucHV0KCk7XG5cdFx0cmV0dXJuIElCTUNoYXQ7XG5cdH0sXG5cdC8qKlxuXHQgKiBQcmV2ZW50IHVzZXJzIGZyb20gc3VibWl0dGluZyBtZXNzYWdlcyBpbiB0aGUgY2hhdCB0ZXh0IGJveC4gVXNlZnVsIHdoZW4geW91IHdhbnQgdGhlIHVzZXIgdG8gaW50ZXJhY3Qgd2l0aCBhIGxheW91dCBpbnN0ZWFkLlxuXHQgKiBAZnVuY3Rpb24gZGlzYWJsZUlucHV0XG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqIEByZXR1cm5zIHtJQk1DaGF0fSAtIFJldHVybnMgSUJNQ2hhdCBmb3IgY2hhaW5pbmcuXG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQuZGlzYWJsZUlucHV0KCk7XG5cdCAqL1xuXHRkaXNhYmxlSW5wdXQ6IGZ1bmN0aW9uKCkge1xuXHRcdGJvb3RzdHJhcC5kaXNhYmxlSW5wdXQoKTtcblx0XHRyZXR1cm4gSUJNQ2hhdDtcblx0fSxcblxuXHQvKipcblx0ICogRW5hYmxlIHVzZXJzIHRvIHN1Ym1pdCBtZXNzYWdlcyBpbiB0aGUgY2hhdCB0ZXh0IGJveC4gVXNlZnVsIHdoZW4geW91IHdhbnQgdXNlcnMgdG8gYmUgYWJsZSB0byByZXR1cm4gdG8gYWRkaW5nIG1lc3NhZ2VzIHRvIHRoZSBjaGF0IHRleHQgYm94IGFmdGVyIGludGVyYWN0aW5nIHdpdGggYSBsYXlvdXQuXG5cdCAqIEBmdW5jdGlvbiBlbmFibGVJbnB1dFxuXHQgKiBAcmV0dXJucyB7SUJNQ2hhdH0gLSBSZXR1cm5zIElCTUNoYXQgZm9yIGNoYWluaW5nLlxuXHQgKiBAZXhhbXBsZVxuXHQgKiBJQk1DaGF0LmVuYWJsZUlucHV0KCk7XG5cdCAqL1xuXHRlbmFibGVJbnB1dDogZnVuY3Rpb24oKSB7XG5cdFx0Ym9vdHN0cmFwLmVuYWJsZUlucHV0KCk7XG5cdFx0cmV0dXJuIElCTUNoYXQ7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFN1YnNjcmliZSB0byBhbiBJQk1DaGF0IGV2ZW50LlxuXHQgKiBAZnVuY3Rpb24gc3Vic2NyaWJlXG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBUYWtlcyBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIG5hbWUgb2YgdGhlIGV2ZW50XG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gZnVuY3Rpb24gdG8gcnVuIHdoZW4gZXZlbnQgaXMgY2FsbGVkXG5cdCAqIEBwYXJhbSBjb250ZXh0IC0gb3B0aW9uYWw6IHZhbHVlIG9mIFwidGhpc1wiIGluIHRoZSBmdW5jdGlvblxuXHQgKiBAcmV0dXJucyB7SUJNQ2hhdH0gLSBSZXR1cm5zIElCTUNoYXQgZm9yIGNoYWluaW5nLlxuXHQgKiBAZXhhbXBsZVxuXHQgKiBJQk1DaGF0LnN1YnNjcmliZSgndGhlLWVuZC1vZi10aGUtd29ybGQnLCBmdW5jdGlvbihtZXNzYWdlKSB7XG5cdCAqICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG5cdCAqIH0pO1xuXHQgKi9cblx0c3Vic2NyaWJlOiBmdW5jdGlvbihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG5cdFx0Ym9vdHN0cmFwLnN1YnNjcmliZShldmVudE5hbWUsIGNhbGxiYWNrKTtcblx0XHRyZXR1cm4gSUJNQ2hhdDtcblx0fSxcblx0LyoqXG5cdCAqIFB1Ymxpc2ggYW4gSUJNQ2hhdCBldmVudC5cblx0ICogQGZ1bmN0aW9uIHB1Ymxpc2hcblx0ICogQG1lbWJlcm9mIElCTUNoYXRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtIEEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgbmFtZSBvZiB0aGUgZXZlbnQgZGF0YVxuXHQgKiBAcGFyYW0gZGF0YSAtIERhdGEgdG8gcGFzcyB0byB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gb2YgYW55IHN1YnNjcmliZWQgZnVuY3Rpb25zLiBBY2NlcHRzIGFueSBkYXRhIHR5cGUuXG5cdCAqIEByZXR1cm5zIHtJQk1DaGF0fSAtIFJldHVybnMgSUJNQ2hhdCBmb3IgY2hhaW5pbmcuXG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQucHVibGlzaCgndGhlLWVuZC1vZi10aGUtd29ybGQnLCAncGFuaWMhJyk7XG5cdCAqL1xuXHRwdWJsaXNoOiBmdW5jdGlvbihldmVudE5hbWUpIHtcblx0XHRib290c3RyYXAucHVibGlzaChldmVudE5hbWUpO1xuXHRcdHJldHVybiBJQk1DaGF0O1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBAbmFtZXNwYWNlIHByb2ZpbGVcblx0ICogQG1lbWJlcm9mIElCTUNoYXRcblx0ICovXG5cdHByb2ZpbGU6IHtcblx0XHQvKipcblx0XHQqIEdldCBhbiBpdGVtIGZyb20gdGhlIHVzZXIgcHJvZmlsZSBiYXNlZCBvbiBrZXkuXG5cdFx0KiBAbWVtYmVyb2YgSUJNQ2hhdC5wcm9maWxlXG5cdFx0KiBAZnVuY3Rpb24gZ2V0XG5cdFx0KiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIG5hbWVkIGtleSBvZiB0aGUgdmFsdWUgeW91IGFyZSBhY2Nlc3NpbmcuXG5cdFx0KiBAZXhhbXBsZVxuXHRcdCogSUJNQ2hhdC5wcm9maWxlLmdldCgnZmlyc3RfbmFtZScpO1xuXHRcdCogQHJldHVybnMge0FueX0gUmV0dXJuczogdGhlIHZhbHVlIG9mIHRoZSBrZXkgaW4gdGhlIHByb2ZpbGUgbWFwLlxuXHRcdCovXG5cdFx0Z2V0OiBib290c3RyYXAucHJvZmlsZS5nZXQsXG5cdFx0LyoqXG5cdFx0KiBTZXQgYW4gaXRlbSBmcm9tIHRoZSB1c2VyIHByb2ZpbGUgYmFzZWQgb24ga2V5LlxuXHRcdCogQG1lbWJlcm9mIElCTUNoYXQucHJvZmlsZVxuXHRcdCogQGZ1bmN0aW9uIHNldFxuXHRcdCogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBuYW1lZCBrZXkgb2YgdGhlIHZhbHVlIHlvdSBhcmUgc2V0dGluZy5cblx0XHQqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSB2YWx1ZSB5b3UgYXJlIHNldHRpbmcuXG5cdFx0KiBAcmV0dXJucyB7SUJNQ2hhdC5wcm9maWxlfSAtIFJldHVybnMgSUJNQ2hhdC5wcm9maWxlIGZvciBjaGFpbmluZy5cblx0XHQqIEBleGFtcGxlXG5cdFx0KiBJQk1DaGF0LnByb2ZpbGUuc2V0KCdmaXJzdF9uYW1lJywgJ2pvaG4nKTtcblx0XHQqL1xuXHRcdHNldDogYm9vdHN0cmFwLnByb2ZpbGUuc2V0LFxuXHRcdC8qKlxuXHRcdCogU2VlIGlmIGFuIGl0ZW0gZnJvbSB0aGUgdXNlciBwcm9maWxlIGV4aXN0cyBiYXNlZCBvbiBrZXkuXG5cdFx0KiBAbWVtYmVyb2YgSUJNQ2hhdC5wcm9maWxlXG5cdFx0KiBAZnVuY3Rpb24gaGFzXG5cdFx0KiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIG5hbWVkIGtleSBvZiB0aGUgdmFsdWUgeW91IGFyZSBjaGVja2luZyB0aGUgZXhpc3RhbmNlIG9mLlxuXHRcdCogQGV4YW1wbGVcblx0XHQqIElCTUNoYXQucHJvZmlsZS5oYXMoJ2ZpcnN0X25hbWUnKTtcblx0XHQqIEByZXR1cm5zIHtCb29sZWFufSAtIEJvb2xlYW4gaW5kaWNhdGluZyBpZiB0aGUga2V5IGV4aXN0cy5cblx0XHQqL1xuXHRcdGhhczogYm9vdHN0cmFwLnByb2ZpbGUuaGFzLFxuXHRcdC8qKlxuXHRcdCogQ2xlYXIgdGhlIGVudGlyZSB1c2VyIHByb2ZpbGUuXG5cdFx0KiBAbWVtYmVyb2YgSUJNQ2hhdC5wcm9maWxlXG5cdFx0KiBAZnVuY3Rpb24gY2xlYXJcblx0XHQqIEByZXR1cm5zIHtJQk1DaGF0LnByb2ZpbGV9IC0gUmV0dXJucyBJQk1DaGF0LnByb2ZpbGUgZm9yIGNoYWluaW5nLlxuXHRcdCogQGV4YW1wbGVcblx0XHQqIElCTUNoYXQucHJvZmlsZS5jbGVhcigpO1xuXHRcdCovXG5cdFx0Y2xlYXI6IGJvb3RzdHJhcC5wcm9maWxlLmNsZWFyLFxuXHRcdC8qKlxuXHRcdCogRGVsZXRlIGFuIGl0ZW0gZnJvbSB0aGUgdXNlciBwcm9maWxlIGJhc2VkIG9uIGtleS5cblx0XHQqIEBtZW1iZXJvZiBJQk1DaGF0LnByb2ZpbGVcblx0XHQqIEBmdW5jdGlvbiBkZWxldGVcblx0XHQqIEByZXR1cm5zIHtJQk1DaGF0LnByb2ZpbGV9IC0gUmV0dXJucyBJQk1DaGF0LnByb2ZpbGUgZm9yIGNoYWluaW5nLlxuXHRcdCogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBuYW1lZCBrZXkgb2YgdGhlIHZhbHVlIHlvdSBhcmUgZGVsZXRpbmcuXG5cdFx0KiBAZXhhbXBsZVxuXHRcdCogSUJNQ2hhdC5wcm9maWxlLmRlbGV0ZSgnZmlyc3RfbmFtZScpO1xuXHRcdCovXG5cdFx0ZGVsZXRlOiBib290c3RyYXAucHJvZmlsZS5kZWxldGUsXG5cdFx0LyoqXG5cdFx0KiBJdGVyYXRlIG92ZXIgdGhlIHByb2ZpbGUuXG5cdFx0KiBAbWVtYmVyb2YgSUJNQ2hhdC5wcm9maWxlXG5cdFx0KiBAZnVuY3Rpb24gZm9yRWFjaFxuXHRcdCogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBUaGUgZnVuY3Rpb24geW91IGFyZSBjYWxsaW5nIG9uIGVhY2ggaXRlbSBpbiB0aGUgcHJvZmlsZSBvYmplY3QuIFRoaXMgZnVuY3Rpb24gaXMgcGFzc2VkIGtleSBhcyB0aGUgZmlyc3QgYXJndW1lbnQgYW5kIHZhbHVlIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuXG5cdFx0KiBAcGFyYW0ge09iamVjdH0gdGhpcyAtIChvcHRpb25hbCkgVGhlIGNvbnRleHQgeW91IHdpc2ggdG8gY2FsbCB0aGUgY2FsbGJhY2sgaW4uXG5cdFx0KiBAcmV0dXJucyB7SUJNQ2hhdC5wcm9maWxlfSAtIFJldHVybnMgSUJNQ2hhdC5wcm9maWxlIGZvciBjaGFpbmluZy5cblx0XHQqIEBleGFtcGxlXG5cdFx0KiBJQk1DaGF0LnByb2ZpbGUuZm9yRWFjaChmdW5jdGlvbihrZXksIHZhbHVlKSB7XG5cdFx0KiAgIGNvbnNvbGUubG9nKGtleSwgdmFsdWUpO1xuXHRcdCogfSk7XG5cdFx0Ki9cblx0XHRmb3JFYWNoOiBib290c3RyYXAucHJvZmlsZS5mb3JFYWNoXG5cdH0sXG5cblx0LyoqXG5cdCAqIEBpZ25vcmVcblx0ICovXG5cdGN1cnJlbnRTdWJzY3JpcHRpb25zOiBmdW5jdGlvbigpIHtcblx0XHRib290c3RyYXAuY3VycmVudFN1YnNjcmlwdGlvbnMoKTtcblx0XHRyZXR1cm4gSUJNQ2hhdDtcblx0fSxcblx0LyoqXG5cdCogQGlnbm9yZVxuXHQqL1xuXHRwbGF5YmFjazogYm9vdHN0cmFwLnBsYXliYWNrLFxuXG5cdC8qKlxuXHQgKiBUdXJucyBvbiBhIHdob2xlIGJ1bmNoIG9mIHZlcmJvc2UgY29uc29sZS5sb2cgc3RhdGVtZW50cyFcblx0ICogQGZ1bmN0aW9uIGRlYnVnXG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqIEByZXR1cm5zIHtJQk1DaGF0fSAtIFJldHVybnMgSUJNQ2hhdCBmb3IgY2hhaW5pbmcuXG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQuZGVidWcoKVxuXHQgKi9cblx0ZGVidWc6IGZ1bmN0aW9uKCkge1xuXHRcdGJvb3RzdHJhcC5kZWJ1ZygpO1xuXHRcdHJldHVybiBJQk1DaGF0O1xuXHR9XG5cbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBJQk1DaGF0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy9yYXctbG9hZGVyL2luZGV4LmpzIS4vc3R5bGVzLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL3Jhdy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy9yYXctbG9hZGVyL2luZGV4LmpzIS4vc3R5bGVzLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdHlsZXMuY3NzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5JQk1DaGF0LW91dGVyLWNvbnRhaW5lciB7XFxuXFx0bWF4LXdpZHRoOiA3NjhweDtcXG4gIG1pbi13aWR0aDogMjg4cHg7XFxuICBtYXJnaW46IDAgYXV0byAwIGF1dG87XFxuICBib3JkZXI6IG5vbmU7XFxuXFx0bWluLWhlaWdodDoxMDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0cGFkZGluZzowO1xcblxcdGRpc3BsYXk6dGFibGU7XFxuXFx0d2lkdGg6MTAwJTtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG5cXG4vKiBBZ2VudCBDb21wb25lbnQgKi9cXG5cXG4uSUJNQ2hhdC1pbm5lci1jb250YWluZXIge1xcblxcdGRpc3BsYXk6dGFibGUtY2VsbDtcXG5cXHRoZWlnaHQ6MTAwJTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMCA4cHggMCA4cHg7XFxuXFx0dmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG59XFxuXFxuLyogQ2hhdCBDb21wb25lbnQgKi9cXG5cXG4uSUJNQ2hhdC1jaGF0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTp0YWJsZS1yb3c7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6XFxufVxcblxcbi8qIE1lc3NhZ2VzIENvbXBvbmVudCAqL1xcblxcbi5JQk1DaGF0LW1lc3NhZ2VzIHtcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcblxcdG92ZXJmbG93LXg6IGhpZGRlbjtcXG5cXHRoZWlnaHQ6YXV0bztcXG59XFxuXFxuLklCTUNoYXQtbWVzc2FnZXMgPiBkaXYgLklCTUNoYXQtd2F0c29uLWxheW91dCB7XFxuXFx0b3BhY2l0eTowLjg7XFxufVxcblxcbi5JQk1DaGF0LW1lc3NhZ2VzID4gZGl2Omxhc3QtY2hpbGQgLklCTUNoYXQtd2F0c29uLWxheW91dCB7XFxuXFx0b3BhY2l0eToxO1xcbn1cXG5cXG4uSUJNQ2hhdC1tZXNzYWdlcyBsYWJlbCB7XFxuXFx0ZGlzcGxheTpibG9jaztcXG5cXHRmb250LXdlaWdodDpib2xkO1xcblxcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcblxcdHBhZGRpbmctYm90dG9tOjAuMjVlbTtcXG59XFxuXFxuLklCTUNoYXQtbWVzc2FnZXMgaW5wdXQge1xcblxcdGJvcmRlci1yYWRpdXM6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdHBhZGRpbmc6MC4yNWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1tZXNzYWdlcyBidXR0b24ge1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcXG5cXHRvdmVyZmxvdzogdmlzaWJsZTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiBmb3IgaW5wdXQgKi9cXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBmb3IgYnV0dG9uICovXFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMmVtO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRsaW5lLWhlaWdodDogMi41ZW07XFxuXFx0bWFyZ2luOjA7XFxufVxcblxcbi5JQk1DaGF0LW1lc3NhZ2VzIGJ1dHRvbltkaXNhYmxlZD1cXFwidHJ1ZVxcXCJdIHtcXG5cXHRjdXJzb3I6IGRlZmF1bHQ7XFxuICBvcGFjaXR5Oi44O1xcbn1cXG5cXG4uSUJNQ2hhdC1tZXNzYWdlcyBidXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xcblxcdGJvcmRlcjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiBXYXRzb25NZXNzYWdlIENvbXBvbmVudCAqL1xcblxcbi5JQk1DaGF0LXdhdHNvbi1tZXNzYWdlLWNvbnRhaW5lciB7XFxuXFx0bWFyZ2luOiAxZW0gMCAxZW0gMDtcXG59XFxuXFxuLklCTUNoYXQtd2F0c29uLW1lc3NhZ2Uge1xcblxcdG1hcmdpbjoxZW0gMmVtIDFlbSAwO1xcblxcdHBhZGRpbmc6IDAuMWVtO1xcblxcdHBhZGRpbmctbGVmdDogMWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC13YXRzb24tbGF5b3V0IHtcXG5cXHRtYXJnaW46IDAgMWVtIDAgMWVtO1xcbn1cXG5cXG4vKiBVc2VyTWVzc2FnZSBDb21wb25lbnQgKi9cXG5cXG4uSUJNQ2hhdC11c2VyLW1lc3NhZ2UtY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMWVtIDAgMWVtIDJlbTtcXG59XFxuXFxuLklCTUNoYXQtdXNlci1tZXNzYWdlIHtcXG4gIHBhZGRpbmc6MWVtO1xcblxcdG1hcmdpbjowIDFlbSAwIDA7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41ZW07XFxufVxcblxcbi8qIElucHV0IENvbXBvbmVudCAqL1xcblxcbi5JQk1DaGF0LWlucHV0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTp0YWJsZS1yb3c7XFxuXFx0aGVpZ2h0OjcycHg7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbi5JQk1DaGF0LWlucHV0LWZvcm0ge1xcblxcdGRpc3BsYXk6dGFibGUtY2VsbDtcXG5cXHRwb3NpdGlvbjpyZWxhdGl2ZTtcXG5cXHRoZWlnaHQ6IDI0cHg7XFxuXFx0cGFkZGluZzoyNHB4IDI0cHggMCAyNHB4O1xcbn1cXG5cXG4uSUJNQ2hhdC1jaGF0LXRleHRib3gge1xcbiAgYm9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1zaXplOjFlbTtcXG4gIG1hcmdpbjowO1xcbiAgcGFkZGluZzowIDAgM3B4IDA7XFxuICB3aWR0aDoxMDAlO1xcbn1cXG5cXG4uSUJNQ2hhdC1jaGF0LXRleHRib3hbZGlzYWJsZWQ9J2Rpc2FibGVkJ10ge1xcblxcdG9wYWNpdHk6MC41O1xcbn1cXG5cXG4uSUJNQ2hhdC1pbnB1dC1mb3JtIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuXFx0b3BhY2l0eToxO1xcbn1cXG5cXG4uSUJNQ2hhdC1jaGF0LXRleHRib3g6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6MCAwIDJweCAwO1xcbn1cXG5cXG4vKiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2UgKi9cXG4uSUJNQ2hhdC12YWxpZGF0aW9uLWVycm9yIHtcXG5cXHRjb2xvcjogI0NCMzMzMztcXG5cXHRwYWRkaW5nLXRvcDogMC4yNWVtO1xcblxcdGZvbnQtc2l6ZTogMC45ZW07XFxuXFx0aGVpZ2h0OiAxZW07XFxufVxcblxcbi8qIFNwaW5uZXIgKi9cXG4uSUJNQ2hhdC1pbnB1dC1sb2FkaW5nIHtcXG5cXHR6LWluZGV4OiAyO1xcblxcdHBvc2l0aW9uOmFic29sdXRlO1xcblxcdHJpZ2h0OiAxNnB4O1xcblxcdHRvcDogMTVweDtcXG5cXHRoZWlnaHQ6MzJweDtcXG5cXHR3aWR0aDozMnB4O1xcbn1cXG5cXG4uSUJNQ2hhdC1pYm0tc3Bpbm5lci1zdGFydCB7XFxuXFx0b3BhY2l0eTowO1xcbn1cXG5cXG4uSUJNQ2hhdC1pYm0tc3Bpbm5lciB7XFxuXFx0ZmlsbDogdHJhbnNwYXJlbnQ7XFxuXFx0c3Ryb2tlLXdpZHRoOiAzO1xcblxcdHN0cm9rZS1saW5lY2FwOiBcXFwiYnV0dFxcXCI7XFxuXFx0c3Ryb2tlLWRhc2hhcnJheTogMTtcXG5cXHRzdHJva2UtZGFzaG9mZnNldDogMTtcXG59XFxuXFxuLyogaW5pdGlhbCByb3RhdGlvbiBhbmQgc3Ryb2tlIGFuaW1hdGlvbiBhbmQgaW5maW5pdGUgcm90YXRpb24qL1xcbi5JQk1DaGF0LWluaXQtc3BpbiB7XFxuXFx0YW5pbWF0aW9uOiBpbml0LXJvdGF0ZSAxNTBtcyBsaW5lYXIgZm9yd2FyZHMsIHJvdGF0ZS1sb29wIDIwMDBtcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbi5JQk1DaGF0LWluaXQtc3BpbiBzdmcgY2lyY2xlIHtcXG5cXHRhbmltYXRpb246IGluaXQtc3Ryb2tlIDEwMDBtcyBsaW5lYXI7XFxufVxcblxcbi5JQk1DaGF0LWVuZC1zcGluIHN2ZyBjaXJjbGUge1xcblxcdGRpc3BsYXk6bm9uZTtcXG59XFxuXFxuLyogaW5pdGlhbCByb3RhdGlvbiAqL1xcbkBrZXlmcmFtZXMgaW5pdC1yb3RhdGUge1xcblxcdDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG5cXHR9XFxuXFx0MTAwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG5cXHR9XFxufVxcblxcbi8qIGxvb3Bpbmcgcm90YXRpb24gKi9cXG5Aa2V5ZnJhbWVzIHJvdGF0ZS1sb29wIHtcXG5cXHQwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuXFx0fVxcblxcdDEwMCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuXFx0fVxcbn1cXG5cXG4vKiBpbml0aWFsIHN0cm9rZSBhbmltYXRpb24gKi9cXG5Aa2V5ZnJhbWVzIGluaXQtc3Ryb2tlIHtcXG5cXHQwJSB7XFxuXFx0XFx0b3BhY2l0eTogMDtcXG5cXHR9XFxuXFx0MTAwJSB7XFxuXFx0XFx0b3BhY2l0eTogMTtcXG5cXHR9XFxufVxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmF3LWxvYWRlciEuL3NyYy9zdHlsZXMuY3NzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge30sXHJcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHR2YXIgbWVtbztcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiBtZW1vO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdH0pLFxyXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0fSksXHJcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXHJcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXHJcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XHJcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcclxuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XHJcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XHJcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XHJcblx0aWYoaWR4ID49IDApIHtcclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG9iaik7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xyXG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xyXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcclxuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XHJcblxyXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgbGF5b3V0cyA9IHJlcXVpcmUoJy4vbGF5b3V0cycpO1xudmFyIGV2ZW50cyA9IHJlcXVpcmUoJy4vZXZlbnRzJyk7XG52YXIgZXZlbnRIYW5kbGVycyA9IHJlcXVpcmUoJy4vZXZlbnRzL2hhbmRsZXJzJyk7XG52YXIgQm90U0RLID0gcmVxdWlyZSgnQHdhdHNvbi12aXJ0dWFsLWFnZW50L2NsaWVudC1zZGsvbGliL3dlYicpO1xudmFyIHN0YXRlID0gcmVxdWlyZSgnLi9zdGF0ZScpO1xudmFyIHByb2ZpbGUgPSByZXF1aXJlKCcuL3Byb2ZpbGUnKTtcbnZhciBwbGF5YmFjayA9IHJlcXVpcmUoJy4vcGxheWJhY2snKTtcbnZhciBQcm9taXNlID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ2xvZGFzaC9hc3NpZ24nKTtcbnZhciBkZWZhdWx0U3R5bGVzID0gcmVxdWlyZSgnLi9zdHlsZXMnKTtcblxudmFyIGxheW91dEluaXQgPSB7fTtcbnZhciByZWdpc3RlcmVkTGF5b3V0cyA9IFtdO1xuXG5mdW5jdGlvbiByZWdpc3RlckV2ZW50cyhwbGF5YmFjaykge1xuXHRldmVudHMuc3Vic2NyaWJlKCdzdGFydCcsIGV2ZW50SGFuZGxlcnMuc3RhcnQpO1xuXHRldmVudHMuc3Vic2NyaWJlKCdyZXNpemUnLCBldmVudEhhbmRsZXJzLnJlc2l6ZSk7XG5cdGV2ZW50cy5zdWJzY3JpYmUoJ2Rpc2FibGUtaW5wdXQnLCBldmVudEhhbmRsZXJzLmlucHV0LmRpc2FibGVJbnB1dCk7XG5cdGV2ZW50cy5zdWJzY3JpYmUoJ2VuYWJsZS1sb2FkaW5nJywgZXZlbnRIYW5kbGVycy5pbnB1dC5lbmFibGVMb2FkaW5nSW5wdXQpO1xuXHRldmVudHMuc3Vic2NyaWJlKCdkaXNhYmxlLWxvYWRpbmcnLCBldmVudEhhbmRsZXJzLmlucHV0LmRpc2FibGVMb2FkaW5nSW5wdXQpO1xuXHRldmVudHMuc3Vic2NyaWJlKCdzY3JvbGwtdG8tYm90dG9tJywgZXZlbnRIYW5kbGVycy5zY3JvbGxUb0JvdHRvbSk7XG5cdGV2ZW50cy5zdWJzY3JpYmUoJ3JlY2VpdmUnLCBldmVudEhhbmRsZXJzLnJlY2VpdmUpO1xuXHRpZiAocGxheWJhY2sgPT09IHRydWUpIHsgLy9UT0RPOiByZW1vdmUgaWYgcGxheWJhY2sgd2hlbiBEYXNoYm9hcmQgY29kZSBpcyB1cGRhdGVkXG5cdFx0ZXZlbnRzLnN1YnNjcmliZSgnc2VuZCcsIGV2ZW50SGFuZGxlcnMuc2VuZE1vY2spO1xuXHR9IGVsc2Uge1xuXHRcdGV2ZW50cy5zdWJzY3JpYmUoJ3NlbmQnLCBldmVudEhhbmRsZXJzLnNlbmQpO1xuXHRcdGV2ZW50cy5zdWJzY3JpYmUoJ3NlbmQtaW5wdXQtbWVzc2FnZScsIGV2ZW50SGFuZGxlcnMuc2VuZElucHV0TWVzc2FnZSk7XG5cdFx0ZXZlbnRzLnN1YnNjcmliZSgnZW5hYmxlLWlucHV0JywgZXZlbnRIYW5kbGVycy5pbnB1dC5lbmFibGVJbnB1dCk7XG5cdFx0ZXZlbnRzLnN1YnNjcmliZSgnZm9jdXMtaW5wdXQnLCBldmVudEhhbmRsZXJzLmlucHV0LmZvY3VzSW5wdXQpO1xuXHRcdGV2ZW50cy5zdWJzY3JpYmUoJ3NlbmQtbW9jaycsIGV2ZW50SGFuZGxlcnMuc2VuZE1vY2spO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyTGF5b3V0cygpIHtcblx0cmVnaXN0ZXJMYXlvdXQoJ3Nob3ctbG9jYXRpb25zJywgbGF5b3V0cy5zaG93TG9jYXRpb25zLmluaXQsIHRydWUpO1xuXHRyZWdpc3RlckxheW91dCgnY2hvb3NlLWxvY2F0aW9uLXR5cGUnLCBsYXlvdXRzLmNob29zZUxvY2F0aW9uVHlwZS5pbml0LCB0cnVlKTtcblx0cmVnaXN0ZXJMYXlvdXQoJ3JlcXVlc3QtZ2VvbG9jYXRpb24tbGF0bG9uZycsIGxheW91dHMucmVxdWVzdEdlb2xvY2F0aW9uTGF0bG9uZy5pbml0LCB0cnVlKTtcblx0cmVnaXN0ZXJMYXlvdXQoJ2Nob29zZScsIGxheW91dHMuY2hvb3NlLmluaXQsIHRydWUpO1xuXHRyZWdpc3RlckxheW91dCgnZm9ybScsIGxheW91dHMuZm9ybS5pbml0LCB0cnVlKTtcblx0cmVnaXN0ZXJMYXlvdXQoJ2NjLXZhbGlkYXRvcicsIGxheW91dHMuY3JlZGl0Q2FyZC5pbml0LCB0cnVlKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZWdpc3RlcmVkTGF5b3V0cy5sZW5ndGg7IGkrKylcblx0XHRsYXlvdXRJbml0W3JlZ2lzdGVyZWRMYXlvdXRzW2ldXSgpO1xufVxuXG5mdW5jdGlvbiBpbml0KGNvbmZpZykge1xuXHR2YXIgcm9vdCA9ICh0eXBlb2YgY29uZmlnLmVsID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcuZWwpIDogY29uZmlnLmVsO1xuXHR2YXIgU0RLY29uZmlnID0ge307XG5cdFNES2NvbmZpZy5iYXNlVVJMID0gY29uZmlnLmJhc2VVUkwgfHwgJ2h0dHBzOi8vYXBpLmlibS5jb20vdmlydHVhbGFnZW50L3J1bi9hcGkvdjEvJztcblx0aWYgKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpXG5cdFx0U0RLY29uZmlnLndpdGhDcmVkZW50aWFscyA9IGNvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG5cdGlmIChjb25maWcuWElCTUNsaWVudElEKVxuXHRcdFNES2NvbmZpZy5YSUJNQ2xpZW50SUQgPSBjb25maWcuWElCTUNsaWVudElEO1xuXHRpZiAoY29uZmlnLlhJQk1DbGllbnRTZWNyZXQpXG5cdFx0U0RLY29uZmlnLlhJQk1DbGllbnRTZWNyZXQgPSBjb25maWcuWElCTUNsaWVudFNlY3JldDtcblx0aWYgKGNvbmZpZy51c2VySUQpXG5cdFx0U0RLY29uZmlnLnVzZXJJRCA9IGNvbmZpZy51c2VySUQ7XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0XHR2YXIgZGVmYXVsdFN0YXRlID0ge1xuXHRcdFx0YWN0aXZlOiB0cnVlLFxuXHRcdFx0cm9vdDogcm9vdCxcblx0XHRcdG1hcHNTZXJ2ZXI6IHByb2Nlc3MuZW52Lk1BUFNfU0VSVkVSIHx8ICdodHRwczovL2RwMS1pLXNlcnZlLW1hcHMubXlibHVlbWl4Lm5ldC8nLFxuXHRcdFx0Ym90SUQ6IGNvbmZpZy5ib3RJRCxcblx0XHRcdHN0eWxlczogYXNzaWduKHt9LCBkZWZhdWx0U3R5bGVzLCBjb25maWcuc3R5bGVzKSxcblx0XHRcdGJhc2VVUkw6IGNvbmZpZy5iYXNlVVJMLFxuXHRcdFx0b3JpZ2luYWxDb250ZW50OiByb290LmlubmVySFRNTCxcblx0XHRcdGhhbmRsZUlucHV0OiB7XG5cdFx0XHRcdGRlZmF1bHQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHRwbGF5YmFjazogY29uZmlnLnBsYXliYWNrIHx8IGZhbHNlIC8vVE9ETzogcmVtb3ZlIHBsYXliYWNrIHdoZW4gRGFzaGJvYXJkIGNvZGUgaXMgdXBkYXRlZFxuXHRcdH07XG5cdFx0aWYgKGN1cnJlbnQuYWN0aXZlID09PSB0cnVlKSB7XG5cdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChyb290KSB7XG5cdFx0XHRpZiAoY29uZmlnLmVycm9ySGFuZGxlcilcblx0XHRcdFx0ZXZlbnRzLnN1YnNjcmliZSgnZXJyb3InLCBjb25maWcuZXJyb3JIYW5kbGVyLCBjb25maWcuZXJyb3JIYW5kbGVyQ29udGV4dCk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGV2ZW50cy5zdWJzY3JpYmUoJ2Vycm9yJywgZXZlbnRIYW5kbGVycy5lcnJvcik7XG5cblx0XHRcdC8vVE9ETzogcmVtb3ZlIGlmIHBsYXliYWNrIHdoZW4gRGFzaGJvYXJkIGNvZGUgaXMgdXBkYXRlZFxuXHRcdFx0aWYgKGNvbmZpZy5wbGF5YmFjayA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRkZWZhdWx0U3RhdGUuY2hhdElEID0gJ3BsYXliYWNrJztcblx0XHRcdFx0cmVnaXN0ZXJFdmVudHModHJ1ZSk7XG5cdFx0XHRcdHJlZ2lzdGVyTGF5b3V0cygpO1xuXHRcdFx0XHRldmVudHMucHVibGlzaCgnc3RhcnQnLCBkZWZhdWx0U3RhdGUpO1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9IGVsc2UgaWYgKGNvbmZpZy5ib3RJRCkge1xuXHRcdFx0XHRCb3RTREtcblx0XHRcdFx0XHQuY29uZmlndXJlKCBTREtjb25maWcgKVxuXHRcdFx0XHRcdC5zdGFydCggY29uZmlnLmJvdElEIClcblx0XHRcdFx0XHQudGhlbiggZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdFx0XHRkZWZhdWx0U3RhdGUuY2hhdElEID0gcmVzLmNoYXRJRDtcblx0XHRcdFx0XHRcdHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdJQk1DaGF0Q2hhdElEJywgcmVzLmNoYXRJRCk7XG5cdFx0XHRcdFx0XHRyZWdpc3RlckxheW91dHMoKTtcblx0XHRcdFx0XHRcdHJlZ2lzdGVyRXZlbnRzKCk7XG5cdFx0XHRcdFx0XHRldmVudHMucHVibGlzaCgnc3RhcnQnLCBkZWZhdWx0U3RhdGUpO1xuXHRcdFx0XHRcdFx0ZXZlbnRzLnB1Ymxpc2goJ3JlY2VpdmUnLCByZXMpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdH0pWydjYXRjaCddKCBmdW5jdGlvbihlcnIpIHtcblx0XHRcdFx0XHRcdHJlamVjdChlcnIpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVqZWN0KHtcblx0XHRcdFx0XHRlcnJvcjogJ0JvdElEIGlzIHJlcXVpcmVkISdcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlamVjdCh7XG5cdFx0XHRcdGVycm9yOiAnRWxlbWVudCBmb3IgY2hhdCBkb2VzIG5vdCBleGlzdCEnXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlckxheW91dChsYXlvdXQsIGluaXQsIGRlZmF1bHRTZXR1cCkge1xuXHRpZiAobGF5b3V0ICYmIGluaXQgJiYgdHlwZW9mIGluaXQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRpZiAocmVnaXN0ZXJlZExheW91dHMuaW5kZXhPZihsYXlvdXQpID09PSAtMSB8fCAhZGVmYXVsdFNldHVwKSB7XG5cdFx0XHRyZWdpc3RlcmVkTGF5b3V0cy5wdXNoKGxheW91dCk7XG5cdFx0XHRsYXlvdXRJbml0W2xheW91dF0gPSBpbml0O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLmVycm9yKCdyZWdpc3RlckxheW91dCB3YXMgY29uZmlndXJlZCBpbmNvcnJlY3RseS4nKTtcblx0fVxufVxuXG5mdW5jdGlvbiBzZW5kKG1lc3NhZ2UpIHtcblx0aWYgKG1lc3NhZ2UpIHtcblx0XHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdFx0aWYgKGN1cnJlbnQuYWN0aXZlKSB7XG5cdFx0XHRldmVudHMucHVibGlzaCgnc2VuZCcsIHtcblx0XHRcdFx0dGV4dDogbWVzc2FnZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1RoZSBtZXNzYWdlIHdhcyBlbXB0eS4nKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZWNlaXZlKG1lc3NhZ2UpIHtcblx0aWYgKG1lc3NhZ2UpIHtcblx0XHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdFx0aWYgKGN1cnJlbnQuYWN0aXZlKVxuXHRcdFx0ZXZlbnRzLnB1Ymxpc2goJ3JlY2VpdmUnLCBtZXNzYWdlKTtcblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLmVycm9yKCdUaGUgbWVzc2FnZSB3YXMgZW1wdHkuJyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gc2VuZE1vY2sobWVzc2FnZSkge1xuXHRpZiAobWVzc2FnZSkge1xuXHRcdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0XHRpZiAoY3VycmVudC5hY3RpdmUpIHtcblx0XHRcdGV2ZW50cy5wdWJsaXNoKCdzZW5kLW1vY2snLCB7XG5cdFx0XHRcdHRleHQ6IG1lc3NhZ2Vcblx0XHRcdH0pO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLmVycm9yKCdUaGUgbWVzc2FnZSB3YXMgZW1wdHkuJyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gc2VuZFNpbGVudGx5KG1lc3NhZ2UpIHtcblx0aWYgKG1lc3NhZ2UpIHtcblx0XHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdFx0aWYgKGN1cnJlbnQuYWN0aXZlKSB7XG5cdFx0XHRldmVudHMucHVibGlzaCgnc2VuZCcsIHtcblx0XHRcdFx0dGV4dDogbWVzc2FnZSxcblx0XHRcdFx0c2lsZW50OiB0cnVlXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5lcnJvcignVGhlIG1lc3NhZ2Ugd2FzIGVtcHR5LicpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGVuYWJsZUN1c3RvbUlucHV0SGFuZGxlcihjb25maWcpIHtcblx0aWYgKGNvbmZpZyAmJiBjb25maWcuY2FsbGJhY2sgJiYgdHlwZW9mIGNvbmZpZy5jYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHN0YXRlLnNldFN0YXRlKHtcblx0XHRcdGhhbmRsZUlucHV0OiB7XG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlLFxuXHRcdFx0XHRjYWxsYmFjazogY29uZmlnLmNhbGxiYWNrLFxuXHRcdFx0XHRjb250ZXh0OiBjb25maWcuY29udGV4dFxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgY29uZmlndXJhdGlvbiBvZiBlbmFibGVDdXN0b21JbnB1dEhhbmRsZXInKTtcblx0fVxufVxuXG5mdW5jdGlvbiBkaXNhYmxlQ3VzdG9tSW5wdXRIYW5kbGVyKCkge1xuXHRzdGF0ZS5zZXRTdGF0ZSh7XG5cdFx0aGFuZGxlSW5wdXQ6IHtcblx0XHRcdGRlZmF1bHQ6IHRydWVcblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBmb2N1c0lucHV0KCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdGlmIChjdXJyZW50LmFjdGl2ZSlcblx0XHRldmVudHMucHVibGlzaCgnZm9jdXMtaW5wdXQnKTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZUlucHV0KCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdGlmIChjdXJyZW50LmFjdGl2ZSlcblx0XHRldmVudHMucHVibGlzaCgnZGlzYWJsZS1pbnB1dCcpO1xufVxuXG5mdW5jdGlvbiBlbmFibGVJbnB1dCgpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHRpZiAoY3VycmVudC5hY3RpdmUpXG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ2VuYWJsZS1pbnB1dCcpO1xufVxuXG5mdW5jdGlvbiBkZWJ1ZygpIHtcblx0c3RhdGUuc2V0U3RhdGUoe1xuXHRcdERFQlVHOiB0cnVlXG5cdH0pO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95KCkge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHRcdGlmIChjdXJyZW50LnJvb3QpIHtcblx0XHRcdGV2ZW50cy5wdWJsaXNoKCdkZXN0cm95Jyk7XG5cdFx0XHRldmVudHMuZGVzdHJveSgpOyAvL3JlbW92ZSBhbGwgZXZlbnRzXG5cdFx0XHRjdXJyZW50LnJvb3QuaW5uZXJIVE1MID0gY3VycmVudC5vcmlnaW5hbENvbnRlbnQ7IC8vcmVzdG9yZSBvcmlnaW5hbCBjb250ZW50IHRvIGRpdlxuXHRcdFx0c3RhdGUuZGVzdHJveVN0YXRlKCk7XG5cdFx0XHRyZXNvbHZlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlamVjdCgnSUJNQ2hhdCBoYXMgbm8gaW5zdGFuY2UgdG8gZGVzdHJveS4nKTtcblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiByZXN0YXJ0KCkge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHRcdGRlc3Ryb3koKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0aW5pdCh7IGVsOiBjdXJyZW50LnJvb3QsIGJvdElEOiBjdXJyZW50LmJvdElELCBiYXNlVVJMOiBjdXJyZW50LmJhc2VVUkwgfSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0fSlbJ2NhdGNoJ10oZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRyZWplY3QoZSk7XG5cdFx0XHR9KTtcblx0XHR9KVsnY2F0Y2gnXShmdW5jdGlvbihlKSB7XG5cdFx0XHRyZWplY3QoZSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0cHJvZmlsZTogcHJvZmlsZSxcblx0aW5pdDogaW5pdCxcblx0cmVnaXN0ZXJMYXlvdXQ6IHJlZ2lzdGVyTGF5b3V0LFxuXHRzZW5kOiBzZW5kLFxuXHRyZWNlaXZlOiByZWNlaXZlLFxuXHRzZW5kTW9jazogc2VuZE1vY2ssXG5cdHNlbmRTaWxlbnRseTogc2VuZFNpbGVudGx5LFxuXHRlbmFibGVDdXN0b21JbnB1dEhhbmRsZXI6IGVuYWJsZUN1c3RvbUlucHV0SGFuZGxlcixcblx0ZGlzYWJsZUN1c3RvbUlucHV0SGFuZGxlcjogZGlzYWJsZUN1c3RvbUlucHV0SGFuZGxlcixcblx0Zm9jdXNJbnB1dDogZm9jdXNJbnB1dCxcblx0ZGlzYWJsZUlucHV0OiBkaXNhYmxlSW5wdXQsXG5cdGVuYWJsZUlucHV0OiBlbmFibGVJbnB1dCxcblx0c3Vic2NyaWJlOiBldmVudHMuc3Vic2NyaWJlLFxuXHRwdWJsaXNoOiBldmVudHMucHVibGlzaCxcblx0ZGVidWc6IGRlYnVnLFxuXHRkZXN0cm95OiBkZXN0cm95LFxuXHRyZXN0YXJ0OiByZXN0YXJ0LFxuXHRjdXJyZW50U3Vic2NyaXB0aW9uczogZXZlbnRzLmN1cnJlbnRTdWJzY3JpcHRpb25zLFxuXHRoYXNTdWJzY3JpcHRpb246IGV2ZW50cy5oYXNTdWJzY3JpcHRpb24sXG5cdGNvbXBsZXRlRXZlbnQ6IGV2ZW50cy5jb21wbGV0ZUV2ZW50LFxuXHRwbGF5YmFjazogcGxheWJhY2tcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2Jvb3RzdHJhcC5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIHNob3dMb2NhdGlvbnNMYXlvdXQgPSByZXF1aXJlKCcuL3Nob3ctbG9jYXRpb25zJyk7XG52YXIgcmVxdWVzdEdlb2xvY2F0aW9uTGF0bG9uZ0xheW91dCA9IHJlcXVpcmUoJy4vcmVxdWVzdC1nZW9sb2NhdGlvbi1sYXRsb25nJyk7XG52YXIgY2hvb3NlTG9jYXRpb25UeXBlTGF5b3V0ID0gcmVxdWlyZSgnLi9jaG9vc2UtbG9jYXRpb24tdHlwZScpO1xudmFyIGNob29zZUxheW91dCA9IHJlcXVpcmUoJy4vY2hvb3NlJyk7XG52YXIgZm9ybUxheW91dCA9IHJlcXVpcmUoJy4vZm9ybScpO1xudmFyIGNyZWRpdENhcmRMYXlvdXQgPSByZXF1aXJlKCcuL2NjLXZhbGlkYXRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0c2hvd0xvY2F0aW9uczogc2hvd0xvY2F0aW9uc0xheW91dCxcblx0cmVxdWVzdEdlb2xvY2F0aW9uTGF0bG9uZzogcmVxdWVzdEdlb2xvY2F0aW9uTGF0bG9uZ0xheW91dCxcblx0Y2hvb3NlTG9jYXRpb25UeXBlOiBjaG9vc2VMb2NhdGlvblR5cGVMYXlvdXQsXG5cdGNob29zZTogY2hvb3NlTGF5b3V0LFxuXHRjcmVkaXRDYXJkOiBjcmVkaXRDYXJkTGF5b3V0LFxuXHRmb3JtOiBmb3JtTGF5b3V0XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG5yZXF1aXJlKCcuL3N0eWxlcy5jc3MnKTtcblxudmFyIGV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2V2ZW50cycpO1xudmFyIHN1YnNjcmliZSA9IGV2ZW50cy5zdWJzY3JpYmU7XG52YXIgcHVibGlzaCA9IGV2ZW50cy5wdWJsaXNoO1xudmFyIHN0YXRlID0gcmVxdWlyZSgnLi4vLi4vc3RhdGUnKTtcbnZhciBnZXRTdGF0ZSA9IHN0YXRlLmdldFN0YXRlO1xudmFyIHNldFN0YXRlID0gc3RhdGUuc2V0U3RhdGU7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xuXG52YXIgZmlyc3QgPSB0cnVlO1xudmFyIGRpc3BsYXlMZW5ndGggPSAzO1xudmFyIGJyZWFrcG9pbnRXaWR0aHMgPSBbJzcyMCcsICc2ODAnLCAnNjQwJywgJzU4MCcsICc1MTInLCAnNDgwJywgJzQyMCcsICczNjAnLCAnMzIwJywgJzI4OCcsICcyNTYnXTtcbnZhciBkYXlzID0gWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXTtcbnZhciBzaG93TG9jYXRpb25zID0ge307XG52YXIgbG9jYXRpb25JRHMgPSBbXTtcbnZhciBjaGF0V2lkdGggPSA3NDg7XG52YXIgY3VycmVudEJyZWFrcG9pbnRLZXkgPSAwO1xudmFyIHBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xudmFyIG5zID0gJ0lCTUNoYXQtbWFwJztcblxudmFyIHRlbXBsYXRlcyA9IHtcblx0YmFzZTogcmVxdWlyZSgnLi90ZW1wbGF0ZXMvYmFzZS5odG1sJyksXG5cdGNyZWF0ZURvbUFycmF5OiByZXF1aXJlKCcuL3RlbXBsYXRlcy9jcmVhdGUtZG9tLWFycmF5Lmh0bWwnKSxcblx0YWRkTG9jYXRpb25zSXRlbTogcmVxdWlyZSgnLi90ZW1wbGF0ZXMvYWRkLWxvY2F0aW9ucy1pdGVtLmh0bWwnKSxcblx0YWRkTG9jYXRpb25JdGVtOiByZXF1aXJlKCcuL3RlbXBsYXRlcy9hZGQtbG9jYXRpb24taXRlbS5odG1sJyksXG5cdGhvdXJzQ2xvc2VkOiByZXF1aXJlKCcuL3RlbXBsYXRlcy9ob3Vycy1jbG9zZWQuaHRtbCcpLFxuXHRob3Vyc09wZW46IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2hvdXJzLW9wZW4uaHRtbCcpLFxuXHRob3Vyc1RvZGF5T3BlbjogcmVxdWlyZSgnLi90ZW1wbGF0ZXMvaG91cnMtdG9kYXktb3Blbi5odG1sJyksXG5cdGhvdXJzVG9kYXlDbG9zZWQ6IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2hvdXJzLXRvZGF5LWNsb3NlZC5odG1sJylcbn07XG5cbnZhciBzdHJpbmdzID0ge1xuXHRsb2NhdGlvbnM6IHtcblx0XHRub25lOiAnV2UgY291bGQgbm90IGZpbmQgYW55IGxvY2F0aW9ucyBjbG9zZSB0byB5b3UuJyxcblx0XHRzaW5nbGU6ICdIZXJlIGFyZSB0aGUgZGV0YWlscyBmb3IgdGhlICR7bG9jYXRpb259IGxvY2F0aW9uLi4uJyxcblx0XHRsaXN0OiAnSGVyZSBhcmUgdGhlIGxvY2F0aW9ucyBJIGZvdW5kIGNsb3NlIHRvIHlvdTonXG5cdH1cbn07XG5cbnZhciBzaG93TG9jYXRpb25zTGF5b3V0ID0ge1xuXHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHRzdWJzY3JpYmUoJ2xheW91dDpzaG93LWxvY2F0aW9ucycsIGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdHZhciBzaG93TG9jYXRpb24gPSBuZXcgU2hvd0xvY2F0aW9ucyhkYXRhKTtcblx0XHRcdGxvY2F0aW9uSURzLnB1c2goZGF0YS51dWlkKTtcblx0XHRcdHNob3dMb2NhdGlvbnNbZGF0YS51dWlkXSA9IHNob3dMb2NhdGlvbjtcblx0XHR9KTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXRpbHMuZGVib3VuY2UoZnVuY3Rpb24oKSB7XG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzaXplTWFwKCk7XG5cdFx0XHR9LCA1MDApO1xuXHRcdH0sIDUwMCkpO1xuXHR9XG59O1xuXG52YXIgYWxwaGFNYXAgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnXTtcblxuZnVuY3Rpb24gaW5pdGlhbFNpemUod2lkdGgpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBicmVha3BvaW50V2lkdGhzLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKChpID09PSBicmVha3BvaW50V2lkdGhzLmxlbmd0aCAtIDEpIHx8IChicmVha3BvaW50V2lkdGhzW2ldID49IHdpZHRoICYmIGJyZWFrcG9pbnRXaWR0aHNbaSArIDFdIDwgd2lkdGgpKSB7XG5cdFx0XHRjdXJyZW50QnJlYWtwb2ludEtleSA9IGk7XG5cdFx0XHRjaGF0V2lkdGggPSB3aWR0aDtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gc2FtZVNpemUoKSB7XG5cdHZhciB3aWR0aCA9IHNob3dMb2NhdGlvbnNbbG9jYXRpb25JRHNbMF1dLmdldFdpZHRoKCk7XG5cdHZhciBpc1NhbWVTaXplID0gKGJyZWFrcG9pbnRXaWR0aHNbY3VycmVudEJyZWFrcG9pbnRLZXldID49IHdpZHRoICYmIGJyZWFrcG9pbnRXaWR0aHNbY3VycmVudEJyZWFrcG9pbnRLZXkgKyAxXSA8IHdpZHRoKTtcblx0cmV0dXJuIGlzU2FtZVNpemU7XG59XG5cbmZ1bmN0aW9uIHNpemVNYXAoKSB7XG5cdGlmIChsb2NhdGlvbklEcy5sZW5ndGggPiAwICYmIHNob3dMb2NhdGlvbnNbbG9jYXRpb25JRHNbMF1dLmdldFdpZHRoKCkgJiYgIXNhbWVTaXplKCkpIHtcblx0XHR2YXIgd2lkdGggPSBzaG93TG9jYXRpb25zW2xvY2F0aW9uSURzWzBdXS5nZXRXaWR0aCgpO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYnJlYWtwb2ludFdpZHRocy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKChpID09PSBicmVha3BvaW50V2lkdGhzLmxlbmd0aCAtIDEpIHx8IChicmVha3BvaW50V2lkdGhzW2ldID49IHdpZHRoICYmIGJyZWFrcG9pbnRXaWR0aHNbaSArIDFdIDwgd2lkdGgpKSB7XG5cdFx0XHRcdGN1cnJlbnRCcmVha3BvaW50S2V5ID0gaTtcblx0XHRcdFx0Y2hhdFdpZHRoID0gd2lkdGg7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbG9jYXRpb25JRHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRpZiAoc2hvd0xvY2F0aW9uc1tsb2NhdGlvbklEc1tqXV0uZGF0YS5sZW5ndGggPiAwKVxuXHRcdFx0XHRcdFx0c2hvd0xvY2F0aW9uc1tsb2NhdGlvbklEc1tqXV0ucmVEcmF3TWFwKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQaG9uZUFycmF5KGVsLCBpdGVtcykge1xuXHRpZiAoaXRlbXMpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbUNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHR2YXIgdGV4dCA9IHRlbXBsYXRlcy5jcmVhdGVEb21BcnJheTtcblx0XHRcdGl0ZW1DaGlsZC5jbGFzc05hbWUgPSBucyArICctY29udGFjdC1yb3cnO1xuXHRcdFx0aXRlbUNoaWxkLmlubmVySFRNTCA9IHV0aWxzLmNvbXBpbGUodGV4dCwge1xuXHRcdFx0XHRuczogbnNcblx0XHRcdH0pO1xuXHRcdFx0dmFyIHR5cGVFbCA9IGl0ZW1DaGlsZC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1jb250YWN0LXR5cGUnKTtcblx0XHRcdHZhciBkYXRhRWwgPSBpdGVtQ2hpbGQucXVlcnlTZWxlY3RvcignLicgKyBucyArICctY29udGFjdC1kYXRhJyk7XG5cdFx0XHR0eXBlRWwudGV4dENvbnRlbnQgPSBpdGVtc1tpXS50eXBlO1xuXHRcdFx0ZGF0YUVsLnRleHRDb250ZW50ID0gaXRlbXNbaV0ubnVtYmVyO1xuXHRcdFx0ZWwuYXBwZW5kQ2hpbGQoaXRlbUNoaWxkKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0QU1QTSh0aW1lKSB7XG5cdHRyeSB7XG5cdFx0dmFyIHNwbGl0ID0gdGltZS5zcGxpdCgnOicpO1xuXHRcdHZhciBob3VycyA9IHNwbGl0WzBdO1xuXHRcdHZhciBtaW51dGVzID0gc3BsaXRbMV07XG5cdFx0dmFyIGFtcG0gPSBob3VycyA+PSAxMiA/ICdwbScgOiAnYW0nO1xuXHRcdGhvdXJzID0gaG91cnMgJSAxMjtcblx0XHRob3VycyA9IGhvdXJzID8gaG91cnMgOiAxMjtcblx0XHRyZXR1cm4gaG91cnMgKyAnOicgKyBtaW51dGVzICsgJyAnICsgYW1wbTtcblx0fVxuXHRjYXRjaCAoZSkge1xuXHRcdHJldHVybiAnLSc7XG5cdH1cbn1cblxuZnVuY3Rpb24gcGFyc2VBZGRyZXNzKGFkZHJlc3MpIHtcblx0dmFyIGFyciA9IGFkZHJlc3Muc3BsaXQoJywnKTtcblx0dmFyIGZpcnN0ID0gYXJyLnNoaWZ0KCk7XG5cdHZhciB0ZXh0ID0gJyc7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0dGV4dCArPSBhcnJbaV07XG5cdFx0aWYgKGkgPCAoYXJyLmxlbmd0aCAtIDEpKVxuXHRcdFx0dGV4dCArPSAnLCc7XG5cdH1cblx0cmV0dXJuIHtcblx0XHRhZGRyZXNzMTogZmlyc3QsXG5cdFx0YWRkcmVzczI6IHRleHRcblx0fTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG91cnMoaG91cnNFbCwgbW9yZUhvdXJzRWwsIGhvdXJzLCB0aW1lem9uZSkge1xuXHRpZiAoaG91cnMpIHtcblx0XHR2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpLmdldERheSgpO1xuXHRcdHZhciB0b2RheXNIb3VycyA9IGhvdXJzW3RvZGF5XTtcblx0XHR2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRpZiAodG9kYXlzSG91cnMgJiYgdG9kYXlzSG91cnMuaXNPcGVuKSB7XG5cdFx0XHRlbC5pbm5lckhUTUwgPSB1dGlscy5jb21waWxlKHRlbXBsYXRlcy5ob3Vyc1RvZGF5T3Blbiwge1xuXHRcdFx0XHRuczogbnMsXG5cdFx0XHRcdG9wZW46IGZvcm1hdEFNUE0odG9kYXlzSG91cnMub3BlbiksXG5cdFx0XHRcdGNsb3NlOiBmb3JtYXRBTVBNKHRvZGF5c0hvdXJzLmNsb3NlKSxcblx0XHRcdFx0dGltZXpvbmU6IHRpbWV6b25lXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWwuaW5uZXJIVE1MID0gdXRpbHMuY29tcGlsZSh0ZW1wbGF0ZXMuaG91cnNUb2RheUNsb3NlZCwge1xuXHRcdFx0XHRuczogbnMsXG5cdFx0XHRcdHRpbWV6b25lOiB0aW1lem9uZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGhvdXJzRWwuYXBwZW5kQ2hpbGQoZWwpO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaG91cnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBjaGlsZEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRjaGlsZEVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBucyArICctZGF5cy1ob3VycycpO1xuXHRcdFx0aWYgKGhvdXJzW2ldICYmIGhvdXJzW2ldLmlzT3Blbikge1xuXHRcdFx0XHRjaGlsZEVsLmlubmVySFRNTCA9IHV0aWxzLmNvbXBpbGUodGVtcGxhdGVzLmhvdXJzT3Blbiwge1xuXHRcdFx0XHRcdG5zOiBucyxcblx0XHRcdFx0XHRkYXk6IGRheXNbaV0sXG5cdFx0XHRcdFx0b3BlbjogZm9ybWF0QU1QTShob3Vyc1tpXS5vcGVuKSxcblx0XHRcdFx0XHRjbG9zZTogZm9ybWF0QU1QTShob3Vyc1tpXS5jbG9zZSlcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjaGlsZEVsLmlubmVySFRNTCA9IHV0aWxzLmNvbXBpbGUodGVtcGxhdGVzLmhvdXJzQ2xvc2VkLCB7XG5cdFx0XHRcdFx0bnM6IG5zLFxuXHRcdFx0XHRcdGRheTogZGF5c1tpXVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdG1vcmVIb3Vyc0VsLmFwcGVuZENoaWxkKGNoaWxkRWwpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBkaXN0YW5jZShpdGVtKSB7XG5cdGlmICghaXRlbS5kaXN0YW5jZSlcblx0XHRyZXR1cm47XG5cdHZhciBkaXN0YW5jZUxlbmd0aCA9IChpdGVtLmRpc3RhbmNlLnRvRml4ZWQoMSkgPT09IDAuMCkgPyAwLjEgOiBpdGVtLmRpc3RhbmNlLnRvRml4ZWQoMSk7XG5cdHZhciBkaXN0YW5jZUxlbmd0aE1lYXN1cmUgPSAoaXRlbS5kaXN0YW5jZU1lYXN1cmUgPT09ICdtaWxlcycpID8gJ20nIDogJ2ttJztcblx0cmV0dXJuIGRpc3RhbmNlTGVuZ3RoICsgZGlzdGFuY2VMZW5ndGhNZWFzdXJlO1xufVxuXG5mdW5jdGlvbiBTaG93TG9jYXRpb25zKGRhdGEpIHtcblx0dGhpcy5pbml0KGRhdGEpO1xufVxuXG5TaG93TG9jYXRpb25zLnByb3RvdHlwZSA9IHtcblx0aW5pdDogZnVuY3Rpb24oZGF0YSkge1xuXHRcdHRoaXMuZGF0YSA9IChkYXRhLm1lc3NhZ2UuZGF0YSAhPT0gdW5kZWZpbmVkICYmIGRhdGEubWVzc2FnZS5kYXRhLmxvY2F0aW9uX2RhdGEgIT09IHVuZGVmaW5lZCkgPyBkYXRhLm1lc3NhZ2UuZGF0YS5sb2NhdGlvbl9kYXRhIDogW107XG5cdFx0aWYgKHRoaXMuZGF0YS5sZW5ndGggPiAxKSB7XG5cdFx0XHRzZXRTdGF0ZSh7XG5cdFx0XHRcdGxvY2F0aW9uX2RhdGE6IHRoaXMuZGF0YVxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcblx0XHR0aGlzLnBhcmVudEVsZW1lbnQgPSBkYXRhLmVsZW1lbnQ7XG5cdFx0dGhpcy5sYXlvdXRFbGVtZW50ID0gZGF0YS5sYXlvdXRFbGVtZW50O1xuXHRcdHRoaXMubXNnRWxlbWVudCA9IGRhdGEubXNnRWxlbWVudDtcblx0XHRzd2l0Y2ggKHRoaXMuZGF0YS5sZW5ndGgpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHR0aGlzLm1zZ0VsZW1lbnQudGV4dENvbnRlbnQgPSBzdHJpbmdzLmxvY2F0aW9ucy5ub25lO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0dGhpcy5tc2dFbGVtZW50LnRleHRDb250ZW50ID0gdXRpbHMuY29tcGlsZShzdHJpbmdzLmxvY2F0aW9ucy5zaW5nbGUsIHsgbG9jYXRpb246IHRoaXMuZGF0YVswXS5hZGRyZXNzLmFkZHJlc3MgfSk7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0dGhpcy5tc2dFbGVtZW50LnRleHRDb250ZW50ID0gc3RyaW5ncy5sb2NhdGlvbnMubGlzdDtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5kYXRhLmxlbmd0aCA+IDApIHtcblx0XHRcdHZhciB0ZXh0ID0gdGVtcGxhdGVzLmJhc2U7XG5cdFx0XHR0aGlzLnV1aWQgPSBkYXRhLnV1aWQ7XG5cdFx0XHRpZiAoZmlyc3QpIHtcblx0XHRcdFx0aW5pdGlhbFNpemUodGhpcy5nZXRXaWR0aCgpKTtcblx0XHRcdFx0Zmlyc3QgPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHRoaXMubWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHR0aGlzLm1hcC5pbm5lckhUTUwgPSB1dGlscy5jb21waWxlKHRleHQsIHsgbnM6IG5zIH0pO1xuXHRcdFx0dGhpcy5tYXBFbGVtZW50ID0gdGhpcy5tYXAucXVlcnlTZWxlY3RvcignLicgKyBucyArICctaW1nJyk7XG5cdFx0XHR0aGlzLmRhdGFFbGVtZW50ID0gdGhpcy5tYXAucXVlcnlTZWxlY3RvcignLicgKyBucyArICctZGF0YScpO1xuXHRcdFx0dGhpcy5tYXBFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZHJhd0xvY2F0aW9ucygpKTtcblx0XHRcdHRoaXMuZGF0YUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5hZGREZXRhaWxzKCkpO1xuXHRcdFx0dGhpcy5sYXlvdXRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMubWFwKTtcblx0XHR9XG5cdH0sXG5cdGdldFdpZHRoOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgd2lkdGggPSB0aGlzLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLklCTUNoYXQtd2F0c29uLWxheW91dDpsYXN0LWNoaWxkJykuY2xpZW50V2lkdGg7XG5cdFx0cmV0dXJuIHdpZHRoO1xuXHR9LFxuXHRyZURyYXdNYXA6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMubWFwRWxlbWVudC5pbm5lckhUTUwgPSAnJztcblx0XHR0aGlzLm1hcEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5kcmF3TG9jYXRpb25zKCkpO1xuXHR9LFxuXHRhZGREZXRhaWxzOiBmdW5jdGlvbigpIHtcblx0XHRpZiAodGhpcy5kYXRhLmxlbmd0aCA+IDEpXG5cdFx0XHRyZXR1cm4gdGhpcy5hZGRMb2NhdGlvbnMoKTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gdGhpcy5hZGRMb2NhdGlvbigpO1xuXHR9LFxuXHRkcmF3TG9jYXRpb25zOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgY3VycmVudCA9IGdldFN0YXRlKCk7XG5cdFx0dmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRcdHZhciB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKTtcblx0XHR2YXIgY29uZmlnID0ge1xuXHRcdFx0c2l6ZTogd2lkdGggKyAneDE4MCcsXG5cdFx0XHRzY2FsZTogcGl4ZWxSYXRpb1xuXHRcdH07XG5cdFx0dGhpcy51cmkgPSBjdXJyZW50Lm1hcHNTZXJ2ZXIgKyAnPyc7XG5cdFx0dGhpcy51cmkgKz0gdXRpbHMuc2VyaWFsaXplKGNvbmZpZyk7XG5cdFx0dGhpcy51cmkgKz0gJyZsb2NhdGlvbnM9Jztcblx0XHR2YXIgbG9jYXRpb25zID0gJyc7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IChpIDwgZGlzcGxheUxlbmd0aCAmJiBpIDwgdGhpcy5kYXRhLmxlbmd0aCk7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzLmRhdGFbaV07XG5cdFx0XHRsb2NhdGlvbnMgKz0gKGkgPT09IDAgKSA/IGl0ZW0uYWRkcmVzcy5sYXQgKyAnLCcgKyBpdGVtLmFkZHJlc3MubG5nIDogJysnICsgaXRlbS5hZGRyZXNzLmxhdCArICcsJyArIGl0ZW0uYWRkcmVzcy5sbmc7XG5cdFx0fVxuXHRcdHRoaXMudXJpICs9IGVuY29kZVVSSUNvbXBvbmVudChsb2NhdGlvbnMpO1xuXHRcdHRoaXMudXJpICs9ICcmY29sb3I9JyArIGVuY29kZVVSSUNvbXBvbmVudChjdXJyZW50LnN0eWxlcy5hY2NlbnRCYWNrZ3JvdW5kLnJlcGxhY2UoJyMnLCAnJykpO1xuXHRcdGltZy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzEwMCUnKTtcblx0XHRpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCB0aGlzLnVyaSk7XG5cdFx0cmV0dXJuIGltZztcblx0fSxcblx0aGFuZGxlQ2xpY2s6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuY2xhc3NOYW1lID0gbnMgKyAnLWxvY2F0aW9uLWFjdGl2ZSc7XG5cdFx0c2hvd0xvY2F0aW9uc1t0aGlzLmRhdGFzZXQudXVpZF0ucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMoKTtcblx0XHRwdWJsaXNoKCdyZWNlaXZlJywge1xuXHRcdFx0bWVzc2FnZToge1xuXHRcdFx0XHR0ZXh0OiBbdXRpbHMuY29tcGlsZShzdHJpbmdzLmxvY2F0aW9ucy5zaW5nbGUsIHsgbG9jYXRpb246IHNob3dMb2NhdGlvbnNbdGhpcy5kYXRhc2V0LnV1aWRdLmRhdGFbdGhpcy5kYXRhc2V0LmlkIC0gMV0uYWRkcmVzcy5hZGRyZXNzIH0pXSxcblx0XHRcdFx0bGF5b3V0OiB7XG5cdFx0XHRcdFx0bmFtZTogJ3Nob3ctbG9jYXRpb25zJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0LyoganNoaW50IGlnbm9yZTpzdGFydCAqL1xuXHRcdFx0XHRcdGxvY2F0aW9uX2RhdGE6IFtzaG93TG9jYXRpb25zW3RoaXMuZGF0YXNldC51dWlkXS5kYXRhW3RoaXMuZGF0YXNldC5pZCAtIDFdXVxuXHRcdFx0XHRcdC8qIGpzaGludCBpZ25vcmU6ZW5kICovXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fSxcblx0cmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnM6IGZ1bmN0aW9uKCkge1xuXHRcdGlmICh0aGlzLmV2ZW50TGlzdGVuZXJzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMuZGF0YUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShucyArICctY2xpY2thYmxlJyk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRMaXN0ZW5lcnMubGVuZ3RoOyBpKyspXG5cdFx0XHRcdHRoaXMuZXZlbnRMaXN0ZW5lcnNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrKTtcblx0XHRcdHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcblx0XHR9XG5cdH0sXG5cdGFkZExvY2F0aW9uOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dmFyIGxvY2F0aW9uRGF0YSA9IGdldFN0YXRlKCkubG9jYXRpb25fZGF0YTtcblx0XHR2YXIgaXRlbSA9IHRoaXMuZGF0YVswXTtcblx0XHR2YXIgY3JlYXRlRG9tID0gZnVuY3Rpb24oZWwpIHtcblx0XHRcdHZhciB0ZXh0ID0gdGVtcGxhdGVzLmFkZExvY2F0aW9uSXRlbTtcblx0XHRcdGVsLmlubmVySFRNTCA9IHV0aWxzLmNvbXBpbGUodGV4dCwgeyBuczogbnMgfSk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRsaW5rOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtaXRlbS1kYXRhLWFkZHJlc3MtbGluaycpLFxuXHRcdFx0XHRsYWJlbDogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWl0ZW0tZGF0YS10aXRsZScpLFxuXHRcdFx0XHRhZGRyZXNzOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtaXRlbS1kYXRhLWFkZHJlc3MnKSxcblx0XHRcdFx0YWRkcmVzczE6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSxcblx0XHRcdFx0YWRkcmVzczI6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSxcblx0XHRcdFx0cGhvbmU6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEtcGhvbmUnKSxcblx0XHRcdFx0ZW1haWw6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEtZW1haWwnKSxcblx0XHRcdFx0aG91cnM6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEtaG91cnMnKSxcblx0XHRcdFx0cGFyZW50RWw6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEnKSxcblx0XHRcdFx0aG91cnNCdXR0b246IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEtaG91cnMtYnV0dG9uJyksXG5cdFx0XHRcdG1vcmVIb3VyczogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWl0ZW0tZGF0YS1tb3JlLWhvdXJzJyksXG5cdFx0XHRcdGRpc3RhbmNlOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtaXRlbS1kaXN0YW5jZScpLFxuXHRcdFx0XHRiYWNrSG9sZGVyOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtaXRlbS1kYXRhLXNlY3Rpb24nKSxcblx0XHRcdFx0YmFjazogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWFsbCcpXG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0dmFyIGRvbSA9IGNyZWF0ZURvbShlbCk7XG5cblx0XHQvLyBuYW1lXG5cdFx0aWYgKGl0ZW0ubGFiZWwpXG5cdFx0XHRkb20ubGFiZWwudGV4dENvbnRlbnQgPSBpdGVtLmxhYmVsO1xuXHRcdGVsc2Vcblx0XHRcdGRvbS5wYXJlbnRFbC5yZW1vdmVDaGlsZChkb20ubGFiZWwpO1xuXHRcdFxuXHRcdC8vIGFkZHJlc3Nlc1xuXHRcdHZhciBhZGRyZXNzZXMgPSBwYXJzZUFkZHJlc3MoaXRlbS5hZGRyZXNzLmFkZHJlc3MpO1xuXHRcdGRvbS5hZGRyZXNzMS50ZXh0Q29udGVudCA9IGFkZHJlc3Nlcy5hZGRyZXNzMTtcblx0XHRkb20uYWRkcmVzczIudGV4dENvbnRlbnQgPSBhZGRyZXNzZXMuYWRkcmVzczI7XG5cdFx0ZG9tLmFkZHJlc3MuYXBwZW5kQ2hpbGQoZG9tLmFkZHJlc3MxKTtcblx0XHRkb20uYWRkcmVzcy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcblx0XHRkb20uYWRkcmVzcy5hcHBlbmRDaGlsZChkb20uYWRkcmVzczIpO1xuXHRcdGRvbS5saW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL21hcHMuZ29vZ2xlLmNvbS8/cT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGl0ZW0uYWRkcmVzcy5hZGRyZXNzKSk7XG5cdFx0ZG9tLmxpbmsuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG5cdFx0ZG9tLmRpc3RhbmNlLnRleHRDb250ZW50ID0gZGlzdGFuY2UoaXRlbSkgfHwgJyc7XG5cdFx0XG5cdFx0Ly8gZW1haWxcblx0XHRpZiAoaXRlbS5lbWFpbCkge1xuXHRcdFx0Y29uc3QgbGlua0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdFx0bGlua0VsLnNldEF0dHJpYnV0ZSgnaHJlZicsICdtYWlsdG86JyArIGl0ZW0uZW1haWwpO1xuXHRcdFx0bGlua0VsLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuXHRcdFx0bGlua0VsLnRleHRDb250ZW50ID0gaXRlbS5lbWFpbDtcblx0XHRcdGRvbS5lbWFpbC5hcHBlbmRDaGlsZChsaW5rRWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb20uZW1haWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb20uZW1haWwpO1xuXHRcdH1cblx0XHRcblx0XHQvLyBwaG9uZXNcblx0XHRpZiAoaXRlbS5waG9uZXMgJiYgaXRlbS5waG9uZXMubGVuZ3RoID4gMClcblx0XHRcdGNyZWF0ZVBob25lQXJyYXkoZG9tLnBob25lLCBpdGVtLnBob25lcyk7XG5cdFx0ZWxzZVxuXHRcdFx0ZG9tLnBob25lLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tLnBob25lKTtcblx0XHRcblx0XHQvLyBob3Vyc1xuXHRcdGlmIChpdGVtLmRheXMgJiYgaXRlbS5kYXlzLmxlbmd0aCA+IDApIHtcblx0XHRcdGNyZWF0ZUhvdXJzKGRvbS5ob3VycywgZG9tLm1vcmVIb3VycywgaXRlbS5kYXlzLCBpdGVtLmFkZHJlc3MudGltZXpvbmUpO1xuXHRcdFx0ZG9tLmhvdXJzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGRvbS5wYXJlbnRFbC5yZW1vdmVDaGlsZChkb20uaG91cnNCdXR0b24pO1xuXHRcdFx0XHRkb20ubW9yZUhvdXJzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBucyArICctbG9jYXRpb25zLWl0ZW0tZGF0YS1tb3JlLWhvdXJzJyk7XG5cdFx0XHRcdHB1Ymxpc2goJ2ZvY3VzLWlucHV0Jyk7XG5cdFx0XHRcdHB1Ymxpc2goJ3Njcm9sbC10by1ib3R0b20nKTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb20uaG91cnMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb20uaG91cnMpO1xuXHRcdFx0ZG9tLmhvdXJzQnV0dG9uLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tLmhvdXJzQnV0dG9uKTtcblx0XHR9XG5cblx0XHRpZiAobG9jYXRpb25EYXRhICYmIGxvY2F0aW9uRGF0YS5sZW5ndGggPiAxKSB7XG5cdFx0XHRkb20uYmFjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRwdWJsaXNoKCdyZWNlaXZlJywge1xuXHRcdFx0XHRcdG1lc3NhZ2U6IHtcblx0XHRcdFx0XHRcdHRleHQ6IFtzdHJpbmdzLmxvY2F0aW9ucy5saXN0XSxcblx0XHRcdFx0XHRcdGxheW91dDoge1xuXHRcdFx0XHRcdFx0XHRuYW1lOiAnc2hvdy1sb2NhdGlvbnMnXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0XHQvKiBqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG5cdFx0XHRcdFx0XHRcdGxvY2F0aW9uX2RhdGE6IGxvY2F0aW9uRGF0YVxuXHRcdFx0XHRcdFx0XHQvKiBqc2hpbnQgaWdub3JlOmVuZCAqL1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9tLmJhY2tIb2xkZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb20uYmFja0hvbGRlcik7XG5cdFx0fVxuXHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbCk7XG5cdFx0cmV0dXJuIGNvbnRhaW5lcjtcblx0fSxcblx0YWRkTG9jYXRpb25zOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgY3VycmVudCA9IGdldFN0YXRlKCk7XG5cdFx0dmFyIGNyZWF0ZURvbSA9IGZ1bmN0aW9uKGVsLCBpLCB1dWlkKSB7XG5cdFx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spO1xuXHRcdFx0ZWwuZGF0YXNldC51dWlkID0gdXVpZDtcblx0XHRcdGVsLmRhdGFzZXQuaWQgPSBpICsgMTtcblx0XHRcdHZhciB0ZXh0ID0gdGVtcGxhdGVzLmFkZExvY2F0aW9uc0l0ZW07XG5cdFx0XHRlbC5pbm5lckhUTUwgPSB1dGlscy5jb21waWxlKHRleHQsIHsgbnM6IG5zIH0pO1xuXHRcdFx0dGhpcy5ldmVudExpc3RlbmVycy5wdXNoKGVsKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGljb246IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWljb24nKSxcblx0XHRcdFx0bGFiZWw6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEtdGl0bGUnKSxcblx0XHRcdFx0YWRkcmVzczogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWl0ZW0tZGF0YS1hZGRyZXNzJyksXG5cdFx0XHRcdGFkZHJlc3MxOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG5cdFx0XHRcdGFkZHJlc3MyOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG5cdFx0XHRcdGRpc3RhbmNlOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtaXRlbS1kaXN0YW5jZScpXG5cdFx0XHR9O1xuXHRcdH07XG5cblx0XHR2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgKGkgPCBkaXNwbGF5TGVuZ3RoICYmIGkgPCB0aGlzLmRhdGEubGVuZ3RoKTsgaSsrKSB7XG5cdFx0XHR2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdHZhciBpdGVtID0gdGhpcy5kYXRhW2ldO1xuXHRcdFx0dmFyIGRvbSA9IGNyZWF0ZURvbS5jYWxsKHRoaXMsIGVsLCBpLCB0aGlzLnV1aWQpO1xuXHRcdFx0dmFyIGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0Ym94LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZm9udC13ZWlnaHQ6Ym9sZDsgY29sb3I6JyArIGN1cnJlbnQuc3R5bGVzLmFjY2VudFRleHQgKyAnOyBiYWNrZ3JvdW5kOiAnICsgY3VycmVudC5zdHlsZXMuYWNjZW50QmFja2dyb3VuZCArICc7IGxpbmUtaGVpZ2h0OiAyNHB4OyBoZWlnaHQ6MjRweDsgd2lkdGg6MjRweDsgbWFyZ2luLWxlZnQ6OHB4OycpO1xuXHRcdFx0Ym94LnRleHRDb250ZW50ID0gYWxwaGFNYXBbaV07XG5cdFx0XHRkb20uaWNvbi5hcHBlbmRDaGlsZChib3gpO1xuXHRcdFx0ZG9tLmxhYmVsLnRleHRDb250ZW50ID0gaXRlbS5sYWJlbCB8fCAnJztcblx0XHRcdHZhciBhZGRyZXNzZXMgPSBwYXJzZUFkZHJlc3MoaXRlbS5hZGRyZXNzLmFkZHJlc3MpO1xuXHRcdFx0ZG9tLmFkZHJlc3MxLnRleHRDb250ZW50ID0gYWRkcmVzc2VzLmFkZHJlc3MxO1xuXHRcdFx0ZG9tLmFkZHJlc3MyLnRleHRDb250ZW50ID0gYWRkcmVzc2VzLmFkZHJlc3MyO1xuXHRcdFx0ZG9tLmFkZHJlc3MuYXBwZW5kQ2hpbGQoZG9tLmFkZHJlc3MxKTtcblx0XHRcdGRvbS5hZGRyZXNzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuXHRcdFx0ZG9tLmFkZHJlc3MuYXBwZW5kQ2hpbGQoZG9tLmFkZHJlc3MyKTtcblx0XHRcdGRvbS5kaXN0YW5jZS50ZXh0Q29udGVudCA9IGRpc3RhbmNlKGl0ZW0pIHx8ICcnO1xuXHRcdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKGVsKTtcblx0XHR9XG5cdFx0cmV0dXJuIGNvbnRhaW5lcjtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzaG93TG9jYXRpb25zTGF5b3V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5JQk1DaGF0LW1hcCB7XFxuXFx0cGFkZGluZzogMCAwIDFlbSAwO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtaW1nIHtcXG5cXHRoZWlnaHQ6MTgwcHg7XFxufVxcblxcbi5JQk1DaGF0LW1hcC1pbWcgaW1nIHtcXG5cXHRoZWlnaHQ6MTgwcHg7XFxufVxcblxcbi5JQk1DaGF0LW1hcC1tdWx0aXBsZS1sb2NhdGlvbnMge1xcblxcdGN1cnNvcjogZGVmYXVsdDtcXG5cXHRvcGFjaXR5OjAuMztcXG5cXHRkaXNwbGF5OiB0YWJsZTtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLW11bHRpcGxlLWxvY2F0aW9ucyAuSUJNQ2hhdC1tYXAtbG9jYXRpb25zLXJvdyB7XFxuXFx0ZGlzcGxheTp0YWJsZS1yb3c7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5JQk1DaGF0LW1hcC1tdWx0aXBsZS1sb2NhdGlvbnMgLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1jZWxsIHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0d29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtbG9jYXRpb24tYWN0aXZlIC5JQk1DaGF0LW1hcC1tdWx0aXBsZS1sb2NhdGlvbnMge1xcblxcdG9wYWNpdHk6IDE7XFxufVxcblxcbi5JQk1DaGF0LW1hcC1jbGlja2FibGUgLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLklCTUNoYXQtbWFwLW11bHRpcGxlLWxvY2F0aW9ucyB7XFxuXFx0cGFkZGluZzogMWVtIDAgMWVtIDA7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdG9wYWNpdHk6IDE7XFxufVxcblxcbi5JQk1DaGF0LW1hcC1kYXRhLXNlY3Rpb24ge1xcblxcdG1hcmdpbi10b3A6MC41ZW07XFxufVxcblxcbi5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbSB7XFxuXFx0cGFkZGluZzogMWVtO1xcblxcdGJvcmRlci1ib3R0b206MXB4IHNvbGlkICM1MDUwNTA7XFxufVxcblxcblxcbi5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1pY29uIHtcXG5cXHR0ZXh0LWFsaWduOmNlbnRlcjtcXG5cXHR3aWR0aDogNDBweDtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWRhdGEge1xcblxcdHBhZGRpbmc6MCA0cHggMCA0cHg7XFxuXFx0Zm9udC1zaXplOjAuOWVtO1xcbn1cXG4uSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0tZGF0YS10aXRsZSB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0cGFkZGluZy1ib3R0b206MC41ZW07XFxufVxcbi5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1kYXRhLWl0ZW1zIHtcXG5cXHRmb250LXNpemU6IDAuOWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0tZGF0YS1zZWN0aW9uIHtcXG5cXHRwYWRkaW5nLWJvdHRvbToxZW07XFxufVxcblxcbi5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1kYXRhLWVtYWlsIHtcXG5cXHRwYWRkaW5nLWJvdHRvbToxZW07XFxufVxcblxcbi5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1kYXRhLXBob25lIHtcXG5cXHRkaXNwbGF5OiB0YWJsZTtcXG5cXHRtYXgtd2lkdGg6NDAwcHg7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0cGFkZGluZy1ib3R0b206MWVtO1xcbn1cXG4uSUJNQ2hhdC1tYXAtY29udGFjdC1yb3cge1xcblxcdHBhZGRpbmctYm90dG9tOjFlbTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWhvdXJzLW9wZW4ge1xcblxcdHBhZGRpbmctYm90dG9tOjAuNWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtY29udGFjdC10eXBlIHtcXG5cXHRmb250LXN0eWxlOml0YWxpYztcXG5cXHRmb250LXNpemU6MC45ZW07XFxufVxcbi5JQk1DaGF0LW1hcC1jb250YWN0LWRhdGEge1xcblxcbn1cXG5cXG5hLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWRhdGEtYWRkcmVzcy1saW5rLFxcbmEuSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0tZGF0YS1hZGRyZXNzLWxpbms6aG92ZXIsXFxuYS5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1kYXRhLWFkZHJlc3MtbGluazp2aXNpdGVkLFxcbmEuSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0tZGF0YS1hZGRyZXNzLWxpbms6YWN0aXZlLFxcbi5JQk1DaGF0LW1hcC1jb250YWN0LWRhdGEgYSxcXG4uSUJNQ2hhdC1tYXAtY29udGFjdC1kYXRhIGE6aG92ZXIsXFxuLklCTUNoYXQtbWFwLWNvbnRhY3QtZGF0YSBhOmFjdGl2ZSxcXG4uSUJNQ2hhdC1tYXAtY29udGFjdC1kYXRhIGE6dmlzaXRlZCB7XFxuXFx0Zm9udC13ZWlnaHQ6bm9ybWFsO1xcblxcdGZvbnQtc2l6ZTowLjllbTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWRpc3RhbmNlIHtcXG5cXHR3aWR0aDo2NHB4O1xcblxcdGZvbnQtc2l6ZTowLjllbTtcXG59XFxuXFxuYnV0dG9uLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWRhdGEtaG91cnMtYnV0dG9uIHtcXG5cXHRmb250LXNpemU6MC45ZW07XFxuXFx0cGFkZGluZzogMCAxZW0gMCAxZW07XFxuXFx0bGluZS1oZWlnaHQ6MS41ZW07XFxuXFx0bWFyZ2luLXRvcDoxZW07XFxufVxcblxcbmJ1dHRvbi5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtYWxsIHtcXG5cXHRmb250LXNpemU6MC45ZW07XFxuXFx0cGFkZGluZzogMCAxZW0gMCAxZW07XFxuXFx0bGluZS1oZWlnaHQ6MS41ZW07XFxufVxcblxcbi5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1kYXRhLW1vcmUtaG91cnMge1xcblxcdGRpc3BsYXk6IHRhYmxlO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0tZGF0YS1tb3JlLWhvdXJzLklCTUNoYXQtbWFwLWhpZGRlbiB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWRheXMtaG91cnMge1xcblxcdGRpc3BsYXk6IHRhYmxlLXJvdztcXG59XFxuXFxuLklCTUNoYXQtbWFwLWRheXMtaG91cnMtZGF5LCAuSUJNQ2hhdC1tYXAtZGF5cy1ob3Vycy1ob3VycywgLklCTUNoYXQtbWFwLWRheXMtaG91cnMtY2xvc2VkIHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOjAuNzVlbSAxZW0gMCAwO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0d29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtaG91cnMtdGltZXpvbmUge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXHRmb250LXNpemU6IDAuOGVtO1xcblxcdHBhZGRpbmctdG9wOiAwLjVlbTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWRheXMtaG91cnMgPiBkaXY6bGFzdC1jaGlsZCB7XFxuXFx0cGFkZGluZzogMC43NWVtIDAgMCAwICFpbXBvcnRhbnQ7XFxufVxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmF3LWxvYWRlciEuL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3N0eWxlcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4uL3N0YXRlJyk7XG5cbnZhciBldmVudHMgPSBbXTtcblxuZnVuY3Rpb24gY29tcGxldGVFdmVudChyZXNwb25zZSkge1xuXHRzd2l0Y2ggKHJlc3BvbnNlKSB7XG5cdGNhc2UgdHJ1ZTpcblx0XHRwdWJsaXNoKCdzZW5kJywge1xuXHRcdFx0bWVzc2FnZTogJ3N1Y2Nlc3MnLFxuXHRcdFx0c2lsZW50OiB0cnVlXG5cdFx0fSk7XG5cdFx0YnJlYWs7XG5cdGNhc2UgZmFsc2U6XG5cdFx0cHVibGlzaCgnc2VuZCcsIHtcblx0XHRcdG1lc3NhZ2U6ICdmYWlsdXJlJyxcblx0XHRcdHNpbGVudDogdHJ1ZVxuXHRcdH0pO1xuXHRcdGJyZWFrO1xuXHRkZWZhdWx0OlxuXHRcdHB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0XHRtZXNzYWdlOiAnY2FuY2VsJyxcblx0XHRcdHNpbGVudDogdHJ1ZVxuXHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdGV2ZW50cyA9IFtdO1xufVxuXG5mdW5jdGlvbiB1bnN1YnNjcmliZShldmVudCwgaGFuZGxlciwgY29udGV4dCkge1xuXHRpZiAodHlwZW9mIGNvbnRleHQgPT09IHVuZGVmaW5lZClcblx0XHRjb250ZXh0ID0gaGFuZGxlcjtcbn1cblxuZnVuY3Rpb24gY3VycmVudFN1YnNjcmlwdGlvbnMoKSB7XG5cdHJldHVybiBldmVudHMuc2xpY2UoMCk7XG59XG5cbmZ1bmN0aW9uIGhhc1N1YnNjcmlwdGlvbihhY3Rpb24pIHtcblx0dmFyIHN1YnNjcmlwdGlvbnMgPSBjdXJyZW50U3Vic2NyaXB0aW9ucygpO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN1YnNjcmlwdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgc3Vic2NyaXB0aW9uID0gc3Vic2NyaXB0aW9uc1tpXTtcblx0XHRpZiAoc3Vic2NyaXB0aW9uICYmIHN1YnNjcmlwdGlvbi5ldmVudCA9PT0gYWN0aW9uKVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnQsIGhhbmRsZXIsIGNvbnRleHQpIHtcblx0aWYgKHR5cGVvZiBjb250ZXh0ID09PSB1bmRlZmluZWQpXG5cdFx0Y29udGV4dCA9IGhhbmRsZXI7XG5cdHZhciBpbmRleCA9IGV2ZW50cy5wdXNoKHsgZXZlbnQ6IGV2ZW50LCBoYW5kbGVyOiBoYW5kbGVyLmJpbmQoY29udGV4dCkgfSkgLSAxO1xuXHRyZXR1cm4ge1xuXHRcdHJlbW92ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRkZWxldGUgZXZlbnRzW2luZGV4XTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2goZXZlbnQsIGRhdGEsIGNiKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0dmFyIHdhc1N1YnNjcmlwdGlvbiA9IGZhbHNlO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdGlmIChldmVudHNbaV0gJiYgZXZlbnRzW2ldLmV2ZW50ICYmIGV2ZW50c1tpXS5ldmVudCA9PT0gZXZlbnQpIHtcblx0XHRcdGlmIChjdXJyZW50LkRFQlVHKSB7XG5cdFx0XHRcdHdhc1N1YnNjcmlwdGlvbiA9IHRydWU7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdTdWJzY3JpcHRpb24gdG8gJyArIGV2ZW50ICsgJyB3YXMgY2FsbGVkOiAnLCBkYXRhKTtcblx0XHRcdH1cblx0XHRcdGV2ZW50c1tpXS5oYW5kbGVyLmNhbGwodW5kZWZpbmVkLCBkYXRhLCBjYik7XG5cdFx0fVxuXHR9XG5cdGlmIChjdXJyZW50LkRFQlVHICYmIGV2ZW50LmluZGV4T2YoJ2xheW91dCcpID09IC0xICYmICF3YXNTdWJzY3JpcHRpb24pXG5cdFx0Y29uc29sZS53YXJuKCdOb3RoaW5nIGlzIHN1YnNjcmliZWQgdG8gJyArIGV2ZW50KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGRlc3Ryb3k6IGRlc3Ryb3ksXG5cdHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZSxcblx0Y3VycmVudFN1YnNjcmlwdGlvbnM6IGN1cnJlbnRTdWJzY3JpcHRpb25zLFxuXHRoYXNTdWJzY3JpcHRpb246IGhhc1N1YnNjcmlwdGlvbixcblx0c3Vic2NyaWJlOiBzdWJzY3JpYmUsXG5cdHB1Ymxpc2g6IHB1Ymxpc2gsXG5cdGNvbXBsZXRlRXZlbnQ6IGNvbXBsZXRlRXZlbnRcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2V2ZW50cy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIHN0YXRlcyA9IFtdO1xudmFyIHN0YXRlID0ge307XG52YXIgYXNzaWduID0gcmVxdWlyZSgnbG9kYXNoL2Fzc2lnbicpO1xuXG5mdW5jdGlvbiBnZXRTdGF0ZSgpIHtcblx0cmV0dXJuIHN0YXRlO1xufVxuZnVuY3Rpb24gZGVzdHJveVN0YXRlKCkge1xuXHRzdGF0ZSA9IHt9O1xuXHRzZXRTdGF0ZSh7fSk7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXRlKHVwZGF0ZWQpIHtcblx0c3RhdGUgPSBhc3NpZ24oe30sIHN0YXRlLCB1cGRhdGVkKTtcblx0aWYgKHN0YXRlLkRFQlVHKSB7XG5cdFx0c3RhdGVzLnB1c2goc3RhdGUpO1xuXHRcdGNvbnNvbGUubG9nKCdTVEFURSBISVNUT1JZOiAnLCBzdGF0ZXMpO1xuXHRcdGNvbnNvbGUubG9nKCdORVcgU1RBVEU6ICcsIHN0YXRlKTtcblx0fVxufVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMoKSB7XG5cdHZhciBjdXJyZW50ID0gZ2V0U3RhdGUoKTtcblx0cmV0dXJuIGN1cnJlbnQuc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9maWxlKCkge1xuXHR2YXIgY3VycmVudCA9IGdldFN0YXRlKCk7XG5cdHJldHVybiBjdXJyZW50LnByb2ZpbGUgfHwge307XG59XG5cbmZ1bmN0aW9uIHNldFByb2ZpbGUoZGF0YSkge1xuXHRzZXRTdGF0ZSh7XG5cdFx0cHJvZmlsZTogYXNzaWduKHt9LCBnZXRQcm9maWxlKCksIGRhdGEpXG5cdH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9e1xuXHRnZXRTdGF0ZTogZ2V0U3RhdGUsXG5cdHNldFN0YXRlOiBzZXRTdGF0ZSxcblx0ZGVzdHJveVN0YXRlOiBkZXN0cm95U3RhdGUsXG5cdGdldFByb2ZpbGU6IGdldFByb2ZpbGUsXG5cdHNldFByb2ZpbGU6IHNldFByb2ZpbGUsXG5cdGdldFN0eWxlczogZ2V0U3R5bGVzXG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdGF0ZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25WYWx1ZScpLFxuICAgIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAgY3JlYXRlQXNzaWduZXIgPSByZXF1aXJlKCcuL19jcmVhdGVBc3NpZ25lcicpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKiBEZXRlY3QgaWYgcHJvcGVydGllcyBzaGFkb3dpbmcgdGhvc2Ugb24gYE9iamVjdC5wcm90b3R5cGVgIGFyZSBub24tZW51bWVyYWJsZS4gKi9cbnZhciBub25FbnVtU2hhZG93cyA9ICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgJ3ZhbHVlT2YnOiAxIH0sICd2YWx1ZU9mJyk7XG5cbi8qKlxuICogQXNzaWducyBvd24gZW51bWVyYWJsZSBzdHJpbmcga2V5ZWQgcHJvcGVydGllcyBvZiBzb3VyY2Ugb2JqZWN0cyB0byB0aGVcbiAqIGRlc3RpbmF0aW9uIG9iamVjdC4gU291cmNlIG9iamVjdHMgYXJlIGFwcGxpZWQgZnJvbSBsZWZ0IHRvIHJpZ2h0LlxuICogU3Vic2VxdWVudCBzb3VyY2VzIG92ZXJ3cml0ZSBwcm9wZXJ0eSBhc3NpZ25tZW50cyBvZiBwcmV2aW91cyBzb3VyY2VzLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBtdXRhdGVzIGBvYmplY3RgIGFuZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYE9iamVjdC5hc3NpZ25gXShodHRwczovL21kbi5pby9PYmplY3QvYXNzaWduKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMTAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHsuLi5PYmplY3R9IFtzb3VyY2VzXSBUaGUgc291cmNlIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICogQHNlZSBfLmFzc2lnbkluXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqIH1cbiAqXG4gKiBmdW5jdGlvbiBCYXIoKSB7XG4gKiAgIHRoaXMuYyA9IDM7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5iID0gMjtcbiAqIEJhci5wcm90b3R5cGUuZCA9IDQ7XG4gKlxuICogXy5hc3NpZ24oeyAnYSc6IDAgfSwgbmV3IEZvbywgbmV3IEJhcik7XG4gKiAvLyA9PiB7ICdhJzogMSwgJ2MnOiAzIH1cbiAqL1xudmFyIGFzc2lnbiA9IGNyZWF0ZUFzc2lnbmVyKGZ1bmN0aW9uKG9iamVjdCwgc291cmNlKSB7XG4gIGlmIChub25FbnVtU2hhZG93cyB8fCBpc1Byb3RvdHlwZShzb3VyY2UpIHx8IGlzQXJyYXlMaWtlKHNvdXJjZSkpIHtcbiAgICBjb3B5T2JqZWN0KHNvdXJjZSwga2V5cyhzb3VyY2UpLCBvYmplY3QpO1xuICAgIHJldHVybjtcbiAgfVxuICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH1cbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2Fzc2lnbi5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gIGlmICghKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGVxKG9ialZhbHVlLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ25WYWx1ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fYXNzaWduVmFsdWUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXE7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvZXEuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYXNzaWduVmFsdWUnKTtcblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb3BpZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weU9iamVjdChzb3VyY2UsIHByb3BzLCBvYmplY3QsIGN1c3RvbWl6ZXIpIHtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgPyBjdXN0b21pemVyKG9iamVjdFtrZXldLCBzb3VyY2Vba2V5XSwga2V5LCBvYmplY3QsIHNvdXJjZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlID09PSB1bmRlZmluZWQgPyBzb3VyY2Vba2V5XSA6IG5ld1ZhbHVlKTtcbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlPYmplY3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2NvcHlPYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGJhc2VSZXN0ID0gcmVxdWlyZSgnLi9fYmFzZVJlc3QnKSxcbiAgICBpc0l0ZXJhdGVlQ2FsbCA9IHJlcXVpcmUoJy4vX2lzSXRlcmF0ZWVDYWxsJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIGxpa2UgYF8uYXNzaWduYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gYXNzaWduZXIgVGhlIGZ1bmN0aW9uIHRvIGFzc2lnbiB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhc3NpZ25lciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQXNzaWduZXIoYXNzaWduZXIpIHtcbiAgcmV0dXJuIGJhc2VSZXN0KGZ1bmN0aW9uKG9iamVjdCwgc291cmNlcykge1xuICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBzb3VyY2VzLmxlbmd0aCxcbiAgICAgICAgY3VzdG9taXplciA9IGxlbmd0aCA+IDEgPyBzb3VyY2VzW2xlbmd0aCAtIDFdIDogdW5kZWZpbmVkLFxuICAgICAgICBndWFyZCA9IGxlbmd0aCA+IDIgPyBzb3VyY2VzWzJdIDogdW5kZWZpbmVkO1xuXG4gICAgY3VzdG9taXplciA9IChhc3NpZ25lci5sZW5ndGggPiAzICYmIHR5cGVvZiBjdXN0b21pemVyID09ICdmdW5jdGlvbicpXG4gICAgICA/IChsZW5ndGgtLSwgY3VzdG9taXplcilcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKGd1YXJkICYmIGlzSXRlcmF0ZWVDYWxsKHNvdXJjZXNbMF0sIHNvdXJjZXNbMV0sIGd1YXJkKSkge1xuICAgICAgY3VzdG9taXplciA9IGxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiBjdXN0b21pemVyO1xuICAgICAgbGVuZ3RoID0gMTtcbiAgICB9XG4gICAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIHZhciBzb3VyY2UgPSBzb3VyY2VzW2luZGV4XTtcbiAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgYXNzaWduZXIob2JqZWN0LCBzb3VyY2UsIGluZGV4LCBjdXN0b21pemVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQXNzaWduZXI7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2NyZWF0ZUFzc2lnbmVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhcHBseSA9IHJlcXVpcmUoJy4vX2FwcGx5Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5yZXN0YCB3aGljaCBkb2Vzbid0IHZhbGlkYXRlIG9yIGNvZXJjZSBhcmd1bWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVJlc3QoZnVuYywgc3RhcnQpIHtcbiAgc3RhcnQgPSBuYXRpdmVNYXgoc3RhcnQgPT09IHVuZGVmaW5lZCA/IChmdW5jLmxlbmd0aCAtIDEpIDogc3RhcnQsIDApO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG5hdGl2ZU1heChhcmdzLmxlbmd0aCAtIHN0YXJ0LCAwKSxcbiAgICAgICAgYXJyYXkgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGFycmF5W2luZGV4XSA9IGFyZ3Nbc3RhcnQgKyBpbmRleF07XG4gICAgfVxuICAgIGluZGV4ID0gLTE7XG4gICAgdmFyIG90aGVyQXJncyA9IEFycmF5KHN0YXJ0ICsgMSk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBzdGFydCkge1xuICAgICAgb3RoZXJBcmdzW2luZGV4XSA9IGFyZ3NbaW5kZXhdO1xuICAgIH1cbiAgICBvdGhlckFyZ3Nbc3RhcnRdID0gYXJyYXk7XG4gICAgcmV0dXJuIGFwcGx5KGZ1bmMsIHRoaXMsIG90aGVyQXJncyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVJlc3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2Jhc2VSZXN0LmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQSBmYXN0ZXIgYWx0ZXJuYXRpdmUgdG8gYEZ1bmN0aW9uI2FwcGx5YCwgdGhpcyBmdW5jdGlvbiBpbnZva2VzIGBmdW5jYFxuICogd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgYHRoaXNBcmdgIGFuZCB0aGUgYXJndW1lbnRzIG9mIGBhcmdzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaW52b2tlLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIFRoZSBhcmd1bWVudHMgdG8gaW52b2tlIGBmdW5jYCB3aXRoLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5KGZ1bmMsIHRoaXNBcmcsIGFyZ3MpIHtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnKTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgfVxuICByZXR1cm4gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcHBseTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fYXBwbHkuanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBhcmd1bWVudHMgYXJlIGZyb20gYW4gaXRlcmF0ZWUgY2FsbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIHZhbHVlIGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBpbmRleCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIGluZGV4IG9yIGtleSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgb2JqZWN0IGFyZ3VtZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBhcmd1bWVudHMgYXJlIGZyb20gYW4gaXRlcmF0ZWUgY2FsbCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSXRlcmF0ZWVDYWxsKHZhbHVlLCBpbmRleCwgb2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiBpbmRleDtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcidcbiAgICAgICAgPyAoaXNBcnJheUxpa2Uob2JqZWN0KSAmJiBpc0luZGV4KGluZGV4LCBvYmplY3QubGVuZ3RoKSlcbiAgICAgICAgOiAodHlwZSA9PSAnc3RyaW5nJyAmJiBpbmRleCBpbiBvYmplY3QpXG4gICAgICApIHtcbiAgICByZXR1cm4gZXEob2JqZWN0W2luZGV4XSwgdmFsdWUpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0l0ZXJhdGVlQ2FsbDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9faXNJdGVyYXRlZUNhbGwuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaXNBcnJheUxpa2UuanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOC05IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBpc09iamVjdCh2YWx1ZSkgPyBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzRnVuY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaXNPYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzTGVuZ3RoLmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpICYmXG4gICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2lzSW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUHJvdG90eXBlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19pc1Byb3RvdHlwZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gva2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYmFzZVRpbWVzID0gcmVxdWlyZSgnLi9fYmFzZVRpbWVzJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICAvLyBTYWZhcmkgOC4xIG1ha2VzIGBhcmd1bWVudHMuY2FsbGVlYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICAvLyBTYWZhcmkgOSBtYWtlcyBgYXJndW1lbnRzLmxlbmd0aGAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgdmFyIHJlc3VsdCA9IChpc0FycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkpXG4gICAgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpXG4gICAgOiBbXTtcblxuICB2YXIgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aCxcbiAgICAgIHNraXBJbmRleGVzID0gISFsZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoa2V5ID09ICdsZW5ndGgnIHx8IGlzSW5kZXgoa2V5LCBsZW5ndGgpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlMaWtlS2V5cztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUaW1lcztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fYmFzZVRpbWVzLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc0FycmF5TGlrZU9iamVjdCA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2VPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIC8vIFNhZmFyaSA4LjEgbWFrZXMgYGFyZ3VtZW50cy5jYWxsZWVgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIHJldHVybiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgKCFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgfHwgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gYXJnc1RhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaXNBcmd1bWVudHMuanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5pc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxuICogaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LWxpa2Ugb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZU9iamVjdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc0FycmF5TGlrZU9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaXNBcnJheS5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXMgPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5cztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fYmFzZUtleXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJBcmc7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX292ZXJBcmcuanNcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgc3RhdGUgPSByZXF1aXJlKCcuLi9zdGF0ZScpO1xudmFyIHdyaXRlTWVzc2FnZSA9IHJlcXVpcmUoJy4vd3JpdGVNZXNzYWdlJyk7XG5cbmZ1bmN0aW9uIF9yZW5kZXIoZWwsIHN0YXRlKSB7XG5cdGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnSUJNQ2hhdC1pYm0tc3Bpbm5lciBJQk1DaGF0LWlucHV0LWxvYWRpbmcgSUJNQ2hhdC0nICsgc3RhdGUgKyAnLXNwaW4nKTtcbn1cblxudmFyIHNwaW5uZXIgPSB7XG5cdHNob3c6IGZ1bmN0aW9uKGVsKSB7XG5cdFx0X3JlbmRlcihlbCwgJ2luaXQnKTtcblx0fSxcblx0aGlkZTogZnVuY3Rpb24oZWwpIHtcblx0XHRfcmVuZGVyKGVsLCAnZW5kJyk7XG5cdH1cbn07XG5cbmZ1bmN0aW9uIF9nZXRTdHlsZXMoY3VycmVudCkge1xuXHR2YXIgY29udGFpbmVyQ2xhc3MgPSBcIi5jaGF0SUQtXCIgKyBjdXJyZW50LmNoYXRJRDtcblx0dmFyIHN0eWxlcyA9IGNvbnRhaW5lckNsYXNzICsgXCIgLklCTUNoYXQtZGVmYXVsdC1jb2xvcnMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogXCIgKyBjdXJyZW50LnN0eWxlcy5iYWNrZ3JvdW5kICsgXCI7XFxuICBjb2xvcjogXCIgKyBjdXJyZW50LnN0eWxlcy50ZXh0ICsgXCI7XFxufVxcblwiICtcblx0XHRcdFx0XHRcdFx0Y29udGFpbmVyQ2xhc3MgKyBcIiAuSUJNQ2hhdC1zZWNvbmRhcnktY29sb3JzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IFwiICsgY3VycmVudC5zdHlsZXMuc2Vjb25kYXJ5QmFja2dyb3VuZCArIFwiO1xcbiAgY29sb3I6IFwiICsgY3VycmVudC5zdHlsZXMuc2Vjb25kYXJ5VGV4dCArIFwiO1xcbn1cXG5cIiArXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lckNsYXNzICsgXCIgLklCTUNoYXQtYWNjZW50LWNvbG9ycyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiArIGN1cnJlbnQuc3R5bGVzLmFjY2VudEJhY2tncm91bmQgKyBcIjtcXG4gIGNvbG9yOiBcIiArIGN1cnJlbnQuc3R5bGVzLmFjY2VudFRleHQgKyBcIjtcXG59XFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRjb250YWluZXJDbGFzcyArIFwiIC5JQk1DaGF0LWlucHV0LWNvbG9ycyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiArIGN1cnJlbnQuc3R5bGVzLmlucHV0QmFja2dyb3VuZCArIFwiO1xcbiAgY29sb3I6IFwiICsgY3VycmVudC5zdHlsZXMuaW5wdXRUZXh0ICsgXCI7XFxufVxcblwiICtcblx0XHRcdFx0XHRcdFx0Y29udGFpbmVyQ2xhc3MgKyBcIiAuSUJNQ2hhdC13YXRzb24tbWVzc2FnZS10aGVtZSB7XFxuXFx0Ym9yZGVyLWxlZnQ6IDNweCBzb2xpZCBcIiArIGN1cnJlbnQuc3R5bGVzLmFjY2VudEJhY2tncm91bmQgKyBcIjtcXG59XFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRjb250YWluZXJDbGFzcyArIFwiIGEsXFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRjb250YWluZXJDbGFzcyArIFwiIGE6aG92ZXIsXFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRjb250YWluZXJDbGFzcyArIFwiIGE6dmlzaXRlZCxcXG5cIiArXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lckNsYXNzICsgXCIgYTphY3RpdmUge1xcblxcdGNvbG9yOiBcIiArIGN1cnJlbnQuc3R5bGVzLmxpbmsgKyBcIjtcXG59XFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRjb250YWluZXJDbGFzcyArIFwiIC5JQk1DaGF0LWNoYXQtdGV4dGJveC10aGVtZSB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggXCIgKyBjdXJyZW50LnN0eWxlcy50ZXh0ICsgXCI7XFxufVxcblwiICtcblx0XHRcdFx0XHRcdFx0Y29udGFpbmVyQ2xhc3MgKyBcIiAuSUJNQ2hhdC1jaGF0LXRleHRib3gtdGhlbWU6Zm9jdXMge1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IFwiICsgY3VycmVudC5zdHlsZXMuYWNjZW50QmFja2dyb3VuZCArIFwiO1xcbn1cXG5cIiArXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lckNsYXNzICsgXCIgLklCTUNoYXQtaWJtLXNwaW5uZXIge1xcblxcdHN0cm9rZTogXCIgKyBjdXJyZW50LnN0eWxlcy5hY2NlbnRCYWNrZ3JvdW5kICsgXCI7XFxufVwiO1xuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuXHR2YXIgdGltZW91dDtcblx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcblx0XHR2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdHRpbWVvdXQgPSBudWxsO1xuXHRcdFx0aWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG5cdFx0fTtcblx0XHR2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuXHRcdGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiBzZXJpYWxpemUob2JqKSB7XG5cdGNvbnN0IHN0ciA9IFtdO1xuXHRmb3IgKHZhciBwIGluIG9iaikge1xuXHRcdGlmIChvYmouaGFzT3duUHJvcGVydHkocCkpXG5cdFx0XHRzdHIucHVzaChlbmNvZGVVUklDb21wb25lbnQocCkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW3BdKSk7XG5cdH1cblx0cmV0dXJuIHN0ci5qb2luKCcmJyk7XG59XG5cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG5cdGlmIChvcHRpb25zICYmIE9iamVjdC5rZXlzKG9wdGlvbnMpLmxlbmd0aCA+IDApIHtcblx0XHRPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuXHRcdFx0c3RyID0gc3RyLnNwbGl0KCckeycgKyBrZXkgKyAnfScpLmpvaW4ob3B0aW9uc1trZXldKTtcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gc3RyO1xufVxuXG5mdW5jdGlvbiBnZXRVVUlEKCkge1xuXHR2YXIgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHRpZiAoIHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB0eXBlb2Ygd2luZG93LnBlcmZvcm1hbmNlLm5vdyA9PT0gJ2Z1bmN0aW9uJyApXG5cdFx0ZCArPSBwZXJmb3JtYW5jZS5ub3coKTtcblx0cmV0dXJuICdJQk1DaGF0LScgKyAoJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbihjKSB7XG5cdFx0dmFyIHIgPSAoZCArIE1hdGgucmFuZG9tKCkqMTYpJTE2IHwgMDtcblx0XHRkID0gTWF0aC5mbG9vcihkLzE2KTtcblx0XHRyZXR1cm4gKCggYyA9PSAneCcgPyByIDogKHImMHgzfDB4OCkpLnRvU3RyaW5nKDE2KSk7XG5cdH0pKTtcbn1cblxuZnVuY3Rpb24gX2F0dGFjaFN0eWxlc1RvRE9NKHN0eWxlcykge1xuXHR2YXIgY3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblx0Y3NzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdGlmIChjc3Muc3R5bGVTaGVldClcblx0XHRjc3Muc3R5bGVTaGVldC5jc3NUZXh0ID0gc3R5bGVzO1xuXHRlbHNlXG5cdFx0Y3NzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0eWxlcykpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoY3NzKTtcbn1cblxuZnVuY3Rpb24gYXR0YWNoUGxheWJhY2tTdHlsZXMoY2hhdElEKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKVtjaGF0SURdO1xuXHR2YXIgc3R5bGVzID0gX2dldFN0eWxlcyhjdXJyZW50KTtcblx0X2F0dGFjaFN0eWxlc1RvRE9NKHN0eWxlcyk7XG59XG5cbmZ1bmN0aW9uIGF0dGFjaFN0eWxlcygpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHR2YXIgc3R5bGVzID0gX2dldFN0eWxlcyhjdXJyZW50KTtcblx0X2F0dGFjaFN0eWxlc1RvRE9NKHN0eWxlcyk7XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuXHR2YXIgdGhhdENsYXNzID0gXCIgXCIgKyBjbGFzc05hbWUgKyBcIiBcIjtcblx0cmV0dXJuICggKFwiIFwiICsgZWxlbWVudC5jbGFzc05hbWUgKyBcIiBcIikucmVwbGFjZSgvW1xcblxcdF0vZywgXCIgXCIpLmluZGV4T2YodGhhdENsYXNzKSA+IC0xICk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRkZWJvdW5jZTogZGVib3VuY2UsXG5cdHNlcmlhbGl6ZTogc2VyaWFsaXplLFxuXHRoYXNDbGFzczogaGFzQ2xhc3MsXG5cdGdldFVVSUQ6IGdldFVVSUQsXG5cdGF0dGFjaFN0eWxlczogYXR0YWNoU3R5bGVzLFxuXHRhdHRhY2hQbGF5YmFja1N0eWxlczogYXR0YWNoUGxheWJhY2tTdHlsZXMsXG5cdHNwaW5uZXI6IHNwaW5uZXIsXG5cdGNvbXBpbGU6IGNvbXBpbGUsXG5cdHdyaXRlTWVzc2FnZTogd3JpdGVNZXNzYWdlXG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy91dGlscy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvL1RPRE86IHdlIGFsc28gbmVlZCB0byBzbmlmZiBmb3IgZW1haWxzXG5cbmZ1bmN0aW9uIHdyaXRlTWVzc2FnZShlbGVtZW50LCB0ZXh0KSB7XG5cdHZhciBleHAgPSAvKCgoaHR0cHM/OlxcL1xcLyl8KHd3d1xcLikpW15cXHNdKykvZ2k7XG5cdHZhciBsaW5rZWQgPSB0ZXh0LnJlcGxhY2UoZXhwLCd8fHwkMXx8fCcpO1xuXHR2YXIgYXJyID0gbGlua2VkLnNwbGl0KCd8fHwnKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0dmFyIG5ld3RleHQgPSBhcnJbaV0ucmVwbGFjZShleHAsICc8YSBocmVmPVwiJDFcIiB0YXJnZXQ9XCJfYmxhbmtcIj4kMTwvYT4nKTtcblx0XHRpZiAobmV3dGV4dCA9PT0gYXJyW2ldKVxuXHRcdFx0Y2hpbGQgPSBfYWRkTGluZUVuZGluZ3MoY2hpbGQsIG5ld3RleHQpO1xuXHRcdGVsc2Vcblx0XHRcdGNoaWxkLmlubmVySFRNTCA9IG5ld3RleHQ7XG5cdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gX2FkZExpbmVFbmRpbmdzKGVsLCBuZXd0ZXh0KSB7XG5cdHZhciBhcnIgPSBuZXd0ZXh0LnNwbGl0KCdcXG4nKTtcblx0aWYgKGFyci5sZW5ndGggPT09IDEpIHtcblx0XHRlbC50ZXh0Q29udGVudCA9IGFyclswXTtcblx0fSBlbHNlIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGFycltpXS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHZhciBjaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0Y2hpbGQudGV4dENvbnRlbnQgPSBhcnJbaV07XG5cdFx0XHRcdGVsLmFwcGVuZENoaWxkKGNoaWxkKTtcblx0XHRcdH1cblx0XHRcdGlmIChpIDwgYXJyLmxlbmd0aCAtIDEpXG5cdFx0XHRcdGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZWw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd3JpdGVNZXNzYWdlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy91dGlscy93cml0ZU1lc3NhZ2UuanNcbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIiR7bnN9XFxcIj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1pbWdcXFwiPjwvZGl2PlxcblxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWRhdGEgJHtuc30tY2xpY2thYmxlXFxcIj48L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy90ZW1wbGF0ZXMvYmFzZS5odG1sXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCIke25zfS1jb250YWN0LXR5cGVcXFwiPjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcIiR7bnN9LWNvbnRhY3QtZGF0YVxcXCI+PC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvdGVtcGxhdGVzL2NyZWF0ZS1kb20tYXJyYXkuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0gJHtuc30tbXVsdGlwbGUtbG9jYXRpb25zICR7bnN9LWRhdGEtc2VjdGlvbiBJQk1DaGF0LXNlY29uZGFyeS1jb2xvcnNcXFwiPlxcblxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1yb3dcXFwiPlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWljb24gJHtuc30tbG9jYXRpb25zLWNlbGxcXFwiPjwvZGl2PlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEgJHtuc30tbG9jYXRpb25zLWNlbGxcXFwiPlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtdGl0bGVcXFwiPjwvZGl2PlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtaXRlbXNcXFwiPlxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtYWRkcmVzc1xcXCI+PC9kaXY+XFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0tZGlzdGFuY2VcXFwiPjwvZGl2PlxcblxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdDwvZGl2PlxcblxcdDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3RlbXBsYXRlcy9hZGQtbG9jYXRpb25zLWl0ZW0uaHRtbFxuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0gJHtuc30tZGF0YS1zZWN0aW9uIElCTUNoYXQtc2Vjb25kYXJ5LWNvbG9yc1xcXCI+XFxuXFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0tZGF0YS1zZWN0aW9uXFxcIj5cXG5cXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtYWxsIElCTUNoYXQtYWNjZW50LWNvbG9yc1xcXCI+QmFjayB0byBBbGwgTG9jYXRpb25zPC9idXR0b24+XFxuXFx0PC9kaXY+XFxuXFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0tZGF0YVxcXCI+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0tZGF0YS10aXRsZVxcXCI+PC9kaXY+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0tZGF0YS1pdGVtc1xcXCI+XFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0tZGF0YS1zZWN0aW9uXFxcIj5cXG5cXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0tZGF0YS1hZGRyZXNzLWxpbmtcXFwiPlxcblxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtYWRkcmVzc1xcXCI+PC9kaXY+XFxuXFx0XFx0XFx0XFx0PC9hPlxcblxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtZW1haWxcXFwiPjwvZGl2PlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtcGhvbmVcXFwiPjwvZGl2PlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtdGltZXpvbmVcXFwiPjwvZGl2PlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtaG91cnNcXFwiPjwvZGl2PlxcblxcdFxcdDwvZGl2PlxcblxcdFxcdDxidXR0b24gY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtaG91cnMtYnV0dG9uIElCTUNoYXQtYWNjZW50LWNvbG9yc1xcXCI+TW9yZSBIb3VyczwvYnV0dG9uPlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtaXRlbXNcXFwiPlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtbW9yZS1ob3VycyAke25zfS1oaWRkZW5cXFwiPjwvZGl2PlxcblxcdFxcdDwvZGl2PlxcblxcdDwvZGl2PlxcblxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRpc3RhbmNlXFxcIj48L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy90ZW1wbGF0ZXMvYWRkLWxvY2F0aW9uLWl0ZW0uaHRtbFxuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiJHtuc30tZGF5cy1ob3Vycy1kYXlcXFwiPlxcblxcdCR7ZGF5fVxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcIiR7bnN9LWRheXMtaG91cnMtaG91cnNcXFwiPlxcblxcdENsb3NlZFxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3RlbXBsYXRlcy9ob3Vycy1jbG9zZWQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiJHtuc30tZGF5cy1ob3Vycy1kYXlcXFwiPlxcblxcdCR7ZGF5fVxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcIiR7bnN9LWRheXMtaG91cnMtaG91cnNcXFwiPlxcblxcdCR7b3Blbn0gJm5kYXNoOyAke2Nsb3NlfVxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3RlbXBsYXRlcy9ob3Vycy1vcGVuLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIiR7bnN9LWhvdXJzLW9wZW5cXFwiPk9wZW4gdG9kYXk6PC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwiJHtuc30taG91cnMtdG9kYXlcXFwiPlxcblxcdCR7b3Blbn0gJm5kYXNoOyAke2Nsb3NlfVxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcIiR7bnN9LWhvdXJzLXRpbWV6b25lXFxcIj4oICR7dGltZXpvbmV9ICk8L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy90ZW1wbGF0ZXMvaG91cnMtdG9kYXktb3Blbi5odG1sXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCIke25zfS1ob3Vycy1vcGVuXFxcIj5DbG9zZWQgdG9kYXkuPC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwiJHtuc30taG91cnMtdGltZXpvbmVcXFwiPiggJHt0aW1lem9uZX0gKTwvZGl2PlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3RlbXBsYXRlcy9ob3Vycy10b2RheS1jbG9zZWQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcbnZhciBzdWJzY3JpYmUgPSBldmVudHMuc3Vic2NyaWJlO1xudmFyIHB1Ymxpc2ggPSBldmVudHMucHVibGlzaDtcblxudmFyIHJlcXVlc3RHZW9sb2NhdGlvbkxhdGxvbmdzID0gW107XG5cbnZhciBMT0NBVElPTl9USU1FT1VUID0gMjAgKiAxMDAwO1xuXG52YXIgcmVxdWVzdEdlb2xvY2F0aW9uTGF0bG9uZ0xheW91dCA9IHtcblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0c3Vic2NyaWJlKCdsYXlvdXQ6cmVxdWVzdC1nZW9sb2NhdGlvbi1sYXRsb25nJywgZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0dmFyIHJlcXVlc3RHZW9sb2NhdGlvbkxhdGxvbmcgPSBuZXcgUmVxdWVzdEdlb2xvY2F0aW9uTGF0bG9uZyhkYXRhKTtcblx0XHRcdHJlcXVlc3RHZW9sb2NhdGlvbkxhdGxvbmdzW2RhdGEudXVpZF0gPSByZXF1ZXN0R2VvbG9jYXRpb25MYXRsb25nO1xuXHRcdH0pO1xuXHR9XG59O1xuXG5mdW5jdGlvbiBSZXF1ZXN0R2VvbG9jYXRpb25MYXRsb25nKGRhdGEpIHtcblx0dGhpcy5pbml0KGRhdGEpO1xufVxuXG5SZXF1ZXN0R2VvbG9jYXRpb25MYXRsb25nLnByb3RvdHlwZSA9IHtcblx0aW5pdDogZnVuY3Rpb24oZGF0YSkge1xuXHRcdHRoaXMuZGF0YSA9IGRhdGEuZGF0YTtcblx0XHR0aGlzLnV1aWQgPSBkYXRhLnV1aWQ7XG5cdFx0dGhpcy5wYXJlbnRFbGVtZW50ID0gZGF0YS5lbGVtZW50O1xuXHRcdHRoaXMubGF5b3V0RWxlbWVudCA9IGRhdGEubGF5b3V0RWxlbWVudDtcblx0XHR0aGlzLnRpbWVkT3V0ID0gZmFsc2U7XG5cdFx0dGhpcy50aW1lb3V0Q2hlY2sgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy50aW1lZE91dCA9IHRydWU7XG5cdFx0XHR0aGlzLmhhbmRsZUxvY2F0aW9uTm90U2hhcmVkKCk7XG5cdFx0fS5iaW5kKHRoaXMpLCBMT0NBVElPTl9USU1FT1VUKTtcblx0XHRwdWJsaXNoKCdlbmFibGUtbG9hZGluZycpO1xuXHRcdHB1Ymxpc2goJ2Rpc2FibGUtaW5wdXQnKTtcblx0XHRuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxuXHRcdFx0ZnVuY3Rpb24ocG9zaXRpb24pIHtcblx0XHRcdFx0aWYgKHRoaXMudGltZWRPdXQpIHJldHVybiBmYWxzZTtcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZW91dENoZWNrKTtcblx0XHRcdFx0dGhpcy5oYW5kbGVMb2NhdGlvblNoYXJlZChwb3NpdGlvbik7XG5cdFx0XHR9LmJpbmQodGhpcyksXG5cdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKHRoaXMudGltZWRPdXQpIHJldHVybiBmYWxzZTtcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZW91dENoZWNrKTtcblx0XHRcdFx0dGhpcy5oYW5kbGVMb2NhdGlvbk5vdFNoYXJlZCgpO1xuXHRcdFx0fS5iaW5kKHRoaXMpLFxuXHRcdFx0eyB0aW1lb3V0OiBMT0NBVElPTl9USU1FT1VUIH1cblx0XHQpO1xuXHR9LFxuXHRoYW5kbGVMb2NhdGlvblNoYXJlZDogZnVuY3Rpb24ocG9zaXRpb24pIHtcblx0XHRwdWJsaXNoKCdlbmFibGUtaW5wdXQnKTtcblx0XHRwdWJsaXNoKCdkaXNhYmxlLWxvYWRpbmcnKTtcblx0XHRwdWJsaXNoKCdzZW5kJywge1xuXHRcdFx0dGV4dDogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlICsgJywnICsgcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSxcblx0XHRcdHNpbGVudDogdHJ1ZVxuXHRcdH0pO1xuXHR9LFxuXHRoYW5kbGVMb2NhdGlvbk5vdFNoYXJlZDogZnVuY3Rpb24oKSB7XG5cdFx0cHVibGlzaCgnZW5hYmxlLWlucHV0Jyk7XG5cdFx0cHVibGlzaCgnZGlzYWJsZS1sb2FkaW5nJyk7XG5cdFx0cHVibGlzaCgncmVjZWl2ZScsIFwiWW91IGhhdmVuJ3Qgc2hhcmVkIHlvdXIgbG9jYXRpb24gb24gdGhpcyB3ZWJzaXRlLlwiKTtcblx0XHRwdWJsaXNoKCdzZW5kJywge1xuXHRcdFx0dGV4dDogJ2ZpbmQgbmVhcmVzdCBsb2NhdGlvbnMnLFxuXHRcdFx0c2lsZW50OiB0cnVlXG5cdFx0fSk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWVzdEdlb2xvY2F0aW9uTGF0bG9uZ0xheW91dDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9yZXF1ZXN0LWdlb2xvY2F0aW9uLWxhdGxvbmcvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG5yZXF1aXJlKCcuL3N0eWxlcy5jc3MnKTtcblxudmFyIGV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2V2ZW50cycpO1xudmFyIHN1YnNjcmliZSA9IGV2ZW50cy5zdWJzY3JpYmU7XG52YXIgcHVibGlzaCA9IGV2ZW50cy5wdWJsaXNoO1xudmFyIGFjdGl2ZUNsYXNzTmFtZSA9ICdJQk1DaGF0LWFjY2VudC1jb2xvcnMnO1xudmFyIGluYWN0aXZlQ2xhc3NOYW1lID0gJ0lCTUNoYXQtc2Vjb25kYXJ5LWNvbG9ycyc7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xuXG52YXIgbnMgPSAnSUJNQ2hhdC1pc2xvY2F0aW9uYXBpJztcbnZhciBjaG9vc2VMb2NhdGlvblR5cGVzID0gW107XG5cbnZhciBjaG9vc2VMb2NhdGlvblR5cGVMYXlvdXQgPSB7XG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHN1YnNjcmliZSgnbGF5b3V0OmNob29zZS1sb2NhdGlvbi10eXBlJywgZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0dmFyIGNob29zZUxvY2F0aW9uVHlwZSA9IG5ldyBDaG9vc2VMb2NhdGlvblR5cGUoZGF0YSk7XG5cdFx0XHRjaG9vc2VMb2NhdGlvblR5cGVzW2RhdGEudXVpZF0gPSBjaG9vc2VMb2NhdGlvblR5cGU7XG5cdFx0fSk7XG5cdH1cbn07XG5cbnZhciB2YWx1ZXMgPSB7XG5cdHBvc3RhbGNvZGU6ICd6aXBjb2RlJyxcblx0Z2VvbG9jYXRpb246ICdsYXRsb25nJ1xufTtcblxudmFyIHRlbXBsYXRlcyA9IHtcblx0YmFzZTogcmVxdWlyZSgnLi90ZW1wbGF0ZXMvYmFzZS5odG1sJylcbn07XG5cbmZ1bmN0aW9uIENob29zZUxvY2F0aW9uVHlwZShkYXRhKSB7XG5cdHRoaXMuaW5pdChkYXRhKTtcbn1cblxuQ2hvb3NlTG9jYXRpb25UeXBlLnByb3RvdHlwZSA9IHtcblx0aW5pdDogZnVuY3Rpb24oZGF0YSkge1xuXHRcdHRoaXMuZGF0YSA9IGRhdGEuZGF0YTtcblx0XHR0aGlzLnV1aWQgPSBkYXRhLnV1aWQ7XG5cdFx0aWYgKCduYXZpZ2F0b3InIGluIHdpbmRvdyAmJiAnZ2VvbG9jYXRpb24nIGluIG5hdmlnYXRvcikge1xuXHRcdFx0dGhpcy5ldmVudExpc3RlbmVycyA9IFtdO1xuXHRcdFx0dGhpcy5wYXJlbnRFbGVtZW50ID0gZGF0YS5lbGVtZW50O1xuXHRcdFx0dGhpcy5sYXlvdXRFbGVtZW50ID0gZGF0YS5sYXlvdXRFbGVtZW50O1xuXHRcdFx0dGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0dGhpcy5lbC5pbm5lckhUTUwgPSB1dGlscy5jb21waWxlKHRlbXBsYXRlcy5iYXNlLCB7XG5cdFx0XHRcdG5zOiBucyxcblx0XHRcdFx0J3ZhbHVlcy5nZW9sb2NhdGlvbic6IHZhbHVlcy5nZW9sb2NhdGlvbixcblx0XHRcdFx0J3ZhbHVlcy5wb3N0YWxjb2RlJzogdmFsdWVzLnBvc3RhbGNvZGVcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5sYXlvdXRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuXHRcdFx0dGhpcy5idXR0b25zID0gdGhpcy5sYXlvdXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dGhpcy5idXR0b25zW2ldLmRhdGFzZXQudXVpZCA9IHRoaXMudXVpZDtcblx0XHRcdFx0dGhpcy5idXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljayk7XG5cdFx0XHRcdHRoaXMuZXZlbnRMaXN0ZW5lcnMucHVzaCh0aGlzLmJ1dHRvbnNbaV0pO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuZXZlbnRMaXN0ZW5lcnMubGVuZ3RoID4gMClcblx0XHRcdFx0dGhpcy5zdWJzY3JpYmVTZW5kID0gc3Vic2NyaWJlKCdzZW5kJywgdGhpcy5yZW1vdmVBbGxFdmVudExpc3RlbmVycy5iaW5kKHRoaXMpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cHVibGlzaCgnc2VuZCcsIHtcblx0XHRcdFx0dGV4dDogdmFsdWVzLnBvc3RhbGNvZGUsXG5cdFx0XHRcdHNpbGVudDogdHJ1ZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LFxuXHRoYW5kbGVDbGljazogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHRzaWxlbnQ6IHRydWUsXG5cdFx0XHR0ZXh0OiBudWxsXG5cdFx0fTtcblx0XHRkYXRhLnRleHQgPSB0aGlzLmRhdGFzZXQuaW5wdXQ7XG5cdFx0dGhpcy5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNsYXNzTmFtZSk7XG5cdFx0dGhpcy5jbGFzc0xpc3QucmVtb3ZlKGluYWN0aXZlQ2xhc3NOYW1lKTtcblx0XHRwdWJsaXNoKCdzZW5kJywgZGF0YSk7XG5cdFx0cHVibGlzaCgnZm9jdXMtaW5wdXQnKTtcblx0fSxcblx0cmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnM6IGZ1bmN0aW9uKCkge1xuXHRcdGlmICh0aGlzLmV2ZW50TGlzdGVuZXJzLmxlbmd0aCA+IDApIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ldmVudExpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR0aGlzLmV2ZW50TGlzdGVuZXJzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljayk7XG5cdFx0XHRcdHRoaXMuZXZlbnRMaXN0ZW5lcnNbaV0uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5ldmVudExpc3RlbmVycyA9IFtdO1xuXHRcdH1cblx0XHR0aGlzLnN1YnNjcmliZVNlbmQucmVtb3ZlKCk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY2hvb3NlTG9jYXRpb25UeXBlTGF5b3V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL2Nob29zZS1sb2NhdGlvbi10eXBlL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCIuSUJNQ2hhdC1pc2xvY2F0aW9uYXBpLWNvbnRhaW5lciB7XFxuXFx0dGV4dC1hbGlnbjpjZW50ZXI7XFxufVxcblxcbi5JQk1DaGF0LWlzbG9jYXRpb25hcGktY29udGFpbmVyIGJ1dHRvbiB7XFxuXFx0bWFyZ2luOiAxZW0gYXV0byAwIGF1dG87XFxuXFx0bWluLXdpZHRoOjIwMHB4O1xcblxcdG1heC13aWR0aDoyNDBweDtcXG5cXHR3aWR0aDo3NSU7XFxufVxcblxcbi5JQk1DaGF0LWlzbG9jYXRpb25hcGktY29udGFpbmVyIGRpdjpsYXN0LWNoaWxkIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmF3LWxvYWRlciEuL3NyYy9sYXlvdXRzL2Nob29zZS1sb2NhdGlvbi10eXBlL3N0eWxlcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIiR7bnN9LWNvbnRhaW5lclxcXCI+XFxuXFx0PGRpdj48YnV0dG9uIGNsYXNzPVxcXCJJQk1DaGF0LXNlY29uZGFyeS1jb2xvcnNcXFwiIGRhdGEtaW5wdXQ9XFxcIiR7dmFsdWVzLmdlb2xvY2F0aW9ufVxcXCI+VXNlIE15IEN1cnJlbnQgTG9jYXRpb248L2J1dHRvbj48L2Rpdj5cXG5cXHQ8ZGl2PjxidXR0b24gY2xhc3M9XFxcIklCTUNoYXQtc2Vjb25kYXJ5LWNvbG9yc1xcXCIgZGF0YS1pbnB1dD1cXFwiJHt2YWx1ZXMucG9zdGFsY29kZX1cXFwiPkEgWmlwIENvZGU8L2J1dHRvbj48L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9jaG9vc2UtbG9jYXRpb24tdHlwZS90ZW1wbGF0ZXMvYmFzZS5odG1sXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxucmVxdWlyZSgnLi9zdHlsZXMuY3NzJyk7XG5cbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcbnZhciBzdWJzY3JpYmUgPSBldmVudHMuc3Vic2NyaWJlO1xudmFyIHB1Ymxpc2ggPSBldmVudHMucHVibGlzaDtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzJyk7XG52YXIgbnMgPSAnSUJNQ2hhdC1jaG9vc2UnO1xudmFyIGFjdGl2ZUNsYXNzTmFtZSA9ICdJQk1DaGF0LWFjY2VudC1jb2xvcnMnO1xudmFyIGluYWN0aXZlQ2xhc3NOYW1lID0gJ0lCTUNoYXQtc2Vjb25kYXJ5LWNvbG9ycyc7XG52YXIgd2lkZ2V0cyA9IFtdO1xudmFyIHRlbXBsYXRlcyA9IHtcblx0YnV0dG9uOiByZXF1aXJlKCcuL3RlbXBsYXRlcy9idXR0b24uaHRtbCcpXG59O1xuXG52YXIgY2hvb3NlTGF5b3V0ID0ge1xuXHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHRzdWJzY3JpYmUoJ2xheW91dDpjaG9vc2UnLCBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHR2YXIgd2lkZ2V0ID0gbmV3IENob29zZShkYXRhKTtcblx0XHRcdHdpZGdldHNbZGF0YS51dWlkXSA9IHdpZGdldDtcblx0XHR9KTtcblx0XHRzdWJzY3JpYmUoJ2xheW91dDpjb25maXJtJywgZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0dmFyIHdpZGdldCA9IG5ldyBDaG9vc2UoZGF0YSk7XG5cdFx0XHR3aWRnZXRzW2RhdGEudXVpZF0gPSB3aWRnZXQ7XG5cdFx0fSk7XG5cdH1cbn07XG5cbmZ1bmN0aW9uIENob29zZShkYXRhKSB7XG5cdHRoaXMuaW5pdChkYXRhKTtcbn1cblxuQ2hvb3NlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oZGF0YSkge1xuXHR0aGlzLmFsbG93TXVsdGlwbGUgPSAoZGF0YS5tZXNzYWdlLmlucHV0dmFsaWRhdGlvbi5zb21lT2YgIT09IHVuZGVmaW5lZCk7XG5cdHRoaXMudmFsdWVzID0gW107XG5cdHRoaXMuZGF0YSA9ICh0aGlzLmFsbG93TXVsdGlwbGUpID8gZGF0YS5tZXNzYWdlLmlucHV0dmFsaWRhdGlvbi5zb21lT2YgOiBkYXRhLm1lc3NhZ2UuaW5wdXR2YWxpZGF0aW9uLm9uZU9mO1xuXHR0aGlzLnV1aWQgPSBkYXRhLnV1aWQ7XG5cdHRoaXMucGFyZW50RWxlbWVudCA9IGRhdGEuZWxlbWVudDtcblx0dGhpcy5sYXlvdXRFbGVtZW50ID0gZGF0YS5sYXlvdXRFbGVtZW50O1xuXHR0aGlzLm1zZ0VsZW1lbnQgPSBkYXRhLm1zZ0VsZW1lbnQ7XG5cdHRoaXMuZHJhd0J1dHRvbnMoKTtcblx0dGhpcy5zdWJzY3JpYmVTZW5kID0gc3Vic2NyaWJlKCdzZW5kJywgdGhpcy5yZW1vdmVBbGxFdmVudExpc3RlbmVycy5iaW5kKHRoaXMpKTtcbn07XG5cbkNob29zZS5wcm90b3R5cGUuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcblxuQ2hvb3NlLnByb3RvdHlwZS5kcmF3QnV0dG9ucyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgdG1wbCA9IHRlbXBsYXRlcy5idXR0b247XG5cdHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dGhpcy5lbC5jbGFzc0xpc3QuYWRkKG5zICsgJy1jb250YWluZXInKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdHZhciB0ZXh0ID0gdGhpcy5kYXRhW2ldO1xuXHRcdHZhciBidXR0b25Ib2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRidXR0b25Ib2xkZXIuY2xhc3NMaXN0LmFkZChucyArICctb3B0aW9uJyk7XG5cdFx0dmFyIHBhcnNlZCA9IHV0aWxzLmNvbXBpbGUodG1wbCwge1xuXHRcdFx0dGV4dDogdGV4dFxuXHRcdH0pO1xuXHRcdHZhciBidXR0b247XG5cdFx0YnV0dG9uSG9sZGVyLmlubmVySFRNTCA9IHBhcnNlZDtcblx0XHR0aGlzLmVsLmFwcGVuZENoaWxkKGJ1dHRvbkhvbGRlcik7XG5cdFx0YnV0dG9uID0gYnV0dG9uSG9sZGVyLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuXHRcdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXVpZCcsIHRoaXMudXVpZCk7XG5cdFx0YnV0dG9uLmNsYXNzTGlzdC5hZGQoaW5hY3RpdmVDbGFzc05hbWUpO1xuXHRcdHRoaXMuYWRkTGlzdGVuZXIoYnV0dG9uKTtcblx0fVxuXG5cdGlmICh0aGlzLmFsbG93TXVsdGlwbGUpIHtcblx0XHR2YXIgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dmFyIHN1Ym1pdEJ0biA9IHV0aWxzLmNvbXBpbGUodGVtcGxhdGVzLmZpZWxkLCB7XG5cdFx0XHR0ZXh0OiAnU3VibWl0J1xuXHRcdH0pO1xuXHRcdHN1Ym1pdC5jbGFzc05hbWUgPSBucyArICctc3VibWl0Jztcblx0XHRzdWJtaXQuaW5uZXJIVE1MID0gc3VibWl0QnRuO1xuXHRcdHRoaXMuc3VibWl0QnV0dG9uID0gc3VibWl0LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuXHRcdHRoaXMuc3VibWl0QnV0dG9uLmNsYXNzTGlzdCA9IGFjdGl2ZUNsYXNzTmFtZTtcblx0XHR0aGlzLnN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdFx0dGhpcy5lbC5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXHRcdHRoaXMuYWRkU3VibWl0TGlzdGVuZXIodGhpcy5zdWJtaXRCdXR0b24pO1xuXHR9XG5cblx0dGhpcy5sYXlvdXRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZWwpO1xufTtcblxuQ2hvb3NlLnByb3RvdHlwZS5oYW5kbGVDbGljayA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgZGF0YSA9IHtcblx0XHRzaWxlbnQ6IHRydWUsXG5cdFx0dGV4dDogbnVsbFxuXHR9O1xuXHRkYXRhLnRleHQgPSB0aGlzLmRhdGFzZXQuaW5wdXQ7XG5cdHRoaXMuY2xhc3NOYW1lID0gYWN0aXZlQ2xhc3NOYW1lICsgJyBJQk1DaGF0LWFjY2VudC1jb2xvcnMnO1xuXHRwdWJsaXNoKCdzZW5kJywgZGF0YSk7XG59O1xuXG5DaG9vc2UucHJvdG90eXBlLmhhbmRsZU11bHRpQ2xpY2sgPSBmdW5jdGlvbigpIHtcblx0dmFyIGJ1dHRvbnM7XG5cdHZhciBpbnN0YW5jZSA9IHdpZGdldHNbdGhpcy5kYXRhc2V0LnV1aWRdO1xuXHRpZiAodXRpbHMuaGFzQ2xhc3ModGhpcywgYWN0aXZlQ2xhc3NOYW1lKSkge1xuXHRcdHRoaXMuY2xhc3NMaXN0LmFkZChpbmFjdGl2ZUNsYXNzTmFtZSk7XG5cdFx0dGhpcy5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUNsYXNzTmFtZSk7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNsYXNzTmFtZSk7XG5cdFx0dGhpcy5jbGFzc0xpc3QucmVtb3ZlKGluYWN0aXZlQ2xhc3NOYW1lKTtcblx0fVxuXHRidXR0b25zID0gaW5zdGFuY2UuZWwucXVlcnlTZWxlY3RvckFsbCgnLicgKyBucyArICctb3B0aW9uIC4nICsgYWN0aXZlQ2xhc3NOYW1lKTtcblx0aWYgKGJ1dHRvbnMubGVuZ3RoID4gMClcblx0XHRpbnN0YW5jZS5zdWJtaXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuXHRlbHNlXG5cdFx0aW5zdGFuY2Uuc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcbn07XG5cbkNob29zZS5wcm90b3R5cGUuaGFuZGxlU3VibWl0ID0gZnVuY3Rpb24oKSB7XG5cdHZhciBidXR0b25zID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGFjdGl2ZUNsYXNzTmFtZSk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKylcblx0XHR0aGlzLnZhbHVlcy5wdXNoKGJ1dHRvbnNbaV0uZGF0YXNldC5pbnB1dCk7XG5cdHB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0c2lsZW50OiB0cnVlLFxuXHRcdHRleHQ6IHRoaXMudmFsdWVzLnRvU3RyaW5nKClcblx0fSk7XG59O1xuXG5DaG9vc2UucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24oZWwpIHtcblx0aWYgKHRoaXMuYWxsb3dNdWx0aXBsZSlcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlTXVsdGlDbGljayk7XG5cdGVsc2Vcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spO1xuXHR0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2goZWwpO1xufTtcblxuQ2hvb3NlLnByb3RvdHlwZS5hZGRTdWJtaXRMaXN0ZW5lciA9IGZ1bmN0aW9uKGVsKSB7XG5cdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKSk7XG5cdHRoaXMuZXZlbnRMaXN0ZW5lcnMucHVzaChlbCk7XG59O1xuXG5DaG9vc2UucHJvdG90eXBlLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG5cdGlmICh0aGlzLmV2ZW50TGlzdGVuZXJzLmxlbmd0aCA+IDApIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRMaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRoaXMuZXZlbnRMaXN0ZW5lcnNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrKTtcblx0XHRcdHRoaXMuZXZlbnRMaXN0ZW5lcnNbaV0uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuXHRcdH1cblx0XHR0aGlzLmV2ZW50TGlzdGVuZXJzID0gW107XG5cdFx0dGhpcy5zdWJzY3JpYmVTZW5kLnJlbW92ZSgpO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNob29zZUxheW91dDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9jaG9vc2UvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5JQk1DaGF0LWNob29zZS1jb250YWluZXIge1xcblxcdHRleHQtYWxpZ246Y2VudGVyO1xcblxcdHBhZGRpbmc6MCAwIDFlbSAwO1xcbn1cXG5cXG4uSUJNQ2hhdC1jaG9vc2UtY29udGFpbmVyIHNwYW4ge1xcblxcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xcblxcdG1hcmdpbjogMWVtIDFlbSAwIDFlbTtcXG59XFxuXFxuLklCTUNoYXQtY2hvb3NlLWNvbnRhaW5lciBkaXYge1xcblxcdG1hcmdpbjogMWVtIGF1dG8gMCBhdXRvO1xcbn1cXG5cXG4uSUJNQ2hhdC1jaG9vc2UtY29udGFpbmVyIGJ1dHRvbiB7XFxuXFx0bWluLXdpZHRoOjIzMHB4O1xcblxcdG1heC13aWR0aDoyNzBweDtcXG59XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYXctbG9hZGVyIS4vc3JjL2xheW91dHMvY2hvb3NlL3N0eWxlcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxidXR0b24gY2xhc3M9XFxcIklCTUNoYXQtc2Vjb25kYXJ5LWNvbG9yc1xcXCIgZGF0YS1pbnB1dD1cXFwiJHt0ZXh0fVxcXCI+JHt0ZXh0fTwvYnV0dG9uPlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL2Nob29zZS90ZW1wbGF0ZXMvYnV0dG9uLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG5yZXF1aXJlKCcuL3N0eWxlcy5jc3MnKTtcblxudmFyIGV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2V2ZW50cycpO1xudmFyIHByb2ZpbGUgPSByZXF1aXJlKCcuLi8uLi9wcm9maWxlJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xudmFyIHN1YnNjcmliZSA9IGV2ZW50cy5zdWJzY3JpYmU7XG52YXIgcHVibGlzaCA9IGV2ZW50cy5wdWJsaXNoO1xudmFyIG5zID0gJ0lCTUNoYXQtZm9ybSc7XG52YXIgYWN0aXZlQ2xhc3NOYW1lID0gJ0lCTUNoYXQtYWNjZW50LWNvbG9ycyc7XG52YXIgaW5hY3RpdmVDbGFzc05hbWUgPSAnSUJNQ2hhdC1zZWNvbmRhcnktY29sb3JzJztcbnZhciB0ZW1wbGF0ZXMgPSB7XG5cdGJhc2U6IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2Jhc2UuaHRtbCcpLFxuXHRmaWVsZDogcmVxdWlyZSgnLi90ZW1wbGF0ZXMvZmllbGQuaHRtbCcpXG59O1xudmFyIHdpZGdldHMgPSBbXTtcblxudmFyIGZvcm1MYXlvdXQgPSB7XG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHN1YnNjcmliZSgnbGF5b3V0OmZvcm0nLCBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHR2YXIgd2lkZ2V0ID0gbmV3IEZvcm0oZGF0YSk7XG5cdFx0XHR3aWRnZXRzW2RhdGEudXVpZF0gPSB3aWRnZXQ7XG5cdFx0fSk7XG5cdH1cbn07XG5cbmZ1bmN0aW9uIEZvcm0oZGF0YSkge1xuXHR0aGlzLmluaXQoZGF0YSk7XG59XG5cbkZvcm0ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihkYXRhKSB7XG5cdHRoaXMuZGF0YSA9IGRhdGEubWVzc2FnZS5zdG9yZSB8fCBbXTtcblx0dGhpcy5hY3Rpb24gPSBkYXRhLm1lc3NhZ2UuYWN0aW9uIHx8ICcnO1xuXHR0aGlzLnV1aWQgPSBkYXRhLnV1aWQ7XG5cdHRoaXMucGFyZW50RWxlbWVudCA9IGRhdGEuZWxlbWVudDtcblx0dGhpcy5sYXlvdXRFbGVtZW50ID0gZGF0YS5sYXlvdXRFbGVtZW50O1xuXHR0aGlzLm1zZ0VsZW1lbnQgPSBkYXRhLm1zZ0VsZW1lbnQ7XG5cdHRoaXMuZHJhd0Zvcm0oKTtcblx0dGhpcy5zdWJzY3JpYmVTZW5kID0gc3Vic2NyaWJlKCdzZW5kJywgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycy5iaW5kKHRoaXMpKTtcblx0cHVibGlzaCgnZGlzYWJsZS1pbnB1dCcpO1xufTtcblxuRm9ybS5wcm90b3R5cGUuZHJhd0Zvcm0gPSBmdW5jdGlvbigpIHtcblx0dmFyIGJhc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dmFyIGZvcm1GaWVsZHM7XG5cdGJhc2UuaW5uZXJIVE1MID0gdGVtcGxhdGVzLmJhc2U7XG5cdGZvcm1GaWVsZHMgPSBiYXNlLnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LWZvcm0tZmllbGRzJyk7XG5cdHRoaXMuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGRhdHVtKSB7XG5cdFx0dmFyIGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0ZmllbGQuaW5uZXJIVE1MID0gdXRpbHMuY29tcGlsZSh0ZW1wbGF0ZXMuZmllbGQsIHtcblx0XHRcdGxhYmVsOiBkYXR1bS5sYWJlbCB8fCAnJyxcblx0XHRcdG5hbWU6IGRhdHVtLm5hbWUsXG5cdFx0XHR2YWx1ZTogJydcblx0XHR9KTtcblx0XHRmaWVsZC5jbGFzc05hbWUgPSBucyArICctZmllbGRzLXJvdyc7XG5cdFx0Zm9ybUZpZWxkcy5hcHBlbmRDaGlsZChmaWVsZCk7XG5cdH0pO1xuXHR0aGlzLmZpZWxkcyA9IGZvcm1GaWVsZHMucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcblx0dGhpcy5zdWJtaXRCdXR0b24gPSBiYXNlLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLXN1Ym1pdCcpO1xuXHR0aGlzLmNhbmNlbEJ1dHRvbiA9IGJhc2UucXVlcnlTZWxlY3RvcignLicgKyBucyArICctY2FuY2VsJyk7XG5cdHRoaXMuc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoaW5hY3RpdmVDbGFzc05hbWUpO1xuXHR0aGlzLmNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKGluYWN0aXZlQ2xhc3NOYW1lKTtcblx0dGhpcy5sYXlvdXRFbGVtZW50LmFwcGVuZENoaWxkKGJhc2UpO1xuXHR0aGlzLmZpZWxkc1swXS5mb2N1cygpO1xuXHR0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG59O1xuXG5Gb3JtLnByb3RvdHlwZS5oYW5kbGVTdWJtaXQgPSBmdW5jdGlvbigpIHtcblx0aWYgKHRoaXMudmFsaWRhdGVGaWVsZHMoKSA9PT0gdHJ1ZSkge1xuXHRcdHRoaXMuZmllbGRzLmZvckVhY2goZnVuY3Rpb24oZmllbGQpIHtcblx0XHRcdHByb2ZpbGUuc2V0KGZpZWxkLmdldEF0dHJpYnV0ZSgnbmFtZScpLCBmaWVsZC52YWx1ZSk7XG5cdFx0fSk7XG5cdFx0dGhpcy5zdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzc05hbWUpO1xuXHRcdHB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0XHRzaWxlbnQ6IHRydWUsXG5cdFx0XHR0ZXh0OiAnc3VjY2Vzcydcblx0XHR9KTtcblx0XHRwdWJsaXNoKCdlbmFibGUtaW5wdXQnKTtcblx0fVxufTtcblxuRm9ybS5wcm90b3R5cGUudmFsaWRhdGVGaWVsZHMgPSBmdW5jdGlvbigpIHtcblx0dmFyIHZhbGlkID0gdHJ1ZTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAodGhpcy5kYXRhW2ldLnJlcXVpcmVkID09PSAndHJ1ZScpXG5cdFx0XHR2YWxpZCA9IHRoaXMudmFsaWRhdGVGaWVsZCh0aGlzLmZpZWxkc1tpXSwgdGhpcy5kYXRhW2ldKTtcblx0fVxuXHRyZXR1cm4gdmFsaWQ7XG59O1xuXG5Gb3JtLnByb3RvdHlwZS52YWxpZGF0ZUZpZWxkID0gZnVuY3Rpb24oZmllbGQsIGRhdHVtKSB7XG5cdHZhciB2YWxpZCA9IHRydWU7XG5cdGlmICghZmllbGQudmFsdWUgfHwgZmllbGQudmFsdWUudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuXHRcdHRoaXMuYWRkRXJyb3IoZmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJyksICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLicpO1xuXHRcdGlmICh2YWxpZCkgZmllbGQuZm9jdXMoKTtcblx0XHR2YWxpZCA9IGZhbHNlO1xuXHR9IGVsc2UgaWYgKGRhdHVtLnZhbGlkYXRpb25zICYmIGRhdHVtLnZhbGlkYXRpb25zLmxlbmd0aCAhPT0gMCkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGF0dW0udmFsaWRhdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciB2YWxpZGF0aW9uID0gZGF0dW0udmFsaWRhdGlvbnNbaV07XG5cdFx0XHR2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCcvJysgdmFsaWRhdGlvbi5yZWdleCArJy8nKTtcblx0XHRcdHZhciBtYXRjaGVzID0gcmVnZXgudGVzdChmaWVsZC52YWx1ZSk7XG5cdFx0XHRpZiAoIW1hdGNoZXMpIHtcblx0XHRcdFx0dGhpcy5hZGRFcnJvcihmaWVsZC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSwgdmFsaWRhdGlvbi5tZXNzYWdlKTtcblx0XHRcdFx0aWYgKHZhbGlkKSBmaWVsZC5mb2N1cygpO1xuXHRcdFx0XHR2YWxpZCA9IGZhbHNlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHZhbGlkO1xufTtcblxuRm9ybS5wcm90b3R5cGUuYWRkRXJyb3IgPSBmdW5jdGlvbihuYW1lLCBtc2cpIHtcblx0dmFyIGVsID0gdGhpcy5sYXlvdXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZhbGlkYXRpb24tZm9yPVwiJyArIG5hbWUgKyAnXCJdJyk7XG5cdGVsLnRleHRDb250ZW50ID0gbXNnO1xuXHRlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn07XG5cbkZvcm0ucHJvdG90eXBlLnJlbW92ZUVycm9yID0gZnVuY3Rpb24obmFtZSkge1xuXHR2YXIgZWwgPSB0aGlzLmxheW91dEVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdmFsaWRhdGlvbi1mb3I9XCInICsgbmFtZSArICdcIl0nKTtcblx0ZWwudGV4dENvbnRlbnQgPSAnJztcbn07XG5cbkZvcm0ucHJvdG90eXBlLnJlbW92ZUFsbEVycm9ycyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgZWxzID0gdGhpcy5sYXlvdXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXZhbGlkYXRpb24tZm9yXScpO1xuXHRlbHMuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuXHRcdHRoaXMucmVtb3ZlRXJyb3IoZWwpO1xuXHR9LCB0aGlzKTtcbn07XG5cbkZvcm0ucHJvdG90eXBlLmhhbmRsZUVudGVyID0gZnVuY3Rpb24oZSkge1xuXHRpZiAoZS5rZXlDb2RlID09PSAxMylcblx0XHR0aGlzLmhhbmRsZVN1Ym1pdCgpO1xufTtcblxuRm9ybS5wcm90b3R5cGUuaGFuZGxlSW5wdXQgPSBmdW5jdGlvbihlKSB7XG5cdHZhciBuYW1lID0gZS50YXJnZXQubmFtZTtcblx0dGhpcy5yZW1vdmVFcnJvcihuYW1lKTtcbn07XG5cbkZvcm0ucHJvdG90eXBlLmhhbmRsZUNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLmNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNsYXNzTmFtZSk7XG5cdHB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0c2lsZW50OiB0cnVlLFxuXHRcdHRleHQ6ICdjYW5jZWwnXG5cdH0pO1xuXHRwdWJsaXNoKCdlbmFibGUtaW5wdXQnKTtcbn07XG5cbkZvcm0ucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDYW5jZWwuYmluZCh0aGlzKSk7XG5cdHRoaXMuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKSk7XG5cdHRoaXMuZmllbGRzLmZvckVhY2goZnVuY3Rpb24oZmllbGQpIHtcblx0XHRmaWVsZC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHRoaXMuaGFuZGxlRW50ZXIuYmluZCh0aGlzKSk7XG5cdFx0ZmllbGQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLmhhbmRsZUlucHV0LmJpbmQodGhpcykpO1xuXHR9LCB0aGlzKTtcbn07XG5cbkZvcm0ucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuY2FuY2VsQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDYW5jZWwuYmluZCh0aGlzKSk7XG5cdHRoaXMuY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcblx0dGhpcy5zdWJtaXRCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpKTtcblx0dGhpcy5zdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuXHR0aGlzLmZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uKGZpZWxkKSB7XG5cdFx0ZmllbGQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCB0aGlzLmhhbmRsZUVudGVyLmJpbmQodGhpcykpO1xuXHRcdGZpZWxkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5oYW5kbGVJbnB1dC5iaW5kKHRoaXMpKTtcblx0XHRmaWVsZC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdH0sIHRoaXMpO1xuXG5cdHRoaXMuc3Vic2NyaWJlU2VuZC5yZW1vdmUoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZm9ybUxheW91dDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9mb3JtL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCIuSUJNQ2hhdC1mb3JtLWNvbnRhaW5lciB7XFxuXFx0dGV4dC1hbGlnbjpjZW50ZXI7XFxuXFx0cGFkZGluZzowIDAgMWVtIDA7XFxufVxcblxcbi5JQk1DaGF0LWZvcm0tZmllbGRzIHtcXG5cXHRtYXJnaW46YXV0bztcXG5cXHR0ZXh0LWFsaWduOmxlZnQ7XFxuXFx0bWF4LXdpZHRoOjM2MHB4O1xcblxcdHdpZHRoOjEwMCU7XFxufVxcblxcbi5JQk1DaGF0LWZvcm0tZmllbGRzLXJvdyB7XFxuXFx0cGFkZGluZy1ib3R0b206MC43NWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1mb3JtLWZpZWxkcy1yb3cgaW5wdXQge1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uSUJNQ2hhdC1mb3JtLWJ1dHRvbnMge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1heC13aWR0aDogMzYwcHg7XFxuXFx0aGVpZ2h0OiAyLjVlbTtcXG5cXHR0ZXh0LWFsaWduOmNlbnRlcjtcXG5cXHRtYXJnaW46YXV0bztcXG59XFxuXFxuLklCTUNoYXQtZm9ybS1idXR0b25zIGJ1dHRvbiB7XFxuXFx0bGluZS1oZWlnaHQ6IDIuNWVtO1xcblxcdHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLklCTUNoYXQtZm9ybS1jYW5jZWwge1xcblxcdGZsb2F0OmxlZnQ7XFxuXFx0bWF4LXdpZHRoOiA1MCU7XFxufVxcbi5JQk1DaGF0LWZvcm0tc3VibWl0IHtcXG5cXHRmbG9hdDpyaWdodDtcXG5cXHRtYXgtd2lkdGg6IDUwJTtcXG59XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYXctbG9hZGVyIS4vc3JjL2xheW91dHMvZm9ybS9zdHlsZXMuY3NzXG4gKiogbW9kdWxlIGlkID0gNTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIEJvdFNESyA9IHJlcXVpcmUoJ0B3YXRzb24tdmlydHVhbC1hZ2VudC9jbGllbnQtc2RrL2xpYi93ZWInKTtcbnZhciBwcm9maWxlID0gQm90U0RLLnByb2ZpbGU7XG5cbm1vZHVsZS5leHBvcnRzID0gcHJvZmlsZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvZmlsZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDU3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcIlNES1wiLFtdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuU0RLPWUoKTp0LlNESz1lKCl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShyKXtpZihuW3JdKXJldHVybiBuW3JdLmV4cG9ydHM7dmFyIG89bltyXT17ZXhwb3J0czp7fSxpZDpyLGxvYWRlZDohMX07cmV0dXJuIHRbcl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsZSksby5sb2FkZWQ9ITAsby5leHBvcnRzfXZhciBuPXt9O3JldHVybiBlLm09dCxlLmM9bixlLnA9XCJcIixlKDApfShbZnVuY3Rpb24odCxlLG4pe3QuZXhwb3J0cz1uKDIyKX0sZnVuY3Rpb24odCxlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKHQpe3JldHVyblwiW29iamVjdCBBcnJheV1cIj09PWIuY2FsbCh0KX1mdW5jdGlvbiByKHQpe3JldHVyblwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIj09PWIuY2FsbCh0KX1mdW5jdGlvbiBvKHQpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBGb3JtRGF0YSYmdCBpbnN0YW5jZW9mIEZvcm1EYXRhfWZ1bmN0aW9uIGkodCl7dmFyIGU7cmV0dXJuIGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIEFycmF5QnVmZmVyJiZBcnJheUJ1ZmZlci5pc1ZpZXc/QXJyYXlCdWZmZXIuaXNWaWV3KHQpOnQmJnQuYnVmZmVyJiZ0LmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyfWZ1bmN0aW9uIHUodCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHR9ZnVuY3Rpb24gcyh0KXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgdH1mdW5jdGlvbiBjKHQpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiB0fWZ1bmN0aW9uIGEodCl7cmV0dXJuIG51bGwhPT10JiZcIm9iamVjdFwiPT10eXBlb2YgdH1mdW5jdGlvbiBmKHQpe3JldHVyblwiW29iamVjdCBEYXRlXVwiPT09Yi5jYWxsKHQpfWZ1bmN0aW9uIGwodCl7cmV0dXJuXCJbb2JqZWN0IEZpbGVdXCI9PT1iLmNhbGwodCl9ZnVuY3Rpb24gcCh0KXtyZXR1cm5cIltvYmplY3QgQmxvYl1cIj09PWIuY2FsbCh0KX1mdW5jdGlvbiBoKHQpe3JldHVyblwiW29iamVjdCBGdW5jdGlvbl1cIj09PWIuY2FsbCh0KX1mdW5jdGlvbiBkKHQpe3JldHVybiBhKHQpJiZoKHQucGlwZSl9ZnVuY3Rpb24gbSh0KXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgVVJMU2VhcmNoUGFyYW1zJiZ0IGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zfWZ1bmN0aW9uIHYodCl7cmV0dXJuIHQucmVwbGFjZSgvXlxccyovLFwiXCIpLnJlcGxhY2UoL1xccyokLyxcIlwiKX1mdW5jdGlvbiB5KCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50fWZ1bmN0aW9uIGcodCxlKXtpZihudWxsIT09dCYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQpaWYoXCJvYmplY3RcIj09dHlwZW9mIHR8fG4odCl8fCh0PVt0XSksbih0KSlmb3IodmFyIHI9MCxvPXQubGVuZ3RoO3I8bztyKyspZS5jYWxsKG51bGwsdFtyXSxyLHQpO2Vsc2UgZm9yKHZhciBpIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShpKSYmZS5jYWxsKG51bGwsdFtpXSxpLHQpfWZ1bmN0aW9uIHcoKXtmdW5jdGlvbiB0KHQsbil7XCJvYmplY3RcIj09dHlwZW9mIGVbbl0mJlwib2JqZWN0XCI9PXR5cGVvZiB0P2Vbbl09dyhlW25dLHQpOmVbbl09dH1mb3IodmFyIGU9e30sbj0wLHI9YXJndW1lbnRzLmxlbmd0aDtuPHI7bisrKWcoYXJndW1lbnRzW25dLHQpO3JldHVybiBlfXZhciBiPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7dC5leHBvcnRzPXtpc0FycmF5Om4saXNBcnJheUJ1ZmZlcjpyLGlzRm9ybURhdGE6byxpc0FycmF5QnVmZmVyVmlldzppLGlzU3RyaW5nOnUsaXNOdW1iZXI6cyxpc09iamVjdDphLGlzVW5kZWZpbmVkOmMsaXNEYXRlOmYsaXNGaWxlOmwsaXNCbG9iOnAsaXNGdW5jdGlvbjpoLGlzU3RyZWFtOmQsaXNVUkxTZWFyY2hQYXJhbXM6bSxpc1N0YW5kYXJkQnJvd3NlckVudjp5LGZvckVhY2g6ZyxtZXJnZTp3LHRyaW06dn19LGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gbigpe3Rocm93IG5ldyBFcnJvcihcInNldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWRcIil9ZnVuY3Rpb24gcigpe3Rocm93IG5ldyBFcnJvcihcImNsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiBvKHQpe2lmKGY9PT1zZXRUaW1lb3V0KXJldHVybiBzZXRUaW1lb3V0KHQsMCk7aWYoKGY9PT1ufHwhZikmJnNldFRpbWVvdXQpcmV0dXJuIGY9c2V0VGltZW91dCxzZXRUaW1lb3V0KHQsMCk7dHJ5e3JldHVybiBmKHQsMCl9Y2F0Y2goZSl7dHJ5e3JldHVybiBmLmNhbGwobnVsbCx0LDApfWNhdGNoKGUpe3JldHVybiBmLmNhbGwodGhpcyx0LDApfX19ZnVuY3Rpb24gaSh0KXtpZihsPT09Y2xlYXJUaW1lb3V0KXJldHVybiBjbGVhclRpbWVvdXQodCk7aWYoKGw9PT1yfHwhbCkmJmNsZWFyVGltZW91dClyZXR1cm4gbD1jbGVhclRpbWVvdXQsY2xlYXJUaW1lb3V0KHQpO3RyeXtyZXR1cm4gbCh0KX1jYXRjaChlKXt0cnl7cmV0dXJuIGwuY2FsbChudWxsLHQpfWNhdGNoKGUpe3JldHVybiBsLmNhbGwodGhpcyx0KX19fWZ1bmN0aW9uIHUoKXttJiZoJiYobT0hMSxoLmxlbmd0aD9kPWguY29uY2F0KGQpOnY9LTEsZC5sZW5ndGgmJnMoKSl9ZnVuY3Rpb24gcygpe2lmKCFtKXt2YXIgdD1vKHUpO209ITA7Zm9yKHZhciBlPWQubGVuZ3RoO2U7KXtmb3IoaD1kLGQ9W107Kyt2PGU7KWgmJmhbdl0ucnVuKCk7dj0tMSxlPWQubGVuZ3RofWg9bnVsbCxtPSExLGkodCl9fWZ1bmN0aW9uIGModCxlKXt0aGlzLmZ1bj10LHRoaXMuYXJyYXk9ZX1mdW5jdGlvbiBhKCl7fXZhciBmLGwscD10LmV4cG9ydHM9e307IWZ1bmN0aW9uKCl7dHJ5e2Y9XCJmdW5jdGlvblwiPT10eXBlb2Ygc2V0VGltZW91dD9zZXRUaW1lb3V0Om59Y2F0Y2godCl7Zj1ufXRyeXtsPVwiZnVuY3Rpb25cIj09dHlwZW9mIGNsZWFyVGltZW91dD9jbGVhclRpbWVvdXQ6cn1jYXRjaCh0KXtsPXJ9fSgpO3ZhciBoLGQ9W10sbT0hMSx2PS0xO3AubmV4dFRpY2s9ZnVuY3Rpb24odCl7dmFyIGU9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgtMSk7aWYoYXJndW1lbnRzLmxlbmd0aD4xKWZvcih2YXIgbj0xO248YXJndW1lbnRzLmxlbmd0aDtuKyspZVtuLTFdPWFyZ3VtZW50c1tuXTtkLnB1c2gobmV3IGModCxlKSksMSE9PWQubGVuZ3RofHxtfHxvKHMpfSxjLnByb3RvdHlwZS5ydW49ZnVuY3Rpb24oKXt0aGlzLmZ1bi5hcHBseShudWxsLHRoaXMuYXJyYXkpfSxwLnRpdGxlPVwiYnJvd3NlclwiLHAuYnJvd3Nlcj0hMCxwLmVudj17fSxwLmFyZ3Y9W10scC52ZXJzaW9uPVwiXCIscC52ZXJzaW9ucz17fSxwLm9uPWEscC5hZGRMaXN0ZW5lcj1hLHAub25jZT1hLHAub2ZmPWEscC5yZW1vdmVMaXN0ZW5lcj1hLHAucmVtb3ZlQWxsTGlzdGVuZXJzPWEscC5lbWl0PWEscC5iaW5kaW5nPWZ1bmN0aW9uKHQpe3Rocm93IG5ldyBFcnJvcihcInByb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkXCIpfSxwLmN3ZD1mdW5jdGlvbigpe3JldHVyblwiL1wifSxwLmNoZGlyPWZ1bmN0aW9uKHQpe3Rocm93IG5ldyBFcnJvcihcInByb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZFwiKX0scC51bWFzaz1mdW5jdGlvbigpe3JldHVybiAwfX0sZnVuY3Rpb24odCxlLG4peyhmdW5jdGlvbihlKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDEpLG89bigxMiksaT1uKDE4KSx1PW4oNCkscz1uKDE2KSxjPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdy5idG9hfHxuKDExKSxhPW4oMTkpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGYsbCl7dmFyIHA9bC5kYXRhLGg9bC5oZWFkZXJzO3IuaXNGb3JtRGF0YShwKSYmZGVsZXRlIGhbXCJDb250ZW50LVR5cGVcIl07dmFyIGQ9bmV3IFhNTEh0dHBSZXF1ZXN0LG09XCJvbnJlYWR5c3RhdGVjaGFuZ2VcIix2PSExO2lmKFwidGVzdFwiPT09ZS5lbnYuTk9ERV9FTlZ8fFwidW5kZWZpbmVkXCI9PXR5cGVvZiB3aW5kb3d8fCF3aW5kb3cuWERvbWFpblJlcXVlc3R8fFwid2l0aENyZWRlbnRpYWxzXCJpbiBkfHxzKGwudXJsKXx8KGQ9bmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCxtPVwib25sb2FkXCIsdj0hMCxkLm9ucHJvZ3Jlc3M9ZnVuY3Rpb24oKXt9LGQub250aW1lb3V0PWZ1bmN0aW9uKCl7fSksbC5hdXRoKXt2YXIgeT1sLmF1dGgudXNlcm5hbWV8fFwiXCIsZz1sLmF1dGgucGFzc3dvcmR8fFwiXCI7aC5BdXRob3JpemF0aW9uPVwiQmFzaWMgXCIrYyh5K1wiOlwiK2cpfWlmKGQub3BlbihsLm1ldGhvZC50b1VwcGVyQ2FzZSgpLG8obC51cmwsbC5wYXJhbXMsbC5wYXJhbXNTZXJpYWxpemVyKSwhMCksZC50aW1lb3V0PWwudGltZW91dCxkW21dPWZ1bmN0aW9uKCl7aWYoZCYmKDQ9PT1kLnJlYWR5U3RhdGV8fHYpJiYwIT09ZC5zdGF0dXMpe3ZhciBlPVwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzXCJpbiBkP2koZC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSk6bnVsbCxuPWwucmVzcG9uc2VUeXBlJiZcInRleHRcIiE9PWwucmVzcG9uc2VUeXBlP2QucmVzcG9uc2U6ZC5yZXNwb25zZVRleHQscj17ZGF0YTp1KG4sZSxsLnRyYW5zZm9ybVJlc3BvbnNlKSxzdGF0dXM6MTIyMz09PWQuc3RhdHVzPzIwNDpkLnN0YXR1cyxzdGF0dXNUZXh0OjEyMjM9PT1kLnN0YXR1cz9cIk5vIENvbnRlbnRcIjpkLnN0YXR1c1RleHQsaGVhZGVyczplLGNvbmZpZzpsLHJlcXVlc3Q6ZH07YSh0LGYsciksZD1udWxsfX0sZC5vbmVycm9yPWZ1bmN0aW9uKCl7ZihuZXcgRXJyb3IoXCJOZXR3b3JrIEVycm9yXCIpKSxkPW51bGx9LGQub250aW1lb3V0PWZ1bmN0aW9uKCl7dmFyIHQ9bmV3IEVycm9yKFwidGltZW91dCBvZiBcIitsLnRpbWVvdXQrXCJtcyBleGNlZWRlZFwiKTt0LnRpbWVvdXQ9bC50aW1lb3V0LHQuY29kZT1cIkVDT05OQUJPUlRFRFwiLGYodCksZD1udWxsfSxyLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpe3ZhciB3PW4oMTQpLGI9bC53aXRoQ3JlZGVudGlhbHN8fHMobC51cmwpP3cucmVhZChsLnhzcmZDb29raWVOYW1lKTp2b2lkIDA7YiYmKGhbbC54c3JmSGVhZGVyTmFtZV09Yil9aWYoXCJzZXRSZXF1ZXN0SGVhZGVyXCJpbiBkJiZyLmZvckVhY2goaCxmdW5jdGlvbih0LGUpe1widW5kZWZpbmVkXCI9PXR5cGVvZiBwJiZcImNvbnRlbnQtdHlwZVwiPT09ZS50b0xvd2VyQ2FzZSgpP2RlbGV0ZSBoW2VdOmQuc2V0UmVxdWVzdEhlYWRlcihlLHQpfSksbC53aXRoQ3JlZGVudGlhbHMmJihkLndpdGhDcmVkZW50aWFscz0hMCksbC5yZXNwb25zZVR5cGUpdHJ5e2QucmVzcG9uc2VUeXBlPWwucmVzcG9uc2VUeXBlfWNhdGNoKHgpe2lmKFwianNvblwiIT09ZC5yZXNwb25zZVR5cGUpdGhyb3cgeH1sLnByb2dyZXNzJiYoXCJwb3N0XCI9PT1sLm1ldGhvZHx8XCJwdXRcIj09PWwubWV0aG9kP2QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLGwucHJvZ3Jlc3MpOlwiZ2V0XCI9PT1sLm1ldGhvZCYmZC5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIixsLnByb2dyZXNzKSksdm9pZCAwPT09cCYmKHA9bnVsbCksZC5zZW5kKHApfX0pLmNhbGwoZSxuKDIpKX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oMSk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gci5mb3JFYWNoKG4sZnVuY3Rpb24obil7dD1uKHQsZSl9KSx0fX0sZnVuY3Rpb24odCxlLG4pe3QuZXhwb3J0cz1uKDYpfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXt0aGlzLmRlZmF1bHRzPWkubWVyZ2Uoe30sdCksdGhpcy5pbnRlcmNlcHRvcnM9e3JlcXVlc3Q6bmV3IHMscmVzcG9uc2U6bmV3IHN9fXZhciBvPW4oOSksaT1uKDEpLHU9big4KSxzPW4oNyksYz1uKDE1KSxhPW4oMTMpLGY9bigxMCksbD1uKDQpO3IucHJvdG90eXBlLnJlcXVlc3Q9ZnVuY3Rpb24odCl7XCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PWkubWVyZ2Uoe3VybDphcmd1bWVudHNbMF19LGFyZ3VtZW50c1sxXSkpLHQ9aS5tZXJnZShvLHRoaXMuZGVmYXVsdHMse21ldGhvZDpcImdldFwifSx0KSx0LmJhc2VVUkwmJiFjKHQudXJsKSYmKHQudXJsPWEodC5iYXNlVVJMLHQudXJsKSksdC53aXRoQ3JlZGVudGlhbHM9dC53aXRoQ3JlZGVudGlhbHN8fHRoaXMuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzLHQuZGF0YT1sKHQuZGF0YSx0LmhlYWRlcnMsdC50cmFuc2Zvcm1SZXF1ZXN0KSx0LmhlYWRlcnM9aS5tZXJnZSh0LmhlYWRlcnMuY29tbW9ufHx7fSx0LmhlYWRlcnNbdC5tZXRob2RdfHx7fSx0LmhlYWRlcnN8fHt9KSxpLmZvckVhY2goW1wiZGVsZXRlXCIsXCJnZXRcIixcImhlYWRcIixcInBvc3RcIixcInB1dFwiLFwicGF0Y2hcIixcImNvbW1vblwiXSxmdW5jdGlvbihlKXtkZWxldGUgdC5oZWFkZXJzW2VdfSk7dmFyIGU9W3Usdm9pZCAwXSxuPVByb21pc2UucmVzb2x2ZSh0KTtmb3IodGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe2UudW5zaGlmdCh0LmZ1bGZpbGxlZCx0LnJlamVjdGVkKX0pLHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24odCl7ZS5wdXNoKHQuZnVsZmlsbGVkLHQucmVqZWN0ZWQpfSk7ZS5sZW5ndGg7KW49bi50aGVuKGUuc2hpZnQoKSxlLnNoaWZ0KCkpO3JldHVybiBufTt2YXIgcD1uZXcgcihvKSxoPXQuZXhwb3J0cz1mKHIucHJvdG90eXBlLnJlcXVlc3QscCk7aC5yZXF1ZXN0PWYoci5wcm90b3R5cGUucmVxdWVzdCxwKSxoLkF4aW9zPXIsaC5kZWZhdWx0cz1wLmRlZmF1bHRzLGguaW50ZXJjZXB0b3JzPXAuaW50ZXJjZXB0b3JzLGguY3JlYXRlPWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgcih0KX0saC5hbGw9ZnVuY3Rpb24odCl7cmV0dXJuIFByb21pc2UuYWxsKHQpfSxoLnNwcmVhZD1uKDIwKSxpLmZvckVhY2goW1wiZGVsZXRlXCIsXCJnZXRcIixcImhlYWRcIl0sZnVuY3Rpb24odCl7ci5wcm90b3R5cGVbdF09ZnVuY3Rpb24oZSxuKXtyZXR1cm4gdGhpcy5yZXF1ZXN0KGkubWVyZ2Uobnx8e30se21ldGhvZDp0LHVybDplfSkpfSxoW3RdPWYoci5wcm90b3R5cGVbdF0scCl9KSxpLmZvckVhY2goW1wicG9zdFwiLFwicHV0XCIsXCJwYXRjaFwiXSxmdW5jdGlvbih0KXtyLnByb3RvdHlwZVt0XT1mdW5jdGlvbihlLG4scil7cmV0dXJuIHRoaXMucmVxdWVzdChpLm1lcmdlKHJ8fHt9LHttZXRob2Q6dCx1cmw6ZSxkYXRhOm59KSl9LGhbdF09ZihyLnByb3RvdHlwZVt0XSxwKX0pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcigpe3RoaXMuaGFuZGxlcnM9W119dmFyIG89bigxKTtyLnByb3RvdHlwZS51c2U9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5oYW5kbGVycy5wdXNoKHtmdWxmaWxsZWQ6dCxyZWplY3RlZDplfSksdGhpcy5oYW5kbGVycy5sZW5ndGgtMX0sci5wcm90b3R5cGUuZWplY3Q9ZnVuY3Rpb24odCl7dGhpcy5oYW5kbGVyc1t0XSYmKHRoaXMuaGFuZGxlcnNbdF09bnVsbCl9LHIucHJvdG90eXBlLmZvckVhY2g9ZnVuY3Rpb24odCl7by5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsZnVuY3Rpb24oZSl7bnVsbCE9PWUmJnQoZSl9KX0sdC5leHBvcnRzPXJ9LGZ1bmN0aW9uKHQsZSxuKXsoZnVuY3Rpb24oZSl7XCJ1c2Ugc3RyaWN0XCI7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyLG8pe3RyeXt2YXIgaTtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmFkYXB0ZXI/aT10LmFkYXB0ZXI6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFhNTEh0dHBSZXF1ZXN0P2k9bigzKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgZSYmKGk9bigzKSksXCJmdW5jdGlvblwiPT10eXBlb2YgaSYmaShyLG8sdCl9Y2F0Y2godSl7byh1KX19KX19KS5jYWxsKGUsbigyKSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQsZSl7IW8uaXNVbmRlZmluZWQodCkmJm8uaXNVbmRlZmluZWQodFtcIkNvbnRlbnQtVHlwZVwiXSkmJih0W1wiQ29udGVudC1UeXBlXCJdPWUpfXZhciBvPW4oMSksaT1uKDE3KSx1PS9eXFwpXFxdXFx9Jyw/XFxuLyxzPXtcIkNvbnRlbnQtVHlwZVwiOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJ9O3QuZXhwb3J0cz17dHJhbnNmb3JtUmVxdWVzdDpbZnVuY3Rpb24odCxlKXtyZXR1cm4gaShlLFwiQ29udGVudC1UeXBlXCIpLG8uaXNGb3JtRGF0YSh0KXx8by5pc0FycmF5QnVmZmVyKHQpfHxvLmlzU3RyZWFtKHQpfHxvLmlzRmlsZSh0KXx8by5pc0Jsb2IodCk/dDpvLmlzQXJyYXlCdWZmZXJWaWV3KHQpP3QuYnVmZmVyOm8uaXNVUkxTZWFyY2hQYXJhbXModCk/KHIoZSxcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04XCIpLHQudG9TdHJpbmcoKSk6by5pc09iamVjdCh0KT8ocihlLFwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04XCIpLEpTT04uc3RyaW5naWZ5KHQpKTp0fV0sdHJhbnNmb3JtUmVzcG9uc2U6W2Z1bmN0aW9uKHQpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXt0PXQucmVwbGFjZSh1LFwiXCIpO3RyeXt0PUpTT04ucGFyc2UodCl9Y2F0Y2goZSl7fX1yZXR1cm4gdH1dLGhlYWRlcnM6e2NvbW1vbjp7QWNjZXB0OlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qXCJ9LHBhdGNoOm8ubWVyZ2UocykscG9zdDpvLm1lcmdlKHMpLHB1dDpvLm1lcmdlKHMpfSx0aW1lb3V0OjAseHNyZkNvb2tpZU5hbWU6XCJYU1JGLVRPS0VOXCIseHNyZkhlYWRlck5hbWU6XCJYLVhTUkYtVE9LRU5cIixtYXhDb250ZW50TGVuZ3RoOi0xLHZhbGlkYXRlU3RhdHVzOmZ1bmN0aW9uKHQpe3JldHVybiB0Pj0yMDAmJnQ8MzAwfX19LGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKCl7Zm9yKHZhciBuPW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKSxyPTA7cjxuLmxlbmd0aDtyKyspbltyXT1hcmd1bWVudHNbcl07cmV0dXJuIHQuYXBwbHkoZSxuKX19fSxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oKXt0aGlzLm1lc3NhZ2U9XCJTdHJpbmcgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXJcIn1mdW5jdGlvbiByKHQpe2Zvcih2YXIgZSxyLGk9U3RyaW5nKHQpLHU9XCJcIixzPTAsYz1vO2kuY2hhckF0KDB8cyl8fChjPVwiPVwiLHMlMSk7dSs9Yy5jaGFyQXQoNjMmZT4+OC1zJTEqOCkpe2lmKHI9aS5jaGFyQ29kZUF0KHMrPS43NSkscj4yNTUpdGhyb3cgbmV3IG47ZT1lPDw4fHJ9cmV0dXJuIHV9dmFyIG89XCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiO24ucHJvdG90eXBlPW5ldyBFcnJvcixuLnByb3RvdHlwZS5jb2RlPTUsbi5wcm90b3R5cGUubmFtZT1cIkludmFsaWRDaGFyYWN0ZXJFcnJvclwiLHQuZXhwb3J0cz1yfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXtyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHQpLnJlcGxhY2UoLyU0MC9naSxcIkBcIikucmVwbGFjZSgvJTNBL2dpLFwiOlwiKS5yZXBsYWNlKC8lMjQvZyxcIiRcIikucmVwbGFjZSgvJTJDL2dpLFwiLFwiKS5yZXBsYWNlKC8lMjAvZyxcIitcIikucmVwbGFjZSgvJTVCL2dpLFwiW1wiKS5yZXBsYWNlKC8lNUQvZ2ksXCJdXCIpfXZhciBvPW4oMSk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuKXtpZighZSlyZXR1cm4gdDt2YXIgaTtpZihuKWk9bihlKTtlbHNlIGlmKG8uaXNVUkxTZWFyY2hQYXJhbXMoZSkpaT1lLnRvU3RyaW5nKCk7ZWxzZXt2YXIgdT1bXTtvLmZvckVhY2goZSxmdW5jdGlvbih0LGUpe251bGwhPT10JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgdCYmKG8uaXNBcnJheSh0KSYmKGUrPVwiW11cIiksby5pc0FycmF5KHQpfHwodD1bdF0pLG8uZm9yRWFjaCh0LGZ1bmN0aW9uKHQpe28uaXNEYXRlKHQpP3Q9dC50b0lTT1N0cmluZygpOm8uaXNPYmplY3QodCkmJih0PUpTT04uc3RyaW5naWZ5KHQpKSx1LnB1c2gocihlKStcIj1cIityKHQpKX0pKX0pLGk9dS5qb2luKFwiJlwiKX1yZXR1cm4gaSYmKHQrPSh0LmluZGV4T2YoXCI/XCIpPT09LTE/XCI/XCI6XCImXCIpK2kpLHR9fSxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3JldHVybiB0LnJlcGxhY2UoL1xcLyskLyxcIlwiKStcIi9cIitlLnJlcGxhY2UoL15cXC8rLyxcIlwiKX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDEpO3QuZXhwb3J0cz1yLmlzU3RhbmRhcmRCcm93c2VyRW52KCk/ZnVuY3Rpb24oKXtyZXR1cm57d3JpdGU6ZnVuY3Rpb24odCxlLG4sbyxpLHUpe3ZhciBzPVtdO3MucHVzaCh0K1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChlKSksci5pc051bWJlcihuKSYmcy5wdXNoKFwiZXhwaXJlcz1cIituZXcgRGF0ZShuKS50b0dNVFN0cmluZygpKSxyLmlzU3RyaW5nKG8pJiZzLnB1c2goXCJwYXRoPVwiK28pLHIuaXNTdHJpbmcoaSkmJnMucHVzaChcImRvbWFpbj1cIitpKSx1PT09ITAmJnMucHVzaChcInNlY3VyZVwiKSxkb2N1bWVudC5jb29raWU9cy5qb2luKFwiOyBcIil9LHJlYWQ6ZnVuY3Rpb24odCl7dmFyIGU9ZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoXCIoXnw7XFxcXHMqKShcIit0K1wiKT0oW147XSopXCIpKTtyZXR1cm4gZT9kZWNvZGVVUklDb21wb25lbnQoZVszXSk6bnVsbH0scmVtb3ZlOmZ1bmN0aW9uKHQpe3RoaXMud3JpdGUodCxcIlwiLERhdGUubm93KCktODY0ZTUpfX19KCk6ZnVuY3Rpb24oKXtyZXR1cm57d3JpdGU6ZnVuY3Rpb24oKXt9LHJlYWQ6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH0scmVtb3ZlOmZ1bmN0aW9uKCl7fX19KCl9LGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybi9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh0KX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDEpO3QuZXhwb3J0cz1yLmlzU3RhbmRhcmRCcm93c2VyRW52KCk/ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe3ZhciBlPXQ7cmV0dXJuIG4mJihvLnNldEF0dHJpYnV0ZShcImhyZWZcIixlKSxlPW8uaHJlZiksby5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZSkse2hyZWY6by5ocmVmLHByb3RvY29sOm8ucHJvdG9jb2w/by5wcm90b2NvbC5yZXBsYWNlKC86JC8sXCJcIik6XCJcIixob3N0Om8uaG9zdCxzZWFyY2g6by5zZWFyY2g/by5zZWFyY2gucmVwbGFjZSgvXlxcPy8sXCJcIik6XCJcIixoYXNoOm8uaGFzaD9vLmhhc2gucmVwbGFjZSgvXiMvLFwiXCIpOlwiXCIsaG9zdG5hbWU6by5ob3N0bmFtZSxwb3J0Om8ucG9ydCxwYXRobmFtZTpcIi9cIj09PW8ucGF0aG5hbWUuY2hhckF0KDApP28ucGF0aG5hbWU6XCIvXCIrby5wYXRobmFtZX19dmFyIGUsbj0vKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7cmV0dXJuIGU9dCh3aW5kb3cubG9jYXRpb24uaHJlZiksZnVuY3Rpb24obil7dmFyIG89ci5pc1N0cmluZyhuKT90KG4pOm47cmV0dXJuIG8ucHJvdG9jb2w9PT1lLnByb3RvY29sJiZvLmhvc3Q9PT1lLmhvc3R9fSgpOmZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuITB9fSgpfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bigxKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtyLmZvckVhY2godCxmdW5jdGlvbihuLHIpe3IhPT1lJiZyLnRvVXBwZXJDYXNlKCk9PT1lLnRvVXBwZXJDYXNlKCkmJih0W2VdPW4sZGVsZXRlIHRbcl0pfSl9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bigxKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGUsbixvLGk9e307cmV0dXJuIHQ/KHIuZm9yRWFjaCh0LnNwbGl0KFwiXFxuXCIpLGZ1bmN0aW9uKHQpe289dC5pbmRleE9mKFwiOlwiKSxlPXIudHJpbSh0LnN1YnN0cigwLG8pKS50b0xvd2VyQ2FzZSgpLG49ci50cmltKHQuc3Vic3RyKG8rMSkpLGUmJihpW2VdPWlbZV0/aVtlXStcIiwgXCIrbjpuKX0pLGkpOml9fSxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUsbil7dmFyIHI9bi5jb25maWcudmFsaWRhdGVTdGF0dXM7bi5zdGF0dXMmJnImJiFyKG4uc3RhdHVzKT9lKG4pOnQobil9fSxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIHQuYXBwbHkobnVsbCxlKX19fSxmdW5jdGlvbih0LGUsbil7dmFyIHI7KGZ1bmN0aW9uKHQsbyxpKXsvKiFcblx0ICogQG92ZXJ2aWV3IGVzNi1wcm9taXNlIC0gYSB0aW55IGltcGxlbWVudGF0aW9uIG9mIFByb21pc2VzL0ErLlxuXHQgKiBAY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNCBZZWh1ZGEgS2F0eiwgVG9tIERhbGUsIFN0ZWZhbiBQZW5uZXIgYW5kIGNvbnRyaWJ1dG9ycyAoQ29udmVyc2lvbiB0byBFUzYgQVBJIGJ5IEpha2UgQXJjaGliYWxkKVxuXHQgKiBAbGljZW5zZSAgIExpY2Vuc2VkIHVuZGVyIE1JVCBsaWNlbnNlXG5cdCAqICAgICAgICAgICAgU2VlIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9qYWtlYXJjaGliYWxkL2VzNi1wcm9taXNlL21hc3Rlci9MSUNFTlNFXG5cdCAqIEB2ZXJzaW9uICAgMy4yLjFcblx0ICovXG4oZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB1KHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHR8fFwib2JqZWN0XCI9PXR5cGVvZiB0JiZudWxsIT09dH1mdW5jdGlvbiBzKHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHR9ZnVuY3Rpb24gYyh0KXtHPXR9ZnVuY3Rpb24gYSh0KXt0dD10fWZ1bmN0aW9uIGYoKXtyZXR1cm4gZnVuY3Rpb24oKXt0Lm5leHRUaWNrKG0pfX1mdW5jdGlvbiBsKCl7cmV0dXJuIGZ1bmN0aW9uKCl7WShtKX19ZnVuY3Rpb24gcCgpe3ZhciB0PTAsZT1uZXcgcnQobSksbj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTtyZXR1cm4gZS5vYnNlcnZlKG4se2NoYXJhY3RlckRhdGE6ITB9KSxmdW5jdGlvbigpe24uZGF0YT10PSsrdCUyfX1mdW5jdGlvbiBoKCl7dmFyIHQ9bmV3IE1lc3NhZ2VDaGFubmVsO3JldHVybiB0LnBvcnQxLm9ubWVzc2FnZT1tLGZ1bmN0aW9uKCl7dC5wb3J0Mi5wb3N0TWVzc2FnZSgwKX19ZnVuY3Rpb24gZCgpe3JldHVybiBmdW5jdGlvbigpe3NldFRpbWVvdXQobSwxKX19ZnVuY3Rpb24gbSgpe2Zvcih2YXIgdD0wO3Q8Wjt0Kz0yKXt2YXIgZT11dFt0XSxuPXV0W3QrMV07ZShuKSx1dFt0XT12b2lkIDAsdXRbdCsxXT12b2lkIDB9Wj0wfWZ1bmN0aW9uIHYoKXt0cnl7dmFyIHQ9bigyNyk7cmV0dXJuIFk9dC5ydW5Pbkxvb3B8fHQucnVuT25Db250ZXh0LGwoKX1jYXRjaChlKXtyZXR1cm4gZCgpfX1mdW5jdGlvbiB5KHQsZSl7dmFyIG49dGhpcyxyPW5ldyB0aGlzLmNvbnN0cnVjdG9yKHcpO3ZvaWQgMD09PXJbYXRdJiZNKHIpO3ZhciBvPW4uX3N0YXRlO2lmKG8pe3ZhciBpPWFyZ3VtZW50c1tvLTFdO3R0KGZ1bmN0aW9uKCl7TChvLHIsaSxuLl9yZXN1bHQpfSl9ZWxzZSBEKG4scix0LGUpO3JldHVybiByfWZ1bmN0aW9uIGcodCl7dmFyIGU9dGhpcztpZih0JiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdC5jb25zdHJ1Y3Rvcj09PWUpcmV0dXJuIHQ7dmFyIG49bmV3IGUodyk7cmV0dXJuIEMobix0KSxufWZ1bmN0aW9uIHcoKXt9ZnVuY3Rpb24gYigpe3JldHVybiBuZXcgVHlwZUVycm9yKFwiWW91IGNhbm5vdCByZXNvbHZlIGEgcHJvbWlzZSB3aXRoIGl0c2VsZlwiKX1mdW5jdGlvbiB4KCl7cmV0dXJuIG5ldyBUeXBlRXJyb3IoXCJBIHByb21pc2VzIGNhbGxiYWNrIGNhbm5vdCByZXR1cm4gdGhhdCBzYW1lIHByb21pc2UuXCIpfWZ1bmN0aW9uIF8odCl7dHJ5e3JldHVybiB0LnRoZW59Y2F0Y2goZSl7cmV0dXJuIGh0LmVycm9yPWUsaHR9fWZ1bmN0aW9uIEEodCxlLG4scil7dHJ5e3QuY2FsbChlLG4scil9Y2F0Y2gobyl7cmV0dXJuIG99fWZ1bmN0aW9uIEUodCxlLG4pe3R0KGZ1bmN0aW9uKHQpe3ZhciByPSExLG89QShuLGUsZnVuY3Rpb24obil7cnx8KHI9ITAsZSE9PW4/Qyh0LG4pOlIodCxuKSl9LGZ1bmN0aW9uKGUpe3J8fChyPSEwLE8odCxlKSl9LFwiU2V0dGxlOiBcIisodC5fbGFiZWx8fFwiIHVua25vd24gcHJvbWlzZVwiKSk7IXImJm8mJihyPSEwLE8odCxvKSl9LHQpfWZ1bmN0aW9uIFModCxlKXtlLl9zdGF0ZT09PWx0P1IodCxlLl9yZXN1bHQpOmUuX3N0YXRlPT09cHQ/Tyh0LGUuX3Jlc3VsdCk6RChlLHZvaWQgMCxmdW5jdGlvbihlKXtDKHQsZSl9LGZ1bmN0aW9uKGUpe08odCxlKX0pfWZ1bmN0aW9uIGoodCxlLG4pe2UuY29uc3RydWN0b3I9PT10LmNvbnN0cnVjdG9yJiZuPT09c3QmJmNvbnN0cnVjdG9yLnJlc29sdmU9PT1jdD9TKHQsZSk6bj09PWh0P08odCxodC5lcnJvcik6dm9pZCAwPT09bj9SKHQsZSk6cyhuKT9FKHQsZSxuKTpSKHQsZSl9ZnVuY3Rpb24gQyh0LGUpe3Q9PT1lP08odCxiKCkpOnUoZSk/aih0LGUsXyhlKSk6Uih0LGUpfWZ1bmN0aW9uIFQodCl7dC5fb25lcnJvciYmdC5fb25lcnJvcih0Ll9yZXN1bHQpLEIodCl9ZnVuY3Rpb24gUih0LGUpe3QuX3N0YXRlPT09ZnQmJih0Ll9yZXN1bHQ9ZSx0Ll9zdGF0ZT1sdCwwIT09dC5fc3Vic2NyaWJlcnMubGVuZ3RoJiZ0dChCLHQpKX1mdW5jdGlvbiBPKHQsZSl7dC5fc3RhdGU9PT1mdCYmKHQuX3N0YXRlPXB0LHQuX3Jlc3VsdD1lLHR0KFQsdCkpfWZ1bmN0aW9uIEQodCxlLG4scil7dmFyIG89dC5fc3Vic2NyaWJlcnMsaT1vLmxlbmd0aDt0Ll9vbmVycm9yPW51bGwsb1tpXT1lLG9baStsdF09bixvW2krcHRdPXIsMD09PWkmJnQuX3N0YXRlJiZ0dChCLHQpfWZ1bmN0aW9uIEIodCl7dmFyIGU9dC5fc3Vic2NyaWJlcnMsbj10Ll9zdGF0ZTtpZigwIT09ZS5sZW5ndGgpe2Zvcih2YXIgcixvLGk9dC5fcmVzdWx0LHU9MDt1PGUubGVuZ3RoO3UrPTMpcj1lW3VdLG89ZVt1K25dLHI/TChuLHIsbyxpKTpvKGkpO3QuX3N1YnNjcmliZXJzLmxlbmd0aD0wfX1mdW5jdGlvbiBJKCl7dGhpcy5lcnJvcj1udWxsfWZ1bmN0aW9uIHEodCxlKXt0cnl7cmV0dXJuIHQoZSl9Y2F0Y2gobil7cmV0dXJuIGR0LmVycm9yPW4sZHR9fWZ1bmN0aW9uIEwodCxlLG4scil7dmFyIG8saSx1LGMsYT1zKG4pO2lmKGEpe2lmKG89cShuLHIpLG89PT1kdD8oYz0hMCxpPW8uZXJyb3Isbz1udWxsKTp1PSEwLGU9PT1vKXJldHVybiB2b2lkIE8oZSx4KCkpfWVsc2Ugbz1yLHU9ITA7ZS5fc3RhdGUhPT1mdHx8KGEmJnU/QyhlLG8pOmM/TyhlLGkpOnQ9PT1sdD9SKGUsbyk6dD09PXB0JiZPKGUsbykpfWZ1bmN0aW9uIFAodCxlKXt0cnl7ZShmdW5jdGlvbihlKXtDKHQsZSl9LGZ1bmN0aW9uKGUpe08odCxlKX0pfWNhdGNoKG4pe08odCxuKX19ZnVuY3Rpb24gVSgpe3JldHVybiBtdCsrfWZ1bmN0aW9uIE0odCl7dFthdF09bXQrKyx0Ll9zdGF0ZT12b2lkIDAsdC5fcmVzdWx0PXZvaWQgMCx0Ll9zdWJzY3JpYmVycz1bXX1mdW5jdGlvbiBOKHQpe3JldHVybiBuZXcgYnQodGhpcyx0KS5wcm9taXNlfWZ1bmN0aW9uIFgodCl7dmFyIGU9dGhpcztyZXR1cm4gbmV3IGUoUSh0KT9mdW5jdGlvbihuLHIpe2Zvcih2YXIgbz10Lmxlbmd0aCxpPTA7aTxvO2krKyllLnJlc29sdmUodFtpXSkudGhlbihuLHIpfTpmdW5jdGlvbih0LGUpe2UobmV3IFR5cGVFcnJvcihcIllvdSBtdXN0IHBhc3MgYW4gYXJyYXkgdG8gcmFjZS5cIikpfSl9ZnVuY3Rpb24gRih0KXt2YXIgZT10aGlzLG49bmV3IGUodyk7cmV0dXJuIE8obix0KSxufWZ1bmN0aW9uIGsoKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiWW91IG11c3QgcGFzcyBhIHJlc29sdmVyIGZ1bmN0aW9uIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgcHJvbWlzZSBjb25zdHJ1Y3RvclwiKX1mdW5jdGlvbiBIKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Byb21pc2UnOiBQbGVhc2UgdXNlIHRoZSAnbmV3JyBvcGVyYXRvciwgdGhpcyBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLlwiKX1mdW5jdGlvbiBLKHQpe3RoaXNbYXRdPVUoKSx0aGlzLl9yZXN1bHQ9dGhpcy5fc3RhdGU9dm9pZCAwLHRoaXMuX3N1YnNjcmliZXJzPVtdLHchPT10JiYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmaygpLHRoaXMgaW5zdGFuY2VvZiBLP1AodGhpcyx0KTpIKCkpfWZ1bmN0aW9uIFYodCxlKXt0aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yPXQsdGhpcy5wcm9taXNlPW5ldyB0KHcpLHRoaXMucHJvbWlzZVthdF18fE0odGhpcy5wcm9taXNlKSxRKGUpPyh0aGlzLl9pbnB1dD1lLHRoaXMubGVuZ3RoPWUubGVuZ3RoLHRoaXMuX3JlbWFpbmluZz1lLmxlbmd0aCx0aGlzLl9yZXN1bHQ9bmV3IEFycmF5KHRoaXMubGVuZ3RoKSwwPT09dGhpcy5sZW5ndGg/Uih0aGlzLnByb21pc2UsdGhpcy5fcmVzdWx0KToodGhpcy5sZW5ndGg9dGhpcy5sZW5ndGh8fDAsdGhpcy5fZW51bWVyYXRlKCksMD09PXRoaXMuX3JlbWFpbmluZyYmUih0aGlzLnByb21pc2UsdGhpcy5fcmVzdWx0KSkpOk8odGhpcy5wcm9taXNlLHooKSl9ZnVuY3Rpb24geigpe3JldHVybiBuZXcgRXJyb3IoXCJBcnJheSBNZXRob2RzIG11c3QgYmUgcHJvdmlkZWQgYW4gQXJyYXlcIil9ZnVuY3Rpb24gJCgpe3ZhciB0O2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBvKXQ9bztlbHNlIGlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmKXQ9c2VsZjtlbHNlIHRyeXt0PUZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKX1jYXRjaChlKXt0aHJvdyBuZXcgRXJyb3IoXCJwb2x5ZmlsbCBmYWlsZWQgYmVjYXVzZSBnbG9iYWwgb2JqZWN0IGlzIHVuYXZhaWxhYmxlIGluIHRoaXMgZW52aXJvbm1lbnRcIil9dmFyIG49dC5Qcm9taXNlO24mJlwiW29iamVjdCBQcm9taXNlXVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG4ucmVzb2x2ZSgpKSYmIW4uY2FzdHx8KHQuUHJvbWlzZT13dCl9dmFyIEo7Sj1BcnJheS5pc0FycmF5P0FycmF5LmlzQXJyYXk6ZnVuY3Rpb24odCl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpfTt2YXIgWSxHLFcsUT1KLFo9MCx0dD1mdW5jdGlvbih0LGUpe3V0W1pdPXQsdXRbWisxXT1lLForPTIsMj09PVomJihHP0cobSk6VygpKX0sZXQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dm9pZCAwLG50PWV0fHx7fSxydD1udC5NdXRhdGlvbk9ic2VydmVyfHxudC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyLG90PVwidW5kZWZpbmVkXCI9PXR5cGVvZiBzZWxmJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgdCYmXCJbb2JqZWN0IHByb2Nlc3NdXCI9PT17fS50b1N0cmluZy5jYWxsKHQpLGl0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBVaW50OENsYW1wZWRBcnJheSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGltcG9ydFNjcmlwdHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBNZXNzYWdlQ2hhbm5lbCx1dD1uZXcgQXJyYXkoMWUzKTtXPW90P2YoKTpydD9wKCk6aXQ/aCgpOnZvaWQgMD09PWV0P3YoKTpkKCk7dmFyIHN0PXksY3Q9ZyxhdD1NYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMTYpLGZ0PXZvaWQgMCxsdD0xLHB0PTIsaHQ9bmV3IEksZHQ9bmV3IEksbXQ9MCx2dD1OLHl0PVgsZ3Q9Rix3dD1LO0suYWxsPXZ0LEsucmFjZT15dCxLLnJlc29sdmU9Y3QsSy5yZWplY3Q9Z3QsSy5fc2V0U2NoZWR1bGVyPWMsSy5fc2V0QXNhcD1hLEsuX2FzYXA9dHQsSy5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOkssdGhlbjpzdCxcImNhdGNoXCI6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudGhlbihudWxsLHQpfX07dmFyIGJ0PVY7Vi5wcm90b3R5cGUuX2VudW1lcmF0ZT1mdW5jdGlvbigpe2Zvcih2YXIgdD10aGlzLmxlbmd0aCxlPXRoaXMuX2lucHV0LG49MDt0aGlzLl9zdGF0ZT09PWZ0JiZuPHQ7bisrKXRoaXMuX2VhY2hFbnRyeShlW25dLG4pfSxWLnByb3RvdHlwZS5fZWFjaEVudHJ5PWZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcy5faW5zdGFuY2VDb25zdHJ1Y3RvcixyPW4ucmVzb2x2ZTtpZihyPT09Y3Qpe3ZhciBvPV8odCk7aWYobz09PXN0JiZ0Ll9zdGF0ZSE9PWZ0KXRoaXMuX3NldHRsZWRBdCh0Ll9zdGF0ZSxlLHQuX3Jlc3VsdCk7ZWxzZSBpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBvKXRoaXMuX3JlbWFpbmluZy0tLHRoaXMuX3Jlc3VsdFtlXT10O2Vsc2UgaWYobj09PXd0KXt2YXIgaT1uZXcgbih3KTtqKGksdCxvKSx0aGlzLl93aWxsU2V0dGxlQXQoaSxlKX1lbHNlIHRoaXMuX3dpbGxTZXR0bGVBdChuZXcgbihmdW5jdGlvbihlKXtlKHQpfSksZSl9ZWxzZSB0aGlzLl93aWxsU2V0dGxlQXQocih0KSxlKX0sVi5wcm90b3R5cGUuX3NldHRsZWRBdD1mdW5jdGlvbih0LGUsbil7dmFyIHI9dGhpcy5wcm9taXNlO3IuX3N0YXRlPT09ZnQmJih0aGlzLl9yZW1haW5pbmctLSx0PT09cHQ/TyhyLG4pOnRoaXMuX3Jlc3VsdFtlXT1uKSwwPT09dGhpcy5fcmVtYWluaW5nJiZSKHIsdGhpcy5fcmVzdWx0KX0sVi5wcm90b3R5cGUuX3dpbGxTZXR0bGVBdD1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXM7RCh0LHZvaWQgMCxmdW5jdGlvbih0KXtuLl9zZXR0bGVkQXQobHQsZSx0KX0sZnVuY3Rpb24odCl7bi5fc2V0dGxlZEF0KHB0LGUsdCl9KX07dmFyIHh0PSQsX3Q9e1Byb21pc2U6d3QscG9seWZpbGw6eHR9O24oMjUpLmFtZD8ocj1mdW5jdGlvbigpe3JldHVybiBfdH0uY2FsbChlLG4sZSxpKSwhKHZvaWQgMCE9PXImJihpLmV4cG9ydHM9cikpKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgaSYmaS5leHBvcnRzP2kuZXhwb3J0cz1fdDpcInVuZGVmaW5lZFwiIT10eXBlb2YgdGhpcyYmKHRoaXMuRVM2UHJvbWlzZT1fdCkseHQoKX0pLmNhbGwodGhpcyl9KS5jYWxsKGUsbigyKSxmdW5jdGlvbigpe3JldHVybiB0aGlzfSgpLG4oMjYpKHQpKX0sZnVuY3Rpb24odCxlLG4pe1widW5kZWZpbmVkXCI9PXR5cGVvZiBQcm9taXNlJiZuKDIxKS5wb2x5ZmlsbCgpO3ZhciByPW4oMjQpLG89big1KSxpPW4oMjMpLHU9e2Jhc2VVUkw6XCJodHRwczovL2Rldi5hcGkuaWJtLmNvbS92aXJ0dWFsYWdlbnQvZGV2ZWxvcG1lbnQvYXBpL3YxL1wiLHRpbWVvdXQ6M2U0LHVzZXJJRDpudWxsLHdpdGhDcmVkZW50aWFsczohMSxYSUJNQ2xpZW50SUQ6ITEsWElCTUNsaWVudFNlY3JldDohMX0scz1vLmNyZWF0ZSh1KSxjPS9cXHwmKC4qPylcXHwvZyxhPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wO2U8dC50ZXh0Lmxlbmd0aDtlKyspe3ZhciBuPXQudGV4dFtlXS5tYXRjaChjKXx8W107dC50ZXh0W2VdPW4ucmVkdWNlKGZ1bmN0aW9uKHQsZSl7Y29uc3Qgbj1lLnNsaWNlKDIsLTEpLHI9aS5nZXQobik7cmV0dXJuIHQucmVwbGFjZShlLHIpfSx0LnRleHRbZV0pfXJldHVybiB0fSxmPXQuZXhwb3J0cz17Y29uZmlndXJlOmZ1bmN0aW9uKHQpe3JldHVybiByKHUsdCkscz1vLmNyZWF0ZSh7YmFzZVVSTDp1LmJhc2VVUkwsdGltZW91dDp1LnRpbWVvdXQsd2l0aENyZWRlbnRpYWxzOnUud2l0aENyZWRlbnRpYWxzLGhlYWRlcnM6dS5YSUJNQ2xpZW50SUQmJnUuWElCTUNsaWVudFNlY3JldD97XCJYLUlCTS1DbGllbnQtSWRcIjp1LlhJQk1DbGllbnRJRCxcIlgtSUJNLUNsaWVudC1TZWNyZXRcIjp1LlhJQk1DbGllbnRTZWNyZXR9Ont9fSksZn0sc3RhcnQ6ZnVuY3Rpb24odCl7dmFyIGU9bCgpLG49e3VzZXJJRDp1LnVzZXJJRH0scj1cIi9ib3RzL1wiK3QrXCIvZGlhbG9nc1wiLG89e2hlYWRlcnM6e1wiWC1SZXF1ZXN0LUlEXCI6ZX19O3JldHVybiBzLnBvc3QocixuLG8pLnRoZW4oZnVuY3Rpb24odCl7cmV0dXJue2NoYXRJRDp0LmRhdGEuZGlhbG9nX2lkLG1lc3NhZ2U6YSh0LmRhdGEubWVzc2FnZSl9fSlbXCJjYXRjaFwiXShmdW5jdGlvbih0KXtjb25zb2xlLmVycm9yKFwiUmVxdWVzdCBmYWlsZWQ6XCIsZSkscCh0KX0pfSxzZW5kOmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1sKCksbz17bWVzc2FnZTpuLHVzZXJJRDp1LnVzZXJJRH0saT1cIi9ib3RzL1wiK3QrXCIvZGlhbG9ncy9cIitlK1wiL21lc3NhZ2VzXCIsYz1cIm1lc3NhZ2U9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG4pLGY9e2hlYWRlcnM6e1wiWC1SZXF1ZXN0LUlEXCI6cn19O3JldHVybiBzLnBvc3QoaStcIj9cIitjLG8sZikudGhlbihmdW5jdGlvbih0KXtyZXR1cm57bWVzc2FnZTphKHQuZGF0YS5tZXNzYWdlKX19KVtcImNhdGNoXCJdKGZ1bmN0aW9uKHQpe2NvbnNvbGUuZXJyb3IoXCJSZXF1ZXN0IGZhaWxlZDpcIixyKSxwKHQpfSl9LHByb2ZpbGU6e2dldDppLmdldCxzZXQ6aS5zZXQsaGFzOmkuaGFzLGNsZWFyOmkuY2xlYXIsXCJkZWxldGVcIjppW1wiZGVsZXRlXCJdLGZvckVhY2g6aS5mb3JFYWNofX0sbD1mdW5jdGlvbigpe3JldHVyblwieHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4XCIucmVwbGFjZSgvW3h5XS9nLGZ1bmN0aW9uKHQpe3ZhciBlPTE2Kk1hdGgucmFuZG9tKCl8MCxuPVwieFwiPT10P2U6MyZlfDg7cmV0dXJuIG4udG9TdHJpbmcoMTYpfSl9LHA9ZnVuY3Rpb24odCl7aWYoIXQuc3RhdHVzKXRocm93IHQ7dmFyIGU9dC5zdGF0dXMsbj10LnN0YXR1c1RleHQscj1uZXcgRXJyb3Iobik7dGhyb3cgci5zdGF0dXM9ZSxyfX0sZnVuY3Rpb24odCxlKXt2YXIgbj17fSxyPXtzZXQ6ZnVuY3Rpb24odCxlKXtyZXR1cm4gblt0XT1lLHJ9LGdldDpmdW5jdGlvbih0KXtyZXR1cm4gblt0XXx8XCJcIn0saGFzOmZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDAhPT1uW3RdfSxjbGVhcjpmdW5jdGlvbigpe3JldHVybiBuPXt9LHJ9LFwiZGVsZXRlXCI6ZnVuY3Rpb24odCl7cmV0dXJuIGRlbGV0ZSBuW3RdLHJ9LGZvckVhY2g6ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LmtleXMobikuZm9yRWFjaChmdW5jdGlvbihyKXtlP3QocixuW3JdKS5iaW5kKGUpOnQocixuW3JdKX0pLHJ9fTt0LmV4cG9ydHM9cn0sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiBuKHQsZSxuKXtzd2l0Y2gobi5sZW5ndGgpe2Nhc2UgMDpyZXR1cm4gdC5jYWxsKGUpO2Nhc2UgMTpyZXR1cm4gdC5jYWxsKGUsblswXSk7Y2FzZSAyOnJldHVybiB0LmNhbGwoZSxuWzBdLG5bMV0pO2Nhc2UgMzpyZXR1cm4gdC5jYWxsKGUsblswXSxuWzFdLG5bMl0pfXJldHVybiB0LmFwcGx5KGUsbil9ZnVuY3Rpb24gcih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/dm9pZCAwOmVbdF19fWZ1bmN0aW9uIG8odCxlKXtmb3IodmFyIG49LTEscj1BcnJheSh0KTsrK248dDspcltuXT1lKG4pO3JldHVybiByfWZ1bmN0aW9uIGkodCxlKXtyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIHQoZShuKSl9fWZ1bmN0aW9uIHUodCxlLG4pe3ZhciByPXRbZV07Qi5jYWxsKHQsZSkmJm0ocixuKSYmKHZvaWQgMCE9PW58fGUgaW4gdCl8fCh0W2VdPW4pfWZ1bmN0aW9uIHModCxlKXtyZXR1cm4gbnVsbCE9dCYmKEIuY2FsbCh0LGUpfHxcIm9iamVjdFwiPT10eXBlb2YgdCYmZSBpbiB0JiZudWxsPT09Rih0KSl9ZnVuY3Rpb24gYyh0LGUpe3JldHVybiBlPVUodm9pZCAwPT09ZT90Lmxlbmd0aC0xOmUsMCksZnVuY3Rpb24oKXtmb3IodmFyIHI9YXJndW1lbnRzLG89LTEsaT1VKHIubGVuZ3RoLWUsMCksdT1BcnJheShpKTsrK288aTspdVtvXT1yW2Urb107bz0tMTtmb3IodmFyIHM9QXJyYXkoZSsxKTsrK288ZTspc1tvXT1yW29dO3JldHVybiBzW2VdPXUsbih0LHRoaXMscyl9fWZ1bmN0aW9uIGEodCxlLG4scil7bnx8KG49e30pO2Zvcih2YXIgbz0tMSxpPWUubGVuZ3RoOysrbzxpOyl7dmFyIHM9ZVtvXSxjPXI/cihuW3NdLHRbc10scyxuLHQpOnZvaWQgMDt1KG4scyx2b2lkIDA9PT1jP3Rbc106Yyl9cmV0dXJuIG59ZnVuY3Rpb24gZih0KXtyZXR1cm4gYyhmdW5jdGlvbihlLG4pe3ZhciByPS0xLG89bi5sZW5ndGgsaT1vPjE/bltvLTFdOnZvaWQgMCx1PW8+Mj9uWzJdOnZvaWQgMDtmb3IoaT10Lmxlbmd0aD4zJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBpPyhvLS0saSk6dm9pZCAwLHUmJmgoblswXSxuWzFdLHUpJiYoaT1vPDM/dm9pZCAwOmksbz0xKSxlPU9iamVjdChlKTsrK3I8bzspe3ZhciBzPW5bcl07cyYmdChlLHMscixpKX1yZXR1cm4gZX0pfWZ1bmN0aW9uIGwodCl7dmFyIGU9dD90Lmxlbmd0aDp2b2lkIDA7cmV0dXJuIGIoZSkmJihrKHQpfHxBKHQpfHx2KHQpKT9vKGUsU3RyaW5nKTpudWxsfWZ1bmN0aW9uIHAodCxlKXtyZXR1cm4gZT1udWxsPT1lP1M6ZSwhIWUmJihcIm51bWJlclwiPT10eXBlb2YgdHx8Ty50ZXN0KHQpKSYmdD4tMSYmdCUxPT0wJiZ0PGV9ZnVuY3Rpb24gaCh0LGUsbil7aWYoIXgobikpcmV0dXJuITE7dmFyIHI9dHlwZW9mIGU7cmV0dXJuISEoXCJudW1iZXJcIj09cj95KG4pJiZwKGUsbi5sZW5ndGgpOlwic3RyaW5nXCI9PXImJmUgaW4gbikmJm0obltlXSx0KX1mdW5jdGlvbiBkKHQpe3ZhciBlPXQmJnQuY29uc3RydWN0b3Isbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlLnByb3RvdHlwZXx8RDtyZXR1cm4gdD09PW59ZnVuY3Rpb24gbSh0LGUpe3JldHVybiB0PT09ZXx8dCE9PXQmJmUhPT1lfWZ1bmN0aW9uIHYodCl7cmV0dXJuIGcodCkmJkIuY2FsbCh0LFwiY2FsbGVlXCIpJiYoIXEuY2FsbCh0LFwiY2FsbGVlXCIpfHxJLmNhbGwodCk9PWopfWZ1bmN0aW9uIHkodCl7cmV0dXJuIG51bGwhPXQmJmIoWCh0KSkmJiF3KHQpfWZ1bmN0aW9uIGcodCl7cmV0dXJuIF8odCkmJnkodCl9ZnVuY3Rpb24gdyh0KXt2YXIgZT14KHQpP0kuY2FsbCh0KTpcIlwiO3JldHVybiBlPT1DfHxlPT1UfWZ1bmN0aW9uIGIodCl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIHQmJnQ+LTEmJnQlMT09MCYmdDw9U31mdW5jdGlvbiB4KHQpe3ZhciBlPXR5cGVvZiB0O3JldHVybiEhdCYmKFwib2JqZWN0XCI9PWV8fFwiZnVuY3Rpb25cIj09ZSl9ZnVuY3Rpb24gXyh0KXtyZXR1cm4hIXQmJlwib2JqZWN0XCI9PXR5cGVvZiB0fWZ1bmN0aW9uIEEodCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHR8fCFrKHQpJiZfKHQpJiZJLmNhbGwodCk9PVJ9ZnVuY3Rpb24gRSh0KXt2YXIgZT1kKHQpO2lmKCFlJiYheSh0KSlyZXR1cm4gTih0KTt2YXIgbj1sKHQpLHI9ISFuLG89bnx8W10saT1vLmxlbmd0aDtmb3IodmFyIHUgaW4gdCkhcyh0LHUpfHxyJiYoXCJsZW5ndGhcIj09dXx8cCh1LGkpKXx8ZSYmXCJjb25zdHJ1Y3RvclwiPT11fHxvLnB1c2godSk7cmV0dXJuIG99dmFyIFM9OTAwNzE5OTI1NDc0MDk5MSxqPVwiW29iamVjdCBBcmd1bWVudHNdXCIsQz1cIltvYmplY3QgRnVuY3Rpb25dXCIsVD1cIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCIsUj1cIltvYmplY3QgU3RyaW5nXVwiLE89L14oPzowfFsxLTldXFxkKikkLyxEPU9iamVjdC5wcm90b3R5cGUsQj1ELmhhc093blByb3BlcnR5LEk9RC50b1N0cmluZyxxPUQucHJvcGVydHlJc0VudW1lcmFibGUsTD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsUD1PYmplY3Qua2V5cyxVPU1hdGgubWF4LE09IXEuY2FsbCh7dmFsdWVPZjoxfSxcInZhbHVlT2ZcIiksTj1pKFAsT2JqZWN0KSxYPXIoXCJsZW5ndGhcIiksRj1pKEwsT2JqZWN0KSxrPUFycmF5LmlzQXJyYXksSD1mKGZ1bmN0aW9uKHQsZSl7aWYoTXx8ZChlKXx8eShlKSlyZXR1cm4gdm9pZCBhKGUsRShlKSx0KTtmb3IodmFyIG4gaW4gZSlCLmNhbGwoZSxuKSYmdSh0LG4sZVtuXSl9KTt0LmV4cG9ydHM9SH0sZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJkZWZpbmUgY2Fubm90IGJlIHVzZWQgaW5kaXJlY3RcIil9fSxmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gdC53ZWJwYWNrUG9seWZpbGx8fCh0LmRlcHJlY2F0ZT1mdW5jdGlvbigpe30sdC5wYXRocz1bXSx0LmNoaWxkcmVuPVtdLHQud2VicGFja1BvbHlmaWxsPTEpLHR9fSxmdW5jdGlvbih0LGUpe31dKX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L0B3YXRzb24tdmlydHVhbC1hZ2VudC9jbGllbnQtc2RrL2xpYi93ZWIuanNcbiAqKiBtb2R1bGUgaWQgPSA1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIklCTUNoYXQtZm9ybS1jb250YWluZXJcXFwiPlxcblxcdDxkaXYgY2xhc3M9XFxcIklCTUNoYXQtZm9ybS1maWVsZHNcXFwiPjwvZGl2PlxcblxcdDxkaXYgY2xhc3M9XFxcIklCTUNoYXQtZm9ybS1idXR0b25zXFxcIj5cXG5cXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJJQk1DaGF0LWZvcm0tY2FuY2VsXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJJQk1DaGF0LWZvcm0tc3VibWl0XFxcIj5TdWJtaXQ8L2J1dHRvbj5cXG5cXHQ8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9mb3JtL3RlbXBsYXRlcy9iYXNlLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxsYWJlbD4ke2xhYmVsfTwvbGFiZWw+XFxuPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJJQk1DaGF0LWlucHV0LWNvbG9yc1xcXCIgbmFtZT1cXFwiJHtuYW1lfVxcXCIgdmFsdWU9XFxcIiR7dmFsdWV9XFxcIiAvPlxcbjxkaXYgY2xhc3M9XFxcIklCTUNoYXQtdmFsaWRhdGlvbi1lcnJvclxcXCIgZGF0YS12YWxpZGF0aW9uLWZvcj1cXFwiJHtuYW1lfVxcXCI+PC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvZm9ybS90ZW1wbGF0ZXMvZmllbGQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDYwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnJlcXVpcmUoJy4vc3R5bGVzLmNzcycpO1xuXG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG52YXIgc3RhdGUgPSByZXF1aXJlKCcuLi8uLi9zdGF0ZScpO1xudmFyIHN1YnNjcmliZSA9IGV2ZW50cy5zdWJzY3JpYmU7XG52YXIgcHVibGlzaCA9IGV2ZW50cy5wdWJsaXNoO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMnKTtcbnZhciB2YWxpZGF0aW9uID0gcmVxdWlyZSgnLi92YWxpZGF0aW9uJyk7XG52YXIgYWN0aXZlQ2xhc3NOYW1lID0gJ0lCTUNoYXQtYWNjZW50LWNvbG9ycyc7XG52YXIgbnMgPSAnSUJNQ2hhdC1jcmVkaXRjYXJkJztcbnZhciB3aWRnZXRzID0gW107XG52YXIgdGVtcGxhdGVzID0ge1xuXHRiYXNlOiByZXF1aXJlKCcuL3RlbXBsYXRlcy9iYXNlLmh0bWwnKVxufTtcblxudmFyIGNyZWRpdENhcmRMYXlvdXQgPSB7XG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHN1YnNjcmliZSgnbGF5b3V0OmNjLXZhbGlkYXRvcicsIGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdHZhciB3aWRnZXQgPSBuZXcgQ3JlZGl0Q2FyZChkYXRhKTtcblx0XHRcdHdpZGdldHNbZGF0YS51dWlkXSA9IHdpZGdldDtcblx0XHR9KTtcblx0fVxufTtcblxuZnVuY3Rpb24gQ3JlZGl0Q2FyZChkYXRhKSB7XG5cdHRoaXMuaW5pdChkYXRhKTtcbn1cblxuQ3JlZGl0Q2FyZC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0dGhpcy5kYXRhID0gZGF0YS5tZXNzYWdlLmxheW91dC5kYXRhIHx8IHt9O1xuXHR0aGlzLmRhdGEuYWNjZXB0ZWRDYXJkcyA9IHRoaXMuZGF0YS50eXBlcztcblx0dGhpcy51dWlkID0gZGF0YS51dWlkO1xuXHR0aGlzLnBhcmVudEVsZW1lbnQgPSBkYXRhLmVsZW1lbnQ7XG5cdHRoaXMubGF5b3V0RWxlbWVudCA9IGRhdGEubGF5b3V0RWxlbWVudDtcblx0dGhpcy5tc2dFbGVtZW50ID0gZGF0YS5tc2dFbGVtZW50O1xuXHR0aGlzLmRyYXdGb3JtKCk7XG5cdHRoaXMuc3Vic2NyaWJlU2VuZCA9IHN1YnNjcmliZSgnc2VuZCcsIHRoaXMucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMuYmluZCh0aGlzKSk7XG5cdHB1Ymxpc2goJ2Rpc2FibGUtaW5wdXQnKTtcbn07XG5cbkNyZWRpdENhcmQucHJvdG90eXBlLmRyYXdGb3JtID0gZnVuY3Rpb24oKSB7XG5cdHZhciB0ZXh0ID0gdGVtcGxhdGVzLmJhc2U7XG5cdHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dGV4dCA9IHV0aWxzLmNvbXBpbGUodGVtcGxhdGVzLmJhc2UsIHtcblx0XHRuczogbnNcblx0fSk7XG5cdHRoaXMuZWwuaW5uZXJIVE1MID0gdGV4dDtcblx0dGhpcy5sYXlvdXRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuXHR0aGlzLmNhbmNlbEJ1dHRvbiA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctY2FuY2VsJyk7XG5cdHRoaXMuY29udGludWVCdXR0b24gPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWNvbnRpbnVlJyk7XG5cdHRoaXMuZm9ybUVsZW1lbnRzID0ge307XG5cdHRoaXMuZmllbGRzID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZmllbGRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGZpZWxkID0gdGhpcy5maWVsZHNbaV07XG5cdFx0dmFyIG5hbWUgPSBmaWVsZC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcblx0XHR0aGlzLmZvcm1FbGVtZW50c1tuYW1lXSA9IGZpZWxkO1xuXHR9XG5cdHRoaXMuZm9ybUVsZW1lbnRzWydjY19mdWxsX25hbWUnXS5mb2N1cygpO1xuXHR0aGlzLmFkZExpc3RlbmVycygpO1xufTtcblxuQ3JlZGl0Q2FyZC5wcm90b3R5cGUuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDYW5jZWwuYmluZCh0aGlzKSk7XG5cdHRoaXMuY29udGludWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNvbnRpbnVlLmJpbmQodGhpcykpO1xufTtcblxuQ3JlZGl0Q2FyZC5wcm90b3R5cGUuYWRkRXJyb3IgPSBmdW5jdGlvbihuYW1lLCBtc2cpIHtcblx0dmFyIGVycm9yRWxlbWVudCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignW2RhdGEtdmFsaWRhdGlvbi1mb3I9XCInICsgbmFtZSArICdcIl0nKTtcblx0ZXJyb3JFbGVtZW50LmRhdGFzZXQudmFsaWQgPSBmYWxzZTtcblx0ZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gbXNnO1xufTtcblxuQ3JlZGl0Q2FyZC5wcm90b3R5cGUucmVtb3ZlRXJyb3IgPSBmdW5jdGlvbihuYW1lKSB7XG5cdHZhciBlcnJvckVsZW1lbnQgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZhbGlkYXRpb24tZm9yPVwiJyArIG5hbWUgKyAnXCJdJyk7XG5cdGVycm9yRWxlbWVudC5kYXRhc2V0LnZhbGlkID0gdHJ1ZTtcblx0ZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG59O1xuXG5DcmVkaXRDYXJkLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgdmFsaWQgPSB0cnVlO1xuXHR0aGlzLmZvcm1EYXRhID0ge307XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5maWVsZHMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZmllbGQgPSB0aGlzLmZpZWxkc1tpXTtcblx0XHR2YXIgbmFtZSA9IGZpZWxkLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuXHRcdHRoaXMuZm9ybURhdGFbbmFtZV0gPSBmaWVsZC52YWx1ZTtcblx0fVxuXG5cdGlmICh0aGlzLmZvcm1EYXRhLmNjX2Z1bGxfbmFtZS5sZW5ndGggPT09IDApIHtcblx0XHR0aGlzLmFkZEVycm9yKCdjY19mdWxsX25hbWUnLCAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4nKTtcblx0XHRpZiAodmFsaWQpIHRoaXMuZm9ybUVsZW1lbnRzWydjY19mdWxsX25hbWUnXS5mb2N1cygpO1xuXHRcdHZhbGlkID0gZmFsc2U7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5yZW1vdmVFcnJvcignY2NfZnVsbF9uYW1lJyk7XG5cdH1cblxuXHR2YXIgY2MgPSB2YWxpZGF0aW9uLnZhbGlkYXRlQ2FyZCh0aGlzLmRhdGEuYWNjZXB0ZWRDYXJkcywgdGhpcy5mb3JtRGF0YS5jY19udW1iZXIpO1xuXHRpZiAoIWNjLnZhbGlkKSB7XG5cdFx0dGhpcy5hZGRFcnJvcignY2NfbnVtYmVyJywgY2MubWVzc2FnZSk7XG5cdFx0aWYgKHZhbGlkKSB0aGlzLmZvcm1FbGVtZW50c1snY2NfbnVtYmVyJ10uZm9jdXMoKTtcblx0XHR2YWxpZCA9IGZhbHNlO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMucmVtb3ZlRXJyb3IoJ2NjX251bWJlcicpO1xuXHR9XG5cblx0dmFyIGV4cCA9IHZhbGlkYXRpb24udmFsaWRhdGVFeHAodGhpcy5mb3JtRGF0YS5jY19leHBfZGF0ZV9tb250aCwgdGhpcy5mb3JtRGF0YS5jY19leHBfZGF0ZV95ZWFyKTtcblx0aWYgKCFleHAudmFsaWQpIHtcblx0XHR0aGlzLmFkZEVycm9yKCdjY19leHBfZGF0ZScsIGV4cC5tZXNzYWdlKTtcblx0XHRpZiAodmFsaWQpIHRoaXMuZm9ybUVsZW1lbnRzWydjY19leHBfZGF0ZV9tb250aCddLmZvY3VzKCk7XG5cdFx0dmFsaWQgPSBmYWxzZTtcblx0fSBlbHNlIHtcblx0XHR0aGlzLnJlbW92ZUVycm9yKCdjY19leHBfZGF0ZScpO1xuXHR9XG5cblx0dmFyIGN2diA9IHZhbGlkYXRpb24udmFsaWRhdGVDVlYodGhpcy5mb3JtRGF0YS5jY19jb2RlKTtcblx0aWYgKCFjdnYudmFsaWQpIHtcblx0XHR0aGlzLmFkZEVycm9yKCdjY19jb2RlJywgY3Z2Lm1lc3NhZ2UpO1xuXHRcdGlmICh2YWxpZCkgdGhpcy5mb3JtRWxlbWVudHNbJ2NjX2NvZGUnXS5mb2N1cygpO1xuXHRcdHZhbGlkID0gZmFsc2U7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5yZW1vdmVFcnJvcignY2NfY29kZScpO1xuXHR9XG5cdHJldHVybiB2YWxpZDtcbn07XG5cbkNyZWRpdENhcmQucHJvdG90eXBlLmhhbmRsZUNvbnRpbnVlID0gZnVuY3Rpb24oKSB7XG5cdGlmICh0aGlzLnZhbGlkYXRlKCkpIHtcblx0XHR0aGlzLmZvcm1EYXRhLmNjX2V4cF9kYXRlID0gdGhpcy5mb3JtRGF0YS5jY19leHBfZGF0ZV9tb250aCArICcvJyArIHRoaXMuZm9ybURhdGEuY2NfZXhwX2RhdGVfeWVhcjtcblx0XHRzdGF0ZS5zZXRQcm9maWxlKHtcblx0XHRcdHNlbGVjdGVkQ2FyZDogdGhpcy5mb3JtRGF0YVxuXHRcdH0pO1xuXHRcdHB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0XHRzaWxlbnQ6IHRydWUsXG5cdFx0XHR0ZXh0OiAnc3VjY2Vzcydcblx0XHR9KTtcblx0fVxufTtcblxuQ3JlZGl0Q2FyZC5wcm90b3R5cGUuaGFuZGxlQ2FuY2VsID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoYWN0aXZlQ2xhc3NOYW1lKTtcblx0cHVibGlzaCgnc2VuZCcsIHtcblx0XHRzaWxlbnQ6IHRydWUsXG5cdFx0dGV4dDogJ2NhbmNlbCdcblx0fSk7XG5cdHB1Ymxpc2goJ2VuYWJsZS1pbnB1dCcpO1xufTtcblxuQ3JlZGl0Q2FyZC5wcm90b3R5cGUucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5jYW5jZWxCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNhbmNlbC5iaW5kKHRoaXMpKTtcblx0dGhpcy5jYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuXHR0aGlzLmNvbnRpbnVlQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDb250aW51ZS5iaW5kKHRoaXMpKTtcblx0dGhpcy5jb250aW51ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5maWVsZHMubGVuZ3RoOyBqKyspXG5cdFx0dGhpcy5maWVsZHNbal0uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuXG5cdHRoaXMuc3Vic2NyaWJlU2VuZC5yZW1vdmUoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlZGl0Q2FyZExheW91dDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9jYy12YWxpZGF0b3IvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA2MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5JQk1DaGF0LWNyZWRpdGNhcmQtY29udGFpbmVyIHtcXG5cXHR0ZXh0LWFsaWduOmNlbnRlcjtcXG5cXHRwYWRkaW5nOjAgMCAxZW0gMDtcXG59XFxuXFxuLklCTUNoYXQtY3JlZGl0Y2FyZC1yb3dzIHtcXG5cXHRtYXJnaW46YXV0bztcXG5cXHR0ZXh0LWFsaWduOmxlZnQ7XFxuXFx0bWF4LXdpZHRoOjM2MHB4O1xcblxcdHdpZHRoOjEwMCU7XFxufVxcblxcbi5JQk1DaGF0LWNyZWRpdGNhcmQtcm93IHtcXG5cXHR0ZXh0LWFsaWduOmxlZnQ7XFxuXFx0cGFkZGluZy1ib3R0b206MWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1jcmVkaXRjYXJkLXJvdyBpbnB1dCB7XFxuXFx0d2lkdGg6MTAwJTtcXG59XFxuXFxuZGl2W2RhdGEtdmFsaWRhdGlvbi1mb3JdIHtcXG5cXHRwYWRkaW5nLXRvcDowLjVlbTtcXG59XFxuXFxuLklCTUNoYXQtY3JlZGl0Y2FyZC1jb2wge1xcblxcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uSUJNQ2hhdC1jcmVkaXRjYXJkLWNvbCBpbnB1dHtcXG5cXHR0ZXh0LWFsaWduOmNlbnRlcjtcXG5cXHR3aWR0aDo0MHB4O1xcbn1cXG5cXG4uSUJNQ2hhdC1jcmVkaXRjYXJkLWNvbDpsYXN0LWNoaWxkIGlucHV0IHtcXG5cXHR3aWR0aDo2MHB4O1xcbn1cXG5cXG4uSUJNQ2hhdC1jcmVkaXRjYXJkLWJ1dHRvbnMge1xcblxcdGhlaWdodDoyLjVlbTtcXG59XFxuXFxuLklCTUNoYXQtY3JlZGl0Y2FyZC1idXR0b25zIGJ1dHRvbiB7XFxuXFx0d2lkdGg6OTBweDtcXG5cXHRmbG9hdDpsZWZ0O1xcbn1cXG5cXG4uSUJNQ2hhdC1jcmVkaXRjYXJkLWJ1dHRvbnMgYnV0dG9uOmxhc3QtY2hpbGQge1xcblxcdGZsb2F0OnJpZ2h0O1xcbn1cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jhdy1sb2FkZXIhLi9zcmMvbGF5b3V0cy9jYy12YWxpZGF0b3Ivc3R5bGVzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDYzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbi8vaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUGF5bWVudF9jYXJkX251bWJlclxuXG52YXIgc3RhdGUgPSB7XG5cdGFjY2VwdGVkQ2FyZHM6IFtdLFxuXHRjYXJkTnVtYmVyOiAnJyxcblx0Y2FyZFR5cGU6ICcnXG59O1xuXG52YXIgbWVzc2FnZXMgPSB7XG5cdHJlcXVpcmVkOiAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4nLFxuXHRhY2NlcHRlZENhcmQ6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB0ZXh0ID0gJ1dlIGFjY2VwdCAnO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBzdGF0ZS5hY2NlcHRlZENhcmRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoaSA+IDApXG5cdFx0XHRcdHRleHQgKz0gJywgJztcblx0XHRcdGlmIChpID09PSAoc3RhdGUuYWNjZXB0ZWRDYXJkcy5sZW5ndGggLSAxKSlcblx0XHRcdFx0dGV4dCArPSAnIGFuZCAnO1xuXHRcdFx0dGV4dCArPSBjYXJkRGF0YVtzdGF0ZS5hY2NlcHRlZENhcmRzW2ldXS5odW1hbjtcblx0XHR9XG5cdFx0dGV4dCArPSAnLiBQbGVhc2UgdXNlIGEgdmFsaWQgY2FyZC4nO1xuXHRcdHJldHVybiB0ZXh0O1xuXHR9LFxuXHRpbnZhbGlkOiAnWW91ciBjcmVkaXQgY2FyZCBudW1iZXIgaXMgaW52YWxpZC4nLFxuXHRpbnZhbGlkRXhwaXJhdGlvbjogJ1lvdXIgY3JlZGl0IGNhcmQgZXhwaXJhdGlvbiBkYXRlIGlzIGludmFsaWQuJyxcblx0aW52YWxpZEN2djogJ1lvdXIgQ1ZWIGlzIGludmFsaWQuJ1xufTtcblxudmFyIGNhcmREYXRhID0ge1xuXHRcInZpc2FcIjoge1xuXHRcdGh1bWFuOiBcIlZpc2FcIixcblx0XHRwcmVmaXhlczogWzRdLFxuXHRcdGxlbmd0aHM6IFsxMywgMTYsIDE5XVxuXHR9LFxuXHRcIm1hc3RlcmNhcmRcIjoge1xuXHRcdGh1bWFuOiBcIk1hc3RlckNhcmRcIixcblx0XHRwcmVmaXhlczogWzUxLCA1MiwgNTMsIDU0LCA1NV0sXG5cdFx0bGVuZ3RoczogWzE2XVxuXHR9LFxuXHRcImFtZXhcIjoge1xuXHRcdGh1bWFuOiBcIkFtZXJpY2FuIEV4cHJlc3NcIixcblx0XHRwcmVmaXhlczogWzM0LCAzN10sXG5cdFx0bGVuZ3RoczogWzE1XVxuXHR9LFxuXHRcImRpc2NvdmVyXCI6IHtcblx0XHRodW1hbjogXCJEaXNjb3ZlclwiLFxuXHRcdHByZWZpeGVzOiBbNjAxMSwgNjVdLFxuXHRcdGxlbmd0aHM6IFsxNiwgMTldXG5cdH1cbn07XG5cbnZhciBpO1xuLy9NYXN0ZXJDYXJkIGFkZGluZyB0aGVzZSBudW1iZXJzIGluIDIwMTdcbmZvciAoaSA9IDIyMjE7IGkgPD0gMjcyMDsgaSsrKVxuXHRjYXJkRGF0YS5tYXN0ZXJjYXJkLnByZWZpeGVzLnB1c2goaSk7XG5cbmZvciAoaSA9IDYyMjEyNjsgaSA8PSA2MjI5MjU7IGkrKylcblx0Y2FyZERhdGEuZGlzY292ZXIucHJlZml4ZXMucHVzaChpKTtcblxuZm9yIChpID0gNjQ0OyBpIDw9IDY0OTsgaSsrKVxuXHRjYXJkRGF0YS5kaXNjb3Zlci5wcmVmaXhlcy5wdXNoKGkpO1xuXG5mdW5jdGlvbiBfZGV0ZWN0Q2FyZCgpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdGF0ZS5hY2NlcHRlZENhcmRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGRhdGEgPSBjYXJkRGF0YVtzdGF0ZS5hY2NlcHRlZENhcmRzW2ldXTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRhdGEucHJlZml4ZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdHZhciB4ID0gZGF0YS5wcmVmaXhlc1tqXS50b1N0cmluZygpO1xuXHRcdFx0aWYgKHN0YXRlLmNhcmROdW1iZXIuc3Vic3RyaW5nKDAsIHgubGVuZ3RoKSA9PT0geCkge1xuXHRcdFx0XHRzdGF0ZS5jYXJkVHlwZSA9IHN0YXRlLmFjY2VwdGVkQ2FyZHNbaV07XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIF9jaGVja0t1aG4oKSB7XG5cdHZhciBjaGVja3N1bSA9IDA7IC8vIHJ1bm5pbmcgY2hlY2tzdW0gdG90YWxcblx0dmFyIGogPSAxOyAvLyB0YWtlcyB2YWx1ZSBvZiAxIG9yIDJcblxuXHQvLyBQcm9jZXNzIGVhY2ggZGlnaXQgb25lIGJ5IG9uZSBzdGFydGluZyBhdCB0aGUgcmlnaHRcblx0dmFyIGNhbGM7XG5cdGZvciAodmFyIGkgPSBzdGF0ZS5jYXJkTnVtYmVyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0Ly8gRXh0cmFjdCB0aGUgbmV4dCBkaWdpdCBhbmQgbXVsdGlwbHkgYnkgMSBvciAyIG9uIGFsdGVybmF0aXZlIGRpZ2l0cy5cblx0XHRjYWxjID0gTnVtYmVyKHN0YXRlLmNhcmROdW1iZXIuY2hhckF0KGkpKSAqIGo7XG5cblx0XHQvLyBJZiB0aGUgcmVzdWx0IGlzIGluIHR3byBkaWdpdHMgYWRkIDEgdG8gdGhlIGNoZWNrc3VtIHRvdGFsXG5cdFx0aWYgKGNhbGMgPiA5KSB7XG5cdFx0XHRjaGVja3N1bSA9IGNoZWNrc3VtICsgMTtcblx0XHRcdGNhbGMgPSBjYWxjIC0gMTA7XG5cdFx0fVxuXG5cdFx0Ly8gQWRkIHRoZSB1bml0cyBlbGVtZW50IHRvIHRoZSBjaGVja3N1bSB0b3RhbFxuXHRcdGNoZWNrc3VtID0gY2hlY2tzdW0gKyBjYWxjO1xuXG5cdFx0Ly8gU3dpdGNoIHRoZSB2YWx1ZSBvZiBqXG5cdFx0aiA9IChqID09IDEpID8gMiA6IDE7XG5cdH1cblxuXHQvLyBBbGwgZG9uZSAtIGlmIGNoZWNrc3VtIGlzIGRpdmlzaWJsZSBieSAxMCwgaXQgaXMgYSB2YWxpZCBtb2R1bHVzIDEwLlxuXHQvLyBJZiBub3QsIHJlcG9ydCBhbiBlcnJvci5cblx0cmV0dXJuIChjaGVja3N1bSAlIDEwICE9IDApID8gZmFsc2UgOiB0cnVlO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNhcmQoYWNjZXB0ZWRDYXJkcywgY2FyZE51bWJlcikge1xuXHRzdGF0ZS5hY2NlcHRlZENhcmRzID0gYWNjZXB0ZWRDYXJkcztcblx0c3RhdGUuY2FyZE51bWJlciA9IGNhcmROdW1iZXIucmVwbGFjZSgvXFxEL2csJycpOyAvL3N0cmlwIGV4dHJhIGNoYXJhY3RlcnNcblx0aWYgKGNhcmROdW1iZXIubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwibWVzc2FnZVwiOiBtZXNzYWdlcy5yZXF1aXJlZCxcblx0XHRcdFwidmFsaWRcIjogZmFsc2Vcblx0XHR9O1xuXHR9XG5cdGlmIChzdGF0ZS5jYXJkTnVtYmVyLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRcIm1lc3NhZ2VcIjogbWVzc2FnZXMucmVxdWlyZWQsXG5cdFx0XHRcInZhbGlkXCI6IGZhbHNlXG5cdFx0fTtcblx0fVxuXHRpZiAoX2RldGVjdENhcmQoKSkge1xuXHRcdGlmIChzdGF0ZS5hY2NlcHRlZENhcmRzLmluZGV4T2Yoc3RhdGUuY2FyZFR5cGUpID09PSAtMSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XCJtZXNzYWdlXCI6IG1lc3NhZ2VzLmFjY2VwdGVkQ2FyZCgpLFxuXHRcdFx0XHRcInZhbGlkXCI6IGZhbHNlXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRpZiAoY2FyZERhdGFbc3RhdGUuY2FyZFR5cGVdLmxlbmd0aHMuaW5kZXhPZihzdGF0ZS5jYXJkTnVtYmVyLmxlbmd0aCkgPT09IC0xKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcIm1lc3NhZ2VcIjogbWVzc2FnZXMuaW52YWxpZCxcblx0XHRcdFx0XCJ2YWxpZFwiOiBmYWxzZVxuXHRcdFx0fTtcblx0XHR9XG5cdFx0aWYgKF9jaGVja0t1aG4oKSA9PT0gZmFsc2UpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFwibWVzc2FnZVwiOiBtZXNzYWdlcy5pbnZhbGlkLFxuXHRcdFx0XHRcInZhbGlkXCI6IGZhbHNlXG5cdFx0XHR9O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0XCJtZXNzYWdlXCI6IG1lc3NhZ2VzLmludmFsaWQsXG5cdFx0XHRcInZhbGlkXCI6IGZhbHNlXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0XCJ2YWxpZFwiOiB0cnVlXG5cdH07XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwKHVzZXJNLCB1c2VyWSkge1xuXHR2YXIgZCA9IG5ldyBEYXRlKCk7XG5cdHZhciBtb250aCA9IGQuZ2V0TW9udGgoKTtcblx0dmFyIHllYXIgPSBkLmdldEZ1bGxZZWFyKCk7XG5cblx0aWYgKHVzZXJNLmxlbmd0aCA9PT0gMCB8fCB1c2VyWS5sZW5ndGggPT09IDAgfHwgdXNlck0ucmVwbGFjZSgvXFxEL2csJycpLmxlbmd0aCA9PT0gMCB8fCB1c2VyWS5yZXBsYWNlKC9cXEQvZywnJykubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwibWVzc2FnZVwiOiBtZXNzYWdlcy5yZXF1aXJlZCxcblx0XHRcdFwidmFsaWRcIjogZmFsc2Vcblx0XHR9O1xuXHR9XG5cblx0dXNlck0gPSBwYXJzZUludCh1c2VyTSwgMTApO1xuXHR1c2VyWSA9IHBhcnNlSW50KHVzZXJZLCAxMCk7XG5cblx0aWYgKHVzZXJNID4gMTIgfHwgdXNlck0gPCAxIHx8ICh1c2VyWSA+IHllYXIgKyAyMCkgfHwgKHVzZXJZIDwgeWVhciB8fCAodXNlclkgPT09IHllYXIgJiYgdXNlck0gPCBtb250aCkpKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwibWVzc2FnZVwiOiBtZXNzYWdlcy5pbnZhbGlkRXhwaXJhdGlvbixcblx0XHRcdFwidmFsaWRcIjogZmFsc2Vcblx0XHR9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0XCJ2YWxpZFwiOiB0cnVlXG5cdH07XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ1ZWKENWVikge1xuXHRpZiAoQ1ZWLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRcIm1lc3NhZ2VcIjogbWVzc2FnZXMucmVxdWlyZWQsXG5cdFx0XHRcInZhbGlkXCI6IGZhbHNlXG5cdFx0fTtcblx0fVxuXHRpZiAoIWlzTmFOKENWVikgJiYgKENWViA+IDk5OTkgfHwgQ1ZWIDwgMTAwKSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRcIm1lc3NhZ2VcIjogbWVzc2FnZXMuaW52YWxpZEN2dixcblx0XHRcdFwidmFsaWRcIjogZmFsc2Vcblx0XHR9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0XCJ2YWxpZFwiOiB0cnVlXG5cdH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHR2YWxpZGF0ZUNhcmQ6IHZhbGlkYXRlQ2FyZCxcblx0dmFsaWRhdGVFeHA6IHZhbGlkYXRlRXhwLFxuXHR2YWxpZGF0ZUNWVjogdmFsaWRhdGVDVlYsXG5cdGNhcmREYXRhOiBjYXJkRGF0YVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9jYy12YWxpZGF0b3IvdmFsaWRhdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDY0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiJHtuc30tY29udGFpbmVyXFxcIj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1yb3dzXFxcIj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1yb3dcXFwiPlxcblxcdFxcdFxcdDxsYWJlbD5OYW1lIG9uIENhcmQ8L2xhYmVsPlxcblxcdFxcdFxcdDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiSUJNQ2hhdC1pbnB1dC1jb2xvcnNcXFwiIG5hbWU9XFxcImNjX2Z1bGxfbmFtZVxcXCIgLz5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJJQk1DaGF0LXZhbGlkYXRpb24tZXJyb3JcXFwiIGRhdGEtdmFsaWRhdGlvbi1mb3I9XFxcImNjX2Z1bGxfbmFtZVxcXCIgZGF0YS12YWxpZD1cXFwidHJ1ZVxcXCI+PC9kaXY+XFxuXFx0XFx0PC9kaXY+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tcm93XFxcIj5cXG5cXHRcXHRcXHQ8bGFiZWw+Q3JlZGl0IENhcmQgTnVtYmVyPC9sYWJlbD5cXG5cXHRcXHRcXHQ8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcIklCTUNoYXQtaW5wdXQtY29sb3JzXFxcIiBuYW1lPVxcXCJjY19udW1iZXJcXFwiIC8+XFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiSUJNQ2hhdC12YWxpZGF0aW9uLWVycm9yXFxcIiBkYXRhLXZhbGlkYXRpb24tZm9yPVxcXCJjY19udW1iZXJcXFwiIGRhdGEtdmFsaWQ9XFxcInRydWVcXFwiPjwvZGl2PlxcblxcdFxcdDwvZGl2PlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LXJvd1xcXCI+XFxuXFx0XFx0XFx0PGxhYmVsPkV4cGlyYXRpb24gRGF0ZTwvbGFiZWw+XFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tY29sXFxcIj5cXG5cXHRcXHRcXHRcXHQ8aW5wdXQgY2xhc3M9XFxcIiR7bnN9LWRhdGUgSUJNQ2hhdC1pbnB1dC1jb2xvcnNcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImNjX2V4cF9kYXRlX21vbnRoXFxcIiBwbGFjZWhvbGRlcj1cXFwiTU1cXFwiIG1heGxlbmd0aD1cXFwiMlxcXCIgLz5cXG5cXHRcXHRcXHRcXHQ8aW5wdXQgY2xhc3M9XFxcIiR7bnN9LWRhdGUgSUJNQ2hhdC1pbnB1dC1jb2xvcnNcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImNjX2V4cF9kYXRlX3llYXJcXFwiIHBsYWNlaG9sZGVyPVxcXCJZWVlZXFxcIiBtYXhsZW5ndGg9XFxcIjRcXFwiIC8+XFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiSUJNQ2hhdC12YWxpZGF0aW9uLWVycm9yXFxcIiBkYXRhLXZhbGlkYXRpb24tZm9yPVxcXCJjY19leHBfZGF0ZVxcXCIgZGF0YS12YWxpZD1cXFwidHJ1ZVxcXCI+PC9kaXY+XFxuXFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0PC9kaXY+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tcm93XFxcIj5cXG5cXHRcXHRcXHQ8bGFiZWw+Q1ZWPC9sYWJlbD5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1jb2xcXFwiPlxcblxcdFxcdFxcdFxcdDxpbnB1dCBjbGFzcz1cXFwiJHtuc30tY3Z2IElCTUNoYXQtaW5wdXQtY29sb3JzXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJjY19jb2RlXFxcIiAvPlxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIklCTUNoYXQtdmFsaWRhdGlvbi1lcnJvclxcXCIgZGF0YS12YWxpZGF0aW9uLWZvcj1cXFwiY2NfY29kZVxcXCIgZGF0YS12YWxpZD1cXFwidHJ1ZVxcXCI+PC9kaXY+XFxuXFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0PC9kaXY+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tcm93ICR7bnN9LWJ1dHRvbnNcXFwiPlxcblxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcIiR7bnN9LWNhbmNlbCBJQk1DaGF0LXNlY29uZGFyeS1jb2xvcnNcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcIiR7bnN9LWNvbnRpbnVlIElCTUNoYXQtaW5wdXQtY29sb3JzXFxcIj5Db250aW51ZTwvYnV0dG9uPlxcblxcdFxcdDwvZGl2PlxcblxcdDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL2NjLXZhbGlkYXRvci90ZW1wbGF0ZXMvYmFzZS5odG1sXG4gKiogbW9kdWxlIGlkID0gNjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIHN0YXJ0ID0gcmVxdWlyZSgnLi9zdGFydCcpO1xudmFyIHJlc2l6ZSA9IHJlcXVpcmUoJy4vcmVzaXplJyk7XG52YXIgcmVjZWl2ZSA9IHJlcXVpcmUoJy4vcmVjZWl2ZScpO1xudmFyIHNlbmQgPSByZXF1aXJlKCcuL3NlbmQnKTtcbnZhciBzZW5kTW9jayA9IHJlcXVpcmUoJy4vc2VuZC1tb2NrJyk7XG52YXIgc2VuZElucHV0TWVzc2FnZSA9IHJlcXVpcmUoJy4vc2VuZC1pbnB1dC1tZXNzYWdlJyk7XG52YXIgaW5wdXQgPSByZXF1aXJlKCcuL2lucHV0Jyk7XG52YXIgZXJyb3IgPSByZXF1aXJlKCcuL2Vycm9yJyk7XG52YXIgcGxheWJhY2sgPSByZXF1aXJlKCcuL3BsYXliYWNrJyk7XG52YXIgc2Nyb2xsVG9Cb3R0b20gPSByZXF1aXJlKCcuL3Njcm9sbC10by1ib3R0b20nKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHJlc2l6ZTogcmVzaXplLFxuXHRzdGFydDogc3RhcnQsXG5cdHNlbmQ6IHNlbmQsXG5cdHNlbmRNb2NrOiBzZW5kTW9jayxcblx0cmVjZWl2ZTogcmVjZWl2ZSxcblx0aW5wdXQ6IGlucHV0LFxuXHRlcnJvcjogZXJyb3IsXG5cdHNjcm9sbFRvQm90dG9tOiBzY3JvbGxUb0JvdHRvbSxcblx0c2VuZElucHV0TWVzc2FnZTogc2VuZElucHV0TWVzc2FnZSxcblx0cGxheWJhY2s6IHBsYXliYWNrXG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9ldmVudHMvaGFuZGxlcnMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA2NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgc3RhdGUgPSByZXF1aXJlKCcuLi8uLi9zdGF0ZScpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMnKTtcbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcbnZhciB0ZW1wbGF0ZXMgPSByZXF1aXJlKCcuLi8uLi90ZW1wbGF0ZXMnKTtcblxuZnVuY3Rpb24gc3RhcnQoZGF0YSkge1xuXHR2YXIgY3VycmVudDtcblx0c3RhdGUuc2V0U3RhdGUoZGF0YSk7XG5cdGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHR1dGlscy5hdHRhY2hTdHlsZXMoKTtcblx0Y3VycmVudC5yb290LmNsYXNzTmFtZSArPSBcIiBjaGF0SUQtXCIgKyBjdXJyZW50LmNoYXRJRDtcblx0Y3VycmVudC5yb290LmlubmVySFRNTCA9IHRlbXBsYXRlcy5zdGFydDtcblx0dmFyIG91dGVyQ29udGFpbmVyID0gY3VycmVudC5yb290LnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LW91dGVyLWNvbnRhaW5lcicpO1xuXHR2YXIgY2hhdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjaGF0Qm94LmNsYXNzTGlzdC5hZGQoJ0lCTUNoYXQtaW5wdXQtY29udGFpbmVyJyk7XG5cdGNoYXRCb3guY2xhc3NMaXN0LmFkZCgnSUJNQ2hhdC1pbnB1dC1jb250YWluZXItdGhlbWUnKTtcblx0Y2hhdEJveC5pbm5lckhUTUwgPSB0ZW1wbGF0ZXMuaW5wdXQ7XG5cdG91dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoYXRCb3gpO1xuXHR2YXIgZWxlbWVudHMgPSB7XG5cdFx0Y29udGFpbmVyOiBjdXJyZW50LnJvb3QucXVlcnlTZWxlY3RvcignLklCTUNoYXQtY2hhdC1jb250YWluZXInKSxcblx0XHRjaGF0SG9sZGVyOiBjdXJyZW50LnJvb3QucXVlcnlTZWxlY3RvcignLklCTUNoYXQtbWVzc2FnZXMnKSxcblx0XHRpbm5lckNvbnRhaW5lcjogY3VycmVudC5yb290LnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LWlubmVyLWNvbnRhaW5lcicpXG5cdH07XG5cdC8vVE9ETzogcmVtb3ZlIGlmIGNvbmRpdGlvbmFsIGFmdGVyIERhc2hib2FyZCBpbXBsZW1lbnRzIG5ldyBwbGF5YmFja1xuXHRpZiAoY3VycmVudC5wbGF5YmFjayAhPT0gdHJ1ZSkge1xuXHRcdGVsZW1lbnRzLmlucHV0SG9sZGVyID0gY3VycmVudC5yb290LnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LWlucHV0LWNvbnRhaW5lcicpO1xuXHRcdGVsZW1lbnRzLmlucHV0ID0gY3VycmVudC5yb290LnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LWNoYXQtdGV4dGJveCcpO1xuXHRcdGVsZW1lbnRzLmZvcm0gPSBjdXJyZW50LnJvb3QucXVlcnlTZWxlY3RvcignLklCTUNoYXQtaW5wdXQtZm9ybScpO1xuXHRcdGVsZW1lbnRzLmxvYWRlciA9IGN1cnJlbnQucm9vdC5xdWVyeVNlbGVjdG9yKCcuSUJNQ2hhdC1pbnB1dC1sb2FkaW5nJyk7XG5cblx0XHRlbGVtZW50cy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR9KTtcblxuXHRcdGVsZW1lbnRzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0aWYgKGUua2V5Q29kZSA9PT0gMTMpXG5cdFx0XHRcdGV2ZW50cy5wdWJsaXNoKCdzZW5kLWlucHV0LW1lc3NhZ2UnKTtcblx0XHR9KTtcblxuXHRcdGVsZW1lbnRzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRldmVudHMucHVibGlzaCgncmVzaXplJyk7XG5cdFx0fSk7XG5cblx0XHRlbGVtZW50cy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRldmVudHMucHVibGlzaCgncmVzaXplJyk7XG5cdFx0fSk7XG5cdH1cblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXRpbHMuZGVib3VuY2UoZnVuY3Rpb24oKSB7XG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ3Jlc2l6ZScpO1xuXHR9LCAxMDAwKSk7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ3Jlc2l6ZScpO1xuXHR9KTtcblxuXHRzdGF0ZS5zZXRTdGF0ZShlbGVtZW50cyk7XG5cdGV2ZW50cy5wdWJsaXNoKCdyZXNpemUnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFydDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRzL2hhbmRsZXJzL3N0YXJ0LmpzXG4gKiogbW9kdWxlIGlkID0gNjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRpbnB1dDogcmVxdWlyZSgnLi9pbnB1dC5odG1sJyksXG5cdHJlY2VpdmU6IHJlcXVpcmUoJy4vcmVjZWl2ZS5odG1sJyksXG5cdHNlbmQ6IHJlcXVpcmUoJy4vc2VuZC5odG1sJyksXG5cdHN0YXJ0OiByZXF1aXJlKCcuL3N0YXJ0Lmh0bWwnKVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGVtcGxhdGVzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBjbGFzcz1cXFwiSUJNQ2hhdC1pbnB1dC1mb3JtIElCTUNoYXQtaW5wdXQtZm9ybS10aGVtZVxcXCI+XFxuXFx0PGlucHV0IGFyaWEtbGFiZWxsZWRieT1cXFwiRW50ZXIgYSBNZXNzYWdlXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiSUJNQ2hhdC1jaGF0LXRleHRib3ggSUJNQ2hhdC1jaGF0LXRleHRib3gtdGhlbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBtZXNzYWdlLi4uXFxcIiAvPlxcblxcdDxkaXYgY2xhc3M9XFxcIklCTUNoYXQtaWJtLXNwaW5uZXItc3RhcnQgSUJNQ2hhdC1pbnB1dC1sb2FkaW5nIElCTUNoYXQtaW5wdXQtbG9hZGluZy10aGVtZVxcXCI+XFxuXFx0XFx0PHN2ZyBjbGFzcz1cXFwiSUJNQ2hhdC1pYm0tc3Bpbm5lclxcXCIgd2lkdGg9MzIgaGVpZ2h0PTMyIHZpZXdCb3g9XFxcIi0xNiAtMTYgMzIgMzJcXFwiPlxcblxcdFxcdFxcdDxjaXJjbGUgY3g9MCBjeT0wIHI9OCAvPjwvc3ZnPlxcblxcdFxcdDwvc3ZnPlxcblxcdDwvZGl2PlxcbjwvZm9ybT5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGVtcGxhdGVzL2lucHV0Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA2OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIiR7ZGF0YS51dWlkfVxcXCIgY2xhc3M9XFxcIklCTUNoYXQtd2F0c29uLW1lc3NhZ2UtY29udGFpbmVyIElCTUNoYXQtd2F0c29uLW1lc3NhZ2UtY29udGFpbmVyLXRoZW1lXFxcIj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCJJQk1DaGF0LXdhdHNvbi1tZXNzYWdlIElCTUNoYXQtd2F0c29uLW1lc3NhZ2UtdGhlbWVcXFwiPjwvZGl2PlxcblxcdDxkaXYgY2xhc3M9XFxcIklCTUNoYXQtd2F0c29uLWxheW91dFxcXCI+PC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3RlbXBsYXRlcy9yZWNlaXZlLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA3MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgaWQ9XFxcIiR7ZGF0YS51dWlkfVxcXCIgY2xhc3M9XFxcIklCTUNoYXQtdXNlci1tZXNzYWdlLWNvbnRhaW5lciBJQk1DaGF0LXVzZXItbWVzc2FnZS1jb250YWluZXItdGhlbWVcXFwiPlxcblxcdDxkaXYgY2xhc3M9XFxcIklCTUNoYXQtdXNlci1tZXNzYWdlIElCTUNoYXQtdXNlci1tZXNzYWdlLXRoZW1lIElCTUNoYXQtc2Vjb25kYXJ5LWNvbG9yc1xcXCI+PC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3RlbXBsYXRlcy9zZW5kLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA3MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIklCTUNoYXQtb3V0ZXItY29udGFpbmVyIElCTUNoYXQtb3V0ZXItY29udGFpbmVyLXRoZW1lIElCTUNoYXQtZGVmYXVsdC1jb2xvcnNcXFwiPlxcblxcdDxkaXYgY2xhc3M9XFxcIklCTUNoYXQtY2hhdC1jb250YWluZXIgSUJNQ2hhdC1jaGF0LWNvbnRhaW5lci10aGVtZVxcXCI+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiSUJNQ2hhdC1pbm5lci1jb250YWluZXIgSUJNQ2hhdC1pbm5lci1jb250YWluZXItdGhlbWVcXFwiPlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIklCTUNoYXQtbWVzc2FnZXMgSUJNQ2hhdC1tZXNzYWdlcy10aGVtZVxcXCI+PC9kaXY+XFxuXFx0XFx0PC9kaXY+XFxuXFx0PC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3RlbXBsYXRlcy9zdGFydC5odG1sXG4gKiogbW9kdWxlIGlkID0gNzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIHN0YXRlID0gcmVxdWlyZSgnLi4vLi4vc3RhdGUnKTtcblxuZnVuY3Rpb24gcmVzaXplKCkge1xuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0XHRpZiAoY3VycmVudC5hY3RpdmUpIHtcblx0XHRcdGN1cnJlbnQuY2hhdEhvbGRlci5zdHlsZS5tYXhIZWlnaHQgPSAoY3VycmVudC5yb290LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAtIGN1cnJlbnQuaW5wdXRIb2xkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0KSArICdweCc7XG5cdFx0XHRjdXJyZW50LmNoYXRIb2xkZXIuc3R5bGUubWF4V2lkdGggPSAoKGN1cnJlbnQucm9vdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCA+IDI4OCkgPyBjdXJyZW50LnJvb3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggOiAyODgpICsgJ3B4Jztcblx0XHR9XG5cdH0sIDMwMCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVzaXplO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9ldmVudHMvaGFuZGxlcnMvcmVzaXplLmpzXG4gKiogbW9kdWxlIGlkID0gNzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIHN0YXRlID0gcmVxdWlyZSgnLi4vLi4vc3RhdGUnKTtcbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnbG9kYXNoL2Fzc2lnbicpO1xudmFyIHRlbXBsYXRlcyA9IHJlcXVpcmUoJy4uLy4uL3RlbXBsYXRlcycpO1xuXG5mdW5jdGlvbiBfbGF5b3V0QW5kQWN0aW9ucyhkZWJ1ZywgZGF0YSkge1xuXHRkYXRhLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGRhdGEudXVpZCArICc6bGFzdC1jaGlsZCcpO1xuXHRkYXRhLmxheW91dEVsZW1lbnQgPSBkYXRhLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLklCTUNoYXQtd2F0c29uLWxheW91dCcpO1xuXHRkYXRhLm1zZ0VsZW1lbnQgPSBkYXRhLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLklCTUNoYXQtd2F0c29uLW1lc3NhZ2UnKTtcblxuXHRpZiAoZGF0YS5tZXNzYWdlICYmIGRhdGEubWVzc2FnZS5hY3Rpb24gJiYgZGF0YS5tZXNzYWdlLmFjdGlvbi5uYW1lKSB7XG5cdFx0dmFyIGFjdGlvbiA9ICdhY3Rpb246JyArIGRhdGEubWVzc2FnZS5hY3Rpb24ubmFtZTtcblx0XHRpZiAoZXZlbnRzLmhhc1N1YnNjcmlwdGlvbihhY3Rpb24pKSB7XG5cdFx0XHRldmVudHMucHVibGlzaChhY3Rpb24sIGRhdGEsIGV2ZW50cy5jb21wbGV0ZUV2ZW50KTtcblx0XHRcdGlmIChkZWJ1Zylcblx0XHRcdFx0Y29uc29sZS5sb2coJ0NhbGwgdG8gJyArIGFjdGlvbik7XG5cdFx0fSBlbHNlIGlmIChkZWJ1Zykge1xuXHRcdFx0Y29uc29sZS53YXJuKCdOb3RoaW5nIGlzIHN1YnNjcmliZWQgdG8gJyArIGFjdGlvbik7XG5cdFx0fVxuXHR9XG5cblx0aWYgKGRhdGEubWVzc2FnZSAmJiBkYXRhLm1lc3NhZ2UubGF5b3V0ICYmIGRhdGEubWVzc2FnZS5sYXlvdXQubmFtZSkge1xuXHRcdHZhciBsYXlvdXQgPSAnbGF5b3V0OicgKyBkYXRhLm1lc3NhZ2UubGF5b3V0Lm5hbWU7XG5cdFx0aWYgKGV2ZW50cy5oYXNTdWJzY3JpcHRpb24obGF5b3V0KSkge1xuXHRcdFx0ZXZlbnRzLnB1Ymxpc2gobGF5b3V0LCBkYXRhKTtcblx0XHRcdGlmIChkZWJ1Zylcblx0XHRcdFx0Y29uc29sZS5sb2coJ0NhbGwgdG8gJyArIGxheW91dCk7XG5cdFx0fSBlbHNlIGlmIChkZWJ1Zykge1xuXHRcdFx0Y29uc29sZS53YXJuKCdOb3RoaW5nIGlzIHN1YnNjcmliZWQgdG8gJyArIGxheW91dCk7XG5cdFx0fVxuXHR9XG5cblx0ZXZlbnRzLnB1Ymxpc2goJ2Rpc2FibGUtbG9hZGluZycpO1xuXHRldmVudHMucHVibGlzaCgnc2Nyb2xsLXRvLWJvdHRvbScpO1xuXHRldmVudHMucHVibGlzaCgnZm9jdXMtaW5wdXQnKTtcbn1cblxuZnVuY3Rpb24gcmVjZWl2ZShkYXRhKSB7XG5cdHZhciBjaGVja0RhdGEgPSAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSA/IHsgbWVzc2FnZTogeyB0ZXh0OiBkYXRhIH0gfSA6IGRhdGE7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0ZGF0YSA9IGFzc2lnbih7fSwgY2hlY2tEYXRhLCB7IHV1aWQ6IHV0aWxzLmdldFVVSUQoKSB9KTtcblx0c3RhdGUuc2V0U3RhdGUoe1xuXHRcdG1lc3NhZ2VzOiBbXS5jb25jYXQoY3VycmVudC5tZXNzYWdlcyB8fCBbXSwgZGF0YSksXG5cdFx0aGFzRXJyb3I6IGZhbHNlXG5cdH0pO1xuXHR2YXIgbXNnID0gKGRhdGEubWVzc2FnZSAmJiBkYXRhLm1lc3NhZ2UudGV4dCkgPyAoKEFycmF5LmlzQXJyYXkoZGF0YS5tZXNzYWdlLnRleHQpKSA/IGRhdGEubWVzc2FnZS50ZXh0IDogW2RhdGEubWVzc2FnZS50ZXh0XSkgOiBbJyddO1xuXHRpZiAobXNnLmxlbmd0aCA9PT0gMClcblx0XHRtc2cgPSBbJyddO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IG1zZy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtO1xuXHRcdGN1cnJlbnQuY2hhdEhvbGRlci5pbm5lckhUTUwgKz0gdXRpbHMuY29tcGlsZSh0ZW1wbGF0ZXMucmVjZWl2ZSwgeyAnZGF0YS51dWlkJzogZGF0YS51dWlkIH0pO1xuXHRcdGl0ZW0gPSBjdXJyZW50LmNoYXRIb2xkZXIucXVlcnlTZWxlY3RvcignLicgKyBkYXRhLnV1aWQgKyAnOmxhc3QtY2hpbGQgLklCTUNoYXQtd2F0c29uLW1lc3NhZ2UnKTtcblx0XHR1dGlscy53cml0ZU1lc3NhZ2UoaXRlbSwgbXNnW2ldKTtcblx0XHRpZiAoaSA9PT0gKG1zZy5sZW5ndGggLSAxKSlcblx0XHRcdF9sYXlvdXRBbmRBY3Rpb25zKGN1cnJlbnQuREVCVUcsIGRhdGEpO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVjZWl2ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRzL2hhbmRsZXJzL3JlY2VpdmUuanNcbiAqKiBtb2R1bGUgaWQgPSA3NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgc3RhdGUgPSByZXF1aXJlKCcuLi8uLi9zdGF0ZScpO1xudmFyIGV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2V2ZW50cycpO1xudmFyIEJvdFNESyA9IHJlcXVpcmUoJ0B3YXRzb24tdmlydHVhbC1hZ2VudC9jbGllbnQtc2RrL2xpYi93ZWInKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnbG9kYXNoL2Fzc2lnbicpO1xudmFyIHRlbXBsYXRlcyA9IHJlcXVpcmUoJy4uLy4uL3RlbXBsYXRlcycpO1xuXG5mdW5jdGlvbiBzZW5kKGRhdGEpIHtcblx0aWYgKGRhdGEudGV4dCAmJiBkYXRhLnRleHQubGVuZ3RoID4gMCkge1xuXHRcdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0XHRhZGRUb1NlbmRRdWV1ZShkYXRhKTtcblx0XHRpZiAoIWN1cnJlbnQuaW5Qcm9ncmVzcylcblx0XHRcdGFnZW50U2VuZCgpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGFkZFRvU2VuZFF1ZXVlKGRhdGEpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHR2YXIgcXVldWUgPSBjdXJyZW50LnNlbmRRdWV1ZSB8fCBbXTtcblx0dmFyIG5ld1F1ZXVlID0gcXVldWUuc2xpY2UoMCk7XG5cdG5ld1F1ZXVlLnB1c2goZGF0YSk7XG5cdHN0YXRlLnNldFN0YXRlKHtcblx0XHRzZW5kUXVldWU6IG5ld1F1ZXVlXG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhbHdheXMoKSB7XG5cdGV2ZW50cy5wdWJsaXNoKCdkaXNhYmxlLWxvYWRpbmcnKTtcblx0c3RhdGUuc2V0U3RhdGUoe1xuXHRcdGluUHJvZ3Jlc3M6IGZhbHNlXG5cdH0pO1xuXHRpZiAoc3RhdGUuZ2V0U3RhdGUoKS5zZW5kUXVldWUubGVuZ3RoID4gMClcblx0XHRhZ2VudFNlbmQoKTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZSgpIHtcblx0YWx3YXlzKCk7XG59XG5cbmZ1bmN0aW9uIHJlamVjdChlKSB7XG5cdGV2ZW50cy5wdWJsaXNoKCdlcnJvcicsIGFyZ3VtZW50cyk7XG5cdGNvbnNvbGUuZXJyb3IoZS5zdGFjayk7XG5cdGFsd2F5cygpO1xufVxuXG5mdW5jdGlvbiBzZW5kVG9Cb3QoZGF0YSkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdGV2ZW50cy5wdWJsaXNoKCdlbmFibGUtbG9hZGluZycpO1xuXHRCb3RTREtcblx0XHQuc2VuZCggY3VycmVudC5ib3RJRCwgY3VycmVudC5jaGF0SUQsIGRhdGEudGV4dCApXG5cdFx0LnRoZW4oIGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0ZXZlbnRzLnB1Ymxpc2goJ3JlY2VpdmUnLCByZXMpO1xuXHRcdFx0cmVzb2x2ZSgpO1xuXHRcdH0pXG5cdFx0LmNhdGNoKCBmdW5jdGlvbihlKSB7XG5cdFx0XHRyZWplY3QoZSk7XG5cdFx0fSk7XG59XG5cbmZ1bmN0aW9uIGFnZW50U2VuZCgpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHR2YXIgbmV3RGF0YSA9IGFzc2lnbih7fSwgY3VycmVudC5zZW5kUXVldWVbMF0sIHsgdXVpZDogdXRpbHMuZ2V0VVVJRCgpIH0pO1xuXHR2YXIgbXNnID0gbmV3RGF0YS50ZXh0IHx8ICcnO1xuXHRzdGF0ZS5zZXRTdGF0ZSh7XG5cdFx0aW5Qcm9ncmVzczogdHJ1ZSxcblx0XHRzZW5kUXVldWU6IGN1cnJlbnQuc2VuZFF1ZXVlLnNsaWNlKDEsIGN1cnJlbnQuc2VuZFF1ZXVlLmxlbmd0aCksXG5cdFx0bWVzc2FnZXM6IFtdLmNvbmNhdChjdXJyZW50Lm1lc3NhZ2VzIHx8IFtdLCBuZXdEYXRhKVxuXHR9KTtcblx0Y3VycmVudC5yb290LnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LWNoYXQtdGV4dGJveCcpLnZhbHVlID0gJyc7XG5cdGlmICghbmV3RGF0YS5zaWxlbnQpIHtcblx0XHRjdXJyZW50LmNoYXRIb2xkZXIuaW5uZXJIVE1MICs9IHV0aWxzLmNvbXBpbGUodGVtcGxhdGVzLnNlbmQsIHsgJ2RhdGEudXVpZCc6IG5ld0RhdGEudXVpZCB9KTtcblx0XHRjdXJyZW50LmNoYXRIb2xkZXIucXVlcnlTZWxlY3RvcignIycgKyBuZXdEYXRhLnV1aWQgKyAnIC5JQk1DaGF0LXVzZXItbWVzc2FnZScpLnRleHRDb250ZW50ID0gbXNnO1xuXHRcdGV2ZW50cy5wdWJsaXNoKCdzY3JvbGwtdG8tYm90dG9tJyk7XG5cdH1cblx0ZXZlbnRzLnB1Ymxpc2goJ2VuYWJsZS1sb2FkaW5nJyk7XG5cdGlmIChjdXJyZW50LmhhbmRsZUlucHV0LmRlZmF1bHQpXG5cdFx0c2VuZFRvQm90KG5ld0RhdGEpO1xuXHRlbHNlIGlmIChjdXJyZW50LmhhbmRsZUlucHV0LmNvbnRleHQpXG5cdFx0Y3VycmVudC5oYW5kbGVJbnB1dC5jYWxsYmFjay5iaW5kKGN1cnJlbnQuaGFuZGxlSW5wdXQuY29udGV4dCwgbmV3RGF0YS50ZXh0LCByZXNvbHZlLCByZWplY3QpO1xuXHRlbHNlXG5cdFx0Y3VycmVudC5oYW5kbGVJbnB1dC5jYWxsYmFjayhuZXdEYXRhLnRleHQsIHJlc29sdmUsIHJlamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2VuZDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRzL2hhbmRsZXJzL3NlbmQuanNcbiAqKiBtb2R1bGUgaWQgPSA3NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgc3RhdGUgPSByZXF1aXJlKCcuLi8uLi9zdGF0ZScpO1xudmFyIGV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2V2ZW50cycpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdsb2Rhc2gvYXNzaWduJyk7XG52YXIgdGVtcGxhdGVzID0gcmVxdWlyZSgnLi4vLi4vdGVtcGxhdGVzJyk7XG5cbmZ1bmN0aW9uIHNlbmRNb2NrKGRhdGEpIHtcblx0aWYgKGRhdGEudGV4dCAmJiBkYXRhLnRleHQubGVuZ3RoID4gMCkge1xuXHRcdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0XHR2YXIgbmV3RGF0YSA9IGFzc2lnbih7fSwgZGF0YSwgeyB1dWlkOiB1dGlscy5nZXRVVUlEKCkgfSk7XG5cdFx0Y3VycmVudC5jaGF0SG9sZGVyLmlubmVySFRNTCArPSB1dGlscy5jb21waWxlKHRlbXBsYXRlcy5zZW5kLCB7ICdkYXRhLnV1aWQnOiBuZXdEYXRhLnV1aWQgfSk7XG5cdFx0Y3VycmVudC5jaGF0SG9sZGVyLnF1ZXJ5U2VsZWN0b3IoJyMnICsgbmV3RGF0YS51dWlkICsgJyAuSUJNQ2hhdC11c2VyLW1lc3NhZ2UnKS50ZXh0Q29udGVudCA9IGRhdGEudGV4dDtcblx0XHRldmVudHMucHVibGlzaCgnc2Nyb2xsLXRvLWJvdHRvbScpO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2VuZE1vY2s7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2V2ZW50cy9oYW5kbGVycy9zZW5kLW1vY2suanNcbiAqKiBtb2R1bGUgaWQgPSA3NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgc3RhdGUgPSByZXF1aXJlKCcuLi8uLi9zdGF0ZScpO1xudmFyIGV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2V2ZW50cycpO1xuXG5mdW5jdGlvbiBzZW5kSW5wdXRNZXNzYWdlKCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdGlmICghY3VycmVudC5pblByb2dyZXNzICYmICFjdXJyZW50LmRpc2FibGVJbnB1dCkge1xuXHRcdHZhciB0ZXh0ID0gY3VycmVudC5yb290LnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LWNoYXQtdGV4dGJveCcpLnZhbHVlO1xuXHRcdGV2ZW50cy5wdWJsaXNoKCdzZW5kJywge1xuXHRcdFx0dGV4dDogdGV4dFxuXHRcdH0pO1xuXHRcdHRleHQgPSAnJztcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNlbmRJbnB1dE1lc3NhZ2U7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2V2ZW50cy9oYW5kbGVycy9zZW5kLWlucHV0LW1lc3NhZ2UuanNcbiAqKiBtb2R1bGUgaWQgPSA3N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgc3RhdGUgPSByZXF1aXJlKCcuLi8uLi9zdGF0ZScpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5hYmxlSW5wdXQoKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0dmFyIGRpc2FibGVJbnB1dCA9IChjdXJyZW50LmRpc2FibGVJbnB1dCkgPyAoY3VycmVudC5kaXNhYmxlSW5wdXQgLSAxKSA6MDtcblx0c3RhdGUuc2V0U3RhdGUoeyBkaXNhYmxlSW5wdXQ6IGRpc2FibGVJbnB1dCB9KTtcblx0aWYgKCFkaXNhYmxlSW5wdXQpXG5cdFx0Y3VycmVudC5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVJbnB1dCgpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHR2YXIgZGlzYWJsZUlucHV0ID0gKGN1cnJlbnQuZGlzYWJsZUlucHV0KSA/IChjdXJyZW50LmRpc2FibGVJbnB1dCArIDEpIDogMTtcblx0c3RhdGUuc2V0U3RhdGUoeyBkaXNhYmxlSW5wdXQ6IGRpc2FibGVJbnB1dCB9KTtcblx0Y3VycmVudC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZUxvYWRpbmdJbnB1dCgpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHR2YXIgbG9hZGluZyA9IChjdXJyZW50LmxvYWRpbmcpID8gKGN1cnJlbnQubG9hZGluZyArIDEpIDogMTtcblx0c3RhdGUuc2V0U3RhdGUoe1xuXHRcdGxvYWRpbmc6IGxvYWRpbmdcblx0fSk7XG5cdHV0aWxzLnNwaW5uZXIuc2hvdyhjdXJyZW50LmxvYWRlcik7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVMb2FkaW5nSW5wdXQoKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0dmFyIGxvYWRpbmcgPSAoY3VycmVudC5sb2FkaW5nKSA/IChjdXJyZW50LmxvYWRpbmcgLSAxKSA6IDA7XG5cdHN0YXRlLnNldFN0YXRlKHtcblx0XHRsb2FkaW5nOiBsb2FkaW5nXG5cdH0pO1xuXHRpZiAobG9hZGluZyA9PT0gMClcblx0XHR1dGlscy5zcGlubmVyLmhpZGUoY3VycmVudC5sb2FkZXIpO1xufVxuXG5mdW5jdGlvbiBmb2N1c0lucHV0KCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdGN1cnJlbnQuaW5wdXQuZm9jdXMoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGVuYWJsZUlucHV0OiBlbmFibGVJbnB1dCxcblx0ZGlzYWJsZUlucHV0OiBkaXNhYmxlSW5wdXQsXG5cdGVuYWJsZUxvYWRpbmdJbnB1dDogZW5hYmxlTG9hZGluZ0lucHV0LFxuXHRkaXNhYmxlTG9hZGluZ0lucHV0OiBkaXNhYmxlTG9hZGluZ0lucHV0LFxuXHRmb2N1c0lucHV0OiBmb2N1c0lucHV0XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9ldmVudHMvaGFuZGxlcnMvaW5wdXQuanNcbiAqKiBtb2R1bGUgaWQgPSA3OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG52YXIgc3RhdGUgPSByZXF1aXJlKCcuLi8uLi9zdGF0ZScpO1xuXG5mdW5jdGlvbiBlcnJvcihlcnIpIHtcblx0Y29uc29sZS5lcnJvcihlcnIpO1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdHZhciB0ZXh0ID0gJ0kgYW0gc29ycnksIEkgYW0gaGF2aW5nIGRpZmZpY3VsdGllcy4nO1xuXHRpZiAoY3VycmVudC5oYWRFcnJvcilcblx0XHR0ZXh0ICs9ICcgUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nO1xuXHRlbHNlXG5cdFx0dGV4dCArPSAnIFRvIHNwZWFrIHdpdGggYSBodW1hbiBhZ2VudCwgdHlwZSBcImFnZW50XCIuJztcblx0aWYgKGVyci5zdGF0dXMpXG5cdFx0dGV4dCArPSAnIChlcnJvcjogJyArIGVyci5zdGF0dXMgKyAnKSc7XG5cdHN0YXRlLnNldFN0YXRlKHtcblx0XHRoYWRFcnJvcjogdHJ1ZVxuXHR9KTtcblx0ZXZlbnRzLnB1Ymxpc2goJ3JlY2VpdmUnLCB0ZXh0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcnJvcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRzL2hhbmRsZXJzL2Vycm9yLmpzXG4gKiogbW9kdWxlIGlkID0gNzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIHN0YXRlID0gcmVxdWlyZSgnLi4vLi4vc3RhdGUnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzJyk7XG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnbG9kYXNoL2Fzc2lnbicpO1xudmFyIHRlbXBsYXRlcyA9IHJlcXVpcmUoJy4uLy4uL3RlbXBsYXRlcycpO1xuXG5mdW5jdGlvbiBzdGFydChjb25maWcpIHtcblx0dmFyIGN1cnJlbnQ7XG5cdHZhciBkYXRhID0ge307XG5cdGRhdGFbY29uZmlnLmNoYXRJRF0gPSBjb25maWc7XG5cdHN0YXRlLnNldFN0YXRlKGRhdGEpO1xuXHRjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKVtjb25maWcuY2hhdElEXTtcblx0dXRpbHMuYXR0YWNoUGxheWJhY2tTdHlsZXMoY29uZmlnLmNoYXRJRCk7XG5cdGN1cnJlbnQucm9vdC5jbGFzc05hbWUgKz0gXCIgY2hhdElELVwiICsgY3VycmVudC5jaGF0SUQ7XG5cdGN1cnJlbnQucm9vdC5pbm5lckhUTUwgPSB0ZW1wbGF0ZXMuc3RhcnQ7XG5cdGN1cnJlbnQuY29udGFpbmVyID0gY3VycmVudC5yb290LnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LWNoYXQtY29udGFpbmVyJyk7XG5cdGN1cnJlbnQuY2hhdEhvbGRlciA9IGN1cnJlbnQucm9vdC5xdWVyeVNlbGVjdG9yKCcuSUJNQ2hhdC1tZXNzYWdlcycpO1xuXHRjdXJyZW50LmlubmVyQ29udGFpbmVyID0gY3VycmVudC5yb290LnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LWlubmVyLWNvbnRhaW5lcicpO1xuXHRkYXRhW2NvbmZpZy5jaGF0SURdID0gY3VycmVudDtcblx0c3RhdGUuc2V0U3RhdGUoZGF0YSk7XG5cdGN1cnJlbnQuY2hhdEhvbGRlci5zdHlsZS5wYWRkaW5nQm90dG9tID0gJzFlbSc7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHV0aWxzLmRlYm91bmNlKGZ1bmN0aW9uKCkge1xuXHRcdGV2ZW50cy5wdWJsaXNoKCdwbGF5YmFjay1yZXNpemUtJyArIGNvbmZpZy5jaGF0SUQsIGNvbmZpZy5jaGF0SUQpO1xuXHR9LCAxMDAwKSk7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ3BsYXliYWNrLXJlc2l6ZS0nICsgY29uZmlnLmNoYXRJRCwgY29uZmlnLmNoYXRJRCk7XG5cdH0pO1xuXG5cblx0ZXZlbnRzLnB1Ymxpc2goJ3BsYXliYWNrLXJlc2l6ZS0nICsgY29uZmlnLmNoYXRJRCwgY29uZmlnLmNoYXRJRCk7XG59XG5cbmZ1bmN0aW9uIHNlbmQob2JqKSB7XG5cdHZhciBjaGF0SUQgPSBvYmouY2hhdElEO1xuXHR2YXIgZGF0YSA9IG9iai5kYXRhO1xuXHRjb25zb2xlLmxvZygnb2JqJywgb2JqKTtcblx0aWYgKGRhdGEudGV4dCAmJiBkYXRhLnRleHQubGVuZ3RoID4gMCkge1xuXHRcdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKVtjaGF0SURdO1xuXHRcdGNvbnNvbGUubG9nKCdjdXJyZW50JywgY3VycmVudCk7XG5cdFx0dmFyIG5ld0RhdGEgPSBhc3NpZ24oe30sIGRhdGEsIHsgdXVpZDogdXRpbHMuZ2V0VVVJRCgpIH0pO1xuXHRcdGN1cnJlbnQuY2hhdEhvbGRlci5pbm5lckhUTUwgKz0gdXRpbHMuY29tcGlsZSh0ZW1wbGF0ZXMuc2VuZCwgeyAnZGF0YS51dWlkJzogbmV3RGF0YS51dWlkIH0pO1xuXHRcdGN1cnJlbnQuY2hhdEhvbGRlci5xdWVyeVNlbGVjdG9yKCcjJyArIG5ld0RhdGEudXVpZCArICcgLklCTUNoYXQtdXNlci1tZXNzYWdlJykudGV4dENvbnRlbnQgPSBkYXRhLnRleHQ7XG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ3BsYXliYWNrLXNjcm9sbC10by1ib3R0b20tJyArIGNoYXRJRCwgY2hhdElEKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZWNlaXZlKG9iaikge1xuXHR2YXIgY2hhdElEID0gb2JqLmNoYXRJRDtcblx0dmFyIGRhdGEgPSBvYmouZGF0YTtcblx0dmFyIGNoZWNrRGF0YSA9ICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpID8geyBtZXNzYWdlOiB7IHRleHQ6IGRhdGEgfSB9IDogZGF0YTtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpW2NoYXRJRF07XG5cdGRhdGEgPSBhc3NpZ24oe30sIGNoZWNrRGF0YSwgeyB1dWlkOiB1dGlscy5nZXRVVUlEKCkgfSk7XG5cdHZhciBtc2cgPSAoZGF0YS5tZXNzYWdlICYmIGRhdGEubWVzc2FnZS50ZXh0KSA/ICgoQXJyYXkuaXNBcnJheShkYXRhLm1lc3NhZ2UudGV4dCkpID8gZGF0YS5tZXNzYWdlLnRleHQgOiBbZGF0YS5tZXNzYWdlLnRleHRdKSA6IFsnJ107XG5cdGlmIChtc2cubGVuZ3RoID09PSAwKVxuXHRcdG1zZyA9IFsnJ107XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW07XG5cdFx0Y3VycmVudC5jaGF0SG9sZGVyLmlubmVySFRNTCArPSB1dGlscy5jb21waWxlKHRlbXBsYXRlcy5yZWNlaXZlLCB7ICdkYXRhLnV1aWQnOiBkYXRhLnV1aWQgfSk7XG5cdFx0aXRlbSA9IGN1cnJlbnQuY2hhdEhvbGRlci5xdWVyeVNlbGVjdG9yKCcuJyArIGRhdGEudXVpZCArICc6bGFzdC1jaGlsZCAuSUJNQ2hhdC13YXRzb24tbWVzc2FnZScpO1xuXHRcdHV0aWxzLndyaXRlTWVzc2FnZShpdGVtLCBtc2dbaV0pO1xuXHR9XG5cdGV2ZW50cy5wdWJsaXNoKCdwbGF5YmFjay1zY3JvbGwtdG8tYm90dG9tLScgKyBjaGF0SUQsIGNoYXRJRCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyKGNoYXRJRCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKClbY2hhdElEXTtcblx0Y3VycmVudC5jaGF0SG9sZGVyLmlubmVySFRNTCA9ICcnO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95KGNoYXRJRCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKClbY2hhdElEXTtcblx0dmFyIG9iaiA9IHt9O1xuXHRvYmpbY2hhdElEXSA9IHVuZGVmaW5lZDtcblx0c3RhdGUuc2V0U3RhdGUob2JqKTtcblx0Y3VycmVudC5yb290LmlubmVySFRNTCA9IGN1cnJlbnQub3JpZ2luYWxDb250ZW50O1xufVxuXG5mdW5jdGlvbiBzY3JvbGxUb0JvdHRvbShjaGF0SUQpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpW2NoYXRJRF07XG5cdGN1cnJlbnQuY2hhdEhvbGRlci5zY3JvbGxUb3AgPSBjdXJyZW50LmNoYXRIb2xkZXIuc2Nyb2xsSGVpZ2h0O1xufVxuXG5mdW5jdGlvbiByZXNpemUoY2hhdElEKSB7XG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpW2NoYXRJRF07XG5cdFx0aWYgKGN1cnJlbnQuYWN0aXZlKSB7XG5cdFx0XHRjdXJyZW50LmNoYXRIb2xkZXIuc3R5bGUubWF4SGVpZ2h0ID0gKGN1cnJlbnQucm9vdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLSBjdXJyZW50LmlucHV0SG9sZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCkgKyAncHgnO1xuXHRcdFx0Y3VycmVudC5jaGF0SG9sZGVyLnN0eWxlLm1heFdpZHRoID0gKChjdXJyZW50LnJvb3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggPiAyODgpID8gY3VycmVudC5yb290LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIDogMjg4KSArICdweCc7XG5cdFx0fVxuXHR9LCAzMDApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0c3RhcnQ6IHN0YXJ0LFxuXHRzZW5kOiBzZW5kLFxuXHRyZWNlaXZlOiByZWNlaXZlLFxuXHRjbGVhcjogY2xlYXIsXG5cdGRlc3Ryb3k6IGRlc3Ryb3ksXG5cdHJlc2l6ZTogcmVzaXplLFxuXHRzY3JvbGxUb0JvdHRvbTogc2Nyb2xsVG9Cb3R0b21cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2V2ZW50cy9oYW5kbGVycy9wbGF5YmFjay5qc1xuICoqIG1vZHVsZSBpZCA9IDgwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4uLy4uL3N0YXRlJyk7XG5cbmZ1bmN0aW9uIHNjcm9sbFRvQm90dG9tKCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdGN1cnJlbnQuY2hhdEhvbGRlci5zY3JvbGxUb3AgPSBjdXJyZW50LmNoYXRIb2xkZXIuc2Nyb2xsSGVpZ2h0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNjcm9sbFRvQm90dG9tO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9ldmVudHMvaGFuZGxlcnMvc2Nyb2xsLXRvLWJvdHRvbS5qc1xuICoqIG1vZHVsZSBpZCA9IDgxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi9ldmVudHMnKTtcbnZhciBldmVudEhhbmRsZXJzID0gcmVxdWlyZSgnLi4vZXZlbnRzL2hhbmRsZXJzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ2xvZGFzaC9hc3NpZ24nKTtcbnZhciBkZWZhdWx0U3R5bGVzID0gcmVxdWlyZSgnLi4vc3R5bGVzJyk7XG5cbnZhciBldmVudHNBcnJheSA9IHt9O1xuXG5mdW5jdGlvbiBpbml0KGNvbmZpZykge1xuXHRyZXR1cm4gbmV3IFBsYXlCYWNrKGNvbmZpZyk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnRzKGNoYXRJRCkge1xuXHRldmVudHNBcnJheVtjaGF0SURdID0gW107XG5cdGV2ZW50c0FycmF5W2NoYXRJRF0ucHVzaChldmVudHMuc3Vic2NyaWJlKCdwbGF5YmFjay1zdGFydC0nICsgY2hhdElELCBldmVudEhhbmRsZXJzLnBsYXliYWNrLnN0YXJ0KSk7XG5cdGV2ZW50c0FycmF5W2NoYXRJRF0ucHVzaChldmVudHMuc3Vic2NyaWJlKCdwbGF5YmFjay1yZXNpemUtJyArIGNoYXRJRCwgZXZlbnRIYW5kbGVycy5wbGF5YmFjay5yZXNpemUpKTtcblx0ZXZlbnRzQXJyYXlbY2hhdElEXS5wdXNoKGV2ZW50cy5zdWJzY3JpYmUoJ3BsYXliYWNrLXNjcm9sbC10by1ib3R0b20tJyArIGNoYXRJRCwgZXZlbnRIYW5kbGVycy5wbGF5YmFjay5zY3JvbGxUb0JvdHRvbSkpO1xuXHRldmVudHNBcnJheVtjaGF0SURdLnB1c2goZXZlbnRzLnN1YnNjcmliZSgncGxheWJhY2stcmVjZWl2ZS0nICsgY2hhdElELCBldmVudEhhbmRsZXJzLnBsYXliYWNrLnJlY2VpdmUpKTtcblx0ZXZlbnRzQXJyYXlbY2hhdElEXS5wdXNoKGV2ZW50cy5zdWJzY3JpYmUoJ3BsYXliYWNrLXNlbmQtJyArIGNoYXRJRCwgZXZlbnRIYW5kbGVycy5wbGF5YmFjay5zZW5kKSk7XG5cdGV2ZW50c0FycmF5W2NoYXRJRF0ucHVzaChldmVudHMuc3Vic2NyaWJlKCdwbGF5YmFjay1kZXN0cm95LScgKyBjaGF0SUQsIGV2ZW50SGFuZGxlcnMucGxheWJhY2suZGVzdHJveSkpO1xuXHRldmVudHNBcnJheVtjaGF0SURdLnB1c2goZXZlbnRzLnN1YnNjcmliZSgncGxheWJhY2stY2xlYXItJyArIGNoYXRJRCwgZXZlbnRIYW5kbGVycy5wbGF5YmFjay5jbGVhcikpO1xufVxuXG5mdW5jdGlvbiBQbGF5QmFjayhjb25maWcpIHtcblx0dmFyIHJvb3QgPSAodHlwZW9mIGNvbmZpZy5lbCA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uZmlnLmVsKSA6IGNvbmZpZy5lbDtcblx0dGhpcy5jaGF0SUQgPSB1dGlscy5nZXRVVUlEKCk7XG5cdHJlZ2lzdGVyRXZlbnRzKHRoaXMuY2hhdElEKTtcblx0ZXZlbnRzLnB1Ymxpc2goJ3BsYXliYWNrLXN0YXJ0LScgKyB0aGlzLmNoYXRJRCwge1xuXHRcdGNoYXRJRDogdGhpcy5jaGF0SUQsXG5cdFx0cm9vdDogKHR5cGVvZiBjb25maWcuZWwgPT09ICdzdHJpbmcnKSA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy5lbCkgOiBjb25maWcuZWwsXG5cdFx0bWFwc1NlcnZlcjogcHJvY2Vzcy5lbnYuTUFQU19TRVJWRVIgfHwgJ2h0dHBzOi8vZHAxLWktc2VydmUtbWFwcy5teWJsdWVtaXgubmV0LycsXG5cdFx0c3R5bGVzOiBhc3NpZ24oe30sIGRlZmF1bHRTdHlsZXMsIGNvbmZpZy5zdHlsZXMpLFxuXHRcdG9yaWdpbmFsQ29udGVudDogcm9vdC5pbm5lckhUTUxcblx0fSk7XG5cdHRoaXMuY2xlYXIgPSBmdW5jdGlvbigpIHtcblx0XHRldmVudHMucHVibGlzaCgncGxheWJhY2stY2xlYXItJyArIHRoaXMuY2hhdElELCB0aGlzLmNoYXRJRCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cdHRoaXMuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdGV2ZW50cy5wdWJsaXNoKCdwbGF5YmFjay1jbGVhci0nICsgdGhpcy5jaGF0SUQsIHRoaXMuY2hhdElEKTtcblx0XHRldmVudHMucHVibGlzaCgncGxheWJhY2stZGVzdHJveS0nICsgdGhpcy5jaGF0SUQsIHRoaXMuY2hhdElEKTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50c0FycmF5W3RoaXMuY2hhdElEXS5sZW5ndGg7IGkrKylcblx0XHRcdGV2ZW50c0FycmF5W3RoaXMuY2hhdElEXVtpXS5yZW1vdmUoKTtcblx0XHRkZWxldGUgZXZlbnRzQXJyYXlbdGhpcy5jaGF0SURdO1xuXHRcdGRlbGV0ZSB0aGlzLmNsZWFyO1xuXHRcdGRlbGV0ZSB0aGlzLnNlbmQ7XG5cdFx0ZGVsZXRlIHRoaXMucmVjZWl2ZTtcblx0XHRkZWxldGUgdGhpcy5kZXN0cm95O1xuXHRcdGRlbGV0ZSB0aGlzLmNoYXRJRDtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblx0dGhpcy5zZW5kID0gZnVuY3Rpb24oZGF0YSkge1xuXHRcdHZhciBjaGF0SUQgPSB0aGlzLmNoYXRJRDtcblx0XHRldmVudHMucHVibGlzaCgncGxheWJhY2stc2VuZC0nICsgY2hhdElELCB7IGNoYXRJRDogY2hhdElELCBkYXRhOiBkYXRhIH0pO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXHR0aGlzLnJlY2VpdmUgPSBmdW5jdGlvbihkYXRhKSB7XG5cdFx0dmFyIGNoYXRJRCA9IHRoaXMuY2hhdElEO1xuXHRcdGV2ZW50cy5wdWJsaXNoKCdwbGF5YmFjay1yZWNlaXZlLScgKyBjaGF0SUQsIHsgY2hhdElEOiBjaGF0SUQsIGRhdGE6IGRhdGEgfSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cdHJldHVybiB0aGlzO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRpbml0OiBpbml0XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wbGF5YmFjay9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDgyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBkZWZhdWx0U3R5bGVzID0ge1xuXHRiYWNrZ3JvdW5kOiAncmdiYSg2MSwgNjEsIDYxLCAxKScsXG5cdGFjY2VudEJhY2tncm91bmQ6ICdyZ2JhKDE3NSwgMTEwLCAyMzIsIDEpJyxcblx0YWNjZW50VGV4dDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxuXHR0ZXh0OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXG5cdGxpbms6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcblx0c2Vjb25kYXJ5QmFja2dyb3VuZDogJ3JnYmEoNzAsIDcwLCA3MCwgMSknLFxuXHRzZWNvbmRhcnlUZXh0OiAncmdiYSgyNDcsIDI0NywgMjQ3LCAxKScsXG5cdGlucHV0QmFja2dyb3VuZDogJ3JnYmEoNzAsIDcwLCA3MCwgMSknLFxuXHRpbnB1dFRleHQ6ICdyZ2JhKDI0NywgMjQ3LCAyNDcsIDEpJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0U3R5bGVzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA4M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyohXG4gKiBAb3ZlcnZpZXcgZXM2LXByb21pc2UgLSBhIHRpbnkgaW1wbGVtZW50YXRpb24gb2YgUHJvbWlzZXMvQSsuXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNCBZZWh1ZGEgS2F0eiwgVG9tIERhbGUsIFN0ZWZhbiBQZW5uZXIgYW5kIGNvbnRyaWJ1dG9ycyAoQ29udmVyc2lvbiB0byBFUzYgQVBJIGJ5IEpha2UgQXJjaGliYWxkKVxuICogQGxpY2Vuc2UgICBMaWNlbnNlZCB1bmRlciBNSVQgbGljZW5zZVxuICogICAgICAgICAgICBTZWUgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2pha2VhcmNoaWJhbGQvZXM2LXByb21pc2UvbWFzdGVyL0xJQ0VOU0VcbiAqIEB2ZXJzaW9uICAgMy4yLjFcbiAqL1xuXG4oZnVuY3Rpb24oKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHV0aWxzJCRvYmplY3RPckZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIHggPT09ICdvYmplY3QnICYmIHggIT09IG51bGwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNGdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbic7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc01heWJlVGhlbmFibGUoeCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiB4ICE9PSBudWxsO1xuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkdXRpbHMkJF9pc0FycmF5O1xuICAgIGlmICghQXJyYXkuaXNBcnJheSkge1xuICAgICAgbGliJGVzNiRwcm9taXNlJHV0aWxzJCRfaXNBcnJheSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkdXRpbHMkJF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbiAgICB9XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc0FycmF5ID0gbGliJGVzNiRwcm9taXNlJHV0aWxzJCRfaXNBcnJheTtcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGxlbiA9IDA7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR2ZXJ0eE5leHQ7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRjdXN0b21TY2hlZHVsZXJGbjtcblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXNhcCA9IGZ1bmN0aW9uIGFzYXAoY2FsbGJhY2ssIGFyZykge1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHF1ZXVlW2xpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW5dID0gY2FsbGJhY2s7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkcXVldWVbbGliJGVzNiRwcm9taXNlJGFzYXAkJGxlbiArIDFdID0gYXJnO1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGxlbiArPSAyO1xuICAgICAgaWYgKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW4gPT09IDIpIHtcbiAgICAgICAgLy8gSWYgbGVuIGlzIDIsIHRoYXQgbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIHNjaGVkdWxlIGFuIGFzeW5jIGZsdXNoLlxuICAgICAgICAvLyBJZiBhZGRpdGlvbmFsIGNhbGxiYWNrcyBhcmUgcXVldWVkIGJlZm9yZSB0aGUgcXVldWUgaXMgZmx1c2hlZCwgdGhleVxuICAgICAgICAvLyB3aWxsIGJlIHByb2Nlc3NlZCBieSB0aGlzIGZsdXNoIHRoYXQgd2UgYXJlIHNjaGVkdWxpbmcuXG4gICAgICAgIGlmIChsaWIkZXM2JHByb21pc2UkYXNhcCQkY3VzdG9tU2NoZWR1bGVyRm4pIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkY3VzdG9tU2NoZWR1bGVyRm4obGliJGVzNiRwcm9taXNlJGFzYXAkJGZsdXNoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJHNldFNjaGVkdWxlcihzY2hlZHVsZUZuKSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkY3VzdG9tU2NoZWR1bGVyRm4gPSBzY2hlZHVsZUZuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzZXRBc2FwKGFzYXBGbikge1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAgPSBhc2FwRm47XG4gICAgfVxuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRicm93c2VyV2luZG93ID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSA/IHdpbmRvdyA6IHVuZGVmaW5lZDtcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGJyb3dzZXJHbG9iYWwgPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkYnJvd3NlcldpbmRvdyB8fCB7fTtcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJGJyb3dzZXJHbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBsaWIkZXM2JHByb21pc2UkYXNhcCQkYnJvd3Nlckdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkaXNOb2RlID0gdHlwZW9mIHNlbGYgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiB7fS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXSc7XG5cbiAgICAvLyB0ZXN0IGZvciB3ZWIgd29ya2VyIGJ1dCBub3QgaW4gSUUxMFxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkaXNXb3JrZXIgPSB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICB0eXBlb2YgaW1wb3J0U2NyaXB0cyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCAhPT0gJ3VuZGVmaW5lZCc7XG5cbiAgICAvLyBub2RlXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZU5leHRUaWNrKCkge1xuICAgICAgLy8gbm9kZSB2ZXJzaW9uIDAuMTAueCBkaXNwbGF5cyBhIGRlcHJlY2F0aW9uIHdhcm5pbmcgd2hlbiBuZXh0VGljayBpcyB1c2VkIHJlY3Vyc2l2ZWx5XG4gICAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2N1am9qcy93aGVuL2lzc3Vlcy80MTAgZm9yIGRldGFpbHNcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhsaWIkZXM2JHByb21pc2UkYXNhcCQkZmx1c2gpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyB2ZXJ0eFxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VWZXJ0eFRpbWVyKCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkdmVydHhOZXh0KGxpYiRlczYkcHJvbWlzZSRhc2FwJCRmbHVzaCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VNdXRhdGlvbk9ic2VydmVyKCkge1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgdmFyIG9ic2VydmVyID0gbmV3IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRCcm93c2VyTXV0YXRpb25PYnNlcnZlcihsaWIkZXM2JHByb21pc2UkYXNhcCQkZmx1c2gpO1xuICAgICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBub2RlLmRhdGEgPSAoaXRlcmF0aW9ucyA9ICsraXRlcmF0aW9ucyAlIDIpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyB3ZWIgd29ya2VyXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZU1lc3NhZ2VDaGFubmVsKCkge1xuICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJGZsdXNoO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSgwKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZVNldFRpbWVvdXQoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldFRpbWVvdXQobGliJGVzNiRwcm9taXNlJGFzYXAkJGZsdXNoLCAxKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZSA9IG5ldyBBcnJheSgxMDAwKTtcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkZmx1c2goKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW47IGkrPTIpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHF1ZXVlW2ldO1xuICAgICAgICB2YXIgYXJnID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHF1ZXVlW2krMV07XG5cbiAgICAgICAgY2FsbGJhY2soYXJnKTtcblxuICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkcXVldWVbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZVtpKzFdID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkbGVuID0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXR0ZW1wdFZlcnR4KCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHIgPSByZXF1aXJlO1xuICAgICAgICB2YXIgdmVydHggPSByKCd2ZXJ0eCcpO1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkdmVydHhOZXh0ID0gdmVydHgucnVuT25Mb29wIHx8IHZlcnR4LnJ1bk9uQ29udGV4dDtcbiAgICAgICAgcmV0dXJuIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VWZXJ0eFRpbWVyKCk7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VTZXRUaW1lb3V0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzY2hlZHVsZUZsdXNoO1xuICAgIC8vIERlY2lkZSB3aGF0IGFzeW5jIG1ldGhvZCB0byB1c2UgdG8gdHJpZ2dlcmluZyBwcm9jZXNzaW5nIG9mIHF1ZXVlZCBjYWxsYmFja3M6XG4gICAgaWYgKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRpc05vZGUpIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzY2hlZHVsZUZsdXNoID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZU5leHRUaWNrKCk7XG4gICAgfSBlbHNlIGlmIChsaWIkZXM2JHByb21pc2UkYXNhcCQkQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzY2hlZHVsZUZsdXNoID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZU11dGF0aW9uT2JzZXJ2ZXIoKTtcbiAgICB9IGVsc2UgaWYgKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRpc1dvcmtlcikge1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHNjaGVkdWxlRmx1c2ggPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlTWVzc2FnZUNoYW5uZWwoKTtcbiAgICB9IGVsc2UgaWYgKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRicm93c2VyV2luZG93ID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzY2hlZHVsZUZsdXNoID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJGF0dGVtcHRWZXJ0eCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VTZXRUaW1lb3V0KCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSR0aGVuJCR0aGVuKG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKSB7XG4gICAgICB2YXIgcGFyZW50ID0gdGhpcztcblxuICAgICAgdmFyIGNoaWxkID0gbmV3IHRoaXMuY29uc3RydWN0b3IobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbm9vcCk7XG5cbiAgICAgIGlmIChjaGlsZFtsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQUk9NSVNFX0lEXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG1ha2VQcm9taXNlKGNoaWxkKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXRlID0gcGFyZW50Ll9zdGF0ZTtcblxuICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50c1tzdGF0ZSAtIDFdO1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXNhcChmdW5jdGlvbigpe1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGludm9rZUNhbGxiYWNrKHN0YXRlLCBjaGlsZCwgY2FsbGJhY2ssIHBhcmVudC5fcmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRzdWJzY3JpYmUocGFyZW50LCBjaGlsZCwgb25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkdGhlbiQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSR0aGVuJCR0aGVuO1xuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlc29sdmUkJHJlc29sdmUob2JqZWN0KSB7XG4gICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcblxuICAgICAgaWYgKG9iamVjdCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QuY29uc3RydWN0b3IgPT09IENvbnN0cnVjdG9yKSB7XG4gICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3ApO1xuICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCBvYmplY3QpO1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZXNvbHZlJCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVzb2x2ZSQkcmVzb2x2ZTtcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUFJPTUlTRV9JRCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygxNik7XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRub29wKCkge31cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQRU5ESU5HICAgPSB2b2lkIDA7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEZVTEZJTExFRCA9IDE7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFJFSkVDVEVEICA9IDI7XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1IgPSBuZXcgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRXJyb3JPYmplY3QoKTtcblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHNlbGZGdWxmaWxsbWVudCgpIHtcbiAgICAgIHJldHVybiBuZXcgVHlwZUVycm9yKFwiWW91IGNhbm5vdCByZXNvbHZlIGEgcHJvbWlzZSB3aXRoIGl0c2VsZlwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRjYW5ub3RSZXR1cm5Pd24oKSB7XG4gICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcignQSBwcm9taXNlcyBjYWxsYmFjayBjYW5ub3QgcmV0dXJuIHRoYXQgc2FtZSBwcm9taXNlLicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGdldFRoZW4ocHJvbWlzZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbjtcbiAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1IuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgcmV0dXJuIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHRyeVRoZW4odGhlbiwgdmFsdWUsIGZ1bGZpbGxtZW50SGFuZGxlciwgcmVqZWN0aW9uSGFuZGxlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBmdWxmaWxsbWVudEhhbmRsZXIsIHJlamVjdGlvbkhhbmRsZXIpO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZUZvcmVpZ25UaGVuYWJsZShwcm9taXNlLCB0aGVuYWJsZSwgdGhlbikge1xuICAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhc2FwKGZ1bmN0aW9uKHByb21pc2UpIHtcbiAgICAgICAgdmFyIHNlYWxlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgZXJyb3IgPSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCR0cnlUaGVuKHRoZW4sIHRoZW5hYmxlLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgIGlmIChzZWFsZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgc2VhbGVkID0gdHJ1ZTtcbiAgICAgICAgICBpZiAodGhlbmFibGUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgICBpZiAoc2VhbGVkKSB7IHJldHVybjsgfVxuICAgICAgICAgIHNlYWxlZCA9IHRydWU7XG5cbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgICAgfSwgJ1NldHRsZTogJyArIChwcm9taXNlLl9sYWJlbCB8fCAnIHVua25vd24gcHJvbWlzZScpKTtcblxuICAgICAgICBpZiAoIXNlYWxlZCAmJiBlcnJvcikge1xuICAgICAgICAgIHNlYWxlZCA9IHRydWU7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSwgcHJvbWlzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaGFuZGxlT3duVGhlbmFibGUocHJvbWlzZSwgdGhlbmFibGUpIHtcbiAgICAgIGlmICh0aGVuYWJsZS5fc3RhdGUgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEZVTEZJTExFRCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHRoZW5hYmxlLl9yZXN1bHQpO1xuICAgICAgfSBlbHNlIGlmICh0aGVuYWJsZS5fc3RhdGUgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFJFSkVDVEVEKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCB0aGVuYWJsZS5fcmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHN1YnNjcmliZSh0aGVuYWJsZSwgdW5kZWZpbmVkLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaGFuZGxlTWF5YmVUaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlLCB0aGVuKSB7XG4gICAgICBpZiAobWF5YmVUaGVuYWJsZS5jb25zdHJ1Y3RvciA9PT0gcHJvbWlzZS5jb25zdHJ1Y3RvciAmJlxuICAgICAgICAgIHRoZW4gPT09IGxpYiRlczYkcHJvbWlzZSR0aGVuJCRkZWZhdWx0ICYmXG4gICAgICAgICAgY29uc3RydWN0b3IucmVzb2x2ZSA9PT0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVzb2x2ZSQkZGVmYXVsdCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRoYW5kbGVPd25UaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGVuID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUikge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUi5lcnJvcik7XG4gICAgICAgIH0gZWxzZSBpZiAodGhlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcbiAgICAgICAgfSBlbHNlIGlmIChsaWIkZXM2JHByb21pc2UkdXRpbHMkJGlzRnVuY3Rpb24odGhlbikpIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRoYW5kbGVGb3JlaWduVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSwgdGhlbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpIHtcbiAgICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkc2VsZkZ1bGZpbGxtZW50KCkpO1xuICAgICAgfSBlbHNlIGlmIChsaWIkZXM2JHByb21pc2UkdXRpbHMkJG9iamVjdE9yRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgdmFsdWUsIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGdldFRoZW4odmFsdWUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHB1Ymxpc2hSZWplY3Rpb24ocHJvbWlzZSkge1xuICAgICAgaWYgKHByb21pc2UuX29uZXJyb3IpIHtcbiAgICAgICAgcHJvbWlzZS5fb25lcnJvcihwcm9taXNlLl9yZXN1bHQpO1xuICAgICAgfVxuXG4gICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRwdWJsaXNoKHByb21pc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpIHtcbiAgICAgIGlmIChwcm9taXNlLl9zdGF0ZSAhPT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUEVORElORykgeyByZXR1cm47IH1cblxuICAgICAgcHJvbWlzZS5fcmVzdWx0ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zdGF0ZSA9IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEZVTEZJTExFRDtcblxuICAgICAgaWYgKHByb21pc2UuX3N1YnNjcmliZXJzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXNhcChsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRwdWJsaXNoLCBwcm9taXNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKSB7XG4gICAgICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBFTkRJTkcpIHsgcmV0dXJuOyB9XG4gICAgICBwcm9taXNlLl9zdGF0ZSA9IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFJFSkVDVEVEO1xuICAgICAgcHJvbWlzZS5fcmVzdWx0ID0gcmVhc29uO1xuXG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXNhcChsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRwdWJsaXNoUmVqZWN0aW9uLCBwcm9taXNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRzdWJzY3JpYmUocGFyZW50LCBjaGlsZCwgb25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pIHtcbiAgICAgIHZhciBzdWJzY3JpYmVycyA9IHBhcmVudC5fc3Vic2NyaWJlcnM7XG4gICAgICB2YXIgbGVuZ3RoID0gc3Vic2NyaWJlcnMubGVuZ3RoO1xuXG4gICAgICBwYXJlbnQuX29uZXJyb3IgPSBudWxsO1xuXG4gICAgICBzdWJzY3JpYmVyc1tsZW5ndGhdID0gY2hpbGQ7XG4gICAgICBzdWJzY3JpYmVyc1tsZW5ndGggKyBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRGVUxGSUxMRURdID0gb25GdWxmaWxsbWVudDtcbiAgICAgIHN1YnNjcmliZXJzW2xlbmd0aCArIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFJFSkVDVEVEXSAgPSBvblJlamVjdGlvbjtcblxuICAgICAgaWYgKGxlbmd0aCA9PT0gMCAmJiBwYXJlbnQuX3N0YXRlKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhc2FwKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHB1Ymxpc2gsIHBhcmVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcHVibGlzaChwcm9taXNlKSB7XG4gICAgICB2YXIgc3Vic2NyaWJlcnMgPSBwcm9taXNlLl9zdWJzY3JpYmVycztcbiAgICAgIHZhciBzZXR0bGVkID0gcHJvbWlzZS5fc3RhdGU7XG5cbiAgICAgIGlmIChzdWJzY3JpYmVycy5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XG5cbiAgICAgIHZhciBjaGlsZCwgY2FsbGJhY2ssIGRldGFpbCA9IHByb21pc2UuX3Jlc3VsdDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWJzY3JpYmVycy5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgICBjaGlsZCA9IHN1YnNjcmliZXJzW2ldO1xuICAgICAgICBjYWxsYmFjayA9IHN1YnNjcmliZXJzW2kgKyBzZXR0bGVkXTtcblxuICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRpbnZva2VDYWxsYmFjayhzZXR0bGVkLCBjaGlsZCwgY2FsbGJhY2ssIGRldGFpbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbGJhY2soZGV0YWlsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcm9taXNlLl9zdWJzY3JpYmVycy5sZW5ndGggPSAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEVycm9yT2JqZWN0KCkge1xuICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFRSWV9DQVRDSF9FUlJPUiA9IG5ldyBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRFcnJvck9iamVjdCgpO1xuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkdHJ5Q2F0Y2goY2FsbGJhY2ssIGRldGFpbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGRldGFpbCk7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkVFJZX0NBVENIX0VSUk9SLmVycm9yID0gZTtcbiAgICAgICAgcmV0dXJuIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFRSWV9DQVRDSF9FUlJPUjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRpbnZva2VDYWxsYmFjayhzZXR0bGVkLCBwcm9taXNlLCBjYWxsYmFjaywgZGV0YWlsKSB7XG4gICAgICB2YXIgaGFzQ2FsbGJhY2sgPSBsaWIkZXM2JHByb21pc2UkdXRpbHMkJGlzRnVuY3Rpb24oY2FsbGJhY2spLFxuICAgICAgICAgIHZhbHVlLCBlcnJvciwgc3VjY2VlZGVkLCBmYWlsZWQ7XG5cbiAgICAgIGlmIChoYXNDYWxsYmFjaykge1xuICAgICAgICB2YWx1ZSA9IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHRyeUNhdGNoKGNhbGxiYWNrLCBkZXRhaWwpO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkVFJZX0NBVENIX0VSUk9SKSB7XG4gICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcbiAgICAgICAgICBlcnJvciA9IHZhbHVlLmVycm9yO1xuICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdWNjZWVkZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGNhbm5vdFJldHVybk93bigpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBkZXRhaWw7XG4gICAgICAgIHN1Y2NlZWRlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9taXNlLl9zdGF0ZSAhPT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUEVORElORykge1xuICAgICAgICAvLyBub29wXG4gICAgICB9IGVsc2UgaWYgKGhhc0NhbGxiYWNrICYmIHN1Y2NlZWRlZCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoZmFpbGVkKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgICB9IGVsc2UgaWYgKHNldHRsZWQgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEZVTEZJTExFRCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoc2V0dGxlZCA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUkVKRUNURUQpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRpbml0aWFsaXplUHJvbWlzZShwcm9taXNlLCByZXNvbHZlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzb2x2ZXIoZnVuY3Rpb24gcmVzb2x2ZVByb21pc2UodmFsdWUpe1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICB9LCBmdW5jdGlvbiByZWplY3RQcm9taXNlKHJlYXNvbikge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGlkID0gMDtcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRuZXh0SWQoKSB7XG4gICAgICByZXR1cm4gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaWQrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRtYWtlUHJvbWlzZShwcm9taXNlKSB7XG4gICAgICBwcm9taXNlW2xpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBST01JU0VfSURdID0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaWQrKztcbiAgICAgIHByb21pc2UuX3N0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgcHJvbWlzZS5fcmVzdWx0ID0gdW5kZWZpbmVkO1xuICAgICAgcHJvbWlzZS5fc3Vic2NyaWJlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRhbGwkJGFsbChlbnRyaWVzKSB7XG4gICAgICByZXR1cm4gbmV3IGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRkZWZhdWx0KHRoaXMsIGVudHJpZXMpLnByb21pc2U7XG4gICAgfVxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRhbGwkJGRlZmF1bHQgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRhbGwkJGFsbDtcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyYWNlJCRyYWNlKGVudHJpZXMpIHtcbiAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuXG4gICAgICBpZiAoIWxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNBcnJheShlbnRyaWVzKSkge1xuICAgICAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGFuIGFycmF5IHRvIHJhY2UuJykpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29uc3RydWN0b3IoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgdmFyIGxlbmd0aCA9IGVudHJpZXMubGVuZ3RoO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIENvbnN0cnVjdG9yLnJlc29sdmUoZW50cmllc1tpXSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyYWNlJCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmFjZSQkcmFjZTtcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZWplY3QkJHJlamVjdChyZWFzb24pIHtcbiAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuICAgICAgdmFyIHByb21pc2UgPSBuZXcgQ29uc3RydWN0b3IobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbm9vcCk7XG4gICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVqZWN0JCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVqZWN0JCRyZWplY3Q7XG5cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRuZWVkc1Jlc29sdmVyKCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhIHJlc29sdmVyIGZ1bmN0aW9uIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgcHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRuZWVkc05ldygpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdQcm9taXNlJzogUGxlYXNlIHVzZSB0aGUgJ25ldycgb3BlcmF0b3IsIHRoaXMgb2JqZWN0IGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBjYWxsZWQgYXMgYSBmdW5jdGlvbi5cIik7XG4gICAgfVxuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2U7XG4gICAgLyoqXG4gICAgICBQcm9taXNlIG9iamVjdHMgcmVwcmVzZW50IHRoZSBldmVudHVhbCByZXN1bHQgb2YgYW4gYXN5bmNocm9ub3VzIG9wZXJhdGlvbi4gVGhlXG4gICAgICBwcmltYXJ5IHdheSBvZiBpbnRlcmFjdGluZyB3aXRoIGEgcHJvbWlzZSBpcyB0aHJvdWdoIGl0cyBgdGhlbmAgbWV0aG9kLCB3aGljaFxuICAgICAgcmVnaXN0ZXJzIGNhbGxiYWNrcyB0byByZWNlaXZlIGVpdGhlciBhIHByb21pc2UncyBldmVudHVhbCB2YWx1ZSBvciB0aGUgcmVhc29uXG4gICAgICB3aHkgdGhlIHByb21pc2UgY2Fubm90IGJlIGZ1bGZpbGxlZC5cblxuICAgICAgVGVybWlub2xvZ3lcbiAgICAgIC0tLS0tLS0tLS0tXG5cbiAgICAgIC0gYHByb21pc2VgIGlzIGFuIG9iamVjdCBvciBmdW5jdGlvbiB3aXRoIGEgYHRoZW5gIG1ldGhvZCB3aG9zZSBiZWhhdmlvciBjb25mb3JtcyB0byB0aGlzIHNwZWNpZmljYXRpb24uXG4gICAgICAtIGB0aGVuYWJsZWAgaXMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyBhIGB0aGVuYCBtZXRob2QuXG4gICAgICAtIGB2YWx1ZWAgaXMgYW55IGxlZ2FsIEphdmFTY3JpcHQgdmFsdWUgKGluY2x1ZGluZyB1bmRlZmluZWQsIGEgdGhlbmFibGUsIG9yIGEgcHJvbWlzZSkuXG4gICAgICAtIGBleGNlcHRpb25gIGlzIGEgdmFsdWUgdGhhdCBpcyB0aHJvd24gdXNpbmcgdGhlIHRocm93IHN0YXRlbWVudC5cbiAgICAgIC0gYHJlYXNvbmAgaXMgYSB2YWx1ZSB0aGF0IGluZGljYXRlcyB3aHkgYSBwcm9taXNlIHdhcyByZWplY3RlZC5cbiAgICAgIC0gYHNldHRsZWRgIHRoZSBmaW5hbCByZXN0aW5nIHN0YXRlIG9mIGEgcHJvbWlzZSwgZnVsZmlsbGVkIG9yIHJlamVjdGVkLlxuXG4gICAgICBBIHByb21pc2UgY2FuIGJlIGluIG9uZSBvZiB0aHJlZSBzdGF0ZXM6IHBlbmRpbmcsIGZ1bGZpbGxlZCwgb3IgcmVqZWN0ZWQuXG5cbiAgICAgIFByb21pc2VzIHRoYXQgYXJlIGZ1bGZpbGxlZCBoYXZlIGEgZnVsZmlsbG1lbnQgdmFsdWUgYW5kIGFyZSBpbiB0aGUgZnVsZmlsbGVkXG4gICAgICBzdGF0ZS4gIFByb21pc2VzIHRoYXQgYXJlIHJlamVjdGVkIGhhdmUgYSByZWplY3Rpb24gcmVhc29uIGFuZCBhcmUgaW4gdGhlXG4gICAgICByZWplY3RlZCBzdGF0ZS4gIEEgZnVsZmlsbG1lbnQgdmFsdWUgaXMgbmV2ZXIgYSB0aGVuYWJsZS5cblxuICAgICAgUHJvbWlzZXMgY2FuIGFsc28gYmUgc2FpZCB0byAqcmVzb2x2ZSogYSB2YWx1ZS4gIElmIHRoaXMgdmFsdWUgaXMgYWxzbyBhXG4gICAgICBwcm9taXNlLCB0aGVuIHRoZSBvcmlnaW5hbCBwcm9taXNlJ3Mgc2V0dGxlZCBzdGF0ZSB3aWxsIG1hdGNoIHRoZSB2YWx1ZSdzXG4gICAgICBzZXR0bGVkIHN0YXRlLiAgU28gYSBwcm9taXNlIHRoYXQgKnJlc29sdmVzKiBhIHByb21pc2UgdGhhdCByZWplY3RzIHdpbGxcbiAgICAgIGl0c2VsZiByZWplY3QsIGFuZCBhIHByb21pc2UgdGhhdCAqcmVzb2x2ZXMqIGEgcHJvbWlzZSB0aGF0IGZ1bGZpbGxzIHdpbGxcbiAgICAgIGl0c2VsZiBmdWxmaWxsLlxuXG5cbiAgICAgIEJhc2ljIFVzYWdlOlxuICAgICAgLS0tLS0tLS0tLS0tXG5cbiAgICAgIGBgYGpzXG4gICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAvLyBvbiBzdWNjZXNzXG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuXG4gICAgICAgIC8vIG9uIGZhaWx1cmVcbiAgICAgICAgcmVqZWN0KHJlYXNvbik7XG4gICAgICB9KTtcblxuICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIC8vIG9uIGZ1bGZpbGxtZW50XG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgLy8gb24gcmVqZWN0aW9uXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBBZHZhbmNlZCBVc2FnZTpcbiAgICAgIC0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBQcm9taXNlcyBzaGluZSB3aGVuIGFic3RyYWN0aW5nIGF3YXkgYXN5bmNocm9ub3VzIGludGVyYWN0aW9ucyBzdWNoIGFzXG4gICAgICBgWE1MSHR0cFJlcXVlc3Rgcy5cblxuICAgICAgYGBganNcbiAgICAgIGZ1bmN0aW9uIGdldEpTT04odXJsKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpO1xuICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBoYW5kbGVyO1xuICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgICAgeGhyLnNlbmQoKTtcblxuICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSB0aGlzLkRPTkUpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMucmVzcG9uc2UpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ2dldEpTT046IGAnICsgdXJsICsgJ2AgZmFpbGVkIHdpdGggc3RhdHVzOiBbJyArIHRoaXMuc3RhdHVzICsgJ10nKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZ2V0SlNPTignL3Bvc3RzLmpzb24nKS50aGVuKGZ1bmN0aW9uKGpzb24pIHtcbiAgICAgICAgLy8gb24gZnVsZmlsbG1lbnRcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAvLyBvbiByZWplY3Rpb25cbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIFVubGlrZSBjYWxsYmFja3MsIHByb21pc2VzIGFyZSBncmVhdCBjb21wb3NhYmxlIHByaW1pdGl2ZXMuXG5cbiAgICAgIGBgYGpzXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIGdldEpTT04oJy9wb3N0cycpLFxuICAgICAgICBnZXRKU09OKCcvY29tbWVudHMnKVxuICAgICAgXSkudGhlbihmdW5jdGlvbih2YWx1ZXMpe1xuICAgICAgICB2YWx1ZXNbMF0gLy8gPT4gcG9zdHNKU09OXG4gICAgICAgIHZhbHVlc1sxXSAvLyA9PiBjb21tZW50c0pTT05cblxuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQGNsYXNzIFByb21pc2VcbiAgICAgIEBwYXJhbSB7ZnVuY3Rpb259IHJlc29sdmVyXG4gICAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgICBAY29uc3RydWN0b3JcbiAgICAqL1xuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlKHJlc29sdmVyKSB7XG4gICAgICB0aGlzW2xpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBST01JU0VfSURdID0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbmV4dElkKCk7XG4gICAgICB0aGlzLl9yZXN1bHQgPSB0aGlzLl9zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N1YnNjcmliZXJzID0gW107XG5cbiAgICAgIGlmIChsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRub29wICE9PSByZXNvbHZlcikge1xuICAgICAgICB0eXBlb2YgcmVzb2x2ZXIgIT09ICdmdW5jdGlvbicgJiYgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJG5lZWRzUmVzb2x2ZXIoKTtcbiAgICAgICAgdGhpcyBpbnN0YW5jZW9mIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlID8gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaW5pdGlhbGl6ZVByb21pc2UodGhpcywgcmVzb2x2ZXIpIDogbGliJGVzNiRwcm9taXNlJHByb21pc2UkJG5lZWRzTmV3KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UuYWxsID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkYWxsJCRkZWZhdWx0O1xuICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLnJhY2UgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyYWNlJCRkZWZhdWx0O1xuICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLnJlc29sdmUgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZXNvbHZlJCRkZWZhdWx0O1xuICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLnJlamVjdCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlamVjdCQkZGVmYXVsdDtcbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5fc2V0U2NoZWR1bGVyID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHNldFNjaGVkdWxlcjtcbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5fc2V0QXNhcCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzZXRBc2FwO1xuICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLl9hc2FwID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXA7XG5cbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5wcm90b3R5cGUgPSB7XG4gICAgICBjb25zdHJ1Y3RvcjogbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UsXG5cbiAgICAvKipcbiAgICAgIFRoZSBwcmltYXJ5IHdheSBvZiBpbnRlcmFjdGluZyB3aXRoIGEgcHJvbWlzZSBpcyB0aHJvdWdoIGl0cyBgdGhlbmAgbWV0aG9kLFxuICAgICAgd2hpY2ggcmVnaXN0ZXJzIGNhbGxiYWNrcyB0byByZWNlaXZlIGVpdGhlciBhIHByb21pc2UncyBldmVudHVhbCB2YWx1ZSBvciB0aGVcbiAgICAgIHJlYXNvbiB3aHkgdGhlIHByb21pc2UgY2Fubm90IGJlIGZ1bGZpbGxlZC5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbih1c2VyKXtcbiAgICAgICAgLy8gdXNlciBpcyBhdmFpbGFibGVcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAgIC8vIHVzZXIgaXMgdW5hdmFpbGFibGUsIGFuZCB5b3UgYXJlIGdpdmVuIHRoZSByZWFzb24gd2h5XG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBDaGFpbmluZ1xuICAgICAgLS0tLS0tLS1cblxuICAgICAgVGhlIHJldHVybiB2YWx1ZSBvZiBgdGhlbmAgaXMgaXRzZWxmIGEgcHJvbWlzZS4gIFRoaXMgc2Vjb25kLCAnZG93bnN0cmVhbSdcbiAgICAgIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmaXJzdCBwcm9taXNlJ3MgZnVsZmlsbG1lbnRcbiAgICAgIG9yIHJlamVjdGlvbiBoYW5kbGVyLCBvciByZWplY3RlZCBpZiB0aGUgaGFuZGxlciB0aHJvd3MgYW4gZXhjZXB0aW9uLlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHJldHVybiB1c2VyLm5hbWU7XG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIHJldHVybiAnZGVmYXVsdCBuYW1lJztcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHVzZXJOYW1lKSB7XG4gICAgICAgIC8vIElmIGBmaW5kVXNlcmAgZnVsZmlsbGVkLCBgdXNlck5hbWVgIHdpbGwgYmUgdGhlIHVzZXIncyBuYW1lLCBvdGhlcndpc2UgaXRcbiAgICAgICAgLy8gd2lsbCBiZSBgJ2RlZmF1bHQgbmFtZSdgXG4gICAgICB9KTtcblxuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRm91bmQgdXNlciwgYnV0IHN0aWxsIHVuaGFwcHknKTtcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgZmluZFVzZXJgIHJlamVjdGVkIGFuZCB3ZSdyZSB1bmhhcHB5Jyk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAvLyBuZXZlciByZWFjaGVkXG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIC8vIGlmIGBmaW5kVXNlcmAgZnVsZmlsbGVkLCBgcmVhc29uYCB3aWxsIGJlICdGb3VuZCB1c2VyLCBidXQgc3RpbGwgdW5oYXBweScuXG4gICAgICAgIC8vIElmIGBmaW5kVXNlcmAgcmVqZWN0ZWQsIGByZWFzb25gIHdpbGwgYmUgJ2BmaW5kVXNlcmAgcmVqZWN0ZWQgYW5kIHdlJ3JlIHVuaGFwcHknLlxuICAgICAgfSk7XG4gICAgICBgYGBcbiAgICAgIElmIHRoZSBkb3duc3RyZWFtIHByb21pc2UgZG9lcyBub3Qgc3BlY2lmeSBhIHJlamVjdGlvbiBoYW5kbGVyLCByZWplY3Rpb24gcmVhc29ucyB3aWxsIGJlIHByb3BhZ2F0ZWQgZnVydGhlciBkb3duc3RyZWFtLlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHRocm93IG5ldyBQZWRhZ29naWNhbEV4Y2VwdGlvbignVXBzdHJlYW0gZXJyb3InKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIC8vIG5ldmVyIHJlYWNoZWRcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIC8vIG5ldmVyIHJlYWNoZWRcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgLy8gVGhlIGBQZWRnYWdvY2lhbEV4Y2VwdGlvbmAgaXMgcHJvcGFnYXRlZCBhbGwgdGhlIHdheSBkb3duIHRvIGhlcmVcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEFzc2ltaWxhdGlvblxuICAgICAgLS0tLS0tLS0tLS0tXG5cbiAgICAgIFNvbWV0aW1lcyB0aGUgdmFsdWUgeW91IHdhbnQgdG8gcHJvcGFnYXRlIHRvIGEgZG93bnN0cmVhbSBwcm9taXNlIGNhbiBvbmx5IGJlXG4gICAgICByZXRyaWV2ZWQgYXN5bmNocm9ub3VzbHkuIFRoaXMgY2FuIGJlIGFjaGlldmVkIGJ5IHJldHVybmluZyBhIHByb21pc2UgaW4gdGhlXG4gICAgICBmdWxmaWxsbWVudCBvciByZWplY3Rpb24gaGFuZGxlci4gVGhlIGRvd25zdHJlYW0gcHJvbWlzZSB3aWxsIHRoZW4gYmUgcGVuZGluZ1xuICAgICAgdW50aWwgdGhlIHJldHVybmVkIHByb21pc2UgaXMgc2V0dGxlZC4gVGhpcyBpcyBjYWxsZWQgKmFzc2ltaWxhdGlvbiouXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRDb21tZW50c0J5QXV0aG9yKHVzZXIpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoY29tbWVudHMpIHtcbiAgICAgICAgLy8gVGhlIHVzZXIncyBjb21tZW50cyBhcmUgbm93IGF2YWlsYWJsZVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgSWYgdGhlIGFzc2ltbGlhdGVkIHByb21pc2UgcmVqZWN0cywgdGhlbiB0aGUgZG93bnN0cmVhbSBwcm9taXNlIHdpbGwgYWxzbyByZWplY3QuXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRDb21tZW50c0J5QXV0aG9yKHVzZXIpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoY29tbWVudHMpIHtcbiAgICAgICAgLy8gSWYgYGZpbmRDb21tZW50c0J5QXV0aG9yYCBmdWxmaWxscywgd2UnbGwgaGF2ZSB0aGUgdmFsdWUgaGVyZVxuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAvLyBJZiBgZmluZENvbW1lbnRzQnlBdXRob3JgIHJlamVjdHMsIHdlJ2xsIGhhdmUgdGhlIHJlYXNvbiBoZXJlXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBTaW1wbGUgRXhhbXBsZVxuICAgICAgLS0tLS0tLS0tLS0tLS1cblxuICAgICAgU3luY2hyb25vdXMgRXhhbXBsZVxuXG4gICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICB0cnkge1xuICAgICAgICByZXN1bHQgPSBmaW5kUmVzdWx0KCk7XG4gICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAgIC8vIGZhaWx1cmVcbiAgICAgIH1cbiAgICAgIGBgYFxuXG4gICAgICBFcnJiYWNrIEV4YW1wbGVcblxuICAgICAgYGBganNcbiAgICAgIGZpbmRSZXN1bHQoZnVuY3Rpb24ocmVzdWx0LCBlcnIpe1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgUHJvbWlzZSBFeGFtcGxlO1xuXG4gICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICBmaW5kUmVzdWx0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xuICAgICAgICAvLyBzdWNjZXNzXG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgICAgICAvLyBmYWlsdXJlXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBBZHZhbmNlZCBFeGFtcGxlXG4gICAgICAtLS0tLS0tLS0tLS0tLVxuXG4gICAgICBTeW5jaHJvbm91cyBFeGFtcGxlXG5cbiAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgIHZhciBhdXRob3IsIGJvb2tzO1xuXG4gICAgICB0cnkge1xuICAgICAgICBhdXRob3IgPSBmaW5kQXV0aG9yKCk7XG4gICAgICAgIGJvb2tzICA9IGZpbmRCb29rc0J5QXV0aG9yKGF1dGhvcik7XG4gICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAgIC8vIGZhaWx1cmVcbiAgICAgIH1cbiAgICAgIGBgYFxuXG4gICAgICBFcnJiYWNrIEV4YW1wbGVcblxuICAgICAgYGBganNcblxuICAgICAgZnVuY3Rpb24gZm91bmRCb29rcyhib29rcykge1xuXG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGZhaWx1cmUocmVhc29uKSB7XG5cbiAgICAgIH1cblxuICAgICAgZmluZEF1dGhvcihmdW5jdGlvbihhdXRob3IsIGVycil7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBmYWlsdXJlKGVycik7XG4gICAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmaW5kQm9vb2tzQnlBdXRob3IoYXV0aG9yLCBmdW5jdGlvbihib29rcywgZXJyKSB7XG4gICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBmYWlsdXJlKGVycik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGZvdW5kQm9va3MoYm9va3MpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAgICAgICAgICAgICBmYWlsdXJlKHJlYXNvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICBmYWlsdXJlKGVycik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgUHJvbWlzZSBFeGFtcGxlO1xuXG4gICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICBmaW5kQXV0aG9yKCkuXG4gICAgICAgIHRoZW4oZmluZEJvb2tzQnlBdXRob3IpLlxuICAgICAgICB0aGVuKGZ1bmN0aW9uKGJvb2tzKXtcbiAgICAgICAgICAvLyBmb3VuZCBib29rc1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEBtZXRob2QgdGhlblxuICAgICAgQHBhcmFtIHtGdW5jdGlvbn0gb25GdWxmaWxsZWRcbiAgICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uUmVqZWN0ZWRcbiAgICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICAgIEByZXR1cm4ge1Byb21pc2V9XG4gICAgKi9cbiAgICAgIHRoZW46IGxpYiRlczYkcHJvbWlzZSR0aGVuJCRkZWZhdWx0LFxuXG4gICAgLyoqXG4gICAgICBgY2F0Y2hgIGlzIHNpbXBseSBzdWdhciBmb3IgYHRoZW4odW5kZWZpbmVkLCBvblJlamVjdGlvbilgIHdoaWNoIG1ha2VzIGl0IHRoZSBzYW1lXG4gICAgICBhcyB0aGUgY2F0Y2ggYmxvY2sgb2YgYSB0cnkvY2F0Y2ggc3RhdGVtZW50LlxuXG4gICAgICBgYGBqc1xuICAgICAgZnVuY3Rpb24gZmluZEF1dGhvcigpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkbid0IGZpbmQgdGhhdCBhdXRob3InKTtcbiAgICAgIH1cblxuICAgICAgLy8gc3luY2hyb25vdXNcbiAgICAgIHRyeSB7XG4gICAgICAgIGZpbmRBdXRob3IoKTtcbiAgICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gICAgICB9XG5cbiAgICAgIC8vIGFzeW5jIHdpdGggcHJvbWlzZXNcbiAgICAgIGZpbmRBdXRob3IoKS5jYXRjaChmdW5jdGlvbihyZWFzb24pe1xuICAgICAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQG1ldGhvZCBjYXRjaFxuICAgICAgQHBhcmFtIHtGdW5jdGlvbn0gb25SZWplY3Rpb25cbiAgICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICAgIEByZXR1cm4ge1Byb21pc2V9XG4gICAgKi9cbiAgICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3Rpb24pO1xuICAgICAgfVxuICAgIH07XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJEVudW1lcmF0b3I7XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJEVudW1lcmF0b3IoQ29uc3RydWN0b3IsIGlucHV0KSB7XG4gICAgICB0aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3I7XG4gICAgICB0aGlzLnByb21pc2UgPSBuZXcgQ29uc3RydWN0b3IobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbm9vcCk7XG5cbiAgICAgIGlmICghdGhpcy5wcm9taXNlW2xpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBST01JU0VfSURdKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG1ha2VQcm9taXNlKHRoaXMucHJvbWlzZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChsaWIkZXM2JHByb21pc2UkdXRpbHMkJGlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgIHRoaXMuX2lucHV0ICAgICA9IGlucHV0O1xuICAgICAgICB0aGlzLmxlbmd0aCAgICAgPSBpbnB1dC5sZW5ndGg7XG4gICAgICAgIHRoaXMuX3JlbWFpbmluZyA9IGlucHV0Lmxlbmd0aDtcblxuICAgICAgICB0aGlzLl9yZXN1bHQgPSBuZXcgQXJyYXkodGhpcy5sZW5ndGgpO1xuXG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwodGhpcy5wcm9taXNlLCB0aGlzLl9yZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubGVuZ3RoID0gdGhpcy5sZW5ndGggfHwgMDtcbiAgICAgICAgICB0aGlzLl9lbnVtZXJhdGUoKTtcbiAgICAgICAgICBpZiAodGhpcy5fcmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHRoaXMucHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdCh0aGlzLnByb21pc2UsIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCR2YWxpZGF0aW9uRXJyb3IoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJHZhbGlkYXRpb25FcnJvcigpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0FycmF5IE1ldGhvZHMgbXVzdCBiZSBwcm92aWRlZCBhbiBBcnJheScpO1xuICAgIH1cblxuICAgIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fZW51bWVyYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbGVuZ3RoICA9IHRoaXMubGVuZ3RoO1xuICAgICAgdmFyIGlucHV0ICAgPSB0aGlzLl9pbnB1dDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IHRoaXMuX3N0YXRlID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQRU5ESU5HICYmIGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLl9lYWNoRW50cnkoaW5wdXRbaV0sIGkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX2VhY2hFbnRyeSA9IGZ1bmN0aW9uKGVudHJ5LCBpKSB7XG4gICAgICB2YXIgYyA9IHRoaXMuX2luc3RhbmNlQ29uc3RydWN0b3I7XG4gICAgICB2YXIgcmVzb2x2ZSA9IGMucmVzb2x2ZTtcblxuICAgICAgaWYgKHJlc29sdmUgPT09IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlc29sdmUkJGRlZmF1bHQpIHtcbiAgICAgICAgdmFyIHRoZW4gPSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRnZXRUaGVuKGVudHJ5KTtcblxuICAgICAgICBpZiAodGhlbiA9PT0gbGliJGVzNiRwcm9taXNlJHRoZW4kJGRlZmF1bHQgJiZcbiAgICAgICAgICAgIGVudHJ5Ll9zdGF0ZSAhPT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUEVORElORykge1xuICAgICAgICAgIHRoaXMuX3NldHRsZWRBdChlbnRyeS5fc3RhdGUsIGksIGVudHJ5Ll9yZXN1bHQpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGVuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5fcmVtYWluaW5nLS07XG4gICAgICAgICAgdGhpcy5fcmVzdWx0W2ldID0gZW50cnk7XG4gICAgICAgIH0gZWxzZSBpZiAoYyA9PT0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkJGRlZmF1bHQpIHtcbiAgICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBjKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3ApO1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgZW50cnksIHRoZW4pO1xuICAgICAgICAgIHRoaXMuX3dpbGxTZXR0bGVBdChwcm9taXNlLCBpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl93aWxsU2V0dGxlQXQobmV3IGMoZnVuY3Rpb24ocmVzb2x2ZSkgeyByZXNvbHZlKGVudHJ5KTsgfSksIGkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl93aWxsU2V0dGxlQXQocmVzb2x2ZShlbnRyeSksIGkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX3NldHRsZWRBdCA9IGZ1bmN0aW9uKHN0YXRlLCBpLCB2YWx1ZSkge1xuICAgICAgdmFyIHByb21pc2UgPSB0aGlzLnByb21pc2U7XG5cbiAgICAgIGlmIChwcm9taXNlLl9zdGF0ZSA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUEVORElORykge1xuICAgICAgICB0aGlzLl9yZW1haW5pbmctLTtcblxuICAgICAgICBpZiAoc3RhdGUgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFJFSkVDVEVEKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9yZXN1bHRbaV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fcmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl93aWxsU2V0dGxlQXQgPSBmdW5jdGlvbihwcm9taXNlLCBpKSB7XG4gICAgICB2YXIgZW51bWVyYXRvciA9IHRoaXM7XG5cbiAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHN1YnNjcmliZShwcm9taXNlLCB1bmRlZmluZWQsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGVudW1lcmF0b3IuX3NldHRsZWRBdChsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRGVUxGSUxMRUQsIGksIHZhbHVlKTtcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICBlbnVtZXJhdG9yLl9zZXR0bGVkQXQobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUkVKRUNURUQsIGksIHJlYXNvbik7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwb2x5ZmlsbCQkcG9seWZpbGwoKSB7XG4gICAgICB2YXIgbG9jYWw7XG5cbiAgICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGxvY2FsID0gZ2xvYmFsO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBsb2NhbCA9IHNlbGY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGxvY2FsID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncG9seWZpbGwgZmFpbGVkIGJlY2F1c2UgZ2xvYmFsIG9iamVjdCBpcyB1bmF2YWlsYWJsZSBpbiB0aGlzIGVudmlyb25tZW50Jyk7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgUCA9IGxvY2FsLlByb21pc2U7XG5cbiAgICAgIGlmIChQICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChQLnJlc29sdmUoKSkgPT09ICdbb2JqZWN0IFByb21pc2VdJyAmJiAhUC5jYXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbG9jYWwuUHJvbWlzZSA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRkZWZhdWx0O1xuICAgIH1cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHBvbHlmaWxsJCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJHBvbHlmaWxsJCRwb2x5ZmlsbDtcblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkdW1kJCRFUzZQcm9taXNlID0ge1xuICAgICAgJ1Byb21pc2UnOiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkZGVmYXVsdCxcbiAgICAgICdwb2x5ZmlsbCc6IGxpYiRlczYkcHJvbWlzZSRwb2x5ZmlsbCQkZGVmYXVsdFxuICAgIH07XG5cbiAgICAvKiBnbG9iYWwgZGVmaW5lOnRydWUgbW9kdWxlOnRydWUgd2luZG93OiB0cnVlICovXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lWydhbWQnXSkge1xuICAgICAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gbGliJGVzNiRwcm9taXNlJHVtZCQkRVM2UHJvbWlzZTsgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGVbJ2V4cG9ydHMnXSkge1xuICAgICAgbW9kdWxlWydleHBvcnRzJ10gPSBsaWIkZXM2JHByb21pc2UkdW1kJCRFUzZQcm9taXNlO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzWydFUzZQcm9taXNlJ10gPSBsaWIkZXM2JHByb21pc2UkdW1kJCRFUzZQcm9taXNlO1xuICAgIH1cblxuICAgIGxpYiRlczYkcHJvbWlzZSRwb2x5ZmlsbCQkZGVmYXVsdCgpO1xufSkuY2FsbCh0aGlzKTtcblxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZXM2LXByb21pc2UvZGlzdC9lczYtcHJvbWlzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDg0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gODVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn1cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbiAqKiBtb2R1bGUgaWQgPSA4NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyogKGlnbm9yZWQpICovXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiB2ZXJ0eCAoaWdub3JlZClcbiAqKiBtb2R1bGUgaWQgPSA4N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiZGVmaW5lIGNhbm5vdCBiZSB1c2VkIGluZGlyZWN0XCIpOyB9O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9idWlsZGluL2FtZC1kZWZpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSA4OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jhdy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmF3LWxvYWRlci9pbmRleC5qcyEuL3N0eWxlcy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jhdy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvc3R5bGVzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=
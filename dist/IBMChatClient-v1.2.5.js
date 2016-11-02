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
		 * @param {string} config.userID - A hashed non-identifiable (e.g. not a users email address or public user id) unique ID used for tracking in the Engagement Metrics dashboard.
		 * @param {string} config.baseURL=https://api.ibm.com/virtualagent/run/api/v1/ - optional: specifies a different bot hosting server. The most common use-case for this param is to point the widget to a server that will add X-IBM-Client-Id and X-IBM-Client-Secret headers to the request.
		 * @param {string} config.XIBMClientID - optional: Your IBMClientID... this should not be made public in a public environment. Including this will add X-IBM-Client-Id as a header to your request.
		 * @param {string} config.XIBMClientSecret - optional: Your IBMClientSecret... this should not be made public in a public environment. Including this will add X-IBM-Client-Secret as a header to your request.
		 * @param {Function} config.errorHandler - optional: A function that takes an error object as a param if there is a problem with communicating with your Virtual Agent. By default, if an error is received, the user is escalated to a live agent. You may, however, want to handle some errors differently (401 for instance)
		 * @param {Object} config.errorHandlerContext - optional: A "this" value for the errorHandler.
		 * @param {Object} config.styles - optional: Override default styling.
		 * @param {string} config.styles.background=rgba(61,61,61,1) - optional: rgba(X, X, X, X) or hex code for background color
		 * @param {string} config.styles.text=#ffffff - optional: rgba(X, X, X, X) or hex code for main text color
		 * @param {string} config.styles.link=#ffffff - optional: rgba(X, X, X, X) or hex code for color of links in text
		 * @param {string} config.styles.secondaryBackground=rgba(70,70,70,1) - optional: rgba(X, X, X, X) or hex code for background color of chat bubbles and other secondary info
		 * @param {string} config.styles.secondaryText=rgba(247,247,247,1) - optional: rgba(X, X, X, X) or hex code for color of chat bubble text and other secondary info
		 * @param {string} config.styles.inputBackground=rgba(70,70,70,1) - optional: rgba(X, X, X, X) or hex code for background color of input elements in forms
		 * @param {string} config.styles.inputText=rgba(247,247,247,1) - optional: rgba(X, X, X, X) or hex code for color of input text in forms
		 * @param {string} config.styles.accentText=#ffffff - optional: rgba(X, X, X, X) or hex code for text colors to be used in conjunction with accentBackground e.g. button text
		 * @param {string} config.styles.accentBackground=rgba(175,110,232,1) - optional: rgba(X, X, X, X) or hex code for accent colors used by the chat application e.g. buttons
		 * @param {string} config.styles.errorText=#ffffff - optional: rgba(X, X, X, X) or hex code for text colors to be used in conjunction with errorBackground e.g. button text
		 * @param {string} config.styles.errorBackground=rgba(239,62,58,1) - optional: rgba(X, X, X, X) or hex code for error colors used by the chat application e.g. validation buttons
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
		 * @memberof IBMChat
		 * @returns {IBMChat} - Returns IBMChat for chaining.
		 * @example
		 * IBMChat.enableInput();
		 */
		enableInput: function() {
			bootstrap.enableInput();
			return IBMChat;
		},
	
		/**
		 * Subscribe to an IBMChat event. See [./EVENTS.md](./EVENTS.md) for more details.
		 * @function subscribe
		 * @memberof IBMChat
		 * @param {string} eventName - Takes a string representing the name of the event
		 * @param {function} callback - function to run when event is called
		 * @param context - optional: value of "this" in the function
		 * @returns {Object} - Returns object with a .remove function to destroy the subscription
		 * @example
		 * var mySubscription = IBMChat.subscribe('the-end-of-the-world', function(message) {
		 *   console.log(message);
		 *   mySubscription.remove(); // remove subscription
		 * });
		 */
		subscribe: bootstrap.subscribe,
		/**
		 * Publish an IBMChat event. See [./EVENTS.md](./EVENTS.md) for more details.
		 * @function publish
		 * @memberof IBMChat
		 * @param {string} eventName - A string that represents the name of the event data
		 * @param data - Data to pass to the callback function of any subscribed functions. Accepts any data type.
		 * @returns {IBMChat} - Returns IBMChat for chaining.
		 * @example
		 * IBMChat.publish('the-end-of-the-world', 'panic!');
		 */
		publish: function(eventName, data) {
			bootstrap.publish(eventName, data);
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
			* @param {string} key - The named key of the value you are checking the existence of.
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
		 * See a list of current event subscriptions. See [./EVENTS.md](./EVENTS.md) for more details.
	 	 * @function currentSubscriptions
		 * @memberof IBMChat
		 * @returns {Array} - Array of events and callbacks.
		 * @example
		 * IBMChat.currentSubscriptions();
		 */
		currentSubscriptions: bootstrap.currentSubscriptions,
		/**
		* @ignore
		*/
		playback: bootstrap.playback,
	
		/**
		* @ignore
		*/
		state: bootstrap.state,
	
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

	module.exports = ".IBMChat-outer-container {\n\tmax-width: 768px;\n  min-width: 288px;\n  margin: 0 auto 0 auto;\n  border: none;\n\tmin-height:100px;\n  height: 100%;\n  box-sizing: border-box;\n\tpadding:0;\n\tdisplay:table;\n\twidth:100%;\n\ttext-align: left;\n}\n\n\n/* Agent Component */\n\n.IBMChat-inner-container {\n\tdisplay:table-cell;\n\theight:100%;\n\tmargin: 0;\n\tpadding: 0 8px 0 8px;\n\tvertical-align: bottom;\n}\n\n/* Chat Component */\n\n.IBMChat-chat-container {\n\tdisplay:table-row;\n\tmargin: 0;\n\tpadding:\n}\n\n/* Messages Component */\n\n.IBMChat-messages {\n\toverflow-y: auto;\n\toverflow-x: hidden;\n\theight:auto;\n}\n\n.IBMChat-messages label {\n\tdisplay:block;\n\tfont-weight:bold;\n\ttext-transform: capitalize;\n\tpadding-bottom:0.25em;\n}\n\n.IBMChat-messages input {\n\tborder-radius: 0;\n\tborder: 0;\n\tpadding:0.25em;\n}\n\n.IBMChat-messages button {\n\tbackground: none;\n\tborder: 0;\n\tcolor: inherit;\n\tfont: inherit;\n\tline-height: normal;\n\toverflow: visible;\n\tpadding: 0;\n\t-webkit-appearance: button; /* for input */\n\t-webkit-user-select: none; /* for button */\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tborder-radius: 2em;\n\tcursor: pointer;\n\tline-height: 2.5em;\n\tmargin:0;\n}\n\n.IBMChat-messages button[disabled=\"true\"] {\n\tcursor: default;\n  opacity:.7;\n}\n\n.IBMChat-messages button::-moz-focus-inner {\n\tborder: 0;\n\tpadding: 0;\n}\n\n/* WatsonMessage Component */\n\n.IBMChat-watson-message-container {\n\tmargin: 1em 0 1em 0;\n}\n\n.IBMChat-watson-message {\n\tmin-height: 1em;\n\tmargin:1em 2em 1em 0;\n\tpadding: 0.1em 0.1em 0.1em 1em;\n}\n\n.IBMChat-watson-layout {\n\tmargin: 0 1em 0 1em;\n}\n\n.IBMChat-disabled-layout {\n\topacity: 0.7;\n}\n\n/* UserMessage Component */\n\n.IBMChat-user-message-container {\n  margin: 1em 0 1em 2em;\n}\n\n.IBMChat-user-message {\n  padding:1em;\n\tmargin:0 1em 0 0;\n\tborder-radius: 0.5em;\n}\n\n/* Input Component */\n\n.IBMChat-input-container {\n\tdisplay:table-row;\n\theight:72px;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n.IBMChat-input-form {\n\tdisplay:table-cell;\n\tposition:relative;\n\theight: 24px;\n\tpadding:24px 24px 0 24px;\n}\n\n.IBMChat-chat-textbox {\n  border: none;\n\tborder-radius: 0;\n  color: inherit;\n  background: transparent;\n  font-size:1em;\n  margin:0;\n  padding:0 0 3px 0;\n  width:100%;\n}\n\n.IBMChat-chat-textbox[disabled='disabled'] {\n\topacity:0.5;\n}\n\n.IBMChat-input-form ::-webkit-input-placeholder {\n\topacity:1;\n}\n\n.IBMChat-chat-textbox:focus {\n  outline: none;\n  padding:0 0 2px 0;\n}\n\n/* validation error message */\n.IBMChat-validation-error {\n\tpadding: 0.25em;\n\tfont-size: 0.9em;\n}\n\n/* Spinner */\n.IBMChat-input-loading {\n\tz-index: 2;\n\tposition:absolute;\n\tright: 16px;\n\ttop: 15px;\n\theight:32px;\n\twidth:32px;\n}\n\n.IBMChat-ibm-spinner-start {\n\topacity:0;\n}\n\n.IBMChat-ibm-spinner {\n\tfill: transparent;\n\tstroke-width: 3;\n\tstroke-linecap: \"butt\";\n\tstroke-dasharray: 1;\n\tstroke-dashoffset: 1;\n}\n\n/* initial rotation and stroke animation and infinite rotation*/\n.IBMChat-init-spin {\n\tanimation: init-rotate 150ms linear forwards, rotate-loop 2000ms linear infinite;\n}\n\n.IBMChat-init-spin svg circle {\n\tanimation: init-stroke 1000ms linear;\n}\n\n.IBMChat-end-spin svg circle {\n\tdisplay:none;\n}\n\n/* initial rotation */\n@keyframes init-rotate {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t100% {\n\t\ttransform: rotate(180deg);\n\t}\n}\n\n/* looping rotation */\n@keyframes rotate-loop {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n/* initial stroke animation */\n@keyframes init-stroke {\n\t0% {\n\t\topacity: 0;\n\t}\n\t100% {\n\t\topacity: 1;\n\t}\n}\n"

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
	var eventHandlers = __webpack_require__(77);
	var BotSDK = __webpack_require__(65);
	var state = __webpack_require__(10);
	var profile = __webpack_require__(64);
	var playback = __webpack_require__(94);
	var Promise = __webpack_require__(37).Promise;
	var assign = __webpack_require__(11);
	var defaultStyles = __webpack_require__(95);
	
	var layoutInit = {};
	var registeredLayouts = [];
	
	function registerEvents(tryIt, playback) {
		events.subscribe('start', eventHandlers.start);
		events.subscribe('resize', eventHandlers.resize);
		events.subscribe('disable-input', eventHandlers.input.disableInput);
		events.subscribe('enable-loading', eventHandlers.input.enableLoadingInput);
		events.subscribe('disable-loading', eventHandlers.input.disableLoadingInput);
		events.subscribe('scroll-to-bottom', eventHandlers.scrollToBottom);
		events.subscribe('receive', eventHandlers.receive);
		if (tryIt === true) {
			events.subscribe('try-it-error', eventHandlers.error.tryIt);
			events.subscribe('try-it-layout-subscription', eventHandlers.tryIt.layoutError);
			events.subscribe('try-it-action-subscription', eventHandlers.tryIt.actionError);
		}
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
		registerLayout('request-geolocation-zipcode', layouts.requestGeolocationZipcode.init, true);
		registerLayout('choose', layouts.choose.init, true);
		registerLayout('form', layouts.form.init, true);
		registerLayout('cc-validator', layouts.creditCard.init, true);
		registerLayout('error', layouts.error.init, true);
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
				baseURL: SDKconfig.baseURL,
				originalContent: root.innerHTML,
				handleInput: {
					default: true
				},
				tryIt: config.tryIt || false,
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
					events.subscribe('error', eventHandlers.error.default);
				registerEvents(config.tryIt, config.playback);
				registerLayouts();
				//TODO: remove if playback when Dashboard code is updated
				if (config.playback === true) {
					defaultState.chatID = 'playback';
					events.publish('start', defaultState);
					resolve();
				} else if (config.botID) {
					BotSDK
						.configure( SDKconfig )
						.start( config.botID )
						.then( function(res) {
							defaultState.chatID = res.chatID;
							window.sessionStorage.setItem('IBMChatChatID', res.chatID);
							events.publish('start', defaultState);
							events.publish('receive', res);
							resolve();
						})['catch']( function(err) {
							console.error(err);
							reject(err);
						});
				} else {
					console.error('BotID is required!');
					reject({
						error: 'BotID is required!'
					});
				}
			} else {
				console.error('Element for chat does not exist!');
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
		playback: playback,
		state: state
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
	var requestGeolocationLatlongLayout = __webpack_require__(51);
	var requestGeolocationZipcodeLayout = __webpack_require__(52);
	var chooseLocationTypeLayout = __webpack_require__(53);
	var chooseLayout = __webpack_require__(57);
	var formLayout = __webpack_require__(61);
	var creditCardLayout = __webpack_require__(68);
	var errorLayout = __webpack_require__(73);
	
	module.exports = {
		showLocations: showLocationsLayout,
		requestGeolocationLatlong: requestGeolocationLatlongLayout,
		requestGeolocationZipcode: requestGeolocationZipcodeLayout,
		chooseLocationType: chooseLocationTypeLayout,
		choose: chooseLayout,
		creditCard: creditCardLayout,
		form: formLayout,
		error: errorLayout
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
		base: __webpack_require__(42),
		createDomArray: __webpack_require__(43),
		addLocationsItem: __webpack_require__(44),
		addLocationItem: __webpack_require__(45),
		hoursClosed: __webpack_require__(46),
		hoursOpen: __webpack_require__(47),
		hoursTodayOpen: __webpack_require__(48),
		hoursTodayClosed: __webpack_require__(49),
		hoursTimezone: __webpack_require__(50)
	};
	
	var strings = {
		locations: {
			none: 'We could not find any locations close to you.',
			single: 'Here are the details for the ${location} location:',
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
	
	function createHours(hoursEl, moreHoursEl, hours, timezone, timezoneEl) {
		if (hours) {
			// hours
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
			// timezone
			if (timezone) {
				var tzChildEl = document.createElement('div');
				tzChildEl.innerHTML = utils.compile(templates.hoursTimezone, {
					ns: ns,
					timezone: timezone
				});
				timezoneEl.appendChild(tzChildEl);
			} else {
				timezoneEl.parentNode.removeChild(timezoneEl);
			}
			// more hours
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
	
	ShowLocations.prototype.init = function(data) {
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
		this.subscribeReceive = subscribe('receive', this.removeAllEventListeners, this);
	};
	
	ShowLocations.prototype.getWidth = function() {
		var width = this.parentElement.querySelector('.IBMChat-watson-layout:last-child').clientWidth;
		return width;
	};
	
	ShowLocations.prototype.reDrawMap = function() {
		this.mapElement.innerHTML = '';
		this.mapElement.appendChild(this.drawLocations());
	};
	
	ShowLocations.prototype.addDetails = function() {
		if (this.data.length > 1)
			return this.addLocations();
		else
			return this.addLocation();
	};
	
	ShowLocations.prototype.convertColor = function(color) {
		function rgb2hex(rgb) {
			rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
			return (rgb && rgb.length === 4) ?
			("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
			("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
			("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
		}
		if (color.indexOf('#') > -1)
			return color.replace('#', '');
		else
			return rgb2hex(color);
	};
	
	ShowLocations.prototype.drawLocations = function() {
		var current = getState();
		var img = document.createElement('img');
		var width = this.getWidth();
		var config = {
			size: width + 'x180',
			scale: pixelRatio
		};
		if (this.data.length === 1)
			config.zoom = 12;
		this.uri = current.mapsServer + '?';
		this.uri += utils.serialize(config);
		this.uri += '&locations=';
		var locations = '';
		for (var i = 0; (i < displayLength && i < this.data.length); i++) {
			var item = this.data[i];
			locations += (i === 0 ) ? item.address.lat + ',' + item.address.lng : '+' + item.address.lat + ',' + item.address.lng;
		}
		this.uri += encodeURIComponent(locations);
		this.uri += '&color=' + encodeURIComponent(this.convertColor(current.styles.accentBackground));
		img.setAttribute('width', '100%');
		img.setAttribute('src', this.uri);
		return img;
	};
	
	ShowLocations.prototype.handleClick = function() {
		this.className = ns + '-location-active';
		publish('receive', {
			message: {
				text: [utils.compile(strings.locations.single, { location: showLocations[this.dataset.uuid].data[this.dataset.id - 1].address.address }), 'Is there anything else I can help you with?'],
				layout: {
					name: 'show-locations',
					index: 0
				},
				data: {
					/* jshint ignore:start */
					location_data: [showLocations[this.dataset.uuid].data[this.dataset.id - 1]]
					/* jshint ignore:end */
				}
			}
		});
	};
	
	ShowLocations.prototype.removeAllEventListeners = function() {
		var layout = document.querySelector('.' + this.uuid + ' .IBMChat-watson-layout');
		layout.classList.add('IBMChat-disabled-layout');
		var inputs = layout.querySelectorAll('input, button');
		for (var i = 0; i < inputs.length; i++)
			inputs[i].setAttribute('disabled', true);
		for (var x = 0; x < this.eventListeners.length; x++)
			this.eventListeners[x].removeEventListener('click', this.handleClick);
		if (this.hoursFunction)
			this.hoursButton.removeEventListener('click', this.hoursFunction);
		if (this.locationsFunction)
			this.locationsButton.removeEventListener('click', this.locationsFunction);
		this.eventListeners = [];
		this.subscribeReceive.remove();
	};
	
	ShowLocations.prototype.addLocation = function() {
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
				timezone: el.querySelector('.' + ns + '-locations-item-data-timezone'),
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
	
		// hours/timezone
		if (item.days && item.days.length > 0) {
			createHours(dom.hours, dom.moreHours, item.days, item.address.timezone, dom.timezone);
			this.hoursFunction = function(e) {
				e.preventDefault();
				dom.parentEl.removeChild(dom.hoursButton);
				dom.moreHours.setAttribute('class', ns + '-locations-item-data-more-hours');
				publish('focus-input');
				publish('scroll-to-bottom');
			};
			this.hoursButton = dom.hoursButton;
			dom.hoursButton.addEventListener('click', this.hoursFunction);
		} else {
			dom.hours.parentNode.removeChild(dom.hours);
			dom.hoursButton.parentNode.removeChild(dom.hoursButton);
		}
	
		if (locationData && locationData.length > 1) {
			this.locationsButton = dom.back;
			this.locationsFunction = function(e) {
				e.preventDefault();
				publish('receive', {
					message: {
						text: [strings.locations.list, 'Is there anything else I can help you with?'],
						layout: {
							name: 'show-locations',
							index: 0
						},
						data: {
							/* jshint ignore:start */
							location_data: locationData
							/* jshint ignore:end */
						}
					}
				});
			};
			dom.back.addEventListener('click', this.locationsFunction);
		} else {
			dom.backHolder.parentNode.removeChild(dom.backHolder);
		}
		container.appendChild(el);
		return container;
	};
	ShowLocations.prototype.addLocations = function() {
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
	};
	
	module.exports = showLocationsLayout;


/***/ },
/* 7 */
[96, 8],
/* 8 */
/***/ function(module, exports) {

	module.exports = ".IBMChat-map {\n\tpadding: 0 0 1em 0;\n}\n\n.IBMChat-map-img {\n\theight:180px;\n}\n\n.IBMChat-map-img img {\n\theight:180px;\n}\n\n.IBMChat-map-multiple-locations {\n\tcursor: default;\n\tdisplay: table;\n\twidth: 100%;\n}\n\n.IBMChat-map-multiple-locations .IBMChat-map-locations-row {\n\tdisplay:table-row;\n\twidth: 100%;\n}\n\n.IBMChat-map-multiple-locations .IBMChat-map-locations-cell {\n\tdisplay: table-cell;\n\toverflow: hidden;\n\tword-wrap: break-word;\n}\n\n.IBMChat-map-location-active .IBMChat-map-multiple-locations {\n\topacity: 1;\n}\n\n.IBMChat-map-locations-item.IBMChat-map-multiple-locations {\n\tpadding: 1em 0 1em 0;\n\tcursor: pointer;\n}\n\n.IBMChat-disabled-layout .IBMChat-map-locations-item.IBMChat-map-multiple-locations {\n\tcursor: default;\n}\n\n.IBMChat-map-data-section {\n\tmargin-top:0.5em;\n}\n\n.IBMChat-map-locations-item {\n\tpadding: 1em;\n\tborder-bottom:1px solid #505050;\n}\n\n\n.IBMChat-map-locations-item-icon {\n\ttext-align:center;\n\twidth: 40px;\n}\n\n.IBMChat-map-locations-item-data {\n\tpadding:0 4px 0 4px;\n\tfont-size:0.9em;\n}\n.IBMChat-map-locations-item-data-title {\n\tfont-weight: bold;\n\tpadding-bottom:0.5em;\n}\n.IBMChat-map-locations-item-data-items {\n\tfont-size: 0.9em;\n}\n\n.IBMChat-map-locations-item-data-section {\n\tpadding-bottom:1em;\n}\n\n.IBMChat-map-locations-item-data-email {\n\tpadding-bottom:1em;\n}\n\n.IBMChat-map-locations-item-data-phone {\n\tdisplay: table;\n\tmax-width:400px;\n\twidth: 100%;\n\tpadding-bottom:1em;\n}\n.IBMChat-map-contact-row {\n\tpadding-bottom:1em;\n}\n\n.IBMChat-map-hours-open {\n\tpadding-bottom:0.5em;\n}\n\n.IBMChat-map-contact-type {\n\tfont-style:italic;\n\tfont-size:0.9em;\n}\n.IBMChat-map-contact-data {\n\n}\n\na.IBMChat-map-locations-item-data-address-link,\na.IBMChat-map-locations-item-data-address-link:hover,\na.IBMChat-map-locations-item-data-address-link:visited,\na.IBMChat-map-locations-item-data-address-link:active,\n.IBMChat-map-contact-data a,\n.IBMChat-map-contact-data a:hover,\n.IBMChat-map-contact-data a:active,\n.IBMChat-map-contact-data a:visited {\n\tfont-weight:normal;\n\tfont-size:0.9em;\n}\n\n.IBMChat-map-locations-item-distance {\n\twidth:64px;\n\tfont-size:0.9em;\n}\n\nbutton.IBMChat-map-locations-item-data-hours-button {\n\tfont-size:0.9em;\n\tpadding: 0 1em 0 1em;\n\tline-height:1.5em;\n\tmargin-top:1em;\n}\n\nbutton.IBMChat-map-locations-all {\n\tfont-size:0.9em;\n\tpadding: 0 1em 0 1em;\n\tline-height:1.5em;\n}\n\n.IBMChat-map-locations-item-data-more-hours {\n\tdisplay: table;\n}\n\n.IBMChat-map-locations-item-data-more-hours.IBMChat-map-hidden {\n\tdisplay: none;\n}\n\n.IBMChat-map-days-hours {\n\tdisplay: table-row;\n}\n\n.IBMChat-map-days-hours-day, .IBMChat-map-days-hours-hours, .IBMChat-map-days-hours-closed {\n\tdisplay: table-cell;\n\tmargin: 0;\n\tpadding:0.75em 1em 0 0;\n\toverflow: hidden;\n\tword-wrap: break-word;\n}\n\n.IBMChat-map-hours-timezone {\n\tfont-style: italic;\n\tfont-size: 0.8em;\n\tpadding-top: 0.5em;\n}\n\n.IBMChat-map-days-hours > div:last-child {\n\tpadding: 0.75em 0 0 0 !important;\n}\n"

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
	
	function get() {
		return state;
	}
	function destroy() {
		state = {};
		set({});
	}
	
	function set(updated) {
		state = assign({}, state, updated);
		if (state.DEBUG) {
			states.push(state);
			console.log('STATE HISTORY: ', states);
			console.log('NEW STATE: ', state);
		}
	}
	
	module.exports ={
		get: get,
		set: set,
		destroy: destroy,
		getState: get,
		setState: set,
		destroyState: destroy
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
								containerClass + " .IBMChat-error-colors {\n  background-color: " + current.styles.errorBackground + ";\n  color: " + current.styles.errorText + ";\n}\n" +
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
/***/ function(module, exports, __webpack_require__) {

	var Promise = __webpack_require__(37).Promise;
	
	function writeMessage(el, text) {
		new ParseContent(el, text);
	}
	
	function ParseContent(el, text) {
		this.init(el, text);
	}
	
	function validLink(link) {
		if (link.startsWith('http://') || link.startsWith('https://'))
			return link;
		else
			return 'http://' + link;
	}
	
	ParseContent.prototype.init = function(el, text) {
		if (text) {
			var cls = this;
			var content = [
				{
					type: 'span',
					content: text
				}
			];
			this.addLineEndings(content)
				.then(cls.addUrls)
				.then(cls.addEmails)
				.then(function(content) {
					cls.writeMessage(el, content);
				})
				.catch(function(e) {
					console.error(e);
				});
		}
	};
	
	ParseContent.prototype.writeMessage = function(el, content) {
		content.map(function(item) {
			var s = document.createElement(item.type);
			if (item.content)
				s.textContent = item.content;
			if (item.attributes) {
				Object.keys(item.attributes).map(function(key) {
					s.setAttribute(key, item.attributes[key]);
				});
			}
			el.appendChild(s);
		});
	};
	
	ParseContent.prototype.addLineEndings = function(content) {
		return new Promise(function(resolve, reject) {
			try {
				var newContent = [];
				for (var i = 0; i < content.length; i++) {
					var arr = content[i].content.split('\n');
					arr.map(function(value, index) {
						if (value) {
							newContent.push({
								content: value,
								type: 'span'
							});
						}
						if (arr.length != index + 1) {
							newContent.push({
								type: 'br'
							});
						}
					});
				}
				resolve(newContent);
			} catch (e) {
				reject(e);
			}
		});
	};
	
	ParseContent.prototype.addUrls = function(content) {
		return new Promise(function(resolve, reject) {
			try {
				var newContent = [];
				for (var i = 0; i < content.length; i++) {
					if (content[i].content) {
						var exp = /(((https?:\/\/)|(www\.))[^\s]+)/gi;
						var linked = content[i].content.replace(exp,'|||$1|||');
						var arr = linked.split('|||');
						arr.map(function(value) {
							var newtext = value.replace(exp, '<a href="$1" target="_blank">$1</a>');
							if (newtext === value) {
								newContent.push({
									content: value,
									type: content[i].type,
									attributes: content[i].attributes
								});
							} else {
								newContent.push({
									content: value,
									type: 'a',
									attributes: {
										href: validLink(value),
										target: '_blank'
									}
								});
							}
						});
					} else {
						newContent.push({
							type: content[i].type,
							content: content[i].content,
							attributes: content[i].attributes
						});
					}
				}
				resolve(newContent);
			} catch (e) {
				reject(e);
			}
		});
	};
	
	ParseContent.prototype.addEmails = function(content) {
		return new Promise(function(resolve, reject) {
			try {
				var newContent = [];
				for (var i = 0; i < content.length; i++) {
					if (content[i].content) {
						var exp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
						var linked = content[i].content.replace(exp,'|||$1|||');
						var arr = linked.split('|||');
						arr.map(function(value) {
							var newtext = value.replace(exp, '<a href="mailto:$1" target="_blank">$1</a>');
							if (newtext === value) {
								newContent.push({
									content: value,
									type: content[i].type,
									attributes: content[i].attributes
								});
							} else {
								newContent.push({
									content: value,
									type: 'a',
									attributes: {
										href: 'mailto:' + value,
										target: '_blank'
									}
								});
							}
						});
					} else {
						newContent.push({
							type: content[i].type,
							content: content[i].content,
							attributes: content[i].attributes
						});
					}
				}
				resolve(newContent);
			} catch (e) {
				reject(e);
			}
		});
	};
	
	module.exports = writeMessage;


/***/ },
/* 37 */
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
	        var vertx = __webpack_require__(40);
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
	    if ("function" === 'function' && __webpack_require__(41)['amd']) {
	      !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return lib$es6$promise$umd$$ES6Promise; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module !== 'undefined' && module['exports']) {
	      module['exports'] = lib$es6$promise$umd$$ES6Promise;
	    } else if (typeof this !== 'undefined') {
	      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
	    }
	
	    lib$es6$promise$polyfill$$default();
	}).call(this);
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38), (function() { return this; }()), __webpack_require__(39)(module)))

/***/ },
/* 38 */
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
/* 39 */
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
/* 40 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}\">\n\t<div class=\"${ns}-img\"></div>\n\t<div class=\"${ns}-data\"></div>\n</div>\n"

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-contact-type\"></div>\n<div class=\"${ns}-contact-data\"></div>\n"

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-locations-item ${ns}-multiple-locations ${ns}-data-section IBMChat-secondary-colors\">\n\t<div class=\"${ns}-locations-row\">\n\t\t<div class=\"${ns}-locations-item-icon ${ns}-locations-cell\"></div>\n\t\t<div class=\"${ns}-locations-item-data ${ns}-locations-cell\">\n\t\t\t<div class=\"${ns}-locations-item-data-title\"></div>\n\t\t\t<div class=\"${ns}-locations-item-data-items\">\n\t\t\t\t<div class=\"${ns}-locations-item-data-address\"></div>\n\t\t\t\t<div class=\"${ns}-locations-item-distance\"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-locations-item ${ns}-data-section IBMChat-secondary-colors\">\n\t<div class=\"${ns}-locations-item-data-section\">\n\t\t<button class=\"${ns}-locations-all IBMChat-accent-colors\">Back to All Locations</button>\n\t</div>\n\t<div class=\"${ns}-locations-item-data\">\n\t\t<div class=\"${ns}-locations-item-data-title\"></div>\n\t\t<div class=\"${ns}-locations-item-data-items\">\n\t\t\t<div class=\"${ns}-locations-item-data-section\">\n\t\t\t\t<a class=\"${ns}-locations-item-data-address-link\">\n\t\t\t\t\t<div class=\"${ns}-locations-item-data-address\"></div>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"${ns}-locations-item-data-email\"></div>\n\t\t\t<div class=\"${ns}-locations-item-data-phone\"></div>\n\t\t\t<div class=\"${ns}-locations-item-data-hours\"></div>\n\t\t\t<div class=\"${ns}-locations-item-data-timezone\"></div>\n\t\t</div>\n\t\t<button class=\"${ns}-locations-item-data-hours-button IBMChat-accent-colors\">More Hours</button>\n\t\t<div class=\"${ns}-locations-item-data-items\">\n\t\t\t<div class=\"${ns}-locations-item-data-more-hours ${ns}-hidden\"></div>\n\t\t</div>\n\t</div>\n\t<div class=\"${ns}-locations-item-distance\"></div>\n</div>\n"

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-days-hours-day\">\n\t${day}\n</div>\n<div class=\"${ns}-days-hours-hours\">\n\tClosed\n</div>\n"

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-days-hours-day\">\n\t${day}\n</div>\n<div class=\"${ns}-days-hours-hours\">\n\t${open} &ndash; ${close}\n</div>\n"

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-hours-open\">Open today:</div>\n<div class=\"${ns}-hours-today\">\n\t${open} &ndash; ${close}\n</div>"

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-hours-open\">Closed today.</div>"

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-hours-timezone\">( ${timezone} )</div>"

/***/ },
/* 51 */
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
				}.bind(this)
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
/* 52 */
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
	var requestGeolocationZipcodeLayout = {
		init: function() {
			subscribe('layout:request-geolocation-zipcode', function() {});
		}
	};
	
	module.exports = requestGeolocationZipcodeLayout;


/***/ },
/* 53 */
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
	
	__webpack_require__(54);
	
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
		base: __webpack_require__(56)
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
/* 54 */
[96, 55],
/* 55 */
/***/ function(module, exports) {

	module.exports = ".IBMChat-islocationapi-container {\n\ttext-align:center;\n}\n\n.IBMChat-islocationapi-container button {\n\tmargin: 1em auto 0 auto;\n\tmin-width:200px;\n\tmax-width:240px;\n\twidth:75%;\n}\n\n.IBMChat-islocationapi-container div:last-child {\n\tmargin-bottom: 1em;\n}\n"

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-container\">\n\t<div><button class=\"IBMChat-secondary-colors\" data-input=\"${values.geolocation}\">Use My Current Location</button></div>\n\t<div><button class=\"IBMChat-secondary-colors\" data-input=\"${values.postalcode}\">A Zip Code</button></div>\n</div>\n"

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
	
	__webpack_require__(58);
	
	var events = __webpack_require__(9);
	var subscribe = events.subscribe;
	var publish = events.publish;
	var utils = __webpack_require__(35);
	var ns = 'IBMChat-choose';
	var activeClassName = 'IBMChat-accent-colors';
	var inactiveClassName = 'IBMChat-secondary-colors';
	var widgets = [];
	var templates = {
		button: __webpack_require__(60)
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
			this.submitButton.classList.add(activeClassName);
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
		this.eventListeners.push({ el: el, cb: (this.allowMultiple) ? this.handleMultiClick: this.handleClick });
	};
	
	Choose.prototype.addSubmitListener = function(el) {
		el.addEventListener('click', this.handleSubmit.bind(this));
		this.eventListeners.push({ el: el, cb: this.handleSubmit.bind(this) });
	};
	
	Choose.prototype.removeAllEventListeners = function() {
		if (this.eventListeners.length > 0) {
			for (var i = 0; i < this.eventListeners.length; i++) {
				this.eventListeners[i].el.removeEventListener('click', this.eventListeners[i].cb);
				this.eventListeners[i].el.setAttribute('disabled', true);
			}
			this.eventListeners = [];
			this.subscribeSend.remove();
		}
	};
	
	module.exports = chooseLayout;


/***/ },
/* 58 */
[96, 59],
/* 59 */
/***/ function(module, exports) {

	module.exports = ".IBMChat-choose-container {\n\ttext-align:center;\n\tpadding:0 0 1em 0;\n}\n\n.IBMChat-choose-container span {\n\tdisplay:inline-block;\n\tmargin: 1em 1em 0 1em;\n}\n\n.IBMChat-choose-container div {\n\tmargin: 1em auto 0 auto;\n}\n\n.IBMChat-choose-container button {\n\tmin-width:230px;\n\tmax-width:270px;\n}\n"

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "<button class=\"IBMChat-secondary-colors\" data-input=\"${text}\">${text}</button>\n"

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
	var profile = __webpack_require__(64);
	var utils = __webpack_require__(35);
	var subscribe = events.subscribe;
	var publish = events.publish;
	var ns = 'IBMChat-form';
	var activeClassName = 'IBMChat-accent-colors';
	var inactiveClassName = 'IBMChat-secondary-colors';
	var templates = {
		base: __webpack_require__(66),
		field: __webpack_require__(67)
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
			for (var i = 0; i < this.fields.length; i++)
				profile.set(this.fields[i].getAttribute('name'), this.fields[i].value);
			this.submitButton.classList.add(activeClassName);
			publish('send', {
				silent: true,
				text: 'success'
			});
			publish('enable-input');
		} else {
			this.setFocusOnError();
		}
	};
	
	Form.prototype.setFocusOnError = function() {
		for (var j = 0; j < this.fields.length; j++) {
			var name = this.fields[j].getAttribute('name');
			var el = this.layoutElement.querySelector('[data-validation-for="' + name + '"]');
			if (el.dataset.valid === "false") {
				this.fields[j].focus();
				break;
			}
		}
	};
	
	Form.prototype.validateFields = function() {
		var allFieldsAreValid = true;
		for (var i = 0; i < this.data.length; i++) {
			if (this.data[i].required === 'true') {
				var fieldIsValid = this.validateField(this.fields[i], this.data[i]);
				allFieldsAreValid = allFieldsAreValid && fieldIsValid;
			}
		}
		return allFieldsAreValid;
	};
	
	Form.prototype.validateField = function(field, datum) {
		var valid = true;
		if (!field.value || field.value.trim().length === 0) {
			this.addError(field.getAttribute('name'), 'This field is required.');
			valid = false;
		} else if (datum.validations && datum.validations.length !== 0) {
			for (var i = 0; i < datum.validations.length; i++) {
				var validation = datum.validations[i];
				var validationRegex = validation.regex;
				//TODO: handle this better
				if (validation.regex.indexOf('^(') !== 0)
					validationRegex = '^(' + validation.regex + ')$';
				var regex = new RegExp(validationRegex);
				var matches = regex.test(field.value);
				if (!matches) {
					this.addError(field.getAttribute('name'), validation.message);
					valid = false;
					break;
				}
			}
		}
		return valid;
	};
	
	Form.prototype.addError = function(name, msg) {
		var el = this.layoutElement.querySelector('[data-validation-for="' + name + '"]');
		el.dataset.valid = false;
		el.textContent = msg;
		el.style.display = 'block';
	};
	
	Form.prototype.removeError = function(name) {
		var el = this.layoutElement.querySelector('[data-validation-for="' + name + '"]');
		el.dataset.valid = true;
		el.textContent = '';
		el.style.display = 'none';
	};
	
	Form.prototype.removeAllErrors = function() {
		var els = this.layoutElement.querySelectorAll('[data-validation-for]');
		for (var i = 0; i < els.length; i++)
			this.removeError(els[i].attr('data-validation-for'));
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
		publish('enable-input');
		publish('send', {
			silent: true,
			text: 'cancel'
		});
	};
	
	Form.prototype.addEventListeners = function() {
		this.cancelButton.addEventListener('click', this.handleCancel.bind(this));
		this.submitButton.addEventListener('click', this.handleSubmit.bind(this));
		for (var i = 0; i < this.fields.length; i++) {
			var field = this.fields[i];
			field.addEventListener('keypress', this.handleEnter.bind(this));
			field.addEventListener('input', this.handleInput.bind(this));
		}
	};
	
	Form.prototype.removeEventListeners = function() {
		this.cancelButton.removeEventListener('click', this.handleCancel.bind(this));
		this.cancelButton.setAttribute('disabled', true);
		this.submitButton.removeEventListener('click', this.handleSubmit.bind(this));
		this.submitButton.setAttribute('disabled', true);
		for (var i = 0; i < this.fields.length; i++) {
			var field = this.fields[i];
			field.removeEventListener('keypress', this.handleEnter.bind(this));
			field.removeEventListener('input', this.handleInput.bind(this));
			field.setAttribute('disabled', true);
		}
	
		this.subscribeSend.remove();
	};
	
	module.exports = formLayout;


/***/ },
/* 62 */
[96, 63],
/* 63 */
/***/ function(module, exports) {

	module.exports = ".IBMChat-form-container {\n\ttext-align:center;\n\tpadding:0 0 1em 0;\n}\n\n.IBMChat-form-fields {\n\tmargin:auto;\n\ttext-align:left;\n\tmax-width:360px;\n\twidth:100%;\n}\n\n.IBMChat-form-fields-row {\n\tpadding-bottom:0.75em;\n}\n\n.IBMChat-form-fields-row input {\n\twidth: 100%;\n}\n\n.IBMChat-form-buttons {\n\twidth: 100%;\n\tmax-width: 360px;\n\theight: 2.5em;\n\ttext-align:center;\n\tmargin:auto;\n}\n\n.IBMChat-form-buttons button {\n\tline-height: 2.5em;\n\twidth: 100px;\n}\n\n.IBMChat-form-cancel {\n\tfloat:left;\n\tmax-width: 50%;\n}\n.IBMChat-form-submit {\n\tfloat:right;\n\tmax-width: 50%;\n}\n"

/***/ },
/* 64 */
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
	
	var BotSDK = __webpack_require__(65);
	var profile = BotSDK.profile;
	
	module.exports = profile;


/***/ },
/* 65 */
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
/* 66 */
/***/ function(module, exports) {

	module.exports = "<div class=\"IBMChat-form-container\">\n\t<div class=\"IBMChat-form-fields\"></div>\n\t<div class=\"IBMChat-form-buttons\">\n\t\t<button class=\"IBMChat-form-cancel\">Cancel</button>\n\t\t<button class=\"IBMChat-form-submit\">Submit</button>\n\t</div>\n</div>\n"

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = "<label>${label}</label>\n<input type=\"text\" class=\"IBMChat-input-colors\" name=\"${name}\" value=\"${value}\" />\n<div class=\"IBMChat-validation-error IBMChat-error-colors\" style=\"display:none;\" data-validation-for=\"${name}\" data-valid=\"true\"></div>\n"

/***/ },
/* 68 */
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
	
	__webpack_require__(69);
	
	var events = __webpack_require__(9);
	var state = __webpack_require__(10);
	var profile = __webpack_require__(64);
	var subscribe = events.subscribe;
	var publish = events.publish;
	var utils = __webpack_require__(35);
	var validation = __webpack_require__(71);
	var activeClassName = 'IBMChat-accent-colors';
	var ns = 'IBMChat-creditcard';
	var widgets = [];
	var templates = {
		base: __webpack_require__(72)
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
		errorElement.style.display = 'block';
		errorElement.dataset.valid = false;
		errorElement.textContent = msg;
	};
	
	CreditCard.prototype.removeError = function(name) {
		var errorElement = this.el.querySelector('[data-validation-for="' + name + '"]');
		errorElement.style.display = 'none';
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
			var fd = this.formData;
			fd.cc_exp_date = fd.cc_exp_date_month + '/' + fd.cc_exp_date_year;
			fd.cc_last_four_digits = fd.cc_number.substr(fd.cc_number.length - 4);
			Object.keys(fd).map(function(key) {
				profile.set(key, fd[key]);
			});
			publish('enable-input');
			publish('send', {
				silent: true,
				text: 'success'
			});
		}
	};
	
	CreditCard.prototype.handleCancel = function() {
		this.cancelButton.classList.add(activeClassName);
		publish('enable-input');
		publish('send', {
			silent: true,
			text: 'cancel'
		});
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
/* 69 */
[96, 70],
/* 70 */
/***/ function(module, exports) {

	module.exports = ".IBMChat-creditcard-container {\n\ttext-align:center;\n\tpadding:0 0 1em 0;\n}\n\n.IBMChat-creditcard-rows {\n\tmargin:auto;\n\ttext-align:left;\n\tmax-width:360px;\n\twidth:100%;\n}\n\n.IBMChat-creditcard-row {\n\ttext-align:left;\n\tpadding-bottom:1em;\n}\n\n.IBMChat-creditcard-row input {\n\twidth:100%;\n}\n\n.IBMChat-creditcard-col {\n\tdisplay:inline-block;\n}\n\n.IBMChat-creditcard-col input{\n\ttext-align:center;\n\twidth:40px;\n}\n\n.IBMChat-creditcard-col:last-child input {\n\twidth:60px;\n}\n\n.IBMChat-creditcard-buttons {\n\theight:2.5em;\n}\n\n.IBMChat-creditcard-buttons button {\n\twidth:90px;\n\tfloat:left;\n}\n\n.IBMChat-creditcard-buttons button:last-child {\n\tfloat:right;\n}\n"

/***/ },
/* 71 */
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
/* 72 */
/***/ function(module, exports) {

	module.exports = "<div class=\"${ns}-container\">\n\t<div class=\"${ns}-rows\">\n\t\t<div class=\"${ns}-row\">\n\t\t\t<label>Name on Card</label>\n\t\t\t<input type=\"text\" class=\"IBMChat-input-colors\" name=\"cc_full_name\" />\n\t\t\t<div class=\"IBMChat-validation-error IBMChat-error-colors\" data-validation-for=\"cc_full_name\" data-valid=\"true\" style=\"display:none;\"></div>\n\t\t</div>\n\t\t<div class=\"${ns}-row\">\n\t\t\t<label>Credit Card Number</label>\n\t\t\t<input type=\"text\" class=\"IBMChat-input-colors\" name=\"cc_number\" />\n\t\t\t<div class=\"IBMChat-validation-error IBMChat-error-colors\" data-validation-for=\"cc_number\" data-valid=\"true\" style=\"display:none;\"></div>\n\t\t</div>\n\t\t<div class=\"${ns}-row\">\n\t\t\t<label>Expiration Date</label>\n\t\t\t<div class=\"${ns}-col\">\n\t\t\t\t<input class=\"${ns}-date IBMChat-input-colors\" type=\"text\" name=\"cc_exp_date_month\" placeholder=\"MM\" maxlength=\"2\" />\n\t\t\t\t<input class=\"${ns}-date IBMChat-input-colors\" type=\"text\" name=\"cc_exp_date_year\" placeholder=\"YYYY\" maxlength=\"4\" />\n\t\t\t\t<div class=\"IBMChat-validation-error IBMChat-error-colors\" data-validation-for=\"cc_exp_date\" data-valid=\"true\" style=\"display:none;\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"${ns}-row\">\n\t\t\t<label>CVV</label>\n\t\t\t<div class=\"${ns}-col\">\n\t\t\t\t<input class=\"${ns}-cvv IBMChat-input-colors\" type=\"text\" name=\"cc_code\" />\n\t\t\t\t<div class=\"IBMChat-validation-error IBMChat-error-colors\" data-validation-for=\"cc_code\" data-valid=\"true\" style=\"display:none;\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"${ns}-row ${ns}-buttons\">\n\t\t\t<button class=\"${ns}-cancel IBMChat-secondary-colors\">Cancel</button>\n\t\t\t<button class=\"${ns}-continue IBMChat-input-colors\">Continue</button>\n\t\t</div>\n\t</div>\n</div>\n"

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
	
	var events = __webpack_require__(9);
	var errors = [];
	var ns = 'IBMChat-error';
	
	var errorLayout = {
		init: function() {
			events.subscribe('layout:error', function(data) {
				var error = new Error(data);
				errors[data.uuid] = error;
			});
		}
	};
	
	var templates = {
		base: __webpack_require__(76)
	};
	
	function Error(data) {
		this.init(data);
	}
	
	Error.prototype.init = function(data) {
		this.message = data.message.layout.message;
		this.uuid = data.uuid;
		this.parentElement = data.element;
		this.layoutElement = data.layoutElement;
		this.layoutElement.innerHTML = templates.base;
		this.layoutElement.querySelector('.' + ns).textContent = this.message;
	};
	
	
	module.exports = errorLayout;


/***/ },
/* 74 */
[96, 75],
/* 75 */
/***/ function(module, exports) {

	module.exports = ".IBMChat-error {\n\tpadding: 0.5em 1em 0.5em 1em;\n}\n"

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = "<div class=\"IBMChat-error IBMChat-error-colors\"></div>\n"

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
	
	var start = __webpack_require__(78);
	var resize = __webpack_require__(84);
	var receive = __webpack_require__(85);
	var send = __webpack_require__(86);
	var sendMock = __webpack_require__(87);
	var sendInputMessage = __webpack_require__(88);
	var input = __webpack_require__(89);
	var error = __webpack_require__(90);
	var playback = __webpack_require__(91);
	var scrollToBottom = __webpack_require__(92);
	var tryIt = __webpack_require__(93);
	
	module.exports = {
		/**
		* Resize event. Forces a resize of the Chat UI elements to fix current parent element.
		*
		* @event resize
		* @example
		* IBMChat.publish('resize');
		* IBMChat.subscribe('resize', function(){
		*
		* });
		*/
		resize: resize,
		/**
		* @ignore
		*/
		start: start,
		/**
		* Send event. Sends a message.
		*
		* @event send
		* @property {Object} data
		* @property {string} data.text - Text to send to Watson Virtual Agent
		* @property {boolean} data.sendSilently - whether or not to show in UI, defaults to true
		* @example
		* IBMChat.publish('send', data);
		* IBMChat.subscribe('send', function(data){
		*
		* });
		*/
		send: send,
		/**
		* sendMock event. Displays a message in the UI, but does not send it to the Watson Virtual Agent.
		*
		* @event sendMock
		* @property {Object} data
		* @property {string} data.text - Text to send to Watson Virtual Agent
		* @property {boolean} data.sendSilently - whether or not to show in UI, defaults to true
		* @example
		* IBMChat.publish('sendMock', data);
		* IBMChat.subscribe('sendMock', function(data){
		*
		* });
		*/
		sendMock: sendMock,
		/**
		* Receive event.
		*
		* @event receive
		* @property {Object} message - A message object.
		* @example
		* IBMChat.publish('receive', message);
		* IBMChat.subscribe('receive', function(message){
		*
		* });
		*/
		receive: receive,
		/**
		* Enable Input event. Allows submitting from input field when it has been disabled.
		*
		* @event enable-input
		* @example
		* IBMChat.publish('enable-input');
		* IBMChat.subscribe('enable-input', function(){
		*
		* });
		*/
		/**
		* Disable Input event. Disallows submitting from input field.
		*
		* @event disable-input
		* @example
		* IBMChat.publish('disable-input');
		* IBMChat.subscribe('disable-input', function(){
		*
		* });
		*/
		/**
		* Enable Loading event. Shows loading spinner.
		*
		* @event enable-loading
		* @example
		* IBMChat.publish('enable-loading');
		* IBMChat.subscribe('enable-loading', function(){
		*
		* });
		*/
		/**
		* Disable loading event. Hide loading spinner.
		*
		* @event disable-loading
		* @example
		* IBMChat.publish('disable-loading');
		* IBMChat.subscribe('disable-loading', function(){
		*
		* });
		*/
		input: input,
		/**
		* Error event.
		*
		* @event error
		* @property {Object} error - Error object.
		* @example
		* IBMChat.publish('error', error);
		* IBMChat.subscribe('error', function(error){
		*
		* });
		*/
		error: error,
		/**
		* Scroll to bottom event. Scrolls chat content into correct positioning.
		*
		* @event scroll-to-bottom
		* @example
		* IBMChat.publish('scroll-to-bottom');
		* IBMChat.subscribe('scroll-to-bottom', function(){
		*
		* });
		*/
		scrollToBottom: scrollToBottom,
		/**
		* @ignore
		*/
		sendInputMessage: sendInputMessage,
		/**
		* @ignore
		*/
		playback: playback,
		/**
		* @ignore
		*/
		tryIt: tryIt
	};


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
	var events = __webpack_require__(9);
	var templates = __webpack_require__(79);
	
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
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		input: __webpack_require__(80),
		receive: __webpack_require__(81),
		send: __webpack_require__(82),
		start: __webpack_require__(83)
	};


/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = "<form class=\"IBMChat-input-form IBMChat-input-form-theme\">\n\t<input aria-labelledby=\"Enter a Message\" type=\"text\" class=\"IBMChat-chat-textbox IBMChat-chat-textbox-theme\" placeholder=\"Enter message...\" />\n\t<div class=\"IBMChat-ibm-spinner-start IBMChat-input-loading IBMChat-input-loading-theme\">\n\t\t<svg class=\"IBMChat-ibm-spinner\" width=32 height=32 viewBox=\"-16 -16 32 32\">\n\t\t\t<circle cx=0 cy=0 r=8 /></svg>\n\t\t</svg>\n\t</div>\n</form>\n"

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = "<div class=\"IBMChat-watson-message-container IBMChat-watson-message-container-theme\"></div>\n"

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = "<div id=\"${data.uuid}\" class=\"IBMChat-user-message-container IBMChat-user-message-container-theme\">\n\t<div class=\"IBMChat-user-message IBMChat-user-message-theme IBMChat-secondary-colors\"></div>\n</div>\n"

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = "<div class=\"IBMChat-outer-container IBMChat-outer-container-theme IBMChat-default-colors\">\n\t<div class=\"IBMChat-chat-container IBMChat-chat-container-theme\">\n\t\t<div class=\"IBMChat-inner-container IBMChat-inner-container-theme\">\n\t\t\t<div class=\"IBMChat-messages IBMChat-messages-theme\"></div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ },
/* 84 */
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
/* 85 */
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
	var templates = __webpack_require__(79);
	
	function _actions(data, tryIt, debug) {
		var msg = data.message;
		if (msg && msg.action && msg.action.name) {
			var action = 'action:' + msg.action.name;
			if (events.hasSubscription(action)) {
				events.publish(action, data, events.completeEvent);
				if (debug)
					console.log('Call to ' + action);
			} else {
				if (debug)
					console.warn('Nothing is subscribed to ' + action);
				if (tryIt)
					events.publish('try-it-action-subscription', action);
			}
		}
		events.publish('disable-loading');
		events.publish('focus-input');
		setTimeout(function() {
			events.publish('scroll-to-bottom');
		}, 20);
	}
	
	function _layouts(data, tryIt, debug) {
		var msg = data.message;
		if (msg && msg.layout && msg.layout.name) {
			var layout = 'layout:' + msg.layout.name;
			if (events.hasSubscription(layout)) {
				setTimeout(function() {
					events.publish(layout, data);
					if (debug)
						console.log('Call to ' + layout);
				}, 10);
			} else {
				if (debug)
					console.warn('Nothing is subscribed to ' + layout);
				if (tryIt)
					events.publish('try-it-layout-subscription', layout);
			}
		}
	}
	
	function receive(data) {
		var parsed = (typeof data === 'string') ? { message: { text: data } } : data;
		var current = state.getState();
		state.setState({
			messages: [].concat(current.messages || [], parsed),
			hasError: false
		});
		var msg = parsed.message;
		var msgText = (msg && msg.text) ? ((Array.isArray(msg.text) && msg.text.length > 0) ? msg.text : [msg.text]) : [''];
		var containers = [];
		var messages = [];
		var layouts = [];
		var datas = [];
		for (var i = 0; i < msgText.length; i++) {
			var holder = document.createElement('div');
			var msgData = assign({}, parsed, { uuid: utils.getUUID() });
			holder.classList.add(msgData.uuid);
			holder.innerHTML = templates.receive;
			containers.push(holder.querySelector('.IBMChat-watson-message-container'));
			messages.push(document.createElement('div'));
			layouts.push(document.createElement('div'));
			layouts[i].classList.add('IBMChat-watson-layout');
			if ((msgText[i] && msgText[i].length > 0) || (msg && msg.layout && msg.layout.name && i === (msgText.length - 1))) {
				messages[i].classList.add('IBMChat-watson-message');
				messages[i].classList.add('IBMChat-watson-message-theme');
				utils.writeMessage(messages[i], msgText[i]);
				current.chatHolder.appendChild(holder);
			}
			containers[i].appendChild(messages[i]);
			containers[i].appendChild(layouts[i]);
			msgData.element = containers[i];
			msgData.layoutElement = layouts[i];
			msgData.msgElement = messages[i];
			datas.push(msgData);
			if (msg && msg.layout && ((msg.layout.index !== undefined && msg.layout.index == i) ||(msg.layout.index === undefined && i == (msgText.length - 1))))
				_layouts(datas[i], current.tryIt, current.DEBUG);
			if (i === (msgText.length - 1))
				_actions(datas[i], current.tryIt, current.DEBUG);
		}
	
	}
	
	module.exports = receive;


/***/ },
/* 86 */
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
	var BotSDK = __webpack_require__(65);
	var utils = __webpack_require__(35);
	var assign = __webpack_require__(11);
	var templates = __webpack_require__(79);
	
	function send(data) {
		if (data && data.text && data.text.length > 0) {
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
		events.publish('scroll-to-bottom');
		events.publish('focus-input');
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
/* 87 */
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
	var templates = __webpack_require__(79);
	
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
/* 88 */
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
/* 89 */
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
/* 90 */
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
		var display = (err && err.stack) ? err.stack : err;
		console.error(display);
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
	
	function tryIt(data) {
		events.publish('layout:error', data);
	}
	
	module.exports = {
		default: error,
		tryIt: tryIt
	};


/***/ },
/* 91 */
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
	var templates = __webpack_require__(79);
	
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
/* 92 */
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
/* 93 */
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
	
	function actionError(action) {
		events.publish('receive', {
			message: {
				layout: {
					name: 'error',
					message: 'A subscription was called to ' + action + '. Nothing is subscribed to this action in the Try-It interface. This is probably due to you using a custom workspace. On your own site, you should have code to handle this action.'
				}
			}
		});
	}
	
	function layoutError(layout) {
		events.publish('receive', {
			message: {
				layout: {
					name: 'error',
					message: 'A subscription was called to ' + layout + '. Nothing is subscribed to this layout in the Try-It interface. This is probably due to you using a custom workspace. On your own site, you should have code to handle this layout.'
				}
			}
		});
	}
	
	module.exports = {
		actionError: actionError,
		layoutError: layoutError
	};


/***/ },
/* 94 */
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
	var eventHandlers = __webpack_require__(77);
	var utils = __webpack_require__(35);
	var assign = __webpack_require__(11);
	var defaultStyles = __webpack_require__(95);
	
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
/* 95 */
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
		accentText: '#ffffff',
		text: '#ffffff',
		link: '#ffffff',
		secondaryBackground: 'rgba(70, 70, 70, 1)',
		secondaryText: 'rgba(247, 247, 247, 1)',
		inputBackground: 'rgba(70, 70, 70, 1)',
		inputText: 'rgba(247, 247, 247, 1)',
		errorBackground: 'rgba(239, 62, 58, 1)',
		errorText: '#ffffff'
	};
	
	module.exports = defaultStyles;


/***/ },
/* 96 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlZDVlOWE1YTU2MTZjMDQ0N2VjMyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3M/MjY5OSIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXNzaWduVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvZXEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcHlPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NyZWF0ZUFzc2lnbmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXBwbHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzSXRlcmF0ZWVDYWxsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5TGlrZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy93cml0ZU1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lczYtcHJvbWlzZS9kaXN0L2VzNi1wcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vL3ZlcnR4IChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy90ZW1wbGF0ZXMvYmFzZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3RlbXBsYXRlcy9jcmVhdGUtZG9tLWFycmF5Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvdGVtcGxhdGVzL2FkZC1sb2NhdGlvbnMtaXRlbS5odG1sIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3RlbXBsYXRlcy9hZGQtbG9jYXRpb24taXRlbS5odG1sIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3RlbXBsYXRlcy9ob3Vycy1jbG9zZWQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy90ZW1wbGF0ZXMvaG91cnMtb3Blbi5odG1sIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3RlbXBsYXRlcy9ob3Vycy10b2RheS1vcGVuLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvdGVtcGxhdGVzL2hvdXJzLXRvZGF5LWNsb3NlZC5odG1sIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3RlbXBsYXRlcy9ob3Vycy10aW1lem9uZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL3JlcXVlc3QtZ2VvbG9jYXRpb24tbGF0bG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9yZXF1ZXN0LWdlb2xvY2F0aW9uLXppcGNvZGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvY2hvb3NlLWxvY2F0aW9uLXR5cGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvY2hvb3NlLWxvY2F0aW9uLXR5cGUvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9jaG9vc2UtbG9jYXRpb24tdHlwZS90ZW1wbGF0ZXMvYmFzZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2Nob29zZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9jaG9vc2Uvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9jaG9vc2UvdGVtcGxhdGVzL2J1dHRvbi5odG1sIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2Zvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvZm9ybS9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL3NyYy9wcm9maWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vQHdhdHNvbi12aXJ0dWFsLWFnZW50L2NsaWVudC1zZGsvbGliL3dlYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9mb3JtL3RlbXBsYXRlcy9iYXNlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvZm9ybS90ZW1wbGF0ZXMvZmllbGQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9jYy12YWxpZGF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvY2MtdmFsaWRhdG9yL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvY2MtdmFsaWRhdG9yL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvY2MtdmFsaWRhdG9yL3RlbXBsYXRlcy9iYXNlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvZXJyb3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvZXJyb3Ivc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9lcnJvci90ZW1wbGF0ZXMvYmFzZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaGFuZGxlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9oYW5kbGVycy9zdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvaW5wdXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3JlY2VpdmUuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3NlbmQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3N0YXJ0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9oYW5kbGVycy9yZXNpemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9oYW5kbGVycy9yZWNlaXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaGFuZGxlcnMvc2VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2hhbmRsZXJzL3NlbmQtbW9jay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2hhbmRsZXJzL3NlbmQtaW5wdXQtbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2hhbmRsZXJzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaGFuZGxlcnMvZXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9oYW5kbGVycy9wbGF5YmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2hhbmRsZXJzL3Njcm9sbC10by1ib3R0b20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9oYW5kbGVycy90cnktaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXliYWNrL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvc3R5bGVzLmNzcz85ZmI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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QUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyR0FBMEc7O0FBRTFHO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCLHNCQUFzQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBcUIsK0JBQStCO0FBQ3BEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsUUFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBLFVBQVM7QUFDVCx3QkFBdUIsUUFBUTtBQUMvQjs7QUFFQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUVBQWtFLFFBQVE7O0FBRTFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtRUFBa0UsUUFBUTtBQUMxRTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXFDLFFBQVE7O0FBRTdDOztBQUVBLHNCQUFxQix3QkFBd0I7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxRQUFPO0FBQ1A7QUFDQTtBQUNBLDBCQUF5QixZQUFZO0FBQ3JDO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQU87O0FBRVA7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBLGVBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0EsZUFBYyxTQUFTO0FBQ3ZCLGVBQWMsU0FBUztBQUN2QjtBQUNBLGdCQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0EsZUFBYyxTQUFTO0FBQ3ZCO0FBQ0EsZ0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNCQUFxQixrRUFBa0U7QUFDdkY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCx1REFBc0QsZ0JBQWdCLEVBQUU7QUFDeEU7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscURBQXlCLHdDQUF3QyxFQUFFO0FBQ25FLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7Ozs7Ozs7O0FDNzdCRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBLGtFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQjtBQUNuQjtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQixxQ0FBcUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2Qyw2QkFBNkI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBZ0QsNkJBQTZCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqRkE7QUFDQTtBQUNBO0FBQ0Esa0VBQWlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzVCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFzRjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRSIsImZpbGUiOiJJQk1DaGF0Q2xpZW50LWxhdGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiSUJNQ2hhdFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJJQk1DaGF0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIklCTUNoYXRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGVkNWU5YTVhNTYxNmMwNDQ3ZWMzXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG5yZXF1aXJlKCcuL3N0eWxlcy5jc3MnKTtcblxudmFyIGJvb3RzdHJhcCA9IHJlcXVpcmUoJy4vYm9vdHN0cmFwJyk7XG5cbi8qKlxuICogQG5hbWVzcGFjZSBJQk1DaGF0XG4gKi9cblxudmFyIElCTUNoYXQgPSB7XG5cdC8qKlxuXHQgKiBHZW5lcmF0ZSB0aGUgY2hhdCB3aWRnZXQgaW50byBhbiBlbGVtZW50LlxuXHQgKiBAZnVuY3Rpb24gaW5pdFxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuZWwgLSBUYWtlcyBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIElEIG9mIGFuIGh0bWwgZWxlbWVudCB0byBiZSByZW5kZXJlZCB0byBPUiBhIHNlbGVjdGVkIGVsZW1lbnRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5ib3RJRCAtIFRoZSB1bmlxdWUgaWRlbnRpZmllciBvZiB5b3VyIFZpcnR1YWwgQWdlbnQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcudXNlcklEIC0gQSBoYXNoZWQgbm9uLWlkZW50aWZpYWJsZSAoZS5nLiBub3QgYSB1c2VycyBlbWFpbCBhZGRyZXNzIG9yIHB1YmxpYyB1c2VyIGlkKSB1bmlxdWUgSUQgdXNlZCBmb3IgdHJhY2tpbmcgaW4gdGhlIEVuZ2FnZW1lbnQgTWV0cmljcyBkYXNoYm9hcmQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuYmFzZVVSTD1odHRwczovL2FwaS5pYm0uY29tL3ZpcnR1YWxhZ2VudC9ydW4vYXBpL3YxLyAtIG9wdGlvbmFsOiBzcGVjaWZpZXMgYSBkaWZmZXJlbnQgYm90IGhvc3Rpbmcgc2VydmVyLiBUaGUgbW9zdCBjb21tb24gdXNlLWNhc2UgZm9yIHRoaXMgcGFyYW0gaXMgdG8gcG9pbnQgdGhlIHdpZGdldCB0byBhIHNlcnZlciB0aGF0IHdpbGwgYWRkIFgtSUJNLUNsaWVudC1JZCBhbmQgWC1JQk0tQ2xpZW50LVNlY3JldCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLlhJQk1DbGllbnRJRCAtIG9wdGlvbmFsOiBZb3VyIElCTUNsaWVudElELi4uIHRoaXMgc2hvdWxkIG5vdCBiZSBtYWRlIHB1YmxpYyBpbiBhIHB1YmxpYyBlbnZpcm9ubWVudC4gSW5jbHVkaW5nIHRoaXMgd2lsbCBhZGQgWC1JQk0tQ2xpZW50LUlkIGFzIGEgaGVhZGVyIHRvIHlvdXIgcmVxdWVzdC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5YSUJNQ2xpZW50U2VjcmV0IC0gb3B0aW9uYWw6IFlvdXIgSUJNQ2xpZW50U2VjcmV0Li4uIHRoaXMgc2hvdWxkIG5vdCBiZSBtYWRlIHB1YmxpYyBpbiBhIHB1YmxpYyBlbnZpcm9ubWVudC4gSW5jbHVkaW5nIHRoaXMgd2lsbCBhZGQgWC1JQk0tQ2xpZW50LVNlY3JldCBhcyBhIGhlYWRlciB0byB5b3VyIHJlcXVlc3QuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbmZpZy5lcnJvckhhbmRsZXIgLSBvcHRpb25hbDogQSBmdW5jdGlvbiB0aGF0IHRha2VzIGFuIGVycm9yIG9iamVjdCBhcyBhIHBhcmFtIGlmIHRoZXJlIGlzIGEgcHJvYmxlbSB3aXRoIGNvbW11bmljYXRpbmcgd2l0aCB5b3VyIFZpcnR1YWwgQWdlbnQuIEJ5IGRlZmF1bHQsIGlmIGFuIGVycm9yIGlzIHJlY2VpdmVkLCB0aGUgdXNlciBpcyBlc2NhbGF0ZWQgdG8gYSBsaXZlIGFnZW50LiBZb3UgbWF5LCBob3dldmVyLCB3YW50IHRvIGhhbmRsZSBzb21lIGVycm9ycyBkaWZmZXJlbnRseSAoNDAxIGZvciBpbnN0YW5jZSlcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5lcnJvckhhbmRsZXJDb250ZXh0IC0gb3B0aW9uYWw6IEEgXCJ0aGlzXCIgdmFsdWUgZm9yIHRoZSBlcnJvckhhbmRsZXIuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcuc3R5bGVzIC0gb3B0aW9uYWw6IE92ZXJyaWRlIGRlZmF1bHQgc3R5bGluZy5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zdHlsZXMuYmFja2dyb3VuZD1yZ2JhKDYxLDYxLDYxLDEpIC0gb3B0aW9uYWw6IHJnYmEoWCwgWCwgWCwgWCkgb3IgaGV4IGNvZGUgZm9yIGJhY2tncm91bmQgY29sb3Jcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zdHlsZXMudGV4dD0jZmZmZmZmIC0gb3B0aW9uYWw6IHJnYmEoWCwgWCwgWCwgWCkgb3IgaGV4IGNvZGUgZm9yIG1haW4gdGV4dCBjb2xvclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnN0eWxlcy5saW5rPSNmZmZmZmYgLSBvcHRpb25hbDogcmdiYShYLCBYLCBYLCBYKSBvciBoZXggY29kZSBmb3IgY29sb3Igb2YgbGlua3MgaW4gdGV4dFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnN0eWxlcy5zZWNvbmRhcnlCYWNrZ3JvdW5kPXJnYmEoNzAsNzAsNzAsMSkgLSBvcHRpb25hbDogcmdiYShYLCBYLCBYLCBYKSBvciBoZXggY29kZSBmb3IgYmFja2dyb3VuZCBjb2xvciBvZiBjaGF0IGJ1YmJsZXMgYW5kIG90aGVyIHNlY29uZGFyeSBpbmZvXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuc3R5bGVzLnNlY29uZGFyeVRleHQ9cmdiYSgyNDcsMjQ3LDI0NywxKSAtIG9wdGlvbmFsOiByZ2JhKFgsIFgsIFgsIFgpIG9yIGhleCBjb2RlIGZvciBjb2xvciBvZiBjaGF0IGJ1YmJsZSB0ZXh0IGFuZCBvdGhlciBzZWNvbmRhcnkgaW5mb1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnN0eWxlcy5pbnB1dEJhY2tncm91bmQ9cmdiYSg3MCw3MCw3MCwxKSAtIG9wdGlvbmFsOiByZ2JhKFgsIFgsIFgsIFgpIG9yIGhleCBjb2RlIGZvciBiYWNrZ3JvdW5kIGNvbG9yIG9mIGlucHV0IGVsZW1lbnRzIGluIGZvcm1zXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuc3R5bGVzLmlucHV0VGV4dD1yZ2JhKDI0NywyNDcsMjQ3LDEpIC0gb3B0aW9uYWw6IHJnYmEoWCwgWCwgWCwgWCkgb3IgaGV4IGNvZGUgZm9yIGNvbG9yIG9mIGlucHV0IHRleHQgaW4gZm9ybXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zdHlsZXMuYWNjZW50VGV4dD0jZmZmZmZmIC0gb3B0aW9uYWw6IHJnYmEoWCwgWCwgWCwgWCkgb3IgaGV4IGNvZGUgZm9yIHRleHQgY29sb3JzIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBhY2NlbnRCYWNrZ3JvdW5kIGUuZy4gYnV0dG9uIHRleHRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zdHlsZXMuYWNjZW50QmFja2dyb3VuZD1yZ2JhKDE3NSwxMTAsMjMyLDEpIC0gb3B0aW9uYWw6IHJnYmEoWCwgWCwgWCwgWCkgb3IgaGV4IGNvZGUgZm9yIGFjY2VudCBjb2xvcnMgdXNlZCBieSB0aGUgY2hhdCBhcHBsaWNhdGlvbiBlLmcuIGJ1dHRvbnNcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zdHlsZXMuZXJyb3JUZXh0PSNmZmZmZmYgLSBvcHRpb25hbDogcmdiYShYLCBYLCBYLCBYKSBvciBoZXggY29kZSBmb3IgdGV4dCBjb2xvcnMgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGVycm9yQmFja2dyb3VuZCBlLmcuIGJ1dHRvbiB0ZXh0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuc3R5bGVzLmVycm9yQmFja2dyb3VuZD1yZ2JhKDIzOSw2Miw1OCwxKSAtIG9wdGlvbmFsOiByZ2JhKFgsIFgsIFgsIFgpIG9yIGhleCBjb2RlIGZvciBlcnJvciBjb2xvcnMgdXNlZCBieSB0aGUgY2hhdCBhcHBsaWNhdGlvbiBlLmcuIHZhbGlkYXRpb24gYnV0dG9uc1xuXHQgKiBAZXhhbXBsZVxuXHQgKiBJQk1DaGF0LmluaXQoe1xuXHQgKiAgZWw6ICdteV9kaXYnLFxuXHQgKiAgYm90SUQ6ICd4eHh4eHh4eHh4eHh4eCdcblx0ICogIHN0eWxlczoge1xuXHQgKiAgICBiYWNrZ3JvdW5kOiBcIiMwMDAwMDBcIlxuXHQgKiAgfVxuXHQgKiB9KS50aGVuKGZ1bmN0aW9uKCl7XG5cdCAqICAgICBjb25zb2xlLmxvZygnaW5pdGlhbGl6ZScpO1xuXHQgKiB9KTtcblx0ICogLy9vclxuXHQgKiB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXktd2lkZ2V0LWNvbnRhaW5lcicpO1xuXHQgKiBJQk1DaGF0LmluaXQoe1xuXHQgKiAgZWw6IGVsLFxuXHQgKiAgYm90SUQ6ICd4eHh4eHh4eHh4eHh4eCdcblx0ICogIHN0eWxlczoge1xuXHQgKiAgICBiYWNrZ3JvdW5kOiBcIiMwMDAwMDBcIlxuXHQgKiAgfVxuXHQgKiB9KS50aGVuKGZ1bmN0aW9uKCl7XG5cdCAqICAgICBjb25zb2xlLmxvZygnaW5pdGlhbGl6ZScpO1xuXHQgKiB9KTtcblx0ICogQHJldHVybnMge1Byb21pc2V9IFJldHVybnM6IEEgcHJvbWlzZSBzbyB5b3UgY2FuIGNhbGwgZnVuY3Rpb25zIGFmdGVyIHRoZSB3aWRnZXQgaGFzIGJlZW4gaW5pdGlhbGl6ZWQuXG5cdCAqL1xuXHRpbml0OiBib290c3RyYXAuaW5pdCxcblx0LyoqXG5cdCAqIFJlc3RhcnQgdGhlIGNoYXQgd2lkZ2V0LiBUaGUgc2FtZSBjaGF0IHdpZGdldCBpcyByZW5kZXJlZCBpbiB0aGUgc2FtZSBodG1sIGVsZW1lbnQgYXMgd2FzIHNwZWNpZmllZCBpbiB0aGUgaW5pdCBtZXRob2QuXG5cdCAqIEBmdW5jdGlvbiByZXN0YXJ0XG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQucmVzdGFydCgpLnRoZW4oZnVuY3Rpb24oKXtcblx0ICogICAgIGNvbnNvbGUubG9nKCdyZXN0YXJ0ZWQnKTtcblx0ICogfSk7XG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfSBSZXR1cm5zOiBBIHByb21pc2Ugc28geW91IGNhbiBjYWxsIGZ1bmN0aW9ucyBhZnRlciB0aGUgd2lkZ2V0IGhhcyBiZWVuIGluaXRpYWxpemVkLlxuXHQgKi9cblx0cmVzdGFydDogYm9vdHN0cmFwLnJlc3RhcnQsXG5cdC8qKlxuXHQgKiBEZXN0cm95IHRoZSBjaGF0IHdpZGdldCBhbmQgcmVzdG9yZSB0aGUgb3JpZ2luYWwgSFRNTCBjb250ZW50LiBVc2VmdWwgaWYgdGhlIGNoYXQgd2lkZ2V0IGlzIGRpc3BsYXllZCBpbiBhIG1vZGFsLCBmb3IgZXhhbXBsZSwgYW5kIHlvdSB3YW50IGl0IHRvIGdvIGF3YXkgd2hlbiB0aGUgbW9kYWwgaXMgY2xvc2VkLlxuXHQgKiBAZnVuY3Rpb24gZGVzdHJveVxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAZXhhbXBsZVxuXHQgKiBJQk1DaGF0LmRlc3Ryb3koKS50aGVuKGZ1bmN0aW9uKCl7XG5cdCAqICAgICBjb25zb2xlLmxvZygnZGVzdHJveWVkJyk7XG5cdCAqIH0pO1xuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX0gUmV0dXJuczogQSBwcm9taXNlIHNvIHlvdSBjYW4gY2FsbCBmdW5jdGlvbnMgYWZ0ZXIgdGhlIHdpZGdldCBoYXMgYmVlbiBkZXN0cm95ZWQuXG5cdCAqL1xuXHRkZXN0cm95OiBib290c3RyYXAuZGVzdHJveSxcblxuXHQvKipcblx0ICogU2VuZCBhIG1lc3NhZ2UgdG8gdGhlIGNoYXQgd2lkZ2V0IGZyb20gb3V0c2lkZSB0aGUgY2hhdCB3aWRnZXQuIFRoaXMgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZCBpbiB0aGUgaW50ZXJmYWNlLlxuXHQgKiBAZnVuY3Rpb24gc2VuZFxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSAtIEEgbWVzc2FnZSB5b3Ugd2FudCB0byBzZW5kIHRvIHRoZSBjaGF0IHdpZGdldC5cblx0ICogQHJldHVybnMge0lCTUNoYXR9IC0gUmV0dXJucyBJQk1DaGF0IGZvciBjaGFpbmluZy5cblx0ICogQGV4YW1wbGVcblx0ICogSUJNQ2hhdC5zZW5kKCdIZWxsbyB3b3JsZC4nKTtcblx0ICovXG5cdHNlbmQ6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcblx0XHRib290c3RyYXAuc2VuZChtZXNzYWdlKTtcblx0XHRyZXR1cm4gSUJNQ2hhdDtcblx0fSxcblxuXHQvKipcblx0ICogTW9jayByZWNlaXZpbmcgYSBtZXNzYWdlIHRvIHRoZSBjaGF0IHdpZGdldCBmcm9tIG91dHNpZGUgdGhlIGNoYXQgd2lkZ2V0LlxuXHQgKiBAZnVuY3Rpb24gcmVjZWl2ZVxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSAtIEEgbWVzc2FnZSB5b3Ugd2FudCB0byBzaG93IGFzIHJlY2VpdmVkIGluIHRoZSBjaGF0IHdpZGdldC5cblx0ICogQHJldHVybnMge0lCTUNoYXR9IC0gUmV0dXJucyBJQk1DaGF0IGZvciBjaGFpbmluZy5cblx0ICogQGV4YW1wbGVcblx0ICogSUJNQ2hhdC5yZWNlaXZlKCdIZWxsbyB3b3JsZC4nKTtcblx0ICovXG5cdHJlY2VpdmU6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcblx0XHRib290c3RyYXAucmVjZWl2ZShtZXNzYWdlKTtcblx0XHRyZXR1cm4gSUJNQ2hhdDtcblx0fSxcblxuXHQvKipcblx0ICogU2VuZCBhIG1lc3NhZ2UgdG8gdGhlIGNoYXQgd2lkZ2V0IGZyb20gb3V0c2lkZSB0aGUgY2hhdCB3aWRnZXQuIFRoaXMgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZCBpbiB0aGUgaW50ZXJmYWNlLCBidXQgd2lsbCBub3QgYWN0dWFsbHkgZ2V0IHNlbnQgdG8gdGhlIHNlcnZlci5cblx0ICogQGZ1bmN0aW9uIHNlbmRNb2NrXG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIC0gQSBtZXNzYWdlIHlvdSB3YW50IHRvIHByZXRlbmQgdG8gc2VuZCB0byB0aGUgY2hhdCB3aWRnZXQuXG5cdCAqIEByZXR1cm5zIHtJQk1DaGF0fSAtIFJldHVybnMgSUJNQ2hhdCBmb3IgY2hhaW5pbmcuXG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQuc2VuZE1vY2soJ0hlbGxvIHdvcmxkLicpO1xuXHQgKi9cblx0c2VuZE1vY2s6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcblx0XHRib290c3RyYXAuc2VuZE1vY2sobWVzc2FnZSk7XG5cdFx0cmV0dXJuIElCTUNoYXQ7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFNlbmQgYSBtZXNzYWdlIHRvIHRoZSBjaGF0IHdpZGdldCBmcm9tIG91dHNpZGUgdGhlIGNoYXQgd2lkZ2V0LiBUaGlzIG1lc3NhZ2Ugd2lsbCBOT1QgYmUgZGlzcGxheWVkIGluIHRoZSBpbnRlcmZhY2UuXG5cdCAqIEBmdW5jdGlvbiBzZW5kU2lsZW50bHlcblx0ICogQG1lbWJlcm9mIElCTUNoYXRcblx0ICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgLSBBIG1lc3NhZ2UgeW91IHdhbnQgdG8gc2VuZCB0byB0aGUgY2hhdCB3aWRnZXQsIGJ1dCBub3QgZGUgZGlzcGxheWVkIGluIHRoZSBpbnRlcmZhY2UuXG5cdCAqIEByZXR1cm5zIHtJQk1DaGF0fSAtIFJldHVybnMgSUJNQ2hhdCBmb3IgY2hhaW5pbmcuXG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQuc2VuZFNpbGVudGx5KCdIZWxsbyB3b3JsZC4nKTtcblx0ICovXG5cdHNlbmRTaWxlbnRseTogZnVuY3Rpb24obWVzc2FnZSkge1xuXHRcdGJvb3RzdHJhcC5zZW5kU2lsZW50bHkobWVzc2FnZSk7XG5cdFx0cmV0dXJuIElCTUNoYXQ7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVyIGEgY3VzdG9tIGxheW91dCB3aXRoIHRoZSBjaGF0IHdpZGdldC4gQ2FsbCByZWdpc3RlckxheW91dCgpIGJlZm9yZSB5b3UgY2FsbCBpbml0KCkuXG5cdCAqIEBmdW5jdGlvbiByZWdpc3RlckxheW91dFxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGF5b3V0IC0gVGhlIG5hbWUgb2YgdGhlIGxheW91dCB5b3VyIGJvdCB3aWxsIHByb3ZpZGUgd2hlbiBpdCBpcyB0cmlnZ2VyZWQgdG8gcmVuZGVyIGEgbGF5b3V0LlxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBpbml0IC0gQSBmdW5jdGlvbiB0aGF0IHJ1bnMgb25lIHRpbWUsIHdoZW4gdGhlIGNoYXQgd2lkZ2V0IGlzIGJvb3RzdHJhcHBlZC4gQmUgc3VyZSB0byBzdWJzY3JpYmUgdG8gdGhlIFwibGF5b3V0OllPVVJfTEFZT1VUX05BTUVcIiBldmVudCBpbiB0aGlzIGZ1bmN0aW9uLlxuXHQgKiBAcmV0dXJucyB7SUJNQ2hhdH0gLSBSZXR1cm5zIElCTUNoYXQgZm9yIGNoYWluaW5nLlxuXHQgKiBAZXhhbXBsZVxuXHQgKiB2YXIgUGx1bWJlckJyb3RoZXJzID0gcmVxdWlyZSgnLi4vcGx1bWJlci1icm90aGVycy1nYW1lJyk7XG5cdCAqIHZhciBjb25maWcgPSB7fTtcblx0ICpcblx0ICogZnVuY3Rpb24gaW5pdEdhbWUoKSB7XG5cdCAqICAgSUJNQ2hhdC5zdWJzY3JpYmUoJ2xheW91dDpwbHVtYmVyLWJyb3RoZXJzLWdhbWUnLCBmdW5jdGlvbihvYmopIHtcblx0ICogICAgIHZhciB1dWlkID0gb2JqLnV1aWQ7XG5cdCAqICAgICB2YXIgcGFyZW50RWxlbWVudCA9IG9iai5lbGVtZW50O1xuXHQgKiAgICAgdmFyIGxheW91dEVsZW1lbnQgPSBvYmoubGF5b3V0RWxlbWVudDtcblx0ICogICAgIHZhciBtc2dFbGVtZW50ID0gb2JqLm1zZ0VsZW1lbnQ7XG5cdCAqICAgICB2YXIgbWVzc2FnZSA9IG9iai5tZXNzYWdlO1xuXHQgKiAgICAgdmFyIGRhdGEgPSBvYmouZGF0YTtcblx0ICogICAgIG1zZ0VsZW1lbnQudGV4dENvbnRlbnQgPSAnTG9hZGluZyBQbHVtYmVyIEJyb3RoZXJzISc7XG5cdCAqICAgICB2YXIgYnJvdGhlcnMgPSBuZXcgUGx1bWJlckJyb3RoZXJzKCk7XG5cdCAqICAgICBicm90aGVycy5yZW5kZXIobGF5b3V0RWxlbWVudCwgZGF0YSkudGhlbihmdW5jdGlvbigpIHtcblx0ICogICAgICAgbXNnRWxlbWVudC50ZXh0Q29udGVudCA9ICdFbmpveSB5b3VyIGdhbWUgb2YgUGx1bWJlciBCcm90aGVycyEnO1xuXHQgKiAgICAgfSk7XG5cdCAqICAgfVxuXHQgKiB9KTtcblx0ICpcblx0ICogSUJNQ2hhdC5yZWdpc3RlckxheW91dCgncGx1bWJlci1icm90aGVycy1nYW1lJywgaW5pdEdhbWUpO1xuXHQgKiBJQk1DaGF0LmluaXQoY29uZmlnKTtcblx0ICovXG5cdHJlZ2lzdGVyTGF5b3V0OiBmdW5jdGlvbihsYXlvdXQsIGluaXQpIHtcblx0XHRib290c3RyYXAucmVnaXN0ZXJMYXlvdXQobGF5b3V0LCBpbml0KTtcblx0XHRyZXR1cm4gSUJNQ2hhdDtcblx0fSxcblxuXHQvKipcblx0ICogT3ZlcnJpZGUgaG93IGlucHV0cyBpbnRvIHRoZSBjaGF0IHRleHQgYm94IGFyZSBoYW5kbGVkLiBlLmcuIHlvdSBtYXkgd2lzaCB0byBzZW5kIG1lc3NhZ2VzIHRvIHlvdXIgbGl2ZSBhZ2VudCBpbnN0ZWFkIG9mIHRvIHlvdXIgdmlydHVhbCBhZ2VudC5cblx0ICogQGZ1bmN0aW9uIGVuYWJsZUN1c3RvbUlucHV0SGFuZGxlclxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbmZpZy5jYWxsYmFjayAtIEEgZnVuY3Rpb24gdGhhdCByZWNlaXZlcyBhIG1lc3NhZ2UgYW5kIHJlc29sdmUgYW5kIHJlamVjdCBmdW5jdGlvbnMgYXMgcGFyYW1zXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gY29uZmlnLmNvbnRleHQgLSAob3B0aW9uYWwpIEEgdmFsdWUgZm9yIFwidGhpc1wiIGluIHlvdXIgY2FsbGJhY2sgZnVuY3Rpb25cblx0ICogQHJldHVybnMge0lCTUNoYXR9IC0gUmV0dXJucyBJQk1DaGF0IGZvciBjaGFpbmluZy5cblx0ICogQGV4YW1wbGVcblx0ICogSUJNQ2hhdC5lbmFibGVDdXN0b21JbnB1dEhhbmRsZXIoe1xuXHQgKiAgIGNhbGxiYWNrOiBmdW5jdGlvbihtZXNzYWdlLCByZXNvbHZlLCByZWplY3QpIHtcblx0ICogICAgIC8vZG8gc29tZXRoaW5nIGxpa2Ugc2VuZCB0aGUgbWVzc2FnZSB0byB5b3VyIGxpdmUgY3VzdG9tZXIgc2VydmljZSByZXBcblx0ICogICAgIElCTUNoYXQucmVjZWl2ZSgnQSBtZXNzYWdlIGZyb20geW91ciBsaXZlIGN1c3RvbWVyIHNlcnZpY2UgcmVwJyk7XG5cdCAqICAgICByZXNvbHZlKCk7IC8vIGdldHMgcmlkIG9mIGxvYWRpbmcgc3Bpbm5lciBhbmQgYWxsb3dzIHRoZSBjaGF0IHRleHQgYm94IHRvIGFjY2VwdCBhbm90aGVyIG1lc3NhZ2Vcblx0ICogICAgIC8vIHJlamVjdChlcnJvcik7XG5cdCAqICB9XG5cdCAqIH0pO1xuXHQgKi9cblxuXHRlbmFibGVDdXN0b21JbnB1dEhhbmRsZXI6IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdGJvb3RzdHJhcC5lbmFibGVDdXN0b21JbnB1dEhhbmRsZXIoY29uZmlnKTtcblx0XHRyZXR1cm4gSUJNQ2hhdDtcblx0fSxcblxuXHQvKipcblx0ICogUmV0dXJuIGNoYXQgaW5wdXQgYm94ZXMgaGFuZGxpbmcgdG8gdGhlIGRlZmF1bHQgcHJvdmlkZWQgaGFuZGxlci5cblx0ICogQGZ1bmN0aW9uIGRpc2FibGVDdXN0b21JbnB1dEhhbmRsZXJcblx0ICogQG1lbWJlcm9mIElCTUNoYXRcblx0ICogQHJldHVybnMge0lCTUNoYXR9IC0gUmV0dXJucyBJQk1DaGF0IGZvciBjaGFpbmluZy5cblx0ICogQGV4YW1wbGVcblx0ICogSUJNQ2hhdC5kaXNhYmxlQ3VzdG9tSW5wdXRIYW5kbGVyKCk7XG5cdCAqL1xuXG5cdGRpc2FibGVDdXN0b21JbnB1dEhhbmRsZXI6IGZ1bmN0aW9uKCkge1xuXHRcdGJvb3RzdHJhcC5kaXNhYmxlQ3VzdG9tSW5wdXRIYW5kbGVyKCk7XG5cdFx0cmV0dXJuIElCTUNoYXQ7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFNldCBmb2N1cyB0byB0aGUgY2hhdCB0ZXh0IGJveC4gVXNlZnVsIGlmIHlvdSB3YW50IHVzZXJzIHRvIGJlIGFibGUgdG8ganVzdCBzdGFydCB0eXBpbmcgaW50byB0aGUgdGV4dCBib3ggd2l0aG91dCBoYXZpbmcgdG8gY2xpY2sgaW4gdGhlIHRleHQgYm94IGZpcnN0IHRvIHNldCBmb2N1cy5cblx0ICogQGZ1bmN0aW9uIGZvY3VzSW5wdXRcblx0ICogQG1lbWJlcm9mIElCTUNoYXRcblx0ICogQHJldHVybnMge0lCTUNoYXR9IC0gUmV0dXJucyBJQk1DaGF0IGZvciBjaGFpbmluZy5cblx0ICogQGV4YW1wbGVcblx0ICogSUJNQ2hhdC5mb2N1c0lucHV0KCk7XG5cdCAqL1xuXG5cdGZvY3VzSW5wdXQ6IGZ1bmN0aW9uKCkge1xuXHRcdGJvb3RzdHJhcC5mb2N1c0lucHV0KCk7XG5cdFx0cmV0dXJuIElCTUNoYXQ7XG5cdH0sXG5cdC8qKlxuXHQgKiBQcmV2ZW50IHVzZXJzIGZyb20gc3VibWl0dGluZyBtZXNzYWdlcyBpbiB0aGUgY2hhdCB0ZXh0IGJveC4gVXNlZnVsIHdoZW4geW91IHdhbnQgdGhlIHVzZXIgdG8gaW50ZXJhY3Qgd2l0aCBhIGxheW91dCBpbnN0ZWFkLlxuXHQgKiBAZnVuY3Rpb24gZGlzYWJsZUlucHV0XG5cdCAqIEBtZW1iZXJvZiBJQk1DaGF0XG5cdCAqIEByZXR1cm5zIHtJQk1DaGF0fSAtIFJldHVybnMgSUJNQ2hhdCBmb3IgY2hhaW5pbmcuXG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQuZGlzYWJsZUlucHV0KCk7XG5cdCAqL1xuXHRkaXNhYmxlSW5wdXQ6IGZ1bmN0aW9uKCkge1xuXHRcdGJvb3RzdHJhcC5kaXNhYmxlSW5wdXQoKTtcblx0XHRyZXR1cm4gSUJNQ2hhdDtcblx0fSxcblxuXHQvKipcblx0ICogRW5hYmxlIHVzZXJzIHRvIHN1Ym1pdCBtZXNzYWdlcyBpbiB0aGUgY2hhdCB0ZXh0IGJveC4gVXNlZnVsIHdoZW4geW91IHdhbnQgdXNlcnMgdG8gYmUgYWJsZSB0byByZXR1cm4gdG8gYWRkaW5nIG1lc3NhZ2VzIHRvIHRoZSBjaGF0IHRleHQgYm94IGFmdGVyIGludGVyYWN0aW5nIHdpdGggYSBsYXlvdXQuXG5cdCAqIEBmdW5jdGlvbiBlbmFibGVJbnB1dFxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAcmV0dXJucyB7SUJNQ2hhdH0gLSBSZXR1cm5zIElCTUNoYXQgZm9yIGNoYWluaW5nLlxuXHQgKiBAZXhhbXBsZVxuXHQgKiBJQk1DaGF0LmVuYWJsZUlucHV0KCk7XG5cdCAqL1xuXHRlbmFibGVJbnB1dDogZnVuY3Rpb24oKSB7XG5cdFx0Ym9vdHN0cmFwLmVuYWJsZUlucHV0KCk7XG5cdFx0cmV0dXJuIElCTUNoYXQ7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFN1YnNjcmliZSB0byBhbiBJQk1DaGF0IGV2ZW50LiBTZWUgWy4vRVZFTlRTLm1kXSguL0VWRU5UUy5tZCkgZm9yIG1vcmUgZGV0YWlscy5cblx0ICogQGZ1bmN0aW9uIHN1YnNjcmliZVxuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gVGFrZXMgYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBuYW1lIG9mIHRoZSBldmVudFxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIGZ1bmN0aW9uIHRvIHJ1biB3aGVuIGV2ZW50IGlzIGNhbGxlZFxuXHQgKiBAcGFyYW0gY29udGV4dCAtIG9wdGlvbmFsOiB2YWx1ZSBvZiBcInRoaXNcIiBpbiB0aGUgZnVuY3Rpb25cblx0ICogQHJldHVybnMge09iamVjdH0gLSBSZXR1cm5zIG9iamVjdCB3aXRoIGEgLnJlbW92ZSBmdW5jdGlvbiB0byBkZXN0cm95IHRoZSBzdWJzY3JpcHRpb25cblx0ICogQGV4YW1wbGVcblx0ICogdmFyIG15U3Vic2NyaXB0aW9uID0gSUJNQ2hhdC5zdWJzY3JpYmUoJ3RoZS1lbmQtb2YtdGhlLXdvcmxkJywgZnVuY3Rpb24obWVzc2FnZSkge1xuXHQgKiAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuXHQgKiAgIG15U3Vic2NyaXB0aW9uLnJlbW92ZSgpOyAvLyByZW1vdmUgc3Vic2NyaXB0aW9uXG5cdCAqIH0pO1xuXHQgKi9cblx0c3Vic2NyaWJlOiBib290c3RyYXAuc3Vic2NyaWJlLFxuXHQvKipcblx0ICogUHVibGlzaCBhbiBJQk1DaGF0IGV2ZW50LiBTZWUgWy4vRVZFTlRTLm1kXSguL0VWRU5UUy5tZCkgZm9yIG1vcmUgZGV0YWlscy5cblx0ICogQGZ1bmN0aW9uIHB1Ymxpc2hcblx0ICogQG1lbWJlcm9mIElCTUNoYXRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtIEEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgbmFtZSBvZiB0aGUgZXZlbnQgZGF0YVxuXHQgKiBAcGFyYW0gZGF0YSAtIERhdGEgdG8gcGFzcyB0byB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gb2YgYW55IHN1YnNjcmliZWQgZnVuY3Rpb25zLiBBY2NlcHRzIGFueSBkYXRhIHR5cGUuXG5cdCAqIEByZXR1cm5zIHtJQk1DaGF0fSAtIFJldHVybnMgSUJNQ2hhdCBmb3IgY2hhaW5pbmcuXG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQucHVibGlzaCgndGhlLWVuZC1vZi10aGUtd29ybGQnLCAncGFuaWMhJyk7XG5cdCAqL1xuXHRwdWJsaXNoOiBmdW5jdGlvbihldmVudE5hbWUsIGRhdGEpIHtcblx0XHRib290c3RyYXAucHVibGlzaChldmVudE5hbWUsIGRhdGEpO1xuXHRcdHJldHVybiBJQk1DaGF0O1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBAbmFtZXNwYWNlIHByb2ZpbGVcblx0ICogQG1lbWJlcm9mIElCTUNoYXRcblx0ICovXG5cdHByb2ZpbGU6IHtcblx0XHQvKipcblx0XHQqIEdldCBhbiBpdGVtIGZyb20gdGhlIHVzZXIgcHJvZmlsZSBiYXNlZCBvbiBrZXkuXG5cdFx0KiBAbWVtYmVyb2YgSUJNQ2hhdC5wcm9maWxlXG5cdFx0KiBAZnVuY3Rpb24gZ2V0XG5cdFx0KiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIG5hbWVkIGtleSBvZiB0aGUgdmFsdWUgeW91IGFyZSBhY2Nlc3NpbmcuXG5cdFx0KiBAZXhhbXBsZVxuXHRcdCogSUJNQ2hhdC5wcm9maWxlLmdldCgnZmlyc3RfbmFtZScpO1xuXHRcdCogQHJldHVybnMge0FueX0gUmV0dXJuczogdGhlIHZhbHVlIG9mIHRoZSBrZXkgaW4gdGhlIHByb2ZpbGUgbWFwLlxuXHRcdCovXG5cdFx0Z2V0OiBib290c3RyYXAucHJvZmlsZS5nZXQsXG5cdFx0LyoqXG5cdFx0KiBTZXQgYW4gaXRlbSBmcm9tIHRoZSB1c2VyIHByb2ZpbGUgYmFzZWQgb24ga2V5LlxuXHRcdCogQG1lbWJlcm9mIElCTUNoYXQucHJvZmlsZVxuXHRcdCogQGZ1bmN0aW9uIHNldFxuXHRcdCogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBuYW1lZCBrZXkgb2YgdGhlIHZhbHVlIHlvdSBhcmUgc2V0dGluZy5cblx0XHQqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSB2YWx1ZSB5b3UgYXJlIHNldHRpbmcuXG5cdFx0KiBAcmV0dXJucyB7SUJNQ2hhdC5wcm9maWxlfSAtIFJldHVybnMgSUJNQ2hhdC5wcm9maWxlIGZvciBjaGFpbmluZy5cblx0XHQqIEBleGFtcGxlXG5cdFx0KiBJQk1DaGF0LnByb2ZpbGUuc2V0KCdmaXJzdF9uYW1lJywgJ2pvaG4nKTtcblx0XHQqL1xuXHRcdHNldDogYm9vdHN0cmFwLnByb2ZpbGUuc2V0LFxuXHRcdC8qKlxuXHRcdCogU2VlIGlmIGFuIGl0ZW0gZnJvbSB0aGUgdXNlciBwcm9maWxlIGV4aXN0cyBiYXNlZCBvbiBrZXkuXG5cdFx0KiBAbWVtYmVyb2YgSUJNQ2hhdC5wcm9maWxlXG5cdFx0KiBAZnVuY3Rpb24gaGFzXG5cdFx0KiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIG5hbWVkIGtleSBvZiB0aGUgdmFsdWUgeW91IGFyZSBjaGVja2luZyB0aGUgZXhpc3RlbmNlIG9mLlxuXHRcdCogQGV4YW1wbGVcblx0XHQqIElCTUNoYXQucHJvZmlsZS5oYXMoJ2ZpcnN0X25hbWUnKTtcblx0XHQqIEByZXR1cm5zIHtCb29sZWFufSAtIEJvb2xlYW4gaW5kaWNhdGluZyBpZiB0aGUga2V5IGV4aXN0cy5cblx0XHQqL1xuXHRcdGhhczogYm9vdHN0cmFwLnByb2ZpbGUuaGFzLFxuXHRcdC8qKlxuXHRcdCogQ2xlYXIgdGhlIGVudGlyZSB1c2VyIHByb2ZpbGUuXG5cdFx0KiBAbWVtYmVyb2YgSUJNQ2hhdC5wcm9maWxlXG5cdFx0KiBAZnVuY3Rpb24gY2xlYXJcblx0XHQqIEByZXR1cm5zIHtJQk1DaGF0LnByb2ZpbGV9IC0gUmV0dXJucyBJQk1DaGF0LnByb2ZpbGUgZm9yIGNoYWluaW5nLlxuXHRcdCogQGV4YW1wbGVcblx0XHQqIElCTUNoYXQucHJvZmlsZS5jbGVhcigpO1xuXHRcdCovXG5cdFx0Y2xlYXI6IGJvb3RzdHJhcC5wcm9maWxlLmNsZWFyLFxuXHRcdC8qKlxuXHRcdCogRGVsZXRlIGFuIGl0ZW0gZnJvbSB0aGUgdXNlciBwcm9maWxlIGJhc2VkIG9uIGtleS5cblx0XHQqIEBtZW1iZXJvZiBJQk1DaGF0LnByb2ZpbGVcblx0XHQqIEBmdW5jdGlvbiBkZWxldGVcblx0XHQqIEByZXR1cm5zIHtJQk1DaGF0LnByb2ZpbGV9IC0gUmV0dXJucyBJQk1DaGF0LnByb2ZpbGUgZm9yIGNoYWluaW5nLlxuXHRcdCogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBuYW1lZCBrZXkgb2YgdGhlIHZhbHVlIHlvdSBhcmUgZGVsZXRpbmcuXG5cdFx0KiBAZXhhbXBsZVxuXHRcdCogSUJNQ2hhdC5wcm9maWxlLmRlbGV0ZSgnZmlyc3RfbmFtZScpO1xuXHRcdCovXG5cdFx0ZGVsZXRlOiBib290c3RyYXAucHJvZmlsZS5kZWxldGUsXG5cdFx0LyoqXG5cdFx0KiBJdGVyYXRlIG92ZXIgdGhlIHByb2ZpbGUuXG5cdFx0KiBAbWVtYmVyb2YgSUJNQ2hhdC5wcm9maWxlXG5cdFx0KiBAZnVuY3Rpb24gZm9yRWFjaFxuXHRcdCogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBUaGUgZnVuY3Rpb24geW91IGFyZSBjYWxsaW5nIG9uIGVhY2ggaXRlbSBpbiB0aGUgcHJvZmlsZSBvYmplY3QuIFRoaXMgZnVuY3Rpb24gaXMgcGFzc2VkIGtleSBhcyB0aGUgZmlyc3QgYXJndW1lbnQgYW5kIHZhbHVlIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuXG5cdFx0KiBAcGFyYW0ge09iamVjdH0gdGhpcyAtIChvcHRpb25hbCkgVGhlIGNvbnRleHQgeW91IHdpc2ggdG8gY2FsbCB0aGUgY2FsbGJhY2sgaW4uXG5cdFx0KiBAcmV0dXJucyB7SUJNQ2hhdC5wcm9maWxlfSAtIFJldHVybnMgSUJNQ2hhdC5wcm9maWxlIGZvciBjaGFpbmluZy5cblx0XHQqIEBleGFtcGxlXG5cdFx0KiBJQk1DaGF0LnByb2ZpbGUuZm9yRWFjaChmdW5jdGlvbihrZXksIHZhbHVlKSB7XG5cdFx0KiAgIGNvbnNvbGUubG9nKGtleSwgdmFsdWUpO1xuXHRcdCogfSk7XG5cdFx0Ki9cblx0XHRmb3JFYWNoOiBib290c3RyYXAucHJvZmlsZS5mb3JFYWNoXG5cdH0sXG5cblx0LyoqXG5cdCAqIFNlZSBhIGxpc3Qgb2YgY3VycmVudCBldmVudCBzdWJzY3JpcHRpb25zLiBTZWUgWy4vRVZFTlRTLm1kXSguL0VWRU5UUy5tZCkgZm9yIG1vcmUgZGV0YWlscy5cbiBcdCAqIEBmdW5jdGlvbiBjdXJyZW50U3Vic2NyaXB0aW9uc1xuXHQgKiBAbWVtYmVyb2YgSUJNQ2hhdFxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IC0gQXJyYXkgb2YgZXZlbnRzIGFuZCBjYWxsYmFja3MuXG5cdCAqIEBleGFtcGxlXG5cdCAqIElCTUNoYXQuY3VycmVudFN1YnNjcmlwdGlvbnMoKTtcblx0ICovXG5cdGN1cnJlbnRTdWJzY3JpcHRpb25zOiBib290c3RyYXAuY3VycmVudFN1YnNjcmlwdGlvbnMsXG5cdC8qKlxuXHQqIEBpZ25vcmVcblx0Ki9cblx0cGxheWJhY2s6IGJvb3RzdHJhcC5wbGF5YmFjayxcblxuXHQvKipcblx0KiBAaWdub3JlXG5cdCovXG5cdHN0YXRlOiBib290c3RyYXAuc3RhdGUsXG5cblx0LyoqXG5cdCAqIFR1cm5zIG9uIGEgd2hvbGUgYnVuY2ggb2YgdmVyYm9zZSBjb25zb2xlLmxvZyBzdGF0ZW1lbnRzIVxuXHQgKiBAZnVuY3Rpb24gZGVidWdcblx0ICogQG1lbWJlcm9mIElCTUNoYXRcblx0ICogQHJldHVybnMge0lCTUNoYXR9IC0gUmV0dXJucyBJQk1DaGF0IGZvciBjaGFpbmluZy5cblx0ICogQGV4YW1wbGVcblx0ICogSUJNQ2hhdC5kZWJ1ZygpXG5cdCAqL1xuXHRkZWJ1ZzogZnVuY3Rpb24oKSB7XG5cdFx0Ym9vdHN0cmFwLmRlYnVnKCk7XG5cdFx0cmV0dXJuIElCTUNoYXQ7XG5cdH1cblxufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IElCTUNoYXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL3Jhdy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi9ub2RlX21vZHVsZXMvcmF3LWxvYWRlci9pbmRleC5qcyEuL3N0eWxlcy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL3Jhdy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N0eWxlcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLklCTUNoYXQtb3V0ZXItY29udGFpbmVyIHtcXG5cXHRtYXgtd2lkdGg6IDc2OHB4O1xcbiAgbWluLXdpZHRoOiAyODhweDtcXG4gIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcXG4gIGJvcmRlcjogbm9uZTtcXG5cXHRtaW4taGVpZ2h0OjEwMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRwYWRkaW5nOjA7XFxuXFx0ZGlzcGxheTp0YWJsZTtcXG5cXHR3aWR0aDoxMDAlO1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcblxcbi8qIEFnZW50IENvbXBvbmVudCAqL1xcblxcbi5JQk1DaGF0LWlubmVyLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTp0YWJsZS1jZWxsO1xcblxcdGhlaWdodDoxMDAlO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwIDhweCAwIDhweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbn1cXG5cXG4vKiBDaGF0IENvbXBvbmVudCAqL1xcblxcbi5JQk1DaGF0LWNoYXQtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OnRhYmxlLXJvdztcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzpcXG59XFxuXFxuLyogTWVzc2FnZXMgQ29tcG9uZW50ICovXFxuXFxuLklCTUNoYXQtbWVzc2FnZXMge1xcblxcdG92ZXJmbG93LXk6IGF1dG87XFxuXFx0b3ZlcmZsb3cteDogaGlkZGVuO1xcblxcdGhlaWdodDphdXRvO1xcbn1cXG5cXG4uSUJNQ2hhdC1tZXNzYWdlcyBsYWJlbCB7XFxuXFx0ZGlzcGxheTpibG9jaztcXG5cXHRmb250LXdlaWdodDpib2xkO1xcblxcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcblxcdHBhZGRpbmctYm90dG9tOjAuMjVlbTtcXG59XFxuXFxuLklCTUNoYXQtbWVzc2FnZXMgaW5wdXQge1xcblxcdGJvcmRlci1yYWRpdXM6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdHBhZGRpbmc6MC4yNWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1tZXNzYWdlcyBidXR0b24ge1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcXG5cXHRvdmVyZmxvdzogdmlzaWJsZTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiBmb3IgaW5wdXQgKi9cXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBmb3IgYnV0dG9uICovXFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMmVtO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRsaW5lLWhlaWdodDogMi41ZW07XFxuXFx0bWFyZ2luOjA7XFxufVxcblxcbi5JQk1DaGF0LW1lc3NhZ2VzIGJ1dHRvbltkaXNhYmxlZD1cXFwidHJ1ZVxcXCJdIHtcXG5cXHRjdXJzb3I6IGRlZmF1bHQ7XFxuICBvcGFjaXR5Oi43O1xcbn1cXG5cXG4uSUJNQ2hhdC1tZXNzYWdlcyBidXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xcblxcdGJvcmRlcjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiBXYXRzb25NZXNzYWdlIENvbXBvbmVudCAqL1xcblxcbi5JQk1DaGF0LXdhdHNvbi1tZXNzYWdlLWNvbnRhaW5lciB7XFxuXFx0bWFyZ2luOiAxZW0gMCAxZW0gMDtcXG59XFxuXFxuLklCTUNoYXQtd2F0c29uLW1lc3NhZ2Uge1xcblxcdG1pbi1oZWlnaHQ6IDFlbTtcXG5cXHRtYXJnaW46MWVtIDJlbSAxZW0gMDtcXG5cXHRwYWRkaW5nOiAwLjFlbSAwLjFlbSAwLjFlbSAxZW07XFxufVxcblxcbi5JQk1DaGF0LXdhdHNvbi1sYXlvdXQge1xcblxcdG1hcmdpbjogMCAxZW0gMCAxZW07XFxufVxcblxcbi5JQk1DaGF0LWRpc2FibGVkLWxheW91dCB7XFxuXFx0b3BhY2l0eTogMC43O1xcbn1cXG5cXG4vKiBVc2VyTWVzc2FnZSBDb21wb25lbnQgKi9cXG5cXG4uSUJNQ2hhdC11c2VyLW1lc3NhZ2UtY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMWVtIDAgMWVtIDJlbTtcXG59XFxuXFxuLklCTUNoYXQtdXNlci1tZXNzYWdlIHtcXG4gIHBhZGRpbmc6MWVtO1xcblxcdG1hcmdpbjowIDFlbSAwIDA7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41ZW07XFxufVxcblxcbi8qIElucHV0IENvbXBvbmVudCAqL1xcblxcbi5JQk1DaGF0LWlucHV0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTp0YWJsZS1yb3c7XFxuXFx0aGVpZ2h0OjcycHg7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbi5JQk1DaGF0LWlucHV0LWZvcm0ge1xcblxcdGRpc3BsYXk6dGFibGUtY2VsbDtcXG5cXHRwb3NpdGlvbjpyZWxhdGl2ZTtcXG5cXHRoZWlnaHQ6IDI0cHg7XFxuXFx0cGFkZGluZzoyNHB4IDI0cHggMCAyNHB4O1xcbn1cXG5cXG4uSUJNQ2hhdC1jaGF0LXRleHRib3gge1xcbiAgYm9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1zaXplOjFlbTtcXG4gIG1hcmdpbjowO1xcbiAgcGFkZGluZzowIDAgM3B4IDA7XFxuICB3aWR0aDoxMDAlO1xcbn1cXG5cXG4uSUJNQ2hhdC1jaGF0LXRleHRib3hbZGlzYWJsZWQ9J2Rpc2FibGVkJ10ge1xcblxcdG9wYWNpdHk6MC41O1xcbn1cXG5cXG4uSUJNQ2hhdC1pbnB1dC1mb3JtIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuXFx0b3BhY2l0eToxO1xcbn1cXG5cXG4uSUJNQ2hhdC1jaGF0LXRleHRib3g6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6MCAwIDJweCAwO1xcbn1cXG5cXG4vKiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2UgKi9cXG4uSUJNQ2hhdC12YWxpZGF0aW9uLWVycm9yIHtcXG5cXHRwYWRkaW5nOiAwLjI1ZW07XFxuXFx0Zm9udC1zaXplOiAwLjllbTtcXG59XFxuXFxuLyogU3Bpbm5lciAqL1xcbi5JQk1DaGF0LWlucHV0LWxvYWRpbmcge1xcblxcdHotaW5kZXg6IDI7XFxuXFx0cG9zaXRpb246YWJzb2x1dGU7XFxuXFx0cmlnaHQ6IDE2cHg7XFxuXFx0dG9wOiAxNXB4O1xcblxcdGhlaWdodDozMnB4O1xcblxcdHdpZHRoOjMycHg7XFxufVxcblxcbi5JQk1DaGF0LWlibS1zcGlubmVyLXN0YXJ0IHtcXG5cXHRvcGFjaXR5OjA7XFxufVxcblxcbi5JQk1DaGF0LWlibS1zcGlubmVyIHtcXG5cXHRmaWxsOiB0cmFuc3BhcmVudDtcXG5cXHRzdHJva2Utd2lkdGg6IDM7XFxuXFx0c3Ryb2tlLWxpbmVjYXA6IFxcXCJidXR0XFxcIjtcXG5cXHRzdHJva2UtZGFzaGFycmF5OiAxO1xcblxcdHN0cm9rZS1kYXNob2Zmc2V0OiAxO1xcbn1cXG5cXG4vKiBpbml0aWFsIHJvdGF0aW9uIGFuZCBzdHJva2UgYW5pbWF0aW9uIGFuZCBpbmZpbml0ZSByb3RhdGlvbiovXFxuLklCTUNoYXQtaW5pdC1zcGluIHtcXG5cXHRhbmltYXRpb246IGluaXQtcm90YXRlIDE1MG1zIGxpbmVhciBmb3J3YXJkcywgcm90YXRlLWxvb3AgMjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLklCTUNoYXQtaW5pdC1zcGluIHN2ZyBjaXJjbGUge1xcblxcdGFuaW1hdGlvbjogaW5pdC1zdHJva2UgMTAwMG1zIGxpbmVhcjtcXG59XFxuXFxuLklCTUNoYXQtZW5kLXNwaW4gc3ZnIGNpcmNsZSB7XFxuXFx0ZGlzcGxheTpub25lO1xcbn1cXG5cXG4vKiBpbml0aWFsIHJvdGF0aW9uICovXFxuQGtleWZyYW1lcyBpbml0LXJvdGF0ZSB7XFxuXFx0MCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcblxcdH1cXG5cXHQxMDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcblxcdH1cXG59XFxuXFxuLyogbG9vcGluZyByb3RhdGlvbiAqL1xcbkBrZXlmcmFtZXMgcm90YXRlLWxvb3Age1xcblxcdDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG5cXHR9XFxuXFx0MTAwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG5cXHR9XFxufVxcblxcbi8qIGluaXRpYWwgc3Ryb2tlIGFuaW1hdGlvbiAqL1xcbkBrZXlmcmFtZXMgaW5pdC1zdHJva2Uge1xcblxcdDAlIHtcXG5cXHRcXHRvcGFjaXR5OiAwO1xcblxcdH1cXG5cXHQxMDAlIHtcXG5cXHRcXHRvcGFjaXR5OiAxO1xcblxcdH1cXG59XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYXctbG9hZGVyIS4vc3JjL3N0eWxlcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBsYXlvdXRzID0gcmVxdWlyZSgnLi9sYXlvdXRzJyk7XG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi9ldmVudHMnKTtcbnZhciBldmVudEhhbmRsZXJzID0gcmVxdWlyZSgnLi9ldmVudHMvaGFuZGxlcnMnKTtcbnZhciBCb3RTREsgPSByZXF1aXJlKCdAd2F0c29uLXZpcnR1YWwtYWdlbnQvY2xpZW50LXNkay9saWIvd2ViJyk7XG52YXIgc3RhdGUgPSByZXF1aXJlKCcuL3N0YXRlJyk7XG52YXIgcHJvZmlsZSA9IHJlcXVpcmUoJy4vcHJvZmlsZScpO1xudmFyIHBsYXliYWNrID0gcmVxdWlyZSgnLi9wbGF5YmFjaycpO1xudmFyIFByb21pc2UgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnbG9kYXNoL2Fzc2lnbicpO1xudmFyIGRlZmF1bHRTdHlsZXMgPSByZXF1aXJlKCcuL3N0eWxlcycpO1xuXG52YXIgbGF5b3V0SW5pdCA9IHt9O1xudmFyIHJlZ2lzdGVyZWRMYXlvdXRzID0gW107XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnRzKHRyeUl0LCBwbGF5YmFjaykge1xuXHRldmVudHMuc3Vic2NyaWJlKCdzdGFydCcsIGV2ZW50SGFuZGxlcnMuc3RhcnQpO1xuXHRldmVudHMuc3Vic2NyaWJlKCdyZXNpemUnLCBldmVudEhhbmRsZXJzLnJlc2l6ZSk7XG5cdGV2ZW50cy5zdWJzY3JpYmUoJ2Rpc2FibGUtaW5wdXQnLCBldmVudEhhbmRsZXJzLmlucHV0LmRpc2FibGVJbnB1dCk7XG5cdGV2ZW50cy5zdWJzY3JpYmUoJ2VuYWJsZS1sb2FkaW5nJywgZXZlbnRIYW5kbGVycy5pbnB1dC5lbmFibGVMb2FkaW5nSW5wdXQpO1xuXHRldmVudHMuc3Vic2NyaWJlKCdkaXNhYmxlLWxvYWRpbmcnLCBldmVudEhhbmRsZXJzLmlucHV0LmRpc2FibGVMb2FkaW5nSW5wdXQpO1xuXHRldmVudHMuc3Vic2NyaWJlKCdzY3JvbGwtdG8tYm90dG9tJywgZXZlbnRIYW5kbGVycy5zY3JvbGxUb0JvdHRvbSk7XG5cdGV2ZW50cy5zdWJzY3JpYmUoJ3JlY2VpdmUnLCBldmVudEhhbmRsZXJzLnJlY2VpdmUpO1xuXHRpZiAodHJ5SXQgPT09IHRydWUpIHtcblx0XHRldmVudHMuc3Vic2NyaWJlKCd0cnktaXQtZXJyb3InLCBldmVudEhhbmRsZXJzLmVycm9yLnRyeUl0KTtcblx0XHRldmVudHMuc3Vic2NyaWJlKCd0cnktaXQtbGF5b3V0LXN1YnNjcmlwdGlvbicsIGV2ZW50SGFuZGxlcnMudHJ5SXQubGF5b3V0RXJyb3IpO1xuXHRcdGV2ZW50cy5zdWJzY3JpYmUoJ3RyeS1pdC1hY3Rpb24tc3Vic2NyaXB0aW9uJywgZXZlbnRIYW5kbGVycy50cnlJdC5hY3Rpb25FcnJvcik7XG5cdH1cblx0aWYgKHBsYXliYWNrID09PSB0cnVlKSB7IC8vVE9ETzogcmVtb3ZlIGlmIHBsYXliYWNrIHdoZW4gRGFzaGJvYXJkIGNvZGUgaXMgdXBkYXRlZFxuXHRcdGV2ZW50cy5zdWJzY3JpYmUoJ3NlbmQnLCBldmVudEhhbmRsZXJzLnNlbmRNb2NrKTtcblx0fSBlbHNlIHtcblx0XHRldmVudHMuc3Vic2NyaWJlKCdzZW5kJywgZXZlbnRIYW5kbGVycy5zZW5kKTtcblx0XHRldmVudHMuc3Vic2NyaWJlKCdzZW5kLWlucHV0LW1lc3NhZ2UnLCBldmVudEhhbmRsZXJzLnNlbmRJbnB1dE1lc3NhZ2UpO1xuXHRcdGV2ZW50cy5zdWJzY3JpYmUoJ2VuYWJsZS1pbnB1dCcsIGV2ZW50SGFuZGxlcnMuaW5wdXQuZW5hYmxlSW5wdXQpO1xuXHRcdGV2ZW50cy5zdWJzY3JpYmUoJ2ZvY3VzLWlucHV0JywgZXZlbnRIYW5kbGVycy5pbnB1dC5mb2N1c0lucHV0KTtcblx0XHRldmVudHMuc3Vic2NyaWJlKCdzZW5kLW1vY2snLCBldmVudEhhbmRsZXJzLnNlbmRNb2NrKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZWdpc3RlckxheW91dHMoKSB7XG5cdHJlZ2lzdGVyTGF5b3V0KCdzaG93LWxvY2F0aW9ucycsIGxheW91dHMuc2hvd0xvY2F0aW9ucy5pbml0LCB0cnVlKTtcblx0cmVnaXN0ZXJMYXlvdXQoJ2Nob29zZS1sb2NhdGlvbi10eXBlJywgbGF5b3V0cy5jaG9vc2VMb2NhdGlvblR5cGUuaW5pdCwgdHJ1ZSk7XG5cdHJlZ2lzdGVyTGF5b3V0KCdyZXF1ZXN0LWdlb2xvY2F0aW9uLWxhdGxvbmcnLCBsYXlvdXRzLnJlcXVlc3RHZW9sb2NhdGlvbkxhdGxvbmcuaW5pdCwgdHJ1ZSk7XG5cdHJlZ2lzdGVyTGF5b3V0KCdyZXF1ZXN0LWdlb2xvY2F0aW9uLXppcGNvZGUnLCBsYXlvdXRzLnJlcXVlc3RHZW9sb2NhdGlvblppcGNvZGUuaW5pdCwgdHJ1ZSk7XG5cdHJlZ2lzdGVyTGF5b3V0KCdjaG9vc2UnLCBsYXlvdXRzLmNob29zZS5pbml0LCB0cnVlKTtcblx0cmVnaXN0ZXJMYXlvdXQoJ2Zvcm0nLCBsYXlvdXRzLmZvcm0uaW5pdCwgdHJ1ZSk7XG5cdHJlZ2lzdGVyTGF5b3V0KCdjYy12YWxpZGF0b3InLCBsYXlvdXRzLmNyZWRpdENhcmQuaW5pdCwgdHJ1ZSk7XG5cdHJlZ2lzdGVyTGF5b3V0KCdlcnJvcicsIGxheW91dHMuZXJyb3IuaW5pdCwgdHJ1ZSk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0ZXJlZExheW91dHMubGVuZ3RoOyBpKyspXG5cdFx0bGF5b3V0SW5pdFtyZWdpc3RlcmVkTGF5b3V0c1tpXV0oKTtcbn1cblxuZnVuY3Rpb24gaW5pdChjb25maWcpIHtcblx0dmFyIHJvb3QgPSAodHlwZW9mIGNvbmZpZy5lbCA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uZmlnLmVsKSA6IGNvbmZpZy5lbDtcblx0dmFyIFNES2NvbmZpZyA9IHt9O1xuXHRTREtjb25maWcuYmFzZVVSTCA9IGNvbmZpZy5iYXNlVVJMIHx8ICdodHRwczovL2FwaS5pYm0uY29tL3ZpcnR1YWxhZ2VudC9ydW4vYXBpL3YxLyc7XG5cdGlmIChjb25maWcud2l0aENyZWRlbnRpYWxzKVxuXHRcdFNES2NvbmZpZy53aXRoQ3JlZGVudGlhbHMgPSBjb25maWcud2l0aENyZWRlbnRpYWxzO1xuXHRpZiAoY29uZmlnLlhJQk1DbGllbnRJRClcblx0XHRTREtjb25maWcuWElCTUNsaWVudElEID0gY29uZmlnLlhJQk1DbGllbnRJRDtcblx0aWYgKGNvbmZpZy5YSUJNQ2xpZW50U2VjcmV0KVxuXHRcdFNES2NvbmZpZy5YSUJNQ2xpZW50U2VjcmV0ID0gY29uZmlnLlhJQk1DbGllbnRTZWNyZXQ7XG5cdGlmIChjb25maWcudXNlcklEKVxuXHRcdFNES2NvbmZpZy51c2VySUQgPSBjb25maWcudXNlcklEO1xuXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdFx0dmFyIGRlZmF1bHRTdGF0ZSA9IHtcblx0XHRcdGFjdGl2ZTogdHJ1ZSxcblx0XHRcdHJvb3Q6IHJvb3QsXG5cdFx0XHRtYXBzU2VydmVyOiBwcm9jZXNzLmVudi5NQVBTX1NFUlZFUiB8fCAnaHR0cHM6Ly9kcDEtaS1zZXJ2ZS1tYXBzLm15Ymx1ZW1peC5uZXQvJyxcblx0XHRcdGJvdElEOiBjb25maWcuYm90SUQsXG5cdFx0XHRzdHlsZXM6IGFzc2lnbih7fSwgZGVmYXVsdFN0eWxlcywgY29uZmlnLnN0eWxlcyksXG5cdFx0XHRiYXNlVVJMOiBTREtjb25maWcuYmFzZVVSTCxcblx0XHRcdG9yaWdpbmFsQ29udGVudDogcm9vdC5pbm5lckhUTUwsXG5cdFx0XHRoYW5kbGVJbnB1dDoge1xuXHRcdFx0XHRkZWZhdWx0OiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0dHJ5SXQ6IGNvbmZpZy50cnlJdCB8fCBmYWxzZSxcblx0XHRcdHBsYXliYWNrOiBjb25maWcucGxheWJhY2sgfHwgZmFsc2UgLy9UT0RPOiByZW1vdmUgcGxheWJhY2sgd2hlbiBEYXNoYm9hcmQgY29kZSBpcyB1cGRhdGVkXG5cdFx0fTtcblx0XHRpZiAoY3VycmVudC5hY3RpdmUgPT09IHRydWUpIHtcblx0XHRcdHJlc29sdmUoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKHJvb3QpIHtcblx0XHRcdGlmIChjb25maWcuZXJyb3JIYW5kbGVyKVxuXHRcdFx0XHRldmVudHMuc3Vic2NyaWJlKCdlcnJvcicsIGNvbmZpZy5lcnJvckhhbmRsZXIsIGNvbmZpZy5lcnJvckhhbmRsZXJDb250ZXh0KTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0ZXZlbnRzLnN1YnNjcmliZSgnZXJyb3InLCBldmVudEhhbmRsZXJzLmVycm9yLmRlZmF1bHQpO1xuXHRcdFx0cmVnaXN0ZXJFdmVudHMoY29uZmlnLnRyeUl0LCBjb25maWcucGxheWJhY2spO1xuXHRcdFx0cmVnaXN0ZXJMYXlvdXRzKCk7XG5cdFx0XHQvL1RPRE86IHJlbW92ZSBpZiBwbGF5YmFjayB3aGVuIERhc2hib2FyZCBjb2RlIGlzIHVwZGF0ZWRcblx0XHRcdGlmIChjb25maWcucGxheWJhY2sgPT09IHRydWUpIHtcblx0XHRcdFx0ZGVmYXVsdFN0YXRlLmNoYXRJRCA9ICdwbGF5YmFjayc7XG5cdFx0XHRcdGV2ZW50cy5wdWJsaXNoKCdzdGFydCcsIGRlZmF1bHRTdGF0ZSk7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdH0gZWxzZSBpZiAoY29uZmlnLmJvdElEKSB7XG5cdFx0XHRcdEJvdFNES1xuXHRcdFx0XHRcdC5jb25maWd1cmUoIFNES2NvbmZpZyApXG5cdFx0XHRcdFx0LnN0YXJ0KCBjb25maWcuYm90SUQgKVxuXHRcdFx0XHRcdC50aGVuKCBmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0XHRcdGRlZmF1bHRTdGF0ZS5jaGF0SUQgPSByZXMuY2hhdElEO1xuXHRcdFx0XHRcdFx0d2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ0lCTUNoYXRDaGF0SUQnLCByZXMuY2hhdElEKTtcblx0XHRcdFx0XHRcdGV2ZW50cy5wdWJsaXNoKCdzdGFydCcsIGRlZmF1bHRTdGF0ZSk7XG5cdFx0XHRcdFx0XHRldmVudHMucHVibGlzaCgncmVjZWl2ZScsIHJlcyk7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdFx0fSlbJ2NhdGNoJ10oIGZ1bmN0aW9uKGVycikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0cmVqZWN0KGVycik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKCdCb3RJRCBpcyByZXF1aXJlZCEnKTtcblx0XHRcdFx0cmVqZWN0KHtcblx0XHRcdFx0XHRlcnJvcjogJ0JvdElEIGlzIHJlcXVpcmVkISdcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ0VsZW1lbnQgZm9yIGNoYXQgZG9lcyBub3QgZXhpc3QhJyk7XG5cdFx0XHRyZWplY3Qoe1xuXHRcdFx0XHRlcnJvcjogJ0VsZW1lbnQgZm9yIGNoYXQgZG9lcyBub3QgZXhpc3QhJ1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJMYXlvdXQobGF5b3V0LCBpbml0LCBkZWZhdWx0U2V0dXApIHtcblx0aWYgKGxheW91dCAmJiBpbml0ICYmIHR5cGVvZiBpbml0ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0aWYgKHJlZ2lzdGVyZWRMYXlvdXRzLmluZGV4T2YobGF5b3V0KSA9PT0gLTEgfHwgIWRlZmF1bHRTZXR1cCkge1xuXHRcdFx0cmVnaXN0ZXJlZExheW91dHMucHVzaChsYXlvdXQpO1xuXHRcdFx0bGF5b3V0SW5pdFtsYXlvdXRdID0gaW5pdDtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5lcnJvcigncmVnaXN0ZXJMYXlvdXQgd2FzIGNvbmZpZ3VyZWQgaW5jb3JyZWN0bHkuJyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gc2VuZChtZXNzYWdlKSB7XG5cdGlmIChtZXNzYWdlKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHRcdGlmIChjdXJyZW50LmFjdGl2ZSkge1xuXHRcdFx0ZXZlbnRzLnB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0XHRcdHRleHQ6IG1lc3NhZ2Vcblx0XHRcdH0pO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLmVycm9yKCdUaGUgbWVzc2FnZSB3YXMgZW1wdHkuJyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVjZWl2ZShtZXNzYWdlKSB7XG5cdGlmIChtZXNzYWdlKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHRcdGlmIChjdXJyZW50LmFjdGl2ZSlcblx0XHRcdGV2ZW50cy5wdWJsaXNoKCdyZWNlaXZlJywgbWVzc2FnZSk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5lcnJvcignVGhlIG1lc3NhZ2Ugd2FzIGVtcHR5LicpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHNlbmRNb2NrKG1lc3NhZ2UpIHtcblx0aWYgKG1lc3NhZ2UpIHtcblx0XHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdFx0aWYgKGN1cnJlbnQuYWN0aXZlKSB7XG5cdFx0XHRldmVudHMucHVibGlzaCgnc2VuZC1tb2NrJywge1xuXHRcdFx0XHR0ZXh0OiBtZXNzYWdlXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5lcnJvcignVGhlIG1lc3NhZ2Ugd2FzIGVtcHR5LicpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHNlbmRTaWxlbnRseShtZXNzYWdlKSB7XG5cdGlmIChtZXNzYWdlKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHRcdGlmIChjdXJyZW50LmFjdGl2ZSkge1xuXHRcdFx0ZXZlbnRzLnB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0XHRcdHRleHQ6IG1lc3NhZ2UsXG5cdFx0XHRcdHNpbGVudDogdHJ1ZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1RoZSBtZXNzYWdlIHdhcyBlbXB0eS4nKTtcblx0fVxufVxuXG5mdW5jdGlvbiBlbmFibGVDdXN0b21JbnB1dEhhbmRsZXIoY29uZmlnKSB7XG5cdGlmIChjb25maWcgJiYgY29uZmlnLmNhbGxiYWNrICYmIHR5cGVvZiBjb25maWcuY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcblx0XHRzdGF0ZS5zZXRTdGF0ZSh7XG5cdFx0XHRoYW5kbGVJbnB1dDoge1xuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZSxcblx0XHRcdFx0Y2FsbGJhY2s6IGNvbmZpZy5jYWxsYmFjayxcblx0XHRcdFx0Y29udGV4dDogY29uZmlnLmNvbnRleHRcblx0XHRcdH1cblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLmVycm9yKCdJbnZhbGlkIGNvbmZpZ3VyYXRpb24gb2YgZW5hYmxlQ3VzdG9tSW5wdXRIYW5kbGVyJyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZGlzYWJsZUN1c3RvbUlucHV0SGFuZGxlcigpIHtcblx0c3RhdGUuc2V0U3RhdGUoe1xuXHRcdGhhbmRsZUlucHV0OiB7XG5cdFx0XHRkZWZhdWx0OiB0cnVlXG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gZm9jdXNJbnB1dCgpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHRpZiAoY3VycmVudC5hY3RpdmUpXG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ2ZvY3VzLWlucHV0Jyk7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVJbnB1dCgpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHRpZiAoY3VycmVudC5hY3RpdmUpXG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ2Rpc2FibGUtaW5wdXQnKTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlSW5wdXQoKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0aWYgKGN1cnJlbnQuYWN0aXZlKVxuXHRcdGV2ZW50cy5wdWJsaXNoKCdlbmFibGUtaW5wdXQnKTtcbn1cblxuZnVuY3Rpb24gZGVidWcoKSB7XG5cdHN0YXRlLnNldFN0YXRlKHtcblx0XHRERUJVRzogdHJ1ZVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gZGVzdHJveSgpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0XHRpZiAoY3VycmVudC5yb290KSB7XG5cdFx0XHRldmVudHMucHVibGlzaCgnZGVzdHJveScpO1xuXHRcdFx0ZXZlbnRzLmRlc3Ryb3koKTsgLy9yZW1vdmUgYWxsIGV2ZW50c1xuXHRcdFx0Y3VycmVudC5yb290LmlubmVySFRNTCA9IGN1cnJlbnQub3JpZ2luYWxDb250ZW50OyAvL3Jlc3RvcmUgb3JpZ2luYWwgY29udGVudCB0byBkaXZcblx0XHRcdHN0YXRlLmRlc3Ryb3lTdGF0ZSgpO1xuXHRcdFx0cmVzb2x2ZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZWplY3QoJ0lCTUNoYXQgaGFzIG5vIGluc3RhbmNlIHRvIGRlc3Ryb3kuJyk7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gcmVzdGFydCgpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0XHRkZXN0cm95KCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdGluaXQoeyBlbDogY3VycmVudC5yb290LCBib3RJRDogY3VycmVudC5ib3RJRCwgYmFzZVVSTDogY3VycmVudC5iYXNlVVJMIH0pLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdH0pWydjYXRjaCddKGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0cmVqZWN0KGUpO1xuXHRcdFx0fSk7XG5cdFx0fSlbJ2NhdGNoJ10oZnVuY3Rpb24oZSkge1xuXHRcdFx0cmVqZWN0KGUpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHByb2ZpbGU6IHByb2ZpbGUsXG5cdGluaXQ6IGluaXQsXG5cdHJlZ2lzdGVyTGF5b3V0OiByZWdpc3RlckxheW91dCxcblx0c2VuZDogc2VuZCxcblx0cmVjZWl2ZTogcmVjZWl2ZSxcblx0c2VuZE1vY2s6IHNlbmRNb2NrLFxuXHRzZW5kU2lsZW50bHk6IHNlbmRTaWxlbnRseSxcblx0ZW5hYmxlQ3VzdG9tSW5wdXRIYW5kbGVyOiBlbmFibGVDdXN0b21JbnB1dEhhbmRsZXIsXG5cdGRpc2FibGVDdXN0b21JbnB1dEhhbmRsZXI6IGRpc2FibGVDdXN0b21JbnB1dEhhbmRsZXIsXG5cdGZvY3VzSW5wdXQ6IGZvY3VzSW5wdXQsXG5cdGRpc2FibGVJbnB1dDogZGlzYWJsZUlucHV0LFxuXHRlbmFibGVJbnB1dDogZW5hYmxlSW5wdXQsXG5cdHN1YnNjcmliZTogZXZlbnRzLnN1YnNjcmliZSxcblx0cHVibGlzaDogZXZlbnRzLnB1Ymxpc2gsXG5cdGRlYnVnOiBkZWJ1Zyxcblx0ZGVzdHJveTogZGVzdHJveSxcblx0cmVzdGFydDogcmVzdGFydCxcblx0Y3VycmVudFN1YnNjcmlwdGlvbnM6IGV2ZW50cy5jdXJyZW50U3Vic2NyaXB0aW9ucyxcblx0aGFzU3Vic2NyaXB0aW9uOiBldmVudHMuaGFzU3Vic2NyaXB0aW9uLFxuXHRjb21wbGV0ZUV2ZW50OiBldmVudHMuY29tcGxldGVFdmVudCxcblx0cGxheWJhY2s6IHBsYXliYWNrLFxuXHRzdGF0ZTogc3RhdGVcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2Jvb3RzdHJhcC5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIHNob3dMb2NhdGlvbnNMYXlvdXQgPSByZXF1aXJlKCcuL3Nob3ctbG9jYXRpb25zJyk7XG52YXIgcmVxdWVzdEdlb2xvY2F0aW9uTGF0bG9uZ0xheW91dCA9IHJlcXVpcmUoJy4vcmVxdWVzdC1nZW9sb2NhdGlvbi1sYXRsb25nJyk7XG52YXIgcmVxdWVzdEdlb2xvY2F0aW9uWmlwY29kZUxheW91dCA9IHJlcXVpcmUoJy4vcmVxdWVzdC1nZW9sb2NhdGlvbi16aXBjb2RlJyk7XG52YXIgY2hvb3NlTG9jYXRpb25UeXBlTGF5b3V0ID0gcmVxdWlyZSgnLi9jaG9vc2UtbG9jYXRpb24tdHlwZScpO1xudmFyIGNob29zZUxheW91dCA9IHJlcXVpcmUoJy4vY2hvb3NlJyk7XG52YXIgZm9ybUxheW91dCA9IHJlcXVpcmUoJy4vZm9ybScpO1xudmFyIGNyZWRpdENhcmRMYXlvdXQgPSByZXF1aXJlKCcuL2NjLXZhbGlkYXRvcicpO1xudmFyIGVycm9yTGF5b3V0ID0gcmVxdWlyZSgnLi9lcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0c2hvd0xvY2F0aW9uczogc2hvd0xvY2F0aW9uc0xheW91dCxcblx0cmVxdWVzdEdlb2xvY2F0aW9uTGF0bG9uZzogcmVxdWVzdEdlb2xvY2F0aW9uTGF0bG9uZ0xheW91dCxcblx0cmVxdWVzdEdlb2xvY2F0aW9uWmlwY29kZTogcmVxdWVzdEdlb2xvY2F0aW9uWmlwY29kZUxheW91dCxcblx0Y2hvb3NlTG9jYXRpb25UeXBlOiBjaG9vc2VMb2NhdGlvblR5cGVMYXlvdXQsXG5cdGNob29zZTogY2hvb3NlTGF5b3V0LFxuXHRjcmVkaXRDYXJkOiBjcmVkaXRDYXJkTGF5b3V0LFxuXHRmb3JtOiBmb3JtTGF5b3V0LFxuXHRlcnJvcjogZXJyb3JMYXlvdXRcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnJlcXVpcmUoJy4vc3R5bGVzLmNzcycpO1xuXG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG52YXIgc3Vic2NyaWJlID0gZXZlbnRzLnN1YnNjcmliZTtcbnZhciBwdWJsaXNoID0gZXZlbnRzLnB1Ymxpc2g7XG52YXIgc3RhdGUgPSByZXF1aXJlKCcuLi8uLi9zdGF0ZScpO1xudmFyIGdldFN0YXRlID0gc3RhdGUuZ2V0U3RhdGU7XG52YXIgc2V0U3RhdGUgPSBzdGF0ZS5zZXRTdGF0ZTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzJyk7XG5cbnZhciBmaXJzdCA9IHRydWU7XG52YXIgZGlzcGxheUxlbmd0aCA9IDM7XG52YXIgYnJlYWtwb2ludFdpZHRocyA9IFsnNzIwJywgJzY4MCcsICc2NDAnLCAnNTgwJywgJzUxMicsICc0ODAnLCAnNDIwJywgJzM2MCcsICczMjAnLCAnMjg4JywgJzI1NiddO1xudmFyIGRheXMgPSBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddO1xudmFyIHNob3dMb2NhdGlvbnMgPSB7fTtcbnZhciBsb2NhdGlvbklEcyA9IFtdO1xudmFyIGNoYXRXaWR0aCA9IDc0ODtcbnZhciBjdXJyZW50QnJlYWtwb2ludEtleSA9IDA7XG52YXIgcGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG52YXIgbnMgPSAnSUJNQ2hhdC1tYXAnO1xuXG52YXIgdGVtcGxhdGVzID0ge1xuXHRiYXNlOiByZXF1aXJlKCcuL3RlbXBsYXRlcy9iYXNlLmh0bWwnKSxcblx0Y3JlYXRlRG9tQXJyYXk6IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2NyZWF0ZS1kb20tYXJyYXkuaHRtbCcpLFxuXHRhZGRMb2NhdGlvbnNJdGVtOiByZXF1aXJlKCcuL3RlbXBsYXRlcy9hZGQtbG9jYXRpb25zLWl0ZW0uaHRtbCcpLFxuXHRhZGRMb2NhdGlvbkl0ZW06IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2FkZC1sb2NhdGlvbi1pdGVtLmh0bWwnKSxcblx0aG91cnNDbG9zZWQ6IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2hvdXJzLWNsb3NlZC5odG1sJyksXG5cdGhvdXJzT3BlbjogcmVxdWlyZSgnLi90ZW1wbGF0ZXMvaG91cnMtb3Blbi5odG1sJyksXG5cdGhvdXJzVG9kYXlPcGVuOiByZXF1aXJlKCcuL3RlbXBsYXRlcy9ob3Vycy10b2RheS1vcGVuLmh0bWwnKSxcblx0aG91cnNUb2RheUNsb3NlZDogcmVxdWlyZSgnLi90ZW1wbGF0ZXMvaG91cnMtdG9kYXktY2xvc2VkLmh0bWwnKSxcblx0aG91cnNUaW1lem9uZTogcmVxdWlyZSgnLi90ZW1wbGF0ZXMvaG91cnMtdGltZXpvbmUuaHRtbCcpXG59O1xuXG52YXIgc3RyaW5ncyA9IHtcblx0bG9jYXRpb25zOiB7XG5cdFx0bm9uZTogJ1dlIGNvdWxkIG5vdCBmaW5kIGFueSBsb2NhdGlvbnMgY2xvc2UgdG8geW91LicsXG5cdFx0c2luZ2xlOiAnSGVyZSBhcmUgdGhlIGRldGFpbHMgZm9yIHRoZSAke2xvY2F0aW9ufSBsb2NhdGlvbjonLFxuXHRcdGxpc3Q6ICdIZXJlIGFyZSB0aGUgbG9jYXRpb25zIEkgZm91bmQgY2xvc2UgdG8geW91Oidcblx0fVxufTtcblxudmFyIHNob3dMb2NhdGlvbnNMYXlvdXQgPSB7XG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHN1YnNjcmliZSgnbGF5b3V0OnNob3ctbG9jYXRpb25zJywgZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0dmFyIHNob3dMb2NhdGlvbiA9IG5ldyBTaG93TG9jYXRpb25zKGRhdGEpO1xuXHRcdFx0bG9jYXRpb25JRHMucHVzaChkYXRhLnV1aWQpO1xuXHRcdFx0c2hvd0xvY2F0aW9uc1tkYXRhLnV1aWRdID0gc2hvd0xvY2F0aW9uO1xuXHRcdH0pO1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1dGlscy5kZWJvdW5jZShmdW5jdGlvbigpIHtcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHNpemVNYXAoKTtcblx0XHRcdH0sIDUwMCk7XG5cdFx0fSwgNTAwKSk7XG5cdH1cbn07XG5cbnZhciBhbHBoYU1hcCA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRyddO1xuXG5mdW5jdGlvbiBpbml0aWFsU2l6ZSh3aWR0aCkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGJyZWFrcG9pbnRXaWR0aHMubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoKGkgPT09IGJyZWFrcG9pbnRXaWR0aHMubGVuZ3RoIC0gMSkgfHwgKGJyZWFrcG9pbnRXaWR0aHNbaV0gPj0gd2lkdGggJiYgYnJlYWtwb2ludFdpZHRoc1tpICsgMV0gPCB3aWR0aCkpIHtcblx0XHRcdGN1cnJlbnRCcmVha3BvaW50S2V5ID0gaTtcblx0XHRcdGNoYXRXaWR0aCA9IHdpZHRoO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBzYW1lU2l6ZSgpIHtcblx0dmFyIHdpZHRoID0gc2hvd0xvY2F0aW9uc1tsb2NhdGlvbklEc1swXV0uZ2V0V2lkdGgoKTtcblx0dmFyIGlzU2FtZVNpemUgPSAoYnJlYWtwb2ludFdpZHRoc1tjdXJyZW50QnJlYWtwb2ludEtleV0gPj0gd2lkdGggJiYgYnJlYWtwb2ludFdpZHRoc1tjdXJyZW50QnJlYWtwb2ludEtleSArIDFdIDwgd2lkdGgpO1xuXHRyZXR1cm4gaXNTYW1lU2l6ZTtcbn1cblxuZnVuY3Rpb24gc2l6ZU1hcCgpIHtcblx0aWYgKGxvY2F0aW9uSURzLmxlbmd0aCA+IDAgJiYgc2hvd0xvY2F0aW9uc1tsb2NhdGlvbklEc1swXV0uZ2V0V2lkdGgoKSAmJiAhc2FtZVNpemUoKSkge1xuXHRcdHZhciB3aWR0aCA9IHNob3dMb2NhdGlvbnNbbG9jYXRpb25JRHNbMF1dLmdldFdpZHRoKCk7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBicmVha3BvaW50V2lkdGhzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoKGkgPT09IGJyZWFrcG9pbnRXaWR0aHMubGVuZ3RoIC0gMSkgfHwgKGJyZWFrcG9pbnRXaWR0aHNbaV0gPj0gd2lkdGggJiYgYnJlYWtwb2ludFdpZHRoc1tpICsgMV0gPCB3aWR0aCkpIHtcblx0XHRcdFx0Y3VycmVudEJyZWFrcG9pbnRLZXkgPSBpO1xuXHRcdFx0XHRjaGF0V2lkdGggPSB3aWR0aDtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBsb2NhdGlvbklEcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGlmIChzaG93TG9jYXRpb25zW2xvY2F0aW9uSURzW2pdXS5kYXRhLmxlbmd0aCA+IDApXG5cdFx0XHRcdFx0XHRzaG93TG9jYXRpb25zW2xvY2F0aW9uSURzW2pdXS5yZURyYXdNYXAoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBob25lQXJyYXkoZWwsIGl0ZW1zKSB7XG5cdGlmIChpdGVtcykge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtQ2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdHZhciB0ZXh0ID0gdGVtcGxhdGVzLmNyZWF0ZURvbUFycmF5O1xuXHRcdFx0aXRlbUNoaWxkLmNsYXNzTmFtZSA9IG5zICsgJy1jb250YWN0LXJvdyc7XG5cdFx0XHRpdGVtQ2hpbGQuaW5uZXJIVE1MID0gdXRpbHMuY29tcGlsZSh0ZXh0LCB7XG5cdFx0XHRcdG5zOiBuc1xuXHRcdFx0fSk7XG5cdFx0XHR2YXIgdHlwZUVsID0gaXRlbUNoaWxkLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWNvbnRhY3QtdHlwZScpO1xuXHRcdFx0dmFyIGRhdGFFbCA9IGl0ZW1DaGlsZC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1jb250YWN0LWRhdGEnKTtcblx0XHRcdHR5cGVFbC50ZXh0Q29udGVudCA9IGl0ZW1zW2ldLnR5cGU7XG5cdFx0XHRkYXRhRWwudGV4dENvbnRlbnQgPSBpdGVtc1tpXS5udW1iZXI7XG5cdFx0XHRlbC5hcHBlbmRDaGlsZChpdGVtQ2hpbGQpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBmb3JtYXRBTVBNKHRpbWUpIHtcblx0dHJ5IHtcblx0XHR2YXIgc3BsaXQgPSB0aW1lLnNwbGl0KCc6Jyk7XG5cdFx0dmFyIGhvdXJzID0gc3BsaXRbMF07XG5cdFx0dmFyIG1pbnV0ZXMgPSBzcGxpdFsxXTtcblx0XHR2YXIgYW1wbSA9IGhvdXJzID49IDEyID8gJ3BtJyA6ICdhbSc7XG5cdFx0aG91cnMgPSBob3VycyAlIDEyO1xuXHRcdGhvdXJzID0gaG91cnMgPyBob3VycyA6IDEyO1xuXHRcdHJldHVybiBob3VycyArICc6JyArIG1pbnV0ZXMgKyAnICcgKyBhbXBtO1xuXHR9XG5cdGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuICctJztcblx0fVxufVxuXG5mdW5jdGlvbiBwYXJzZUFkZHJlc3MoYWRkcmVzcykge1xuXHR2YXIgYXJyID0gYWRkcmVzcy5zcGxpdCgnLCcpO1xuXHR2YXIgZmlyc3QgPSBhcnIuc2hpZnQoKTtcblx0dmFyIHRleHQgPSAnJztcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcblx0XHR0ZXh0ICs9IGFycltpXTtcblx0XHRpZiAoaSA8IChhcnIubGVuZ3RoIC0gMSkpXG5cdFx0XHR0ZXh0ICs9ICcsJztcblx0fVxuXHRyZXR1cm4ge1xuXHRcdGFkZHJlc3MxOiBmaXJzdCxcblx0XHRhZGRyZXNzMjogdGV4dFxuXHR9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb3Vycyhob3Vyc0VsLCBtb3JlSG91cnNFbCwgaG91cnMsIHRpbWV6b25lLCB0aW1lem9uZUVsKSB7XG5cdGlmIChob3Vycykge1xuXHRcdC8vIGhvdXJzXG5cdFx0dmFyIHRvZGF5ID0gbmV3IERhdGUoKS5nZXREYXkoKTtcblx0XHR2YXIgdG9kYXlzSG91cnMgPSBob3Vyc1t0b2RheV07XG5cdFx0dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0aWYgKHRvZGF5c0hvdXJzICYmIHRvZGF5c0hvdXJzLmlzT3Blbikge1xuXHRcdFx0ZWwuaW5uZXJIVE1MID0gdXRpbHMuY29tcGlsZSh0ZW1wbGF0ZXMuaG91cnNUb2RheU9wZW4sIHtcblx0XHRcdFx0bnM6IG5zLFxuXHRcdFx0XHRvcGVuOiBmb3JtYXRBTVBNKHRvZGF5c0hvdXJzLm9wZW4pLFxuXHRcdFx0XHRjbG9zZTogZm9ybWF0QU1QTSh0b2RheXNIb3Vycy5jbG9zZSlcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbC5pbm5lckhUTUwgPSB1dGlscy5jb21waWxlKHRlbXBsYXRlcy5ob3Vyc1RvZGF5Q2xvc2VkLCB7XG5cdFx0XHRcdG5zOiBuc1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGhvdXJzRWwuYXBwZW5kQ2hpbGQoZWwpO1xuXHRcdC8vIHRpbWV6b25lXG5cdFx0aWYgKHRpbWV6b25lKSB7XG5cdFx0XHR2YXIgdHpDaGlsZEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHR0ekNoaWxkRWwuaW5uZXJIVE1MID0gdXRpbHMuY29tcGlsZSh0ZW1wbGF0ZXMuaG91cnNUaW1lem9uZSwge1xuXHRcdFx0XHRuczogbnMsXG5cdFx0XHRcdHRpbWV6b25lOiB0aW1lem9uZVxuXHRcdFx0fSk7XG5cdFx0XHR0aW1lem9uZUVsLmFwcGVuZENoaWxkKHR6Q2hpbGRFbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRpbWV6b25lRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aW1lem9uZUVsKTtcblx0XHR9XG5cdFx0Ly8gbW9yZSBob3Vyc1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaG91cnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBjaGlsZEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRjaGlsZEVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBucyArICctZGF5cy1ob3VycycpO1xuXHRcdFx0aWYgKGhvdXJzW2ldICYmIGhvdXJzW2ldLmlzT3Blbikge1xuXHRcdFx0XHRjaGlsZEVsLmlubmVySFRNTCA9IHV0aWxzLmNvbXBpbGUodGVtcGxhdGVzLmhvdXJzT3Blbiwge1xuXHRcdFx0XHRcdG5zOiBucyxcblx0XHRcdFx0XHRkYXk6IGRheXNbaV0sXG5cdFx0XHRcdFx0b3BlbjogZm9ybWF0QU1QTShob3Vyc1tpXS5vcGVuKSxcblx0XHRcdFx0XHRjbG9zZTogZm9ybWF0QU1QTShob3Vyc1tpXS5jbG9zZSlcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjaGlsZEVsLmlubmVySFRNTCA9IHV0aWxzLmNvbXBpbGUodGVtcGxhdGVzLmhvdXJzQ2xvc2VkLCB7XG5cdFx0XHRcdFx0bnM6IG5zLFxuXHRcdFx0XHRcdGRheTogZGF5c1tpXVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdG1vcmVIb3Vyc0VsLmFwcGVuZENoaWxkKGNoaWxkRWwpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBkaXN0YW5jZShpdGVtKSB7XG5cdGlmICghaXRlbS5kaXN0YW5jZSlcblx0XHRyZXR1cm47XG5cdHZhciBkaXN0YW5jZUxlbmd0aCA9IChpdGVtLmRpc3RhbmNlLnRvRml4ZWQoMSkgPT09IDAuMCkgPyAwLjEgOiBpdGVtLmRpc3RhbmNlLnRvRml4ZWQoMSk7XG5cdHZhciBkaXN0YW5jZUxlbmd0aE1lYXN1cmUgPSAoaXRlbS5kaXN0YW5jZU1lYXN1cmUgPT09ICdtaWxlcycpID8gJ20nIDogJ2ttJztcblx0cmV0dXJuIGRpc3RhbmNlTGVuZ3RoICsgZGlzdGFuY2VMZW5ndGhNZWFzdXJlO1xufVxuXG5mdW5jdGlvbiBTaG93TG9jYXRpb25zKGRhdGEpIHtcblx0dGhpcy5pbml0KGRhdGEpO1xufVxuXG5TaG93TG9jYXRpb25zLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oZGF0YSkge1xuXHR0aGlzLmRhdGEgPSAoZGF0YS5tZXNzYWdlLmRhdGEgIT09IHVuZGVmaW5lZCAmJiBkYXRhLm1lc3NhZ2UuZGF0YS5sb2NhdGlvbl9kYXRhICE9PSB1bmRlZmluZWQpID8gZGF0YS5tZXNzYWdlLmRhdGEubG9jYXRpb25fZGF0YSA6IFtdO1xuXHRpZiAodGhpcy5kYXRhLmxlbmd0aCA+IDEpIHtcblx0XHRzZXRTdGF0ZSh7XG5cdFx0XHRsb2NhdGlvbl9kYXRhOiB0aGlzLmRhdGFcblx0XHR9KTtcblx0fVxuXHR0aGlzLmV2ZW50TGlzdGVuZXJzID0gW107XG5cdHRoaXMucGFyZW50RWxlbWVudCA9IGRhdGEuZWxlbWVudDtcblx0dGhpcy5sYXlvdXRFbGVtZW50ID0gZGF0YS5sYXlvdXRFbGVtZW50O1xuXHR0aGlzLm1zZ0VsZW1lbnQgPSBkYXRhLm1zZ0VsZW1lbnQ7XG5cdHN3aXRjaCAodGhpcy5kYXRhLmxlbmd0aCkge1xuXHRjYXNlIDA6XG5cdFx0dGhpcy5tc2dFbGVtZW50LnRleHRDb250ZW50ID0gc3RyaW5ncy5sb2NhdGlvbnMubm9uZTtcblx0XHRicmVhaztcblx0Y2FzZSAxOlxuXHRcdHRoaXMubXNnRWxlbWVudC50ZXh0Q29udGVudCA9IHV0aWxzLmNvbXBpbGUoc3RyaW5ncy5sb2NhdGlvbnMuc2luZ2xlLCB7IGxvY2F0aW9uOiB0aGlzLmRhdGFbMF0uYWRkcmVzcy5hZGRyZXNzIH0pO1xuXHRcdGJyZWFrO1xuXHRkZWZhdWx0OlxuXHRcdHRoaXMubXNnRWxlbWVudC50ZXh0Q29udGVudCA9IHN0cmluZ3MubG9jYXRpb25zLmxpc3Q7XG5cdH1cblxuXHRpZiAodGhpcy5kYXRhLmxlbmd0aCA+IDApIHtcblx0XHR2YXIgdGV4dCA9IHRlbXBsYXRlcy5iYXNlO1xuXHRcdHRoaXMudXVpZCA9IGRhdGEudXVpZDtcblx0XHRpZiAoZmlyc3QpIHtcblx0XHRcdGluaXRpYWxTaXplKHRoaXMuZ2V0V2lkdGgoKSk7XG5cdFx0XHRmaXJzdCA9IGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLm1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRoaXMubWFwLmlubmVySFRNTCA9IHV0aWxzLmNvbXBpbGUodGV4dCwgeyBuczogbnMgfSk7XG5cdFx0dGhpcy5tYXBFbGVtZW50ID0gdGhpcy5tYXAucXVlcnlTZWxlY3RvcignLicgKyBucyArICctaW1nJyk7XG5cdFx0dGhpcy5kYXRhRWxlbWVudCA9IHRoaXMubWFwLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWRhdGEnKTtcblx0XHR0aGlzLm1hcEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5kcmF3TG9jYXRpb25zKCkpO1xuXHRcdHRoaXMuZGF0YUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5hZGREZXRhaWxzKCkpO1xuXHRcdHRoaXMubGF5b3V0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLm1hcCk7XG5cdH1cblx0dGhpcy5zdWJzY3JpYmVSZWNlaXZlID0gc3Vic2NyaWJlKCdyZWNlaXZlJywgdGhpcy5yZW1vdmVBbGxFdmVudExpc3RlbmVycywgdGhpcyk7XG59O1xuXG5TaG93TG9jYXRpb25zLnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgd2lkdGggPSB0aGlzLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLklCTUNoYXQtd2F0c29uLWxheW91dDpsYXN0LWNoaWxkJykuY2xpZW50V2lkdGg7XG5cdHJldHVybiB3aWR0aDtcbn07XG5cblNob3dMb2NhdGlvbnMucHJvdG90eXBlLnJlRHJhd01hcCA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLm1hcEVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG5cdHRoaXMubWFwRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmRyYXdMb2NhdGlvbnMoKSk7XG59O1xuXG5TaG93TG9jYXRpb25zLnByb3RvdHlwZS5hZGREZXRhaWxzID0gZnVuY3Rpb24oKSB7XG5cdGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMSlcblx0XHRyZXR1cm4gdGhpcy5hZGRMb2NhdGlvbnMoKTtcblx0ZWxzZVxuXHRcdHJldHVybiB0aGlzLmFkZExvY2F0aW9uKCk7XG59O1xuXG5TaG93TG9jYXRpb25zLnByb3RvdHlwZS5jb252ZXJ0Q29sb3IgPSBmdW5jdGlvbihjb2xvcikge1xuXHRmdW5jdGlvbiByZ2IyaGV4KHJnYikge1xuXHRcdHJnYiA9IHJnYi5tYXRjaCgvXnJnYmE/W1xccytdP1xcKFtcXHMrXT8oXFxkKylbXFxzK10/LFtcXHMrXT8oXFxkKylbXFxzK10/LFtcXHMrXT8oXFxkKylbXFxzK10/L2kpO1xuXHRcdHJldHVybiAocmdiICYmIHJnYi5sZW5ndGggPT09IDQpID9cblx0XHQoXCIwXCIgKyBwYXJzZUludChyZ2JbMV0sMTApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpICtcblx0XHQoXCIwXCIgKyBwYXJzZUludChyZ2JbMl0sMTApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpICtcblx0XHQoXCIwXCIgKyBwYXJzZUludChyZ2JbM10sMTApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpIDogJyc7XG5cdH1cblx0aWYgKGNvbG9yLmluZGV4T2YoJyMnKSA+IC0xKVxuXHRcdHJldHVybiBjb2xvci5yZXBsYWNlKCcjJywgJycpO1xuXHRlbHNlXG5cdFx0cmV0dXJuIHJnYjJoZXgoY29sb3IpO1xufTtcblxuU2hvd0xvY2F0aW9ucy5wcm90b3R5cGUuZHJhd0xvY2F0aW9ucyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgY3VycmVudCA9IGdldFN0YXRlKCk7XG5cdHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0dmFyIHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpO1xuXHR2YXIgY29uZmlnID0ge1xuXHRcdHNpemU6IHdpZHRoICsgJ3gxODAnLFxuXHRcdHNjYWxlOiBwaXhlbFJhdGlvXG5cdH07XG5cdGlmICh0aGlzLmRhdGEubGVuZ3RoID09PSAxKVxuXHRcdGNvbmZpZy56b29tID0gMTI7XG5cdHRoaXMudXJpID0gY3VycmVudC5tYXBzU2VydmVyICsgJz8nO1xuXHR0aGlzLnVyaSArPSB1dGlscy5zZXJpYWxpemUoY29uZmlnKTtcblx0dGhpcy51cmkgKz0gJyZsb2NhdGlvbnM9Jztcblx0dmFyIGxvY2F0aW9ucyA9ICcnO1xuXHRmb3IgKHZhciBpID0gMDsgKGkgPCBkaXNwbGF5TGVuZ3RoICYmIGkgPCB0aGlzLmRhdGEubGVuZ3RoKTsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSB0aGlzLmRhdGFbaV07XG5cdFx0bG9jYXRpb25zICs9IChpID09PSAwICkgPyBpdGVtLmFkZHJlc3MubGF0ICsgJywnICsgaXRlbS5hZGRyZXNzLmxuZyA6ICcrJyArIGl0ZW0uYWRkcmVzcy5sYXQgKyAnLCcgKyBpdGVtLmFkZHJlc3MubG5nO1xuXHR9XG5cdHRoaXMudXJpICs9IGVuY29kZVVSSUNvbXBvbmVudChsb2NhdGlvbnMpO1xuXHR0aGlzLnVyaSArPSAnJmNvbG9yPScgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5jb252ZXJ0Q29sb3IoY3VycmVudC5zdHlsZXMuYWNjZW50QmFja2dyb3VuZCkpO1xuXHRpbWcuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcxMDAlJyk7XG5cdGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHRoaXMudXJpKTtcblx0cmV0dXJuIGltZztcbn07XG5cblNob3dMb2NhdGlvbnMucHJvdG90eXBlLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuY2xhc3NOYW1lID0gbnMgKyAnLWxvY2F0aW9uLWFjdGl2ZSc7XG5cdHB1Ymxpc2goJ3JlY2VpdmUnLCB7XG5cdFx0bWVzc2FnZToge1xuXHRcdFx0dGV4dDogW3V0aWxzLmNvbXBpbGUoc3RyaW5ncy5sb2NhdGlvbnMuc2luZ2xlLCB7IGxvY2F0aW9uOiBzaG93TG9jYXRpb25zW3RoaXMuZGF0YXNldC51dWlkXS5kYXRhW3RoaXMuZGF0YXNldC5pZCAtIDFdLmFkZHJlc3MuYWRkcmVzcyB9KSwgJ0lzIHRoZXJlIGFueXRoaW5nIGVsc2UgSSBjYW4gaGVscCB5b3Ugd2l0aD8nXSxcblx0XHRcdGxheW91dDoge1xuXHRcdFx0XHRuYW1lOiAnc2hvdy1sb2NhdGlvbnMnLFxuXHRcdFx0XHRpbmRleDogMFxuXHRcdFx0fSxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0LyoganNoaW50IGlnbm9yZTpzdGFydCAqL1xuXHRcdFx0XHRsb2NhdGlvbl9kYXRhOiBbc2hvd0xvY2F0aW9uc1t0aGlzLmRhdGFzZXQudXVpZF0uZGF0YVt0aGlzLmRhdGFzZXQuaWQgLSAxXV1cblx0XHRcdFx0LyoganNoaW50IGlnbm9yZTplbmQgKi9cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xufTtcblxuU2hvd0xvY2F0aW9ucy5wcm90b3R5cGUucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcblx0dmFyIGxheW91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy51dWlkICsgJyAuSUJNQ2hhdC13YXRzb24tbGF5b3V0Jyk7XG5cdGxheW91dC5jbGFzc0xpc3QuYWRkKCdJQk1DaGF0LWRpc2FibGVkLWxheW91dCcpO1xuXHR2YXIgaW5wdXRzID0gbGF5b3V0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCBidXR0b24nKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dHMubGVuZ3RoOyBpKyspXG5cdFx0aW5wdXRzW2ldLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcblx0Zm9yICh2YXIgeCA9IDA7IHggPCB0aGlzLmV2ZW50TGlzdGVuZXJzLmxlbmd0aDsgeCsrKVxuXHRcdHRoaXMuZXZlbnRMaXN0ZW5lcnNbeF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrKTtcblx0aWYgKHRoaXMuaG91cnNGdW5jdGlvbilcblx0XHR0aGlzLmhvdXJzQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ob3Vyc0Z1bmN0aW9uKTtcblx0aWYgKHRoaXMubG9jYXRpb25zRnVuY3Rpb24pXG5cdFx0dGhpcy5sb2NhdGlvbnNCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmxvY2F0aW9uc0Z1bmN0aW9uKTtcblx0dGhpcy5ldmVudExpc3RlbmVycyA9IFtdO1xuXHR0aGlzLnN1YnNjcmliZVJlY2VpdmUucmVtb3ZlKCk7XG59O1xuXG5TaG93TG9jYXRpb25zLnByb3RvdHlwZS5hZGRMb2NhdGlvbiA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR2YXIgbG9jYXRpb25EYXRhID0gZ2V0U3RhdGUoKS5sb2NhdGlvbl9kYXRhO1xuXHR2YXIgaXRlbSA9IHRoaXMuZGF0YVswXTtcblx0dmFyIGNyZWF0ZURvbSA9IGZ1bmN0aW9uKGVsKSB7XG5cdFx0dmFyIHRleHQgPSB0ZW1wbGF0ZXMuYWRkTG9jYXRpb25JdGVtO1xuXHRcdGVsLmlubmVySFRNTCA9IHV0aWxzLmNvbXBpbGUodGV4dCwgeyBuczogbnMgfSk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxpbms6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEtYWRkcmVzcy1saW5rJyksXG5cdFx0XHRsYWJlbDogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWl0ZW0tZGF0YS10aXRsZScpLFxuXHRcdFx0YWRkcmVzczogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWl0ZW0tZGF0YS1hZGRyZXNzJyksXG5cdFx0XHRhZGRyZXNzMTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuXHRcdFx0YWRkcmVzczI6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSxcblx0XHRcdHBob25lOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtaXRlbS1kYXRhLXBob25lJyksXG5cdFx0XHRlbWFpbDogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWl0ZW0tZGF0YS1lbWFpbCcpLFxuXHRcdFx0aG91cnM6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEtaG91cnMnKSxcblx0XHRcdHRpbWV6b25lOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtaXRlbS1kYXRhLXRpbWV6b25lJyksXG5cdFx0XHRwYXJlbnRFbDogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWl0ZW0tZGF0YScpLFxuXHRcdFx0aG91cnNCdXR0b246IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEtaG91cnMtYnV0dG9uJyksXG5cdFx0XHRtb3JlSG91cnM6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEtbW9yZS1ob3VycycpLFxuXHRcdFx0ZGlzdGFuY2U6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRpc3RhbmNlJyksXG5cdFx0XHRiYWNrSG9sZGVyOiBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1sb2NhdGlvbnMtaXRlbS1kYXRhLXNlY3Rpb24nKSxcblx0XHRcdGJhY2s6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1hbGwnKVxuXHRcdH07XG5cdH07XG5cblx0dmFyIGRvbSA9IGNyZWF0ZURvbShlbCk7XG5cblx0Ly8gbmFtZVxuXHRpZiAoaXRlbS5sYWJlbClcblx0XHRkb20ubGFiZWwudGV4dENvbnRlbnQgPSBpdGVtLmxhYmVsO1xuXHRlbHNlXG5cdFx0ZG9tLnBhcmVudEVsLnJlbW92ZUNoaWxkKGRvbS5sYWJlbCk7XG5cblx0Ly8gYWRkcmVzc2VzXG5cdHZhciBhZGRyZXNzZXMgPSBwYXJzZUFkZHJlc3MoaXRlbS5hZGRyZXNzLmFkZHJlc3MpO1xuXHRkb20uYWRkcmVzczEudGV4dENvbnRlbnQgPSBhZGRyZXNzZXMuYWRkcmVzczE7XG5cdGRvbS5hZGRyZXNzMi50ZXh0Q29udGVudCA9IGFkZHJlc3Nlcy5hZGRyZXNzMjtcblx0ZG9tLmFkZHJlc3MuYXBwZW5kQ2hpbGQoZG9tLmFkZHJlc3MxKTtcblx0ZG9tLmFkZHJlc3MuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG5cdGRvbS5hZGRyZXNzLmFwcGVuZENoaWxkKGRvbS5hZGRyZXNzMik7XG5cdGRvbS5saW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL21hcHMuZ29vZ2xlLmNvbS8/cT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGl0ZW0uYWRkcmVzcy5hZGRyZXNzKSk7XG5cdGRvbS5saW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuXHRkb20uZGlzdGFuY2UudGV4dENvbnRlbnQgPSBkaXN0YW5jZShpdGVtKSB8fCAnJztcblxuXHQvLyBlbWFpbFxuXHRpZiAoaXRlbS5lbWFpbCkge1xuXHRcdGNvbnN0IGxpbmtFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRsaW5rRWwuc2V0QXR0cmlidXRlKCdocmVmJywgJ21haWx0bzonICsgaXRlbS5lbWFpbCk7XG5cdFx0bGlua0VsLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuXHRcdGxpbmtFbC50ZXh0Q29udGVudCA9IGl0ZW0uZW1haWw7XG5cdFx0ZG9tLmVtYWlsLmFwcGVuZENoaWxkKGxpbmtFbCk7XG5cdH0gZWxzZSB7XG5cdFx0ZG9tLmVtYWlsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tLmVtYWlsKTtcblx0fVxuXG5cdC8vIHBob25lc1xuXHRpZiAoaXRlbS5waG9uZXMgJiYgaXRlbS5waG9uZXMubGVuZ3RoID4gMClcblx0XHRjcmVhdGVQaG9uZUFycmF5KGRvbS5waG9uZSwgaXRlbS5waG9uZXMpO1xuXHRlbHNlXG5cdFx0ZG9tLnBob25lLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tLnBob25lKTtcblxuXHQvLyBob3Vycy90aW1lem9uZVxuXHRpZiAoaXRlbS5kYXlzICYmIGl0ZW0uZGF5cy5sZW5ndGggPiAwKSB7XG5cdFx0Y3JlYXRlSG91cnMoZG9tLmhvdXJzLCBkb20ubW9yZUhvdXJzLCBpdGVtLmRheXMsIGl0ZW0uYWRkcmVzcy50aW1lem9uZSwgZG9tLnRpbWV6b25lKTtcblx0XHR0aGlzLmhvdXJzRnVuY3Rpb24gPSBmdW5jdGlvbihlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRkb20ucGFyZW50RWwucmVtb3ZlQ2hpbGQoZG9tLmhvdXJzQnV0dG9uKTtcblx0XHRcdGRvbS5tb3JlSG91cnMuc2V0QXR0cmlidXRlKCdjbGFzcycsIG5zICsgJy1sb2NhdGlvbnMtaXRlbS1kYXRhLW1vcmUtaG91cnMnKTtcblx0XHRcdHB1Ymxpc2goJ2ZvY3VzLWlucHV0Jyk7XG5cdFx0XHRwdWJsaXNoKCdzY3JvbGwtdG8tYm90dG9tJyk7XG5cdFx0fTtcblx0XHR0aGlzLmhvdXJzQnV0dG9uID0gZG9tLmhvdXJzQnV0dG9uO1xuXHRcdGRvbS5ob3Vyc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaG91cnNGdW5jdGlvbik7XG5cdH0gZWxzZSB7XG5cdFx0ZG9tLmhvdXJzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tLmhvdXJzKTtcblx0XHRkb20uaG91cnNCdXR0b24ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb20uaG91cnNCdXR0b24pO1xuXHR9XG5cblx0aWYgKGxvY2F0aW9uRGF0YSAmJiBsb2NhdGlvbkRhdGEubGVuZ3RoID4gMSkge1xuXHRcdHRoaXMubG9jYXRpb25zQnV0dG9uID0gZG9tLmJhY2s7XG5cdFx0dGhpcy5sb2NhdGlvbnNGdW5jdGlvbiA9IGZ1bmN0aW9uKGUpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHB1Ymxpc2goJ3JlY2VpdmUnLCB7XG5cdFx0XHRcdG1lc3NhZ2U6IHtcblx0XHRcdFx0XHR0ZXh0OiBbc3RyaW5ncy5sb2NhdGlvbnMubGlzdCwgJ0lzIHRoZXJlIGFueXRoaW5nIGVsc2UgSSBjYW4gaGVscCB5b3Ugd2l0aD8nXSxcblx0XHRcdFx0XHRsYXlvdXQ6IHtcblx0XHRcdFx0XHRcdG5hbWU6ICdzaG93LWxvY2F0aW9ucycsXG5cdFx0XHRcdFx0XHRpbmRleDogMFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0LyoganNoaW50IGlnbm9yZTpzdGFydCAqL1xuXHRcdFx0XHRcdFx0bG9jYXRpb25fZGF0YTogbG9jYXRpb25EYXRhXG5cdFx0XHRcdFx0XHQvKiBqc2hpbnQgaWdub3JlOmVuZCAqL1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRkb20uYmFjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubG9jYXRpb25zRnVuY3Rpb24pO1xuXHR9IGVsc2Uge1xuXHRcdGRvbS5iYWNrSG9sZGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tLmJhY2tIb2xkZXIpO1xuXHR9XG5cdGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbCk7XG5cdHJldHVybiBjb250YWluZXI7XG59O1xuU2hvd0xvY2F0aW9ucy5wcm90b3R5cGUuYWRkTG9jYXRpb25zID0gZnVuY3Rpb24oKSB7XG5cdHZhciBjdXJyZW50ID0gZ2V0U3RhdGUoKTtcblx0dmFyIGNyZWF0ZURvbSA9IGZ1bmN0aW9uKGVsLCBpLCB1dWlkKSB7XG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrKTtcblx0XHRlbC5kYXRhc2V0LnV1aWQgPSB1dWlkO1xuXHRcdGVsLmRhdGFzZXQuaWQgPSBpICsgMTtcblx0XHR2YXIgdGV4dCA9IHRlbXBsYXRlcy5hZGRMb2NhdGlvbnNJdGVtO1xuXHRcdGVsLmlubmVySFRNTCA9IHV0aWxzLmNvbXBpbGUodGV4dCwgeyBuczogbnMgfSk7XG5cdFx0dGhpcy5ldmVudExpc3RlbmVycy5wdXNoKGVsKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aWNvbjogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWl0ZW0taWNvbicpLFxuXHRcdFx0bGFiZWw6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEtdGl0bGUnKSxcblx0XHRcdGFkZHJlc3M6IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWxvY2F0aW9ucy1pdGVtLWRhdGEtYWRkcmVzcycpLFxuXHRcdFx0YWRkcmVzczE6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSxcblx0XHRcdGFkZHJlc3MyOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG5cdFx0XHRkaXN0YW5jZTogZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctbG9jYXRpb25zLWl0ZW0tZGlzdGFuY2UnKVxuXHRcdH07XG5cdH07XG5cblx0dmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cdGZvciAodmFyIGkgPSAwOyAoaSA8IGRpc3BsYXlMZW5ndGggJiYgaSA8IHRoaXMuZGF0YS5sZW5ndGgpOyBpKyspIHtcblx0XHR2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR2YXIgaXRlbSA9IHRoaXMuZGF0YVtpXTtcblx0XHR2YXIgZG9tID0gY3JlYXRlRG9tLmNhbGwodGhpcywgZWwsIGksIHRoaXMudXVpZCk7XG5cdFx0dmFyIGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGJveC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2ZvbnQtd2VpZ2h0OmJvbGQ7IGNvbG9yOicgKyBjdXJyZW50LnN0eWxlcy5hY2NlbnRUZXh0ICsgJzsgYmFja2dyb3VuZDogJyArIGN1cnJlbnQuc3R5bGVzLmFjY2VudEJhY2tncm91bmQgKyAnOyBsaW5lLWhlaWdodDogMjRweDsgaGVpZ2h0OjI0cHg7IHdpZHRoOjI0cHg7IG1hcmdpbi1sZWZ0OjhweDsnKTtcblx0XHRib3gudGV4dENvbnRlbnQgPSBhbHBoYU1hcFtpXTtcblx0XHRkb20uaWNvbi5hcHBlbmRDaGlsZChib3gpO1xuXHRcdGRvbS5sYWJlbC50ZXh0Q29udGVudCA9IGl0ZW0ubGFiZWwgfHwgJyc7XG5cdFx0dmFyIGFkZHJlc3NlcyA9IHBhcnNlQWRkcmVzcyhpdGVtLmFkZHJlc3MuYWRkcmVzcyk7XG5cdFx0ZG9tLmFkZHJlc3MxLnRleHRDb250ZW50ID0gYWRkcmVzc2VzLmFkZHJlc3MxO1xuXHRcdGRvbS5hZGRyZXNzMi50ZXh0Q29udGVudCA9IGFkZHJlc3Nlcy5hZGRyZXNzMjtcblx0XHRkb20uYWRkcmVzcy5hcHBlbmRDaGlsZChkb20uYWRkcmVzczEpO1xuXHRcdGRvbS5hZGRyZXNzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuXHRcdGRvbS5hZGRyZXNzLmFwcGVuZENoaWxkKGRvbS5hZGRyZXNzMik7XG5cdFx0ZG9tLmRpc3RhbmNlLnRleHRDb250ZW50ID0gZGlzdGFuY2UoaXRlbSkgfHwgJyc7XG5cdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKGVsKTtcblx0fVxuXHRyZXR1cm4gY29udGFpbmVyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzaG93TG9jYXRpb25zTGF5b3V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5JQk1DaGF0LW1hcCB7XFxuXFx0cGFkZGluZzogMCAwIDFlbSAwO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtaW1nIHtcXG5cXHRoZWlnaHQ6MTgwcHg7XFxufVxcblxcbi5JQk1DaGF0LW1hcC1pbWcgaW1nIHtcXG5cXHRoZWlnaHQ6MTgwcHg7XFxufVxcblxcbi5JQk1DaGF0LW1hcC1tdWx0aXBsZS1sb2NhdGlvbnMge1xcblxcdGN1cnNvcjogZGVmYXVsdDtcXG5cXHRkaXNwbGF5OiB0YWJsZTtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLW11bHRpcGxlLWxvY2F0aW9ucyAuSUJNQ2hhdC1tYXAtbG9jYXRpb25zLXJvdyB7XFxuXFx0ZGlzcGxheTp0YWJsZS1yb3c7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5JQk1DaGF0LW1hcC1tdWx0aXBsZS1sb2NhdGlvbnMgLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1jZWxsIHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0d29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtbG9jYXRpb24tYWN0aXZlIC5JQk1DaGF0LW1hcC1tdWx0aXBsZS1sb2NhdGlvbnMge1xcblxcdG9wYWNpdHk6IDE7XFxufVxcblxcbi5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS5JQk1DaGF0LW1hcC1tdWx0aXBsZS1sb2NhdGlvbnMge1xcblxcdHBhZGRpbmc6IDFlbSAwIDFlbSAwO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLklCTUNoYXQtZGlzYWJsZWQtbGF5b3V0IC5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS5JQk1DaGF0LW1hcC1tdWx0aXBsZS1sb2NhdGlvbnMge1xcblxcdGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWRhdGEtc2VjdGlvbiB7XFxuXFx0bWFyZ2luLXRvcDowLjVlbTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtIHtcXG5cXHRwYWRkaW5nOiAxZW07XFxuXFx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzUwNTA1MDtcXG59XFxuXFxuXFxuLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWljb24ge1xcblxcdHRleHQtYWxpZ246Y2VudGVyO1xcblxcdHdpZHRoOiA0MHB4O1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0tZGF0YSB7XFxuXFx0cGFkZGluZzowIDRweCAwIDRweDtcXG5cXHRmb250LXNpemU6MC45ZW07XFxufVxcbi5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1kYXRhLXRpdGxlIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRwYWRkaW5nLWJvdHRvbTowLjVlbTtcXG59XFxuLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWRhdGEtaXRlbXMge1xcblxcdGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbi5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1kYXRhLXNlY3Rpb24ge1xcblxcdHBhZGRpbmctYm90dG9tOjFlbTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWRhdGEtZW1haWwge1xcblxcdHBhZGRpbmctYm90dG9tOjFlbTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWRhdGEtcGhvbmUge1xcblxcdGRpc3BsYXk6IHRhYmxlO1xcblxcdG1heC13aWR0aDo0MDBweDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwYWRkaW5nLWJvdHRvbToxZW07XFxufVxcbi5JQk1DaGF0LW1hcC1jb250YWN0LXJvdyB7XFxuXFx0cGFkZGluZy1ib3R0b206MWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtaG91cnMtb3BlbiB7XFxuXFx0cGFkZGluZy1ib3R0b206MC41ZW07XFxufVxcblxcbi5JQk1DaGF0LW1hcC1jb250YWN0LXR5cGUge1xcblxcdGZvbnQtc3R5bGU6aXRhbGljO1xcblxcdGZvbnQtc2l6ZTowLjllbTtcXG59XFxuLklCTUNoYXQtbWFwLWNvbnRhY3QtZGF0YSB7XFxuXFxufVxcblxcbmEuSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0tZGF0YS1hZGRyZXNzLWxpbmssXFxuYS5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1kYXRhLWFkZHJlc3MtbGluazpob3ZlcixcXG5hLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWRhdGEtYWRkcmVzcy1saW5rOnZpc2l0ZWQsXFxuYS5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1kYXRhLWFkZHJlc3MtbGluazphY3RpdmUsXFxuLklCTUNoYXQtbWFwLWNvbnRhY3QtZGF0YSBhLFxcbi5JQk1DaGF0LW1hcC1jb250YWN0LWRhdGEgYTpob3ZlcixcXG4uSUJNQ2hhdC1tYXAtY29udGFjdC1kYXRhIGE6YWN0aXZlLFxcbi5JQk1DaGF0LW1hcC1jb250YWN0LWRhdGEgYTp2aXNpdGVkIHtcXG5cXHRmb250LXdlaWdodDpub3JtYWw7XFxuXFx0Zm9udC1zaXplOjAuOWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0tZGlzdGFuY2Uge1xcblxcdHdpZHRoOjY0cHg7XFxuXFx0Zm9udC1zaXplOjAuOWVtO1xcbn1cXG5cXG5idXR0b24uSUJNQ2hhdC1tYXAtbG9jYXRpb25zLWl0ZW0tZGF0YS1ob3Vycy1idXR0b24ge1xcblxcdGZvbnQtc2l6ZTowLjllbTtcXG5cXHRwYWRkaW5nOiAwIDFlbSAwIDFlbTtcXG5cXHRsaW5lLWhlaWdodDoxLjVlbTtcXG5cXHRtYXJnaW4tdG9wOjFlbTtcXG59XFxuXFxuYnV0dG9uLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1hbGwge1xcblxcdGZvbnQtc2l6ZTowLjllbTtcXG5cXHRwYWRkaW5nOiAwIDFlbSAwIDFlbTtcXG5cXHRsaW5lLWhlaWdodDoxLjVlbTtcXG59XFxuXFxuLklCTUNoYXQtbWFwLWxvY2F0aW9ucy1pdGVtLWRhdGEtbW9yZS1ob3VycyB7XFxuXFx0ZGlzcGxheTogdGFibGU7XFxufVxcblxcbi5JQk1DaGF0LW1hcC1sb2NhdGlvbnMtaXRlbS1kYXRhLW1vcmUtaG91cnMuSUJNQ2hhdC1tYXAtaGlkZGVuIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtZGF5cy1ob3VycyB7XFxuXFx0ZGlzcGxheTogdGFibGUtcm93O1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtZGF5cy1ob3Vycy1kYXksIC5JQk1DaGF0LW1hcC1kYXlzLWhvdXJzLWhvdXJzLCAuSUJNQ2hhdC1tYXAtZGF5cy1ob3Vycy1jbG9zZWQge1xcblxcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6MC43NWVtIDFlbSAwIDA7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5JQk1DaGF0LW1hcC1ob3Vycy10aW1lem9uZSB7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdGZvbnQtc2l6ZTogMC44ZW07XFxuXFx0cGFkZGluZy10b3A6IDAuNWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1tYXAtZGF5cy1ob3VycyA+IGRpdjpsYXN0LWNoaWxkIHtcXG5cXHRwYWRkaW5nOiAwLjc1ZW0gMCAwIDAgIWltcG9ydGFudDtcXG59XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYXctbG9hZGVyIS4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvc3R5bGVzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIHN0YXRlID0gcmVxdWlyZSgnLi4vc3RhdGUnKTtcblxudmFyIGV2ZW50cyA9IFtdO1xuXG5mdW5jdGlvbiBjb21wbGV0ZUV2ZW50KHJlc3BvbnNlKSB7XG5cdHN3aXRjaCAocmVzcG9uc2UpIHtcblx0Y2FzZSB0cnVlOlxuXHRcdHB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0XHRtZXNzYWdlOiAnc3VjY2VzcycsXG5cdFx0XHRzaWxlbnQ6IHRydWVcblx0XHR9KTtcblx0XHRicmVhaztcblx0Y2FzZSBmYWxzZTpcblx0XHRwdWJsaXNoKCdzZW5kJywge1xuXHRcdFx0bWVzc2FnZTogJ2ZhaWx1cmUnLFxuXHRcdFx0c2lsZW50OiB0cnVlXG5cdFx0fSk7XG5cdFx0YnJlYWs7XG5cdGRlZmF1bHQ6XG5cdFx0cHVibGlzaCgnc2VuZCcsIHtcblx0XHRcdG1lc3NhZ2U6ICdjYW5jZWwnLFxuXHRcdFx0c2lsZW50OiB0cnVlXG5cdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZGVzdHJveSgpIHtcblx0ZXZlbnRzID0gW107XG59XG5cbmZ1bmN0aW9uIHVuc3Vic2NyaWJlKGV2ZW50LCBoYW5kbGVyLCBjb250ZXh0KSB7XG5cdGlmICh0eXBlb2YgY29udGV4dCA9PT0gdW5kZWZpbmVkKVxuXHRcdGNvbnRleHQgPSBoYW5kbGVyO1xufVxuXG5mdW5jdGlvbiBjdXJyZW50U3Vic2NyaXB0aW9ucygpIHtcblx0cmV0dXJuIGV2ZW50cy5zbGljZSgwKTtcbn1cblxuZnVuY3Rpb24gaGFzU3Vic2NyaXB0aW9uKGFjdGlvbikge1xuXHR2YXIgc3Vic2NyaXB0aW9ucyA9IGN1cnJlbnRTdWJzY3JpcHRpb25zKCk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic2NyaXB0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBzdWJzY3JpcHRpb24gPSBzdWJzY3JpcHRpb25zW2ldO1xuXHRcdGlmIChzdWJzY3JpcHRpb24gJiYgc3Vic2NyaXB0aW9uLmV2ZW50ID09PSBhY3Rpb24pXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHN1YnNjcmliZShldmVudCwgaGFuZGxlciwgY29udGV4dCkge1xuXHRpZiAodHlwZW9mIGNvbnRleHQgPT09IHVuZGVmaW5lZClcblx0XHRjb250ZXh0ID0gaGFuZGxlcjtcblx0dmFyIGluZGV4ID0gZXZlbnRzLnB1c2goeyBldmVudDogZXZlbnQsIGhhbmRsZXI6IGhhbmRsZXIuYmluZChjb250ZXh0KSB9KSAtIDE7XG5cdHJldHVybiB7XG5cdFx0cmVtb3ZlOiBmdW5jdGlvbigpIHtcblx0XHRcdGRlbGV0ZSBldmVudHNbaW5kZXhdO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gcHVibGlzaChldmVudCwgZGF0YSwgY2IpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHR2YXIgd2FzU3Vic2NyaXB0aW9uID0gZmFsc2U7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKGV2ZW50c1tpXSAmJiBldmVudHNbaV0uZXZlbnQgJiYgZXZlbnRzW2ldLmV2ZW50ID09PSBldmVudCkge1xuXHRcdFx0aWYgKGN1cnJlbnQuREVCVUcpIHtcblx0XHRcdFx0d2FzU3Vic2NyaXB0aW9uID0gdHJ1ZTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ1N1YnNjcmlwdGlvbiB0byAnICsgZXZlbnQgKyAnIHdhcyBjYWxsZWQ6ICcsIGRhdGEpO1xuXHRcdFx0fVxuXHRcdFx0ZXZlbnRzW2ldLmhhbmRsZXIuY2FsbCh1bmRlZmluZWQsIGRhdGEsIGNiKTtcblx0XHR9XG5cdH1cblx0aWYgKGN1cnJlbnQuREVCVUcgJiYgZXZlbnQuaW5kZXhPZignbGF5b3V0JykgPT0gLTEgJiYgIXdhc1N1YnNjcmlwdGlvbilcblx0XHRjb25zb2xlLndhcm4oJ05vdGhpbmcgaXMgc3Vic2NyaWJlZCB0byAnICsgZXZlbnQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0ZGVzdHJveTogZGVzdHJveSxcblx0dW5zdWJzY3JpYmU6IHVuc3Vic2NyaWJlLFxuXHRjdXJyZW50U3Vic2NyaXB0aW9uczogY3VycmVudFN1YnNjcmlwdGlvbnMsXG5cdGhhc1N1YnNjcmlwdGlvbjogaGFzU3Vic2NyaXB0aW9uLFxuXHRzdWJzY3JpYmU6IHN1YnNjcmliZSxcblx0cHVibGlzaDogcHVibGlzaCxcblx0Y29tcGxldGVFdmVudDogY29tcGxldGVFdmVudFxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgc3RhdGVzID0gW107XG52YXIgc3RhdGUgPSB7fTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdsb2Rhc2gvYXNzaWduJyk7XG5cbmZ1bmN0aW9uIGdldCgpIHtcblx0cmV0dXJuIHN0YXRlO1xufVxuZnVuY3Rpb24gZGVzdHJveSgpIHtcblx0c3RhdGUgPSB7fTtcblx0c2V0KHt9KTtcbn1cblxuZnVuY3Rpb24gc2V0KHVwZGF0ZWQpIHtcblx0c3RhdGUgPSBhc3NpZ24oe30sIHN0YXRlLCB1cGRhdGVkKTtcblx0aWYgKHN0YXRlLkRFQlVHKSB7XG5cdFx0c3RhdGVzLnB1c2goc3RhdGUpO1xuXHRcdGNvbnNvbGUubG9nKCdTVEFURSBISVNUT1JZOiAnLCBzdGF0ZXMpO1xuXHRcdGNvbnNvbGUubG9nKCdORVcgU1RBVEU6ICcsIHN0YXRlKTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9e1xuXHRnZXQ6IGdldCxcblx0c2V0OiBzZXQsXG5cdGRlc3Ryb3k6IGRlc3Ryb3ksXG5cdGdldFN0YXRlOiBnZXQsXG5cdHNldFN0YXRlOiBzZXQsXG5cdGRlc3Ryb3lTdGF0ZTogZGVzdHJveVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3RhdGUvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYXNzaWduVmFsdWUnKSxcbiAgICBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGNyZWF0ZUFzc2lnbmVyID0gcmVxdWlyZSgnLi9fY3JlYXRlQXNzaWduZXInKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKiogRGV0ZWN0IGlmIHByb3BlcnRpZXMgc2hhZG93aW5nIHRob3NlIG9uIGBPYmplY3QucHJvdG90eXBlYCBhcmUgbm9uLWVudW1lcmFibGUuICovXG52YXIgbm9uRW51bVNoYWRvd3MgPSAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7ICd2YWx1ZU9mJzogMSB9LCAndmFsdWVPZicpO1xuXG4vKipcbiAqIEFzc2lnbnMgb3duIGVudW1lcmFibGUgc3RyaW5nIGtleWVkIHByb3BlcnRpZXMgb2Ygc291cmNlIG9iamVjdHMgdG8gdGhlXG4gKiBkZXN0aW5hdGlvbiBvYmplY3QuIFNvdXJjZSBvYmplY3RzIGFyZSBhcHBsaWVkIGZyb20gbGVmdCB0byByaWdodC5cbiAqIFN1YnNlcXVlbnQgc291cmNlcyBvdmVyd3JpdGUgcHJvcGVydHkgYXNzaWdubWVudHMgb2YgcHJldmlvdXMgc291cmNlcy5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgbXV0YXRlcyBgb2JqZWN0YCBhbmQgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BPYmplY3QuYXNzaWduYF0oaHR0cHM6Ly9tZG4uaW8vT2JqZWN0L2Fzc2lnbikuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEwLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7Li4uT2JqZWN0fSBbc291cmNlc10gVGhlIHNvdXJjZSBvYmplY3RzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqIEBzZWUgXy5hc3NpZ25JblxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiB9XG4gKlxuICogZnVuY3Rpb24gQmFyKCkge1xuICogICB0aGlzLmMgPSAzO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYiA9IDI7XG4gKiBCYXIucHJvdG90eXBlLmQgPSA0O1xuICpcbiAqIF8uYXNzaWduKHsgJ2EnOiAwIH0sIG5ldyBGb28sIG5ldyBCYXIpO1xuICogLy8gPT4geyAnYSc6IDEsICdjJzogMyB9XG4gKi9cbnZhciBhc3NpZ24gPSBjcmVhdGVBc3NpZ25lcihmdW5jdGlvbihvYmplY3QsIHNvdXJjZSkge1xuICBpZiAobm9uRW51bVNoYWRvd3MgfHwgaXNQcm90b3R5cGUoc291cmNlKSB8fCBpc0FycmF5TGlrZShzb3VyY2UpKSB7XG4gICAgY29weU9iamVjdChzb3VyY2UsIGtleXMoc291cmNlKSwgb2JqZWN0KTtcbiAgICByZXR1cm47XG4gIH1cbiAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9hc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEFzc2lnbnMgYHZhbHVlYCB0byBga2V5YCBvZiBgb2JqZWN0YCBpZiB0aGUgZXhpc3RpbmcgdmFsdWUgaXMgbm90IGVxdWl2YWxlbnRcbiAqIHVzaW5nIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldO1xuICBpZiAoIShoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBlcShvYmpWYWx1ZSwgdmFsdWUpKSB8fFxuICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduVmFsdWU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2Fzc2lnblZhbHVlLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2VxLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyk7XG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3Qoc291cmNlLCBwcm9wcywgb2JqZWN0LCBjdXN0b21pemVyKSB7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkID8gc291cmNlW2tleV0gOiBuZXdWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5T2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19jb3B5T2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBiYXNlUmVzdCA9IHJlcXVpcmUoJy4vX2Jhc2VSZXN0JyksXG4gICAgaXNJdGVyYXRlZUNhbGwgPSByZXF1aXJlKCcuL19pc0l0ZXJhdGVlQ2FsbCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiBsaWtlIGBfLmFzc2lnbmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFzc2lnbmVyIFRoZSBmdW5jdGlvbiB0byBhc3NpZ24gdmFsdWVzLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYXNzaWduZXIgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFzc2lnbmVyKGFzc2lnbmVyKSB7XG4gIHJldHVybiBiYXNlUmVzdChmdW5jdGlvbihvYmplY3QsIHNvdXJjZXMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gc291cmNlcy5sZW5ndGgsXG4gICAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPiAxID8gc291cmNlc1tsZW5ndGggLSAxXSA6IHVuZGVmaW5lZCxcbiAgICAgICAgZ3VhcmQgPSBsZW5ndGggPiAyID8gc291cmNlc1syXSA6IHVuZGVmaW5lZDtcblxuICAgIGN1c3RvbWl6ZXIgPSAoYXNzaWduZXIubGVuZ3RoID4gMyAmJiB0eXBlb2YgY3VzdG9taXplciA9PSAnZnVuY3Rpb24nKVxuICAgICAgPyAobGVuZ3RoLS0sIGN1c3RvbWl6ZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChndWFyZCAmJiBpc0l0ZXJhdGVlQ2FsbChzb3VyY2VzWzBdLCBzb3VyY2VzWzFdLCBndWFyZCkpIHtcbiAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPCAzID8gdW5kZWZpbmVkIDogY3VzdG9taXplcjtcbiAgICAgIGxlbmd0aCA9IDE7XG4gICAgfVxuICAgIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICB2YXIgc291cmNlID0gc291cmNlc1tpbmRleF07XG4gICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIGFzc2lnbmVyKG9iamVjdCwgc291cmNlLCBpbmRleCwgY3VzdG9taXplcik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUFzc2lnbmVyO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19jcmVhdGVBc3NpZ25lci5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYXBwbHkgPSByZXF1aXJlKCcuL19hcHBseScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucmVzdGAgd2hpY2ggZG9lc24ndCB2YWxpZGF0ZSBvciBjb2VyY2UgYXJndW1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VSZXN0KGZ1bmMsIHN0YXJ0KSB7XG4gIHN0YXJ0ID0gbmF0aXZlTWF4KHN0YXJ0ID09PSB1bmRlZmluZWQgPyAoZnVuYy5sZW5ndGggLSAxKSA6IHN0YXJ0LCAwKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBuYXRpdmVNYXgoYXJncy5sZW5ndGggLSBzdGFydCwgMCksXG4gICAgICAgIGFycmF5ID0gQXJyYXkobGVuZ3RoKTtcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBhcnJheVtpbmRleF0gPSBhcmdzW3N0YXJ0ICsgaW5kZXhdO1xuICAgIH1cbiAgICBpbmRleCA9IC0xO1xuICAgIHZhciBvdGhlckFyZ3MgPSBBcnJheShzdGFydCArIDEpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgc3RhcnQpIHtcbiAgICAgIG90aGVyQXJnc1tpbmRleF0gPSBhcmdzW2luZGV4XTtcbiAgICB9XG4gICAgb3RoZXJBcmdzW3N0YXJ0XSA9IGFycmF5O1xuICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VSZXN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19iYXNlUmVzdC5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEEgZmFzdGVyIGFsdGVybmF0aXZlIHRvIGBGdW5jdGlvbiNhcHBseWAsIHRoaXMgZnVuY3Rpb24gaW52b2tlcyBgZnVuY2BcbiAqIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIGB0aGlzQXJnYCBhbmQgdGhlIGFyZ3VtZW50cyBvZiBgYXJnc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGludm9rZS5cbiAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHtBcnJheX0gYXJncyBUaGUgYXJndW1lbnRzIHRvIGludm9rZSBgZnVuY2Agd2l0aC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXN1bHQgb2YgYGZ1bmNgLlxuICovXG5mdW5jdGlvbiBhcHBseShmdW5jLCB0aGlzQXJnLCBhcmdzKSB7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZyk7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXBwbHk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2FwcGx5LmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSB2YWx1ZSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gaW5kZXggVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBpbmRleCBvciBrZXkgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IG9iamVjdCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIG9iamVjdCBhcmd1bWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0l0ZXJhdGVlQ2FsbCh2YWx1ZSwgaW5kZXgsIG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgaW5kZXg7XG4gIGlmICh0eXBlID09ICdudW1iZXInXG4gICAgICAgID8gKGlzQXJyYXlMaWtlKG9iamVjdCkgJiYgaXNJbmRleChpbmRleCwgb2JqZWN0Lmxlbmd0aCkpXG4gICAgICAgIDogKHR5cGUgPT0gJ3N0cmluZycgJiYgaW5kZXggaW4gb2JqZWN0KVxuICAgICAgKSB7XG4gICAgcmV0dXJuIGVxKG9iamVjdFtpbmRleF0sIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJdGVyYXRlZUNhbGw7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2lzSXRlcmF0ZWVDYWxsLmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDgtOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheSBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gaXNPYmplY3QodmFsdWUpID8gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc0Z1bmN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzT2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc0xlbmd0aC5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJlxuICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19pc0luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Byb3RvdHlwZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXMgPSByZXF1aXJlKCcuL19iYXNlS2V5cycpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2tleXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGJhc2VUaW1lcyA9IHJlcXVpcmUoJy4vX2Jhc2VUaW1lcycpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgLy8gU2FmYXJpIDguMSBtYWtlcyBgYXJndW1lbnRzLmNhbGxlZWAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgLy8gU2FmYXJpIDkgbWFrZXMgYGFyZ3VtZW50cy5sZW5ndGhgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIHZhciByZXN1bHQgPSAoaXNBcnJheSh2YWx1ZSkgfHwgaXNBcmd1bWVudHModmFsdWUpKVxuICAgID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKVxuICAgIDogW107XG5cbiAgdmFyIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGgsXG4gICAgICBza2lwSW5kZXhlcyA9ICEhbGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKGtleSA9PSAnbGVuZ3RoJyB8fCBpc0luZGV4KGtleSwgbGVuZ3RoKSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TGlrZUtleXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVGltZXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNBcnJheUxpa2VPYmplY3QgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuICAvLyBTYWZhcmkgOC4xIG1ha2VzIGBhcmd1bWVudHMuY2FsbGVlYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICByZXR1cm4gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICghcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpIHx8IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IGFyZ3NUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzQXJndW1lbnRzLmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2VPYmplY3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaXNBcnJheUxpa2VPYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzQXJyYXkuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2Jhc2VLZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5cztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fbmF0aXZlS2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19vdmVyQXJnLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIHN0YXRlID0gcmVxdWlyZSgnLi4vc3RhdGUnKTtcbnZhciB3cml0ZU1lc3NhZ2UgPSByZXF1aXJlKCcuL3dyaXRlTWVzc2FnZScpO1xuXG5mdW5jdGlvbiBfcmVuZGVyKGVsLCBzdGF0ZSkge1xuXHRlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0lCTUNoYXQtaWJtLXNwaW5uZXIgSUJNQ2hhdC1pbnB1dC1sb2FkaW5nIElCTUNoYXQtJyArIHN0YXRlICsgJy1zcGluJyk7XG59XG5cbnZhciBzcGlubmVyID0ge1xuXHRzaG93OiBmdW5jdGlvbihlbCkge1xuXHRcdF9yZW5kZXIoZWwsICdpbml0Jyk7XG5cdH0sXG5cdGhpZGU6IGZ1bmN0aW9uKGVsKSB7XG5cdFx0X3JlbmRlcihlbCwgJ2VuZCcpO1xuXHR9XG59O1xuXG5mdW5jdGlvbiBfZ2V0U3R5bGVzKGN1cnJlbnQpIHtcblx0dmFyIGNvbnRhaW5lckNsYXNzID0gXCIuY2hhdElELVwiICsgY3VycmVudC5jaGF0SUQ7XG5cdHZhciBzdHlsZXMgPSBjb250YWluZXJDbGFzcyArIFwiIC5JQk1DaGF0LWRlZmF1bHQtY29sb3JzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IFwiICsgY3VycmVudC5zdHlsZXMuYmFja2dyb3VuZCArIFwiO1xcbiAgY29sb3I6IFwiICsgY3VycmVudC5zdHlsZXMudGV4dCArIFwiO1xcbn1cXG5cIiArXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lckNsYXNzICsgXCIgLklCTUNoYXQtc2Vjb25kYXJ5LWNvbG9ycyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiArIGN1cnJlbnQuc3R5bGVzLnNlY29uZGFyeUJhY2tncm91bmQgKyBcIjtcXG4gIGNvbG9yOiBcIiArIGN1cnJlbnQuc3R5bGVzLnNlY29uZGFyeVRleHQgKyBcIjtcXG59XFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRjb250YWluZXJDbGFzcyArIFwiIC5JQk1DaGF0LWFjY2VudC1jb2xvcnMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogXCIgKyBjdXJyZW50LnN0eWxlcy5hY2NlbnRCYWNrZ3JvdW5kICsgXCI7XFxuICBjb2xvcjogXCIgKyBjdXJyZW50LnN0eWxlcy5hY2NlbnRUZXh0ICsgXCI7XFxufVxcblwiICtcblx0XHRcdFx0XHRcdFx0Y29udGFpbmVyQ2xhc3MgKyBcIiAuSUJNQ2hhdC1lcnJvci1jb2xvcnMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogXCIgKyBjdXJyZW50LnN0eWxlcy5lcnJvckJhY2tncm91bmQgKyBcIjtcXG4gIGNvbG9yOiBcIiArIGN1cnJlbnQuc3R5bGVzLmVycm9yVGV4dCArIFwiO1xcbn1cXG5cIiArXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lckNsYXNzICsgXCIgLklCTUNoYXQtaW5wdXQtY29sb3JzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IFwiICsgY3VycmVudC5zdHlsZXMuaW5wdXRCYWNrZ3JvdW5kICsgXCI7XFxuICBjb2xvcjogXCIgKyBjdXJyZW50LnN0eWxlcy5pbnB1dFRleHQgKyBcIjtcXG59XFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRjb250YWluZXJDbGFzcyArIFwiIC5JQk1DaGF0LXdhdHNvbi1tZXNzYWdlLXRoZW1lIHtcXG5cXHRib3JkZXItbGVmdDogM3B4IHNvbGlkIFwiICsgY3VycmVudC5zdHlsZXMuYWNjZW50QmFja2dyb3VuZCArIFwiO1xcbn1cXG5cIiArXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lckNsYXNzICsgXCIgYSxcXG5cIiArXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lckNsYXNzICsgXCIgYTpob3ZlcixcXG5cIiArXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lckNsYXNzICsgXCIgYTp2aXNpdGVkLFxcblwiICtcblx0XHRcdFx0XHRcdFx0Y29udGFpbmVyQ2xhc3MgKyBcIiBhOmFjdGl2ZSB7XFxuXFx0Y29sb3I6IFwiICsgY3VycmVudC5zdHlsZXMubGluayArIFwiO1xcbn1cXG5cIiArXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lckNsYXNzICsgXCIgLklCTUNoYXQtY2hhdC10ZXh0Ym94LXRoZW1lIHtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBcIiArIGN1cnJlbnQuc3R5bGVzLnRleHQgKyBcIjtcXG59XFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRjb250YWluZXJDbGFzcyArIFwiIC5JQk1DaGF0LWNoYXQtdGV4dGJveC10aGVtZTpmb2N1cyB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggXCIgKyBjdXJyZW50LnN0eWxlcy5hY2NlbnRCYWNrZ3JvdW5kICsgXCI7XFxufVxcblwiICtcblx0XHRcdFx0XHRcdFx0Y29udGFpbmVyQ2xhc3MgKyBcIiAuSUJNQ2hhdC1pYm0tc3Bpbm5lciB7XFxuXFx0c3Ryb2tlOiBcIiArIGN1cnJlbnQuc3R5bGVzLmFjY2VudEJhY2tncm91bmQgKyBcIjtcXG59XCI7XG5cdHJldHVybiBzdHlsZXM7XG59XG5cblxuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG5cdHZhciB0aW1lb3V0O1xuXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuXHRcdHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGltZW91dCA9IG51bGw7XG5cdFx0XHRpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0XHR9O1xuXHRcdHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG5cdFx0aWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZShvYmopIHtcblx0Y29uc3Qgc3RyID0gW107XG5cdGZvciAodmFyIHAgaW4gb2JqKSB7XG5cdFx0aWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSlcblx0XHRcdHN0ci5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChwKSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChvYmpbcF0pKTtcblx0fVxuXHRyZXR1cm4gc3RyLmpvaW4oJyYnKTtcbn1cblxuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcblx0aWYgKG9wdGlvbnMgJiYgT2JqZWN0LmtleXMob3B0aW9ucykubGVuZ3RoID4gMCkge1xuXHRcdE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG5cdFx0XHRzdHIgPSBzdHIuc3BsaXQoJyR7JyArIGtleSArICd9Jykuam9pbihvcHRpb25zW2tleV0pO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiBzdHI7XG59XG5cbmZ1bmN0aW9uIGdldFVVSUQoKSB7XG5cdHZhciBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdGlmICggd2luZG93LnBlcmZvcm1hbmNlICYmIHR5cGVvZiB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID09PSAnZnVuY3Rpb24nIClcblx0XHRkICs9IHBlcmZvcm1hbmNlLm5vdygpO1xuXHRyZXR1cm4gJ0lCTUNoYXQtJyArICgneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKGMpIHtcblx0XHR2YXIgciA9IChkICsgTWF0aC5yYW5kb20oKSoxNiklMTYgfCAwO1xuXHRcdGQgPSBNYXRoLmZsb29yKGQvMTYpO1xuXHRcdHJldHVybiAoKCBjID09ICd4JyA/IHIgOiAociYweDN8MHg4KSkudG9TdHJpbmcoMTYpKTtcblx0fSkpO1xufVxuXG5mdW5jdGlvbiBfYXR0YWNoU3R5bGVzVG9ET00oc3R5bGVzKSB7XG5cdHZhciBjc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXHRjc3MudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0aWYgKGNzcy5zdHlsZVNoZWV0KVxuXHRcdGNzcy5zdHlsZVNoZWV0LmNzc1RleHQgPSBzdHlsZXM7XG5cdGVsc2Vcblx0XHRjc3MuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3R5bGVzKSk7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChjc3MpO1xufVxuXG5mdW5jdGlvbiBhdHRhY2hQbGF5YmFja1N0eWxlcyhjaGF0SUQpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpW2NoYXRJRF07XG5cdHZhciBzdHlsZXMgPSBfZ2V0U3R5bGVzKGN1cnJlbnQpO1xuXHRfYXR0YWNoU3R5bGVzVG9ET00oc3R5bGVzKTtcbn1cblxuZnVuY3Rpb24gYXR0YWNoU3R5bGVzKCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdHZhciBzdHlsZXMgPSBfZ2V0U3R5bGVzKGN1cnJlbnQpO1xuXHRfYXR0YWNoU3R5bGVzVG9ET00oc3R5bGVzKTtcbn1cblxuZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG5cdHZhciB0aGF0Q2xhc3MgPSBcIiBcIiArIGNsYXNzTmFtZSArIFwiIFwiO1xuXHRyZXR1cm4gKCAoXCIgXCIgKyBlbGVtZW50LmNsYXNzTmFtZSArIFwiIFwiKS5yZXBsYWNlKC9bXFxuXFx0XS9nLCBcIiBcIikuaW5kZXhPZih0aGF0Q2xhc3MpID4gLTEgKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGRlYm91bmNlOiBkZWJvdW5jZSxcblx0c2VyaWFsaXplOiBzZXJpYWxpemUsXG5cdGhhc0NsYXNzOiBoYXNDbGFzcyxcblx0Z2V0VVVJRDogZ2V0VVVJRCxcblx0YXR0YWNoU3R5bGVzOiBhdHRhY2hTdHlsZXMsXG5cdGF0dGFjaFBsYXliYWNrU3R5bGVzOiBhdHRhY2hQbGF5YmFja1N0eWxlcyxcblx0c3Bpbm5lcjogc3Bpbm5lcixcblx0Y29tcGlsZTogY29tcGlsZSxcblx0d3JpdGVNZXNzYWdlOiB3cml0ZU1lc3NhZ2Vcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3V0aWxzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBQcm9taXNlID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xuXG5mdW5jdGlvbiB3cml0ZU1lc3NhZ2UoZWwsIHRleHQpIHtcblx0bmV3IFBhcnNlQ29udGVudChlbCwgdGV4dCk7XG59XG5cbmZ1bmN0aW9uIFBhcnNlQ29udGVudChlbCwgdGV4dCkge1xuXHR0aGlzLmluaXQoZWwsIHRleHQpO1xufVxuXG5mdW5jdGlvbiB2YWxpZExpbmsobGluaykge1xuXHRpZiAobGluay5zdGFydHNXaXRoKCdodHRwOi8vJykgfHwgbGluay5zdGFydHNXaXRoKCdodHRwczovLycpKVxuXHRcdHJldHVybiBsaW5rO1xuXHRlbHNlXG5cdFx0cmV0dXJuICdodHRwOi8vJyArIGxpbms7XG59XG5cblBhcnNlQ29udGVudC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKGVsLCB0ZXh0KSB7XG5cdGlmICh0ZXh0KSB7XG5cdFx0dmFyIGNscyA9IHRoaXM7XG5cdFx0dmFyIGNvbnRlbnQgPSBbXG5cdFx0XHR7XG5cdFx0XHRcdHR5cGU6ICdzcGFuJyxcblx0XHRcdFx0Y29udGVudDogdGV4dFxuXHRcdFx0fVxuXHRcdF07XG5cdFx0dGhpcy5hZGRMaW5lRW5kaW5ncyhjb250ZW50KVxuXHRcdFx0LnRoZW4oY2xzLmFkZFVybHMpXG5cdFx0XHQudGhlbihjbHMuYWRkRW1haWxzKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oY29udGVudCkge1xuXHRcdFx0XHRjbHMud3JpdGVNZXNzYWdlKGVsLCBjb250ZW50KTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGUpO1xuXHRcdFx0fSk7XG5cdH1cbn07XG5cblBhcnNlQ29udGVudC5wcm90b3R5cGUud3JpdGVNZXNzYWdlID0gZnVuY3Rpb24oZWwsIGNvbnRlbnQpIHtcblx0Y29udGVudC5tYXAoZnVuY3Rpb24oaXRlbSkge1xuXHRcdHZhciBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdGVtLnR5cGUpO1xuXHRcdGlmIChpdGVtLmNvbnRlbnQpXG5cdFx0XHRzLnRleHRDb250ZW50ID0gaXRlbS5jb250ZW50O1xuXHRcdGlmIChpdGVtLmF0dHJpYnV0ZXMpIHtcblx0XHRcdE9iamVjdC5rZXlzKGl0ZW0uYXR0cmlidXRlcykubWFwKGZ1bmN0aW9uKGtleSkge1xuXHRcdFx0XHRzLnNldEF0dHJpYnV0ZShrZXksIGl0ZW0uYXR0cmlidXRlc1trZXldKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRlbC5hcHBlbmRDaGlsZChzKTtcblx0fSk7XG59O1xuXG5QYXJzZUNvbnRlbnQucHJvdG90eXBlLmFkZExpbmVFbmRpbmdzID0gZnVuY3Rpb24oY29udGVudCkge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0dHJ5IHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gW107XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNvbnRlbnQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIGFyciA9IGNvbnRlbnRbaV0uY29udGVudC5zcGxpdCgnXFxuJyk7XG5cdFx0XHRcdGFyci5tYXAoZnVuY3Rpb24odmFsdWUsIGluZGV4KSB7XG5cdFx0XHRcdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRuZXdDb250ZW50LnB1c2goe1xuXHRcdFx0XHRcdFx0XHRjb250ZW50OiB2YWx1ZSxcblx0XHRcdFx0XHRcdFx0dHlwZTogJ3NwYW4nXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGFyci5sZW5ndGggIT0gaW5kZXggKyAxKSB7XG5cdFx0XHRcdFx0XHRuZXdDb250ZW50LnB1c2goe1xuXHRcdFx0XHRcdFx0XHR0eXBlOiAnYnInXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0cmVzb2x2ZShuZXdDb250ZW50KTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZWplY3QoZSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cblBhcnNlQ29udGVudC5wcm90b3R5cGUuYWRkVXJscyA9IGZ1bmN0aW9uKGNvbnRlbnQpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdHRyeSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IFtdO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjb250ZW50Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChjb250ZW50W2ldLmNvbnRlbnQpIHtcblx0XHRcdFx0XHR2YXIgZXhwID0gLygoKGh0dHBzPzpcXC9cXC8pfCh3d3dcXC4pKVteXFxzXSspL2dpO1xuXHRcdFx0XHRcdHZhciBsaW5rZWQgPSBjb250ZW50W2ldLmNvbnRlbnQucmVwbGFjZShleHAsJ3x8fCQxfHx8Jyk7XG5cdFx0XHRcdFx0dmFyIGFyciA9IGxpbmtlZC5zcGxpdCgnfHx8Jyk7XG5cdFx0XHRcdFx0YXJyLm1hcChmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0XHRcdFx0dmFyIG5ld3RleHQgPSB2YWx1ZS5yZXBsYWNlKGV4cCwgJzxhIGhyZWY9XCIkMVwiIHRhcmdldD1cIl9ibGFua1wiPiQxPC9hPicpO1xuXHRcdFx0XHRcdFx0aWYgKG5ld3RleHQgPT09IHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRcdG5ld0NvbnRlbnQucHVzaCh7XG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogdmFsdWUsXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogY29udGVudFtpXS50eXBlLFxuXHRcdFx0XHRcdFx0XHRcdGF0dHJpYnV0ZXM6IGNvbnRlbnRbaV0uYXR0cmlidXRlc1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdG5ld0NvbnRlbnQucHVzaCh7XG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogdmFsdWUsXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2EnLFxuXHRcdFx0XHRcdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdGhyZWY6IHZhbGlkTGluayh2YWx1ZSksXG5cdFx0XHRcdFx0XHRcdFx0XHR0YXJnZXQ6ICdfYmxhbmsnXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRuZXdDb250ZW50LnB1c2goe1xuXHRcdFx0XHRcdFx0dHlwZTogY29udGVudFtpXS50eXBlLFxuXHRcdFx0XHRcdFx0Y29udGVudDogY29udGVudFtpXS5jb250ZW50LFxuXHRcdFx0XHRcdFx0YXR0cmlidXRlczogY29udGVudFtpXS5hdHRyaWJ1dGVzXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJlc29sdmUobmV3Q29udGVudCk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmVqZWN0KGUpO1xuXHRcdH1cblx0fSk7XG59O1xuXG5QYXJzZUNvbnRlbnQucHJvdG90eXBlLmFkZEVtYWlscyA9IGZ1bmN0aW9uKGNvbnRlbnQpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdHRyeSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IFtdO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjb250ZW50Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChjb250ZW50W2ldLmNvbnRlbnQpIHtcblx0XHRcdFx0XHR2YXIgZXhwID0gLyhbYS16QS1aMC05Ll8tXStAW2EtekEtWjAtOS5fLV0rXFwuW2EtekEtWjAtOS5fLV0rKS9naTtcblx0XHRcdFx0XHR2YXIgbGlua2VkID0gY29udGVudFtpXS5jb250ZW50LnJlcGxhY2UoZXhwLCd8fHwkMXx8fCcpO1xuXHRcdFx0XHRcdHZhciBhcnIgPSBsaW5rZWQuc3BsaXQoJ3x8fCcpO1xuXHRcdFx0XHRcdGFyci5tYXAoZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0XHRcdHZhciBuZXd0ZXh0ID0gdmFsdWUucmVwbGFjZShleHAsICc8YSBocmVmPVwibWFpbHRvOiQxXCIgdGFyZ2V0PVwiX2JsYW5rXCI+JDE8L2E+Jyk7XG5cdFx0XHRcdFx0XHRpZiAobmV3dGV4dCA9PT0gdmFsdWUpIHtcblx0XHRcdFx0XHRcdFx0bmV3Q29udGVudC5wdXNoKHtcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiB2YWx1ZSxcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiBjb250ZW50W2ldLnR5cGUsXG5cdFx0XHRcdFx0XHRcdFx0YXR0cmlidXRlczogY29udGVudFtpXS5hdHRyaWJ1dGVzXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0bmV3Q29udGVudC5wdXNoKHtcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiB2YWx1ZSxcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnYScsXG5cdFx0XHRcdFx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0aHJlZjogJ21haWx0bzonICsgdmFsdWUsXG5cdFx0XHRcdFx0XHRcdFx0XHR0YXJnZXQ6ICdfYmxhbmsnXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRuZXdDb250ZW50LnB1c2goe1xuXHRcdFx0XHRcdFx0dHlwZTogY29udGVudFtpXS50eXBlLFxuXHRcdFx0XHRcdFx0Y29udGVudDogY29udGVudFtpXS5jb250ZW50LFxuXHRcdFx0XHRcdFx0YXR0cmlidXRlczogY29udGVudFtpXS5hdHRyaWJ1dGVzXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJlc29sdmUobmV3Q29udGVudCk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmVqZWN0KGUpO1xuXHRcdH1cblx0fSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdyaXRlTWVzc2FnZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdXRpbHMvd3JpdGVNZXNzYWdlLmpzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIVxuICogQG92ZXJ2aWV3IGVzNi1wcm9taXNlIC0gYSB0aW55IGltcGxlbWVudGF0aW9uIG9mIFByb21pc2VzL0ErLlxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTQgWWVodWRhIEthdHosIFRvbSBEYWxlLCBTdGVmYW4gUGVubmVyIGFuZCBjb250cmlidXRvcnMgKENvbnZlcnNpb24gdG8gRVM2IEFQSSBieSBKYWtlIEFyY2hpYmFsZClcbiAqIEBsaWNlbnNlICAgTGljZW5zZWQgdW5kZXIgTUlUIGxpY2Vuc2VcbiAqICAgICAgICAgICAgU2VlIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9qYWtlYXJjaGliYWxkL2VzNi1wcm9taXNlL21hc3Rlci9MSUNFTlNFXG4gKiBAdmVyc2lvbiAgIDMuMi4xXG4gKi9cblxuKGZ1bmN0aW9uKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSR1dGlscyQkb2JqZWN0T3JGdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiB4ICE9PSBudWxsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkdXRpbHMkJGlzRnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNNYXliZVRoZW5hYmxlKHgpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiYgeCAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHV0aWxzJCRfaXNBcnJheTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkpIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSR1dGlscyQkX2lzQXJyYXkgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGliJGVzNiRwcm9taXNlJHV0aWxzJCRfaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG4gICAgfVxuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNBcnJheSA9IGxpYiRlczYkcHJvbWlzZSR1dGlscyQkX2lzQXJyYXk7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW4gPSAwO1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkdmVydHhOZXh0O1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkY3VzdG9tU2NoZWR1bGVyRm47XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAgPSBmdW5jdGlvbiBhc2FwKGNhbGxiYWNrLCBhcmcpIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZVtsaWIkZXM2JHByb21pc2UkYXNhcCQkbGVuXSA9IGNhbGxiYWNrO1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHF1ZXVlW2xpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW4gKyAxXSA9IGFyZztcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW4gKz0gMjtcbiAgICAgIGlmIChsaWIkZXM2JHByb21pc2UkYXNhcCQkbGVuID09PSAyKSB7XG4gICAgICAgIC8vIElmIGxlbiBpcyAyLCB0aGF0IG1lYW5zIHRoYXQgd2UgbmVlZCB0byBzY2hlZHVsZSBhbiBhc3luYyBmbHVzaC5cbiAgICAgICAgLy8gSWYgYWRkaXRpb25hbCBjYWxsYmFja3MgYXJlIHF1ZXVlZCBiZWZvcmUgdGhlIHF1ZXVlIGlzIGZsdXNoZWQsIHRoZXlcbiAgICAgICAgLy8gd2lsbCBiZSBwcm9jZXNzZWQgYnkgdGhpcyBmbHVzaCB0aGF0IHdlIGFyZSBzY2hlZHVsaW5nLlxuICAgICAgICBpZiAobGliJGVzNiRwcm9taXNlJGFzYXAkJGN1c3RvbVNjaGVkdWxlckZuKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGN1c3RvbVNjaGVkdWxlckZuKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRmbHVzaCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHNjaGVkdWxlRmx1c2goKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzZXRTY2hlZHVsZXIoc2NoZWR1bGVGbikge1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGN1c3RvbVNjaGVkdWxlckZuID0gc2NoZWR1bGVGbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2V0QXNhcChhc2FwRm4pIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhc2FwID0gYXNhcEZuO1xuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkYnJvd3NlcldpbmRvdyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRicm93c2VyR2xvYmFsID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJGJyb3dzZXJXaW5kb3cgfHwge307XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRCcm93c2VyTXV0YXRpb25PYnNlcnZlciA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRicm93c2VyR2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgbGliJGVzNiRwcm9taXNlJGFzYXAkJGJyb3dzZXJHbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGlzTm9kZSA9IHR5cGVvZiBzZWxmID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYge30udG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nO1xuXG4gICAgLy8gdGVzdCBmb3Igd2ViIHdvcmtlciBidXQgbm90IGluIElFMTBcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGlzV29ya2VyID0gdHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgdHlwZW9mIGltcG9ydFNjcmlwdHMgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICB0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09ICd1bmRlZmluZWQnO1xuXG4gICAgLy8gbm9kZVxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VOZXh0VGljaygpIHtcbiAgICAgIC8vIG5vZGUgdmVyc2lvbiAwLjEwLnggZGlzcGxheXMgYSBkZXByZWNhdGlvbiB3YXJuaW5nIHdoZW4gbmV4dFRpY2sgaXMgdXNlZCByZWN1cnNpdmVseVxuICAgICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9jdWpvanMvd2hlbi9pc3N1ZXMvNDEwIGZvciBkZXRhaWxzXG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHByb2Nlc3MubmV4dFRpY2sobGliJGVzNiRwcm9taXNlJGFzYXAkJGZsdXNoKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gdmVydHhcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlVmVydHhUaW1lcigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHZlcnR4TmV4dChsaWIkZXM2JHByb21pc2UkYXNhcCQkZmx1c2gpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlTXV0YXRpb25PYnNlcnZlcigpIHtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBsaWIkZXM2JHByb21pc2UkYXNhcCQkQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIobGliJGVzNiRwcm9taXNlJGFzYXAkJGZsdXNoKTtcbiAgICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgbm9kZS5kYXRhID0gKGl0ZXJhdGlvbnMgPSArK2l0ZXJhdGlvbnMgJSAyKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gd2ViIHdvcmtlclxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VNZXNzYWdlQ2hhbm5lbCgpIHtcbiAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRmbHVzaDtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VTZXRUaW1lb3V0KCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXRUaW1lb3V0KGxpYiRlczYkcHJvbWlzZSRhc2FwJCRmbHVzaCwgMSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkcXVldWUgPSBuZXcgQXJyYXkoMTAwMCk7XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJGZsdXNoKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaWIkZXM2JHByb21pc2UkYXNhcCQkbGVuOyBpKz0yKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZVtpXTtcbiAgICAgICAgdmFyIGFyZyA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZVtpKzFdO1xuXG4gICAgICAgIGNhbGxiYWNrKGFyZyk7XG5cbiAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHF1ZXVlW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkcXVldWVbaSsxXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGxlbiA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJGF0dGVtcHRWZXJ0eCgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByID0gcmVxdWlyZTtcbiAgICAgICAgdmFyIHZlcnR4ID0gcigndmVydHgnKTtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHZlcnR4TmV4dCA9IHZlcnR4LnJ1bk9uTG9vcCB8fCB2ZXJ0eC5ydW5PbkNvbnRleHQ7XG4gICAgICAgIHJldHVybiBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlVmVydHhUaW1lcigpO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlU2V0VGltZW91dCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaDtcbiAgICAvLyBEZWNpZGUgd2hhdCBhc3luYyBtZXRob2QgdG8gdXNlIHRvIHRyaWdnZXJpbmcgcHJvY2Vzc2luZyBvZiBxdWV1ZWQgY2FsbGJhY2tzOlxuICAgIGlmIChsaWIkZXM2JHByb21pc2UkYXNhcCQkaXNOb2RlKSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VOZXh0VGljaygpO1xuICAgIH0gZWxzZSBpZiAobGliJGVzNiRwcm9taXNlJGFzYXAkJEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VNdXRhdGlvbk9ic2VydmVyKCk7XG4gICAgfSBlbHNlIGlmIChsaWIkZXM2JHByb21pc2UkYXNhcCQkaXNXb3JrZXIpIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzY2hlZHVsZUZsdXNoID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZU1lc3NhZ2VDaGFubmVsKCk7XG4gICAgfSBlbHNlIGlmIChsaWIkZXM2JHByb21pc2UkYXNhcCQkYnJvd3NlcldpbmRvdyA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhdHRlbXB0VmVydHgoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHNjaGVkdWxlRmx1c2ggPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlU2V0VGltZW91dCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkdGhlbiQkdGhlbihvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbikge1xuICAgICAgdmFyIHBhcmVudCA9IHRoaXM7XG5cbiAgICAgIHZhciBjaGlsZCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3ApO1xuXG4gICAgICBpZiAoY2hpbGRbbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUFJPTUlTRV9JRF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRtYWtlUHJvbWlzZShjaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGF0ZSA9IHBhcmVudC5fc3RhdGU7XG5cbiAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHNbc3RhdGUgLSAxXTtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAoZnVuY3Rpb24oKXtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRpbnZva2VDYWxsYmFjayhzdGF0ZSwgY2hpbGQsIGNhbGxiYWNrLCBwYXJlbnQuX3Jlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkc3Vic2NyaWJlKHBhcmVudCwgY2hpbGQsIG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHRoZW4kJGRlZmF1bHQgPSBsaWIkZXM2JHByb21pc2UkdGhlbiQkdGhlbjtcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZXNvbHZlJCRyZXNvbHZlKG9iamVjdCkge1xuICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cbiAgICAgIGlmIChvYmplY3QgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0LmNvbnN0cnVjdG9yID09PSBDb25zdHJ1Y3Rvcikge1xuICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3RvcihsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRub29wKTtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgb2JqZWN0KTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVzb2x2ZSQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlc29sdmUkJHJlc29sdmU7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBST01JU0VfSUQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMTYpO1xuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbm9vcCgpIHt9XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUEVORElORyAgID0gdm9pZCAwO1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRGVUxGSUxMRUQgPSAxO1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRCAgPSAyO1xuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SID0gbmV3IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEVycm9yT2JqZWN0KCk7XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRzZWxmRnVsZmlsbG1lbnQoKSB7XG4gICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihcIllvdSBjYW5ub3QgcmVzb2x2ZSBhIHByb21pc2Ugd2l0aCBpdHNlbGZcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkY2Fubm90UmV0dXJuT3duKCkge1xuICAgICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZXMgY2FsbGJhY2sgY2Fubm90IHJldHVybiB0aGF0IHNhbWUgcHJvbWlzZS4nKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRnZXRUaGVuKHByb21pc2UpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW47XG4gICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SLmVycm9yID0gZXJyb3I7XG4gICAgICAgIHJldHVybiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCR0cnlUaGVuKHRoZW4sIHZhbHVlLCBmdWxmaWxsbWVudEhhbmRsZXIsIHJlamVjdGlvbkhhbmRsZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgZnVsZmlsbG1lbnRIYW5kbGVyLCByZWplY3Rpb25IYW5kbGVyKTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRoYW5kbGVGb3JlaWduVGhlbmFibGUocHJvbWlzZSwgdGhlbmFibGUsIHRoZW4pIHtcbiAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXNhcChmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgICAgIHZhciBzZWFsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGVycm9yID0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkdHJ5VGhlbih0aGVuLCB0aGVuYWJsZSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICBpZiAoc2VhbGVkKSB7IHJldHVybjsgfVxuICAgICAgICAgIHNlYWxlZCA9IHRydWU7XG4gICAgICAgICAgaWYgKHRoZW5hYmxlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgaWYgKHNlYWxlZCkgeyByZXR1cm47IH1cbiAgICAgICAgICBzZWFsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICAgIH0sICdTZXR0bGU6ICcgKyAocHJvbWlzZS5fbGFiZWwgfHwgJyB1bmtub3duIHByb21pc2UnKSk7XG5cbiAgICAgICAgaWYgKCFzZWFsZWQgJiYgZXJyb3IpIHtcbiAgICAgICAgICBzZWFsZWQgPSB0cnVlO1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0sIHByb21pc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZU93blRoZW5hYmxlKHByb21pc2UsIHRoZW5hYmxlKSB7XG4gICAgICBpZiAodGhlbmFibGUuX3N0YXRlID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRGVUxGSUxMRUQpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB0aGVuYWJsZS5fcmVzdWx0KTtcbiAgICAgIH0gZWxzZSBpZiAodGhlbmFibGUuX3N0YXRlID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgdGhlbmFibGUuX3Jlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRzdWJzY3JpYmUodGhlbmFibGUsIHVuZGVmaW5lZCwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSwgdGhlbikge1xuICAgICAgaWYgKG1heWJlVGhlbmFibGUuY29uc3RydWN0b3IgPT09IHByb21pc2UuY29uc3RydWN0b3IgJiZcbiAgICAgICAgICB0aGVuID09PSBsaWIkZXM2JHByb21pc2UkdGhlbiQkZGVmYXVsdCAmJlxuICAgICAgICAgIGNvbnN0cnVjdG9yLnJlc29sdmUgPT09IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlc29sdmUkJGRlZmF1bHQpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaGFuZGxlT3duVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhlbiA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1IpIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1IuZXJyb3IpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgICAgIH0gZWxzZSBpZiAobGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc0Z1bmN0aW9uKHRoZW4pKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaGFuZGxlRm9yZWlnblRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUsIHRoZW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKSB7XG4gICAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHNlbGZGdWxmaWxsbWVudCgpKTtcbiAgICAgIH0gZWxzZSBpZiAobGliJGVzNiRwcm9taXNlJHV0aWxzJCRvYmplY3RPckZ1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIHZhbHVlLCBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRnZXRUaGVuKHZhbHVlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRwdWJsaXNoUmVqZWN0aW9uKHByb21pc2UpIHtcbiAgICAgIGlmIChwcm9taXNlLl9vbmVycm9yKSB7XG4gICAgICAgIHByb21pc2UuX29uZXJyb3IocHJvbWlzZS5fcmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcHVibGlzaChwcm9taXNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHZhbHVlKSB7XG4gICAgICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBFTkRJTkcpIHsgcmV0dXJuOyB9XG5cbiAgICAgIHByb21pc2UuX3Jlc3VsdCA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fc3RhdGUgPSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRGVUxGSUxMRUQ7XG5cbiAgICAgIGlmIChwcm9taXNlLl9zdWJzY3JpYmVycy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcHVibGlzaCwgcHJvbWlzZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbikge1xuICAgICAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQRU5ESU5HKSB7IHJldHVybjsgfVxuICAgICAgcHJvbWlzZS5fc3RhdGUgPSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRDtcbiAgICAgIHByb21pc2UuX3Jlc3VsdCA9IHJlYXNvbjtcblxuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcHVibGlzaFJlamVjdGlvbiwgcHJvbWlzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkc3Vic2NyaWJlKHBhcmVudCwgY2hpbGQsIG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKSB7XG4gICAgICB2YXIgc3Vic2NyaWJlcnMgPSBwYXJlbnQuX3N1YnNjcmliZXJzO1xuICAgICAgdmFyIGxlbmd0aCA9IHN1YnNjcmliZXJzLmxlbmd0aDtcblxuICAgICAgcGFyZW50Ll9vbmVycm9yID0gbnVsbDtcblxuICAgICAgc3Vic2NyaWJlcnNbbGVuZ3RoXSA9IGNoaWxkO1xuICAgICAgc3Vic2NyaWJlcnNbbGVuZ3RoICsgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRlVMRklMTEVEXSA9IG9uRnVsZmlsbG1lbnQ7XG4gICAgICBzdWJzY3JpYmVyc1tsZW5ndGggKyBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRF0gID0gb25SZWplY3Rpb247XG5cbiAgICAgIGlmIChsZW5ndGggPT09IDAgJiYgcGFyZW50Ll9zdGF0ZSkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXNhcChsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRwdWJsaXNoLCBwYXJlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHB1Ymxpc2gocHJvbWlzZSkge1xuICAgICAgdmFyIHN1YnNjcmliZXJzID0gcHJvbWlzZS5fc3Vic2NyaWJlcnM7XG4gICAgICB2YXIgc2V0dGxlZCA9IHByb21pc2UuX3N0YXRlO1xuXG4gICAgICBpZiAoc3Vic2NyaWJlcnMubGVuZ3RoID09PSAwKSB7IHJldHVybjsgfVxuXG4gICAgICB2YXIgY2hpbGQsIGNhbGxiYWNrLCBkZXRhaWwgPSBwcm9taXNlLl9yZXN1bHQ7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic2NyaWJlcnMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICAgICAgY2hpbGQgPSBzdWJzY3JpYmVyc1tpXTtcbiAgICAgICAgY2FsbGJhY2sgPSBzdWJzY3JpYmVyc1tpICsgc2V0dGxlZF07XG5cbiAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaW52b2tlQ2FsbGJhY2soc2V0dGxlZCwgY2hpbGQsIGNhbGxiYWNrLCBkZXRhaWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrKGRldGFpbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJvbWlzZS5fc3Vic2NyaWJlcnMubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRFcnJvck9iamVjdCgpIHtcbiAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1IgPSBuZXcgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRXJyb3JPYmplY3QoKTtcblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHRyeUNhdGNoKGNhbGxiYWNrLCBkZXRhaWwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhkZXRhaWwpO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFRSWV9DQVRDSF9FUlJPUi5lcnJvciA9IGU7XG4gICAgICAgIHJldHVybiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaW52b2tlQ2FsbGJhY2soc2V0dGxlZCwgcHJvbWlzZSwgY2FsbGJhY2ssIGRldGFpbCkge1xuICAgICAgdmFyIGhhc0NhbGxiYWNrID0gbGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc0Z1bmN0aW9uKGNhbGxiYWNrKSxcbiAgICAgICAgICB2YWx1ZSwgZXJyb3IsIHN1Y2NlZWRlZCwgZmFpbGVkO1xuXG4gICAgICBpZiAoaGFzQ2FsbGJhY2spIHtcbiAgICAgICAgdmFsdWUgPSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCR0cnlDYXRjaChjYWxsYmFjaywgZGV0YWlsKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFRSWV9DQVRDSF9FUlJPUikge1xuICAgICAgICAgIGZhaWxlZCA9IHRydWU7XG4gICAgICAgICAgZXJyb3IgPSB2YWx1ZS5lcnJvcjtcbiAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3VjY2VlZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRjYW5ub3RSZXR1cm5Pd24oKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gZGV0YWlsO1xuICAgICAgICBzdWNjZWVkZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBFTkRJTkcpIHtcbiAgICAgICAgLy8gbm9vcFxuICAgICAgfSBlbHNlIGlmIChoYXNDYWxsYmFjayAmJiBzdWNjZWVkZWQpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGZhaWxlZCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgICAgfSBlbHNlIGlmIChzZXR0bGVkID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRGVUxGSUxMRUQpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHNldHRsZWQgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFJFSkVDVEVEKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaW5pdGlhbGl6ZVByb21pc2UocHJvbWlzZSwgcmVzb2x2ZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc29sdmVyKGZ1bmN0aW9uIHJlc29sdmVQcm9taXNlKHZhbHVlKXtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gcmVqZWN0UHJvbWlzZShyZWFzb24pIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRpZCA9IDA7XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbmV4dElkKCkge1xuICAgICAgcmV0dXJuIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGlkKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbWFrZVByb21pc2UocHJvbWlzZSkge1xuICAgICAgcHJvbWlzZVtsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQUk9NSVNFX0lEXSA9IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGlkKys7XG4gICAgICBwcm9taXNlLl9zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHByb21pc2UuX3Jlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICAgIHByb21pc2UuX3N1YnNjcmliZXJzID0gW107XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHByb21pc2UkYWxsJCRhbGwoZW50cmllcykge1xuICAgICAgcmV0dXJuIG5ldyBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkZGVmYXVsdCh0aGlzLCBlbnRyaWVzKS5wcm9taXNlO1xuICAgIH1cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHByb21pc2UkYWxsJCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkYWxsJCRhbGw7XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmFjZSQkcmFjZShlbnRyaWVzKSB7XG4gICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcblxuICAgICAgaWYgKCFsaWIkZXM2JHByb21pc2UkdXRpbHMkJGlzQXJyYXkoZW50cmllcykpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3RvcihmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byByYWNlLicpKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHZhciBsZW5ndGggPSBlbnRyaWVzLmxlbmd0aDtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBDb25zdHJ1Y3Rvci5yZXNvbHZlKGVudHJpZXNbaV0pLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmFjZSQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJhY2UkJHJhY2U7XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVqZWN0JCRyZWplY3QocmVhc29uKSB7XG4gICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcbiAgICAgIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3ApO1xuICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlamVjdCQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlamVjdCQkcmVqZWN0O1xuXG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkbmVlZHNSZXNvbHZlcigpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYSByZXNvbHZlciBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIHByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkbmVlZHNOZXcoKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnUHJvbWlzZSc6IFBsZWFzZSB1c2UgdGhlICduZXcnIG9wZXJhdG9yLCB0aGlzIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uXCIpO1xuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlO1xuICAgIC8qKlxuICAgICAgUHJvbWlzZSBvYmplY3RzIHJlcHJlc2VudCB0aGUgZXZlbnR1YWwgcmVzdWx0IG9mIGFuIGFzeW5jaHJvbm91cyBvcGVyYXRpb24uIFRoZVxuICAgICAgcHJpbWFyeSB3YXkgb2YgaW50ZXJhY3Rpbmcgd2l0aCBhIHByb21pc2UgaXMgdGhyb3VnaCBpdHMgYHRoZW5gIG1ldGhvZCwgd2hpY2hcbiAgICAgIHJlZ2lzdGVycyBjYWxsYmFja3MgdG8gcmVjZWl2ZSBlaXRoZXIgYSBwcm9taXNlJ3MgZXZlbnR1YWwgdmFsdWUgb3IgdGhlIHJlYXNvblxuICAgICAgd2h5IHRoZSBwcm9taXNlIGNhbm5vdCBiZSBmdWxmaWxsZWQuXG5cbiAgICAgIFRlcm1pbm9sb2d5XG4gICAgICAtLS0tLS0tLS0tLVxuXG4gICAgICAtIGBwcm9taXNlYCBpcyBhbiBvYmplY3Qgb3IgZnVuY3Rpb24gd2l0aCBhIGB0aGVuYCBtZXRob2Qgd2hvc2UgYmVoYXZpb3IgY29uZm9ybXMgdG8gdGhpcyBzcGVjaWZpY2F0aW9uLlxuICAgICAgLSBgdGhlbmFibGVgIGlzIGFuIG9iamVjdCBvciBmdW5jdGlvbiB0aGF0IGRlZmluZXMgYSBgdGhlbmAgbWV0aG9kLlxuICAgICAgLSBgdmFsdWVgIGlzIGFueSBsZWdhbCBKYXZhU2NyaXB0IHZhbHVlIChpbmNsdWRpbmcgdW5kZWZpbmVkLCBhIHRoZW5hYmxlLCBvciBhIHByb21pc2UpLlxuICAgICAgLSBgZXhjZXB0aW9uYCBpcyBhIHZhbHVlIHRoYXQgaXMgdGhyb3duIHVzaW5nIHRoZSB0aHJvdyBzdGF0ZW1lbnQuXG4gICAgICAtIGByZWFzb25gIGlzIGEgdmFsdWUgdGhhdCBpbmRpY2F0ZXMgd2h5IGEgcHJvbWlzZSB3YXMgcmVqZWN0ZWQuXG4gICAgICAtIGBzZXR0bGVkYCB0aGUgZmluYWwgcmVzdGluZyBzdGF0ZSBvZiBhIHByb21pc2UsIGZ1bGZpbGxlZCBvciByZWplY3RlZC5cblxuICAgICAgQSBwcm9taXNlIGNhbiBiZSBpbiBvbmUgb2YgdGhyZWUgc3RhdGVzOiBwZW5kaW5nLCBmdWxmaWxsZWQsIG9yIHJlamVjdGVkLlxuXG4gICAgICBQcm9taXNlcyB0aGF0IGFyZSBmdWxmaWxsZWQgaGF2ZSBhIGZ1bGZpbGxtZW50IHZhbHVlIGFuZCBhcmUgaW4gdGhlIGZ1bGZpbGxlZFxuICAgICAgc3RhdGUuICBQcm9taXNlcyB0aGF0IGFyZSByZWplY3RlZCBoYXZlIGEgcmVqZWN0aW9uIHJlYXNvbiBhbmQgYXJlIGluIHRoZVxuICAgICAgcmVqZWN0ZWQgc3RhdGUuICBBIGZ1bGZpbGxtZW50IHZhbHVlIGlzIG5ldmVyIGEgdGhlbmFibGUuXG5cbiAgICAgIFByb21pc2VzIGNhbiBhbHNvIGJlIHNhaWQgdG8gKnJlc29sdmUqIGEgdmFsdWUuICBJZiB0aGlzIHZhbHVlIGlzIGFsc28gYVxuICAgICAgcHJvbWlzZSwgdGhlbiB0aGUgb3JpZ2luYWwgcHJvbWlzZSdzIHNldHRsZWQgc3RhdGUgd2lsbCBtYXRjaCB0aGUgdmFsdWUnc1xuICAgICAgc2V0dGxlZCBzdGF0ZS4gIFNvIGEgcHJvbWlzZSB0aGF0ICpyZXNvbHZlcyogYSBwcm9taXNlIHRoYXQgcmVqZWN0cyB3aWxsXG4gICAgICBpdHNlbGYgcmVqZWN0LCBhbmQgYSBwcm9taXNlIHRoYXQgKnJlc29sdmVzKiBhIHByb21pc2UgdGhhdCBmdWxmaWxscyB3aWxsXG4gICAgICBpdHNlbGYgZnVsZmlsbC5cblxuXG4gICAgICBCYXNpYyBVc2FnZTpcbiAgICAgIC0tLS0tLS0tLS0tLVxuXG4gICAgICBgYGBqc1xuICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gb24gc3VjY2Vzc1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcblxuICAgICAgICAvLyBvbiBmYWlsdXJlXG4gICAgICAgIHJlamVjdChyZWFzb24pO1xuICAgICAgfSk7XG5cbiAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAvLyBvbiBmdWxmaWxsbWVudFxuICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIC8vIG9uIHJlamVjdGlvblxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQWR2YW5jZWQgVXNhZ2U6XG4gICAgICAtLS0tLS0tLS0tLS0tLS1cblxuICAgICAgUHJvbWlzZXMgc2hpbmUgd2hlbiBhYnN0cmFjdGluZyBhd2F5IGFzeW5jaHJvbm91cyBpbnRlcmFjdGlvbnMgc3VjaCBhc1xuICAgICAgYFhNTEh0dHBSZXF1ZXN0YHMuXG5cbiAgICAgIGBgYGpzXG4gICAgICBmdW5jdGlvbiBnZXRKU09OKHVybCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgICAgICB4aHIub3BlbignR0VUJywgdXJsKTtcbiAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gaGFuZGxlcjtcbiAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICAgIHhoci5zZW5kKCk7XG5cbiAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gdGhpcy5ET05FKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdnZXRKU09OOiBgJyArIHVybCArICdgIGZhaWxlZCB3aXRoIHN0YXR1czogWycgKyB0aGlzLnN0YXR1cyArICddJykpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGdldEpTT04oJy9wb3N0cy5qc29uJykudGhlbihmdW5jdGlvbihqc29uKSB7XG4gICAgICAgIC8vIG9uIGZ1bGZpbGxtZW50XG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgLy8gb24gcmVqZWN0aW9uXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBVbmxpa2UgY2FsbGJhY2tzLCBwcm9taXNlcyBhcmUgZ3JlYXQgY29tcG9zYWJsZSBwcmltaXRpdmVzLlxuXG4gICAgICBgYGBqc1xuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRKU09OKCcvcG9zdHMnKSxcbiAgICAgICAgZ2V0SlNPTignL2NvbW1lbnRzJylcbiAgICAgIF0pLnRoZW4oZnVuY3Rpb24odmFsdWVzKXtcbiAgICAgICAgdmFsdWVzWzBdIC8vID0+IHBvc3RzSlNPTlxuICAgICAgICB2YWx1ZXNbMV0gLy8gPT4gY29tbWVudHNKU09OXG5cbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEBjbGFzcyBQcm9taXNlXG4gICAgICBAcGFyYW0ge2Z1bmN0aW9ufSByZXNvbHZlclxuICAgICAgVXNlZnVsIGZvciB0b29saW5nLlxuICAgICAgQGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZShyZXNvbHZlcikge1xuICAgICAgdGhpc1tsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQUk9NSVNFX0lEXSA9IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5leHRJZCgpO1xuICAgICAgdGhpcy5fcmVzdWx0ID0gdGhpcy5fc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdWJzY3JpYmVycyA9IFtdO1xuXG4gICAgICBpZiAobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbm9vcCAhPT0gcmVzb2x2ZXIpIHtcbiAgICAgICAgdHlwZW9mIHJlc29sdmVyICE9PSAnZnVuY3Rpb24nICYmIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRuZWVkc1Jlc29sdmVyKCk7XG4gICAgICAgIHRoaXMgaW5zdGFuY2VvZiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZSA/IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGluaXRpYWxpemVQcm9taXNlKHRoaXMsIHJlc29sdmVyKSA6IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRuZWVkc05ldygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLmFsbCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJGFsbCQkZGVmYXVsdDtcbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5yYWNlID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmFjZSQkZGVmYXVsdDtcbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5yZXNvbHZlID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVzb2x2ZSQkZGVmYXVsdDtcbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5yZWplY3QgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZWplY3QkJGRlZmF1bHQ7XG4gICAgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UuX3NldFNjaGVkdWxlciA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzZXRTY2hlZHVsZXI7XG4gICAgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UuX3NldEFzYXAgPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2V0QXNhcDtcbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5fYXNhcCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhc2FwO1xuXG4gICAgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UucHJvdG90eXBlID0ge1xuICAgICAgY29uc3RydWN0b3I6IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLFxuXG4gICAgLyoqXG4gICAgICBUaGUgcHJpbWFyeSB3YXkgb2YgaW50ZXJhY3Rpbmcgd2l0aCBhIHByb21pc2UgaXMgdGhyb3VnaCBpdHMgYHRoZW5gIG1ldGhvZCxcbiAgICAgIHdoaWNoIHJlZ2lzdGVycyBjYWxsYmFja3MgdG8gcmVjZWl2ZSBlaXRoZXIgYSBwcm9taXNlJ3MgZXZlbnR1YWwgdmFsdWUgb3IgdGhlXG4gICAgICByZWFzb24gd2h5IHRoZSBwcm9taXNlIGNhbm5vdCBiZSBmdWxmaWxsZWQuXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24odXNlcil7XG4gICAgICAgIC8vIHVzZXIgaXMgYXZhaWxhYmxlXG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgICAgICAvLyB1c2VyIGlzIHVuYXZhaWxhYmxlLCBhbmQgeW91IGFyZSBnaXZlbiB0aGUgcmVhc29uIHdoeVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQ2hhaW5pbmdcbiAgICAgIC0tLS0tLS0tXG5cbiAgICAgIFRoZSByZXR1cm4gdmFsdWUgb2YgYHRoZW5gIGlzIGl0c2VsZiBhIHByb21pc2UuICBUaGlzIHNlY29uZCwgJ2Rvd25zdHJlYW0nXG4gICAgICBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZmlyc3QgcHJvbWlzZSdzIGZ1bGZpbGxtZW50XG4gICAgICBvciByZWplY3Rpb24gaGFuZGxlciwgb3IgcmVqZWN0ZWQgaWYgdGhlIGhhbmRsZXIgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICByZXR1cm4gdXNlci5uYW1lO1xuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICByZXR1cm4gJ2RlZmF1bHQgbmFtZSc7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICh1c2VyTmFtZSkge1xuICAgICAgICAvLyBJZiBgZmluZFVzZXJgIGZ1bGZpbGxlZCwgYHVzZXJOYW1lYCB3aWxsIGJlIHRoZSB1c2VyJ3MgbmFtZSwgb3RoZXJ3aXNlIGl0XG4gICAgICAgIC8vIHdpbGwgYmUgYCdkZWZhdWx0IG5hbWUnYFxuICAgICAgfSk7XG5cbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvdW5kIHVzZXIsIGJ1dCBzdGlsbCB1bmhhcHB5Jyk7XG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYGZpbmRVc2VyYCByZWplY3RlZCBhbmQgd2UncmUgdW5oYXBweScpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy8gbmV2ZXIgcmVhY2hlZFxuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAvLyBpZiBgZmluZFVzZXJgIGZ1bGZpbGxlZCwgYHJlYXNvbmAgd2lsbCBiZSAnRm91bmQgdXNlciwgYnV0IHN0aWxsIHVuaGFwcHknLlxuICAgICAgICAvLyBJZiBgZmluZFVzZXJgIHJlamVjdGVkLCBgcmVhc29uYCB3aWxsIGJlICdgZmluZFVzZXJgIHJlamVjdGVkIGFuZCB3ZSdyZSB1bmhhcHB5Jy5cbiAgICAgIH0pO1xuICAgICAgYGBgXG4gICAgICBJZiB0aGUgZG93bnN0cmVhbSBwcm9taXNlIGRvZXMgbm90IHNwZWNpZnkgYSByZWplY3Rpb24gaGFuZGxlciwgcmVqZWN0aW9uIHJlYXNvbnMgd2lsbCBiZSBwcm9wYWdhdGVkIGZ1cnRoZXIgZG93bnN0cmVhbS5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICB0aHJvdyBuZXcgUGVkYWdvZ2ljYWxFeGNlcHRpb24oJ1Vwc3RyZWFtIGVycm9yJyk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAvLyBuZXZlciByZWFjaGVkXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAvLyBuZXZlciByZWFjaGVkXG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIC8vIFRoZSBgUGVkZ2Fnb2NpYWxFeGNlcHRpb25gIGlzIHByb3BhZ2F0ZWQgYWxsIHRoZSB3YXkgZG93biB0byBoZXJlXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBBc3NpbWlsYXRpb25cbiAgICAgIC0tLS0tLS0tLS0tLVxuXG4gICAgICBTb21ldGltZXMgdGhlIHZhbHVlIHlvdSB3YW50IHRvIHByb3BhZ2F0ZSB0byBhIGRvd25zdHJlYW0gcHJvbWlzZSBjYW4gb25seSBiZVxuICAgICAgcmV0cmlldmVkIGFzeW5jaHJvbm91c2x5LiBUaGlzIGNhbiBiZSBhY2hpZXZlZCBieSByZXR1cm5pbmcgYSBwcm9taXNlIGluIHRoZVxuICAgICAgZnVsZmlsbG1lbnQgb3IgcmVqZWN0aW9uIGhhbmRsZXIuIFRoZSBkb3duc3RyZWFtIHByb21pc2Ugd2lsbCB0aGVuIGJlIHBlbmRpbmdcbiAgICAgIHVudGlsIHRoZSByZXR1cm5lZCBwcm9taXNlIGlzIHNldHRsZWQuIFRoaXMgaXMgY2FsbGVkICphc3NpbWlsYXRpb24qLlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHJldHVybiBmaW5kQ29tbWVudHNCeUF1dGhvcih1c2VyKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNvbW1lbnRzKSB7XG4gICAgICAgIC8vIFRoZSB1c2VyJ3MgY29tbWVudHMgYXJlIG5vdyBhdmFpbGFibGVcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIElmIHRoZSBhc3NpbWxpYXRlZCBwcm9taXNlIHJlamVjdHMsIHRoZW4gdGhlIGRvd25zdHJlYW0gcHJvbWlzZSB3aWxsIGFsc28gcmVqZWN0LlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHJldHVybiBmaW5kQ29tbWVudHNCeUF1dGhvcih1c2VyKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNvbW1lbnRzKSB7XG4gICAgICAgIC8vIElmIGBmaW5kQ29tbWVudHNCeUF1dGhvcmAgZnVsZmlsbHMsIHdlJ2xsIGhhdmUgdGhlIHZhbHVlIGhlcmVcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgLy8gSWYgYGZpbmRDb21tZW50c0J5QXV0aG9yYCByZWplY3RzLCB3ZSdsbCBoYXZlIHRoZSByZWFzb24gaGVyZVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgU2ltcGxlIEV4YW1wbGVcbiAgICAgIC0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIFN5bmNocm9ub3VzIEV4YW1wbGVcblxuICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzdWx0ID0gZmluZFJlc3VsdCgpO1xuICAgICAgICAvLyBzdWNjZXNzXG4gICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAvLyBmYWlsdXJlXG4gICAgICB9XG4gICAgICBgYGBcblxuICAgICAgRXJyYmFjayBFeGFtcGxlXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kUmVzdWx0KGZ1bmN0aW9uKHJlc3VsdCwgZXJyKXtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIC8vIGZhaWx1cmVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBzdWNjZXNzXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIFByb21pc2UgRXhhbXBsZTtcblxuICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgZmluZFJlc3VsdCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcbiAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQWR2YW5jZWQgRXhhbXBsZVxuICAgICAgLS0tLS0tLS0tLS0tLS1cblxuICAgICAgU3luY2hyb25vdXMgRXhhbXBsZVxuXG4gICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICB2YXIgYXV0aG9yLCBib29rcztcblxuICAgICAgdHJ5IHtcbiAgICAgICAgYXV0aG9yID0gZmluZEF1dGhvcigpO1xuICAgICAgICBib29rcyAgPSBmaW5kQm9va3NCeUF1dGhvcihhdXRob3IpO1xuICAgICAgICAvLyBzdWNjZXNzXG4gICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAvLyBmYWlsdXJlXG4gICAgICB9XG4gICAgICBgYGBcblxuICAgICAgRXJyYmFjayBFeGFtcGxlXG5cbiAgICAgIGBgYGpzXG5cbiAgICAgIGZ1bmN0aW9uIGZvdW5kQm9va3MoYm9va3MpIHtcblxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBmYWlsdXJlKHJlYXNvbikge1xuXG4gICAgICB9XG5cbiAgICAgIGZpbmRBdXRob3IoZnVuY3Rpb24oYXV0aG9yLCBlcnIpe1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICAgIC8vIGZhaWx1cmVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZmluZEJvb29rc0J5QXV0aG9yKGF1dGhvciwgZnVuY3Rpb24oYm9va3MsIGVycikge1xuICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBmb3VuZEJvb2tzKGJvb2tzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAgICAgICAgICAgZmFpbHVyZShyZWFzb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBzdWNjZXNzXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIFByb21pc2UgRXhhbXBsZTtcblxuICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgZmluZEF1dGhvcigpLlxuICAgICAgICB0aGVuKGZpbmRCb29rc0J5QXV0aG9yKS5cbiAgICAgICAgdGhlbihmdW5jdGlvbihib29rcyl7XG4gICAgICAgICAgLy8gZm91bmQgYm9va3NcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBAbWV0aG9kIHRoZW5cbiAgICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uRnVsZmlsbGVkXG4gICAgICBAcGFyYW0ge0Z1bmN0aW9ufSBvblJlamVjdGVkXG4gICAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgICBAcmV0dXJuIHtQcm9taXNlfVxuICAgICovXG4gICAgICB0aGVuOiBsaWIkZXM2JHByb21pc2UkdGhlbiQkZGVmYXVsdCxcblxuICAgIC8qKlxuICAgICAgYGNhdGNoYCBpcyBzaW1wbHkgc3VnYXIgZm9yIGB0aGVuKHVuZGVmaW5lZCwgb25SZWplY3Rpb24pYCB3aGljaCBtYWtlcyBpdCB0aGUgc2FtZVxuICAgICAgYXMgdGhlIGNhdGNoIGJsb2NrIG9mIGEgdHJ5L2NhdGNoIHN0YXRlbWVudC5cblxuICAgICAgYGBganNcbiAgICAgIGZ1bmN0aW9uIGZpbmRBdXRob3IoKXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZG4ndCBmaW5kIHRoYXQgYXV0aG9yJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIHN5bmNocm9ub3VzXG4gICAgICB0cnkge1xuICAgICAgICBmaW5kQXV0aG9yKCk7XG4gICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgICAgfVxuXG4gICAgICAvLyBhc3luYyB3aXRoIHByb21pc2VzXG4gICAgICBmaW5kQXV0aG9yKCkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEBtZXRob2QgY2F0Y2hcbiAgICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uUmVqZWN0aW9uXG4gICAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgICBAcmV0dXJuIHtQcm9taXNlfVxuICAgICovXG4gICAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yO1xuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yKENvbnN0cnVjdG9yLCBpbnB1dCkge1xuICAgICAgdGhpcy5faW5zdGFuY2VDb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yO1xuICAgICAgdGhpcy5wcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3ApO1xuXG4gICAgICBpZiAoIXRoaXMucHJvbWlzZVtsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQUk9NSVNFX0lEXSkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRtYWtlUHJvbWlzZSh0aGlzLnByb21pc2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAobGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc0FycmF5KGlucHV0KSkge1xuICAgICAgICB0aGlzLl9pbnB1dCAgICAgPSBpbnB1dDtcbiAgICAgICAgdGhpcy5sZW5ndGggICAgID0gaW5wdXQubGVuZ3RoO1xuICAgICAgICB0aGlzLl9yZW1haW5pbmcgPSBpbnB1dC5sZW5ndGg7XG5cbiAgICAgICAgdGhpcy5fcmVzdWx0ID0gbmV3IEFycmF5KHRoaXMubGVuZ3RoKTtcblxuICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHRoaXMucHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmxlbmd0aCA9IHRoaXMubGVuZ3RoIHx8IDA7XG4gICAgICAgICAgdGhpcy5fZW51bWVyYXRlKCk7XG4gICAgICAgICAgaWYgKHRoaXMuX3JlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbCh0aGlzLnByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QodGhpcy5wcm9taXNlLCBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkdmFsaWRhdGlvbkVycm9yKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCR2YWxpZGF0aW9uRXJyb3IoKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdBcnJheSBNZXRob2RzIG11c3QgYmUgcHJvdmlkZWQgYW4gQXJyYXknKTtcbiAgICB9XG5cbiAgICBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX2VudW1lcmF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGxlbmd0aCAgPSB0aGlzLmxlbmd0aDtcbiAgICAgIHZhciBpbnB1dCAgID0gdGhpcy5faW5wdXQ7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyB0aGlzLl9zdGF0ZSA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUEVORElORyAmJiBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5fZWFjaEVudHJ5KGlucHV0W2ldLCBpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl9lYWNoRW50cnkgPSBmdW5jdGlvbihlbnRyeSwgaSkge1xuICAgICAgdmFyIGMgPSB0aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yO1xuICAgICAgdmFyIHJlc29sdmUgPSBjLnJlc29sdmU7XG5cbiAgICAgIGlmIChyZXNvbHZlID09PSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZXNvbHZlJCRkZWZhdWx0KSB7XG4gICAgICAgIHZhciB0aGVuID0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZ2V0VGhlbihlbnRyeSk7XG5cbiAgICAgICAgaWYgKHRoZW4gPT09IGxpYiRlczYkcHJvbWlzZSR0aGVuJCRkZWZhdWx0ICYmXG4gICAgICAgICAgICBlbnRyeS5fc3RhdGUgIT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBFTkRJTkcpIHtcbiAgICAgICAgICB0aGlzLl9zZXR0bGVkQXQoZW50cnkuX3N0YXRlLCBpLCBlbnRyeS5fcmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhlbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMuX3JlbWFpbmluZy0tO1xuICAgICAgICAgIHRoaXMuX3Jlc3VsdFtpXSA9IGVudHJ5O1xuICAgICAgICB9IGVsc2UgaWYgKGMgPT09IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRkZWZhdWx0KSB7XG4gICAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgYyhsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRub29wKTtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIGVudHJ5LCB0aGVuKTtcbiAgICAgICAgICB0aGlzLl93aWxsU2V0dGxlQXQocHJvbWlzZSwgaSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fd2lsbFNldHRsZUF0KG5ldyBjKGZ1bmN0aW9uKHJlc29sdmUpIHsgcmVzb2x2ZShlbnRyeSk7IH0pLCBpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fd2lsbFNldHRsZUF0KHJlc29sdmUoZW50cnkpLCBpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl9zZXR0bGVkQXQgPSBmdW5jdGlvbihzdGF0ZSwgaSwgdmFsdWUpIHtcbiAgICAgIHZhciBwcm9taXNlID0gdGhpcy5wcm9taXNlO1xuXG4gICAgICBpZiAocHJvbWlzZS5fc3RhdGUgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBFTkRJTkcpIHtcbiAgICAgICAgdGhpcy5fcmVtYWluaW5nLS07XG5cbiAgICAgICAgaWYgKHN0YXRlID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRCkge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fcmVzdWx0W2ldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3JlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fd2lsbFNldHRsZUF0ID0gZnVuY3Rpb24ocHJvbWlzZSwgaSkge1xuICAgICAgdmFyIGVudW1lcmF0b3IgPSB0aGlzO1xuXG4gICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRzdWJzY3JpYmUocHJvbWlzZSwgdW5kZWZpbmVkLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBlbnVtZXJhdG9yLl9zZXR0bGVkQXQobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRlVMRklMTEVELCBpLCB2YWx1ZSk7XG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgZW51bWVyYXRvci5fc2V0dGxlZEF0KGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFJFSkVDVEVELCBpLCByZWFzb24pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcG9seWZpbGwkJHBvbHlmaWxsKCkge1xuICAgICAgdmFyIGxvY2FsO1xuXG4gICAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBsb2NhbCA9IGdsb2JhbDtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgbG9jYWwgPSBzZWxmO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBsb2NhbCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3BvbHlmaWxsIGZhaWxlZCBiZWNhdXNlIGdsb2JhbCBvYmplY3QgaXMgdW5hdmFpbGFibGUgaW4gdGhpcyBlbnZpcm9ubWVudCcpO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIFAgPSBsb2NhbC5Qcm9taXNlO1xuXG4gICAgICBpZiAoUCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUC5yZXNvbHZlKCkpID09PSAnW29iamVjdCBQcm9taXNlXScgJiYgIVAuY2FzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxvY2FsLlByb21pc2UgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkZGVmYXVsdDtcbiAgICB9XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRwb2x5ZmlsbCQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRwb2x5ZmlsbCQkcG9seWZpbGw7XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHVtZCQkRVM2UHJvbWlzZSA9IHtcbiAgICAgICdQcm9taXNlJzogbGliJGVzNiRwcm9taXNlJHByb21pc2UkJGRlZmF1bHQsXG4gICAgICAncG9seWZpbGwnOiBsaWIkZXM2JHByb21pc2UkcG9seWZpbGwkJGRlZmF1bHRcbiAgICB9O1xuXG4gICAgLyogZ2xvYmFsIGRlZmluZTp0cnVlIG1vZHVsZTp0cnVlIHdpbmRvdzogdHJ1ZSAqL1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZVsnYW1kJ10pIHtcbiAgICAgIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGxpYiRlczYkcHJvbWlzZSR1bWQkJEVTNlByb21pc2U7IH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlWydleHBvcnRzJ10pIHtcbiAgICAgIG1vZHVsZVsnZXhwb3J0cyddID0gbGliJGVzNiRwcm9taXNlJHVtZCQkRVM2UHJvbWlzZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpc1snRVM2UHJvbWlzZSddID0gbGliJGVzNiRwcm9taXNlJHVtZCQkRVM2UHJvbWlzZTtcbiAgICB9XG5cbiAgICBsaWIkZXM2JHByb21pc2UkcG9seWZpbGwkJGRlZmF1bHQoKTtcbn0pLmNhbGwodGhpcyk7XG5cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2VzNi1wcm9taXNlL2Rpc3QvZXM2LXByb21pc2UuanNcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4gKiogbW9kdWxlIGlkID0gMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIChpZ25vcmVkKSAqL1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogdmVydHggKGlnbm9yZWQpXG4gKiogbW9kdWxlIGlkID0gNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7IHRocm93IG5ldyBFcnJvcihcImRlZmluZSBjYW5ub3QgYmUgdXNlZCBpbmRpcmVjdFwiKTsgfTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAod2VicGFjaykvYnVpbGRpbi9hbWQtZGVmaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCIke25zfVxcXCI+XFxuXFx0PGRpdiBjbGFzcz1cXFwiJHtuc30taW1nXFxcIj48L2Rpdj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1kYXRhXFxcIj48L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy90ZW1wbGF0ZXMvYmFzZS5odG1sXG4gKiogbW9kdWxlIGlkID0gNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCIke25zfS1jb250YWN0LXR5cGVcXFwiPjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcIiR7bnN9LWNvbnRhY3QtZGF0YVxcXCI+PC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvc2hvdy1sb2NhdGlvbnMvdGVtcGxhdGVzL2NyZWF0ZS1kb20tYXJyYXkuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0gJHtuc30tbXVsdGlwbGUtbG9jYXRpb25zICR7bnN9LWRhdGEtc2VjdGlvbiBJQk1DaGF0LXNlY29uZGFyeS1jb2xvcnNcXFwiPlxcblxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1yb3dcXFwiPlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWljb24gJHtuc30tbG9jYXRpb25zLWNlbGxcXFwiPjwvZGl2PlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEgJHtuc30tbG9jYXRpb25zLWNlbGxcXFwiPlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtdGl0bGVcXFwiPjwvZGl2PlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtaXRlbXNcXFwiPlxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtYWRkcmVzc1xcXCI+PC9kaXY+XFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0tZGlzdGFuY2VcXFwiPjwvZGl2PlxcblxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdDwvZGl2PlxcblxcdDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3RlbXBsYXRlcy9hZGQtbG9jYXRpb25zLWl0ZW0uaHRtbFxuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0gJHtuc30tZGF0YS1zZWN0aW9uIElCTUNoYXQtc2Vjb25kYXJ5LWNvbG9yc1xcXCI+XFxuXFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0tZGF0YS1zZWN0aW9uXFxcIj5cXG5cXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCIke25zfS1sb2NhdGlvbnMtYWxsIElCTUNoYXQtYWNjZW50LWNvbG9yc1xcXCI+QmFjayB0byBBbGwgTG9jYXRpb25zPC9idXR0b24+XFxuXFx0PC9kaXY+XFxuXFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0tZGF0YVxcXCI+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0tZGF0YS10aXRsZVxcXCI+PC9kaXY+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0tZGF0YS1pdGVtc1xcXCI+XFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0tZGF0YS1zZWN0aW9uXFxcIj5cXG5cXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwiJHtuc30tbG9jYXRpb25zLWl0ZW0tZGF0YS1hZGRyZXNzLWxpbmtcXFwiPlxcblxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtYWRkcmVzc1xcXCI+PC9kaXY+XFxuXFx0XFx0XFx0XFx0PC9hPlxcblxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtZW1haWxcXFwiPjwvZGl2PlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtcGhvbmVcXFwiPjwvZGl2PlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtaG91cnNcXFwiPjwvZGl2PlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtdGltZXpvbmVcXFwiPjwvZGl2PlxcblxcdFxcdDwvZGl2PlxcblxcdFxcdDxidXR0b24gY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtaG91cnMtYnV0dG9uIElCTUNoYXQtYWNjZW50LWNvbG9yc1xcXCI+TW9yZSBIb3VyczwvYnV0dG9uPlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtaXRlbXNcXFwiPlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRhdGEtbW9yZS1ob3VycyAke25zfS1oaWRkZW5cXFwiPjwvZGl2PlxcblxcdFxcdDwvZGl2PlxcblxcdDwvZGl2PlxcblxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LWxvY2F0aW9ucy1pdGVtLWRpc3RhbmNlXFxcIj48L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy90ZW1wbGF0ZXMvYWRkLWxvY2F0aW9uLWl0ZW0uaHRtbFxuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiJHtuc30tZGF5cy1ob3Vycy1kYXlcXFwiPlxcblxcdCR7ZGF5fVxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcIiR7bnN9LWRheXMtaG91cnMtaG91cnNcXFwiPlxcblxcdENsb3NlZFxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3RlbXBsYXRlcy9ob3Vycy1jbG9zZWQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiJHtuc30tZGF5cy1ob3Vycy1kYXlcXFwiPlxcblxcdCR7ZGF5fVxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcIiR7bnN9LWRheXMtaG91cnMtaG91cnNcXFwiPlxcblxcdCR7b3Blbn0gJm5kYXNoOyAke2Nsb3NlfVxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3RlbXBsYXRlcy9ob3Vycy1vcGVuLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIiR7bnN9LWhvdXJzLW9wZW5cXFwiPk9wZW4gdG9kYXk6PC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwiJHtuc30taG91cnMtdG9kYXlcXFwiPlxcblxcdCR7b3Blbn0gJm5kYXNoOyAke2Nsb3NlfVxcbjwvZGl2PlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3RlbXBsYXRlcy9ob3Vycy10b2RheS1vcGVuLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIiR7bnN9LWhvdXJzLW9wZW5cXFwiPkNsb3NlZCB0b2RheS48L2Rpdj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy90ZW1wbGF0ZXMvaG91cnMtdG9kYXktY2xvc2VkLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIiR7bnN9LWhvdXJzLXRpbWV6b25lXFxcIj4oICR7dGltZXpvbmV9ICk8L2Rpdj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9zaG93LWxvY2F0aW9ucy90ZW1wbGF0ZXMvaG91cnMtdGltZXpvbmUuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcbnZhciBzdWJzY3JpYmUgPSBldmVudHMuc3Vic2NyaWJlO1xudmFyIHB1Ymxpc2ggPSBldmVudHMucHVibGlzaDtcblxudmFyIHJlcXVlc3RHZW9sb2NhdGlvbkxhdGxvbmdzID0gW107XG5cbnZhciBMT0NBVElPTl9USU1FT1VUID0gMjAgKiAxMDAwO1xuXG52YXIgcmVxdWVzdEdlb2xvY2F0aW9uTGF0bG9uZ0xheW91dCA9IHtcblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0c3Vic2NyaWJlKCdsYXlvdXQ6cmVxdWVzdC1nZW9sb2NhdGlvbi1sYXRsb25nJywgZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0dmFyIHJlcXVlc3RHZW9sb2NhdGlvbkxhdGxvbmcgPSBuZXcgUmVxdWVzdEdlb2xvY2F0aW9uTGF0bG9uZyhkYXRhKTtcblx0XHRcdHJlcXVlc3RHZW9sb2NhdGlvbkxhdGxvbmdzW2RhdGEudXVpZF0gPSByZXF1ZXN0R2VvbG9jYXRpb25MYXRsb25nO1xuXHRcdH0pO1xuXHR9XG59O1xuXG5mdW5jdGlvbiBSZXF1ZXN0R2VvbG9jYXRpb25MYXRsb25nKGRhdGEpIHtcblx0dGhpcy5pbml0KGRhdGEpO1xufVxuXG5SZXF1ZXN0R2VvbG9jYXRpb25MYXRsb25nLnByb3RvdHlwZSA9IHtcblx0aW5pdDogZnVuY3Rpb24oZGF0YSkge1xuXHRcdHRoaXMuZGF0YSA9IGRhdGEuZGF0YTtcblx0XHR0aGlzLnV1aWQgPSBkYXRhLnV1aWQ7XG5cdFx0dGhpcy5wYXJlbnRFbGVtZW50ID0gZGF0YS5lbGVtZW50O1xuXHRcdHRoaXMubGF5b3V0RWxlbWVudCA9IGRhdGEubGF5b3V0RWxlbWVudDtcblx0XHR0aGlzLnRpbWVkT3V0ID0gZmFsc2U7XG5cdFx0dGhpcy50aW1lb3V0Q2hlY2sgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy50aW1lZE91dCA9IHRydWU7XG5cdFx0XHR0aGlzLmhhbmRsZUxvY2F0aW9uTm90U2hhcmVkKCk7XG5cdFx0fS5iaW5kKHRoaXMpLCBMT0NBVElPTl9USU1FT1VUKTtcblx0XHRwdWJsaXNoKCdlbmFibGUtbG9hZGluZycpO1xuXHRcdHB1Ymxpc2goJ2Rpc2FibGUtaW5wdXQnKTtcblx0XHRuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxuXHRcdFx0ZnVuY3Rpb24ocG9zaXRpb24pIHtcblx0XHRcdFx0aWYgKHRoaXMudGltZWRPdXQpIHJldHVybiBmYWxzZTtcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZW91dENoZWNrKTtcblx0XHRcdFx0dGhpcy5oYW5kbGVMb2NhdGlvblNoYXJlZChwb3NpdGlvbik7XG5cdFx0XHR9LmJpbmQodGhpcyksXG5cdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKHRoaXMudGltZWRPdXQpIHJldHVybiBmYWxzZTtcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZW91dENoZWNrKTtcblx0XHRcdFx0dGhpcy5oYW5kbGVMb2NhdGlvbk5vdFNoYXJlZCgpO1xuXHRcdFx0fS5iaW5kKHRoaXMpXG5cdFx0KTtcblx0fSxcblx0aGFuZGxlTG9jYXRpb25TaGFyZWQ6IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cdFx0cHVibGlzaCgnZW5hYmxlLWlucHV0Jyk7XG5cdFx0cHVibGlzaCgnZGlzYWJsZS1sb2FkaW5nJyk7XG5cdFx0cHVibGlzaCgnc2VuZCcsIHtcblx0XHRcdHRleHQ6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSArICcsJyArIHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsXG5cdFx0XHRzaWxlbnQ6IHRydWVcblx0XHR9KTtcblx0fSxcblx0aGFuZGxlTG9jYXRpb25Ob3RTaGFyZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdHB1Ymxpc2goJ2VuYWJsZS1pbnB1dCcpO1xuXHRcdHB1Ymxpc2goJ2Rpc2FibGUtbG9hZGluZycpO1xuXHRcdHB1Ymxpc2goJ3JlY2VpdmUnLCBcIllvdSBoYXZlbid0IHNoYXJlZCB5b3VyIGxvY2F0aW9uIG9uIHRoaXMgd2Vic2l0ZS5cIik7XG5cdFx0cHVibGlzaCgnc2VuZCcsIHtcblx0XHRcdHRleHQ6ICdmaW5kIG5lYXJlc3QgbG9jYXRpb25zJyxcblx0XHRcdHNpbGVudDogdHJ1ZVxuXHRcdH0pO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVlc3RHZW9sb2NhdGlvbkxhdGxvbmdMYXlvdXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvcmVxdWVzdC1nZW9sb2NhdGlvbi1sYXRsb25nL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIGV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2V2ZW50cycpO1xudmFyIHN1YnNjcmliZSA9IGV2ZW50cy5zdWJzY3JpYmU7XG52YXIgcmVxdWVzdEdlb2xvY2F0aW9uWmlwY29kZUxheW91dCA9IHtcblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0c3Vic2NyaWJlKCdsYXlvdXQ6cmVxdWVzdC1nZW9sb2NhdGlvbi16aXBjb2RlJywgZnVuY3Rpb24oKSB7fSk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWVzdEdlb2xvY2F0aW9uWmlwY29kZUxheW91dDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9yZXF1ZXN0LWdlb2xvY2F0aW9uLXppcGNvZGUvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG5yZXF1aXJlKCcuL3N0eWxlcy5jc3MnKTtcblxudmFyIGV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2V2ZW50cycpO1xudmFyIHN1YnNjcmliZSA9IGV2ZW50cy5zdWJzY3JpYmU7XG52YXIgcHVibGlzaCA9IGV2ZW50cy5wdWJsaXNoO1xudmFyIGFjdGl2ZUNsYXNzTmFtZSA9ICdJQk1DaGF0LWFjY2VudC1jb2xvcnMnO1xudmFyIGluYWN0aXZlQ2xhc3NOYW1lID0gJ0lCTUNoYXQtc2Vjb25kYXJ5LWNvbG9ycyc7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xuXG52YXIgbnMgPSAnSUJNQ2hhdC1pc2xvY2F0aW9uYXBpJztcbnZhciBjaG9vc2VMb2NhdGlvblR5cGVzID0gW107XG5cbnZhciBjaG9vc2VMb2NhdGlvblR5cGVMYXlvdXQgPSB7XG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHN1YnNjcmliZSgnbGF5b3V0OmNob29zZS1sb2NhdGlvbi10eXBlJywgZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0dmFyIGNob29zZUxvY2F0aW9uVHlwZSA9IG5ldyBDaG9vc2VMb2NhdGlvblR5cGUoZGF0YSk7XG5cdFx0XHRjaG9vc2VMb2NhdGlvblR5cGVzW2RhdGEudXVpZF0gPSBjaG9vc2VMb2NhdGlvblR5cGU7XG5cdFx0fSk7XG5cdH1cbn07XG5cbnZhciB2YWx1ZXMgPSB7XG5cdHBvc3RhbGNvZGU6ICd6aXBjb2RlJyxcblx0Z2VvbG9jYXRpb246ICdsYXRsb25nJ1xufTtcblxudmFyIHRlbXBsYXRlcyA9IHtcblx0YmFzZTogcmVxdWlyZSgnLi90ZW1wbGF0ZXMvYmFzZS5odG1sJylcbn07XG5cbmZ1bmN0aW9uIENob29zZUxvY2F0aW9uVHlwZShkYXRhKSB7XG5cdHRoaXMuaW5pdChkYXRhKTtcbn1cblxuQ2hvb3NlTG9jYXRpb25UeXBlLnByb3RvdHlwZSA9IHtcblx0aW5pdDogZnVuY3Rpb24oZGF0YSkge1xuXHRcdHRoaXMuZGF0YSA9IGRhdGEuZGF0YTtcblx0XHR0aGlzLnV1aWQgPSBkYXRhLnV1aWQ7XG5cdFx0aWYgKCduYXZpZ2F0b3InIGluIHdpbmRvdyAmJiAnZ2VvbG9jYXRpb24nIGluIG5hdmlnYXRvcikge1xuXHRcdFx0dGhpcy5ldmVudExpc3RlbmVycyA9IFtdO1xuXHRcdFx0dGhpcy5wYXJlbnRFbGVtZW50ID0gZGF0YS5lbGVtZW50O1xuXHRcdFx0dGhpcy5sYXlvdXRFbGVtZW50ID0gZGF0YS5sYXlvdXRFbGVtZW50O1xuXHRcdFx0dGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0dGhpcy5lbC5pbm5lckhUTUwgPSB1dGlscy5jb21waWxlKHRlbXBsYXRlcy5iYXNlLCB7XG5cdFx0XHRcdG5zOiBucyxcblx0XHRcdFx0J3ZhbHVlcy5nZW9sb2NhdGlvbic6IHZhbHVlcy5nZW9sb2NhdGlvbixcblx0XHRcdFx0J3ZhbHVlcy5wb3N0YWxjb2RlJzogdmFsdWVzLnBvc3RhbGNvZGVcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5sYXlvdXRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuXHRcdFx0dGhpcy5idXR0b25zID0gdGhpcy5sYXlvdXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dGhpcy5idXR0b25zW2ldLmRhdGFzZXQudXVpZCA9IHRoaXMudXVpZDtcblx0XHRcdFx0dGhpcy5idXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljayk7XG5cdFx0XHRcdHRoaXMuZXZlbnRMaXN0ZW5lcnMucHVzaCh0aGlzLmJ1dHRvbnNbaV0pO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuZXZlbnRMaXN0ZW5lcnMubGVuZ3RoID4gMClcblx0XHRcdFx0dGhpcy5zdWJzY3JpYmVTZW5kID0gc3Vic2NyaWJlKCdzZW5kJywgdGhpcy5yZW1vdmVBbGxFdmVudExpc3RlbmVycy5iaW5kKHRoaXMpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cHVibGlzaCgnc2VuZCcsIHtcblx0XHRcdFx0dGV4dDogdmFsdWVzLnBvc3RhbGNvZGUsXG5cdFx0XHRcdHNpbGVudDogdHJ1ZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LFxuXHRoYW5kbGVDbGljazogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHRzaWxlbnQ6IHRydWUsXG5cdFx0XHR0ZXh0OiBudWxsXG5cdFx0fTtcblx0XHRkYXRhLnRleHQgPSB0aGlzLmRhdGFzZXQuaW5wdXQ7XG5cdFx0dGhpcy5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNsYXNzTmFtZSk7XG5cdFx0dGhpcy5jbGFzc0xpc3QucmVtb3ZlKGluYWN0aXZlQ2xhc3NOYW1lKTtcblx0XHRwdWJsaXNoKCdzZW5kJywgZGF0YSk7XG5cdFx0cHVibGlzaCgnZm9jdXMtaW5wdXQnKTtcblx0fSxcblx0cmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnM6IGZ1bmN0aW9uKCkge1xuXHRcdGlmICh0aGlzLmV2ZW50TGlzdGVuZXJzLmxlbmd0aCA+IDApIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ldmVudExpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR0aGlzLmV2ZW50TGlzdGVuZXJzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljayk7XG5cdFx0XHRcdHRoaXMuZXZlbnRMaXN0ZW5lcnNbaV0uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5ldmVudExpc3RlbmVycyA9IFtdO1xuXHRcdH1cblx0XHR0aGlzLnN1YnNjcmliZVNlbmQucmVtb3ZlKCk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY2hvb3NlTG9jYXRpb25UeXBlTGF5b3V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL2Nob29zZS1sb2NhdGlvbi10eXBlL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCIuSUJNQ2hhdC1pc2xvY2F0aW9uYXBpLWNvbnRhaW5lciB7XFxuXFx0dGV4dC1hbGlnbjpjZW50ZXI7XFxufVxcblxcbi5JQk1DaGF0LWlzbG9jYXRpb25hcGktY29udGFpbmVyIGJ1dHRvbiB7XFxuXFx0bWFyZ2luOiAxZW0gYXV0byAwIGF1dG87XFxuXFx0bWluLXdpZHRoOjIwMHB4O1xcblxcdG1heC13aWR0aDoyNDBweDtcXG5cXHR3aWR0aDo3NSU7XFxufVxcblxcbi5JQk1DaGF0LWlzbG9jYXRpb25hcGktY29udGFpbmVyIGRpdjpsYXN0LWNoaWxkIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmF3LWxvYWRlciEuL3NyYy9sYXlvdXRzL2Nob29zZS1sb2NhdGlvbi10eXBlL3N0eWxlcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIiR7bnN9LWNvbnRhaW5lclxcXCI+XFxuXFx0PGRpdj48YnV0dG9uIGNsYXNzPVxcXCJJQk1DaGF0LXNlY29uZGFyeS1jb2xvcnNcXFwiIGRhdGEtaW5wdXQ9XFxcIiR7dmFsdWVzLmdlb2xvY2F0aW9ufVxcXCI+VXNlIE15IEN1cnJlbnQgTG9jYXRpb248L2J1dHRvbj48L2Rpdj5cXG5cXHQ8ZGl2PjxidXR0b24gY2xhc3M9XFxcIklCTUNoYXQtc2Vjb25kYXJ5LWNvbG9yc1xcXCIgZGF0YS1pbnB1dD1cXFwiJHt2YWx1ZXMucG9zdGFsY29kZX1cXFwiPkEgWmlwIENvZGU8L2J1dHRvbj48L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9jaG9vc2UtbG9jYXRpb24tdHlwZS90ZW1wbGF0ZXMvYmFzZS5odG1sXG4gKiogbW9kdWxlIGlkID0gNTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxucmVxdWlyZSgnLi9zdHlsZXMuY3NzJyk7XG5cbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcbnZhciBzdWJzY3JpYmUgPSBldmVudHMuc3Vic2NyaWJlO1xudmFyIHB1Ymxpc2ggPSBldmVudHMucHVibGlzaDtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzJyk7XG52YXIgbnMgPSAnSUJNQ2hhdC1jaG9vc2UnO1xudmFyIGFjdGl2ZUNsYXNzTmFtZSA9ICdJQk1DaGF0LWFjY2VudC1jb2xvcnMnO1xudmFyIGluYWN0aXZlQ2xhc3NOYW1lID0gJ0lCTUNoYXQtc2Vjb25kYXJ5LWNvbG9ycyc7XG52YXIgd2lkZ2V0cyA9IFtdO1xudmFyIHRlbXBsYXRlcyA9IHtcblx0YnV0dG9uOiByZXF1aXJlKCcuL3RlbXBsYXRlcy9idXR0b24uaHRtbCcpXG59O1xuXG52YXIgY2hvb3NlTGF5b3V0ID0ge1xuXHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHRzdWJzY3JpYmUoJ2xheW91dDpjaG9vc2UnLCBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHR2YXIgd2lkZ2V0ID0gbmV3IENob29zZShkYXRhKTtcblx0XHRcdHdpZGdldHNbZGF0YS51dWlkXSA9IHdpZGdldDtcblx0XHR9KTtcblx0XHRzdWJzY3JpYmUoJ2xheW91dDpjb25maXJtJywgZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0dmFyIHdpZGdldCA9IG5ldyBDaG9vc2UoZGF0YSk7XG5cdFx0XHR3aWRnZXRzW2RhdGEudXVpZF0gPSB3aWRnZXQ7XG5cdFx0fSk7XG5cdH1cbn07XG5cbmZ1bmN0aW9uIENob29zZShkYXRhKSB7XG5cdHRoaXMuaW5pdChkYXRhKTtcbn1cblxuQ2hvb3NlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oZGF0YSkge1xuXHR0aGlzLmFsbG93TXVsdGlwbGUgPSAoZGF0YS5tZXNzYWdlLmlucHV0dmFsaWRhdGlvbi5zb21lT2YgIT09IHVuZGVmaW5lZCk7XG5cdHRoaXMudmFsdWVzID0gW107XG5cdHRoaXMuZGF0YSA9ICh0aGlzLmFsbG93TXVsdGlwbGUpID8gZGF0YS5tZXNzYWdlLmlucHV0dmFsaWRhdGlvbi5zb21lT2YgOiBkYXRhLm1lc3NhZ2UuaW5wdXR2YWxpZGF0aW9uLm9uZU9mO1xuXHR0aGlzLnV1aWQgPSBkYXRhLnV1aWQ7XG5cdHRoaXMucGFyZW50RWxlbWVudCA9IGRhdGEuZWxlbWVudDtcblx0dGhpcy5sYXlvdXRFbGVtZW50ID0gZGF0YS5sYXlvdXRFbGVtZW50O1xuXHR0aGlzLm1zZ0VsZW1lbnQgPSBkYXRhLm1zZ0VsZW1lbnQ7XG5cdHRoaXMuZHJhd0J1dHRvbnMoKTtcblx0dGhpcy5zdWJzY3JpYmVTZW5kID0gc3Vic2NyaWJlKCdzZW5kJywgdGhpcy5yZW1vdmVBbGxFdmVudExpc3RlbmVycy5iaW5kKHRoaXMpKTtcbn07XG5cbkNob29zZS5wcm90b3R5cGUuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcblxuQ2hvb3NlLnByb3RvdHlwZS5kcmF3QnV0dG9ucyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgdG1wbCA9IHRlbXBsYXRlcy5idXR0b247XG5cdHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dGhpcy5lbC5jbGFzc0xpc3QuYWRkKG5zICsgJy1jb250YWluZXInKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdHZhciB0ZXh0ID0gdGhpcy5kYXRhW2ldO1xuXHRcdHZhciBidXR0b25Ib2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRidXR0b25Ib2xkZXIuY2xhc3NMaXN0LmFkZChucyArICctb3B0aW9uJyk7XG5cdFx0dmFyIHBhcnNlZCA9IHV0aWxzLmNvbXBpbGUodG1wbCwge1xuXHRcdFx0dGV4dDogdGV4dFxuXHRcdH0pO1xuXHRcdHZhciBidXR0b247XG5cdFx0YnV0dG9uSG9sZGVyLmlubmVySFRNTCA9IHBhcnNlZDtcblx0XHR0aGlzLmVsLmFwcGVuZENoaWxkKGJ1dHRvbkhvbGRlcik7XG5cdFx0YnV0dG9uID0gYnV0dG9uSG9sZGVyLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuXHRcdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXVpZCcsIHRoaXMudXVpZCk7XG5cdFx0YnV0dG9uLmNsYXNzTGlzdC5hZGQoaW5hY3RpdmVDbGFzc05hbWUpO1xuXHRcdHRoaXMuYWRkTGlzdGVuZXIoYnV0dG9uKTtcblx0fVxuXG5cdGlmICh0aGlzLmFsbG93TXVsdGlwbGUpIHtcblx0XHR2YXIgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dmFyIHN1Ym1pdEJ0biA9IHV0aWxzLmNvbXBpbGUodGVtcGxhdGVzLmZpZWxkLCB7XG5cdFx0XHR0ZXh0OiAnU3VibWl0J1xuXHRcdH0pO1xuXHRcdHN1Ym1pdC5jbGFzc05hbWUgPSBucyArICctc3VibWl0Jztcblx0XHRzdWJtaXQuaW5uZXJIVE1MID0gc3VibWl0QnRuO1xuXHRcdHRoaXMuc3VibWl0QnV0dG9uID0gc3VibWl0LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuXHRcdHRoaXMuc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoYWN0aXZlQ2xhc3NOYW1lKTtcblx0XHR0aGlzLnN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdFx0dGhpcy5lbC5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXHRcdHRoaXMuYWRkU3VibWl0TGlzdGVuZXIodGhpcy5zdWJtaXRCdXR0b24pO1xuXHR9XG5cblx0dGhpcy5sYXlvdXRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZWwpO1xufTtcblxuQ2hvb3NlLnByb3RvdHlwZS5oYW5kbGVDbGljayA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgZGF0YSA9IHtcblx0XHRzaWxlbnQ6IHRydWUsXG5cdFx0dGV4dDogbnVsbFxuXHR9O1xuXHRkYXRhLnRleHQgPSB0aGlzLmRhdGFzZXQuaW5wdXQ7XG5cdHRoaXMuY2xhc3NOYW1lID0gYWN0aXZlQ2xhc3NOYW1lICsgJyBJQk1DaGF0LWFjY2VudC1jb2xvcnMnO1xuXHRwdWJsaXNoKCdzZW5kJywgZGF0YSk7XG59O1xuXG5DaG9vc2UucHJvdG90eXBlLmhhbmRsZU11bHRpQ2xpY2sgPSBmdW5jdGlvbigpIHtcblx0dmFyIGJ1dHRvbnM7XG5cdHZhciBpbnN0YW5jZSA9IHdpZGdldHNbdGhpcy5kYXRhc2V0LnV1aWRdO1xuXHRpZiAodXRpbHMuaGFzQ2xhc3ModGhpcywgYWN0aXZlQ2xhc3NOYW1lKSkge1xuXHRcdHRoaXMuY2xhc3NMaXN0LmFkZChpbmFjdGl2ZUNsYXNzTmFtZSk7XG5cdFx0dGhpcy5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUNsYXNzTmFtZSk7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNsYXNzTmFtZSk7XG5cdFx0dGhpcy5jbGFzc0xpc3QucmVtb3ZlKGluYWN0aXZlQ2xhc3NOYW1lKTtcblx0fVxuXHRidXR0b25zID0gaW5zdGFuY2UuZWwucXVlcnlTZWxlY3RvckFsbCgnLicgKyBucyArICctb3B0aW9uIC4nICsgYWN0aXZlQ2xhc3NOYW1lKTtcblx0aWYgKGJ1dHRvbnMubGVuZ3RoID4gMClcblx0XHRpbnN0YW5jZS5zdWJtaXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuXHRlbHNlXG5cdFx0aW5zdGFuY2Uuc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcbn07XG5cbkNob29zZS5wcm90b3R5cGUuaGFuZGxlU3VibWl0ID0gZnVuY3Rpb24oKSB7XG5cdHZhciBidXR0b25zID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGFjdGl2ZUNsYXNzTmFtZSk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKylcblx0XHR0aGlzLnZhbHVlcy5wdXNoKGJ1dHRvbnNbaV0uZGF0YXNldC5pbnB1dCk7XG5cdHB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0c2lsZW50OiB0cnVlLFxuXHRcdHRleHQ6IHRoaXMudmFsdWVzLnRvU3RyaW5nKClcblx0fSk7XG59O1xuXG5DaG9vc2UucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24oZWwpIHtcblx0aWYgKHRoaXMuYWxsb3dNdWx0aXBsZSlcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlTXVsdGlDbGljayk7XG5cdGVsc2Vcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spO1xuXHR0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2goeyBlbDogZWwsIGNiOiAodGhpcy5hbGxvd011bHRpcGxlKSA/IHRoaXMuaGFuZGxlTXVsdGlDbGljazogdGhpcy5oYW5kbGVDbGljayB9KTtcbn07XG5cbkNob29zZS5wcm90b3R5cGUuYWRkU3VibWl0TGlzdGVuZXIgPSBmdW5jdGlvbihlbCkge1xuXHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcykpO1xuXHR0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2goeyBlbDogZWwsIGNiOiB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpIH0pO1xufTtcblxuQ2hvb3NlLnByb3RvdHlwZS5yZW1vdmVBbGxFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5ldmVudExpc3RlbmVycy5sZW5ndGggPiAwKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmV2ZW50TGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0aGlzLmV2ZW50TGlzdGVuZXJzW2ldLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ldmVudExpc3RlbmVyc1tpXS5jYik7XG5cdFx0XHR0aGlzLmV2ZW50TGlzdGVuZXJzW2ldLmVsLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcblx0XHR9XG5cdFx0dGhpcy5ldmVudExpc3RlbmVycyA9IFtdO1xuXHRcdHRoaXMuc3Vic2NyaWJlU2VuZC5yZW1vdmUoKTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjaG9vc2VMYXlvdXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvY2hvb3NlL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCIuSUJNQ2hhdC1jaG9vc2UtY29udGFpbmVyIHtcXG5cXHR0ZXh0LWFsaWduOmNlbnRlcjtcXG5cXHRwYWRkaW5nOjAgMCAxZW0gMDtcXG59XFxuXFxuLklCTUNoYXQtY2hvb3NlLWNvbnRhaW5lciBzcGFuIHtcXG5cXHRkaXNwbGF5OmlubGluZS1ibG9jaztcXG5cXHRtYXJnaW46IDFlbSAxZW0gMCAxZW07XFxufVxcblxcbi5JQk1DaGF0LWNob29zZS1jb250YWluZXIgZGl2IHtcXG5cXHRtYXJnaW46IDFlbSBhdXRvIDAgYXV0bztcXG59XFxuXFxuLklCTUNoYXQtY2hvb3NlLWNvbnRhaW5lciBidXR0b24ge1xcblxcdG1pbi13aWR0aDoyMzBweDtcXG5cXHRtYXgtd2lkdGg6MjcwcHg7XFxufVxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmF3LWxvYWRlciEuL3NyYy9sYXlvdXRzL2Nob29zZS9zdHlsZXMuY3NzXG4gKiogbW9kdWxlIGlkID0gNTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8YnV0dG9uIGNsYXNzPVxcXCJJQk1DaGF0LXNlY29uZGFyeS1jb2xvcnNcXFwiIGRhdGEtaW5wdXQ9XFxcIiR7dGV4dH1cXFwiPiR7dGV4dH08L2J1dHRvbj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9jaG9vc2UvdGVtcGxhdGVzL2J1dHRvbi5odG1sXG4gKiogbW9kdWxlIGlkID0gNjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxucmVxdWlyZSgnLi9zdHlsZXMuY3NzJyk7XG5cbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcbnZhciBwcm9maWxlID0gcmVxdWlyZSgnLi4vLi4vcHJvZmlsZScpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMnKTtcbnZhciBzdWJzY3JpYmUgPSBldmVudHMuc3Vic2NyaWJlO1xudmFyIHB1Ymxpc2ggPSBldmVudHMucHVibGlzaDtcbnZhciBucyA9ICdJQk1DaGF0LWZvcm0nO1xudmFyIGFjdGl2ZUNsYXNzTmFtZSA9ICdJQk1DaGF0LWFjY2VudC1jb2xvcnMnO1xudmFyIGluYWN0aXZlQ2xhc3NOYW1lID0gJ0lCTUNoYXQtc2Vjb25kYXJ5LWNvbG9ycyc7XG52YXIgdGVtcGxhdGVzID0ge1xuXHRiYXNlOiByZXF1aXJlKCcuL3RlbXBsYXRlcy9iYXNlLmh0bWwnKSxcblx0ZmllbGQ6IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2ZpZWxkLmh0bWwnKVxufTtcbnZhciB3aWRnZXRzID0gW107XG5cbnZhciBmb3JtTGF5b3V0ID0ge1xuXHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHRzdWJzY3JpYmUoJ2xheW91dDpmb3JtJywgZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0dmFyIHdpZGdldCA9IG5ldyBGb3JtKGRhdGEpO1xuXHRcdFx0d2lkZ2V0c1tkYXRhLnV1aWRdID0gd2lkZ2V0O1xuXHRcdH0pO1xuXHR9XG59O1xuXG5mdW5jdGlvbiBGb3JtKGRhdGEpIHtcblx0dGhpcy5pbml0KGRhdGEpO1xufVxuXG5Gb3JtLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oZGF0YSkge1xuXHR0aGlzLmRhdGEgPSBkYXRhLm1lc3NhZ2Uuc3RvcmUgfHwgW107XG5cdHRoaXMuYWN0aW9uID0gZGF0YS5tZXNzYWdlLmFjdGlvbiB8fCAnJztcblx0dGhpcy51dWlkID0gZGF0YS51dWlkO1xuXHR0aGlzLnBhcmVudEVsZW1lbnQgPSBkYXRhLmVsZW1lbnQ7XG5cdHRoaXMubGF5b3V0RWxlbWVudCA9IGRhdGEubGF5b3V0RWxlbWVudDtcblx0dGhpcy5tc2dFbGVtZW50ID0gZGF0YS5tc2dFbGVtZW50O1xuXHR0aGlzLmRyYXdGb3JtKCk7XG5cdHRoaXMuc3Vic2NyaWJlU2VuZCA9IHN1YnNjcmliZSgnc2VuZCcsIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMuYmluZCh0aGlzKSk7XG5cdHB1Ymxpc2goJ2Rpc2FibGUtaW5wdXQnKTtcbn07XG5cbkZvcm0ucHJvdG90eXBlLmRyYXdGb3JtID0gZnVuY3Rpb24oKSB7XG5cdHZhciBiYXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHZhciBmb3JtRmllbGRzO1xuXHRiYXNlLmlubmVySFRNTCA9IHRlbXBsYXRlcy5iYXNlO1xuXHRmb3JtRmllbGRzID0gYmFzZS5xdWVyeVNlbGVjdG9yKCcuSUJNQ2hhdC1mb3JtLWZpZWxkcycpO1xuXHR0aGlzLmRhdGEuZm9yRWFjaChmdW5jdGlvbihkYXR1bSkge1xuXHRcdHZhciBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGZpZWxkLmlubmVySFRNTCA9IHV0aWxzLmNvbXBpbGUodGVtcGxhdGVzLmZpZWxkLCB7XG5cdFx0XHRsYWJlbDogZGF0dW0ubGFiZWwgfHwgJycsXG5cdFx0XHRuYW1lOiBkYXR1bS5uYW1lLFxuXHRcdFx0dmFsdWU6ICcnXG5cdFx0fSk7XG5cdFx0ZmllbGQuY2xhc3NOYW1lID0gbnMgKyAnLWZpZWxkcy1yb3cnO1xuXHRcdGZvcm1GaWVsZHMuYXBwZW5kQ2hpbGQoZmllbGQpO1xuXHR9KTtcblx0dGhpcy5maWVsZHMgPSBmb3JtRmllbGRzLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG5cdHRoaXMuc3VibWl0QnV0dG9uID0gYmFzZS5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1zdWJtaXQnKTtcblx0dGhpcy5jYW5jZWxCdXR0b24gPSBiYXNlLnF1ZXJ5U2VsZWN0b3IoJy4nICsgbnMgKyAnLWNhbmNlbCcpO1xuXHR0aGlzLnN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKGluYWN0aXZlQ2xhc3NOYW1lKTtcblx0dGhpcy5jYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZChpbmFjdGl2ZUNsYXNzTmFtZSk7XG5cdHRoaXMubGF5b3V0RWxlbWVudC5hcHBlbmRDaGlsZChiYXNlKTtcblx0dGhpcy5maWVsZHNbMF0uZm9jdXMoKTtcblx0dGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xufTtcblxuRm9ybS5wcm90b3R5cGUuaGFuZGxlU3VibWl0ID0gZnVuY3Rpb24oKSB7XG5cdGlmICh0aGlzLnZhbGlkYXRlRmllbGRzKCkgPT09IHRydWUpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZmllbGRzLmxlbmd0aDsgaSsrKVxuXHRcdFx0cHJvZmlsZS5zZXQodGhpcy5maWVsZHNbaV0uZ2V0QXR0cmlidXRlKCduYW1lJyksIHRoaXMuZmllbGRzW2ldLnZhbHVlKTtcblx0XHR0aGlzLnN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNsYXNzTmFtZSk7XG5cdFx0cHVibGlzaCgnc2VuZCcsIHtcblx0XHRcdHNpbGVudDogdHJ1ZSxcblx0XHRcdHRleHQ6ICdzdWNjZXNzJ1xuXHRcdH0pO1xuXHRcdHB1Ymxpc2goJ2VuYWJsZS1pbnB1dCcpO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMuc2V0Rm9jdXNPbkVycm9yKCk7XG5cdH1cbn07XG5cbkZvcm0ucHJvdG90eXBlLnNldEZvY3VzT25FcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuZmllbGRzLmxlbmd0aDsgaisrKSB7XG5cdFx0dmFyIG5hbWUgPSB0aGlzLmZpZWxkc1tqXS5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcblx0XHR2YXIgZWwgPSB0aGlzLmxheW91dEVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdmFsaWRhdGlvbi1mb3I9XCInICsgbmFtZSArICdcIl0nKTtcblx0XHRpZiAoZWwuZGF0YXNldC52YWxpZCA9PT0gXCJmYWxzZVwiKSB7XG5cdFx0XHR0aGlzLmZpZWxkc1tqXS5mb2N1cygpO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG59O1xuXG5Gb3JtLnByb3RvdHlwZS52YWxpZGF0ZUZpZWxkcyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgYWxsRmllbGRzQXJlVmFsaWQgPSB0cnVlO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdGlmICh0aGlzLmRhdGFbaV0ucmVxdWlyZWQgPT09ICd0cnVlJykge1xuXHRcdFx0dmFyIGZpZWxkSXNWYWxpZCA9IHRoaXMudmFsaWRhdGVGaWVsZCh0aGlzLmZpZWxkc1tpXSwgdGhpcy5kYXRhW2ldKTtcblx0XHRcdGFsbEZpZWxkc0FyZVZhbGlkID0gYWxsRmllbGRzQXJlVmFsaWQgJiYgZmllbGRJc1ZhbGlkO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gYWxsRmllbGRzQXJlVmFsaWQ7XG59O1xuXG5Gb3JtLnByb3RvdHlwZS52YWxpZGF0ZUZpZWxkID0gZnVuY3Rpb24oZmllbGQsIGRhdHVtKSB7XG5cdHZhciB2YWxpZCA9IHRydWU7XG5cdGlmICghZmllbGQudmFsdWUgfHwgZmllbGQudmFsdWUudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuXHRcdHRoaXMuYWRkRXJyb3IoZmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJyksICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLicpO1xuXHRcdHZhbGlkID0gZmFsc2U7XG5cdH0gZWxzZSBpZiAoZGF0dW0udmFsaWRhdGlvbnMgJiYgZGF0dW0udmFsaWRhdGlvbnMubGVuZ3RoICE9PSAwKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkYXR1bS52YWxpZGF0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHZhbGlkYXRpb24gPSBkYXR1bS52YWxpZGF0aW9uc1tpXTtcblx0XHRcdHZhciB2YWxpZGF0aW9uUmVnZXggPSB2YWxpZGF0aW9uLnJlZ2V4O1xuXHRcdFx0Ly9UT0RPOiBoYW5kbGUgdGhpcyBiZXR0ZXJcblx0XHRcdGlmICh2YWxpZGF0aW9uLnJlZ2V4LmluZGV4T2YoJ14oJykgIT09IDApXG5cdFx0XHRcdHZhbGlkYXRpb25SZWdleCA9ICdeKCcgKyB2YWxpZGF0aW9uLnJlZ2V4ICsgJykkJztcblx0XHRcdHZhciByZWdleCA9IG5ldyBSZWdFeHAodmFsaWRhdGlvblJlZ2V4KTtcblx0XHRcdHZhciBtYXRjaGVzID0gcmVnZXgudGVzdChmaWVsZC52YWx1ZSk7XG5cdFx0XHRpZiAoIW1hdGNoZXMpIHtcblx0XHRcdFx0dGhpcy5hZGRFcnJvcihmaWVsZC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSwgdmFsaWRhdGlvbi5tZXNzYWdlKTtcblx0XHRcdFx0dmFsaWQgPSBmYWxzZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiB2YWxpZDtcbn07XG5cbkZvcm0ucHJvdG90eXBlLmFkZEVycm9yID0gZnVuY3Rpb24obmFtZSwgbXNnKSB7XG5cdHZhciBlbCA9IHRoaXMubGF5b3V0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS12YWxpZGF0aW9uLWZvcj1cIicgKyBuYW1lICsgJ1wiXScpO1xuXHRlbC5kYXRhc2V0LnZhbGlkID0gZmFsc2U7XG5cdGVsLnRleHRDb250ZW50ID0gbXNnO1xuXHRlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn07XG5cbkZvcm0ucHJvdG90eXBlLnJlbW92ZUVycm9yID0gZnVuY3Rpb24obmFtZSkge1xuXHR2YXIgZWwgPSB0aGlzLmxheW91dEVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdmFsaWRhdGlvbi1mb3I9XCInICsgbmFtZSArICdcIl0nKTtcblx0ZWwuZGF0YXNldC52YWxpZCA9IHRydWU7XG5cdGVsLnRleHRDb250ZW50ID0gJyc7XG5cdGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59O1xuXG5Gb3JtLnByb3RvdHlwZS5yZW1vdmVBbGxFcnJvcnMgPSBmdW5jdGlvbigpIHtcblx0dmFyIGVscyA9IHRoaXMubGF5b3V0RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS12YWxpZGF0aW9uLWZvcl0nKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpKyspXG5cdFx0dGhpcy5yZW1vdmVFcnJvcihlbHNbaV0uYXR0cignZGF0YS12YWxpZGF0aW9uLWZvcicpKTtcbn07XG5cbkZvcm0ucHJvdG90eXBlLmhhbmRsZUVudGVyID0gZnVuY3Rpb24oZSkge1xuXHRpZiAoZS5rZXlDb2RlID09PSAxMylcblx0XHR0aGlzLmhhbmRsZVN1Ym1pdCgpO1xufTtcblxuRm9ybS5wcm90b3R5cGUuaGFuZGxlSW5wdXQgPSBmdW5jdGlvbihlKSB7XG5cdHZhciBuYW1lID0gZS50YXJnZXQubmFtZTtcblx0dGhpcy5yZW1vdmVFcnJvcihuYW1lKTtcbn07XG5cbkZvcm0ucHJvdG90eXBlLmhhbmRsZUNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLmNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNsYXNzTmFtZSk7XG5cdHB1Ymxpc2goJ2VuYWJsZS1pbnB1dCcpO1xuXHRwdWJsaXNoKCdzZW5kJywge1xuXHRcdHNpbGVudDogdHJ1ZSxcblx0XHR0ZXh0OiAnY2FuY2VsJ1xuXHR9KTtcbn07XG5cbkZvcm0ucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDYW5jZWwuYmluZCh0aGlzKSk7XG5cdHRoaXMuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKSk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5maWVsZHMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZmllbGQgPSB0aGlzLmZpZWxkc1tpXTtcblx0XHRmaWVsZC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHRoaXMuaGFuZGxlRW50ZXIuYmluZCh0aGlzKSk7XG5cdFx0ZmllbGQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLmhhbmRsZUlucHV0LmJpbmQodGhpcykpO1xuXHR9XG59O1xuXG5Gb3JtLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLmNhbmNlbEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2FuY2VsLmJpbmQodGhpcykpO1xuXHR0aGlzLmNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdHRoaXMuc3VibWl0QnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKSk7XG5cdHRoaXMuc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZpZWxkcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBmaWVsZCA9IHRoaXMuZmllbGRzW2ldO1xuXHRcdGZpZWxkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgdGhpcy5oYW5kbGVFbnRlci5iaW5kKHRoaXMpKTtcblx0XHRmaWVsZC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuaGFuZGxlSW5wdXQuYmluZCh0aGlzKSk7XG5cdFx0ZmllbGQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuXHR9XG5cblx0dGhpcy5zdWJzY3JpYmVTZW5kLnJlbW92ZSgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmb3JtTGF5b3V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL2Zvcm0vaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA2MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5JQk1DaGF0LWZvcm0tY29udGFpbmVyIHtcXG5cXHR0ZXh0LWFsaWduOmNlbnRlcjtcXG5cXHRwYWRkaW5nOjAgMCAxZW0gMDtcXG59XFxuXFxuLklCTUNoYXQtZm9ybS1maWVsZHMge1xcblxcdG1hcmdpbjphdXRvO1xcblxcdHRleHQtYWxpZ246bGVmdDtcXG5cXHRtYXgtd2lkdGg6MzYwcHg7XFxuXFx0d2lkdGg6MTAwJTtcXG59XFxuXFxuLklCTUNoYXQtZm9ybS1maWVsZHMtcm93IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTowLjc1ZW07XFxufVxcblxcbi5JQk1DaGF0LWZvcm0tZmllbGRzLXJvdyBpbnB1dCB7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5JQk1DaGF0LWZvcm0tYnV0dG9ucyB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWF4LXdpZHRoOiAzNjBweDtcXG5cXHRoZWlnaHQ6IDIuNWVtO1xcblxcdHRleHQtYWxpZ246Y2VudGVyO1xcblxcdG1hcmdpbjphdXRvO1xcbn1cXG5cXG4uSUJNQ2hhdC1mb3JtLWJ1dHRvbnMgYnV0dG9uIHtcXG5cXHRsaW5lLWhlaWdodDogMi41ZW07XFxuXFx0d2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4uSUJNQ2hhdC1mb3JtLWNhbmNlbCB7XFxuXFx0ZmxvYXQ6bGVmdDtcXG5cXHRtYXgtd2lkdGg6IDUwJTtcXG59XFxuLklCTUNoYXQtZm9ybS1zdWJtaXQge1xcblxcdGZsb2F0OnJpZ2h0O1xcblxcdG1heC13aWR0aDogNTAlO1xcbn1cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jhdy1sb2FkZXIhLi9zcmMvbGF5b3V0cy9mb3JtL3N0eWxlcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgQm90U0RLID0gcmVxdWlyZSgnQHdhdHNvbi12aXJ0dWFsLWFnZW50L2NsaWVudC1zZGsvbGliL3dlYicpO1xudmFyIHByb2ZpbGUgPSBCb3RTREsucHJvZmlsZTtcblxubW9kdWxlLmV4cG9ydHMgPSBwcm9maWxlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wcm9maWxlL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiU0RLXCIsW10sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5TREs9ZSgpOnQuU0RLPWUoKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXtmdW5jdGlvbiBlKHIpe2lmKG5bcl0pcmV0dXJuIG5bcl0uZXhwb3J0czt2YXIgbz1uW3JdPXtleHBvcnRzOnt9LGlkOnIsbG9hZGVkOiExfTtyZXR1cm4gdFtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxlKSxvLmxvYWRlZD0hMCxvLmV4cG9ydHN9dmFyIG49e307cmV0dXJuIGUubT10LGUuYz1uLGUucD1cIlwiLGUoMCl9KFtmdW5jdGlvbih0LGUsbil7dC5leHBvcnRzPW4oMjIpfSxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4odCl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09Yi5jYWxsKHQpfWZ1bmN0aW9uIHIodCl7cmV0dXJuXCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiPT09Yi5jYWxsKHQpfWZ1bmN0aW9uIG8odCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEZvcm1EYXRhJiZ0IGluc3RhbmNlb2YgRm9ybURhdGF9ZnVuY3Rpb24gaSh0KXt2YXIgZTtyZXR1cm4gZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgQXJyYXlCdWZmZXImJkFycmF5QnVmZmVyLmlzVmlldz9BcnJheUJ1ZmZlci5pc1ZpZXcodCk6dCYmdC5idWZmZXImJnQuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXJ9ZnVuY3Rpb24gdSh0KXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdH1mdW5jdGlvbiBzKHQpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiB0fWZ1bmN0aW9uIGModCl7cmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIHR9ZnVuY3Rpb24gYSh0KXtyZXR1cm4gbnVsbCE9PXQmJlwib2JqZWN0XCI9PXR5cGVvZiB0fWZ1bmN0aW9uIGYodCl7cmV0dXJuXCJbb2JqZWN0IERhdGVdXCI9PT1iLmNhbGwodCl9ZnVuY3Rpb24gbCh0KXtyZXR1cm5cIltvYmplY3QgRmlsZV1cIj09PWIuY2FsbCh0KX1mdW5jdGlvbiBwKHQpe3JldHVyblwiW29iamVjdCBCbG9iXVwiPT09Yi5jYWxsKHQpfWZ1bmN0aW9uIGgodCl7cmV0dXJuXCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT09Yi5jYWxsKHQpfWZ1bmN0aW9uIGQodCl7cmV0dXJuIGEodCkmJmgodC5waXBlKX1mdW5jdGlvbiBtKHQpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBVUkxTZWFyY2hQYXJhbXMmJnQgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXN9ZnVuY3Rpb24gdih0KXtyZXR1cm4gdC5yZXBsYWNlKC9eXFxzKi8sXCJcIikucmVwbGFjZSgvXFxzKiQvLFwiXCIpfWZ1bmN0aW9uIHkoKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnR9ZnVuY3Rpb24gZyh0LGUpe2lmKG51bGwhPT10JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgdClpZihcIm9iamVjdFwiPT10eXBlb2YgdHx8bih0KXx8KHQ9W3RdKSxuKHQpKWZvcih2YXIgcj0wLG89dC5sZW5ndGg7cjxvO3IrKyllLmNhbGwobnVsbCx0W3JdLHIsdCk7ZWxzZSBmb3IodmFyIGkgaW4gdCl0Lmhhc093blByb3BlcnR5KGkpJiZlLmNhbGwobnVsbCx0W2ldLGksdCl9ZnVuY3Rpb24gdygpe2Z1bmN0aW9uIHQodCxuKXtcIm9iamVjdFwiPT10eXBlb2YgZVtuXSYmXCJvYmplY3RcIj09dHlwZW9mIHQ/ZVtuXT13KGVbbl0sdCk6ZVtuXT10fWZvcih2YXIgZT17fSxuPTAscj1hcmd1bWVudHMubGVuZ3RoO248cjtuKyspZyhhcmd1bWVudHNbbl0sdCk7cmV0dXJuIGV9dmFyIGI9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZzt0LmV4cG9ydHM9e2lzQXJyYXk6bixpc0FycmF5QnVmZmVyOnIsaXNGb3JtRGF0YTpvLGlzQXJyYXlCdWZmZXJWaWV3OmksaXNTdHJpbmc6dSxpc051bWJlcjpzLGlzT2JqZWN0OmEsaXNVbmRlZmluZWQ6Yyxpc0RhdGU6Zixpc0ZpbGU6bCxpc0Jsb2I6cCxpc0Z1bmN0aW9uOmgsaXNTdHJlYW06ZCxpc1VSTFNlYXJjaFBhcmFtczptLGlzU3RhbmRhcmRCcm93c2VyRW52OnksZm9yRWFjaDpnLG1lcmdlOncsdHJpbTp2fX0sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiBuKCl7dGhyb3cgbmV3IEVycm9yKFwic2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiByKCl7dGhyb3cgbmV3IEVycm9yKFwiY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfWZ1bmN0aW9uIG8odCl7aWYoZj09PXNldFRpbWVvdXQpcmV0dXJuIHNldFRpbWVvdXQodCwwKTtpZigoZj09PW58fCFmKSYmc2V0VGltZW91dClyZXR1cm4gZj1zZXRUaW1lb3V0LHNldFRpbWVvdXQodCwwKTt0cnl7cmV0dXJuIGYodCwwKX1jYXRjaChlKXt0cnl7cmV0dXJuIGYuY2FsbChudWxsLHQsMCl9Y2F0Y2goZSl7cmV0dXJuIGYuY2FsbCh0aGlzLHQsMCl9fX1mdW5jdGlvbiBpKHQpe2lmKGw9PT1jbGVhclRpbWVvdXQpcmV0dXJuIGNsZWFyVGltZW91dCh0KTtpZigobD09PXJ8fCFsKSYmY2xlYXJUaW1lb3V0KXJldHVybiBsPWNsZWFyVGltZW91dCxjbGVhclRpbWVvdXQodCk7dHJ5e3JldHVybiBsKHQpfWNhdGNoKGUpe3RyeXtyZXR1cm4gbC5jYWxsKG51bGwsdCl9Y2F0Y2goZSl7cmV0dXJuIGwuY2FsbCh0aGlzLHQpfX19ZnVuY3Rpb24gdSgpe20mJmgmJihtPSExLGgubGVuZ3RoP2Q9aC5jb25jYXQoZCk6dj0tMSxkLmxlbmd0aCYmcygpKX1mdW5jdGlvbiBzKCl7aWYoIW0pe3ZhciB0PW8odSk7bT0hMDtmb3IodmFyIGU9ZC5sZW5ndGg7ZTspe2ZvcihoPWQsZD1bXTsrK3Y8ZTspaCYmaFt2XS5ydW4oKTt2PS0xLGU9ZC5sZW5ndGh9aD1udWxsLG09ITEsaSh0KX19ZnVuY3Rpb24gYyh0LGUpe3RoaXMuZnVuPXQsdGhpcy5hcnJheT1lfWZ1bmN0aW9uIGEoKXt9dmFyIGYsbCxwPXQuZXhwb3J0cz17fTshZnVuY3Rpb24oKXt0cnl7Zj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBzZXRUaW1lb3V0P3NldFRpbWVvdXQ6bn1jYXRjaCh0KXtmPW59dHJ5e2w9XCJmdW5jdGlvblwiPT10eXBlb2YgY2xlYXJUaW1lb3V0P2NsZWFyVGltZW91dDpyfWNhdGNoKHQpe2w9cn19KCk7dmFyIGgsZD1bXSxtPSExLHY9LTE7cC5uZXh0VGljaz1mdW5jdGlvbih0KXt2YXIgZT1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aC0xKTtpZihhcmd1bWVudHMubGVuZ3RoPjEpZm9yKHZhciBuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyllW24tMV09YXJndW1lbnRzW25dO2QucHVzaChuZXcgYyh0LGUpKSwxIT09ZC5sZW5ndGh8fG18fG8ocyl9LGMucHJvdG90eXBlLnJ1bj1mdW5jdGlvbigpe3RoaXMuZnVuLmFwcGx5KG51bGwsdGhpcy5hcnJheSl9LHAudGl0bGU9XCJicm93c2VyXCIscC5icm93c2VyPSEwLHAuZW52PXt9LHAuYXJndj1bXSxwLnZlcnNpb249XCJcIixwLnZlcnNpb25zPXt9LHAub249YSxwLmFkZExpc3RlbmVyPWEscC5vbmNlPWEscC5vZmY9YSxwLnJlbW92ZUxpc3RlbmVyPWEscC5yZW1vdmVBbGxMaXN0ZW5lcnM9YSxwLmVtaXQ9YSxwLmJpbmRpbmc9ZnVuY3Rpb24odCl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWRcIil9LHAuY3dkPWZ1bmN0aW9uKCl7cmV0dXJuXCIvXCJ9LHAuY2hkaXI9ZnVuY3Rpb24odCl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkXCIpfSxwLnVtYXNrPWZ1bmN0aW9uKCl7cmV0dXJuIDB9fSxmdW5jdGlvbih0LGUsbil7KGZ1bmN0aW9uKGUpe1widXNlIHN0cmljdFwiO3ZhciByPW4oMSksbz1uKDEyKSxpPW4oMTgpLHU9big0KSxzPW4oMTYpLGM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93LmJ0b2F8fG4oMTEpLGE9bigxOSk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZixsKXt2YXIgcD1sLmRhdGEsaD1sLmhlYWRlcnM7ci5pc0Zvcm1EYXRhKHApJiZkZWxldGUgaFtcIkNvbnRlbnQtVHlwZVwiXTt2YXIgZD1uZXcgWE1MSHR0cFJlcXVlc3QsbT1cIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLHY9ITE7aWYoXCJ0ZXN0XCI9PT1lLmVudi5OT0RFX0VOVnx8XCJ1bmRlZmluZWRcIj09dHlwZW9mIHdpbmRvd3x8IXdpbmRvdy5YRG9tYWluUmVxdWVzdHx8XCJ3aXRoQ3JlZGVudGlhbHNcImluIGR8fHMobC51cmwpfHwoZD1uZXcgd2luZG93LlhEb21haW5SZXF1ZXN0LG09XCJvbmxvYWRcIix2PSEwLGQub25wcm9ncmVzcz1mdW5jdGlvbigpe30sZC5vbnRpbWVvdXQ9ZnVuY3Rpb24oKXt9KSxsLmF1dGgpe3ZhciB5PWwuYXV0aC51c2VybmFtZXx8XCJcIixnPWwuYXV0aC5wYXNzd29yZHx8XCJcIjtoLkF1dGhvcml6YXRpb249XCJCYXNpYyBcIitjKHkrXCI6XCIrZyl9aWYoZC5vcGVuKGwubWV0aG9kLnRvVXBwZXJDYXNlKCksbyhsLnVybCxsLnBhcmFtcyxsLnBhcmFtc1NlcmlhbGl6ZXIpLCEwKSxkLnRpbWVvdXQ9bC50aW1lb3V0LGRbbV09ZnVuY3Rpb24oKXtpZihkJiYoND09PWQucmVhZHlTdGF0ZXx8dikmJjAhPT1kLnN0YXR1cyl7dmFyIGU9XCJnZXRBbGxSZXNwb25zZUhlYWRlcnNcImluIGQ/aShkLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKTpudWxsLG49bC5yZXNwb25zZVR5cGUmJlwidGV4dFwiIT09bC5yZXNwb25zZVR5cGU/ZC5yZXNwb25zZTpkLnJlc3BvbnNlVGV4dCxyPXtkYXRhOnUobixlLGwudHJhbnNmb3JtUmVzcG9uc2UpLHN0YXR1czoxMjIzPT09ZC5zdGF0dXM/MjA0OmQuc3RhdHVzLHN0YXR1c1RleHQ6MTIyMz09PWQuc3RhdHVzP1wiTm8gQ29udGVudFwiOmQuc3RhdHVzVGV4dCxoZWFkZXJzOmUsY29uZmlnOmwscmVxdWVzdDpkfTthKHQsZixyKSxkPW51bGx9fSxkLm9uZXJyb3I9ZnVuY3Rpb24oKXtmKG5ldyBFcnJvcihcIk5ldHdvcmsgRXJyb3JcIikpLGQ9bnVsbH0sZC5vbnRpbWVvdXQ9ZnVuY3Rpb24oKXt2YXIgdD1uZXcgRXJyb3IoXCJ0aW1lb3V0IG9mIFwiK2wudGltZW91dCtcIm1zIGV4Y2VlZGVkXCIpO3QudGltZW91dD1sLnRpbWVvdXQsdC5jb2RlPVwiRUNPTk5BQk9SVEVEXCIsZih0KSxkPW51bGx9LHIuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSl7dmFyIHc9bigxNCksYj1sLndpdGhDcmVkZW50aWFsc3x8cyhsLnVybCk/dy5yZWFkKGwueHNyZkNvb2tpZU5hbWUpOnZvaWQgMDtiJiYoaFtsLnhzcmZIZWFkZXJOYW1lXT1iKX1pZihcInNldFJlcXVlc3RIZWFkZXJcImluIGQmJnIuZm9yRWFjaChoLGZ1bmN0aW9uKHQsZSl7XCJ1bmRlZmluZWRcIj09dHlwZW9mIHAmJlwiY29udGVudC10eXBlXCI9PT1lLnRvTG93ZXJDYXNlKCk/ZGVsZXRlIGhbZV06ZC5zZXRSZXF1ZXN0SGVhZGVyKGUsdCl9KSxsLndpdGhDcmVkZW50aWFscyYmKGQud2l0aENyZWRlbnRpYWxzPSEwKSxsLnJlc3BvbnNlVHlwZSl0cnl7ZC5yZXNwb25zZVR5cGU9bC5yZXNwb25zZVR5cGV9Y2F0Y2goeCl7aWYoXCJqc29uXCIhPT1kLnJlc3BvbnNlVHlwZSl0aHJvdyB4fWwucHJvZ3Jlc3MmJihcInBvc3RcIj09PWwubWV0aG9kfHxcInB1dFwiPT09bC5tZXRob2Q/ZC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsbC5wcm9ncmVzcyk6XCJnZXRcIj09PWwubWV0aG9kJiZkLmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLGwucHJvZ3Jlc3MpKSx2b2lkIDA9PT1wJiYocD1udWxsKSxkLnNlbmQocCl9fSkuY2FsbChlLG4oMikpfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bigxKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlLG4pe3JldHVybiByLmZvckVhY2gobixmdW5jdGlvbihuKXt0PW4odCxlKX0pLHR9fSxmdW5jdGlvbih0LGUsbil7dC5leHBvcnRzPW4oNil9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3RoaXMuZGVmYXVsdHM9aS5tZXJnZSh7fSx0KSx0aGlzLmludGVyY2VwdG9ycz17cmVxdWVzdDpuZXcgcyxyZXNwb25zZTpuZXcgc319dmFyIG89big5KSxpPW4oMSksdT1uKDgpLHM9big3KSxjPW4oMTUpLGE9bigxMyksZj1uKDEwKSxsPW4oNCk7ci5wcm90b3R5cGUucmVxdWVzdD1mdW5jdGlvbih0KXtcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9aS5tZXJnZSh7dXJsOmFyZ3VtZW50c1swXX0sYXJndW1lbnRzWzFdKSksdD1pLm1lcmdlKG8sdGhpcy5kZWZhdWx0cyx7bWV0aG9kOlwiZ2V0XCJ9LHQpLHQuYmFzZVVSTCYmIWModC51cmwpJiYodC51cmw9YSh0LmJhc2VVUkwsdC51cmwpKSx0LndpdGhDcmVkZW50aWFscz10LndpdGhDcmVkZW50aWFsc3x8dGhpcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMsdC5kYXRhPWwodC5kYXRhLHQuaGVhZGVycyx0LnRyYW5zZm9ybVJlcXVlc3QpLHQuaGVhZGVycz1pLm1lcmdlKHQuaGVhZGVycy5jb21tb258fHt9LHQuaGVhZGVyc1t0Lm1ldGhvZF18fHt9LHQuaGVhZGVyc3x8e30pLGkuZm9yRWFjaChbXCJkZWxldGVcIixcImdldFwiLFwiaGVhZFwiLFwicG9zdFwiLFwicHV0XCIsXCJwYXRjaFwiLFwiY29tbW9uXCJdLGZ1bmN0aW9uKGUpe2RlbGV0ZSB0LmhlYWRlcnNbZV19KTt2YXIgZT1bdSx2b2lkIDBdLG49UHJvbWlzZS5yZXNvbHZlKHQpO2Zvcih0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24odCl7ZS51bnNoaWZ0KHQuZnVsZmlsbGVkLHQucmVqZWN0ZWQpfSksdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbih0KXtlLnB1c2godC5mdWxmaWxsZWQsdC5yZWplY3RlZCl9KTtlLmxlbmd0aDspbj1uLnRoZW4oZS5zaGlmdCgpLGUuc2hpZnQoKSk7cmV0dXJuIG59O3ZhciBwPW5ldyByKG8pLGg9dC5leHBvcnRzPWYoci5wcm90b3R5cGUucmVxdWVzdCxwKTtoLnJlcXVlc3Q9ZihyLnByb3RvdHlwZS5yZXF1ZXN0LHApLGguQXhpb3M9cixoLmRlZmF1bHRzPXAuZGVmYXVsdHMsaC5pbnRlcmNlcHRvcnM9cC5pbnRlcmNlcHRvcnMsaC5jcmVhdGU9ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyByKHQpfSxoLmFsbD1mdW5jdGlvbih0KXtyZXR1cm4gUHJvbWlzZS5hbGwodCl9LGguc3ByZWFkPW4oMjApLGkuZm9yRWFjaChbXCJkZWxldGVcIixcImdldFwiLFwiaGVhZFwiXSxmdW5jdGlvbih0KXtyLnByb3RvdHlwZVt0XT1mdW5jdGlvbihlLG4pe3JldHVybiB0aGlzLnJlcXVlc3QoaS5tZXJnZShufHx7fSx7bWV0aG9kOnQsdXJsOmV9KSl9LGhbdF09ZihyLnByb3RvdHlwZVt0XSxwKX0pLGkuZm9yRWFjaChbXCJwb3N0XCIsXCJwdXRcIixcInBhdGNoXCJdLGZ1bmN0aW9uKHQpe3IucHJvdG90eXBlW3RdPWZ1bmN0aW9uKGUsbixyKXtyZXR1cm4gdGhpcy5yZXF1ZXN0KGkubWVyZ2Uocnx8e30se21ldGhvZDp0LHVybDplLGRhdGE6bn0pKX0saFt0XT1mKHIucHJvdG90eXBlW3RdLHApfSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKCl7dGhpcy5oYW5kbGVycz1bXX12YXIgbz1uKDEpO3IucHJvdG90eXBlLnVzZT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmhhbmRsZXJzLnB1c2goe2Z1bGZpbGxlZDp0LHJlamVjdGVkOmV9KSx0aGlzLmhhbmRsZXJzLmxlbmd0aC0xfSxyLnByb3RvdHlwZS5lamVjdD1mdW5jdGlvbih0KXt0aGlzLmhhbmRsZXJzW3RdJiYodGhpcy5oYW5kbGVyc1t0XT1udWxsKX0sci5wcm90b3R5cGUuZm9yRWFjaD1mdW5jdGlvbih0KXtvLmZvckVhY2godGhpcy5oYW5kbGVycyxmdW5jdGlvbihlKXtudWxsIT09ZSYmdChlKX0pfSx0LmV4cG9ydHM9cn0sZnVuY3Rpb24odCxlLG4peyhmdW5jdGlvbihlKXtcInVzZSBzdHJpY3RcIjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHIsbyl7dHJ5e3ZhciBpO1wiZnVuY3Rpb25cIj09dHlwZW9mIHQuYWRhcHRlcj9pPXQuYWRhcHRlcjpcInVuZGVmaW5lZFwiIT10eXBlb2YgWE1MSHR0cFJlcXVlc3Q/aT1uKDMpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBlJiYoaT1uKDMpKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBpJiZpKHIsbyx0KX1jYXRjaCh1KXtvKHUpfX0pfX0pLmNhbGwoZSxuKDIpKX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCxlKXshby5pc1VuZGVmaW5lZCh0KSYmby5pc1VuZGVmaW5lZCh0W1wiQ29udGVudC1UeXBlXCJdKSYmKHRbXCJDb250ZW50LVR5cGVcIl09ZSl9dmFyIG89bigxKSxpPW4oMTcpLHU9L15cXClcXF1cXH0nLD9cXG4vLHM9e1wiQ29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIn07dC5leHBvcnRzPXt0cmFuc2Zvcm1SZXF1ZXN0OltmdW5jdGlvbih0LGUpe3JldHVybiBpKGUsXCJDb250ZW50LVR5cGVcIiksby5pc0Zvcm1EYXRhKHQpfHxvLmlzQXJyYXlCdWZmZXIodCl8fG8uaXNTdHJlYW0odCl8fG8uaXNGaWxlKHQpfHxvLmlzQmxvYih0KT90Om8uaXNBcnJheUJ1ZmZlclZpZXcodCk/dC5idWZmZXI6by5pc1VSTFNlYXJjaFBhcmFtcyh0KT8ocihlLFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLThcIiksdC50b1N0cmluZygpKTpvLmlzT2JqZWN0KHQpPyhyKGUsXCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLThcIiksSlNPTi5zdHJpbmdpZnkodCkpOnR9XSx0cmFuc2Zvcm1SZXNwb25zZTpbZnVuY3Rpb24odCl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe3Q9dC5yZXBsYWNlKHUsXCJcIik7dHJ5e3Q9SlNPTi5wYXJzZSh0KX1jYXRjaChlKXt9fXJldHVybiB0fV0saGVhZGVyczp7Y29tbW9uOntBY2NlcHQ6XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIn0scGF0Y2g6by5tZXJnZShzKSxwb3N0Om8ubWVyZ2UocykscHV0Om8ubWVyZ2Uocyl9LHRpbWVvdXQ6MCx4c3JmQ29va2llTmFtZTpcIlhTUkYtVE9LRU5cIix4c3JmSGVhZGVyTmFtZTpcIlgtWFNSRi1UT0tFTlwiLG1heENvbnRlbnRMZW5ndGg6LTEsdmFsaWRhdGVTdGF0dXM6ZnVuY3Rpb24odCl7cmV0dXJuIHQ+PTIwMCYmdDwzMDB9fX0sZnVuY3Rpb24odCxlKXtcInVzZSBzdHJpY3RcIjt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtyZXR1cm4gZnVuY3Rpb24oKXtmb3IodmFyIG49bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpLHI9MDtyPG4ubGVuZ3RoO3IrKyluW3JdPWFyZ3VtZW50c1tyXTtyZXR1cm4gdC5hcHBseShlLG4pfX19LGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbigpe3RoaXMubWVzc2FnZT1cIlN0cmluZyBjb250YWlucyBhbiBpbnZhbGlkIGNoYXJhY3RlclwifWZ1bmN0aW9uIHIodCl7Zm9yKHZhciBlLHIsaT1TdHJpbmcodCksdT1cIlwiLHM9MCxjPW87aS5jaGFyQXQoMHxzKXx8KGM9XCI9XCIscyUxKTt1Kz1jLmNoYXJBdCg2MyZlPj44LXMlMSo4KSl7aWYocj1pLmNoYXJDb2RlQXQocys9Ljc1KSxyPjI1NSl0aHJvdyBuZXcgbjtlPWU8PDh8cn1yZXR1cm4gdX12YXIgbz1cIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCI7bi5wcm90b3R5cGU9bmV3IEVycm9yLG4ucHJvdG90eXBlLmNvZGU9NSxuLnByb3RvdHlwZS5uYW1lPVwiSW52YWxpZENoYXJhY3RlckVycm9yXCIsdC5leHBvcnRzPXJ9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybiBlbmNvZGVVUklDb21wb25lbnQodCkucmVwbGFjZSgvJTQwL2dpLFwiQFwiKS5yZXBsYWNlKC8lM0EvZ2ksXCI6XCIpLnJlcGxhY2UoLyUyNC9nLFwiJFwiKS5yZXBsYWNlKC8lMkMvZ2ksXCIsXCIpLnJlcGxhY2UoLyUyMC9nLFwiK1wiKS5yZXBsYWNlKC8lNUIvZ2ksXCJbXCIpLnJlcGxhY2UoLyU1RC9naSxcIl1cIil9dmFyIG89bigxKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlLG4pe2lmKCFlKXJldHVybiB0O3ZhciBpO2lmKG4paT1uKGUpO2Vsc2UgaWYoby5pc1VSTFNlYXJjaFBhcmFtcyhlKSlpPWUudG9TdHJpbmcoKTtlbHNle3ZhciB1PVtdO28uZm9yRWFjaChlLGZ1bmN0aW9uKHQsZSl7bnVsbCE9PXQmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiB0JiYoby5pc0FycmF5KHQpJiYoZSs9XCJbXVwiKSxvLmlzQXJyYXkodCl8fCh0PVt0XSksby5mb3JFYWNoKHQsZnVuY3Rpb24odCl7by5pc0RhdGUodCk/dD10LnRvSVNPU3RyaW5nKCk6by5pc09iamVjdCh0KSYmKHQ9SlNPTi5zdHJpbmdpZnkodCkpLHUucHVzaChyKGUpK1wiPVwiK3IodCkpfSkpfSksaT11LmpvaW4oXCImXCIpfXJldHVybiBpJiYodCs9KHQuaW5kZXhPZihcIj9cIik9PT0tMT9cIj9cIjpcIiZcIikraSksdH19LGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQucmVwbGFjZSgvXFwvKyQvLFwiXCIpK1wiL1wiK2UucmVwbGFjZSgvXlxcLysvLFwiXCIpfX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oMSk7dC5leHBvcnRzPXIuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKT9mdW5jdGlvbigpe3JldHVybnt3cml0ZTpmdW5jdGlvbih0LGUsbixvLGksdSl7dmFyIHM9W107cy5wdXNoKHQrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGUpKSxyLmlzTnVtYmVyKG4pJiZzLnB1c2goXCJleHBpcmVzPVwiK25ldyBEYXRlKG4pLnRvR01UU3RyaW5nKCkpLHIuaXNTdHJpbmcobykmJnMucHVzaChcInBhdGg9XCIrbyksci5pc1N0cmluZyhpKSYmcy5wdXNoKFwiZG9tYWluPVwiK2kpLHU9PT0hMCYmcy5wdXNoKFwic2VjdXJlXCIpLGRvY3VtZW50LmNvb2tpZT1zLmpvaW4oXCI7IFwiKX0scmVhZDpmdW5jdGlvbih0KXt2YXIgZT1kb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cChcIihefDtcXFxccyopKFwiK3QrXCIpPShbXjtdKilcIikpO3JldHVybiBlP2RlY29kZVVSSUNvbXBvbmVudChlWzNdKTpudWxsfSxyZW1vdmU6ZnVuY3Rpb24odCl7dGhpcy53cml0ZSh0LFwiXCIsRGF0ZS5ub3coKS04NjRlNSl9fX0oKTpmdW5jdGlvbigpe3JldHVybnt3cml0ZTpmdW5jdGlvbigpe30scmVhZDpmdW5jdGlvbigpe3JldHVybiBudWxsfSxyZW1vdmU6ZnVuY3Rpb24oKXt9fX0oKX0sZnVuY3Rpb24odCxlKXtcInVzZSBzdHJpY3RcIjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHQpfX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oMSk7dC5leHBvcnRzPXIuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKT9mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7dmFyIGU9dDtyZXR1cm4gbiYmKG8uc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUpLGU9by5ocmVmKSxvLnNldEF0dHJpYnV0ZShcImhyZWZcIixlKSx7aHJlZjpvLmhyZWYscHJvdG9jb2w6by5wcm90b2NvbD9vLnByb3RvY29sLnJlcGxhY2UoLzokLyxcIlwiKTpcIlwiLGhvc3Q6by5ob3N0LHNlYXJjaDpvLnNlYXJjaD9vLnNlYXJjaC5yZXBsYWNlKC9eXFw/LyxcIlwiKTpcIlwiLGhhc2g6by5oYXNoP28uaGFzaC5yZXBsYWNlKC9eIy8sXCJcIik6XCJcIixob3N0bmFtZTpvLmhvc3RuYW1lLHBvcnQ6by5wb3J0LHBhdGhuYW1lOlwiL1wiPT09by5wYXRobmFtZS5jaGFyQXQoMCk/by5wYXRobmFtZTpcIi9cIitvLnBhdGhuYW1lfX12YXIgZSxuPS8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtyZXR1cm4gZT10KHdpbmRvdy5sb2NhdGlvbi5ocmVmKSxmdW5jdGlvbihuKXt2YXIgbz1yLmlzU3RyaW5nKG4pP3Qobik6bjtyZXR1cm4gby5wcm90b2NvbD09PWUucHJvdG9jb2wmJm8uaG9zdD09PWUuaG9zdH19KCk6ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4hMH19KCl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDEpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3IuZm9yRWFjaCh0LGZ1bmN0aW9uKG4scil7ciE9PWUmJnIudG9VcHBlckNhc2UoKT09PWUudG9VcHBlckNhc2UoKSYmKHRbZV09bixkZWxldGUgdFtyXSl9KX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDEpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZSxuLG8saT17fTtyZXR1cm4gdD8oci5mb3JFYWNoKHQuc3BsaXQoXCJcXG5cIiksZnVuY3Rpb24odCl7bz10LmluZGV4T2YoXCI6XCIpLGU9ci50cmltKHQuc3Vic3RyKDAsbykpLnRvTG93ZXJDYXNlKCksbj1yLnRyaW0odC5zdWJzdHIobysxKSksZSYmKGlbZV09aVtlXT9pW2VdK1wiLCBcIituOm4pfSksaSk6aX19LGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztuLnN0YXR1cyYmciYmIXIobi5zdGF0dXMpP2Uobik6dChuKX19LGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gdC5hcHBseShudWxsLGUpfX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcjsoZnVuY3Rpb24odCxvLGkpey8qIVxuXHQgKiBAb3ZlcnZpZXcgZXM2LXByb21pc2UgLSBhIHRpbnkgaW1wbGVtZW50YXRpb24gb2YgUHJvbWlzZXMvQSsuXG5cdCAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE0IFllaHVkYSBLYXR6LCBUb20gRGFsZSwgU3RlZmFuIFBlbm5lciBhbmQgY29udHJpYnV0b3JzIChDb252ZXJzaW9uIHRvIEVTNiBBUEkgYnkgSmFrZSBBcmNoaWJhbGQpXG5cdCAqIEBsaWNlbnNlICAgTGljZW5zZWQgdW5kZXIgTUlUIGxpY2Vuc2Vcblx0ICogICAgICAgICAgICBTZWUgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2pha2VhcmNoaWJhbGQvZXM2LXByb21pc2UvbWFzdGVyL0xJQ0VOU0Vcblx0ICogQHZlcnNpb24gICAzLjIuMVxuXHQgKi9cbihmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHUodCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdHx8XCJvYmplY3RcIj09dHlwZW9mIHQmJm51bGwhPT10fWZ1bmN0aW9uIHModCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdH1mdW5jdGlvbiBjKHQpe0c9dH1mdW5jdGlvbiBhKHQpe3R0PXR9ZnVuY3Rpb24gZigpe3JldHVybiBmdW5jdGlvbigpe3QubmV4dFRpY2sobSl9fWZ1bmN0aW9uIGwoKXtyZXR1cm4gZnVuY3Rpb24oKXtZKG0pfX1mdW5jdGlvbiBwKCl7dmFyIHQ9MCxlPW5ldyBydChtKSxuPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpO3JldHVybiBlLm9ic2VydmUobix7Y2hhcmFjdGVyRGF0YTohMH0pLGZ1bmN0aW9uKCl7bi5kYXRhPXQ9Kyt0JTJ9fWZ1bmN0aW9uIGgoKXt2YXIgdD1uZXcgTWVzc2FnZUNoYW5uZWw7cmV0dXJuIHQucG9ydDEub25tZXNzYWdlPW0sZnVuY3Rpb24oKXt0LnBvcnQyLnBvc3RNZXNzYWdlKDApfX1mdW5jdGlvbiBkKCl7cmV0dXJuIGZ1bmN0aW9uKCl7c2V0VGltZW91dChtLDEpfX1mdW5jdGlvbiBtKCl7Zm9yKHZhciB0PTA7dDxaO3QrPTIpe3ZhciBlPXV0W3RdLG49dXRbdCsxXTtlKG4pLHV0W3RdPXZvaWQgMCx1dFt0KzFdPXZvaWQgMH1aPTB9ZnVuY3Rpb24gdigpe3RyeXt2YXIgdD1uKDI3KTtyZXR1cm4gWT10LnJ1bk9uTG9vcHx8dC5ydW5PbkNvbnRleHQsbCgpfWNhdGNoKGUpe3JldHVybiBkKCl9fWZ1bmN0aW9uIHkodCxlKXt2YXIgbj10aGlzLHI9bmV3IHRoaXMuY29uc3RydWN0b3Iodyk7dm9pZCAwPT09clthdF0mJk0ocik7dmFyIG89bi5fc3RhdGU7aWYobyl7dmFyIGk9YXJndW1lbnRzW28tMV07dHQoZnVuY3Rpb24oKXtMKG8scixpLG4uX3Jlc3VsdCl9KX1lbHNlIEQobixyLHQsZSk7cmV0dXJuIHJ9ZnVuY3Rpb24gZyh0KXt2YXIgZT10aGlzO2lmKHQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0LmNvbnN0cnVjdG9yPT09ZSlyZXR1cm4gdDt2YXIgbj1uZXcgZSh3KTtyZXR1cm4gQyhuLHQpLG59ZnVuY3Rpb24gdygpe31mdW5jdGlvbiBiKCl7cmV0dXJuIG5ldyBUeXBlRXJyb3IoXCJZb3UgY2Fubm90IHJlc29sdmUgYSBwcm9taXNlIHdpdGggaXRzZWxmXCIpfWZ1bmN0aW9uIHgoKXtyZXR1cm4gbmV3IFR5cGVFcnJvcihcIkEgcHJvbWlzZXMgY2FsbGJhY2sgY2Fubm90IHJldHVybiB0aGF0IHNhbWUgcHJvbWlzZS5cIil9ZnVuY3Rpb24gXyh0KXt0cnl7cmV0dXJuIHQudGhlbn1jYXRjaChlKXtyZXR1cm4gaHQuZXJyb3I9ZSxodH19ZnVuY3Rpb24gQSh0LGUsbixyKXt0cnl7dC5jYWxsKGUsbixyKX1jYXRjaChvKXtyZXR1cm4gb319ZnVuY3Rpb24gRSh0LGUsbil7dHQoZnVuY3Rpb24odCl7dmFyIHI9ITEsbz1BKG4sZSxmdW5jdGlvbihuKXtyfHwocj0hMCxlIT09bj9DKHQsbik6Uih0LG4pKX0sZnVuY3Rpb24oZSl7cnx8KHI9ITAsTyh0LGUpKX0sXCJTZXR0bGU6IFwiKyh0Ll9sYWJlbHx8XCIgdW5rbm93biBwcm9taXNlXCIpKTshciYmbyYmKHI9ITAsTyh0LG8pKX0sdCl9ZnVuY3Rpb24gUyh0LGUpe2UuX3N0YXRlPT09bHQ/Uih0LGUuX3Jlc3VsdCk6ZS5fc3RhdGU9PT1wdD9PKHQsZS5fcmVzdWx0KTpEKGUsdm9pZCAwLGZ1bmN0aW9uKGUpe0ModCxlKX0sZnVuY3Rpb24oZSl7Tyh0LGUpfSl9ZnVuY3Rpb24gaih0LGUsbil7ZS5jb25zdHJ1Y3Rvcj09PXQuY29uc3RydWN0b3ImJm49PT1zdCYmY29uc3RydWN0b3IucmVzb2x2ZT09PWN0P1ModCxlKTpuPT09aHQ/Tyh0LGh0LmVycm9yKTp2b2lkIDA9PT1uP1IodCxlKTpzKG4pP0UodCxlLG4pOlIodCxlKX1mdW5jdGlvbiBDKHQsZSl7dD09PWU/Tyh0LGIoKSk6dShlKT9qKHQsZSxfKGUpKTpSKHQsZSl9ZnVuY3Rpb24gVCh0KXt0Ll9vbmVycm9yJiZ0Ll9vbmVycm9yKHQuX3Jlc3VsdCksQih0KX1mdW5jdGlvbiBSKHQsZSl7dC5fc3RhdGU9PT1mdCYmKHQuX3Jlc3VsdD1lLHQuX3N0YXRlPWx0LDAhPT10Ll9zdWJzY3JpYmVycy5sZW5ndGgmJnR0KEIsdCkpfWZ1bmN0aW9uIE8odCxlKXt0Ll9zdGF0ZT09PWZ0JiYodC5fc3RhdGU9cHQsdC5fcmVzdWx0PWUsdHQoVCx0KSl9ZnVuY3Rpb24gRCh0LGUsbixyKXt2YXIgbz10Ll9zdWJzY3JpYmVycyxpPW8ubGVuZ3RoO3QuX29uZXJyb3I9bnVsbCxvW2ldPWUsb1tpK2x0XT1uLG9baStwdF09ciwwPT09aSYmdC5fc3RhdGUmJnR0KEIsdCl9ZnVuY3Rpb24gQih0KXt2YXIgZT10Ll9zdWJzY3JpYmVycyxuPXQuX3N0YXRlO2lmKDAhPT1lLmxlbmd0aCl7Zm9yKHZhciByLG8saT10Ll9yZXN1bHQsdT0wO3U8ZS5sZW5ndGg7dSs9MylyPWVbdV0sbz1lW3Urbl0scj9MKG4scixvLGkpOm8oaSk7dC5fc3Vic2NyaWJlcnMubGVuZ3RoPTB9fWZ1bmN0aW9uIEkoKXt0aGlzLmVycm9yPW51bGx9ZnVuY3Rpb24gcSh0LGUpe3RyeXtyZXR1cm4gdChlKX1jYXRjaChuKXtyZXR1cm4gZHQuZXJyb3I9bixkdH19ZnVuY3Rpb24gTCh0LGUsbixyKXt2YXIgbyxpLHUsYyxhPXMobik7aWYoYSl7aWYobz1xKG4sciksbz09PWR0PyhjPSEwLGk9by5lcnJvcixvPW51bGwpOnU9ITAsZT09PW8pcmV0dXJuIHZvaWQgTyhlLHgoKSl9ZWxzZSBvPXIsdT0hMDtlLl9zdGF0ZSE9PWZ0fHwoYSYmdT9DKGUsbyk6Yz9PKGUsaSk6dD09PWx0P1IoZSxvKTp0PT09cHQmJk8oZSxvKSl9ZnVuY3Rpb24gUCh0LGUpe3RyeXtlKGZ1bmN0aW9uKGUpe0ModCxlKX0sZnVuY3Rpb24oZSl7Tyh0LGUpfSl9Y2F0Y2gobil7Tyh0LG4pfX1mdW5jdGlvbiBVKCl7cmV0dXJuIG10Kyt9ZnVuY3Rpb24gTSh0KXt0W2F0XT1tdCsrLHQuX3N0YXRlPXZvaWQgMCx0Ll9yZXN1bHQ9dm9pZCAwLHQuX3N1YnNjcmliZXJzPVtdfWZ1bmN0aW9uIE4odCl7cmV0dXJuIG5ldyBidCh0aGlzLHQpLnByb21pc2V9ZnVuY3Rpb24gWCh0KXt2YXIgZT10aGlzO3JldHVybiBuZXcgZShRKHQpP2Z1bmN0aW9uKG4scil7Zm9yKHZhciBvPXQubGVuZ3RoLGk9MDtpPG87aSsrKWUucmVzb2x2ZSh0W2ldKS50aGVuKG4scil9OmZ1bmN0aW9uKHQsZSl7ZShuZXcgVHlwZUVycm9yKFwiWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byByYWNlLlwiKSl9KX1mdW5jdGlvbiBGKHQpe3ZhciBlPXRoaXMsbj1uZXcgZSh3KTtyZXR1cm4gTyhuLHQpLG59ZnVuY3Rpb24gaygpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGEgcmVzb2x2ZXIgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBwcm9taXNlIGNvbnN0cnVjdG9yXCIpfWZ1bmN0aW9uIEgoKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnUHJvbWlzZSc6IFBsZWFzZSB1c2UgdGhlICduZXcnIG9wZXJhdG9yLCB0aGlzIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uXCIpfWZ1bmN0aW9uIEsodCl7dGhpc1thdF09VSgpLHRoaXMuX3Jlc3VsdD10aGlzLl9zdGF0ZT12b2lkIDAsdGhpcy5fc3Vic2NyaWJlcnM9W10sdyE9PXQmJihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiZrKCksdGhpcyBpbnN0YW5jZW9mIEs/UCh0aGlzLHQpOkgoKSl9ZnVuY3Rpb24gVih0LGUpe3RoaXMuX2luc3RhbmNlQ29uc3RydWN0b3I9dCx0aGlzLnByb21pc2U9bmV3IHQodyksdGhpcy5wcm9taXNlW2F0XXx8TSh0aGlzLnByb21pc2UpLFEoZSk/KHRoaXMuX2lucHV0PWUsdGhpcy5sZW5ndGg9ZS5sZW5ndGgsdGhpcy5fcmVtYWluaW5nPWUubGVuZ3RoLHRoaXMuX3Jlc3VsdD1uZXcgQXJyYXkodGhpcy5sZW5ndGgpLDA9PT10aGlzLmxlbmd0aD9SKHRoaXMucHJvbWlzZSx0aGlzLl9yZXN1bHQpOih0aGlzLmxlbmd0aD10aGlzLmxlbmd0aHx8MCx0aGlzLl9lbnVtZXJhdGUoKSwwPT09dGhpcy5fcmVtYWluaW5nJiZSKHRoaXMucHJvbWlzZSx0aGlzLl9yZXN1bHQpKSk6Tyh0aGlzLnByb21pc2UseigpKX1mdW5jdGlvbiB6KCl7cmV0dXJuIG5ldyBFcnJvcihcIkFycmF5IE1ldGhvZHMgbXVzdCBiZSBwcm92aWRlZCBhbiBBcnJheVwiKX1mdW5jdGlvbiAkKCl7dmFyIHQ7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG8pdD1vO2Vsc2UgaWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYpdD1zZWxmO2Vsc2UgdHJ5e3Q9RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpfWNhdGNoKGUpe3Rocm93IG5ldyBFcnJvcihcInBvbHlmaWxsIGZhaWxlZCBiZWNhdXNlIGdsb2JhbCBvYmplY3QgaXMgdW5hdmFpbGFibGUgaW4gdGhpcyBlbnZpcm9ubWVudFwiKX12YXIgbj10LlByb21pc2U7biYmXCJbb2JqZWN0IFByb21pc2VdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobi5yZXNvbHZlKCkpJiYhbi5jYXN0fHwodC5Qcm9taXNlPXd0KX12YXIgSjtKPUFycmF5LmlzQXJyYXk/QXJyYXkuaXNBcnJheTpmdW5jdGlvbih0KXtyZXR1cm5cIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCl9O3ZhciBZLEcsVyxRPUosWj0wLHR0PWZ1bmN0aW9uKHQsZSl7dXRbWl09dCx1dFtaKzFdPWUsWis9MiwyPT09WiYmKEc/RyhtKTpXKCkpfSxldD1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp2b2lkIDAsbnQ9ZXR8fHt9LHJ0PW50Lk11dGF0aW9uT2JzZXJ2ZXJ8fG50LldlYktpdE11dGF0aW9uT2JzZXJ2ZXIsb3Q9XCJ1bmRlZmluZWRcIj09dHlwZW9mIHNlbGYmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiB0JiZcIltvYmplY3QgcHJvY2Vzc11cIj09PXt9LnRvU3RyaW5nLmNhbGwodCksaXQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgaW1wb3J0U2NyaXB0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIE1lc3NhZ2VDaGFubmVsLHV0PW5ldyBBcnJheSgxZTMpO1c9b3Q/ZigpOnJ0P3AoKTppdD9oKCk6dm9pZCAwPT09ZXQ/digpOmQoKTt2YXIgc3Q9eSxjdD1nLGF0PU1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygxNiksZnQ9dm9pZCAwLGx0PTEscHQ9MixodD1uZXcgSSxkdD1uZXcgSSxtdD0wLHZ0PU4seXQ9WCxndD1GLHd0PUs7Sy5hbGw9dnQsSy5yYWNlPXl0LEsucmVzb2x2ZT1jdCxLLnJlamVjdD1ndCxLLl9zZXRTY2hlZHVsZXI9YyxLLl9zZXRBc2FwPWEsSy5fYXNhcD10dCxLLnByb3RvdHlwZT17Y29uc3RydWN0b3I6Syx0aGVuOnN0LFwiY2F0Y2hcIjpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50aGVuKG51bGwsdCl9fTt2YXIgYnQ9VjtWLnByb3RvdHlwZS5fZW51bWVyYXRlPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PXRoaXMubGVuZ3RoLGU9dGhpcy5faW5wdXQsbj0wO3RoaXMuX3N0YXRlPT09ZnQmJm48dDtuKyspdGhpcy5fZWFjaEVudHJ5KGVbbl0sbil9LFYucHJvdG90eXBlLl9lYWNoRW50cnk9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yLHI9bi5yZXNvbHZlO2lmKHI9PT1jdCl7dmFyIG89Xyh0KTtpZihvPT09c3QmJnQuX3N0YXRlIT09ZnQpdGhpcy5fc2V0dGxlZEF0KHQuX3N0YXRlLGUsdC5fcmVzdWx0KTtlbHNlIGlmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIG8pdGhpcy5fcmVtYWluaW5nLS0sdGhpcy5fcmVzdWx0W2VdPXQ7ZWxzZSBpZihuPT09d3Qpe3ZhciBpPW5ldyBuKHcpO2ooaSx0LG8pLHRoaXMuX3dpbGxTZXR0bGVBdChpLGUpfWVsc2UgdGhpcy5fd2lsbFNldHRsZUF0KG5ldyBuKGZ1bmN0aW9uKGUpe2UodCl9KSxlKX1lbHNlIHRoaXMuX3dpbGxTZXR0bGVBdChyKHQpLGUpfSxWLnByb3RvdHlwZS5fc2V0dGxlZEF0PWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj10aGlzLnByb21pc2U7ci5fc3RhdGU9PT1mdCYmKHRoaXMuX3JlbWFpbmluZy0tLHQ9PT1wdD9PKHIsbik6dGhpcy5fcmVzdWx0W2VdPW4pLDA9PT10aGlzLl9yZW1haW5pbmcmJlIocix0aGlzLl9yZXN1bHQpfSxWLnByb3RvdHlwZS5fd2lsbFNldHRsZUF0PWZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcztEKHQsdm9pZCAwLGZ1bmN0aW9uKHQpe24uX3NldHRsZWRBdChsdCxlLHQpfSxmdW5jdGlvbih0KXtuLl9zZXR0bGVkQXQocHQsZSx0KX0pfTt2YXIgeHQ9JCxfdD17UHJvbWlzZTp3dCxwb2x5ZmlsbDp4dH07bigyNSkuYW1kPyhyPWZ1bmN0aW9uKCl7cmV0dXJuIF90fS5jYWxsKGUsbixlLGkpLCEodm9pZCAwIT09ciYmKGkuZXhwb3J0cz1yKSkpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBpJiZpLmV4cG9ydHM/aS5leHBvcnRzPV90OlwidW5kZWZpbmVkXCIhPXR5cGVvZiB0aGlzJiYodGhpcy5FUzZQcm9taXNlPV90KSx4dCgpfSkuY2FsbCh0aGlzKX0pLmNhbGwoZSxuKDIpLGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCksbigyNikodCkpfSxmdW5jdGlvbih0LGUsbil7XCJ1bmRlZmluZWRcIj09dHlwZW9mIFByb21pc2UmJm4oMjEpLnBvbHlmaWxsKCk7dmFyIHI9bigyNCksbz1uKDUpLGk9bigyMyksdT17YmFzZVVSTDpcImh0dHBzOi8vZGV2LmFwaS5pYm0uY29tL3ZpcnR1YWxhZ2VudC9kZXZlbG9wbWVudC9hcGkvdjEvXCIsdGltZW91dDozZTQsdXNlcklEOm51bGwsd2l0aENyZWRlbnRpYWxzOiExLFhJQk1DbGllbnRJRDohMSxYSUJNQ2xpZW50U2VjcmV0OiExfSxzPW8uY3JlYXRlKHUpLGM9L1xcfCYoLio/KVxcfC9nLGE9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTA7ZTx0LnRleHQubGVuZ3RoO2UrKyl7dmFyIG49dC50ZXh0W2VdLm1hdGNoKGMpfHxbXTt0LnRleHRbZV09bi5yZWR1Y2UoZnVuY3Rpb24odCxlKXtjb25zdCBuPWUuc2xpY2UoMiwtMSkscj1pLmdldChuKTtyZXR1cm4gdC5yZXBsYWNlKGUscil9LHQudGV4dFtlXSl9cmV0dXJuIHR9LGY9dC5leHBvcnRzPXtjb25maWd1cmU6ZnVuY3Rpb24odCl7cmV0dXJuIHIodSx0KSxzPW8uY3JlYXRlKHtiYXNlVVJMOnUuYmFzZVVSTCx0aW1lb3V0OnUudGltZW91dCx3aXRoQ3JlZGVudGlhbHM6dS53aXRoQ3JlZGVudGlhbHMsaGVhZGVyczp1LlhJQk1DbGllbnRJRCYmdS5YSUJNQ2xpZW50U2VjcmV0P3tcIlgtSUJNLUNsaWVudC1JZFwiOnUuWElCTUNsaWVudElELFwiWC1JQk0tQ2xpZW50LVNlY3JldFwiOnUuWElCTUNsaWVudFNlY3JldH06e319KSxmfSxzdGFydDpmdW5jdGlvbih0KXt2YXIgZT1sKCksbj17dXNlcklEOnUudXNlcklEfSxyPVwiL2JvdHMvXCIrdCtcIi9kaWFsb2dzXCIsbz17aGVhZGVyczp7XCJYLVJlcXVlc3QtSURcIjplfX07cmV0dXJuIHMucG9zdChyLG4sbykudGhlbihmdW5jdGlvbih0KXtyZXR1cm57Y2hhdElEOnQuZGF0YS5kaWFsb2dfaWQsbWVzc2FnZTphKHQuZGF0YS5tZXNzYWdlKX19KVtcImNhdGNoXCJdKGZ1bmN0aW9uKHQpe2NvbnNvbGUuZXJyb3IoXCJSZXF1ZXN0IGZhaWxlZDpcIixlKSxwKHQpfSl9LHNlbmQ6ZnVuY3Rpb24odCxlLG4pe3ZhciByPWwoKSxvPXttZXNzYWdlOm4sdXNlcklEOnUudXNlcklEfSxpPVwiL2JvdHMvXCIrdCtcIi9kaWFsb2dzL1wiK2UrXCIvbWVzc2FnZXNcIixjPVwibWVzc2FnZT1cIitlbmNvZGVVUklDb21wb25lbnQobiksZj17aGVhZGVyczp7XCJYLVJlcXVlc3QtSURcIjpyfX07cmV0dXJuIHMucG9zdChpK1wiP1wiK2MsbyxmKS50aGVuKGZ1bmN0aW9uKHQpe3JldHVybnttZXNzYWdlOmEodC5kYXRhLm1lc3NhZ2UpfX0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24odCl7Y29uc29sZS5lcnJvcihcIlJlcXVlc3QgZmFpbGVkOlwiLHIpLHAodCl9KX0scHJvZmlsZTp7Z2V0OmkuZ2V0LHNldDppLnNldCxoYXM6aS5oYXMsY2xlYXI6aS5jbGVhcixcImRlbGV0ZVwiOmlbXCJkZWxldGVcIl0sZm9yRWFjaDppLmZvckVhY2h9fSxsPWZ1bmN0aW9uKCl7cmV0dXJuXCJ4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHhcIi5yZXBsYWNlKC9beHldL2csZnVuY3Rpb24odCl7dmFyIGU9MTYqTWF0aC5yYW5kb20oKXwwLG49XCJ4XCI9PXQ/ZTozJmV8ODtyZXR1cm4gbi50b1N0cmluZygxNil9KX0scD1mdW5jdGlvbih0KXtpZighdC5zdGF0dXMpdGhyb3cgdDt2YXIgZT10LnN0YXR1cyxuPXQuc3RhdHVzVGV4dCxyPW5ldyBFcnJvcihuKTt0aHJvdyByLnN0YXR1cz1lLHJ9fSxmdW5jdGlvbih0LGUpe3ZhciBuPXt9LHI9e3NldDpmdW5jdGlvbih0LGUpe3JldHVybiBuW3RdPWUscn0sZ2V0OmZ1bmN0aW9uKHQpe3JldHVybiBuW3RdfHxcIlwifSxoYXM6ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMCE9PW5bdF19LGNsZWFyOmZ1bmN0aW9uKCl7cmV0dXJuIG49e30scn0sXCJkZWxldGVcIjpmdW5jdGlvbih0KXtyZXR1cm4gZGVsZXRlIG5bdF0scn0sZm9yRWFjaDpmdW5jdGlvbih0LGUpe3JldHVybiBPYmplY3Qua2V5cyhuKS5mb3JFYWNoKGZ1bmN0aW9uKHIpe2U/dChyLG5bcl0pLmJpbmQoZSk6dChyLG5bcl0pfSkscn19O3QuZXhwb3J0cz1yfSxmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIG4odCxlLG4pe3N3aXRjaChuLmxlbmd0aCl7Y2FzZSAwOnJldHVybiB0LmNhbGwoZSk7Y2FzZSAxOnJldHVybiB0LmNhbGwoZSxuWzBdKTtjYXNlIDI6cmV0dXJuIHQuY2FsbChlLG5bMF0sblsxXSk7Y2FzZSAzOnJldHVybiB0LmNhbGwoZSxuWzBdLG5bMV0sblsyXSl9cmV0dXJuIHQuYXBwbHkoZSxuKX1mdW5jdGlvbiByKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT92b2lkIDA6ZVt0XX19ZnVuY3Rpb24gbyh0LGUpe2Zvcih2YXIgbj0tMSxyPUFycmF5KHQpOysrbjx0OylyW25dPWUobik7cmV0dXJuIHJ9ZnVuY3Rpb24gaSh0LGUpe3JldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gdChlKG4pKX19ZnVuY3Rpb24gdSh0LGUsbil7dmFyIHI9dFtlXTtCLmNhbGwodCxlKSYmbShyLG4pJiYodm9pZCAwIT09bnx8ZSBpbiB0KXx8KHRbZV09bil9ZnVuY3Rpb24gcyh0LGUpe3JldHVybiBudWxsIT10JiYoQi5jYWxsKHQsZSl8fFwib2JqZWN0XCI9PXR5cGVvZiB0JiZlIGluIHQmJm51bGw9PT1GKHQpKX1mdW5jdGlvbiBjKHQsZSl7cmV0dXJuIGU9VSh2b2lkIDA9PT1lP3QubGVuZ3RoLTE6ZSwwKSxmdW5jdGlvbigpe2Zvcih2YXIgcj1hcmd1bWVudHMsbz0tMSxpPVUoci5sZW5ndGgtZSwwKSx1PUFycmF5KGkpOysrbzxpOyl1W29dPXJbZStvXTtvPS0xO2Zvcih2YXIgcz1BcnJheShlKzEpOysrbzxlOylzW29dPXJbb107cmV0dXJuIHNbZV09dSxuKHQsdGhpcyxzKX19ZnVuY3Rpb24gYSh0LGUsbixyKXtufHwobj17fSk7Zm9yKHZhciBvPS0xLGk9ZS5sZW5ndGg7KytvPGk7KXt2YXIgcz1lW29dLGM9cj9yKG5bc10sdFtzXSxzLG4sdCk6dm9pZCAwO3UobixzLHZvaWQgMD09PWM/dFtzXTpjKX1yZXR1cm4gbn1mdW5jdGlvbiBmKHQpe3JldHVybiBjKGZ1bmN0aW9uKGUsbil7dmFyIHI9LTEsbz1uLmxlbmd0aCxpPW8+MT9uW28tMV06dm9pZCAwLHU9bz4yP25bMl06dm9pZCAwO2ZvcihpPXQubGVuZ3RoPjMmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGk/KG8tLSxpKTp2b2lkIDAsdSYmaChuWzBdLG5bMV0sdSkmJihpPW88Mz92b2lkIDA6aSxvPTEpLGU9T2JqZWN0KGUpOysrcjxvOyl7dmFyIHM9bltyXTtzJiZ0KGUscyxyLGkpfXJldHVybiBlfSl9ZnVuY3Rpb24gbCh0KXt2YXIgZT10P3QubGVuZ3RoOnZvaWQgMDtyZXR1cm4gYihlKSYmKGsodCl8fEEodCl8fHYodCkpP28oZSxTdHJpbmcpOm51bGx9ZnVuY3Rpb24gcCh0LGUpe3JldHVybiBlPW51bGw9PWU/UzplLCEhZSYmKFwibnVtYmVyXCI9PXR5cGVvZiB0fHxPLnRlc3QodCkpJiZ0Pi0xJiZ0JTE9PTAmJnQ8ZX1mdW5jdGlvbiBoKHQsZSxuKXtpZigheChuKSlyZXR1cm4hMTt2YXIgcj10eXBlb2YgZTtyZXR1cm4hIShcIm51bWJlclwiPT1yP3kobikmJnAoZSxuLmxlbmd0aCk6XCJzdHJpbmdcIj09ciYmZSBpbiBuKSYmbShuW2VdLHQpfWZ1bmN0aW9uIGQodCl7dmFyIGU9dCYmdC5jb25zdHJ1Y3RvcixuPVwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUucHJvdG90eXBlfHxEO3JldHVybiB0PT09bn1mdW5jdGlvbiBtKHQsZSl7cmV0dXJuIHQ9PT1lfHx0IT09dCYmZSE9PWV9ZnVuY3Rpb24gdih0KXtyZXR1cm4gZyh0KSYmQi5jYWxsKHQsXCJjYWxsZWVcIikmJighcS5jYWxsKHQsXCJjYWxsZWVcIil8fEkuY2FsbCh0KT09ail9ZnVuY3Rpb24geSh0KXtyZXR1cm4gbnVsbCE9dCYmYihYKHQpKSYmIXcodCl9ZnVuY3Rpb24gZyh0KXtyZXR1cm4gXyh0KSYmeSh0KX1mdW5jdGlvbiB3KHQpe3ZhciBlPXgodCk/SS5jYWxsKHQpOlwiXCI7cmV0dXJuIGU9PUN8fGU9PVR9ZnVuY3Rpb24gYih0KXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgdCYmdD4tMSYmdCUxPT0wJiZ0PD1TfWZ1bmN0aW9uIHgodCl7dmFyIGU9dHlwZW9mIHQ7cmV0dXJuISF0JiYoXCJvYmplY3RcIj09ZXx8XCJmdW5jdGlvblwiPT1lKX1mdW5jdGlvbiBfKHQpe3JldHVybiEhdCYmXCJvYmplY3RcIj09dHlwZW9mIHR9ZnVuY3Rpb24gQSh0KXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdHx8IWsodCkmJl8odCkmJkkuY2FsbCh0KT09Un1mdW5jdGlvbiBFKHQpe3ZhciBlPWQodCk7aWYoIWUmJiF5KHQpKXJldHVybiBOKHQpO3ZhciBuPWwodCkscj0hIW4sbz1ufHxbXSxpPW8ubGVuZ3RoO2Zvcih2YXIgdSBpbiB0KSFzKHQsdSl8fHImJihcImxlbmd0aFwiPT11fHxwKHUsaSkpfHxlJiZcImNvbnN0cnVjdG9yXCI9PXV8fG8ucHVzaCh1KTtyZXR1cm4gb312YXIgUz05MDA3MTk5MjU0NzQwOTkxLGo9XCJbb2JqZWN0IEFyZ3VtZW50c11cIixDPVwiW29iamVjdCBGdW5jdGlvbl1cIixUPVwiW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl1cIixSPVwiW29iamVjdCBTdHJpbmddXCIsTz0vXig/OjB8WzEtOV1cXGQqKSQvLEQ9T2JqZWN0LnByb3RvdHlwZSxCPUQuaGFzT3duUHJvcGVydHksST1ELnRvU3RyaW5nLHE9RC5wcm9wZXJ0eUlzRW51bWVyYWJsZSxMPU9iamVjdC5nZXRQcm90b3R5cGVPZixQPU9iamVjdC5rZXlzLFU9TWF0aC5tYXgsTT0hcS5jYWxsKHt2YWx1ZU9mOjF9LFwidmFsdWVPZlwiKSxOPWkoUCxPYmplY3QpLFg9cihcImxlbmd0aFwiKSxGPWkoTCxPYmplY3QpLGs9QXJyYXkuaXNBcnJheSxIPWYoZnVuY3Rpb24odCxlKXtpZihNfHxkKGUpfHx5KGUpKXJldHVybiB2b2lkIGEoZSxFKGUpLHQpO2Zvcih2YXIgbiBpbiBlKUIuY2FsbChlLG4pJiZ1KHQsbixlW25dKX0pO3QuZXhwb3J0cz1IfSxmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbigpe3Rocm93IG5ldyBFcnJvcihcImRlZmluZSBjYW5ub3QgYmUgdXNlZCBpbmRpcmVjdFwiKX19LGZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiB0LndlYnBhY2tQb2x5ZmlsbHx8KHQuZGVwcmVjYXRlPWZ1bmN0aW9uKCl7fSx0LnBhdGhzPVtdLHQuY2hpbGRyZW49W10sdC53ZWJwYWNrUG9seWZpbGw9MSksdH19LGZ1bmN0aW9uKHQsZSl7fV0pfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vQHdhdHNvbi12aXJ0dWFsLWFnZW50L2NsaWVudC1zZGsvbGliL3dlYi5qc1xuICoqIG1vZHVsZSBpZCA9IDY1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiSUJNQ2hhdC1mb3JtLWNvbnRhaW5lclxcXCI+XFxuXFx0PGRpdiBjbGFzcz1cXFwiSUJNQ2hhdC1mb3JtLWZpZWxkc1xcXCI+PC9kaXY+XFxuXFx0PGRpdiBjbGFzcz1cXFwiSUJNQ2hhdC1mb3JtLWJ1dHRvbnNcXFwiPlxcblxcdFxcdDxidXR0b24gY2xhc3M9XFxcIklCTUNoYXQtZm9ybS1jYW5jZWxcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblxcdFxcdDxidXR0b24gY2xhc3M9XFxcIklCTUNoYXQtZm9ybS1zdWJtaXRcXFwiPlN1Ym1pdDwvYnV0dG9uPlxcblxcdDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL2Zvcm0vdGVtcGxhdGVzL2Jhc2UuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDY2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGxhYmVsPiR7bGFiZWx9PC9sYWJlbD5cXG48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcIklCTUNoYXQtaW5wdXQtY29sb3JzXFxcIiBuYW1lPVxcXCIke25hbWV9XFxcIiB2YWx1ZT1cXFwiJHt2YWx1ZX1cXFwiIC8+XFxuPGRpdiBjbGFzcz1cXFwiSUJNQ2hhdC12YWxpZGF0aW9uLWVycm9yIElCTUNoYXQtZXJyb3ItY29sb3JzXFxcIiBzdHlsZT1cXFwiZGlzcGxheTpub25lO1xcXCIgZGF0YS12YWxpZGF0aW9uLWZvcj1cXFwiJHtuYW1lfVxcXCIgZGF0YS12YWxpZD1cXFwidHJ1ZVxcXCI+PC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvZm9ybS90ZW1wbGF0ZXMvZmllbGQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDY3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnJlcXVpcmUoJy4vc3R5bGVzLmNzcycpO1xuXG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG52YXIgc3RhdGUgPSByZXF1aXJlKCcuLi8uLi9zdGF0ZScpO1xudmFyIHByb2ZpbGUgPSByZXF1aXJlKCcuLi8uLi9wcm9maWxlJyk7XG52YXIgc3Vic2NyaWJlID0gZXZlbnRzLnN1YnNjcmliZTtcbnZhciBwdWJsaXNoID0gZXZlbnRzLnB1Ymxpc2g7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xudmFyIHZhbGlkYXRpb24gPSByZXF1aXJlKCcuL3ZhbGlkYXRpb24nKTtcbnZhciBhY3RpdmVDbGFzc05hbWUgPSAnSUJNQ2hhdC1hY2NlbnQtY29sb3JzJztcbnZhciBucyA9ICdJQk1DaGF0LWNyZWRpdGNhcmQnO1xudmFyIHdpZGdldHMgPSBbXTtcbnZhciB0ZW1wbGF0ZXMgPSB7XG5cdGJhc2U6IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2Jhc2UuaHRtbCcpXG59O1xuXG52YXIgY3JlZGl0Q2FyZExheW91dCA9IHtcblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0c3Vic2NyaWJlKCdsYXlvdXQ6Y2MtdmFsaWRhdG9yJywgZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0dmFyIHdpZGdldCA9IG5ldyBDcmVkaXRDYXJkKGRhdGEpO1xuXHRcdFx0d2lkZ2V0c1tkYXRhLnV1aWRdID0gd2lkZ2V0O1xuXHRcdH0pO1xuXHR9XG59O1xuXG5mdW5jdGlvbiBDcmVkaXRDYXJkKGRhdGEpIHtcblx0dGhpcy5pbml0KGRhdGEpO1xufVxuXG5DcmVkaXRDYXJkLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oZGF0YSkge1xuXHR0aGlzLmRhdGEgPSBkYXRhLm1lc3NhZ2UubGF5b3V0LmRhdGEgfHwge307XG5cdHRoaXMuZGF0YS5hY2NlcHRlZENhcmRzID0gdGhpcy5kYXRhLnR5cGVzO1xuXHR0aGlzLnV1aWQgPSBkYXRhLnV1aWQ7XG5cdHRoaXMucGFyZW50RWxlbWVudCA9IGRhdGEuZWxlbWVudDtcblx0dGhpcy5sYXlvdXRFbGVtZW50ID0gZGF0YS5sYXlvdXRFbGVtZW50O1xuXHR0aGlzLm1zZ0VsZW1lbnQgPSBkYXRhLm1zZ0VsZW1lbnQ7XG5cdHRoaXMuZHJhd0Zvcm0oKTtcblx0dGhpcy5zdWJzY3JpYmVTZW5kID0gc3Vic2NyaWJlKCdzZW5kJywgdGhpcy5yZW1vdmVBbGxFdmVudExpc3RlbmVycy5iaW5kKHRoaXMpKTtcblx0cHVibGlzaCgnZGlzYWJsZS1pbnB1dCcpO1xufTtcblxuQ3JlZGl0Q2FyZC5wcm90b3R5cGUuZHJhd0Zvcm0gPSBmdW5jdGlvbigpIHtcblx0dmFyIHRleHQgPSB0ZW1wbGF0ZXMuYmFzZTtcblx0dGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR0ZXh0ID0gdXRpbHMuY29tcGlsZSh0ZW1wbGF0ZXMuYmFzZSwge1xuXHRcdG5zOiBuc1xuXHR9KTtcblx0dGhpcy5lbC5pbm5lckhUTUwgPSB0ZXh0O1xuXHR0aGlzLmxheW91dEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG5cdHRoaXMuY2FuY2VsQnV0dG9uID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zICsgJy1jYW5jZWwnKTtcblx0dGhpcy5jb250aW51ZUJ1dHRvbiA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignLicgKyBucyArICctY29udGludWUnKTtcblx0dGhpcy5mb3JtRWxlbWVudHMgPSB7fTtcblx0dGhpcy5maWVsZHMgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5maWVsZHMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZmllbGQgPSB0aGlzLmZpZWxkc1tpXTtcblx0XHR2YXIgbmFtZSA9IGZpZWxkLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuXHRcdHRoaXMuZm9ybUVsZW1lbnRzW25hbWVdID0gZmllbGQ7XG5cdH1cblx0dGhpcy5mb3JtRWxlbWVudHNbJ2NjX2Z1bGxfbmFtZSddLmZvY3VzKCk7XG5cdHRoaXMuYWRkTGlzdGVuZXJzKCk7XG59O1xuXG5DcmVkaXRDYXJkLnByb3RvdHlwZS5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5jYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNhbmNlbC5iaW5kKHRoaXMpKTtcblx0dGhpcy5jb250aW51ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ29udGludWUuYmluZCh0aGlzKSk7XG59O1xuXG5DcmVkaXRDYXJkLnByb3RvdHlwZS5hZGRFcnJvciA9IGZ1bmN0aW9uKG5hbWUsIG1zZykge1xuXHR2YXIgZXJyb3JFbGVtZW50ID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS12YWxpZGF0aW9uLWZvcj1cIicgKyBuYW1lICsgJ1wiXScpO1xuXHRlcnJvckVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdGVycm9yRWxlbWVudC5kYXRhc2V0LnZhbGlkID0gZmFsc2U7XG5cdGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IG1zZztcbn07XG5cbkNyZWRpdENhcmQucHJvdG90eXBlLnJlbW92ZUVycm9yID0gZnVuY3Rpb24obmFtZSkge1xuXHR2YXIgZXJyb3JFbGVtZW50ID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS12YWxpZGF0aW9uLWZvcj1cIicgKyBuYW1lICsgJ1wiXScpO1xuXHRlcnJvckVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0ZXJyb3JFbGVtZW50LmRhdGFzZXQudmFsaWQgPSB0cnVlO1xuXHRlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbn07XG5cbkNyZWRpdENhcmQucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24oKSB7XG5cdHZhciB2YWxpZCA9IHRydWU7XG5cdHRoaXMuZm9ybURhdGEgPSB7fTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZpZWxkcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBmaWVsZCA9IHRoaXMuZmllbGRzW2ldO1xuXHRcdHZhciBuYW1lID0gZmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG5cdFx0dGhpcy5mb3JtRGF0YVtuYW1lXSA9IGZpZWxkLnZhbHVlO1xuXHR9XG5cblx0aWYgKHRoaXMuZm9ybURhdGEuY2NfZnVsbF9uYW1lLmxlbmd0aCA9PT0gMCkge1xuXHRcdHRoaXMuYWRkRXJyb3IoJ2NjX2Z1bGxfbmFtZScsICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLicpO1xuXHRcdGlmICh2YWxpZCkgdGhpcy5mb3JtRWxlbWVudHNbJ2NjX2Z1bGxfbmFtZSddLmZvY3VzKCk7XG5cdFx0dmFsaWQgPSBmYWxzZTtcblx0fSBlbHNlIHtcblx0XHR0aGlzLnJlbW92ZUVycm9yKCdjY19mdWxsX25hbWUnKTtcblx0fVxuXG5cdHZhciBjYyA9IHZhbGlkYXRpb24udmFsaWRhdGVDYXJkKHRoaXMuZGF0YS5hY2NlcHRlZENhcmRzLCB0aGlzLmZvcm1EYXRhLmNjX251bWJlcik7XG5cdGlmICghY2MudmFsaWQpIHtcblx0XHR0aGlzLmFkZEVycm9yKCdjY19udW1iZXInLCBjYy5tZXNzYWdlKTtcblx0XHRpZiAodmFsaWQpIHRoaXMuZm9ybUVsZW1lbnRzWydjY19udW1iZXInXS5mb2N1cygpO1xuXHRcdHZhbGlkID0gZmFsc2U7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5yZW1vdmVFcnJvcignY2NfbnVtYmVyJyk7XG5cdH1cblxuXHR2YXIgZXhwID0gdmFsaWRhdGlvbi52YWxpZGF0ZUV4cCh0aGlzLmZvcm1EYXRhLmNjX2V4cF9kYXRlX21vbnRoLCB0aGlzLmZvcm1EYXRhLmNjX2V4cF9kYXRlX3llYXIpO1xuXHRpZiAoIWV4cC52YWxpZCkge1xuXHRcdHRoaXMuYWRkRXJyb3IoJ2NjX2V4cF9kYXRlJywgZXhwLm1lc3NhZ2UpO1xuXHRcdGlmICh2YWxpZCkgdGhpcy5mb3JtRWxlbWVudHNbJ2NjX2V4cF9kYXRlX21vbnRoJ10uZm9jdXMoKTtcblx0XHR2YWxpZCA9IGZhbHNlO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMucmVtb3ZlRXJyb3IoJ2NjX2V4cF9kYXRlJyk7XG5cdH1cblxuXHR2YXIgY3Z2ID0gdmFsaWRhdGlvbi52YWxpZGF0ZUNWVih0aGlzLmZvcm1EYXRhLmNjX2NvZGUpO1xuXHRpZiAoIWN2di52YWxpZCkge1xuXHRcdHRoaXMuYWRkRXJyb3IoJ2NjX2NvZGUnLCBjdnYubWVzc2FnZSk7XG5cdFx0aWYgKHZhbGlkKSB0aGlzLmZvcm1FbGVtZW50c1snY2NfY29kZSddLmZvY3VzKCk7XG5cdFx0dmFsaWQgPSBmYWxzZTtcblx0fSBlbHNlIHtcblx0XHR0aGlzLnJlbW92ZUVycm9yKCdjY19jb2RlJyk7XG5cdH1cblx0cmV0dXJuIHZhbGlkO1xufTtcblxuQ3JlZGl0Q2FyZC5wcm90b3R5cGUuaGFuZGxlQ29udGludWUgPSBmdW5jdGlvbigpIHtcblx0aWYgKHRoaXMudmFsaWRhdGUoKSkge1xuXHRcdHZhciBmZCA9IHRoaXMuZm9ybURhdGE7XG5cdFx0ZmQuY2NfZXhwX2RhdGUgPSBmZC5jY19leHBfZGF0ZV9tb250aCArICcvJyArIGZkLmNjX2V4cF9kYXRlX3llYXI7XG5cdFx0ZmQuY2NfbGFzdF9mb3VyX2RpZ2l0cyA9IGZkLmNjX251bWJlci5zdWJzdHIoZmQuY2NfbnVtYmVyLmxlbmd0aCAtIDQpO1xuXHRcdE9iamVjdC5rZXlzKGZkKS5tYXAoZnVuY3Rpb24oa2V5KSB7XG5cdFx0XHRwcm9maWxlLnNldChrZXksIGZkW2tleV0pO1xuXHRcdH0pO1xuXHRcdHB1Ymxpc2goJ2VuYWJsZS1pbnB1dCcpO1xuXHRcdHB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0XHRzaWxlbnQ6IHRydWUsXG5cdFx0XHR0ZXh0OiAnc3VjY2Vzcydcblx0XHR9KTtcblx0fVxufTtcblxuQ3JlZGl0Q2FyZC5wcm90b3R5cGUuaGFuZGxlQ2FuY2VsID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoYWN0aXZlQ2xhc3NOYW1lKTtcblx0cHVibGlzaCgnZW5hYmxlLWlucHV0Jyk7XG5cdHB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0c2lsZW50OiB0cnVlLFxuXHRcdHRleHQ6ICdjYW5jZWwnXG5cdH0pO1xufTtcblxuQ3JlZGl0Q2FyZC5wcm90b3R5cGUucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5jYW5jZWxCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNhbmNlbC5iaW5kKHRoaXMpKTtcblx0dGhpcy5jYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuXHR0aGlzLmNvbnRpbnVlQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDb250aW51ZS5iaW5kKHRoaXMpKTtcblx0dGhpcy5jb250aW51ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5maWVsZHMubGVuZ3RoOyBqKyspXG5cdFx0dGhpcy5maWVsZHNbal0uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuXG5cdHRoaXMuc3Vic2NyaWJlU2VuZC5yZW1vdmUoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlZGl0Q2FyZExheW91dDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9jYy12YWxpZGF0b3IvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA2OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5JQk1DaGF0LWNyZWRpdGNhcmQtY29udGFpbmVyIHtcXG5cXHR0ZXh0LWFsaWduOmNlbnRlcjtcXG5cXHRwYWRkaW5nOjAgMCAxZW0gMDtcXG59XFxuXFxuLklCTUNoYXQtY3JlZGl0Y2FyZC1yb3dzIHtcXG5cXHRtYXJnaW46YXV0bztcXG5cXHR0ZXh0LWFsaWduOmxlZnQ7XFxuXFx0bWF4LXdpZHRoOjM2MHB4O1xcblxcdHdpZHRoOjEwMCU7XFxufVxcblxcbi5JQk1DaGF0LWNyZWRpdGNhcmQtcm93IHtcXG5cXHR0ZXh0LWFsaWduOmxlZnQ7XFxuXFx0cGFkZGluZy1ib3R0b206MWVtO1xcbn1cXG5cXG4uSUJNQ2hhdC1jcmVkaXRjYXJkLXJvdyBpbnB1dCB7XFxuXFx0d2lkdGg6MTAwJTtcXG59XFxuXFxuLklCTUNoYXQtY3JlZGl0Y2FyZC1jb2wge1xcblxcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uSUJNQ2hhdC1jcmVkaXRjYXJkLWNvbCBpbnB1dHtcXG5cXHR0ZXh0LWFsaWduOmNlbnRlcjtcXG5cXHR3aWR0aDo0MHB4O1xcbn1cXG5cXG4uSUJNQ2hhdC1jcmVkaXRjYXJkLWNvbDpsYXN0LWNoaWxkIGlucHV0IHtcXG5cXHR3aWR0aDo2MHB4O1xcbn1cXG5cXG4uSUJNQ2hhdC1jcmVkaXRjYXJkLWJ1dHRvbnMge1xcblxcdGhlaWdodDoyLjVlbTtcXG59XFxuXFxuLklCTUNoYXQtY3JlZGl0Y2FyZC1idXR0b25zIGJ1dHRvbiB7XFxuXFx0d2lkdGg6OTBweDtcXG5cXHRmbG9hdDpsZWZ0O1xcbn1cXG5cXG4uSUJNQ2hhdC1jcmVkaXRjYXJkLWJ1dHRvbnMgYnV0dG9uOmxhc3QtY2hpbGQge1xcblxcdGZsb2F0OnJpZ2h0O1xcbn1cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jhdy1sb2FkZXIhLi9zcmMvbGF5b3V0cy9jYy12YWxpZGF0b3Ivc3R5bGVzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDcwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbi8vaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUGF5bWVudF9jYXJkX251bWJlclxuXG52YXIgc3RhdGUgPSB7XG5cdGFjY2VwdGVkQ2FyZHM6IFtdLFxuXHRjYXJkTnVtYmVyOiAnJyxcblx0Y2FyZFR5cGU6ICcnXG59O1xuXG52YXIgbWVzc2FnZXMgPSB7XG5cdHJlcXVpcmVkOiAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4nLFxuXHRhY2NlcHRlZENhcmQ6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB0ZXh0ID0gJ1dlIGFjY2VwdCAnO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBzdGF0ZS5hY2NlcHRlZENhcmRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoaSA+IDApXG5cdFx0XHRcdHRleHQgKz0gJywgJztcblx0XHRcdGlmIChpID09PSAoc3RhdGUuYWNjZXB0ZWRDYXJkcy5sZW5ndGggLSAxKSlcblx0XHRcdFx0dGV4dCArPSAnIGFuZCAnO1xuXHRcdFx0dGV4dCArPSBjYXJkRGF0YVtzdGF0ZS5hY2NlcHRlZENhcmRzW2ldXS5odW1hbjtcblx0XHR9XG5cdFx0dGV4dCArPSAnLiBQbGVhc2UgdXNlIGEgdmFsaWQgY2FyZC4nO1xuXHRcdHJldHVybiB0ZXh0O1xuXHR9LFxuXHRpbnZhbGlkOiAnWW91ciBjcmVkaXQgY2FyZCBudW1iZXIgaXMgaW52YWxpZC4nLFxuXHRpbnZhbGlkRXhwaXJhdGlvbjogJ1lvdXIgY3JlZGl0IGNhcmQgZXhwaXJhdGlvbiBkYXRlIGlzIGludmFsaWQuJyxcblx0aW52YWxpZEN2djogJ1lvdXIgQ1ZWIGlzIGludmFsaWQuJ1xufTtcblxudmFyIGNhcmREYXRhID0ge1xuXHRcInZpc2FcIjoge1xuXHRcdGh1bWFuOiBcIlZpc2FcIixcblx0XHRwcmVmaXhlczogWzRdLFxuXHRcdGxlbmd0aHM6IFsxMywgMTYsIDE5XVxuXHR9LFxuXHRcIm1hc3RlcmNhcmRcIjoge1xuXHRcdGh1bWFuOiBcIk1hc3RlckNhcmRcIixcblx0XHRwcmVmaXhlczogWzUxLCA1MiwgNTMsIDU0LCA1NV0sXG5cdFx0bGVuZ3RoczogWzE2XVxuXHR9LFxuXHRcImFtZXhcIjoge1xuXHRcdGh1bWFuOiBcIkFtZXJpY2FuIEV4cHJlc3NcIixcblx0XHRwcmVmaXhlczogWzM0LCAzN10sXG5cdFx0bGVuZ3RoczogWzE1XVxuXHR9LFxuXHRcImRpc2NvdmVyXCI6IHtcblx0XHRodW1hbjogXCJEaXNjb3ZlclwiLFxuXHRcdHByZWZpeGVzOiBbNjAxMSwgNjVdLFxuXHRcdGxlbmd0aHM6IFsxNiwgMTldXG5cdH1cbn07XG5cbnZhciBpO1xuLy9NYXN0ZXJDYXJkIGFkZGluZyB0aGVzZSBudW1iZXJzIGluIDIwMTdcbmZvciAoaSA9IDIyMjE7IGkgPD0gMjcyMDsgaSsrKVxuXHRjYXJkRGF0YS5tYXN0ZXJjYXJkLnByZWZpeGVzLnB1c2goaSk7XG5cbmZvciAoaSA9IDYyMjEyNjsgaSA8PSA2MjI5MjU7IGkrKylcblx0Y2FyZERhdGEuZGlzY292ZXIucHJlZml4ZXMucHVzaChpKTtcblxuZm9yIChpID0gNjQ0OyBpIDw9IDY0OTsgaSsrKVxuXHRjYXJkRGF0YS5kaXNjb3Zlci5wcmVmaXhlcy5wdXNoKGkpO1xuXG5mdW5jdGlvbiBfZGV0ZWN0Q2FyZCgpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdGF0ZS5hY2NlcHRlZENhcmRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGRhdGEgPSBjYXJkRGF0YVtzdGF0ZS5hY2NlcHRlZENhcmRzW2ldXTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRhdGEucHJlZml4ZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdHZhciB4ID0gZGF0YS5wcmVmaXhlc1tqXS50b1N0cmluZygpO1xuXHRcdFx0aWYgKHN0YXRlLmNhcmROdW1iZXIuc3Vic3RyaW5nKDAsIHgubGVuZ3RoKSA9PT0geCkge1xuXHRcdFx0XHRzdGF0ZS5jYXJkVHlwZSA9IHN0YXRlLmFjY2VwdGVkQ2FyZHNbaV07XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIF9jaGVja0t1aG4oKSB7XG5cdHZhciBjaGVja3N1bSA9IDA7IC8vIHJ1bm5pbmcgY2hlY2tzdW0gdG90YWxcblx0dmFyIGogPSAxOyAvLyB0YWtlcyB2YWx1ZSBvZiAxIG9yIDJcblxuXHQvLyBQcm9jZXNzIGVhY2ggZGlnaXQgb25lIGJ5IG9uZSBzdGFydGluZyBhdCB0aGUgcmlnaHRcblx0dmFyIGNhbGM7XG5cdGZvciAodmFyIGkgPSBzdGF0ZS5jYXJkTnVtYmVyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0Ly8gRXh0cmFjdCB0aGUgbmV4dCBkaWdpdCBhbmQgbXVsdGlwbHkgYnkgMSBvciAyIG9uIGFsdGVybmF0aXZlIGRpZ2l0cy5cblx0XHRjYWxjID0gTnVtYmVyKHN0YXRlLmNhcmROdW1iZXIuY2hhckF0KGkpKSAqIGo7XG5cblx0XHQvLyBJZiB0aGUgcmVzdWx0IGlzIGluIHR3byBkaWdpdHMgYWRkIDEgdG8gdGhlIGNoZWNrc3VtIHRvdGFsXG5cdFx0aWYgKGNhbGMgPiA5KSB7XG5cdFx0XHRjaGVja3N1bSA9IGNoZWNrc3VtICsgMTtcblx0XHRcdGNhbGMgPSBjYWxjIC0gMTA7XG5cdFx0fVxuXG5cdFx0Ly8gQWRkIHRoZSB1bml0cyBlbGVtZW50IHRvIHRoZSBjaGVja3N1bSB0b3RhbFxuXHRcdGNoZWNrc3VtID0gY2hlY2tzdW0gKyBjYWxjO1xuXG5cdFx0Ly8gU3dpdGNoIHRoZSB2YWx1ZSBvZiBqXG5cdFx0aiA9IChqID09IDEpID8gMiA6IDE7XG5cdH1cblxuXHQvLyBBbGwgZG9uZSAtIGlmIGNoZWNrc3VtIGlzIGRpdmlzaWJsZSBieSAxMCwgaXQgaXMgYSB2YWxpZCBtb2R1bHVzIDEwLlxuXHQvLyBJZiBub3QsIHJlcG9ydCBhbiBlcnJvci5cblx0cmV0dXJuIChjaGVja3N1bSAlIDEwICE9IDApID8gZmFsc2UgOiB0cnVlO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNhcmQoYWNjZXB0ZWRDYXJkcywgY2FyZE51bWJlcikge1xuXHRzdGF0ZS5hY2NlcHRlZENhcmRzID0gYWNjZXB0ZWRDYXJkcztcblx0c3RhdGUuY2FyZE51bWJlciA9IGNhcmROdW1iZXIucmVwbGFjZSgvXFxEL2csJycpOyAvL3N0cmlwIGV4dHJhIGNoYXJhY3RlcnNcblx0aWYgKGNhcmROdW1iZXIubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwibWVzc2FnZVwiOiBtZXNzYWdlcy5yZXF1aXJlZCxcblx0XHRcdFwidmFsaWRcIjogZmFsc2Vcblx0XHR9O1xuXHR9XG5cdGlmIChzdGF0ZS5jYXJkTnVtYmVyLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRcIm1lc3NhZ2VcIjogbWVzc2FnZXMucmVxdWlyZWQsXG5cdFx0XHRcInZhbGlkXCI6IGZhbHNlXG5cdFx0fTtcblx0fVxuXHRpZiAoX2RldGVjdENhcmQoKSkge1xuXHRcdGlmIChzdGF0ZS5hY2NlcHRlZENhcmRzLmluZGV4T2Yoc3RhdGUuY2FyZFR5cGUpID09PSAtMSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XCJtZXNzYWdlXCI6IG1lc3NhZ2VzLmFjY2VwdGVkQ2FyZCgpLFxuXHRcdFx0XHRcInZhbGlkXCI6IGZhbHNlXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRpZiAoY2FyZERhdGFbc3RhdGUuY2FyZFR5cGVdLmxlbmd0aHMuaW5kZXhPZihzdGF0ZS5jYXJkTnVtYmVyLmxlbmd0aCkgPT09IC0xKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcIm1lc3NhZ2VcIjogbWVzc2FnZXMuaW52YWxpZCxcblx0XHRcdFx0XCJ2YWxpZFwiOiBmYWxzZVxuXHRcdFx0fTtcblx0XHR9XG5cdFx0aWYgKF9jaGVja0t1aG4oKSA9PT0gZmFsc2UpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFwibWVzc2FnZVwiOiBtZXNzYWdlcy5pbnZhbGlkLFxuXHRcdFx0XHRcInZhbGlkXCI6IGZhbHNlXG5cdFx0XHR9O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0XCJtZXNzYWdlXCI6IG1lc3NhZ2VzLmludmFsaWQsXG5cdFx0XHRcInZhbGlkXCI6IGZhbHNlXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0XCJ2YWxpZFwiOiB0cnVlXG5cdH07XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwKHVzZXJNLCB1c2VyWSkge1xuXHR2YXIgZCA9IG5ldyBEYXRlKCk7XG5cdHZhciBtb250aCA9IGQuZ2V0TW9udGgoKTtcblx0dmFyIHllYXIgPSBkLmdldEZ1bGxZZWFyKCk7XG5cblx0aWYgKHVzZXJNLmxlbmd0aCA9PT0gMCB8fCB1c2VyWS5sZW5ndGggPT09IDAgfHwgdXNlck0ucmVwbGFjZSgvXFxEL2csJycpLmxlbmd0aCA9PT0gMCB8fCB1c2VyWS5yZXBsYWNlKC9cXEQvZywnJykubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwibWVzc2FnZVwiOiBtZXNzYWdlcy5yZXF1aXJlZCxcblx0XHRcdFwidmFsaWRcIjogZmFsc2Vcblx0XHR9O1xuXHR9XG5cblx0dXNlck0gPSBwYXJzZUludCh1c2VyTSwgMTApO1xuXHR1c2VyWSA9IHBhcnNlSW50KHVzZXJZLCAxMCk7XG5cblx0aWYgKHVzZXJNID4gMTIgfHwgdXNlck0gPCAxIHx8ICh1c2VyWSA+IHllYXIgKyAyMCkgfHwgKHVzZXJZIDwgeWVhciB8fCAodXNlclkgPT09IHllYXIgJiYgdXNlck0gPCBtb250aCkpKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwibWVzc2FnZVwiOiBtZXNzYWdlcy5pbnZhbGlkRXhwaXJhdGlvbixcblx0XHRcdFwidmFsaWRcIjogZmFsc2Vcblx0XHR9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0XCJ2YWxpZFwiOiB0cnVlXG5cdH07XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ1ZWKENWVikge1xuXHRpZiAoQ1ZWLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRcIm1lc3NhZ2VcIjogbWVzc2FnZXMucmVxdWlyZWQsXG5cdFx0XHRcInZhbGlkXCI6IGZhbHNlXG5cdFx0fTtcblx0fVxuXHRpZiAoIWlzTmFOKENWVikgJiYgKENWViA+IDk5OTkgfHwgQ1ZWIDwgMTAwKSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRcIm1lc3NhZ2VcIjogbWVzc2FnZXMuaW52YWxpZEN2dixcblx0XHRcdFwidmFsaWRcIjogZmFsc2Vcblx0XHR9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0XCJ2YWxpZFwiOiB0cnVlXG5cdH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHR2YWxpZGF0ZUNhcmQ6IHZhbGlkYXRlQ2FyZCxcblx0dmFsaWRhdGVFeHA6IHZhbGlkYXRlRXhwLFxuXHR2YWxpZGF0ZUNWVjogdmFsaWRhdGVDVlYsXG5cdGNhcmREYXRhOiBjYXJkRGF0YVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9jYy12YWxpZGF0b3IvdmFsaWRhdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDcxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiJHtuc30tY29udGFpbmVyXFxcIj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1yb3dzXFxcIj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1yb3dcXFwiPlxcblxcdFxcdFxcdDxsYWJlbD5OYW1lIG9uIENhcmQ8L2xhYmVsPlxcblxcdFxcdFxcdDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiSUJNQ2hhdC1pbnB1dC1jb2xvcnNcXFwiIG5hbWU9XFxcImNjX2Z1bGxfbmFtZVxcXCIgLz5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJJQk1DaGF0LXZhbGlkYXRpb24tZXJyb3IgSUJNQ2hhdC1lcnJvci1jb2xvcnNcXFwiIGRhdGEtdmFsaWRhdGlvbi1mb3I9XFxcImNjX2Z1bGxfbmFtZVxcXCIgZGF0YS12YWxpZD1cXFwidHJ1ZVxcXCIgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtcXFwiPjwvZGl2PlxcblxcdFxcdDwvZGl2PlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LXJvd1xcXCI+XFxuXFx0XFx0XFx0PGxhYmVsPkNyZWRpdCBDYXJkIE51bWJlcjwvbGFiZWw+XFxuXFx0XFx0XFx0PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJJQk1DaGF0LWlucHV0LWNvbG9yc1xcXCIgbmFtZT1cXFwiY2NfbnVtYmVyXFxcIiAvPlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIklCTUNoYXQtdmFsaWRhdGlvbi1lcnJvciBJQk1DaGF0LWVycm9yLWNvbG9yc1xcXCIgZGF0YS12YWxpZGF0aW9uLWZvcj1cXFwiY2NfbnVtYmVyXFxcIiBkYXRhLXZhbGlkPVxcXCJ0cnVlXFxcIiBzdHlsZT1cXFwiZGlzcGxheTpub25lO1xcXCI+PC9kaXY+XFxuXFx0XFx0PC9kaXY+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tcm93XFxcIj5cXG5cXHRcXHRcXHQ8bGFiZWw+RXhwaXJhdGlvbiBEYXRlPC9sYWJlbD5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1jb2xcXFwiPlxcblxcdFxcdFxcdFxcdDxpbnB1dCBjbGFzcz1cXFwiJHtuc30tZGF0ZSBJQk1DaGF0LWlucHV0LWNvbG9yc1xcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiY2NfZXhwX2RhdGVfbW9udGhcXFwiIHBsYWNlaG9sZGVyPVxcXCJNTVxcXCIgbWF4bGVuZ3RoPVxcXCIyXFxcIiAvPlxcblxcdFxcdFxcdFxcdDxpbnB1dCBjbGFzcz1cXFwiJHtuc30tZGF0ZSBJQk1DaGF0LWlucHV0LWNvbG9yc1xcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiY2NfZXhwX2RhdGVfeWVhclxcXCIgcGxhY2Vob2xkZXI9XFxcIllZWVlcXFwiIG1heGxlbmd0aD1cXFwiNFxcXCIgLz5cXG5cXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJJQk1DaGF0LXZhbGlkYXRpb24tZXJyb3IgSUJNQ2hhdC1lcnJvci1jb2xvcnNcXFwiIGRhdGEtdmFsaWRhdGlvbi1mb3I9XFxcImNjX2V4cF9kYXRlXFxcIiBkYXRhLXZhbGlkPVxcXCJ0cnVlXFxcIiBzdHlsZT1cXFwiZGlzcGxheTpub25lO1xcXCI+PC9kaXY+XFxuXFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0PC9kaXY+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiJHtuc30tcm93XFxcIj5cXG5cXHRcXHRcXHQ8bGFiZWw+Q1ZWPC9sYWJlbD5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCIke25zfS1jb2xcXFwiPlxcblxcdFxcdFxcdFxcdDxpbnB1dCBjbGFzcz1cXFwiJHtuc30tY3Z2IElCTUNoYXQtaW5wdXQtY29sb3JzXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJjY19jb2RlXFxcIiAvPlxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIklCTUNoYXQtdmFsaWRhdGlvbi1lcnJvciBJQk1DaGF0LWVycm9yLWNvbG9yc1xcXCIgZGF0YS12YWxpZGF0aW9uLWZvcj1cXFwiY2NfY29kZVxcXCIgZGF0YS12YWxpZD1cXFwidHJ1ZVxcXCIgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtcXFwiPjwvZGl2PlxcblxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdDwvZGl2PlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIiR7bnN9LXJvdyAke25zfS1idXR0b25zXFxcIj5cXG5cXHRcXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCIke25zfS1jYW5jZWwgSUJNQ2hhdC1zZWNvbmRhcnktY29sb3JzXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cXHRcXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCIke25zfS1jb250aW51ZSBJQk1DaGF0LWlucHV0LWNvbG9yc1xcXCI+Q29udGludWU8L2J1dHRvbj5cXG5cXHRcXHQ8L2Rpdj5cXG5cXHQ8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9jYy12YWxpZGF0b3IvdGVtcGxhdGVzL2Jhc2UuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDcyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnJlcXVpcmUoJy4vc3R5bGVzLmNzcycpO1xuXG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG52YXIgZXJyb3JzID0gW107XG52YXIgbnMgPSAnSUJNQ2hhdC1lcnJvcic7XG5cbnZhciBlcnJvckxheW91dCA9IHtcblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0ZXZlbnRzLnN1YnNjcmliZSgnbGF5b3V0OmVycm9yJywgZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKGRhdGEpO1xuXHRcdFx0ZXJyb3JzW2RhdGEudXVpZF0gPSBlcnJvcjtcblx0XHR9KTtcblx0fVxufTtcblxudmFyIHRlbXBsYXRlcyA9IHtcblx0YmFzZTogcmVxdWlyZSgnLi90ZW1wbGF0ZXMvYmFzZS5odG1sJylcbn07XG5cbmZ1bmN0aW9uIEVycm9yKGRhdGEpIHtcblx0dGhpcy5pbml0KGRhdGEpO1xufVxuXG5FcnJvci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0dGhpcy5tZXNzYWdlID0gZGF0YS5tZXNzYWdlLmxheW91dC5tZXNzYWdlO1xuXHR0aGlzLnV1aWQgPSBkYXRhLnV1aWQ7XG5cdHRoaXMucGFyZW50RWxlbWVudCA9IGRhdGEuZWxlbWVudDtcblx0dGhpcy5sYXlvdXRFbGVtZW50ID0gZGF0YS5sYXlvdXRFbGVtZW50O1xuXHR0aGlzLmxheW91dEVsZW1lbnQuaW5uZXJIVE1MID0gdGVtcGxhdGVzLmJhc2U7XG5cdHRoaXMubGF5b3V0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIG5zKS50ZXh0Q29udGVudCA9IHRoaXMubWVzc2FnZTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBlcnJvckxheW91dDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbGF5b3V0cy9lcnJvci9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDczXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLklCTUNoYXQtZXJyb3Ige1xcblxcdHBhZGRpbmc6IDAuNWVtIDFlbSAwLjVlbSAxZW07XFxufVxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmF3LWxvYWRlciEuL3NyYy9sYXlvdXRzL2Vycm9yL3N0eWxlcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIklCTUNoYXQtZXJyb3IgSUJNQ2hhdC1lcnJvci1jb2xvcnNcXFwiPjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL2Vycm9yL3RlbXBsYXRlcy9iYXNlLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA3NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgc3RhcnQgPSByZXF1aXJlKCcuL3N0YXJ0Jyk7XG52YXIgcmVzaXplID0gcmVxdWlyZSgnLi9yZXNpemUnKTtcbnZhciByZWNlaXZlID0gcmVxdWlyZSgnLi9yZWNlaXZlJyk7XG52YXIgc2VuZCA9IHJlcXVpcmUoJy4vc2VuZCcpO1xudmFyIHNlbmRNb2NrID0gcmVxdWlyZSgnLi9zZW5kLW1vY2snKTtcbnZhciBzZW5kSW5wdXRNZXNzYWdlID0gcmVxdWlyZSgnLi9zZW5kLWlucHV0LW1lc3NhZ2UnKTtcbnZhciBpbnB1dCA9IHJlcXVpcmUoJy4vaW5wdXQnKTtcbnZhciBlcnJvciA9IHJlcXVpcmUoJy4vZXJyb3InKTtcbnZhciBwbGF5YmFjayA9IHJlcXVpcmUoJy4vcGxheWJhY2snKTtcbnZhciBzY3JvbGxUb0JvdHRvbSA9IHJlcXVpcmUoJy4vc2Nyb2xsLXRvLWJvdHRvbScpO1xudmFyIHRyeUl0ID0gcmVxdWlyZSgnLi90cnktaXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdC8qKlxuXHQqIFJlc2l6ZSBldmVudC4gRm9yY2VzIGEgcmVzaXplIG9mIHRoZSBDaGF0IFVJIGVsZW1lbnRzIHRvIGZpeCBjdXJyZW50IHBhcmVudCBlbGVtZW50LlxuXHQqXG5cdCogQGV2ZW50IHJlc2l6ZVxuXHQqIEBleGFtcGxlXG5cdCogSUJNQ2hhdC5wdWJsaXNoKCdyZXNpemUnKTtcblx0KiBJQk1DaGF0LnN1YnNjcmliZSgncmVzaXplJywgZnVuY3Rpb24oKXtcblx0KlxuXHQqIH0pO1xuXHQqL1xuXHRyZXNpemU6IHJlc2l6ZSxcblx0LyoqXG5cdCogQGlnbm9yZVxuXHQqL1xuXHRzdGFydDogc3RhcnQsXG5cdC8qKlxuXHQqIFNlbmQgZXZlbnQuIFNlbmRzIGEgbWVzc2FnZS5cblx0KlxuXHQqIEBldmVudCBzZW5kXG5cdCogQHByb3BlcnR5IHtPYmplY3R9IGRhdGFcblx0KiBAcHJvcGVydHkge3N0cmluZ30gZGF0YS50ZXh0IC0gVGV4dCB0byBzZW5kIHRvIFdhdHNvbiBWaXJ0dWFsIEFnZW50XG5cdCogQHByb3BlcnR5IHtib29sZWFufSBkYXRhLnNlbmRTaWxlbnRseSAtIHdoZXRoZXIgb3Igbm90IHRvIHNob3cgaW4gVUksIGRlZmF1bHRzIHRvIHRydWVcblx0KiBAZXhhbXBsZVxuXHQqIElCTUNoYXQucHVibGlzaCgnc2VuZCcsIGRhdGEpO1xuXHQqIElCTUNoYXQuc3Vic2NyaWJlKCdzZW5kJywgZnVuY3Rpb24oZGF0YSl7XG5cdCpcblx0KiB9KTtcblx0Ki9cblx0c2VuZDogc2VuZCxcblx0LyoqXG5cdCogc2VuZE1vY2sgZXZlbnQuIERpc3BsYXlzIGEgbWVzc2FnZSBpbiB0aGUgVUksIGJ1dCBkb2VzIG5vdCBzZW5kIGl0IHRvIHRoZSBXYXRzb24gVmlydHVhbCBBZ2VudC5cblx0KlxuXHQqIEBldmVudCBzZW5kTW9ja1xuXHQqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhXG5cdCogQHByb3BlcnR5IHtzdHJpbmd9IGRhdGEudGV4dCAtIFRleHQgdG8gc2VuZCB0byBXYXRzb24gVmlydHVhbCBBZ2VudFxuXHQqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZGF0YS5zZW5kU2lsZW50bHkgLSB3aGV0aGVyIG9yIG5vdCB0byBzaG93IGluIFVJLCBkZWZhdWx0cyB0byB0cnVlXG5cdCogQGV4YW1wbGVcblx0KiBJQk1DaGF0LnB1Ymxpc2goJ3NlbmRNb2NrJywgZGF0YSk7XG5cdCogSUJNQ2hhdC5zdWJzY3JpYmUoJ3NlbmRNb2NrJywgZnVuY3Rpb24oZGF0YSl7XG5cdCpcblx0KiB9KTtcblx0Ki9cblx0c2VuZE1vY2s6IHNlbmRNb2NrLFxuXHQvKipcblx0KiBSZWNlaXZlIGV2ZW50LlxuXHQqXG5cdCogQGV2ZW50IHJlY2VpdmVcblx0KiBAcHJvcGVydHkge09iamVjdH0gbWVzc2FnZSAtIEEgbWVzc2FnZSBvYmplY3QuXG5cdCogQGV4YW1wbGVcblx0KiBJQk1DaGF0LnB1Ymxpc2goJ3JlY2VpdmUnLCBtZXNzYWdlKTtcblx0KiBJQk1DaGF0LnN1YnNjcmliZSgncmVjZWl2ZScsIGZ1bmN0aW9uKG1lc3NhZ2Upe1xuXHQqXG5cdCogfSk7XG5cdCovXG5cdHJlY2VpdmU6IHJlY2VpdmUsXG5cdC8qKlxuXHQqIEVuYWJsZSBJbnB1dCBldmVudC4gQWxsb3dzIHN1Ym1pdHRpbmcgZnJvbSBpbnB1dCBmaWVsZCB3aGVuIGl0IGhhcyBiZWVuIGRpc2FibGVkLlxuXHQqXG5cdCogQGV2ZW50IGVuYWJsZS1pbnB1dFxuXHQqIEBleGFtcGxlXG5cdCogSUJNQ2hhdC5wdWJsaXNoKCdlbmFibGUtaW5wdXQnKTtcblx0KiBJQk1DaGF0LnN1YnNjcmliZSgnZW5hYmxlLWlucHV0JywgZnVuY3Rpb24oKXtcblx0KlxuXHQqIH0pO1xuXHQqL1xuXHQvKipcblx0KiBEaXNhYmxlIElucHV0IGV2ZW50LiBEaXNhbGxvd3Mgc3VibWl0dGluZyBmcm9tIGlucHV0IGZpZWxkLlxuXHQqXG5cdCogQGV2ZW50IGRpc2FibGUtaW5wdXRcblx0KiBAZXhhbXBsZVxuXHQqIElCTUNoYXQucHVibGlzaCgnZGlzYWJsZS1pbnB1dCcpO1xuXHQqIElCTUNoYXQuc3Vic2NyaWJlKCdkaXNhYmxlLWlucHV0JywgZnVuY3Rpb24oKXtcblx0KlxuXHQqIH0pO1xuXHQqL1xuXHQvKipcblx0KiBFbmFibGUgTG9hZGluZyBldmVudC4gU2hvd3MgbG9hZGluZyBzcGlubmVyLlxuXHQqXG5cdCogQGV2ZW50IGVuYWJsZS1sb2FkaW5nXG5cdCogQGV4YW1wbGVcblx0KiBJQk1DaGF0LnB1Ymxpc2goJ2VuYWJsZS1sb2FkaW5nJyk7XG5cdCogSUJNQ2hhdC5zdWJzY3JpYmUoJ2VuYWJsZS1sb2FkaW5nJywgZnVuY3Rpb24oKXtcblx0KlxuXHQqIH0pO1xuXHQqL1xuXHQvKipcblx0KiBEaXNhYmxlIGxvYWRpbmcgZXZlbnQuIEhpZGUgbG9hZGluZyBzcGlubmVyLlxuXHQqXG5cdCogQGV2ZW50IGRpc2FibGUtbG9hZGluZ1xuXHQqIEBleGFtcGxlXG5cdCogSUJNQ2hhdC5wdWJsaXNoKCdkaXNhYmxlLWxvYWRpbmcnKTtcblx0KiBJQk1DaGF0LnN1YnNjcmliZSgnZGlzYWJsZS1sb2FkaW5nJywgZnVuY3Rpb24oKXtcblx0KlxuXHQqIH0pO1xuXHQqL1xuXHRpbnB1dDogaW5wdXQsXG5cdC8qKlxuXHQqIEVycm9yIGV2ZW50LlxuXHQqXG5cdCogQGV2ZW50IGVycm9yXG5cdCogQHByb3BlcnR5IHtPYmplY3R9IGVycm9yIC0gRXJyb3Igb2JqZWN0LlxuXHQqIEBleGFtcGxlXG5cdCogSUJNQ2hhdC5wdWJsaXNoKCdlcnJvcicsIGVycm9yKTtcblx0KiBJQk1DaGF0LnN1YnNjcmliZSgnZXJyb3InLCBmdW5jdGlvbihlcnJvcil7XG5cdCpcblx0KiB9KTtcblx0Ki9cblx0ZXJyb3I6IGVycm9yLFxuXHQvKipcblx0KiBTY3JvbGwgdG8gYm90dG9tIGV2ZW50LiBTY3JvbGxzIGNoYXQgY29udGVudCBpbnRvIGNvcnJlY3QgcG9zaXRpb25pbmcuXG5cdCpcblx0KiBAZXZlbnQgc2Nyb2xsLXRvLWJvdHRvbVxuXHQqIEBleGFtcGxlXG5cdCogSUJNQ2hhdC5wdWJsaXNoKCdzY3JvbGwtdG8tYm90dG9tJyk7XG5cdCogSUJNQ2hhdC5zdWJzY3JpYmUoJ3Njcm9sbC10by1ib3R0b20nLCBmdW5jdGlvbigpe1xuXHQqXG5cdCogfSk7XG5cdCovXG5cdHNjcm9sbFRvQm90dG9tOiBzY3JvbGxUb0JvdHRvbSxcblx0LyoqXG5cdCogQGlnbm9yZVxuXHQqL1xuXHRzZW5kSW5wdXRNZXNzYWdlOiBzZW5kSW5wdXRNZXNzYWdlLFxuXHQvKipcblx0KiBAaWdub3JlXG5cdCovXG5cdHBsYXliYWNrOiBwbGF5YmFjayxcblx0LyoqXG5cdCogQGlnbm9yZVxuXHQqL1xuXHR0cnlJdDogdHJ5SXRcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2V2ZW50cy9oYW5kbGVycy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDc3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4uLy4uL3N0YXRlJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xudmFyIGV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2V2ZW50cycpO1xudmFyIHRlbXBsYXRlcyA9IHJlcXVpcmUoJy4uLy4uL3RlbXBsYXRlcycpO1xuXG5mdW5jdGlvbiBzdGFydChkYXRhKSB7XG5cdHZhciBjdXJyZW50O1xuXHRzdGF0ZS5zZXRTdGF0ZShkYXRhKTtcblx0Y3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdHV0aWxzLmF0dGFjaFN0eWxlcygpO1xuXHRjdXJyZW50LnJvb3QuY2xhc3NOYW1lICs9IFwiIGNoYXRJRC1cIiArIGN1cnJlbnQuY2hhdElEO1xuXHRjdXJyZW50LnJvb3QuaW5uZXJIVE1MID0gdGVtcGxhdGVzLnN0YXJ0O1xuXHR2YXIgb3V0ZXJDb250YWluZXIgPSBjdXJyZW50LnJvb3QucXVlcnlTZWxlY3RvcignLklCTUNoYXQtb3V0ZXItY29udGFpbmVyJyk7XG5cdHZhciBjaGF0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNoYXRCb3guY2xhc3NMaXN0LmFkZCgnSUJNQ2hhdC1pbnB1dC1jb250YWluZXInKTtcblx0Y2hhdEJveC5jbGFzc0xpc3QuYWRkKCdJQk1DaGF0LWlucHV0LWNvbnRhaW5lci10aGVtZScpO1xuXHRjaGF0Qm94LmlubmVySFRNTCA9IHRlbXBsYXRlcy5pbnB1dDtcblx0b3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hhdEJveCk7XG5cdHZhciBlbGVtZW50cyA9IHtcblx0XHRjb250YWluZXI6IGN1cnJlbnQucm9vdC5xdWVyeVNlbGVjdG9yKCcuSUJNQ2hhdC1jaGF0LWNvbnRhaW5lcicpLFxuXHRcdGNoYXRIb2xkZXI6IGN1cnJlbnQucm9vdC5xdWVyeVNlbGVjdG9yKCcuSUJNQ2hhdC1tZXNzYWdlcycpLFxuXHRcdGlubmVyQ29udGFpbmVyOiBjdXJyZW50LnJvb3QucXVlcnlTZWxlY3RvcignLklCTUNoYXQtaW5uZXItY29udGFpbmVyJylcblx0fTtcblx0Ly9UT0RPOiByZW1vdmUgaWYgY29uZGl0aW9uYWwgYWZ0ZXIgRGFzaGJvYXJkIGltcGxlbWVudHMgbmV3IHBsYXliYWNrXG5cdGlmIChjdXJyZW50LnBsYXliYWNrICE9PSB0cnVlKSB7XG5cdFx0ZWxlbWVudHMuaW5wdXRIb2xkZXIgPSBjdXJyZW50LnJvb3QucXVlcnlTZWxlY3RvcignLklCTUNoYXQtaW5wdXQtY29udGFpbmVyJyk7XG5cdFx0ZWxlbWVudHMuaW5wdXQgPSBjdXJyZW50LnJvb3QucXVlcnlTZWxlY3RvcignLklCTUNoYXQtY2hhdC10ZXh0Ym94Jyk7XG5cdFx0ZWxlbWVudHMuZm9ybSA9IGN1cnJlbnQucm9vdC5xdWVyeVNlbGVjdG9yKCcuSUJNQ2hhdC1pbnB1dC1mb3JtJyk7XG5cdFx0ZWxlbWVudHMubG9hZGVyID0gY3VycmVudC5yb290LnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LWlucHV0LWxvYWRpbmcnKTtcblxuXHRcdGVsZW1lbnRzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH0pO1xuXG5cdFx0ZWxlbWVudHMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRpZiAoZS5rZXlDb2RlID09PSAxMylcblx0XHRcdFx0ZXZlbnRzLnB1Ymxpc2goJ3NlbmQtaW5wdXQtbWVzc2FnZScpO1xuXHRcdH0pO1xuXG5cdFx0ZWxlbWVudHMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbigpIHtcblx0XHRcdGV2ZW50cy5wdWJsaXNoKCdyZXNpemUnKTtcblx0XHR9KTtcblxuXHRcdGVsZW1lbnRzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbigpIHtcblx0XHRcdGV2ZW50cy5wdWJsaXNoKCdyZXNpemUnKTtcblx0XHR9KTtcblx0fVxuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1dGlscy5kZWJvdW5jZShmdW5jdGlvbigpIHtcblx0XHRldmVudHMucHVibGlzaCgncmVzaXplJyk7XG5cdH0sIDEwMDApKTtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRldmVudHMucHVibGlzaCgncmVzaXplJyk7XG5cdH0pO1xuXG5cdHN0YXRlLnNldFN0YXRlKGVsZW1lbnRzKTtcblx0ZXZlbnRzLnB1Ymxpc2goJ3Jlc2l6ZScpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YXJ0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9ldmVudHMvaGFuZGxlcnMvc3RhcnQuanNcbiAqKiBtb2R1bGUgaWQgPSA3OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdGlucHV0OiByZXF1aXJlKCcuL2lucHV0Lmh0bWwnKSxcblx0cmVjZWl2ZTogcmVxdWlyZSgnLi9yZWNlaXZlLmh0bWwnKSxcblx0c2VuZDogcmVxdWlyZSgnLi9zZW5kLmh0bWwnKSxcblx0c3RhcnQ6IHJlcXVpcmUoJy4vc3RhcnQuaHRtbCcpXG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90ZW1wbGF0ZXMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA3OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIGNsYXNzPVxcXCJJQk1DaGF0LWlucHV0LWZvcm0gSUJNQ2hhdC1pbnB1dC1mb3JtLXRoZW1lXFxcIj5cXG5cXHQ8aW5wdXQgYXJpYS1sYWJlbGxlZGJ5PVxcXCJFbnRlciBhIE1lc3NhZ2VcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJJQk1DaGF0LWNoYXQtdGV4dGJveCBJQk1DaGF0LWNoYXQtdGV4dGJveC10aGVtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIG1lc3NhZ2UuLi5cXFwiIC8+XFxuXFx0PGRpdiBjbGFzcz1cXFwiSUJNQ2hhdC1pYm0tc3Bpbm5lci1zdGFydCBJQk1DaGF0LWlucHV0LWxvYWRpbmcgSUJNQ2hhdC1pbnB1dC1sb2FkaW5nLXRoZW1lXFxcIj5cXG5cXHRcXHQ8c3ZnIGNsYXNzPVxcXCJJQk1DaGF0LWlibS1zcGlubmVyXFxcIiB3aWR0aD0zMiBoZWlnaHQ9MzIgdmlld0JveD1cXFwiLTE2IC0xNiAzMiAzMlxcXCI+XFxuXFx0XFx0XFx0PGNpcmNsZSBjeD0wIGN5PTAgcj04IC8+PC9zdmc+XFxuXFx0XFx0PC9zdmc+XFxuXFx0PC9kaXY+XFxuPC9mb3JtPlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90ZW1wbGF0ZXMvaW5wdXQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDgwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiSUJNQ2hhdC13YXRzb24tbWVzc2FnZS1jb250YWluZXIgSUJNQ2hhdC13YXRzb24tbWVzc2FnZS1jb250YWluZXItdGhlbWVcXFwiPjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90ZW1wbGF0ZXMvcmVjZWl2ZS5odG1sXG4gKiogbW9kdWxlIGlkID0gODFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGlkPVxcXCIke2RhdGEudXVpZH1cXFwiIGNsYXNzPVxcXCJJQk1DaGF0LXVzZXItbWVzc2FnZS1jb250YWluZXIgSUJNQ2hhdC11c2VyLW1lc3NhZ2UtY29udGFpbmVyLXRoZW1lXFxcIj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCJJQk1DaGF0LXVzZXItbWVzc2FnZSBJQk1DaGF0LXVzZXItbWVzc2FnZS10aGVtZSBJQk1DaGF0LXNlY29uZGFyeS1jb2xvcnNcXFwiPjwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90ZW1wbGF0ZXMvc2VuZC5odG1sXG4gKiogbW9kdWxlIGlkID0gODJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJJQk1DaGF0LW91dGVyLWNvbnRhaW5lciBJQk1DaGF0LW91dGVyLWNvbnRhaW5lci10aGVtZSBJQk1DaGF0LWRlZmF1bHQtY29sb3JzXFxcIj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCJJQk1DaGF0LWNoYXQtY29udGFpbmVyIElCTUNoYXQtY2hhdC1jb250YWluZXItdGhlbWVcXFwiPlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIklCTUNoYXQtaW5uZXItY29udGFpbmVyIElCTUNoYXQtaW5uZXItY29udGFpbmVyLXRoZW1lXFxcIj5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJJQk1DaGF0LW1lc3NhZ2VzIElCTUNoYXQtbWVzc2FnZXMtdGhlbWVcXFwiPjwvZGl2PlxcblxcdFxcdDwvZGl2PlxcblxcdDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90ZW1wbGF0ZXMvc3RhcnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDgzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4uLy4uL3N0YXRlJyk7XG5cbmZ1bmN0aW9uIHJlc2l6ZSgpIHtcblx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdFx0aWYgKGN1cnJlbnQuYWN0aXZlKSB7XG5cdFx0XHRjdXJyZW50LmNoYXRIb2xkZXIuc3R5bGUubWF4SGVpZ2h0ID0gKGN1cnJlbnQucm9vdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLSBjdXJyZW50LmlucHV0SG9sZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCkgKyAncHgnO1xuXHRcdFx0Y3VycmVudC5jaGF0SG9sZGVyLnN0eWxlLm1heFdpZHRoID0gKChjdXJyZW50LnJvb3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggPiAyODgpID8gY3VycmVudC5yb290LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIDogMjg4KSArICdweCc7XG5cdFx0fVxuXHR9LCAzMDApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlc2l6ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRzL2hhbmRsZXJzL3Jlc2l6ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDg0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4uLy4uL3N0YXRlJyk7XG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ2xvZGFzaC9hc3NpZ24nKTtcbnZhciB0ZW1wbGF0ZXMgPSByZXF1aXJlKCcuLi8uLi90ZW1wbGF0ZXMnKTtcblxuZnVuY3Rpb24gX2FjdGlvbnMoZGF0YSwgdHJ5SXQsIGRlYnVnKSB7XG5cdHZhciBtc2cgPSBkYXRhLm1lc3NhZ2U7XG5cdGlmIChtc2cgJiYgbXNnLmFjdGlvbiAmJiBtc2cuYWN0aW9uLm5hbWUpIHtcblx0XHR2YXIgYWN0aW9uID0gJ2FjdGlvbjonICsgbXNnLmFjdGlvbi5uYW1lO1xuXHRcdGlmIChldmVudHMuaGFzU3Vic2NyaXB0aW9uKGFjdGlvbikpIHtcblx0XHRcdGV2ZW50cy5wdWJsaXNoKGFjdGlvbiwgZGF0YSwgZXZlbnRzLmNvbXBsZXRlRXZlbnQpO1xuXHRcdFx0aWYgKGRlYnVnKVxuXHRcdFx0XHRjb25zb2xlLmxvZygnQ2FsbCB0byAnICsgYWN0aW9uKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGRlYnVnKVxuXHRcdFx0XHRjb25zb2xlLndhcm4oJ05vdGhpbmcgaXMgc3Vic2NyaWJlZCB0byAnICsgYWN0aW9uKTtcblx0XHRcdGlmICh0cnlJdClcblx0XHRcdFx0ZXZlbnRzLnB1Ymxpc2goJ3RyeS1pdC1hY3Rpb24tc3Vic2NyaXB0aW9uJywgYWN0aW9uKTtcblx0XHR9XG5cdH1cblx0ZXZlbnRzLnB1Ymxpc2goJ2Rpc2FibGUtbG9hZGluZycpO1xuXHRldmVudHMucHVibGlzaCgnZm9jdXMtaW5wdXQnKTtcblx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRldmVudHMucHVibGlzaCgnc2Nyb2xsLXRvLWJvdHRvbScpO1xuXHR9LCAyMCk7XG59XG5cbmZ1bmN0aW9uIF9sYXlvdXRzKGRhdGEsIHRyeUl0LCBkZWJ1Zykge1xuXHR2YXIgbXNnID0gZGF0YS5tZXNzYWdlO1xuXHRpZiAobXNnICYmIG1zZy5sYXlvdXQgJiYgbXNnLmxheW91dC5uYW1lKSB7XG5cdFx0dmFyIGxheW91dCA9ICdsYXlvdXQ6JyArIG1zZy5sYXlvdXQubmFtZTtcblx0XHRpZiAoZXZlbnRzLmhhc1N1YnNjcmlwdGlvbihsYXlvdXQpKSB7XG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRldmVudHMucHVibGlzaChsYXlvdXQsIGRhdGEpO1xuXHRcdFx0XHRpZiAoZGVidWcpXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhbGwgdG8gJyArIGxheW91dCk7XG5cdFx0XHR9LCAxMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChkZWJ1Zylcblx0XHRcdFx0Y29uc29sZS53YXJuKCdOb3RoaW5nIGlzIHN1YnNjcmliZWQgdG8gJyArIGxheW91dCk7XG5cdFx0XHRpZiAodHJ5SXQpXG5cdFx0XHRcdGV2ZW50cy5wdWJsaXNoKCd0cnktaXQtbGF5b3V0LXN1YnNjcmlwdGlvbicsIGxheW91dCk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIHJlY2VpdmUoZGF0YSkge1xuXHR2YXIgcGFyc2VkID0gKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykgPyB7IG1lc3NhZ2U6IHsgdGV4dDogZGF0YSB9IH0gOiBkYXRhO1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdHN0YXRlLnNldFN0YXRlKHtcblx0XHRtZXNzYWdlczogW10uY29uY2F0KGN1cnJlbnQubWVzc2FnZXMgfHwgW10sIHBhcnNlZCksXG5cdFx0aGFzRXJyb3I6IGZhbHNlXG5cdH0pO1xuXHR2YXIgbXNnID0gcGFyc2VkLm1lc3NhZ2U7XG5cdHZhciBtc2dUZXh0ID0gKG1zZyAmJiBtc2cudGV4dCkgPyAoKEFycmF5LmlzQXJyYXkobXNnLnRleHQpICYmIG1zZy50ZXh0Lmxlbmd0aCA+IDApID8gbXNnLnRleHQgOiBbbXNnLnRleHRdKSA6IFsnJ107XG5cdHZhciBjb250YWluZXJzID0gW107XG5cdHZhciBtZXNzYWdlcyA9IFtdO1xuXHR2YXIgbGF5b3V0cyA9IFtdO1xuXHR2YXIgZGF0YXMgPSBbXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtc2dUZXh0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHZhciBtc2dEYXRhID0gYXNzaWduKHt9LCBwYXJzZWQsIHsgdXVpZDogdXRpbHMuZ2V0VVVJRCgpIH0pO1xuXHRcdGhvbGRlci5jbGFzc0xpc3QuYWRkKG1zZ0RhdGEudXVpZCk7XG5cdFx0aG9sZGVyLmlubmVySFRNTCA9IHRlbXBsYXRlcy5yZWNlaXZlO1xuXHRcdGNvbnRhaW5lcnMucHVzaChob2xkZXIucXVlcnlTZWxlY3RvcignLklCTUNoYXQtd2F0c29uLW1lc3NhZ2UtY29udGFpbmVyJykpO1xuXHRcdG1lc3NhZ2VzLnB1c2goZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuXHRcdGxheW91dHMucHVzaChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG5cdFx0bGF5b3V0c1tpXS5jbGFzc0xpc3QuYWRkKCdJQk1DaGF0LXdhdHNvbi1sYXlvdXQnKTtcblx0XHRpZiAoKG1zZ1RleHRbaV0gJiYgbXNnVGV4dFtpXS5sZW5ndGggPiAwKSB8fCAobXNnICYmIG1zZy5sYXlvdXQgJiYgbXNnLmxheW91dC5uYW1lICYmIGkgPT09IChtc2dUZXh0Lmxlbmd0aCAtIDEpKSkge1xuXHRcdFx0bWVzc2FnZXNbaV0uY2xhc3NMaXN0LmFkZCgnSUJNQ2hhdC13YXRzb24tbWVzc2FnZScpO1xuXHRcdFx0bWVzc2FnZXNbaV0uY2xhc3NMaXN0LmFkZCgnSUJNQ2hhdC13YXRzb24tbWVzc2FnZS10aGVtZScpO1xuXHRcdFx0dXRpbHMud3JpdGVNZXNzYWdlKG1lc3NhZ2VzW2ldLCBtc2dUZXh0W2ldKTtcblx0XHRcdGN1cnJlbnQuY2hhdEhvbGRlci5hcHBlbmRDaGlsZChob2xkZXIpO1xuXHRcdH1cblx0XHRjb250YWluZXJzW2ldLmFwcGVuZENoaWxkKG1lc3NhZ2VzW2ldKTtcblx0XHRjb250YWluZXJzW2ldLmFwcGVuZENoaWxkKGxheW91dHNbaV0pO1xuXHRcdG1zZ0RhdGEuZWxlbWVudCA9IGNvbnRhaW5lcnNbaV07XG5cdFx0bXNnRGF0YS5sYXlvdXRFbGVtZW50ID0gbGF5b3V0c1tpXTtcblx0XHRtc2dEYXRhLm1zZ0VsZW1lbnQgPSBtZXNzYWdlc1tpXTtcblx0XHRkYXRhcy5wdXNoKG1zZ0RhdGEpO1xuXHRcdGlmIChtc2cgJiYgbXNnLmxheW91dCAmJiAoKG1zZy5sYXlvdXQuaW5kZXggIT09IHVuZGVmaW5lZCAmJiBtc2cubGF5b3V0LmluZGV4ID09IGkpIHx8KG1zZy5sYXlvdXQuaW5kZXggPT09IHVuZGVmaW5lZCAmJiBpID09IChtc2dUZXh0Lmxlbmd0aCAtIDEpKSkpXG5cdFx0XHRfbGF5b3V0cyhkYXRhc1tpXSwgY3VycmVudC50cnlJdCwgY3VycmVudC5ERUJVRyk7XG5cdFx0aWYgKGkgPT09IChtc2dUZXh0Lmxlbmd0aCAtIDEpKVxuXHRcdFx0X2FjdGlvbnMoZGF0YXNbaV0sIGN1cnJlbnQudHJ5SXQsIGN1cnJlbnQuREVCVUcpO1xuXHR9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZWNlaXZlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9ldmVudHMvaGFuZGxlcnMvcmVjZWl2ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDg1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4uLy4uL3N0YXRlJyk7XG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG52YXIgQm90U0RLID0gcmVxdWlyZSgnQHdhdHNvbi12aXJ0dWFsLWFnZW50L2NsaWVudC1zZGsvbGliL3dlYicpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdsb2Rhc2gvYXNzaWduJyk7XG52YXIgdGVtcGxhdGVzID0gcmVxdWlyZSgnLi4vLi4vdGVtcGxhdGVzJyk7XG5cbmZ1bmN0aW9uIHNlbmQoZGF0YSkge1xuXHRpZiAoZGF0YSAmJiBkYXRhLnRleHQgJiYgZGF0YS50ZXh0Lmxlbmd0aCA+IDApIHtcblx0XHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdFx0YWRkVG9TZW5kUXVldWUoZGF0YSk7XG5cdFx0aWYgKCFjdXJyZW50LmluUHJvZ3Jlc3MpXG5cdFx0XHRhZ2VudFNlbmQoKTtcblx0fVxufVxuXG5mdW5jdGlvbiBhZGRUb1NlbmRRdWV1ZShkYXRhKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0dmFyIHF1ZXVlID0gY3VycmVudC5zZW5kUXVldWUgfHwgW107XG5cdHZhciBuZXdRdWV1ZSA9IHF1ZXVlLnNsaWNlKDApO1xuXHRuZXdRdWV1ZS5wdXNoKGRhdGEpO1xuXHRzdGF0ZS5zZXRTdGF0ZSh7XG5cdFx0c2VuZFF1ZXVlOiBuZXdRdWV1ZVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWx3YXlzKCkge1xuXHRldmVudHMucHVibGlzaCgnZGlzYWJsZS1sb2FkaW5nJyk7XG5cdHN0YXRlLnNldFN0YXRlKHtcblx0XHRpblByb2dyZXNzOiBmYWxzZVxuXHR9KTtcblx0aWYgKHN0YXRlLmdldFN0YXRlKCkuc2VuZFF1ZXVlLmxlbmd0aCA+IDApXG5cdFx0YWdlbnRTZW5kKCk7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmUoKSB7XG5cdGFsd2F5cygpO1xufVxuXG5mdW5jdGlvbiByZWplY3QoZSkge1xuXHRldmVudHMucHVibGlzaCgnZXJyb3InLCBhcmd1bWVudHMpO1xuXHRjb25zb2xlLmVycm9yKGUuc3RhY2spO1xuXHRhbHdheXMoKTtcbn1cblxuZnVuY3Rpb24gc2VuZFRvQm90KGRhdGEpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHRldmVudHMucHVibGlzaCgnZW5hYmxlLWxvYWRpbmcnKTtcblx0ZXZlbnRzLnB1Ymxpc2goJ3Njcm9sbC10by1ib3R0b20nKTtcblx0ZXZlbnRzLnB1Ymxpc2goJ2ZvY3VzLWlucHV0Jyk7XG5cdEJvdFNES1xuXHRcdC5zZW5kKCBjdXJyZW50LmJvdElELCBjdXJyZW50LmNoYXRJRCwgZGF0YS50ZXh0IClcblx0XHQudGhlbiggZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRldmVudHMucHVibGlzaCgncmVjZWl2ZScsIHJlcyk7XG5cdFx0XHRyZXNvbHZlKCk7XG5cdFx0fSlcblx0XHQuY2F0Y2goIGZ1bmN0aW9uKGUpIHtcblx0XHRcdHJlamVjdChlKTtcblx0XHR9KTtcbn1cblxuZnVuY3Rpb24gYWdlbnRTZW5kKCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdHZhciBuZXdEYXRhID0gYXNzaWduKHt9LCBjdXJyZW50LnNlbmRRdWV1ZVswXSwgeyB1dWlkOiB1dGlscy5nZXRVVUlEKCkgfSk7XG5cdHZhciBtc2cgPSBuZXdEYXRhLnRleHQgfHwgJyc7XG5cdHN0YXRlLnNldFN0YXRlKHtcblx0XHRpblByb2dyZXNzOiB0cnVlLFxuXHRcdHNlbmRRdWV1ZTogY3VycmVudC5zZW5kUXVldWUuc2xpY2UoMSwgY3VycmVudC5zZW5kUXVldWUubGVuZ3RoKSxcblx0XHRtZXNzYWdlczogW10uY29uY2F0KGN1cnJlbnQubWVzc2FnZXMgfHwgW10sIG5ld0RhdGEpXG5cdH0pO1xuXHRjdXJyZW50LnJvb3QucXVlcnlTZWxlY3RvcignLklCTUNoYXQtY2hhdC10ZXh0Ym94JykudmFsdWUgPSAnJztcblx0aWYgKCFuZXdEYXRhLnNpbGVudCkge1xuXHRcdGN1cnJlbnQuY2hhdEhvbGRlci5pbm5lckhUTUwgKz0gdXRpbHMuY29tcGlsZSh0ZW1wbGF0ZXMuc2VuZCwgeyAnZGF0YS51dWlkJzogbmV3RGF0YS51dWlkIH0pO1xuXHRcdGN1cnJlbnQuY2hhdEhvbGRlci5xdWVyeVNlbGVjdG9yKCcjJyArIG5ld0RhdGEudXVpZCArICcgLklCTUNoYXQtdXNlci1tZXNzYWdlJykudGV4dENvbnRlbnQgPSBtc2c7XG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ3Njcm9sbC10by1ib3R0b20nKTtcblx0fVxuXHRldmVudHMucHVibGlzaCgnZW5hYmxlLWxvYWRpbmcnKTtcblx0aWYgKGN1cnJlbnQuaGFuZGxlSW5wdXQuZGVmYXVsdClcblx0XHRzZW5kVG9Cb3QobmV3RGF0YSk7XG5cdGVsc2UgaWYgKGN1cnJlbnQuaGFuZGxlSW5wdXQuY29udGV4dClcblx0XHRjdXJyZW50LmhhbmRsZUlucHV0LmNhbGxiYWNrLmJpbmQoY3VycmVudC5oYW5kbGVJbnB1dC5jb250ZXh0LCBuZXdEYXRhLnRleHQsIHJlc29sdmUsIHJlamVjdCk7XG5cdGVsc2Vcblx0XHRjdXJyZW50LmhhbmRsZUlucHV0LmNhbGxiYWNrKG5ld0RhdGEudGV4dCwgcmVzb2x2ZSwgcmVqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZW5kO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9ldmVudHMvaGFuZGxlcnMvc2VuZC5qc1xuICoqIG1vZHVsZSBpZCA9IDg2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4uLy4uL3N0YXRlJyk7XG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ2xvZGFzaC9hc3NpZ24nKTtcbnZhciB0ZW1wbGF0ZXMgPSByZXF1aXJlKCcuLi8uLi90ZW1wbGF0ZXMnKTtcblxuZnVuY3Rpb24gc2VuZE1vY2soZGF0YSkge1xuXHRpZiAoZGF0YS50ZXh0ICYmIGRhdGEudGV4dC5sZW5ndGggPiAwKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHRcdHZhciBuZXdEYXRhID0gYXNzaWduKHt9LCBkYXRhLCB7IHV1aWQ6IHV0aWxzLmdldFVVSUQoKSB9KTtcblx0XHRjdXJyZW50LmNoYXRIb2xkZXIuaW5uZXJIVE1MICs9IHV0aWxzLmNvbXBpbGUodGVtcGxhdGVzLnNlbmQsIHsgJ2RhdGEudXVpZCc6IG5ld0RhdGEudXVpZCB9KTtcblx0XHRjdXJyZW50LmNoYXRIb2xkZXIucXVlcnlTZWxlY3RvcignIycgKyBuZXdEYXRhLnV1aWQgKyAnIC5JQk1DaGF0LXVzZXItbWVzc2FnZScpLnRleHRDb250ZW50ID0gZGF0YS50ZXh0O1xuXHRcdGV2ZW50cy5wdWJsaXNoKCdzY3JvbGwtdG8tYm90dG9tJyk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZW5kTW9jaztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRzL2hhbmRsZXJzL3NlbmQtbW9jay5qc1xuICoqIG1vZHVsZSBpZCA9IDg3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4uLy4uL3N0YXRlJyk7XG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG5cbmZ1bmN0aW9uIHNlbmRJbnB1dE1lc3NhZ2UoKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0aWYgKCFjdXJyZW50LmluUHJvZ3Jlc3MgJiYgIWN1cnJlbnQuZGlzYWJsZUlucHV0KSB7XG5cdFx0dmFyIHRleHQgPSBjdXJyZW50LnJvb3QucXVlcnlTZWxlY3RvcignLklCTUNoYXQtY2hhdC10ZXh0Ym94JykudmFsdWU7XG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ3NlbmQnLCB7XG5cdFx0XHR0ZXh0OiB0ZXh0XG5cdFx0fSk7XG5cdFx0dGV4dCA9ICcnO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2VuZElucHV0TWVzc2FnZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRzL2hhbmRsZXJzL3NlbmQtaW5wdXQtbWVzc2FnZS5qc1xuICoqIG1vZHVsZSBpZCA9IDg4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4uLy4uL3N0YXRlJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmFibGVJbnB1dCgpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHR2YXIgZGlzYWJsZUlucHV0ID0gKGN1cnJlbnQuZGlzYWJsZUlucHV0KSA/IChjdXJyZW50LmRpc2FibGVJbnB1dCAtIDEpIDowO1xuXHRzdGF0ZS5zZXRTdGF0ZSh7IGRpc2FibGVJbnB1dDogZGlzYWJsZUlucHV0IH0pO1xuXHRpZiAoIWRpc2FibGVJbnB1dClcblx0XHRjdXJyZW50LmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZUlucHV0KCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdHZhciBkaXNhYmxlSW5wdXQgPSAoY3VycmVudC5kaXNhYmxlSW5wdXQpID8gKGN1cnJlbnQuZGlzYWJsZUlucHV0ICsgMSkgOiAxO1xuXHRzdGF0ZS5zZXRTdGF0ZSh7IGRpc2FibGVJbnB1dDogZGlzYWJsZUlucHV0IH0pO1xuXHRjdXJyZW50LmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlTG9hZGluZ0lucHV0KCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdHZhciBsb2FkaW5nID0gKGN1cnJlbnQubG9hZGluZykgPyAoY3VycmVudC5sb2FkaW5nICsgMSkgOiAxO1xuXHRzdGF0ZS5zZXRTdGF0ZSh7XG5cdFx0bG9hZGluZzogbG9hZGluZ1xuXHR9KTtcblx0dXRpbHMuc3Bpbm5lci5zaG93KGN1cnJlbnQubG9hZGVyKTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZUxvYWRpbmdJbnB1dCgpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHR2YXIgbG9hZGluZyA9IChjdXJyZW50LmxvYWRpbmcpID8gKGN1cnJlbnQubG9hZGluZyAtIDEpIDogMDtcblx0c3RhdGUuc2V0U3RhdGUoe1xuXHRcdGxvYWRpbmc6IGxvYWRpbmdcblx0fSk7XG5cdGlmIChsb2FkaW5nID09PSAwKVxuXHRcdHV0aWxzLnNwaW5uZXIuaGlkZShjdXJyZW50LmxvYWRlcik7XG59XG5cbmZ1bmN0aW9uIGZvY3VzSW5wdXQoKSB7XG5cdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKTtcblx0Y3VycmVudC5pbnB1dC5mb2N1cygpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0ZW5hYmxlSW5wdXQ6IGVuYWJsZUlucHV0LFxuXHRkaXNhYmxlSW5wdXQ6IGRpc2FibGVJbnB1dCxcblx0ZW5hYmxlTG9hZGluZ0lucHV0OiBlbmFibGVMb2FkaW5nSW5wdXQsXG5cdGRpc2FibGVMb2FkaW5nSW5wdXQ6IGRpc2FibGVMb2FkaW5nSW5wdXQsXG5cdGZvY3VzSW5wdXQ6IGZvY3VzSW5wdXRcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2V2ZW50cy9oYW5kbGVycy9pbnB1dC5qc1xuICoqIG1vZHVsZSBpZCA9IDg5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4uLy4uL3N0YXRlJyk7XG5cbmZ1bmN0aW9uIGVycm9yKGVycikge1xuXHR2YXIgZGlzcGxheSA9IChlcnIgJiYgZXJyLnN0YWNrKSA/IGVyci5zdGFjayA6IGVycjtcblx0Y29uc29sZS5lcnJvcihkaXNwbGF5KTtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXHR2YXIgdGV4dCA9ICdJIGFtIHNvcnJ5LCBJIGFtIGhhdmluZyBkaWZmaWN1bHRpZXMuJztcblx0aWYgKGN1cnJlbnQuaGFkRXJyb3IpXG5cdFx0dGV4dCArPSAnIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJztcblx0ZWxzZVxuXHRcdHRleHQgKz0gJyBUbyBzcGVhayB3aXRoIGEgaHVtYW4gYWdlbnQsIHR5cGUgXCJhZ2VudFwiLic7XG5cdGlmIChlcnIuc3RhdHVzKVxuXHRcdHRleHQgKz0gJyAoZXJyb3I6ICcgKyBlcnIuc3RhdHVzICsgJyknO1xuXHRzdGF0ZS5zZXRTdGF0ZSh7XG5cdFx0aGFkRXJyb3I6IHRydWVcblx0fSk7XG5cdGV2ZW50cy5wdWJsaXNoKCdyZWNlaXZlJywgdGV4dCk7XG59XG5cbmZ1bmN0aW9uIHRyeUl0KGRhdGEpIHtcblx0ZXZlbnRzLnB1Ymxpc2goJ2xheW91dDplcnJvcicsIGRhdGEpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0ZGVmYXVsdDogZXJyb3IsXG5cdHRyeUl0OiB0cnlJdFxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZXZlbnRzL2hhbmRsZXJzL2Vycm9yLmpzXG4gKiogbW9kdWxlIGlkID0gOTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuKiAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE2LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxuKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xuKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4qIHRoZSBMaWNlbnNlLlxuKi9cblxudmFyIHN0YXRlID0gcmVxdWlyZSgnLi4vLi4vc3RhdGUnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzJyk7XG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZXZlbnRzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnbG9kYXNoL2Fzc2lnbicpO1xudmFyIHRlbXBsYXRlcyA9IHJlcXVpcmUoJy4uLy4uL3RlbXBsYXRlcycpO1xuXG5mdW5jdGlvbiBzdGFydChjb25maWcpIHtcblx0dmFyIGN1cnJlbnQ7XG5cdHZhciBkYXRhID0ge307XG5cdGRhdGFbY29uZmlnLmNoYXRJRF0gPSBjb25maWc7XG5cdHN0YXRlLnNldFN0YXRlKGRhdGEpO1xuXHRjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKVtjb25maWcuY2hhdElEXTtcblx0dXRpbHMuYXR0YWNoUGxheWJhY2tTdHlsZXMoY29uZmlnLmNoYXRJRCk7XG5cdGN1cnJlbnQucm9vdC5jbGFzc05hbWUgKz0gXCIgY2hhdElELVwiICsgY3VycmVudC5jaGF0SUQ7XG5cdGN1cnJlbnQucm9vdC5pbm5lckhUTUwgPSB0ZW1wbGF0ZXMuc3RhcnQ7XG5cdGN1cnJlbnQuY29udGFpbmVyID0gY3VycmVudC5yb290LnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LWNoYXQtY29udGFpbmVyJyk7XG5cdGN1cnJlbnQuY2hhdEhvbGRlciA9IGN1cnJlbnQucm9vdC5xdWVyeVNlbGVjdG9yKCcuSUJNQ2hhdC1tZXNzYWdlcycpO1xuXHRjdXJyZW50LmlubmVyQ29udGFpbmVyID0gY3VycmVudC5yb290LnF1ZXJ5U2VsZWN0b3IoJy5JQk1DaGF0LWlubmVyLWNvbnRhaW5lcicpO1xuXHRkYXRhW2NvbmZpZy5jaGF0SURdID0gY3VycmVudDtcblx0c3RhdGUuc2V0U3RhdGUoZGF0YSk7XG5cdGN1cnJlbnQuY2hhdEhvbGRlci5zdHlsZS5wYWRkaW5nQm90dG9tID0gJzFlbSc7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHV0aWxzLmRlYm91bmNlKGZ1bmN0aW9uKCkge1xuXHRcdGV2ZW50cy5wdWJsaXNoKCdwbGF5YmFjay1yZXNpemUtJyArIGNvbmZpZy5jaGF0SUQsIGNvbmZpZy5jaGF0SUQpO1xuXHR9LCAxMDAwKSk7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ3BsYXliYWNrLXJlc2l6ZS0nICsgY29uZmlnLmNoYXRJRCwgY29uZmlnLmNoYXRJRCk7XG5cdH0pO1xuXG5cblx0ZXZlbnRzLnB1Ymxpc2goJ3BsYXliYWNrLXJlc2l6ZS0nICsgY29uZmlnLmNoYXRJRCwgY29uZmlnLmNoYXRJRCk7XG59XG5cbmZ1bmN0aW9uIHNlbmQob2JqKSB7XG5cdHZhciBjaGF0SUQgPSBvYmouY2hhdElEO1xuXHR2YXIgZGF0YSA9IG9iai5kYXRhO1xuXHRjb25zb2xlLmxvZygnb2JqJywgb2JqKTtcblx0aWYgKGRhdGEudGV4dCAmJiBkYXRhLnRleHQubGVuZ3RoID4gMCkge1xuXHRcdHZhciBjdXJyZW50ID0gc3RhdGUuZ2V0U3RhdGUoKVtjaGF0SURdO1xuXHRcdGNvbnNvbGUubG9nKCdjdXJyZW50JywgY3VycmVudCk7XG5cdFx0dmFyIG5ld0RhdGEgPSBhc3NpZ24oe30sIGRhdGEsIHsgdXVpZDogdXRpbHMuZ2V0VVVJRCgpIH0pO1xuXHRcdGN1cnJlbnQuY2hhdEhvbGRlci5pbm5lckhUTUwgKz0gdXRpbHMuY29tcGlsZSh0ZW1wbGF0ZXMuc2VuZCwgeyAnZGF0YS51dWlkJzogbmV3RGF0YS51dWlkIH0pO1xuXHRcdGN1cnJlbnQuY2hhdEhvbGRlci5xdWVyeVNlbGVjdG9yKCcjJyArIG5ld0RhdGEudXVpZCArICcgLklCTUNoYXQtdXNlci1tZXNzYWdlJykudGV4dENvbnRlbnQgPSBkYXRhLnRleHQ7XG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ3BsYXliYWNrLXNjcm9sbC10by1ib3R0b20tJyArIGNoYXRJRCwgY2hhdElEKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZWNlaXZlKG9iaikge1xuXHR2YXIgY2hhdElEID0gb2JqLmNoYXRJRDtcblx0dmFyIGRhdGEgPSBvYmouZGF0YTtcblx0dmFyIGNoZWNrRGF0YSA9ICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpID8geyBtZXNzYWdlOiB7IHRleHQ6IGRhdGEgfSB9IDogZGF0YTtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpW2NoYXRJRF07XG5cdGRhdGEgPSBhc3NpZ24oe30sIGNoZWNrRGF0YSwgeyB1dWlkOiB1dGlscy5nZXRVVUlEKCkgfSk7XG5cdHZhciBtc2cgPSAoZGF0YS5tZXNzYWdlICYmIGRhdGEubWVzc2FnZS50ZXh0KSA/ICgoQXJyYXkuaXNBcnJheShkYXRhLm1lc3NhZ2UudGV4dCkpID8gZGF0YS5tZXNzYWdlLnRleHQgOiBbZGF0YS5tZXNzYWdlLnRleHRdKSA6IFsnJ107XG5cdGlmIChtc2cubGVuZ3RoID09PSAwKVxuXHRcdG1zZyA9IFsnJ107XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW07XG5cdFx0Y3VycmVudC5jaGF0SG9sZGVyLmlubmVySFRNTCArPSB1dGlscy5jb21waWxlKHRlbXBsYXRlcy5yZWNlaXZlLCB7ICdkYXRhLnV1aWQnOiBkYXRhLnV1aWQgfSk7XG5cdFx0aXRlbSA9IGN1cnJlbnQuY2hhdEhvbGRlci5xdWVyeVNlbGVjdG9yKCcuJyArIGRhdGEudXVpZCArICc6bGFzdC1jaGlsZCAuSUJNQ2hhdC13YXRzb24tbWVzc2FnZScpO1xuXHRcdHV0aWxzLndyaXRlTWVzc2FnZShpdGVtLCBtc2dbaV0pO1xuXHR9XG5cdGV2ZW50cy5wdWJsaXNoKCdwbGF5YmFjay1zY3JvbGwtdG8tYm90dG9tLScgKyBjaGF0SUQsIGNoYXRJRCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyKGNoYXRJRCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKClbY2hhdElEXTtcblx0Y3VycmVudC5jaGF0SG9sZGVyLmlubmVySFRNTCA9ICcnO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95KGNoYXRJRCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKClbY2hhdElEXTtcblx0dmFyIG9iaiA9IHt9O1xuXHRvYmpbY2hhdElEXSA9IHVuZGVmaW5lZDtcblx0c3RhdGUuc2V0U3RhdGUob2JqKTtcblx0Y3VycmVudC5yb290LmlubmVySFRNTCA9IGN1cnJlbnQub3JpZ2luYWxDb250ZW50O1xufVxuXG5mdW5jdGlvbiBzY3JvbGxUb0JvdHRvbShjaGF0SUQpIHtcblx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpW2NoYXRJRF07XG5cdGN1cnJlbnQuY2hhdEhvbGRlci5zY3JvbGxUb3AgPSBjdXJyZW50LmNoYXRIb2xkZXIuc2Nyb2xsSGVpZ2h0O1xufVxuXG5mdW5jdGlvbiByZXNpemUoY2hhdElEKSB7XG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBzdGF0ZS5nZXRTdGF0ZSgpW2NoYXRJRF07XG5cdFx0aWYgKGN1cnJlbnQuYWN0aXZlKSB7XG5cdFx0XHRjdXJyZW50LmNoYXRIb2xkZXIuc3R5bGUubWF4SGVpZ2h0ID0gKGN1cnJlbnQucm9vdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLSBjdXJyZW50LmlucHV0SG9sZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCkgKyAncHgnO1xuXHRcdFx0Y3VycmVudC5jaGF0SG9sZGVyLnN0eWxlLm1heFdpZHRoID0gKChjdXJyZW50LnJvb3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggPiAyODgpID8gY3VycmVudC5yb290LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIDogMjg4KSArICdweCc7XG5cdFx0fVxuXHR9LCAzMDApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0c3RhcnQ6IHN0YXJ0LFxuXHRzZW5kOiBzZW5kLFxuXHRyZWNlaXZlOiByZWNlaXZlLFxuXHRjbGVhcjogY2xlYXIsXG5cdGRlc3Ryb3k6IGRlc3Ryb3ksXG5cdHJlc2l6ZTogcmVzaXplLFxuXHRzY3JvbGxUb0JvdHRvbTogc2Nyb2xsVG9Cb3R0b21cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2V2ZW50cy9oYW5kbGVycy9wbGF5YmFjay5qc1xuICoqIG1vZHVsZSBpZCA9IDkxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBzdGF0ZSA9IHJlcXVpcmUoJy4uLy4uL3N0YXRlJyk7XG5cbmZ1bmN0aW9uIHNjcm9sbFRvQm90dG9tKCkge1xuXHR2YXIgY3VycmVudCA9IHN0YXRlLmdldFN0YXRlKCk7XG5cdGN1cnJlbnQuY2hhdEhvbGRlci5zY3JvbGxUb3AgPSBjdXJyZW50LmNoYXRIb2xkZXIuc2Nyb2xsSGVpZ2h0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNjcm9sbFRvQm90dG9tO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9ldmVudHMvaGFuZGxlcnMvc2Nyb2xsLXRvLWJvdHRvbS5qc1xuICoqIG1vZHVsZSBpZCA9IDkyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiogKEMpIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxNi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcbiogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Ncbiogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuKiB0aGUgTGljZW5zZS5cbiovXG5cbnZhciBldmVudHMgPSByZXF1aXJlKCcuLi8uLi9ldmVudHMnKTtcblxuZnVuY3Rpb24gYWN0aW9uRXJyb3IoYWN0aW9uKSB7XG5cdGV2ZW50cy5wdWJsaXNoKCdyZWNlaXZlJywge1xuXHRcdG1lc3NhZ2U6IHtcblx0XHRcdGxheW91dDoge1xuXHRcdFx0XHRuYW1lOiAnZXJyb3InLFxuXHRcdFx0XHRtZXNzYWdlOiAnQSBzdWJzY3JpcHRpb24gd2FzIGNhbGxlZCB0byAnICsgYWN0aW9uICsgJy4gTm90aGluZyBpcyBzdWJzY3JpYmVkIHRvIHRoaXMgYWN0aW9uIGluIHRoZSBUcnktSXQgaW50ZXJmYWNlLiBUaGlzIGlzIHByb2JhYmx5IGR1ZSB0byB5b3UgdXNpbmcgYSBjdXN0b20gd29ya3NwYWNlLiBPbiB5b3VyIG93biBzaXRlLCB5b3Ugc2hvdWxkIGhhdmUgY29kZSB0byBoYW5kbGUgdGhpcyBhY3Rpb24uJ1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIGxheW91dEVycm9yKGxheW91dCkge1xuXHRldmVudHMucHVibGlzaCgncmVjZWl2ZScsIHtcblx0XHRtZXNzYWdlOiB7XG5cdFx0XHRsYXlvdXQ6IHtcblx0XHRcdFx0bmFtZTogJ2Vycm9yJyxcblx0XHRcdFx0bWVzc2FnZTogJ0Egc3Vic2NyaXB0aW9uIHdhcyBjYWxsZWQgdG8gJyArIGxheW91dCArICcuIE5vdGhpbmcgaXMgc3Vic2NyaWJlZCB0byB0aGlzIGxheW91dCBpbiB0aGUgVHJ5LUl0IGludGVyZmFjZS4gVGhpcyBpcyBwcm9iYWJseSBkdWUgdG8geW91IHVzaW5nIGEgY3VzdG9tIHdvcmtzcGFjZS4gT24geW91ciBvd24gc2l0ZSwgeW91IHNob3VsZCBoYXZlIGNvZGUgdG8gaGFuZGxlIHRoaXMgbGF5b3V0Lidcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0YWN0aW9uRXJyb3I6IGFjdGlvbkVycm9yLFxuXHRsYXlvdXRFcnJvcjogbGF5b3V0RXJyb3Jcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2V2ZW50cy9oYW5kbGVycy90cnktaXQuanNcbiAqKiBtb2R1bGUgaWQgPSA5M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi4vZXZlbnRzJyk7XG52YXIgZXZlbnRIYW5kbGVycyA9IHJlcXVpcmUoJy4uL2V2ZW50cy9oYW5kbGVycycpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdsb2Rhc2gvYXNzaWduJyk7XG52YXIgZGVmYXVsdFN0eWxlcyA9IHJlcXVpcmUoJy4uL3N0eWxlcycpO1xuXG52YXIgZXZlbnRzQXJyYXkgPSB7fTtcblxuZnVuY3Rpb24gaW5pdChjb25maWcpIHtcblx0cmV0dXJuIG5ldyBQbGF5QmFjayhjb25maWcpO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlckV2ZW50cyhjaGF0SUQpIHtcblx0ZXZlbnRzQXJyYXlbY2hhdElEXSA9IFtdO1xuXHRldmVudHNBcnJheVtjaGF0SURdLnB1c2goZXZlbnRzLnN1YnNjcmliZSgncGxheWJhY2stc3RhcnQtJyArIGNoYXRJRCwgZXZlbnRIYW5kbGVycy5wbGF5YmFjay5zdGFydCkpO1xuXHRldmVudHNBcnJheVtjaGF0SURdLnB1c2goZXZlbnRzLnN1YnNjcmliZSgncGxheWJhY2stcmVzaXplLScgKyBjaGF0SUQsIGV2ZW50SGFuZGxlcnMucGxheWJhY2sucmVzaXplKSk7XG5cdGV2ZW50c0FycmF5W2NoYXRJRF0ucHVzaChldmVudHMuc3Vic2NyaWJlKCdwbGF5YmFjay1zY3JvbGwtdG8tYm90dG9tLScgKyBjaGF0SUQsIGV2ZW50SGFuZGxlcnMucGxheWJhY2suc2Nyb2xsVG9Cb3R0b20pKTtcblx0ZXZlbnRzQXJyYXlbY2hhdElEXS5wdXNoKGV2ZW50cy5zdWJzY3JpYmUoJ3BsYXliYWNrLXJlY2VpdmUtJyArIGNoYXRJRCwgZXZlbnRIYW5kbGVycy5wbGF5YmFjay5yZWNlaXZlKSk7XG5cdGV2ZW50c0FycmF5W2NoYXRJRF0ucHVzaChldmVudHMuc3Vic2NyaWJlKCdwbGF5YmFjay1zZW5kLScgKyBjaGF0SUQsIGV2ZW50SGFuZGxlcnMucGxheWJhY2suc2VuZCkpO1xuXHRldmVudHNBcnJheVtjaGF0SURdLnB1c2goZXZlbnRzLnN1YnNjcmliZSgncGxheWJhY2stZGVzdHJveS0nICsgY2hhdElELCBldmVudEhhbmRsZXJzLnBsYXliYWNrLmRlc3Ryb3kpKTtcblx0ZXZlbnRzQXJyYXlbY2hhdElEXS5wdXNoKGV2ZW50cy5zdWJzY3JpYmUoJ3BsYXliYWNrLWNsZWFyLScgKyBjaGF0SUQsIGV2ZW50SGFuZGxlcnMucGxheWJhY2suY2xlYXIpKTtcbn1cblxuZnVuY3Rpb24gUGxheUJhY2soY29uZmlnKSB7XG5cdHZhciByb290ID0gKHR5cGVvZiBjb25maWcuZWwgPT09ICdzdHJpbmcnKSA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy5lbCkgOiBjb25maWcuZWw7XG5cdHRoaXMuY2hhdElEID0gdXRpbHMuZ2V0VVVJRCgpO1xuXHRyZWdpc3RlckV2ZW50cyh0aGlzLmNoYXRJRCk7XG5cdGV2ZW50cy5wdWJsaXNoKCdwbGF5YmFjay1zdGFydC0nICsgdGhpcy5jaGF0SUQsIHtcblx0XHRjaGF0SUQ6IHRoaXMuY2hhdElELFxuXHRcdHJvb3Q6ICh0eXBlb2YgY29uZmlnLmVsID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcuZWwpIDogY29uZmlnLmVsLFxuXHRcdG1hcHNTZXJ2ZXI6IHByb2Nlc3MuZW52Lk1BUFNfU0VSVkVSIHx8ICdodHRwczovL2RwMS1pLXNlcnZlLW1hcHMubXlibHVlbWl4Lm5ldC8nLFxuXHRcdHN0eWxlczogYXNzaWduKHt9LCBkZWZhdWx0U3R5bGVzLCBjb25maWcuc3R5bGVzKSxcblx0XHRvcmlnaW5hbENvbnRlbnQ6IHJvb3QuaW5uZXJIVE1MXG5cdH0pO1xuXHR0aGlzLmNsZWFyID0gZnVuY3Rpb24oKSB7XG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ3BsYXliYWNrLWNsZWFyLScgKyB0aGlzLmNoYXRJRCwgdGhpcy5jaGF0SUQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXHR0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHRldmVudHMucHVibGlzaCgncGxheWJhY2stY2xlYXItJyArIHRoaXMuY2hhdElELCB0aGlzLmNoYXRJRCk7XG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ3BsYXliYWNrLWRlc3Ryb3ktJyArIHRoaXMuY2hhdElELCB0aGlzLmNoYXRJRCk7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBldmVudHNBcnJheVt0aGlzLmNoYXRJRF0ubGVuZ3RoOyBpKyspXG5cdFx0XHRldmVudHNBcnJheVt0aGlzLmNoYXRJRF1baV0ucmVtb3ZlKCk7XG5cdFx0ZGVsZXRlIGV2ZW50c0FycmF5W3RoaXMuY2hhdElEXTtcblx0XHRkZWxldGUgdGhpcy5jbGVhcjtcblx0XHRkZWxldGUgdGhpcy5zZW5kO1xuXHRcdGRlbGV0ZSB0aGlzLnJlY2VpdmU7XG5cdFx0ZGVsZXRlIHRoaXMuZGVzdHJveTtcblx0XHRkZWxldGUgdGhpcy5jaGF0SUQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cdHRoaXMuc2VuZCA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHR2YXIgY2hhdElEID0gdGhpcy5jaGF0SUQ7XG5cdFx0ZXZlbnRzLnB1Ymxpc2goJ3BsYXliYWNrLXNlbmQtJyArIGNoYXRJRCwgeyBjaGF0SUQ6IGNoYXRJRCwgZGF0YTogZGF0YSB9KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblx0dGhpcy5yZWNlaXZlID0gZnVuY3Rpb24oZGF0YSkge1xuXHRcdHZhciBjaGF0SUQgPSB0aGlzLmNoYXRJRDtcblx0XHRldmVudHMucHVibGlzaCgncGxheWJhY2stcmVjZWl2ZS0nICsgY2hhdElELCB7IGNoYXRJRDogY2hhdElELCBkYXRhOiBkYXRhIH0pO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXHRyZXR1cm4gdGhpcztcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0aW5pdDogaW5pdFxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcGxheWJhY2svaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA5NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4qIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTYuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4qIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlXG4qIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzXG4qIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiogdGhlIExpY2Vuc2UuXG4qL1xuXG52YXIgZGVmYXVsdFN0eWxlcyA9IHtcblx0YmFja2dyb3VuZDogJ3JnYmEoNjEsIDYxLCA2MSwgMSknLFxuXHRhY2NlbnRCYWNrZ3JvdW5kOiAncmdiYSgxNzUsIDExMCwgMjMyLCAxKScsXG5cdGFjY2VudFRleHQ6ICcjZmZmZmZmJyxcblx0dGV4dDogJyNmZmZmZmYnLFxuXHRsaW5rOiAnI2ZmZmZmZicsXG5cdHNlY29uZGFyeUJhY2tncm91bmQ6ICdyZ2JhKDcwLCA3MCwgNzAsIDEpJyxcblx0c2Vjb25kYXJ5VGV4dDogJ3JnYmEoMjQ3LCAyNDcsIDI0NywgMSknLFxuXHRpbnB1dEJhY2tncm91bmQ6ICdyZ2JhKDcwLCA3MCwgNzAsIDEpJyxcblx0aW5wdXRUZXh0OiAncmdiYSgyNDcsIDI0NywgMjQ3LCAxKScsXG5cdGVycm9yQmFja2dyb3VuZDogJ3JnYmEoMjM5LCA2MiwgNTgsIDEpJyxcblx0ZXJyb3JUZXh0OiAnI2ZmZmZmZidcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdFN0eWxlcztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3R5bGVzLmpzXG4gKiogbW9kdWxlIGlkID0gOTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yYXctbG9hZGVyL2luZGV4LmpzIS4vc3R5bGVzLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jhdy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yYXctbG9hZGVyL2luZGV4LmpzIS4vc3R5bGVzLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL3Nob3ctbG9jYXRpb25zL3N0eWxlcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9
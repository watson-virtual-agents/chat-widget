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

var bootstrap = require('./bootstrap');

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
   * @param {string} config.userID - optional: A one-way hashed non-identifiable (e.g. not a users email address or public user id) unique ID used for tracking in the Engagement Metrics dashboard.
   * @param {string} config.userLatLon -  optional: A lat,lon string (e.g. 28.3852,-81.5639) used for tracking in the Engagement Metrics dashboard.
   * @param {string} config.baseURL=https://api.ibm.com/virtualagent/run/api/v1/ - optional: specifies a different bot hosting server. The most common use-case for this param is to point the widget to a server that will add X-IBM-Client-Id and X-IBM-Client-Secret headers to the request.
   * @param {string} config.XIBMClientID - optional: Your IBMClientID... this should not be made public in a public environment. Including this will add X-IBM-Client-Id as a header to your request.
   * @param {string} config.XIBMClientSecret - optional: Your IBMClientSecret... this should not be made public in a public environment. Including this will add X-IBM-Client-Secret as a header to your request.
   * @param {Function} config.errorHandler - optional: A function that takes an error object as a param if there is a problem with communicating with your Virtual Agent. By default, if an error is received, the user is escalated to a live agent. You may, however, want to handle some errors differently (401 for instance)
   * @param {Object} config.errorHandlerContext - optional: A "this" value for the errorHandler.
   * @param {Object} config.styles - optional: Override default styling.
   * @param {string} config.styles.background=rgba(61,61,61,1) - optional: rgba(X, X, X, X) or hex code for background color
   * @param {string} config.styles.text=#ffffff - optional: rgba(X, X, X, X) or hex code for main text color
   * @param {string} config.styles.link=#ffffff - optional: rgba(X, X, X, X) or hex code for color of links in text
   * @param {string} config.styles.secondaryBackground=rgba(90,90,90,1) - optional: rgba(X, X, X, X) or hex code for background color of chat bubbles and other secondary info
   * @param {string} config.styles.secondaryText=rgba(247,247,247,1) - optional: rgba(X, X, X, X) or hex code for color of chat bubble text and other secondary info
   * @param {string} config.styles.inputBackground=rgba(90,90,90,1) - optional: rgba(X, X, X, X) or hex code for background color of input elements in forms
   * @param {string} config.styles.inputText=rgba(247,247,247,1) - optional: rgba(X, X, X, X) or hex code for color of input text in forms
   * @param {string} config.styles.accentText=#ffffff - optional: rgba(X, X, X, X) or hex code for text colors to be used in conjunction with accentBackground e.g. button text
   * @param {string} config.styles.accentBackground=#BA8FF7 - optional: rgba(X, X, X, X) or hex code for accent colors used by the chat application e.g. buttons
   * @param {string} config.styles.errorText=#ffffff - optional: rgba(X, X, X, X) or hex code for text colors to be used in conjunction with errorBackground e.g. button text
   * @param {string} config.styles.errorBackground=#e86e6e - optional: rgba(X, X, X, X) or hex code for error colors used by the chat application e.g. validation buttons
   * @param {string} config.styles.fontFamily=HelveticaNeue,Helvetica,sans-serif - optional: comma seperated list of fonts to use
   * @param {string} config.styles.fontSize=15px - optional: base font size to use
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
   * Please use either IBMChat.clear() or IBMChat.destroy() and IBMChat.init() in conjunction instead of this method. This method destroys the chat widget and re-intitializes it. The same chat widget is rendered in the same html element as was specified in the init method. **Action subscriptions and custom layouts are NOT reincluded**.
   * @function restart
   * @deprecated
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
   * Clear the chat widget of its current conversation and start a new conversation with the Virtual Agent
   * @function clear
   * @memberof IBMChat
   * @example
   * IBMChat.clear().then(function(){
   *     console.log('cleared');
   * });
   * @returns {Promise} Returns: A promise so you can call functions after the widget has been cleared.
   */
  clear: bootstrap.clear,
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
   * Subscribe to an IBMChat event and auto unsubscribe when called.
   * @function subscribeOnce
   * @memberof IBMChat
   * @param {string} eventName - Takes a string representing the name of the event
   * @param {function} callback - function to run when event is called
   * @param context - optional: value of "this" in the function
   * @returns {Object} - Returns object with a .remove function to destroy the subscription
   * @example
   * var mySubscription = IBMChat.subscribeOnce('the-end-of-the-world', function(message) {
   *   console.log(message);
   * });
   */
  subscribeOnce: bootstrap.subscribeOnce,
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
    * @example
    * IBMChat.profile.clear();
    */
    clear: bootstrap.profile.clear,
    /**
    * Delete an item from the user profile based on key.
    * @memberof IBMChat.profile
    * @function delete
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
   * @namespace state
   * @memberof IBMChat
   */
  state: {
    /**
    * @memberof IBMChat.state
    * @function get
    * @example
    * IBMChat.state.get();
    * @returns {Object} Returns: the current application state.
    */
    get: bootstrap.state.get,
    /**
    * @memberof IBMChat.state
    * @function set
    * @param {Object} newState - The key/value pairs put here will merge with current application state.
    * @returns {IBMChat} - Returns IBMChat for chaining.
    * @example
    * IBMChat.state.set({
    *      "first_name": "Bob"
    * });
    */
    set: function(obj) {
      bootstrap.state.set(obj);
      return IBMChat;
    }
  },
  /**
   * @namespace context
   * @memberof IBMChat
   */
  context: {
    /**
    * For [use with Custom Workspaces](https://www.ibm.com/watson/developercloud/doc/conversation/dialog-build.html#context-variables)
    * @memberof IBMChat.context
    * @function get
    * @example
    * IBMChat.context.get();
    * @returns {Object} Returns: the current content.
    */
    get: bootstrap.context.get,
    /**
    * @memberof IBMChat.context
    * @function set
    * @param {Object} newContext - The key/value pairs put here will merge with current context variables.
    * @returns {IBMChat} - Returns IBMChat for chaining.
    * @example
    * IBMChat.context.set({
    *      "first_name": "Bob"
    * });
    */
    set: function(obj) {
      bootstrap.context.set(obj);
      return IBMChat;
    }
  },

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
  },

  /**
   * String of current version of the chat widget.
   * @memberof IBMChat
   * @example
   * IBMChat.version
   */
  version: process.env.CHAT_VERSION

};


module.exports = IBMChat;

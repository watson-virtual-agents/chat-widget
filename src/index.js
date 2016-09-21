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

require('./styles.css');

var bootstrap = require('./bootstrap');

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
	 * @param {Function} config.errorHandler - optional: A function that takes an error object as a param if there is a problem with communicating with your Virtual Agent. By default, if an error is received, the user is escalated to a live agent. You may, however, want to handle some errors differently (401 for instance)
	 * @param {Object} config.errorHandlerContext - optional: A "this" value for the errorHanlder.
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

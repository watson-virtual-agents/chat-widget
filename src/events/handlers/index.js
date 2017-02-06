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

var start = require('./start');
var resize = require('./resize');
var receive = require('./receive');
var send = require('./send');
var sendMock = require('./send-mock');
var sendInputMessage = require('./send-input-message');
var input = require('./input');
var error = require('./error');
var scrollToBottom = require('./scroll-to-bottom');
var tryIt = require('./try-it');
var clear = require('./clear');
var reset = require('./reset');
var chatID = require('./chatid');

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
  * @ignore
  */
  clear: clear,
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
  * Enable Loading event. Shows loading state.
  *
  * @event enable-loading
  * @example
  * IBMChat.publish('enable-loading', 'string to display');
  * IBMChat.subscribe('enable-loading', function(){
  *
  * });
  */
  /**
  * Disable loading event. Hides loading state.
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
  tryIt: tryIt,
  /**
  * @ignore
  */
  chatID: chatID,
  /**
  * @ignore
  */
  reset: reset
};

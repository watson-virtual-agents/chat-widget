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

var start = require('./start');
var resize = require('./resize');
var receive = require('./receive');
var send = require('./send');
var sendMock = require('./send-mock');
var sendInputMessage = require('./send-input-message');
var input = require('./input');
var error = require('./error');
var playback = require('./playback');
var scrollToBottom = require('./scroll-to-bottom');

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

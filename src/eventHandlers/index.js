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

var start = require('./events/start');
var resize = require('./events/resize');
var receive = require('./events/receive');
var send = require('./events/send');
var sendMock = require('./events/send-mock');
var sendInputMessage = require('./events/send-input-message');
var input = require('./events/input');
var error = require('./events/error');
var scrollToBottom = require('./events/scroll-to-bottom');

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

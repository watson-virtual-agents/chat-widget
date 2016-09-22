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

var state = require('../../state');
var events = require('../../events');
var BotSDK = require('@watson-virtual-agent/client-sdk/lib/web');
var utils = require('../../utils');
var assign = require('lodash/assign');
var templates = {
	send: require('../templates/send.html')
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

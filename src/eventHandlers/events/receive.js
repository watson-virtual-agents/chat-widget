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
var utils = require('../../utils');
var assign = require('lodash/assign');
var templates = {
	receive: require('../templates/receive.html')
};

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
		writeMessage(item, msg[i]);
		if (i === (msg.length - 1))
			_layoutAndActions(current.DEBUG, data);
	}

	/*
	make an option for auto adding aria stuff
	*/
}

module.exports = receive;

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
var utils = require('../../utils');
var events = require('../../events');
var templates = {
	start: require('../templates/start.html')
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

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

var events = require('../events');
var utils = require('../utils');
var assign = require('lodash/assign');
var defaultStyles = require('../styles');

function init(config) {
	return new PlayBack(config);
}

function PlayBack(config) {
	var root = (typeof config.el === 'string') ? document.getElementById(config.el) : config.el;
	this.registerEvents();
	this.chatID = utils.getUUID();
	events.publish('playback-start-' + this.chatID, {
		active: true,
		chatID: this.chatID,
		root: (typeof config.el === 'string') ? document.getElementById(config.el) : config.el,
		mapsServer: process.env.MAPS_SERVER || 'https://dp1-i-serve-maps.mybluemix.net/',
		styles: assign({}, defaultStyles, config.styles),
		originalContent: root.innerHTML
	});
	return this.return;
}

PlayBack.prototype.events = [];

PlayBack.prototype.return = {
	clear: this.clear,
	remove: this.remove,
	send: this.send,
	receive: this.receive
};

PlayBack.prototype.registerEvents = function() {
	this.events.push(events.subscribe('playback-start-' + this.chatID, events.handlers.playback.start));
	this.events.push(events.subscribe('playback-resize-' + this.chatID, events.handlers.playback.eventHandlers.resize));
	this.events.push(events.subscribe('playback-scroll-to-bottom-' + this.chatID, events.handlers.playback.eventHandlers.scrollToBottom));
	this.events.push(events.subscribe('playback-receive-' + this.chatID, events.handlers.playback.receive));
	this.events.push(events.subscribe('playback-send-' + this.chatID, events.handlers.playback.send));
	this.events.push(events.subscribe('playback-remove-' + this.chatID, events.handlers.playback.remove));
	this.events.push(events.subscribe('playback-clear-' + this.chatID, events.handlers.playback.clear));
};

PlayBack.prototype.clear = function() {
	events.publish('playback-clear-' + this.chatID);
	return this.return;
};

PlayBack.prototype.remove = function() {
	events.publish('playback-clear-' + this.chatID);
	events.publish('playback-remove-' + this.chatID);
	for (var i = 0; i < this.events.length; i++)
		this.events[i].remove();
	this.events = [];
};

PlayBack.prototype.send = function(message) {
	events.publish('playback-send-' + this.chatID, message);
	return this.return;
};

PlayBack.prototype.receive = function(message) {
	events.publish('playback-receive-' + this.chatID, message);
	return this.return;
};


module.exports = {
	init: init
};

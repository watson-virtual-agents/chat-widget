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
var eventHandlers = require('../events/handlers');
var utils = require('../utils');
var assign = require('lodash/assign');
var defaultStyles = require('../styles');

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
		mapsServer: process.env.MAPS_SERVER || 'https://dp1-i-serve-maps.mybluemix.net/',
		styles: assign({}, defaultStyles, config.styles),
		originalContent: root.innerHTML
	});
	return this;
}

PlayBack.prototype.clear = function() {
	events.publish('playback-clear-' + this.chatID);
	return this;
};

PlayBack.prototype.remove = function() {
	events.publish('playback-clear-' + this.chatID);
	events.publish('playback-destroy-' + this.chatID);
	for (var i = 0; i < eventsArray[this.chatID].length; i++)
		eventsArray[this.chatID][i].remove();
	delete eventsArray[this.chatID];
};

PlayBack.prototype.send = function(data) {
	var chatID = this.chatID;
	events.publish('playback-send-' + chatID, { chatID: chatID, data: data });
	return this;
};

PlayBack.prototype.receive = function(data) {
	var chatID = this.chatID;
	events.publish('playback-receive-' + chatID, { chatID: chatID, data: data });
	return this;
};


module.exports = {
	init: init
};

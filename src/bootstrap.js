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

var eventHandlers = require('./eventHandlers/index.js');
var layouts = require('./layouts');
var events = require('./events');
var BotSDK = require('@watson-virtual-agent/client-sdk/lib/web');
var state = require('./state');
var profile = require('./profile');
var Promise = require('es6-promise').Promise;
var assign = require('lodash/assign');
var defaultStyles = require('./styles');

var layoutInit = {};
var registeredLayouts = [];

function registerEvents(playback) {
	events.subscribe('start', eventHandlers.start);
	events.subscribe('resize', eventHandlers.resize);
	events.subscribe('disable-input', eventHandlers.input.disableInput);
	events.subscribe('enable-loading', eventHandlers.input.enableLoadingInput);
	events.subscribe('disable-loading', eventHandlers.input.disableLoadingInput);
	events.subscribe('scroll-to-bottom', eventHandlers.scrollToBottom);
	events.subscribe('receive', eventHandlers.receive);
	if (playback === true) {
		events.subscribe('send', eventHandlers.sendMock);
	} else {
		events.subscribe('send', eventHandlers.send);
		events.subscribe('send-input-message', eventHandlers.sendInputMessage);
		events.subscribe('enable-input', eventHandlers.input.enableInput);
		events.subscribe('focus-input', eventHandlers.input.focusInput);
		events.subscribe('sendMock', eventHandlers.sendMock);
	}
}

function registerLayouts() {
	registerLayout('show-locations', layouts.showLocations.init, true);
	registerLayout('choose-location-type', layouts.chooseLocationType.init, true);
	registerLayout('request-geolocation-latlong', layouts.requestGeolocationLatlong.init, true);
	registerLayout('choose', layouts.choose.init, true);
	registerLayout('form', layouts.form.init, true);
	registerLayout('cc-validator', layouts.creditCard.init, true);
	for (var i = 0; i < registeredLayouts.length; i++)
		layoutInit[registeredLayouts[i]]();
}

function init(config) {
	var root = (typeof config.el === 'string') ? document.getElementById(config.el) : config.el;
	var SDKconfig = {};
	SDKconfig.baseURL = config.baseURL || 'https://api.ibm.com/virtualagent/run/api/v1/';
	if (config.withCredentials)
		SDKconfig.withCredentials = config.withCredentials;
	if (config.XIBMClientID)
		SDKconfig.XIBMClientID = config.XIBMClientID;
	if (config.XIBMClientSecret)
		SDKconfig.XIBMClientSecret = config.XIBMClientSecret;
	if (config.userID)
		SDKconfig.userID = config.userID;
		/*
	// TODO: , allow entering in old chatID
	const sessionChatID = window.sessionStorage.getItem('IBMChatChatID') || null;
	if (chatID || sessionChatID)
		config.chatID = (chatID) ? chatID : sessionChatID;
	*/
	return new Promise(function(resolve, reject) {
		var current = state.getState();
		if (current.active === true) {
			resolve();
			return;
		}
		if (root) {
			if (config.errorHandler)
				events.subscribe('error', config.errorHandler, config.errorHandlerContext);
			else
				events.subscribe('error', eventHandlers.error);

			if (config.playback === true) {
				registerEvents(true);
				registerLayouts();
				events.publish('start', {
					active: true,
					root: root,
					mapsServer: process.env.MAPS_SERVER || 'https://dp1-i-serve-maps.mybluemix.net/',
					styles: assign({}, defaultStyles, config.styles),
					originalContent: root.innerHTML,
					chatId: '42',
					playback: true
				});
				resolve();
			} else if (config.botID) {
				BotSDK
					.configure( SDKconfig )
					.start( config.botID )
					.then( function(res) {
						var chatID = res.chatID;
						window.sessionStorage.setItem('IBMChatChatID', chatID);
						registerLayouts();
						registerEvents();
						events.publish('start', {
							active: true,
							root: root,
							mapsServer: process.env.MAPS_SERVER || 'https://dp1-i-serve-maps.mybluemix.net/',
							botID: config.botID,
							chatID: chatID,
							styles: assign({}, defaultStyles, config.styles),
							baseURL: config.baseURL,
							originalContent: root.innerHTML
						});
						events.publish('receive', res);
						resolve();
					})['catch']( function(err) {
						reject(err);
					});
			} else {
				reject({
					error: 'BotID is required!'
				});
			}
		} else {
			reject({
				error: 'Element for chat does not exist!'
			});
		}
	});
}

function registerLayout(layout, init, defaultSetup) {
	if (registeredLayouts.indexOf(layout) === -1 || !defaultSetup) {
		registeredLayouts.push(layout);
		layoutInit[layout] = init;
	}
}

function send(message) {
	var current = state.getState();
	if (current.active) {
		events.publish('send', {
			text: message
		});
	}
}

function receive(message) {
	var current = state.getState();
	if (current.active)
		events.publish('receive', message);
}

function sendMock(message) {
	var current = state.getState();
	if (current.active) {
		events.publish('send-mock', {
			text: message
		});
	}
}

function sendSilently(message) {
	var current = state.getState();
	if (current.active) {
		events.publish('send', {
			text: message,
			silent: true
		});
	}
}

function focusInput() {
	var current = state.getState();
	if (current.active)
		events.publish('focus-input');
}

function disableInput() {
	var current = state.getState();
	if (current.active)
		events.publish('disable-input');
}

function enableInput() {
	var current = state.getState();
	if (current.active)
		events.publish('enable-input');
}

function debug() {
	state.setState({
		DEBUG: true
	});
}

function destroy() {
	return new Promise(function(resolve, reject) {
		var current = state.getState();
		if (current.root) {
			events.publish('destroy');
			events.destroy(); //remove all events
			current.root.innerHTML = current.originalContent; //restore original content to div
			state.destroyState();
			resolve();
		} else {
			reject('IBMChat has no instance to destroy.');
		}
	});
}

function restart() {
	return new Promise(function(resolve, reject) {
		var current = state.getState();
		destroy().then(function() {
			init({ el: current.root, botID: current.botID, baseURL: current.baseURL }).then(function() {
				resolve();
			})['catch'](function(e) {
				reject(e);
			});
		})['catch'](function(e) {
			reject(e);
		});
	});
}

module.exports = {
	profile: profile,
	init: init,
	registerLayout: registerLayout,
	send: send,
	receive: receive,
	sendMock: sendMock,
	sendSilently: sendSilently,
	focusInput: focusInput,
	disableInput: disableInput,
	enableInput: enableInput,
	subscribe: events.subscribe,
	publish: events.publish,
	debug: debug,
	destroy: destroy,
	restart: restart,
	currentSubscriptions: events.currentSubscriptions,
	hasSubscription: events.hasSubscription,
	completeEvent: events.completeEvent
};

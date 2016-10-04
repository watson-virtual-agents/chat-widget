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

var state = require('./state');

var events = [];

function completeEvent(response) {
	switch (response) {
	case true:
		publish('send', {
			message: 'success',
			silent: true
		});
		break;
	case false:
		publish('send', {
			message: 'failure',
			silent: true
		});
		break;
	default:
		publish('send', {
			message: 'cancel',
			silent: true
		});
	}
}

function destroy() {
	events = [];
}

function unsubscribe(event, handler, context) {
	if (typeof context === undefined)
		context = handler;
}

function currentSubscriptions() {
	return events.slice(0);
}

function hasSubscription(action) {
	var subscriptions = currentSubscriptions();
	for (var i = 0; i < subscriptions.length; i++) {
		var subscription = subscriptions[i];
		if (subscription && subscription.event === action)
			return true;
	}
	return false;
}

function subscribe(event, handler, context) {
	if (typeof context === undefined)
		context = handler;
	var index = events.push({ event: event, handler: handler.bind(context) }) - 1;
	return {
		remove: function() {
			delete events[index];
		}
	};
}

function publish(event, data, cb) {
	var current = state.getState();
	var wasSubscription = false;
	for (var i = 0; i < events.length; i++) {
		if (events[i] && events[i].event && events[i].event === event) {
			if (current.DEBUG) {
				wasSubscription = true;
				console.log('Subscription to ' + event + ' was called: ', data);
			}
			events[i].handler.call(undefined, data, cb);
		}
	}
	if (current.DEBUG && event.indexOf('layout') == -1 && !wasSubscription)
		// console.warn('Nothing is subscribed to ' + event);
}

module.exports = {
	destroy: destroy,
	unsubscribe: unsubscribe,
	currentSubscriptions: currentSubscriptions,
	hasSubscription: hasSubscription,
	subscribe: subscribe,
	publish: publish,
	completeEvent: completeEvent
};

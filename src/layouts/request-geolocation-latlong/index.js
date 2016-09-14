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

var events = require('../../events');
var subscribe = events.subscribe;
var publish = events.publish;

var requestGeolocationLatlongs = [];

var requestGeolocationLatlongLayout = {
	init: function() {
		subscribe('layout:request-geolocation-latlong', function(data) {
			var requestGeolocationLatlong = new RequestGeolocationLatlong(data);
			requestGeolocationLatlongs[data.uuid] = requestGeolocationLatlong;
		});
	}
};

function RequestGeolocationLatlong(data) {
	this.init(data);
}

RequestGeolocationLatlong.prototype = {
	init: function(data) {
		this.data = data.data;
		this.uuid = data.uuid;
		this.parentElement = data.element;
		this.layoutElement = data.layoutElement;
		publish('disable-input');
		navigator.geolocation.getCurrentPosition(
				function(position) {
					publish('enable-input');
					publish('send', {
						text: position.coords.latitude + ',' + position.coords.longitude,
						silent: true
					});
				},
				function() {
					publish('enable-input');
					publish('send', {
						text: '0,0',
						silent: true
					});
				}
			);
	}
};

module.exports = requestGeolocationLatlongLayout;

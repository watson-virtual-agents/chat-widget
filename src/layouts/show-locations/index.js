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

require('./styles.css');

var events = require('../../events');
var subscribe = events.subscribe;
var publish = events.publish;
var state = require('../../state');
var getState = state.getState;
var setState = state.setState;
var utils = require('../../utils');

var first = true;
var displayLength = 3;
var breakpointWidths = ['720', '680', '640', '580', '512', '480', '420', '360', '320', '288', '256'];
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var showLocations = {};
var locationIDs = [];
var chatWidth = 748;
var currentBreakpointKey = 0;
var pixelRatio = window.devicePixelRatio || 1;
var ns = 'IBMChat-map';

var templates = {
	base: require('./templates/base.html'),
	createDomArray: require('./templates/create-dom-array.html'),
	addLocationsItem: require('./templates/add-locations-item.html'),
	addLocationItem: require('./templates/add-location-item.html'),
	hoursClosed: require('./templates/hours-closed.html'),
	hoursOpen: require('./templates/hours-open.html'),
	hoursTodayOpen: require('./templates/hours-today-open.html'),
	hoursTodayClosed: require('./templates/hours-today-closed.html'),
	hoursTimezone: require('./templates/hours-timezone.html')
};

var strings = {
	locations: {
		none: 'We could not find any locations close to you.',
		single: 'Here are the details for the ${location} location...',
		list: 'Here are the locations I found close to you:'
	}
};

var showLocationsLayout = {
	init: function() {
		subscribe('layout:show-locations', function(data) {
			var showLocation = new ShowLocations(data);
			locationIDs.push(data.uuid);
			showLocations[data.uuid] = showLocation;
		});
		window.addEventListener('resize', utils.debounce(function() {
			setTimeout(function() {
				sizeMap();
			}, 500);
		}, 500));
	}
};

var alphaMap = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

function initialSize(width) {
	for (var i = 0; i < breakpointWidths.length; i++) {
		if ((i === breakpointWidths.length - 1) || (breakpointWidths[i] >= width && breakpointWidths[i + 1] < width)) {
			currentBreakpointKey = i;
			chatWidth = width;
			return;
		}
	}
}

function sameSize() {
	var width = showLocations[locationIDs[0]].getWidth();
	var isSameSize = (breakpointWidths[currentBreakpointKey] >= width && breakpointWidths[currentBreakpointKey + 1] < width);
	return isSameSize;
}

function sizeMap() {
	if (locationIDs.length > 0 && showLocations[locationIDs[0]].getWidth() && !sameSize()) {
		var width = showLocations[locationIDs[0]].getWidth();
		for (var i = 0; i < breakpointWidths.length; i++) {
			if ((i === breakpointWidths.length - 1) || (breakpointWidths[i] >= width && breakpointWidths[i + 1] < width)) {
				currentBreakpointKey = i;
				chatWidth = width;
				for (var j = 0; j < locationIDs.length; j++) {
					if (showLocations[locationIDs[j]].data.length > 0)
						showLocations[locationIDs[j]].reDrawMap();
				}
				return;
			}
		}
	}
}

function createPhoneArray(el, items) {
	if (items) {
		for (var i = 0; i < items.length; i++) {
			var itemChild = document.createElement('div');
			var text = templates.createDomArray;
			itemChild.className = ns + '-contact-row';
			itemChild.innerHTML = utils.compile(text, {
				ns: ns
			});
			var typeEl = itemChild.querySelector('.' + ns + '-contact-type');
			var dataEl = itemChild.querySelector('.' + ns + '-contact-data');
			typeEl.textContent = items[i].type;
			dataEl.textContent = items[i].number;
			el.appendChild(itemChild);
		}
	}
}

function formatAMPM(time) {
	try {
		var split = time.split(':');
		var hours = split[0];
		var minutes = split[1];
		var ampm = hours >= 12 ? 'pm' : 'am';
		hours = hours % 12;
		hours = hours ? hours : 12;
		return hours + ':' + minutes + ' ' + ampm;
	}
	catch (e) {
		return '-';
	}
}

function parseAddress(address) {
	var arr = address.split(',');
	var first = arr.shift();
	var text = '';
	for (var i = 0; i < arr.length; i++) {
		text += arr[i];
		if (i < (arr.length - 1))
			text += ',';
	}
	return {
		address1: first,
		address2: text
	};
}

function createHours(hoursEl, moreHoursEl, hours, timezone, timezoneEl) {
	if (hours) {
		// hours
		var today = new Date().getDay();
		var todaysHours = hours[today];
		var el = document.createElement('div');
		if (todaysHours && todaysHours.isOpen) {
			el.innerHTML = utils.compile(templates.hoursTodayOpen, {
				ns: ns,
				open: formatAMPM(todaysHours.open),
				close: formatAMPM(todaysHours.close)
			});
		} else {
			el.innerHTML = utils.compile(templates.hoursTodayClosed, {
				ns: ns
			});
		}
		hoursEl.appendChild(el);
		// timezone
		if (timezone) {
			var tzChildEl = document.createElement('div');
			tzChildEl.innerHTML = utils.compile(templates.hoursTimezone, {
				ns: ns,
				timezone: timezone
			});
			timezoneEl.appendChild(tzChildEl);
		} else {
			timezoneEl.parentNode.removeChild(timezoneEl);
		}
		// more hours
		for (var i = 0; i < hours.length; i++) {
			var childEl = document.createElement('div');
			childEl.setAttribute('class', ns + '-days-hours');
			if (hours[i] && hours[i].isOpen) {
				childEl.innerHTML = utils.compile(templates.hoursOpen, {
					ns: ns,
					day: days[i],
					open: formatAMPM(hours[i].open),
					close: formatAMPM(hours[i].close)
				});
			} else {
				childEl.innerHTML = utils.compile(templates.hoursClosed, {
					ns: ns,
					day: days[i]
				});
			}
			moreHoursEl.appendChild(childEl);
		}
	}
}

function distance(item) {
	if (!item.distance)
		return;
	var distanceLength = (item.distance.toFixed(1) === 0.0) ? 0.1 : item.distance.toFixed(1);
	var distanceLengthMeasure = (item.distanceMeasure === 'miles') ? 'm' : 'km';
	return distanceLength + distanceLengthMeasure;
}

function ShowLocations(data) {
	this.init(data);
}

ShowLocations.prototype = {
	init: function(data) {
		this.data = (data.message.data !== undefined && data.message.data.location_data !== undefined) ? data.message.data.location_data : [];
		if (this.data.length > 1) {
			setState({
				location_data: this.data
			});
		}
		this.eventListeners = [];
		this.parentElement = data.element;
		this.layoutElement = data.layoutElement;
		this.msgElement = data.msgElement;
		switch (this.data.length) {
		case 0:
			this.msgElement.textContent = strings.locations.none;
			break;
		case 1:
			this.msgElement.textContent = utils.compile(strings.locations.single, { location: this.data[0].address.address });
			break;
		default:
			this.msgElement.textContent = strings.locations.list;
		}

		if (this.data.length > 0) {
			var text = templates.base;
			this.uuid = data.uuid;
			if (first) {
				initialSize(this.getWidth());
				first = false;
			}
			this.map = document.createElement('div');
			this.map.innerHTML = utils.compile(text, { ns: ns });
			this.mapElement = this.map.querySelector('.' + ns + '-img');
			this.dataElement = this.map.querySelector('.' + ns + '-data');
			this.mapElement.appendChild(this.drawLocations());
			this.dataElement.appendChild(this.addDetails());
			this.layoutElement.appendChild(this.map);
		}
	},
	getWidth: function() {
		var width = this.parentElement.querySelector('.IBMChat-watson-layout:last-child').clientWidth;
		return width;
	},
	reDrawMap: function() {
		this.mapElement.innerHTML = '';
		this.mapElement.appendChild(this.drawLocations());
	},
	addDetails: function() {
		if (this.data.length > 1)
			return this.addLocations();
		else
			return this.addLocation();
	},
	drawLocations: function() {
		var current = getState();
		var img = document.createElement('img');
		var width = this.getWidth();
		var config = {
			size: width + 'x180',
			scale: pixelRatio
		};
		this.uri = current.mapsServer + '?';
		this.uri += utils.serialize(config);
		this.uri += '&locations=';
		var locations = '';
		for (var i = 0; (i < displayLength && i < this.data.length); i++) {
			var item = this.data[i];
			locations += (i === 0 ) ? item.address.lat + ',' + item.address.lng : '+' + item.address.lat + ',' + item.address.lng;
		}
		this.uri += encodeURIComponent(locations);
		this.uri += '&color=' + encodeURIComponent(current.styles.accentBackground.replace('#', ''));
		img.setAttribute('width', '100%');
		img.setAttribute('src', this.uri);
		return img;
	},
	handleClick: function() {
		this.className = ns + '-location-active';
		showLocations[this.dataset.uuid].removeAllEventListeners();
		publish('receive', {
			message: {
				text: [utils.compile(strings.locations.single, { location: showLocations[this.dataset.uuid].data[this.dataset.id - 1].address.address })],
				layout: {
					name: 'show-locations'
				},
				data: {
					/* jshint ignore:start */
					location_data: [showLocations[this.dataset.uuid].data[this.dataset.id - 1]]
					/* jshint ignore:end */
				}
			}
		});
	},
	removeAllEventListeners: function() {
		if (this.eventListeners.length > 0) {
			this.dataElement.classList.remove(ns + '-clickable');
			for (var i = 0; i < this.eventListeners.length; i++)
				this.eventListeners[i].removeEventListener('click', this.handleClick);
			this.eventListeners = [];
		}
	},
	addLocation: function() {
		var container = document.createElement('div');
		var el = document.createElement('div');
		var locationData = getState().location_data;
		var item = this.data[0];
		var createDom = function(el) {
			var text = templates.addLocationItem;
			el.innerHTML = utils.compile(text, { ns: ns });
			return {
				link: el.querySelector('.' + ns + '-locations-item-data-address-link'),
				label: el.querySelector('.' + ns + '-locations-item-data-title'),
				address: el.querySelector('.' + ns + '-locations-item-data-address'),
				address1: document.createElement('span'),
				address2: document.createElement('span'),
				phone: el.querySelector('.' + ns + '-locations-item-data-phone'),
				email: el.querySelector('.' + ns + '-locations-item-data-email'),
				hours: el.querySelector('.' + ns + '-locations-item-data-hours'),
				timezone: el.querySelector('.' + ns + '-locations-item-data-timezone'),
				parentEl: el.querySelector('.' + ns + '-locations-item-data'),
				hoursButton: el.querySelector('.' + ns + '-locations-item-data-hours-button'),
				moreHours: el.querySelector('.' + ns + '-locations-item-data-more-hours'),
				distance: el.querySelector('.' + ns + '-locations-item-distance'),
				backHolder: el.querySelector('.' + ns + '-locations-item-data-section'),
				back: el.querySelector('.' + ns + '-locations-all')
			};
		};
		var dom = createDom(el);

		// name
		if (item.label)
			dom.label.textContent = item.label;
		else
			dom.parentEl.removeChild(dom.label);
		
		// addresses
		var addresses = parseAddress(item.address.address);
		dom.address1.textContent = addresses.address1;
		dom.address2.textContent = addresses.address2;
		dom.address.appendChild(dom.address1);
		dom.address.appendChild(document.createElement('br'));
		dom.address.appendChild(dom.address2);
		dom.link.setAttribute('href', 'https://maps.google.com/?q=' + encodeURIComponent(item.address.address));
		dom.link.setAttribute('target', '_blank');
		dom.distance.textContent = distance(item) || '';
		
		// email
		if (item.email) {
			const linkEl = document.createElement('a');
			linkEl.setAttribute('href', 'mailto:' + item.email);
			linkEl.setAttribute('target', '_blank');
			linkEl.textContent = item.email;
			dom.email.appendChild(linkEl);
		} else {
			dom.email.parentNode.removeChild(dom.email);
		}
		
		// phones
		if (item.phones && item.phones.length > 0)
			createPhoneArray(dom.phone, item.phones);
		else
			dom.phone.parentNode.removeChild(dom.phone);
		
		// hours/timezone
		if (item.days && item.days.length > 0) {
			createHours(dom.hours, dom.moreHours, item.days, item.address.timezone, dom.timezone);
			dom.hoursButton.addEventListener('click', function(e) {
				e.preventDefault();
				dom.parentEl.removeChild(dom.hoursButton);
				dom.moreHours.setAttribute('class', ns + '-locations-item-data-more-hours');
				publish('focus-input');
				publish('scroll-to-bottom');
			});
		} else {
			dom.hours.parentNode.removeChild(dom.hours);
			dom.hoursButton.parentNode.removeChild(dom.hoursButton);
		}

		if (locationData && locationData.length > 1) {
			dom.back.addEventListener('click', function(e) {
				e.preventDefault();
				publish('receive', {
					message: {
						text: [strings.locations.list],
						layout: {
							name: 'show-locations'
						},
						data: {
							/* jshint ignore:start */
							location_data: locationData
							/* jshint ignore:end */
						}
					}
				});
			});
		} else {
			dom.backHolder.parentNode.removeChild(dom.backHolder);
		}
		container.appendChild(el);
		return container;
	},
	addLocations: function() {
		var current = getState();
		var createDom = function(el, i, uuid) {
			el.addEventListener('click', this.handleClick);
			el.dataset.uuid = uuid;
			el.dataset.id = i + 1;
			var text = templates.addLocationsItem;
			el.innerHTML = utils.compile(text, { ns: ns });
			this.eventListeners.push(el);
			return {
				icon: el.querySelector('.' + ns + '-locations-item-icon'),
				label: el.querySelector('.' + ns + '-locations-item-data-title'),
				address: el.querySelector('.' + ns + '-locations-item-data-address'),
				address1: document.createElement('span'),
				address2: document.createElement('span'),
				distance: el.querySelector('.' + ns + '-locations-item-distance')
			};
		};

		var container = document.createElement('div');

		for (var i = 0; (i < displayLength && i < this.data.length); i++) {
			var el = document.createElement('div');
			var item = this.data[i];
			var dom = createDom.call(this, el, i, this.uuid);
			var box = document.createElement('div');
			box.setAttribute('style', 'font-weight:bold; color:' + current.styles.accentText + '; background: ' + current.styles.accentBackground + '; line-height: 24px; height:24px; width:24px; margin-left:8px;');
			box.textContent = alphaMap[i];
			dom.icon.appendChild(box);
			dom.label.textContent = item.label || '';
			var addresses = parseAddress(item.address.address);
			dom.address1.textContent = addresses.address1;
			dom.address2.textContent = addresses.address2;
			dom.address.appendChild(dom.address1);
			dom.address.appendChild(document.createElement('br'));
			dom.address.appendChild(dom.address2);
			dom.distance.textContent = distance(item) || '';
			container.appendChild(el);
		}
		return container;
	}
};

module.exports = showLocationsLayout;

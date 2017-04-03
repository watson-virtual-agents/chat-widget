/**
* (C) Copyright IBM Corp. 2017. All Rights Reserved.
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
var state = require('../../state');
var utils = require('../../utils');
var styles = require('../../styles');

var first = true;
var displayLength = 3;
var breakpointWidths = ['768', '640', '512', '480', '360'];
var days = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];
var showLocations = {};
var locationIDs = [];
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
  hoursUnknown: require('./templates/hours-unknown.html'),
  hoursTodayOpen: require('./templates/hours-today-open.html'),
  hoursTodayClosed: require('./templates/hours-today-closed.html'),
  hoursTodayUnknown: require('./templates/hours-today-unknown.html'),
  hoursTimezone: require('./templates/hours-timezone.html')
};

var strings = {
  locations: {
    none: 'We could not find any locations close to you.',
    single: 'Here are the details for this location:',
    list: 'Here are the locations I found close to you:'
  }
};

var showLocationsLayout = {
  init: function() {
    subscribe('layout:show-locations', function(data) {
      var showLocation = new ShowLocations(data);
      if (locationIDs.length === 0)
        subscribe('resize', sizeMap);
      locationIDs.push(data.uuid);
      showLocations[data.uuid] = showLocation;
    });
  }
};

var alphaMap = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

function initialSize(width) {
  for (var i = 0; i < breakpointWidths.length; i++) {
    if ((i === breakpointWidths.length - 1) || breakpointWidths[i] >= width) {
      currentBreakpointKey = i;
      return;
    }
  }
}

function getWidth() {
  var current = state.get();
  var el = current.chatHolder.querySelector('div:first-child');
  return (el) ? el.clientWidth : 0;
}

function sameSize() {
  return (breakpointWidths[currentBreakpointKey] >= getWidth());
}

function sizeMap() {
  if (locationIDs.length > 0 && !sameSize()) {
    var width = getWidth();
    for (var i = 0; i < breakpointWidths.length; i++) {
      if ((i === breakpointWidths.length - 1) || (i === 0 && width >= breakpointWidths[i])) {
        currentBreakpointKey = i;
        for (var j = 0; j < locationIDs.length; j++) {
          if (showLocations[locationIDs[j]].data.length > 0)
            showLocations[locationIDs[j]].reDrawMap();
        }
        return;
      }
    }
  }
}

function createEmails(el, item) {
  var linkEl = document.createElement('a');
  linkEl.setAttribute('href', 'mailto:' + item.email);
  linkEl.setAttribute('target', '_blank');
  linkEl.textContent = item.email;
  if (item.phones && item.phones.length > 0) {
    var itemChild = document.createElement('div');
    var text = templates.createDomArray;
    itemChild.className = ns + '-contact-row';
    itemChild.innerHTML = utils.compile(text, {
      ns: ns
    });
    var typeEl = itemChild.querySelector('.' + ns + '-contact-type');
    var dataEl = itemChild.querySelector('.' + ns + '-contact-data');
    typeEl.textContent = 'Email';
    dataEl.appendChild(linkEl);
    el.appendChild(itemChild);
  } else {
    el.appendChild(linkEl);
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
    return false;
  }
}

function createHours(hoursEl, moreHoursEl, hours, timezone, timezoneEl) {
  if (hours) {
    if (hours.length < 7) {
      for (var o = hours.length; o < 7; o++) {
        hours.push({
          isOpen: false
        });
      }
    }
    // hours
    var today = new Date().getDay();
    var todaysHours = hours[today];
    var el = document.createElement('div');
    if (todaysHours && todaysHours.isOpen) {
      var open = formatAMPM(todaysHours.open);
      var close = formatAMPM(todaysHours.close);
      if (open && close) {
        el.innerHTML = utils.compile(templates.hoursTodayOpen, {
          ns: ns,
          open: open,
          close: close
        });
      } else {
        el.innerHTML = utils.compile(templates.hoursTodayUnknown, {
          ns: ns
        });
      }
    } else {
      el.innerHTML = utils.compile(templates.hoursTodayClosed, {
        ns: ns
      });
    }
    utils.appendToEach(hoursEl, el);
    // timezone
    if (timezone) {
      var tzChildEl = document.createElement('div');
      tzChildEl.innerHTML = utils.compile(templates.hoursTimezone, {
        ns: ns,
        timezone: timezone
      });
      utils.appendToEach(timezoneEl, tzChildEl);
    } else {
      for (var j = 0; j < timezoneEl.length; j++)
        timezoneEl[j].parentNode.removeChild(timezoneEl[j]);
    }
    // more hours
    var compressedHours = [];
    var current = {};
    for (var n = 0; n < hours.length; n++) {
      var bothClosed, sameHours;
      var day = days[n];
      var last = (compressedHours.length > 0) ? compressedHours[compressedHours.length - 1] : false;
      current = hours[n] || { isOpen: false };
      bothClosed = last && (last.isOpen === current.isOpen && current.isOpen === false);
      sameHours = last && (last.open === current.open && last.close === current.close && last.isOpen === current.isOpen);
      if (compressedHours.length > 0 && last && (bothClosed || sameHours)) {
        last.endDay = day;
      } else {
        compressedHours.push({
          startDay: day,
          endDay: day,
          isOpen: current.isOpen,
          open: current.open,
          close: current.close
        });
      }
    }
    for (var i = 0; i < compressedHours.length; i++) {
      var childEl = document.createElement('span');
      childEl.setAttribute('class', ns + '-days-hours');
      current = compressedHours[i];
      if (current && current.isOpen) {
        var openDay = formatAMPM(current.open);
        var closeDay = formatAMPM(current.close);
        var currentDay = (current.startDay === current.endDay) ? current.startDay : current.startDay + '&ndash;' + current.endDay;
        if (openDay && closeDay) {
          childEl.innerHTML = utils.compile(templates.hoursOpen, {
            ns: ns,
            day: currentDay,
            open: openDay,
            close: closeDay
          });
        } else {
          childEl.innerHTML = utils.compile(templates.hoursUnknown, {
            ns: ns,
            day: currentDay
          });
        }
      } else {
        childEl.innerHTML = utils.compile(templates.hoursClosed, {
          ns: ns,
          day: (current.startDay === current.endDay) ? current.startDay : current.startDay + '&ndash;' + current.endDay
        });
      }
      if (i < (compressedHours.length - 1))
        childEl.querySelector('.' + ns + '-days-hours-hours').innerHTML += '<br />';
      utils.appendToEach(moreHoursEl, childEl);
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

ShowLocations.prototype.init = function(data) {
  this.data = (data.message.data !== undefined && data.message.data.location_data !== undefined) ? data.message.data.location_data : [];
  if (this.data.length > 1) {
    state.set({
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
    this.msgElement.textContent = strings.locations.single;
    break;
  default:
    this.msgElement.textContent = strings.locations.list;
  }

  if (this.data.length > 0) {
    var text = templates.base;
    this.uuid = data.uuid;
    if (first) {
      initialSize(getWidth());
      first = false;
    }
    this.map = document.createElement('div');
    this.map.innerHTML = utils.compile(text, { ns: ns });
    this.mapElement = this.map.querySelector('.' + ns + '-img');
    this.dataElement = this.map.querySelector('.' + ns + '-data');
    if (this.data.length > 1)
      this.mapElement.appendChild(this.drawLocations());
    this.dataElement.appendChild(this.addDetails());
    this.layoutElement.appendChild(this.map);
    if (this.data.length > 1)
      this.layoutElement.querySelectorAll('.' + ns + '-locations-item')[0].focus();
  }
  this.subscribeReceive = subscribe('receive', this.removeAllEventListeners, this);
};

ShowLocations.prototype.reDrawMap = function() {
  this.mapElement.innerHTML = '';
  if (this.data.length > 1)
    this.mapElement.appendChild(this.drawLocations());
};

ShowLocations.prototype.addDetails = function() {
  if (this.data.length > 1)
    return this.addLocations();
  else
    return this.addLocation();
};

ShowLocations.prototype.convertColor = function(color) {
  return styles.normalizeToHex(color).replace('#', '');
};

ShowLocations.prototype.drawLocations = function() {
  var current = state.get();
  var img = document.createElement('img');
  var width = getWidth();
  var config = {
    size: (width - 8) + 'x120',
    scale: pixelRatio
  };
  if (this.data.length === 1)
    config.zoom = 12;
  this.uri = current.mapsServer + '?';
  this.uri += utils.serialize(config);
  this.uri += '&locations=';
  var locations = '';
  for (var i = 0; (i < displayLength && i < this.data.length); i++) {
    var item = this.data[i];
    locations += (i === 0 ) ? item.address.lat + ',' + item.address.lng : '+' + item.address.lat + ',' + item.address.lng;
  }
  this.uri += encodeURIComponent(locations);
  this.uri += '&color=' + encodeURIComponent(this.convertColor(current.styles.accentBackground));
  img.setAttribute('src', this.uri);
  return img;
};

ShowLocations.prototype.handleClick = function() {
  this.className = ns + '-location-active';
  publish('receive', {
    message: {
      text: [utils.compile(strings.locations.single, { location: showLocations[this.dataset.uuid].data[this.dataset.id - 1].address.address }), 'Is there anything else I can help you with?'],
      layout: {
        name: 'show-locations',
        index: 0
      },
      data: {
        location_data: [showLocations[this.dataset.uuid].data[this.dataset.id - 1]]
      }
    }
  });
};

ShowLocations.prototype.removeAllEventListeners = function() {
  var layout = document.querySelector('.' + this.uuid + ' .IBMChat-watson-layout');
  if (layout) {
    layout.classList.add('IBMChat-disabled-layout');
    var inputs = layout.querySelectorAll('input, button');
    for (var i = 0; i < inputs.length; i++)
      inputs[i].setAttribute('disabled', true);
    for (var x = 0; x < this.eventListeners.length; x++)
      this.eventListeners[x].removeEventListener('click', this.handleClick);
    if (this.hoursFunction)
      this.hoursButton.removeEventListener('click', this.hoursFunction);
    if (this.locationsFunction)
      this.locationsButton.removeEventListener('click', this.locationsFunction);
    this.eventListeners = [];
    this.subscribeReceive.remove();
  }
};

ShowLocations.prototype.addLocation = function() {
  var container = document.createElement('div');
  var el = document.createElement('div');
  var locationData = state.get().location_data;
  var item = this.data[0];
  var createDom = function(el) {
    var text = templates.addLocationItem;
    el.innerHTML = utils.compile(text, { ns: ns });
    return {
      link: el.querySelector('.' + ns + '-locations-item-data-address-link'),
      label: el.querySelector('.' + ns + '-locations-item-data-title'),
      address: el.querySelector('.' + ns + '-locations-item-data-address'),
      phone: el.querySelector('.' + ns + '-locations-item-data-phone'),
      email: el.querySelector('.' + ns + '-locations-item-data-email'),
      hours: el.querySelectorAll('.' + ns + '-locations-item-data-hours'),
      timezone: el.querySelectorAll('.' + ns + '-locations-item-data-timezone'),
      moreHours: el.querySelectorAll('.' + ns + '-locations-item-data-more-hours'),
      distance: el.querySelector('.' + ns + '-locations-item-distance'),
      backHolder: el.querySelector('.' + ns + '-locations-all-holder'),
      back: el.querySelector('.' + ns + '-locations-all'),
      parentEl: el.querySelector('.' + ns + '-locations-item')
    };
  };

  var dom = createDom(el);

  // name
  if (item.label)
    dom.label.textContent = item.label;
  else
    dom.parentEl.removeChild(dom.label);

  // addresses
  dom.address.textContent = item.address.address;
  dom.link.setAttribute('href', 'https://maps.google.com/?q=' + encodeURIComponent(item.address.address));
  dom.link.setAttribute('target', '_blank');
  dom.distance.textContent = distance(item) || '';

  // email
  if (item.email)
    createEmails(dom.email, item);
  else
    dom.email.parentNode.removeChild(dom.email);

  // phones
  if (item.phones && item.phones.length > 0 && item.hasPhones !== false)
    createPhoneArray(dom.phone, item.phones);
  else
    dom.phone.parentNode.removeChild(dom.phone);

  // hours/timezone
  if (item.days && item.hasDays !== false) {
    createHours(dom.hours, dom.moreHours, item.days, item.address.timezone, dom.timezone);
  } else {
    for (var i = 0; i < dom.hours; i++)
      dom.hours[i].parentNode.removeChild(dom.hours[i]);
    for (var j = 0; j < dom.timezone; j++)
      dom.timezone[j].parentNode.removeChild(dom.timezone[j]);
    for (var n = 0; n < dom.moreHours; i++)
      dom.moreHours[n].parentNode.removeChild(dom.moreHours[n]);
  }

  if (locationData && locationData.length > 1) {
    this.locationsButton = dom.back;
    this.locationsFunction = function(e) {
      e.preventDefault();
      publish('receive', {
        message: {
          text: [strings.locations.list, 'Is there anything else I can help you with?'],
          layout: {
            name: 'show-locations',
            index: 0
          },
          data: {
            location_data: locationData
          }
        }
      });
    };
    dom.back.addEventListener('click', this.locationsFunction);
  } else {
    dom.backHolder.parentNode.removeChild(dom.backHolder);
  }
  container.appendChild(el);
  return container;
};
ShowLocations.prototype.addLocations = function() {
  var current = state.get();
  var createDom = function(el, i, uuid) {
    el.addEventListener('click', this.handleClick);
    el.dataset.uuid = uuid;
    el.dataset.id = i + 1;
    var text = templates.addLocationsItem;
    el.innerHTML = utils.compile(text, {
      ns: ns,
      title: item.label || '',
      address: item.address.address,
      iconText: alphaMap[i],
      accentText: current.styles.accentText,
      accentBackground: current.styles.accentBackground,
      distance: distance(item) || '',
    });
    this.eventListeners.push(el);
  };

  var container = document.createElement('div');

  for (var i = 0; (i < displayLength && i < this.data.length); i++) {
    var el = document.createElement('div');
    var item = this.data[i];
    createDom.call(this, el, i, this.uuid);
    container.appendChild(el);
  }
  return container;
};

module.exports = showLocationsLayout;

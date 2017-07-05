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
var i18n = require('../../utils/i18n');

var first = true;
var displayLength = 3;
var breakpointWidths = ['768', '640', '512', '480', '360'];
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
  // hoursClosed: require('./templates/hours-closed.html'),
  // hoursOpen: require('./templates/hours-open.html'),
  // hoursUnknown: require('./templates/hours-unknown.html'),
  // hoursTodayOpen: require('./templates/hours-today-open.html'),
  hoursTodayClosed: require('./templates/hours-today-closed.html'),
  hoursTodayUnknown: require('./templates/hours-today-unknown.html'),
  hoursTimezone: require('./templates/hours-timezone.html')
};

var strings = {
  locations: {
    none: function() { return i18n('loc_nearby_none'); },
    single: function() { return i18n('loc_nearby_single'); },
    list: function() { return i18n('loc_nearby_list'); }
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

function createHours(hoursEl, moreHoursEl, hours, timezone, timezoneEl) {
  if (!hours) return;

  // today's hours
  var now = new Date();
  var nowDate = now.toDateString();
  var dayIdx = now.getDay();
  var todaysHours = hours[dayIdx];
  var el = document.createElement('div');
  if (todaysHours && todaysHours.isOpen) {
    var open = new Date(nowDate + ' ' + todaysHours.open);
    var close = new Date(nowDate + ' ' + todaysHours.close);
    if (open && close) {
      el.innerHTML = i18n.format('loc_open_today_more', {
        ns: ns,
        open: open,
        close: close
      });
    } else {
      el.innerHTML = utils.compile(templates.hoursTodayUnknown, {
        ns: ns,
        loc_open_today: i18n('loc_open_today')
      });
    }
  } else {
    el.innerHTML = utils.compile(templates.hoursTodayClosed, {
      ns: ns,
      loc_closed_today: i18n('loc_closed_today')
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

  // weekly hours
  var compressedHours = compressHours(hours);
  for (var i = 0; i < compressedHours.length; i++) {
    var childEl = document.createElement('span');
    childEl.setAttribute('class', ns + '-days-hours');
    var current = compressedHours[i];
    if (current && current.isOpen) {
      var openDay = current.startDay;
      var closeDay = current.endDay;
      if (openDay && closeDay) {
        var tmpl = openDay.getDate() === closeDay.getDate() ?
            'loc_hours_open' : 'loc_hours_open_multiday';
        childEl.innerHTML = i18n.format(tmpl, {
          ns: ns,
          openDay: openDay,
          closeDay: closeDay,
          open: current.open,
          close: current.close
        });
      } else {
        childEl.innerHTML = i18n.format('loc_hours_unknown', {
          ns: ns,
          day: openDay
        });
      }
    } else {
      childEl.innerHTML = i18n.format('loc_hours_closed', {
        ns: ns,
        day: current.startDay
      });
    }
    if (i < (compressedHours.length - 1))
      childEl.querySelector('.' + ns + '-days-hours-hours').innerHTML += '<br />';
    utils.appendToEach(moreHoursEl, childEl);
  }
}

function compressHours(hours) {
  var compressedHours = [];
  var current = {};
  for (var n = 0; n < hours.length; n++) {
    var bothClosed, sameHours;
    var last = (compressedHours.length > 0) ? compressedHours[compressedHours.length - 1] : false;
    current = hours[n] || { isOpen: false };
    bothClosed = last && (last.isOpen === current.isOpen && current.isOpen === false);
    sameHours = last && (last.open === current.open && last.close === current.close && last.isOpen === current.isOpen);
    if (compressedHours.length > 0 && last && (bothClosed || sameHours)) {
      last.endDay = n;
    } else {
      compressedHours.push({
        isOpen: current.isOpen,
        startDay: n,
        endDay: n,
        open: current.open,
        close: current.close
      });
    }
  }

  // convert to Date objects
  var today = new Date();
  today.setHours(12);
  for (n = 0; n < compressedHours.length; n++) {
    current = compressedHours[n];
    current.startDay = getDate(today, current.startDay);
    if (current.isOpen) {
      current.endDay = getDate(today, current.endDay);
      current.open = getTime(current.startDay, current.open);
      current.close = getTime(current.startDay, current.close);
    }
  }

  return compressedHours;
}

function getDate(today, idx) {
  var offset = today.getDay() - idx;
  var date = new Date(today); // clone
  date.setDate(date.getDate() - offset);
  return date;
}

function getTime(today, time) {
  return new Date(today.toDateString() + ' ' + time);
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
    this.msgElement.textContent = strings.locations.none();
    break;
  case 1:
    this.msgElement.textContent = strings.locations.single();
    break;
  default:
    this.msgElement.textContent = strings.locations.list();
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
      text: [utils.compile(strings.locations.single(), { location: showLocations[this.dataset.uuid].data[this.dataset.id - 1].address.address }),
             i18n('anything_else')],
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
    el.innerHTML = utils.compile(templates.addLocationItem, {
      ns: ns,
      loc_all: i18n('loc_all')
    });
    return {
      link: el.querySelector('.' + ns + '-locations-item-data-address-link'),
      label: el.querySelector('.' + ns + '-locations-item-data-title'),
      address: el.querySelector('.' + ns + '-locations-item-data-address'),
      phone: el.querySelector('.' + ns + '-locations-item-data-phone'),
      email: el.querySelector('.' + ns + '-locations-item-data-email'),
      hours: el.querySelectorAll('.' + ns + '-locations-item-data-hours'),
      timezone: el.querySelectorAll('.' + ns + '-locations-item-data-timezone'),
      moreHours: el.querySelectorAll('.' + ns + '-locations-item-data-more-hours'),
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
  dom.link.setAttribute('href', i18n('google_maps_url') + '?q=' + encodeURIComponent(item.address.address));
  dom.link.setAttribute('target', '_blank');

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
          text: [strings.locations.list(), i18n('anything_else')],
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
    el.innerHTML = utils.compile(templates.addLocationsItem, {
      ns: ns,
      title: item.label || '',
      address: item.address.address,
      iconText: alphaMap[i],
      accentText: current.styles.accentText,
      accentBackground: current.styles.accentBackground,
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

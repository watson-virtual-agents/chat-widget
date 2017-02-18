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
var activeClassName = 'IBMChat-accent-colors';
var inactiveClassName = 'IBMChat-accent-colors-button';
var utils = require('../../utils');

var ns = 'IBMChat-islocationapi';
var chooseLocationTypes = [];

var chooseLocationTypeLayout = {
  init: function() {
    subscribe('layout:choose-location-type', function(data) {
      var chooseLocationType = new ChooseLocationType(data);
      chooseLocationTypes[data.uuid] = chooseLocationType;
    });
  }
};

var values = {
  postalcode: 'zipcode',
  geolocation: 'latlong'
};

var templates = {
  base: require('./templates/base.html')
};

function ChooseLocationType(data) {
  this.init(data);
}

ChooseLocationType.prototype = {
  init: function(data) {
    this.data = data.data;
    this.uuid = data.uuid;
    if ('navigator' in window && 'geolocation' in navigator) {
      this.eventListeners = [];
      this.parentElement = data.element;
      this.layoutElement = data.layoutElement;
      this.el = document.createElement('div');
      this.el.innerHTML = utils.compile(templates.base, {
        ns: ns,
        'values.geolocation': values.geolocation,
        'values.postalcode': values.postalcode
      });
      this.layoutElement.appendChild(this.el);
      this.buttons = this.layoutElement.querySelectorAll('button');
      this.buttons[0].focus();
      for (var i = 0; i < this.buttons.length; i++) {
        this.buttons[i].dataset.uuid = this.uuid;
        this.buttons[i].addEventListener('click', this.handleClick);
        this.eventListeners.push(this.buttons[i]);
      }
      if (this.eventListeners.length > 0)
        this.subscribeSend = subscribe('send', this.removeAllEventListeners.bind(this));
    } else {
      publish('send', {
        text: values.postalcode,
        silent: true
      });
    }
  },
  handleClick: function() {
    var data = {
      silent: true,
      text: null
    };
    data.text = this.dataset.input;
    this.classList.add(activeClassName);
    this.classList.remove(inactiveClassName);
    publish('send', data);
    publish('focus-input');
  },
  removeAllEventListeners: function() {
    if (this.eventListeners.length > 0) {
      for (var i = 0; i < this.eventListeners.length; i++) {
        this.eventListeners[i].removeEventListener('click', this.handleClick);
        this.eventListeners[i].setAttribute('disabled', true);
      }
      this.eventListeners = [];
    }
    this.subscribeSend.remove();
  }
};

module.exports = chooseLocationTypeLayout;

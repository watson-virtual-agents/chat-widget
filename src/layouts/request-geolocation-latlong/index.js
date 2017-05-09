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
var i18n = require('../../utils/i18n');

var subscribe = events.subscribe;
var publish = events.publish;

var requestGeolocationLatlongs = [];

var LOCATION_TIMEOUT = 30 * 1000;

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
    this.msgElement = data.msgElement;
    this.timedOut = false;
    this.timeoutCheck = setTimeout(function() {
      this.timedOut = true;
      this.handleLocationNotShared();
    }.bind(this), LOCATION_TIMEOUT);
    publish('enable-loading');
    publish('disable-input');
    try {
      navigator.permissions.query({ name: 'geolocation' }).then(function(result) {
        if (result.state === 'prompt') {
          data.msgElement.textContent = i18n('loc_prompt');
          publish('enable-loading', i18n('loc_share'));
        } else if (result.state === 'granted') {
          data.msgElement.textContent = i18n('loc_share_granted');
          publish('enable-loading', i18n('loc_looking'));
        } else if (result.state === 'denied') {
          data.msgElement.textContent = i18n('loc_share_denied');
        }
      });
    } catch (e) {
      console.log('navigator.permissions not supported.');
    }
    navigator.geolocation.getCurrentPosition(
      function(position) {
        if (this.timedOut) return false;
        clearTimeout(this.timeoutCheck);
        this.handleLocationShared(position);
      }.bind(this),
      function() {
        if (this.timedOut) return false;
        clearTimeout(this.timeoutCheck);
        this.handleLocationNotShared();
      }.bind(this)
    );
  },
  handleLocationShared: function(position) {
    publish('enable-input');
    publish('disable-loading');
    publish('send', {
      text: position.coords.latitude + ',' + position.coords.longitude,
      silent: true
    });
  },
  handleLocationNotShared: function() {
    var string = i18n('loc_not_shared_prompt');
    publish('enable-input');
    publish('disable-loading');
    publish('receive', string);
    publish('send', {
      text: 'find nearest locations',
      silent: true
    });
  }
};

module.exports = requestGeolocationLatlongLayout;

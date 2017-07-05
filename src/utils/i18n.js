/*
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

var IntlMessageFormat = require('intl-messageformat');
var fallbacks = require('json!yaml!../lang/en.yaml').en;
var state = require('../state');

function getString(id, fallback) {
  var t = state.get().langBundle;
  if (t && t[id]) {
    return t[id];
  }
  if (fallback) {
    return fallback;
  }
  if (fallbacks[id]) {
    return fallbacks[id];
  }
  return null;
}

var intlMsgOptions = {
  date: {
    // outputs 'Sat', 'Sun'
    weekday_short: {
      weekday: 'short'
    }
  }
};

function getMessage(id, _useFallbacks) {
  var msg;
  var t = !_useFallbacks ? state.get().langBundle : fallbacks;
  if (t && t[id]) {
    msg = t[id];
    if (typeof msg === 'string') {
      // create a message object and store it
      var locale = state.get().locale;
      msg = new IntlMessageFormat(msg, locale, intlMsgOptions);
      t[id] = msg;
    }
  } else {
    msg = getMessage(id, true);
  }

  return msg;
}

function format(id, values) {
  var msg = getMessage(id);
  return msg.format(values);
}

module.exports = getString;
module.exports.format = format;

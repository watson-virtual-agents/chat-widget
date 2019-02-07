/**
* (C) Copyright IBM Corp. 2016. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License"); you may not
* use this file except in compliance with the License. You may obtain a copy of
* the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
* WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
* License for the specific language governing permissions and limitations under
* the License.
*/

var profile = {};
var storage = {
  set: function(key, value) {
    profile[key] = value;
    return storage;
  },
  get: function(key) {
    return profile[key] || '';
  },
  has: function(key) {
    return (profile[key] !== undefined);
  },
  clear: function() {
    profile = {};
    return storage;
  },
  delete: function(key) {
    delete profile[key];
    return storage;
  },
  forEach: function(cb, context) {
    Object.keys(profile).forEach(function(key) {
      if (context)
        cb(key, profile[key]).bind(context);
      else
        cb(key, profile[key]);
    });
    return storage;
  }
};

module.exports = storage;
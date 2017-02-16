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
var errors = [];
var ns = 'IBMChat-error';

var errorLayout = {
  init: function() {
    events.subscribe('layout:error', function(data) {
      var error = new Error(data);
      errors[data.uuid] = error;
    });
  }
};

var templates = {
  base: require('./templates/base.html')
};

function Error(data) {
  this.init(data);
}

Error.prototype.init = function(data) {
  this.message = data.message.layout.message;
  this.uuid = data.uuid;
  this.parentElement = data.element;
  this.layoutElement = data.layoutElement;
  this.layoutElement.innerHTML = templates.base;
  this.layoutElement.querySelector('.' + ns).textContent = this.message;
};


module.exports = errorLayout;

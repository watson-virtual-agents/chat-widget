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

var config = require('../config');

var localCommands = {

};

var localElements = {
  addressInput: {
    selector: '.IBMChat-messages div:last-of-type .IBMChat-watson-message-container .IBMChat-watson-layout input[name="address"]'
  },
  cityInput: {
    selector: '.IBMChat-messages div:last-of-type .IBMChat-watson-message-container .IBMChat-watson-layout input[name="city"]'
  },
  stateInput: {
    selector: '.IBMChat-messages div:last-of-type .IBMChat-watson-message-container .IBMChat-watson-layout input[name="state"]'
  },
  zipInput: {
    selector: '.IBMChat-messages div:last-of-type .IBMChat-watson-message-container .IBMChat-watson-layout input[name="zipcode"]'
  },
  addressValidation: {
    selector: '.IBMChat-messages div:last-of-type .IBMChat-watson-message-container .IBMChat-watson-layout [data-validation-for="address"]'
  },
  cityValidation: {
    selector: '.IBMChat-messages div:last-of-type .IBMChat-watson-message-container .IBMChat-watson-layout [data-validation-for="city"]'
  },
  stateValidation: {
    selector: '.IBMChat-messages div:last-of-type .IBMChat-watson-message-container .IBMChat-watson-layout [data-validation-for="state"]'
  },
  zipValidation: {
    selector: '.IBMChat-messages div:last-of-type .IBMChat-watson-message-container .IBMChat-watson-layout [data-validation-for="zipcode"]'
  },
  cancelButton: {
    selector: '.IBMChat-messages div:last-of-type .IBMChat-watson-message-container .IBMChat-watson-layout .IBMChat-form-cancel'
  },
  submitButton: {
    selector: '.IBMChat-messages div:last-of-type .IBMChat-watson-message-container .IBMChat-watson-layout .IBMChat-form-submit'
  }
};

module.exports = {
  url: config.pageUrl,
  elements: [
    config.sharedElements,
    localElements
  ],
  commands: [Object.assign({}, localCommands, config.sharedCommands)]
};

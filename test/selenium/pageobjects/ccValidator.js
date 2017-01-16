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
  nameInput: {
    selector: '.IBMChat-messages div:last-of-type .IBMChat-watson-message-container .IBMChat-watson-layout input[name="cc_full_name"]'
  },
  ccInput: {
    selector: '.IBMChat-messages div:last-of-type .IBMChat-watson-message-container .IBMChat-watson-layout input[name="cc_number"]'
  },
  monthInput: {
    selector: '.IBMChat-messages div:last-of-type .IBMChat-watson-message-container .IBMChat-watson-layout input[name="cc_exp_date_month"]'
  },
  yearInput: {
    selector: '.IBMChat-messages div:last-of-type .IBMChat-watson-message-container .IBMChat-watson-layout input[name="cc_exp_date_year"]'
  },
  cvvInput: {
    selector: '.IBMChat-messages div:last-of-type .IBMChat-watson-message-container .IBMChat-watson-layout input[name="cc_code"]'
  },
  nameValidation: {
    selector: '.IBMChat-messages div:last-of-type .IBMChat-watson-message-container .IBMChat-watson-layout [data-validation-for="cc_full_name"]'
  },
  ccValidation: {
    selector: '.IBMChat-messages div:last-of-type .IBMChat-watson-message-container .IBMChat-watson-layout [data-validation-for="cc_number"]'
  },
  expValidation: {
    selector: '.IBMChat-messages div:last-of-type .IBMChat-watson-message-container .IBMChat-watson-layout [data-validation-for="cc_exp_date"]'
  },
  cvvValidation: {
    selector: '.IBMChat-messages div:last-of-type .IBMChat-watson-message-container .IBMChat-watson-layout [data-validation-for="cc_code"]'
  },
  cancelButton: {
    selector: '.IBMChat-messages div:last-of-type .IBMChat-watson-message-container .IBMChat-watson-layout .IBMChat-creditcard-cancel'
  },
  submitButton: {
    selector: '.IBMChat-messages div:last-of-type .IBMChat-watson-message-container .IBMChat-watson-layout .IBMChat-creditcard-submit'
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

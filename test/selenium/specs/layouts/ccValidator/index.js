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
/*
var config = require('../../../config');
var mocks = require('../../../mocks/layout/ccValidator');
var strings = {
  showLayout: 'Show me the layout',
  pleasePay: 'Please pay with Visa, MasterCard, Discover, or American Express',
  required: 'This field is required.',
  expDateError: 'Your credit card expiration date is invalid.',
  cvvError: 'Your CVV is invalid.',
  name: 'Ethan Winters',
  cc: '4111111111111111',
  month: '11',
  year: '2030',
  cvv: '123',
  success: 'success',
  cancel: 'cancel'
};

module.exports = {
  'it should display credit card layout': function (client) {
    var PO = client.page.ccValidator();
    PO.navigate()
      .waitForElementVisible('@main')
      .createWidget()
      .assert.elementPresent('@outerContainer')
      .assert.visible('@input')
      .setMessage(mocks.responses.getCCLayout)
      .typeMessage(strings.showLayout)
      .assert.containsText('@lastMessage', strings.pleasePay);
  },
  'it should show an error with no name': function (client) {
    var PO = client.page.ccValidator();
    PO.delayedClick('@submitButton')
      .assert.containsText('@nameValidation', strings.required);
  },
  'it should remove name error with name': function (client) {
    var PO = client.page.ccValidator();
    PO.setValue('@nameInput', strings.name)
      .delayedClick('@submitButton')
      .waitForElementNotVisible('@nameValidation')
      .assert.containsText('@nameValidation', '');
  },
  'it should show an error with no credit card': function (client) {
    var PO = client.page.ccValidator();
    PO.delayedClick('@submitButton')
      .assert.containsText('@ccValidation', strings.required);
  },
  'it should remove credit card error with credit card': function (client) {
    var PO = client.page.ccValidator();
    PO.setValue('@ccInput', strings.cc)
      .delayedClick('@submitButton')
      .waitForElementNotVisible('@ccValidation')
      .assert.containsText('@ccValidation', '');
  },
  'it should show an error with no expiration date': function (client) {
    var PO = client.page.ccValidator();
    PO.delayedClick('@submitButton')
      .assert.containsText('@expValidation', strings.expDateError);
  },
  'it should remove expiration date error with expiration date': function (client) {
    var PO = client.page.ccValidator();
    PO.setValue('@monthInput', strings.month)
      .setValue('@yearInput', strings.year)
      .delayedClick('@submitButton')
      .waitForElementNotVisible('@expValidation')
      .assert.containsText('@expValidation', '');
  },
  'it should show an error with no cvv': function (client) {
    var PO = client.page.ccValidator();
    PO.delayedClick('@submitButton')
      .assert.containsText('@cvvValidation', strings.cvvError);
  },
  'it should remove cvv error with cvv and submit the form': function (client) {
    var PO = client.page.ccValidator();
    PO.setValue('@cvvInput', strings.cvv)
      .delayedClick('@submitButton')
      .assert.containsText('@lastMessage', strings.success);
  },
  'it should update user profile with credit card information': function (client) {
    var PO = client.page.ccValidator();
      PO.profileCheck('cc_full_name', strings.name)
      .profileCheck('cc_number', strings.cc)
      .profileCheck('cc_code', strings.cvv);
    client.end();
  },
  'it should cancel the credit card layout': function (client) {
    var PO = client.page.ccValidator();
    PO.navigate()
      .waitForElementVisible('@main')
      .createWidget()
      .assert.elementPresent('@outerContainer')
      .assert.visible('@input')
      .setMessage(mocks.responses.getCCLayout)
      .typeMessage(strings.showLayout)
      .assert.containsText('@lastMessage', strings.pleasePay)
      .delayedClick('@cancelButton')
      .assert.containsText('@lastMessage', strings.cancel);
    client.end();
  }
};
*/

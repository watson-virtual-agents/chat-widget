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
var mocks = require('../../../mocks/layout/form');
var strings = {
  showLayout: 'Show me the layout',
  required: 'This field is required.',
  badZipMessage: 'Please enter a valid zipcode',
  enterAddress: 'Please enter your new address',
  address: '123 Main St.',
  city: 'Anytown',
  state: 'MA',
  badZipcode: 'gggggggggggg',
  goodZipcode: '01833',
  success: 'success',
  cancel: 'cancel'
};

module.exports = {
  'it should display form layout': function (client) {
    var PO = client.page.form();
    PO.navigate()
      .waitForElementVisible('@main')
      .createWidget()
      .assert.elementPresent('@outerContainer')
      .assert.visible('@input')
      .setMessage(mocks.responses.getFormLayout)
      .typeMessage(strings.showLayout)
      .assert.containsText('@lastMessage', strings.enterAddress);
  },
  'it should show an error with no address': function (client) {
    var PO = client.page.form();
    PO.delayedClick('@submitButton')
      .assert.containsText('@addressValidation', strings.required);
  },
  'it should remove address error with address': function (client) {
    var PO = client.page.form();
    PO.setValue('@addressInput', strings.address)
      .delayedClick('@submitButton')
      .waitForElementNotVisible('@addressValidation')
      .assert.containsText('@addressValidation', '');
  },
  'it should show an error with no city': function (client) {
    var PO = client.page.form();
    PO.delayedClick('@submitButton')
      .assert.containsText('@cityValidation', strings.required);
  },
  'it should remove city error with city': function (client) {
    var PO = client.page.form();
    PO.setValue('@cityInput', strings.city)
      .delayedClick('@submitButton')
      .waitForElementNotVisible('@cityValidation')
      .assert.containsText('@cityValidation', '');
  },
  'it should show an error with no state': function (client) {
    var PO = client.page.form();
    PO.delayedClick('@submitButton')
      .assert.containsText('@stateValidation', strings.required);
  },
  'it should remove state error with state': function (client) {
    var PO = client.page.form();
    PO.setValue('@stateInput', strings.state)
      .delayedClick('@submitButton')
      .waitForElementNotVisible('@stateValidation')
      .assert.containsText('@stateValidation', '');
  },
  'it should show an error with no zip': function (client) {
    var PO = client.page.form();
    PO.delayedClick('@submitButton')
      .assert.containsText('@zipValidation', strings.required);
  },
  'it should show an error with bad zip': function (client) {
    var PO = client.page.form();
    PO.setValue('@zipInput', strings.badZipcode)
      .delayedClick('@submitButton')
      .assert.containsText('@zipValidation', strings.badZipMessage);
  },
  'it should remove zip error with zip and submit the form': function (client) {
    var PO = client.page.form();
    PO.clearValue('@zipInput')
      .setValue('@zipInput', strings.goodZipcode)
      .delayedClick('@submitButton')
      .assert.containsText('@lastMessage', strings.success);
  },
  'it should update user profile with correct address': function (client) {
    var PO = client.page.form();
      PO.profileCheck('address', strings.address)
      .profileCheck('city', strings.city)
      .profileCheck('state', strings.state)
      .profileCheck('zipcode', strings.goodZipcode);
    client.end();
  },
  'it should cancel the form layout': function (client) {
    var PO = client.page.form();
    PO.navigate()
      .waitForElementVisible('@main')
      .createWidget()
      .assert.elementPresent('@outerContainer')
      .assert.visible('@input')
      .setMessage(mocks.responses.getFormLayout)
      .typeMessage(strings.showLayout)
      .assert.containsText('@lastMessage', strings.enterAddress)
      .delayedClick('@cancelButton')
      .assert.containsText('@lastMessage', strings.cancel);
    client.end();
  }
};
*/

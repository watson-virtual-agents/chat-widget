/**
* (C) Copyright IBM Corp. 2016. All Rights Reserved.
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
var config = require('../../config');
var mocks = require('../../mocks/chooseLayout');
var strings = {
  showLayout: 'Show me the layout',
  whichEmailOneOf: 'Which email address are you looking to change?',
  whichEmailSomeOf: 'Which email addresses are you looking to change?',
  buttonText: 'Profile Notifications',
  clickedTextOneOf: 'You sent: Profile Notifications',
  clickedTextSomeOf: 'You sent: Profile Notifications,Account Notifications'
}
module.exports = {
  'Displays choose layout (oneOf)': function (client) {
    var PO = client.page.chooseLayout();
    PO.navigate()
      .waitForElementVisible('body')
      .createWidget()
      .assert.elementPresent('@outerContainer')
      .assert.visible('@input')
      .setMessage(mocks.responses.getOneOfLayout)
      .typeMessage(strings.showLayout)
      .assert.containsText('@lastMessage', strings.whichEmailOneOf);
  },
  'Click on choose layout (oneOf)': function(client) {
    var PO = client.page.chooseLayout();
    PO.setMessage(strings.clickedTextOneOf)
      .assert.elementPresent('@firstButton')
      .assert.containsText('@firstButton', strings.buttonText)
      .click('@firstButton')
      .assert.containsText('@lastMessage', strings.clickedTextOneOf);
    client.end();
  },
  'Displays choose layout (someOf)': function (client) {
    var PO = client.page.chooseLayout();
    PO.navigate()
      .waitForElementVisible('body')
      .createWidget()
      .assert.elementPresent('@outerContainer')
      .assert.visible('@input')
      .setMessage(mocks.responses.getSomeOfLayout)
      .typeMessage(strings.showLayout)
      .assert.containsText('@lastMessage', strings.whichEmailSomeOf);
  },
  'Click on choose layout (someOf)': function(client) {
    var PO = client.page.chooseLayout();
    PO.assert.elementPresent('@firstButtonSomeOf')
      .assert.elementPresent('@secondButtonSomeOf')
      .assert.containsText('@firstButtonSomeOf', strings.buttonText)
      .click('@firstButtonSomeOf')
      .click('@secondButtonSomeOf')
      .assert.elementPresent('@enterButton')
      .click('@enterButton')
      .assert.containsText('@lastMessage', strings.clickedTextSomeOf);
    client.end();
  }
};

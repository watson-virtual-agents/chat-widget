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

var config = require('../../config');

var strings = {
  'welcomeMessage': 'Hi my name is Virtual Agent. I am here to answer questions about our company. What can I help you with?',
  'hello': 'hello!',
  'receiveMessage': 'Right back at you.'
};

module.exports = {
  'Widget properly starts up and can send and receive a message': function (client) {
    var PO = client.page.default();
    PO.navigate()
      .waitForElementVisible('@main')
      .assert.title('IBM Watson Virtual Agent Chat Widget Demo')
      .createWidget()
      .assert.elementPresent('@outerContainer')
      .assert.visible('@input')
      .assert.containsText('@lastMessage', strings.welcomeMessage)
      .setMessage(strings.receiveMessage)
      .typeMessage(strings.hello)
      .assert.containsText('@lastSentMessage', strings.hello)
      .assert.containsText('@lastMessage', strings.receiveMessage);
    client.end();
  }
};

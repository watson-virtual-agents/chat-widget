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

module.exports = {
  'Widget properly starts up': function (client) {
    var PO = client.page.default();
    PO.navigate()
      .waitForElementVisible('body')
      .assert.title('IBM Watson Virtual Agent Chat Widget Demo');
    config.createChat(client).pause(1000);
    PO.assert.elementPresent('@outerContainer')
      .assert.visible('@input')
      .assert.containsText('@lastMessage', 'Hi my name is Virtual Agent. I am here to answer questions about our company. What can I help you with?');
    client.end();
  }
};

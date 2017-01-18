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
  firstButton: {
    selector: '.IBMChat-messages div:last-of-type .IBMChat-watson-message-container .IBMChat-watson-layout button:first-child'
  },
  firstButtonSomeOf: {
    selector: '.IBMChat-messages div:last-of-type .IBMChat-watson-message-container .IBMChat-watson-layout .IBMChat-choose-option:first-child button'
  },
  secondButtonSomeOf: {
    selector: '.IBMChat-messages div:last-of-type .IBMChat-watson-message-container .IBMChat-watson-layout .IBMChat-choose-option:nth-child(2) button'
  },
  enterButton: {
    selector: '.IBMChat-messages div:last-of-type .IBMChat-watson-message-container .IBMChat-watson-layout .IBMChat-choose-submit button'
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

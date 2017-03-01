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

var pageUrl = 'http://localhost:3300/';
var baseUrl = 'http://localhost:3201/';
var axios = require('axios');
var instance = axios.create({
  baseURL: baseUrl
});

var sharedElements = {
  main: {
    selector: '#ibm_el'
  },
  lastMessage: {
    selector: '.IBMChat-messages .IBMChat-watson-turn:last-of-type .IBMChat-watson-message-container .IBMChat-watson-message'
  },
  lastSentMessage: {
    selector: '.IBMChat-messages div:nth-last-of-type(2) .IBMChat-user-message'
  },
  lastLayout: {
    selector: '.IBMChat-messages .IBMChat-watson-turn:last-of-type .IBMChat-watson-message-container .IBMChat-watson-layout'
  },
  input: {
    selector: '.IBMChat-chat-textbox'
  },
  outerContainer: {
    selector: '.IBMChat-outer-container'
  }
};

var sharedCommands = {
  createWidget: function() {
    this.api.execute(function(){
      window.IBMChat.destroy();
      setTimeout(function(){
        window.IBMChat.init({
          el: 'ibm_el',
          baseURL: 'http://localhost:3201/',
          botID: 77
        });
      }, 0);
    });
    return this.waitForElementPresent('@outerContainer');
  },
  setMessage: function(message) {
    this.api.pause(1000);
    instance.post('/setmessage', { message: message });
    this.api.pause(1000);
    return this;
  },
  typeMessage: function(message) {
    this.setValue('@input', message);
    this.api.keys(this.api.Keys.ENTER);
    this.api.pause(1000);
    return this;
  },
  profileCheck: function(key, value) {
    this.api.execute(function(obj) {
      return window.IBMChat.profile.get(obj.key);
    }, [{ key: key, value: value }], function(result) {
      this.assert.equal(key + ':' + result.value, key + ':' + value);
    });
    return this;
  },
  delayedClick: function(element) {
    this.api.pause(1000);
    this.click(element);
    this.api.pause(1000);
    return this;
  }
};

module.exports = {
  pageUrl: pageUrl,
  baseUrl: baseUrl,
  sharedElements: sharedElements,
  sharedCommands: sharedCommands
};

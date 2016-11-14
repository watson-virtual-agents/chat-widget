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

require('../../styles.css');

var IBMChat = require('@watson-virtual-agent/chat-widget');
var socket = require('socket.io-client').connect('/');
var httpPostAsync = require('../../utils').httpPostAsync;

IBMChat.init({
  el: 'ibm_el',
  baseURL: 'https://api.ibm.com/virtualagent/run/api/v1/',
  botID: '',              // replace with Bot ID
  XIBMClientID: '',       // replace with Client ID
  XIBMClientSecret: ''    // replace with Client Secret
});

// Listen for post messages from Slack for its outgoing messages
socket.on('slackMessage', function(data) {
  if (data.text == '!Q@W#E$R') {
    IBMChat.disableCustomInputHandler(); // return control to virtual agent
    IBMChat.receive('Conversation with the live agent ended');
  }
  else {
    IBMChat.receive(data.text);
  }
});

// Escate to agent intent triggered
IBMChat.subscribe('action:agent', function(data) {
  httpPostAsync('/agent', {
    text: 'Agent has been requested',
    data: data.message.data
  }, function(err) {
    if (err) {
      IBMChat.receive('I\'m sorry, there was an error connecting to an agent.');
    } else {
      /*
      when someone submits text in the chat widget, you can override the default with your own custom function.
      In this case, we want to send requests to our "agent" route instead of the Watson Virtual Agent.
      */
      IBMChat.enableCustomInputHandler({
        callback: function(message, resolve, reject) {
          httpPostAsync('/agent', { text: message } , function(err) {
            if (err)
              reject();
            else
              resolve();
          });
        }
      });
    }
  });
});

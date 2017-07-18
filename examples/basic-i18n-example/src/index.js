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

/**
 * This example shows how to load and make use of translated string bundles.
 */

var IBMChat = require('@watson-virtual-agent/chat-widget');
var mockActions = require('../../_mock_actions/main.js');
// load a single or multi-language bundle of translated strings
var langs = require('json-loader!@watson-virtual-agent/chat-widget/dist/lang/es.json');
var locale = 'es';

// Initialize chat widget. Set botID, XIBMClientID and XIBMClientSecret
// with the corresponding values.
//
// I18N: By default, the chat widget will use English strings. To display a
// different language to your users, pass in the appropriate 'locale' (i.e. 'es',
// 'pt-BR', ...) and a language bundle ('langBundle') which contains strings
// for the given locale.
IBMChat.init({
  el: 'ibm_el',
  locale: locale,
  langBundle: langs,
  baseURL: 'https://api.ibm.com/virtualagent/run/api/v1/',
  botID: '',              // replace with Bot ID
  XIBMClientID: '',       // replace with Client ID
  XIBMClientSecret: ''    // replace with Client Secret
}).then(function() {
  // mock some actions in order to make the example for useful
  mockActions.registerActions(IBMChat, locale);
});

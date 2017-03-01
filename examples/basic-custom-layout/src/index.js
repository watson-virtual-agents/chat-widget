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

var IBMChat = require('@watson-virtual-agent/chat-widget');

/**
 * This example shows how to create a custom layout to replace the chat widget's
 * built-in 'choose' layout.
 *
 * Our basic custom layout displays the options via a dropdown instead of a series
 * of buttons which is the chat widgets' default behavior.
 */

var widgets = [];

function Choose(data) {
  this.init(data);
}

Choose.prototype.init = function(data) {
  this.allowMultiple = (data.message.inputvalidation.someOf !== undefined);
  this.values = [];
  this.eventListeners = [];
  this.data = (this.allowMultiple) ? data.message.inputvalidation.someOf : data.message.inputvalidation.oneOf;
  this.uuid = data.uuid;
  this.layoutElement = data.layoutElement;
  this.drawDropdown();
  this.subscribeSend = IBMChat.subscribe('send', this.removeAllEventListeners.bind(this));
};

Choose.prototype.drawDropdown = function() {
  // main dropdown container
  this.el = document.createElement('div');
  this.el.classList.add('dropdown');
  this.el.setAttribute('data-isopen', false);

  // button to display/hide options
  var buttonEl = document.createElement('button');
  buttonEl.classList.add('selected-option');
  buttonEl.innerHTML = this.data[0];
  this.addListener(buttonEl, this.handleDropdownClick.bind(this));
  this.el.append(buttonEl);

  // dropdown options
  var ulEl = document.createElement('ul');
  ulEl.classList.add('options-container');
  for (var i = 0; i < this.data.length; i++) {
    var liEl = document.createElement('li');
    liEl.classList.add('option');
    liEl.innerHTML = this.data[i];
    liEl.setAttribute('data-selected', (i === 0));
    this.addListener(liEl, this.handleOptionClick.bind(this));
    ulEl.append(liEl);
  }
  this.el.append(ulEl);

  // append dropdown to layout container
  this.layoutElement.append(this.el);

  // hide all options on creation
  this.hideOptions();
};

Choose.prototype.handleDropdownClick = function() {
  var isOpen = (this.el.dataset.isopen === 'true');
  if (isOpen)
    this.hideOptions();
  else
    this.showOptions();
  this.el.setAttribute('data-isopen', !isOpen);
};

Choose.prototype.handleOptionClick = function(e) {
  this.hideOptions();

  // remove current selection
  var current = this.el.querySelector('[data-selected="true"]');
  current.dataset.selected = false;

  // set new selected option
  var target = e.target;
  target.setAttribute('data-selected', true);
  var button = this.el.querySelector('.selected-option');
  button.innerHTML = target.innerHTML;

  IBMChat.publish('scroll-to-bottom');
  this.submit();
};

Choose.prototype.hideOptions = function() {
  var ul = this.el.querySelector('.options-container');
  ul.style.display = 'none';
};

Choose.prototype.showOptions = function() {
  var ul = this.el.querySelector('.options-container');
  ul.style.display = '';
};

Choose.prototype.submit = function() {
  var current = this.el.querySelector('[data-selected="true"]');
  this.values.push(current.innerHTML);
  IBMChat.publish('send', {
    silent: true,
    text: this.values.toString()
  });
  this.el.disabled = true;
};

Choose.prototype.addListener = function(el, handler) {
  el.addEventListener('click', handler);
  this.eventListeners.push({ el: el, cb: handler });
};

Choose.prototype.removeAllEventListeners = function() {
  for (var i = 0; i < this.eventListeners.length; i++) {
    this.eventListeners[i].el.removeEventListener('click', this.eventListeners[i].cb);
    this.eventListeners[i].el.setAttribute('disabled', true);
  }
  this.eventListeners = [];
  this.subscribeSend.remove();
};

// our layout's init function. We subscribe to both 'choose' and
// 'confirm' layout events so this is used to render both.
function layoutInit() {
  IBMChat.subscribe('layout:choose', function(data) {
    var widget = new Choose(data);
    widgets[data.uuid] = widget;
  });
  IBMChat.subscribe('layout:confirm', function(data) {
    var widget = new Choose(data);
    widgets[data.uuid] = widget;
  });
}

// register the custom layout overriding the default 'choose' one, passing
// the init function
IBMChat.registerLayout('choose', layoutInit);

// initialize chat widget. Set botID, XIBMClientID and XIBMClientSecret
// with the corresponding values.
IBMChat.init({
  el: 'ibm_el',
  baseURL: 'https://api.ibm.com/virtualagent/run/api/v1/',
  botID: '',              // replace with Bot ID
  XIBMClientID: '',       // replace with Client ID
  XIBMClientSecret: ''    // replace with Client Secret
});

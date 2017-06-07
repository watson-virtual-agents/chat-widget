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

var events = require('../../events');
var subscribe = events.subscribe;
var publish = events.publish;
var utils = require('../../utils');
var i18n = require('../../utils/i18n');
var ns = 'IBMChat-choose';
var activeClassName = 'IBMChat-accent-colors';
var inactiveClassName = 'IBMChat-accent-colors-button';
var widgets = [];
var templates = {
  button: require('./templates/button.html'),
  submit: require('./templates/submit.html')
};

var chooseLayout = {
  init: function() {
    subscribe('layout:choose', function(data) {
      var widget = new Choose(data);
      widgets[data.uuid] = widget;
    });
    subscribe('layout:confirm', function(data) {
      var widget = new Choose(data);
      widgets[data.uuid] = widget;
    });
  }
};

function Choose(data) {
  this.init(data);
}

Choose.prototype.init = function(data) {
  this.allowMultiple = (data.message.inputvalidation.someOf !== undefined);
  this.values = [];
  this.data = (this.allowMultiple) ? data.message.inputvalidation.someOf : data.message.inputvalidation.oneOf;
  this.uuid = data.uuid;
  this.parentElement = data.element;
  this.layoutElement = data.layoutElement;
  this.msgElement = data.msgElement;
  this.drawButtons();
  this.subscribeSend = subscribe('send', this.removeAllEventListeners.bind(this));
};

Choose.prototype.eventListeners = [];

Choose.prototype.drawButtons = function() {
  var tmpl = templates.button;
  this.el = document.createElement('div');
  this.el.classList.add(ns + '-container');

  for (var i = 0; i < this.data.length; i++) {
    var text = this.data[i];
    var buttonHolder = document.createElement('div');
    buttonHolder.classList.add(ns + '-option');
    var parsed = utils.compile(tmpl, {
      text: text
    });
    var button;
    buttonHolder.innerHTML = parsed;
    this.el.appendChild(buttonHolder);
    button = buttonHolder.querySelector('button');
    button.setAttribute('data-uuid', this.uuid);
    button.classList.add(inactiveClassName);
    this.addListener(button);
  }

  if (this.allowMultiple) {
    var submit = document.createElement('div');
    var submitBtn = utils.compile(templates.submit, {
      text: i18n('submit')
    });
    submit.classList.add(ns + '-submit');
    submit.innerHTML = submitBtn;
    this.submitButton = submit.querySelector('button');
    this.submitButton.classList.add(activeClassName);
    this.submitButton.setAttribute('disabled', true);
    this.el.appendChild(submit);
    this.addSubmitListener(this.submitButton);
  }

  this.layoutElement.appendChild(this.el);
  this.layoutElement.querySelectorAll('button')[0].focus();
};

Choose.prototype.handleClick = function(evt) {
  var target = evt.target;
  target.classList.add(activeClassName);
  target.classList.add('IBMChat-accent-colors');
  publish('send', {
    silent: false,
    text: target.dataset.input
  });
};

Choose.prototype.handleMultiClick = function(evt) {
  var target = evt.target;
  var buttons;
  var instance = widgets[target.dataset.uuid];
  if (utils.hasClass(target, activeClassName)) {
    target.classList.add(inactiveClassName);
    target.classList.remove(activeClassName);
  } else {
    target.classList.add(activeClassName);
    target.classList.remove(inactiveClassName);
  }
  buttons = instance.el.querySelectorAll('.' + ns + '-option .' + activeClassName);
  if (buttons.length > 0)
    instance.submitButton.removeAttribute('disabled');
  else
    instance.submitButton.setAttribute('disabled', true);
};

Choose.prototype.handleSubmit = function() {
  var buttons = this.el.querySelectorAll('.' + activeClassName);
  for (var i = 0; i < buttons.length; i++)
    this.values.push(buttons[i].dataset.input);
  publish('send', {
    silent: true,
    text: this.values.toString().slice(0, -1)
  });
};

Choose.prototype.addListener = function(el) {
  var handler = this.allowMultiple ? this.handleMultiClick: this.handleClick;
  el.addEventListener('click', handler.bind(this));
  this.eventListeners.push({ el: el, cb: handler });
};

Choose.prototype.addSubmitListener = function(el) {
  var handler = this.handleSubmit.bind(this);
  el.addEventListener('click', handler);
  this.eventListeners.push({ el: el, cb: handler });
};

Choose.prototype.removeAllEventListeners = function() {
  var listeners = this.eventListeners;
  if (listeners.length > 0) {
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener.el.removeEventListener('click', listener.cb);
      listener.el.setAttribute('disabled', true);
    }
    this.eventListeners = [];
    this.subscribeSend.remove();
  }
};

module.exports = chooseLayout;

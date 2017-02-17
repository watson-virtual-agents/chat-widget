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
var profile = require('../../profile');
var utils = require('../../utils');
var subscribe = events.subscribe;
var publish = events.publish;
var ns = 'IBMChat-form';
var activeClassName = 'IBMChat-accent-colors';
var inactiveClassName = 'IBMChat-accent-colors-button';
var templates = {
  base: require('./templates/base.html'),
  field: require('./templates/field.html')
};
var widgets = [];

var formLayout = {
  init: function() {
    subscribe('layout:form', function(data) {
      var widget = new Form(data);
      widgets[data.uuid] = widget;
    });
  }
};

function Form(data) {
  this.init(data);
}

Form.prototype.init = function(data) {
  this.data = data.message.store || [];
  this.action = data.message.action || '';
  this.label = data.message.layout.label || {};
  this.uuid = data.uuid;
  this.parentElement = data.element;
  this.layoutElement = data.layoutElement;
  this.msgElement = data.msgElement;
  this.drawForm();
  this.subscribeSend = subscribe('send', this.removeEventListeners.bind(this));
  publish('disable-input');
};

Form.prototype.drawForm = function() {
  var base = document.createElement('div');
  var formFields;
  base.innerHTML = utils.compile(templates.base, {
    submit: this.label.submit || 'Submit',
    cancel: this.label.cancel || 'Cancel'
  });
  formFields = base.querySelector('.IBMChat-form-fields');
  this.data.forEach(function(datum, index) {
    var field = document.createElement('div');
    field.innerHTML = utils.compile(templates.field, {
      label: datum.label || '',
      name: datum.name,
      uuid: utils.getUUID(),
      type: datum.type || 'text',
      index: index,
      value: ''
    });
    field.className = ns + '-fields-row';
    formFields.appendChild(field);
  });
  this.fields = formFields.querySelectorAll('input');
  this.submitButton = base.querySelector('.' + ns + '-submit');
  this.cancelButton = base.querySelector('.' + ns + '-cancel');
  this.submitButton.classList.add(inactiveClassName);
  this.cancelButton.classList.add(inactiveClassName);
  this.layoutElement.appendChild(base);
  this.fields[0].focus();
  this.addEventListeners();
};

Form.prototype.handleSubmit = function() {
  if (this.validateFields() === true) {
    for (var i = 0; i < this.fields.length; i++)
      profile.set(this.fields[i].getAttribute('name'), this.fields[i].value || new String(''));
    this.submitButton.classList.remove(inactiveClassName);
    this.submitButton.classList.add(activeClassName);
    publish('send', {
      silent: true,
      text: 'success'
    });
    publish('enable-input');
  } else {
    this.setFocusOnError();
  }
};

Form.prototype.setFocusOnError = function() {
  for (var j = 0; j < this.fields.length; j++) {
    var name = this.fields[j].getAttribute('name');
    var el = this.layoutElement.querySelector('[data-validation-for="' + name + '"]');
    if (el.dataset.valid === "false") {
      this.fields[j].focus();
      break;
    }
  }
};

Form.prototype.validateFields = function() {
  var allFieldsAreValid = true;
  for (var i = 0; i < this.data.length; i++) {
    var fieldIsValid = this.validateField(this.fields[i], this.data[i]);
    allFieldsAreValid = allFieldsAreValid && fieldIsValid;
  }
  return allFieldsAreValid;
};

Form.prototype.validateField = function(field, datum) {
  var valid = true;
  if ((!field.value || field.value.trim().length === 0) && datum.required == 'true') {
    this.addError(field.getAttribute('name'), 'This field is required.');
    valid = false;
  }
  if (valid === true && datum.validations && datum.validations.length !== 0) {
    for (var i = 0; i < datum.validations.length; i++) {
      // regexes received from backend should always include
      // start/end of line anchors (^, $)
      var validation = datum.validations[i];
      var validationRegex = validation.regex;
      var regex = new RegExp(validationRegex);
      var matches = regex.test(field.value);
      if (!matches) {
        this.addError(field.getAttribute('name'), validation.message);
        valid = false;
        break;
      }
    }
  }
  return valid;
};

Form.prototype.addError = function(name, msg) {
  var field = this.layoutElement.querySelector('[name="' + name + '"]');
  field.dataset.valid = false;
  var errorEl = this.layoutElement.querySelector('[data-validation-for="' + name + '"]');
  field.setAttribute('aria-invalid', true);
  errorEl.dataset.valid = false;
  errorEl.textContent = msg;
  errorEl.style.display = 'block';
};

Form.prototype.removeError = function(name) {
  var field = this.layoutElement.querySelector('[name="' + name + '"]');
  field.dataset.valid = true;
  var errorEl = this.layoutElement.querySelector('[data-validation-for="' + name + '"]');
  field.removeAttribute('aria-invalid');
  errorEl.dataset.valid = true;
  errorEl.textContent = '';
  errorEl.style.display = 'none';
};

Form.prototype.removeAllErrors = function() {
  var els = this.layoutElement.querySelectorAll('[data-validation-for]');
  for (var i = 0; i < els.length; i++)
    this.removeError(els[i].attr('data-validation-for'));
};

Form.prototype.handleKeyup = function(e) {
  var index = e.target.dataset.index;
  if (e.keyCode === 13) {
    e.preventDefault();
    this.handleSubmit();
  } else if (e.target.dataset.valid === 'false') {
    var valid = this.validateField(this.fields[index], this.data[index]);
    if (valid)
      this.removeError(e.target.getAttribute('name'));
  }
};

Form.prototype.handleCancel = function() {
  this.cancelButton.classList.remove(inactiveClassName);
  this.cancelButton.classList.add(activeClassName);
  publish('enable-input');
  publish('send', {
    silent: true,
    text: 'cancel'
  });
};

Form.prototype.addEventListeners = function() {
  this.cancelButton.addEventListener('click', this.handleCancel.bind(this));
  this.submitButton.addEventListener('click', this.handleSubmit.bind(this));
  for (var i = 0; i < this.fields.length; i++) {
    var field = this.fields[i];
    field.addEventListener('keyup', this.handleKeyup.bind(this));
  }
};

Form.prototype.removeEventListeners = function() {
  this.cancelButton.removeEventListener('click', this.handleCancel.bind(this));
  this.cancelButton.setAttribute('disabled', true);
  this.submitButton.removeEventListener('click', this.handleSubmit.bind(this));
  this.submitButton.setAttribute('disabled', true);
  for (var i = 0; i < this.fields.length; i++) {
    var field = this.fields[i];
    field.removeEventListener('keyup', this.handleKeyup.bind(this));
    field.setAttribute('disabled', true);
  }

  this.subscribeSend.remove();
};

module.exports = formLayout;

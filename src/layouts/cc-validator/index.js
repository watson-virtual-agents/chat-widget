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
var subscribe = events.subscribe;
var publish = events.publish;
var utils = require('../../utils');
var validation = require('./validation');
var activeClassName = 'IBMChat-accent-colors';
var inactiveClassName = 'IBMChat-accent-colors-button';
var ns = 'IBMChat-creditcard';
var widgets = [];
var templates = {
  base: require('./templates/base.html')
};

var creditCardLayout = {
  init: function() {
    subscribe('layout:cc-validator', function(data) {
      var widget = new CreditCard(data);
      widgets[data.uuid] = widget;
    });
  }
};

function CreditCard(data) {
  this.init(data);
}

CreditCard.prototype.init = function(data) {
  this.data = data.message.layout.data || {};
  this.data.acceptedCards = this.data.types;
  this.uuid = data.uuid;
  this.parentElement = data.element;
  this.layoutElement = data.layoutElement;
  this.msgElement = data.msgElement;
  this.formData = {};
  this.drawForm();
  this.subscribeSend = subscribe('send', this.removeAllEventListeners.bind(this));
  publish('disable-input');
};

CreditCard.prototype.drawForm = function() {
  var text = templates.base;
  this.el = document.createElement('div');
  text = utils.compile(templates.base, {
    ns: ns,
    uuid: utils.getUUID()
  });
  this.el.innerHTML = text;
  this.layoutElement.appendChild(this.el);
  this.cancelButton = this.el.querySelector('.' + ns + '-cancel');
  this.submitButton = this.el.querySelector('.' + ns + '-submit');
  this.cancelButton.classList.add(inactiveClassName);
  this.submitButton.classList.add(inactiveClassName);
  this.formElements = {};
  this.fields = this.el.querySelectorAll('input');
  for (var i = 0; i < this.fields.length; i++) {
    var field = this.fields[i];
    var name = field.getAttribute('name');
    this.formElements[name] = field;
  }
  this.formElements['cc_full_name'].focus();
  this.addListeners();
};

CreditCard.prototype.addError = function(name, msg) {
  var field, errorElement;
  if (name === 'cc_exp_date') {
    field = this.formElements["cc_exp_date_month"];
    field.setAttribute('aria-invalid', true);
    field.dataset.valid = false;
    field = this.formElements["cc_exp_date_year"];
    field.setAttribute('aria-invalid', true);
    field.dataset.valid = false;
  } else {
    field = this.formElements[name];
    field.setAttribute('aria-invalid', true);
    field.dataset.valid = false;
  }
  errorElement = this.el.querySelector('[data-validation-for="' + name + '"]');
  errorElement.style.display = 'block';
  errorElement.dataset.valid = false;
  errorElement.textContent = msg;
};

CreditCard.prototype.removeError = function(name) {
  var field, errorElement;
  if (name === 'cc_exp_date') {
    field = this.formElements["cc_exp_date_month"];
    field.removeAttribute('aria-invalid');
    field.dataset.valid = true;
    field = this.formElements["cc_exp_date_year"];
    field.removeAttribute('aria-invalid');
    field.dataset.valid = true;
  } else {
    field = this.formElements[name];
    field.removeAttribute('aria-invalid');
    field.dataset.valid = true;
  }
  errorElement = this.el.querySelector('[data-validation-for="' + name + '"]');
  errorElement.style.display = 'none';
  errorElement.dataset.valid = true;
  errorElement.textContent = '';
};

CreditCard.prototype.validate_cc_full_name = function(valid) {
  if (this.formData.cc_full_name.trim().length === 0) {
    this.addError('cc_full_name', 'This field is required.');
    if (valid) this.formElements['cc_full_name'].focus();
    valid = false;
  } else {
    this.removeError('cc_full_name');
  }
  return valid;
};

CreditCard.prototype.validate_cc_number = function(valid) {
  var cc = validation.validateCard(this.data.acceptedCards, this.formData.cc_number, this.formElements.cc_number);
  if (!cc.valid) {
    this.addError('cc_number', cc.message);
    if (valid) this.formElements['cc_number'].focus();
    valid = false;
  } else {
    this.removeError('cc_number');
  }
  return valid;
};

CreditCard.prototype.validate_cc_exp_date = function(valid) {
  var exp = validation.validateExp(this.formData.cc_exp_date_month, this.formData.cc_exp_date_year);
  if (!exp.valid) {
    this.addError('cc_exp_date', exp.message);
    if (valid) this.formElements['cc_exp_date_month'].focus();
    valid = false;
  } else {
    this.removeError('cc_exp_date');
  }
  return valid;
};

CreditCard.prototype.validate_cc_code = function(valid) {
  var cvv = validation.validateCVV(this.formData.cc_code);
  if (!cvv.valid) {
    this.addError('cc_code', cvv.message);
    if (valid) this.formElements['cc_code'].focus();
    valid = false;
  } else {
    this.removeError('cc_code');
  }
  return valid;
};

CreditCard.prototype.validate = function() {
  var valid = true;
  valid = this.validate_cc_full_name(valid);
  valid = this.validate_cc_number(valid);
  valid = this.validate_cc_exp_date(valid);
  valid = this.validate_cc_code(valid);
  return valid;
};

CreditCard.prototype.preprocessFormData = function() {
  this.formData = {};
  for (var i = 0; i < this.fields.length; i++) {
    var field = this.fields[i];
    var name = field.getAttribute('name');
    // set month to 2 digit format
    if (name === 'cc_exp_date_month' && /^[1-9]$/.test(field.value))
      field.value = '0' + field.value;
    this.formData[name] = field.value;
  }
};

CreditCard.prototype.handleKeyup = function(e) {
  var el = e.target;
  var validation = {
    'cc_full_name': this.validate_cc_full_name,
    'cc_number': this.validate_cc_number,
    'cc_exp_date_month': this.validate_cc_exp_date,
    'cc_exp_date_year': this.validate_cc_exp_date,
    'cc_code': this.validate_cc_code
  };
  var name = el.getAttribute('name');
  if (e.keyCode === 13) {
    e.preventDefault();
    this.handleSubmit();
  } else if (el.dataset.valid == 'false' && typeof validation[name] === 'function') {
    this.formData[name] = el.value;
    validation[name].call(this, false);
  }
};

CreditCard.prototype.handleSubmit = function() {
  this.preprocessFormData();
  if (this.validate()) {
    var fd = this.formData;
    fd.cc_exp_date = fd.cc_exp_date_month + '/' + fd.cc_exp_date_year;
    fd.cc_last_four_digits = fd.cc_number.substr(fd.cc_number.length - 4);
    Object.keys(fd).map(function(key) {
      profile.set(key, fd[key]);
    });
    this.submitButton.classList.remove(inactiveClassName);
    this.submitButton.classList.add(activeClassName);
    publish('enable-input');
    publish('send', {
      silent: true,
      text: 'success'
    });
  }
};

CreditCard.prototype.handleCancel = function() {
  this.cancelButton.classList.remove(inactiveClassName);
  this.cancelButton.classList.add(activeClassName);
  publish('enable-input');
  publish('send', {
    silent: true,
    text: 'cancel'
  });
};

CreditCard.prototype.addListeners = function() {
  this.cancelButton.addEventListener('click', this.handleCancel.bind(this));
  this.submitButton.addEventListener('click', this.handleSubmit.bind(this));
  for (var i = 0; i < this.fields.length; i++)
    this.fields[i].addEventListener('keyup', this.handleKeyup.bind(this));
};

CreditCard.prototype.removeAllEventListeners = function() {
  this.cancelButton.removeEventListener('click', this.handleCancel.bind(this));
  this.cancelButton.setAttribute('disabled', true);
  this.submitButton.removeEventListener('click', this.handleSubmit.bind(this));
  this.submitButton.setAttribute('disabled', true);
  for (var j = 0; j < this.fields.length; j++) {
    var field = this.fields[j];
    field.removeEventListener('keyup', this.handleKeyup.bind(this));
    field.setAttribute('disabled', true);
  }
  this.subscribeSend.remove();
};

module.exports = creditCardLayout;

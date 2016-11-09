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

require('./styles.css');

var events = require('../../events');
var profile = require('../../profile');
var subscribe = events.subscribe;
var publish = events.publish;
var utils = require('../../utils');
var validation = require('./validation');
var activeClassName = 'IBMChat-accent-colors';
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
  this.drawForm();
  this.subscribeSend = subscribe('send', this.removeAllEventListeners.bind(this));
  publish('disable-input');
};

CreditCard.prototype.drawForm = function() {
  var text = templates.base;
  this.el = document.createElement('div');
  text = utils.compile(templates.base, {
    ns: ns
  });
  this.el.innerHTML = text;
  this.layoutElement.appendChild(this.el);
  this.cancelButton = this.el.querySelector('.' + ns + '-cancel');
  this.continueButton = this.el.querySelector('.' + ns + '-continue');
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

CreditCard.prototype.addListeners = function() {
  this.cancelButton.addEventListener('click', this.handleCancel.bind(this));
  this.continueButton.addEventListener('click', this.handleContinue.bind(this));
};

CreditCard.prototype.addError = function(name, msg) {
  var errorElement = this.el.querySelector('[data-validation-for="' + name + '"]');
  errorElement.style.display = 'block';
  errorElement.dataset.valid = false;
  errorElement.textContent = msg;
};

CreditCard.prototype.removeError = function(name) {
  var errorElement = this.el.querySelector('[data-validation-for="' + name + '"]');
  errorElement.style.display = 'none';
  errorElement.dataset.valid = true;
  errorElement.textContent = '';
};

CreditCard.prototype.validate = function() {
  var valid = true;

  if (this.formData.cc_full_name.length === 0) {
    this.addError('cc_full_name', 'This field is required.');
    if (valid) this.formElements['cc_full_name'].focus();
    valid = false;
  } else {
    this.removeError('cc_full_name');
  }

  var cc = validation.validateCard(this.data.acceptedCards, this.formData.cc_number);
  if (!cc.valid) {
    this.addError('cc_number', cc.message);
    if (valid) this.formElements['cc_number'].focus();
    valid = false;
  } else {
    this.removeError('cc_number');
  }

  var exp = validation.validateExp(this.formData.cc_exp_date_month, this.formData.cc_exp_date_year);
  if (!exp.valid) {
    this.addError('cc_exp_date', exp.message);
    if (valid) this.formElements['cc_exp_date_month'].focus();
    valid = false;
  } else {
    this.removeError('cc_exp_date');
  }

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

CreditCard.prototype.handleContinue = function() {
  this.preprocessFormData();
  if (this.validate()) {
    var fd = this.formData;
    fd.cc_exp_date = fd.cc_exp_date_month + '/' + fd.cc_exp_date_year;
    fd.cc_last_four_digits = fd.cc_number.substr(fd.cc_number.length - 4);
    Object.keys(fd).map(function(key) {
      profile.set(key, fd[key]);
    });
    publish('enable-input');
    publish('send', {
      silent: true,
      text: 'success'
    });
  }
};

CreditCard.prototype.handleCancel = function() {
  this.cancelButton.classList.add(activeClassName);
  publish('enable-input');
  publish('send', {
    silent: true,
    text: 'cancel'
  });
};

CreditCard.prototype.removeAllEventListeners = function() {
  this.cancelButton.removeEventListener('click', this.handleCancel.bind(this));
  this.cancelButton.setAttribute('disabled', true);
  this.continueButton.removeEventListener('click', this.handleContinue.bind(this));
  this.continueButton.setAttribute('disabled', true);
  for (var j = 0; j < this.fields.length; j++)
    this.fields[j].setAttribute('disabled', true);

  this.subscribeSend.remove();
};

module.exports = creditCardLayout;

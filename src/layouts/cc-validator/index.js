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
var state = require('../../state');
var subscribe = events.subscribe;
var publish = events.publish;
var utils = require('../../utils');
var validation = require('./validation');
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
	this.data = data.data || {};
	//this.data.acceptedCards = ['visa'];
	this.uuid = data.uuid;
	this.parentElement = data.element;
	this.layoutElement = data.layoutElement;
	this.msgElement = data.msgElement;
	this.drawForm();
};

CreditCard.prototype.drawForm = function() {
	var text = templates.base;
	this.el = document.createElement('div');
	text = utils.replaceAll(text, '${ns}', ns);
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
	this.addListeners();
};

CreditCard.prototype.addListeners = function() {
	this.cancelButton.addEventListener('click', this.handleCancel.bind(this));
	this.continueButton.addEventListener('click', this.handleContinue.bind(this));
};

CreditCard.prototype.addError = function(name, msg) {
	var errorElement = this.el.querySelector('[data-validation-for="' + name + '"]');
	errorElement.dataset.valid = false;
	errorElement.textContent = msg;
};

CreditCard.prototype.removeError = function(name) {
	var errorElement = this.el.querySelector('[data-validation-for="' + name + '"]');
	errorElement.dataset.valid = true;
	errorElement.textContent = '';
};

CreditCard.prototype.validate = function() {
	var valid = true;
	this.formData = {};
	for (var i = 0; i < this.fields.length; i++) {
		var field = this.fields[i];
		var name = field.getAttribute('name');
		this.formData[name] = field.value;
	}

	if (this.formData.cc_full_name.length === 0) {
		this.addError('cc_full_name', 'This field is required.');
		valid = false;
	} else {
		this.removeError('cc_full_name');
	}

	var cc = validation.validateCard(this.data.acceptedCards, this.formData.cc_number);
	if (!cc.valid) {
		this.addError('cc_number', cc.message);
		valid = false;
	} else {
		this.removeError('cc_full_name');
	}

	var exp = validation.validateExp(this.formData.cc_exp_date_month, this.formData.cc_exp_date_year);
	if (!exp.valid) {
		this.addError('cc_exp_date', exp.message);
		valid = false;
	} else {
		this.removeError('cc_exp_date');
	}

	var cvv = validation.validateCVV(this.formData.cc_code);
	if (!cvv.valid) {
		this.addError('cc_code', cvv.message);
		valid = false;
	} else {
		this.removeError('cc_code');
	}
	return valid;
};

CreditCard.prototype.handleContinue = function() {
	if (this.validate()) {
		this.formData.cc_exp_date = this.formData.cc_exp_date_month + '/' + this.formData.cc_exp_date_year;
		state.setProfile({
			selectedCard: this.formData
		});
		publish('send', {
			silent: true,
			text: 'success'
		});
	}
};

CreditCard.prototype.handleCancel = function() {
	publish('send', {
		silent: true,
		text: 'cancel'
	});
};

CreditCard.prototype.removeAllEventListeners = function() {
	this.cancelButton.removeEventListener('click', this.handleCancel.bind(this));
	this.cancelButton.setAttribute('disabled', true);
	this.submitButton.removeEventListener('click', this.handleSubmit.bind(this));
	this.submitButton.setAttribute('disabled', true);
	for (var j = 0; j < this.fields.length; j++)
		this.fields[j].setAttribute('disabled', true);

	this.subscribeSend.remove();
};

module.exports = creditCardLayout;

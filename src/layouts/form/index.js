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
var utils = require('../../utils');
var subscribe = events.subscribe;
var publish = events.publish;
var ns = 'IBMChat-form';
var activeClassName = 'IBMChat-accent-colors';
var inactiveClassName = 'IBMChat-secondary-colors';
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
	base.innerHTML = templates.base;
	formFields = base.querySelector('.IBMChat-form-fields');
	this.data.forEach(function(datum) {
		var field = document.createElement('div');
		field.innerHTML = utils.compile(templates.field, {
			label: datum.label || '',
			name: datum.name,
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
			profile.set(this.fields[i].getAttribute('name'), this.fields[i].value);
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
		if (this.data[i].required === 'true') {
			var fieldIsValid = this.validateField(this.fields[i], this.data[i]);
			allFieldsAreValid = allFieldsAreValid && fieldIsValid;
		}
	}
	return allFieldsAreValid;
};

Form.prototype.validateField = function(field, datum) {
	var valid = true;
	if (!field.value || field.value.trim().length === 0) {
		this.addError(field.getAttribute('name'), 'This field is required.');
		valid = false;
	} else if (datum.validations && datum.validations.length !== 0) {
		for (var i = 0; i < datum.validations.length; i++) {
			var validation = datum.validations[i];
			var validationRegex = validation.regex;
			//TODO: handle this better
			if (validation.regex.indexOf('^(') !== 0)
				validationRegex = '^(' + validation.regex + ')$';
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
	var el = this.layoutElement.querySelector('[data-validation-for="' + name + '"]');
	el.dataset.valid = false;
	el.textContent = msg;
	el.style.display = 'block';
};

Form.prototype.removeError = function(name) {
	var el = this.layoutElement.querySelector('[data-validation-for="' + name + '"]');
	el.dataset.valid = true;
	el.textContent = '';
	el.style.display = 'none';
};

Form.prototype.removeAllErrors = function() {
	var els = this.layoutElement.querySelectorAll('[data-validation-for]');
	for (var i = 0; i < els.length; i++)
		this.removeError(els[i].attr('data-validation-for'));
};

Form.prototype.handleEnter = function(e) {
	if (e.keyCode === 13)
		this.handleSubmit();
};

Form.prototype.handleInput = function(e) {
	var name = e.target.name;
	this.removeError(name);
};

Form.prototype.handleCancel = function() {
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
		field.addEventListener('keypress', this.handleEnter.bind(this));
		field.addEventListener('input', this.handleInput.bind(this));
	}
};

Form.prototype.removeEventListeners = function() {
	this.cancelButton.removeEventListener('click', this.handleCancel.bind(this));
	this.cancelButton.setAttribute('disabled', true);
	this.submitButton.removeEventListener('click', this.handleSubmit.bind(this));
	this.submitButton.setAttribute('disabled', true);
	for (var i = 0; i < this.fields.length; i++) {
		var field = this.fields[i];
		field.removeEventListener('keypress', this.handleEnter.bind(this));
		field.removeEventListener('input', this.handleInput.bind(this));
		field.setAttribute('disabled', true);
	}

	this.subscribeSend.remove();
};

module.exports = formLayout;

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
var activeClassName = 'IBMChat-accent-colors';
var inactiveClassName = 'IBMChat-secondary-colors';
var utils = require('../../utils');
var ns = 'IBMChat-form';
var widgets = [];
var templates = {
	base: require('./templates/base.html'),
	field: require('./templates/field.html')
};

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
	this.subscribeSend = subscribe('send', this.removeAllEventListeners.bind(this));
	publish('disable-input');
};

Form.prototype.drawForm = function() {
	var base = document.createElement('div');
	var formFields;
	base.innerHTML = templates.base;
	formFields = base.querySelector('.IBMChat-form-fields');
	for (var i = 0; i < this.data.length; i++) {
		var field = document.createElement('div');
		var fieldTxt = templates.field;
		fieldTxt = utils.replaceAll(fieldTxt, '${label}', this.data[i].label || '');
		fieldTxt = utils.replaceAll(fieldTxt, '${name}', this.data[i].name);
		fieldTxt = utils.replaceAll(fieldTxt, '${value}', ''); //for future use
		field.innerHTML = fieldTxt;
		field.className = ns + '-fields-row';
		formFields.appendChild(field);
	}
	this.fields = formFields.querySelectorAll('input');
	this.submitButton = base.querySelector('.' + ns + '-submit');
	this.cancelButton = base.querySelector('.' + ns + '-cancel');
	this.submitButton.classList.add(activeClassName);
	this.cancelButton.classList.add(inactiveClassName);
	this.layoutElement.appendChild(base);
	this.fields[0].focus();
	this.addListeners();
};

Form.prototype.handleSubmit = function() {
	if (this.validateFields() === true) {
		for (var i = 0; i < this.fields.length; i++) {
			var field = this.fields[i];
			profile.set(field.getAttribute('name'), field.value);
		}
		publish('send', {
			silent: true,
			text: 'success'
		});
		publish('enable-input');
	}
};

Form.prototype.validateFields = function() {
	var valid = true;
	for (var i = 0; i < this.data.length; i++) {
		if (this.data[i].required && this.data[i].required != 'false') {
			if (!this.fields[i].value || this.fields[i].value.length === 0) {
				this.showError(this.fields[i].getAttribute('name'), 'This field is required.');
				valid = false;
			}
		}
	}
	return valid;
};

Form.prototype.showError = function(name, error) {
	var el = this.layoutElement.querySelector('[data-name="' + name + '"]');
	el.textContent = error;
	el.style.display = 'block';
};

Form.prototype.hideErrors = function() {
	var els = this.layoutElement.querySelectorAll('[data-name]');
	for (var i = 0; i < els.length; i++) {
		els[i].textContent = '';
		els[i].style.display = 'none';
	}
};

Form.prototype.handleCancel = function() {
	publish('send', {
		silent: true,
		text: 'cancel'
	});
	publish('enable-input');
};

Form.prototype.addListeners = function() {
	this.cancelButton.addEventListener('click', this.handleCancel.bind(this));
	this.submitButton.addEventListener('click', this.handleSubmit.bind(this));
};

Form.prototype.removeAllEventListeners = function() {
	this.cancelButton.removeEventListener('click', this.handleCancel.bind(this));
	this.cancelButton.setAttribute('disabled', true);
	this.submitButton.removeEventListener('click', this.handleSubmit.bind(this));
	this.submitButton.setAttribute('disabled', true);
	for (var j = 0; j < this.fields.length; j++)
		this.fields[j].setAttribute('disabled', true);
	this.subscribeSend.remove();
};

module.exports = formLayout;

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

var state = require('../../state');
var utils = require('../../utils');

function enableInput() {
	var current = state.getState();
	var disableInput = (current.disableInput) ? (current.disableInput - 1) :0;
	state.setState({ disableInput: disableInput });
	if (!disableInput)
		current.input.removeAttribute('disabled');
}

function disableInput() {
	var current = state.getState();
	var disableInput = (current.disableInput) ? (current.disableInput + 1) : 1;
	state.setState({ disableInput: disableInput });
	current.input.setAttribute('disabled', 'disabled');
}

function enableLoadingInput() {
	var current = state.getState();
	var loading = (current.loading) ? (current.loading + 1) : 1;
	state.setState({
		loading: loading
	});
	utils.spinner.show(current.loader);
}

function disableLoadingInput() {
	var current = state.getState();
	var loading = (current.loading) ? (current.loading - 1) : 0;
	state.setState({
		loading: loading
	});
	if (loading === 0)
		utils.spinner.hide(current.loader);
}

function focusInput() {
	var current = state.getState();
	current.input.focus();
}

function silenceUser() {
	var current = state.getState();
	var silenceUser = (current.silenceUser) ? (current.silenceUser + 1) :1;
	state.setState({ silenceUser: silenceUser });
	current.input.setAttribute('silenceUser', 'enabled');
}

function unsilenceUser() {
	var current = state.getState();
	var silenceUser = (current.silenceUser) ? (current.silenceUser - 1) :0;
	state.setState({ silenceUser: silenceUser });
	if (!silenceUser)
		current.input.removeAttribute('silenceUser');
}

module.exports = {
	enableInput: enableInput,
	disableInput: disableInput,
	enableLoadingInput: enableLoadingInput,
	disableLoadingInput: disableLoadingInput,
	focusInput: focusInput,
	silenceUser: silenceUser,
	unsilenceUser: unsilenceUser
};

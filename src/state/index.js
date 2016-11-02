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

var states = [];
var state = {};
var assign = require('lodash/assign');

function get() {
	return state;
}
function destroy() {
	state = {};
	set({});
}

function set(updated) {
	state = assign({}, state, updated);
	if (state.DEBUG) {
		states.push(state);
		console.log('STATE HISTORY: ', states);
		console.log('NEW STATE: ', state);
	}
}

module.exports ={
	get: get,
	set: set,
	destroy: destroy,
	getState: get,
	setState: set,
	destroyState: destroy
};

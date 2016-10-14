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

var events = require('../../events');
var state = require('../../state');

function error(err) {
	console.error(err);
	var current = state.getState();
	var text = 'I am sorry, I am having difficulties.';
	if (current.hadError)
		text += ' Please try again later.';
	else
		text += ' To speak with a human agent, type "agent".';
	if (err.status)
		text += ' (error: ' + err.status + ')';
	state.setState({
		hadError: true
	});
	events.publish('receive', text);
}

module.exports = error;

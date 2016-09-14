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

var statusMap = {
	400: 'A bad request was made, somewhere. (400)',
	401: 'This request is unauthorized. (401)',
	403: 'This request is forbidden. (403)',
	404: 'The server is missing. (404)',
	405: 'Method not allowed. (405)',
	408: 'We took too long to respond, something must be wrong. (408)',
	412: 'The was an error on the server. (412)',
	500: 'The was an error on the server. (500)',
	501: 'The was an error on the server. (501)',
	502: 'The was an error on the server. (502)',
	503: 'The was an error on the server. (503)',
	504: 'The was an error on the server. (504)'
};

function generateErrorMessage(error) {
	if (typeof error === 'string')
		return error;
	else if (error.status && statusMap[error.status] !== undefined)
		return statusMap[error.status];
	else if (error.timeout)
		return 'The request took too long.';
	else
		return JSON.stringify(error);
}

function error(err) {
	console.error(arguments);
	console.error(generateErrorMessage(err));
	events.publish('send', {
		text: 'agent',
		silent: true
	});
}

module.exports = error;

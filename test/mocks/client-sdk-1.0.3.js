/**
* (C) Copyright IBM Corp. 2016. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License"); you may not
* use this file except in compliance with the License. You may obtain a copy of
* the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
* WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
* License for the specific language governing permissions and limitations under
* the License.
*/

if ( typeof Promise === 'undefined' ) require('es6-promise').polyfill();

var assign = require('lodash/assign');
var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
var profile = {};
var storage = {
	set: function(key, value) {
		profile[key] = value;
		return storage;
	},
	get: function(key) {
		return profile[key] || '';
	},
	has: function(key) {
		return (profile[key] !== undefined);
	},
	clear: function() {
		profile = {};
		return storage;
	},
	delete: function(key) {
		delete profile[key];
		return storage;
	},
	forEach: function(cb, context) {
		Object.keys(profile).forEach(function(key) {
			if (context)
				cb(key, profile[key]).bind(context);
			else
				cb(key, profile[key]);
		});
		return storage;
	}
};

var mock = new MockAdapter(axios);

var options = {
	baseURL: 'https://dev.api.ibm.com/virtualagent/development/api/v1/',
	timeout: 30 * 1000,
	userID: null,
	withCredentials: false,
	XIBMClientID: false,
	XIBMClientSecret: false
};

var api = axios.create( options );

var profileDataRe = /\|&(.*?)\|/g;
var insertUserProfileData = function(msg) {
	for (var i = 0; i < msg.text.length; i++) {
		var matches = (msg.text[i].match(profileDataRe) || []);
		msg.text[i] = matches.reduce(function(result, prof) {
			const name = prof.slice( 2, -1 );
			const value = storage.get(name);
			return result.replace( prof, value );
		}, msg.text[i]);
	}
	return msg;
};

/**
 * @namespace SDK
 */

var SDK = module.exports = {
	configure: function( config ) {
		assign( options, config );
		api = axios.create({
			baseURL: options.baseURL,
			timeout: options.timeout,
			withCredentials: options.withCredentials,
			headers: (options.XIBMClientID && options.XIBMClientSecret) ? {
				'X-IBM-Client-Id': options.XIBMClientID,
				'X-IBM-Client-Secret': options.XIBMClientSecret
			} : {}
		});
		return SDK;
	},
	start: function( botID ) {
		var requestID = uuid();
		var data = { userID: options.userID };
		var endpoint = '/bots/'+ botID +'/dialogs';
		var config = { 'headers': { 'X-Request-ID': requestID } };
		return api
			.post( endpoint, data, config )
			.then( function( res ) {
				return {
					chatID: res.data.dialog_id,
					message: insertUserProfileData(res.data.message)
				};
			})['catch']( function( err ) {
				console.error('Request failed:', requestID );
				onError( err );
			});
	},
	send: function( botID, chatID, message ) {
		var requestID = uuid();
		var data = { message: message, userID: options.userID };
		var endpoint = '/bots/'+ botID +'/dialogs/'+ chatID +'/messages';
		var query = 'message='+ encodeURIComponent( message );
		var config = { 'headers': { 'X-Request-ID': requestID } };
		return api
			.post( endpoint +'?'+ query, data, config )
			.then( function( res ) {
				return {
					message: insertUserProfileData(res.data.message)
				};
			})['catch']( function( err ) {
				console.error('Request failed:', requestID );
				onError( err );
			});
	},
	profile: {
		get: storage.get,
		set: storage.set,
		has: storage.has,
		clear: storage.clear,
		delete: storage.delete,
		forEach: storage.forEach
	},
	mock: {
		init: function(botID, message) {
			var chatID = uuid();
			var response = {
				dialog_id: chatID,
				message: message
			};
			SDK.profile.set('chatID', chatID);
			SDK.profile.set('botID', botID);
			axios.onPost('/bots/'+ botID +'/dialogs').replyOnce(200, response);
		},
		message: function(input, output) {
			var chatID = SDK.profile.get('chatID');
			var botID = SDK.profile.get('botID');
			var requestID = uuid();
			var data = { message: input, userID: undefined };
			var endpoint = '/bots/'+ botID +'/dialogs/'+ chatID +'/messages';
			var query = 'message='+ encodeURIComponent( input );
			var config = { 'headers': { 'X-Request-ID': requestID } };
			axios.onPost(endpoint +'?'+ query, data, config).replyOnce(200, output);
		}
	}
};

var uuid = function( ) {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
		return v.toString(16);
	});
};

var onError = function( err ) {
	if ( !err.status )
		throw err;
	var status = err.status;
	var statusText = err.statusText;
	var error = new Error( statusText );
	error.status = status;
	throw error;
};

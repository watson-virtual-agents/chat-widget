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

// Test results are not automatically reported to Sauce, so we must
// do it ourselves once they finish running.
// (based on https://gist.github.com/mikberg/ce463e09d6adf46f987c)

var Axios = require('axios');

module.exports = function sauce(client, callback) {
  var currentTest = client.currentTest;
  var username = client.options.username;
  var sessionId = client.capabilities['webdriver.remote.sessionid'];
  var accessKey = client.options.accessKey;

  if (!username || !accessKey || !sessionId) {
    console.log(client);
    return callback();
  }

  var passed = currentTest.results.passed === currentTest.results.tests;

  var data = JSON.stringify({ passed });

  var axios = Axios.create({
    baseURL: 'https://saucelabs.com',
    auth: {
      username: username,
      password: accessKey
    },
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  });

  axios.put("/rest/v1/" + username + "/jobs/" + sessionId, data)
    .then(function(res){
      console.log('Response: ', res.statusText);
    })
    .catch(function(err){
      console.error(err);
    });

  callback();
};

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

// based on https://gist.github.com/mikberg/ce463e09d6adf46f987c

/* eslint no-console:0 */
var https = require('https');

module.exports = function sauce(client, callback) {
  var currentTest = client.currentTest;
  var username = client.options.username;
  var sessionId = client.capabilities['webdriver.remote.sessionid'];
  var accessKey = client.options.accessKey;

  console.log("client.options  ---> " + JSON.stringify(client.options));
  console.log("client.currentTest  ---> " + JSON.stringify(client.currentTest));
  console.log("client.capabilities  ---> " + JSON.stringify(client.capabilities));

  if (!username || !accessKey || !sessionId) {
    console.log(client);
    console.log('No username, accessKey or sessionId');
    return callback();
  }

  var passed = currentTest.results.passed === currentTest.results.tests;

  var data = JSON.stringify({
    passed,
  });

  var requestPath = `/rest/v1/${username}/jobs/${sessionId}`;

  function responseCallback(res) {
    res.setEncoding('utf8');
    console.log('Response: ', res.statusCode, JSON.stringify(res.headers));
    res.on('data', function onData(chunk) {
      console.log('BODY: ' + chunk);
    });
    res.on('end', function onEnd() {
      console.info('Finished updating saucelabs');
      callback();
    });
  }

  try {
    console.log('Updating saucelabs', requestPath);

    var req = https.request({
      hostname: 'saucelabs.com',
      path: requestPath,
      method: 'PUT',
      auth: `${username}:${accessKey}`,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
      },
    }, responseCallback);

    req.on('error', function onError(e) {
      console.log('problem with request: ' + e.message);
    });
    req.write(data);
    req.end();
  } catch (error) {
    console.log('Error', error);
    callback();
  }
};

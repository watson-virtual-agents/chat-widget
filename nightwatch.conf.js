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

var sauce = require('./test/selenium/sauce');

var TRAVIS_JOB_NUMBER = process.env.TRAVIS_JOB_NUMBER;
var IS_TRAVIS = process.env.TRAVIS;

var callSauce = function(browser, cb) {
  if (IS_TRAVIS) {
    sauce(browser, cb);
  }
};

module.exports = {
  "src_folders": [
    "test/selenium/specs"
  ],
  "page_objects_path": "test/selenium/pageobjects",
  "output_folder": "./reports",
  "selenium": {
    "start_process": true,
    "server_path": "./bin/selenium.jar",
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver": "./bin/chromedriver"
    }
  },
  "test_settings": {
    "default": {
      "screenshots": {
        "enabled": true,
        "path": './test/selenium/errorShots'
      },
      "globals": {
        "waitForConditionTimeout": 10000
      },
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    },
    "chrome": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true
      }
    },
    "travis" : {
      "selenium_host" : "ondemand.saucelabs.com",
      "selenium_port" : 80,
      "username" : "${SAUCE_USERNAME}",
      "access_key" : "${SAUCE_ACCESS_KEY}",
      "use_ssl" : false,
      "silent": false,
      "output" : true,
      "screenshots": {
        "enabled": true,
        "path": './test/selenium/errorShots/travis'
      },
      "globals": {
        "waitForConditionTimeout": 20000,
        "afterEach": callSauce
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "databaseEnabled": true,
        "locationContextEnabled": true,
        "applicationCacheEnabled": true,
        "browserConnectionEnabled": true,
        "webStorageEnabled": true,
        "acceptSslCerts": true,
        "rotatable": true,
        "nativeEvents": true,
        "chromeOptions": {
          "args": ["disable-web-security", "ignore-certificate-errors"]
        },    
        "build": `build-${TRAVIS_JOB_NUMBER}`,
        "tunnel-identifier": TRAVIS_JOB_NUMBER
      },
      "selenium" : {
        "start_process" : false
      }
    }
  }
};

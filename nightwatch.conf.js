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

var sauce = require('./test/selenium/sauce');

var TRAVIS_JOB_NUMBER = process.env.TRAVIS_JOB_NUMBER;
var IS_TRAVIS = process.env.TRAVIS;

var callSauce = function(browser, cb) {
  if (IS_TRAVIS)
    sauce(browser, cb);
};

module.exports = {
  "src_folders": [
    "test/selenium/specs"
  ],
  "page_objects_path": "test/selenium/pageobjects",
  "output_folder": "./reports/selenium",
  "selenium": {
    "start_process": true,
    "server_path": "./bin/selenium.jar",
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver": "./bin/chromedriver",
      "webdriver.gecko.driver": "./bin/geckodriver",
      "webdriver.ie.driver": "./node_modules/iedriver/lib/iedriver/IEDriverServer.exe"
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

    "travis-chrome": {
      "selenium_host": "ondemand.saucelabs.com",
      "selenium_port": 80,
      "username": "${SAUCE_USERNAME}",
      "access_key": "${SAUCE_ACCESS_KEY}",
      "use_ssl": false,
      "startConnect": false,
      "output": true,
      "screenshots": {
        "enabled": true,
        "path": './test/selenium/errorShots/travis'
      },
      "globals": {
        "waitForConditionTimeout": 30000,
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
        "build": "build-" + TRAVIS_JOB_NUMBER,
        "tunnel-identifier": TRAVIS_JOB_NUMBER
      },
      "selenium": {
        "start_process": false
      }
    },

    "travis-firefox": {
      "selenium_host": "ondemand.saucelabs.com",
      "selenium_port": 80,
      "username": "${SAUCE_USERNAME}",
      "access_key": "${SAUCE_ACCESS_KEY}",
      "use_ssl": false,
      "startConnect": false,
      "output": true,
      "screenshots": {
        "enabled": true,
        "path": './test/selenium/errorShots/travis/firefox'
      },
      "globals": {
        "waitForConditionTimeout": 30000,
        "afterEach": callSauce
      },
      "desiredCapabilities": {
        "browserName": "firefox",
        "javascriptEnabled": true,
        "databaseEnabled": true,
        "locationContextEnabled": true,
        "applicationCacheEnabled": true,
        "browserConnectionEnabled": true,
        "webStorageEnabled": true,
        "acceptSslCerts": true,
        "rotatable": true,
        "nativeEvents": true,
        "build": "build-" + TRAVIS_JOB_NUMBER,
        "tunnel-identifier": TRAVIS_JOB_NUMBER
      },
      "selenium": {
        "start_process": false
      }
    },

    "travis-ie11": {
      "selenium_host": "ondemand.saucelabs.com",
      "selenium_port": 80,
      "username": "${SAUCE_USERNAME}",
      "access_key": "${SAUCE_ACCESS_KEY}",
      "use_ssl": false,
      "startConnect": false,
      "output": true,
      "screenshots": {
        "enabled": true,
        "path": './test/selenium/errorShots/travis/edge'
      },
      "globals": {
        "waitForConditionTimeout": 30000,
        "afterEach": callSauce
      },
      "desiredCapabilities": {
        "browserName": "internet explorer",
        "version": "11",
        "platform": "WIN10",
        "javascriptEnabled": true,
        "databaseEnabled": true,
        "locationContextEnabled": true,
        "applicationCacheEnabled": true,
        "browserConnectionEnabled": true,
        "webStorageEnabled": true,
        "acceptSslCerts": true,
        "rotatable": true,
        "nativeEvents": true,
        "build": "build-" + TRAVIS_JOB_NUMBER,
        "tunnel-identifier": TRAVIS_JOB_NUMBER
      },
      "selenium": {
        "start_process": false
      }
    },

    // "travis-ipad2": {
    //   "selenium_host": "ondemand.saucelabs.com",
    //   "selenium_port": 80,
    //   "username": "${SAUCE_USERNAME}",
    //   "access_key": "${SAUCE_ACCESS_KEY}",
    //   "use_ssl": false,
    //   "startConnect": false,
    //   "output": true,
    //   "screenshots": {
    //     "enabled": true,
    //     "path": './test/selenium/errorShots/travis/ipad2'
    //   },
    //   "globals": {
    //     "waitForConditionTimeout": 30000,
    //     "afterEach": callSauce
    //   },
    //   "desiredCapabilities": {
    //     "browserName": "Safari",
    //     "platformName": "iOS",
    //     "appiumVersion": "1.6.1",
    //     "deviceName": "iPad Retina Simulator",
    //     "deviceOrientation": "portrait",
    //     "platformVersion": "10.0",
    //     "build": "build-" + TRAVIS_JOB_NUMBER,
    //     "tunnel-identifier": TRAVIS_JOB_NUMBER
    //   },
    //   "selenium": {
    //     "start_process": false
    //   }
    // }

  }
};

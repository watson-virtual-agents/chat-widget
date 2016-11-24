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
    "saucelabs" : {
      "selenium_host" : "ondemand.saucelabs.com",
      "selenium_port" : 80,
      "username" : "${SAUCE_USERNAME}",
      "access_key" : "${SAUCE_ACCESS_KEY}",
      "use_ssl" : false,
      "silent" : true,
      "output" : true,
      "screenshots": {
        "enabled": true,
        "path": './test/selenium/errorShots/travis'
      },
      "desiredCapabilities": {
        // "browserName": "firefox",
        "browserName": "chrome",
        "javascriptEnabled": true
      },
      "selenium" : {
        "start_process" : false
      }
    }

  }
};

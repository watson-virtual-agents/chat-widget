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

/* eslint-disable */
var assert = require('assert');

describe('Visit IBM Chat Page', function() {
  it('should have the right title', function() {
    browser.url('http://localhost:3300');
    var title = browser.getTitle();
    assert.equal(title, 'IBM Watson Virtual Agent Chat Widget Demo');
  });
});

describe('Destroy Chat Widget', function() {
  it('should have empty ibm_el', function() {
    browser.execute(function() {
      window.IBMChat.destroy();
    });
    browser.getHTML('#ibm_el', false, function(html){
      assert.equal(html, '');
    });
  });
});

describe('Create Chat Widget', function() {
  it('should create a new Chat Widget', function() {
    browser.execute(function() {
      window.IBMChat.init({
        el: 'ibm_el',
        baseURL: 'http://localhost:3201',
        botID: 77
      });
    });
    browser.getHTML('#ibm_el', false, function(html){
      assert.notEqual(html, '');
    });
  });
});
/* eslint-enable */

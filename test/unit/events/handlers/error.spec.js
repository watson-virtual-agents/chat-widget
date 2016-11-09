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

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var rewire = require('rewire');
chai.use(sinonChai);
var expect = chai.expect;

var error = rewire('../../../../src/events/handlers/error');
var state = require('../../../../src/state');
var events = rewire('../../../../src/events');

describe('error handler', function() {
  var consoleErrStub;
  
  beforeEach(function() {
    consoleErrStub = sinon.stub(console, 'error');
  });

  describe('#default()', function() {
    it('should publish an error message', function() {
      events.publish = sinon.spy();
      error.__set__("events", events);

      error.default("mock error message");

      expect(state.getState().hadError).to.be.true;
      expect(events.publish.calledOnce);
      expect(events.publish.firstCall.args[0]).to.equal("receive");
      expect(events.publish.firstCall.args[1]).to.be.a("string");
    });
  });

  describe('#tryIt()', function() {
    it('should display an error message', function() {
      events.publish = sinon.spy();
      error.__set__("events", events);

      error.default("mock error message");

      expect(state.getState().hadError).to.be.true;
      expect(events.publish.calledOnce);
      expect(events.publish.firstCall.args[0]).to.equal("receive");
      expect(events.publish.firstCall.args[1]).to.be.a("string");
    });
  });
  
  afterEach(function() {
    // remove stub and restore console.error's behavior
    consoleErrStub.restore();
  });

});
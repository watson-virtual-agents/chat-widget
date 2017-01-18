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

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var rewire = require('rewire');
var expect = chai.expect;
chai.use(sinonChai);

var state = rewire('../../../src/state');

describe('state', function() {
  var consoleLogStub;
  var stateMock1 = { DEBUG: true };
  var stateMock2 = { DEBUG: true, active: true };

  beforeEach(function() {
    consoleLogStub = sinon.stub(console, 'log');
  });

  describe('#get()', function() {
    it('should get the current state', function() {
      state.set(stateMock1);

      expect(state.get()).to.eql(stateMock1);
    });
  });

  describe('#set()', function() {
    it('should set a new current state', function() {
      var statesMock = [];
      state.__set__('state', stateMock1);
      state.__set__('states', statesMock);

      state.set({ active: true });

      expect(state.get()).to.eql(stateMock2);
      expect(statesMock).to.eql([stateMock2]);
    });
  });

  describe('#destroy()', function() {
    it('should destroy all state history', function() {
      var statesMock = [stateMock1, stateMock2];
      state.__set__('state', stateMock1);
      state.__set__('states', statesMock);

      state.destroy();

      expect(state.get()).to.eql({ });
      expect(statesMock).to.eql([stateMock1, stateMock2]);
    });
  });


  describe('API', function() {
    it('should have the expected API', function() {
      expect(state).itself.to.respondTo('get');
      expect(state).itself.to.respondTo('set');
      expect(state).itself.to.respondTo('destroy');
    });
  });

  afterEach(function() {
    consoleLogStub.restore();
  });
});

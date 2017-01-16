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
chai.use(sinonChai);
var expect = chai.expect;

var input = rewire('../../../../src/events/handlers/input');
describe('input handler', function() {
  var stateMock, inputEl;

  beforeEach(function() {
    inputEl = {
      focus: sinon.stub(),
      removeAttribute: sinon.stub(),
      setAttribute: sinon.stub()
    };
  });

  describe('#focusInput()', function() {
    it('should set focus to input element', function() {
      stateMock = {
        get: function() {
          return {
            input: inputEl
          };
        },
        set: function() {}
      };
      input.__set__('state', stateMock);

      input.focusInput();

      expect(inputEl.focus.calledOnce);
      expect(inputEl.focus.getCalls(0).args).to.be.empty;
    });
  });

  describe('#enableInput()', function() {
    it('should enable the input box', function() {
      stateMock = {
        get: function() {
          return {
            disableInput: 0,
            input: inputEl
          };
        },
        set: function() {}
      };
      input.__set__('state', stateMock);

      input.enableInput();

      expect(inputEl.removeAttribute.calledOnce);
      expect(inputEl.removeAttribute.calledWithExactly('disabled'));
    });
  });

  describe('#disableInput()', function() {
    it('should disable the input box', function() {
      stateMock = {
        get: function() {
          return {
            disableInput: 0,
            input: inputEl
          };
        },
        set: function() {}
      };
      input.__set__('state', stateMock);

      input.disableInput();

      expect(inputEl.setAttribute.calledOnce);
      expect(inputEl.setAttribute.calledWithExactly('disabled', 'disabled'));
    });
  });

  afterEach(function() {
    // reset stubs
    inputEl.focus.reset();
    inputEl.removeAttribute.reset();
    inputEl.setAttribute.reset();
  });

});

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
var assign = require('lodash/assign');
chai.use(sinonChai);
var expect = chai.expect;
var sinonStubPromise = require('sinon-stub-promise');
sinonStubPromise(sinon);

var send = rewire('../../../../src/events/handlers/send');

describe('send handler', function() {
  var sendPromise;

  beforeEach(function() {
    sendPromise = sinon.stub().returnsPromise();
  });

  describe('#send()', function() {
    it('should not deliver empty or invalid messages', function() {
      var sendStub = sinon.stub();
      var BotSDKStub = {
        send: function() {
          return sendStub;
        }
      };
      send.__set__('BotSDK', BotSDKStub);
      
      send(undefined);
      send({ });
      send({ text: '' });
      send({ text: null });
      
      expect(sendStub.callCount).to.equal(0);
    });

    it('should deliver valid messages', function() {
      var botID = 'botID';
      var chatID = 'chatID';
      var data = { text: 'update address' };
      var stateStub = {
        current: {
          botID: botID,
          chatID: chatID,
          inProgress: false,
          sendQueue: [],
          root: {
            querySelector: function() {
              return sinon.stub();
            },
          },
          chatHolder: {
            innerHTML: sinon.stub(),
            querySelector: function() {
              return sinon.stub();
            },
          },
          handleInput: {
            default: true
          }
        },
        getState: function() {
          return this.current;
        },
        setState: function(updated) {
          this.current = assign({}, this.current, updated);
        }
      };
      send.__set__('state', stateStub);
      send.__set__('BotSDK', { send: sendPromise });


      send(data);
      
      expect(sendPromise.callCount).to.equal(1);
      expect(sendPromise.firstCall.args).to.eql([botID, chatID, data.text]);
    });
  });

  afterEach(function() {
    sendPromise = undefined;
  });
});

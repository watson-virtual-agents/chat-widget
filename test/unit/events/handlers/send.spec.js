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

	it('should deliver messages', function() {
		var botID = 'botID';
		var chatID = 'chatID';
		var data = { text: 'update address' };
		// promise.resolves('resolve value');
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

	afterEach(function() {
		sendPromise = undefined;
	});
});

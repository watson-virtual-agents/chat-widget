var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var rewire = require('rewire');
chai.use(sinonChai);
var expect = chai.expect;

var send = rewire('../../../../src/events/handlers/send');

describe('send handler', function() {
	beforeEach(function() {

	});

	it('should not deliver empty or invalid messages', function() {
		var BotSDKStub = {
			send: sinon.stub()
		};
		send.__set__('BotSDK', BotSDKStub);
		
		send(undefined);
		send({ });
		send({ text: '' });
		send({ text: null });
		
		expect(BotSDKStub.send.callCount).to.equal(0);
	});

	it('should deliver messages', function() {
		
	});
});

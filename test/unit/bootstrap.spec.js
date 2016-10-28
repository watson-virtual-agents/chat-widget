var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var rewire = require('rewire');
var expect = chai.expect;
chai.use(sinonChai);

var bootstrap = rewire('../../src/bootstrap.js');

describe('bootstrap', function() {
	var stateMock, eventsMock, publishSpy, consoleErrStub;

	beforeEach(function() {
		consoleErrStub = sinon.stub(console, 'error');
		publishSpy = sinon.spy();
		eventsMock = {
			publish: publishSpy
		};
		bootstrap.__set__('events', eventsMock);
	});
		

	it('should send error for invalid messages', function() {
		stateMock = {
			getState: sinon.stub().returns({ active: true })
		};
		bootstrap.__set__('state', stateMock);

		var errorMsg = 'The message was empty.';
		
		bootstrap.send(undefined);
		bootstrap.send(null);
		bootstrap.send('');
		expect(consoleErrStub.calledThrice);
		expect(consoleErrStub.alwaysCalledWith(errorMsg));
	});

	it('should deliver messages when these are valid', function() {
		stateMock = {
			getState: sinon.stub().returns({ active: true })
		};
		bootstrap.__set__('state', stateMock);

		var nonEmptyMsg = 'update address';
		bootstrap.send(nonEmptyMsg);
		expect(eventsMock.publish.calledOnce);
		expect(eventsMock.publish.calledWith('send', { text: nonEmptyMsg }));

		var allWhitespaceMsg = ' ';
		bootstrap.send(allWhitespaceMsg);
		expect(eventsMock.publish.calledTwice);
		expect(eventsMock.publish.calledWith('send', { text: allWhitespaceMsg }));
	});

	it('should not deliver messages when widget is not active', function() {
		stateMock = {
			getState: sinon.stub().returns({ active: false })
		};
		bootstrap.__set__('state', stateMock);

		bootstrap.send('update address');
		
		expect(eventsMock.publish.notCalled);
	});

	afterEach(function() {
		// reset spy state
		publishSpy.reset();
		// remove stub and restore console.error's behavior
		consoleErrStub.restore();
	});
});

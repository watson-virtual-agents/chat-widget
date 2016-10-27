var chai = require('chai');
var sinon = require('sinon');
var rewire = require("rewire");
var expect = chai.expect;
var should = chai.should;
var assert = chai.assert;

var bootstrap = rewire("../src/bootstrap.js");

var stateMock, eventsMock;

describe("bootstrap", function() {

	beforeEach(function () {
		// stateMock = {
  //   		setState: sinon.spy(),
  //   		getState: sinon.stub().returns({ active: true })
		// };
		
		// eventsMock = {
		// 	publish: sinon.spy()
		// };

		// bootstrap.__set__("state", stateMock);
		// bootstrap.__set__("events", eventsMock);
	});
		

	it('should send error for invalid messages', function () {
		stateMock = {
    		getState: sinon.stub().returns({ active: true })
		};
		bootstrap.__set__("state", stateMock);

		var errorMsg = 'The message was empty.';
		sinon.stub(console, 'error');
		
		bootstrap.send(undefined);
		expect(console.error.calledOnce).to.be.true;
		expect(console.error.calledWith(errorMsg)).to.be.true;
		
		bootstrap.send(null);
		expect(console.error.calledTwice).to.be.true;
		expect(console.error.calledWith(errorMsg)).to.be.true;

		bootstrap.send('');
		expect(console.error.calledThrice).to.be.true;
		expect(console.error.calledWith(errorMsg)).to.be.true;

	});

	it('should deliver messages when these are valid', function () {
		stateMock = {
    		getState: sinon.stub().returns({ active: true })
		};
		eventsMock = {
			publish: sinon.spy()
		};
		bootstrap.__set__("state", stateMock);
		bootstrap.__set__("events", eventsMock);


		var nonEmptyMsg = 'update address';
		bootstrap.send(nonEmptyMsg);
		expect(eventsMock.publish.calledOnce).to.be.true;
		expect(eventsMock.publish.calledWith('send', { text: nonEmptyMsg })).to.be.true;

		var allWhitespaceMsg = ' ';
		bootstrap.send(allWhitespaceMsg);
		expect(eventsMock.publish.calledTwice).to.be.true;
		expect(eventsMock.publish.calledWith('send', { text: allWhitespaceMsg })).to.be.true;
	});

	it('should not deliver messages when widget is not active', function () {
		stateMock = {
    		getState: sinon.stub().returns({ active: false })
		};
		eventsMock = {
			publish: sinon.spy()
		};
		bootstrap.__set__("state", stateMock);
		bootstrap.__set__("events", eventsMock);

		bootstrap.send('update address');
		
		expect(eventsMock.publish.notCalled).to.be.true;
	});
});

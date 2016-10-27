var chai = require('chai');
var sinon = require('sinon');
var rewire = require("rewire");
var expect = chai.expect;
var should = chai.should;
var assert = chai.assert;

var events = rewire("../src/events");

var stateMock, eventsMock;

describe("events", function() {

	beforeEach(function () {
		// stateMock = {
  //   		setState: sinon.spy(),
  //   		getState: sinon.stub().returns({ active: true })
		// };
		
		// eventsMock = {
		// 	publish: sinon.spy()
		// };

		// events.__set__("state", stateMock);
		// events.__set__("events", eventsMock);
	});
		

	it('subscribes a handler to a given event', function () {
		stateMock = {
    		setState: sinon.spy(),
		};

		eventsMock = [];
		events.__set__("state", stateMock);
		events.__set__("events", eventsMock);

		var handler = sinon.stub();
		events.subscribe('dummy-event', handler);
		// expect(eventsMock.includes({event: 'dummy-event', handler: handler})).to.be.true;
	});

	it('unsubscribes handler from events', function () {

	});
});

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

	it('should get the current state', function() {
		state.set(stateMock1);
		
		expect(state.get()).to.eql(stateMock1);
	});

	it('should set a new current state', function() {
		var statesMock = [];
		state.__set__('state', stateMock1);
		state.__set__('states', statesMock);
		
		state.set({ active: true });
		
		expect(state.get()).to.eql(stateMock2);
		expect(statesMock).to.eql([stateMock2]);
	});

	it('should destroy all state history', function() {
		var statesMock = [stateMock1, stateMock2];
		state.__set__('state', stateMock1);
		state.__set__('states', statesMock);
		
		state.destroy();
		
		expect(state.get()).to.eql({ });
		expect(statesMock).to.eql([stateMock1, stateMock2]);
	});

	it('should have the expected API', function() {
		expect(state).itself.to.respondTo('get');
		expect(state).itself.to.respondTo('set');
		expect(state).itself.to.respondTo('destroy');
		expect(state).itself.to.respondTo('getState');
		expect(state).itself.to.respondTo('setState');
		expect(state).itself.to.respondTo('destroyState');
	});

	afterEach(function() {
		consoleLogStub.restore();
	});
});

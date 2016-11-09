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
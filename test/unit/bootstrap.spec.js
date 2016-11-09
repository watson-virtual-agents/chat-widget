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

  it('should have the expected API', function() {
    expect(bootstrap).to.have.property('profile');
    expect(bootstrap).itself.to.respondTo('init');
    expect(bootstrap).itself.to.respondTo('registerLayout');
    expect(bootstrap).itself.to.respondTo('send');
    expect(bootstrap).itself.to.respondTo('receive');
    expect(bootstrap).itself.to.respondTo('sendMock');
    expect(bootstrap).itself.to.respondTo('sendSilently');
    expect(bootstrap).itself.to.respondTo('enableCustomInputHandler');
    expect(bootstrap).itself.to.respondTo('disableCustomInputHandler');
    expect(bootstrap).itself.to.respondTo('focusInput');
    expect(bootstrap).itself.to.respondTo('disableInput');
    expect(bootstrap).itself.to.respondTo('enableInput');
    expect(bootstrap).itself.to.respondTo('subscribe');
    expect(bootstrap).itself.to.respondTo('publish');
    expect(bootstrap).itself.to.respondTo('debug');
    expect(bootstrap).itself.to.respondTo('restart');
    expect(bootstrap).itself.to.respondTo('currentSubscriptions');
    expect(bootstrap).itself.to.respondTo('hasSubscription');
    expect(bootstrap).itself.to.respondTo('completeEvent');
    expect(bootstrap).to.have.property('playback');
    expect(bootstrap).to.have.property('state');
  });
  
  afterEach(function() {
    // reset spy state
    publishSpy.reset();
    // remove stub and restore console.error's behavior
    consoleErrStub.restore();
  });
});

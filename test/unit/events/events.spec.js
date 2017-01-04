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

var events = rewire('../../../src/events');

describe('events', function() {
  var stateMock, handler, handler2, consoleErrStub;

  beforeEach(function() {
    handler = sinon.stub();
    handler2 = sinon.stub();
    consoleErrStub = sinon.stub(console, 'error');
  });

  describe('#subscribe()', function() {
    it('should subscribe a handler to a given event', function() {
      events.subscribe('dummy-event', handler);
      expect(events.currentSubscriptions()[0].event).to.equal('dummy-event');
    });
  });

  describe('#remove()', function() {
    // TODO: enable this test once events/index.js is refactored
    it.skip('should remove a handler', function() {
      var subscriptions = events.currentSubscriptions;

      // subscribe 3 events and verify that if we remove the
      // second one ('event-2') we obtain an array of 2 events
      // without 'event-2'
      events.subscribe('event-1', handler);
      var subscription = events.subscribe('event-2', handler);
      events.subscribe('event-3', handler);
      expect(subscriptions()[0].event).to.equal('event-1');
      expect(subscriptions()[1].event).to.equal('event-2');
      expect(subscriptions()[2].event).to.equal('event-3');

      subscription.remove();

      expect(subscriptions().length).to.equal(2);
      expect(subscriptions()[0].event).to.equal('event-1');
      expect(subscriptions()[1].event).to.equal('event-3');
    });
  });

  describe('#unsubscribe()', function() {
    it.skip('should unsubscribe handler from events', function() {
      stateMock = {
        get: function() {
          return { DEBUG: true };
        }
      };
      events.__set__('state', stateMock);

      var invalidArgsMsg = 'Must pass a valid event and handler to unsubscribe.';

      // invalid params
      events.unsubscribe('dummy-event', undefined);
      events.unsubscribe(undefined, handler);
      events.unsubscribe(null, handler);
      events.unsubscribe('dummy-event', null);
      expect(consoleErrStub.callCount).to.equal(4);
      expect(consoleErrStub.alwaysCalledWith(invalidArgsMsg));

      // remove stub and restore console.error's behavior
      consoleErrStub.restore();

      var noSubscriptionMsg = 'No subscriptions exist for the given event and handler.';
      consoleErrStub = sinon.stub(console, 'error');
      events.subscribe('subscribed-event', handler); // no context passed
      events.unsubscribe('non-subscribed-event', handler2);

      expect(consoleErrStub.callCount).to.equal(1);
      expect(consoleErrStub.calledWith(noSubscriptionMsg));
    });
  });

  describe('#destroy()', function() {
    it('should remove all events', function() {
      events.subscribe('dummy-event', sinon.stub());
      expect(events.currentSubscriptions().length).to.equal(1);

      events.destroy();

      expect(events.currentSubscriptions()).to.be.empty;
    });
  });

  describe('API', function() {
    it('should have the expected API', function() {
      expect(events).itself.to.respondTo('destroy');
      expect(events).itself.to.respondTo('unsubscribe');
      expect(events).itself.to.respondTo('currentSubscriptions');
      expect(events).itself.to.respondTo('hasSubscription');
      expect(events).itself.to.respondTo('subscribe');
      expect(events).itself.to.respondTo('publish');
      expect(events).itself.to.respondTo('completeEvent');
    });
  });

  afterEach(function() {
    // remove stub and restore console.error's behavior
    consoleErrStub.restore();
    // reset list of events
    events.destroy();
  });
});

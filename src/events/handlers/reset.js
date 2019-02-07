var state = require('../../state');
var events = require('../../events');
var BotSDK = require('../../sdk');
var utils = require('../../utils');

function reset() {
  events.publish('clear-error');
  events.publish('clear');
  events.publish('scroll-to-bottom');
  events.publish('enable-loading');
  return new window.Promise(function(resolve, reject) {
    var current = state.get();
    var SDKconfig = utils.getSDKConfig(current);
    if (!utils.checkRoot(current.root)) {
      reject({
        error: 'Element for chat does not exist!'
      });
    }
    BotSDK
      .configure( SDKconfig )
      .start()
      .then( function(res) {
        events.publish('sessionID', res.sessionID);
        events.publish('receive', res);
      })['catch']( function(err) {
        events.publish('httpError', err);
      }).then(function() {
        setTimeout(function() {
          resolve();
        },0);
      });
  });
}

module.exports = reset;

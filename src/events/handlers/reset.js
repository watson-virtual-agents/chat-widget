var state = require('../../state');
var events = require('../../events');
var BotSDK = require('@watson-virtual-agent/client-sdk/lib/web');
var utils = require('../../utils');

function reset() {
  events.publish('clear-error');
  events.publish('scroll-to-bottom');
  return new window.Promise(function(resolve, reject) {
    var current = state.get();
    var SDKconfig = utils.getSDKConfig(current);
    if (!utils.checkRoot(current.root)) {
      reject({
        error: 'Element for chat does not exist!'
      });
    }
    if (!current.botID) {
      reject({
        error: 'BotID is required!'
      });
    }
    BotSDK
      .configure( SDKconfig )
      .start( current.botID )
      .then( function(res) {
        events.publish('clear');
        events.publish('chatID', res.chatID);
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

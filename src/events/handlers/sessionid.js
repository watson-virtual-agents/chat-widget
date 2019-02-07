var state = require('../../state');

function sessionID(sessionID) {
  var current = state.get();
  var prefix = 'sessionID-';
  var classes = current.root.className.split(' ').filter(function(c) {
    return c.lastIndexOf(prefix, 0) !== 0;
  });
  state.set({
    sessionID: sessionID
  });
  current.root.className = classes.join(' ').trim();
  current.root.classList.add(prefix + sessionID);
}

module.exports = sessionID;

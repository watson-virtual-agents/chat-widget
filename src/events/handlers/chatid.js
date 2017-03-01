var state = require('../../state');

function chatID(chatID) {
  var current = state.get();
  var prefix = 'chatID-';
  var classes = current.root.className.split(' ').filter(function(c) {
    return c.lastIndexOf(prefix, 0) !== 0;
  });
  state.set({
    chatID: chatID
  });
  current.root.className = classes.join(' ').trim();
  current.root.classList.add(prefix + chatID);
}

module.exports = chatID;

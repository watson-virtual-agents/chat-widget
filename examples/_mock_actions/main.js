var langs = require('json!./langs.json');

var config = { instance: null };
var userProfileVariablesMap = {};

function generateUserProfileVariablesMap() {
  userProfileVariablesMap = {
    'bill_amount': Number(42.01).toLocaleString(config.locale),
    'payment_due_date': (function() {
      const currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
      return currentDate.toLocaleDateString(config.locale);
    })(),
    'authorized_users': config.strings.authorized_users
  };
}

function getUserProfileVariables(data) {
  const variables = data.message.action.args.variables;
  variables.forEach(function(v) {
    const value = userProfileVariablesMap[v];
    (value) ? config.instance.profile.set(v, value) : config.instance.profile.set(v, '[sample data]');
  });
  config.instance.sendSilently('success');
}

function success() {
  return config.instance.sendSilently('success');
}
function agent() {
  return config.instance.receive(config.strings.agent);
}
function accountSettings() {
  return config.instance.receive(config.strings.account_settings);
}

function registerActions(instance, locale, _skip) {
  config.instance = instance;
  config.locale = locale && locale.toLowerCase() || 'en';
  config.strings = langs[config.locale];
  generateUserProfileVariablesMap();

  // subscribe to actions
  [
    ['getUserProfileVariables', getUserProfileVariables],
    ['updateAddress', success],
    ['updateUserName', success],
    ['updatePhoneNumber', success],
    ['updateEmail', success],
    ['payBill', success],
    ['sendPaymentReceipt', success],
    ['agent', agent],
    ['openAccountSettingsPage', accountSettings]
  ].forEach(function(action) {
    var name = action[0];
    var cb = action[1];
    if (_skip && _skip.indexOf(name) !== -1) { // skip
      return;
    }
    instance.subscribe('action:' + name, cb);
  });
}

module.exports = {
  registerActions: registerActions
};

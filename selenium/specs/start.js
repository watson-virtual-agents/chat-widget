/*window.IBMChat.init({
	el: 'ibm_el',
	baseURL: 'https://api.ibm.com/virtualagent/run/api/v1/',
	botID: 'my-bot-id',
	XIBMClientID: 'my-x-ibm-client-id',
	XIBMClientSecret: 'my-x-ibm-client-secret',
	mockSDK: window.IBMChatSelenium.mockSDK
});*/
var assert = require('assert');
describe('Visit IBM Chat Page', function() {
		it('should have the right title', function () {
				browser.url('http://localhost:3200');
				var title = browser.getTitle();
				assert.equal(title, 'IBM Watson Virtual Agent Chat Widget Demo');
		});
});

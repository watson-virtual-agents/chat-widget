/* eslint-disable */

var assert = require('assert');

describe('Visit IBM Chat Page', function() {
	it('should have the right title', function() {
		browser.url('http://localhost:3200');
		var title = browser.getTitle();
		assert.equal(title, 'IBM Watson Virtual Agent Chat Widget Demo');
	});
});

describe('Destroy Chat Widget', function() {
	it('should have empty ibm_el', function() {
		browser.execute(function() {
			window.IBMChat.destroy();
		});
		browser.getHTML('#ibm_el', false, function(html){
			assert.equal(html, '');
		});
	});
});

describe('Create Chat Widget', function() {
	it('should create a new Chat Widget', function() {
		browser.execute(function() {
			window.IBMChat.init({
				el: 'ibm_el',
				baseURL: 'http://localhost:3201',
				botID: 77
			});
		});
		browser.getHTML('#ibm_el', false, function(html){
			assert.notEqual(html, '');
		});
	});
});
/* eslint-enable */

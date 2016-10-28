var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var rewire = require('rewire');
// var cheerio = require('cheerio');
chai.use(sinonChai);
var expect = chai.expect;

// var inputHtml = require('../../../../src/templates/input.html');

var input = rewire('../../../../src/events/handlers/input');
describe('input handler', function() {
	var stateMock, inputEl;
	
	before(function() {

	});

	beforeEach(function() {
		inputEl = {
			focus: sinon.stub(),
			removeAttribute: sinon.stub(),
			setAttribute: sinon.stub()
		};
	});

	it('should set focus to input element', function() {
		stateMock = {
			getState: function() {
				return {
					input: inputEl
				};
			},
			setState: function() {}
		};
		input.__set__('state', stateMock);

		input.focusInput();

		expect(inputEl.focus.calledOnce);
		expect(inputEl.focus.getCalls(0).args).to.be.empty;
	});

	it('should enable the input', function() {
		stateMock = {
			getState: function() {
				return {
					disableInput: 0,
					input: inputEl
				};
			},
			setState: function() {}
		};
		input.__set__('state', stateMock);
		
		input.enableInput();

		expect(inputEl.removeAttribute.calledOnce);
		expect(inputEl.removeAttribute.calledWithExactly('disabled'));
	});
	
	it('should disable the input', function() {
		stateMock = {
			getState: function() {
				return {
					disableInput: 0,
					input: inputEl
				};
			},
			setState: function() {}
		};
		input.__set__('state', stateMock);
		
		input.disableInput();

		expect(inputEl.setAttribute.calledOnce);
		expect(inputEl.setAttribute.calledWithExactly('disabled', 'disabled'));
	});

	afterEach(function() {
		// reset stubs
		inputEl.focus.reset();
		inputEl.removeAttribute.reset();
		inputEl.setAttribute.reset();
	});

});

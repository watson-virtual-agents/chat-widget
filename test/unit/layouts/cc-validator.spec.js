var chai = require('chai');
var sinonChai = require('sinon-chai');
var rewire = require('rewire');
var expect = chai.expect;
chai.config.includeStack = true;
chai.config.truncateThreshold = 0; // disable truncating
chai.config.showDiff = true;
chai.use(sinonChai);

var validation = rewire('../../../src/layouts/cc-validator/validation.js');

// Note: uncomment these tests once https://github.com/watson-virtual-agents/chat-widget/pull/69 is complete ");

describe.skip('cc-validator layout', function() {
	var messages;
	
	before(function() {
		messages = {
			required: 'This field is required.',
			invalid: 'Your credit card number is invalid.',
			invalidExpiration: 'Your credit card expiration date is invalid.',
			invalidCvv: 'Your CVV is invalid.'
		};
	});
	
	it('should validate the CVV number', function() {
		var validateCVV = validation.validateCVV;
		
		// empty value
		var fieldRequiredOutput = { message: messages.required, valid: false };
		expect(validateCVV('')).to.eql(fieldRequiredOutput);
		expect(validateCVV('   ')).to.eql(fieldRequiredOutput);

		// invalid values
		var invalidCvvOutput = { message: messages.invalidCvv, valid: false };
		expect(validateCVV('1')).to.eql(invalidCvvOutput);
		expect(validateCVV('12')).to.eql(invalidCvvOutput);
		expect(validateCVV('ab')).to.eql(invalidCvvOutput);
		expect(validateCVV('%&$')).to.eql(invalidCvvOutput);
		expect(validateCVV('%&·!!__$')).to.eql(invalidCvvOutput);
		expect(validateCVV('10000')).to.eql(invalidCvvOutput);
		expect(validateCVV('999 ')).to.eql(invalidCvvOutput);
		expect(validateCVV(' 999')).to.eql(invalidCvvOutput);
		expect(validateCVV(' 999 ')).to.eql(invalidCvvOutput);
		
		// valid values
		var validOutput = { valid: true };
		expect(validateCVV('000')).to.eql(validOutput);
		expect(validateCVV('123')).to.eql(validOutput);
		expect(validateCVV('999')).to.eql(validOutput);
		expect(validateCVV('0000')).to.eql(validOutput);
		expect(validateCVV('1234')).to.eql(validOutput);
		expect(validateCVV('9999')).to.eql(validOutput);
	});

	it('should validate the expiration date', function() {
		var validateExp = validation.validateExp;
		var validYear = String(new Date().getFullYear() + 10);

		// empty values
		var fieldRequiredOutput = { message: messages.required, valid: false };
		expect(validateExp('', validYear)).to.eql(fieldRequiredOutput);
		expect(validateExp('  ', validYear)).to.eql(fieldRequiredOutput);
		expect(validateExp('01','')).to.eql(fieldRequiredOutput);
		expect(validateExp('01','  ')).to.eql(fieldRequiredOutput);

		
		// invalid values
		var invalidOutput = {
			message: messages.invalidExpiration,
			valid: false
		};
		expect(validateExp('1', validYear)).to.eql(invalidOutput);
		expect(validateExp('00', validYear)).to.eql(invalidOutput);
		expect(validateExp('13', validYear)).to.eql(invalidOutput);
		expect(validateExp('99', validYear)).to.eql(invalidOutput);
		expect(validateExp('a', validYear)).to.eql(invalidOutput);
		
		expect(validateExp('01','01')).to.eql(invalidOutput);
		expect(validateExp('01','20')).to.eql(invalidOutput);
		expect(validateExp('01','099')).to.eql(invalidOutput);
		expect(validateExp('01','0000')).to.eql(invalidOutput);
		expect(validateExp('01','1999')).to.eql(invalidOutput);
		expect(validateExp('01','  20')).to.eql(invalidOutput);
		expect(validateExp('01','2600')).to.eql(invalidOutput);
		expect(validateExp('01','9999')).to.eql(invalidOutput);
		expect(validateExp('01','abcd')).to.eql(invalidOutput);
		expect(validateExp('01','$%"_/')).to.eql(invalidOutput);
		// var d = new Date();
		// var invalidMonth = (d.getMonth() - 1) ? 0 : 1;
		// expect(validateExp((d.getMonth() - 1)+'', d.getFullYear()+'')).to.eql(invalidOutput);
		


		// valid values
		var validOutput = { valid: true };
		expect(validateExp('01', validYear)).to.eql(validOutput);
		expect(validateExp('12', String(new Date().getFullYear() + 15))).to.eql(validOutput);
		expect(validateExp('06', String(new Date().getFullYear() + 19))).to.eql(validOutput);

	});

	it('should validate the card number', function() {
		var validateCard = validation.validateCard;
		var allCards = ['visa','mastercard','discover','amex'];

		/*
			empty card number
		*/
	
		var fieldRequiredOutput = { message: messages.required, valid: false };
		expect(validateCard(allCards, '')).to.eql(fieldRequiredOutput);
		expect(validateCard(allCards, '  ')).to.eql(fieldRequiredOutput);

		/*
			non supported card
		*/
	
		var unsupportedCardOutput = { message: 'We accept Visa and MasterCard. Please use a valid card.', valid: false };
		var validAmex = '378282246310005';
		expect(validateCard(['visa','mastercard'], validAmex)).to.eql(unsupportedCardOutput);
		unsupportedCardOutput = { message: 'We accept Visa, MasterCard and Discover. Please use a valid card.', valid: false };
		expect(validateCard(['visa','mastercard','discover'], validAmex)).to.eql(unsupportedCardOutput);
		
		/*
			invalid card numbers
		*/
	
		var invalidCardOutput = { message: messages.invalid, valid: false };
		expect(validateCard(allCards, 'abcdefghijklmnop')).to.eql(invalidCardOutput);
		// Amex: supported, right prefix, wrong length
		expect(validateCard(allCards, '3782822463100')).to.eql(invalidCardOutput);
		expect(validateCard(allCards, '3482822463100')).to.eql(invalidCardOutput);
		// Amex: supported, wrong prefix, right length
		expect(validateCard(allCards, '018282246310005')).to.eql(invalidCardOutput);
		// Visa: supported, right prefix, wrong length
		expect(validateCard(allCards, '4782822463100')).to.eql(invalidCardOutput);
		// Visa: supported, wrong prefix, right length
		expect(validateCard(allCards, '01828224631000')).to.eql(invalidCardOutput);
		expect(validateCard(allCards, '0182822463100050')).to.eql(invalidCardOutput);
		expect(validateCard(allCards, '0182822463100050000')).to.eql(invalidCardOutput);
		// Mastercard: supported, right prefix, wrong length
		expect(validateCard(allCards, '5111111111111')).to.eql(invalidCardOutput);
		expect(validateCard(allCards, '5211111111111')).to.eql(invalidCardOutput);
		expect(validateCard(allCards, '5311111111111')).to.eql(invalidCardOutput);
		expect(validateCard(allCards, '5411111111111')).to.eql(invalidCardOutput);
		expect(validateCard(allCards, '5511111111111')).to.eql(invalidCardOutput);
		expect(validateCard(allCards, '2221822463100')).to.eql(invalidCardOutput);
		expect(validateCard(allCards, '2720822463100')).to.eql(invalidCardOutput);
		// Mastercard: supported, wrong prefix, right length
		expect(validateCard(allCards, '5011111111111111')).to.eql(invalidCardOutput);
		// Discover: supported, right prefix, wrong length
		expect(validateCard(allCards, '60110000000000')).to.eql(invalidCardOutput);
		expect(validateCard(allCards, '6500000000000')).to.eql(invalidCardOutput);
		expect(validateCard(allCards, '622126000000000')).to.eql(invalidCardOutput);
		expect(validateCard(allCards, '622925000000000')).to.eql(invalidCardOutput);
		expect(validateCard(allCards, '6440000000000')).to.eql(invalidCardOutput);
		expect(validateCard(allCards, '6490000000000')).to.eql(invalidCardOutput);
		// Discover: supported, wrong prefix, right length
		expect(validateCard(allCards, '6010111111111111')).to.eql(invalidCardOutput);
		expect(validateCard(allCards, '6411111111111111')).to.eql(invalidCardOutput);
		expect(validateCard(allCards, '5001111111111111111')).to.eql(invalidCardOutput);
		// invalid Luhn
		expect(validateCard(allCards, '4111111111111112')).to.eql(invalidCardOutput);
		

		/*
			valid card numbers
		*/
	
		var validOutput = { valid: true };
		// Visa
		expect(validateCard(allCards, '4222222222222')).to.eql(validOutput);
		expect(validateCard(allCards, '4111111111111111')).to.eql(validOutput);
		expect(validateCard(allCards, '4012888888881881')).to.eql(validOutput);
		// MasterCard
		expect(validateCard(allCards, '5555555555554444')).to.eql(validOutput);
		expect(validateCard(allCards, '5105105105105100')).to.eql(validOutput);
		expect(validateCard(allCards, '2221000000000009')).to.eql(validOutput);
		expect(validateCard(allCards, '2720000000000005')).to.eql(validOutput);
		// Amex
		expect(validateCard(allCards, '378282246310005')).to.eql(validOutput);
		expect(validateCard(allCards, '371449635398431')).to.eql(validOutput);
		expect(validateCard(allCards, '378734493671000')).to.eql(validOutput);
		// Discover
		expect(validateCard(allCards, '6011111111111117')).to.eql(validOutput);
		expect(validateCard(allCards, '6011000990139424009')).to.eql(validOutput);
		expect(validateCard(allCards, '6500000000000002')).to.eql(validOutput);
		expect(validateCard(allCards, '6440000000000000002')).to.eql(validOutput);
		expect(validateCard(allCards, '6490000000000000007')).to.eql(validOutput);
		expect(validateCard(allCards, '6221260000000000001')).to.eql(validOutput);
		expect(validateCard(allCards, '6229250000000000006')).to.eql(validOutput);
	});

});

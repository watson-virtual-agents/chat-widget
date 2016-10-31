var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var rewire = require('rewire');
var expect = chai.expect;
chai.use(sinonChai);
var assign = require('lodash/assign');

var validation = rewire('../../../src/layouts/cc-validator/validation.js');

describe('cc-validator layout', function() {
	it('should do what...', function() {
		
	});
});

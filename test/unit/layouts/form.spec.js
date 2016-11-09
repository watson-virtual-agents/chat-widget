var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var rewire = require('rewire');
var expect = chai.expect;
chai.use(sinonChai);
var assign = require('lodash/assign');

var formLayout = rewire('../../../src/layouts/form');

describe('form layout', function() {
  beforeEach(function() {

  });

  it('should validate fields', function() {
        // formLayout.__set__('widgets', widgets);
        // formLayout.init({ uuid: '0001' });

        // console.log("widgets is -->" + JSON.stringify(widgets));
  });

  afterEach(function() {

  });
});

'use strict';

var assert = require('assert');
var binCheck = require('bin-check');

it('returns path to binary and verifies that it is working', function (cb) {
	binCheck(require('../'), ['--help']).then( function(works){
		assert(works);
		cb();
	} )
});



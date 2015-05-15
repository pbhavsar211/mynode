var assert = require("assert")
var mul = require("../src/mul")

describe('math', function(){
	describe('multiplication function', function(){
		it('should check for positive numbers multiplication ...', function(){
			assert.equal(mul.m(10,20),200)
		})
		it('should check for zero ...', function(){
			assert.equal(mul.m(0,20),0)
		})
	})
})
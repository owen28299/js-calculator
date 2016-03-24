/****Check if Browser or CLI****/
var window = window || undefined;

if (window) {
  GLOBAL = window;
} else {
  var fs = require('fs');
  var vm = require('vm');
  var chai = require('chai');
  var functionsFile = fs.readFileSync(process.cwd() + '/calculator.js');
  vm.runInThisContext(functionsFile); // file runs and it's contents has access to GLOBAL
}
/*******************************/
var expect = chai.expect;
var should = chai.should();

describe('Calculator', function(){

  it('should be a function', function(){
    expect(Calculator).to.be.a('function');
  });

  it('should return an object', function(){
    expect(Calculator()).to.be.a("object");
  });

  describe('add', function(){
    var calc = null;

    beforeEach(function(){
      calc = Calculator();
    });

    it('should exist in Calculator and be a function', function(){
      expect(calc.add).to.exist;
      expect(calc.add).to.be.a('function');
    });

    it('should add two numbers', function(){
      expect( calc.add(2, 3) ).to.equal(5);
      calc.add(3,5).should.equal(8);
    });

  });


});//ends calculator function
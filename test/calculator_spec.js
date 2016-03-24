/****Check if Browser or CLI****/
var window = window || undefined;

if (window) {
  GLOBAL = window;
} else {
  var fs = require('fs');
  var vm = require('vm');
  var chai = require('chai');
  var Calculator = require("../calculator.js");
  var expect = chai.expect;
  chai.should();
}

describe('Calculator', function(){

  it('should be a function', function(){
    expect(Calculator).to.be.a('function');
  });

  it('should return an object', function(){
    expect(Calculator()).to.be.a("object");
  });

  var calc = null;

  beforeEach(function(){
    calc = Calculator();
  });

  describe('load', function(){
    it('should load a value into the calculator', function(){
      expect(calc.load).to.exist;
      expect(calc.load).to.be.a('function');
    });

    it('should return the loaded value', function(){
      var randNum = Math.random();
      expect(calc.load(randNum)).to.equal(randNum);
    });

  });

  describe('add', function(){

    it('should exist in Calculator and be a function', function(){
      expect(calc.add).to.exist;
      expect(calc.add).to.be.a('function');
    });

    it('should add two numbers', function(){
      var rand1 = Math.random();
      var rand2 = Math.random();
      calc.load(rand1);
      calc.add(rand2);
      expect( calc.getTotal() ).to.equal(rand1 + rand2);

    });

  });

  describe('subtract', function(){

    it('should exist in Calculator and be a function', function(){
      expect(calc.subtract).to.exist;
      expect(calc.subtract).to.be.a('function');
    });

    it('should subtract two numbers', function(){
      var rand1 = Math.random();
      var rand2 = Math.random();
      calc.load(rand1);
      calc.subtract(rand2);
      expect( calc.getTotal() ).to.equal(rand1 - rand2);

    });

  });

  describe('multiply', function(){

    it('should exist in Calculator and be a function', function(){
      expect(calc.multiply).to.exist;
      expect(calc.multiply).to.be.a('function');
    });

    it('should multiply two numbers', function(){
      var rand1 = Math.random();
      var rand2 = Math.random();
      calc.load(rand1);
      calc.multiply(rand2);
      expect( calc.getTotal() ).to.equal(rand1 * rand2);

    });

  });


  describe('divide', function(){

    it('should exist in Calculator and be a function', function(){
      expect(calc.divide).to.exist;
      expect(calc.divide).to.be.a('function');
    });

    it('should divide two numbers', function(){
      var rand1 = Math.random() * 100;
      var rand2 = Math.random() * 100;
      calc.load(rand1);
      calc.divide(rand2);
      expect( calc.getTotal() ).to.equal(rand1 / rand2);

    });

  });

  describe('recall memory', function(){
    it('should exist in Calculator and be a function', function(){
      expect(calc.recallMemory).to.exist;
      expect(calc.recallMemory).to.be.a('function');
    });

    it('should return the stored memory', function(){
      calc.load(5);
      expect( calc.recallMemory() ).to.equal(0);
    });

  });

  describe('save memory', function(){
    it('should exist in Calculator and be a function', function(){
      expect(calc.saveMemory).to.exist;
      expect(calc.saveMemory).to.be.a('function');
    });

    var rand1 = Math.random() * 100;
    var rand2 = Math.random() * 100;

    it('should return the stored memory', function(){

      calc.load(rand1);
      calc.add(rand2);
      calc.saveMemory();
      expect( calc.recallMemory() ).to.equal (rand1 + rand2);
    });

  });

  describe('clear memory', function(){
    it('should exist in Calculator and be a function', function(){
      expect(calc.clearMemory).to.exist;
      expect(calc.clearMemory).to.be.a('function');
    });

    it('should return the stored memory', function(){
      var rand1 = Math.random() * 100;
      var rand2 = Math.random() * 100;
      var rand3 = Math.random() * 100;

      calc.load(rand1);
      calc.multiply(rand2);
      calc.saveMemory();
      calc.add(rand3);
      calc.clearMemory();

      expect( calc.recallMemory() ).to.equal(0);

    });

  });

  describe('undo', function(){
    it('should exist in Calculator and be a function', function(){
      expect(calc.undo).to.exist;
      expect(calc.undo).to.be.a('function');
    });

    it('should return the stored memory', function(){
      var rand1 = Math.random() * 100;
      var rand2 = Math.random() * 100;
      var rand3 = Math.random() * 100;

      calc.load(rand1);
      calc.multiply(rand2);
      calc.saveMemory();
      calc.add(rand3);
      calc.undo();

      expect( calc.getTotal() ).to.equal(rand1 * rand2);

    });

  });

  describe('validation checks', function(){
    var poorinputs = ["string", [1,2,3], false, true, {}, undefined, null];

    it('should detect when non-numbers are entered as inputs', function(){

      for (var i in poorinputs){
        calc.load(poorinputs[i]);
        expect(calc.load(poorinputs[i])).to.equal('string');
      }

    });

  });


});//ends calculator function


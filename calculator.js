/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

var calculatorModule = (function(){

  var MT = {
    memory: 0,
    total: 0
  };

  var add = require('./files/add.js');
  var subtract = require('./files/subtract.js');
  var multiply = require('./files/multiply.js');
  var divide = require('./files/divide.js');

  function load (x) {
    if (typeof x !== 'number') {
      throw new Error('Not a number');
    }
    MT.total = x;
    return MT.total;
  }

  function getTotal () {
    return MT.total;
  }

  function recallMemory() {
    return MT.memory;
   }


  function saveMemory () {
      MT.memory = MT.total;
   }


  function clearMemory() {
      MT.memory = 0;
   }

   function undo() {
      MT.total = MT.memory;
   }


  return {
    load: load,
    getTotal: getTotal,
    add: add(MT),
    subtract: subtract(MT),
    multiply: multiply(MT),
    divide: divide(MT),
    recallMemory: recallMemory,
    saveMemory: saveMemory,
    clearMemory: clearMemory,
    undo: undo,
  };

});

module.exports = calculatorModule;

//var myCalculator = calculatorModule();
//myCalculator.load(5);

/*
calculatorModule.load(6);
calculatorModule.sum(5);

console.log(calculatorModule.getTotal());
*/


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */


  /**
   * Return the value of `total`
   * @return { Number }
   */



  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */




  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */



  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */




  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */




  /**
   * Return the value stored at `memory`
   * @return { Number }
   */



  /**
   * Stores the value of `total` to `memory`
   */




  /**
   * Clear the value stored at `memory`
   */



  /**
   * Validation
   */


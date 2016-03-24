/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

var calculatorModule = (function(){

  var memory = 0;
  var total = 0;

  var validate = function(x) {
    if (typeof x !== 'number') {
      throw new Error('Not a number');
    }
  };

  var load = function(x) {
    validate(x);

    total = x;
    return total;

  };

  var getTotal = function() {
    return total;
  };

  var add = function(x) {
    validate(x);

    total += x;

  };

  var subtract = function(x){
    validate(x);

    total -= x;
  };


  var multiply = function(x) {
    validate(x);

    total *= x;

   };


  var divide = function(x) {
    validate(x);

    total /= x;

   };

  var recallMemory = function() {
      return memory;
   };


  var saveMemory = function() {
      memory = total;
   };


  var clearMemory = function() {
      memory = 0;
   };

   var undo = function() {
      total = memory;
   };


  return {
    load : load,
    getTotal : getTotal,
    add: add,
    subtract: subtract,
    multiply : multiply,
    divide : divide,
    recallMemory : recallMemory,
    saveMemory : saveMemory,
    clearMemory : clearMemory,
    undo : undo
  };

});

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


multiply = function(ref) {

  ref = MT;

  return function (x) {
    var validate = require('./validate.js');
    validate(x);

    MT.total *= x;
  };

};

module.exports = multiply;
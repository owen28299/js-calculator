var add = function(ref) {

  var MT = ref;

  return function(x) {
    var validate = require('./validate.js');
    validate(x);

    MT.total += x;

  };

};

module.exports = add;
var validate = function(x) {

if (typeof x !== 'number') {
      throw new Error('Not a number');
    }

};

module.exports = validate;
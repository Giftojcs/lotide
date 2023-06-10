const assertEqual = require('../assertEqual');

const tail = function(array) {
  return array.slice(1);
};

// Test cases
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(tail([1, 2, 3]), [2, 3]);
assertEqual(tail([4]), []);
assertEqual(tail([]), []);

module.exports = tail;


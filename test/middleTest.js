const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// Test cases
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Odd-length array (Pass)
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Even-length array (Pass)
assertArraysEqual(middle([1]), []); // Single-element array (Pass)
assertArraysEqual(middle([]), []); // Empty array (Pass)


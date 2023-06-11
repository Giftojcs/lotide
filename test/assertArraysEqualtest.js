const assertArraysEqual = require('../assertArraysEqual');

// Test cases
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Identical arrays (Pass)
assertArraysEqual([1, 2, 3], [3, 2, 1]); // Non-identical arrays (Fail)
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Identical arrays (Pass)
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Non-identical arrays (Fail)


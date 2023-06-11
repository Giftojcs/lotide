const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // Identical arrays (Pass)
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // Non-identical arrays (Fail)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // Identical arrays (Pass)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // Non-identical arrays (Fail)


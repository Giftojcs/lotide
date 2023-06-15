const eqArrays = require('../eqArrays');
const assert = require('assert');

// Test cases
assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // Identical arrays (Pass)
assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // Non-identical arrays (Fail)
assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // Identical arrays (Pass)
assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // Non-identical arrays (Fail)



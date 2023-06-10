const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual("Hello", "Hello"); // Identical strings (Pass)
assertEqual("Hello", "hello"); // Non-identical strings (Fail)
assertEqual(5, 5); // Identical numbers (Pass)
assertEqual(10, 20); // Non-identical numbers (Fail)

module.exports = assertEqual;


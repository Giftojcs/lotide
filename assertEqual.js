const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test cases
assertEqual("Hello", "Hello"); // Identical strings (Pass)
assertEqual("Hello", "hello"); // Non-identical strings (Fail)
assertEqual(5, 5); // Identical numbers (Pass)
assertEqual(10, 20); // Non-identical numbers (Fail)


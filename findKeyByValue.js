const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test cases for assertEqual function
assertEqual("Hello", "Hello"); // Identical strings (Pass)
assertEqual("Hello", "hello"); // Non-identical strings (Fail)
assertEqual(5, 5); // Identical numbers (Pass)
assertEqual(10, 20); // Non-identical numbers (Fail)

const findKeyByValue = function(object, value) {
  for (const key of Object.keys(object)) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

// Test cases for findKeyByValue function
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi"); // Existing key-value pair (Pass)
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy"); // Existing key-value pair (Pass)
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // Existing key-value pair (Pass)
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // Non-existing value (Pass)
assertEqual(findKeyByValue({}, "Some Value"), undefined); // Empty object (Pass)
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expense"), "drama"); // Non-identical value (Fail)


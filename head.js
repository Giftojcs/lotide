const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test cases
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const head = function(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};

// Test cases
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined); // Empty array (Pass)
assertEqual(head([100]), 100); // Array with one element (Pass)


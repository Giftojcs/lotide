const eqArrays = function(arr1, arr2) {
  // If arrays have different lengths, they can't be a perfect match
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Iterate over each element in the arrays
  for (let i = 0; i < arr1.length; i++) {
    // If any corresponding elements are not equal, arrays are not a perfect match
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  // All elements are equal, arrays are a perfect match
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // Identical arrays (Pass)
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // Non-identical arrays (Fail)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // Identical arrays (Pass)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // Non-identical arrays (Fail)





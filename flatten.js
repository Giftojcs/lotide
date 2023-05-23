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

const assertArraysEqual = function(arr1, arr2) {
  const arraysEqual = eqArrays(arr1, arr2);
  if (arraysEqual) {
    console.log(`✅✅✅ Assertion Passed: Arrays are equal.`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: Arrays are not equal.`);
  }
};

// Test cases
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Identical arrays (Pass)
assertArraysEqual([1, 2, 3], [3, 2, 1]); // Non-identical arrays (Fail)
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Identical arrays (Pass)
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Non-identical arrays (Fail)


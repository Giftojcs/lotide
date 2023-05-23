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

const middle = function(array) {
  const length = array.length;
  const middleIndex = Math.floor(length / 2);

  if (length <= 2) {
    return [];
  } else if (length % 2 === 1) {
    return [array[middleIndex]];
  } else {
    return [array[middleIndex - 1], array[middleIndex]];
  }
};

// Test cases
assertArraysEqual(middle([1]), []); // Empty array (Pass)
assertArraysEqual(middle([1, 2]), []); // Empty array (Pass)
assertArraysEqual(middle([1, 2, 3]), [2]); // Single middle element (Pass)
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Single middle element (Pass)
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Two middle elements (Pass)
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Two middle elements (Pass)


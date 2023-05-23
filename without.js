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

const without = function(source, itemsToRemove) {
  const newArray = [];

  for (let i = 0; i < source.length; i++) {
    // Check if the current element is not present in itemsToRemove
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }

  return newArray;
};

// Test case: Check that the original array is not modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


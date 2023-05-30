const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
  return results;
};

// Test case
const numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8];
const results = takeUntil(numbers, x => x > 5);
assertArraysEqual(results, [1, 3, 5]);

console.log('---');

const names = ['John', 'Jane', 'Mike', 'Susan', 'Kate'];
const results2 = takeUntil(names, name => name.length > 4);
assertArraysEqual(results2, ['John', 'Jane']);


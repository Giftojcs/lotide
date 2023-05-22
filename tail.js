const assertEqual = function(actual, expected) {
  const actualStr = JSON.stringify(actual);
  const expectedStr = JSON.stringify(expected);
  if (actualStr === expectedStr) {
    console.log(`✅✅✅ Assertion Passed: ${actualStr} === ${expectedStr}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actualStr} !== ${expectedStr}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

// Test cases
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(tail([1, 2, 3]), [2, 3]);
assertEqual(tail([4]), []);
assertEqual(tail([]), []);

// Test case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);


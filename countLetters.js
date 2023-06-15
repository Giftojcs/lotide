// AssertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// CountLetters function
const countLetters = function(sentence) {
  const letterCount = {};

  for (const letter of sentence) {
    if (letter !== ' ') {
      if (letterCount[letter]) {
        letterCount[letter] += 1;
      } else {
        letterCount[letter] = 1;
      }
    }
  }

  return letterCount;
};

module.exports = countLetters;


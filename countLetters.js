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


//Creating a function called counted counterLetter using Lighthouselab.

const countLetters = function(sentence) {
  const letterCounts = {};

  for (const letter of sentence) {
    if (letter !== ' ') {
      if (letterCounts[letter]) {
        letterCounts[letter] += 1;
      } else {
        letterCounts[letter] = 1;
      }
    }
  }

  return letterCounts;
};

// Test case
const result = countLetters('Lighthouselab');
console.log(result);


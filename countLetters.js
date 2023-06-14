const assertEqual = require('./assertEqual');

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

// Test cases
assertEqual("Hello", "Hello"); // Identical strings (Pass)
assertEqual("Hello", "hello"); // Non-identical strings (Fail)
assertEqual(5, 5); // Identical numbers (Pass)
assertEqual(10, 20); // Non-identical numbers (Fail)

// Test case
const result = countLetters('Lighthouselab');
console.log(result);


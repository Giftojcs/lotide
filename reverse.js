// Get the command line arguments
const args = process.argv.slice(2);

// Function expression to reverse a string
const reverseString = function(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

// Reverse and output the arguments
for (let i = 0; i < args.length; i++) {
  const reversedArg = reverseString(args[i]);
  console.log(reversedArg);
}


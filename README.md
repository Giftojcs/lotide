# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @giftojcs/lotide`

**Require it:**

`const _ = require(@giftojcs/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
	
Lotide Directory:  Organize code inside a git repository.
Implemented Assert Equal: Function that takes in 2 values and  returns true if they are equal and false otherwise.
Improved Assert Equal function: Updated Assert Equal Function that uses template literals.
Implemented Head: Function that takes in an array and returns the first element in the array.
Implemented Tail: Function that takes in an array and returns everything except the first element of the array.
Implemented eqArrays: Function that takes in 2 arrays and returns true if the arrays are equal and false otherwise.
Implemented assertArraysEqual: Function that prints an appropriate message after comparing the two arrays.
Implemented function that takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.
Implemented flatten function that takes in an array that contains elements including nested array of elements and returns a flattened version of the array.
Implemented middle function that takes in an array and returns middle most element of the array.
Implemented countOnly function that takes in a collection of items and returns a specific subset of those items.
Implemented countLetters function that takes in a sentence and returns a count of each of the letters in the sentence.
Implemented letterPositions function that takes in a string and returns all indices of letter positions in the string.
Implemented findKeyByValue function that takes in an object and a value and returns the first key that corresponds to that value.
Implemented eqObjects function that takes in 2 objects and return true if they are equal and false otherwise.
Implemented assertObjectsEqual  function that takes in 2 objects and returns true if they are equal and false otherwise.
Implemented Map function that takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.
Implemented takeUntil function that takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.
Implemented findKey function that takes in an object and callback and returns the first key that meets the criteria specified in callback.
Lotide Refactor Example Modularize assertEqual Function.
Refactor Tail Modularize tail function.
Refactor eqArrays Modularise eqArrays function.
Refactor assertArraysEqual  Modularise assertArraysEqual function.
Refactor middle Modularise middle function.
Incorporate Mocha and Chai  Set up correctly for testing with Mocha and Chai.
Refactor with Mocha and Chai I  Write tests for tail and middle functions using Mocha and Chai.
Exporting All Functions II  Create an index.js file that exports all the functions in Lotide as an object.
Implemented Object Shorthand  Apply the new, shorter, property value shorthand syntax from ES6 to the main object being created and exported in the index.js file.
Publishing Lotide To npm  Publish lotide library to npm.


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

1.  Lotide Directory: Organize code inside a git repository.
2.  Implemented Assert Equal: Function that takes in 2 values and returns true if they  
    are  
    equal and false otherwise.
3.  Improved Assert Equal function: Updated Assert Equal Function that uses template 
    literals.
4.  Implemented Head: Function that takes in an array and returns the first element in the 
    array.
5.  Implemented Tail: Function that takes in an array and returns everything except the 
    first element of the array.
6.  Implemented eqArrays: Function that takes in 2 arrays and returns true if the arrays 
    are equal and false otherwise.
7.  Implemented assertArraysEqual: Function that prints an appropriate message after 
    comparing the two arrays.
8.  Implemented function: Takes in a source array and an itemsToRemove array and returns 
    only the items from the source array that are not in the itemsToRemove array.
9.  Implemented flatten function: Takes in an array that contains elements, including 
    nested arrays of elements, and returns a flattened version of the array.
10. Implemented middle function: Takes in an array and returns the middle-most element of 
    the array.
11. Implemented countOnly function: Takes in a collection of items and returns a specific 
    subset of those items.
12. Implemented countLetters function: Takes in a sentence and returns a count of each of 
    the letters in the sentence.
13. Implemented letterPositions function: Takes in a string and returns all indices of 
    letter positions in the string.
14. Implemented findKeyByValue function: Takes in an object and a value and returns the   
    first key that corresponds to that value.
15. Implemented eqObjects function: Takes in 2 objects and returns true if they are equal 
    and false otherwise.
16. Implemented assertObjectsEqual function: Takes in 2 objects and returns true if they 
    are equal and false otherwise.
17. Implemented Map function: Takes in an array and a callback and returns a new array 18.
    based on the results of the callback on each item in the array.
18. Implemented takeUntil function: Takes in an array and a callback and returns a slice 
    of the array based on the criteria specified in the callback.
19. Implemented findKey function: Takes in an object and a callback and returns the first 
    key that meets the criteria specified in the callback.
20. Lotide Refactor Example: Modularize assertEqual Function.
21. Refactor Tail: Modularize tail function.
22. Refactor eqArrays: Modularize eqArrays function.
23. Refactor assertArraysEqual: Modularize assertArraysEqual function.

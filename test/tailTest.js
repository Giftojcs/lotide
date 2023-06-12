// tailTest.js

const assert = require('chai').assert;
const tail = require('../tail');

describe('tail', () => {
  it('should return an empty array when given an empty array', () => {
    assert.deepEqual(tail([]), []);
  });

  it('should return an empty array when given an array with one element', () => {
    assert.deepEqual(tail([1]), []);
  });

  it('should return all elements except the first when given an array with multiple elements', () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

  it('should not modify the original array', () => {
    const arr = [1, 2, 3];
    tail(arr);
    assert.deepEqual(arr, [1, 2, 3]);
  });
});


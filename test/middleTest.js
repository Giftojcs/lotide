// middleTest.js

const assert = require('chai').assert;
const middle = require('../middle');

describe('middle', () => {
  it('should return an empty array when given an empty array', () => {
    assert.deepEqual(middle([]), []);
  });

  it('should return an empty array when given an array with one element', () => {
    assert.deepEqual(middle([1]), []);
  });

  it('should return the middle element when given an array with odd length', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('should return the two middle elements when given an array with even length', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it('should not modify the original array', () => {
    const arr = [1, 2, 3];
    middle(arr);
    assert.deepEqual(arr, [1, 2, 3]);
  });
});


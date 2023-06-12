const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns the first element of an array", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns undefined for an empty array", () => {
    assert.strictEqual(head([]), undefined);
  });

  it("returns the first element of an array of strings", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});



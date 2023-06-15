const assert = require('assert');
const countLetters = require('../countLetters');

describe('countLetters', function() {
  it('should return the correct letter counts for a given sentence', function() {
    const result1 = countLetters('LHL');
    assert.strictEqual(result1['L'], 2);
    assert.strictEqual(result1['H'], 1);

    const result2 = countLetters('Hello World');
    assert.strictEqual(result2['H'], 1);
    assert.strictEqual(result2['e'], 1);
    assert.strictEqual(result2['l'], 3);
    assert.strictEqual(result2['o'], 2);
    assert.strictEqual(result2['W'], 1);
    assert.strictEqual(result2['r'], 1);
    assert.strictEqual(result2['d'], 1);
  });

  it('should return an empty object for an empty sentence', function() {
    const result = countLetters('');
    assert.deepStrictEqual(result, {});
  });

  it('should ignore spaces and only count letters', function() {
    const result = countLetters('  A B   C  ');
    assert.strictEqual(result['A'], 1);
    assert.strictEqual(result['B'], 1);
    assert.strictEqual(result['C'], 1);
  });

  it('should handle uppercase and lowercase letters separately', function() {
    const result = countLetters('aAaA');
    assert.strictEqual(result['a'], 2);
    assert.strictEqual(result['A'], 2);
  });
});



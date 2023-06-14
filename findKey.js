const findKey = function(obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};

// Test case 1
const obj1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const callback1 = x => x.stars === 2;
console.log(findKey(obj1, callback1)); // Expected output: "noma"

// Test case 2
const obj2 = {
  key1: { value: 42 },
  key2: { value: 0 },
  key3: { value: false }
};
const callback2 = x => x.value === false;
console.log(findKey(obj2, callback2)); // Expected output: "key3"

// Test case 3 (no key found)
const obj3 = {
  key1: 123,
  key2: "abc",
  key3: true
};

const callback3 = x => typeof x === "object";
console.log(findKey(obj3, callback3)); // Expected output: undefined


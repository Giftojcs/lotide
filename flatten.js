const flatten = function(arr) {
  const flattenedArray = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      flattenedArray.push(...item);
    } else {
      flattenedArray.push(item);
    }
  }

  return flattenedArray;
};

module.exports = flatten;


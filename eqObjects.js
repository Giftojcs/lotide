//const assertEqual = function(actual, expected) {
  //if (actual === expected) {
   // console.log(`✅ Passed: ${actual} === ${expected}`);
  //} else {
   // console.log(`❌ Failed: ${actual} !== ${expected}`);
 // }
//};

//const eqObjects = function(object1, object2) {
 // const keys1 = Object.keys(object1);
  //const keys2 = Object.keys(object2);

  //if (keys1.length !== keys2.length) {
   // return false;
 // }

  //for (const key of keys1) {
   // if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
    //  if (!eqArrays(object1[key], object2[key])) {
     //   return false;
      //}
    ////} else {
      //if (object1[key] !== object2[key]) {
        //return false;
      //}
   // }
  //}

  //return true;
//};

// Helper function to compare arrays for equality
//const eqArrays = function(arr1, arr2) {
 // if (arr1.length !== arr2.length) {
  //  return false;
  //}

  //for (let i = 0; i < arr1.length; i++) {
   // if (arr1[i] !== arr2[i]) {
    //  return false;
   // }
 // }

  //return true;
//};

// Basic test for true
//const shirtObject = { color: "red", size: "medium" };
//const anotherShirtObject = { size: "medium", color: "red" };
//assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

// Basic test for false
//const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
//assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

// Additional tests for array values
//const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
//const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
//assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

//const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
//assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (const key of object1Keys) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (typeof value1 !== typeof value2) {
      return false;
    }

    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else if (typeof value1 === 'object' && typeof value2 === 'object') {
      if (!eqObjects(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;

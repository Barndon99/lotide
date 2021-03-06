// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');

const eqObjects = function (object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  
  if (keys1.length !== keys2.length) {
    return false;
  }
  
  for(let key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}

// const ab = { a: "1", b: ["2"] };
// const ba = { b: ["2"], a: "1" };
// 
// assertEqual(eqObjects(ab, ba), true);
// 
// const abc = { a: "1", b: "2", c: "3" };
// 
// assertEqual(eqObjects(ab, abc), false);
// 
// const cd = { c: "1", d: ["2", 3, 4] };
// console.log(cd.d);
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true
// 
// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(Object.keys(cd2));
// console.log(cd2);
// assertEqual(eqObjects(cd, cd2), true); // => false

module.exports = eqObjects;
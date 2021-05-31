const findKey = function (object, callback) {
  let keys = Object.keys(object);
  console.log("keys", keys);
  //capturing an array of keys
  //iterate through each key while putting it through our callback function
  keys.forEach(key => {if (callback(object[key])) object[key]});
};

// let a = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2); 

// console.log(a);

module.exports = findKey;
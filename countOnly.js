//take in a collection of items, and an array of items to be counted
//iterate through the items object and return only the count of objects to be counted to an array
const assertEqual = require('./assertEqual');

const countOnly = function(items, toBeCounted) {
  const results = {};
  
  for (const item of items) {
    if (toBeCounted[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
      console.log(item);
    }
  }
  console.log(results);
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
// 
// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;
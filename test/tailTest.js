const assertEqual = require('../assertEqual.js');
const tail = require('../tail.js');

//Test code
let array = [1, 4, 8, 9, 2, 34];
assertEqual(tail(array).length, (array.length - 1));

let array1 = ['hello', "hit", "buenos"];
assertEqual(tail(array1).length, 2);
const index = require('../index');

//Test code
index.assertEqual(index.eqArrays([false, 2, "far"], [false, 2, "far"]), true);
index.assertEqual(index.eqArrays([false, 3, "far"], [false, 2, "far"]), false);
index.assertEqual(index.eqArrays([1, 2, 3, 4, 5], [1, 2, 3, 4]), false);
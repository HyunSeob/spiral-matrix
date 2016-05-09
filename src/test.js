'use strict';

// Module dependencies.
const assert       = require('core-assert');
const SpiralMatrix = require('..');

const empty = new SpiralMatrix();
assert.deepStrictEqual(empty.get(), [[]]);
assert.strictEqual(empty.toString(), '');

const oneByOne = new SpiralMatrix(1, 1, 0);
assert.deepStrictEqual(oneByOne.get(), [[0]]);
assert.strictEqual(oneByOne.toString(), '0');

const oneByOne2 = new SpiralMatrix(1, 1, 10000);
assert.deepStrictEqual(oneByOne2.get(), [[10000]]);
assert.strictEqual(oneByOne2.toString(), '10000');

const oneByTwo = new SpiralMatrix(1, 2, 3);
assert.deepStrictEqual(oneByTwo.get(), [[ 3, 4 ]]);
assert.strictEqual(oneByTwo.toString(), '3\t4');

const twoByOne = new SpiralMatrix(2, 1, 100);
assert.deepStrictEqual(twoByOne.get(), [[ 100 ], [ 101 ]]);
assert.strictEqual(twoByOne.toString(), '100\n101');

const oneBySix = new SpiralMatrix(1, 6, 49);
assert.deepStrictEqual(oneBySix.get(), [[ 49, 50, 51, 52, 53, 54 ]]);
assert.strictEqual(oneBySix.toString(), '49\t50\t51\t52\t53\t54');

const threeByThree = new SpiralMatrix(3, 3);
assert.deepStrictEqual(threeByThree.get(), [
  [ 0, 1, 2 ],
  [ 7, 8, 3 ],
  [ 6, 5, 4 ]
]);
assert.strictEqual(threeByThree.toString(),
`0\t1\t2
7\t8\t3
6\t5\t4`
);

const fiveByThree = new SpiralMatrix(5, 3, 1);
assert.deepStrictEqual(fiveByThree.get(), [
  [  1,  2,  3 ],
  [ 12, 13,  4 ],
  [ 11, 14,  5 ],
  [ 10, 15,  6 ],
  [  9,  8,  7 ]
]);
assert.strictEqual(fiveByThree.toString(),
`1\t2\t3
12\t13\t4
11\t14\t5
10\t15\t6
9\t8\t7`
);

const sixBySix = new SpiralMatrix(6, 6);
assert.deepStrictEqual(sixBySix.get(), [
  [  0,  1,  2,  3,  4,  5 ],
  [ 19, 20, 21, 22, 23,  6 ],
  [ 18, 31, 32, 33, 24,  7 ],
  [ 17, 30, 35, 34, 25,  8 ],
  [ 16, 29, 28, 27, 26,  9 ],
  [ 15, 14, 13, 12, 11, 10 ]
]);
assert.strictEqual(sixBySix.toString(),
`0\t1\t2\t3\t4\t5
19\t20\t21\t22\t23\t6
18\t31\t32\t33\t24\t7
17\t30\t35\t34\t25\t8
16\t29\t28\t27\t26\t9
15\t14\t13\t12\t11\t10`
);

console.log('All tests are passed.');

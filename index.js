/**
 * This code is the modified version of Rosetta Code's Sprial Matrix solution.
 * You can see the original code from following URL:
 * https://rosettacode.org/wiki/Spiral_matrix#Functional_.28ES5.29
 */

 'use strict';

function range(m, n) {
  let i, arr = [];

  for (i = m; i < n + 1; i++) {
    arr.push(i);
  }
  
  return arr;
}

function reverse(arr) {
  return arr.length > 1 ? arr.reduceRight((prev, curr) => {
    return prev.concat(curr);
  }, []) : arr;
}

function transpose(matrix) {
  return matrix.length > 1 ? matrix[0].map((__, index) => {
    return matrix.map(row => row[index]);
  }) : matrix;
}

function deepConcat(matrix1, matrix2) {
  return [ matrix1[0].concat(matrix2[0]) ];
}

function spiral(rows, cols, start) {
  if (!rows || !cols) return [[]];

  const curr = [ range(start, start + cols - 1) ];
  const inner = transpose(spiral(cols, rows - 1, start + cols));

  if (inner[0].length === curr[0].length) {
    return curr.concat(inner.map(reverse));
  } else {
    return deepConcat(curr, inner);
  }
}

class SpiralMatrix {
  constructor(rows, cols, start) {
    start = start || 0;
    this._matrix = spiral(rows, cols, start);
  }

  get() {
    return this._matrix;
  }

  toString() {
    return this._matrix
    .map(arr => arr.join('\t'))
    .join('\n');
  }
}

exports = module.exports = SpiralMatrix;

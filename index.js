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

function spiral(rows, cols, start) {
  return rows ? [range(start, start + cols  - 1)].concat(
    transpose(spiral(cols, rows - 1, start + cols)).map(reverse)
  ) : [[]];
}

class SpiralMatrix {
  constructor(rows, cols, start) {
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

exports = module.exports = SprialMatrix;

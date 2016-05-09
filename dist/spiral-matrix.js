/**
 * This code is the modified version of Rosetta Code's Sprial Matrix solution.
 * You can see the original code from following URL:
 * https://rosettacode.org/wiki/Spiral_matrix#Functional_.28ES5.29
 */

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function range(m, n) {
  var i = void 0,
      arr = [];

  for (i = m; i < n + 1; i++) {
    arr.push(i);
  }

  return arr;
}

function reverse(arr) {
  return arr.length > 1 ? arr.reduceRight(function (prev, curr) {
    return prev.concat(curr);
  }, []) : arr;
}

function transpose(matrix) {
  return matrix.length > 1 ? matrix[0].map(function (__, index) {
    return matrix.map(function (row) {
      return row[index];
    });
  }) : matrix;
}

function deepConcat(matrix1, matrix2) {
  return [matrix1[0].concat(matrix2[0])];
}

function spiral(rows, cols, start) {
  if (!rows || !cols) return [[]];

  var curr = [range(start, start + cols - 1)];
  var inner = transpose(spiral(cols, rows - 1, start + cols));

  if (inner[0].length === curr[0].length) {
    return curr.concat(inner.map(reverse));
  } else {
    return deepConcat(curr, inner);
  }
}

var SpiralMatrix = function () {
  function SpiralMatrix(rows, cols, start) {
    _classCallCheck(this, SpiralMatrix);

    start = start || 0;
    this._matrix = spiral(rows, cols, start);
  }

  _createClass(SpiralMatrix, [{
    key: 'get',
    value: function get() {
      return this._matrix;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this._matrix.map(function (arr) {
        return arr.join('\t');
      }).join('\n');
    }
  }]);

  return SpiralMatrix;
}();

exports = module.exports = SpiralMatrix;

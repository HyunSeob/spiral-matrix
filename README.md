# spiral-matrix
Generate a spiral matrix.

## Installation
You can easily install this module via npm.

```
$ npm install spiral-matrix
```

## Usage
First, import the SpiralMatrix module.

``` javascript
const SpiralMatrix = require('spiral-matrix');
```

Then, You can generate a spiral matrix with following code:

``` javascript
const spiralMatrix = new SpiralMatrix(6, 6, 0);
// This will generate a 6 by 6 spiral matrix which start from 0.
// Like this:
// [ [ 0, 1, 2, 3, 4, 5 ],
//   [ 19, 20, 21, 22, 23, 6 ],
//   [ 18, 31, 32, 33, 24, 7 ],
//   [ 17, 30, 35, 34, 25, 8 ],
//   [ 16, 29, 28, 27, 26, 9 ],
//   [ 15, 14, 13, 12, 11, 10 ] ]
```

SpiralMatrix object has two methods.

``` javascript
spiralMatrix.get(); // Returns matrix as two dimensional array.
```

``` javascript
spiralMatrix.toString(); // Returns matrix as string.
```

## License
[GFDL-1.2](https://github.com/HyunSeob/spiral-matrix/blob/master/LICENSE)

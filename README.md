[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependencies][dependencies-image]][dependencies-url]

# ndarray-cholesky-factorization

A module for calculating the in-place [Cholesky decomposition](http://en.wikipedia.org/wiki/Cholesky_decomposition) of symmetric, positive-definite matrix.

## Installation

``` bash
npm install ndarray-cholesky-factorization
```

## Usage

``` javascript
var cholesky = require('ndarray-cholesky-factorization');
```

### cholesky(A, L)

Calculates the Cholesky factorization for a symmetric, positive-definite matrix `A`, which has to be an `ndarray`. The decomposition splits the matrix into the product of a lower triangular matrix and its transpose, i.e. `A = LL^t`. The result is stored in-place in `L`, and the function returns `true` upon successful completion.

### Example

``` javascript
var cholesky = require('ndarray-cholesky-factorization'),
    pool = require('ndarray-scratch');

var A = ndarray(new Float64Array([4,12,-16,12,37,-43,-16,-43,98]), [3, 3]);
var L = pool.zeros( A.shape, A.dtype );

cholesky(A, L)
```

## Unit Tests

Run tests via the command `npm test`

---
## License

[MIT license](http://opensource.org/licenses/MIT).

[npm-image]: https://badge.fury.io/js/ndarray-cholesky-factorization.svg
[npm-url]: http://badge.fury.io/js/ndarray-cholesky-factorization

[travis-image]: https://travis-ci.org/scijs/ndarray-cholesky-factorization.svg
[travis-url]: https://travis-ci.org/scijs/ndarray-cholesky-factorization

[dependencies-image]: http://img.shields.io/david/scijs/ndarray-cholesky-factorization.svg
[dependencies-url]: https://david-dm.org/scijs/ndarray-cholesky-factorization

'use strict';

var test = require('tape'),
    ndarray = require('ndarray'),
    cholesky = require('./../index.js'),
    pool = require('ndarray-scratch'),
    ops = require('ndarray-ops');

function isCloseTo(A, B) {
    var diff = pool.zeros( A.shape, A.dtype );
    ops.sub( diff, A, B );
    var err2 = ops.norm2( diff );
    return err2 < 1e-8 ? true : false;
}

test( 'cholesky function decomposes symmetric, positive-define matrix A into LL^t', function check(t) {
    var A = ndarray(new Float64Array([4,12,-16,12,37,-43,-16,-43,98]), [3, 3]);
    var L = pool.zeros( A.shape, A.dtype );

    t.plan(2);

    var success = cholesky(A, L);

    t.assert(success, 'cholesky returns true');

    var L_expected = ndarray(new Float64Array([2,0,0,6,1,0,-8,5,3]), [3, 3]);

    t.assert(isCloseTo(L_expected, L), 'L is correctly calculated');

    t.end();

});

test('returns false if provided non-square matrix',function check(t) {

	t.plan(1);
	var A = ndarray(new Float64Array([1,2,2,4,8,6]), [2, 3]);
	var L = pool.zeros( A.shape, A.dtype );
	var d = pool.zeros( [ A.shape[0] ], A.dtype);
	var result = cholesky(A, L, d);

	t.notOk(result, 'returns false');
	t.end();
});

test('returns false if provided higher-dimensional array (dim > 2)',function check(t) {

	t.plan(1);
	var A = ndarray(new Float64Array([1,2,3,4,5,6,7,8]), [2,2,2]);
	var L = pool.zeros( A.shape, A.dtype );
	var d = pool.zeros( [ A.shape[0] ], A.dtype);
	var result = cholesky(A, L, d);

	t.notOk(result, 'returns false');
	t.end();
});

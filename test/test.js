'use strict';

var chai = require('chai'),
    expect = chai.expect,
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

describe('cholesky decomposition', function tests() {
    it( 'decomposes symmetric, positive-define matrix A into LL^t', function test() {
        var A = ndarray(new Float64Array([4,12,-16,12,37,-43,-16,-43,98]), [3, 3]);
        var L = pool.zeros( A.shape, A.dtype );

        var success = cholesky(A, L);

        expect(success).to.be.true;

        var L_expected = ndarray(new Float64Array([2,0,0,6,1,0,-8,5,3]), [3, 3]);

        expect( isCloseTo(L_expected, L) ).to.be.true;

    });
});

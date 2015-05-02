'use strict';

var blas1 = require('ndarray-blas-level1');

module.exports =  function cholesky(A, L) {

	if ( A.dimension !== 2 ) {
		return false;
	}

	var n = A.shape[0];

	for ( var i = 0; i < n; i++ ) {
    	for ( var j = 0; j < (i+1); j++ ) {

			var s = blas1.dot(L.pick(i,null).hi(j), L.pick(j,null).hi(j));
			var res = (i === j) ?
				Math.sqrt(A.get(i, i) - s) :
				(1 / L.get(j, j) * (A.get(i, j) - s));
			
			L.set(i, j, res);
		}
	}

	return true;
};

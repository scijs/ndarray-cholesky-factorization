'use strict';

module.exports =  function cholesky(A, L) {

	if ( A.dimension !== 2 ) {
		return false;
	} 

    var n = A.shape[0];

    for ( var i = 0; i < n; i++ ) {
        for ( var j = 0; j < (i+1); j++ ) {
            var s = 0;
            for ( var k = 0; k < j; k++ ) {
                s += L.get(i, k) * L.get(j, k);
            }
            var res = (i === j) ?
                           Math.sqrt(A.get(i, i) - s) :
                           (1 / L.get(j, j) * (A.get(i, j) - s));
            L.set(i, j, res);
        }
	}

    return true;
};

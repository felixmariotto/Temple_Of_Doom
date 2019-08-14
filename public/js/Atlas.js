
function Atlas() {

	const d0 = [ 0, 0, 0, 1, 1, 0, 0, 0 ];

	const d1 = [ 1, 1, 0, 0, 1, 2, 1, 2 ];

	const d2 = [ 0, 0, 0, 1, 2, 3, 0, 1 ];

	function getIDs( d ) {
		switch (d) {
			case 0 : return d0 ;
			case 1 : return d1 ;
			case 2 : return d2 ;
		};
	};

	function getArrays() {
		return [ d0, d1, d2 ];
	};

	return {
		getIDs,
		getArrays,
		prout:10
	};

};
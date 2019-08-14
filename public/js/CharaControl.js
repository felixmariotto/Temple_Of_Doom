
function CharaControl( logicSquare ) {

	const square = logicSquare;

	function walkRight( offset ) {
		square.move( offset, 0, 0 );
		if ( square.collision.right > 0 ) {
			square.move( - offset, 0, 0 );
		};
	};

	return {
		walkRight
	};
};

function CharaControl( logicSquare ) {


	const square = logicSquare;


	function walkRight( offset ) {
		square.move( offset, 0, 0 );
		// keep the cube from entering a wall
		if ( square.collision.right > 0 ) {
			square.move( - offset, 0, 0 );
		};
	};


	function leapOffset( offset ) {
		square.move( 0, offset * 0.3 , 0 );
		// keep the cube from entering the ground
		if ( square.collision.right > 0 ) {
			square.move( 0, square.collision.right, 0 );
		} else if ( square.collision.left > 0 ) {
			square.move( 0, square.collision.left, 0 );
		};
	};


	return {
		walkRight,
		leapOffset
	};
};
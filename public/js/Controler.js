

function Controler( logicSquare ) {

	const square = logicSquare;

	const RUNSPEED = 0.035 ;
	const LEAPSPEED = 0.1 ;
	const LEAPPOWER = 0.3 ;
	const FALLSPEED = -0.1 ;

	var run = 0 ;
	var leap = 0 ;
	var leapLevel = 0 ;

	var hasShifted = false ;
	var hasJumped = false ;




	function update() {

		///// Actions starting

		// If both right and left arrows are pressed, character is stilled,
		// but if right or left arrow is pressed alone, 'run' variable is
		// set, so the character start moving next time 'run' is checked.
		// If neither right nor left arrow is pressed, character is stilled.
		if ( (keys.isPressed.left && keys.isPressed.right) ||
			 (!keys.isPressed.left && !keys.isPressed.right) ) {
			run = 0 ;
		} else if ( keys.isPressed.left ) {
			run = -RUNSPEED ;
		} else if ( keys.isPressed.right ) {
			run = RUNSPEED ;
		};


		// If both up en down arrows are either not pressed or both pressed,
		// 'hasShifted' variable is set to false, so the character can shift
		// once again. If one of these arrow is pressed, and 'hasShifted' is
		// true, then the character is shifted. This is intended to keep the
		// user from shifting too much by mistake.
		if ( (keys.isPressed.up && keys.isPressed.down) ||
			 (!keys.isPressed.up && !keys.isPressed.down) ) {

			hasShifted = false ;

		} else if ( hasShifted == false && keys.isPressed.up ) {

			if ( square.position.z > 0 ) {
				square.shift( -1 );
			};
			hasShifted = true ;

		} else if ( hasShifted == false && keys.isPressed.down ) {

			if ( square.position.z < 2 ) {
				square.shift( 1 );
			};
			hasShifted = true ;
		};



		if ( keys.isPressed.space ) {
			if ( hasJumped == false && leap == 0 && !square.isFlying() ) {
				leap = LEAPSPEED;
				hasJumped = true ;
			};
		} else {
			hasJumped = false ;
		};




		///// Actions handling

		if ( run != 0 ) {
			walk( run );
		};


		if ( leap > 0 ) {
			leap += LEAPSPEED ;
			leapLevel = Math.sin( leap );
			if ( leap < 1.5 ) {
				leapOffset( 1 - leapLevel );
			};
			
			if ( leap > 1.5 ) leap = 0 ;
		};


		if ( leap == 0 ) {
			if ( square.isFlying() ) {
				fall();
			};
		};

	};



	function walk( offset ) {
		square.move( offset, 0, 0 );
		// keep the cube from entering a wall
		if ( (offset > 0 && square.collision.right > 0) ||
			 (offset < 0 && square.collision.left > 0) ) {

			square.move( - offset, 0, 0 );
		};
	};


	function leapOffset( offset ) {
		square.move( 0, offset * LEAPPOWER , 0 );
		
	};


	function fall() {
		square.move( 0, FALLSPEED, 0 );
		// keep the cube from entering the ground
		if ( square.collision.right > 0 ) {
			square.move( 0, square.collision.right, 0 );
		} else if ( square.collision.left > 0 ) {
			square.move( 0, square.collision.left, 0 );
		};
	};



	return {
		update
	};

};
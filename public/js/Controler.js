

function Controler( logicSquare ) {

	const square = logicSquare;

	const RUNSPEED = 0.035 ;
	const LEAPSPEED = 0.1 ;
	const LEAPPOWER = 0.3 ;
	const FALLSPEED = -0.2 ;

	var run = 0 ;
	var leap = 0 ;
	var leapLevel = 0 ;

	var hasShifted = false ;
	var hasJumped = false ;

	var mustStep = false ;
	var steppingTimeout = 0 ;
	var stepDirection;

	var fallRatio = 0 ;




	function update() {

		///// Actions starting

		// If both right and left arrows are pressed, character is stilled,
		// but if right or left arrow is pressed alone, 'run' variable is
		// set, so the character start moving next time 'run' is checked.
		// If neither right nor left arrow is pressed, character is stilled.
		if ( (keys.isPressed.left && keys.isPressed.right) ||
			 (!keys.isPressed.left && !keys.isPressed.right) ) {
			// make the character still
			run = 0 ;
			// If the player does not push an arrow, the character
			// will not step over a step.
			mustStep = false ;
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


		// This statement occur after the player has malked against a steppable
		// ostacle during some time, represented by steppingTimeout.
		if ( steppingTimeout >= 1 ) {
			
			// steppingTimeout is reused to play the stepping action.
			// mustStep is re-set to true, is case the player stopped
			// walking, to make this action unavoidable once started.
			if ( steppingTimeout - 1 < 2 ) {
				square.step( (steppingTimeout - 1) / 2, stepDirection );
				mustStep = true ;

			// reset all the stepping variable, the action is finished
			} else {
				steppingTimeout = 0 ;
				mustStep = false ;
			};
		};


		// if mustStep is true, it means that the player is walking against a
		// steppable obstacle. steppingTimeout in incremented, so that when it
		// reach a given value, the stepping action will occur.
		// If mustStep is false, steppingTimeout is reset.
		if ( mustStep ) {
			steppingTimeout += 0.15 ;
		} else {
			steppingTimeout = 0 ;
		};



		// we check if steppingTimeout < 1 because running
		// must not occur when the character is stepping
		if ( run != 0 && steppingTimeout < 1 ) {
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


		if ( leap == 0 &&
			 square.isFlying() &&
			 steppingTimeout < 1 ) {

			fallRatio = fallRatio >= 1 ? 1 : fallRatio + 0.1 ;
			fall();

		} else {
			fallRatio = 0 ;
		};
		

	};



	function walk( offset ) {

		square.move( offset, 0, 0 );

		// set mustStep to its default, it will be set again to true in the
		// next statement if needed
		mustStep = false ;

		// keep the cube from entering a wall
		if ( (offset > 0 && square.collision.right > 0) ||
			 (offset < 0 && square.collision.left > 0) ) {

			// If the step facing the square is smaller than half or equal to
			// the half of its height, then the square is set to step this step
			if ( (square.height - square.collision.right) >= square.height/2 &&
				 (square.height - square.collision.left) >= square.height/2 ) {

				mustStep = true ;
				stepDirection = square.collision.right > 0 ? 'right' : 'left';
			};

			square.move( - offset, 0, 0 );

			// start the stepping action whatever steppingTimeout hold,
			// to act as if the character catch an edge after jumbing
			if ( square.isFlying() && mustStep && steppingTimeout < 1 ) {
				steppingTimeout = 1 ;
			};
		};
	};




	function leapOffset( offset ) {
		square.move( 0, offset * LEAPPOWER , 0 );
		
	};


	function fall() {

		square.move( 0, FALLSPEED * fallRatio, 0 );

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
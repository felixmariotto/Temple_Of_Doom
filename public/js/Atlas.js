
function Atlas() {


	// ATLAS ARRAYS
	// these arrays hold the height of individual steps in the tracks
		

	/* ORIGINAL MAP																																					// trap hole							// trap little hole							// columns slalom									// climbing backward										// big climbing												// leap																							             /// Chamber																																									
	const d0 =          [ 10, 8, 8, 8, 8, 8, 2, 2,   2,    2, 2, 2, 2,    1.75, 1.5,  1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 3.5, 4,    4,   4, 4, 4,   10, 4,   10, 4,   10, 6,   5.5, 5,   4.5, 3,   2.5, 2.5,   2.5, 2.5, 15,  2.5, 2.5, 2.5, 15,  2.5, 2.5, 2.5, 15,  3,   6,   6,     3.5, 6,   6,    6,    6,    30,   6.5,  30,   8,    30,   11.5, 11.5, 11,   30,   12.5, 14,   14,   14,   0,    0,    0,    0,    0,    0,    0,    14,   35,   14,   14,   14,   35,   14,   14,   35,   14,   14,   35,   14,   14,   14,   14, 14, 0,  14, 0,    0,  14, 14, 14,   14,   14,   35,   14,   14,   35,   14,   14,   35,   14, 14, 14, 17.5, 14,   17.5, 18.5, 17, 19, 16.5, 19.5, 20, 20, 20,    19.5, 35,   20,   35,   0,  20,   20,    0,  0,  0,  35, 35, 35, 35, 35, 35, 35, 35 ]; // RED
	const d1 =          [ 10, 2, 2, 2, 2, 2, 2, 3.5, 2.25, 2, 2, 2, 1.75, 1.5,  1.25, 0.5,  0.5,  1,    2,    3,    0.5,  2,    2.5,  3,   3.5,  4,   4, 4, 4,   4,  4,   4,  4,   4,  4.5, 4.5, 4.5, 4,   0,   0,   2.5,   2.5, 2.5, 2.5, 2.5, 15,  2.5, 2.5, 2.5, 15,  2.5, 2.5, 2.5, 2.5, 5,     3.5, 3,   5.5,  6,    6,    6.5,  7,    8,    8,    9.5,  9.5,  30,   11,   12.5, 12.5, 35,   14,   14,   14,   0,    14,   0,    14,   0,    14,   14,   14,   14,   35,   14,   14,   14,   14,   14,   14,   14,   14,   14,   14,   35,   14, 14, 0,  14, 14,   0,  14, 14, 35,   14,   14,   14,   14,   14,   14,   14,   14,   14,   14, 35, 14, 35,   14,   17.5, 14.5, 17, 15, 16.5, 16,   15, 20, 20,    19.5, 20,   20,   20,   0,  35,   20,    0,  20, 20, 20, 35, 35, 35, 35, 35, 35, 35 ]; // BLUE
	const d2 =          [ 10, 8, 8, 8, 8, 8, 2, 2,   2,    2, 2, 2, 1,    1,    0.5,  0.5,  0.5,  0.5,  0,    0,    0.5,  1,    1,    1,   2.25, 3,   4, 4, 3.5, 3,  2.5, 2,  1.5, 1,  4,   3.5, 3.5, 3,   0,   0,   2.5,   2.5, 2.5, 15,  2.5, 2.5, 2.5, 15,  2.5, 2.5, 2.5, 15,  2.5, 2.5, 2.5,   2.5, 3,   3.5,  3.5,  5.5,  6,    6.5,  8,    8,    30,   9.5,  11,   11,   30,   12.5, 14,   14,   14,   0,    0,    0,    0,    0,    0,    11,   11,   11,   12,   13,   14,   35,   14,   14,   35,   14,   14,   35,   14,   14,   14,   14, 14, 0,  0,  13.5, 0,  14, 14, 14,   14,   14,   35,   14,   14,   35,   14,   14,   35,   14, 14, 14, 14,   14,   14,   14.5, 14, 15, 14,   15.5, 14, 20, 19.75, 19.5, 19.5, 19.5, 19.5, 0,  19.5, 20,    0,  0,  0,  35, 35, 35, 35, 35, 35, 35, 35 ]; // GREEN
	*/

	// flags									//mask																	// tuto Chamber													// start hole									// tuto stairs																		// big stairs																																					// chamber 1													// chamber 2
	const d0 =          [ 10, 8, 8, 8, 8, 8, 2, 2,   2,    2, 2, 10, 2,   10,  2, 1.75, 1.5, 1.25, 1, 1, 1, 1,  1, 15, 1, 1.5, 1, 15, 1, 1,  1, 1, 1, 1.25, 1.5, 1.75, 2, 10,  2,   10, 2, 2,  2,  2, 2, 10, 10, 2,   10,  10,  2,   2,   2.5,  2.5, 2.5,  3.75, 3.75, 3.75, 3.75, 5.25, 5.25, 5,   5,    5,    5,    10,   5, 10, 5,   8.25, 8.25, 8.5, 8,  9,  9.25, 9.25, 11.75, 9.75, 12.5,  12.5, 10.5,  10.5, 10.5, 10.5, 10.5, 10.5, 20,   12.5, 20,   12.5, 12.5, 12.5, 20,   12.5, -3,   -3,    -3,   12.5, 20,   12.5, 12.5, 12.5, 20,   12.5, 12.5, 12.5, -3,   12.5, -3,   -3,   20,   12.5, 12.5, 12.5, 20,   12.5, 20,   11.5, 12,   -3,   30,   -3,   30,   -3,   -3,   -3,   -3,   -3,   12.5, -3,   -3,   13.25, -3,    12.5, -3,   -3,   15,   -3,   13.5, -3,   14.25, -3,   13,   -3,   -3,   30,   30,   30,   30,   30  ]; // RED
	const d1 =          [ 10, 2, 2, 2, 2, 2, 2, 3.5, 2.25, 2, 2, 2,  2,   2,   2, 1.75, 1.5, 1.25, 1, 1, 1, 15, 1, 1,  1, 1.5, 1, 1,  1, 15, 1, 1, 1, 1.25, 1.5, 1.75, 2, 2,   2,   2,  2, 2,  2,  2, 2, 2,  2,  2,   2,   2,   2,   2,   2,    3,   3,    3,    4.5,  3.75, 3.25, 7,    6.25, 4.5, 5.5,  5,    5,    5,    5, 5,  5,   5,    5,    5,   8,  8,  7,    9.25, 11,    9.25, 10.25, 12.5, 12.5,  10.5, 12.5, 10.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 20,   12.5, 12.5, 12.5, -3,   12.5,  -3,   12.5, 12.5, 12.5, 20,   12.5, 12.5, 12.5, -3,   -3,   -3,   -3,   12.5, 12.5, 12.5, 12.5, 20,   12.5, 12.5, 12.5, 12.5, 12.5, 12.5, -3,   11.5, -3,   12.5, -3,   12.5, -3,   12.5, 12.5, -3,   11.5, -3,   11,    11.25, -3,   -3,   11.5, -3,   -3,   -3,   12.5, -3,    -3,   -3,   12.5, 12.5, 12.5, 12.5, 12.5, 30,   30  ]; // BLUE
	const d2 =          [ 10, 8, 8, 8, 8, 8, 2, 2,   2,    2, 2, 10, 2,   10,  2, 1.75, 1.5, 1.25, 1, 1, 1, 1,  1, 15, 1, 1.5, 1, 15, 1, 1,  1, 1, 1, 1.25, 1.5, 1.75, 2, 10,  2,   10, 2, 2,  2,  2, 2, 10, 10, 2,   10,  10,  2,   2,   2,    2.5, 2.75, 2,    2.5,  3.75, 3.25, 4,    4.25, 4.5, 4.75, 5,    5,    10,   5, 10, 5,   5,    5,    5,   5,  6,  7,    9 ,   9.25,  9.25, 9.25,  9.5,  10.25, 10.5, 10.5, 10.5, 10.5, 10.5, 20,   12.5, 20,   12.5, 12.5, 12.5, 20,   12.5, -3,   11.75, -3,   12.5, 20,   12.5, 12.5, 12.5, 20,   -3,   -3,   12.5, -3,   12.5, -3,   9.5,  10.5, 11.5, 12.5, 12.5, 20,   12.5, 13,   11.5, 12,   -3,   12.5, -3,   11.5, -3,   11.5, -3,   -3,   -3,   -3,   -3,   -3,   10.5,  -3,    -3,   -3,   -3,   11,   -3,   11.5, -3,   -3,    -3,   -3,   -3,   -3,   30,   30,   30,   30,   30  ]; // GREEN
	
	const roof =        [ 5,  5, 5, 5, 5, 5, 5, 5,   5,    5, 5, 5,  5.5, 5.5, 6, 6,    6,   6,    6, 6, 6, 4,  4, 4,  4, 4,   4, 4,  4, 4,  6, 6, 6, 6,    6,   6,    6, 5.5, 5.5, 5,  5, 30, 30, 5, 5, 5,  5,  4.5, 4.5, 4.5, 4.5, 4.5, 4.75, 5,   5.25, 5.5,  5.75, 6,    6.25, 6.5,  6.75, 7,   7.25, 7.25, 7.25, 7.25, 9, 9,  17,  17,   17,   17,  17, 17, 17,   17,   14,    17,   14.5,  17,   17,    17,   17,   17,   17,   17,   16,   16,   15,   15,   15,   15,   15,   15,   30,   30,    30,   15,   15,   15,   15,   15,   15,   15,   30,   30,   30,   30,   30,   15,   15,   15,   15,   15,   15,   16.5, 16.5, 16.5, 16.5, 30,   16.5, 30,   16.5, 30,   16.5, 30,   16.5, 16.5, 16.5, 16.5, 30,   16.5,  16.5,  16.5, 30,   16.5, 16.5, 30,   16.5, 16.5, 16.5,  30,   16.5, 16.5, 16.5, 15.5, 15.5, 15.5, 15.5, 15.5    ];

	const chaserTrack = [ 3,  3, 3, 3, 3, 3, 3, 3,   3,    3, 3, 3,  3,   3,   3, 2.75, 2.5, 2.25, 2, 2, 2, 2,  2, 2,  2, 2,   2, 2,  2, 2,  2, 2, 2, 2.25, 2.5, 2.75, 3, 3,   3,   3,  3, 3,  3,  3, 3, 3,  3,  3,   3,   3,   3,   3,   3.25, 3.5, 3.75, 4,    4.25, 4.5,  4.75, 5,    5.25, 5.5, 5.75, 6,    6,    6,    7,     8.5, 9.5,  9.5,  9.5, 10, 10, 10.5, 13,   13,    13.5, 13.5,  13.5, 13.5,  13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5,  13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5,  13.5,  13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5,  13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5 ]
	
	

	const tracks = [ d0, d1, d2 ];

	const ENDPOINT = 145  //OLD : 137 ;

	const CAMERAVEC = new THREE.Vector3( -1, 2, 19 );
	const SPRITEVEC = new THREE.Vector3( 0.25, 0.4, 0.5 );

	var pointsArrays = [];
	var isFlying ;
	var tempObstacles = [];


	var wallsMaterial = new THREE.MeshLambertMaterial({ color: 0x292417 });




	// TempObstacle creates a temporary obstacle against which
	// logicSquare.move() check collision, in addition to the atlas.
	// If vec.z is higher than 2, the tempObstacle is considered
	// spanning over the 3 tracks
	function TempObstacle( name, vec, needHelper ) {

		let tempObstacle = {
			name,
			vec
		};

		tempObstacles.push( tempObstacle );

		let helper = needHelper ? new THREE.Group() : undefined ;
		
		if ( helper ) {

			const offsetVec = new THREE.Vector3( 0.5, 0, 0.5 );

			let isSpanning = vec.z > 2 ;
			let depth = isSpanning ? 2.9 : 1 ;

			let geom = new THREE.BoxBufferGeometry( 1, 80, depth );
			let mesh = new THREE.Mesh( geom, wallsMaterial );

			mesh.position.copy(vec) ;
			if ( isSpanning ) {
				mesh.position.z = 1 ;
			};
			mesh.position.add( offsetVec );
			mesh.position.y -= 40 ;

			scene.add( mesh );

			tempObstacle.helper = mesh ;
		};

		return tempObstacle ;
	};




	// remove a tempObstacle from tempsObstacles array and from the scene,
	// and free memory.
	function removeTempObstacle( name ) {

		let tempObstacle = tempObstacles.find( (tempObstacle)=> {
			return tempObstacle.name == name ;
		});

		if ( tempObstacle ) {
			tempObstacles.splice( tempObstacles.indexOf( tempObstacle ), 1 );
			if ( tempObstacle.helper ) {
				scene.remove( tempObstacle.helper );
				tempObstacle.helper.geometry.dispose();
				tempObstacle.helper.material.dispose();
			};
		};
	};





	// initVectors() transforms the atlas arrays (d0, d1 and d2),
	// into arrays of THREE.Vector3.
	function initVectors() {

		[ d0, d1, d2 ].forEach( (dimension, i)=> {

			pointsArrays.push([]);

			// transform the atlas references into pointsArrays,
			// the atlas hold only the height, the horizontal offset
			// is equal to the position in the array.
			dimension.forEach( (height, index)=> {
				pointsArrays[i].push( new THREE.Vector3( index, height, i ) );
			});

		});
	};






	// LogicCube is an abstrac class, used to compute collisions
	// with the atlas.
	function LogicSquare( width, height, position ) {

		position = position || new THREE.Vector3();
		let collision = { left:0, right:0 };


		function move( x, y, z ) {

			this.position.x += x ;
			this.position.y += y ;
			this.position.z += z ;

			console.log( 'x : ' + this.position.x.toFixed(2) + ' / y : ' + this.position.y.toFixed(2) );

			if ( this.helper ) {
				this.helper.position.x += x ;
				this.helper.position.y += y ;
				this.helper.position.z += z ;
			};

			if ( this.camera ) {
				this.camera.position.x += x ;
				this.camera.position.y += y ;
				this.camera.lookAt(
					this.position.x,
					this.position.y + 2,
					this.position.z
					);
			};

			if ( this.sprite ) {
				this.sprite.position.x += x ;
				this.sprite.position.y += y ;
				this.sprite.position.z += z ;
			};

			// collide with the atlas
			testCollision( this, tracks[ this.position.z ] );
			
			// collide with the temporary obstacles
			tempObstacles.forEach( (tempObstacle)=> {
				testCollisionTemp( this, tempObstacle );
			});

			// test collision with treasures
			treasures.testCollision( this );

			// test if the player reached the end
			if ( this.position.x >= ENDPOINT ) {
				game.win();
			};

		};




		function moveTo( vec ) {
			this.position.copy( vec );
			if (this.helper) this.helper.position.copy( vec );
			if (this.sprite) this.sprite.position
						.copy( SPRITEVEC )
						.add( vec );
			if (this.camera) this.camera.position
						.copy( CAMERAVEC )
						.add( vec );
		};




		// step() make the character step over an obstacle,
		// it is called by the Controler loop with a t argument
		// representing the time on the animation, between 0 and 1;
		function step( t, direction ) {
			this.move( 0.01 * ( direction == 'right' ? 1 : -1 ) , ( collision[ direction ] * t ) + 0.01, 0 );
		};



		function isFlying() {
			
			/*
			let track = tracks[ this.position.z ]

			// Quelle est la hauteur de la marche sur laquelle
			// l'angle bas-gauche se trouve ?
				// La hauteur de l'angle bas-gauche est-elle
				// inférieur a la hauteur de l'angle + n ?
			let heightCurrentStepLeft = track[ Math.floor(this.position.x) ];
			let heightSquare = this.position.y ;
			let isFlying = ( heightCurrentStepLeft + 0.02 ) < heightSquare ;

			if ( isFlying == true ) {

				let heightCurrentStepRight = track[ Math.floor(this.position.x + this.width) ];
				isFlying = ( heightCurrentStepRight + 0.02 ) < heightSquare ;

				return isFlying ;

			} else {
				return false ;
			};
			*/

			
			isFlying = ( tracks[ this.position.z ][ Math.floor(this.position.x) ] + 0.02 ) < this.position.y ;

			if ( isFlying == true ) {

				isFlying = ( tracks[ this.position.z ][ Math.floor(this.position.x + this.width) ] + 0.02 ) < this.position.y ;

				return isFlying ;

			} else {
				return false ;
			};

		};


		// shit() make the square change of atlas track
		function shift( increment ) {

			if ( !isInside( this, tracks[ this.position.z + increment ] ) ) {
				this.move( 0, 0, increment );
				return true ;
			} else {
				return false ;
			}

			// isInside returns true if the square would be inside the passed track
			// if it was transposed to it without any more movement.
			function isInside( square, track ) {
				return square.position.y < track[ Math.floor(square.position.x) ] ||
					 square.position.y < track[ Math.floor(square.position.x + square.width) ] ;
			};

		};


		return {
			width,
			height,
			position,
			collision,
			move,
			moveTo,
			shift,
			step,
			isFlying,
			helper: undefined,
			camera: undefined,
			sprite: undefined
		};
	};





	function testCollision( logicSquare, track ) {

		/*
		// Quelle est la hauteur de la marche sur laquelle
		// l'angle bas-gauche se trouve ?
			// La hauteur de l'angle bas-gauche est-elle moindre
			// que cette hauteur ?
		let heightCurrentStepLeft = track[ Math.floor(logicSquare.position.x) ];
		let heightSquare = logicSquare.position.y ;
		logicSquare.collision.left = heightCurrentStepLeft - heightSquare ;

		// Comment savoir, en fonction de logicSquare.width, si l'angle
		// droit du carré est au-dessus de la prochaine marche ?
		let heightCurrentStepRight = track[ Math.floor(logicSquare.position.x + logicSquare.width) ];
		logicSquare.collision.right = heightCurrentStepRight - heightSquare ;

		console.log( logicSquare.collision )
		*/


		// VERSION WITHOUT VARIABLE DECLARATION
		logicSquare.collision.left = track[ Math.floor(logicSquare.position.x) ] -
									 logicSquare.position.y ;

		logicSquare.collision.right = track[ Math.floor(logicSquare.position.x +
															logicSquare.width) ] -
									  logicSquare.position.y ;

	};




	// testCollisionTemp update logicSquare.collision if the square traverse
	// a temporary obstacle bigger than the atlas
	function testCollisionTemp( logicSquare, tempObstacle ) {
		
		// Angle droit de trouve sur l'obstacle
		if ( Math.floor(logicSquare.position.x + logicSquare.width) == tempObstacle.vec.x ) {

			if ( logicSquare.collision.right < ( tempObstacle.vec.y - logicSquare.position.y ) ) {
				logicSquare.collision.right = ( tempObstacle.vec.y - logicSquare.position.y )
			};

		// Angle gauche de trouve sur l'obstacle
		} else if ( Math.floor(logicSquare.position.x) == tempObstacle.vec.x ) {

			if ( logicSquare.collision.left < ( tempObstacle.vec.y - logicSquare.position.y ) ) {
				logicSquare.collision.left = ( tempObstacle.vec.y - logicSquare.position.y )
			};
		};
	};






	return {
		initVectors,
		pointsArrays,
		LogicSquare,
		chaserTrack,
		roof,
		TempObstacle,
		removeTempObstacle
	};

};
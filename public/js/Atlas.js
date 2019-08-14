
function Atlas() {


	// ATLAS ARRAYS
	// these arrays hold the height of individual steps in the track
	const d0 = [ 0, 0, 0, 0.5, 1, 0, 0, 0, 1, 2, 3, 4, 4, 4 ]; // RED
	const d1 = [ 1, 1, 0, 0, 1, 2, 1, 1, 0.5, 2, 3, 3, 0.5, 2 ]; // BLUE
	const d2 = [ 0, 0, 0.5, 1, 1.5, 3, 0, 0, 1, 1, 2, 2, 2, 2 ]; // GREEN
	const tracks = [ d0, d1, d2 ];

	var pointsArrays = [];
	var isFlying ;





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






	// LogicCube is an abstrac class, used to compute colisions
	// with the atlas.
	function LogicSquare( width, height, position ) {

		position = position || new THREE.Vector3();
		let collision = { left:0, right:0 };


		function move( x, y, z ) {
			this.position.x += x ;
			this.position.y += y ;
			this.position.z += z ;

			if ( this.helper ) {
				this.helper.position.x += x ;
				this.helper.position.y += y ;
				this.helper.position.z += z ;
			};

			if ( this.camera ) {
				this.camera.position.x += x ;
				this.camera.lookAt(
					this.position.x,
					this.position.y + 2,
					this.position.z
					);
			};

			testCollision( this, tracks[ this.position.z ] );
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


		return {
			width,
			height,
			position,
			collision,
			move,
			isFlying,
			helper:undefined,
			camera: undefined,
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





	return {
		initVectors,
		pointsArrays,
		LogicSquare
	};

};
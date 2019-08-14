
function Atlas() {


	// ATLAS ARRAYS
	// these arrays hold the height of individual steps in the track
	const d0 = [ 0, 0, 0, 0.5, 1, 0, 0, 0, 1, 2, 3, 4, 4, 4 ]; // RED
	const d1 = [ 1, 1, 0, 0, 1, 2, 1, 1, 0.5, 2, 3, 3, 0.5, 2 ]; // BLUE
	const d2 = [ 0, 0, 0.5, 1, 1.5, 3, 0, 0, 1, 1, 2, 2, 2, 2 ]; // GREEN

	var pointsArrays = [];


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

		return {
			width,
			height,
			position
		};
	};




	return {
		initVectors,
		pointsArrays,
		LogicSquare
	};

};
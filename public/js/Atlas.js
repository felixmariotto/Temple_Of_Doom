
function Atlas() {

	// ATLAS ARRAYS
	// these arrays hold the height of individual steps in the track
	const d0 = [ 0, 0, 0, 1, 1, 0, 0, 0 ];
	const d1 = [ 1, 1, 0, 0, 1, 2, 1, 2 ];
	const d2 = [ 0, 0, 0, 1, 2, 3, 0, 1 ];

	var points = [];

	// initVectors() transforms the atlas arrays (d0, d1 and d2),
	// into arrays of THREE.Vector3.
	function initVectors() {

		[ d0, d1, d2 ].forEach( (dimension, i)=> {

			points.push([]);

			// transform the atlas references into points,
			// the atlas hold only the height, the horizontal offset
			// is equal to the position in the array.
			dimension.forEach( (height, index)=> {
				points[i].push( new THREE.Vector3( index, height, 0 ) );
			});

		});
		console.log( points );
	};



	function getIDs( d ) {
		switch (d) {
			case 0 : return d0 ;
			case 1 : return d1 ;
			case 2 : return d2 ;
		};
	};



	return {
		getIDs,
		initVectors
	};

};

function SceneGenerator() {


	// createShape() takes the array of points representing one dimension
	// in the game, and one color to apply to the shape.
	// It create new points between each existing point to create the steps,
	// and add two points very low to make the shape visible on the bottom
	// of the atlas.
	function createShape( points, color ) {

		let shiftLeftVec = new THREE.Vector3( 1, 0, 0 );
		let shiftBottomVec = new THREE.Vector3( 0, -20, 0 );

		let newArr = points.reduce( (accu, value, i, arr)=> {
			
			accu.push(value);
			accu.push( new THREE.Vector3()
									.copy( value )
									.add( shiftLeftVec ) );


			// If this is the end of the array, we add the two points
			// far bellow the scene, to make the shape extend toward
			// the bottom of the screen
			if ( i == arr.length -1 ) {

				accu.push( new THREE.Vector3()
										.copy( arr[i] )
										.add( shiftBottomVec ) );

				accu.push( new THREE.Vector3()
										.copy( arr[0] )
										.add( shiftBottomVec ) );
			};

			return accu ;

		}, []);

		var heartShape = new THREE.Shape( newArr );

		var geometry = new THREE.ShapeGeometry( heartShape );
		var material = new THREE.MeshBasicMaterial( { color: color } );
		var mesh = new THREE.Mesh( geometry, material ) ;
		mesh.position.z = points[0].z ;

		scene.add( mesh );
	};

	return {
		createShape
	};

};
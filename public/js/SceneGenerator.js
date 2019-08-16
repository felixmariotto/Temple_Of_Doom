
function SceneGenerator( pointsArrays ) {


	const TRACKSCOLORS = [ "red", "blue", "green" ];

	const extrudeSettings = {
			steps: 1,
			depth: 1,
			extrudePath: new THREE.LineCurve3(
								new THREE.Vector3(0, 0, 0),
								new THREE.Vector3(0, 0, 1)
								)
		};



	var shapes = [];

	var shiftLeftVec = new THREE.Vector3( 1, 0, 0 );
	var shiftBottomVec = new THREE.Vector3( 0, -20, 0 );



	// This create new points between each existing point to create the steps,
	// and add two points very low to make the shape visible on the bottom
	// of the atlas.
	pointsArrays.forEach( (points)=> {

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

		shapes.push( new THREE.Shape( newArr ) );

	});





	// createShape() takes the array of points representing one dimension
	// in the game, and one color to apply to the shape.
	function generateShapes() {
		
		shapes.forEach( (shape, i)=> {
			var geometry = new THREE.ShapeGeometry( shape );
			var material = new THREE.MeshBasicMaterial( { color:TRACKSCOLORS[i] } );
			var mesh = new THREE.Mesh( geometry, material ) ;
			mesh.position.z = i ;
			scene.add( mesh );
		});
	};





	function generateExtrusions() {

		shapes.forEach( (shape, i)=> {
			let geometry = new THREE.ExtrudeBufferGeometry( shape, extrudeSettings );
			let material = new THREE.MeshLambertMaterial( { color:TRACKSCOLORS[i] } );
			let mesh = new THREE.Mesh( geometry, material ) ;
			mesh.position.z = i ;
			mesh.rotation.z = Math.PI / 2 ;
			scene.add( mesh );
		});

	};





	return {
		generateShapes,
		generateExtrusions
	};

};
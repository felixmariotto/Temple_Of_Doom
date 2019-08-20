
function SceneGenerator( pointsArrays ) {


	const TRACKSCOLORS = [ "red", "blue", "green" ];

	const extrudeSettings = {
			steps: 1,
			extrudePath: new THREE.LineCurve3(
								new THREE.Vector3(0, 0, 0),
								new THREE.Vector3(0, 0, 1)
								)
		};



	var shapes = [];

	var shiftLeftVec = new THREE.Vector3( 1, 0, 0 );
	var shiftBottomVec = new THREE.Vector3( 0, -80, 0 );
	var shiftTopVec = new THREE.Vector3( 0, 80, 0 );


	var wallsMaterial = new THREE.MeshLambertMaterial({ color: 0xf5dd90 });

	var sliceMaterial = new THREE.MeshBasicMaterial( { color:0x292417 } );



	/// create water bellow y = 0 ;
	let mesh = new THREE.Mesh( new THREE.BoxBufferGeometry(500, 100, 3),
							   new THREE.MeshBasicMaterial({color:0x07004a}) );
	mesh.position.y = -50 ;
	mesh.position.z = 1.5 ;
	scene.add( mesh );



	/*
	textureLoader.load( './assets/perlin-512.png', (texture)=> {

		texture.wrapS = THREE.RepeatWrapping;
		texture.wrapT = THREE.RepeatWrapping;
		texture.repeat.set( 0.008, 0.008 );
		texture.magFilter = THREE.NearestFilter;

		wallsMaterial.map = texture ;
		wallsMaterial.color = new THREE.Color('blue') ;
	}, null, (err)=> {
		throw err ;
	});
	*/


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





	function generateExtrusions( isTexturedMat ) {

		shapes.forEach( (shape, i)=> {

			let geometry = new THREE.ExtrudeBufferGeometry( shape, extrudeSettings );
			let material = isTexturedMat ? wallsMaterial : new THREE.MeshLambertMaterial( { color:TRACKSCOLORS[i] } );
			let mesh = new THREE.Mesh( geometry, material ) ;
			mesh.position.z = i ;
			mesh.rotation.z = Math.PI / 2 ;
			scene.add( mesh );

			if ( i == 2 ) {
				var shapeGeom = new THREE.ShapeGeometry( shape );
				var shapeMesh = new THREE.Mesh( shapeGeom, sliceMaterial ) ;
				shapeMesh.position.z = 3.001 ;
				scene.add( shapeMesh );
			};

		});

	};




	function generateRoof( roofLevels ) {

		var points = roofLevels.reduce( (accu, value, i, arr)=> {

			let point = new THREE.Vector3( i, value, 0 );
			
			accu.push(point);
			accu.push( new THREE.Vector3()
									.copy( point )
									.add( shiftLeftVec ) );

			if ( i == arr.length -1 ) {

				accu.push( new THREE.Vector3()
										.copy( accu[i*2] )
										.add( shiftTopVec ) );

				accu.push( new THREE.Vector3()
										.copy( accu[0] )
										.add( shiftTopVec ) );
			};

			return accu ;

		}, []);

		let shape = new THREE.Shape( points );


		var settings = {
			steps: 1,
			extrudePath: new THREE.LineCurve3(
								new THREE.Vector3(0, 0, 0),
								new THREE.Vector3(0, 0, 3)
								)
		};

		let geometry = new THREE.ExtrudeBufferGeometry( shape , settings );
		let mesh = new THREE.Mesh( geometry, wallsMaterial ) ;

		mesh.rotation.z = Math.PI / 2 ;
		scene.add( mesh );


		var shapeGeom = new THREE.ShapeGeometry( shape );
		var shapeMesh = new THREE.Mesh( shapeGeom, sliceMaterial ) ;
		shapeMesh.position.z = 3.001 ;
		scene.add( shapeMesh );

	};





	return {
		generateShapes,
		generateExtrusions,
		generateRoof
	};

};
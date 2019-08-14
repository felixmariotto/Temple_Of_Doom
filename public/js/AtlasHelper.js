
function AtlasHelper( pointsArrays ) {

	let group = new THREE.Group();
	let scaleVec = new THREE.Vector3( 1, 0, 0 );



	pointsArrays.forEach( (points, i)=> {

		switch (i) {
			case 0 : color = 'red'; break;
			case 1 : color = 'blue'; break;
			case 2 : color = 'green'; break;
		};

		var material = new THREE.LineBasicMaterial({
			color: color
		});

		var geometry = new THREE.Geometry();

		points.forEach( (vec)=> {

			geometry.vertices.push(
				vec,
				new THREE.Vector3()
					.copy(vec)
					.add(scaleVec)
			);

		})
		

		var line = new THREE.Line( geometry, material );
		group.add( line );

	})

	return group ;
};
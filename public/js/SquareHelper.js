
function SquareHelper( logicSquare ) {

	let group = new THREE.Group();
	group.position.copy( logicSquare.position );

	var material = new THREE.LineBasicMaterial({
		color: 0xffffff
	});

	var geometry = new THREE.Geometry();

	geometry.vertices.push(
		new THREE.Vector3( logicSquare.width, 0, 0 ),
		new THREE.Vector3( logicSquare.width, logicSquare.height, 0 ),
		new THREE.Vector3( 0, logicSquare.height, 0 ),
		new THREE.Vector3( 0, 0, 0 ),
		new THREE.Vector3( logicSquare.width, 0, 0 )
	);
	
	var line = new THREE.Line( geometry, material );
	line.position.z += 0.5 ;
	group.add( line );

	return group;
};
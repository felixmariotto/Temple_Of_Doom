
function SquareHelper( logicSquare ) {

	let group = new THREE.Group();
	group.position = logicSquare.position;
	group.position.y += logicSquare.offsetY;

	var material = new THREE.LineBasicMaterial({
		color: 0xffffff
	});

	var geometry = new THREE.Geometry();

	geometry.vertices.push(
		new THREE.Vector3( logicSquare.height, 0, 0 ),
		new THREE.Vector3( logicSquare.height, logicSquare.width, 0 ),
		new THREE.Vector3( 0, logicSquare.width, 0 ),
		new THREE.Vector3( 0, 0, 0 ),
		new THREE.Vector3( logicSquare.height, 0, 0 )
	);
	
	var line = new THREE.Line( geometry, material );
	group.add( line );

	return group;
};
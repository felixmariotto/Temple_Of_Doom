
function Chaser( logicCube, needHelper ) {


	// const SPEED = 0.031 ;
	const SPEED = 0.029;
	const STARTVEC = new THREE.Vector3( 4, 2, 1.5); // was ( 5, 2, 1)

	var group = new THREE.Group();
	group.position.copy( STARTVEC );
	scene.add( group );

	var params = {
		isRunning: false,
		startVec: STARTVEC
	};


	if ( needHelper ) {
		var geometry = new THREE.BoxBufferGeometry( 4, 7, 2.5 );
		var material = new THREE.MeshBasicMaterial( {color: 0x940a00} );
		var cube = new THREE.Mesh( geometry, material );
		cube.position.x = -2 ;
		group.add( cube );
	};



	function update() {
		if ( params.isRunning ) {
			group.position.x += SPEED ;
			// This statement return a linear interpolation between two points
			// in the chaser track, so its Y position vary smoothly
			group.position.y = THREE.Math.lerp(
				atlas.chaserTrack[ Math.floor(group.position.x) ],
				atlas.chaserTrack[ Math.ceil(group.position.x) ],
				group.position.x - Math.floor(group.position.x) );

			// check for collision with the player
			if ( logicCube.position.x < group.position.x ) {
				game.fail();
			};
		};
	};


	function start() {
		params.isRunning = true;
	};

	function stop() {
		params.isRunning = false;
	};


	return {
		update,
		start,
		stop,
		group,
		params
	};

};
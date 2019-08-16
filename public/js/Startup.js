

function Startup() {

	const PLAYERSTARTVEC = new THREE.Vector3( 20, 5, 1 ) ;

	atlas.TempObstacle(
		"init_wall",
		new THREE.Vector3( 22, 5, 4 ),
		true
	);

	square.moveTo( PLAYERSTARTVEC );

};
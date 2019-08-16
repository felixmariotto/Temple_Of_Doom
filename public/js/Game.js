

function Game() {


	const PLAYERSPAWNVEC = new THREE.Vector3( 6, 3, 1 ) ;
	// const PLAYERSPAWNVEC = new THREE.Vector3(57, 9, 1)


	function fail() {
		console.log('fail');
		restartGame();
	};


	function start() {
		chaser.start();
		atlas.removeTempObstacle( 'init_wall' );
	};


	function restartGame() {
		chaser.stop();
		chaser.group.position.copy( chaser.params.startVec );
		square.moveTo( PLAYERSPAWNVEC );
	};

	return {
		fail,
		start
	};
};


function Game() {


	const PLAYERSPAWNVEC = new THREE.Vector3( 10, 3, 1 ) ;
	// const PLAYERSPAWNVEC = new THREE.Vector3(57, 9, 1)


	function fail() {
		restartGame();
	};


	function start() {

		chaser.start();
		atlas.removeTempObstacle( 'init_wall' );
		controler.movementEnabled = false ;
		gemSprite.visible = false ;

		// wall opens
		setTimeout( ()=> {
			atlas.removeTempObstacle( 'chaser_wall' );
		}, 500);

		// player can run
		setTimeout( ()=> {
			controler.movementEnabled = true ;
		}, 0); // was 2500
	};


	function restartGame() {
		chaser.stop();
		startup.createChaserWall();
		startup.createInitWall();
		chaser.group.position.copy( chaser.params.startVec );
		square.moveTo( PLAYERSPAWNVEC );
		gemSprite.visible = true ;
	};

	return {
		fail,
		start
	};
};
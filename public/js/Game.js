

function Game() {


	const PLAYERSPAWNVEC = new THREE.Vector3( 10, 4, 1 ) ;
	// const PLAYERSPAWNVEC = new THREE.Vector3(57, 9, 1)


	function fail() {
		restartGame();
	};


	function start() {

		chaser.start();
		atlas.removeTempObstacle( 'init_wall' );
		controler.movementEnabled = false ;

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
		treasures.clearInventory();
		chaser.stop();
		startup.createChaserWall();
		startup.createInitWall();
		chaser.group.position.copy( chaser.params.startVec );
		square.moveTo( PLAYERSPAWNVEC );
		treasures.findTreasure('purple_gem').sprite.visible = true ;
	};


	return {
		fail,
		start
	};
};
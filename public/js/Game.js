

function Game() {


	function fail() {
		console.log('fail');
		restartGame();
	};


	function start() {
		chaser.start();
	};


	function restartGame() {
		chaser.stop();
		chaser.group.position.copy( chaser.params.startVec );
		square.position.copy( PLAYERSTARTVEC );
		square.helper.position.copy( PLAYERSTARTVEC );
		square.camera.position
						.copy( CAMERAVEC )
						.add( PLAYERSTARTVEC )
	};

	return {
		fail,
		start
	};
};
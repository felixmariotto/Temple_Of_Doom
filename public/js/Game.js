

function Game() {

	function fail() {
		console.log('fail');
		restart();
	};

	function restart() {
		chaser.stop();
		chaser.group.position.copy( chaser.params.startVec );
		square.position.copy( PLAYERSTARTVEC );
		square.helper.position.copy( PLAYERSTARTVEC );
		square.camera.position
						.copy( CAMERAVEC )
						.add( PLAYERSTARTVEC )
	};

	return {
		fail
	};
};
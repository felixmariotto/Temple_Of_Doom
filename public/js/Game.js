

function Game() {

	setTimeout( ()=> {
		fail()
	}, 2000)

	function fail() {
		console.log('fail');
		restart();
	};

	function restart() {
		chaser.group.position.copy( chaser.params.startVec );
		chaser.stop();
	};

	return {
		fail
	};
};
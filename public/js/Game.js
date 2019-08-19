

function Game() {


	const PLAYERSPAWNVEC = new THREE.Vector3( 10, 4, 1 ) ;
	// const PLAYERSPAWNVEC = new THREE.Vector3(57, 9, 1)

	const PLAYERSTARTVEC = new THREE.Vector3( 26, 5.5, 1 ) ;
	// const PLAYERSTARTVEC = new THREE.Vector3( 135, 30, 1 ) ;
	// const PLAYERSTARTVEC = new THREE.Vector3( 11, 5, 1 ) ;
	const STARTBUTTONPOS = 9 ;

	var domGameoverOverlay = document.getElementById('gameover-overlay');
	var domFailMenu = document.getElementById('fail-menu');
	var domWinMenu = document.getElementById('win-menu');
	var domInventory = document.getElementById('inventory');





	square.moveTo( PLAYERSTARTVEC );

	createChaserWall();
	createInitWall();





	function createChaserWall() {
		atlas.TempObstacle(
			"chaser_wall",
			new THREE.Vector3( 6, 15, 4 ),
			true
		);
	};

	function createInitWall() {
		atlas.TempObstacle(
			"init_wall",
			new THREE.Vector3( 28, 15, 4 ),
			true
		);
	};





	function fail() {

		gamePaused = true ;
		gameFinished = true ;

		domInventory.style.display = "none" ;
		domGameoverOverlay.style.display = "inherit";
		domWinMenu.style.display = "none";
		domFailMenu.style.display = "inherit";

		document.getElementById('fail-time-text').innerHTML =
			"You survived " + survivalTimeCounter.toFixed(1) + " seconds";
		survivalTimeCounter = 0 ;
	};



	function win() {

		gamePaused = true ;
		gameFinished = true ;

		domInventory.style.display = "none" ;
		domGameoverOverlay.style.display = "inherit";
		domWinMenu.style.display = "inherit";
		domFailMenu.style.display = "none";

		document.getElementById('win-time-text').innerHTML =
			"You reached the exit in " + survivalTimeCounter.toFixed(1) + " seconds";
		survivalTimeCounter = 0 ;

		document.getElementById('loot-text').innerHTML =
							'You looted ' + treasures.getFoundTreasures().length +
							" / " + treasures.treasures.length + ' gems' ;
	};







	function start() {

		survivalTimeCounter = 0.01 ;

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
		createChaserWall();
		createInitWall();
		square.moveTo( PLAYERSPAWNVEC );
	};


	return {
		fail,
		win,
		start,
		restartGame,
		startButtonPos: STARTBUTTONPOS,
		createChaserWall,
		createInitWall
	};
};
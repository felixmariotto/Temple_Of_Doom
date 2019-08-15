
function Chaser( needHelper ) {


	const SPEED = 0.03 ;

	var params = {
		position: 0,
		isRunning: false
	};

	var group = new THREE.Group();
	group.position.z = 1 ;
	scene.add( group );


	if ( needHelper ) {
		var geometry = new THREE.BoxBufferGeometry( 4, 7, 2.3 );
		var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
		var cube = new THREE.Mesh( geometry, material );
		group.add( cube );
	};



	function update() {
		if ( params.isRunning ) {
			params.position += SPEED ;
			group.position.x = params.position ;
			group.position.y = THREE.Math.lerp(
				atlas.chaserTrack[ Math.floor(group.position.x) ],
				atlas.chaserTrack[ Math.ceil(group.position.x) ],
				group.position.x - Math.floor(group.position.x) );
		};
	};


	function start() {
		params.isRunning = true;
	};


	return {
		update,
		start
	};

};
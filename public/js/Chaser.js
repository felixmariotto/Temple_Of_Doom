
function Chaser( needHelper ) {


	const SPEED = 0.03 ;

	var params = {
		position: -5
	};

	var group = new THREE.Group();
	group.position.z = 1 ;
	scene.add( group );


	if ( needHelper ) {
		var geometry = new THREE.BoxBufferGeometry( 2, 100, 2.3 );
		var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
		var cube = new THREE.Mesh( geometry, material );
		group.add( cube );
	};


	function update() {
		params.position += SPEED ;
		group.position.x = params.position ;
	};


	return {
		update
	};

};
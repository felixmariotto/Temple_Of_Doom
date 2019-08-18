
function Treasures() {

	var treasures = [];



	initTreasure( './assets/gem.png', 'purple_gem', [8.5, 2.6, 1.5], 0.7 );
	


	function initTreasure( url, name, arrPos, scale ) {

		textureLoader.load( url, (texture)=> {

			texture.magFilter = THREE.NearestFilter;

			let spriteMaterial = new THREE.SpriteMaterial({ map:texture, color:0xffffff });
			sprite = new THREE.Sprite( spriteMaterial );

			sprite.position.set( arrPos[0], arrPos[1], arrPos[2] );
			sprite.scale.set( scale, scale, scale );

			scene.add( sprite );

			treasures.push({
				sprite,
				name,
				track: sprite.position.z - 0.5
			});
			
		});
	};




	function findTreasure( name ) {
		return treasures.find( (treasure)=> {
			return (treasure.name == name) ;
		});
	};





	function testCollision( logicCube ) {

		treasures.forEach( (treasure)=> {

			// check if the player is on the same track as the treasure
			if ( treasure.track == logicCube.position.z ) {

				let cubeLeftPoint = logicCube.position ;
				let treasurePoint = treasure.sprite.position ;

				// check if collision
				if ( cubeLeftPoint.x < treasurePoint.x &&
					 cubeLeftPoint.x + logicCube.width > treasurePoint.x ) {

					// the character takes the treasure and it's added to the inventory
					treasure.sprite.visible = false ;

					if ( treasure.name == 'purple_gem' ) game.start();
				};

			};

		});

	};





	return {
		testCollision,
		findTreasure
	};


};
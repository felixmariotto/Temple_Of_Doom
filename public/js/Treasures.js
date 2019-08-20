
function Treasures() {

	var treasures = [];

	var domInventory = document.getElementById('inventory');
	var domCount = document.getElementById('inventory-count');




	initTreasure( './assets/gem.png', 'purple_gem', [8.5, 2.6, 1.5], 0.7 ); // start
	initTreasure( './assets/gem.png', 'thing', [47.5, 2.5, 0.5], 0.7 ); // between the two walls
	initTreasure( './assets/gem.png', 'truc', [59.5, 5.5, 0.5], 0.7 ); // in small stairs
	initTreasure( './assets/gem.png', 'red_gem', [69.5, 8.7, 0.5], 0.7 ); // bottom big stairs
	initTreasure( './assets/gem.png', 'green_gem', [95.5, 12.3, 2.5], 0.7 ); // first chamber
	initTreasure( './assets/gem.png', 'yellow_gem', [109.5, 10, 2.5], 0.7 ); // second chamber
	initTreasure( './assets/gem.png', 'diamond', [131.5, 13.8, 0.5], 0.7 ); // on column

	

	function initTreasure( url, name, arrPos, scale ) {

		textureLoader.load( url, (texture)=> {

			texture.magFilter = THREE.NearestFilter;

			let spriteMaterial = new THREE.SpriteMaterial({ map:texture, color:0xffffff });
			sprite = new THREE.Sprite( spriteMaterial );

			sprite.position.set( arrPos[0], arrPos[1], arrPos[2] );
			sprite.scale.set( scale, scale, scale );

			scene.add( sprite );

			treasures.push({
				url,
				sprite,
				name,
				track: sprite.position.z - 0.5,
				found: false
			});

			updateInventoryCounter();
			
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
			// and if the treasure is not already found
			if ( treasure.track == logicCube.position.z &&
				 !treasure.found ) {

				let cubeLeftPoint = logicCube.position ;
				let treasurePoint = treasure.sprite.position ;

				// check if collision
				if ( cubeLeftPoint.x < treasurePoint.x &&
					 cubeLeftPoint.x + logicCube.width > treasurePoint.x ) {

					// treasure disappears and it's added to the inventory
					addToInventory( treasure );
					
					// start the game if the treasure is the purple gem
					if ( treasure.name == 'purple_gem' ) game.start();
				};

			};

		});

	};




	function addToInventory( treasure ) {

		treasure.sprite.visible = false ;
		treasure.found = true ;

		let domIMG = document.createElement( 'IMG' );
		domIMG.classList.add( 'inventory-item' );
		domIMG.classList.add( 'add-inventory' );
		domIMG.src = treasure.url ;
		domInventory.appendChild( domIMG );

		updateInventoryCounter();
	};



	function clearInventory() {

		/// Reseting of treasures attributes

		treasures.forEach( (treasure)=> {

			if ( treasure.found ) {
				treasure.found = false;
			};

			treasure.sprite.visible = true ;
		});


		updateInventoryCounter();


		/// Removal from the html inventory UI

		let domElements = document.getElementsByClassName('inventory-item');

		for ( let i=domElements.length ; i>0 ; i-- ) {

			if ( domElements[i] && domElements[i].tagName == 'IMG' ) {
				domInventory.removeChild( domElements[i] );
			};

		};

	};




	function updateInventoryCounter() {
		domCount.innerHTML = getFoundTreasures().length + " / " + treasures.length ;
	};



	function getFoundTreasures() {
		return treasures.reduce( (accu, treasure)=> {
			if ( treasure.found == true ) accu.push( treasure );
			return accu ;
		}, [])
	};





	return {
		testCollision,
		findTreasure,
		clearInventory,
		treasures,
		getFoundTreasures
	};


};
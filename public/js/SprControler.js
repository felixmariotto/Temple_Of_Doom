
function SprControler() {

	spriteMixer = SpriteMixer();
	var loader = new THREE.TextureLoader();

	var charaSprite;
	var currentAction, walkRight, walkLeft, idleRight, idleLeft;



	loader.load( "./assets/spr_character.png", (texture)=> {

		charaSprite = spriteMixer.ActionSprite( texture, 4, 8 );
		charaSprite.setFrame( 0 );

		charaSprite.scale.set( 0.8, 0.8, 0.8 );
		charaSprite.position.copy( square.position );
		charaSprite.position.z += 0.5;
		charaSprite.position.y += 0.4;
		charaSprite.position.x += 0.25;
		square.sprite = charaSprite ;

		// Actions

		walkLeft = spriteMixer.Action( charaSprite, 0, 3, 85 );
		walkRight = spriteMixer.Action( charaSprite, 4, 7, 85 );
		idleRight = spriteMixer.Action( charaSprite, 8, 9, 185 );
		idleLeft = spriteMixer.Action( charaSprite, 10, 11, 185 );

		

		scene.add( charaSprite );

	});





	function setAction( name ) {

		switch( name ) {
			case 'walkLeft' :
				walkLeft.playLoop();
				currentAction = walkLeft ;
			break;
			case 'walkRight' :
				walkRight.playLoop();
				currentAction = walkRight ;
			break;
			case 'idleLeft' :
				idleLeft.playLoop();
				currentAction = idleLeft ;
			break;
			case 'idleRight' :
				idleRight.playLoop();
				currentAction = idleRight ;
			break;
			case 'jumpRight' :
				currentAction.stop();
				charaSprite.setFrame( 14 ) ;
				setTimeout( ()=> {
					currentAction.pause();
					charaSprite.setFrame( 12 ) ;
				}, 90);
			break;
			case 'jumpLeft' :
				currentAction.stop();
				charaSprite.setFrame( 15 ) ;
				setTimeout( ()=> {
					currentAction.pause();
					charaSprite.setFrame( 13 ) ;
				}, 90);
			break;
			case 'faceBack' :
				currentAction.stop();
				charaSprite.setFrame( 16 );
			break;
			case 'faceFront' :
				currentAction.stop();
				charaSprite.setFrame( 17 );
			break;
		};

	};



	let i = 0;
	let arr = [ 'walkLeft', 'walkRight', 'faceBack', 'faceFront', 'idleLeft', 'idleRight', 'jumpRight', 'jumpLeft' ];
	setInterval( ()=> {
		i = (i +1) % 6 ;
		setAction( arr[i] );
	}, 700) ;







	return {

	};

};
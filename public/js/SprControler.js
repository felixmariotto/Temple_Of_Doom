
function SprControler() {

	spriteMixer = SpriteMixer();

	var currentAction, currentMovement;
	var charaSprite;
	var walkRight, walkLeft, idleRight, idleLeft;



	textureLoader.load( "./assets/spr_character.png", (texture)=> {

		texture.magFilter = THREE.NearestFilter;

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

		// stop function is requested movement is the currently
		// played one.
		if ( this.currentMovement == name ) return


		switch( name ) {
			case 'walkLeft' :
				walkLeft.playLoop();
				currentAction = walkLeft ;
				this.currentMovement = 'walkLeft';
			break;
			case 'walkRight' :
				walkRight.playLoop();
				currentAction = walkRight ;
				this.currentMovement = 'walkRight';
			break;
			case 'idleLeft' :
				idleLeft.playLoop();
				currentAction = idleLeft ;
				this.currentMovement = 'idleLeft';
			break;
			case 'idleRight' :
				idleRight.playLoop();
				currentAction = idleRight ;
				this.currentMovement = 'idleRight';
			break;
			case 'jumpRight' :
				if (currentAction) currentAction.stop();
				charaSprite.setFrame( 14 ) ;
				setTimeout( ()=> {
					charaSprite.setFrame( 12 ) ;
				}, 90);
				this.currentMovement = 'jumpRight';
			break;
			case 'jumpLeft' :
				if (currentAction) currentAction.stop();
				charaSprite.setFrame( 15 ) ;
				setTimeout( ()=> {
					charaSprite.setFrame( 13 ) ;
				}, 90);
				this.currentMovement = 'jumpLeft';
			break;
			case 'faceBack' :
				if (currentAction) currentAction.stop();
				charaSprite.setFrame( 16 );
				this.currentMovement = 'faceBack';
			break;
			case 'faceFront' :
				if (currentAction) currentAction.stop();
				charaSprite.setFrame( 17 );
				this.currentMovement = 'faceFront';
			break;
		};

	};





	return {
		setAction,
		currentMovement
	};

};
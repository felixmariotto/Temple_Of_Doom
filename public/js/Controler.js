

function Controler() {

	const RUNSPEED = 0.03 ;
	const LEAPSPEED = 0.1 ;

	var run = 0 ;
	var leap = 0 ;
	var leapLevel = 0 ;


	function update() {

		if ( run != 0 ) {
			charaControl.walkRight( run );
		};


		if ( leap > 0 ) {
			leap += LEAPSPEED ;
			leapLevel = Math.sin( leap );
			if ( leap < 1.5 ) {
				charaControl.leapOffset( 1 - leapLevel );
			} else {
				charaControl.leapOffset( -1 + leapLevel );
			};
			
			if ( leap > 3 ) leap = 0 ;
		};

	};


	document.addEventListener('keydown', (e)=> {

		e.preventDefault();

		switch ( e.key ) {

			case "ArrowRight" :
				if ( run < RUNSPEED ) {
					run = RUNSPEED;
				};
			break;

			case "ArrowLeft" :
				if ( run > -RUNSPEED ) {
					run = -RUNSPEED;
				};
			break;

			case " " :
				if ( leap == 0 ) {
					leap = LEAPSPEED;
				};
			break;
		};

	});




	document.addEventListener('keyup', (e)=> {

		e.preventDefault();

		switch ( e.key ) {

			case "ArrowRight" :
				run = 0;
			break;
			
			case "ArrowLeft" :
				run = 0;
			break;

		};

	});




	return {
		update
	};

};
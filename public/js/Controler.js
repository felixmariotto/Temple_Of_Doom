

function Controler() {

	const RUNSPEED = 0.01 ;

	var run = 0 ;


	function update() {

		if ( run != 0 ) {
			charaControl.walkRight( run );
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
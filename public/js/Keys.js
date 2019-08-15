
function Keys() {

	var isPressed = {
		'up': false,
		'down': false,
		'left': false,
		'right': false,
		'space': false
	};



	function init() {
		document.addEventListener('keydown', (e)=> {
			onKeyChange( e, true );
		});
		document.addEventListener('keyup', (e)=> {
			onKeyChange( e, false );
		});
	};


	function onKeyChange( e, bool ) {

		switch ( e.key ) {

			case "ArrowRight" :
				isPressed.right = bool ;
			break;

			case "ArrowLeft" :
				isPressed.left = bool ;
			break;

			case "ArrowUp" :
				isPressed.up = bool ;
			break;

			case "ArrowDown" :
				isPressed.down = bool ;
			break;

			case " " :
				isPressed.space = bool ;
			break;
		};
	};



	return {
		init,
		isPressed
	};
};

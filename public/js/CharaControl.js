
function CharaControl() {

	function walkRight( offset ) {
		square.move( offset, 0, 0 );
	};

	return {
		walkRight
	};
};

function AtlasHelper( scene ) {

	var points = [];

	function init( IDs ) {
		IDs.forEach( (dimension, i)=> {
			points.push([]);
			dimension.forEach( (height, index)=> {
				points[i].push( new THREE.Vector3( index, height, 0 ) );
			});
		});
		console.log( points );
	};

	return {
		init
	};
};
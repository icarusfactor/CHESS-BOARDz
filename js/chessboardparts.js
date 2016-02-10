	
	
	
	
	
			
		//Light Squares	
		var setSquares = function( offset ) {		
		   for ( var r = 0; r < 4; r++  ) {	
		   for ( var i = 0; i < 4; i++  ) {
			//Squares
				var square_geometry = new THREE.BoxGeometry(500, 10, 500, 10, 0, 10 );
				var square_material = new THREE.MeshBasicMaterial({color: 0xAAAAAA });
				square_material.name = "SL"+r+"-"+i;
				var square = new THREE.Mesh(square_geometry, square_material);				
				square.scale.x = square.scale.y = square.scale.z = 0.002;
				square.position.x = offset +( 2 * i);
				square.position.y = 0;
				square.position.z = offset +( 2 * r);
				scene.add( square );
				
				}
				}
				
				}	
		//Dark Squares	
		var setSquaresD = function( offset , offset2 ) {		
		   for ( var r = 0; r < 4; r++  ) {	
		   for ( var i = 0; i < 4; i++  ) {
			//Squares
				var square_geometryD = new THREE.BoxGeometry(500, 10, 500, 10, 0, 10 );
				var square_materialD = new THREE.MeshBasicMaterial({color: 0x333333 });
				square_materialD.name = "SD"+r+"-"+i;
				var squareD = new THREE.Mesh(square_geometryD, square_materialD);
				squareD.scale.x = squareD.scale.y = squareD.scale.z = 0.002;
				squareD.position.x = offset +( 2 * i)+offset2 ;
				//squareD.position.x = offset +( 2 * i)-1.0;
				squareD.position.y = 0;
				squareD.position.z = offset +( 2 * r);
				scene.add( squareD );
				
				}
				}
				
				}		
				
				
		// Grid
		var size = 4, step = 1;

		var geometry = new THREE.Geometry();
		var material = new THREE.LineBasicMaterial( { color: 0xFFFFFE } );
		material.name = "grid";

		for ( var i = - size; i <= size; i += step ) {

		geometry.vertices.push( new THREE.Vector3( - size, - 0.04, i ) );
		geometry.vertices.push( new THREE.Vector3(   size, - 0.04, i ) );

		geometry.vertices.push( new THREE.Vector3( i, - 0.04, - size ) );
		geometry.vertices.push( new THREE.Vector3( i, - 0.04,   size ) );

							     }
		var line = new THREE.LineSegments( geometry, material );
				
				
				

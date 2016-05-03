	        var version_boardparts="043016_0249";
	
	
	
		
		
		var square_geometry = [];
		var square_material = [];
		var square_materialD = [];
		var square = [];	
		var squareD = [];
		
						
		//Light Squares	
		var setSquares = function( offset , SQname ) {		
		   for ( var r = 1; r < 5; r++  ) {	
		   for ( var i = 1; i < 5; i++  ) {
			//Squares			
			        square_geometry = new THREE.BoxGeometry(500, 60, 500, 10, 0, 10 );	
				square_material[i*r] = new THREE.MeshBasicMaterial({color: 0xAAAAAA });		
				//square_material[i*r] =  new THREE.MeshPhongMaterial( { color: 0xAAAAAA,specular: 0x000000,shininess: 0 });		
			     	square[i*r] = new THREE.Mesh(square_geometry, square_material[i*r]);	
			     	
				square_material[i*r].name = "BOARD_L"+r+"-"+i+"-"+SQname;								
				square[i*r].scale.x = square[i*r].scale.y = square[i*r].scale.z = 0.002;				
				square[i*r].position.x = offset +( 2 * (i-1) );
				square[i*r].position.y = 0;
				square[i*r].position.z = offset +( 2 * (r-1));
				square[i*r].castShadow = true;
				square[i*r].receiveShadow = true;
				scene.add( square[i*r] );
				
				}
				}
				
				}	
		//Dark Squares	
	
		var setSquaresD = function( offset , offset2 , SQname ) {		
		   for ( var r = 1; r < 5; r++  ) {	
		   for ( var i = 1; i < 5; i++  ) {
			//Squares	
			 	square_geometryD = new THREE.BoxGeometry(500, 60, 500, 10, 0, 10 );			
				square_materialD[i*r] = new THREE.MeshBasicMaterial({color: 0x333333 });
				//square_materialD[i*r] =  new THREE.MeshPhongMaterial( { color: 0x333333,specular: 0x000000,shininess: 0 })
				squareD[i*r] = new THREE.Mesh(square_geometryD, square_materialD[i*r]);	
				
				square_materialD[i*r].name = "BOARD_D"+r+"-"+i+"-"+SQname; //String.fromCharCode(i+64);				
				squareD[i*r].scale.x = squareD[i*r].scale.y = squareD[i*r].scale.z = 0.002;
				squareD[i*r].position.x = offset +( 2 * (i-1) )+offset2 ;
				//squareD[i*r].position.x = offset +( 2 * (i-1) )-1.0;
				squareD[i*r].position.y = 0;
				squareD[i*r].position.z = offset +( 2 * (r-1));
				squareD[i*r].castShadow = true;
				squareD[i*r].receiveShadow = true;
				scene.add( squareD[i*r] );
				
				}
				}
				
				}		
				
				
		// Grid
//		var size = 4, step = 1;
//
//		var geometry = new THREE.Geometry();
//		var material = new THREE.LineBasicMaterial( { color: 0xFFFFFE } );
//		material.name = "grid";
//
//		for ( var i = - size; i <= size; i += step ) {
//
//		geometry.vertices.push( new THREE.Vector3( - size, - 0.04, i ) );
//		geometry.vertices.push( new THREE.Vector3(   size, - 0.04, i ) );
//
//		geometry.vertices.push( new THREE.Vector3( i, - 0.04, - size ) );
//		geometry.vertices.push( new THREE.Vector3( i, - 0.04,   size ) );
//
//							     }
//		var line = new THREE.LineSegments( geometry, material );
				
				
				
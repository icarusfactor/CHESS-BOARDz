	
	function animate() {

				requestAnimationFrame( animate );

				render();			
				
				game.infodata.innerHTML = " ";
			}

	
			var init = function() {

				container = document.createElement( 'div' );
				document.body.appendChild( container );

				camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1500 );
				camera.position.set( 3, 3, 3 );

				//setTopCAM();
				
				spin = 1; //switch to spin mode.

				
				scene.add( line );				
				

				// Add the COLLADA							
				setSquares( -3.5 );				
				setSquares( -2.5 );
				setSquaresD( -3.5, 1.0 );				
				setSquaresD( -2.5, -1.0 );
				
							
				setDAE( daek1l, -2.5,3.5, material_white_k1 );
				setDAE( daek2l,  2.5,3.5, material_white_k2 );	
				//set rotation of knights toward center.
				daek1l.rotateY( -30 );
				daek2l.rotateY( -30 );
					
				setDAE( daeR1l, -3.5,3.5, material_white_r1 );
				setDAE( daeR2l,  3.5,3.5, material_white_r2 );
				
				
				setDAE( daeB1l, -1.5,3.5, material_white_b1 );
				setDAE( daeB2l,  1.5,3.5, material_white_b2 );
				setDAE( daeQl,  -0.5,3.5, material_white_Q );
				setDAE( daeKl,   0.5,3.5, material_white_K );
				
				setDAE( daeP1l ,  3.5, 2.5, material_white_p1 );
				setDAE( daeP2l ,  2.5, 2.5, material_white_p2 );
				setDAE( daeP3l ,  1.5, 2.5, material_white_p3 );
				setDAE( daeP4l ,  0.5, 2.5, material_white_p4 );
				setDAE( daeP5l , -0.5, 2.5, material_white_p5 );
				setDAE( daeP6l , -1.5, 2.5, material_white_p6 );
				setDAE( daeP7l , -2.5, 2.5, material_white_p7 );
				setDAE( daeP8l , -3.5, 2.5, material_white_p8 );
				
	
	//the dark side. 
	
				setDAE( daek1d, -2.5,-3.5, material_black_k1 );				
				setDAE( daek2d, 2.5,-3.5,  material_black_k2 );	
				//set rotation of knights toward center.
				daek1d.rotateY( 30 );
				daek2d.rotateY( 30 );
					
				setDAE( daeR1d, -3.5,-3.5, material_black_r1 );
				setDAE( daeR2d, 3.5,-3.5,  material_black_r2 );
								
				setDAE( daeB1d, -1.5,-3.5, material_black_b1 );
				setDAE( daeB2d,  1.5,-3.5, material_black_b2 );
				setDAE( daeQd,  -0.5,-3.5, material_black_Q );
				setDAE( daeKd,   0.5,-3.5, material_black_K );
				
				setDAE( daeP1d ,  3.5, -2.5, material_black_p1 );
				setDAE( daeP2d ,  2.5, -2.5, material_black_p2 );
				setDAE( daeP3d ,  1.5, -2.5, material_black_p3 );
				setDAE( daeP4d ,  0.5, -2.5, material_black_p4 );
				setDAE( daeP5d , -0.5, -2.5, material_black_p5 );
				setDAE( daeP6d , -1.5, -2.5, material_black_p6 );
				setDAE( daeP7d , -2.5, -2.5, material_black_p7 );
				setDAE( daeP8d , -3.5, -2.5, material_black_p8 );
	
				
				
				
						
				particleLight = new THREE.Mesh( new THREE.SphereGeometry( 4, 8, 8 ), new THREE.MeshBasicMaterial( { color: 0xffffff } ) );
				scene.add( particleLight );

				// Lights

				scene.add( new THREE.AmbientLight( 0x888888 ) );

				var directionalLight = new THREE.DirectionalLight(/*Math.random() * 0xffffff*/0xaaaaaa );
				directionalLight.position.x = Math.random() - 0.5;
				directionalLight.position.y = Math.random() - 0.5;
				directionalLight.position.z = Math.random() - 0.5;
				directionalLight.position.normalize();
				scene.add( directionalLight );

				var pointLight = new THREE.PointLight( 0x555555, 4 );
				particleLight.add( pointLight );

				renderer = new THREE.WebGLRenderer(  { antialias: true }  );
				renderer.setClearColor( 0x5d5d5d );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				//renderer.shadowMap.enabled = true;
				//renderer.shadowMap.type = THREE.PCFShadowMap;
				
				container.appendChild( renderer.domElement );			
				
				

				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				//renderer.domElement.addEventListener( 'mousedown', onDocumentMouseDown, false );
				window.addEventListener( 'resize', onWindowResize, false );				

				
				
			animate();
		}

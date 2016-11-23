	var version_init="071216_0421";

	function animate() {

				requestAnimationFrame( animate );

				render();			
				
				//chessgame.infodata.innerHTML = " ";
			}

	
			var init = function() {

				console.log("INIT() STARTED");

				container = document.createElement( 'div' );
				document.body.appendChild( container );

				camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1500 );
				camera.position.set( 3, 3, 3 );

				//setTopCAM();
				
				spin = 1; //switch to spin mode.							
					
				

				setupBoard();
                                //setupLimbo(); //need to find correct positions. 
						
				
				
				setLIMBOSquares( -10.0, 6.0, "W" );

				setLIMBOSquares( -10.0, 11.0, "B" );
				
				console.log("INIT() ALMOST ALMOST ALMOST ENDED");
							
				setDAE( knight[0], material_white_k1 );
				setDAE( knight[1], material_white_k2 );	
				//set rotation of knights toward center.
				knight[0].rotateY( -30 );
				knight[1].rotateY( -30 );
					
				setDAE( rook[0], material_white_r1 );
				setDAE( rook[1], material_white_r2 );
				
				
				setDAE( bishop[0], material_white_b1 );
				setDAE( bishop[1], material_white_b2 );
				setDAE( queen[0],  material_white_Q );
				setDAE( king[0],   material_white_K );
				
				setDAE( pawns[0] , material_white_p1 );
				setDAE( pawns[1] , material_white_p2 );
				setDAE( pawns[2] , material_white_p3 );
				setDAE( pawns[3] , material_white_p4 );
				setDAE( pawns[4] , material_white_p5 );
				setDAE( pawns[5] , material_white_p6 );
				setDAE( pawns[6] , material_white_p7 );
				setDAE( pawns[7] , material_white_p8 );
				
	
	//the dark side. 	
	
				setDAE( knight[2], material_black_k1 );				
				setDAE( knight[3], material_black_k2 );	
				//set rotation of knights toward center.
				knight[2].rotateY( 30 );
				knight[3].rotateY( 30 );
					
				setDAE( rook[2], material_black_r1 );
				setDAE( rook[3], material_black_r2 );
								
				setDAE( bishop[2], material_black_b1 );
				setDAE( bishop[3], material_black_b2 );
				setDAE( queen[1],  material_black_Q );
				setDAE( king[1],   material_black_K );
				
				setDAE( pawns[8 ] ,  material_black_p1 );
				setDAE( pawns[9 ] ,  material_black_p2 );
				setDAE( pawns[10] ,  material_black_p3 );
				setDAE( pawns[11] ,  material_black_p4 );
				setDAE( pawns[12] ,  material_black_p5 );
				setDAE( pawns[13] ,  material_black_p6 );
				setDAE( pawns[14] ,  material_black_p7 );
				setDAE( pawns[15] ,  material_black_p8 );
	

				material = new THREE.MultiMaterial( [
					new THREE.MeshPhongMaterial( { color: 0xffffff, shading: THREE.FlatShading } ), // front
					new THREE.MeshPhongMaterial( { color: 0xffffff, shading: THREE.SmoothShading } ) // side
				] );

				group = new THREE.Group();
				group.position.y = 5;

				scene.add( group );

				loadFont();

                                //var psphere = new THREE.SphereGeometry( 0.05, 0.05, 0.05 );  
                                //light1 = new THREE.PointLight( 0xff0040, 1, 1 );
                                //light1.add( new THREE.Mesh( psphere, new THREE.MeshBasicMaterial( { color: 0xff0040 } ) ) );
                                //light1.position.set(2,2,2);  
                                //scene.add( light1 );
                               


				
				console.log("INIT() ALMOST ALMOST ENDED");
				


				particleLight = new THREE.Mesh( new THREE.SphereGeometry( 4, 8, 8 ), new THREE.MeshBasicMaterial( { color: 0xffffff } ) );
				scene.add( particleLight );

				// Lights

				

				var directionalLight = new THREE.DirectionalLight(/*Math.random() * 0xffffff*/0xaaaaaa );
				directionalLight.position.x = Math.random() - 0.5;
				directionalLight.position.y = Math.random() - 0.5;
				directionalLight.position.z = Math.random() - 0.5;
				directionalLight.position.normalize();
				scene.add( directionalLight );
				scene.add( new THREE.AmbientLight( 0x888888 ) );

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
				document.addEventListener( 'mousedown', onDocumentMouseDown, false );				
				window.addEventListener( 'resize', onWindowResize, false );				

			console.log("INIT() ALMOST ENDED");
				
			animate();
			
			console.log("INIT() ENDED");
			
		}
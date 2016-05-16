  var version_boardfont="051616_0413"
  

			var hex, color;
			var group, textMesh1, textMesh2, textGeo, material;
			
			
			
			

			var firstLetter = true;

			var     tex1 = "1",
				tex2 = "2",
				tex3 = "3",
				tex4 = "4",
				tex5 = "5",
				tex6 = "6",
				tex7 = "7",
				tex8 = "8",
				
				texA = "A",
				texB = "B",
				texC = "C",
				texD = "D",
				texE = "E",
				texF = "F",
				texG = "G",
				texH = "H",
			
				height = 0.5,
				size = 10,
				hover = -5,

				curveSegments = 4,

				bevelThickness = 1,
				bevelSize = 0.4,
				bevelSegments = 2,
				bevelEnabled = false,

				font = undefined,

				fontName = "helvetiker", // helvetiker, optimer, gentilis, droid sans, droid serif
				fontWeight = "bold"; // normal bold


			var fontIndex = 1;


			function decimalToHex( d ) {

				var hex = Number( d ).toString( 16 );
				hex = "000000".substr( 0, 6 - hex.length ) + hex;
				return hex.toUpperCase();

			}
  
  
  
  
  
  
  			function boolToNum( b ) {

				return b ? 1 : 0;

			}

			

			

		

			function loadFont() {

				var loader = new THREE.FontLoader();
				loader.load( 'js/fonts/' + fontName + '_' + fontWeight + '.typeface.js', function ( response ) {

					font = response;

					refreshText();

				} );

			}

			function createText( show_text , show_hover, posiX, posiZ, rotZ , rotY ) {
 
                             
                              
 				textGeo = new THREE.TextGeometry( show_text, {

					font: font,

					size: size,
					height: height,
					curveSegments: curveSegments,

					bevelThickness: bevelThickness,
					bevelSize: bevelSize,
					bevelEnabled: bevelEnabled,

					material: 0,
					extrudeMaterial: 1

				});

				textGeo.computeBoundingBox();
				textGeo.computeVertexNormals();

				// fix side normals by removing z-component of normals for side faces
				// (this doesnt work well for beveled geometry as then we lose nice curvature around z-axis)

				if ( ! bevelEnabled ) {

					var triangleAreaHeuristics = 0.1 * ( height * size );

					for ( var i = 0; i < textGeo.faces.length; i ++ ) {

						var face = textGeo.faces[ i ];

						if ( face.materialIndex == 1 ) {

							for ( var j = 0; j < face.vertexNormals.length; j ++ ) {

								face.vertexNormals[ j ].z = 0;
								face.vertexNormals[ j ].normalize();

							}

							var va = textGeo.vertices[ face.a ];
							var vb = textGeo.vertices[ face.b ];
							var vc = textGeo.vertices[ face.c ];

							var s = THREE.GeometryUtils.triangleArea( va, vb, vc );

							if ( s > triangleAreaHeuristics ) {

								for ( var j = 0; j < face.vertexNormals.length; j ++ ) {

									face.vertexNormals[ j ].copy( face.normal );

								}

							}

						}

					}

				}

                                

				var centerOffset = -0.5 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x );

				textMesh1 = new THREE.Mesh( textGeo, material );
                                textMesh1.scale.x = textMesh1.scale.y = textMesh1.scale.z = 0.031;
				textMesh1.position.x = posiX;//centerOffset;
				textMesh1.position.y = show_hover;
				textMesh1.position.z = posiZ;

				rotateObject( textGeo , 90 , rotY, rotZ  );
				
				

				group.add( textMesh1 );

				
			}

			function refreshText() {

				

				group.remove( textMesh1 );
				

				//if ( !Bnumbers ) return;

				createText( tex1 , hover, 4.4 ,3.8 ,180,90 );
				createText( tex2 , hover, 4.4 ,2.8 ,180,90 );
				createText( tex3 , hover, 4.4 ,1.8 ,180,90 );
				createText( tex4 , hover, 4.4 ,0.8 ,180,90 );
				createText( tex5 , hover, 4.4 ,-0.2 ,180,90 );
				createText( tex6 , hover, 4.4 ,-1.2 ,180,90 );
				createText( tex7 , hover, 4.4 ,-2.2 ,180,90 );
				createText( tex8 , hover, 4.4 ,-3.2 ,180,90 );
				
				
				createText( texA , hover, -3.8 ,4.4 ,-180,180 );
				createText( texB , hover, -2.8 ,4.4 ,-180,180 );
				createText( texC , hover, -1.8 ,4.4 ,-180,180 );
				createText( texD , hover, -0.8 ,4.4 ,-180,180 );
				createText( texE , hover,  0.2 ,4.4 ,-180,180 );
				createText( texF , hover,  1.2 ,4.4 ,-180,180 );
				createText( texG , hover,  2.2 ,4.4 ,-180,180 );
				createText( texH , hover,  3.2 ,4.4 ,-180,180 );
				
				createText( texA , hover, -3.4 ,-4.4 ,-180,0 );
				createText( texB , hover, -2.4 ,-4.4 ,-180,0 );
				createText( texC , hover, -1.4 ,-4.4 ,-180,0 );
				createText( texD , hover, -0.4 ,-4.4 ,-180,0 );
				createText( texE , hover,  0.6 ,-4.4 ,-180,0 );
				createText( texF , hover,  1.6 ,-4.4 ,-180,0 );
				createText( texG , hover,  2.6 ,-4.4 ,-180,0 );
				createText( texH , hover,  3.6 ,-4.4 ,-180,0 );

			}
			
			function rotateObject(object, degreeX=0, degreeY=0, degreeZ=0) {

   				degreeX = (degreeX * Math.PI)/180;
				degreeY = (degreeY * Math.PI)/180;
			        degreeZ = (degreeZ * Math.PI)/180;
   			   object.rotateX(degreeX);
			   object.rotateY(degreeY);
			   object.rotateZ(degreeZ);

 				}
			
  
  
  
  
  
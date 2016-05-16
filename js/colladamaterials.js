			var version_materials="050316-0409";
			
			
			var material_black_p1 = new THREE.MeshPhongMaterial( { color: 0x000000,specular: 0xffffff,shininess: 20 });		
			var material_black_p2 = new THREE.MeshPhongMaterial( { color: 0x000000,specular: 0xffffff,shininess: 20 }); 		
			var material_black_p3 = new THREE.MeshPhongMaterial( { color: 0x000000,specular: 0xffffff,shininess: 20 }); 		
			var material_black_p4 = new THREE.MeshPhongMaterial( { color: 0x000000,specular: 0xffffff,shininess: 20 }); 
			var material_black_p5 = new THREE.MeshPhongMaterial( { color: 0x000000,specular: 0xffffff,shininess: 20 });
			var material_black_p6 = new THREE.MeshPhongMaterial( { color: 0x000000,specular: 0xffffff,shininess: 20 }); 
			var material_black_p7 = new THREE.MeshPhongMaterial( { color: 0x000000,specular: 0xffffff,shininess: 20 }); 
			var material_black_p8 = new THREE.MeshPhongMaterial( { color: 0x000000,specular: 0xffffff,shininess: 20 });
			material_black_p1.name = "PIECE_BP1";
			material_black_p2.name = "PIECE_BP2";
			material_black_p3.name = "PIECE_BP3"; 
			material_black_p4.name = "PIECE_BP4";
			material_black_p5.name = "PIECE_BP5"; 
			material_black_p6.name = "PIECE_BP6";
			material_black_p7.name = "PIECE_BP7";
			material_black_p8.name = "PIECE_BP8";
			
			var material_black_k1 = new THREE.MeshPhongMaterial( { color: 0x000000,specular: 0xffffff,shininess: 20 });
			var material_black_k2 = new THREE.MeshPhongMaterial( { color: 0x000000,specular: 0xffffff,shininess: 20 });
			material_black_k1.name = "PIECE_Bk1";
			material_black_k2.name = "PIECE_Bk2";			
			
			var material_black_r1 = new THREE.MeshPhongMaterial( { color: 0x000000,specular: 0xffffff,shininess: 20 });
			var material_black_r2 = new THREE.MeshPhongMaterial( { color: 0x000000,specular: 0xffffff,shininess: 20 });
			material_black_r1.name = "PIECE_Br1";
			material_black_r2.name = "PIECE_Br2";	
			
			
			var material_black_b1 = new THREE.MeshPhongMaterial( { color: 0x000000,specular: 0xffffff,shininess: 20 });
			var material_black_b2 = new THREE.MeshPhongMaterial( { color: 0x000000,specular: 0xffffff,shininess: 20 });
			material_black_b1.name = "PIECE_Bb1";
			material_black_b2.name = "PIECE_Bb2";	
						
			var material_black_K = new THREE.MeshPhongMaterial( { color: 0x000000,specular: 0xffffff,shininess: 20 });
			var material_black_Q = new THREE.MeshPhongMaterial( { color: 0x000000,specular: 0xffffff,shininess: 20 });
			material_black_K.name = "PIECE_BK";
			material_black_Q.name = "PIECE_BQ";	
			
			
			var material_black = new THREE.MeshPhongMaterial( { color: 0x000000,specular: 0xffffff,shininess: 20 }); 
			
			var material_white_p1 = new THREE.MeshPhongMaterial( { color: 0xffffff,specular: 0xffffff,shininess: 20 } );
			var material_white_p2 = new THREE.MeshPhongMaterial( { color: 0xffffff,specular: 0xffffff,shininess: 20 } );
			var material_white_p3 = new THREE.MeshPhongMaterial( { color: 0xffffff,specular: 0xffffff,shininess: 20 } );
			var material_white_p4 = new THREE.MeshPhongMaterial( { color: 0xffffff,specular: 0xffffff,shininess: 20 } );
			var material_white_p5 = new THREE.MeshPhongMaterial( { color: 0xffffff,specular: 0xffffff,shininess: 20 } );
			var material_white_p6 = new THREE.MeshPhongMaterial( { color: 0xffffff,specular: 0xffffff,shininess: 20 } );
			var material_white_p7 = new THREE.MeshPhongMaterial( { color: 0xffffff,specular: 0xffffff,shininess: 20 } );
			var material_white_p8 = new THREE.MeshPhongMaterial( { color: 0xffffff,specular: 0xffffff,shininess: 20 } );
			material_white_p1.name = "PIECE_WP1";
			material_white_p2.name = "PIECE_WP2";
			material_white_p3.name = "PIECE_WP3"; 
			material_white_p4.name = "PIECE_WP4";
			material_white_p5.name = "PIECE_WP5"; 
			material_white_p6.name = "PIECE_WP6";
			material_white_p7.name = "PIECE_WP7";
			material_white_p8.name = "PIECE_WP8";
				
			
			var material_white_k1 = new THREE.MeshPhongMaterial( { color: 0xffffff,specular: 0xffffff,shininess: 20 } );
			var material_white_k2 = new THREE.MeshPhongMaterial( { color: 0xffffff,specular: 0xffffff,shininess: 20 } );
			material_white_k1.name = "PIECE_Wk1";
			material_white_k2.name = "PIECE_Wk2";		
			
			var material_white_r1 = new THREE.MeshPhongMaterial( { color: 0xffffff,specular: 0xffffff,shininess: 20 } );
			var material_white_r2 = new THREE.MeshPhongMaterial( { color: 0xffffff,specular: 0xffffff,shininess: 20 } );
			material_white_r1.name = "PIECE_Wr1";
			material_white_r2.name = "PIECE_Wr2";	
			
			var material_white_b1 = new THREE.MeshPhongMaterial( { color: 0xffffff,specular: 0xffffff,shininess: 20 } );
			var material_white_b2 = new THREE.MeshPhongMaterial( { color: 0xffffff,specular: 0xffffff,shininess: 20 } );
			material_white_b1.name = "PIECE_Wb1";
			material_white_b2.name = "PIECE_Wb2";	
			
			var material_white_K = new THREE.MeshPhongMaterial( { color: 0xffffff,specular: 0xffffff,shininess: 20 } );
			var material_white_Q = new THREE.MeshPhongMaterial( { color: 0xffffff,specular: 0xffffff,shininess: 20 } );
			material_white_K.name = "PIECE_WK";
			material_white_Q.name = "PIECE_WQ";	
			
			var material_white = new THREE.MeshPhongMaterial( { color: 0xffffff,specular: 0xffffff,shininess: 20 } );
			
						
			//var material_hold = new THREE.MeshPhongMaterial( { color: 0x000000,specular: 0xffffff,shininess: 20 } );
				
	
//initial piece board positions.
var PIECE_POS = ["Wr2",0,0,
                 "Wk2",0,1,
                 "Wb2",0,2,
                 "WK" ,0,3,
                 "WQ" ,0,4,
                 "Wb1",0,5,
                 "Wk1",0,6,
                 "Wr1",0,7,
                 "WP1",1,0,
                 "WP2",1,1,
                 "WP3",1,2,
                 "WP4",1,3,
                 "WP5",1,4,
                 "WP6",1,5,
                 "WP7",1,6,
                 "WP8",1,7,              
                 "BP1",6,0,
                 "BP2",6,1,
                 "BP3",6,2,
                 "BP4",6,3,
                 "BP5",6,4,
                 "BP6",6,5,
                 "BP7",6,6,
                 "BP8",6,7,
                 "Br2",7,0,
                 "Bk2",7,1,
                 "Bb2",7,2,
                 "BK" ,7,3,
                 "BQ" ,7,4,
                 "Bb1",7,5,
                 "Bk1",7,6,
                 "Br1",7,7];
	
	
//current piece board positions. Y or N has mesh been converted to Three mesh after removed then added. nodedae.rotateX( 30 );
var CURRENT_PIECE_POS = ["Wr2",0,0,"Y",
                 "Wk2",0,1,"Y",
                 "Wb2",0,2,"Y",
                 "WK" ,0,3,"Y",
                 "WQ" ,0,4,"Y",
                 "Wb1",0,5,"Y",
                 "Wk1",0,6,"Y",
                 "Wr1",0,7,"Y",
                 "WP1",1,0,"Y",
                 "WP2",1,1,"Y",
                 "WP3",1,2,"Y",
                 "WP4",1,3,"Y",
                 "WP5",1,4,"Y",
                 "WP6",1,5,"Y",
                 "WP7",1,6,"Y",
                 "WP8",1,7,"Y",            
                 "BP1",6,0,"Y",
                 "BP2",6,1,"Y",
                 "BP3",6,2,"Y",
                 "BP4",6,3,"Y",
                 "BP5",6,4,"Y",
                 "BP6",6,5,"Y",
                 "BP7",6,6,"Y",
                 "BP8",6,7,"Y",
                 "Br2",7,0,"Y",
                 "Bk2",7,1,"Y",
                 "Bb2",7,2,"Y",
                 "BK" ,7,3,"Y",
                 "BQ" ,7,4,"Y",
                 "Bb1",7,5,"Y",
                 "Bk1",7,6,"Y",
                 "Br1",7,7,"Y"];
	
	
	
	
//initial board positions.
var BOARD_POS = ["L4-4-2",0,0,"Y",
                 "D4-4-2",0,1,"Y",
                 "L4-3-2",0,2,"Y",
                 "D4-3-2",0,3,"Y",
                 "L4-2-2",0,4,"Y",
                 "D4-2-2",0,5,"Y",
                 "L4-1-2",0,6,"Y",
                 "D4-1-2",0,7,"Y",

                 "D4-4-1",1,0,"Y",
                 "L4-4-1",1,1,"Y",
                 "D4-3-1",1,2,"Y",
                 "L4-3-1",1,3,"Y",
                 "D4-2-1",1,4,"Y",
                 "L4-2-1",1,5,"Y",
                 "D4-1-1",1,6,"Y",
                 "L4-1-1",1,7,"Y",
                
                 "L3-4-2",2,0,"N",
                 "D3-4-2",2,1,"N",
                 "L3-3-2",2,2,"N",
                 "D3-3-2",2,3,"N",
                 "L3-2-2",2,4,"N",
                 "D3-2-2",2,5,"N",
                 "L3-1-2",2,6,"N",
                 "D3-1-2",2,7,"N",

                 "D3-4-1",3,0,"N",
                 "L3-4-1",3,1,"N",
                 "D3-3-1",3,2,"N",
                 "L3-3-1",3,3,"N",
                 "D3-2-1",3,4,"N",
                 "L3-2-1",3,5,"N",
                 "D3-1-1",3,6,"N",
                 "L3-1-1",3,7,"N",

                 "L2-4-2",4,0,"N",
                 "D2-4-2",4,1,"N",
                 "L2-3-2",4,2,"N",
                 "D2-3-2",4,3,"N",
                 "L2-2-2",4,4,"N",
                 "D2-2-2",4,5,"N",
                 "L2-1-2",4,6,"N",
                 "D2-1-2",4,7,"N",

                 "D2-4-1",5,0,"N",
                 "L2-4-1",5,1,"N",
                 "D2-3-1",5,2,"N",
                 "L2-3-1",5,3,"N",
                 "D2-2-1",5,4,"N",
                 "L2-2-1",5,5,"N",
                 "D2-1-1",5,6,"N",
                 "L2-1-1",5,7,"N",

                 "L1-4-2",6,0,"Y",
                 "D1-4-2",6,1,"Y",
                 "L1-3-2",6,2,"Y",
                 "D1-3-2",6,3,"Y",
                 "L1-2-2",6,4,"Y",
                 "D1-2-2",6,5,"Y",
                 "L1-1-2",6,6,"Y",
                 "D1-1-2",6,7,"Y",

                 "D1-4-1",7,0,"Y",
                 "L1-4-1",7,1,"Y",
                 "D1-3-1",7,2,"Y",
                 "L1-3-1",7,3,"Y",
                 "D1-2-1",7,4,"Y",
                 "L1-2-1",7,5,"Y",
                 "D1-1-1",7,6,"Y",
                 "L1-1-1",7,7,"Y"];
	
		
	
//Z positions 1-8 for rows.
    var mat_row_abs = [
    3.5 ,
    2.5 ,
    1.5 ,
    0.5 ,
   -0.5 ,
   -1.5 ,
   -2.5 ,
   -3.5
    ];
//X positions 1-8 for columns.
    var mat_col_abs = [
    3.5, 
    2.5,
    1.5 , 
    0.5 ,
   -0.5 ,
   -1.5 ,
   -2.5,    
   -3.5     
    ];

	
	
	
	
			//setMaterial(dae, new THREE.MeshBasicMaterial({color: 0xff0000}));
			var setMaterial = function(node, material) {
                           node.material = material;
                           if (node.children) {
                           for (var i = 0; i < node.children.length; i++) {
                           setMaterial(node.children[i], material);
                           }
                                              }
        
                                                     }
                                                     
                      
                       var positionDAE = function( nodedae , daex , daez ) {	
				//only x and z are needed . 
                                nodedae.position.x = daex;    // default 1.0
				nodedae.position.y = 0.0;
				nodedae.position.z = daez;    // default 1.0
                               

				nodedae.updateMatrix();	
                                
				}                                             
	
	               var positionDAE2 = function( nodedae , daex , daey ) {	
				//only x and z are needed . 
                                nodedae.position.x = daex;    // default 1.0                                
				nodedae.position.y = daey;
				nodedae.position.z = 0.0;    // default 1.0
                               

				nodedae.updateMatrix();	
                                
				}          
	
	                var unsetDAE = function( nodedae ) {	
	                 console.log("unsetDAE"); 
	                 //var selectedObject = scene.getObjectByName(nodedae.name);
                         //collada.scene.remove( selectedObject );
                         //scene.remove( nodedae );
                         //nodedae.rotateX( 30 );
                         nodedae.parent.remove(nodedae);
			 
                         //nodedae.updateMatrix();
                         //animate();
	                console.log("removed "+nodedae.name ); 
	                }
	
	
			var setDAE = function( nodedae , daecolor ) {				
				nodedae.scale.x = nodedae.scale.y = nodedae.scale.z = 0.002;
				nodedae.position.x = 0.0;    //default 1.0
				nodedae.position.y = 0.0;
				nodedae.position.z = 0.0;    // default 1.0	
				setMaterial(nodedae, daecolor );
				nodedae.updateMatrix();	
				nodedae.castShadow = true;
				nodedae.receiveShadow = true;
				scene.add( nodedae );	
				
				//if( nodedae.name.match(/PIECE_/) ) {
                                      //Search the piece position array for location. 
                                      var sname = nodedae.material.name;
                                      sname = sname.substring(6,9);                     
                                      var blocoff = PIECE_POS.indexOf( sname );
                                   console.log( " ( setDAE ) New Position "+sname+" "+blocoff+" of "+mat_row_abs[ PIECE_POS[ blocoff+2 ] ]+" X:"+ mat_col_abs[ PIECE_POS[ blocoff+1 ] ]  ); 
				positionDAE( nodedae , mat_row_abs[ PIECE_POS[ blocoff+2 ] ]  ,  mat_col_abs[ PIECE_POS[ blocoff+1 ] ] );
				
			//	}

                                }
                      
                      
                       var moveDAE = function( nodedae ,newnodedae, boarddaex, boarddaey , daecolor ) {	
     
                           //I need to add position data to and from. 
                           //Unmark 4th position in board data N 
                           //Mark 4th position in board to Y
                           
                          
                          console.log("moveDAE "+nodedae.name ); 
                          unsetDAE( nodedae );
                                
                         
                                                    
                          nodedae.scale.x = nodedae.scale.y = nodedae.scale.z = 0.04;
			  nodedae.position.x = -1 * boarddaey+3.3;    //default 1.0
			  nodedae.position.y = 0.0;	
			  nodedae.position.z = -1 * boarddaex+3.7; // default 1.0	
			  
			  scene.add( nodedae );		
			  
			  if( nodedae.name.match(/PIECE_/) ) {
                               //Search the PIECE array for conversion Y or N.    
                               blocoff = CURRENT_PIECE_POS.indexOf( "PIECE_"+nodedae.name ); 
                                                var sname = nodedae.name;
                                                sname = sname.substring(6,9);                     
                                                var pief = CURRENT_PIECE_POS.indexOf( sname );
                                                console.log("PIECE: "+sname ); 
                           
			  if( CURRENT_PIECE_POS[ pief+3 ] == "Y" ){	  
			  nodedae.position.z =   -1 * boarddaex+3.7; // 1 * boarddaey+3.5; //mat_row_abs[ CURRENT_PIECE_POS[ pief+2 ] ];
			  nodedae.position.y = 0.0;
			  nodedae.position.x =  -1 * boarddaey+3.3;  //-1 * boarddaex+2.0;  //-1 * mat_col_abs[ CURRENT_PIECE_POS[ pief+1 ] ];
			  nodedae.rotateX( 29.9 );
			  
			  CURRENT_PIECE_POS[ pief+3 ]="N";
			  
			  }
			  } //end of PIECE match
			  nodedae = newnodedae;
                          console.log("added  "+nodedae.name ); 
                          
                          
                          
                           //if( nodedae.name.match(/PIECE_/) ) {
                                      //Search the piece position array for location. 
                           //           var sname = boarddae.material.name;
                           //           sname = sname.substring(6,12);                     
                           //           var blocoff = BOARD_POS.indexOf( sname );
                           //        console.log( " ( moveDAE ) New Position "+sname+" "+blocoff+" of X: "+mat_row_abs[ BOARD_POS[ blocoff+2 ] ]+" Z:"+ mat_col_abs[ BOARD_POS[ blocoff+1 ] ]  ); 
			//	positionDAE2( nodedae , 8 * mat_col_abs[ BOARD_POS[ blocoff+2 ] ]  , -8 * mat_row_abs[ BOARD_POS[ blocoff+1 ] ] );
                                
                              
                             // }
                            }

	
				
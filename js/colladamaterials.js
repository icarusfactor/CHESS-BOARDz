			var version_materials="060116-0510";
			
			
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
var PIECE_POS = ["Wr2",0,0,"WHITE ROOK",
                 "Wk2",0,1,"WHITE KNIGHT",
                 "Wb2",0,2,"WHITE BISHOP",
                 "WK" ,0,3,"WHITE KING",
                 "WQ" ,0,4,"WHITE QUEEN",
                 "Wb1",0,5,"WHITE BISHOP",
                 "Wk1",0,6,"WHITE KNIGHT",
                 "Wr1",0,7,"WHITE ROOK",
                 "WP1",1,0,"WHITE PAWN",
                 "WP2",1,1,"WHITE PAWN",
                 "WP3",1,2,"WHITE PAWN",
                 "WP4",1,3,"WHITE PAWN",
                 "WP5",1,4,"WHITE PAWN",
                 "WP6",1,5,"WHITE PAWN",
                 "WP7",1,6,"WHITE PAWN",
                 "WP8",1,7,"WHITE PAWN",              
                 "BP1",6,0,"BLACK PAWN",
                 "BP2",6,1,"BLACK PAWN",
                 "BP3",6,2,"BLACK PAWN",
                 "BP4",6,3,"BLACK PAWN",
                 "BP5",6,4,"BLACK PAWN",
                 "BP6",6,5,"BLACK PAWN",
                 "BP7",6,6,"BLACK PAWN",
                 "BP8",6,7,"BLACK PAWN",
                 "Br2",7,0,"BLACK ROOK",
                 "Bk2",7,1,"BLACK KNIGHT",
                 "Bb2",7,2,"BLACK BISHOP",
                 "BK" ,7,3,"BLACK KING",
                 "BQ" ,7,4,"BLACK QUEEN",
                 "Bb1",7,5,"BLACK BISHOP",
                 "Bk1",7,6,"BLACK KNIGHT",
                 "Br1",7,7,"BLACK ROOK"];
	
	
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
	
	
	
	
//initial board positions. FEN POS convert position INTERSECTBOARD.name to offset +4
var BOARD_POS = ["L4-4-2",0,0,"Y","H1",
                 "D4-4-2",0,1,"Y","G1",
                 "L4-3-2",0,2,"Y","F1",
                 "D4-3-2",0,3,"Y","E1",
                 "L4-2-2",0,4,"Y","D1",
                 "D4-2-2",0,5,"Y","C1",
                 "L4-1-2",0,6,"Y","B1",
                 "D4-1-2",0,7,"Y","A1",

                 "D4-4-1",1,0,"Y","H2",
                 "L4-4-1",1,1,"Y","G2",
                 "D4-3-1",1,2,"Y","F2",
                 "L4-3-1",1,3,"Y","E2",
                 "D4-2-1",1,4,"Y","D2",
                 "L4-2-1",1,5,"Y","C2",
                 "D4-1-1",1,6,"Y","B2",
                 "L4-1-1",1,7,"Y","A2",
                
                 "L3-4-2",2,0,"N","H3",
                 "D3-4-2",2,1,"N","G3",
                 "L3-3-2",2,2,"N","F3",
                 "D3-3-2",2,3,"N","E3",
                 "L3-2-2",2,4,"N","D3",
                 "D3-2-2",2,5,"N","C3",
                 "L3-1-2",2,6,"N","B3",
                 "D3-1-2",2,7,"N","A3",

                 "D3-4-1",3,0,"N","H4",
                 "L3-4-1",3,1,"N","G4",
                 "D3-3-1",3,2,"N","F4",
                 "L3-3-1",3,3,"N","E4",
                 "D3-2-1",3,4,"N","D4",
                 "L3-2-1",3,5,"N","C4",
                 "D3-1-1",3,6,"N","B4",
                 "L3-1-1",3,7,"N","A4",

                 "L2-4-2",4,0,"N","H5",
                 "D2-4-2",4,1,"N","G5",
                 "L2-3-2",4,2,"N","F5",
                 "D2-3-2",4,3,"N","E5",
                 "L2-2-2",4,4,"N","D5",
                 "D2-2-2",4,5,"N","C5",
                 "L2-1-2",4,6,"N","B5",
                 "D2-1-2",4,7,"N","A5",

                 "D2-4-1",5,0,"N","H6",
                 "L2-4-1",5,1,"N","G6",
                 "D2-3-1",5,2,"N","F6",
                 "L2-3-1",5,3,"N","E6",
                 "D2-2-1",5,4,"N","D6",
                 "L2-2-1",5,5,"N","C6",
                 "D2-1-1",5,6,"N","B6",
                 "L2-1-1",5,7,"N","A6",

                 "L1-4-2",6,0,"Y","H7",
                 "D1-4-2",6,1,"Y","G7",
                 "L1-3-2",6,2,"Y","F7",
                 "D1-3-2",6,3,"Y","E7",
                 "L1-2-2",6,4,"Y","D7",
                 "D1-2-2",6,5,"Y","C7",
                 "L1-1-2",6,6,"Y","B7",
                 "D1-1-2",6,7,"Y","A7",

                 "D1-4-1",7,0,"Y","H8",
                 "L1-4-1",7,1,"Y","G8",
                 "D1-3-1",7,2,"Y","F8",
                 "L1-3-1",7,3,"Y","E8",
                 "D1-2-1",7,4,"Y","D8",
                 "L1-2-1",7,5,"Y","C8",
                 "D1-1-1",7,6,"Y","B8",
                 "L1-1-1",7,7,"Y","A8",

                 "L4-4-B",-0.5,8.5,"N","0B",
                 "L4-3-B",-0.5,9.5,"N","1B",
                 "L4-2-B",-0.5,10.5,"N","2B",
                 "L4-1-B",-0.5,11.5,"N","3B",
                               
                 "L3-4-B",0.5, 8.5,"N","4B",
                 "L3-3-B",0.5, 9.5,"N","5B",
                 "L3-2-B",0.5,10.5,"N","6B",
                 "L3-1-B",0.5,11.5,"N","7B",   

                 "L2-4-B",1.5, 8.5,"N","8B",
                 "L2-3-B",1.5, 9.5,"N","9B",
                 "L2-2-B",1.5,10.5,"N","AB",
                 "L2-1-B",1.5,11.5,"N","BB", 
                 
                 "L1-4-B",2.5, 8.5,"N","CB",
                 "L1-3-B",2.5, 9.5,"N","DB",
                 "L1-2-B",2.5,10.5,"N","EB",
                 "L1-1-B",2.5,11.5,"N","FB", 

                 "L4-4-W",4.5, 8.5,"N","0W",
                 "L4-3-W",4.5, 9.5,"N","1W",
                 "L4-2-W",4.5,10.5,"N","2W",
                 "L4-1-W",4.5,11.5,"N","3W",
                               
                 "L3-4-W",5.5, 8.5,"N","4W",
                 "L3-3-W",5.5, 9.5,"N","5W",
                 "L3-2-W",5.5,10.5,"N","6W",
                 "L3-1-W",5.5,11.5,"N","7W",   

                 "L2-4-W",6.5, 8.5,"N","8W",
                 "L2-3-W",6.5, 9.5,"N","9W",
                 "L2-2-W",6.5,10.5,"N","AW",
                 "L2-1-W",6.5,11.5,"N","BW", 
                 
                 "L1-4-W",7.5, 8.5,"N","CW",
                 "L1-3-W",7.5, 9.5,"N","DW",
                 "L1-2-W",7.5,10.5,"N","EW",
                 "L1-1-W",7.5,11.5,"N","FW"];
	
		
//This is used for initial Set Position	of the pieces but that is it. 
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
                          // all same level. 
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

	
				
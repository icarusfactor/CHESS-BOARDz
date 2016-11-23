	        var version_boardparts="082416_0436";
	
	
					
		var sqr_geometry = [];
	        var sqr_material = [];
                var sqr = [];

                var setupBoard = function() {	
                                var board_dat = 5; 
                                var toggle = 0;
                                var togcount=0;
                                sqr_geometry = new THREE.BoxGeometry(500, 60, 500, 10, 0, 10 );

	                        for ( var num = 0; num < 65; num++  ) {
                                 numblock = num * board_dat; 
 
                              switch( toggle ) {
                               case 0: 
				 sqr_material[num] = new THREE.MeshBasicMaterial({color: 0xAAAAAA });
                                 sqr_material[num].name = "BOARD_"+BOARD_POS[ numblock ];
                                 toggle=1; 
                                 break; 
                               case 1:
                                 sqr_material[ num ] = new THREE.MeshBasicMaterial({color: 0x333333 });
                                 sqr_material[num].name = "BOARD_"+BOARD_POS[ numblock ];
                                 toggle=0; 
                                 break;        

                                 }
                                
                                togcount++;
                                if(togcount == 8) {toggle ^= 1;togcount=0;}
       
                                sqr[num] = new THREE.Mesh(sqr_geometry, sqr_material[num]);
                                sqr[num].scale.x = sqr[num].scale.y = sqr[num].scale.z = 0.002;   
                                sqr[num].position.x = mat_row_abs[ BOARD_POS[ numblock+2 ] ];
				sqr[num].position.y = 0;
				sqr[num].position.z = mat_col_abs[ BOARD_POS[ numblock+1 ] ];                      
                               	sqr[num].castShadow = true;
				sqr[num].receiveShadow = true;
				scene.add( sqr[num]);
                                console.log("SQUARE="+(num)+" X:"+(sqr[num].position.x)+" Z:"+(sqr[num].position.z) );

                                } //end of for loop	

                                              }


	

                var limbo_sqr_geometry = [];
	        var limbo_sqr_material = [];
                var limbo_sqr = [];

                var setupLimbo = function() {	
                                var board_dat = 5;
                                limbo_sqr_geometry = new THREE.BoxGeometry(290, 60, 290, 10, 0, 10 );
                               
                               	
                                //offset array 64 for main board positions.
	                        for ( var num = 64; num < 64+16; num++  ) {
                                 numblock = num * board_dat;                              
				 
                                 limbo_sqr_material[num ] = new THREE.MeshBasicMaterial({color: 0x888888 });
                                 
                                 limbo_sqr_material[num].name = "BOARD_"+BOARD_POS[ numblock ];
                              
       
                                limbo_sqr[num] = new THREE.Mesh(limbo_sqr_geometry, limbo_sqr_material[num]);
                                limbo_sqr[num].scale.x = limbo_sqr[num].scale.y = limbo_sqr[num].scale.z = 0.002;   
                                limbo_sqr[num].position.x = BOARD_POS[ numblock+1 ];
				limbo_sqr[num].position.y = 2.0;
				limbo_sqr[num].position.z = BOARD_POS[ numblock+2 ];                       
                               	limbo_sqr[num].castShadow = true;
				limbo_sqr[num].receiveShadow = true;
				scene.add( limbo_sqr[num]);
                                console.log("LIMBO SQUARE="+(num)+" X:"+(limbo_sqr[num].position.x)+" Z:"+(limbo_sqr[num].position.z) );

                                } //end of for loop	





                                }

	
				
		
		//LIMBO for captured pieces. 
		var limbo_square_geometry = [];
		var limbo_square_material = [];
		var limbosquare_materialD = [];
		var limbo_square = [];	
		//var limbo_squareD = [];
		
		
		//LIMBO Light Squares	
		var setLIMBOSquares = function( offset ,offset2, SQname ) {		
		   for ( var r = 1; r < 5; r++  ) {	
		   for ( var i = 1; i < 5; i++  ) {
			//LIMBO Squares	
			        limbo_square_geometry = new THREE.BoxGeometry(290, 60, 290, 10, 0, 10 );	
				limbo_square_material[i*r] = new THREE.MeshBasicMaterial({color: 0x888888 });	
			     	limbo_square[i*r] = new THREE.Mesh(limbo_square_geometry, limbo_square_material[i*r]);	
			     	
				limbo_square_material[i*r].name = "BOARD_L"+r+"-"+i+"-"+SQname;								
				limbo_square[i*r].scale.x = limbo_square[i*r].scale.y = limbo_square[i*r].scale.z = 0.002;				
				//limbo_square[i*r].position.x = offset +( 2 * (i+1));
                                limbo_square[i*r].position.x = offset +(i+1);
				limbo_square[i*r].position.y = -0.1 //-0.4;
				limbo_square[i*r].position.z = offset + offset2 +(r-1);
				limbo_square[i*r].castShadow = true;
				limbo_square[i*r].receiveShadow = true;
				scene.add( limbo_square[i*r] );
				 console.log("LIMBO "+limbo_square_material[i*r].name+"="+( i*r )+" X:"+(limbo_square[ i*r ].position.x)+" Z:"+(limbo_square[ i*r ].position.z) );
				}
				}
				
				}

	         //puts original color back on board.  
                 var paintOrig = function() {

                   var p=0;
                   var k=0;
                   var q=0;       
                   //p=q=0; 
                   //initial 
                   for ( var r = 1; r <=8 ; r++  ) {
                        //p=r+Aoffset;
                        p=r;                
                             for ( var k = 0; k <=7 ; k++  ) {
                                 //check offset before adding copy. Add x y ticker to step positions. 
                                  
                                 //q=k+Noffset;
                                 q=k; 
                                
                                 //if ( p >=1 && p<=8  &&  q>=0 && q<=7 ) { sqr[r*k] = bcol[p][q];}
                                  
                                 if ( p >=1 && p<=8  &&  q>=0 && q<=7 ) { sqr[ ((r*8)+k)-8 ].material.color.setHex( bcol[p][q] ); 
                                                                          //console.log("count: "+( ((r*8)+k)-8 )+" p : q "+p+":"+q );
                                                                        }
                                 
                                 
                                  } //end of k loop

                                                   } //end of r loop


                  
                  } 

//MpawnA
//MpawnB
//Mrook
//Mknight
//Mbishop
//Mqueen
//Mking
                                        //var Mbuffer = [[]]
             var paintBoard = function( Mbuffer ,  Noffset , Aoffset ) {

                   //var Noffset=0;
                   //var Aoffset=0;   
                   var p=0;
                   var k=0;
                   var q=0;       
                   //p=q=0; 
                   //initial 
                   for ( var r = 1; r <=8 ; r++  ) {
                        p=r+Noffset;
                        //p=r;                
                             for ( var k = 0; k <=7 ; k++  ) {
                                 //check offset before adding copy. Add x y ticker to step positions. 
                                  
                                 q=k+Aoffset;                                 
                                 //q=k; 

                                 if ( p >=1 && p<=8  &&  q>=0 && q<=7 ) { 
                                                                          
                                                                          //bcol[p][q]    select and highlight move positions based on color of square.
                                                                          
                                                                          if( !Mbuffer[p][q]==0 ) {

                                                                               //if( bcol[p][q] == "0xAAAAAA" )
                                                                               if( bcol[p][q] == "0x333333" )  
                                                                                    { sqr[ ((r*8)+k)-8 ].material.color.setHex( 0x550000 ); }
                                                                               else { sqr[ ((r*8)+k)-8 ].material.color.setHex( 0x990000 ); }


                                                                          console.log("count: "+( ((r*8)+k)-8 )+" p : q "+p+":"+q );
                                                                          } //end of piece if
                                                                        } //end of range if          

                                 
                                  } //end of k loop

                                                   } //end of r loop


               
                                console.log( "A off "+Aoffset+" Noff "+Noffset );
                                //for ( var r = 1; r <=8 ; r++  ) {
                                // console.log( "CHESS BOARD B "+r+":"+ Mbuffer[r] );
                                //}


                  } 

               
           
            var HLBitmap = function() {

                 // Get position of hovered chess piece.    
                 
                   
                 
                  }


        function reverse(s) {
                             return s.split('').reverse().join('');
                            }

	var update_piece_location = function(selected_board_position , selected_chess_piece)  {
                  //var Mbuffer = [[]];
                  //var MbufferTMP = [[]];

                  console.log("UPDATE LOCATION: "+selected_board_position+" PIECE: "+selected_chess_piece );
                 
                   
                   //Find what bitmap to use by scanning PIECE.

                   if( selected_chess_piece.match(/PIECE_/gi)  ){
                               
                               
                              
                               var Aoffset=0;
                               var Noffset=0; 
                               var p=0;
                               var k=0; 
                               console.log("PIECE TO UPDATE FOUND: "+selected_chess_piece );
                             
                               var sname = selected_chess_piece.substring(7,9);
                               var bname = selected_chess_piece.substring(6,9);
                               var blocoff = CURRENT_PIECE_POS.indexOf( bname );
                               var pname = CURRENT_PIECE_POS[ blocoff + 4 ]                                 
                               console.log("BITMAP SCAN FOR "+bname+" TO "+pname);


                                 //need to work out offset from center of matrix to chess board. (D5)   
  
                                 // A-4 B-3 C-2 D0 E-+1 F+2 G+3 H+4
                                 // 1-3 2-2 3-1 4-0 5+1 6+2 7+3 8+4 

                                 switch ( pname.charAt(0) )
                                   {
                                    case "A": Aoffset=-3;
                                    break;   
                                    case "B": Aoffset=-2;
                                    break;
                                    case "C": Aoffset=-1;
                                    break;
                                    case "D": Aoffset=0;
                                    break;
                                    case "E": Aoffset=1;
                                    break;
                                    case "F": Aoffset=2;
                                    break;
                                    case "G": Aoffset=3;
                                    break;
                                    case "H": Aoffset=4;
                                    break;
   
                                    default: Aoffset=0;
                                   }

                                   switch ( pname.charAt(1) )
                                   {
                                    case "1": Noffset=4;
                                    break;   
                                    case "2": Noffset=3;
                                    break;
                                    case "3": Noffset=2;
                                    break;
                                    case "4": Noffset=1;
                                    break;
                                    case "5": Noffset=0;
                                    break;
                                    case "6": Noffset=-1;
                                    break;
                                    case "7": Noffset=-2;
                                    break;
                                    case "8": Noffset=-3;
                                    break;
   
                                    default: Noffset=0;
                                   }

                                 console.log( "A off "+pname.charAt(0)+" "+Aoffset+" N off "+pname.charAt(1)+" "+Noffset );



                               //// ****PAWN*******************      
                               if( sname.match(/P/g) ) {
                                console.log("BITMAP SCAN FOUND PAWN");
                                
                                //Pawn initial move or other. >>>WORK IN PROGRESS<<< Will use move +1 for now.   
                           

                                //if it is a pawn,then what color is it.                         
                                if( selected_move_piece_color == "B") {                                
                                //if its black then mirror pawn bitmap.                              
                                         paintBoard( MpawnC  , Noffset , Aoffset );
                                } else { paintBoard( MpawnB  , Noffset,  Aoffset ); }

                                // update CURRENT_PIECE_POS          
                                //other
                                //TBA     
                                 
                                
                                
                               
                               
                                
                                } //end of PAWN scan/
                               
                               
                               if( sname.match(/K/g) ) { console.log("BITMAP SCAN FOUND KING");  paintBoard( Mking   , Noffset , Aoffset );}
                               if( sname.match(/Q/g) ) { console.log("BITMAP SCAN FOUND QUEEN"); paintBoard( Mqueen  , Noffset , Aoffset );}
                               if( sname.match(/k/g) ) { console.log("BITMAP SCAN FOUND KNIGHT");paintBoard( Mknight , Noffset , Aoffset );}
                               if( sname.match(/b/g) ) { console.log("BITMAP SCAN FOUND BISHOP");paintBoard( Mbishop , Noffset , Aoffset );}
                               if( sname.match(/r/g) ) { console.log("BITMAP SCAN FOUND ROOK");  paintBoard( Mrook   , Noffset , Aoffset );}
                                                                }
    
                   

                   //Align bitmap with 1s  (DONT KNOW)
  
                   //copy original board position color to backup copy. (NEEDS TO HAVE A HARD CODED BOARD COLOR MATRIX)  
                       
                   //Set bitmap color on main board with highlight color 

                   //If piece was selected or board position selected (goto  update position)
                    
                   //Deselect if no longer in hover mode.      
                   
                   //Copy backup color buffer to main copy.

                  
                  }	

		
// COLOR BLOCK SETTING FOR PIECES
//
var matHL = "0x660000";
//                 A B C D E F G H  
//var chessmat = [[]];   



var bcol = [[]];
//buffer color - save old color in this location. 
bcol[1] = ["0xAAAAAA","0x333333","0xAAAAAA","0x333333","0xAAAAAA","0x333333","0xAAAAAA","0x333333"];
bcol[2] = ["0x333333","0xAAAAAA","0x333333","0xAAAAAA","0x333333","0xAAAAAA","0x333333","0xAAAAAA"];
bcol[3] = ["0xAAAAAA","0x333333","0xAAAAAA","0x333333","0xAAAAAA","0x333333","0xAAAAAA","0x333333"];
bcol[4] = ["0x333333","0xAAAAAA","0x333333","0xAAAAAA","0x333333","0xAAAAAA","0x333333","0xAAAAAA"];
bcol[5] = ["0xAAAAAA","0x333333","0xAAAAAA","0x333333","0xAAAAAA","0x333333","0xAAAAAA","0x333333"];
bcol[6] = ["0x333333","0xAAAAAA","0x333333","0xAAAAAA","0x333333","0xAAAAAA","0x333333","0xAAAAAA"];
bcol[7] = ["0xAAAAAA","0x333333","0xAAAAAA","0x333333","0xAAAAAA","0x333333","0xAAAAAA","0x333333"];
bcol[8] = ["0x333333","0xAAAAAA","0x333333","0xAAAAAA","0x333333","0xAAAAAA","0x333333","0xAAAAAA"];



//var bcol1 = ["0x0","0x0","0x0","0x0","0x0","0x0","0x0","0x0"];
//var bcol2 = ["0x0","0x0","0x0","0x0","0x0","0x0","0x0","0x0"];
//var bcol3 = ["0x0","0x0","0x0","0x0","0x0","0x0","0x0","0x0"];
//var bcol4 = ["0x0","0x0","0x0","0x0","0x0","0x0","0x0","0x0"];
//var bcol5 = ["0x0","0x0","0x0","0x0","0x0","0x0","0x0","0x0"];
//var bcol6 = ["0x0","0x0","0x0","0x0","0x0","0x0","0x0","0x0"];
//var bcol7 = ["0x0","0x0","0x0","0x0","0x0","0x0","0x0","0x0"];
//var bcol8 = ["0x0","0x0","0x0","0x0","0x0","0x0","0x0","0x0"];

//One extra row for bitmap center alignment 
// 0=empty
// 1=current position
// 2=can move to but not attack.
// 3=attack only move.

// 4=can move and attack.
// 5=infinite (4)

// TODO :: Need to flip matrix -90o 

var MpawnA = [[]]; 
//bitmap for initial pawn HL need to invert for opposite side. 
MpawnA[1] = [0,0,0,0,0,0,0,0,0];
MpawnA[2] = [0,0,0,0,0,0,0,0,0];
MpawnA[3] = [0,0,0,0,0,0,0,0,0];
MpawnA[4] = [0,0,0,0,0,0,0,0,0];
MpawnA[5] = [0,0,0,0,1,0,0,0,0];
MpawnA[6] = [0,0,0,3,2,3,0,0,0];
MpawnA[7] = [0,0,0,0,2,0,0,0,0];
MpawnA[8] = [0,0,0,0,0,0,0,0,0];
MpawnA[9] = [0,0,0,0,0,0,0,0,0];

var MpawnB = [[]]; 
//bitmap for normal mode pawn HL need to invert for opposite side. 
MpawnB[1] = [0,0,0,0,0,0,0,0,0];
MpawnB[2] = [0,0,0,0,0,0,0,0,0];
MpawnB[3] = [0,0,0,0,0,0,0,0,0];
MpawnB[4] = [0,0,0,0,0,0,0,0,0];
MpawnB[5] = [0,0,0,0,1,0,0,0,0];
MpawnB[6] = [0,0,0,3,2,3,0,0,0];
MpawnB[7] = [0,0,0,0,0,0,0,0,0];
MpawnB[8] = [0,0,0,0,0,0,0,0,0];
MpawnB[9] = [0,0,0,0,0,0,0,0,0];

var MpawnC = [[]]; 
//bitmap for normal mode pawn HL need to invert for opposite side. Black side +1 mode matrix. 
MpawnC[1] = [0,0,0,0,0,0,0,0,0];
MpawnC[2] = [0,0,0,0,0,0,0,0,0];
MpawnC[3] = [0,0,0,0,0,0,0,0,0];
MpawnC[4] = [0,0,0,3,2,3,0,0,0];
MpawnC[5] = [0,0,0,0,1,0,0,0,0];
MpawnC[6] = [0,0,0,0,0,0,0,0,0];
MpawnC[7] = [0,0,0,0,0,0,0,0,0];
MpawnC[8] = [0,0,0,0,0,0,0,0,0];
MpawnC[9] = [0,0,0,0,0,0,0,0,0];



var Mrook = [[]]; 
//bitmap for rook HL
Mrook[1] = [0,0,0,0,5,0,0,0,0];
Mrook[2] = [0,0,0,0,4,0,0,0,0];
Mrook[3] = [0,0,0,0,4,0,0,0,0];
Mrook[4] = [0,0,0,0,4,0,0,0,0];
Mrook[5] = [5,4,4,4,1,4,4,4,5];
Mrook[6] = [0,0,0,0,4,0,0,0,0];
Mrook[7] = [0,0,0,0,4,0,0,0,0];
Mrook[8] = [0,0,0,0,4,0,0,0,0];
Mrook[9] = [0,0,0,0,5,0,0,0,0];


var Mknight = [[]];
//bitmap for knight HL
Mknight[1] = [0,0,0,0,0,0,0,0,0];
Mknight[2] = [0,0,0,0,0,0,0,0,0];
Mknight[3] = [0,0,0,4,0,4,0,0,0];
Mknight[4] = [0,0,4,0,0,0,4,0,0];
Mknight[5] = [0,0,0,0,1,0,0,0,0];
Mknight[6] = [0,0,4,0,0,0,4,0,0];
Mknight[7] = [0,0,0,4,0,4,0,0,0];
Mknight[8] = [0,0,0,0,0,0,0,0,0];
Mknight[9] = [0,0,0,0,0,0,0,0,0];

var Mbishop = [[]];
//bitmap for bishop HL
Mbishop[1] = [5,0,0,0,0,0,0,0,5];
Mbishop[2] = [0,4,0,0,0,0,0,4,0];
Mbishop[3] = [0,0,4,0,0,0,4,0,0];
Mbishop[4] = [0,0,0,4,0,4,0,0,0];
Mbishop[5] = [0,0,0,0,1,0,0,0,0];
Mbishop[6] = [0,0,0,4,0,4,0,0,0];
Mbishop[7] = [0,0,4,0,0,0,4,0,0];
Mbishop[8] = [0,4,0,0,0,0,0,4,0];
Mbishop[9] = [5,0,0,0,0,0,0,0,5];

var Mqueen = [[]];
//bitmap for queen HL
Mqueen[1] = [5,0,0,0,5,0,0,0,5];
Mqueen[2] = [0,4,0,0,4,0,0,4,0];
Mqueen[3] = [0,0,4,0,4,0,4,0,0];
Mqueen[4] = [0,0,0,4,4,4,0,0,0];
Mqueen[5] = [5,4,4,4,1,4,4,4,5];
Mqueen[6] = [0,0,0,4,4,4,0,0,0];
Mqueen[7] = [0,0,4,0,4,0,4,0,0];
Mqueen[8] = [0,4,0,0,4,0,0,4,0];
Mqueen[9] = [5,0,0,0,5,0,0,0,5];



var Mking = [[]];
//bitmap for king HL
Mking[1] = [0,0,0,0,0,0,0,0,0];
Mking[2] = [0,0,0,0,0,0,0,0,0];
Mking[3] = [0,0,0,0,0,0,0,0,0];
Mking[4] = [0,0,0,4,4,4,0,0,0];
Mking[5] = [0,0,0,4,1,4,0,0,0];
Mking[6] = [0,0,0,4,4,4,0,0,0];
Mking[7] = [0,0,0,0,0,0,0,0,0];
Mking[8] = [0,0,0,0,0,0,0,0,0];
Mking[9] = [0,0,0,0,0,0,0,0,0];








				
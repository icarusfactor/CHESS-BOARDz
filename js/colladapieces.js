			var version_chesspieces = "021116_0652";
	
                                                                   
			var loader = new THREE.ColladaLoader();
			scene = new THREE.Scene();
			
	                      

			//var loader = new THREE.ColladaLoader();
			loader.options.convertUpAxis = false;
			
	
	             
		var king = [];
		loader.load( 'chesspieces/king.dae', function ( collada ) { 		
			for (var i = 0; i < 2 ;i++) {			       
			    king[i] = collada.scene.clone();
			       }	
								
			});
	
			
			
		var queen = [];	
		loader.load( 'chesspieces/queen.dae', function ( collada ) {
			for (var i = 0; i < 2 ;i++) {			       
			    queen[i] = collada.scene.clone();
			       }	
				
			} );
			
					
		var knight = [];
		loader.load( 'chesspieces/knight.dae', function ( collada ) {
			for (var i = 0; i < 4 ;i++) {			       
			        knight[i] = collada.scene.clone();
			       }	
				
			} );
	
		
				
			
						
			
		var rook = [];
		loader.load( 'chesspieces/rook.dae', function ( collada ) {
		
			     for (var i = 0; i < 4 ;i++) {			       
			        rook[i] = collada.scene.clone();
			       }	
				
			} );
			
		


		var bishop = [];	
		loader.load( 'chesspieces/bishop.dae', function ( collada ) {
			
			     for (var i = 0; i < 4 ;i++) {			       
			        bishop[i] = collada.scene.clone();
			       }	
							
				
			} );
	
			
		var pawns = [];			
		loader.load( 'chesspieces/pawn.dae', function( collada ) {
			       
			       for (var i = 0; i < 16; i++) {			       
			        pawns[i] = collada.scene.clone();
			       }
			     
			            
			} );
			
	
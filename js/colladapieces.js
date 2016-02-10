			var dae;
			var daeKl,daeKd,daeQl,daeQd;
			var daek1l,daek2l, daek1d,daek2d;
			var daeB1l,daeB2l , daeB1d, daeB2d;
			var daeR1l,daeR2l , daeR1d , daeR2d;
			var daeP1l ,daeP2l, daeP3l,daeP4l,daeP5l,daeP6l,daeP7l,daeP8l;
			var daeP1d ,daeP2d, daeP3d,daeP4d,daeP5d,daeP6d,daeP7d,daeP8d;	    


                      
                                                                   
			var loader = new THREE.ColladaLoader();
			scene = new THREE.Scene();
			
	                      

			//var loader = new THREE.ColladaLoader();
			//loader.options.convertUpAxis = true;
			
	
	             
		
		loader.load( 'chesspieces/king.dae', function ( collada ) { 		
				daeKl = collada.scene;	
								
			});
			
		loader.load( 'chesspieces/king.dae', function ( collada ) { 
				daeKd = collada.scene;	
								
			});
			
	
			
			
			
		loader.load( 'chesspieces/queen.dae', function ( collada ) {
				daeQl = collada.scene;
				
			} );
			
		loader.load( 'chesspieces/queen.dae', function ( collada ) {
				daeQd = collada.scene;
				
			} );
			
			
		loader.load( 'chesspieces/knight.dae', function ( collada ) {
				daek1l = collada.scene;	
				
			} );
	
		loader.load( 'chesspieces/knight.dae', function ( collada ) {
				daek2l = collada.scene;	
				
			} );		
			
			
		loader.load( 'chesspieces/knight.dae', function ( collada ) {
				daek1d = collada.scene;	
				
			} );
			
		loader.load( 'chesspieces/knight.dae', function ( collada ) {
				daek2d = collada.scene;	
				init();  //  HAVE NO CLUE WHY I HAVE TO PUT THIS HERE.
				
			} );
						
			
			
		loader.load( 'chesspieces/rook.dae', function ( collada ) {
				daeR1l = collada.scene;				
				
			} );
			
		loader.load( 'chesspieces/rook.dae', function ( collada ) {
				daeR2l = collada.scene;				
				
			} );


		loader.load( 'chesspieces/rook.dae', function ( collada ) {
				daeR1d = collada.scene;				
				
			} );
			
		loader.load( 'chesspieces/rook.dae', function ( collada ) {
				daeR2d = collada.scene;				
				
			} );


			
		loader.load( 'chesspieces/bishop.dae', function ( collada ) {
				daeB1l = collada.scene;	
							
				
			} );
	
		loader.load( 'chesspieces/bishop.dae', function ( collada ) {
				daeB2l = collada.scene;	
							
				
			} );		
	
		loader.load( 'chesspieces/bishop.dae', function ( collada ) {
				daeB1d = collada.scene;	
							
				
			} );			
	
		loader.load( 'chesspieces/bishop.dae', function ( collada ) {
				daeB2d = collada.scene;	
						
				
			} );		
			
			
			
			loader.load( 'chesspieces/pawn.dae', function ( collada ) {				
			        daeP1l = collada.scene;		
			               			        
				
			} );
			
			
				loader.load( 'chesspieces/pawn.dae', function ( collada ) {
			        daeP2l = collada.scene;				        			
			        //window.referenceModel = daeP.scene.children[0];
			        //var refObject = window.referenceModel;			        
				
			} );		
			
				loader.load( 'chesspieces/pawn.dae', function ( collada ) {
			        daeP3l = collada.scene;				
			        //window.referenceModel = daeP.scene.children[0];
			        //var refObject = window.referenceModel;			        
				
			} );
			
				loader.load( 'chesspieces/pawn.dae', function ( collada ) {
			        daeP4l = collada.scene;				
			        //window.referenceModel = daeP.scene.children[0];
			        //var refObject = window.referenceModel;			        
				
			} );
			
				loader.load( 'chesspieces/pawn.dae', function ( collada ) {
			        daeP5l = collada.scene;				
			        //window.referenceModel = daeP.scene.children[0];
			        //var refObject = window.referenceModel;			        
				
			} );
			
				loader.load( 'chesspieces/pawn.dae', function ( collada ) {
			        daeP6l = collada.scene;				
			        //window.referenceModel = daeP.scene.children[0];
			        //var refObject = window.referenceModel;			        
				
			} );
			
				loader.load( 'chesspieces/pawn.dae', function ( collada ) {
			        daeP7l = collada.scene;				
			        //window.referenceModel = daeP.scene.children[0];
			        //var refObject = window.referenceModel;			        
				
			} );
			
				loader.load( 'chesspieces/pawn.dae', function ( collada ) {
			        daeP8l = collada.scene;				
			        //window.referenceModel = daeP.scene.children[0];
			        //var refObject = window.referenceModel;			        
				
			} );
			
	
	
	//dark side pawns
	
				loader.load( 'chesspieces/pawn.dae', function ( collada ) {
			        daeP1d = collada.scene;				
			        //window.referenceModel = daeP.scene.children[0];
			        //var refObject = window.referenceModel;			        
				
			} );
			
			
				loader.load( 'chesspieces/pawn.dae', function ( collada ) {
			        daeP2d = collada.scene;				
			        //window.referenceModel = daeP.scene.children[0];
			        //var refObject = window.referenceModel;			        
				
			} );		
			
				loader.load( 'chesspieces/pawn.dae', function ( collada ) {
			        daeP3d = collada.scene;				
			        //window.referenceModel = daeP.scene.children[0];
			        //var refObject = window.referenceModel;			        			        
				
			} );
			
				loader.load( 'chesspieces/pawn.dae', function ( collada ) {
			        daeP4d = collada.scene;				
			        //window.referenceModel = daeP.scene.children[0];
			        //var refObject = window.referenceModel;			        
				
			} );
			
				loader.load( 'chesspieces/pawn.dae', function ( collada ) {
			        daeP5d = collada.scene;				
			        //window.referenceModel = daeP.scene.children[0];
			        //var refObject = window.referenceModel;			        
				
			} );
			
				loader.load( 'chesspieces/pawn.dae', function ( collada ) {
			        daeP6d = collada.scene;				
			        //window.referenceModel = daeP.scene.children[0];
			        //var refObject = window.referenceModel;			        
				
			} );
			
				loader.load( 'chesspieces/pawn.dae', function ( collada ) {
			        daeP7d = collada.scene;				
			        //window.referenceModel = daeP.scene.children[0];
			        //var refObject = window.referenceModel;			        
				
			} );
			
				loader.load( 'chesspieces/pawn.dae', function ( collada ) {
			        daeP8d = collada.scene;				
			        //window.referenceModel = daeP.scene.children[0];
			        //var refObject = window.referenceModel;
			        
			        init();  //  HAVE NO CLUE WHY I HAVE TO PUT THIS HERE.			        
				
			} );
	
	
			
	
	

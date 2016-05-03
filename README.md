# CHESS-BOARDz
WebGL Chess Board.
<BR>
Work in progress, does not play actual game yet - http://www.userspace.org/chessworld/

DESIGN GUIDELINES:<BR>
 *Using different materials for each piece and designating its name in it.<BR>
  Did not use the mesh since it coud be multiple and animate in the DAE.<BR>
  *Using indivdual squares for board that can be sleected.<BR>
 *Each model is a one piece mesh. Not multiple. Made and exported in Blender. <BR>
  *On top of using WebGL I want to use latest HTML5 and CSS3 elements.<BR>
  *Want to keep basic colors and not textures for now. If a texture is used<BR>
 convert it into a CSS element, so it can be transfered easily with script. <BR>
 *Keep this version of the game classical, any major <BR>
 variations can be forked off.<BR> 
 Had to genereate the squares after pieces inside init(), order of operation made it work.<BR>
 The init() function does not kick off correctly,you will have to manaully click the "init hack"<BR>
 button to get it to work. The loading of the DAE meshes are different rotation alignments than the<BR>
 three.js meshes.So when animating or moving the mesh it gets converted to a three mesh after you<BR>
 remove then add it back. So I had to add hacks into the script to deal with this issue. The <BR>
 fix will be to "add" and "remove" then "add" again to syncronizes up all the parts. this will be<BR>
 needing done if i want to do animation or drag moves. For now moving piece from one square to another<BR>
 will be fine.<BR>
 
<BR>
IRC:
You can catch me online as user factor using<BR>
an irc client asimov.freenode.net or web - http://webchat.freenode.net/ <BR>
Chat Rooms #tulsalug #three.js #webgl ##chess #blender<BR>
<BR>
Other sites and githubs used<BR>
<BR>
  STOCKFISH.JS Chess engine in Javascript http://www.stockfishchess.com/
  CHESSBOARD.JS  http://chessboardjs.com  https://github.com/oakmac/chessboardjs/ <BR>
  THREE.JS  http://threejs.org/  https://github.com/mrdoob/three.js/ <BR>
  HTML5 audio API XM MOD player https://github.com/junghans-schneider/ModPlayer.js <BR>
  
<BR>
TODO:<BR>
 P = Priority Get Done item (only one per list)<BR>
 N = Normal Get Done item.<BR>
 L = Low level Get Done item.<BR>
 I = Idea to research<BR>
 F = Good feature to have,if I get a chance to add it.<BR>
 <BR>
 [N] Integrate modified chessboard.js to get FEN data.<BR>
 [N] Add letters and numbers to side of board that match FEN positions. A-H & 1-8 <BR>
 [P] Remove pieces from chess board/Make place to put them.<BR>
 [N] Limit piece selector to side that is active In Play<BR>
 [L] Make Start Game Button Work. <BR>
 [L] Remove selector for Rotate mode. <BR>
 [F] (Menu option) Import/Export/Record FEN moves. <BR>
 [F] Add AI and rules with stockfish.js chess engine<BR>
 [F] Add HTML5 Web Audio API XM MOD Player for background music selection. <BR>
 [N] Fix init() location , so that it makes sense.<BR> 
 [L] Show options the piece can move once selected.<BR>
 [F] Make DAE meshes convert to three mesh by removing and add back to scence.(remove conversion hacks)<BR>
 [F] Animate / make draggable a selected piece.(Have to remove mesh hacks first.) <BR>
 [F] Once mouse up event detected on draggable object,make sure location is within chess rules.Else revert back.<BR>
 
 
 
 
 

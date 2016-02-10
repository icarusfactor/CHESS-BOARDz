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
 convert it into a CSS element, so it can be trafered easily with script. <BR>
 *Keep this version of the game classical, any marjor <BR>
 variations can be forked off.<BR> 
<BR>
IRC:
You can catch me online as user factor uisng<BR>
an irc client asimov.freenode.net or web - http://webchat.freenode.net/ <BR>
Chat Rooms #three.js #webgl ##chess #blender<BR>
<BR>
Other sites and githubs used<BR>
<BR>
  CHESSBOARD.JS  http://chessboardjs.com  https://github.com/oakmac/chessboardjs/ <BR>
  THREE.JS  http://threejs.org/  https://github.com/mrdoob/three.js/ <BR>
  HTML5 audio API XM MOD player https://github.com/junghans-schneider/ModPlayer.js <BR>
  
<BR>
TODO:<BR>
 [W] Add Piece Selector <BR>
 [ ] "infodata" status will have piece name while IN PLAY. <BR>
 [ ] Integrate modified chessboard.js to insert and get FEN data.<BR>
 [ ] Add letters and numbers to side of board that match FEN positions. <BR>
 [ ] Move pieces to sqaures on chess board.<BR>
 [ ] Remove pieces from chess board<BR>
 [ ] Limit piece selector to side that is active In Play<BR>
 [ ] Make Start Game Button Work. <BR>
 [ ] Remove selector for Rotate and Top mode. <BR>
 [ ] Record FEN moves for playback and download. <BR>
 [ ] Add AI player<BR>
 [ ] Add HTML5 Web Audio API XM MOD Player for background music selection. <BR>
 [X] Separated main file into smaller files. <BR>
 [ ] Fix init() location , so that it makes sense. 
 
 
 

# CHESS-BOARDz
WebGL Chess Board.
<BR>
Work in progress, does not play actual game yet - http://userspace.org/CHESS-BOARDz/

DESIGN GUIDELINES:<BR>
 *Using different materials for each piece and designating its name in it.<BR>
  Did not use the mesh since it coud be multiple and animate in the DAE.<BR>
  *Using indivdual squares for board that can be selected.<BR>
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
 needing done if I want to do animation or drag moves. For now moving piece from one square to another<BR>
 will be fine.<BR>
 
<BR>
IRC:
You can catch me online as user factor using<BR>
an irc client asimov.freenode.net or web - http://webchat.freenode.net/ <BR>
Chat Rooms #tulsalug #three.js #webgl ##chess #blender<BR>
<BR>
Other sites and githubs used<BR>
<BR>
  P4WN  https://github.com/douglasbagnall/p4wn<BR>
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
 X = COMPLETED<BR>
 <BR>
 [N] Integrate modified p4wn javascript chess engine to get put FEN data.<BR>
 [F] Add AI and rules with p4wn chess engine for computer player.<BR>
 [X] Convert board positions to FEN board positions.<BR>
 [F] Import / Export / Record FEN moves.(Menu Option) <BR>
 [N] Limit piece selector to side that is active In Play<BR>
 [L] Make Start Game Button Work. <BR>
 [L] Remove selector for Rotate mode. <BR>
 [I] Add HTML5 Web Audio API XM MOD Player for background music selection. <BR>
 [N] Fix init() location , so that it makes sense and works on load.<BR> 
 [X] Show options the piece can move once selected.<BR>
 [F] Make DAE meshes convert to three mesh by removing and add back to scene.(remove conversion hacks)<BR>
 [I] Animate / make draggable a selected piece.(Have to remove mesh hacks first.) <BR>
 [F] Once mouse up event detected on draggable object,make sure location is within chess rules.Else revert back.<BR>
 [X] Rotate TOP view so pieces that have been taken out of game can be seen.<BR>
 [N] Start game with white mode in view instead of rotate mode.<BR>
 [I] Make Multiplayer with remote players.(Need FEN get and put working.)<BR>
 [I] Add rules of game section.<BR> 
 [N] Fix roatation after first move of knight.<BR>
 [N] Add END GAME options to actions. <BR>
 
 
 
 
 
 
 

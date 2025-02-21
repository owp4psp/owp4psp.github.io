var strotherGames = new Array;
var intotherGamesMinMax = new Array;
var intotherGamesPath = new Array;
var strotherGamesIconPath = new Array;
var intStartMax = new Array;
var intotherGame = 0;

function otherGame(otherGameName,MinMax,otherGamePath,IconPath,StartMax){
	strotherGames[intotherGame]=otherGameName;
	intotherGamesMinMax[intotherGame]=MinMax;
	intotherGamesPath[intotherGame]=otherGamePath;
	strotherGamesIconPath[intotherGame]=IconPath;
	intStartMax[intotherGame]=StartMax;
	intotherGame=intotherGame+1;
}

//BEGIN LIST (add new other games below here)
otherGame("Ants",1,"../programfiles/games/addon/ants.swf","../images/icons/menu/games/other/ants.png",1);
otherGame("Car Madness",1,"../programfiles/games/addon/carmadness.swf","../images/icons/menu/games/other/carmadness.gif",1);
otherGame("Cosmopilot",1,"../programfiles/games/addon/cosmopilot.swf","../images/icons/menu/games/other/cosmopilot.png",1);
otherGame("Frog & Flies",1,"../programfiles/games/addon/frog&flies.swf","../images/icons/menu/games/other/frog&flies.png",1);
otherGame("Tokkun2",1,"../programfiles/games/addon/tokkun2.swf","../images/icons/menu/games/other/tokkun2.png",1);
otherGame("Kaboom",1,"../programfiles/games/addon/kaboom.swf","../images/icons/menu/games/other/kaboom.png",1);
otherGame("Little Man",1,"../programfiles/games/addon/littleman.swf","../images/icons/menu/games/other/littleman.png",1);
otherGame("My Head",1,"../programfiles/games/addon/myhead.swf","../images/icons/menu/games/other/myhead.png",1);
otherGame("Battle Pong",1,"../programfiles/games/addon/battlepong.swf","../images/icons/menu/games/board/battlepong.png",1);
otherGame("Connect 4",1,"../programfiles/games/addon/connect4.swf","../images/icons/menu/games/board/connect4.png",1);
otherGame("Paper-Stone",1,"../programfiles/games/addon/scissorspaperstone.swf","../images/icons/menu/games/board/scissorspaperstone.png",1);
otherGame("Agent Greenny",1,"../programfiles/games/addon/agentgreenny.swf","../images/icons/menu/games/puzzle/agentgreenny.png",1);
otherGame("Animals 3",1,"../programfiles/games/addon/animals_3.swf","../images/icons/menu/games/puzzle/animals_3.png",1);
otherGame("Package",1,"../programfiles/games/addon/package.swf","../images/icons/menu/games/puzzle/package.png",1);
otherGame("Parking Zone",1,"../programfiles/games/addon/parkingzone.swf","../images/icons/menu/games/puzzle/parkingzone.gif",1);
otherGame("Where To Go",1,"../programfiles/games/addon/wheretogo.swf","../images/icons/menu/games/puzzle/wheretogo.png",1);
otherGame("Find Differents",1,"../programfiles/games/addon/find_differents.swf","../images/icons/menu/games/puzzle/find_differents.png",1);
otherGame("Prachka",1,"../programfiles/games/addon/prachka.swf","../images/icons/menu/games/puzzle/prachka.gif",1);
otherGame("Telescope",1,"../programfiles/games/addon/telescope.swf","../images/icons/menu/games/puzzle/telescope.png",1);
otherGame("Cannon Comm.",1,"../programfiles/games/addon/cannon_commander.swf","../images/icons/menu/games/shooting/cannon_commander.png",1);
otherGame("Bossmonster",1,"../programfiles/games/addon/bossmonster.swf","../images/icons/menu/games/shooting/bossmonster.png",1);
otherGame("Arnok",1,"../programfiles/games/addon/arnok.swf","../images/icons/menu/games/shooting/arnok.png",1);
otherGame("Alcohol Ammo",1,"../programfiles/games/addon/alcohol_ammo.swf","../images/icons/menu/games/shooting/alcohol_ammo.png",1);
otherGame("Agent M69",1,"../programfiles/games/addon/agent_m69.swf","../images/icons/menu/games/shooting/agent_m69.png",1);
//END LIST (add new other games above here)
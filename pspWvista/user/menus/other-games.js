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
otherGame("Country Guess",1,"../programfiles/games/other/countryguess/index.htm","../images/icons/menu/games/other/countryguess.png",1);
otherGame("Mind Read",1,"../programfiles/games/other/mindread/index.htm","../images/icons/menu/games/other/mindread.png",1);
otherGame("Mind Reader",1,"../programfiles/games/other/mindreader/index.htm","../images/icons/menu/games/other/mindreader.png",1);
otherGame("Ballistic Biscuit",1,"../programfiles/games/other/ballistic_biscuit.swf","../images/icons/menu/games/other/ballistic_biscuit.png",1);
otherGame("Crabball",1,"../programfiles/games/other/crabball.swf","../images/icons/menu/games/other/crabball.png",1);
otherGame("Gold Miner",1,"../programfiles/games/other/goldminer.swf","../images/icons/menu/games/other/goldminer.png",1);
otherGame("Snake",1,"../programfiles/games/other/snake.swf","../images/icons/menu/games/other/snake.png",1);
otherGame("Squares",1,"../programfiles/games/other/squares.swf","../images/icons/menu/games/other/squares.png",1);
otherGame("Street Skating",1,"../programfiles/games/other/street_skating.swf","../images/icons/menu/games/other/street_skating.png",1);

//END LIST (add new other games above here)
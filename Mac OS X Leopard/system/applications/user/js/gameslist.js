//Games List - Do not delete any lines beginning with //

// Set the following to 1 to apply the maximize instructions. This applies to both apps, games and user additions.

var SkipMaxMsg = 0;
var strGames = new Array;
var intGamesPath = new Array;
var strGamesIconPath = new Array;
var intGames = 0;

function Game(GameName,GamePath,IconPath,StartMax){
	strGames[intGames]=GameName;
	intGamesPath[intGames]=GamePath;
	strGamesIconPath[intGames]=IconPath;
	intGames=intGames+1;
}

//BEGIN LIST (add new games below here)
Game("tetris","../../games/tetris.swf","../../images/User/games/tetris.png",1);
//END LIST (add new games above here)
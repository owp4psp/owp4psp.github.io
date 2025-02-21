var strshootingGames = new Array;
var intshootingGamesMinMax = new Array;
var intshootingGamesPath = new Array;
var strshootingGamesIconPath = new Array;
var intStartMax = new Array;
var intshootingGame = 0;

function shootingGame(shootingGameName,MinMax,shootingGamePath,IconPath,StartMax){
	strshootingGames[intshootingGame]=shootingGameName;
	intshootingGamesMinMax[intshootingGame]=MinMax;
	intshootingGamesPath[intshootingGame]=shootingGamePath;
	strshootingGamesIconPath[intshootingGame]=IconPath;
	intStartMax[intshootingGame]=StartMax;
	intshootingGame=intshootingGame+1;
}

//BEGIN LIST (add new shooting games below here)
shootingGame("A-blast",1,"../programfiles/games/shooting/ablast.swf","../images/icons/menu/games/shooting/ablast.png",1);
shootingGame("Escape",1,"../programfiles/games/shooting/escape.swf","../images/icons/menu/games/shooting/escape.png",1);
shootingGame("Shoot The Gatso",1,"../programfiles/games/shooting/shootthegatso.swf","../images/icons/menu/games/shooting/shootthegatso.png",1);
shootingGame("Bowman",1,"../programfiles/games/shooting/Bowman.swf","../images/icons/menu/games/shooting/shootthegatso.png",1);
//END LIST (add new shooting games above here)
var strpuzzleGames = new Array;
var intpuzzleGamesMinMax = new Array;
var intpuzzleGamesPath = new Array;
var strpuzzleGamesIconPath = new Array;
var intStartMax = new Array;
var intpuzzleGame = 0;

function puzzleGame(puzzleGameName,MinMax,puzzleGamePath,IconPath,StartMax){
	strpuzzleGames[intpuzzleGame]=puzzleGameName;
	intpuzzleGamesMinMax[intpuzzleGame]=MinMax;
	intpuzzleGamesPath[intpuzzleGame]=puzzleGamePath;
	strpuzzleGamesIconPath[intpuzzleGame]=IconPath;
	intStartMax[intpuzzleGame]=StartMax;
	intpuzzleGame=intpuzzleGame+1;
}

//BEGIN LIST (add new puzzle games below here)
puzzleGame("8 Queens",1,"../programfiles/games/puzzle/8queens/index.htm","../images/icons/menu/games/puzzle/8queens.png",1);
puzzleGame("Animals 1",1,"../programfiles/games/puzzle/animals_1.swf","../images/icons/menu/games/puzzle/animals_1.png",1);
puzzleGame("Animals 2",1,"../programfiles/games/puzzle/animals_2.swf","../images/icons/menu/games/puzzle/animals_2.png",1);
puzzleGame("Cat O Mania",1,"../programfiles/games/puzzle/catomania.swf","../images/icons/menu/games/puzzle/catomania.png",1);
puzzleGame("Crazy Maze",1,"../programfiles/games/puzzle/crazymaze.swf","../images/icons/menu/games/puzzle/crazymaze.png",1);
puzzleGame("Hangman",1,"../programfiles/games/puzzle/hangman.swf","../images/icons/menu/games/puzzle/hangman.png",1);
puzzleGame("Master Mind",1,"../programfiles/games/puzzle/mastermind.swf","../images/icons/menu/games/puzzle/mastermind.png",1);
puzzleGame("Photo Spot",1,"../programfiles/games/puzzle/photospot.swf","../images/icons/menu/games/puzzle/photospot.png",1);
puzzleGame("Tetris",1,"../programfiles/games/puzzle/tetris.swf","../images/icons/menu/games/puzzle/tetris.png",1);
//END LIST (add new puzzle games above here)
var strboardGames = new Array;
var intboardGamesMinMax = new Array;
var intboardGamesPath = new Array;
var strboardGamesIconPath = new Array;
var intStartMax = new Array;
var intboardGame = 0;

function boardGame(boardGameName,MinMax,boardGamePath,IconPath,StartMax){
	strboardGames[intboardGame]=boardGameName;
	intboardGamesMinMax[intboardGame]=MinMax;
	intboardGamesPath[intboardGame]=boardGamePath;
	strboardGamesIconPath[intboardGame]=IconPath;
	intStartMax[intboardGame]=StartMax;
	intboardGame=intboardGame+1;
}

//BEGIN LIST (add new board games below here)
boardGame("Air Hockey",1,"../programfiles/games/board/airhockey.swf","../images/icons/menu/games/board/airhockey.png",1);
boardGame("Blast Billiard",1,"../programfiles/games/board/blastbilliard.swf","../images/icons/menu/games/board/blastbilliard.png",1);
boardGame("Checkers",1,"../programfiles/games/board/checkers.swf","../images/icons/menu/games/board/checkers.png",1);
boardGame("Memory",1,"../programfiles/games/board/memory.swf","../images/icons/menu/games/board/memory.png",1);
boardGame("Ping Pong",1,"../programfiles/games/board/pingpong.swf","../images/icons/menu/games/board/pingpong.png",1);
boardGame("Sudoku",1,"../programfiles/games/board/sudoku.swf","../images/icons/menu/games/board/sudoku.png",1);
boardGame("Tic Tac Toe",1,"../programfiles/games/board/tictactoe.swf","../images/icons/menu/games/board/tictactoe.png",1);
//END LIST (add new board games above here)
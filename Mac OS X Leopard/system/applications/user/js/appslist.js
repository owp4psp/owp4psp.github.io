//Apps List - Do not delete any lines beginning with //

// Set the following to 1 to apply the maximize instructions. This applies to both apps, games and user additions.

var SkipMaxMsg = 0;
var strApps = new Array;
var intAppsPath = new Array;
var strAppsIconPath = new Array;
var intApps = 0;

function App(AppName,AppPath,IconPath,StartMax){
	strApps[intApps]=AppName;
	intAppsPath[intApps]=AppPath;
	strAppsIconPath[intApps]=IconPath;
	intApps=intApps+1;
}

//BEGIN LIST (add new apps below here)
App("tetris","../../games/tetris.swf","../../images/User/games/tetris.png",1);
//END LIST (add new apps above here)

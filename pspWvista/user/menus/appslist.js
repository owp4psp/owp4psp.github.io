//Apps List - Do not delete any lines beginning with //
//to add an application to the list: on a new line in the list section, add App("App name",1,"App URL",Icon URL);
//for more detailed instructions, visit http://pspwxp.co.nr/

// Set the following to 1 to remove the maximize instructions. This applies to both apps, games and user additions.

var SkipMaxMsg = 0;

var strApps = new Array;
var intAppsMinMax = new Array;
var intAppsPath = new Array;
var strAppsIconPath = new Array;
var intAppsStart = new Array;
var intApps = 0;

function App(AppName,MinMax,AppPath,IconPath,StartMax){
	strApps[intApps]=AppName;
	intAppsMinMax[intApps]=MinMax;
	intAppsPath[intApps]=AppPath;
	strAppsIconPath[intApps]=IconPath;
	intAppsStart[intApps]=StartMax;
	intApps=intApps+1;
}

//BEGIN LIST (add new apps below here)
App("About PspWvista",1,"../programfiles/apps/about.htm","../images/icons/menu/apps/about.png",0);
App("Alarm Clock",1,"../programfiles/apps/alarm_clock.swf","../images/icons/menu/apps/alarmclock.png",0);
App("AntiVirus",1,"../programfiles/apps/antivirus/index.html","../images/icons/menu/apps/antivirus.png",0);
App("FireFox",1,"../programfiles/apps/firefox/index.htm","../images/icons/menu/apps/fox.png",0);
App("Internet",1,"../programfiles/apps/internet/index.htm","../images/icons/menu/apps/ie.png",0);
App("MSN Messenger",1,"../programfiles/apps/msn/index.htm","../images/icons/menu/apps/msnmessenger.png",0);
App("Pixel Fixer",1,"../controlpanel/fixpix.htm","../images/icons/menu/apps/pixelfixer.png",0);
App("PSPaint",1,"../programfiles/apps/paint.swf","../images/icons/menu/apps/paint.png",1);
App("Stop Watch",1,"../programfiles/apps/stopwatch.htm","../images/icons/menu/apps/stopwatch.png",0);
App("System Info",1,"../controlpanel/system.htm","../images/icons/menu/apps/systeminfo.gif",0);
App("Update",25,"../programfiles/apps/controlpanel/updates.htm","../images/icons/menu/apps/updates.png",0);
//END LIST (add new apps above here)

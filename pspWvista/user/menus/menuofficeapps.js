var SkipMaxMsg = 0;

var strApps = new Array;
var intAppsMinMax = new Array;
var intAppsPath = new Array;
var strAppsIconPath = new Array;
var intApps = 0;

function App(AppName,MinMax,AppPath,IconPath,StartMax){
	strApps[intApps]=AppName;
	intAppsMinMax[intApps]=MinMax;
	intAppsPath[intApps]=AppPath;
	strAppsIconPath[intApps]=IconPath;
	intApps=intApps+1;
}
//BEGIN LIST (add new Fav office below here)
App("Basic Calc",1,"../programfiles/apps/basiccalculator.htm","../images/icons/menu/apps/bcalculator.png",0);
App("Calender",1,"../programfiles/apps/calender.htm","../images/icons/menu/apps/calendar.png",0);
App("Note List",1,"../programfiles/apps/notelist/list.html","../images/icons/menu/apps/notelist.png",0);
App("Periodic Table",1,"../programfiles/apps/periodictable.htm","../images/icons/menu/apps/periodictable.png",0);
App("PSPDF Viewer",1,"../programfiles/apps/pspdf/index.html","../images/icons/menu/apps/pspdfviewer.png",0);
App("PSPUnZip",1,"../programfiles/apps/pspunzip/index.html","../programfiles/apps/pspunzip/wobzip_title.png",0);
App("Schedule",1,"../programfiles/apps/schedule.htm","../images/icons/menu/apps/schedule.png",0);
App("Scientific Calc",1,"../programfiles/apps/scientificcalculator.htm","../images/icons/menu/apps/scalculator.png",0);
App("Office 2007 Power Point",1,"../Programfiles/OfficePortable/PowerPoint/Ppt_mobile.html","../images/icons/menu/apps/powerpoint.png",0);
App("Office 2007 Weather",1,"../Programfiles/OfficePortable/Weather/weather.html","../images/icons/menu/apps/dayofbirth.png",0);
App("Office 2007 Word",1,"../Programfiles/OfficePortable/Word/Word_mobile.html","../images/icons/menu/apps/texteditor.png",0);
//END LIST (add new Fav office above here)
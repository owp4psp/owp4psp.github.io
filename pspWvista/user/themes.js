var themeName = new Array;
var themeURL = new Array;
var intTheme = 0;

function Theme(strThemeName,strThemeURL){
	themeName[intTheme]=strThemeName;
	themeURL[intTheme]=strThemeURL;
	intTheme++;
}

//BEGIN LIST
Theme("Vista Aero","desktop-d.htm");
Theme("Vista Basic","desktop-b.htm");
//END LIST

for (i=0;i<themeName.length;i++){
	document.write("<option value="+themeURL[i]+">"+themeName[i]+"</option>");
}

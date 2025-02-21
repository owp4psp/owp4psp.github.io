function ChangeThemeDefault(){
	icookies.document.settings.iTheme.value='default';
	icookies.document.settings.submit();
}

function ChangeThemeSkyBlue(){
	icookies.document.settings.iTheme.value='sky_blue';
	icookies.document.settings.submit();
}

function ChangeThemePink(){
	icookies.document.settings.iTheme.value='pink';
	icookies.document.settings.submit();
}

function ChangeThemeLightPurple(){
	icookies.document.settings.iTheme.value='light_purple';
	icookies.document.settings.submit();
}

function ChangeThemeYellow(){
	icookies.document.settings.iTheme.value='yellow';
	icookies.document.settings.submit();
}

function ChangeThemeBlue(){
	icookies.document.settings.iTheme.value='blue';
	icookies.document.settings.submit();
}

function ChangeThemeGreen(){
	icookies.document.settings.iTheme.value='green';
	icookies.document.settings.submit();
}

function ChangeThemeRed(){
	icookies.document.settings.iTheme.value='red';
	icookies.document.settings.submit();
}

function ChangeThemeLightBlue(){
	icookies.document.settings.iTheme.value='light_blue';
	icookies.document.settings.submit();
}

function ChangeThemeLightGreen(){
	icookies.document.settings.iTheme.value='light_green';
	icookies.document.settings.submit();
}

function ChangeThemeTan(){
	icookies.document.settings.iTheme.value='tan';
	icookies.document.settings.submit();
}

function ChangeThemeGray(){
	icookies.document.settings.iTheme.value='gray';
	icookies.document.settings.submit();
}

function ChangeThemeLightBlue(){
	icookies.document.settings.iTheme.value='light_blue';
	icookies.document.settings.submit();
}

function ChangeThemeLightGreen(){
	icookies.document.settings.iTheme.value='light_green';
	icookies.document.settings.submit();
}

function ChangeThemeTan(){
	icookies.document.settings.iTheme.value='tan';
	icookies.document.settings.submit();
}

function ChangeThemeGray(){
	icookies.document.settings.iTheme.value='gray';
	icookies.document.settings.submit();
}

function CheckTopMenu(){
	if(icookies.document.settings.iTheme.value==''){
		imgTopMenu.src='files/images/themes/default/top_menu.png';
	}else{
		imgTopMenu.src="files/images/themes/"+icookies.document.getElementById('iTheme').value+"/top_menu.png";
	}
}

function CheckBackground(){
	if(icookies.document.settings.iTheme.value==''){
		imgBackground.src='files/images/themes/default/background.png';
	}else{
		imgBackground.src="files/images/themes/"+icookies.document.getElementById('iTheme').value+"/background.png";
	}
}
var isPSPRadio = false;
var refPageIsClosed = true;
var bMute = false;
var timerID_for_startButtonStatusPolling=(0);
var timerID_for_changeStatus=(0);
var changeStatusTo;
var tn;
var emute;
var oldstatus = "Stopped...";
if ( navigator.mimeTypes && navigator.mimeTypes ["application/x-psp-extplugin"] ) {
    var plugin = navigator.mimeTypes ["application/x-psp-extplugin"].enabledPlugin;
    if ( plugin ) {
        document.write ("<object name=psp type=\"application/x-psp-extplugin\" >"+"</object>\n");
    }
}
else psp = null;
var userAgentForPlayStream = "PSP-InternetRadioPlayer/1.00";
var userAgentForHttpGet = "PSP-InternetRadioPlayer/1.00";
var userAgentForGetPls = "PSP-InternetRadioPlayer/1.00";
var timerID_for_sleepCountDownProc=(0); 
var sleepCountDown = 0;
var bSleepTimerWasActivated = false;
var prevSleepCountDownProcTimestamp = 0;
var bErrorDetectorForSleepCountDownProc = false;
var bGoingToSleep = false;

function onLoadProc () {
	tn = window.frames[0].document.getElementById("sbar").firstChild;
	emute = window.frames[0].document.getElementById("mute");
	tn.nodeValue = oldstatus;
	
	if (!timerID_for_changeStatus)	{
		clearTimeout (timerID_for_changeStatus);
		timerID_for_changeStatus = (0);
	}
	if (bMute)	{
		sMute();
	}
	if (timerID_for_startButtonStatusPolling == 0)	{
		timerID_for_startButtonStatusPolling = setInterval ('startButtonPollingProc ()', 2600);
	}
}

function onUnLoadProc () {
	oldstatus = tn.nodeValue;
}

function tune ( srcUrl, mode ) {
	srcUrl = encodeURI(unescape(srcUrl));
	if ( psp ) {
		psp.sysRadioStop();
		if ( mode == 0 ) {
			psp.sysRadioPlayPls	(srcUrl, userAgentForGetPls, userAgentForPlayStream);
		}
		else if ( mode == 1 ){
			psp.sysRadioPlayStream (srcUrl, userAgentForPlayStream);
		}
		if (! bMute) {
			psp.sysRadioSetMasterVolume (255);
			psp.sysRadioSetSubVolume (255);
		}
		
		if (timerID_for_changeStatus != 0)	{
				clearTimeout(timerID_for_changeStatus);
				timerID_for_changeStatus = (0);
		}
	
	}
}

function startButtonPollingProc () {
	if ( psp ) {
		var status = psp.sysRadioGetStartButtonToggleStatus ();
		if ( status == 1 && bMute ) {
			sUnMute();
		}
		else if ( status == 0 && (! bMute) ) {
			sMute();
		}
	}
}

function sUnMute()	{
	bMute = false;
	psp.sysRadioSetMasterVolume (255);
	if (timerID_for_changeStatus != 0)	{
		clearTimeout(timerID_for_changeStatus);
		timerID_for_changeStatus = (0);
	}
	else	{
		changeStatusTo = tn.nodeValue;
	}
	emute.style.visibility = "hidden";
	tn.nodeValue="Unmuted...";
	timerID_for_changeStatus = setTimeout("changeStatus()",3000);
}

function sMute()	{
	bMute = true;
	psp.sysRadioSetMasterVolume (0);
	if (timerID_for_changeStatus != 0)	{
		clearTimeout(timerID_for_changeStatus);
		timerID_for_changeStatus = (0);
	}
	else	{
		changeStatusTo = tn.nodeValue;
	}
	emute.style.visibility = "visible";
	tn.nodeValue="Muted...";
	timerID_for_changeStatus = setTimeout("changeStatus()",3000);
}

function stopRadio()	{
	if( psp )	{
		psp.sysRadioStop();
		psp.sysRadioPlayEffectSound();
		if (timerID_for_changeStatus != 0)	{
				clearTimeout(timerID_for_changeStatus);
				timerID_for_changeStatus = (0);
		}
		tn.nodeValue = "Stopped...";
		
	}
}

function soundEffect()	{
	if( psp )	{
		psp.sysRadioPlayEffectSound();
	}
}
function resumenotradio(){
	document.getElementById('splash').src='../images/menu/black.gif';
}

function resume(){
	psp.sysRadioBackLightAlwaysOn(0);
    document.getElementById('splash').src='';
    document.getElementById('resume').style.visiblity='hidden';
}

function sw_sleep() {
	if ( psp ) {
		psp.sysRadioSleep ();
		document.getElementById('splash').src='../images/sleep.jpg';
		document.getElementById('resume').style.visibility='visible';
		setTimeout('resume();',7000); 
	}
		
}

function getCookieValue ( keyword ) {

	keyword += ":";
	var cookieValue;
	if ( document.cookie ) cookieValue = unescape (document.cookie) + ";";
	else {
		cookieValue
			= "IRP1=genre:3;streamUrl:;shiftSw:1;sinSw:1;cwSw:1;noiseSw:1;";
		bIgnoreAutoTuneInToTopStationWhenGotStationList = false;
	}
	var start, end;
	start = cookieValue.indexOf (keyword, cookieValue.indexOf ("IRP1="));
	if ( start != -1 ) {
		end = cookieValue.indexOf (";", start);
		return ( cookieValue.substring (start + keyword.length, end) );
	}
	else return ( "" );
}



var intVersion = 1.0;
var tabopen='false';
var tab2open='false';
var tab3open='false';
var activewindow="";
var openedLink;
var blnStartMax="false";
var skiploading=0;
var stwindowNo;
var frameAddress;
var mProgramLocation;
var mProgramIcon;
var mblncontrol;
var mProgramTitle;
var mStartMax;
var Location;
var Icon;
var Title;
var Max;
var tableft=0;
var tab2left=0;
var tab3left=0;
var alreadymaxed=0;
var playSounds;
var screensaver;
var screensaverTime;
var loaded = 0;
var scrActive = "false";
var currDate;
var perfecttime = 500;
var intMax = 0;
var intMin = 1000;
var clickx = 0;
var clickx2 = 0;
var clickx3 = 0;
var clickx4 = 0;
var clickx5 = 0;
var clickx6 = 0;
var clickx7 = 0;
var clickx8 = 0;
var clickx9 = 0;
var name1;
var ieload = 0;

function showHideLayer(layerName,showHide){
	frames[layerName].style.visibility=showHide;
}

function setTitle(blncontrol,ProgramTitle,ProgramLocation,ProgramIcon,StartMax){
	hideMenu();
	top.icookies.document.settings.recent3.value = top.icookies.document.getElementById('recent2').value;
	top.icookies.document.settings.recent3t.value = top.icookies.document.getElementById('recent2t').value;
	top.icookies.document.settings.recent3l.value = top.icookies.document.getElementById('recent2l').value;
	top.icookies.document.settings.recent3i.value = top.icookies.document.getElementById('recent2i').value; 
	top.icookies.document.settings.recent3s.value = top.icookies.document.getElementById('recent2s').value;
	
	top.icookies.document.settings.recent2.value = top.icookies.document.getElementById('recent').value;
	top.icookies.document.settings.recent2t.value = top.icookies.document.getElementById('recentt').value;
	top.icookies.document.settings.recent2l.value = top.icookies.document.getElementById('recentl').value;
	top.icookies.document.settings.recent2i.value = top.icookies.document.getElementById('recenti').value;
	top.icookies.document.settings.recent2s.value = top.icookies.document.getElementById('recents').value;
	
	top.icookies.document.settings.recent.value=blncontrol;
	top.icookies.document.settings.recentt.value=ProgramTitle;
	top.icookies.document.settings.recentl.value=ProgramLocation;
	top.icookies.document.settings.recenti.value=ProgramIcon;
	top.icookies.document.settings.recents.value=StartMax;
    top.icookies.document.settings.submit();
	if(ProgramTitle=="WMP"&&!(icookies.document.getElementById('chkPSPTunesTab').value=="false")){
		window.open(ProgramLocation);
		return;
	}
	if(blncontrol==25){
		document.getElementById('resume').style.visibility='visible';
		document.getElementById('splash').src='../images/shade3.png';
		document.getElementById('UA').innerHTML=ProgramTitle;
		document.getElementById('uacimg').src=ProgramIcon;
		document.getElementById('UAC').style.visibility='visible';
				}else{
		if(tab3open=='false'){
			document.getElementById('lT').innerHTML=ProgramTitle;
			showHideLayer('loading','visible');
			skiploading=0;
			if(StartMax==0||StartMax==null){
				var tabspace1='false';
				var tabspace2='false';
				var tabspace3='false';

				if(frames['tab'].style.visibility=='visible'){
					tableft=frames['tab'].style.left;
				}else{
					tableft=0;
				}
				if(frames['tab2'].style.visibility=='visible'){
					tab2left=frames['tab2'].style.left;
				}else{
					tab2left=0;
				}
				if(frames['tab3'].style.visibility=='visible'){
					tab3left=frames['tab3'].style.left;
				}else{
					tab3left=0;
				}

				if((tableft=='84px'||tab2left=='84px'||tab3left=='84px')&&tabopen=='true'){
					tabspace1='false';
				}
				if(tabspace1=='false'&&(tableft=='187px'||tab2left=='187px'||tab3left=='187px')&&tab2open=='true'){
					tabspace2='false';
				}
				if(tabspace2=='false'&&(tableft=='290px'||tab2left=='290px'||tab3left=='290px')&&tab3open=='true'){
					tabspace3='false';
				}

				var emptytab = "";
				if(tabopen=='false'){
					emptytab="";
					tabopen='true';
				}else{
					if(tab2open=='false'){
						emptytab=2;
						tab2open='true';
					}else{
						if(tab3open=='false'){
							emptytab=3;
							tab3open='true';
						}
					}
				}
				if(tabspace1=='true'){frames['tab'+emptytab].style.left='84px';}
				if(tabspace2=='true'){frames['tab'+emptytab].style.left='187px';}
				if(tabspace3=='true'){frames['tab'+emptytab].style.left='290px';}
			}
			showWindow(emptytab,ProgramLocation,ProgramIcon,blncontrol,ProgramTitle,StartMax);
		}else{
			document.getElementById('tabWarn').style.visibility='visible';
			windowMin('');
			windowMin(2);
			windowMin(3);
			showHideLayer('loading','hidden');
			skiploading=1;
		}
	}
	deScr();
}
function uac(run){
var title = top.icookies.document.getElementById('recentt').value;
var location = top.icookies.document.getElementById('recentl').value;
var icon = top.icookies.document.getElementById('recenti').value;
if (run == 1){
	document.getElementById('resume').style.visibility='hidden';
	document.getElementById('splash').src='';
	document.getElementById('UA').innerHTML='';
	document.getElementById('uacimg').src='';
	document.getElementById('UAC').style.visibility='hidden';
	setTitle('1',title,location,icon,'0');
	}
}

function showWindow(windowNo,ProgramLocation,ProgramIcon,blncontrol,ProgramTitle,StartMax){
	if(StartMax==0||StartMax==null){
		frames['progman'+windowNo].location.href=ProgramLocation;
		document.getElementById('location'+windowNo).innerHTML=ProgramLocation;
		document.getElementById('aT'+windowNo).innerHTML=ProgramTitle;
		document.getElementById('tT'+windowNo).innerHTML=ProgramTitle.slice(0,14);
		document.getElementById('winicon'+windowNo).src=ProgramIcon;
		document.getElementById('tI'+windowNo).src=ProgramIcon;
		document.getElementById('imgTab'+windowNo).src='../images/window/tab_down.png';
		activewindow=windowNo;
		if(!(windowNo=="")){windowMin("");}
		if(!(windowNo==2)){windowMin(2);}
		if(!(windowNo==3)){windowMin(3);}
		if(blncontrol>0) {
		showHideLayer('winexitimg','visible'); showHideLayer('winmax'+windowNo,'visible'); showHideLayer('winmin'+windowNo,'visible'); showHideLayer('winbak','visible'); showHideLayer('winmaximg','visible'); showHideLayer('winminimg','visible'); showHideLayer('imgwin'+windowNo,'visible');
		showHideLayer('whitebox'+windowNo,'visible');
		}
showHideLayer('tab'+windowNo,'visible'); showHideLayer('tabinfo'+windowNo,'visible'); showHideLayer('progwin'+windowNo,'visible'); showHideLayer('winexit'+windowNo,'visible'); showHideLayer('programs'+windowNo,'visible'); showHideLayer('winbak','visible'); showHideLayer('winexitimg','visible');
		blnStartMax="false";showHideLayer('winmaximg','visible'); showHideLayer('winminimg','visible'); showHideLayer('imgwin'+windowNo,'visible');showHideLayer('whitebox'+windowNo,'visible');
	} else if(StartMax==1){
     window.location='gamemode.html';
	} 
if (ProgramTitle=="Windows Internet Explorer"){
	document.getElementById('apDiv2').style.visibility='visible';
	document.getElementById('apDivGo' + windowNo ).style.visibility='visible';
	showHideLayer('whitebox'+windowNo,'hidden');
}
if (ProgramTitle=="Internet Explorer"){
	document.getElementById('apDiv2').style.visibility='visible';
	document.getElementById('apDivGo' + windowNo ).style.visibility='visible';
	showHideLayer('whitebox'+windowNo,'hidden');
	document.getElementById('url').value=top.icookies.document.getElementById('pad').value;
	setTimeout("frames['progman'].frames['frame'].location.href=document.getElementById('url').value;",2000);
}
if (ProgramTitle=="Search"){
	document.getElementById('apDiv2').style.visibility='visible';
	document.getElementById('apDivGo' + windowNo ).style.visibility='visible';
	showHideLayer('whitebox'+windowNo,'hidden');
	document.getElementById('url').value=top.icookies.document.getElementById('pad').value;
	setTimeout("frames['progman'].frames['frame'].location.href=document.getElementById('url').value;",5100);
}
	showHideLayer('loading','hidden');
	document.getElementById('lT').innerHTML="";

	document.getElementById('lTA').innerHTML="";
}

function theClock() {
	if (!document.all&&!document.getElementById) 
return 
thelement=document.getElementById? document.getElementById("tP"): document.all.tP 
var Digital=new Date() 
var hours=Digital.getHours() 
var minutes=Digital.getMinutes() 
var dn="P.M." 
if (hours<12) 
dn="A.M." 
if (hours>12) 
hours=hours-12 
if (hours==0) 
hours=12 
if (minutes<=9) 
minutes="0"+minutes 
var ctime=hours+":"+minutes+" "+dn 
thelement.innerHTML=""+ctime+"" 
} 
window.onload=theClock 

function hideMenu(){
showHideLayer('menu','hidden');showHideLayer('frameone','hidden');document.getElementById('recent').style.visibility='hidden';
showHideLayer('frametwo','hidden');showHideLayer('allprograms','hidden');showHideLayer('menuback','hidden');showHideLayer('mlinks','hidden');showHideLayer('startoff','visible');
}

function openTab(windowNo){
var winTitle = document.getElementById('aT'+windowNo).innerHTML;
if (winTitle == 'Windows Internet Explorer'){
showHideLayer('apDiv2','visible');
showHideLayer('apDivGo'+windowNo,'visible');
showHideLayer('menu','hidden'); 
showHideLayer('imgwin'+windowNo,'visible');
showHideLayer('progwin'+windowNo,'visible'); 
showHideLayer('winexit'+windowNo,'visible'); 
showHideLayer('winbak','visible');
showHideLayer('programs'+windowNo,'visible'); 
showHideLayer('winmax'+windowNo,'visible'); 
showHideLayer('winmin'+windowNo,'visible'); 
showHideLayer('winexitimg','visible');
showHideLayer('winmaximg','visible');
showHideLayer('winminimg','visible');
showHideLayer('whitebox'+windowNo,'hidden');
}else{
showHideLayer('whitebox'+windowNo,'visible');
showHideLayer('menu','hidden'); 
showHideLayer('imgwin'+windowNo,'visible');
showHideLayer('progwin'+windowNo,'visible'); 
showHideLayer('winexit'+windowNo,'visible'); 
showHideLayer('winbak','visible');
showHideLayer('programs'+windowNo,'visible'); 
showHideLayer('winmax'+windowNo,'visible'); 
showHideLayer('winmin'+windowNo,'visible'); 
showHideLayer('winexitimg','visible');
showHideLayer('winmaximg','visible');
showHideLayer('winminimg','visible');
	}
}

function windowExit(windowNo){
	hideMenu();
	if(windowNo==''){
		closeWindow('');
		tabopen='false';
		if(tab2open=='true'){
			if(tab3open=='true'){
				copyWindow(3,2);
			}
			copyWindow(2,'');
		}else{
			if(tab3open=='true' && frames['tab3'].style.left=='187px'){
				frames['tab3'].style.left='84px';
			}
		}
	}

	if(windowNo==2){
		closeWindow(2);
		tab2open='false';
		if(tab3open=='true'){
			copyWindow(3,2);
		}
	}

	if(windowNo==3){
		closeWindow(3);
		tab3open='false';
	}
}

function copyWindow(sSource,Destination){
	var sourceTab='tab'+sSource;
	var destinationTab='tab'+Destination;
	frames[sourceTab].style.left=frames[destinationTab].style.left;
}

function closeWindow(windowNo){
	frames['progman'+windowNo].location.href='blank.htm';
	showHideLayer('winbak','hidden'); showHideLayer('progwin'+windowNo,'hidden');showHideLayer('winmin'+windowNo,'hidden');showHideLayer('winmax'+windowNo,'hidden'); showHideLayer('winexit'+windowNo,'hidden'); showHideLayer('programs'+windowNo,'hidden'); showHideLayer('tab'+windowNo,'hidden'); showHideLayer('tabinfo'+windowNo,'hidden'); showHideLayer('winexitimg','hidden'); showHideLayer('winmaximg','hidden'); showHideLayer('winminimg','hidden');showHideLayer('apDiv2','hidden');showHideLayer('apDivGo'+windowNo,'hidden');
	if(windowNo==''){var intLeft='84px';}
	if(windowNo==2){var intLeft='197px';}
	if(windowNo==3){var intLeft='310px';}
	frames['tab'+windowNo].style.left=intLeft;
}

function windowMin(windowNo){
	 showHideLayer('winbak','hidden'); showHideLayer('progwin'+windowNo,'hidden');showHideLayer('winexit'+windowNo,'hidden'); showHideLayer('programs'+windowNo,'hidden'); showHideLayer('winmax'+windowNo,'hidden'); showHideLayer('winmin'+windowNo,'hidden'); showHideLayer('winexitimg','hidden'); showHideLayer('winmaximg','hidden'); showHideLayer('winminimg','hidden');showHideLayer('apDiv2','hidden');showHideLayer('apDivGo'+windowNo,'hidden');
	 document.getElementById('imgTab'+windowNo).src='../images/window/tab.png';
}

function windowMax(windowNo){
	stwindowNo=windowNo;
	setTimeout("windowMaxNow(frames['progman'+stwindowNo].location.href)",1500);
	showHideLayer('progMax','visible'); 
	windowMin(windowNo);
	activewindow=windowNo;
}

function restoreWindow() {
	if(blnStartMax=="false"){
		openTab(activewindow);
	}
	if(scrActive=="true"){
		if(icookies.document.getElementById('scrPass').value=="true"){
			hideMenu();
			showHideLayer('txtPassword','visible');
			showHideLayer('portalmenu','visible');
			showHideLayer('lyShutdown','hidden');
			showHideLayer('lyShutdowndlg','hidden');
			showHideLayer('login','visible');
		}
		scrActive="false";
	}
	if(frames['progMax'].style.visibility=="visible"){
		showHideLayer('progMax','hidden');
		frames['iprogMax'].location.href="../programfiles/apps/appsmax.htm";
	}
}

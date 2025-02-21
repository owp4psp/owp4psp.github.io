function searchone(){
	top.icookies.document.settings.searchb.value=document.getElementById('Searchbox').value
	top.icookies.document.settings.submit();
	frames['frametwof'].location='../user/menus/searchlist.htm'; 
	document.getElementById('allprograms').style.visibility='hidden';
	document.getElementById('frameone').style.visibility='hidden';
	document.getElementById('frametwo').style.visibility='visible';
	document.getElementById('menuback').style.visibility='visible';
}

function UpdateCan(){
	if(top.icookies.document.getElementById('un').value==''&&top.icookies.document.getElementById('user').value=='1'){
		document.getElementById('bin').src='../images/icons/Recycle Bin Empty.png';
	}else{
		document.getElementById('bin').src='../images/icons/Recycle Bin Full.png';
	}
	if(top.icookies.document.getElementById('un2').value==''&&top.icookies.document.getElementById('user').value=='2'){
		document.getElementById('bin').src='../images/icons/Recycle Bin Empty.png';
	}else{
		document.getElementById('bin').src='../images/icons/Recycle Bin Full.png';
	}
	if(top.icookies.document.getElementById('un3').value==''&&top.icookies.document.getElementById('user').value=='3'){
		document.getElementById('bin').src='../images/icons/Recycle Bin Empty.png';
	}else{
		document.getElementById('bin').src='../images/icons/Recycle Bin Full.png';
	}
	setTimeout('UpdateCan();', 10000)
}

function ApplySettings(){
	document.getElementById('splash').src==top.icookies.document.getElementById('splashL').value;
	if(top.icookies.document.getElementById('scrtime').value==""){
		screensaverTime="10";
	}else{
		screensaverTime=top.icookies.document.getElementById('scrtime').value*2;
	}
	if(top.icookies.document.getElementById('screensaver').value==""){
		screensaver="none";
	}else{
		screensaver=top.icookies.document.getElementById('screensaver').value;
	} 
	if(top.icookies.document.getElementById('user').value=='1'){
  	 document.getElementById('imgDesktop').src=top.icookies.document.getElementById('bg').value;
  	 document.getElementById('user1').src=top.icookies.document.getElementById('ul').value;
	 document.getElementById('imgUserlogin').src=top.icookies.document.getElementById('ul').value;
	 winimg.src=top.icookies.document.getElementById('winThemeDir').value;
	}
	
	if(top.icookies.document.getElementById('user').value=='2'){
 	 document.getElementById('imgDesktop').src=top.icookies.document.getElementById('bg2').value;
 	 document.getElementById('user1').src=top.icookies.document.getElementById('ul2').value;
	 document.getElementById('imgUserlogin').src=top.icookies.document.getElementById('ul2').value;
	 winimg.src=top.icookies.document.getElementById('winThemeDir2').value;
	}
	if(top.icookies.document.getElementById('user').value=='3'){
	document.getElementById('imgDesktop').src=top.icookies.document.getElementById('bg3').value;
 	document.getElementById('user1').src=top.icookies.document.getElementById('ul3').value;
	document.getElementById('imgUserlogin').src=top.icookies.document.getElementById('ul3').value;
	winimg.src=top.icookies.document.getElementById('winThemeDir3').value;
	}
	
	if(top.icookies.document.getElementById('user').value=='4'){
	document.getElementById('imgDesktop').src="wallpapers/Beach Tree.jpg";
 	document.getElementById('user1').src="wallpapers/userloginGuest.png";
	}
}

function windowMaxNow(MaxURL){
	if(!(frames['iprogMax'].location.href==MaxURL)){
		frames['iprogMax'].location.href=MaxURL;
		if(frameAddress.slice(-18)=="internet/index.htm"){
			document.getElementById('iprogMax').document.frames['Content'].location.href=frames['progman'+activewindow].document.frames['Content'].location.href;
		}
	}
}

function openInBrowser(Iurl){
	top.icookies.document.settings.pad.value=Iurl;
	setTitle('1','Internet Explorer','../programfiles/apps/internet/index.htm','../images/icons/internet.png','0');
}
function googlePSP(searchpsp){
var gogo = 'http://www.google.com/hws/search?q=' + searchpsp  +'&client=sce-psp-row';
	top.icookies.document.settings.pad.value=gogo;
	setTitle('1','Search','../programfiles/apps/internet/index.htm','../images/icons/internet.png','0');
}
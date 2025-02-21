// JavaScript Document
function userwelcomecenter(){
if(top.icookies.document.getElementById('user').value=='1'){
  	 usercenter();
	}
if(top.icookies.document.getElementById('user').value=='2'){
 	 usercentertwo();
	}
if(top.icookies.document.getElementById('user').value=='3'){
	usercenterthree();
    }
if(top.icookies.document.getElementById('user').value=='4'){
	document.getElementById('welcomecenter').style.visibility='visible';
	document.getElementById('welcomecenterexit').style.visibility='visible';
	}
}
function usercenter(){ 
if(top.icookies.document.getElementById('welcomehide').value==''){
	document.getElementById('welcomecenter').style.visibility='visible';
	document.getElementById('welcomecenterexit').style.visibility='visible';
	chkwelcome.checked=false;
	ChangeSettings();
	}else if(top.icookies.document.getElementById('welcomehide').value=='true'){
	document.getElementById('welcomecenter').style.visibility='visible';
	document.getElementById('welcomecenterexit').style.visibility='visible';
	chkwelcome.checked=true;
	ChangeSettings();
	}else if(top.icookies.document.getElementById('welcomehide').value=='false'){
	document.getElementById('welcomecenter').style.visibility='hidden';
	document.getElementById('welcomecenterexit').style.visibility='hidden';
	chkwelcome.checked=false;
	ChangeSettings();
  }
}
  
function usercentertwo(){ 
if(top.icookies.document.getElementById('welcomehide2').value==''){
	document.getElementById('welcomecenter').style.visibility='visible';
	document.getElementById('welcomecenterexit').style.visibility='visible';
	chkwelcome.checked=false;
	ChangeSettings();
	}else if(top.icookies.document.getElementById('welcomehide2').value=='true'){
	document.getElementById('welcomecenter').style.visibility='visible';
	document.getElementById('welcomecenterexit').style.visibility='visible';
	chkwelcome.checked=true;
	ChangeSettings();
	}else if(top.icookies.document.getElementById('welcomehide2').value=='false'){
	document.getElementById('welcomecenter').style.visibility='hidden';
	document.getElementById('welcomecenterexit').style.visibility='hidden';
	chkwelcome.checked=false;
	ChangeSettings();
  }
}

function usercenterthree(){ 
if(top.icookies.document.getElementById('welcomehide3').value==''){
	document.getElementById('welcomecenter').style.visibility='visible';
	document.getElementById('welcomecenterexit').style.visibility='visible';
	chkwelcome.checked=false;
	ChangeSettings();
	}else if(top.icookies.document.getElementById('welcomehide3').value=='true'){
	document.getElementById('welcomecenter').style.visibility='visible';
	document.getElementById('welcomecenterexit').style.visibility='visible';
	chkwelcome.checked=true;
	ChangeSettings();
	}else if(top.icookies.document.getElementById('welcomehide3').value=='false'){
	document.getElementById('welcomecenter').style.visibility='hidden';
	document.getElementById('welcomecenterexit').style.visibility='hidden';
	chkwelcome.checked=false;
	ChangeSettings();
  }
}

function CheckUserName(){
	if(icookies.document.settings.iUserName.value==''){
		UserNameFrame.document.write('<div style="position:absolute; left:0; top:0; width:115px; height:20px;">User!</div>');
	}else{
		UserNameFrame.document.write('<div style="position:absolute; left:0; top:0; width:115px; height:20px;">'+document.getElementById('FileUserName').value+'</div>');
	}
}

function CheckFileUserName(){
	if(icookies.document.settings.iUserName.value==''){
		FileUserName.value='User!';
	}else{
		FileUserName.value=icookies.document.getElementById('iUserName').value;
	}
}

function CheckimgUserName(){
	if(icookies.document.settings.iTheme.value==''){
		UserNameFrame.document.write('<div style="position:absolute; left:-10; top:-5; width:115px; height:20px;"><img width="460" height="50" src="Files/Images/Themes/Default/Top_Menu.png" border="0"></div>');
	}else{
		UserNameFrame.document.write('<div style="position:absolute; left:-10; top:-5; width:115px; height:20px;"><img width="460" height="50" src="Files/Images/Themes/'+icookies.document.getElementById('iTheme').value+'/Top_Menu.png" border="0"></div>');
	}
}

function ChangeUserName(){
	icookies.document.settings.iUserName.value=document.getElementById('FileUserName').value;
	icookies.document.settings.submit();
	UserNameFrame.location='Files/User_Name.htm';
	setTimeout("CheckUserName();",1000);
	setTimeout("CheckimgUserName();",1000);
}
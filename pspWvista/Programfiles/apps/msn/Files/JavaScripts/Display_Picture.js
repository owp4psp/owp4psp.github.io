function ChangeDisplayPicture(){
	icookies.document.settings.iDisplayPicture.value=document.getElementById('FileDisplayPicture').value;
	icookies.document.settings.submit();
}

function CheckimgDisplayPicture40(){
	if(icookies.document.settings.iDisplayPicture.value==''){
		imgDisplayPicture40.src='files/images/display_pictures/default.png';
	}else{
		imgDisplayPicture40.src=icookies.document.settings.iDisplayPicture.value;
	}
}

function CheckimgDisplayPicture80(){
	if(icookies.document.settings.iDisplayPicture.value==''){
		imgDisplayPicture80.src='files/images/display_pictures/default.png';
	}else{
		imgDisplayPicture80.src=icookies.document.settings.iDisplayPicture.value;
	}
}

function CheckFileDisplayPicture(){
	if(icookies.document.settings.iDisplayPicture.value==''){
		FileDisplayPicture.value='files/images/display_pictures/default.png';
	}else{
		FileDisplayPicture.value=icookies.document.getElementById('iDisplayPicture').value;
	}
}
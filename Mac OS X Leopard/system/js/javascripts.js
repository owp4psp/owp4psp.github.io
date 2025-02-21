function hideDiv(pass) {
var divs = document.getElementsByTagName('div');
for(i=0;i<divs.length;i++){
if(divs[i].id.match(pass)){//if they are 'see' divs
if (document.getElementById) // DOM3 = IE5, NS6
divs[i].style.visibility="hidden";// show/hide
else
if (document.layers) // Netscape 4
document.layers[divs[i]].display = 'hidden';
else // IE 4
document.all.hideShow.divs[i].visibility = 'hidden';
}
}
}

function showDiv(pass) {
var divs = document.getElementsByTagName('div');
for(i=0;i<divs.length;i++){
if(divs[i].id.match(pass)){
if (document.getElementById)
divs[i].style.visibility="visible";
else
if (document.layers) // Netscape 4
document.layers[divs[i]].display = 'visible';
else // IE 4
document.all.hideShow.divs[i].visibility = 'visible';
}
}
}

// "Show" stuff
function showWallpaper(){
   parent.wallpaper.src=document.getElementById('sourceWallpaper').value;
}

function showImgPreview(){
	imgPreview.src=parent.cCookies.document.getElementById('sourceWallpaper').value;
}

function txtName(){
  parent.document.getElementById('textName').innerHTML = document.getElementById('sourceName').value;
}

function desktopIconNames(){
  parent.document.getElementById('desktopTextMacHD').innerHTML = document.getElementById('sourceMacHD').value;
  parent.document.getElementById('desktopTextMacHD_shadow').innerHTML = document.getElementById('sourceMacHD').value;

  parent.document.getElementById('desktopTextUserHD').innerHTML = document.getElementById('sourceName').value;
  parent.document.getElementById('desktopTextUserHD_shadow').innerHTML = document.getElementById('sourceName').value;
  
  parent.document.getElementById('desktopTextBootCamp').innerHTML = document.getElementById('sourceBootCamp').value;
  parent.document.getElementById('desktopTextBootCamp_shadow').innerHTML = document.getElementById('sourceBootCamp').value;
  
  parent.document.getElementById('desktopTextUpdate').innerHTML = document.getElementById('sourceUpdate').value;
  parent.document.getElementById('desktopTextUpdate_shadow').innerHTML = document.getElementById('sourceUpdate').value;
  
  parent.document.getElementById('logOut_userID').innerHTML = document.getElementById('sourceName').value;
}

// "Get" stuff
function getDesktopNames(){
if(document.getElementById('sourceMacHD').value==''){
	sourceMacHD.value='Mac HD';
}else{
	sourceMacHD.value=document.getElementById('sourceMacHD').value;
}

if(document.getElementById('sourceName').value==''){
	sourceName.value='User';
}else{
	sourceName.value=document.getElementById('sourceName').value;
}

if(document.getElementById('sourceBootCamp').value==''){
	sourceBootCamp.value='Boot Camp';
}else{
	sourceBootCamp.value=document.getElementById('sourceBootCamp').value;
}

if(document.getElementById('sourceUpdate').value==''){
	sourceUpdate.value='Software Update';
}else{
	sourceUpdate.value=document.getElementById('sourceUpdate').value;
}

if(document.getElementById('sourceWallpaper').value==''){
	sourceWallpaper.value='/PSP/COMMON/Mac OS X Leopard/user/pictures/wallpaper/space.jpg';
}else{
	sourceWallpaper.value=document.getElementById('sourceWallpaper').value;
}
}

// Check if an account is created
function userCreatedYES(){
if(document.settings.userIsCreated.value=="yes"){
parent.frameBootOption.window.location='/PSP/COMMON/Mac OS X Leopard/system/login.html'
}
else{
parent.frameBootOption.window.location='/PSP/COMMON/Mac OS X Leopard/system/install/index.html'
}
}
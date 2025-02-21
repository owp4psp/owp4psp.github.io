// JavaScript Document
function windowOpen(ProgramTitle,ProgramLocation,ProgramIcon,ScreenMax){
	if (ScreenMax==1){
	parent.parent.showDiv('fullscreen');
	parent.parent.hideDiv('window');
	parent.parent.frameFullscreen.game.window.location=ProgramLocation;
	}else{
	parent.parent.showDiv('window');
	}
}
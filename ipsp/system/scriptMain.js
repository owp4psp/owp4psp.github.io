///////////////////////
//    iPSP 1.1 JS    //
// (C) 2007 ctcoding //
//                   //
// You do NOT have   //
// permission to use //
// this in your      //
// portal. Learn to  //
// code.             //
///////////////////////


//Show/Hide/Toggle Script For Window Management
function Hide(id) {
    obj = document.getElementsByTagName("div");
    if (obj[id].style.visibility == 'hidden'){
    obj[id].style.visibility = 'hidden';}
    else {
    obj[id].style.visibility = 'hidden';
    }
}
function Show(id) {
    obj = document.getElementsByTagName("div");
    if (obj[id].style.visibility == 'visible'){
    obj[id].style.visibility = 'visible';}
    else {
    obj[id].style.visibility = 'visible';
    }
}
function Back(){
	Hide('horizontaliframelayer');
	Show("rotateVert");
	setTimeout(function(){Hide("rotateVert");Show("mainflash");}, 3000);
}
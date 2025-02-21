var tabcount = 1;
var activetab = 0;

function applydesign() {
document.getElementById('menubar').background = FSBDesign+'menubar.png';
document.getElementById('back').src = FSBDesign+'back.png';
document.getElementById('forward').src = FSBDesign+'forward.png';
document.getElementById('reload').src = FSBDesign+'reload.png';
document.getElementById('gohome').src = FSBDesign+'gohome.png';
document.getElementById('bookmark').src = FSBDesign+'bookmark.png';
document.getElementById('ok').src = FSBDesign+'ok.png';
document.getElementById('ok').src = FSBDesign+'clear.png';
}

function GetSearch() 
{
var ReturnVar = document.forms[0].url.value;
if (ReturnVar == 'http://') { 
ReturnVar = '';
}
return ReturnVar;
}

function WriteMenu(Size) {
var Target = '';
if(ActivateTabs == 1) { Target = 'parent.frames[GetActiveFrameNumber()]'; }
else { Target = 'webframe'; }

if (FSBMenuBar == 2) {
document.write('<table background="'+FSBDesign+'menubar.png" id="menubar" border="0" cellpadding="0" cellspacing="0" width="'+Size+'" height="27">');
document.write('<tr><td><form name="menubarform">');
document.write('&nbsp;<a href="#" onClick="'+Target+'.history.back();"><img src="'+FSBDesign+'back.png" alt="" border="0"></a>&nbsp;<a href="#" onClick="'+Target+'.history.forward();"><img src="'+FSBDesign+'forward.png" alt="" border="0"></a>&nbsp;<a href="#" onClick="'+Target+'.location.reload();"><img src="'+FSBDesign+'reload.png" alt="" border="0"></a>&nbsp;<a href="#" onClick="'+Target+'.location.href = \'halted.html\';"><img src="'+FSBDesign+'stop.png" alt="" border="0"></a>&nbsp; &nbsp;<a href="#" onClick="'+Target+'.location.href = StartPage;"><img src="'+FSBDesign+'gohome.png" alt="" border="0"></a>&nbsp;<a  href="#" onClick="'+Target+'.location.href = \'file:/PSP/System/Browser/bookmarks.html\';"><img src="'+FSBDesign+'bookmark.png" alt="" border="0"></a>&nbsp;<input type="text" name="url" size="20" value="http://"><a href="#" onClick="'+Target+'.location.href = document.forms[0].url.value;"><img src="'+FSBDesign+'ok.png" alt="" border="0"></a>');
document.write('</form></td>');
document.write('</tr></table>');
} else if (FSBMenuBar == 1) {
document.write('<table background="'+FSBDesign+'menubar.png" id="menubar" border="0" cellpadding="0" cellspacing="0" width="480" height="27">');
document.write('<tr><td><form name="menubarform">');
document.write('&nbsp;<input type="text" name="url" size="20" value="http://">&nbsp;<a href="#" onClick="webframe.location.href = document.forms[0].url.value;"><img src="'+FSBDesign+'ok.png" id="ok" alt="" border="0"></a>');
document.write('</form></td>');
document.write('<td align="right"><a href="http://psp.crystalxp.de/.en/FSBrowser" target="webframe"><img src="data/logo.png" alt="" border="0"></a>&nbsp;</td>');
document.write('</tr></table>');
}

if(ActivateTabs == 1) {
document.write('<table background="'+FSBDesign+'tabbar.png" border="0" cellpadding="0" cellspacing="0" width="'+Size+'" height="29">');
document.write('<tr><td  width="24">');
document.write('<a href="#" onClick="NewTab();"><img src="'+FSBDesign+'newtab.png" alt="" border="0"></a></td>');
document.write('<td width="432"><a href="#" onClick="ChangeTab(0);"><img src="'+FSBDesign+'tabactive.png" style="visibility:visible;" id="FSBTabs0" border="0" title="webframe0"></a>');
for (var i = 1; i < TabMax; i++) { 
document.write('<a href="#" onClick="ChangeTab('+i+');"><img src="'+FSBDesign+'tabinactive.png" style="visibility:hidden;" border="0" id="FSBTabs'+i+'" title="webframe'+i+'"></a>');  
}
document.write('</td>');
document.write('<td width="24"><a href="#" onClick="CloseTab();"><img src="'+FSBDesign+'tabclose.png" alt="" border="0"></a></td><td>&nbsp;</td></tr>');
document.write('</tr></table>');
  }


}

function WriteFrames(Size) {
  if(ActivateTabs != 1) {
    document.write('<iframe src="'+StartPage+'" name="webframe" width="463" height="175" frameborder="0">');
    document.write('</iframe>');
  } else {
    document.write('<iframe src="'+StartPage+'" name="webframe0" id="webframe0" width="463" height="175" frameborder="0" style="visibility:visible; position:absolute; top:56px; left:0px;">');
    document.write('</iframe>');
    for (var i = 1; i < TabMax; i++) {   
    document.write('<iframe src="" name="webframe'+i+'" id="webframe'+i+'" width="463" height="175" frameborder="0" style="visibility:hidden; position:absolute; top:56px; left:0px;">');
    document.write('</iframe>');    
    }
  }
}

function WriteTabs() {
var TabContent = '';
var Element = getElement("id", "FSBTabs", null);
var PictureObj = Element.appendChild('img');
var Picture = 'tabinactive.png';
PictureObj.src = FSBDesign+Picture;
  for (var i = 0; i < tabcount; i++) {
    document.getElementById("menu"+elid+"b").style.visibility = "visible";
    if(activetab == i) {
      Picture = 'tabactive.png';
    }  
    TabContent = TabContent+'<a href="#" onClick="ChangeTab('+i+');"><img src="'+FSBDesign+Picture+'" border="0" alt=""></a>';
    if(activetab == i) {
      Picture = 'tabinactive.png';
    }  
  }
}

function NewTab() {
  if(tabcount == TabMax) {
  alert('You can not open more than '+TabMax+' tabs.');
  } else {
  document.getElementById('FSBTabs'+activetab).src = FSBDesign+'tabinactive.png';
  var OldTab = document.getElementById('FSBTabs'+activetab).title;
  document.getElementById(OldTab).style.visibility = 'hidden';
  document.getElementById('FSBTabs'+tabcount).src = FSBDesign+'tabactive.png';
  document.getElementById('FSBTabs'+tabcount).style.visibility = 'visible';
  var NewTab = document.getElementById('FSBTabs'+tabcount).title;
  document.getElementById(NewTab).style.visibility = 'visible'; 
  activetab = tabcount;
  tabcount++;
  if (TabOpenHomepage == 1) {
    var NumberOfFrame = NewTab.substr(8);
    parent.frames[NumberOfFrame].location.href = StartPage;
    }
  }
}

function CloseTab() {
  var ActiveFrame = GetActiveFrameNumber();
  if(tabcount == 1) {
  parent.frames[ActiveFrame].location.href = 'clear.html';
  } else {
  parent.frames[ActiveFrame].location.href = 'clear.html';
  var NewTab = activetab+1;
  var OldTab = activetab;
  if (NewTab == tabcount) {
    NewTab = activetab-1;
    document.getElementById("FSBTabs"+NewTab).src = FSBDesign+'tabactive.png';
  }
  var NewTabTilte = document.getElementById('FSBTabs'+NewTab).title;
  document.getElementById('webframe'+ActiveFrame).style.visibility = 'hidden';
  document.getElementById(NewTabTilte).style.visibility = 'visible';   
  for (var i = OldTab; i < tabcount-1; i++) { 
    document.getElementById('FSBTabs'+i).title = document.getElementById('FSBTabs'+(i+1)).title;
  }
  tabcount--;
  document.getElementById('FSBTabs'+tabcount).title = 'webframe'+ActiveFrame;
  document.getElementById('FSBTabs'+tabcount).style.visibility = 'hidden';
  activetab = NewTab;
  }
}

function ChangeTab(Number) {
  var OldTab = document.getElementById('FSBTabs'+activetab).title;
  var NewTab = document.getElementById('FSBTabs'+Number).title;

  document.getElementById(OldTab).style.visibility = 'hidden';
  document.getElementById(NewTab).style.visibility = 'visible'; 
  document.getElementById("FSBTabs"+activetab).src = FSBDesign+'tabinactive.png';
  activetab = Number;
  document.getElementById("FSBTabs"+activetab).src = FSBDesign+'tabactive.png';
}

function GetActiveFrameNumber() {
var ATab = document.getElementById('FSBTabs'+activetab).title;
var ReturnVar = ATab.substr(8);
return ReturnVar;
}

// This isn't working, because the Browser don't understand it or don't allow it.
/*window.setInterval("GetInfo()", 1000);
function GetInfo() {
document.title = webframe.location.href;
menubarform.url.value = webframe.src;
}*/

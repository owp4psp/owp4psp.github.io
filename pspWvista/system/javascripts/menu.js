// JavaScript Document
document.write('<table width="182" border="0" cellpadding="0" cellspacing="0">
<tr>
<script language="javascript" type="text/javascript">
setTimeout("userlog();",1000);	
function userlog(){
	if(icookies.document.getElementById('ul').value==''){
		userl.src="../images/wallpapers/userloginchess.png";
	}else{
			userl.src=icookies.document.getElementById('ul').value;
		}
}

</script>
<td><div id="usrmenuimg" style="position:absolute; left:125px; top:-10px; width:35px; height:35px; z-index:25;" onClick="setTitle('0','User Edit','../programfiles/apps/controlpanel/login.htm','../images/icons/menu/controlpanel.png');"><a href="#a"><img name="userl" id="userl" border="0" width="30" height="30"></a></div></td>
</tr>
<table style="text-align:left; width:170px; height:227px; z-index:25;" border="0" cellpadding="0" cellspacing="0" background="../images/menu/menu.png">  
<tbody>
<tr width="105" class="menu_text" align="right" height="200" valign="middle">
<td colspan="2" rowspan="9">
 <div id="frameone" name="frameone" style="top: -50px; height: 185px; left: 4px; width: 95px; visibility: hidden;" >
      <table width="100" height="190" border="0" cellpadding="0" cellspacing="0">
         <tbody>
 	  <tr>
          <td width="4"></td><td style="width: 20px;"><img style="width: 90px; height: 20px;" alt="" src="../images/menu/internet_menu.png" onMouseOver="this.src='../images/menu/internet_menu_over.png';" onMouseOut="this.src='../images/menu/internet_menu.png';" onClick="setTitle('1','Internet','../programfiles/apps/internet/index.htm','../images/icons/menu/apps/internet.png');"></td>
          </tr>
          <tr>
           <td width="4"></td><td>
<img style="width: 90px; height: 20px;" alt="" src="../images/menu/email_menu.png" onMouseOver="this.src='../images/menu/email_menu_over.png';" onMouseOut="this.src='../images/menu/email_menu.png';" onClick="openInBrowser('../programfiles/apps/internet/index.htm');">
	</td>
          </tr>
          <tr>
            <td width="4"></td><td><img style="width: 90px; height: 20px;" alt="" src="../images/menu/welcome_menu.png" onMouseOver="this.src='../images/menu/welcome_menu_over.png';" onMouseOut="this.src='../images/menu/welcome_menu.png';" onClick="setTitle('1','Welcome Center','../programfiles/apps/welcomecenter/index.htm','../images/icons/menu/apps/win.png');"></td>


          </tr>

          <tr>

            <td width="4"></td><td><img style="width: 90px; height: 20px;" alt="" src="../images/menu/itunes_menu.png" onMouseOver="this.src='../images/menu/itunes_menu_over.png';" onMouseOut="this.src='../images/menu/itunes_menu.png';" onClick="setTitle('1','PSPTunes','../programfiles/apps/psptunes/index.htm','../images/icons/menu/psptunes.png');"></td>



          </tr>

          <tr>

            <td width="4"></td><td><img style="width: 90px; height: 20px;" alt="" src="../images/menu/msn_menu.png" onMouseOver="this.src='../images/menu/msn_menu_over.png';" onMouseOut="this.src='../images/menu/msn_menu.png';" onClick="setTitle('1','Windows Live Messanger','../programfiles/apps/msn/index.htm','../images/icons/menu/apps/msnmessenger.png');"></td>

    

          </tr>

          <tr>

            <td width="4"></td><td><img style="width: 90px; height: 20px;" alt="" src="../images/menu/update_menu.png" onMouseOver="this.src='../images/menu/update_menu_over.png';" onMouseOut="this.src='../images/menu/update_menu.png';" onClick="setTitle('1','Update','../controlpanel/updates.htm','../images/icons/menu/apps/updates.png');"></td>


          </tr>

        </tbody>
      </table>

      </div>

      <a href="#a">
      <div id="menuback" name="menuback" visibility="hidden" style="position: absolute; left: 5px; top: 195px; width: 95px; height: 14px; z-index: 23;"><img alt="Go to lastpage" src="../images/menu/back.gif" onMouseOver="this.src='../images/menu/back_over.gif';" onMouseOut="this.src='../images/menu/back.gif';" onClick="showHideLayer('allprograms','visible');showHideLayer('frameone','visible');showHideLayer('frametwo','hidden');showHideLayer('back','hidden');" border="0" height="14" width="95"></div>

      <div id="allprograms" visibility="visible" name="allprograms" style="position: absolute; left: 5px; top: 195px; width: 95px; height: 14px; z-index: 23;"><img alt="Go to lastpage" src="../images/menu/allprograms.gif" onMouseOver="this.src='../images/menu/allprograms_over.gif';" onMouseOut="this.src='../images/menu/allprograms.gif';" onClick="showHideLayer('allprograms','hidden');showHideLayer('frameone','hidden');showHideLayer('frametwo','visible');showHideLayer('menuback','visible');" border="0" height="14" width="95"></div>

      </a>
      <div id="frametwo" name="frametwo"  style="position: absolute; left: 4px; top: 4px; width: 100px; height: 195px; z-index: 23; visibility: hidden;"><iframe src="../user/menus/menuappslist.htm" style="width: 100px; height: 190px;" frameborder="0" ></iframe></div>
</td>
</tr>




<tr class="menu_text"> 
<td colspan="4" rowspan="1">&nbsp;

</td>  
</tr>    
<tr class="menu_text">
<td colspan="4" rowspan="1" onClick="setTitle('1','User Additions','../user/menus/menuappslistuser.htm','../images/icons/menu/run.png');" >&nbsp;&nbsp;&nbsp;<a href="#a"><img src="../images/menu/words/doc.png" onMouseover="this.src='../images/menu/words/doc_over.gif';userl.src='../images/icons/folder.png';" onMouseout="this.src='../images/menu/words/doc.png';userlog();"></a>
</td>
</tr>
<tr class="menu_text">
<td colspan="4" rowspan="1" onClick="setTitle('1','Games','../programfiles/apps/gameslist.htm','../images/icons/games.png');">&nbsp;&nbsp;&nbsp;<a href="#a"><img src="../images/menu/words/Games.png" onMouseover="this.src='../images/menu/words/ga_over.gif';userl.src='../images/icons/games.png';" onMouseout="this.src='../images/menu/words/Games.png';userlog();"></img></a>
</td>
</td>
<tr class="menu_text"> 
<td colspan="4" rowspan="1"  onclick="setTitle('1','My PSP','../programfiles/apps/filebrowse/index.htm','../images/icons/mypsp.png');">&nbsp;&nbsp;&nbsp;<a href="#a"><img src="../images/menu/words/Mypsp.png" onMouseover="this.src='../images/menu/words/my_over.gif';userl.src='../images/icons/mypsp.png';" onMouseout="this.src='../images/menu/words/mypsp.png';userlog();"></img></a>
</td>    
</tr>
<tr class="menu_text"> 
<td colspan="4" rowspan="1"  onclick="showHideLayer('mrecent',visible);">&nbsp;&nbsp;&nbsp;<a href="#a"><img src="../images/menu/words/recent.png" onMouseover="this.src='../images/menu/words/recent_over.gif';userl.src='../images/icons/mypsp.png';" onMouseout="this.src='../images/menu/words/recent.png';userlog();"></img></a>
</td>    
</tr>    
<tr class="menu_text">      
<td colspan="4" rowspan="1" onClick="setTitle('0','Control Panel','../programfiles/apps/controlpanel/index.htm','../images/icons/menu/controlpanel.png');">&nbsp;&nbsp;&nbsp;<a href="#a"><img src="../images/menu/words/control.png" onMouseover="this.src='../images/menu/words/con_over.gif';userl.src='../images/icons/menu/controlpanel.png';" onMouseout="this.src='../images/menu/words/control.png';userlog();"></img></a>
</td>   
</tr> 
<tr class="menu_text">
<td colspan="4" rowspan="1" onClick="openInBrowser('http://blazebyte.net/community');">&nbsp;&nbsp;&nbsp;<a href="#a"><img src="../images/menu/words/forum.png" onMouseover="this.src='../images/menu/words/for_over.gif';userl.src='../images/icons/internet.png';" onMouseout="this.src='../images/menu/words/forum.png';userlog();"></img></a>
</td>   
</tr>    
<tr class="menu_text">
<td colspan="4" rowspan="1" onClick="setTitle('1','Help Center','../system/help.htm','../images/icons/menu/help.png');">&nbsp;&nbsp;&nbsp;<a href="#a"><img src="../images/menu/words/support.png" onMouseover="this.src='../images/menu/words/sup_over.gif';userl.src='../images/icons/menu/help.png';" onMouseout="this.src='../images/menu/words/support.png';userlog();"></img></a>
</td>    
</tr> 
<tr>
</tr>
<tr height="15">  
<td width="70" align="left">
<div>
<form method="get" action="http://google.com/xhtml" target="parent" id="searchForm">
<script>drawInput("text","address","Search","","height:10px;width:80px;");</script>
<input name="hl" value="en" type="hidden"><input name="lr" value="" type="hidden"><input name="mrestrict" value="xhtml" type="hidden"></form>
</div>
</td>
<td onClick="" width="20"><img src="../images/menu/search.gif" width="24" height="13" /></td>
<td width="4"></td>
<td align="right" valign="middle" onClick="hideMenu();shutdownFade();showHideLayer('lIcons','hidden');window.location='shutdown.htm';" cellpadding="" cellspacing="0">
<a class="astart_dark" href="#a"><img src="../images/menu/off.png" width="24" height="10" border="0" onMouseOver="this.src='../images/menu/off_over.png';" onMouseOut="this.src='../images/menu/off.png';"></a></td>
<td align="center" valign="middle" onClick="showHideLayer('txtPassword','visible');showHideLayer('portalmenu','hidden');showHideLayer('login','visible');hideMenu();" cellpadding="0" cellspacing="0"><a  href="#a"><img src="../images/menu/logoff.png" width="24" height="10" border="0" onMouseOver="this.src='../images/menu/logoff_over.png';" onMouseOut="this.src='../images/menu/logoff.png';" /></a></td>
<td align="left" valign="middle" onClick="showHideLayer('mlinks','visible');" cellpadding="0" cellspacing="0">
<a href="#a"><img src="../images/menu/other.png" width="10" height="10" border="0" onMouseOver="this.src='../images/menu/other_over.png';" onMouseOut="this.src='../images/menu/other.png';"></a></td>
</tr>
</tbody>
</table>');
function loadurl() {
if(document.urlform.url.value!==document.content.location.href){
document.urlform.url.value=document.content.location.href
loadurl()
}else{
loadurl()
}
}
<!--
function resize(obj,w,h){
if (document.getElementById || document.all) {
SD = document.getElementById(obj).style || document.all[obj].style;
}
SD.width = w;
SD.height = h;
}
function MM_goToURL() { //v3.0
  var i, args=MM_goToURL.arguments; document.MM_returnValue = false;
  for (i=0; i<(args.length-1); i+=2) eval(args+".location='"+args[i+1]+"'");
}
//-->
function focusOnLoad()
{
    if (document.all)
    {
        document.all.q.focus();
    }
    else
    {
        document.getElementById('q').focus();
    }
}

function btnOnSubmit()
{
    if (document.forms && document.forms['aspnetForm'])
    {
        document.forms['aspnetForm'].submit();
    }
    else
    {
        document.getElementById('aspnetForm').submit();
    }
}

function focusNewSearch()
{
    if (document.all)
    {
        document.all.q.focus();
    }
    else
    {
        window.location='#searchbox';
        document.getElementById('q').focus();        
    }
}

function focusNewSearchMB2001()
{
    if (document.all)
    {
        document.all.sk.focus();
    }
    else
    {
        window.location='#searchbox';
        document.getElementById('sk').focus();
    }
}
function MM_showHideLayers() { //v9.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) 
  with (document) if (getElementById && ((obj=getElementById(args[i]))!=null)) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}
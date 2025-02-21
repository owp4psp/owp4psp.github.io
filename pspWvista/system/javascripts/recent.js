var recentFunction;
var recentFunction2;
var recentFunction3;
var minmax;
var program;
var programpath;
var iconpath;
var minmax2;
var program2;
var programpath2;
var iconpath2;
var minmax3;
var program3;
var programpath3;
var iconpath3;

writeRecent1();

function writeRecent1(){
minmax = top.icookies.document.getElementById('recent').value;
program = top.icookies.document.getElementById('recentt').value;
programpath = top.icookies.document.getElementById('recentl').value;
iconpath = top.icookies.document.getElementById('recenti').value;
start = top.icookies.document.getElementById('recents').value;
recentFunction = 'setTitle("' + minmax + '","' + program + '","' + programpath + '","' + iconpath + '","' + start +'")';;
document.write("<tr onClick='");
document.write(recentFunction);
document.write("'><td width='22'><img src='");
document.write(top.icookies.document.getElementById('recenti').value);
document.write("' width='15' height='15' border='0'></td><td><a href='#a' style='text-decoration:none;'><font size='1' color='#000000'>");
document.write(top.icookies.document.getElementById('recentt').value);
document.write("</font></a></td></tr>");
writeRecent2();
}


function writeRecent2(){
minmax2 = top.icookies.document.getElementById('recent2').value;
program2 = top.icookies.document.getElementById('recent2t').value;
programpath2 = top.icookies.document.getElementById('recent2l').value;
iconpath2 = top.icookies.document.getElementById('recent2i').value;
start2 = top.icookies.document.getElementById('recent2s').value;
recentFunction2 = 'setTitle("' + minmax2 + '","' + program2 + '","' + programpath2 + '","' + iconpath2 + '","' + start2 +'")';
document.write("<tr onClick='");
document.write(recentFunction2);
document.write("'><td width='22'><img src='");
document.write(top.icookies.document.getElementById('recent2i').value);
document.write("' width='15' height='15' border='0'></td><td><a href='#a' style='text-decoration:none;'><font size='-1' color='#000000'>");
document.write(top.icookies.document.getElementById('recent2t').value);
document.write("</font></a></td></tr>");
writeRecent3();
}



function writeRecent3(){
minmax3 = top.icookies.document.getElementById('recent3').value;
program3 = top.icookies.document.getElementById('recent3t').value;
programpath3 = top.icookies.document.getElementById('recent3l').value;
iconpath3 = top.icookies.document.getElementById('recent3i').value;
start3 = top.icookies.document.getElementById('recent3s').value;
recentFunction3 = 'setTitle("' + minmax3 + '","' + program3 + '","' + programpath3 + '","' + iconpath3 + '","' + start3 +'")';
document.write("<tr onClick='");
document.write(recentFunction3);
document.write("'><td width='22'><img src='");
document.write(top.icookies.document.getElementById('recent3i').value);
document.write("' width='15' height='15' border='0'></td><td><a href='#a' style='text-decoration:none;'><font size='1' color='#000000'>");
document.write(top.icookies.document.getElementById('recent3t').value);
document.write("</font></a></td></tr>");

}
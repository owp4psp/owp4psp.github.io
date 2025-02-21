DefaultDesign = 'design/';

var StartPage = document.cookie;
if(StartPage.indexOf("fsbrowserurl=") != -1) {
  StartPage = StartPage.substring(StartPage.indexOf("fsbrowserurl=")+13);
  if(StartPage.indexOf(";") != -1) {
    StartPage = StartPage.substring(0,StartPage.indexOf(";")); }
  if (StartPage == '') {
    StartPage = 'adress.html'; }
} else {
  StartPage = 'adress.html';
}


var FSBDesign = document.cookie;
if(FSBDesign.indexOf("fsbrowserdesign=") != -1) {
  FSBDesign = FSBDesign.substring(FSBDesign.indexOf("fsbrowserdesign=")+16);
  if(FSBDesign.indexOf(";") != -1) {
    FSBDesign = FSBDesign.substring(0,FSBDesign.indexOf(";")); }
  if (FSBDesign == '') {
    FSBDesign = DefaultDesign; }
} else {
  FSBDesign = DefaultDesign;
}

var FSBMenuBar = document.cookie;
if(FSBMenuBar.indexOf("fsbrowsermenubar=") != -1) {
  FSBMenuBar = FSBMenuBar.substring(FSBMenuBar.indexOf("fsbrowsermenubar=")+17,FSBMenuBar.indexOf("fsbrowsermenubar=")+18);
  if(FSBMenuBar.indexOf(";") != -1) {
    FSBMenuBar = FSBDesign.substring(0,FSBMenuBar.indexOf(";")); }
  if (!((FSBMenuBar == 2) || (FSBMenuBar == 1) || (FSBMenuBar == 0))) {
    FSBMenuBar = 2; }
} else {
  FSBMenuBar = 2;
}

var CSHeight = document.cookie;
if(CSHeight.indexOf("fsbrowserheight=") != -1) {
  CSHeight = CSHeight.substring(CSHeight.indexOf("fsbrowserheight=")+1);
  if(CSHeight.indexOf(";") != -1) {
    CSHeight = CSHeight.substring(0,CSHeight.indexOf(";")); }
  if (isNaN(CSHeight)) {
    CSHeight = ''; }
} else {
  CSHeight = '';
}

var CSWidth = document.cookie;
if(CSWidth.indexOf("fsbrowserwidth=") != -1) {
  CSWidth = CSWidth.substring(CSWidth.indexOf("fsbrowserwidth=")+15);
  if(CSWidth.indexOf(";") != -1) {
    CSWidth = CSWidth.substring(0,CSWidth.indexOf(";")); }
  if (isNaN(CSWidth)) {
    CSWidth = ''; }
} else {
  CSWidth = '';
}

if(CSWidth == '') { CSHeight = ''; }
if(CSHeight == '') { CSWidth = ''; }

var GoogleLanguage = document.cookie;
if(GoogleLanguage.indexOf("fsbrowsergooglel=") != -1) {
  GoogleLanguage = GoogleLanguage.substring(GoogleLanguage.indexOf("fsbrowsergooglel=")+17);
  if(GoogleLanguage.indexOf(";") != -1) {
    GoogleLanguage = GoogleLanguage.substring(0,GoogleLanguage.indexOf(";")); }
  if (GoogleLanguage == '') {
    GoogleLanguage = 'com'; }
} else {
  GoogleLanguage = 'com';
}


var WikipediaLanguage = document.cookie;
if(WikipediaLanguage.indexOf("fsbrowserwikil=") != -1) {
  WikipediaLanguage = WikipediaLanguage.substring(WikipediaLanguage.indexOf("fsbrowserwikil=")+15);
  if(WikipediaLanguage.indexOf(";") != -1) {
    WikipediaLanguage = WikipediaLanguage.substring(0,WikipediaLanguage.indexOf(";")); }
  if (WikipediaLanguage == '') {
    WikipediaLanguage = 'en'; }
} else {
  WikipediaLanguage = 'en';
}

var ActivateTabs = document.cookie;
if(ActivateTabs.indexOf("fsbrowsertabs=") != -1) {
  ActivateTabs = ActivateTabs.substring(ActivateTabs.indexOf("fsbrowsertabs=")+14);
  if(ActivateTabs.indexOf(";") != -1) {
    ActivateTabs = ActivateTabs.substring(0,ActivateTabs.indexOf(";")); }
  if (!((ActivateTabs == 0) || (ActivateTabs == 1))) {
    ActivateTabs = 1; }
} else {
  ActivateTabs = 1;
}

var TabMax = document.cookie;
if(TabMax.indexOf("fsbrowsertabmax=") != -1) {
  TabMax = TabMax.substring(TabMax.indexOf("fsbrowsertabmax=")+16);
  if(TabMax.indexOf(";") != -1) {
    TabMax = TabMax.substring(0,TabMax.indexOf(";")); }
  if (isNaN(TabMax)) {
    TabMax = 5; }
} else {
  TabMax = 5;
}

var TabOpenHomepage = document.cookie;
if(TabOpenHomepage.indexOf("fsbrowsertaboh=") != -1) {
  TabOpenHomepage = TabOpenHomepage.substring(TabOpenHomepage.indexOf("fsbrowsertaboh=")+15);
  if(TabOpenHomepage.indexOf(";") != -1) {
    TabOpenHomepage = TabOpenHomepage.substring(0,TabOpenHomepage.indexOf(";")); }
  if (!((TabOpenHomepage == 0) || (TabOpenHomepage == 1))) {
    TabOpenHomepage = 0; }
} else {
  TabOpenHomepage = 0;
}

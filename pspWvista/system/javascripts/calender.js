
/*Copyright 1996 - Tomer and Yehuda Shiran
Feel free to "steal" this code provided that you leave this notice as is.
Additional examples from the book can be found at http://www.geocities.com/SiliconValley/9000/
For more information contact Tomer or Yehuda Shiran <yshiran@iil.intel.com>*/

setCal()

function leapYear(year) {
if (year % 4 == 0) // basic rule
return true // is leap year
/* else */ // else not needed when statement is "return"
return false // is not leap year
}

function getDays(month, year) {
// create array to hold number of days in each month
var ar = new Array(12)
ar[0] = 31 // January
ar[1] = (leapYear(year)) ? 29 : 28 // February
ar[2] = 31 // March
ar[3] = 30 // April
ar[4] = 31 // May
ar[5] = 30 // June
ar[6] = 31 // July
ar[7] = 31 // August
ar[8] = 30 // September
ar[9] = 31 // October
ar[10] = 30 // November
ar[11] = 31 // December

// return number of days in the specified month (parameter)
return ar[month]
}

function getMonthName(month) {
// create array to hold name of each month
var ar = new Array(12)
ar[0] = "Jan"
ar[1] = "Feb"
ar[2] = "Mar"
ar[3] = "April"
ar[4] = "May"
ar[5] = "June"
ar[6] = "July"
ar[7] = "Aug"
ar[8] = "Sep"
ar[9] = "Oct"
ar[10] = "Nov"
ar[11] = "Dec"

// return name of specified month (parameter)
return ar[month]
}

function setCal() {
// standard time attributes
var now = new Date()
var year = now.getYear()
if (year < 1000)
year+=1900
var month = now.getMonth()
var monthName = getMonthName(month)
var date = now.getDate()
now = null

// create instance of first day of month, and extract the day on which it occurs
var firstDayInstance = new Date(year, month, 1)
var firstDay = firstDayInstance.getDay()
firstDayInstance = null

// number of days in current month
var days = getDays(month, year)

// call function to draw calendar
drawCal(firstDay + 1, days, date, monthName, year)
}

function drawCal(firstDay, lastDate, date, monthName, year) {
// constant table settings
var headerHeight = 10 // height of the table's header cell
var border = 0 // 3D height of table's border
var cellspacing = 0 // width of table's border
var headerColor = "Black" // color of table's header
var headerSize = "1" // size of tables header font
var colWidth = 5 // width of columns in table
var dayCellHeight = 5 // height of cells containing days of the week
var dayColor = "Gray" // color of font representing week days
var cellHeight = 5 // height of cells representing dates in the calendar
var todayColor = "White" // color specifying today's date in the calendar

// create basic table structure
var text = "" // initialize accumulative variable to empty string
text += '<CENTER>'
text += '<TABLE BORDER=' + border + ' CELLSPACING=' + cellspacing + '>' // table settings
text += '<TH COLSPAN=7 HEIGHT=' + headerHeight + '>' // create table header cell
text += '<FONT COLOR="' + headerColor + '" SIZE=' + headerSize + '>' // set font for table header
text += monthName + ' ' + year 
text += '</FONT>' // close table header's font settings
text += '</TH>' // close header cell

// variables to hold constant settings
var openCol = '<TD WIDTH=' + colWidth + ' HEIGHT=' + dayCellHeight + '>'
openCol += '<FONT SIZE="-3" COLOR="' + dayColor + '">'
var closeCol = '</FONT></TD>'

// create array of abbreviated day names
var weekDay = new Array(7)
weekDay[0] = "S"
weekDay[1] = "M"
weekDay[2] = "T"
weekDay[3] = "W"
weekDay[4] = "T"
weekDay[5] = "F"
weekDay[6] = "S"

// create first row of table to set column width and specify week day
text += '<TR ALIGN="center" VALIGN="center">'
for (var dayNum = 0; dayNum < 7; ++dayNum) {
text += openCol + weekDay[dayNum] + closeCol 
}
text += '</TR>'

// declaration and initialization of two variables to help with tables
var digit = 1
var curCell = 1

for (var row = 1; row <= Math.ceil((lastDate + firstDay - 1) / 7); ++row) {
text += '<TR ALIGN="right" VALIGN="top">'
for (var col = 1; col <= 7; ++col) {
if (digit > lastDate)
break
if (curCell < firstDay) {
text += '<TD></TD>';
curCell++
} else {
if (digit == date) { // current cell represent today's date
text += '<TD BGCOLOR="#FF6600" HEIGHT=' + cellHeight +  '>'
text += '<FONT SIZE="-3" COLOR="' + todayColor + '">'
text += digit
text += '</FONT><BR>'
text += '</TD>'
} else
text += '<TD HEIGHT=' + cellHeight + '>'
text += '<FONT SIZE="-3" COLOR="Black">'
text += digit
text += '</FONT>'
text += '</TD>'
digit++
}
}
text += '</TR>'
}

// close all basic table tags
text += '</TABLE>'
text += '</CENTER>'

// print accumulative HTML string
document.write(text) 
}

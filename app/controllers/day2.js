var args = arguments[0] || {};
//here we are getting the data from schedulemod.js
var dayTag = "day2";
require('schedulemod').loadSchedule(dayTag);
require('schedulemod').loadTable($.day2table, dayTag);

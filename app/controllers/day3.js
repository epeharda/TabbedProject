var args = arguments[0] || {};
//here we are getting the data from schedulemod.js
var dayTag = "day3";
require('schedulemod').loadSchedule(dayTag);
require('schedulemod').loadTable($.day3table, dayTag);

var args = arguments[0] || {};
dayTag = 'day1';
require('schedulemod').loadSchedule(dayTag);
require('schedulemod').loadTable($.day1table, dayTag);

function tableclick(evt){
  /*var talkDetails=require('schedulemod').getTalkDetails(dayTag,evt.row.rowId);
  require('schedulemod').tableClick(evt,talkDetails,dayTag);*/
}

function tablescroll(evt){
	
}

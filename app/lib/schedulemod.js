
//to load the date into the table, we are now creating a load table function
function loadTable(tableObject, dayTag){
	var DBH = require('com.alcoapps.dbhelper');
	var db = new DBH.dbhelper('/scheduledata.sqlite','scheduledata');
	var scheduleData = db.get({
		fields: '*',
		table: dayTag
	});
  	var tableData=[];						//loops through all items in json file
  	scheduleData.forEach(function(item, index){
	    item.index=index; // add the index to the object
	    var row=Alloy.createController('dayrow',item).getView();
	    tableData.push(row);
	  });
	  tableObject.setData(tableData);
}


//connects loadTable function to controller
exports.loadTable = loadTable;

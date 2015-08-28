//this function will load the data from our data files (day1.json day2.json day3.json) into the global property
function loadSchedule(day){
	//we send this variable as a parameter so that we can use day1, day2, and day3 for all three
	//days
	if(!Ti.App.Properties.getBool(day+'-loaded',false)){
		var filename = '/data/' + day + '.json';
		var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, filename);
		var contents = f.read();
		Ti.App.Properties.setObject(day, JSON.parse(contents));
		Ti.App.Properties.setBool(day+'-loaded',true);
	}
}

//to load the date into the table, we are now creating a load table function
function loadTable(tableObject, dayTag){
  var tableData=[];						//loops through all items in json file
  Ti.App.Properties.getObject(dayTag).forEach(function(item, index){
    item.index=index; // add the index to the object
    //here we are sending a second argument to createController
    //you are actually sending data to dayrow by doing this
    Ti.API.info(JSON.stringify(item));
    var row=Alloy.createController('dayrow',item).getView();
    tableData.push(row);
  });
  Ti.API.info(tableObject);
  tableObject.setData(tableData);
}

//connects loadSchedule function to controller
exports.loadSchedule = loadSchedule;
//connects loadTable function to controller
exports.loadTable = loadTable;

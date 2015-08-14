function doClick(e) {
    alert($.label.text);
}

//adding title to app
$.index.addEventListener('open', function(evt){
	if(OS_ANDROID){
		//activity is an android concept - not a titanium one
		var activity = evt.source.getActivity();
		var actionbar = activitiy.actionBar;
		actionbar.title = "The Alloy Conference";
	}
});

$.index.open();

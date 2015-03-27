// when we start up, create a user and log in
var user = Alloy.createModel('User');

// we are using the default administration account for now
user.login("wileytigram_admin", "wileytigram_admin", function(_response) {
	
	if(_response.success)
	{
		//$.index.open();
		$.tabGroup.open();

		// pre-populate the feed with recent photos
		$.feedController.initialize();		
	} else {
  		alert("Error starting application " + _response.error);
  		Ti.API.error('error logging in ' + _response.error);
	}
});
Alloy.Globals.openCurrentTabWindow = function(_window) {
	$.tabGroup.activeTab.open(_window);
};


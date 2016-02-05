exports.view = function(req, res) {
	//controller code goes here
	var name = req.params.name; 
	res.render('settings', {
		'projectName': name
	});

	res.render( 'settings', {
	'option': [
    	  {
		    'caption': "Swaag Settings",
		    'link': 'accountSettings'
		  },
		  {
		    'caption': "Notifications",
		    'link': 'notifications'
		  },
		  {
		  	'caption': "Help",
		  	'link': 'Calender'
		  }
		]
	});
};
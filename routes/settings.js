exports.view = function(req, res) {
	//controller code goes here
	var name = req.params.name; 
	res.render('settings', {
		'projectName': name
	});

	res.render( 'settings', {
	'list-item': [
    	  {
		    'caption': "Account Settings",
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
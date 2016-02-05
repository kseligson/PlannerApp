exports.view = function(req, res) {
	//controller code goes here
	var name = req.params.name; 
	res.render('settings', {
		'projectName': name
	});

	res.render( 'settings', {
	'button': [
    	  {
		    'caption': "Account Settings",
		    'link': 'accountSettings'
		  },
		  {
		    'caption': "Noticications",
		    'link': 'notifications'
		  },
		  {
		  	'caption: "Help',
		  	'link': 'www.google.com'
		  }
		]
	});
};
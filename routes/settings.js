exports.view = function(req, res) {
	//controller code goes here
	var name = req.params.name; 
	res.render('settings', {
		'projectName': name
	});
};
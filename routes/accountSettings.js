exports.view = function(req, res) {
	//controller code goes here
	var name = req.params.name; 
	res.render('accountSettings', {
		'projectName': name
	});
};
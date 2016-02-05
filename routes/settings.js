var data = require('../data.json');

exports.view = function(req, res) {
	//controller code goes here
	var name = req.params.name; 

	res.render( 'settings', data);
};
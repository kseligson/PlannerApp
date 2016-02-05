var data = require('../data.json');
/*
 * GET calendar page.
 */

exports.view = function(req, res) {
	//controller code goes here
	var name = req.params.name; 
	res.render('calendar', data);
};
var data = require('../data.json');

exports.view = function(req, res) {
	//controller code goes here
	res.render('tasksummary', data);
};
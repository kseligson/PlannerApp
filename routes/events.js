var data = require('../data.json');

exports.view = function(req, res) {
	var name = req.params.name;
	res.render('events', data);
};
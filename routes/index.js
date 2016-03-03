var data = require('../data.json');
var events = require('../events.json');
var tasks = require('../tasks.json');
/*
 * GET home page.
 */
exports.view = function(req, res){
	var random_num = Math.random();
	console.log(random_num);

	if (random_num >= 0) {
		data['taskFirst'] = false;
	  res.render('index', data);
	} else {
	  res.redirect('/taskfirst');
	}
};

exports.newNav = function(req,res) {
	var random_num = Math.random();
	console.log(random_num);

	if(random_num >= 0) {
		data['taskFirst'] = true;
		res.render('index', data);
	}
	else {
		res.redirect('/taskfirst');
	}
};
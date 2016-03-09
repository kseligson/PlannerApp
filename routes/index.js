var data = require('../data.json');
var events = require('../events.json');
var tasks = require('../tasks.json');
/*
 * GET home page.
 */
exports.view = function(req, res){
	var taskAmt = data.tasks.length;
	var eventAmt = data.events.length;

	res.render('index', {
		//taskCount: taskAmt,
		//eventCount: eventAmt
	});
};
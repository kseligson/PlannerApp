var data = require('../data.json');
var models = require('../models.js');

exports.view = function(req, res) {
	var taskID = req.params.id;
  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
  models.Task.findOne({"_id": taskID}, function(err, tasks) {
  	console.log(tasks);
  	res.render('edittask', { 'tasks': tasks });
  });


}
var data = require('../data.json')
var models = require('../models.js')

exports.view = function(req, res) {
	//controller code goes here
	models.Task
		.find()
		.sort('date')
		.exec(renderTasks);

	function renderTasks(err, tasks) {
		res.render('tasks', { 'tasks': tasks });
	}

};

exports.addTask = function(req, res) {
	var form_data = req.body;
	console.log(form_data);

	// make a new Project and save it to the DB
  // YOU MUST send an OK response w/ res.send();
  var newTask = new models.Task({
    "name": form_data.name,
    "date": form_data.date,
    "time": form_data.time,
    "color": form_data.color,
    "notes": form_data.notes,
    "repeat": form_data.repeat,
    "remind": form_data.remind
  });
  newTask.save(afterSaving);

  function afterSaving(err) { // this is a callback
    if(err) {console.log(err); res.send(500); }
    res.redirect('/tasks');
  } 
}

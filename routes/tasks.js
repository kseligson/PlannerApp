var data = require('../data.json')
var models = require('../models.js')
//require('../twilio.js');

exports.view = function(req, res) {
	//controller code goes here
	models.Task
		.find()
		.sort('-date')
		.exec(renderTasks);

	function renderTasks(err, tasks) {
		res.render('tasks', { 'tasks': tasks });
	}

};

exports.addTask = function(req, res) {
	var form_data = req.body;

  var date_obj = new Date(form_data.date);
  var options = {
    weekday: "short",
    year: "2-digit",
    month: "numeric",
    day: "numeric"
  };
  var display_date = date_obj.toLocaleDateString('en-US', options);

	// make a new Project and save it to the DB
  // YOU MUST send an OK response w/ res.send();
  console.log("date " + form_data.date );
  console.log(display_date);
  var newTask = new models.Task({
    "name": form_data.name,
    "date": display_date,
    "time": form_data.time,
    "color": form_data.color,
    "notes": form_data.notes,
    "repeat": form_data.repeat,
    "remind": form_data.remind
  });
  console.log(newTask);
  newTask.save(afterSaving);

  function afterSaving(err) { // this is a callback
    if(err) {console.log(err); res.send(500); }
    res.redirect('/tasks');
  } 
}

exports.deleteTask = function(req, res) {
  var taskID = req.params.id;

  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
  models.Task.find({"_id": taskID}).remove().exec(afterQuery);

  function afterQuery(err, projects) {
      if(err) console.log(err);
      res.send();
    }
}
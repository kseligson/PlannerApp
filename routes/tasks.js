
var data = require('../data.json')
var models = require('../models.js')
<<<<<<< HEAD
var taskJSON = require('../tasks.json')
=======
//require('../twilio.js');
>>>>>>> 5dbe2b3dc3934b18e3be3c242ab6f9338e3d661f

exports.view = function(req, res) {
	//controller code goes here
/*
	models.Task
		.find()
		.sort('-date')
		.exec(renderTasks);

	function renderTasks(err, tasks) {
    console.log(tasks);
		res.render('tasks', { 'tasks': tasks });
	}*/
  res.render('tasks', data);

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


  //var newData = JSON.parse(data);  //parse the JSON
  data.tasks.push({        //add the employee
    "name": form_data.name,
    "date": display_date,
    "time": form_data.time,
    "color": form_data.color,
    "notes": form_data.notes,
    "repeat": form_data.repeat,
    "remind": form_data.remind
  });
  //data = JSON.stringify(newData);  //reserialize to JSON
/*
	// make a new Project and save it to the DB
  // YOU MUST send an OK response w/ res.send();


  
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
  } */
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

exports.editTask = function(req, res) {
  var taskID = req.params.id;
  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
  models.Task.findOne({"_id": taskID}, function(err, tasks) {
    console.log(tasks);
    res.render('edittask', { 'tasks': tasks });
  });

}
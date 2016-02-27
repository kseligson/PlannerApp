var data = require('../data.json');
var models = require('../models.js');
var ID = null;

/*
exports.view = function(req, res) {
    
    console.log(ID);
    if(ID = null) {
    //controller code goes here
    res.render('edittask', data);
      }
      else {
     models.Task.findOne({"_id": ID}, function(err, tasks) {
      res.render('edittask', { 'tasks': tasks });
  });
}
};
*/
exports.view = function(req, res) {
	var taskID = req.params.id;
  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
  models.Task.findOne({"_id": taskID}, function(err, tasks) {
  	console.log(tasks);
  	res.render('edittask', { 'tasks': tasks });
  });


}
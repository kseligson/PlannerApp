var data = require('../data.json');
var models = require('../models.js');
var taskData = require('../tasks.json');
var jsonObj = null;
var idNumber = null

exports.view = function(req, res) {
  console.log(idNumber);
  if (idNumber != null && jsonObj == null) {

   for (var i=0; i<data.tasks.length; i++) {

      if (data.tasks[i].id == idNumber) {
        jsonObj = data.tasks[i];
      }
    }

    var date_obj = new Date(jsonObj.date);
    var options = {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    };
    var display_date = date_obj.toLocaleDateString('en-US', options);

    jsonObj.date = display_date;


    res.render('edittask', jsonObj);
  }
  
  if(jsonObj == null && idNumber == null){
  console.log("1");
    res.render('edittask', data.tasks[0]);
  }

  res.render('edittask', jsonObj);
}

exports.edit = function(req, res) {
  idNumber = req.params.id;
  
  for (var i=0; i<data.tasks.length; i++) {

  console.log("posted");
    if (data.tasks[i].id == req.params.id) {
      jsonObj = data.tasks[i];
    }
  }

  var date_obj = new Date(jsonObj.date);
  var options = {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  };
  var display_date = date_obj.toLocaleDateString('en-US', options);

  console.log(display_date);

  jsonObj.date = display_date;
  
  res.render('edittask', jsonObj);
}
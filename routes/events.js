var data = require('../data.json');
//var models = require('../models.js');

exports.view = function(req, res) {
	//var name = req.params.name;
	//res.render('events', data);

  res.render('events', data);
  /*
	models.Event
		.find()
		.exec(renderEvents);

	function renderEvents(err, events) {
		res.render('events', {'events': events, data});
	}*/
};

exports.addEvent = function(req, res) {
  var form = req.body;

  var newEvent = {
    "name": form.name,
    "startDate": form.startDate,
    "endDate": form.endDate,
    "startTime": form.startTime,
    "endTime": form.endTime,
    "color": form.eventColor,
    "notes": form.notes
  };

  console.log(newEvent);
  res.redirect('/events');

/*	var form_data = req.body;

  var newEvent = new models.Event({
    "taskName": form_data.taskName,
	"startDate": form_data.startDate,
	"endDate": form_data.endDate,
	"startTime": form_data.startTime,
	"endTime": form_data.endTime,
	"taskColor": form_data.taskColor,
	"taskNotes": form_data.taskNotes

  });
  console.log(newEvent);
  newEvent.save(afterSaving);

  function afterSaving(err) { // this is a callback
    if(err) {console.log(err); res.send(500); }
    res.redirect('/events');
  } */
}

exports.deleteEvent = function(req, res) {
  /*var eventID = req.params.id;

  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
  models.Event.find({"_id": eventID}).remove().exec(afterQuery);

  function afterQuery(err, projects) {
      if(err) console.log(err);
      res.send();
    }*/
}
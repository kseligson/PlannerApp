var events = require('../events.json');
/*
 * GET calendar page.
 */

exports.view = function(req, res) {
	//controller code goes here
	var name = req.params.name; 
	res.render('calendar', events);
};
/*
exports.eventInfo = function(req, res) { 
  var eventID = req.params.id;

  // query for the specific project and
  // call the following callback
  models.eventInfo
    .find()
    .sort(eventID)
    .exec(afterQuery)

  function afterQuery(err, events) {
    if(err) console.log(err);
    res.json(events[0]);
  }
}

exports.addEvent = function(req, res) {
  var form_data = req.body;
  console.log(form_data);

  // make a new Project and save it to the DB
  // YOU MUST send an OK response w/ res.send();
}

exports.deleteEvent = function(req, res) {
  var eventID = req.params.id;

  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
}
*/
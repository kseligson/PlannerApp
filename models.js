
var Mongoose = require('mongoose');


var EventSchema = new Mongoose.Schema({
  // fields are defined here
	"taskName": String,
	"startDate": String,
	"endDate": String,
	"startTime": String,
	"endTime": String,
	"taskColor": String
  //"summary" : String,
});


var TaskSchema = new Mongoose.Schema({
	"name": String,
	"date": String,
	"time": String,
	"color": String,
	"notes": String,
	"repeat": Boolean,
	"remind": Boolean
});

exports.Event = Mongoose.model('Event', EventSchema);
exports.Task = Mongoose.model('Task', TaskSchema);

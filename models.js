
var Mongoose = require('mongoose');


var EventSchema = new Mongoose.Schema({
  // fields are defined here
  "title" : String,
  "start" : Date
  //"summary" : String,
});

exports.Event = Mongoose.model('Event', EventSchema);

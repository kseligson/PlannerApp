
/*
  This script will initialize a local Mongo database
  on your machine so you can do development work.

  IMPORTANT: You should make sure the

      local_database_name

  variable matches its value in app.js  Otherwise, you'll have
  initialized the wrong database.
*/

var mongoose = require('mongoose');
var models   = require('./models');

// Connect to the Mongo database, whether locally or on Heroku
// MAKE SURE TO CHANGE THE NAME FROM 'lab7' TO ... IN OTHER PROJECTS
var local_database_name = 'PlannerApp';
var local_database_uri  = 'mongodb://localhost/' + local_database_name;
var heroku_database_uri = 'mongodb://dando:dando@ds013918.mlab.com:13918/heroku_2j43lmsj?authMode=scram-sha1' || local_database_uri;
mongoose.connect(heroku_database_uri);

/**
// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://heroku_2j43lmsj:6geip6jl2c4jcad3udhr6da0m9@ds013918.mongolab.com:13918/heroku_2j43lmsj", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});
*/


// Do the initialization here

// Step 1: load the JSON data
//var events_json = require('./events.json');
var tasks_json = require('./tasks.json');

// Step 2: Remove all existing documents
/*
models.Event
  .find()
  .remove()
  .exec(onceClearEvents); // callback back to continue at
*/

models.Task
  .find()
  .remove()
  .exec(onceClearTasks); // callback to continue at

// Step 3: load the data from the JSON file
/*
function onceClearEvents(err) {
  if(err) console.log(err);

  // loop over the tasks, construct and save an object from each one
  // Note that we don't care what order these saves are happening in...
  var to_save_count = events_json.length;
  for(var i=0; i<events_json.length; i++) {
    var json = events_json[i];
    var eve = new models.Event(json);

    eve.save(function(err, eve) {
      if(err) console.log(err);

      to_save_count--;
      console.log(to_save_count + ' left to save');
      if(to_save_count <= 0) {
        console.log('DONE');
        // The script won't terminate until the 
        // connection to the database is closed
        mongoose.connection.close();
      }
    });
  }
}
*/

function onceClearTasks(err) {
  if(err) console.log(err);

  // loop over the tasks, construct and save an object from each one
  // Note that we don't care what order these saves are happening in...
  var to_save_count = tasks_json.length;

  for(var i=0; i<tasks_json.length; i++) {
    var json = tasks_json[i];
    var tas = new models.Task(json);

    tas.save(function(err, tas) {
      if(err) console.log(err);

      to_save_count--;
      console.log(to_save_count + ' left to save');
      if(to_save_count <= 0) {
        console.log('DONE');
        // The script won't terminate until the 
        // connection to the database is closed
        mongoose.connection.close();
      }
    });
  }
}


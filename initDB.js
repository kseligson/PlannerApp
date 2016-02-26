
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

/*
var local_database_name = 'peopleplanner';
var local_database_uri  = 'mongodb://localhost/' + local_database_name;
var database_uri =  process.env.MONGOLAB_URI || local_database_uri;
// heroku_2j43lmsj:6geip6jl2c4jcad3udhr6da0m9@ds013918.mongolab.com:13918/heroku_2j43lmsj;
mongoose.connect(database_uri);
*/

// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://heroku_2j43lmsj:6geip6jl2c4jcad3udhr6da0m9@ds013918.mongolab.com:13918/heroku_2j43lmsj", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});



// Do the initialization here

// Step 1: load the JSON data
var data_json = require('./tasks.json');


console.log("connected");
// Step 2: Remove all existing documents
models.Task
  .find()
  .remove()
  .exec(onceClear); // callback to continue at

console.log("connected");

// Step 3: load the data from the JSON file
function onceClear(err) {
  if(err) console.log(err);

  
console.log("connected");
  // loop over the projects, construct and save an object from each one
  // Note that we don't care what order these saves are happening in...
  var to_save_count = data_json.length;

  console.log("before");
  for(var i=0; i<data_json.length; i++) {

    console.log("check");
    var json = data_json[i];
    var proj = new models.Tasks(json);

    proj.save(function(err, proj) {
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


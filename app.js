
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var mongoose = require('mongoose');
var twilio = require('twilio');

var index = require('./routes/index');
var calendar = require('./routes/calendar');
var events = require('./routes/events');
var tasks = require('./routes/tasks');
var settings = require('./routes/settings');
var newtask = require('./routes/newtask');
var newevent = require('./routes/newevent');
var notifications = require('./routes/notifications');
var accountSettings = require('./routes/accountSettings');
var eventsummary = require('./routes/eventsummary');
var tasksummary = require('./routes/tasksummary');
var login = require('./routes/login');
var editevent = require('./routes/editevent');
var edittask = require('./routes/edittask');
var tester = require('./routes/tester');
var testing = require('./routes/testing');
// Example route
// var user = require('./routes/user');

var local_database_name = 'PlannerApp';
var local_database_uri  = 'mongodb://localhost/' + local_database_name;
// var heroku_database_uri = 'mongodb://<dbuser>:<dbpassword>@ds013918.mlab.com:13918/heroku_2j43lmsj?authMode=scram-sha1' || local_database_uri;
mongoose.connect(local_database_uri);


/*
// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
var uri =  "mongodb://heroku_2j43lmsj:6geip6jl2c4jcad3udhr6da0m9@ds013918.mongolab.com:13918/heroku_2j43lmsj";
MongoClient.connect(uri, function(err, db) {
   if(!err) {
    console.log("We are connected");
  }

});
*/
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/calendar', calendar.view);
app.get('/events', events.view);
app.get('/tasks', tasks.view);
app.get('/settings', settings.view);
app.get('/newtask', newtask.view);
app.get('/newevent', newevent.view);
app.get('/notifications', notifications.view);
app.get('/accountSettings', accountSettings.view);
app.get('/eventsummary', eventsummary.view);
app.get('/tasksummary', tasksummary.view);
app.get('/login', login.view);
app.get('/editevent', editevent.view);
app.get('/edittask', edittask.view);
app.get('/tester', tester.view)
app.get('/testing', testing.view)


app.post('/events', events.addEvent);
app.post('/events/:id/delete', events.deleteEvent);

app.post('/tasks', tasks.addTask);
app.post('/tasks/:id/delete', tasks.deleteTask);
app.post('/edittask/:id', edittask.edit);
app.post('/tasks/:id/namechange', tasks.nameChange);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

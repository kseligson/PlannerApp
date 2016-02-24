
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')
var mongoose = require('mongoose');

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

// Example route
// var user = require('./routes/user');

var local_database_name = 'peopleplanner';
var local_database_uri  = 'mongodb://localhost/' + local_database_name
var database_uri = process.env.MONGOLAB_URI || local_database_uri
mongoose.connect(database_uri);

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
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


app.post('/tasks', tasks.addTask);
app.post('/tasks', tasks.deleteTask);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

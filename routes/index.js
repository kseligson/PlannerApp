var data = require('../data.json');
var events = require('../events.json');
var tasks = require('../tasks.json');
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', data);
};
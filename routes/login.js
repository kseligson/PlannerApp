var data = require('../data.json');
/*
 * GET login page.
 */

exports.view = function(req, res){
  //controller code goes here
  res.render('login', data);
};

/*
 * GET home page.
 */

exports.view = function(req, res){
  var today = new Date();
  var month = today.getMonth();
  var date = today.getDate();

  switch(month) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
  }

  res.render('index', {
    'month': month,
    'date': date,
    'time': today.getHours() + ':' + today.getMinutes() + '////' + today.toString(),
    'button': [
      {
        'image': 'cal-icon.png',
        'caption': "Calendar",
        'link': 'calendar'
      },
      {
        'image': 'event-icon.png',
        'caption': "Today's Events",
        'link': 'events'
      },
      {
        'image': 'task-icon.png',
        'caption': "Today's Tasks",
        'link': 'tasks'
      },
      {
        'image': 'settings-icon.png',
        'caption': "Settings",
        'link': 'settings'
      }
    ]
  });
};
$(document).ready(function() {
	//page ready, init calendar
	$('#calendar').fullCalendar({
		//put options and callbacks here
		header: {
			left: 'today prev,next',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		},
		editable: true,
		events: [
  {
    "title": "All Day Event",
    "start": "2016-02-01"
  },
  {
    "title": "Long Event",
    "start": "2016-02-07",
    "end": "2016-02-10"
  },
  {
    "id": "999",
    "title": "Repeating Event",
    "start": "2016-02-09T16:00:00-05:00"
  },
  {
    "id": "999",
    "title": "Repeating Event",
    "start": "2016-02-16T16:00:00-05:00"
  },
  {
    "title": "Conference",
    "start": "2016-02-11",
    "end": "2016-02-13"
  },
  {
    "title": "Meeting",
    "start": "2016-02-12T10:30:00-05:00",
    "end": "2016-02-12T12:30:00-05:00"
  },
  {
    "title": "Lunch",
    "start": "2016-02-12T12:00:00-05:00"
  },
  {
    "title": "Meeting",
    "start": "2016-02-12T14:30:00-05:00"
  },
  {
    "title": "Happy Hour",
    "start": "2016-02-12T17:30:00-05:00"
  },
  {
    "title": "Dinner",
    "start": "2016-02-12T20:00:00"
  },
  {
    "title": "Birthday Party",
    "start": "2016-02-13T07:00:00-05:00"
  },
  {
    "title": "Click for Google",
    "url": "http://google.com/",
    "start": "2016-02-28"
  }
]
	});
});
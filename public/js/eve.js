$(document).ready(function() {
	//page ready, init event agenda view
	$('#events').fullCalendar({
		//put options and callbacks here
		header: {
			right: 'today prev,next'
		},

		defaultView: 'agendaDay'
	});
});
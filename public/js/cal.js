$(document).ready(function() {
	//page ready, init calendar
	$('#calendar').fullCalendar({
		//put options and callbacks here
		header: {
			left: 'today prev,next',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		},
		{
			url: '../../events.json',
			color: 'yellow',   // an option!
			textColor: 'black' // an option!
		}
	});
});
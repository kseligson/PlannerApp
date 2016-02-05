$(document).ready(function() {
	//page ready, init calendar
	$('#calendar').fullCalendar({
		//put options and callbacks here
		header: {
			left: 'today prev,next',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		}
	});
});
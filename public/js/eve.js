$(document).ready(function(){
	initializePage();
})

function initializePage() {
    function newEvent(data_json) {
        // We need to compute a display string for the date
        // Search 'toLocaleDateString' online for more details.

        console.log(data_json);
        // compose the HTML
        var new_html =
            '<div class="event-name">'+data_json['taskName']+'</div>'+
            '<div class="event-startdate">'+data_json['startDate']+'</div>'+
            '<div class="event-enddate">'+data_json['endDate']+'</div>'+
            '<div class="event-starttime">'+data_json['startTime']+'</div>'+
            '<div class="event-endtime">'+data_json['endDate']+'</div>'+
			'<div class="event-notes">'+data_json['taskNotes']+'</div>';

        // get the DIV to add content to
        var details_div = $('#event' + ' .details');
        // add the content to the DIV
        details_div.html(new_html);

        $('#events-container').appendTo(new_html); 
    }


	$('#submitbutnEvent').click(function(e) {
		console.log('clicked');


        var taskName = $('#new-event-form #taskName').val();
        var startDate = $('#new-event-form #startDate').val();
        var endDate = $('#new-event-form #endDate').val();
        var startTime = $('#new-event-form #startTime').val();
        var endTime = $('#new-event-form #endTime').val();
        var taskColor = $('#new-event-form #taskColor').val();
        var taskNotes = $('#new-event-form #taskNotes').val();
        var jsonEvent = {
            'taskName' : taskName,
            'startDate' : startDate,
            'endDate' : endDate,
            'startTime' : startTime,
            'endTime' : endTime,
            'taskColor' : taskColor,
            'taskNotes' : taskNotes
        };

		// issue the GET request
		$.get("events", newEvent);		
	});
}
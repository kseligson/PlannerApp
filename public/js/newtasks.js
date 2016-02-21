'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    function newTask(data_json) {
        // We need to compute a display string for the date
        // Search 'toLocaleDateString' online for more details.

        console.log(data_json);
        // compose the HTML
        var new_html =
            '<div class="task-name">'+data_json['name']+'</div>'+
            '<div class="task-date">'+data_json['date']+'</div>'+
            '<div class="task-time">'+data_json['time']+'</div>'+
            '<div class="task-notes">'+data_json['notes']+'</div>';

        // get the DIV to add content to
        var details_div = $('#task' + ' .details');
        // add the content to the DIV
        details_div.html(new_html);

        $('#tasks-container').appendTo(new_html); 
    }


	$('#submitbutn').click(function(e) {
		console.log('clicked');
		var name = $('#new-task-form #taskName').val();
		var date = $('#new-task-form #startDate').val();
		var time = $('#new-task-form #startTime').val();
		var color = $('#new-task-form #taskColor').val();
		var notes = $('#new-task-form #taskNotes').val();
		var json = {
			'name': name,
			'date':  date,
			'time': time,
			'color': color,
			'notes': notes,
		};

		// issue the GET request
		$.get("tasks", newTask);		
	});
}


'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
	var today = new Date();
	var month = today.getMonth();
	var date = today.getDate();
	var year = today.getFullYear();
	var hour = today.getHours();
	var greeting = "Hello";

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

  	switch(hour) {
  		case 5:
  		case 6:
  		case 7:
  		case 8:
  		case 9:
  		case 10:
  		case 11:
  			greeting = "Good morning";
  			break;
  		case 12:
  		case 13:
  		case 14:
  		case 15:
  		case 16:
  			greeting = "Good afternoon";
  			break;
  		case 17:
  		case 18:
  		case 19:
  		case 20:
  		case 21:
  		case 22:
  		case 23:
  		case 0:
  		case 1:
  		case 2:
  		case 3:
  		case 4:
  			greeting = "Good evening";
  			break;
  		default:
  			greeting = "Hello";
  			break;
  	}

  	$("#today").text(month + " " + date + ", " + year);
  	$("#greetingMessage").text(greeting);

  	var amtevents = 0;
  	var amttasks = 0;
    /*
  	$.getJSON( "../data.json", function() {
  		amttasks = data.tasks.length;

  	}.error(function(xhr) {
                    alert(xhr)
                })
  	);*/

    $.ajax({
            url: '../data.son',
            dataType: 'jsonp',
            success: function(data){
            amttasks = data.tasks.length;
             alert(data);
            }
          });

  	$("#todayEvents").text(amtevents);
 
  	$("#todayTasks").text(amttasks);

  	$(".navbar-brand").click(function(){
  		ga("send", "event", 'home w/ logo', 'click');
  	});

  	$("#home-link").click(function(){
  		ga("send","event",'home w/ menu','click');
  	});

  	$('#tasks-link').click(function(){
  		ga("send","event",'tasks','click');
  	});
}
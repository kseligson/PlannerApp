'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/* Declaring important variables */
var day = new Date();
var today = new Date();
var todayEvents = 0;
var data = {
  events: [
    {
      name: "Test Event",
      startTime: "21:00",
      startDate: "2016-03-07",
      eventColor: "#4E387E",
      location: "UCSD"
    },
    {
      name: "Second test",
      startTime: "21:00",
      startDate: "2016-03-07",
      location: "Disneyland",
      eventColor: "#2B547E"
    },
    {
      name: "7am Test",
      startTime: "07:00",
      startDate: "2016-03-07",
      eventColor: "#990012",
      location: "H&SS 1330"
    },
    {
      name: "7am Test 2",
      startTime: "07:00",
      startDate: "2016-03-06",
      eventColor: "#3EA055",
      location: "Tamarack"
    }
  ],
  sevenAM: [],
  eightAM: [],
  nineAM: [],
  tenAM: [],
  elevenAM: [],
  twelvePM:[],
  onePM: [],
  twoPM: [],
  threePM: [],
  fourPM: [],
  fivePM: [],
  sixPM: [],
  sevenPM: [],
  eightPM: [],
  ninePM: [],
  tenPM: [],
  elevenPM: []
};

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  updateDate(day);

  $('#left-nav').click(decreaseDay);
  $('#right-nav').click(increaseDay);
  $('#todayBtn').click(setToday);
  $('#submitBtnEvents').click(addEvent);
  $('#event-col').click(editEvent);

  showEvents(today);
}

function decreaseDay(e) {
  day.setDate(day.getDate() - 1);
  updateDate(day);
}

function increaseDay(e) {
  day.setDate(day.getDate() + 1);
  updateDate(day);
}

function setToday(e) {
  day.setMonth(today.getMonth());
  day.setDate(today.getDate());
  day.setFullYear(today.getFullYear());
  updateDate(day);
}

function updateDate(date) {
  $('#event-date').text(date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear());
  if(date.getMonth() == today.getMonth() && date.getDate() == today.getDate() && date.getFullYear() == today.getFullYear()) {
    $('#todayBtn').attr("disabled", "disabled");
  }
  else {
    $('#todayBtn').removeAttr("disabled");
  }
  showEvents(date);
}

function addEvent(e) {
  e.preventDefault();
  var eventName = $('#eventName').val();
  var startDate = $('#startDate').val();
  var startTime = $('#startTime').val();
  var endDate = $('#endDate').val();
  var endTime = $('#endTime').val();
  var color = $('#eventColor').val();
  var notes = $('#eventNotes').val();
  var location = $('#eventLocation').val();
  data.events.push({
    name: eventName,
    startDate: startDate,
    startTime: startTime,
    endDate: endDate,
    endTime: endTime,
    eventColor: color,
    eventNotes: notes,
    location: location
  });
  showEvents(today);
}

function showEvents(date) {
  clearConflicts();

  //Loop through all events to find time conflicts
  
  for(var i = 0; i < data.events.length; ++i) {
    //Find events that start on the currently selected day
    if((data.events[i].startDate.substring(0,4) == date.getFullYear()) && (data.events[i].startDate.substring(5,7) == (date.getMonth() + 1)) && (data.events[i].startDate.substring(8,10) == date.getDate())) {
      fillConflictsByStart(i);
    }

    //Find events that end on the currently selected day


    //Find events that may last for the entirety of the currently selected day
  }

  //Add events to calendar
  var columns = maxConflicts();
  var sevenAMstring = "<td id='time-col'>7am</td>";
  var eightAMstring = "<td id='time-col'>8am</td>";
  var nineAMstring = "<td id='time-col'>9am</td>";
  var tenAMstring = "<td id='time-col'>10am</td>";
  var elevenAMstring = "<td id='time-col'>11am</td>";
  var twelvePMstring = "<td id='time-col'>12pm</td>";
  var onePMstring = "<td id='time-col'>1pm</td>";
  var twoPMstring = "<td id='time-col'>2pm</td>";
  var threePMstring = "<td id='time-col'>3pm</td>";
  var fourPMstring = "<td id='time-col'>4pm</td>";
  var fivePMstring = "<td id='time-col'>5pm</td>";
  var sixPMstring = "<td id='time-col'>6pm</td>";
  var sevenPMstring = "<td id='time-col'>7pm</td>";
  var eightPMstring = "<td id='time-col'>8pm</td>";
  var ninePMstring = "<td id='time-col'>9pm</td>";
  var tenPMstring = "<td id='time-col'>10pm</td>";
  var elevenPMstring = "<td id='time-col'>11pm</td>";


  //Create events in calendar
  //7am
  if(data.sevenAM.length != 0) {
    for(var k = 0; k < data.sevenAM.length; ++k) {
      var index = data.sevenAM[k].id;
      sevenAMstring = sevenAMstring + "<td colspan='" + columns/data.sevenAM.length + "' id='event-col' style='background-color:" + data.events[index].eventColor + "; color: white'>" + data.events[index].name + "<br>" + data.events[index].location + "</td>"
    }
  }
  else sevenAMstring = sevenAMstring + "<td colspan='" + columns + "'></td>";

  //8am
  if(data.eightAM.length != 0) {
    for(var k = 0; k < data.eightAM.length; ++k) {
      var index = data.eightAM[k].id;
      eightAMstring = eightAMstring + "<td colspan='" + columns/data.eightAM.length + "' id='event-col' style='background-color:" + data.events[index].eventColor + "; color: white'>" + data.events[index].name + "<br>" + data.events[index].location + "</td>"
    }
  }
  else eightAMstring = eightAMstring + "<td colspan='" + columns + "'></td>";

  //9am
  if(data.nineAM.length != 0) {
    for(var k = 0; k < data.nineAM.length; ++k) {
      var index = data.nineAM[k].id;
      nineAMstring = nineAMstring + "<td colspan='" + columns/data.nineAMstring.length + "' id='event-col' style='background-color:" + data.events[index].eventColor + "; color: white'>" + data.events[index].name + "<br>" + data.events[index].location + "</td>"
    }
  }
  else nineAMstring = nineAMstring + "<td colspan='" + columns + "'></td>";

  //10am
  if(data.tenAM.length != 0) {
    for(var k = 0; k < data.tenAM.length; ++k) {
      var index = data.tenAM[k].id;
      tenAMstring = tenAMstring + "<td colspan='" + columns/data.tenAM.length + "' id='event-col' style='background-color:" + data.events[index].eventColor + "; color: white'>" + data.events[index].name + "<br>" + data.events[index].location + "</td>"
    }
  }
  else tenAMstring = tenAMstring + "<td colspan='" + columns + "'></td>";

  //11am
  if(data.elevenAM.length != 0) {
    for(var k = 0; k < data.elevenAM.length; ++k) {
      var index = data.elevenAM[k].id;
      elevenAMstring = elevenAMstring + "<td colspan='" + columns/data.elevenAM.length + "' id='event-col' style='background-color:" + data.events[index].eventColor + "; color: white'>" + data.events[index].name + "<br>" + data.events[index].location + "</td>"
    }
  }
  else elevenAMstring = elevenAMstring + "<td colspan='" + columns + "'></td>";

  //12pm
  if(data.twelvePM.length != 0) {
    for(var k = 0; k < data.twelvePM.length; ++k) {
      var index = data.twelvePM[k].id;
      twelvePMstring = twelvePMstring + "<td colspan='" + columns/data.twelvePM.length + "' id='event-col' style='background-color:" + data.events[index].eventColor + "; color: white'>" + data.events[index].name + "<br>" + data.events[index].location + "</td>"
    }
  }
  else twelvePMstring = twelvePMstring + "<td colspan='" + columns + "'></td>";

  //1pm
  if(data.onePM.length != 0) {
    for(var k = 0; k < data.onePM.length; ++k) {
      var index = data.onePM[k].id;
      onePMstring = onePMstring + "<td colspan='" + columns/data.onePM.length + "' id='event-col' style='background-color:" + data.events[index].eventColor + "; color: white'>" + data.events[index].name + "<br>" + data.events[index].location + "</td>"
    }
  }
  else onePMstring = onePMstring + "<td colspan='" + columns + "'></td>";

  //2pm
  if(data.twoPM.length != 0) {
    for(var k = 0; k < data.twoPM.length; ++k) {
      var index = data.twoPM[k].id;
      twoPMstring = twoPMstring + "<td colspan='" + columns/data.twoPM.length + "' id='event-col' style='background-color:" + data.events[index].eventColor + "; color: white'>" + data.events[index].name + "<br>" + data.events[index].location + "</td>"
    }
  }
  else twoPMstring = twoPMstring + "<td colspan='" + columns + "'></td>";

  //3pm
  if(data.threePM.length != 0) {
    for(var k = 0; k < data.threePM.length; ++k) {
      var index = data.threePM[k].id;
      threePMstring = threePMstring + "<td colspan='" + columns/data.threePM.length + "' id='event-col' style='background-color:" + data.events[index].eventColor + "; color: white'>" + data.events[index].name + "<br>" + data.events[index].location + "</td>"
    }
  }
  else threePMstring = threePMstring + "<td colspan='" + columns + "'></td>";

  //4pm
  if(data.fourPM.length != 0) {
    for(var k = 0; k < data.fourPM.length; ++k) {
      var index = data.fourPM[k].id;
      fourPMstring = fourPMstring + "<td colspan='" + columns/data.fourPM.length + "' id='event-col' style='background-color:" + data.events[index].eventColor + "; color: white'>" + data.events[index].name + "<br>" + data.events[index].location + "</td>"
    }
  }
  else fourPMstring = fourPMstring + "<td colspan='" + columns + "'></td>";

  //5pm
  if(data.fivePM.length != 0) {
    for(var k = 0; k < data.fivePM.length; ++k) {
      var index = data.fivePM[k].id;
      fivePMstring = fivePMstring + "<td colspan='" + columns/data.fivePM.length + "' id='event-col' style='background-color:" + data.events[index].eventColor + "; color: white'>" + data.events[index].name + "<br>" + data.events[index].location + "</td>"
    }
  }
  else fivePMstring = fivePMstring + "<td colspan='" + columns + "'></td>";

  //6pm
  if(data.sixPM.length != 0) {
    for(var k = 0; k < data.sixPM.length; ++k) {
      var index = data.sixPM[k].id;
      sixPMstring = sixPMstring + "<td colspan='" + columns/data.sixPM.length + "' id='event-col' style='background-color:" + data.events[index].eventColor + "; color: white'>" + data.events[index].name + "<br>" + data.events[index].location + "</td>"
    }
  }
  else sixPMstring = sixPMstring + "<td colspan='" + columns + "'></td>";

  //7pm
  if(data.sevenPM.length != 0) {
    for(var k = 0; k < data.sevenPM.length; ++k) {
      var index = data.sevenPM[k].id;
      sevenPMstring = sevenPMstring + "<td colspan='" + columns/data.sevenPMstring.length + "' id='event-col' style='background-color:" + data.events[index].eventColor + "; color: white'>" + data.events[index].name + "<br>" + data.events[index].location + "</td>"
    }
  }
  else sevenPMstring = sevenPMstring + "<td colspan='" + columns + "'></td>";

  //8pm
  if(data.eightPM.length != 0) {
    for(var k = 0; k < data.eightPM.length; ++k) {
      var index = data.eightPM[k].id;
      eightPMstring = eightPMstring + "<td colspan='" + columns/data.eightPM.length + "' id='event-col' style='background-color:" + data.events[index].eventColor + "; color: white'>" + data.events[index].name + "<br>" + data.events[index].location + "</td>"
    }
  }
  else eightPMstring = eightPMstring + "<td colspan='" + columns + "'></td>";

  //9pm
  if(data.ninePM.length != 0) {
    for(var k = 0; k < data.ninePM.length; ++k) {
      var index = data.ninePM[k].id;
      ninePMstring = ninePMstring + "<td colspan='" + columns/data.ninePM.length + "' id='event-col' style='background-color:" + data.events[index].eventColor + "; color: white'>" + data.events[index].name + "<br>" + data.events[index].location + "</td>"
    }
  }
  else ninePMstring = ninePMstring + "<td colspan='" + columns + "'></td>";

  //10pm
  if(data.tenPM.length != 0) {
    for(var k = 0; k < data.tenPM.length; ++k) {
      var index = data.tenPM[k].id;
      tenPMstring = tenPMstring + "<td colspan='" + columns/data.tenPM.length + "' id='event-col' style='background-color:" + data.events[index].eventColor + "; color: white'>" + data.events[index].name + "<br>" + data.events[index].location + "</td>"
    }
  }
  else tenPMstring = tenPMstring + "<td colspan='" + columns + "'></td>";

  //11pm
  if(data.elevenPM.length != 0) {
    for(var k = 0; k < data.elevenPM.length; ++k) {
      var index = data.elevenPM[k].id;
      elevenPMstring = elevenPMstring + "<td colspan='" + columns/data.elevenPM.length + "' id='event-col' style='background-color:" + data.events[index].eventColor + "; color: white'>" + data.events[index].name + "<br>" + data.events[index].location + "</td>"
    }
  }
  else elevenPMstring = elevenPMstring + "<td colspan='" + columns + "'></td>";

  //Change html to make these events appear on page
  $('#7am').html(sevenAMstring);
  $('#8am').html(eightAMstring);
  $('#9am').html(nineAMstring);
  $('#10am').html(tenAMstring);
  $('#11am').html(elevenAMstring);
  $('#12pm').html(twelvePMstring);
  $('#1pm').html(onePMstring);
  $('#2pm').html(twoPMstring);
  $('#3pm').html(threePMstring);
  $('#4pm').html(fourPMstring);
  $('#5pm').html(fivePMstring);
  $('#6pm').html(sixPMstring);
  $('#7pm').html(sevenPMstring);
  $('#8pm').html(eightPMstring);
  $('#9pm').html(ninePMstring);
  $('#10pm').html(tenPMstring);
  $('#11pm').html(elevenPMstring);
}

function clearConflicts() {
  //Clear conflict data from all arrays
  data.sevenAM = [];
  data.eightAM = [];
  data.nineAM = [];
  data.tenAM = [];
  data.elevenAM = [];
  data.twelvePM = [];
  data.onePM = [];
  data.twoPM = [];
  data.threePM = [];
  data.fourPM = [];
  data.fivePM = [];
  data.sixPM = [];
  data.sevenPM = [];
  data.eightPM = [];
  data.ninePM = [];
  data.tenPM = [];
  data.elevenPM = [];
}

function fillConflictsByStart(i) {
  //Find where the event starts
  if(data.events[i].startTime == "07:00") {
    data.sevenAM.push({id: i});
  }
  else if(data.events[i].startTime == "08:00") {
    data.eightAM.push({id: i});
  }
  else if(data.events[i].startTime == "09:00") {
    data.nineAM.push({id: i});
  }
  else if(data.events[i].startTime == "10:00") {
    data.tenAM.push({id: i});
  }
  else if(data.events[i].startTime == "11:00") {
    data.elevenAM.push({id: i});
  }
  else if(data.events[i].startTime == "12:00") {
    data.twelvePM.push({id: i});
  }
  else if(data.events[i].startTime == "13:00") {
    data.onePM.push({id: i});
  }
  else if(data.events[i].startTime == "14:00") {
    data.twoPM.push({id: i});
  }
  else if(data.events[i].startTime == "15:00") {
    data.threePM.push({id: i});
  }
  else if(data.events[i].startTime == "16:00") {
    data.fourPM.push({id: i});
  }
  else if(data.events[i].startTime == "17:00") {
    data.fivePM.push({id: i});
  }
  else if(data.events[i].startTime == "18:00") {
    data.sixPM.push({id: i});
  }
  else if(data.events[i].startTime == "19:00") {
    data.sevenPM.push({id: i});
  }
  else if(data.events[i].startTime == "20:00") {
    data.eightPM.push({id: i});
  }
  else if(data.events[i].startTime == "21:00") {
    data.ninePM.push({id: i});
  }

  //Find which spaces event occupies
}

function maxConflicts() {
  var conflicts = data.sevenAM.length;
  if(data.eightAM.length > conflicts) {
    conflicts = data.eightAM.length;
  }
  if(data.nineAM.length > conflicts) {
    conflicts = data.nineAM.length;
  }
  if(data.tenAM.length > conflicts) {
    conflicts = data.tenAM.length;
  }
  if(data.elevenAM.length > conflicts) {
    conflicts = data.elevenAM.length;
  }
  if(data.twelvePM.length > conflicts) {
    conflicts = data.twelvePM.length;
  }
  if(data.onePM.length > conflicts) {
    conflicts = data.onePM.length;
  }
  if(data.twoPM.length > conflicts) {
    conflicts = data.twoPM.length;
  }
  if(data.threePM.length > conflicts) {
    conflicts = data.threePM.length;
  }
  if(data.fourPM.length > conflicts) {
    conflicts = data.fourPM.length;
  }
  if(data.fivePM.length > conflicts) {
    conflicts = data.fivePM.length;
  }
  if(data.sixPM.length > conflicts) {
    conflicts = data.sixPM.length;
  }
  if(data.sevenPM.length > conflicts) {
    conflicts = data.sevenPM.length;
  }
  if(data.eightPM.length > conflicts) {
    conflicts = data.eightPM.length;
  }
  if(data.ninePM.length > conflicts) {
    conflicts = data.ninePM.length;
  }
  if(data.tenPM.length > conflicts) {
    conflicts = data.tenPM.length;
  }
  if(data.elevenPM.length > conflicts) {
    conflicts = data.elevenPM.length;
  }

  return conflicts;
}

function fillConflictsByEnd() {

}

function getTodayEvents() {
  todayEvents = 0;
  var todayString = today.getFullYear() + (today.getMonth() + 1) + today.getDate();
  var i;
  for(i = 0; i < data.events.length; ++i) {
    if(data.events[i].startDate == todayString) {
      ++todayEvents;
    }
  }
  return todayEvents;
}

function editEvent(e) {
  console.log("In editEvent()");
}
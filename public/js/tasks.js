'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
})

var day = new Date();
var today = new Date();

var data = {
    tasks: [
        {
            "id": "tester",
            "name": "Homework",
            "date": "Fri, 04/01/16",
            "time": "11:30",
            "notes": "Project is Due",
            "color": "#FCC31F",
            "repeat": "1",
            "remind": "true"
        },
         {
            "id": "tester2",
            "name": "Cleaning",
            "date": "03/07/16",
            "time": "11:30",
            "notes": "Project is Due",
            "color": "#FCC31F",
            "repeat": "1",
            "remind": "true"
        }
    ]
};

function initializePage() {
  
     $('.task-div').click(toggleNotes);
     $('.removebtn').click(removeTask);
     $('.editbtn').click(editTask);     
     $(".task-notes").hide();
     $('#submitBtnTasks').click(addTask);

     showTasks(today);
}

function toggleNotes() {
    var taskID = $(this).closest('.task-div').attr('id');

    var idNumber = taskID.substr('task'.length);
    var notes = '#notes'+idNumber;

    $(notes).slideToggle("fast");
}


function removeTask() {
    var taskID = $(this).closest('.task-div').attr('id');
    $("#"+taskID).hide();
}


function editTask() {
    var taskID = $(this).closest('.task-div').attr('id');
    var idNumber = taskID.substr('task'.length);
/*
    $.post('/edittask/'+idNumber, {id : idNumber} , function(){
            window.location.href = '/edittask';
    });*/
}

function addTask(e) {
        e.preventDefault();
        var rbool = false;
        var repeat = 0;
        var name = $('#new-task-form #taskName').val();
        var date = $('#new-task-form #startDate').val();
        var time = $('#new-task-form #startTime').val();
        var color = $('#new-task-form #priority').val();
        var notes = $('#new-task-form #taskNotes').val();

        if ($('#new-task-form #taskRemind').is(":checked")) {
              // it is checked
              rbool=true;
        }

        if($('#new-task-form #repeatDaily').is(":checked")) {
            repeat = 1;
        }
        else if($('#new-task-form #repeatWeekly').is(":checked")) {
            repeat = 2;
        }
        else if($('#new-task-form #repeatCustom').is(":checked")) {
            repeat = 3;
        }
        var seconds = new Date().getTime()
        var id = name + date + time + color + notes + seconds;

        data.tasks.push({        //add the employee
            "name": name,
            "date": date,
            "time": time,
            "color": color,
            "notes": notes,
            "repeat": repeat,
            "remind": rbool,
        });

      if( repeat == 2) {
        setTimeout(function() { 
            var now = new Date(date);
            now.setDate(now.getDate()+7);

            date_obj = new Date(now);
            options = {
              weekday: "short",
              year: "2-digit",
              month: "numeric",
              day: "numeric"
            };
            display_date = date_obj.toLocaleDateString('en-US', options);


            data.tasks.push({        //add the employee
              "name": name,
              "date": display_date,
              "time": time,
              "color": color,
              "notes": notes,
              "repeat": repeat,
              "remind": rbool
            });
        }, 5000);
      }
      else if(repeat == 1) {
        setTimeout(function() { 
            var now = new Date(date);
            now.setDate(now.getDate()+1);

            date_obj = new Date(now);
            options = {
              weekday: "short",
              year: "2-digit",
              month: "numeric",
              day: "numeric"
            };
            display_date = date_obj.toLocaleDateString('en-US', options);


            data.tasks.push({        //add the employee
              "name": name,
              "date": display_date,
              "time": time,
              "color": color,
              "notes": notes,
              "repeat": repeat,
              "remind": rbool
            });
        }, 5000);
      }

  showTasks(today);
}


function showTasks(date) {

    var todaytitle= '<div style="font-size: 200%; color:#1899D6">TODAY</div>';
    var futuretitle= '<div style="font-size: 200%; color:#1899D6">FUTURE</div>';
    var pasttitle= '<div style="font-size: 200%; color:#1899D6">PAST</div>';

    $('#todayTasks').html(todaytitle);
    $('#pastTasks').html(pasttitle);
    $('#futureTasks').html(futuretitle);

    for(var i = 0; i < data.tasks.length; ++i) {
        
        var date_obj = new Date(data.tasks[i].date);
        console.log(date_obj);
        console.log(date_obj.getDate());
        console.log(today.getDate());
        console.log(date_obj.getDate() ==today.getDate());
        console.log(date_obj.getMonth() ==today.getMonth());
        console.log(date_obj.getYear() ==today.getYear());


        if(date_obj.getDate() ==today.getDate() && date_obj.getMonth() ==today.getMonth() && date_obj.getYear() ==today.getYear()) {
            var newtaskhtml = 
            '<div class="task-div" id="task'+ data.tasks[i].id +'" style="border-color: '+ data.tasks[i].color + ';" >'+
            '<div class="main-task" style="color:'+data.tasks[i].color +';"> <div class="task-name" style="width: 50%; display: inline-block;">'+data.tasks[i].name+'</div>'+
                '<div class="removebtn">'+
                    '<button type="button" class="btn btn-round" style="background-color:transparent; color:'+data.tasks[i].color+';" id="remove'+data.tasks[i].id+'">'+
                        '<span class="glyphicon glyphicon-remove"></span>'+
                    '</button>'+
                '</div>'+
                '<div class="editbtn">'+
                    '<button type="button" class="btn btn-round" style="background-color:transparent; color:'+data.tasks[i].color+';" id="edit'+data.tasks[i].id+'">'+
                        '<span class="glyphicon glyphicon-pencil"></span>'+
                    '</button>'+
                '</div>'+
            '</div>'+
            '<div class="task-due">Due on <strong>'+data.tasks[i].date+'</strong> at <strong>'+data.tasks[i].time+'</strong></div>'+
            '<div class="task-notes" id="notes'+data.tasks[i].id+'">'+data.tasks[i].notes+'</div>'+
        '</div>';

        $('#todayTasks').append(newtaskhtml);

        }
        else if(date_obj<today) {


            var newtaskhtml = 
            '<div class="task-div" id="task'+ data.tasks[i].id +'" style="border-color: '+ data.tasks[i].color + ';" >'+
            '<div class="main-task" style="color:'+data.tasks[i].color +';"> <div class="task-name" style="width: 50%; display: inline-block;">'+data.tasks[i].name+'</div>'+
                '<div class="removebtn">'+
                    '<button type="button" class="btn btn-round" style="background-color:transparent; color:'+data.tasks[i].color+';" id="remove'+data.tasks[i].id+'">'+
                        '<span class="glyphicon glyphicon-remove"></span>'+
                    '</button>'+
                '</div>'+
                '<div class="editbtn">'+
                    '<button type="button" class="btn btn-round" style="background-color:transparent; color:'+data.tasks[i].color+';" id="edit'+data.tasks[i].id+'">'+
                        '<span class="glyphicon glyphicon-pencil"></span>'+
                    '</button>'+
                '</div>'+
            '</div>'+
            '<div class="task-due">Due on <strong>'+data.tasks[i].date+'</strong> at <strong>'+data.tasks[i].time+'</strong></div>'+
            '<div class="task-notes" id="notes'+data.tasks[i].id+'">'+data.tasks[i].notes+'</div>'+
        '</div>';
        
        $('#pastTasks').append(newtaskhtml);

        
        }
        else if(date_obj>today) {


            var newtaskhtml = 
            '<div class="task-div" id="task'+ data.tasks[i].id +'" style="border-color: '+ data.tasks[i].color + ';" >'+
            '<div class="main-task" style="color:'+data.tasks[i].color +';"> <div class="task-name" style="width: 50%; display: inline-block;">'+data.tasks[i].name+'</div>'+
                '<div class="removebtn">'+
                    '<button type="button" class="btn btn-round" style="background-color:transparent; color:'+data.tasks[i].color+';" id="remove'+data.tasks[i].id+'">'+
                        '<span class="glyphicon glyphicon-remove"></span>'+
                    '</button>'+
                '</div>'+
                '<div class="editbtn">'+
                    '<button type="button" class="btn btn-round" style="background-color:transparent; color:'+data.tasks[i].color+';" id="edit'+data.tasks[i].id+'">'+
                        '<span class="glyphicon glyphicon-pencil"></span>'+
                    '</button>'+
                '</div>'+
            '</div>'+
            '<div class="task-due">Due on <strong>'+data.tasks[i].date+'</strong> at <strong>'+data.tasks[i].time+'</strong></div>'+
            '<div class="task-notes" id="notes'+data.tasks[i].id+'">'+data.tasks[i].notes+'</div>'+
        '</div>';

        $('#futureTasks').append(newtaskhtml);
        }
        
   }
}
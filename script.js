$(document).ready(function(){

    var clock = document.getElementById('clock');
      
      function updateTime () {
        var now = moment();
        var humanReadable = now.format('hh:mm:ssA');
        console.log('humanReadable');
        clock.textContent = humanReadable
      }

      setInterval(updateTime, 1000);
      updateTime();


    
       

$(".saveBtn").on("click", function(){
    var activity = $(this).siblings(".description").val().trim()
    var hour = $(this).parent().attr("id")
    console.log(hour)
    console.log(activity)
    console.log(localStorage)

    localStorage.setItem(hour, activity)
    localStorage.getItem(hour, activity)
});

$("#hour-8 .description").val(localStorage.getItem("hour-8"))
$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-1 .description").val(localStorage.getItem("hour-13"))
$("#hour-2 .description").val(localStorage.getItem("hour-14"))
$("#hour-3 .description").val(localStorage.getItem("hour-15"))
$("#hour-4 .description").val(localStorage.getItem("hour-16"))
$("#hour-5 .description").val(localStorage.getItem("hour-17"))

document.getElementById('hour').value = activity;
});
const colorCode = document.getElementsByClassName("colorCode");

var currentHour = date.getHours();
$('.colorCode').each(function(){
    var val = parseInt($(this).prop('id'));
    if (val > currentHour && val < currentHour+6){
        $(this).css('background-color', 'Grey');
    } else if(val < currentHour && val > currentHour-6){
        $(this).css('background-color', 'Red');
    }else if(val === currentHour){
        $(this).css('background-color', 'Blue');
    }else{
        $(this).css('background-color', 'Yellow');
    }
    
    
});



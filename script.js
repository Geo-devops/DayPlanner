// identify hours of work 9AM-5PM
// create variables 
var workHours = []; 
var availableHours = {};
// moment().year(year).month(month).date(day)
var day = moment();
var currentTime = m.hour();

// Need clock to track current day time
function clock() { 
    var dateString = moment().format('MMMM Do YYYY, h:mm:ss a');
     $('#currentDay').html(dateString);
}

// clock times and areas to schedule tasks

for (var hour = 9; hour < 18;) {
    workHours.push(moment({hour}).format());
    // need to append
    $('.container').append()

}

// 1 hour increments for scheduling on hour
$('time-block').each(function() {
$(this).find('.text-area').val(availableHours)


}
// how to save to local storage

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



// 1 hour increments for scheduling on hour

// use moment JS library to find code 
// how to save to local storage

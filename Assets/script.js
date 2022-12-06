// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});


// this example is best to do static element vs dynamic
// time/date
// save user entry to local storage
// if current time, block is red, if future time, green, if past time, gray (similar to timer from quiz, checking every second)


function init (){
// put date on page (and maybe clock)
// start interval
// checking time for adjusting timeblocks color
// check local storage to see if we need to save anything on timeblocks
// attach eventListeners to all buttons
// best practice - keep variables where you need them as opposed to all being globally scoped
var today = dayjs().format("MMM DD, YYYY hh:mm:ss a")
$("#currentDay").text(today);
startTimer();
}

function startTimer(){
  var clockInterval = setInterval(function(){
    var now = dayjs();
    var today = now.format("MMM DD, YYYY hh:mm:ss a");
    var currentHour = now.hour();
    // current hour to check against blocks
    console.log(currentHour);
$("#currentDay").text(today);
  },1000);
}

init();


// go to html and finish off other timeblocks
// as this runs, loop through timeblocks, check (id, id should be military, set id as 12, 1, 3, set a class)
// queryselectorall(class of timeblock), if id is less, its past, if its === its current, if its > its future
// add event listener to 
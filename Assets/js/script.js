// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. --> IS THIS REFERRING TO $() AROUND FUNCTION ON LINE 25?

// jQuery
var pastEl = $(".past"); // 9 AM
var presentEl = $(".present"); // 10 AM
var futureEl = $(".future"); // 11 AM
var timeBlock = document.querySelectorAll(".time-block");
// var hourNine = $("#9");
// var hourTen = $("#10");
// var hourEleven = $("#11");
// var hourTwelve = $("#12");
// var hourThirteen = $("#13");
// var hourFourteen = $("#14");
// var hourFifteen = $("#15");
// var hourSixteen = $("#16");
// var hourSeventeen = $("#17");
var textAreaEl = document.querySelectorAll(".description");
var saveButton = document.querySelectorAll(".btn");
var today = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");
var currentHour = dayjs().hour();
var userEntries = {};

$(function saveUserInput() {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage? 3rd
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time? 2nd
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this? 4th
  //
  // TODO: Add code to display the current date in the header of the page. 1st √
});

// FUNCTION TO UPDATE COLOR BLOCK--SHOULD THIS BE RUNNING WITH TIMER/CLOCK?

for (var i = 0; i < timeBlock.length; i++)
  if (timeBlock[i] < currentHour) {
    timeBlock[i].addClass(pastEl);

    console.log(timeBlock);
  } else if (timeBlock[i] === currentHour) {
    timeBlock[i].addClass(presentEl);

    console.log(timeBlock);
  } else if (timeBlock[i] > currentHour) {
    timeBlock[i].addClass(futureEl);

    console.log(timeBlock);
  }

//MY CODE/PSEUDOCODE

// this example is best to do static element vs dynamic
// time/date
// save user entry to local storage
// if current time, block is red, if future time, green, if past time, gray (similar to timer from quiz, checking every second)
// go to html and finish off other timeblocks √
// as this runs, loop through timeblocks, check (id, id should be military, set id as 12, 1, 3, set a class)
// queryselectorall(class of timeblock), if id is less, its past, if its === its current, if its > its future
// add event listener to save button √
// put date/time on page √
// start interval √
// checking time for adjusting timeblocks color
// check local storage to see if we need to save anything on timeblocks
// attach eventListeners to all buttons
// best practice - keep variables where you need them as opposed to all being globally scoped

// FUNCTIONS

function startTimer() {
  setInterval(function () {
    var today = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");
    var currentHour = dayjs().hour();
    // current hour to check against blocks
    console.log(currentHour);
    $("#currentDay").text(today);
  }, 1000);
}

startTimer();
// saveButton.addEventListener("click", saveUserInput);

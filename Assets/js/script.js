// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. --> IS THIS REFERRING TO $() AROUND FUNCTION ON LINE 25?

//MY PSEUDOCODE

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

// jQuery
var pastEl = $(".past"); // 9 AM
var presentEl = $(".present"); // 10 AM
var futureEl = $(".future"); // 11 AM
var timeBlockEl = $(".time-block");
var hourNine = $("#hour-9");
var hourTen = $("#hour-10");
var hourEleven = $("#hour-11");
var hourTwelve = $("#hour-12");
var hourThirteen = $("#hour-13");
var hourFourteen = $("#hour-14");
var hourFifteen = $("#hour-15");
var hourSixteen = $("#hour-16");
var hourSeventeen = $("#hour-17");
var today = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");
var currentHour = dayjs().hour();
var hourTimeNumber = [];

for (var i = 0; i < timeBlockEl.length; i++) {
  var elementID = timeBlockEl[i].getAttribute("id");
  if (elementID.length === 6) hourTimeNumber.push(parseInt(elementID[5]));
  if (elementID.length === 7)
    hourTimeNumber.push(parseInt(elementID[5] + elementID[6]));
}

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage? 3rd √
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time? 2nd √
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this? 4th
  //
  // TODO: Add code to display the current date in the header of the page. 1st √
});

// FUNCTION TO UPDATE COLOR BLOCK--SHOULD THIS BE RUNNING WITH TIMER/CLOCK? -- HOW DO I KNOW IF THIS IS WORKING?

function checkTime() {
  for (var i = 0; i < hourTimeNumber.length; i++)
    if (hourTimeNumber[i] < currentHour) {
      timeBlockEl[i].classList.add("past");
    } else if (hourTimeNumber[i] == currentHour) {
      timeBlockEl[i].classList.add("present");
    } else if (hourTimeNumber[i] > currentHour) {
      timeBlockEl[i].classList.add("future");
    }
}

// FUNCTION TO GET FROM LOCAL STORAGE AND DISPLAY USER INPUT ON TEXTAREA

function renderUserInput() {
// timeBlockEl textarea - child element

// post data into textarea
for (var i = 0; i < timeBlockEl.length; i++) {
  var key = timeBlockEl[i].getAttribute("id");
  var value = localStorage.getItem(key);
timeBlockEl[i].children[1].innerText = value;
}
}
//

// FUNCTION TO SAVE USER INPUT ON TEXTAREA

function saveUserInput() {
  var value = $(this).siblings(".description").val();
  var key = $(this).parent().attr("id");
  localStorage.setItem(key, value);
}

// TIME INTERVAL FUNCTION

setInterval(function () {
  var today = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");
  $("#currentDay").text(today);
}, 1000);

$(".saveBtn").on("click", saveUserInput);

checkTime();
renderUserInput();

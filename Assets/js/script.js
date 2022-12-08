// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. 

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
var timeBlockEl = $(".time-block");
var today = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");
var currentHour = dayjs().hour();
var hourTimeNumber = [];

for (var i = 0; i < timeBlockEl.length; i++) {
  var elementID = timeBlockEl[i].getAttribute("id");
  if (elementID.length === 6) hourTimeNumber.push(parseInt(elementID[5]));
  if (elementID.length === 7)
    hourTimeNumber.push(parseInt(elementID[5] + elementID[6]));
}


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

  for (var i = 0; i < timeBlockEl.length; i++) {
    var key = timeBlockEl[i].getAttribute("id");
    var value = localStorage.getItem(key);
    timeBlockEl[i].children[1].innerText = value;
  }
}

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

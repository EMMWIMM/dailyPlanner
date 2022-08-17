var currentDay = document.getElementById("currentDay");
var task = document.querySelector(".description");
var nineAM = document.getElementById("nineAM");
var tenAM = document.getElementById("tenAM");
var elevenAM = document.getElementById("elevenAM");
var noon = document.getElementById("noon");
var onePM = document.getElementById("onePM");
var twoPM = document.getElementById("twoPM");
var threePM = document.getElementById("threePM");
var fourPM = document.getElementById("fourPM");
var fivePM = document.getElementById("fivePM");
var sixPM = document.getElementById("sixPM");
var sevenPM = document.getElementById("sevenPM");
var eightPM = document.getElementById("eightPM");
var ninePM = document.getElementById("ninePM");

var nineAMbtn = document.getElementById("nineAMbtn");
var tenAMbtn = document.getElementById("tenAMbtn");
var elevenAMbtn = document.getElementById("elevenAMbtn");
var noonBtn = document.getElementById("noonBtn");
var onePMbtn = document.getElementById("onePMbtn");
var twoPMbtn = document.getElementById("twoPMbtn");
var threePMbtn = document.getElementById("threePMbtn");
var fourPMbtn = document.getElementById("fourPMbtn");
var fivePMbtn = document.getElementById("fivePM");
var sixPMbtn = document.getElementById("sixPMbtn");
var sevenPMbtn = document.getElementById("sevenPMbtn");
var eightPMbtn = document.getElementById("eightPMbtn");
var ninePMbtn = document.getElementById("ninePMbtn");
var today = new Date();
var hour = today.getHours();
var minutes = today.getMinutes();
var amPm = " am"



setColor();
initializeLocalStorage();
renderTasksToPage();


// $("currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm a"));
// console.log(today);
currentDay.textContent= today;
// set current time and date counter

function setColor(){
  console.log('setColor');
  // if( hours == 1 && amPm == " pm"){
  //   document.onePM.classname = "present";
  // }
  // else if (hours <= 1 || amPm == " am") {
  //   document.onePM.classname = "past";
  // }
  // else {
  //   document.onePM.classname = "future";
  // }

  var hourDescs = document.getElementsByClassName("description");
  for(let i = 0; i < hourDescs.length; ++i){
    console.log(hourDescs[i].id);
    var offset = 9;
    if(hourDescs[i].id.substring(1) < hour){
        hourDescs[i].classList.add('past');
    } else if(hourDescs[i].id.substring(1) == hour){
        hourDescs[i].classList.add('present')
    } else {
        hourDescs[i].classList.add('future')
    }
  }
}
var testTasks = ['','','','','',
            'LUNCH', 'nap','work','go home', 'play games', 'eat dinner', 'go to sleep']
function renderTasksToPage(){
  console.log('renderTasksToPage');
  var tasks = localStorage.getItem('tasks');
  var hourDescs = document.getElementsByClassName("description");
    for(let i = 0; i < hourDescs.length; ++i){
      hourDescs[i].value = tasks[i];
    }

}

function initializeLocalStorage(){
  console.log("initializeLocalStorage");
  //see if there are 'tasks' in localStorage

  //if not create array with '' for each hours
  var emptyTasks = new Array(document.getElementsByClassName("description").length)
  localStorage.setItem("tasks", testTasks);
  console.log(emptyTasks.length);
}

var tempTasks = localStorage.getItem("tasks");
function storeTask(id){

  //do stuff
  console.log('element('+id+') value = '+document.getElementById(id).value);
  tempTasks [id.substring(1)-9] = document.getElementById(id).value;

  localStorage.setItem("tasks", tempTasks)


}


// change color of input feilds, .past/.present/.future

// save tasks in local storage

// spit tasks back out from local storage on page reload



// OPTIONAL: make pin button change color when task is pinned

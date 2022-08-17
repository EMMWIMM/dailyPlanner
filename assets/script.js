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
var hours = today.getHours();
var minutes = today.getMinutes();
var amPm = " am"

// $("currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm a"));
// console.log(today);
// currentDay.textContent= today;
// set current time and date counter






function setInterval(){
if(hours > 12){
  hours = hours-12;
  amPm = " pm"
}}

function setColor(){
  if( hours == 1 && amPm == " pm"){
    document.onePM.classname = "present";
  }
  else if (hours <= 1 || amPm == " am") {
    document.onePM.classname = "past";
  }
  else {
    document.onePM.classname = "future";
  }
}
// change color of input feilds, .past/.present/.future

// save tasks in local storage

// spit tasks back out from local storage on page reload



// OPTIONAL: make pin button change color when task is pinned

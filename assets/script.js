var currentDay = document.getElementById("currentDay");
var task = document.querySelector(".description");
var h9 = document.getElementById("h9");
var h10 = document.getElementById("h10");
var h11 = document.getElementById("h11");
var h12 = document.getElementById("h12");
var h13 = document.getElementById("h13");
var h14 = document.getElementById("h14");
var h15 = document.getElementById("h15");
var h16 = document.getElementById("h16");
var h17 = document.getElementById("h17");
var h18 = document.getElementById("h18");
var h19 = document.getElementById("h19");
var h20 = document.getElementById("h20");
var h21 = document.getElementById("h21");

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
var taskList = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]



setColor();
renderTasksToPage();

currentDay.textContent= today;


function setColor(){
  console.log('setColor');
  var hourDescs = document.getElementsByClassName("description");
  for(let i = 0; i < hourDescs.length; ++i){
    console.log(hourDescs[i].id);

    if(hourDescs[i].id.substring(1) < hour){
        hourDescs[i].classList.add('past');
    } else if(hourDescs[i].id.substring(1) == hour){
        hourDescs[i].classList.add('present')
    } else {
        hourDescs[i].classList.add('future')
    }
  }
}

function renderTasksToPage(){
  console.log('renderTasksToPage');
  var tasks = localStorage.getItem('tasks');
  var taskList = JSON.parse(localStorage.getItem('tasks'));
  var hourDescs = document.getElementsByClassName("description");
    for(let i = 0; i < hourDescs.length; ++i){
      hourDescs[i].value = taskList[i];
    }

}

function initializeLocalStorage(){
  console.log("initializeLocalStorage");
  var emptyTasks = JSON.stringify(taskList)
  localStorage.setItem("tasks", emptyTasks);
  console.log(emptyTasks.length);
}

var tempTasks = localStorage.getItem("tasks");

function storeTask(id){
  console.log('element('+id+') value = '+document.getElementById(id).value);
  taskList[id.substring(1)-9] = document.getElementById(id).value;
  initializeLocalStorage();
}

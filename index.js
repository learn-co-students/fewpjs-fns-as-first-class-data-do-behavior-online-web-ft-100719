/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
const militaryTime = "15:01";
const newTime = militaryTime.split(':')
const stringTime = newTime[0]+newTime[1]
const time = parseInt(stringTime)
function greet(time) {
  if (time < 1200){
    return "Good Morning";
  }
  else if (time > 1200 && time < 1700) {
    return "Good Afternoon";
  }
  else if (time > 1700) {
    return "Good Evening";
  }
}


/* Write your implementation of displayMessage() */

function displayMessage(msg) {
document.getElementById("greeting").innerText = msg;
}
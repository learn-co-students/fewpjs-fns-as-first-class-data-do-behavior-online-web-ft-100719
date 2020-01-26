/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  var time_int = time.split(":")[0]
  if (time_int < 12){
    return "Good Morning"
  } else if (time_int > 12 && time_int < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  document.getElementById("greeting").innerText = string;
}

/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time_str) {
  const input_time = time_str.split(':');
  const input_hour = parseInt(input_time[0]);
  
  if (input_hour < 12) 
  {
    return "Good Morning"
  }
  else if ((input_hour >= 12) && (input_hour <= 17))
  {
    return "Good Afternoon"
  }
  else
  {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(msg) {
  
  let gr = document.getElementById("greeting");
  gr.innerText = msg
}
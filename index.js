/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time_string) {
  let hour_min = time_string.split(':').join('');
  let time_int = parseInt(hour_min, 10);
  if (time_int < 1200) {
    return 'Good Morning';
  } else if (time_int < 1700) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  let greeting = document.getElementById("greeting");
  greeting.innerText = message;
}
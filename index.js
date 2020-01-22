/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  const time_parts = time.split(":");
  const hour = parseInt(time_parts[0]);
  if (hour >= 12 && hour <= 17) {
    return "Good Afternoon";
  } else if (hour >= 17) {
    return "Good Evening";
  } else {
    return "Good Morning";
  }
}

function displayMessage(message) {
  const greeting = document.getElementById('greeting');
  greeting.innerText = message;
}
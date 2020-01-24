/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  const hour = parseInt(timeString.split(':')[0]);
  if (hour < 12) {
    return 'Good Morning'
  }else if (hour < 17) {
    return 'Good Afternoon'
  }else if (hour <= 24) {
    return 'Good Evening'
  } else return timeString
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  greeting = document.getElementById('greeting');
  greeting.innerText = message;
}
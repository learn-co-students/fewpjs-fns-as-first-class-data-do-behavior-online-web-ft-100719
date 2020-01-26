/* Given Code, don't edit */

function handleClick(e) {
    const timeString = document.getElementById('time').value
    displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
    const time = parseInt(timeString);
    if (time < 12) return "Good Morning";
    if (time <= 17 && time >= 12) return "Good Afternoon";
    return "Good Evening";
}

/* Write your implementation of displayMessage() */
function displayMessage(string) {
    document.querySelector('#greeting').innerText = string
}
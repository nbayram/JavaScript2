'use strict';

{
  // Write a function that adds the current time to the webpage.
  // Make sure it's written in the HH:MM:SS notation (hour, minute, second).
  // Hint: use setInterval() to make sure the time stays current.

  function updateClock() {
    var currentTime = new Date();

    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();

    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    // Compose the string for display
    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;

    // Update the time display
    document.getElementById("clock").firstChild.nodeValue = currentTimeString;
  }

  // Have the function execute when it's loading in the browser
  window.setInterval(updateClock, 1000);

}


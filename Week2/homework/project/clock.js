'use strict';

{
  // Declarations
  const down = document.getElementById('down');
  const up = document.getElementById('up');
  const number = document.getElementById('number');
  const play = document.getElementById('play');
  const pause = document.getElementById('pause');
  const clock = document.getElementById('clock');
  let i = parseInt(number.textContent);
  let key = false; // It use as a control
  let interval; // It is a variable that assign to setInterval 

  // Down button function
  down.addEventListener('click', () => {
    if (key === false) {
      if (i > 0) {
        number.textContent = --i;
      }
      setWatch();
    }
  });

  // Up button function
  up.addEventListener('click', () => {
    if (key === false) {
      if (i < 60) {
        number.textContent = ++i;
      }
      setWatch();
    }
  });

  // Set the watch like that '00:00';
  function setWatch() {
    clock.textContent = `${i < 10 ? '0' + i : i}:00`;
  }

  // Execute function that inside the play button function
  function animateWatch() {

    // Seperate string as minutes and seconds and return as a array
    const time = clock.textContent.split(':');

    // Left side(minutes) is first element of the array. Use parseInt for integer.
    let minutes = parseInt(time[0]);

    // Right side(seconds) is second elemet of the array. Use parseInt for integer.
    let seconds = parseInt(time[1]);

    let allSeconds = (minutes * 60) + seconds;
    --allSeconds;

    if (allSeconds === 0) {
      clock.textContent = 'Time\'s up!';
      clearInterval(interval);

      // After the clearInterval, use key as a false value for can restart play function.
      key = false;
    } else {
      minutes = Math.floor(allSeconds / 60);
      seconds = allSeconds % 60;
      clock.textContent = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }
  };

  // Play button function
  play.addEventListener('click', () => {
    if (key === false) {
      interval = setInterval(() => {
        animateWatch();
      }, 1000);

      // While setInterval execute, use key as a true value for can not restart play function
      key = true;
    }
  });

  // Pause button function
  pause.addEventListener('click', () => {
    clearInterval(interval);

    // Use key as a false value for can restart play function
    key = false;
  });
}
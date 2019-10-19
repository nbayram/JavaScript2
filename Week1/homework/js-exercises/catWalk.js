'use strict';

{
  // Create a variable to store a reference to the img.
  let image = document.getElementsByTagName('img')[0];

  // Assign variables to source of images
  const imageCatWalk = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
  const imageCatDance = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424';

  // Change the style of the img to have a "left" of "0px",
  // So that it starts at the left hand of the screens.
  let loc = 0; // The left value returns px. A variable is defined to be used as a number.
  image.style.left = loc + 'px';


  let walkComment; // The clearInterval function calls the setInterval function. Therefore, setInterval is assigned a variable.
  let key = true; // The key variable is used as the switch in the electrical circuit. The key variable is used as the boolean to exit the if statement and enter the next if statement.
  function catWalk() { // Create a function called catWalk()
    loc += 10; // that moves the cat 10 pixels to the right
    image.style.left = loc + "px"; // of where it started, by changing the "left" style property.


    // keep it dancing for 5 seconds, and then replace the img with the original image and have it continue the walk.
    if (key && loc >= (innerWidth - image.width) / 2) { // When the cat reaches the middle of the screen,
      window.clearInterval(walkComment);
      image.src = imageCatDance; // replace the img with an image of a cat dancing(use this URL: https://tenor.com/StFI.gif),
      setTimeout(function () {
        image.src = imageCatWalk;
        walkComment = setInterval(catWalk, 50); // The clearInterval function calls the setInterval function. Therefore, setInterval is assigned a variable.
      }, 5000);
      key = false;
    }


    //So they should keep walking from left to right across the screen, forever and ever.
    // The cat return to 0 as soon as its nose reaches the right side!
    if (loc >= (innerWidth - image.width)) { // When the cat reaches the right - hand of the screen
      loc = 0; // restart them at the left hand side("0px")
      key = true;
    }
  }

  // Call that function every 50 milliseconds.Your cat should now be moving across the screen from left to right.Hurrah!
  walkComment = setInterval(catWalk, 50);
}








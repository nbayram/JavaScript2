'use strict';

{
  // Inside a JavaScript file, called hijackGoogleLogo.js
  // create a function called hijackGoogleLogo
  const hijackGoogleLogo = () => {

    // Find out how to select the element that contains the Google logo
    // store it in a variable
    const logo = document.getElementById('hplogo');

    // Modify the source and sourceset of the logo
    // So that it's replaced by the HackYourFuture logo instead
    logo.srcset = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
  }
  hijackGoogleLogo();
}
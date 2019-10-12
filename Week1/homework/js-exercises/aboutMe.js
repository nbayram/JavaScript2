'use strict';

{

  // (In the JavaScript) Change the body tag's style
  // so it has a font-family of "Arial, sans-serif".
  const body = document.querySelector('body');
  body.style.fontFamily = "Arial, sans-serif";

  // (In the JavaScript) Replace each of the spans 
  // (nickname, fav-food, hometown) with your own information.
  const nickname = document.getElementById('nickname');
  const favFood = document.getElementById('fav-food');
  const hometown = document.getElementById('hometown');

  nickname.textContent = 'Nurullah';
  favFood.textContent = 'Kebap';
  hometown.textContent = 'Zutphen';

  // Iterate through each li and change the class to "list-item".
  const ul = document.getElementsByTagName('ul');
  for (let elm of ul) {
    elm.className += 'list-item';
  }

  // Create a new img element and set its src attribute to a picture of you.
  const img = document.createElement('img');
  img.src = 'https://avatars3.githubusercontent.com/u/51795777?s=400&u=a1a686aac40957d1ee7d2986d90b083cd2436c7c&v=4';

  // Append that element to the page.
  body.appendChild(img);
}
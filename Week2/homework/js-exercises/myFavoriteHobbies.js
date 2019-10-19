'use strict';

{
  const myHobbies = [
    'Meditation',
    'Reading',
    'Programming',
    'Hanging out with friends',
    'Going to the gym',
  ];

  // Write a program that outputs each of these inside an HTML file
  function createList(hobbies) {

    const ul = document.createElement('ul');
    document.body.appendChild(ul);

    // Use the map and / or forEach function to put each hobby into a list item
    hobbies.forEach(element => {
      const li = document.createElement('li');
      li.textContent = element;

      // Output the list items in an unordered list
      ul.appendChild(li);
    });
  };

  createList(myHobbies);

}
'use strict';

{
  const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Noer', age: 27 },
    { name: 'Tjebbe', age: 22 },
  ];


  // Write a program that calculates the combined age of every member
  // Make use of the map function to get the ages
  function combinedAge(array) {

    // It should contain a function that takes a callback
    // The callback adds all the ages together
    const totalAge = array.map((elem) => elem.age).reduce((acc, cur) => acc + cur);

    // The main function should log the string
    // "The collective age of the HYF team is: [number]" to the console
    // Afterwards return the number
    return `The collective age of the HYF team is: ${totalAge}`;
  }

  console.log(combinedAge(hackYourFutureMembers));
}
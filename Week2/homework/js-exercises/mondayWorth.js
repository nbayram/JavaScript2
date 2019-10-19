'use strict';

{
  const mondayTasks = [
    {
      name: 'Daily standup',
      duration: 30, // specified in minutes
    },
    {
      name: 'Feature discussion',
      duration: 120,
    },
    {
      name: 'Development time',
      duration: 240,
    },
    {
      name: 'Talk to different members from the product team',
      duration: 60,
    },
  ];

  function mondayWorth(array) {

    // Let's assume your hourly rate is €25.
    // Use the map array function to take out the duration time for each task.
    // Write a program that finds out what your hourly rate on a Monday would be
    // Multiply each duration by a per - hour rate for billing.
    const eachPrijs = array.map((eleman) => (eleman.duration / 60) * 25);

    // Sum it all up.
    // Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.
    return `€${eachPrijs.reduce((acc, cur) => acc + cur)}`;
  }
  // Make sure the program can be used on any array of objects
  // That contain a duration property with a number value
  console.log(mondayWorth(mondayTasks));


}
'use strict';

{
  function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const numbers = [];

    for (let i = startIndex; i <= stopIndex; i++) {
      numbers.push(i);
    };
    console.log(numbers);

    numbers.forEach(number => {
      threeCallback(number);
      fiveCallback(number);
    });
  }

  function sayThree(number) {
    if (number % 3 === 0) {
      return console.log(`${number} is divisible by 3.`);
    }
  }

  function sayFive(number) {
    if (number % 5 === 0) {
      return console.log(`${number} is divisible by 5.`);
    }
  }

  threeFive(10, 15, sayThree, sayFive);
}


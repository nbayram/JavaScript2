'use strict';

{
  // function doubleEvenNumbers(numbers) {
  //   const newNumbers = [];
  //   for (let i = 0; i < numbers.length; i++) {
  //     if (numbers[i] % 2 === 0) {
  //       newNumbers.push(numbers[i] * 2);
  //     }
  //   }
  //   return newNumbers;
  // }
  // console.log(doubleEvenNumbers(myNumbers)); // Logs "[4, 8]" to the console


  const myNumbers = [1, 2, 3, 4];

  function doubleEvenNumbers(numbers) {

    const evenNumbers = numbers.filter(elem => elem % 2 === 0); // Get the even numbers with filter function

    return evenNumbers.map(xTwo => xTwo * 2); // Multiply 2 each elemans of the array with map function
  };
  console.log(doubleEvenNumbers(myNumbers));
}

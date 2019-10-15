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

  function doubleEvenNumbers(arr) {

    // Above code doesn't work! Ternary warning!
    // const evenNumbers = myNumbers.filter(numbers => (numbers % 2 === 0) ? numbers);
    const evenNumbers = arr.filter(elem => { // Get the even numbers with filter function
      if (elem % 2 === 0) {
        return elem;
      }
    });

    return evenNumbers.map(xTwo => xTwo * 2); // Multiply 2 each elemans of the array with map function
  };
  console.log(doubleEvenNumbers(myNumbers));
}

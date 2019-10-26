'use strict';

{
  // Declare a function called createBase.
  function createBase(numberX) {
    // Put here your logic...
    // It should return a closure
    function addToBase(numberY) {
      // That adds a number to the base number argument.
      return numberX + numberY;
    }
    return addToBase;
  }

  const addSeven = createBase(7);
  const addTen = createBase(10);
  const addSix = createBase(6);

  // Put here your function calls...
  // Call the function three times.
  console.log(addSeven(8));
  console.log(addTen(14));
  console.log(addSix(30));

  // The return values should be:
  // 15
  // 24
  // 36
}
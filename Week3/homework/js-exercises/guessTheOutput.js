'use strict';

{
  // Snippet
  let a = 10;
  const x = (function () {
    a = 12;
    return function () {
      alert(a);
    };
  })();

  guess = 'In the global scope, a variable is defined by let keyword and assigned a value of 10. Then a new value is given to the variable a within the function. Function x is invoked function. It runs when it is defined. The parentheses at the end of the function indicate that they are called. The function is block scope. Since the keyword is not used, it does not create a new variable and overwrites it. The variable a takes the value 12 given in the function.'
  console.log(guess);
  x();
}
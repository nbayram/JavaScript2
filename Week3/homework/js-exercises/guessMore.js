'use strict';

{
  // Snippet
  const x = 9;
  function f1(val) {
    val = val + 1;
    return val;
  }

  const guessF1x = 'The variable x is given a value of 9 in the global scope with const keyword. The function f1 adds the value given as an argument to 1 and returns it. x is primitive data structure and does not change. The operation f1 (x) returns 10. The function only works if called, but return undefined. Returns 10 if logged.'
  console.log(guessF1x);
  f1(x);

  const guessX = 'The variable x is given a value of 9 in the global scope with const keyword. Returns 9.';
  console.log(guessX);
  console.log(x);


  const y = { x: 9 };
  function f2(val) {
    val.x = val.x + 1;
    return val;
  }

  const guessF2y = 'In global scope, y is assigned an object. In this object, x key is given a value of 9. y is not primitive data structure so it hold the object address and it can change inside. The function f2 adds the value of the x key of the given argument to 1, returns it to it. That would return. The function f2 (y) returns the object {x: 10}.';
  console.log(guessF2y);
  f2(y);

  const guessY = '';
  console.log(guessY);
  console.log(y);
}
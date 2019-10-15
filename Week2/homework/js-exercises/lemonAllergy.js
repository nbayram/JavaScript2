'use strict';

{
  const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

  // It doesn't work!!!
  // function chooseFruit(fruits) {
  //   fruits.filter((fruit) => {
  //     if (fruit !== 'Lemon') {
  //       return fruits;
  //     }
  //   });

  // }


  // Use the filter array function to take out the lemons
  const chooseFruit = fruits => fruits.filter(fruit => fruit !== "Lemon");

  // Output a string that says: "My mom bought me a fruit basket, containing [array of fruits] !"
  const msg = `My mom bought me a fruit basket, containing ${chooseFruit(fruitBasket)}!`

  console.log(msg);
}
'use strict';

const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

function chooseFruits(fruits) {

  // Use the filter array function to take out the lemons
  const lessLemon = fruits.filter(fruit => fruit !== "Lemon");

  // Output a string that says: "My mom bought me a fruit basket, containing [array of fruits] !"
  return `My mom bought me a fruit basket, containing ${lessLemon}!`;
}

console.log(chooseFruits(fruitBasket));
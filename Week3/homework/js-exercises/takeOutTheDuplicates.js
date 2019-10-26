'use strict';

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

// Write a function called removeDuplicates, that takes in an array as an argument:
const removeDuplicates = seriesOfLetters => seriesOfLetters.filter((value, index) => seriesOfLetters.indexOf(value) === index);
console.log(removeDuplicates(letters));

// The function should remove duplicate letters.So the result should be:
// letters === ['a', 'b', 'c', 'd', 'e', 'f'];

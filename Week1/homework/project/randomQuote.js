'use strict';

{
  const myQuotes = [
    {
      quote: 'I think being in love with life is a key to eternal youth.',
      owner: 'Doug Hutchison',
    },
    {
      quote:
        'You’re only here for a short visit. Don’t hurry, don’t worry. And be sure to smell the flowers along the way.',
      owner: 'Walter Hagen',
    },
    {
      quote:
        'A man who dares to waste one hour of time has not discovered the value of life.',
      owner: 'Charles Darwin',
    },
    {
      quote:
        'If life were predictable it would cease to be life, and be without flavor.',
      owner: 'Eleanor Roosevelt',
    },
    {
      quote:
        'All life is an experiment. The more experiments you make the better.',
      owner: 'Ralph Waldo Emerson',
    },
    {
      quote:
        'All of life is peaks and valleys. Don’t let the peaks get too high and the valleys too low.',
      owner: 'John Wooden',
    },
  ];

  // button tag identification
  const button = document.getElementsByTagName('button')[0];

  // Write an executable function for button
  button.addEventListener('click', function () {

    // Create a random number up to the number of elements of myQuotes.
    const random = Math.floor(Math.random() * myQuotes.length);

    // blockquote tag identification
    const blockquote = document.getElementsByTagName('blockquote')[0];

    // figcaption tag identification
    const figcaption = document.getElementsByTagName('figcaption')[0];

    // Give the value of the quote key of a random element from myQuotes array.
    // Write this value into the blockquote tag.
    blockquote.innerHTML = `${myQuotes[random].quote}`;

    //Give the value of the owner key of a random element from myQuotes array.
    // Write this value into the blockquote tag.
    figcaption.innerHTML = `- ${myQuotes[random].owner}`;
  });

}
'use strict';

{
  const books = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true,
    },
    {
      title: 'Harry Potter and the GOBLET of FIRE',
      author: 'J.K. Rowling',
      alreadyRead: true,
    },
  ];

  // Only a <ul> tag be created!
  const ul = document.createElement('ul');
  document.body.appendChild(ul);

  // Rewrite path of the images
  // Having the declarations at the top of the page makes the code more regular.
  const imgArr = ['../images/The Design of Everyday Things.jpg',
    '../images/The Most Human Human.jpg',
    '../images/Goblet of Fire.jpg']

  // 1. Iterate through the array of books.
  for (let i = 0; i < books.length; i++) {

    // 2. For each book, create a p element with the book title and author
    const p = document.createElement('p');
    p.innerHTML = `Name: ${books[i].title} by ${books[i].author}`;

    // 3. Use an <ul> and <li> to display the books.
    const li = document.createElement('li');

    // Append it to the page.
    ul.appendChild(li);
    li.appendChild(p);

    // 4. Add an <img> to each book that links to a URL of the book cover.
    const img = document.createElement('img');

    img.src = imgArr[i];
    img.style.width = '100px';
    img.alt = `${books[i].title} Book Cover`;
    li.appendChild(img);

    // 5. Change the style of the book depending on whether
    // you have read it (green) or not (red).
    books[i].alreadyRead
      ? (p.style.color = 'green')
      : (p.style.color = 'red');

    // Above code are not necessary!
    // const isRead; 
    // console.log(isRead);
  }
}

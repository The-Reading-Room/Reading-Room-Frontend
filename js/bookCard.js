function createBookCard(book) {
  const { volumeInfo } = book;
  const coverUrl = volumeInfo.imageLinks?.thumbnail?.replace('http:', 'https:');
  
  const card = document.createElement('div');
  card.className = 'book-card';
  card.dataset.bookId = book.id;
  
  card.innerHTML = `
    <img
      src="${coverUrl || 'https://via.placeholder.com/128x192?text=No+Cover'}"
      alt="${volumeInfo.title}"
      class="book-cover"
    >
    <div class="book-info">
      <h3 class="book-title">${volumeInfo.title}</h3>
      ${volumeInfo.authors ? 
        `<p class="book-author">${volumeInfo.authors.join(', ')}</p>` : 
        ''}
    </div>
  `;
  
  return card;
}

function renderBooks(books) {
  const grid = document.getElementById('booksGrid');
  grid.innerHTML = '';
  books.forEach(book => {
    const card = createBookCard(book);
    grid.appendChild(card);
  });
}
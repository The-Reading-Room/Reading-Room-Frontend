let currentBooks = [];

function init() {
  const searchInput = document.getElementById('searchInput');
  const modal = document.getElementById('modal');
  const closeButton = modal.querySelector('.close-button');
  const booksGrid = document.getElementById('booksGrid');
  
  // Debounced search
  const debouncedSearch = debounce(async (query) => {
    if (query.length >= 3) {
      await performSearch(query);
    }
  }, 300);
  
  searchInput.addEventListener('input', (e) => {
    debouncedSearch(e.target.value);
  });
  
  closeButton.addEventListener('click', hideModal);
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      hideModal();
    }
  });
  
  booksGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.book-card');
    if (card) {
      const bookId = card.dataset.bookId;
      const book = currentBooks.find(b => b.id === bookId);
      if (book) {
        showModal(book);
      }
    }
  });
  
  // Load initial books
  performSearch('fantasy');
}

async function performSearch(query) {
  const loader = document.getElementById('loader');
  const error = document.getElementById('error');
  
  loader.classList.remove('hidden');
  error.classList.add('hidden');
  
  try {
    currentBooks = await searchBooks(query);
    renderBooks(currentBooks);
  } catch (err) {
    error.textContent = 'Failed to fetch books. Please try again.';
    error.classList.remove('hidden');
    currentBooks = [];
  } finally {
    loader.classList.add('hidden');
  }
}

// Start the application
document.addEventListener('DOMContentLoaded', init);
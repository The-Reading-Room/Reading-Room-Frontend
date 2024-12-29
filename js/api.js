const API_BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

async function searchBooks(query) {
  const response = await fetch(
    `${API_BASE_URL}?q=${encodeURIComponent(query)}&maxResults=40`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }
  
  const data = await response.json();
  return data.items || [];
}
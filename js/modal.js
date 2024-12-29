function showModal(book) {
  const { volumeInfo } = book;
  const coverUrl = volumeInfo.imageLinks?.thumbnail?.replace('http:', 'https:');
  
  const modalContent = document.getElementById('modalContent');
  modalContent.innerHTML = `
    <div class="book-details">
      <img
        src="${coverUrl || 'https://via.placeholder.com/128x192?text=No+Cover'}"
        alt="${volumeInfo.title}"
      >
      <div>
        <h2>${volumeInfo.title}</h2>
        
        <div class="book-meta">
          ${volumeInfo.authors ? 
            `<div class="meta-item">
              <span>Authors:</span> ${volumeInfo.authors.join(', ')}
            </div>` : ''}
            
          ${volumeInfo.publishedDate ? 
            `<div class="meta-item">
              <span>Published:</span> ${volumeInfo.publishedDate}
            </div>` : ''}
            
          ${volumeInfo.publisher ? 
            `<div class="meta-item">
              <span>Publisher:</span> ${volumeInfo.publisher}
            </div>` : ''}
            
          ${volumeInfo.averageRating ? 
            `<div class="meta-item">
              <span>Rating:</span> ${volumeInfo.averageRating} / 5
            </div>` : ''}
        </div>
        
        ${volumeInfo.description ? 
          `<div class="book-description">
            <h3>Description</h3>
            <p>${volumeInfo.description}</p>
          </div>` : ''}
        
        ${volumeInfo.categories ? 
          `<div class="categories">
            ${volumeInfo.categories.map(category => 
              `<span class="category">${category}</span>`
            ).join('')}
          </div>` : ''}
      </div>
    </div>
  `;
  
  document.getElementById('modal').classList.remove('hidden');
}

function hideModal() {
  document.getElementById('modal').classList.add('hidden');
}
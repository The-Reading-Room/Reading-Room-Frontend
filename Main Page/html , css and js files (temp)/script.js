// Sample book posts data
const bookPosts = [
    {
      id: 1,
      user: "Jane Doe",
      userImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      content:
        "Just finished 'The Midnight Library' and I'm completely blown away. Matt Haig has a way of making you reflect on your own life choices while taking you on an incredible journey.",
      bookImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=80&h=120&fit=crop",
      bookTitle: "The Midnight Library",
      author: "Matt Haig",
      likes: 42,
      comments: 12,
      timestamp: "2h ago",
      liked: false,
      disliked: false,
    },
    {
      id: 2,
      user: "John Smith",
      userImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      content:
        "I've been reading 'Project Hail Mary' by Andy Weir and I can't put it down! The science is fascinating and the story keeps you on the edge of your seat.",
      bookImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=80&h=120&fit=crop",
      bookTitle: "Project Hail Mary",
      author: "Andy Weir",
      likes: 38,
      comments: 8,
      timestamp: "5h ago",
      liked: false,
      disliked: false,
    },
    {
      id: 3,
      user: "Alex Johnson",
      userImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      content:
        "Just started 'Klara and the Sun' by Kazuo Ishiguro. His writing style is so unique and the perspective of an AI observing humans is fascinating.",
      bookImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=80&h=120&fit=crop",
      bookTitle: "Klara and the Sun",
      author: "Kazuo Ishiguro",
      likes: 27,
      comments: 5,
      timestamp: "1d ago",
      liked: false,
      disliked: false,
    },
    {
      id: 4,
      user: "Sarah Wilson",
      userImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      content:
        "Currently reading 'The Seven Husbands of Evelyn Hugo' and I'm absolutely obsessed! Taylor Jenkins Reid knows how to write characters that feel so real.",
      bookImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=80&h=120&fit=crop",
      bookTitle: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      likes: 56,
      comments: 18,
      timestamp: "3h ago",
      liked: false,
      disliked: false,
    },
    {
      id: 5,
      user: "Mike Chen",
      userImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      content:
        "Just finished 'Dune' for the third time and I still discover new details. Frank Herbert created such an intricate and fascinating universe.",
      bookImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=80&h=120&fit=crop",
      bookTitle: "Dune",
      author: "Frank Herbert",
      likes: 73,
      comments: 22,
      timestamp: "6h ago",
      liked: false,
      disliked: false,
    },
  ]
  
  // Sample data for search functionality
  const sampleBooks = [
    { id: 1, title: "The Midnight Library", author: "Matt Haig", genre: "Fiction" },
    { id: 2, title: "Project Hail Mary", author: "Andy Weir", genre: "Science Fiction" },
    { id: 3, title: "Klara and the Sun", author: "Kazuo Ishiguro", genre: "Literary Fiction" },
    { id: 4, title: "Dune", author: "Frank Herbert", genre: "Science Fiction" },
    { id: 5, title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", genre: "Historical Fiction" },
  ]
  
  const sampleAuthors = [
    { id: 1, name: "Matt Haig", books: 12, followers: "2.3M" },
    { id: 2, name: "Andy Weir", books: 4, followers: "1.8M" },
    { id: 3, name: "Kazuo Ishiguro", books: 8, followers: "1.2M" },
    { id: 4, name: "Frank Herbert", books: 23, followers: "3.1M" },
    { id: 5, name: "Taylor Jenkins Reid", books: 7, followers: "2.7M" },
  ]
  
  const sampleUsers = [
    { id: 1, username: "bookworm_jane", name: "Jane Doe", followers: "1.2K", books: 156 },
    { id: 2, username: "sci_fi_lover", name: "John Smith", followers: "890", books: 89 },
    { id: 3, username: "literary_alex", name: "Alex Johnson", followers: "2.1K", books: 203 },
    { id: 4, username: "fantasy_reader", name: "Sarah Wilson", followers: "756", books: 134 },
    { id: 5, username: "classic_mike", name: "Mike Chen", followers: "1.8K", books: 298 },
  ]
  
  // Global variables
  let selectedBook = null
  let uploadedImages = []
  
  // DOM Elements
  const postsContainer = document.querySelector(".posts-container")
  const mainContent = document.querySelector(".main-content")
  const navButtons = document.querySelectorAll(".nav-button")
  const thoughtsTextarea = document.getElementById("thoughtsTextarea")
  const characterCount = document.querySelector(".character-count")
  const imageUpload = document.getElementById("imageUpload")
  const uploadedImagesContainer = document.getElementById("uploadedImages")
  const globalSearchInput = document.getElementById("globalSearchInput")
  const searchResults = document.getElementById("searchResults")
  
  // Initialize the application
  document.addEventListener("DOMContentLoaded", () => {
    initializeApp()
  })
  
  function initializeApp() {
    renderPosts()
    initializeNavigation()
    initializeProgressBars()
    addAnimationObserver()
    initializeCreatePost()
    initializeDropdownPositioning()
    initializeGlobalSearch()
    initializeListsView()
  }
  
  // Lists View Functionality
  function initializeListsView() {
    // Add click handlers for list cards
    const listCards = document.querySelectorAll(".list-card")
    listCards.forEach((card) => {
      card.addEventListener("click", (e) => {
        // Don't trigger if clicking on action buttons
        if (e.target.closest(".list-action-btn")) return
  
        const listType = card.getAttribute("data-list-type")
        const listId = card.getAttribute("data-list-id")
  
        if (listType) {
          openDefaultList(listType)
        } else if (listId) {
          openCustomList(listId)
        }
      })
    })
  
    // Add hover effects for list cards
    listCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        const covers = card.querySelectorAll(".preview-cover")
        covers.forEach((cover, index) => {
          setTimeout(() => {
            cover.style.transform = "scale(1.1) translateY(-2px)"
          }, index * 50)
        })
      })
  
      card.addEventListener("mouseleave", () => {
        const covers = card.querySelectorAll(".preview-cover")
        covers.forEach((cover) => {
          cover.style.transform = "scale(1) translateY(0)"
        })
      })
    })
  
    // Add action button handlers
    const actionButtons = document.querySelectorAll(".list-action-btn")
    actionButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation()
        const action = btn.title.toLowerCase()
        const listCard = btn.closest(".list-card")
        const listId = listCard.getAttribute("data-list-id")
        const listType = listCard.getAttribute("data-list-type")
  
        handleListAction(action, listId, listType)
      })
    })
  }
  
  function openDefaultList(listType) {
    console.log(`Opening default list: ${listType}`)
    showNotification(`Opening ${listType.replace("-", " ")} list...`)
    // Here you would implement the detailed list view
  }
  
  function openCustomList(listId) {
    console.log(`Opening custom list: ${listId}`)
    showNotification("Opening custom list...")
    // Here you would implement the detailed list view
  }
  
  function handleListAction(action, listId, listType) {
    console.log(`List action: ${action} for list ${listId || listType}`)
  
    switch (action) {
      case "view list":
        showNotification("Opening list view...")
        break
      case "edit list":
        showNotification("Opening list editor...")
        break
      case "delete list":
        if (confirm("Are you sure you want to delete this list?")) {
          showNotification("List deleted successfully!", "success")
        }
        break
    }
  }
  
  function showCreateListModal() {
    showNotification("Opening list creator...")
    // Here you would implement the create list modal
  }
  
  function showListsView() {
    document.getElementById("home-view").classList.remove("active")
    document.getElementById("create-post-view").classList.remove("active")
    document.getElementById("lists-view").classList.add("active")
  
    // Reset active nav button
    navButtons.forEach((btn) => btn.classList.remove("active"))
    // Note: We don't have a direct lists nav button anymore, so we'll handle this in the dropdown
  }
  
  // Global Search Functionality
  function initializeGlobalSearch() {
    if (globalSearchInput) {
      globalSearchInput.addEventListener("input", handleGlobalSearch)
    }
  }
  
  function handleGlobalSearch() {
    const query = globalSearchInput.value.trim().toLowerCase()
  
    if (query.length < 2) {
      searchResults.innerHTML = ""
      return
    }
  
    const bookResults = sampleBooks
      .filter((book) => book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query))
      .slice(0, 3)
  
    const authorResults = sampleAuthors.filter((author) => author.name.toLowerCase().includes(query)).slice(0, 3)
  
    const userResults = sampleUsers
      .filter((user) => user.username.toLowerCase().includes(query) || user.name.toLowerCase().includes(query))
      .slice(0, 3)
  
    displaySearchResults(bookResults, authorResults, userResults)
  }
  
  function displaySearchResults(books, authors, users) {
    let resultsHTML = ""
  
    if (books.length > 0) {
      books.forEach((book) => {
        resultsHTML += `
          <div class="search-result-item" onclick="selectSearchResult('book', ${book.id})">
            <i class="fas fa-book search-result-icon"></i>
            <div class="search-result-content">
              <div class="search-result-title">${book.title}</div>
              <div class="search-result-subtitle">by ${book.author} • ${book.genre}</div>
            </div>
          </div>
        `
      })
    }
  
    if (authors.length > 0) {
      authors.forEach((author) => {
        resultsHTML += `
          <div class="search-result-item" onclick="selectSearchResult('author', ${author.id})">
            <i class="fas fa-user-edit search-result-icon"></i>
            <div class="search-result-content">
              <div class="search-result-title">${author.name}</div>
              <div class="search-result-subtitle">${author.books} books • ${author.followers} followers</div>
            </div>
          </div>
        `
      })
    }
  
    if (users.length > 0) {
      users.forEach((user) => {
        resultsHTML += `
          <div class="search-result-item" onclick="selectSearchResult('user', ${user.id})">
            <i class="fas fa-user search-result-icon"></i>
            <div class="search-result-content">
              <div class="search-result-title">@${user.username}</div>
              <div class="search-result-subtitle">${user.name} • ${user.books} books read</div>
            </div>
          </div>
        `
      })
    }
  
    if (resultsHTML === "") {
      resultsHTML =
        '<div class="search-result-item"><div class="search-result-content"><div class="search-result-title">No results found</div></div></div>'
    }
  
    searchResults.innerHTML = resultsHTML
  }
  
  function selectSearchResult(type, id) {
    console.log(`Selected ${type} with ID: ${id}`)
    showNotification(`Opening ${type} details...`)
    // Here you would navigate to the specific book, author, or user page
  }
  
  // Dynamic dropdown positioning
  function initializeDropdownPositioning() {
    const dropdownItems = document.querySelectorAll(".dropdown-item")
  
    dropdownItems.forEach((item) => {
      const dropdown = item.querySelector(".dropdown-menu")
  
      item.addEventListener("mouseenter", () => {
        const rect = item.getBoundingClientRect()
  
        // Position dropdown to align with the top of the nav button
        dropdown.style.top = `${rect.top}px`
      })
    })
  }
  
  // View Management
  function showHomeView() {
    document.getElementById("home-view").classList.add("active")
    document.getElementById("create-post-view").classList.remove("active")
    document.getElementById("lists-view").classList.remove("active")
  
    // Reset active nav button
    navButtons.forEach((btn) => btn.classList.remove("active"))
    document.querySelector('[data-nav="home"]').classList.add("active")
  }
  
  function showCreatePostView() {
    document.getElementById("home-view").classList.remove("active")
    document.getElementById("create-post-view").classList.add("active")
    document.getElementById("lists-view").classList.remove("active")
  }
  
  // Render book posts
  function renderPosts() {
    postsContainer.innerHTML = ""
  
    bookPosts.forEach((post, index) => {
      const postElement = createPostElement(post, index)
      postsContainer.appendChild(postElement)
    })
  }
  
  function createPostElement(post, index) {
    const postDiv = document.createElement("div")
    postDiv.className = "book-post loading"
    postDiv.style.animationDelay = `${index * 0.1}s`
  
    postDiv.innerHTML = `
          <div class="post-content">
              <div class="user-info">
                  <img src="${post.userImage}" alt="${post.user}" class="user-avatar">
                  <div>
                      <p class="user-name">${post.user}</p>
                      <p class="post-timestamp">${post.timestamp}</p>
                  </div>
              </div>
              
              <div class="post-body">
                  <div class="post-text">
                      <p>${post.content}</p>
                  </div>
                  <div class="book-info">
                      <img src="${post.bookImage}" alt="${post.bookTitle}" class="book-cover">
                      <p class="book-title-small">${post.bookTitle}</p>
                      <p class="book-author-small">${post.author}</p>
                  </div>
              </div>
              
              <div class="post-actions">
                  <button class="action-button like-btn" data-post-id="${post.id}">
                      <i class="fas fa-heart action-icon"></i>
                      <span class="like-count">${post.likes}</span>
                  </button>
                  <button class="action-button comment-btn" data-post-id="${post.id}">
                      <i class="fas fa-comment action-icon"></i>
                      <span>${post.comments}</span>
                  </button>
                  <button class="action-button dislike-btn" data-post-id="${post.id}">
                      <i class="fas fa-thumbs-down action-icon"></i>
                  </button>
              </div>
          </div>
      `
  
    // Add event listeners for post actions
    addPostEventListeners(postDiv, post)
  
    return postDiv
  }
  
  function addPostEventListeners(postElement, post) {
    const likeBtn = postElement.querySelector(".like-btn")
    const dislikeBtn = postElement.querySelector(".dislike-btn")
    const commentBtn = postElement.querySelector(".comment-btn")
  
    likeBtn.addEventListener("click", () => handleLike(post.id, likeBtn))
    dislikeBtn.addEventListener("click", () => handleDislike(post.id, dislikeBtn))
    commentBtn.addEventListener("click", () => handleComment(post.id))
  
    // Add hover animations
    const bookInfo = postElement.querySelector(".book-info")
    const userAvatar = postElement.querySelector(".user-avatar")
  
    bookInfo.addEventListener("mouseenter", () => {
      bookInfo.style.transform = "scale(1.05) rotate(2deg)"
    })
  
    bookInfo.addEventListener("mouseleave", () => {
      bookInfo.style.transform = "scale(1) rotate(0deg)"
    })
  
    userAvatar.addEventListener("mouseenter", () => {
      userAvatar.style.transform = "scale(1.1)"
    })
  
    userAvatar.addEventListener("mouseleave", () => {
      userAvatar.style.transform = "scale(1)"
    })
  }
  
  function handleLike(postId, likeBtn) {
    const post = bookPosts.find((p) => p.id === postId)
    const likeCount = likeBtn.querySelector(".like-count")
    const dislikeBtn = likeBtn.parentElement.querySelector(".dislike-btn")
  
    // Add click animation
    likeBtn.style.transform = "scale(0.9)"
    setTimeout(() => {
      likeBtn.style.transform = "scale(1)"
    }, 150)
  
    if (post.liked) {
      post.liked = false
      post.likes--
      likeBtn.classList.remove("liked")
    } else {
      post.liked = true
      post.likes++
      likeBtn.classList.add("liked")
  
      if (post.disliked) {
        post.disliked = false
        dislikeBtn.classList.remove("disliked")
      }
    }
  
    likeCount.textContent = post.likes
  }
  
  function handleDislike(postId, dislikeBtn) {
    const post = bookPosts.find((p) => p.id === postId)
    const likeBtn = dislikeBtn.parentElement.querySelector(".like-btn")
    const likeCount = likeBtn.querySelector(".like-count")
  
    // Add click animation
    dislikeBtn.style.transform = "scale(0.9)"
    setTimeout(() => {
      dislikeBtn.style.transform = "scale(1)"
    }, 150)
  
    if (post.disliked) {
      post.disliked = false
      dislikeBtn.classList.remove("disliked")
    } else {
      post.disliked = true
      dislikeBtn.classList.add("disliked")
  
      if (post.liked) {
        post.liked = false
        post.likes--
        likeBtn.classList.remove("liked")
        likeCount.textContent = post.likes
      }
    }
  }
  
  function handleComment(postId) {
    console.log(`Opening comments for post ${postId}`)
    // Placeholder for comment functionality
  }
  
  // Navigation functionality
  function initializeNavigation() {
    navButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        // Don't handle click for dropdown items, let hover handle it
        if (button.closest(".dropdown-item")) {
          e.preventDefault()
          return
        }
  
        // Remove active class from all buttons
        navButtons.forEach((btn) => btn.classList.remove("active"))
  
        // Add active class to clicked button
        button.classList.add("active")
  
        // Add click animation
        button.style.transform = "scale(0.95)"
        setTimeout(() => {
          button.style.transform = "scale(1)"
        }, 150)
  
        // Get the nav item
        const navItem = button.getAttribute("data-nav")
        console.log(`Navigating to: ${navItem}`)
      })
  
      // Add hover animations for non-dropdown items (removed translateX)
      if (!button.closest(".dropdown-item")) {
        button.addEventListener("mouseenter", () => {
          if (!button.classList.contains("active")) {
            // Removed translateX transform
          }
        })
  
        button.addEventListener("mouseleave", () => {
          if (!button.classList.contains("active")) {
            // Removed translateX transform
          }
        })
      }
    })
  
    // Handle dropdown options
    initializeDropdowns()
  }
  
  function initializeDropdowns() {
    // Handle create dropdown options
    const createOptions = document.querySelectorAll(".create-dropdown .dropdown-option")
    createOptions.forEach((option) => {
      option.addEventListener("click", (e) => {
        e.stopPropagation()
        const action = option.getAttribute("data-action")
        handleCreateAction(action)
  
        // Add ripple effect
        createRippleEffect(option, e)
      })
    })
  
    // Handle explore dropdown options
    const exploreOptions = document.querySelectorAll(".explore-dropdown .dropdown-option")
    exploreOptions.forEach((option) => {
      option.addEventListener("click", (e) => {
        e.stopPropagation()
        const category = option.getAttribute("data-category")
        handleExploreCategory(category)
  
        // Add ripple effect
        createRippleEffect(option, e)
      })
    })
  
    // Handle search dropdown options
    const searchOptions = document.querySelectorAll(".search-dropdown .dropdown-option")
    searchOptions.forEach((option) => {
      option.addEventListener("click", (e) => {
        e.stopPropagation()
        const searchType = option.getAttribute("data-search-type")
        handleSearchType(searchType)
        createRippleEffect(option, e)
      })
    })
  
    // Add magnetic effect to dropdown options (removed translateX)
    addMagneticEffect()
  }
  
  function handleCreateAction(action) {
    console.log(`Creating: ${action}`)
  
    switch (action) {
      case "create-post":
        showCreatePostView()
        showNotification("Opening post creator...")
        break
      case "create-list":
        showListsView()
        showNotification("Opening lists management...")
        break
      case "create-bookclub":
        showNotification("Book club creator coming soon...")
        break
    }
  }
  
  function handleExploreCategory(category) {
    console.log(`Exploring category: ${category}`)
    showNotification(`Exploring ${category.replace("-", " ")} books...`)
  }
  
  function handleSearchType(searchType) {
    console.log(`Search type: ${searchType}`)
    showNotification(`Searching ${searchType}...`)
  }
  
  function createRippleEffect(element, event) {
    const rect = element.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
  
    const ripple = document.createElement("div")
    ripple.style.position = "absolute"
    ripple.style.left = x + "px"
    ripple.style.top = y + "px"
    ripple.style.width = "0"
    ripple.style.height = "0"
    ripple.style.borderRadius = "50%"
    ripple.style.background = "rgba(79, 70, 229, 0.4)"
    ripple.style.transform = "translate(-50%, -50%)"
    ripple.style.animation = "ripple 0.6s ease-out"
    ripple.style.pointerEvents = "none"
    ripple.style.zIndex = "1000"
  
    element.appendChild(ripple)
  
    setTimeout(() => {
      ripple.remove()
    }, 600)
  }
  
  function addMagneticEffect() {
    const dropdownOptions = document.querySelectorAll(".dropdown-option")
  
    dropdownOptions.forEach((option) => {
      option.addEventListener("mousemove", (e) => {
        const rect = option.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
  
        const distance = Math.sqrt(x * x + y * y)
        const maxDistance = 50
  
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          const moveY = y * force * 0.3
  
          // Removed translateX from the transform
          option.style.transform = `translateY(${-2 + moveY}px) scale(1.02)`
        }
      })
  
      option.addEventListener("mouseleave", () => {
        // Removed translateX from the transform
        option.style.transform = "translateY(-2px) scale(1.02)"
      })
    })
  }
  
  // Create Post Functionality
  function initializeCreatePost() {
    // Character count for textarea
    if (thoughtsTextarea) {
      thoughtsTextarea.addEventListener("input", updateCharacterCount)
    }
  
    // Image upload handling
    if (imageUpload) {
      imageUpload.addEventListener("change", handleImageUpload)
    }
  }
  
  function updateCharacterCount() {
    const text = thoughtsTextarea.value
    const count = text.length
    const maxCount = 2000
  
    characterCount.textContent = `${count} / ${maxCount}`
  
    if (count > maxCount) {
      characterCount.style.color = "#ef4444"
    } else if (count > maxCount * 0.8) {
      characterCount.style.color = "#f59e0b"
    } else {
      characterCount.style.color = "#6b7280"
    }
  }
  
  function handleImageUpload(event) {
    const files = Array.from(event.target.files)
  
    files.forEach((file) => {
      if (file.type.startsWith("image/") && file.size <= 10 * 1024 * 1024) {
        // 10MB limit
        const reader = new FileReader()
        reader.onload = (e) => {
          addUploadedImage(e.target.result, file.name)
        }
        reader.readAsDataURL(file)
      } else {
        showNotification("Please select valid image files under 10MB", "error")
      }
    })
  
    // Reset input
    event.target.value = ""
  }
  
  function addUploadedImage(src, name) {
    const imageId = Date.now() + Math.random()
    uploadedImages.push({ id: imageId, src, name })
  
    const imageDiv = document.createElement("div")
    imageDiv.className = "uploaded-image"
    imageDiv.innerHTML = `
      <img src="${src}" alt="${name}">
      <button class="remove-image-btn" onclick="removeUploadedImage(${imageId})">
        <i class="fas fa-times"></i>
      </button>
    `
  
    uploadedImagesContainer.appendChild(imageDiv)
  }
  
  function removeUploadedImage(imageId) {
    uploadedImages = uploadedImages.filter((img) => img.id !== imageId)
  
    // Remove from DOM
    const imageElements = uploadedImagesContainer.querySelectorAll(".uploaded-image")
    imageElements.forEach((element) => {
      const button = element.querySelector(".remove-image-btn")
      if (button && button.onclick.toString().includes(imageId)) {
        element.remove()
      }
    })
  }
  
  // Book Search Functions
  function searchBackend() {
    const searchTerm = document.getElementById("bookSearchInput").value.trim()
  
    if (!searchTerm) {
      showNotification("Please enter a book title to search", "error")
      return
    }
  
    // Show loading state
    const searchBtn = document.querySelector(".search-backend-btn")
    const originalContent = searchBtn.innerHTML
    searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...'
    searchBtn.disabled = true
  
    // Simulate backend call (replace with actual API call)
    setTimeout(() => {
      // Mock book data - replace with actual backend response
      const mockBook = {
        title: searchTerm,
        author: "Sample Author",
        cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=80&h=120&fit=crop",
      }
  
      selectBook(mockBook)
  
      // Reset button
      searchBtn.innerHTML = originalContent
      searchBtn.disabled = false
  
      showNotification(`Found "${mockBook.title}" in our library!`)
    }, 1500)
  }
  
  function selectBook(book) {
    selectedBook = book
  
    const selectedBookElement = document.getElementById("selectedBook")
    const bookCover = selectedBookElement.querySelector(".selected-book-cover")
    const bookTitle = selectedBookElement.querySelector(".selected-book-title")
    const bookAuthor = selectedBookElement.querySelector(".selected-book-author")
  
    bookCover.src = book.cover
    bookCover.alt = book.title
    bookTitle.textContent = book.title
    bookAuthor.textContent = book.author
  
    selectedBookElement.style.display = "flex"
  
    // Clear search input
    document.getElementById("bookSearchInput").value = ""
  }
  
  function removeSelectedBook() {
    selectedBook = null
    document.getElementById("selectedBook").style.display = "none"
  }
  
  // Post Actions
  function saveDraft() {
    const thoughts = thoughtsTextarea.value.trim()
  
    if (!thoughts && !selectedBook && uploadedImages.length === 0) {
      showNotification("Nothing to save as draft", "error")
      return
    }
  
    const draft = {
      thoughts,
      book: selectedBook,
      images: uploadedImages,
      allowComments: document.getElementById("allowComments").checked,
      isPublic: document.getElementById("publicPost").checked,
      timestamp: new Date().toISOString(),
    }
  
    // Save to localStorage (in real app, save to backend)
    localStorage.setItem("postDraft", JSON.stringify(draft))
  
    showNotification("Draft saved successfully!")
  }
  
  function publishPost() {
    const thoughts = thoughtsTextarea.value.trim()
  
    if (!thoughts) {
      showNotification("Please write your thoughts before publishing", "error")
      return
    }
  
    if (!selectedBook) {
      showNotification("Please select a book before publishing", "error")
      return
    }
  
    const post = {
      thoughts,
      book: selectedBook,
      images: uploadedImages,
      allowComments: document.getElementById("allowComments").checked,
      isPublic: document.getElementById("publicPost").checked,
      timestamp: new Date().toISOString(),
    }
  
    // Show publishing animation
    const publishBtn = document.querySelector(".post-button")
    const originalContent = publishBtn.innerHTML
    publishBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Publishing...'
    publishBtn.disabled = true
  
    // Simulate publishing (replace with actual API call)
    setTimeout(() => {
      // Reset form
      resetCreatePostForm()
  
      // Reset button
      publishBtn.innerHTML = originalContent
      publishBtn.disabled = false
  
      // Show success and go back to home
      showNotification("Post published successfully!")
      setTimeout(() => {
        showHomeView()
      }, 1500)
    }, 2000)
  }
  
  function resetCreatePostForm() {
    thoughtsTextarea.value = ""
    updateCharacterCount()
    removeSelectedBook()
    uploadedImages = []
    uploadedImagesContainer.innerHTML = ""
    document.getElementById("allowComments").checked = true
    document.getElementById("publicPost").checked = true
  
    // Clear draft from localStorage
    localStorage.removeItem("postDraft")
  }
  
  function showNotification(message, type = "success") {
    // Create notification element
    const notification = document.createElement("div")
    notification.textContent = message
  
    const bgColor =
      type === "error" ? "linear-gradient(135deg, #ef4444, #dc2626)" : "linear-gradient(135deg, #4f46e5, #7c3aed)"
  
    notification.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
      background: ${bgColor};
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      box-shadow: 0 10px 25px rgba(79, 70, 229, 0.3);
      z-index: 1000;
      font-weight: 500;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      max-width: 300px;
    `
  
    document.body.appendChild(notification)
  
    // Animate in
    setTimeout(() => {
      notification.style.transform = "translateX(0)"
    }, 100)
  
    // Animate out and remove
    setTimeout(() => {
      notification.style.transform = "translateX(100%)"
      setTimeout(() => {
        notification.remove()
      }, 300)
    }, 3000)
  }
  
  // Progress bars animation
  function initializeProgressBars() {
    setTimeout(() => {
      const progressFills = document.querySelectorAll(".progress-fill")
      progressFills.forEach((fill, index) => {
        const percentage = fill.getAttribute("data-percentage")
        setTimeout(() => {
          fill.style.width = `${percentage}%`
        }, index * 100)
      })
    }, 500)
  }
  
  // Intersection Observer for animations
  function addAnimationObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )
  
    // Observe all posts
    setTimeout(() => {
      const posts = document.querySelectorAll(".book-post")
      posts.forEach((post) => observer.observe(post))
    }, 100)
  }
  
  // Add hover effects for various elements
  document.addEventListener("DOMContentLoaded", () => {
    // Navbar brand hover effect
    const navbarBrand = document.querySelector(".navbar-brand")
    navbarBrand.addEventListener("mouseenter", () => {
      navbarBrand.style.transform = "scale(1.05)"
    })
    navbarBrand.addEventListener("mouseleave", () => {
      navbarBrand.style.transform = "scale(1)"
    })
  
    // Stat cards hover effects
    const statCards = document.querySelectorAll(".stat-card")
    statCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px)"
      })
      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)"
      })
    })
  
    // Trending items hover effects
    const trendingItems = document.querySelectorAll(".trending-item")
    trendingItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        item.style.transform = "translateX(5px)"
        item.style.backgroundColor = "#eef2ff"
      })
      item.addEventListener("mouseleave", () => {
        item.style.transform = "translateX(0)"
        item.style.backgroundColor = "#f9fafb"
      })
    })
  
    // Load draft if exists
    loadDraft()
  })
  
  function loadDraft() {
    const draft = localStorage.getItem("postDraft")
    if (draft) {
      try {
        const draftData = JSON.parse(draft)
  
        // Show notification about draft
        setTimeout(() => {
          showNotification("Draft loaded from previous session")
        }, 1000)
  
        // Restore form data
        if (draftData.thoughts) {
          thoughtsTextarea.value = draftData.thoughts
          updateCharacterCount()
        }
  
        if (draftData.book) {
          selectBook(draftData.book)
        }
  
        if (draftData.images) {
          uploadedImages = draftData.images
          draftData.images.forEach((img) => {
            const imageDiv = document.createElement("div")
            imageDiv.className = "uploaded-image"
            imageDiv.innerHTML = `
              <img src="${img.src}" alt="${img.name}">
              <button class="remove-image-btn" onclick="removeUploadedImage(${img.id})">
                <i class="fas fa-times"></i>
              </button>
            `
            uploadedImagesContainer.appendChild(imageDiv)
          })
        }
  
        document.getElementById("allowComments").checked = draftData.allowComments
        document.getElementById("publicPost").checked = draftData.isPublic
      } catch (error) {
        console.error("Error loading draft:", error)
      }
    }
  }
  
  // Add CSS for ripple animation
  const rippleCSS = `
  @keyframes ripple {
    to {
      width: 100px;
      height: 100px;
      opacity: 0;
    }
  }
  `
  
  // Inject the CSS
  const style = document.createElement("style")
  style.textContent = rippleCSS
  document.head.appendChild(style)
  

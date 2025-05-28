import type { BookPost, Book, Author, User, ReadingList } from "@/types"

export const bookPosts: BookPost[] = [
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
]

export const sampleBooks: Book[] = [
  { id: 1, title: "The Midnight Library", author: "Matt Haig", genre: "Fiction" },
  { id: 2, title: "Project Hail Mary", author: "Andy Weir", genre: "Science Fiction" },
  { id: 3, title: "Klara and the Sun", author: "Kazuo Ishiguro", genre: "Literary Fiction" },
  { id: 4, title: "Dune", author: "Frank Herbert", genre: "Science Fiction" },
  { id: 5, title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", genre: "Historical Fiction" },
]

export const sampleAuthors: Author[] = [
  { id: 1, name: "Matt Haig", books: 12, followers: "2.3M" },
  { id: 2, name: "Andy Weir", books: 4, followers: "1.8M" },
  { id: 3, name: "Kazuo Ishiguro", books: 8, followers: "1.2M" },
  { id: 4, name: "Frank Herbert", books: 23, followers: "3.1M" },
  { id: 5, name: "Taylor Jenkins Reid", books: 7, followers: "2.7M" },
]

export const sampleUsers: User[] = [
  { id: 1, username: "bookworm_jane", name: "Jane Doe", followers: "1.2K", books: 156 },
  { id: 2, username: "sci_fi_lover", name: "John Smith", followers: "890", books: 89 },
  { id: 3, username: "literary_alex", name: "Alex Johnson", followers: "2.1K", books: 203 },
  { id: 4, username: "fantasy_reader", name: "Sarah Wilson", followers: "756", books: 134 },
  { id: 5, username: "classic_mike", name: "Mike Chen", followers: "1.8K", books: 298 },
]

export const readingLists: ReadingList[] = [
  {
    id: "want-to-read",
    title: "Want to Read",
    description: "Books you're planning to read",
    bookCount: 12,
    lastUpdated: "Updated 2 days ago",
    type: "default",
    icon: "fas fa-clock",
    iconColor: "bg-blue-500",
  },
  {
    id: "completed",
    title: "Completed",
    description: "Books you've finished reading",
    bookCount: 24,
    lastUpdated: "Updated today",
    type: "default",
    icon: "fas fa-check-circle",
    iconColor: "bg-green-500",
  },
  {
    id: "favorites",
    title: "Favorites",
    description: "My all-time favorite books that I'd recommend to anyone",
    bookCount: 8,
    lastUpdated: "Updated 1 week ago",
    type: "custom",
    icon: "fas fa-heart",
    iconColor: "bg-red-500",
  },
  {
    id: "classics",
    title: "Must Read Classics",
    description: "Timeless literature that shaped the world",
    bookCount: 15,
    lastUpdated: "Updated 3 days ago",
    type: "custom",
    icon: "fas fa-star",
    iconColor: "bg-yellow-500",
  },
  {
    id: "sci-fi",
    title: "Sci-Fi Adventures",
    description: "Mind-bending science fiction journeys",
    bookCount: 6,
    lastUpdated: "Updated 5 days ago",
    type: "custom",
    icon: "fas fa-rocket",
    iconColor: "bg-cyan-500",
  },
]

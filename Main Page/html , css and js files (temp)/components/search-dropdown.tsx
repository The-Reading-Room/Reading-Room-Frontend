"use client"

import { useState } from "react"
import { Search, ChevronRight } from "lucide-react"
import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import { sampleBooks, sampleAuthors, sampleUsers } from "@/data/sample-data"

export default function SearchDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<any[]>([])

  const handleSearch = (value: string) => {
    setQuery(value)

    if (value.length < 2) {
      setResults([])
      return
    }

    const bookResults = sampleBooks
      .filter(
        (book) =>
          book.title.toLowerCase().includes(value.toLowerCase()) ||
          book.author.toLowerCase().includes(value.toLowerCase()),
      )
      .slice(0, 3)
      .map((book) => ({
        type: "book",
        id: book.id,
        title: book.title,
        subtitle: `by ${book.author} • ${book.genre}`,
        icon: "fas fa-book",
      }))

    const authorResults = sampleAuthors
      .filter((author) => author.name.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 3)
      .map((author) => ({
        type: "author",
        id: author.id,
        title: author.name,
        subtitle: `${author.books} books • ${author.followers} followers`,
        icon: "fas fa-user-edit",
      }))

    const userResults = sampleUsers
      .filter(
        (user) =>
          user.username.toLowerCase().includes(value.toLowerCase()) ||
          user.name.toLowerCase().includes(value.toLowerCase()),
      )
      .slice(0, 3)
      .map((user) => ({
        type: "user",
        id: user.id,
        title: `@${user.username}`,
        subtitle: `${user.name} • ${user.books} books read`,
        icon: "fas fa-user",
      }))

    setResults([...bookResults, ...authorResults, ...userResults])
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        className="w-full justify-between"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="flex items-center gap-2">
          <Search className="w-5 h-5" />
          Search
        </div>
        <ChevronRight className="w-4 h-4" />
      </Button>

      {isOpen && (
        <div
          className="fixed left-64 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 min-w-[320px] z-50"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <Input
            placeholder="Search books, authors, users..."
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            icon={<Search className="w-4 h-4" />}
            className="mb-4"
          />

          {results.length > 0 && (
            <div className="space-y-1 max-h-60 overflow-y-auto">
              {results.map((result) => (
                <button
                  key={`${result.type}-${result.id}`}
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => console.log(`Selected ${result.type}:`, result.id)}
                >
                  <i className={`${result.icon} text-gray-400`} />
                  <div className="text-left">
                    <div className="font-medium text-gray-900">{result.title}</div>
                    <div className="text-sm text-gray-500">{result.subtitle}</div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {query.length >= 2 && results.length === 0 && (
            <div className="text-center py-4 text-gray-500">No results found</div>
          )}

          <div className="border-t border-gray-200 mt-4 pt-4 space-y-1">
            <button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <i className="fas fa-book text-gray-400" />
              <span className="font-medium">Search Books</span>
            </button>
            <button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <i className="fas fa-user-edit text-gray-400" />
              <span className="font-medium">Search Authors</span>
            </button>
            <button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <i className="fas fa-users text-gray-400" />
              <span className="font-medium">Search Users</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

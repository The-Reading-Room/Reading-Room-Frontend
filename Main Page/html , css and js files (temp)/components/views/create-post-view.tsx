"use client"

import { useState } from "react"
import { ArrowLeft, BookOpen, PenTool, ImageIcon, Database } from "lucide-react"
import Button from "@/components/ui/button"
import Card from "@/components/ui/card"
import Input from "@/components/ui/input"
import Textarea from "@/components/ui/textarea"
import type { Book } from "@/types"

interface CreatePostViewProps {
  onBack: () => void
}

export default function CreatePostView({ onBack }: CreatePostViewProps) {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)
  const [thoughts, setThoughts] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [allowComments, setAllowComments] = useState(true)
  const [isPublic, setIsPublic] = useState(true)
  const [isSearching, setIsSearching] = useState(false)

  const handleBookSearch = async () => {
    if (!searchQuery.trim()) return

    setIsSearching(true)

    // Simulate API call
    setTimeout(() => {
      const mockBook: Book = {
        id: 1,
        title: searchQuery,
        author: "Sample Author",
        cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=80&h=120&fit=crop",
      }
      setSelectedBook(mockBook)
      setSearchQuery("")
      setIsSearching(false)
    }, 1500)
  }

  const handlePublish = () => {
    if (!thoughts.trim() || !selectedBook) return

    // Simulate publishing
    console.log("Publishing post:", { thoughts, book: selectedBook, allowComments, isPublic })

    // Reset form and go back
    setThoughts("")
    setSelectedBook(null)
    setAllowComments(true)
    setIsPublic(true)
    onBack()
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" onClick={onBack} icon={<ArrowLeft className="w-4 h-4" />}>
          Back to Home
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Share Your Reading Experience</h1>
          <p className="text-gray-600 mt-1">Tell the community about your latest read</p>
        </div>
      </div>

      {/* Book Search */}
      <Card>
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-indigo-600" />
          <h2 className="text-xl font-semibold">Select a Book</h2>
        </div>

        <div className="flex gap-3 mb-4">
          <Input
            placeholder="Search for a book..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <Button
            variant="primary"
            onClick={handleBookSearch}
            loading={isSearching}
            icon={<Database className="w-4 h-4" />}
          >
            Search Library
          </Button>
        </div>

        {selectedBook && (
          <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-lg border-2 border-indigo-200">
            <ImageIcon
              src={selectedBook.cover || "/placeholder.svg"}
              alt={selectedBook.title}
              className="w-16 h-20 object-cover rounded-md shadow-md"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{selectedBook.title}</h3>
              <p className="text-gray-600">{selectedBook.author}</p>
            </div>
            <Button variant="danger" size="sm" onClick={() => setSelectedBook(null)}>
              Remove
            </Button>
          </div>
        )}
      </Card>

      {/* Thoughts */}
      <Card>
        <div className="flex items-center gap-3 mb-4">
          <PenTool className="w-6 h-6 text-indigo-600" />
          <h2 className="text-xl font-semibold">Share Your Thoughts</h2>
        </div>

        <Textarea
          placeholder="What did you think about this book? Share your insights, favorite quotes, or how it made you feel..."
          value={thoughts}
          onChange={(e) => setThoughts(e.target.value)}
          maxLength={2000}
          showCount
          className="min-h-[150px]"
        />
      </Card>

      {/* Settings & Actions */}
      <Card>
        <div className="flex items-center justify-between">
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={allowComments}
                onChange={(e) => setAllowComments(e.target.checked)}
                className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
              />
              <span className="font-medium text-gray-700">Allow comments</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={isPublic}
                onChange={(e) => setIsPublic(e.target.checked)}
                className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
              />
              <span className="font-medium text-gray-700">Make post public</span>
            </label>
          </div>

          <div className="flex gap-3">
            <Button variant="secondary">Save Draft</Button>
            <Button variant="primary" onClick={handlePublish} disabled={!thoughts.trim() || !selectedBook}>
              Publish Post
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Heart, MessageSquare, ThumbsDown } from "lucide-react"
import Card from "@/components/ui/card"
import Button from "@/components/ui/button"
import { bookPosts } from "@/data/sample-data"
import type { BookPost } from "@/types"

export default function HomeView() {
  const [posts, setPosts] = useState<BookPost[]>(bookPosts)

  const handleLike = (postId: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          const newLiked = !post.liked
          const newLikes = newLiked ? post.likes + 1 : post.likes - 1
          return {
            ...post,
            liked: newLiked,
            likes: newLikes,
            disliked: newLiked ? false : post.disliked,
          }
        }
        return post
      }),
    )
  }

  const handleDislike = (postId: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          const newDisliked = !post.disliked
          return {
            ...post,
            disliked: newDisliked,
            liked: newDisliked ? false : post.liked,
            likes: newDisliked && post.liked ? post.likes - 1 : post.likes,
          }
        }
        return post
      }),
    )
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {posts.map((post) => (
        <Card key={post.id} className="overflow-hidden">
          {/* User Info */}
          <div className="flex items-center mb-4">
            <img
              src={post.userImage || "/placeholder.svg"}
              alt={post.user}
              className="h-10 w-10 rounded-full mr-3 hover:scale-110 transition-transform duration-200"
            />
            <div>
              <p className="font-semibold text-gray-900">{post.user}</p>
              <p className="text-sm text-gray-500">{post.timestamp}</p>
            </div>
          </div>

          {/* Post Content */}
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <p className="text-gray-800 leading-relaxed">{post.content}</p>
            </div>
            <div className="flex-shrink-0 group cursor-pointer">
              <img
                src={post.bookImage || "/placeholder.svg"}
                alt={post.bookTitle}
                className="h-[120px] w-[80px] object-cover rounded-md shadow-md group-hover:scale-105 group-hover:rotate-2 transition-transform duration-300"
              />
              <p className="text-xs font-medium mt-1 text-center">{post.bookTitle}</p>
              <p className="text-xs text-gray-500 text-center">{post.author}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center pt-4 border-t border-gray-100 gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleLike(post.id)}
              className={`${post.liked ? "text-red-500" : "text-gray-500"} hover:text-red-500`}
            >
              <Heart className={`h-5 w-5 ${post.liked ? "fill-current" : ""}`} />
              {post.likes}
            </Button>

            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-indigo-500">
              <MessageSquare className="h-5 w-5" />
              {post.comments}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleDislike(post.id)}
              className={`${post.disliked ? "text-blue-500" : "text-gray-500"} hover:text-blue-500`}
            >
              <ThumbsDown className={`h-5 w-5 ${post.disliked ? "fill-current" : ""}`} />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  )
}

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, MessageSquare, ThumbsDown } from "lucide-react"

interface BookPostProps {
  post: {
    id: number
    user: string
    userImage: string
    content: string
    bookImage: string
    bookTitle: string
    author: string
    likes: number
    comments: number
    timestamp: string
  }
}

export default function BookPost({ post }: BookPostProps) {
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)
  const [likes, setLikes] = useState(post.likes)
  const [showComments, setShowComments] = useState(false)

  const handleLike = () => {
    if (liked) {
      setLiked(false)
      setLikes(likes - 1)
    } else {
      setLiked(true)
      setLikes(likes + 1)
      if (disliked) {
        setDisliked(false)
      }
    }
  }

  const handleDislike = () => {
    if (disliked) {
      setDisliked(false)
    } else {
      setDisliked(true)
      if (liked) {
        setLiked(false)
        setLikes(likes - 1)
      }
    }
  }

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="p-6">
        {/* User info */}
        <div className="flex items-center mb-4">
          <motion.img
            src={post.userImage}
            alt={post.user}
            className="h-10 w-10 rounded-full mr-3"
            whileHover={{ scale: 1.1 }}
          />
          <div>
            <p className="font-semibold">{post.user}</p>
            <p className="text-sm text-gray-500">{post.timestamp}</p>
          </div>
        </div>

        {/* Post content and book */}
        <div className="flex gap-4">
          <div className="flex-1">
            <p className="text-gray-800 mb-4">{post.content}</p>
          </div>
          <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05, rotate: 2 }}>
            <img
              src={post.bookImage || "/placeholder.svg"}
              alt={post.bookTitle}
              className="h-[120px] w-[80px] object-cover rounded-md shadow-md"
            />
            <p className="text-xs font-medium mt-1 text-center">{post.bookTitle}</p>
            <p className="text-xs text-gray-500 text-center">{post.author}</p>
          </motion.div>
        </div>

        {/* Actions */}
        <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
          <motion.button
            className={`flex items-center mr-4 ${liked ? "text-red-500" : "text-gray-500"}`}
            whileTap={{ scale: 0.9 }}
            onClick={handleLike}
          >
            <Heart className="h-5 w-5 mr-1" fill={liked ? "currentColor" : "none"} />
            <span>{likes}</span>
          </motion.button>

          <motion.button
            className="flex items-center mr-4 text-gray-500"
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowComments(!showComments)}
          >
            <MessageSquare className="h-5 w-5 mr-1" />
            <span>{post.comments}</span>
          </motion.button>

          <motion.button
            className={`flex items-center text-gray-500 ${disliked ? "text-blue-500" : "text-gray-500"}`}
            whileTap={{ scale: 0.9 }}
            onClick={handleDislike}
          >
            <ThumbsDown className="h-5 w-5" fill={disliked ? "currentColor" : "none"} />
          </motion.button>
        </div>

        {/* Comments section (toggle) */}
        {showComments && (
          <motion.div
            className="mt-4 pt-4 border-t border-gray-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <p className="text-sm text-gray-500">Comments coming soon...</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

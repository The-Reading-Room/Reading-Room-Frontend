"use client"

import { ArrowLeft, Bookmark, Star, Palette, Plus, Eye, Edit, Trash2 } from "lucide-react"
import Button from "@/components/ui/button"
import Card from "@/components/ui/card"
import { readingLists } from "@/data/sample-data"

interface ListsViewProps {
  onBack: () => void
}

export default function ListsView({ onBack }: ListsViewProps) {
  const defaultLists = readingLists.filter((list) => list.type === "default")
  const customLists = readingLists.filter((list) => list.type === "custom")

  const stats = [
    { label: "Want to Read", value: "12", icon: "fas fa-clock", color: "bg-blue-500" },
    { label: "Completed", value: "24", icon: "fas fa-check-circle", color: "bg-green-500" },
    { label: "Custom Lists", value: "5", icon: "fas fa-heart", color: "bg-orange-500" },
    { label: "Total Books", value: "41", icon: "fas fa-books", color: "bg-red-500" },
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={onBack} icon={<ArrowLeft className="w-4 h-4" />}>
            Back to Home
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Bookmark className="w-8 h-8 text-indigo-600" />
              My Reading Lists
            </h1>
            <p className="text-gray-600 mt-1">Organize and track your reading journey</p>
          </div>
        </div>
        <Button variant="primary" icon={<Plus className="w-4 h-4" />}>
          Create New List
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-xl ${stat.color} flex items-center justify-center text-white`}>
              <i className={`${stat.icon} text-2xl`} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Default Lists */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
          <Star className="w-6 h-6 text-indigo-600" />
          Default Lists
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {defaultLists.map((list) => (
            <Card key={list.id} className="group cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg ${list.iconColor} flex items-center justify-center text-white`}>
                  <i className={`${list.icon} text-xl`} />
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Button variant="ghost" size="sm" icon={<Eye className="w-4 h-4" />} />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">{list.title}</h3>
              <p className="text-gray-600 mb-4">{list.description}</p>

              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-indigo-600">{list.bookCount} books</span>
                <span className="text-gray-500">{list.lastUpdated}</span>
              </div>

              {/* Book previews */}
              <div className="flex items-center gap-1 mt-4 -space-x-2">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={`https://images.unsplash.com/photo-${1544947950 + i}-fa07a98d237f?w=40&h=60&fit=crop`}
                    alt="Book cover"
                    className="w-8 h-12 object-cover rounded border-2 border-white shadow-sm"
                  />
                ))}
                <div className="w-8 h-12 bg-gray-100 rounded border-2 border-white flex items-center justify-center text-xs font-semibold text-gray-600">
                  +{list.bookCount - 3}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Custom Lists */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
          <Palette className="w-6 h-6 text-indigo-600" />
          Custom Lists
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customLists.map((list) => (
            <Card key={list.id} className="group cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg ${list.iconColor} flex items-center justify-center text-white`}>
                  <i className={`${list.icon} text-xl`} />
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-1">
                  <Button variant="ghost" size="sm" icon={<Edit className="w-4 h-4" />} />
                  <Button variant="ghost" size="sm" icon={<Trash2 className="w-4 h-4" />} />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">{list.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{list.description}</p>

              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-indigo-600">{list.bookCount} books</span>
                <span className="text-gray-500">{list.lastUpdated}</span>
              </div>

              {/* Book previews */}
              <div className="flex items-center gap-1 mt-4 -space-x-2">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={`https://images.unsplash.com/photo-${1544947950 + i}-fa07a98d237f?w=40&h=60&fit=crop`}
                    alt="Book cover"
                    className="w-8 h-12 object-cover rounded border-2 border-white shadow-sm hover:scale-110 hover:z-10 transition-transform duration-200"
                  />
                ))}
                <div className="w-8 h-12 bg-gray-100 rounded border-2 border-white flex items-center justify-center text-xs font-semibold text-gray-600">
                  +{list.bookCount - 3}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

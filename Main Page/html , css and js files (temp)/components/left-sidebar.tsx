"use client"

import { Home, PlusCircle, Compass, Users, User, ChevronRight } from "lucide-react"
import Button from "@/components/ui/button"
import Dropdown from "@/components/ui/dropdown"
import SearchDropdown from "@/components/search-dropdown"
import type { ViewType } from "@/types"

interface LeftSidebarProps {
  currentView: ViewType
  onViewChange: (view: ViewType) => void
}

export default function LeftSidebar({ currentView, onViewChange }: LeftSidebarProps) {
  const createOptions = [
    {
      id: "posts",
      label: "Posts",
      icon: <i className="fas fa-pen" />,
      onClick: () => onViewChange("create-post"),
    },
    {
      id: "lists",
      label: "Lists",
      icon: <i className="fas fa-list" />,
      onClick: () => onViewChange("lists"),
    },
    {
      id: "bookclubs",
      label: "Book Clubs",
      icon: <Users className="w-4 h-4" />,
      onClick: () => console.log("Book clubs coming soon!"),
    },
  ]

  const exploreOptions = [
    {
      id: "classics",
      label: "Classics",
      icon: <i className="fas fa-university" />,
      onClick: () => console.log("Exploring classics"),
    },
    {
      id: "fiction",
      label: "Fiction",
      icon: <i className="fas fa-book-open" />,
      onClick: () => console.log("Exploring fiction"),
    },
    {
      id: "fantasy",
      label: "Fantasy",
      icon: <i className="fas fa-dragon" />,
      onClick: () => console.log("Exploring fantasy"),
    },
    {
      id: "scifi",
      label: "Science Fiction",
      icon: <i className="fas fa-rocket" />,
      onClick: () => console.log("Exploring sci-fi"),
    },
  ]

  const navItems = [
    {
      id: "home",
      icon: <Home className="w-5 h-5" />,
      label: "Home",
      onClick: () => onViewChange("home"),
    },
    {
      id: "bookclubs",
      icon: <Users className="w-5 h-5" />,
      label: "Book Clubs",
      onClick: () => console.log("Book clubs"),
    },
    {
      id: "profile",
      icon: <User className="w-5 h-5" />,
      label: "Profile",
      onClick: () => console.log("Profile"),
    },
  ]

  return (
    <div className="sticky top-16 self-start">
      <div className="w-64 bg-white shadow-lg h-[calc(100vh-4rem)] border-r border-gray-200">
        <div className="p-4 h-full overflow-y-auto">
          <nav className="space-y-2 mt-8">
            {/* Regular nav items */}
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentView === item.id ? "primary" : "ghost"}
                className="w-full justify-start"
                onClick={item.onClick}
              >
                {item.icon}
                {item.label}
              </Button>
            ))}

            {/* Search dropdown */}
            <SearchDropdown />

            {/* Create dropdown */}
            <Dropdown
              trigger={
                <Button variant="ghost" className="w-full justify-between">
                  <div className="flex items-center gap-2">
                    <PlusCircle className="w-5 h-5" />
                    Create
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              }
              options={createOptions}
            />

            {/* Explore dropdown */}
            <Dropdown
              trigger={
                <Button variant="ghost" className="w-full justify-between">
                  <div className="flex items-center gap-2">
                    <Compass className="w-5 h-5" />
                    Explore
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              }
              options={exploreOptions}
            />
          </nav>
        </div>
      </div>
    </div>
  )
}

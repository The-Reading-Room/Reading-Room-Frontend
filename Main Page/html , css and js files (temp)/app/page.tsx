"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import LeftSidebar from "@/components/left-sidebar"
import RightSidebar from "@/components/right-sidebar"
import HomeView from "@/components/views/home-view"
import CreatePostView from "@/components/views/create-post-view"
import ListsView from "@/components/views/lists-view"
import type { ViewType } from "@/types"

export default function ReadingRoom() {
  const [currentView, setCurrentView] = useState<ViewType>("home")

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <div className="flex flex-1 pt-16">
        <LeftSidebar currentView={currentView} onViewChange={setCurrentView} />

        <main className="flex-1 px-4 py-8 overflow-auto max-h-[calc(100vh-4rem)]">
          {currentView === "home" && <HomeView />}
          {currentView === "create-post" && <CreatePostView onBack={() => setCurrentView("home")} />}
          {currentView === "lists" && <ListsView onBack={() => setCurrentView("home")} />}
        </main>

        <RightSidebar />
      </div>
    </div>
  )
}

import { Book } from "lucide-react"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 h-16 flex items-center">
        <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-200">
          <Book className="h-8 w-8 text-indigo-600" />
          <h1 className="text-2xl font-bold text-indigo-600">Reading Room</h1>
        </div>
      </div>
    </header>
  )
}

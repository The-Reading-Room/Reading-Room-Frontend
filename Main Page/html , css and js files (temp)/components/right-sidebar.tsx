import Card from "@/components/ui/card"

export default function RightSidebar() {
  const stats = [
    { label: "Books Read", value: "24" },
    { label: "Book Lists", value: "8" },
    { label: "Book Clubs", value: "3" },
  ]

  const genres = [
    { name: "Fantasy", percentage: 75 },
    { name: "Science Fiction", percentage: 60 },
    { name: "Mystery", percentage: 45 },
    { name: "Romance", percentage: 30 },
  ]

  const trendingBooks = [
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "Iron Flame", author: "Rebecca Yarros" },
    { title: "House of Flame and Shadow", author: "Sarah J. Maas" },
  ]

  return (
    <div className="sticky top-16 self-start">
      <div className="w-72 bg-white shadow-lg h-[calc(100vh-4rem)] border-l border-gray-200">
        <div className="p-6 h-full overflow-y-auto space-y-6">
          {/* Stats */}
          <Card padding="md">
            <h3 className="text-lg font-semibold text-indigo-600 mb-4">Your Stats</h3>
            <div className="grid grid-cols-3 gap-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-indigo-50 p-3 rounded-lg text-center hover:-translate-y-1 transition-transform duration-200 cursor-pointer"
                >
                  <p className="text-2xl font-bold text-indigo-600">{stat.value}</p>
                  <p className="text-xs text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Genres */}
          <Card padding="md">
            <h3 className="text-lg font-semibold text-indigo-600 mb-4">Popular Genres</h3>
            <div className="space-y-3">
              {genres.map((genre) => (
                <div key={genre.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{genre.name}</span>
                    <span className="text-gray-500">{genre.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${genre.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Trending */}
          <Card padding="md">
            <h3 className="text-lg font-semibold text-indigo-600 mb-4">Trending Books</h3>
            <div className="space-y-3">
              {trendingBooks.map((book, index) => (
                <div
                  key={book.title}
                  className="bg-gray-50 p-3 rounded-lg hover:bg-indigo-50 hover:translate-x-1 transition-all duration-200 cursor-pointer"
                >
                  <p className="font-medium text-gray-900">{book.title}</p>
                  <p className="text-sm text-gray-600">{book.author}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-greenDark mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">Could not find the requested resource</p>
        <Link 
          href="/"
          className="px-6 py-3 bg-emerald-700 text-white rounded-full hover:bg-greenDark transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
} 
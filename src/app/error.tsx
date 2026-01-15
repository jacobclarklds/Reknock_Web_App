'use client'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-16">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">500</h1>
      <p className="text-xl text-gray-600 mb-8">Something went wrong</p>
      <button
        onClick={() => reset()}
        className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg bg-primary-700 text-white hover:bg-primary-800 transition-colors"
      >
        Try again
      </button>
    </div>
  )
}

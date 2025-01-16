import Tweet from './Tweet'

interface SearchResultsProps {
  results: {
    username: string
    handle: string
    content: string
    likes: number
    retweets: number
    comments: number
  }[]
}

export default function SearchResults({ results }: SearchResultsProps) {
  if (results.length === 0) {
    return <p className="text-center text-gray-500 dark:text-gray-400 mt-4">No results found.</p>
  }

  return (
    <div className="space-y-4 mt-4">
      {results.map((tweet, index) => (
        <Tweet key={index} {...tweet} />
      ))}
    </div>
  )
}


import Tweet from '../components/Tweet'

const bookmarkedTweets = [
  {
    username: "TechGuru",
    handle: "@techguru",
    content: "10 tips for writing clean code that every developer should know!",
    likes: 1200,
    retweets: 450,
    comments: 80
  },
  {
    username: "FitnessFreak",
    handle: "@fitnessfreak",
    content: "New study shows the benefits of high-intensity interval training (HIIT)",
    likes: 800,
    retweets: 300,
    comments: 50
  },
  {
    username: "Foodie101",
    handle: "@foodie101",
    content: "Easy 5-ingredient recipes for busy weeknights",
    likes: 1500,
    retweets: 600,
    comments: 120
  }
]

export default function Bookmarks() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Bookmarks</h2>
      {bookmarkedTweets.map((tweet, index) => (
        <Tweet key={index} {...tweet} />
      ))}
    </div>
  )
}


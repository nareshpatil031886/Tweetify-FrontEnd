import TweetInput from '../components/TweetInput'
import Tweet from '../components/Tweet'

export default function Home() {
  return (
    <div className="space-y-4">
      <TweetInput />
      <Tweet
        username="elonmusk"
        handle="@elonmusk"
        content="Excited about the future of AI and sustainable energy!"
        likes={1000}
        retweets={500}
        comments={200}
      />
      <Tweet
        username="BillGates"
        handle="@BillGates"
        content="Investing in clean energy solutions for a better tomorrow."
        likes={800}
        retweets={300}
        comments={150}
      />
    </div>
  )
}


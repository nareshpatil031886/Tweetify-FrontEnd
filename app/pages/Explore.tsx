'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Tweet from '../components/Tweet'
import SearchResults from '../components/SearchResults'

const dummyTweets = [
  {
    username: "TechCrunch",
    handle: "@TechCrunch",
    content: "Breaking: New AI breakthrough in natural language processing!",
    likes: 500,
    retweets: 200,
    comments: 100
  },
  {
    username: "BBCNews",
    handle: "@BBCNews",
    content: "Global leaders meet to discuss climate change initiatives",
    likes: 1500,
    retweets: 1000,
    comments: 500
  },
  {
    username: "CNNBreaking",
    handle: "@cnnbrk",
    content: "Major scientific discovery announced today",
    likes: 2000,
    retweets: 1500,
    comments: 800
  },
  {
    username: "ESPN",
    handle: "@espn",
    content: "Underdog team wins championship in stunning upset",
    likes: 3000,
    retweets: 2000,
    comments: 1000
  }
]

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<typeof dummyTweets>([])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would be an API call
    const results = dummyTweets.filter(tweet => 
      tweet.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tweet.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tweet.handle.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setSearchResults(results)
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSearch} className="flex space-x-2">
        <Input 
          placeholder="Search Twitter" 
          className="flex-grow" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </form>

      {searchQuery ? (
        <SearchResults results={searchResults} />
      ) : (
        <Tabs defaultValue="foryou">
          <TabsList>
            <TabsTrigger value="foryou">For You</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
            <TabsTrigger value="sports">Sports</TabsTrigger>
          </TabsList>
          <TabsContent value="foryou">
            <Tweet {...dummyTweets[0]} />
          </TabsContent>
          <TabsContent value="trending">
            <Tweet {...dummyTweets[1]} />
          </TabsContent>
          <TabsContent value="news">
            <Tweet {...dummyTweets[2]} />
          </TabsContent>
          <TabsContent value="sports">
            <Tweet {...dummyTweets[3]} />
          </TabsContent>
        </Tabs>
      )}
    </div>
  )
}


'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Image, Smile, MapPin } from 'lucide-react'

export default function TweetInput() {
  const [tweet, setTweet] = useState('')

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex space-x-4">
        <Avatar>
          <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="flex-grow">
          <Textarea
            placeholder="What's happening?"
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
            className="w-full resize-none border-none focus:ring-0 bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
          />
          <div className="flex justify-between items-center mt-4">
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
                <Image className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
                <Smile className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
                <MapPin className="w-5 h-5" />
              </Button>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              Tweet
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}


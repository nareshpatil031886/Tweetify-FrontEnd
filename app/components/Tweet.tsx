'use client'

import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageCircle, Repeat2, Heart, Share } from 'lucide-react'

interface TweetProps {
  username: string
  handle: string
  content: string
  likes: number
  retweets: number
  comments: number
}

export default function Tweet({ username, handle, content, likes, retweets, comments }: TweetProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex space-x-4">
        <Avatar>
          <AvatarImage src={`/placeholder-${username}.jpg`} alt={username} />
          <AvatarFallback>{username[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-grow">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-gray-900 dark:text-white">{username}</span>
            <span className="text-gray-500 dark:text-gray-400">{handle}</span>
          </div>
          <p className="mt-2 text-gray-800 dark:text-gray-200">{content}</p>
          <div className="flex justify-between mt-4 text-gray-500 dark:text-gray-400">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span>{comments}</span>
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="flex items-center space-x-2">
              <Repeat2 className="w-5 h-5" />
              <span>{retweets}</span>
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="flex items-center space-x-2">
              <Heart className="w-5 h-5" />
              <span>{likes}</span>
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Share className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}


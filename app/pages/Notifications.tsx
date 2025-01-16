import { Bell, MessageCircle, Heart, Repeat2, User } from 'lucide-react'
import { motion } from 'framer-motion'

const notifications = [
  { type: 'mention', user: 'Alice', content: 'mentioned you in a tweet' },
  { type: 'like', user: 'Bob', content: 'liked your tweet' },
  { type: 'retweet', user: 'Charlie', content: 'retweeted your tweet' },
  { type: 'follow', user: 'David', content: 'followed you' },
]

export default function Notifications() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'mention':
        return <MessageCircle className="w-5 h-5 text-blue-500" />
      case 'like':
        return <Heart className="w-5 h-5 text-red-500" />
      case 'retweet':
        return <Repeat2 className="w-5 h-5 text-green-500" />
      case 'follow':
        return <User className="w-5 h-5 text-purple-500" />
      default:
        return <Bell className="w-5 h-5 text-gray-500" />
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Notifications</h2>
      {notifications.map((notification, index) => (
        <motion.div
          key={index}
          className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex items-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          {getIcon(notification.type)}
          <div>
            <span className="font-bold">{notification.user}</span>{' '}
            {notification.content}
          </div>
        </motion.div>
      ))}
    </div>
  )
}


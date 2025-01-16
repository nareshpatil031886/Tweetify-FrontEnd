'use client'

import { motion } from 'framer-motion'
import { Home, Hash, Bell, Mail, Bookmark, User, MoreHorizontal, LogOut } from 'lucide-react'

interface SidebarProps {
  setCurrentPage: (page: string) => void
  currentPage: string
  setIsLoggedIn: (isLoggedIn: boolean) => void
}

export default function Sidebar({ setCurrentPage, currentPage, setIsLoggedIn }: SidebarProps) {
  const menuItems = [
    { icon: Home, label: 'Home', page: 'home' },
    { icon: Hash, label: 'Explore', page: 'explore' },
    { icon: Bell, label: 'Notifications', page: 'notifications' },
    { icon: Mail, label: 'Messages', page: 'messages' },
    { icon: Bookmark, label: 'Bookmarks', page: 'bookmarks' },
    { icon: User, label: 'Profile', page: 'profile' },
    { icon: MoreHorizontal, label: 'More', page: 'more' },
  ]

  return (
    <motion.aside
      className="w-64 hidden md:block"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <motion.button
            key={item.label}
            onClick={() => setCurrentPage(item.page)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full w-full text-left transition-colors ${
              currentPage === item.page
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-500'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <item.icon className="w-6 h-6" />
            <span>{item.label}</span>
          </motion.button>
        ))}
        <motion.button
          onClick={() => setIsLoggedIn(false)}
          className="flex items-center space-x-2 px-4 py-2 rounded-full w-full text-left transition-colors text-red-500 hover:bg-red-100 dark:hover:bg-red-900"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <LogOut className="w-6 h-6" />
          <span>Logout</span>
        </motion.button>
      </nav>
    </motion.aside>
  )
}


'use client'

import { motion } from 'framer-motion'
import { Bell, Home, Mail, Search, User } from 'lucide-react'

export default function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-500">Twitter Clone</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Home className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors" /></li>
            <li><Search className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors" /></li>
            <li><Bell className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors" /></li>
            <li><Mail className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors" /></li>
            <li><User className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors" /></li>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}


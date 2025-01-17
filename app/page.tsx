'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Toaster } from 'react-hot-toast';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Notifications from './pages/Notifications'
import Messages from './pages/Messages'
import Bookmarks from './pages/Bookmarks'
import Profile from './pages/Profile'
import More from './pages/More'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'

export default function App() {
  const [currentPage, setCurrentPage] = useState('login')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const storedToken = localStorage.getItem('accessToken')
    const storedLoginState = localStorage.getItem('isLoggedIn')

    if (storedToken && storedLoginState === 'true') {
      setIsLoggedIn(true)
    }
  }, [])

  const renderPage = () => {
    if (!isLoggedIn) {
      switch (currentPage) {
        case 'login':
          return <Login setCurrentPage={setCurrentPage} setIsLoggedIn={setIsLoggedIn}/>
        case 'signup':
          return <Signup setCurrentPage={setCurrentPage} />
        case 'forgot-password':
          return <ForgotPassword setCurrentPage={setCurrentPage}  />
        default:
          return <Login setCurrentPage={setCurrentPage} setIsLoggedIn={setIsLoggedIn} />
      }
    }

    switch (currentPage) {
      case 'home':
        return <Home/>
      case 'explore':
        return <Explore />
      case 'notifications':
        return <Notifications />
      case 'messages':
        return <Messages />
      case 'bookmarks':
        return <Bookmarks />
      case 'profile':
        return <Profile />
      case 'more':
        return <More />
      default:
        return <Home/>
    }
  }

  return (
    isClient && (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Toaster position="top-center" />
        {isLoggedIn && <Header />}
        <div className="container mx-auto flex gap-4 p-4 pt-20">
          {isLoggedIn && <Sidebar setCurrentPage={setCurrentPage} currentPage={currentPage} setIsLoggedIn={setIsLoggedIn} />}
          <main className="flex-grow">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderPage()}
            </motion.div>
          </main>
        </div>
      </div>
    )
  )
}

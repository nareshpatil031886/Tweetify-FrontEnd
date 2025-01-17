'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Twitter } from 'lucide-react'
import { Loader } from 'lucide-react'
import { signupUser } from '@/services/authService';
import toast from 'react-hot-toast' // Import toast

export default function Signup({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const userData = { name, email, password }
      const response = await signupUser(userData)
      console.log('Signup successful:', response)
      
      toast.success('Signup successful!', {
        duration: 3000, // Message duration in ms
      })
      setCurrentPage('login')
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'An unexpected error occurred'
      console.error('Signup failed:', errorMessage)

      toast.error(errorMessage, {
        duration: 4000,
      })
    }
    finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <motion.div
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center mb-8">
          <Twitter className="w-12 h-12 text-blue-500" />
        </div>
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Create your account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 text-sm font-medium">
              Name
            </Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full mt-1"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 text-sm font-medium">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-1"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-gray-700 dark:text-gray-300 text-sm font-medium">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-1"
              placeholder="Create a password"
            />
          </div>
          <Button type="submit" 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white"
          disabled={isLoading}
           >
            {isLoading ? (
              <span className="flex justify-center items-center">
                <Loader className="animate-spin mr-2" /> Loading
              </span>
            ) : (
              'Sign up'
            )}
          </Button>
        </form>
        <div className="mt-6 text-center text-sm">
          <span className="text-gray-600 dark:text-gray-400">Already have an account? </span>
          <button onClick={() => setCurrentPage('login')} className="text-blue-500 hover:underline">
            Log in
          </button>
        </div>
      </motion.div>
    </div>
  )
}

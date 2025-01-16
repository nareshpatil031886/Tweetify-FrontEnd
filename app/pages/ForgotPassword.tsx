'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Twitter } from 'lucide-react'
import Link from 'next/link'

export default function ForgotPassword({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle forgot password logic here
    console.log('Forgot password request for:', email)
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
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Forgot Password</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Enter your email address and we'll send you a link to reset your password.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 text-sm font-medium">Email</Label>
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
          <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">Send reset link</Button>
        </form>
        <div className="mt-6 text-center text-sm">
          <button onClick={() => setCurrentPage('login')} className="text-blue-500 hover:underline">
            Back to login
          </button>
        </div>
      </motion.div>
    </div>
  )
}


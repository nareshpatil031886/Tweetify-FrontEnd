import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Twitter } from 'lucide-react'
import { Loader } from 'lucide-react'
import { loginUser } from '@/services/authService'
import toast from 'react-hot-toast'

export default function Login({ setCurrentPage, setIsLoggedIn }: { setCurrentPage: (page: string) => void, setIsLoggedIn: (isLoggedIn: boolean) => void }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsLoading(true)

    try {
      const credentials = { email, password }
      const response = await loginUser(credentials)
      localStorage.setItem('accessToken', response.access)
      localStorage.setItem('isLoggedIn', 'true')
      console.log('Login successful:', response)
      toast.success('Login successful!', { duration: 4000 })
      setIsLoggedIn(true)
      setCurrentPage('home')
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'Login failed. Please check your credentials.'
      console.error('Login failed:', errorMessage)
      toast.error(errorMessage, { duration: 4000 })
    } finally {
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
          Log in to Twitter
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
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
              placeholder="Enter your password"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex justify-center items-center">
                <Loader className="animate-spin mr-2" /> Loading
              </span>
            ) : (
              'Log in'
            )}
          </Button>
        </form>
        <div className="mt-6 flex justify-between text-sm">
          <button onClick={() => setCurrentPage('forgot-password')} className="text-blue-500 hover:underline">
            Forgot password?
          </button>
          <button onClick={() => setCurrentPage('signup')} className="text-blue-500 hover:underline">
            Sign up for Twitter
          </button>
        </div>
      </motion.div>
    </div>
  )
}

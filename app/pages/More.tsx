'use client'

import { Settings, HelpCircle, Moon, Sun, LogOut } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useTheme } from '../contexts/ThemeContext'

export default function More() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">More</h2>
      
      <div className="space-y-4">
        <Button variant="outline" className="w-full justify-start text-gray-700 dark:text-gray-300">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
        <Button variant="outline" className="w-full justify-start text-gray-700 dark:text-gray-300">
          <HelpCircle className="mr-2 h-4 w-4" />
          Help Center
        </Button>
        <Button
          variant="outline"
          className="w-full justify-between text-gray-700 dark:text-gray-300"
          onClick={toggleTheme}
        >
          <span className="flex items-center">
            {theme === 'dark' ? <Moon className="mr-2 h-4 w-4" /> : <Sun className="mr-2 h-4 w-4" />}
            {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {theme === 'dark' ? 'On' : 'Off'}
          </span>
        </Button>
      </div>

      <Button variant="destructive" className="w-full">
        <LogOut className="mr-2 h-4 w-4" />
        Log out
      </Button>
    </div>
  )
}


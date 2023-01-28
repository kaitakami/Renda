import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, BeakerIcon } from '@heroicons/react/24/solid';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI to avoid hydration error
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <select value={theme} className='py-1 pr-3 pl-1 rounded-md transition duration-150 ease-in-out dark:bg-gray-800 bg-white text-gray-700 dark:text-gray-200 border border-gray-600 dark:border-gray-400 focus:outline-none focus:border-blue-500' onChange={e => setTheme(e.target.value)}>
      <option className='text-gray-500 dark:text-gray-200' value="system">System</option>
      <option className='text-gray-500 dark:text-gray-200' value="dark">Dark</option>
      <option className='text-gray-500 dark:text-gray-200' value="light">Light</option>
    </select>
  )
}

export default ThemeSwitch

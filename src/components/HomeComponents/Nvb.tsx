'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Code } from 'lucide-react'
const Header = ({ admin }: { admin: boolean }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className=" w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm  ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl flex items-center gap-2">
              <Code /> Youssof
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link></li>
              <li><Link href="/#projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</Link></li>
              <li><Link href="/#skills" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Skills</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link></li>
              <li><Link href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link></li>
              {admin && <li><Link href="/admin" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Admin</Link></li>}
            </ul>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/#projects" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</Link>
            <Link href="/#skills" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Skills</Link>
            <Link href="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link href="#contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            {admin && <Link href="/admin" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Admin</Link>}
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Header


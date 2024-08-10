import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
<header>
<div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">Logo</div>
      <nav className="hidden md:flex space-x-4">
        <Link href="/" className="hover:text-gray-400">Home</Link>
        <Link href="/about" className="hover:text-gray-400">About</Link>
        <Link href="/signup" className="hover:text-gray-400">Sign Up</Link>
      </nav>
      <div className="md:hidden">
        <button className="text-white">Menu</button>
      </div>
    </div>
</header>
  )
}

export default Header
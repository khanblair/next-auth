import React from 'react'
import Link from 'next/link'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
<header>
<div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">Logo</div>
      <nav className="hidden md:flex space-x-4">
        <Link href="/" className="hover:text-gray-400">Home</Link>
        <Link href="/about" className="hover:text-gray-400">About</Link>
        <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </nav>
    </div>
</header>
  )
}

export default Header
'use client'

import { useState, useEffect, useRef } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { Menu, X, User, Settings, LogOut, Home, LayoutDashboard } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation({ isDashboard = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { data: session } = useSession()
  const pathname = usePathname()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header className={`shadow-lg ${isDashboard ? 'bg-gray-800' : 'bg-gradient-to-r from-purple-600 to-indigo-600'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Logo isDashboard={isDashboard} />
          <nav className="hidden md:flex items-center space-x-6">
            <NavItems isDashboard={isDashboard} />
            {session ? (
              <UserMenu session={session} isDashboard={isDashboard} />
            ) : (
              <AuthButtons isDashboard={isDashboard} />
            )}
          </nav>
          <MobileMenuButton
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
        {isMenuOpen && <MobileMenu isDashboard={isDashboard} session={session} />}
      </div>
    </header>
  )
}

function Logo({ isDashboard }) {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`w-8 h-8 ${isDashboard ? 'text-yellow-400' : 'text-white'}`}
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
      <h1 className={`text-2xl font-bold ${isDashboard ? 'text-white' : 'text-white'}`}>
        News<span className={`${isDashboard ? 'text-yellow-400' : 'text-yellow-300'}`}>Assist</span>
      </h1>
    </Link>
  )
}

function NavItems({ isDashboard }) {
  return (
    <>
      {isDashboard ? (
        <NavLink href="/dashboard">
          <LayoutDashboard className="w-4 h-4 mr-2 inline-block" />
          Dashboard
        </NavLink>
      ) : (
        <>
          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/about">About</NavLink>
        </>
      )}
    </>
  )
}

function NavLink({ href, children }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors hover:text-white flex items-center ${
        isActive
          ? 'text-white'
          : 'text-gray-300 hover:text-gray-100'
      }`}
    >
      {children}
    </Link>
  )
}

function AuthButtons({ isDashboard }) {
  if (isDashboard) return null

  return (
    <div className="flex items-center space-x-4">
      <Link href="/auth/signin">
        <button className="text-white hover:text-yellow-300 hover:bg-white/10 px-4 py-2 rounded-md transition-colors">
          Log In
        </button>
      </Link>
      <Link href="/auth/signup">
        <button className="bg-yellow-400 text-purple-700 hover:bg-yellow-300 px-4 py-2 rounded-md transition-colors">
          Sign Up
        </button>
      </Link>
    </div>
  )
}

function UserMenu({ session, isDashboard }) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-white hover:text-yellow-300 transition-colors"
      >
        {session.user?.image ? (
          <img
            src={session.user.image}
            alt={session.user.name || 'User avatar'}
            className="h-8 w-8 rounded-full object-cover"
          />
        ) : (
          <User className="h-6 w-6" />
        )}
        <span className="text-sm font-medium">{session.user?.name}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
          {isDashboard ? (
            <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <Home className="inline-block w-4 h-4 mr-2" />
              Home
            </Link>
          ) : (
            <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <LayoutDashboard className="inline-block w-4 h-4 mr-2" />
              Dashboard
            </Link>
          )}
          <Link href="/dashboard/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <Settings className="inline-block w-4 h-4 mr-2" />
            Settings
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <LogOut className="inline-block w-4 h-4 mr-2" />
            Log out
          </button>
        </div>
      )}
    </div>
  )
}

function MobileMenuButton({ isOpen, onClick }) {
  return (
    <button
      className="md:hidden text-white hover:text-yellow-300 transition-colors"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      onClick={onClick}
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  )
}

function MobileMenu({ isDashboard, session }) {
  return (
    <div className="md:hidden mt-4 pb-4 space-y-4">
      <NavItems isDashboard={isDashboard} />
      {session ? (
        <div className="pt-4 border-t border-gray-600">
          <div className="flex items-center space-x-4 mb-4">
            {session.user?.image ? (
              <img
                src={session.user.image}
                alt={session.user.name || 'User avatar'}
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              <User className="h-10 w-10 text-gray-400" />
            )}
            <div>
              <div className="text-sm font-medium text-white">{session.user?.name}</div>
              <div className="text-xs text-gray-400">{session.user?.email}</div>
            </div>
          </div>
          {isDashboard ? (
            <Link href="/" className="block py-2 text-gray-300 hover:text-white">
              <Home className="inline-block w-4 h-4 mr-2" />
              Home
            </Link>
          ) : (
            <Link href="/dashboard" className="block py-2 text-gray-300 hover:text-white">
              <LayoutDashboard className="inline-block w-4 h-4 mr-2" />
              Dashboard
            </Link>
          )}
          <Link href="/dashboard/settings" className="block py-2 text-gray-300 hover:text-white">
            <Settings className="inline-block w-4 h-4 mr-2" />
            Settings
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="block w-full text-left py-2 text-gray-300 hover:text-white"
          >
            <LogOut className="inline-block w-4 h-4 mr-2" />
            Log Out
          </button>
        </div>
      ) : (
        <AuthButtons isDashboard={isDashboard} />
      )}
    </div>
  )
}

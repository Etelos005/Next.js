import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' }
  ]

  const isActive = (path) => router.pathname === path

  return (
    <header className="bg-black text-white px-6 py-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">Creo</Link>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`cursor-pointer transition duration-200 ${
                  isActive(link.href) ? 'text-amber-400 font-semibold' : 'text-white hover:text-amber-300'
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-3 px-6 space-y-4 bg-black/95 py-4 rounded-b-lg">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                onClick={() => setMenuOpen(false)}
                className={`block transition duration-200 ${
                  isActive(link.href) ? 'text-amber-400 font-semibold' : 'text-white hover:text-amber-300'
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

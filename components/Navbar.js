import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-brand text-brand-text shadow-md relative z-10">
      <div className="max-w-[1320px] mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Creo</div>

        <div
          className="flex flex-col gap-[5px] w-[25px] cursor-pointer md:hidden z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`h-[3px] w-full bg-white rounded transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[8px]' : ''
            }`}
          />
          <span
            className={`h-[3px] w-full bg-white rounded transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-[3px] w-full bg-white rounded transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[8px]' : ''
            }`}
          />
        </div>

        <ul className="hidden md:flex gap-6">
          {['Home', 'About', 'Services', 'Contact'].map((label, i) => (
            <li key={i}>
              <a
                href={label === 'Home' ? '/' : `#${label.toLowerCase()}`}
                className="hover:text-brand-accent transition"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && (
        <div className="absolute top-full right-4 mt-2 bg-black text-white w-[200px] rounded-lg shadow-lg z-40 p-4 space-y-2">
          {['Home', 'About', 'Services', 'Contact'].map((label, i) => (
            <a
              key={i}
              href={label === 'Home' ? '/' : `#${label.toLowerCase()}`}
              className="block text-base hover:text-brand-accent transition"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}


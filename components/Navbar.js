import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-brand text-brand-text shadow-md relative z-10">
      <div className="max-w-[1320px] mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Creo</div>

        <div
          className="flex flex-col gap-[5px] w-[25px] cursor-pointer md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`h-[3px] bg-brand-text rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
          <span className={`h-[3px] bg-brand-text rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-[3px] bg-brand-text rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
        </div>

        <ul
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } md:flex absolute md:static top-full right-4 md:right-0 bg-brand md:bg-transparent flex-col md:flex-row items-start md:items-center w-[200px] md:w-auto gap-0 md:gap-6 rounded-b-lg md:rounded-none shadow-lg md:shadow-none z-50`}
        >
          {['Home', 'About', 'Services', 'Contact'].map((label, i) => (
            <li key={i} className="w-full md:w-auto">
              <a
                href={label === 'Home' ? '/' : `#${label.toLowerCase()}`}
                className="block w-full px-5 py-3 md:py-0 md:px-0 text-[16px] hover:text-brand-accent transition"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

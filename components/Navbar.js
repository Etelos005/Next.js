import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-[#004466] shadow-md px-6 py-4 z-10 relative">
      <div className="max-w-[1320px] mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <a href="/">Creo</a>
        </div>

        <ul className="hidden md:flex gap-6">
          <li><a className="text-white hover:text-yellow-400" href="/">Home</a></li>
          <li><a className="text-white hover:text-yellow-400" href="#about">About</a></li>
          <li><a className="text-white hover:text-yellow-400" href="#services">Services</a></li>
          <li><a className="text-white hover:text-yellow-400" href="#contact-form">Contact</a></li>
        </ul>

        <div className="md:hidden flex flex-col gap-1 cursor-pointer" onClick={() => setOpen(!open)}>
          <span className={`w-6 h-[3px] bg-white transition-transform ${open ? 'rotate-45 translate-y-[6px]' : ''}`}></span>
          <span className={`w-6 h-[3px] bg-white transition-opacity ${open ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-[3px] bg-white transition-transform ${open ? '-rotate-45 -translate-y-[6px]' : ''}`}></span>
        </div>
      </div>

      {open && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-[#004466] flex flex-col gap-2 p-4 rounded-b-lg shadow-lg z-20">
          <li><a className="text-white hover:text-yellow-400 block py-2" href="/">Home</a></li>
          <li><a className="text-white hover:text-yellow-400 block py-2" href="#about">About</a></li>
          <li><a className="text-white hover:text-yellow-400 block py-2" href="#services">Services</a></li>
          <li><a className="text-white hover:text-yellow-400 block py-2" href="#contact-form">Contact</a></li>
        </ul>
      )}
    </nav>
  )
}

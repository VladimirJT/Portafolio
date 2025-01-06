'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-90 bg-opacity-70 backdrop-blur-md text-gray-100 p-4 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold Open-sans">Mi Portafolio</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-100 focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <ul className={`md:flex space-y-4 md:space-y-0 md:space-x-6 ${isMenuOpen ? 'block absolute top-full left-0 right-0 bg-gray-900 p-4 ' : 'hidden'}`}>
          {['Inicio', 'Experiencia', 'Proyectos', 'Lenguajes'].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="hover:text-gray-300 transition-colors text-sm uppercase tracking-wider font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

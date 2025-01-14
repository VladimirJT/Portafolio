'use client'

import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const smoothScroll = (e: MouseEvent) => {
      e.preventDefault()
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
      if (targetId) {
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          const startPosition = window.pageYOffset
          const targetPosition = targetElement.getBoundingClientRect().top + startPosition
          const distance = targetPosition - startPosition
          const duration = 1000 // ms
          let start: number | null = null

          const step = (timestamp: number) => {
            if (!start) start = timestamp
            const progress = timestamp - start
            const percentage = Math.min(progress / duration, 1)
            window.scrollTo(0, startPosition + distance * easeInOutCubic(percentage))
            if (progress < duration) window.requestAnimationFrame(step)
          }

          window.requestAnimationFrame(step)
        }
      }
    }

    const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', smoothScroll as EventListener)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', smoothScroll as EventListener)
      })
    }
  }, [])

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
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-gray-300 transition-colors text-sm uppercase tracking-wider font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}


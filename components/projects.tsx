'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'

export default function Projects() {
  const [openProject, setOpenProject] = useState<number | null>(null)

  const projects = [
    {
      title: "E-commerce",
      description: "Plataforma de comercio electrónico con carrito y pasarela de pago.",
      image: "/images/fondo1.png",
      link: "https://github.com/VladimirJT/ClothesVod"
    },
    {
      title: "Portafolio Website",
      description: "Sitio web de portafolio personal con diseño responsive.",
      image: "/images/portafolio.png",
      link: "https://github.com/VladimirJT/Portafolio"
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard de clima con datos en tiempo real y pronósticos.",
      image: "/images/fondo2.png",
      link: "https://github.com/yourusername/weather-dashboard"
    }
  ]

  const toggleProject = (index: number) => {
    setOpenProject(openProject === index ? null : index)
  }

  return (
    <section id="proyectos" className="bg-gradient-to-b from-black to-gray-900 text-gray-100 py-20">
      <div className="container mx-auto py-5 px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white bg-clip-text ">
          Proyectos
        </h2>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <button
                onClick={() => toggleProject(index)}
                className="w-full p-4 flex justify-between items-center text-left focus:outline-none transition-all duration-300 ease-in-out"
              >
                <span className="text-lg font-semibold">{project.title}</span>
                <span className="transform transition-transform duration-300">
                  {openProject === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openProject === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ transitionProperty: 'max-height, opacity' }}
              >
                {openProject === index && (
                  <div className="p-4 bg-gray-700">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1920}
                      height={1080}
                      className="w-full object-cover mb-4 rounded"
                    />
                    <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                    <Link href={project.link} className="inline-flex items-center text-gray-300 hover:text-gray-100 transition-colors">
                      Ver proyecto <ExternalLink size={16} className="ml-2" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

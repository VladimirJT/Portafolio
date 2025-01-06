import { FaHtml5, FaJs, FaLaravel, FaPython, FaReact } from 'react-icons/fa'
import { SiAstro, SiTailwindcss } from 'react-icons/si'

export default function Languages() {
  const languages = [
    { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
    { name: "HTML", icon: FaHtml5, color: "#e34f26" },
    { name: "Python", icon: FaPython, color: "#3776ab" },
    { name: "React", icon: FaReact, color: "#61dafb" },
    { name: "Astro", icon: SiAstro, color: "#ff5a03" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38b2ac" },
    { name: "Laravel", icon: FaLaravel, color: "#ff2d20" },
  ]

  return (
    <section id="lenguajes" className="bg-gradient-to-b from-gray-900 to-black text-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 open-sans text-center text-white bg-clip-text ">
          Lenguajes y Tecnologías
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {languages.map((lang, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="relative mb-2">
                <div className="absolute inset-0 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" style={{ backgroundColor: lang.color }}></div>
                <lang.icon size={50} className="relative z-10 transition-colors duration-300" style={{ color: lang.color }} />
              </div>
              <span className="mt-1 text-sm md:text-base font-medium text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                {lang.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

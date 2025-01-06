export default function Experience() {
  const experiences = [
    {
      period: "2024 - 2025",
      roles: [
        {
          title: "Desarrollador Full Stack",
          company: "Apostar S.A",
          description: "Desarrollo full-stack de interfaces web responsive utilizando react, Astro, CSS, Tailwind CSS Implementación de funcionalidades dinámicas en el backend usando JavaScript y también tuve la oportunidad de trabajar en el backend, donde aprendí a crear endpoints con Django"
        },
      ]
    },
  ]

  return (
    <section id="experiencia" className="bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white bg-clip-text ">Experiencia</h2>
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-green-600 rounded-full"></div>
              <div className="pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-black-400">{exp.period}</h3>
                <div className="space-y-8">
                  {exp.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                      <h4 className="text-xl font-semibold mb-2 text-white">{role.title}</h4>
                      <p className="text-gray-500 mb-2">{role.company}</p>
                      <p className="text-gray-400">{role.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


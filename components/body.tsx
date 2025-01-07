import Image from 'next/image'
import Link from 'next/link'

export default function Body() {
  return (
    <section id="inicio" className="bg-gradient-to-t from-gray-900 to-black text-gray-100 py-32">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 text-center">
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gray-700 rounded-full blur-2xl opacity-20"></div>
          <Image
            src="/images/foto.jpg"
            alt="Foto de perfil"
            width={300}
            height={300}
            className="rounded-full shadow-2xl relative z-10"
          />
        </div>
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-4 Open-sans bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">Vladimir</h1>
          <p className="text-xl mb-6 text-gray-300 font-light">
            Soy tecnólogo en Análisis y Desarrollo de Software con 6 meses de experiencia práctica como programador front-end en Apostar S.A. Me apasiona la tecnología y la programación. Soy una persona adaptable y aprendo rápidamente, siempre dispuesto a aprender. Busco aportar mi experiencia y, a la vez, seguir aprendiendo para contribuir al crecimiento de la organización.
          </p>
          <Link
            href="/CSVVladimir.pdf"
            className="inline-block mt-6 bg-gradient-to-r from-gray-500 to-gray-700 text-white font-bold py-3 px-6 rounded-full hover:from-gray-600 hover:to-gray-800 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Descargar CSV
          </Link>
        </div>
      </div>
    </section>
  )
}


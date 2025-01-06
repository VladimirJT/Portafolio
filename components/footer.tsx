import Link from 'next/link'
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/VladimirJT", icon: FaGithub },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/vladimir-jose/", icon: FaLinkedin },
    { name: "Instagram", url: "https://www.instagram.com/vladi_jt", icon: FaInstagram },
  ]

  return (
    <footer className="bg-black from-black to-gray-800 text-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="hover:text-gray-300 transition-colors duration-300"
              aria-label={link.name}
            >
              <link.icon size={24} />
            </Link>
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm mb-4">
          © {new Date().getFullYear()} Vladimir Todos los derechos reservados.
        </p>
        <div className="flex justify-center">
          <Link
            href="https://wa.me/3103701136"
            className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors duration-300"
          >
            <FaWhatsapp size={20} className="mr-2" />
            Contáctame por WhatsApp
          </Link>
        </div>
      </div>
    </footer>
  )
}


'use client'

import { useLanguage } from '@/components/LanguageContext'
import translations from '@/utils/translations'
import { GitlabIcon as GitHub, Instagram, Linkedin, Phone, Mail } from 'lucide-react'

const Contact = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="contact" className="py-20 bg-dark-1000">
      <h2 className="text-3xl font-bold mb-8 text-center text-neon-blue-500">{t.contactTitle}</h2>
      <div className="max-w-md mx-auto space-y-6">
        <div className="flex items-center space-x-4">
          <Phone className="text-neon-blue-400" />
          <span className="text-neon-blue-100">+55 (85) 98626-9340</span>
        </div>
        <div className="flex items-center space-x-4">
          <Mail className="text-neon-blue-400" />
          <span className="text-neon-blue-100">leone.hollanda07@gmail.com</span>
        </div>
        <div className="flex justify-center space-x-8 mt-8">
          <a href="https://github.com/LeoneBarbosaHollanda" target="_blank" rel="noopener noreferrer" className="text-neon-blue-400 hover:text-neon-blue-300 transition duration-300">
            <GitHub size={32} />
          </a>
          <a href="https://instagram.com/leone.hollanda" target="_blank" rel="noopener noreferrer" className="text-neon-blue-400 hover:text-neon-blue-300 transition duration-300">
            <Instagram size={32} />
          </a>
          <a href="https://www.linkedin.com/in/leone-hollanda-a4032721b/" target="_blank" rel="noopener noreferrer" className="text-neon-blue-400 hover:text-neon-blue-300 transition duration-300">
            <Linkedin size={32} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact


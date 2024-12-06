'use client'

import { useLanguage } from '@/components/LanguageContext'

const Header = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <header className="w-full py-4 bg-dark-1000 text-neon-blue-400">
      <nav className="container mx-auto flex justify-center items-center">
        <button onClick={toggleLanguage} className="bg-neon-blue-600 text-dark-1000 px-3 py-1 rounded hover:bg-neon-blue-500 transition duration-300">
          {language === 'en' ? 'PT' : 'EN'}
        </button>
      </nav>
    </header>
  )
}

export default Header


'use client'

import { useLanguage } from '@/components/LanguageContext'
import translations from '@/utils/translations'
import Image from 'next/image'

const Hero = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="hero" className="text-center py-20 bg-gradient-to-b from-dark-1000 to-dark-1000">
      <div className="mb-8">
        <Image
          src="/image/FotoCurriculo.jpg" // Substitua pelo caminho real da sua foto
          alt="Your Name"
          width={200}
          height={200}
          className="rounded-full mx-auto border-4 border-neon-blue-500"
        />
      </div>
      <h1 className="text-4xl font-bold mb-4 text-neon-blue-500">{t.heroTitle}</h1>
      <p className="text-xl text-neon-blue-300 mb-8">{t.heroSubtitle}</p>
    </section>
  )
}

export default Hero


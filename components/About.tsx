'use client'

import { useLanguage } from '@/components/LanguageContext'
import translations from '@/utils/translations'

const About = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="about" className="py-20 bg-dark-1000">
      <h2 className="text-3xl font-bold mb-8 text-center text-neon-blue-500">{t.aboutTitle}</h2>
      <div className="max-w-2xl mx-auto text-neon-blue-100">
        <p className="mb-4">{t.aboutContent1}</p>
        <p>{t.aboutContent2}</p>
      </div>
    </section>
  )
}

export default About


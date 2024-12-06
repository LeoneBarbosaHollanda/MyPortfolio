'use client'

import { useLanguage } from '@/components/LanguageContext'
import translations from '@/utils/translations'
import Image from 'next/image'

interface Skill {
  name: string
  years: number
  icon: string
  maxYears: number
}

const skills: Skill[] = [
  { name: 'React', years: 2, icon: 'https://leonebarbosahollanda.github.io/MyPortfolio/react.png', maxYears: 5 },
  { name: 'Python', years: 3, icon: 'https://leonebarbosahollanda.github.io/MyPortfolio/python.png', maxYears: 5 },
  { name: 'Node', years: 1, icon: 'https://leonebarbosahollanda.github.io/MyPortfolio/node.png', maxYears: 5 },
  { name: 'Java', years: 2, icon: 'https://leonebarbosahollanda.github.io/MyPortfolio/java.png', maxYears: 5 }
]

const Skills = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="skills" className="py-20 bg-dark-1000">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-neon-blue-500">{t.experienceTitle}</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Experiências */}
          <div className="md:w-1/2">
            <p className="text-neon-blue-100 mb-4 text-lg">
              {t.experienceDescription}
            </p>
            <ul className="list-disc list-inside text-neon-blue-200 space-y-2">
              <li>{t.experienceItem1}</li>
              <li>{t.experienceItem2}</li>
              <li>{t.experienceItem3}</li>
            </ul>
          </div>

          {/* Habilidades */}
          <div className="md:w-1/2">
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-4">
                  <div className="w-12 h-12 relative flex-shrink-0">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between mb-2">
                      <span className="text-neon-blue-300">{skill.name}</span>
                      <span className="text-neon-blue-400">{skill.years} {t.years}</span>
                    </div>
                    <div className="h-2 bg-dark-1000 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        style={{ width: `${(skill.years / skill.maxYears) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills


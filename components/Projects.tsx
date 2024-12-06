'use client'

import Image from 'next/image'
import { useLanguage } from '@/components/LanguageContext'
import translations from '@/utils/translations'

const projects = [
  { id: 1, title: 'Project 1', description: 'A brief description of project 1' },
  { id: 2, title: 'Project 2', description: 'A brief description of project 2' },
  { id: 3, title: 'Project 3', description: 'A brief description of project 3' },
]

const Projects = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="projects" className="py-20 bg-dark-1000">
      <h2 className="text-3xl font-bold mb-8 text-center text-neon-blue-500">{t.projectsTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="border border-neon-blue-800 rounded-lg p-4 bg-dark-1000 shadow-lg shadow-neon-blue-900/50">
            <Image src={`/placeholder.svg?height=200&width=300`} alt={project.title} width={300} height={200} className="mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2 text-neon-blue-400">{project.title}</h3>
            <p className="text-neon-blue-200">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects


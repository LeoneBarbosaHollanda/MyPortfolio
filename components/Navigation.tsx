'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/components/LanguageContext'
import translations from '@/utils/translations'
import Link from 'next/link'

const Navigation = () => {
    const [isSticky, setIsSticky] = useState(false)
    const { language, toggleLanguage } = useLanguage()
    const t = translations[language]

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = document.getElementById('hero')?.offsetHeight
            if (heroHeight) {
                setIsSticky(window.scrollY > heroHeight - 100)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <nav className={`transition-all duration-300 ${isSticky
                ? 'fixed top-0 left-0 right-0 bg-dark-1000 shadow-lg z-50'
                : 'relative bg-transparent'
                }`}>
                <div className="container mx-auto px-4 py-4 flex justify-center space-x-4">
                    <Link href="#about" className="bg-neon-blue-600 text-dark-1000 px-4 py-2 rounded hover:bg-neon-blue-500 transition duration-300">{t.about}</Link>
                    <Link href="#skills" className="bg-neon-blue-600 text-dark-1000 px-4 py-2 rounded hover:bg-neon-blue-500 transition duration-300">{t.experienceTitle}</Link>
                    <Link href="#contact" className="bg-neon-blue-600 text-dark-1000 px-4 py-2 rounded hover:bg-neon-blue-500 transition duration-300">{t.contact}</Link>
                    <button
                        onClick={toggleLanguage}
                        className="bg-neon-blue-600 text-dark-900 px-4 py-2 rounded hover:bg-neon-blue-500 transition duration-300"
                    >
                        {language === 'en' ? 'PT' : 'EN'}
                    </button>
                </div>
            </nav>
            {isSticky && <div className="h-16"></div>}
        </>
    )
}

export default Navigation


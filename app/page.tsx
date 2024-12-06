import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import Skills from '@/components/Skills'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />
      <Navigation />
      <About />
      <Skills />
      <Contact />
    </main>
  )
}


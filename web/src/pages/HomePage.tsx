import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import PublicationBanner from '../components/PublicationBanner'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import BlogPreview from '../components/BlogPreview'
import Experience from '../components/Experience'
import ResumeSection from '../components/ResumeSection'
import Contact from '../components/Contact'

export default function HomePage() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo
    if (scrollTo) {
      document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' })
      navigate('.', { replace: true, state: null })
    }
    // Only run once on mount — this consumes a one-shot navigation intent from Nav.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Hero />
      <Highlights />
      <PublicationBanner />
      <Skills />
      <Projects />
      <BlogPreview />
      <Experience />
      <ResumeSection />
      <Contact />
    </>
  )
}

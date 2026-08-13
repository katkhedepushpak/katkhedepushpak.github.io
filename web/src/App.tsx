import BackgroundFX from './components/ui/BackgroundFX'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import PublicationBanner from './components/PublicationBanner'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import ResumeSection from './components/ResumeSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundFX />
      <Nav />
      <main>
        <Hero />
        <Highlights />
        <PublicationBanner />
        <Skills />
        <Projects />
        <Experience />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

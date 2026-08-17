import { Routes, Route } from 'react-router-dom'
import BackgroundFX from './components/ui/BackgroundFX'
import Nav from './components/Nav'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import BlogIndex from './pages/BlogIndex'
import BlogPost from './pages/BlogPost'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundFX />
      <Nav />
      <main className="lg:pl-64">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer className="lg:pl-64" />
    </div>
  )
}

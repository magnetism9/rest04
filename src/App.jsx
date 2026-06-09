import { useState, useEffect, useCallback } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import VideoModal from './components/VideoModal'
import Home from './pages/Home'
import VideoPage from './pages/VideoPage'
import About from './pages/About'

export const palettes = [
  { id: '1', name: '오션 블루',  colors: ['#1B4FD8', '#00D4FF', '#0EA5E9'] },
  { id: '2', name: '퍼플 테크', colors: ['#1B4FD8', '#7C3AED', '#A855F7'] },
  { id: '3', name: '에메랄드',   colors: ['#1B4FD8', '#0D9488', '#2DD4BF'] },
  { id: '4', name: '앰버 골드',  colors: ['#1B4FD8', '#D97706', '#F59E0B'] },
  { id: '5', name: '로즈 레드',  colors: ['#1B4FD8', '#E11D48', '#F43F5E'] },
]

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [theme, setTheme] = useState(() => localStorage.getItem('eduai-theme') || 'dark')
  const [palette, setPalette] = useState(() => localStorage.getItem('eduai-palette') || '1')
  const [modalVideo, setModalVideo] = useState(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('eduai-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', palette)
    localStorage.setItem('eduai-palette', palette)
  }, [palette])

  const navigate = useCallback((page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }, [])

  const openModal = useCallback((video) => setModalVideo(video), [])
  const closeModal = useCallback(() => setModalVideo(null), [])

  const renderPage = () => {
    switch (currentPage) {
      case 'home':         return <Home navigate={navigate} openModal={openModal} />
      case 'ai-videos':   return <VideoPage category="ai" openModal={openModal} />
      case 'ai-literacy': return <VideoPage category="ai-literacy" openModal={openModal} />
      case 'about':       return <About />
      default:            return <Home navigate={navigate} openModal={openModal} />
    }
  }

  return (
    <div className="app">
      <Header
        currentPage={currentPage}
        navigate={navigate}
        theme={theme}
        toggleTheme={toggleTheme}
        palette={palette}
        setPalette={setPalette}
      />

      <main style={{ minHeight: 'calc(100vh - var(--nav-height) - 300px)' }}>
        {renderPage()}
      </main>

      <Footer navigate={navigate} />

      {modalVideo && (
        <VideoModal video={modalVideo} onClose={closeModal} />
      )}
    </div>
  )
}

export default App

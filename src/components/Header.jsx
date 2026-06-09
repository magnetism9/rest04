import { useState, useEffect } from 'react'
import { palettes } from '../App'
import './Header.css'

const navItems = [
  { id: 'home',         label: '홈' },
  { id: 'ai-videos',   label: 'AI 동영상' },
  { id: 'ai-literacy', label: 'AI 리터러시' },
  { id: 'about',       label: '소개' },
]

export default function Header({ currentPage, navigate, theme, toggleTheme, palette, setPalette }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [paletteOpen, setPaletteOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNav = (id) => {
    navigate(id)
    setMenuOpen(false)
  }

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-inner container">
        {/* Logo */}
        <button className="logo" onClick={() => handleNav('home')}>
          <span className="logo-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="8" fill="url(#logoGrad)" />
              <path d="M8 20V10l6-4 6 4v10" stroke="white" strokeWidth="2" strokeLinejoin="round" />
              <path d="M11 20v-5h6v5" stroke="white" strokeWidth="2" strokeLinejoin="round" />
              <circle cx="14" cy="13" r="2" fill="white" opacity="0.9" />
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="28" y2="28">
                  <stop stopColor="var(--royal-blue)" />
                  <stop offset="1" stopColor="var(--accent)" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="logo-text">에듀<span className="logo-accent">AI</span></span>
        </button>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-link${currentPage === item.id ? ' active' : ''}`}
              onClick={() => handleNav(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Controls */}
        <div className="header-controls">
          {/* Palette Picker */}
          <div className="palette-wrapper">
            <button
              className="palette-btn"
              onClick={() => setPaletteOpen(p => !p)}
              title="컬러 팔레트 변경"
              aria-label="컬러 팔레트 변경"
            >
              <span className="palette-preview" />
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            {paletteOpen && (
              <div className="palette-dropdown" onClick={() => setPaletteOpen(false)}>
                <p className="palette-label-head">컬러 팔레트</p>
                {palettes.map(p => (
                  <button
                    key={p.id}
                    className={`palette-item${palette === p.id ? ' selected' : ''}`}
                    onClick={() => { setPalette(p.id); setPaletteOpen(false) }}
                  >
                    <span className="palette-dots">
                      {p.colors.map((c, i) => (
                        <span key={i} className="palette-dot" style={{ background: c }} />
                      ))}
                    </span>
                    <span className="palette-name">{p.name}</span>
                    {palette === p.id && (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="palette-check">
                        <path d="M2 7l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            className="theme-btn"
            onClick={toggleTheme}
            title={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
            aria-label="테마 전환"
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>

          {/* CTA */}
          <button className="btn btn-primary btn-sm nav-cta" onClick={() => handleNav('ai-videos')}>
            시작하기
          </button>

          {/* Hamburger */}
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(p => !p)}
            aria-label="메뉴"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu animate-fadeIn" onClick={() => setMenuOpen(false)}>
          <div className="mobile-menu-inner" onClick={e => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <span className="logo-text">에듀<span className="logo-accent">AI</span></span>
              <button className="mobile-close" onClick={() => setMenuOpen(false)}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <nav className="mobile-nav">
              {navItems.map(item => (
                <button
                  key={item.id}
                  className={`mobile-nav-link${currentPage === item.id ? ' active' : ''}`}
                  onClick={() => handleNav(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="mobile-controls">
              <button className="mobile-theme-btn" onClick={() => { toggleTheme(); setMenuOpen(false) }}>
                <span className="material-symbols-outlined mat-icon-sm" style={{ marginRight: 8 }}>
                  {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                </span>
                {theme === 'dark' ? '라이트 모드' : '다크 모드'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

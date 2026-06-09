import './Footer.css'

export default function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">

        {/* Brand */}
        <div className="footer-brand">
          <button className="footer-logo" onClick={() => navigate('home')}>
            에듀<span className="footer-logo-accent">AI</span>
          </button>
          <p className="footer-tagline">AI 교육의 미래를 열다</p>
          <p className="footer-desc">
            AI 기술 활용과 AI 리터러시 교육을 위한<br />
            온라인 동영상 콘텐츠 플랫폼입니다.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div className="footer-links-group">
            <h4 className="footer-links-title">콘텐츠</h4>
            <button className="footer-link" onClick={() => navigate('ai-videos')}>AI 동영상</button>
            <button className="footer-link" onClick={() => navigate('ai-literacy')}>AI 리터러시</button>
          </div>
          <div className="footer-links-group">
            <h4 className="footer-links-title">플랫폼</h4>
            <button className="footer-link" onClick={() => navigate('about')}>소개</button>
            <button className="footer-link" onClick={() => navigate('home')}>홈</button>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">© 2024–2025 에듀AI. All rights reserved.</p>
          <p className="footer-made">AI 교육으로 미래를 준비하세요 🚀</p>
        </div>
      </div>
    </footer>
  )
}

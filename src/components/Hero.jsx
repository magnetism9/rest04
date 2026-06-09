import MatIcon from './MatIcon'
import './Hero.css'

export default function Hero({ navigate }) {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-content">
        <div className="hero-badge animate-fadeInUp">
          <span className="badge badge-accent">
            <MatIcon name="rocket_launch" size={13} />
            AI 교육 플랫폼
          </span>
        </div>

        <h1 className="hero-title animate-fadeInUp delay-1">
          AI 교육의 미래를<br />
          <span className="hero-title-accent">지금 시작하세요</span>
        </h1>

        <p className="hero-desc animate-fadeInUp delay-2">
          AI 기술 활용부터 AI 리터러시까지,<br />
          체계적인 동영상 강의로 미래를 준비하세요.
        </p>

        <div className="hero-actions animate-fadeInUp delay-3">
          <button className="btn btn-primary" onClick={() => navigate('ai-videos')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
            강의 시작하기
          </button>
          <button className="btn btn-secondary" onClick={() => navigate('ai-literacy')}>
            AI 리터러시 알아보기
          </button>
        </div>

        <div className="hero-stats animate-fadeInUp delay-4">
          <div className="hero-stat">
            <span className="hero-stat-num">18+</span>
            <span className="hero-stat-label">강의 영상</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-num">2</span>
            <span className="hero-stat-label">전문 카테고리</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-num">무료</span>
            <span className="hero-stat-label">수강 가능</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span />
      </div>
    </section>
  )
}

import Hero from '../components/Hero'
import VideoGrid from '../components/VideoGrid'
import { getFeaturedVideos, categories } from '../data/videos'
import './Home.css'

export default function Home({ navigate, openModal }) {
  const featured = getFeaturedVideos(6)

  return (
    <>
      <Hero navigate={navigate} />

      {/* Featured Videos */}
      <section className="section home-featured" style={{ background: 'var(--bg-2)' }}>
        <div className="container">
          <div className="section-head">
            <span className="label">추천 강의</span>
            <h2 className="section-title">인기 동영상</h2>
            <p className="section-subtitle">AI 교육의 필수 콘텐츠를 지금 바로 시작하세요.</p>
            <div className="divider" />
          </div>

          <VideoGrid videos={featured} onPlay={openModal} />

          <div className="home-more-btns">
            {categories.map(cat => (
              <button
                key={cat.id}
                className="btn btn-secondary"
                onClick={() => navigate(cat.id)}
              >
                {cat.icon} {cat.label} 전체보기
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Why EduAI */}
      <section className="section">
        <div className="container">
          <div className="section-head text-center">
            <span className="label">플랫폼 특징</span>
            <h2 className="section-title">왜 에듀AI인가요?</h2>
            <p className="section-subtitle">체계적인 AI 교육 커리큘럼으로 미래를 준비하세요.</p>
            <div className="divider" style={{ margin: '16px auto' }} />
          </div>

          <div className="features-grid">
            {[
              {
                icon: '🎯',
                title: '맞춤형 커리큘럼',
                desc: '입문부터 고급까지 수준별로 구성된 체계적인 학습 경로를 제공합니다.',
              },
              {
                icon: '📱',
                title: '언제 어디서나',
                desc: '모바일과 PC 모두 최적화된 환경에서 편리하게 학습할 수 있습니다.',
              },
              {
                icon: '🆓',
                title: '무료 수강',
                desc: '모든 콘텐츠를 무료로 제공합니다. 회원가입 없이 바로 시작하세요.',
              },
              {
                icon: '🔄',
                title: '지속적인 업데이트',
                desc: '최신 AI 트렌드에 맞춰 새로운 콘텐츠가 지속적으로 추가됩니다.',
              },
            ].map((f, i) => (
              <div
                key={i}
                className="feature-card animate-fadeInUp"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category CTA */}
      <section className="section home-cta-section" style={{ background: 'var(--bg-2)' }}>
        <div className="container">
          <div className="home-cta-cards">
            {categories.map(cat => (
              <div key={cat.id} className="home-cta-card" onClick={() => navigate(cat.id)}>
                <div className="home-cta-icon">{cat.icon}</div>
                <div className="home-cta-info">
                  <h3 className="home-cta-title">{cat.label}</h3>
                  <p className="home-cta-desc">{cat.desc}</p>
                </div>
                <svg className="home-cta-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

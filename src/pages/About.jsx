import MatIcon from '../components/MatIcon'
import './About.css'

export default function About() {
  return (
    <div className="about-page">

      {/* Hero */}
      <div className="about-header">
        <div className="container">
          <div className="about-header-content animate-fadeInUp">
            <span className="label"><MatIcon name="school" size={13} /> 우리 소개</span>
            <h1 className="section-title about-title">
              AI 교육의 새로운 기준을<br />
              <span className="about-title-accent">에듀AI가 만들어갑니다</span>
            </h1>
            <p className="section-subtitle about-subtitle">
              누구나 AI를 이해하고 활용할 수 있는 세상을 만들기 위해,<br />
              최고 품질의 동영상 콘텐츠를 무료로 제공합니다.
            </p>
          </div>
        </div>
      </div>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className="about-mission-grid">
            <div className="animate-fadeInUp">
              <span className="label">미션</span>
              <h2 className="section-title">우리의 목표</h2>
              <div className="divider" />
              <p className="about-text">
                에듀AI는 <strong>AI 기술 민주화</strong>를 목표로 합니다. 복잡하게만 느껴지는
                AI 기술을 누구나 쉽게 이해하고, 실생활과 업무에 적용할 수 있도록
                체계적인 교육 콘텐츠를 제공합니다.
              </p>
              <p className="about-text mt-md">
                전문가만을 위한 교육이 아닌, <strong>모든 사람을 위한 AI 교육</strong>을 통해
                AI 시대에 뒤처지지 않는 역량을 키울 수 있도록 돕겠습니다.
              </p>
            </div>

            <div className="about-values animate-fadeInUp delay-2">
              {[
                { icon: 'local_library', title: '교육 접근성', desc: '언어 장벽 없이, 비용 걱정 없이 누구나 배울 수 있는 환경을 만듭니다.' },
                { icon: 'labs',          title: '콘텐츠 품질', desc: '정확하고 최신 정보를 바탕으로 검증된 커리큘럼을 제공합니다.' },
                { icon: 'eco',           title: '지속 성장',   desc: '빠르게 변하는 AI 환경에 맞춰 콘텐츠를 지속적으로 업데이트합니다.' },
              ].map((v, i) => (
                <div key={i} className="about-value-item">
                  <MatIcon name={v.icon} size={26} className="about-value-icon mat-icon-accent" />
                  <div>
                    <h4 className="about-value-title">{v.title}</h4>
                    <p className="about-value-desc">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section about-stats-section">
        <div className="container">
          <div className="about-stats">
            {[
              { num: '18+', label: '전문 강의 영상', sub: '지속 업데이트 중' },
              { num: '2',   label: '전문 카테고리',  sub: 'AI · AI 리터러시' },
              { num: '100%', label: '무료 제공',     sub: '회원가입 불필요' },
              { num: '5',   label: '컬러 테마',       sub: '다크·라이트 모드' },
            ].map((s, i) => (
              <div key={i} className="about-stat-card animate-fadeInUp" style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="about-stat-num">{s.num}</span>
                <span className="about-stat-label">{s.label}</span>
                <span className="about-stat-sub">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="container">
          <div className="section-head text-center">
            <span className="label">콘텐츠 구성</span>
            <h2 className="section-title">두 가지 전문 카테고리</h2>
            <div className="divider" style={{ margin: '16px auto' }} />
          </div>

          <div className="about-cats">
            {[
              {
                icon: 'smart_toy',
                title: 'AI 동영상',
                desc: 'ChatGPT, Claude, Midjourney 등 실용적인 AI 도구 활용법부터 프롬프트 엔지니어링, 비즈니스 AI 전략까지 실전 중심으로 배웁니다.',
                tags: ['ChatGPT', 'Midjourney', '프롬프트', '자동화', '비즈니스 AI'],
              },
              {
                icon: 'auto_stories',
                title: 'AI 리터러시',
                desc: '머신러닝, 딥러닝의 원리부터 AI 윤리, 데이터 리터러시까지 AI를 제대로 이해하기 위한 기초 개념을 체계적으로 학습합니다.',
                tags: ['머신러닝', '딥러닝', 'AI 윤리', '데이터', 'NLP'],
              },
            ].map((cat, i) => (
              <div key={i} className="about-cat-card animate-fadeInUp" style={{ animationDelay: `${i * 0.15}s` }}>
                <MatIcon name={cat.icon} size={40} className="about-cat-icon mat-icon-accent" />
                <h3 className="about-cat-title">{cat.title}</h3>
                <p className="about-cat-desc">{cat.desc}</p>
                <div className="about-cat-tags">
                  {cat.tags.map(t => (
                    <span key={t} className="about-cat-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section about-contact-section">
        <div className="container">
          <div className="about-contact animate-fadeInUp">
            <MatIcon name="mail" size={44} className="about-contact-icon mat-icon-accent" />
            <h3 className="about-contact-title">문의 및 제안</h3>
            <p className="about-contact-desc">
              콘텐츠 제안, 강의 요청, 기타 문의사항이 있으시면 언제든지 연락해 주세요.
            </p>
            <a href="mailto:contact@eduai.kr" className="btn btn-primary about-contact-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" />
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" />
              </svg>
              이메일 문의하기
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

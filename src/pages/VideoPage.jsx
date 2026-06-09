import VideoGrid from '../components/VideoGrid'
import MatIcon from '../components/MatIcon'
import { categories, getVideosByCategory } from '../data/videos'
import './VideoPage.css'

export default function VideoPage({ category, openModal }) {
  const cat = categories.find(c => c.id === category)
  const videos = getVideosByCategory(category)

  if (!cat) return null

  return (
    <div className="video-page">

      {/* Page Header */}
      <div className="video-page-header">
        <div className="container">
          <div className="vp-header-content animate-fadeInUp">
            <span className="label"><MatIcon name={cat.icon} size={13} /> 카테고리</span>
            <h1 className="section-title">{cat.label}</h1>
            <p className="section-subtitle">{cat.desc}</p>
          </div>
        </div>
      </div>

      {/* Level Legend */}
      <div className="vp-legend-bar">
        <div className="container vp-legend-inner">
          <span className="vp-legend-label">난이도:</span>
          {[
            { name: '입문', color: '#10B981' },
            { name: '초급', color: '#3B82F6' },
            { name: '중급', color: '#F59E0B' },
            { name: '고급', color: '#EF4444' },
          ].map(lv => (
            <span key={lv.name} className="vp-legend-item">
              <span className="vp-legend-dot" style={{ background: lv.color }} />
              {lv.name}
            </span>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="section-sm">
        <div className="container">
          <VideoGrid videos={videos} onPlay={openModal} />
        </div>
      </section>

    </div>
  )
}

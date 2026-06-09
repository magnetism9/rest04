import { useState, useEffect } from 'react'
import VideoCard from './VideoCard'
import { VIDEOS_PER_PAGE } from '../data/videos'
import './VideoGrid.css'

export default function VideoGrid({ videos, onPlay }) {
  const [page, setPage] = useState(1)

  useEffect(() => { setPage(1) }, [videos])

  const totalPages = Math.ceil(videos.length / VIDEOS_PER_PAGE)
  const start = (page - 1) * VIDEOS_PER_PAGE
  const pageVideos = videos.slice(start, start + VIDEOS_PER_PAGE)

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  if (videos.length === 0) {
    return (
      <div className="grid-empty">
        <div className="grid-empty-icon">📭</div>
        <p>등록된 강의가 없습니다.</p>
      </div>
    )
  }

  return (
    <div className="video-grid-wrapper">
      {/* Count */}
      <p className="grid-count">
        총 <strong>{videos.length}</strong>개 강의 &nbsp;·&nbsp; {page} / {totalPages} 페이지
      </p>

      {/* 2 × 3 Grid */}
      <div className="video-grid">
        {pageVideos.map((video, i) => (
          <div key={video.id} className="video-grid-item animate-fadeInUp" style={{ animationDelay: `${i * 0.06}s` }}>
            <VideoCard video={video} onPlay={onPlay} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="page-btn page-arrow"
            disabled={page === 1}
            onClick={() => { setPage(p => p - 1); window.scrollTo({ top: 300, behavior: 'smooth' }) }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {pages.map(p => (
            <button
              key={p}
              className={`page-btn${p === page ? ' active' : ''}`}
              onClick={() => { setPage(p); window.scrollTo({ top: 300, behavior: 'smooth' }) }}
            >
              {p}
            </button>
          ))}

          <button
            className="page-btn page-arrow"
            disabled={page === totalPages}
            onClick={() => { setPage(p => p + 1); window.scrollTo({ top: 300, behavior: 'smooth' }) }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

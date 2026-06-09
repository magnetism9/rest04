import { useEffect } from 'react'
import './VideoModal.css'

export default function VideoModal({ video, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const isReal = video.youtubeId && !video.youtubeId.startsWith('VIDEO_ID')

  return (
    <div className="modal-overlay animate-fadeIn" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="modal-level">{video.level}</span>
            <h2 className="modal-title">{video.title}</h2>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="닫기">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Video */}
        <div className="modal-video-wrap">
          {isReal ? (
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="modal-placeholder">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" opacity="0.3">
                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" />
                <path d="M24 20l20 12-20 12V20z" fill="currentColor" />
              </svg>
              <p>유튜브 영상 ID를 등록하면 여기서 재생됩니다.<br /><code>{video.youtubeId}</code></p>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="modal-info">
          <p className="modal-desc">{video.description}</p>
          <div className="modal-meta">
            {video.duration && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                <span className="material-symbols-outlined mat-icon-sm">timer</span>
                {video.duration}
              </span>
            )}
            {video.date && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                <span className="material-symbols-outlined mat-icon-sm">calendar_today</span>
                {video.date}
              </span>
            )}
            {isReal && (
              <a
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-yt-link"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.58 7.19a2.76 2.76 0 00-1.94-1.95C18.05 5 12 5 12 5s-6.05 0-7.64.24a2.76 2.76 0 00-1.94 1.95A28.65 28.65 0 002 12a28.65 28.65 0 00.42 4.81 2.76 2.76 0 001.94 1.95C5.95 19 12 19 12 19s6.05 0 7.64-.24a2.76 2.76 0 001.94-1.95A28.65 28.65 0 0022 12a28.65 28.65 0 00-.42-4.81z" />
                  <polygon points="9.75,15.02 15.5,12 9.75,8.98" fill="white" />
                </svg>
                유튜브에서 보기
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

import { levelColors } from '../data/videos'
import './VideoCard.css'

export default function VideoCard({ video, onPlay }) {
  const thumbnailUrl = video.youtubeId && !video.youtubeId.startsWith('VIDEO_ID')
    ? `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`
    : null

  return (
    <article className="video-card" onClick={() => onPlay(video)}>
      {/* Thumbnail */}
      <div className="video-thumb">
        {thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            alt={video.title}
            loading="lazy"
            onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
          />
        ) : null}
        <div className="video-thumb-placeholder" style={{ display: thumbnailUrl ? 'none' : 'flex' }}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" opacity="0.4">
            <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
            <path d="M19 16l14 8-14 8V16z" fill="currentColor" />
          </svg>
        </div>

        {/* Play Overlay */}
        <div className="video-play-overlay">
          <div className="video-play-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
          </div>
        </div>

        {/* Duration */}
        {video.duration && (
          <span className="video-duration">{video.duration}</span>
        )}
      </div>

      {/* Info */}
      <div className="video-info">
        <div className="video-meta">
          <span
            className="video-level"
            style={{ color: levelColors[video.level] || '#94A3B8',
                     borderColor: levelColors[video.level] || '#94A3B8' }}
          >
            {video.level}
          </span>
          {video.date && <span className="video-date">{video.date}</span>}
        </div>

        <h3 className="video-title">{video.title}</h3>
        <p className="video-desc">{video.description}</p>

        <div className="video-footer">
          <span className="video-watch">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 3l14 9-14 9V3z" fill="currentColor" />
            </svg>
            재생하기
          </span>
        </div>
      </div>
    </article>
  )
}

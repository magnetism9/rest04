# 에듀AI 개발일지 (EduAI Development Log)

> AI 관련 온라인 동영상 콘텐츠를 제공하는 교육회사 웹사이트  
> 라이브 사이트: https://magnetism9.github.io/rest04/  
> 리포지토리: https://github.com/magnetism9/rest04

---

## v1.0.0 — 2026-06-09

### 프로젝트 개요
AI 기술 활용과 AI 리터러시 교육을 위한 온라인 동영상 플랫폼 **에듀AI** 개발.  
React + Vite 기반 SPA로 구현하였으며, GitHub Pages를 통해 정적 배포.

---

### 기술 스택

| 항목 | 내용 |
|---|---|
| 프레임워크 | React 18 |
| 빌드 도구 | Vite 5 |
| 배포 | GitHub Pages (`gh-pages` 브랜치) |
| 스타일 | Pure CSS (CSS Custom Properties 기반) |
| 폰트 | Noto Sans KR, Inter (Google Fonts) |

---

### 구현 기능

#### 1. 디자인 시스템
- **주 컬러**: Dark Blue (`#0A1628`), Royal Blue (`#1B4FD8`)
- **5가지 컬러 팔레트** (헤더에서 실시간 전환)
  - 오션 블루 (기본) — Cyan 계열 `#00D4FF`
  - 퍼플 테크 — Purple 계열 `#7C3AED`
  - 에메랄드 — Teal 계열 `#0D9488`
  - 앰버 골드 — Amber 계열 `#D97706`
  - 로즈 레드 — Rose 계열 `#E11D48`
- **다크 모드 / 라이트 모드** 토글 (localStorage 유지)
- CSS Custom Properties(`--accent`, `--bg-1`, `--text-1` 등)로 팔레트·테마 전환

#### 2. 페이지 구성

| 페이지 | 파일 | 내용 |
|---|---|---|
| 홈 | `pages/Home.jsx` | Hero 섹션 + 인기 영상 6개 + 플랫폼 특징 + 카테고리 CTA |
| AI 동영상 | `pages/VideoPage.jsx` | AI 기술 활용 동영상 목록 (9개, 2페이지) |
| AI 리터러시 | `pages/VideoPage.jsx` | AI 리터러시 교육 동영상 목록 (9개, 2페이지) |
| 소개 | `pages/About.jsx` | 미션·가치·통계·카테고리 설명·문의 |

#### 3. 컴포넌트

| 컴포넌트 | 역할 |
|---|---|
| `Header` | 고정 네비게이션, 팔레트 드롭다운, 테마 토글, 햄버거 메뉴 |
| `Hero` | 풀스크린 히어로 섹션 (오브 애니메이션, 그리드 배경, 스크롤 인디케이터) |
| `VideoCard` | 16:9 썸네일, 재생 오버레이, 레벨 배지, 재생시간 표시 |
| `VideoGrid` | **2열×3행 그리드** + 페이지네이션 (페이지당 6개) |
| `VideoModal` | YouTube iframe 임베드 모달 (ESC 닫기, 외부 클릭 닫기) |
| `Footer` | 링크, 카피라이트 |

#### 4. YouTube 동영상 연동 구조
- `src/data/videos.js`에 영상 메타데이터 관리
- `youtubeId` 필드에 실제 유튜브 영상 ID 입력 시 즉시 활성화
- 비공개 영상은 embed 불가 → **링크 공개(unlisted)** 로 설정 필요
- 썸네일: `https://img.youtube.com/vi/{id}/maxresdefault.jpg` 자동 로드
- 카테고리: `ai` (AI 동영상), `ai-literacy` (AI 리터러시) 2종

#### 5. 모바일 최적화
- 반응형 그리드: 데스크톱 2열 → 모바일(640px 이하) 1열
- 네비게이션: 900px 이하 햄버거 메뉴로 전환 (사이드 슬라이드)
- Hero 텍스트: `clamp()` 함수로 유동적 폰트 크기
- 터치 친화적 버튼 사이즈

---

### 파일 구조

```
rest04/
├── index.html
├── package.json
├── vite.config.js          # base: '/rest04/'
├── src/
│   ├── main.jsx
│   ├── index.css           # 전역 CSS (팔레트·테마 변수 정의)
│   ├── App.jsx             # 라우팅, 테마·팔레트 상태 관리
│   ├── components/
│   │   ├── Header.jsx/.css
│   │   ├── Hero.jsx/.css
│   │   ├── VideoCard.jsx/.css
│   │   ├── VideoGrid.jsx/.css
│   │   ├── VideoModal.jsx/.css
│   │   └── Footer.jsx/.css
│   ├── pages/
│   │   ├── Home.jsx/.css
│   │   ├── VideoPage.jsx/.css
│   │   └── About.jsx/.css
│   └── data/
│       └── videos.js       # 영상 데이터 (youtubeId 교체 필요)
└── DEVLOG.md
```

---

### 배포 방법

```bash
# 개발 서버 실행
npm run dev

# 빌드 & GitHub Pages 배포
npm run deploy
```

---

### 향후 작업 (TODO)

- [ ] `videos.js`에 실제 유튜브 영상 ID 입력
- [ ] 영상 카테고리 추가 (필요 시)
- [ ] 검색 기능 추가
- [ ] 영상 즐겨찾기 기능

---

*개발: Claude Sonnet 4.6 with magnetism9*

/* ======================================================
   videos.js - 유튜브 영상 데이터

   youtubeId: 유튜브 영상 URL에서 v= 뒤의 ID를 입력하세요
   예시) https://www.youtube.com/watch?v=XXXXXXX → 'XXXXXXX'

   비공개 영상은 embed가 되지 않으므로 '링크 공개' 또는
   '미등록(unlisted)' 으로 설정하세요.
   ====================================================== */

export const categories = [
  { id: 'ai',          label: 'AI 동영상',    icon: '🤖', desc: 'AI 기술 및 활용 관련 동영상' },
  { id: 'ai-literacy', label: 'AI 리터러시',  icon: '📚', desc: 'AI 리터러시 및 기초 교육 동영상' },
]

export const videos = [
  /* ─── AI 동영상 ─── */
  {
    id: 'ai-001',
    category: 'ai',
    title: 'ChatGPT 완전 정복 가이드',
    description: 'ChatGPT의 기본 사용법부터 고급 프롬프트 엔지니어링까지 단계별로 배워보세요.',
    youtubeId: 'VIDEO_ID_01',
    duration: '18:45',
    level: '입문',
    date: '2024-01',
  },
  {
    id: 'ai-002',
    category: 'ai',
    title: 'AI 이미지 생성 실전 활용',
    description: 'Midjourney, DALL-E, Stable Diffusion을 활용한 AI 이미지 생성 실전 가이드.',
    youtubeId: 'VIDEO_ID_02',
    duration: '22:10',
    level: '초급',
    date: '2024-02',
  },
  {
    id: 'ai-003',
    category: 'ai',
    title: '업무 자동화를 위한 AI 활용법',
    description: '반복적인 업무를 AI로 자동화하는 방법과 실제 적용 사례를 소개합니다.',
    youtubeId: 'VIDEO_ID_03',
    duration: '25:30',
    level: '중급',
    date: '2024-03',
  },
  {
    id: 'ai-004',
    category: 'ai',
    title: 'Claude AI 심층 분석',
    description: 'Anthropic의 Claude AI를 활용한 문서 작성, 코딩, 분석 작업 완전 가이드.',
    youtubeId: 'VIDEO_ID_04',
    duration: '20:15',
    level: '초급',
    date: '2024-04',
  },
  {
    id: 'ai-005',
    category: 'ai',
    title: 'AI 코딩 어시스턴트 실전 사용',
    description: 'GitHub Copilot, Cursor 등 AI 코딩 도구를 활용한 개발 생산성 향상법.',
    youtubeId: 'VIDEO_ID_05',
    duration: '30:00',
    level: '중급',
    date: '2024-05',
  },
  {
    id: 'ai-006',
    category: 'ai',
    title: '비즈니스에서의 AI 전략',
    description: '기업에서 AI를 도입하고 활용하는 전략과 실제 성공 사례를 분석합니다.',
    youtubeId: 'VIDEO_ID_06',
    duration: '28:20',
    level: '중급',
    date: '2024-06',
  },
  {
    id: 'ai-007',
    category: 'ai',
    title: 'AI 프롬프트 엔지니어링 마스터',
    description: '최적의 결과를 얻기 위한 프롬프트 설계 원칙과 고급 기법을 배웁니다.',
    youtubeId: 'VIDEO_ID_07',
    duration: '35:45',
    level: '고급',
    date: '2024-07',
  },
  {
    id: 'ai-008',
    category: 'ai',
    title: '생성형 AI 트렌드 2024',
    description: '2024년 생성형 AI의 최신 트렌드와 미래 전망을 정리합니다.',
    youtubeId: 'VIDEO_ID_08',
    duration: '15:00',
    level: '입문',
    date: '2024-08',
  },
  {
    id: 'ai-009',
    category: 'ai',
    title: 'AI 음악 & 오디오 생성',
    description: 'Suno, Udio 등 AI 음악 생성 도구를 활용한 창작 방법을 소개합니다.',
    youtubeId: 'VIDEO_ID_09',
    duration: '19:30',
    level: '초급',
    date: '2024-09',
  },
  /* ─── AI 리터러시 ─── */
  {
    id: 'lit-001',
    category: 'ai-literacy',
    title: 'AI란 무엇인가? 완벽 입문',
    description: '인공지능의 기본 개념과 우리 생활에서 AI가 어떻게 쓰이는지 쉽게 설명합니다.',
    youtubeId: 'VIDEO_ID_10',
    duration: '12:00',
    level: '입문',
    date: '2024-01',
  },
  {
    id: 'lit-002',
    category: 'ai-literacy',
    title: '머신러닝의 원리 이해하기',
    description: '기계는 어떻게 학습하는가? 머신러닝의 핵심 원리를 시각적으로 이해합니다.',
    youtubeId: 'VIDEO_ID_11',
    duration: '18:30',
    level: '초급',
    date: '2024-02',
  },
  {
    id: 'lit-003',
    category: 'ai-literacy',
    title: 'AI 윤리와 책임 있는 AI',
    description: 'AI가 가져오는 윤리적 문제와 책임 있는 AI 개발의 중요성을 다룹니다.',
    youtubeId: 'VIDEO_ID_12',
    duration: '20:45',
    level: '초급',
    date: '2024-03',
  },
  {
    id: 'lit-004',
    category: 'ai-literacy',
    title: '딥러닝 개념 쉽게 배우기',
    description: '딥러닝의 기초 개념인 신경망, 레이어, 학습 과정을 그림으로 이해합니다.',
    youtubeId: 'VIDEO_ID_13',
    duration: '24:00',
    level: '중급',
    date: '2024-04',
  },
  {
    id: 'lit-005',
    category: 'ai-literacy',
    title: 'AI가 바꾸는 미래 직업',
    description: 'AI 시대에 사라지는 직업과 새로 생기는 직업, 그리고 준비 방법을 알아봅니다.',
    youtubeId: 'VIDEO_ID_14',
    duration: '16:20',
    level: '입문',
    date: '2024-05',
  },
  {
    id: 'lit-006',
    category: 'ai-literacy',
    title: '자연어 처리(NLP) 기초',
    description: 'AI가 언어를 이해하는 방법, 자연어 처리의 기초 개념을 쉽게 설명합니다.',
    youtubeId: 'VIDEO_ID_15',
    duration: '22:15',
    level: '중급',
    date: '2024-06',
  },
  {
    id: 'lit-007',
    category: 'ai-literacy',
    title: '데이터 리터러시 for AI',
    description: 'AI를 이해하기 위해 반드시 알아야 할 데이터의 개념과 기초 통계를 배웁니다.',
    youtubeId: 'VIDEO_ID_16',
    duration: '27:40',
    level: '중급',
    date: '2024-07',
  },
  {
    id: 'lit-008',
    category: 'ai-literacy',
    title: 'AI 편향과 공정성 문제',
    description: 'AI 시스템에서 발생하는 편향 문제와 이를 해결하는 방법을 탐구합니다.',
    youtubeId: 'VIDEO_ID_17',
    duration: '19:00',
    level: '초급',
    date: '2024-08',
  },
  {
    id: 'lit-009',
    category: 'ai-literacy',
    title: '초등학생도 이해하는 AI',
    description: '어린이부터 어른까지 AI의 기본 개념을 재미있는 예시로 쉽게 배웁니다.',
    youtubeId: 'VIDEO_ID_18',
    duration: '10:30',
    level: '입문',
    date: '2024-09',
  },
]

export const VIDEOS_PER_PAGE = 6

export function getVideosByCategory(category) {
  return videos.filter(v => v.category === category)
}

export function getFeaturedVideos(count = 6) {
  return videos.slice(0, count)
}

export const levelColors = {
  '입문': '#10B981',
  '초급': '#3B82F6',
  '중급': '#F59E0B',
  '고급': '#EF4444',
}

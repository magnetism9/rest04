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
    title: 'ChatGPT 초보자도 8분이면 사용법 마스터',
    description: '서울대 AI박사과정이 알려주는 ChatGPT 핵심 사용법. 회원가입부터 실전 활용까지 8분 만에 완전 정복합니다.',
    youtubeId: 'yux_9YJ9YcM',
    duration: '8:24',
    level: '입문',
    date: '2023-03',
  },
  {
    id: 'ai-002',
    category: 'ai',
    title: '2025 미드저니 웹버전 사용법 완전 정복',
    description: '회원가입부터 이미지 만들기까지, 2025년 최신 Midjourney 웹버전으로 AI 이미지 생성을 처음부터 배워보세요.',
    youtubeId: 'TKhaVfDFSvE',
    duration: '22:15',
    level: '초급',
    date: '2025-06',
  },
  {
    id: 'ai-003',
    category: 'ai',
    title: '3시간 작업을 5분으로 — AI 업무 자동화 실전',
    description: '아직도 야근하세요? AI로 딸깍 하면 업무 자동화 툴이 뽑혀 나옵니다. 실무에 바로 적용 가능한 자동화 노하우를 공개합니다.',
    youtubeId: 'HuBTSpbfYL0',
    duration: '18:42',
    level: '중급',
    date: '2026-03',
  },
  {
    id: 'ai-004',
    category: 'ai',
    title: '아무도 안 알려주는 Claude AI 200% 활용법',
    description: 'Anthropic의 Claude AI를 200% 활용하는 기초 세팅 가이드. 아무도 알려주지 않던 클로드 완전 정복 시리즈 1편.',
    youtubeId: 'NoTjuQ5nhnM',
    duration: '20:33',
    level: '초급',
    date: '2026-04',
  },
  {
    id: 'ai-005',
    category: 'ai',
    title: 'Claude Code 왕초보 입문 — 23가지 팁 50분 완전정복',
    description: 'Claude Code 설치부터 실전 활용까지, 왕초보를 위한 23가지 팁을 담은 50분 완전 정복 강의. 2026 최신 가이드.',
    youtubeId: '1_bRmkUvjHA',
    duration: '50:12',
    level: '중급',
    date: '2026-02',
  },
  {
    id: 'ai-006',
    category: 'ai',
    title: '2025년 꼭 써야 할 AI 업무 툴 6가지',
    description: '실제 업무 생산성 향상에 기여하는 6가지 AI 도구를 소개합니다. 기업에서 AI를 도입하고 활용하는 전략을 담았습니다.',
    youtubeId: '4gAqawD-5W0',
    duration: '15:28',
    level: '입문',
    date: '2025-02',
  },
  {
    id: 'ai-007',
    category: 'ai',
    title: '이것만 알면 ChatGPT 고수 — 프롬프트 엔지니어링 실전 전략',
    description: '생성형 AI 교육의 핵심, 프롬프트 엔지니어링 실전 전략. 최적의 결과를 이끌어내는 설계 원칙과 고급 기법을 배웁니다.',
    youtubeId: 'Q0Kzsda5K9I',
    duration: '28:55',
    level: '고급',
    date: '2025-12',
  },
  {
    id: 'ai-008',
    category: 'ai',
    title: '2025 AI 종합 가이드 — GPT·Claude·Gemini·Midjourney 비교',
    description: '2025년 최신 AI 서비스 종합 가이드. GPT-5, Claude, Gemini부터 Midjourney까지 주요 AI 도구를 한 번에 비교·정리합니다.',
    youtubeId: 'tPwPoQrSfec',
    duration: '32:10',
    level: '초급',
    date: '2025-09',
  },
  {
    id: 'ai-009',
    category: 'ai',
    title: 'Suno AI로 음악 만들기 — 2025 완전 초보 가이드',
    description: '명상음악부터 트로트까지! Suno AI로 누구나 작곡가가 될 수 있습니다. 2025년 최신 기능을 담은 완전 초보 입문 강의.',
    youtubeId: 'xbV0Y52OMr8',
    duration: '19:05',
    level: '입문',
    date: '2025-08',
  },

  /* ─── AI 리터러시 ─── */
  {
    id: 'lit-001',
    category: 'ai-literacy',
    title: '25분으로 끝내는 인공지능 기초와 활용 사례',
    description: '인공지능의 기본 개념, 활용 사례, 미래 전망을 25분 만에 압축 정리합니다. 입문자를 위한 ㄹㅇ 블루오션 강의.',
    youtubeId: 'mRnXgBDf_oE',
    duration: '25:03',
    level: '입문',
    date: '2023-08',
  },
  {
    id: 'lit-002',
    category: 'ai-literacy',
    title: '인공지능·머신러닝·딥러닝 6분 완전 이해',
    description: '서울대 AI 박사과정이 인공지능, 머신러닝, 딥러닝의 핵심 개념을 6분 만에 명쾌하게 설명합니다.',
    youtubeId: 'jPs3n9Vou9c',
    duration: '6:12',
    level: '입문',
    date: '2023-09',
  },
  {
    id: 'lit-003',
    category: 'ai-literacy',
    title: '[유네스코] AI 시대, 왜 윤리가 중요한가?',
    description: '유네스코 인공지능 윤리 강의 1편. AI 시대에 왜 윤리가 중요한지, 책임 있는 AI 개발의 의미를 탐구합니다.',
    youtubeId: 'dwWkldY32c8',
    duration: '20:48',
    level: '초급',
    date: '2021-11',
  },
  {
    id: 'lit-004',
    category: 'ai-literacy',
    title: 'ㄹㅇ 쉬운 딥러닝 — 머신러닝 개념을 중학교 수준으로',
    description: '딥러닝을 중학교 수준으로 쉽게 설명합니다. 신경망, 레이어, 학습 과정을 누구나 이해할 수 있게 풀어냅니다.',
    youtubeId: 'U57LVkQVf4o',
    duration: '18:34',
    level: '초급',
    date: '2020-11',
  },
  {
    id: 'lit-005',
    category: 'ai-literacy',
    title: 'AI 시대 5년 뒤 사라지는 직업들',
    description: 'AI 시대에 멸종 위기에 처한 직업들을 분석하고, 새롭게 부상하는 직종과 미래 준비 방법을 알아봅니다.',
    youtubeId: 'bzrGkVx_TYU',
    duration: '16:20',
    level: '입문',
    date: '2026-01',
  },
  {
    id: 'lit-006',
    category: 'ai-literacy',
    title: '인공지능 트렌드 — 자연어처리(NLP) 개념과 활용사례',
    description: 'AI가 언어를 이해하는 방법인 자연어처리(NLP)의 과거·현재·미래와 실제 기업 활용 사례를 쉽게 설명합니다.',
    youtubeId: 'nOF50CYkOUE',
    duration: '22:15',
    level: '중급',
    date: '2021-05',
  },
  {
    id: 'lit-007',
    category: 'ai-literacy',
    title: '누구나 들어봤지만 아무도 알려주지 못하는 데이터 리터러시',
    description: '비즈니스 문제를 데이터로 전환하는 방법, 노코드·로우코드 분석 도구를 활용한 데이터 리터러시 실전 강의.',
    youtubeId: 'kFc5gUIVrtI',
    duration: '27:40',
    level: '중급',
    date: '2022-03',
  },
  {
    id: 'lit-008',
    category: 'ai-literacy',
    title: '[유네스코] AI의 차별과 편향 — 공정한 AI를 만드려면?',
    description: '유네스코 AI 윤리 강의 2편. AI 시스템의 차별·편향 문제를 진단하고, 공정한 AI를 만들기 위한 방법을 탐구합니다.',
    youtubeId: 'F5lmUkSQdWQ',
    duration: '19:22',
    level: '초급',
    date: '2021-11',
  },
  {
    id: 'lit-009',
    category: 'ai-literacy',
    title: '인공지능 첫걸음 — AI랑 친해질 결심',
    description: '어린이부터 어른까지, 인공지능 리터러시 기초 과정. AI의 기본 개념부터 실생활 적용까지 차근차근 배웁니다.',
    youtubeId: 'CcceAhZJtGQ',
    duration: '12:05',
    level: '입문',
    date: '2023-03',
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

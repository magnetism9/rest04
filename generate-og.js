/**
 * generate-og.js
 * OG 이미지 생성 스크립트 (sharp + SVG)
 * 출력: public/og-image.png (1200×630)
 *       public/og-image-{palette}.png (각 팔레트별)
 */

const sharp = require('sharp');
const path  = require('path');
const fs    = require('fs');

const OUT_DIR = path.join(__dirname, 'public');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const W = 1200;
const H = 630;

/* ── 팔레트 정의 ── */
const palettes = [
  { id: 'default',  name: '오션 블루',  accent: '#00D4FF', accent2: '#0EA5E9', grad1: '#0A1628', grad2: '#0F2A5A', grad3: '#1B4FD8' },
  { id: 'purple',   name: '퍼플 테크',  accent: '#7C3AED', accent2: '#A855F7', grad1: '#0A1628', grad2: '#1A0F35', grad3: '#3B1B7E' },
  { id: 'teal',     name: '에메랄드',   accent: '#0D9488', accent2: '#2DD4BF', grad1: '#0A1628', grad2: '#0D2E2A', grad3: '#0D9488' },
  { id: 'amber',    name: '앰버 골드',  accent: '#F59E0B', accent2: '#FCD34D', grad1: '#0A1628', grad2: '#2A1B08', grad3: '#92400E' },
  { id: 'rose',     name: '로즈 레드',  accent: '#F43F5E', accent2: '#FB7185', grad1: '#0A1628', grad2: '#2A0A1A', grad3: '#881337' },
];

/* ── dot-grid 패턴 ── */
function dotGrid(dotColor = 'rgba(255,255,255,0.06)') {
  const dots = [];
  for (let x = 40; x < W; x += 60) {
    for (let y = 40; y < H; y += 60) {
      dots.push(`<circle cx="${x}" cy="${y}" r="1.5" fill="${dotColor}"/>`);
    }
  }
  return dots.join('');
}

/* ── 팔레트 도트 (우측 하단) ── */
function paletteDots() {
  const colors = palettes.map(p => p.accent);
  return colors.map((c, i) => `<circle cx="${1100 + i * 22}" cy="600" r="8" fill="${c}" opacity="0.9"/>`).join('');
}

/* ── SVG 생성 ── */
function buildSVG(p) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"
     xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- 배경 그라디언트 -->
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%"   stop-color="${p.grad1}"/>
      <stop offset="50%"  stop-color="${p.grad2}"/>
      <stop offset="100%" stop-color="${p.grad3}"/>
    </linearGradient>
    <!-- 엑센트 그라디언트 (텍스트용) -->
    <linearGradient id="acc" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#1B4FD8"/>
      <stop offset="100%" stop-color="${p.accent}"/>
    </linearGradient>
    <!-- 오브 블러 -->
    <filter id="blur1"><feGaussianBlur stdDeviation="60"/></filter>
    <filter id="blur2"><feGaussianBlur stdDeviation="40"/></filter>
  </defs>

  <!-- 배경 -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- 배경 오브 -->
  <circle cx="${W + 80}" cy="-60" r="340" fill="${p.accent}" opacity="0.12" filter="url(#blur1)"/>
  <circle cx="-60"       cy="${H + 60}" r="260" fill="#1B4FD8" opacity="0.15" filter="url(#blur1)"/>
  <circle cx="900"       cy="420"  r="180" fill="${p.accent2}" opacity="0.07" filter="url(#blur2)"/>

  <!-- 도트 그리드 -->
  ${dotGrid()}

  <!-- 좌측 엑센트 바 -->
  <rect x="60" y="100" width="4" height="120" rx="2"
        fill="url(#acc)" opacity="0.9"/>

  <!-- 로고 박스 -->
  <rect x="80" y="96" width="52" height="52" rx="14"
        fill="url(#acc)" opacity="0.15"/>
  <rect x="80" y="96" width="52" height="52" rx="14"
        fill="none" stroke="${p.accent}" stroke-width="1.5" opacity="0.4"/>
  <!-- 로고 아이콘 (play 삼각형) -->
  <polygon points="100,108 100,136 124,122" fill="${p.accent}" opacity="0.9"/>

  <!-- 브랜드명 -->
  <text x="148" y="132"
        font-family="Arial, Helvetica, sans-serif"
        font-size="28" font-weight="800" letter-spacing="1"
        fill="white" opacity="0.95">에듀AI</text>

  <!-- 메인 타이틀 라인 1 -->
  <text x="80" y="260"
        font-family="Arial, Helvetica, sans-serif"
        font-size="64" font-weight="800" letter-spacing="-2"
        fill="white">AI 교육의 미래를</text>

  <!-- 메인 타이틀 라인 2 (엑센트) -->
  <text x="80" y="340"
        font-family="Arial, Helvetica, sans-serif"
        font-size="64" font-weight="800" letter-spacing="-2"
        fill="${p.accent}">지금 시작하세요</text>

  <!-- 서브타이틀 -->
  <text x="82" y="406"
        font-family="Arial, Helvetica, sans-serif"
        font-size="24" font-weight="400"
        fill="white" opacity="0.65">
    AI 기술 활용부터 AI 리터러시까지, 체계적인 동영상 강의로 미래를 준비하세요.
  </text>

  <!-- 구분선 -->
  <line x1="80" y1="450" x2="360" y2="450"
        stroke="${p.accent}" stroke-width="1.5" opacity="0.4"/>

  <!-- 통계 3개 -->
  <!-- stat 1 -->
  <text x="80" y="496"
        font-family="Arial, Helvetica, sans-serif"
        font-size="36" font-weight="800"
        fill="${p.accent}">18+</text>
  <text x="80" y="522"
        font-family="Arial, Helvetica, sans-serif"
        font-size="16" fill="white" opacity="0.55">강의 영상</text>

  <!-- stat 2 -->
  <text x="220" y="496"
        font-family="Arial, Helvetica, sans-serif"
        font-size="36" font-weight="800"
        fill="${p.accent}">2</text>
  <text x="220" y="522"
        font-family="Arial, Helvetica, sans-serif"
        font-size="16" fill="white" opacity="0.55">전문 카테고리</text>

  <!-- stat 3 -->
  <text x="360" y="496"
        font-family="Arial, Helvetica, sans-serif"
        font-size="36" font-weight="800"
        fill="${p.accent}">무료</text>
  <text x="360" y="522"
        font-family="Arial, Helvetica, sans-serif"
        font-size="16" fill="white" opacity="0.55">수강 가능</text>

  <!-- 우측 장식 카드 -->
  <rect x="760" y="120" width="360" height="390" rx="20"
        fill="white" opacity="0.04"
        stroke="white" stroke-width="1" stroke-opacity="0.08"/>

  <!-- 카드 내부 재생 아이콘 -->
  <circle cx="940" cy="240" r="52"
          fill="${p.accent}" opacity="0.15"/>
  <circle cx="940" cy="240" r="52"
          fill="none" stroke="${p.accent}" stroke-width="2" opacity="0.4"/>
  <polygon points="928,218 928,262 968,240"
           fill="${p.accent}" opacity="0.9"/>

  <!-- 카드 내부 텍스트 -->
  <text x="940" y="322" text-anchor="middle"
        font-family="Arial, Helvetica, sans-serif"
        font-size="20" font-weight="700"
        fill="white" opacity="0.8">AI 동영상</text>
  <text x="940" y="350" text-anchor="middle"
        font-family="Arial, Helvetica, sans-serif"
        font-size="14" fill="white" opacity="0.45">ChatGPT · Midjourney · Claude AI</text>

  <!-- 카드 레벨 배지들 -->
  <rect x="820" y="390" width="56" height="26" rx="13"
        fill="#10B981" opacity="0.2"
        stroke="#10B981" stroke-width="1" stroke-opacity="0.5"/>
  <text x="848" y="407" text-anchor="middle"
        font-family="Arial, Helvetica, sans-serif"
        font-size="12" font-weight="600" fill="#10B981">입문</text>

  <rect x="888" y="390" width="56" height="26" rx="13"
        fill="#3B82F6" opacity="0.2"
        stroke="#3B82F6" stroke-width="1" stroke-opacity="0.5"/>
  <text x="916" y="407" text-anchor="middle"
        font-family="Arial, Helvetica, sans-serif"
        font-size="12" font-weight="600" fill="#3B82F6">초급</text>

  <rect x="956" y="390" width="56" height="26" rx="13"
        fill="#F59E0B" opacity="0.2"
        stroke="#F59E0B" stroke-width="1" stroke-opacity="0.5"/>
  <text x="984" y="407" text-anchor="middle"
        font-family="Arial, Helvetica, sans-serif"
        font-size="12" font-weight="600" fill="#F59E0B">중급</text>

  <rect x="1024" y="390" width="56" height="26" rx="13"
        fill="#EF4444" opacity="0.2"
        stroke="#EF4444" stroke-width="1" stroke-opacity="0.5"/>
  <text x="1052" y="407" text-anchor="middle"
        font-family="Arial, Helvetica, sans-serif"
        font-size="12" font-weight="600" fill="#EF4444">고급</text>

  <!-- 하단 URL -->
  <text x="80" y="596"
        font-family="Arial, Helvetica, sans-serif"
        font-size="15" fill="white" opacity="0.35"
        letter-spacing="0.5">magnetism9.github.io/rest04</text>

  <!-- 팔레트 5색 도트 -->
  ${paletteDots()}
</svg>`;
}

/* ── 생성 실행 ── */
(async () => {
  for (const p of palettes) {
    const svg    = buildSVG(p);
    const svgBuf = Buffer.from(svg, 'utf8');
    const suffix = p.id === 'default' ? '' : `-${p.id}`;
    const outPath = path.join(OUT_DIR, `og-image${suffix}.png`);

    await sharp(svgBuf)
      .resize(W, H)
      .png({ quality: 95 })
      .toFile(outPath);

    console.log(`✓ ${path.basename(outPath)}`);
  }

  console.log('\n✅ OG 이미지 생성 완료 → public/');
})();

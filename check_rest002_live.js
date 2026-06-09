const puppeteer = require('puppeteer');
const OUT = 'C:\\Users\\USER\\AppData\\Local\\Temp\\eduai_screenshots\\';

(async () => {
  const b = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-application-cache']
  });
  const p = await b.newPage();
  await p.setViewport({ width: 1440, height: 900 });
  await p.setCacheEnabled(false);
  await p.goto('https://magnetism9.github.io/rest002/', { waitUntil: 'networkidle2', timeout: 20000 });
  await new Promise(r => setTimeout(r, 2500));

  // 1. 네브바 (다크)
  await p.screenshot({ path: OUT + 'r002_live_nav.png', clip: {x:0, y:0, width:1440, height:72} });
  console.log('nav done');

  // 2. 팔레트 드롭다운 열기
  const allBtns = await p.$$('button');
  let paletteBtn = null;
  for (const btn of allBtns) {
    const cls = await p.evaluate(el => el.className, btn);
    if (cls.includes('relative') || cls.includes('px-2.5')) {
      paletteBtn = btn;
      break;
    }
  }
  if (!paletteBtn) {
    // try by finding the small chevron button after프로젝트문의
    const navRight = await p.$('.hidden.md\\:flex');
    if (navRight) {
      const btnsInNav = await navRight.$$('button');
      if (btnsInNav.length >= 2) paletteBtn = btnsInNav[1];
    }
  }
  if (paletteBtn) {
    await paletteBtn.click();
    await new Promise(r => setTimeout(r, 500));
    await p.screenshot({ path: OUT + 'r002_live_palette.png', clip: {x:1050, y:0, width:390, height:300} });
    console.log('palette done');
  }

  // 3. 라이트 모드
  const allBtns2 = await p.$$('button');
  for (const btn of allBtns2) {
    const title = await p.evaluate(el => el.title || '', btn);
    if (title.includes('라이트') || title.includes('다크')) {
      await btn.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 700));
  await p.screenshot({ path: OUT + 'r002_live_light.png', clip: {x:0, y:0, width:1440, height:72} });
  console.log('light done');

  // 4. 라이트 전체
  await p.screenshot({ path: OUT + 'r002_live_light_full.png' });

  await b.close();
  console.log('all done');
})().catch(e => console.error(e.message));

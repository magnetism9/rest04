const puppeteer = require('puppeteer');
const OUT = 'C:\\Users\\USER\\AppData\\Local\\Temp\\eduai_screenshots\\';

(async () => {
  const b = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true, args: ['--no-sandbox']
  });
  const p = await b.newPage();
  await p.setViewport({ width: 1440, height: 900 });
  await p.goto('http://localhost:5177/rest002/', { waitUntil: 'networkidle2', timeout: 15000 });
  await new Promise(r => setTimeout(r, 1500));

  // 1. ?꾩껜 ??(?ㅽ겕)
  await p.screenshot({ path: OUT + 'r002_01_home_dark.png' });

  // 2. ?ㅻ툕諛??뺣?
  await p.screenshot({ path: OUT + 'r002_02_navbar.png', clip: {x:0, y:0, width:1440, height:72} });

  // 3. ?붾젅???쒕∼?ㅼ슫 ?닿린 ??而щ윭 ??踰꾪듉 ?대┃
  const paletteBtn = await p.$('.relative > button');
  if (paletteBtn) {
    await paletteBtn.click();
    await new Promise(r => setTimeout(r, 400));
    await p.screenshot({ path: OUT + 'r002_03_palette_open.png', clip: {x:880, y:0, width:560, height:280} });
    // ?쇳뵆 ?좏깮
    const items = await p.$$('.relative div button');
    if (items[1]) await items[1].click();
    await new Promise(r => setTimeout(r, 500));
    await p.screenshot({ path: OUT + 'r002_04_purple.png', clip: {x:0, y:0, width:1440, height:72} });
  }

  // 4. ?쇱씠??紐⑤뱶
  const themeBtn = await p.$('button[title]');
  if (themeBtn) {
    await themeBtn.click();
    await new Promise(r => setTimeout(r, 600));
    await p.screenshot({ path: OUT + 'r002_05_light.png' });
  }

  await b.close();
  console.log('done');
})().catch(e => console.error(e.message));


const puppeteer = require('puppeteer');
const OUT = 'C:\\Users\\USER\\AppData\\Local\\Temp\\eduai_screenshots\\';

(async () => {
  const b = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true, args: ['--no-sandbox']
  });
  const p = await b.newPage();
  await p.setViewport({ width: 1440, height: 900 });

  await p.goto('http://localhost:5178/rest04/', { waitUntil: 'networkidle2', timeout: 15000 });
  await new Promise(r => setTimeout(r, 2000));
  await p.screenshot({ path: OUT + 'icon_01_hero.png' });

  await p.evaluate(() => window.scrollTo({ top: window.innerHeight, behavior: 'instant' }));
  await new Promise(r => setTimeout(r, 600));
  await p.screenshot({ path: OUT + 'icon_02_featured.png' });

  await p.evaluate(() => window.scrollTo({ top: window.innerHeight * 2.6, behavior: 'instant' }));
  await new Promise(r => setTimeout(r, 600));
  await p.screenshot({ path: OUT + 'icon_03_features.png' });

  // AI Videos page
  const navLinks = await p.$$('.nav-link');
  for (const link of navLinks) {
    const text = await p.evaluate(el => el.textContent.trim(), link);
    if (text === 'AI 동영상') { await link.click(); break; }
  }
  await new Promise(r => setTimeout(r, 1000));
  await p.screenshot({ path: OUT + 'icon_04_videopage.png', clip: {x:0, y:0, width:1440, height:300} });

  // About page
  const navLinks2 = await p.$$('.nav-link');
  for (const link of navLinks2) {
    const text = await p.evaluate(el => el.textContent.trim(), link);
    if (text === '소개') { await link.click(); break; }
  }
  await new Promise(r => setTimeout(r, 1000));
  await p.screenshot({ path: OUT + 'icon_05_about.png' });

  await p.evaluate(() => window.scrollTo({ top: window.innerHeight * 1.5, behavior: 'instant' }));
  await new Promise(r => setTimeout(r, 600));
  await p.screenshot({ path: OUT + 'icon_06_about_values.png' });

  await b.close();
  console.log('done');
})().catch(e => console.error(e.message));

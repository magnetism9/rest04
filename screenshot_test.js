const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const BASE = 'http://localhost:5175/rest04/';
const OUT = 'C:\\Users\\USER\\AppData\\Local\\Temp\\eduai_screenshots';

if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // 1. Home page - Hero
  await page.goto(BASE, { waitUntil: 'networkidle2', timeout: 15000 });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(OUT, '01_home_hero.png') });
  console.log('✓ 01_home_hero');

  // 2. Scroll down to featured videos
  await page.evaluate(() => window.scrollTo({ top: window.innerHeight, behavior: 'instant' }));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUT, '02_home_featured.png') });
  console.log('✓ 02_home_featured');

  // 3. Scroll to features grid
  await page.evaluate(() => window.scrollTo({ top: window.innerHeight * 2.5, behavior: 'instant' }));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUT, '03_home_features.png') });
  console.log('✓ 03_home_features');

  // 4. AI Videos page — click nav
  await page.evaluate(() => window.scrollTo({ top: 0 }));
  await new Promise(r => setTimeout(r, 400));
  // Click "AI 동영상" nav link
  const navLinks = await page.$$('.nav-link');
  for (const link of navLinks) {
    const text = await page.evaluate(el => el.textContent.trim(), link);
    if (text === 'AI 동영상') {
      await link.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(OUT, '04_ai_videos.png') });
  console.log('✓ 04_ai_videos');

  // 5. AI Literacy page
  const navLinks2 = await page.$$('.nav-link');
  for (const link of navLinks2) {
    const text = await page.evaluate(el => el.textContent.trim(), link);
    if (text === 'AI 리터러시') {
      await link.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(OUT, '05_ai_literacy.png') });
  console.log('✓ 05_ai_literacy');

  // 6. About page
  const navLinks3 = await page.$$('.nav-link');
  for (const link of navLinks3) {
    const text = await page.evaluate(el => el.textContent.trim(), link);
    if (text === '소개') {
      await link.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(OUT, '06_about.png') });
  console.log('✓ 06_about');

  // 7. Light mode toggle
  await page.click('.theme-btn');
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUT, '07_about_light.png') });
  console.log('✓ 07_about_light');

  // 8. Palette picker open
  await page.goto(BASE, { waitUntil: 'networkidle2', timeout: 15000 });
  await new Promise(r => setTimeout(r, 1000));
  // Switch to light mode first to see palette contrast
  await page.click('.theme-btn'); // back to dark
  await new Promise(r => setTimeout(r, 300));
  await page.click('.palette-btn');
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(OUT, '08_palette_open.png') });
  console.log('✓ 08_palette_open');

  // 9. Mobile viewport
  await page.setViewport({ width: 390, height: 844 });
  await page.goto(BASE, { waitUntil: 'networkidle2', timeout: 15000 });
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(OUT, '09_mobile_home.png') });
  console.log('✓ 09_mobile_home');

  // 10. Mobile menu open
  await page.click('.hamburger');
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(OUT, '10_mobile_menu.png') });
  console.log('✓ 10_mobile_menu');

  await browser.close();
  console.log('\nAll screenshots saved to:', OUT);
})().catch(err => { console.error(err); process.exit(1); });

#!/usr/bin/env node

/**
 * LinkedIn Video Capture Script
 * Creates MP4 videos of each product carousel for LinkedIn
 */

import puppeteer from 'puppeteer';
import { mkdir, readdir, unlink } from 'fs/promises';
import { join } from 'path';
import { homedir } from 'os';
import { execSync } from 'child_process';

const OUTPUT_DIR = join(homedir(), 'Desktop', 'Uplift-LinkedIn-Videos');
const TEMP_DIR = join(OUTPUT_DIR, 'temp');
const BASE_URL = 'http://localhost:5175';

// Screenshot configurations for each carousel
const carousels = [
  {
    name: 'Portal',
    screens: [
      '/screenshots/portal_dashboard.png',
      '/screenshots/portal_schedule.png',
      '/screenshots/portal_skills.png',
      '/screenshots/portal_employees.png'
    ],
    captions: [
      'Live workforce overview',
      'AI-powered scheduling',
      'Skills and compliance tracking',
      'Complete team management'
    ],
    deviceType: 'browser',
    width: 1200,
    height: 750
  },
  {
    name: 'Manager-App',
    screens: [
      '/screenshots/manager_dashboard.jpeg',
      '/screenshots/manager_approvals.jpeg',
      '/screenshots/manager_schedule_builder.jpeg',
      '/screenshots/manager_demand_forecast.jpeg'
    ],
    captions: [
      'Team stats at a glance',
      'One-tap approvals',
      'Build and publish rotas',
      'AI demand forecasting'
    ],
    deviceType: 'phone',
    width: 400,
    height: 800
  },
  {
    name: 'Worker-App',
    screens: [
      '/screenshots/worker_home.jpeg',
      '/screenshots/worker_schedule.jpeg',
      '/screenshots/worker_career_path.jpeg',
      '/screenshots/worker_skills.jpeg',
      '/screenshots/worker_tasks.jpeg'
    ],
    captions: [
      'Your shift and momentum score',
      'See your schedule instantly',
      'Track your progress',
      'Build verified skills',
      'Complete tasks, earn points'
    ],
    deviceType: 'phone',
    width: 400,
    height: 800
  }
];

async function createCarouselPage(carousel) {
  const isPhone = carousel.deviceType === 'phone';

  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      padding: 40px;
    }
    .title {
      color: white;
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 8px;
      text-align: center;
    }
    .subtitle {
      color: rgba(255,255,255,0.7);
      font-size: 16px;
      margin-bottom: 32px;
      text-align: center;
    }
    .device-frame {
      ${isPhone ? `
        background: #1E293B;
        border-radius: 40px;
        padding: 10px;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
      ` : `
        background: #1E293B;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
      `}
    }
    .phone-inner {
      background: #0F172A;
      border-radius: 32px;
      overflow: hidden;
      position: relative;
    }
    .dynamic-island {
      position: absolute;
      top: 12px;
      left: 50%;
      transform: translateX(-50%);
      width: 90px;
      height: 28px;
      background: #000;
      border-radius: 14px;
      z-index: 10;
    }
    .browser-chrome {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      background: #0F172A;
      border-bottom: 1px solid #334155;
    }
    .traffic-lights {
      display: flex;
      gap: 6px;
    }
    .light {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
    .light.red { background: #EF4444; }
    .light.yellow { background: #F59E0B; }
    .light.green { background: #10B981; }
    .url-bar {
      flex: 1;
      margin-left: 12px;
      background: #1E293B;
      border-radius: 6px;
      padding: 6px 12px;
      font-size: 12px;
      color: #64748B;
      font-family: monospace;
    }
    .screen-container {
      position: relative;
      overflow: hidden;
      ${isPhone ? 'aspect-ratio: 9/19.5; background: #F8FAFC;' : 'aspect-ratio: 16/10; background: #0F172A;'}
    }
    .screen-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top left;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
      position: absolute;
      top: 0;
      left: 0;
    }
    .screen-image.active {
      opacity: 1;
    }
    .caption-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(transparent, rgba(0,0,0,0.8));
      padding: 30px 16px 14px;
    }
    .caption-text {
      color: white;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      text-shadow: 0 1px 2px rgba(0,0,0,0.5);
    }
    .progress-dots {
      display: flex;
      justify-content: center;
      gap: 6px;
      margin-top: 24px;
    }
    .dot {
      width: 8px;
      height: 8px;
      border-radius: 4px;
      background: rgba(255,255,255,0.3);
      transition: all 0.3s ease;
    }
    .dot.active {
      width: 24px;
      background: #FF6B35;
    }
    .logo {
      position: absolute;
      bottom: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .logo-mark {
      width: 32px;
      height: 32px;
      background: #FF6B35;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 700;
      font-size: 16px;
    }
    .logo-text {
      color: white;
      font-size: 18px;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="title">${carousel.name.replace('-', ' ')}</div>
  <div class="subtitle">${isPhone ? 'Mobile App' : 'Head Office Portal'}</div>

  <div class="device-frame" style="width: ${isPhone ? '280px' : '700px'}">
    ${isPhone ? `
      <div class="phone-inner">
        <div class="dynamic-island"></div>
        <div class="screen-container">
          ${carousel.screens.map((src, i) => `
            <img class="screen-image ${i === 0 ? 'active' : ''}" src="${src}" data-index="${i}" />
          `).join('')}
          <div class="caption-overlay">
            <p class="caption-text" id="caption">${carousel.captions[0]}</p>
          </div>
        </div>
      </div>
    ` : `
      <div class="browser-chrome">
        <div class="traffic-lights">
          <div class="light red"></div>
          <div class="light yellow"></div>
          <div class="light green"></div>
        </div>
        <div class="url-bar">app.uplifthq.co.uk</div>
      </div>
      <div class="screen-container">
        ${carousel.screens.map((src, i) => `
          <img class="screen-image ${i === 0 ? 'active' : ''}" src="${src}" data-index="${i}" />
        `).join('')}
        <div class="caption-overlay">
          <p class="caption-text" id="caption">${carousel.captions[0]}</p>
        </div>
      </div>
    `}
  </div>

  <div class="progress-dots">
    ${carousel.screens.map((_, i) => `<div class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`).join('')}
  </div>

  <div class="logo">
    <div class="logo-mark">U</div>
    <div class="logo-text">Uplift</div>
  </div>

  <script>
    const captions = ${JSON.stringify(carousel.captions)};
    const images = document.querySelectorAll('.screen-image');
    const dots = document.querySelectorAll('.dot');
    const captionEl = document.getElementById('caption');
    let current = 0;

    function next() {
      images[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = (current + 1) % images.length;
      images[current].classList.add('active');
      dots[current].classList.add('active');
      captionEl.textContent = captions[current];
    }

    // Cycle every 2 seconds for video capture
    setInterval(next, 2000);
  </script>
</body>
</html>
`;
}

async function captureVideo(carousel) {
  console.log(`\nCapturing ${carousel.name}...`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Set viewport
  await page.setViewport({
    width: carousel.width,
    height: carousel.height,
    deviceScaleFactor: 2
  });

  // Create HTML content
  const html = await createCarouselPage(carousel);
  await page.setContent(html, { waitUntil: 'networkidle0' });

  // Wait for images to load
  await page.waitForSelector('.screen-image');
  await new Promise(r => setTimeout(r, 1000));

  // Capture frames (2 seconds per screen, 30 fps = 60 frames per screen)
  const framesPerScreen = 60;
  const totalFrames = carousel.screens.length * framesPerScreen;
  const frameDir = join(TEMP_DIR, carousel.name);

  await mkdir(frameDir, { recursive: true });

  console.log(`  Capturing ${totalFrames} frames...`);

  for (let i = 0; i < totalFrames; i++) {
    const frameNum = String(i).padStart(4, '0');
    await page.screenshot({
      path: join(frameDir, `frame_${frameNum}.png`),
      type: 'png'
    });

    // Small delay between frames (33ms = ~30fps)
    await new Promise(r => setTimeout(r, 33));

    if (i % 30 === 0) {
      process.stdout.write(`  Frame ${i}/${totalFrames}\r`);
    }
  }

  console.log(`  Captured ${totalFrames} frames`);

  await browser.close();

  // Use ffmpeg to create video
  const outputPath = join(OUTPUT_DIR, `Uplift-${carousel.name}.mp4`);

  console.log(`  Creating video...`);

  try {
    execSync(`ffmpeg -y -framerate 30 -i "${join(frameDir, 'frame_%04d.png')}" -c:v libx264 -pix_fmt yuv420p -crf 18 "${outputPath}"`, {
      stdio: 'pipe'
    });
    console.log(`  Saved: Uplift-${carousel.name}.mp4`);
  } catch (err) {
    console.error(`  Error creating video: ${err.message}`);
  }

  // Clean up frames
  const frames = await readdir(frameDir);
  for (const frame of frames) {
    await unlink(join(frameDir, frame));
  }
}

async function main() {
  console.log('Creating LinkedIn videos...');
  console.log(`Output directory: ${OUTPUT_DIR}\n`);

  await mkdir(OUTPUT_DIR, { recursive: true });
  await mkdir(TEMP_DIR, { recursive: true });

  for (const carousel of carousels) {
    await captureVideo(carousel);
  }

  console.log('\nDone! Videos saved to:', OUTPUT_DIR);
  console.log('\nLinkedIn video specs:');
  console.log('- Format: MP4 (H.264)');
  console.log('- Recommended: Square (1:1) or Portrait (4:5) for mobile feed');
  console.log('- Max duration: 10 minutes');
}

main().catch(console.error);

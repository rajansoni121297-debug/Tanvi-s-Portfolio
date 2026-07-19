interface Particle {
  x: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  rotation: number;
  rotationSpeed: number;
  delay: number;
}

const COLORS = ['#ff6b6b', '#feca57', '#1dd1a1', '#54a0ff', '#ff9ff3', '#f368e0'];
const GRAVITY = 1400; // px/s^2
const PARTICLE_COUNT = 200;
const LAUNCH_SPREAD_MS = 400; // stagger particles across this window for a smooth sweep
const FLIGHT_SECONDS = 2.6;

export function fireConfetti() {
  if (typeof document === 'undefined') return;

  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.inset = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9999';

  const width = window.innerWidth;
  const height = window.innerHeight;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = width * dpr;
  canvas.height = height * dpr;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  ctx.scale(dpr, dpr);
  document.body.appendChild(canvas);

  const startY = height + 10;
  const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * width,
    vx: (Math.random() - 0.5) * 140,
    vy: -(650 + Math.random() * 550),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    size: 6 + Math.random() * 6,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 200,
    delay: Math.random() * LAUNCH_SPREAD_MS,
  }));

  const start = performance.now();
  const fadeFrom = FLIGHT_SECONDS * 0.65;

  function tick(now: number) {
    const elapsedMs = now - start;
    ctx!.clearRect(0, 0, width, height);
    let stillGoing = false;

    for (const p of particles) {
      const t = (elapsedMs - p.delay) / 1000;
      if (t < 0) {
        stillGoing = true;
        continue;
      }
      if (t > FLIGHT_SECONDS) continue;
      stillGoing = true;

      const x = p.x + p.vx * t;
      const y = startY + p.vy * t + 0.5 * GRAVITY * t * t;
      if (y > height + 20) continue;

      const opacity = t > fadeFrom ? Math.max(0, 1 - (t - fadeFrom) / (FLIGHT_SECONDS - fadeFrom)) : 1;
      const rotation = p.rotation + p.rotationSpeed * t;

      ctx!.save();
      ctx!.translate(x, y);
      ctx!.rotate((rotation * Math.PI) / 180);
      ctx!.globalAlpha = opacity;
      ctx!.fillStyle = p.color;
      ctx!.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      ctx!.restore();
    }

    if (stillGoing) {
      requestAnimationFrame(tick);
    } else {
      canvas.remove();
    }
  }

  requestAnimationFrame(tick);
}

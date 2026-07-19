const COLORS = ['#fef08a', '#fbcfe8', '#bfdbfe', '#bbf7d0', '#fde68a'];

let styleInjected = false;

function injectStyles() {
  if (styleInjected) return;
  styleInjected = true;
  const style = document.createElement('style');
  style.textContent = `
    @keyframes postItFall {
      0% { transform: translateY(-10vh) translateX(0) rotate(var(--rot)); opacity: 0; }
      8% { opacity: 1; }
      50% { transform: translateY(50vh) translateX(var(--sway)) rotate(calc(var(--rot) * -1)); }
      92% { opacity: 1; }
      100% { transform: translateY(115vh) translateX(0) rotate(var(--rot)); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}

export function spawnPostIts() {
  if (typeof document === 'undefined') return;
  injectStyles();

  const count = 2 + Math.floor(Math.random() * 3); // 2-4 notes

  for (let i = 0; i < count; i++) {
    const note = document.createElement('div');
    const size = 34 + Math.random() * 14;
    const left = 5 + Math.random() * 90;
    const rot = (Math.random() - 0.5) * 40;
    const sway = (Math.random() - 0.5) * 80;
    const duration = 4.5 + Math.random() * 2;
    const delay = Math.random() * 0.6;

    note.style.position = 'fixed';
    note.style.top = '0';
    note.style.left = `${left}vw`;
    note.style.width = `${size}px`;
    note.style.height = `${size}px`;
    note.style.background = COLORS[Math.floor(Math.random() * COLORS.length)];
    note.style.boxShadow = '2px 4px 8px rgba(0,0,0,0.18)';
    note.style.pointerEvents = 'none';
    note.style.zIndex = '9998';
    note.style.opacity = '0';
    note.style.setProperty('--rot', `${rot}deg`);
    note.style.setProperty('--sway', `${sway}px`);
    // 'both' fill-mode applies the 0% keyframe during animation-delay too, so the
    // note never flashes at its raw top:0 position before the animation kicks in.
    note.style.animation = `postItFall ${duration}s ease-in-out ${delay}s both`;

    document.body.appendChild(note);
    note.addEventListener('animationend', () => note.remove());
  }
}

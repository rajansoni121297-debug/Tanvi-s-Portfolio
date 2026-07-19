import { spawnPostIts } from '../lib/postIts';

export default function About() {
  return (
    <section id="about" aria-label="About" className="px-12 pb-24 border-t border-hairline">
      <div className="flex items-baseline gap-4 pt-14 mb-14">
        <span className="font-semibold text-[12.5px] tracking-[0.1em] text-accent">ABOUT ME</span>
        <div className="flex-1 h-px bg-hairline" />
      </div>
      <h2 className="font-semibold text-[clamp(2rem,4.5vw,3.6rem)] m-0 mb-14 leading-[1.1]">
        Research-led. Story-driven.
        <br />
        <span onMouseEnter={() => spawnPostIts()} className="cursor-default">
          Occasionally covered in post-it notes.
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-12 items-start">
        <img
          src="/about-photo.png"
          alt="Portrait of Tanvi Kumar"
          className="w-full md:w-[380px] h-[460px] object-cover block"
        />
        <div className="text-lg leading-[1.75] text-muted pt-2 space-y-5">
          <p className="m-0">
            I'm <strong className="text-ink">Tanvi Kumar</strong> — a UI/UX and Service Designer based
            in Ahmedabad, India. I studied at the <strong className="text-ink">Glasgow School of Art</strong>,
            where I built a practice rooted in research, systems thinking, and making things that
            actually work for the people using them.
          </p>
          <p className="m-0">
            In 2023, I won the <strong className="text-ink">Creative Enterprise Award</strong> for my
            Masters thesis "Crush Cup" — a service design intervention exploring how the terracotta
            kullad could replace disposable coffee cups in British café culture. Spoiler: it absolutely
            can.
          </p>
          <p className="m-0">
            I work across service design, UX research, branding, and packaging — not because I couldn't
            pick one, but because the best design lives in the gaps between disciplines.
          </p>
          <p className="m-0">
            If you see me offline, I'm probably building something, filling a sketchbook, or ideating a
            project that won't leave my head. I genuinely believe good design changes behaviour —
            quietly, without force. Currently <strong className="text-ink">open to opportunities</strong>{' '}
            where I can bring that belief to work that matters.
          </p>
        </div>
      </div>
    </section>
  );
}

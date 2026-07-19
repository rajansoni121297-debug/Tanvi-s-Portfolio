import { useTypewriter } from '../hooks/useTypewriter';
import { fireConfetti } from '../lib/confetti';

const DESIGNATIONS = [
  { line1: 'UI / UX', line2: 'Designer' },
  { line1: 'UX', line2: 'Researcher' },
  { line1: 'Service', line2: 'Designer' },
  { line1: 'UX', line2: 'Designer' },
  { line1: 'UX', line2: 'Analyst' },
];

const PHRASES = DESIGNATIONS.map((d) => `${d.line1} ${d.line2}`);

function Cursor({ paused }: { paused: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block w-[0.05em] h-[0.8em] ml-[0.04em] align-middle bg-ink ${
        paused ? 'animate-blink' : 'opacity-100'
      }`}
    />
  );
}

export default function Hero() {
  const { text, index, isPaused } = useTypewriter(PHRASES);
  const splitAt = DESIGNATIONS[index].line1.length;
  const line1 = text.slice(0, splitAt);
  const line2 = text.slice(splitAt).trimStart();

  return (
    <section aria-label="Hero" className="px-12 pt-24 pb-24">
      <div className="flex justify-between items-end gap-10 flex-wrap">
        <h1
          className="m-0 font-semibold leading-[0.94] tracking-[-0.02em] text-[clamp(3.4rem,10vw,8.5rem)]"
          aria-label={PHRASES.join(' · ')}
        >
          <span className="block min-h-[0.94em]" aria-hidden="true">
            {line1}
            {line2.length === 0 && <Cursor paused={isPaused} />}
          </span>
          <span className="block min-h-[0.94em]" aria-hidden="true">
            {line2}
            {line2.length > 0 && <Cursor paused={isPaused} />}
          </span>
        </h1>
        <div className="max-w-[300px] text-left pb-1.5">
          <div className="flex items-center gap-2 text-xl text-accent mb-3.5 font-semibold uppercase relative">
            <span
              aria-hidden="true"
              className="w-1.5 h-1.5 rounded-full bg-accent inline-block flex-none animate-pulseDot"
            />
            Open to opportunities
          </div>
          <div className="text-[15px] leading-relaxed text-ink">
            Research-led. Story-driven. Occasionally covered in post-it notes. Specialized in Service
            Design, UX Research, and Branding.
          </div>
        </div>
      </div>

      <div className="flex gap-8 items-center flex-wrap mt-14">
        <a
          href="#work"
          className="font-semibold text-sm text-surface bg-ink py-[15px] px-[30px] no-underline whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          See my work →
        </a>
        <a
          href="/cv/tanvi-kumar-cv.pdf"
          download="Tanvi-Kumar-CV.pdf"
          onClick={() => fireConfetti()}
          className="font-medium text-sm text-ink no-underline border-b-[1.5px] border-ink pb-[3px] whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}

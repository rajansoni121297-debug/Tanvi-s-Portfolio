import { fireConfetti } from '../lib/confetti';

export default function Footer() {
  return (
    <footer id="contact" aria-label="Contact" className="border-t border-hairline px-12 pt-20 pb-8">
      <div className="flex flex-wrap justify-between items-start gap-8 mb-14">
        <h2 className="font-semibold text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.15] m-0 max-w-[520px]">
          Let's build something worth crafting for.
        </h2>
        <div className="flex flex-col gap-3 items-end">
          <a
            href="https://wa.me/919512551116"
            target="_blank"
            rel="noreferrer"
            className="text-[15px] text-ink no-underline border-b border-hairline pb-0.5 whitespace-nowrap"
          >
            WhatsApp →
          </a>
          <a
            href="mailto:ktanvi1708@gmail.com"
            className="text-[15px] text-ink no-underline border-b border-hairline pb-0.5 whitespace-nowrap"
          >
            Email →
          </a>
          <a
            href="https://www.linkedin.com/in/aboutanvi/"
            target="_blank"
            rel="noreferrer"
            className="text-[15px] text-ink no-underline border-b border-hairline pb-0.5 whitespace-nowrap"
          >
            LinkedIn →
          </a>
          <a
            href="/cv/tanvi-kumar-cv.pdf"
            download="Tanvi-Kumar-CV.pdf"
            onClick={() => fireConfetti()}
            className="text-[15px] font-semibold text-accent no-underline whitespace-nowrap"
          >
            Download CV ↓
          </a>
        </div>
      </div>
      <div className="border-t border-hairline pt-6 text-[13px] text-muted">© Tanvi Kumar 2026</div>
    </footer>
  );
}

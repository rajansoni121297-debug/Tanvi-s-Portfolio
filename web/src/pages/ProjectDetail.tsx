import { Link, Navigate, useParams } from 'react-router-dom';
import DetailNav from '../components/DetailNav';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import * as crushCup from '../data/crushCup';

type ProjectDetailProps = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

const caseStudies: Record<string, typeof crushCup> = {
  'crush-cup': crushCup,
};

export default function ProjectDetail({ theme, onToggleTheme }: ProjectDetailProps) {
  const { slug } = useParams();
  const study = slug ? caseStudies[slug] : undefined;

  if (!study) {
    return <Navigate to="/" replace />;
  }

  const { title, slides, thesisHref } = study;

  return (
    <>
      <DetailNav theme={theme} onToggleTheme={onToggleTheme} />
      <h1 className="sr-only">{title}</h1>

      <div className="max-w-[1800px] mx-auto">
        {slides.map((slide, i) => (
          <Reveal key={slide.src} delayMs={0} className="block">
            <img src={slide.src} alt={slide.alt} className="w-full h-auto block" loading={i < 2 ? 'eager' : 'lazy'} />
          </Reveal>
        ))}
      </div>

      <section aria-label="Read the thesis" className="px-12 pt-14 pb-20 border-t border-hairline">
        <div className="flex flex-wrap gap-8 items-center">
          <a
            href={thesisHref}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-sm text-surface bg-ink py-[15px] px-[30px] no-underline whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            Read the full thesis (PDF) →
          </a>
          <Link
            to="/#work"
            className="font-medium text-sm text-ink no-underline border-b-[1.5px] border-ink pb-[3px] whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            ← Back to all work
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

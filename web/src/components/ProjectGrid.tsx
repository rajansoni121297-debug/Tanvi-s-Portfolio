import { useState, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { filterTabsBase, projects, type FilterKey } from '../data';

export default function ProjectGrid() {
  const [filter, setFilter] = useState<FilterKey>(filterTabsBase[0].key);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [pointer, setPointer] = useState<{ x: number; y: number } | null>(null);

  const filteredProjects = projects.filter((p) => p.tags.includes(filter));

  const handleFilterChange = (key: FilterKey) => {
    setFilter(key);
    setActiveIndex(null);
  };

  const handleListMouseMove = (e: MouseEvent<HTMLUListElement>) => {
    setPointer({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="work" aria-label="Work" className="px-12 pt-14 pb-24 border-t border-hairline">
      <div className="flex items-baseline gap-4 mb-10">
        <span className="font-semibold text-[12.5px] tracking-[0.1em] text-accent">SELECTED WORK</span>
        <div className="flex-1 h-px bg-hairline" />
      </div>
      <h2 className="font-semibold text-[clamp(2rem,4.5vw,3.6rem)] m-0 mb-10">Work I'm proud of.</h2>

      <div
        role="tablist"
        aria-label="Filter work by discipline"
        className="flex gap-7 flex-wrap mb-4 border-b border-hairline pb-4"
      >
        {filterTabsBase.map((tab) => {
          const active = tab.key === filter;
          return (
            <button
              key={tab.key}
              role="tab"
              aria-selected={active}
              onClick={() => handleFilterChange(tab.key)}
              className={`bg-transparent border-none cursor-pointer font-semibold text-sm pb-1.5 whitespace-nowrap border-b-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                active ? 'text-ink border-accent' : 'text-muted border-transparent'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <ul className="list-none m-0 p-0" onMouseMove={handleListMouseMove} onMouseLeave={() => setActiveIndex(null)}>
        {filteredProjects.map((p, i) => {
          const active = activeIndex === i;
          const rowClassName =
            'relative flex items-center py-5 md:py-6 no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4';
          const rowContent = (
            <>
              <span
                aria-hidden="true"
                className={`hidden md:inline-block font-semibold text-xl text-accent transition-all duration-500 ease-out ${
                  active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
              >
                →
              </span>

              <div
                className={`font-semibold leading-[1.1] tracking-[-0.01em] text-[clamp(1.5rem,2.6vw,2.5rem)] transition-all duration-500 ease-out ${
                  active ? 'translate-x-0 md:translate-x-12 text-ink-a/100' : 'translate-x-0 text-ink-a/25'
                }`}
              >
                {p.shortTitle}
              </div>
            </>
          );
          return (
            <li key={p.id} className={`group relative border-t border-hairline first:border-t-0 ${active ? 'z-30' : 'z-0'}`}>
              {p.detailSlug ? (
                <Link
                  to={`/work/${p.detailSlug}`}
                  onMouseEnter={() => setActiveIndex(i)}
                  onFocus={() => setActiveIndex(i)}
                  onBlur={() => setActiveIndex(null)}
                  className={rowClassName}
                >
                  {rowContent}
                </Link>
              ) : (
                <a
                  href={p.link ?? '#'}
                  {...(p.link ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  onMouseEnter={() => setActiveIndex(i)}
                  onFocus={() => setActiveIndex(i)}
                  onBlur={() => setActiveIndex(null)}
                  className={rowClassName}
                >
                  {rowContent}
                </a>
              )}

              {/* Tilted preview card, desktop only */}
              <div
                aria-hidden="true"
                className={`hidden md:flex pointer-events-none absolute top-1/2 right-[6%] -translate-y-1/2 rotate-[4deg] w-96 flex-col bg-surface border border-hairline shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] transition-all duration-500 ease-out ${
                  active ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              >
                <div className="p-7 flex flex-col gap-3">
                  <div className="font-semibold text-[11px] tracking-[0.06em] uppercase text-accent">
                    {p.domain}
                  </div>
                  <div className="font-semibold text-lg leading-[1.3]">{p.title}</div>
                  <div
                    className={`w-full aspect-video overflow-hidden flex items-center justify-center text-muted text-xs ${
                      p.image ? '' : 'border border-dashed border-hairline'
                    }`}
                  >
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={`${p.title} screenshot`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      'Preview'
                    )}
                  </div>
                  <div className="flex justify-between text-xs text-muted">
                    <span>{p.meta}</span>
                    <span className="text-accent font-semibold">{p.cta}</span>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Cursor-following tooltip, desktop only */}
      {pointer && activeIndex !== null && (
        <div
          aria-hidden="true"
          className="hidden md:block fixed z-50 pointer-events-none bg-ink text-surface text-sm font-medium py-2.5 px-5"
          style={{ left: pointer.x + 20, top: pointer.y + 20 }}
        >
          Know more →
        </div>
      )}
    </section>
  );
}

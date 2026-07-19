import { skillDomains } from '../data';

export default function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="px-12 pt-14 pb-24 border-t border-hairline">
      <h2 className="font-semibold text-[clamp(2rem,4.5vw,3.6rem)] m-0 mb-10">My toolbox.</h2>

      {skillDomains.map((d) => (
        <div key={d.title} className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="font-semibold text-sm text-accent">{d.title}</div>
            <div className="flex-1 h-px bg-hairline" />
          </div>
          <div className="flex flex-wrap gap-2.5">
            {d.pills.map((pill) => (
              <span
                key={pill}
                className="py-2 px-4 border border-hairline text-[13px] text-muted whitespace-nowrap"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

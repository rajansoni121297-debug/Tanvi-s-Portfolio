import { workEntries } from '../data';

export default function WorkExperience() {
  return (
    <section aria-label="Work Experience" className="px-12 pt-14 pb-24 border-t border-hairline">
      <h2 className="font-semibold text-[clamp(2rem,4.5vw,3.6rem)] m-0 mb-10">Work Experience</h2>
      <div>
        {workEntries.map((w) => (
          <div
            key={w.company}
            className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 py-7 border-t border-hairline"
          >
            <div>
              <div className="font-semibold text-base">{w.company}</div>
              <div className="text-[13px] text-muted mt-1">{w.date}</div>
            </div>
            <div>
              <div className="font-semibold text-[15px] text-accent mb-2">{w.role}</div>
              <div className="text-[14.5px] leading-[1.7] text-muted">{w.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

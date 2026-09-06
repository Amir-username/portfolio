import { personalInfo } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

export default function About() {
  const quickInfo: [string, string][] = [
    ["نام و نام خانوادگی", personalInfo.name],
    ["تخصص اصلی", "فرانت‌اند (React / TypeScript)"],
    ["تخصص دوم", "بکند (Python / FastAPI)"],
    ["سابقه کاری", "۱ سال — شرکت Partacode"],
    ["وضعیت", personalInfo.availability],
  ];

  return (
    <section id="about" className="scroll-mt-24 py-20">
      <SectionTitle title="درباره من" />
      <div className="grid md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-2 space-y-4 text-slate-300 leading-8">
          {personalInfo.aboutParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <aside className="bg-slate-900/60 border border-white/5 rounded-xl p-6">
          <ul className="space-y-4 text-sm">
            {quickInfo.map(([label, value]) => (
              <li
                key={label}
                className="flex justify-between gap-4 border-b border-white/5 pb-3 last:border-0 last:pb-0"
              >
                <span className="text-slate-500 shrink-0">{label}</span>
                <span className="text-slate-200 font-medium text-left">
                  {value}
                </span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

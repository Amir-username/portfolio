import { experiences } from "../data/portfolio";
import { FiBriefcase } from "react-icons/fi";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20">
      <SectionTitle title="سابقه کاری" />

      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.company} className="flex gap-5">
            {/* خط زمانی */}
            <div className="flex flex-col items-center pt-1">
              <span className="w-10 h-10 rounded-lg bg-cyan-400/10 text-cyan-400 flex items-center justify-center text-lg shrink-0">
                <FiBriefcase />
              </span>
              <span className="w-px flex-1 bg-slate-800 mt-2" />
            </div>

            <div className="pb-6">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                <span className="text-xs bg-cyan-400/10 text-cyan-300 px-2.5 py-1 rounded-full">
                  {exp.duration}
                </span>
              </div>
              <p className="text-cyan-400 text-sm mb-3">{exp.company}</p>
              <ul className="space-y-1.5 text-slate-400 text-sm leading-7 list-disc list-inside marker:text-cyan-500">
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

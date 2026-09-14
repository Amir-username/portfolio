import { projects } from "../data/portfolio";
import type { Project } from "../data/portfolio";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import SectionTitle from "./SectionTitle";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col h-full bg-slate-900/60 border border-white/5 rounded-xl overflow-hidden hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300">
      {/* تصویر — فقط وقتی در دیتا تعریف شده باشه نمایش داده می‌شه */}
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="h-44 w-full object-cover"
        />
      )}

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-7 pb-5">
          {project.description}
        </p>

        {/* بخش پایین کارت: تگ‌ها + لینک‌ها — همیشه تراز پایین */}
        <div className="mt-auto border-t border-white/5 pt-5">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs bg-slate-800 text-cyan-300 px-2.5 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 min-w-32 inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium px-4 py-2.5 rounded-lg transition-colors"
              >
                <FiGithub aria-hidden /> سورس کد
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 min-w-32 inline-flex items-center justify-center gap-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-sm font-medium px-4 py-2.5 rounded-lg transition-colors"
              >
                <FiExternalLink aria-hidden />{" "}
                {project.demoLabel ?? "دمو آنلاین"}
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20">
      <SectionTitle title="نمونه‌پروژه‌ها" />

      {projects.length === 0 ? (
        <div className="border-2 border-dashed border-slate-800 rounded-2xl py-16 px-6 text-center">
          <p className="text-5xl mb-4">🚀</p>
          <p className="text-slate-300 font-bold text-lg mb-2">
            به‌زودی نمونه‌کارها اینجا قرار می‌گیرند
          </p>
          <p className="text-slate-500 text-sm">
            در حال آماده‌سازی بهترین پروژه‌ها برای نمایش هستم...
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      )}
    </section>
  );
}

import { projects } from "../data/portfolio";
import type { Project } from "../data/portfolio";
import { FiExternalLink, FiGithub, FiFolder } from "react-icons/fi";
import SectionTitle from "./SectionTitle";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group bg-slate-900/60 border border-white/5 rounded-xl overflow-hidden hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="h-44 w-full object-cover"
        />
      ) : (
        <div className="h-44 bg-slate-800/50 flex items-center justify-center text-slate-600">
          <FiFolder size={40} />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-7 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs bg-slate-800 text-cyan-300 px-2.5 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5 text-sm">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <FiGithub /> سورس کد
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <FiExternalLink /> {project.demoLabel ?? "دموی زنده"}
            </a>
          )}
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

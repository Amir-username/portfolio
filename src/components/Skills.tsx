import { skillGroups } from "../data/portfolio";
import {
  FiMonitor,
  FiServer,
  FiTool,
  FiBookOpen,
  FiZap,
  FiDatabase,
  FiCloud,
  FiCheckCircle,
  FiRefreshCw,
  FiBox,
  FiCpu,
  FiActivity,
  FiGitBranch,
} from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxt,
  SiPython,
  SiFastapi,
  SiGit,
  SiDocker,
  SiFigma,
  SiHtml5,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";
import type { IconType } from "react-icons";
import SectionTitle from "./SectionTitle";

const skillIcons: Record<string, IconType> = {
  // فرانت‌اند
  "React (TypeScript)": SiReact,
  "Next.js": SiNextdotjs,
  "Vue.js": SiVuedotjs,
  Nuxt: SiNuxt,
  "HTML/CSS": SiHtml5,
  TailwindCSS: SiTailwindcss,
  WebSocket: FiZap,

  // بکند
  Python: SiPython,
  FastAPI: SiFastapi,
  SQLAlchemy: FiDatabase,
  PostgreSQL: SiPostgresql,
  "REST API": FiCloud,

  // مفاهیم و پارادایم‌ها
  "Unit Testing": FiCheckCircle,
  "Async Programming": FiRefreshCw,
  OOP: FiBox,
  "Functional Programming": FiCpu,
  "Realtime Data": FiActivity,
  Concurrency: FiGitBranch,

  // ابزارها
  Git: SiGit,
  Docker: SiDocker,
  "Docker Compose": SiDocker,
  Figma: SiFigma,
};

const groupIcons: Record<string, IconType> = {
  frontend: FiMonitor,
  backend: FiServer,
  concepts: FiBookOpen,
  tools: FiTool,
};

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20">
      <SectionTitle title="مهارت‌ها و تکنولوژی‌ها" />

      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map((group) => {
          const GroupIcon = groupIcons[group.key];
          return (
            <div
              key={group.key}
              className="bg-slate-900/60 border border-white/5 rounded-xl p-6 hover:border-cyan-400/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-lg bg-cyan-400/10 text-cyan-400 flex items-center justify-center text-xl">
                  <GroupIcon />
                </span>
                <h3 className="font-bold text-white">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => {
                  const Icon = skillIcons[skill];
                  return (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 bg-slate-800/70 border border-white/5 px-3 py-1.5 rounded-lg text-sm text-slate-300 hover:border-cyan-400/40 transition-colors"
                    >
                      {Icon && <Icon className="text-cyan-400" aria-hidden />}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

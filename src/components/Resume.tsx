import { useEffect } from "react";
import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import {
  FiArrowRight,
  FiBriefcase,
  FiCpu,
  FiExternalLink,
  FiFolder,
  FiGithub,
  FiMail,
  FiPrinter,
  FiUser,
} from "react-icons/fi";
import {
  experiences,
  personalInfo,
  projects,
  skillGroups,
} from "../data/portfolio";

// ⬇️ بعد از دیپلوی پورتفولیو، آدرس واقعی رو اینجا بذار
const portfolioUrl = "https://amir-portfolio.vercel.app";

/* ---------- کلاس‌های مشترک ---------- */
const techChip =
  "inline-block text-[11px] font-medium text-blue-900 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md";
const contactPill =
  "flex items-center gap-2 bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-colors px-3 py-1.5 rounded-lg";
const projectLink =
  "inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900 transition-colors";

/* ---------- سرتیتر هر بخش ---------- */
function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: IconType;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-6">
      <div className="flex items-center gap-2.5 mb-3.5">
        <span className="w-8 h-8 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center shrink-0">
          <Icon size={15} />
        </span>
        <h2 className="text-[15px] font-extrabold text-slate-900">{title}</h2>
        <span className="flex-1 h-px bg-linear-to-l from-slate-200 to-transparent" />
      </div>
      {children}
    </section>
  );
}

export default function Resume() {
  // نام فایل PDF هنگام ذخیره از عنوان صفحه گرفته می‌شود
  useEffect(() => {
    document.title = "Amir-Naji-Resume";
    return () => {
      document.title = "امیر ناجی | برنامه‌نویس فرانت‌اند";
    };
  }, []);

  return (
    <div className="resume-root min-h-screen bg-slate-200/70 py-10 print:bg-white print:py-0">
      {/* نوار ابزار — در چاپ نمایش داده نمی‌شود */}
      <div className="max-w-3xl mx-auto px-4 mb-5 print:hidden">
        <div className="bg-white border border-slate-200 shadow-sm rounded-2xl px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-blue-700 transition-colors"
          >
            <FiArrowRight /> بازگشت به سایت
          </a>
          <div className="flex items-center gap-3">
            <span className="hidden sm:block text-xs text-slate-400">
              A4 — آماده‌ی چاپ
            </span>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-blue-600/25 transition-colors"
            >
              <FiPrinter /> دانلود PDF
            </button>
          </div>
        </div>
      </div>

      {/* برگه‌ی رزومه */}
      <article className="max-w-3xl mx-auto bg-white border border-slate-200/70 rounded-2xl shadow-xl print:border-0 print:rounded-none print:shadow-none px-8 py-8 print:px-0 print:py-0">
        {/* ─── هدر ─── */}
        <header className="flex flex-wrap items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            {/* مونوگرام */}
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-extrabold text-slate-900">
                {personalInfo.name}
              </h1>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {personalInfo.role}
                </span>
                <span className="bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                  {personalInfo.secondRole}
                </span>
              </div>
            </div>
          </div>

          {/* اطلاعات تماس */}
          <div className="flex flex-col gap-2" dir="ltr">
            <a href={`mailto:${personalInfo.email}`} className={contactPill}>
              <FiMail size={14} className="text-blue-600 shrink-0" />
              <span className="text-xs font-medium text-slate-700">
                {personalInfo.email}
              </span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className={contactPill}
            >
              <FiGithub size={14} className="text-blue-600 shrink-0" />
              <span className="text-xs font-medium text-slate-700">
                {personalInfo.github.replace(/^https?:\/\/(www\.)?/, "")}
              </span>
            </a>
          </div>
        </header>

        {/* خط تزئینی زیر هدر */}
        <div className="mt-6 h-[3px] rounded-full bg-linear-to-l from-blue-600 via-cyan-400 to-transparent" />

        {/* ─── درباره من ─── */}
        <Section icon={FiUser} title="درباره من">
          <p className="text-sm leading-7 text-slate-600 bg-slate-50 border-r-[3px] border-blue-600 rounded-l-xl px-4 py-3">
            {personalInfo.resumeSummary}
          </p>
        </Section>

        {/* ─── مهارت‌ها ─── */}
        <Section icon={FiCpu} title="مهارت‌ها">
          <div className="space-y-2.5">
            {skillGroups.map((group) => (
              <div
                key={group.key}
                className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1.5"
              >
                <span className="text-[13px] font-extrabold text-slate-800 me-1.5">
                  {group.title}:
                </span>
                {group.skills.map((skill) => (
                  <span key={skill} className={techChip} dir="ltr">
                    {skill}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </Section>

        {/* ─── سابقه کاری ─── */}
        <Section icon={FiBriefcase} title="سابقه کاری">
          <div className="space-y-5">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="relative pr-6 break-inside-avoid"
              >
                {/* تایم‌لاین */}
                <span className="absolute right-0 top-2 bottom-0 w-px bg-slate-200" />
                <span className="absolute -right-[5px] top-1.5 w-[11px] h-[11px] rounded-full bg-blue-600 ring-4 ring-blue-100" />

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900">
                      {exp.role}
                    </h3>
                    <p className="text-[13px] font-medium text-blue-700 mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-blue-800 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full shrink-0">
                    {exp.duration}
                  </span>
                </div>

                <ul className="mt-2 space-y-1 text-sm text-slate-600 leading-6 list-disc list-inside marker:text-blue-500">
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* ─── پروژه‌ها ─── */}
        <Section icon={FiFolder} title="پروژه‌ها">
          <div className="grid sm:grid-cols-2 gap-3">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col break-inside-avoid"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-[13px] font-extrabold text-slate-900 leading-5">
                    {project.title}
                  </h3>
                  <span className="w-5 h-5 pt-1 rounded-md bg-blue-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                </div>

                <div className="mt-2 flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <span key={tech} className={techChip} dir="ltr">
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-2 text-[13px] leading-6 text-slate-600 flex-1">
                  {project.resumeDescription ?? project.description}
                </p>

                <div
                  className="mt-3 pt-2.5 border-t border-slate-200 flex flex-wrap gap-x-4 gap-y-1"
                  dir="ltr"
                >
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={projectLink}
                    >
                      <FiExternalLink size={12} />
                      {project.demoLabel === "مستندات API (Swagger)"
                        ? "API Docs"
                        : "Live Demo"}
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={projectLink}
                    >
                      <FiGithub size={12} /> Source
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ─── فوتر ─── */}
        <footer className="mt-7 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
          <span>
            آخرین به‌روزرسانی: {new Date().toLocaleDateString("fa-IR")}
          </span>
          <a
            href={portfolioUrl}
            target="_blank"
            rel="noreferrer"
            className="font-bold text-blue-700 hover:underline"
          >
            نسخه‌ی آنلاین ↗
          </a>
        </footer>
      </article>
    </div>
  );
}

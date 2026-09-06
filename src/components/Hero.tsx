import { personalInfo } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-glow min-h-screen flex items-center justify-center px-4 pt-16"
    >
      <div className="text-center animate-fade-up">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-[1.3]">
          سلام، من{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-l from-cyan-400 to-blue-500">
            {personalInfo.name}
          </span>{" "}
          هستم
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 font-medium mb-3">
          {personalInfo.role}
          <span className="text-slate-500 mx-2">|</span>
          {personalInfo.secondRole}
        </p>

        <p className="text-slate-400 mb-10 tracking-wide" dir="ltr">
          React · TypeScript · Next.js · Vue · Nuxt · Python · FastAPI
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-7 py-3 rounded-lg transition-colors"
          >
            مشاهده پروژه‌ها
          </a>
          <a
            href="#contact"
            className="border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 text-slate-300 px-7 py-3 rounded-lg transition-colors"
          >
            تماس با من
          </a>
        </div>
      </div>
    </section>
  );
}

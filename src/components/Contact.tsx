import { personalInfo } from "../data/portfolio";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import SectionTitle from "./SectionTitle";

const socialClass =
  "w-11 h-11 flex items-center justify-center rounded-lg bg-slate-800 text-slate-300 text-xl hover:bg-cyan-500 hover:text-slate-950 transition-colors";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20">
      <SectionTitle title="تماس با من" />

      <div className="bg-slate-900/60 border border-white/5 rounded-2xl py-14 px-6 text-center">
        <p className="text-slate-300 leading-8 max-w-xl mx-auto mb-10">
          برای همکاری در پروژه‌ی جدید، فرصت شغلی یا حتی یک گفت‌وگوی کوتاه
          درباره‌ی تکنولوژی، خوشحال می‌شوم در ارتباط باشیم.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-7 py-3.5 rounded-lg transition-colors"
          >
            <FiMail /> {personalInfo.email}
          </a>
          <a
            href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2.5 border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 text-slate-300 font-bold px-7 py-3.5 rounded-lg transition-colors"
          >
            <FiPhone /> <span dir="ltr">{personalInfo.phone}</span>
          </a>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className={socialClass}
          >
            <FiGithub />
          </a>
          {personalInfo.linkedin && (
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className={socialClass}
            >
              <FiLinkedin />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

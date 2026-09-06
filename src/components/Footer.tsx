import { personalInfo } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-6 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} — ساخته‌شده با React توسط {personalInfo.name}
    </footer>
  );
}

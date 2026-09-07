import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { personalInfo } from "../data/portfolio";

const links = [
  { href: "#home", label: "خانه" },
  { href: "#about", label: "درباره من" },
  { href: "#skills", label: "مهارت‌ها" },
  { href: "#experience", label: "سابقه کاری" },
  { href: "#projects", label: "نمونه‌پروژه‌ها" },
  { href: "#contact", label: "تماس" },
  { href: "/?view=resume", label: "رزومه" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 h-16">
        <a href="#home" className="text-xl font-extrabold text-white">
          {personalInfo.firstName}
          <span className="text-cyan-400">.</span>
          {personalInfo.lastName}
        </a>

        {/* لینک‌ها — دسکتاپ */}
        <ul className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-cyan-400 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* دکمه منو — موبایل */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setOpen(!open)}
          aria-label="باز و بسته کردن منو"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* منوی موبایل */}
      {open && (
        <ul className="md:hidden flex flex-col px-4 pb-4 text-slate-300">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 border-b border-white/5 last:border-0 hover:text-cyan-400"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

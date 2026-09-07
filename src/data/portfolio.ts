export interface Project {
  title: string;
  description: string;
  tech: string[];
  demoUrl?: string;
  demoLabel?: string;
  githubUrl?: string;
  image?: string;
}
export interface Experience {
  role: string;
  company: string;
  duration: string;
  points: string[];
}

export const personalInfo = {
  name: "امیر ناجی",
  firstName: "امیر",
  lastName: "ناجی",
  role: "برنامه‌نویس فرانت‌اند",
  secondRole: "برنامه‌نویس بکند",
  availability: "آماده‌ی همکاری در پروژه‌های جدید ✅",

  // ⬇️ این سه مورد رو با اطلاعات واقعی خودت جایگزین کن
  email: "amrnj3172@gmail.com",
  github: "https://github.com/Amir-username",
  linkedin: "https://www.linkedin.com/in/amir-naji-2a730b38b/",
  aboutParagraphs: [
    "سلام! من امیر ناجی هستم؛ برنامه‌نویس فرانت‌اند با تمرکز روی React و TypeScript. عاشق ساختن رابط‌های کاربری تمیز، سریع و کاربرپسندم و تجربه‌ی کار روی پروژه‌های واقعی مثل پنل‌های ادمین و سرویس‌های خدماتی رو دارم.",
    "بیش از یک سال در شرکت Partacode به‌عنوان برنامه‌نویس فرانت‌اند (React) کار کردم و در این مدت با چالش‌های واقعیِ کار تیمی، مسئولیت‌پذیری در تسک‌ها و تحویل قابلیت‌های جدید آشنا شدم.",
    "در کنار فرانت‌اند، با Python و FastAPI در سمت بکند هم کار می‌کنم و با ابزارهایی مثل Git، Docker و Figma کاملاً راحتم؛ همین ترکیب بهم دید کامل‌تری نسبت به کل چرخه‌ی توسعه‌ی نرم‌افزار میده.",
  ],
};

export const skillGroups = [
  {
    key: "frontend",
    title: "فرانت‌اند",
    skills: [
      "React (TypeScript)",
      "Next.js",
      "Vue.js",
      "Nuxt",
      "HTML/CSS",
      "TailwindCSS",
      "WebSocket",
    ],
  },
  {
    key: "backend",
    title: "بکند",
    skills: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "REST API"],
  },
  {
    key: "concepts",
    title: "مفاهیم",
    skills: [
      "Unit Testing",
      "Async Programming",
      "OOP",
      "Functional Programming",
      "Realtime Data",
      "Concurrency",
    ],
  },
  {
    key: "tools",
    title: "توسعه و ابزارها",
    skills: ["Git", "Docker", "Docker Compose", "Figma"],
  },
];

export const experiences: Experience[] = [
  {
    role: "برنامه‌نویس فرانت‌اند (React)",
    company: "شرکت Partacode",
    duration: "۱ سال",
    points: [
      "توسعه و نگهداری پروژه‌های خدماتی با React",
      "پیاده‌سازی و توسعه‌ی پنل‌های ادمین",
      "همکاری با تیم بکند و طراحی برای ساخت رابط کاربری نهایی",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "کارپرداز — سامانه مدیریت کارها (بکند)",
    description:
      "بکند سامانه مدیریت کارها با Python و FastAPI. پیاده‌سازی REST API برای امکانات ثبت، پیگیری و مدیریت وضعیت کارها، به‌همراه مستندات تعاملی OpenAPI (Swagger) که امکان تست مستقیم endpointها رو فراهم می‌کنه. فرانت‌اند این سامانه به‌صورت پروژه‌ی جداگانه در همین پورتفولیو موجود است.",
    tech: ["Python", "FastAPI", "REST API"],
    demoLabel: "مستندات API (Swagger)",
    demoUrl: "https://karpardaz-backend.fastapicloud.dev/docs",
    githubUrl: "https://github.com/Amir-username/karpardaz-backend",
  },
  {
    title: "کارپرداز — سامانه مدیریت کارها (فرانت‌اند)",
    description:
      "فرانت‌اند سامانه مدیریت کارها و درخواست‌ها با رابط کاربری واکنش‌گرا و راست‌چین. شامل امکانات ثبت، پیگیری و مدیریت وضعیت کارها است که با REST API بکندِ همین سامانه (پروژه‌ی بالا) ارتباط برقرار می‌کند.",
    tech: ["React", "TypeScript", "TailwindCSS"],
    demoUrl: "https://karpardaz-frontend.vercel.app/",
    githubUrl: "https://github.com/Amir-username/karpardaz-frontend",
  },
  {
    title: "سرویس چت آنلاین — بکند",
    description:
      "بکند سرویس پیام‌رسانی آنلاین با Python و FastAPI. ارتباط ریل‌تایم با WebSocket برای ارسال و دریافت پیام لحظه‌ای، به‌همراه مستندات تعاملی OpenAPI (Swagger). اپلیکیشن چتِ فرانت‌اند متصل به این سرویس نیز به‌صورت پروژه‌ی جداگانه در همین پورتفولیو موجود است.",
    tech: ["Python", "FastAPI", "WebSocket"],
    demoLabel: "مستندات API (Swagger)",
    demoUrl: "https://chat-service.fastapicloud.dev/docs",
    githubUrl: "https://github.com/Amir-username/chat-service",
  },
  {
    title: "چت آنلاین ریل‌تایم (فرانت‌اند)",
    description:
      "اپلیکیشن چت آنلاین با قابلیت ارسال و دریافت پیام به‌صورت لحظه‌ای بدون نیاز به رفرش صفحه. ارتباط ریل‌تایم با WebSocket و اتصال به بکند سرویس چت (پروژه‌ی بالا) و رابط کاربری واکنش‌گرا و راست‌چین.",
    tech: ["React", "TypeScript", "WebSocket", "TailwindCSS"],
    demoUrl: "https://chat-frontend-psi-wine.vercel.app/",
    githubUrl: "https://github.com/Amir-username/chat-frontend",
  },
];

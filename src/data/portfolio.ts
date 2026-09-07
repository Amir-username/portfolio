export interface Project {
  title: string;
  description: string;
  tech: string[];
  demoUrl?: string;
  demoLabel?: string;
  githubUrl?: string;
  image?: string;
  resumeDescription?: string;
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
  resumeSummary:
    "برنامه‌نویس فرانت‌اند با تمرکز بر React و TypeScript و یک سال تجربه‌ی حرفه‌ای در شرکت Partacode روی پروژه‌های خدماتی و پنل‌های ادمین. مسلط به اکوسیستم React و فریم‌ورک‌های Next.js، Vue و Nuxt؛ آشنا با توسعه‌ی بکند با Python و FastAPI و ابزارهای Git، Docker و Figma.",

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
    title: "کارپرداز — پلتفرم کاریابی و استخدام (فرانت‌اند)",
    description:
      "فرانت‌اند پلتفرم کاریابی و استخدام با رابط کاربری واکنش‌گرا و راست‌چین. کارفرما و کارجو هر دو امکان ثبت و مدیریت آگهی دارند و پیشنهادهای هوشمندِ سیستم یادگیری ماشین (از سمت بکند) به کاربر نمایش داده می‌شود. ارتباط با سرور با Axios و متصل به REST API بکندِ همین پلتفرم (پروژه‌ی بالا).",
    resumeDescription:
      "فرانت‌اند پلتفرم کاریابی با Next.js و TailwindCSS؛ ثبت و مدیریت آگهی برای کارفرما و کارجو و نمایش پیشنهادهای هوشمند سیستم یادگیری ماشین از سمت بکند.",
    tech: ["React", "TypeScript", "TailwindCSS", "Axios"],
    demoUrl: "https://karpardaz-frontend.vercel.app/",
    githubUrl: "https://github.com/Amir-username/karpardaz-frontend",
  },
  {
    title: "کارپرداز — پلتفرم کاریابی و استخدام (بکند)",
    description:
      "بکند پلتفرم کاریابی و استخدام با Python و FastAPI. هم کارفرما و هم کارجو می‌توانند در پلتفرم آگهی ثبت کنند و سیستم پیشنهاددهنده با scikit-learn و شباهت کسینوسی (Cosine Similarity)، متناسب‌ترین آگهی‌ها را به هر کاربر پیشنهاد می‌دهد. ذخیره‌سازی داده‌ها در PostgreSQL با SQLAlchemy و پیاده‌سازی REST API به‌همراه مستندات تعاملی OpenAPI (Swagger) برای تست مستقیم endpointها. فرانت‌اند این پلتفرم به‌صورت پروژه‌ی جداگانه در همین پورتفولیو موجود است.",
    resumeDescription:
      "بکند پلتفرم کاریابی با FastAPI؛ ثبت آگهی برای کارفرما و کارجو و سیستم پیشنهاددهی آگهی با scikit-learn و شباهت کسینوسی. ذخیره‌سازی داده‌ها در PostgreSQL با SQLAlchemy.",
    tech: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "scikit-learn",
      "REST API",
    ],
    demoLabel: "مستندات API (Swagger)",
    demoUrl: "https://karpardaz-backend.fastapicloud.dev/docs",
    githubUrl: "https://github.com/Amir-username/karpardaz-backend",
  },

  {
    title: "چت آنلاین  (فرانت‌اند)",
    description:
      "اپلیکیشن چت آنلاین با قابلیت ارسال و دریافت پیام به‌صورت لحظه‌ای بدون نیاز به رفرش صفحه. ارتباط ریل‌تایم با WebSocket و اتصال به بکند سرویس چت (پروژه‌ی بالا). مدیریت استیت اپلیکیشن با Zustand، ارتباط با سرور با Axios و رابط کاربری واکنش‌گرا و راست‌چین با TailwindCSS.",
    resumeDescription:
      "اپ چت ریل‌تایم با React و Vite؛ پیام‌رسانی لحظه‌ای با WebSocket، مدیریت استیت با Zustand و ارتباط با سرور با Axios.",
    tech: ["React", "TypeScript", "Vite", "TailwindCSS", "Zustand", "Axios"],
    demoUrl: "https://chat-frontend-psi-wine.vercel.app/",
    githubUrl: "https://github.com/Amir-username/chat-frontend",
  },
  {
    title: "سرویس چت آنلاین — بکند",
    description:
      "بکند سرویس پیام‌رسانی آنلاین با Python و FastAPI. ارسال و دریافت پیام به‌صورت لحظه‌ای با WebSocket و مدیریت تمیز تنظیمات و متغیرهای محیطی پروژه با Pydantic Settings. سیستم احراز هویت با پکیج fast-auth پیاده‌سازی شده است؛ پکیجی که خودم برای FastAPI توسعه داده‌ام. مستندات تعاملی OpenAPI (Swagger) امکان تست مستقیم endpointها را فراهم می‌کند و اپلیکیشن چت فرانت‌اند متصل به این سرویس نیز در همین پورتفولیو موجود است.",
    resumeDescription:
      "بکند سرویس چت با FastAPI و WebSocket برای پیام‌رسانی لحظه‌ای؛ احراز هویت با پکیج fast-auth (ساخت خودم) و مدیریت تنظیمات با Pydantic Settings.",
    tech: ["Python", "FastAPI", "Pydantic Settings", "fast-auth", "WebSocket"],
    demoLabel: "مستندات API (Swagger)",
    demoUrl: "https://chat-service.fastapicloud.dev/docs",
    githubUrl: "https://github.com/Amir-username/chat-service",
  },
];

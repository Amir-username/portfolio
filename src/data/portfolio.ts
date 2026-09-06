export interface Project {
  title: string;
  description: string;
  tech: string[];
  demoUrl?: string;
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

// 📌 پروژه‌ها رو بعداً اینجا اضافه می‌کنیم؛ فعلاً خالی می‌مونه
export const projects: Project[] = [
  // ساختار هر پروژه:
  // {
  //   title: 'نام پروژه',
  //   description: 'توضیح کوتاه',
  //   tech: ['React', 'TypeScript'],
  //   demoUrl: 'https://...',
  //   githubUrl: 'https://github.com/...',
  //   image: '/images/project.jpg',
  // },
];

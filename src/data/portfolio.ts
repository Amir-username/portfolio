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
  phone: "+98 938 304 5857",
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
      "فرانت‌اند پلتفرم کاریابی و استخدام با Next.js 15 (App Router) و React 19. کارفرما می‌تواند آگهی شغلی ثبت کند، درخواست‌های همکاری را بررسی و مدیریت کند، کاندیداها را جستجو کند و مصاحبه‌ها را برنامه‌ریزی کند؛ کارجو فرصت‌های شغلی را جستجو و برای آن‌ها درخواست ارسال می‌کند، رزومه‌ی خود را آپلود می‌کند و پروفایل حرفه‌ای می‌سازد. پیشنهادهای شخصی‌سازی‌شده‌ی فرصت‌های شغلی توسط سیستم یادگیری ماشین (از سمت بکند) به کارجو نمایش داده می‌شود. احراز هویت امن سمت سرور (SSR) با کوکی، اعتبارسنجی فرم‌ها با Zod، تم تیره/روشن، پشتیبانی کامل از زبان فارسی و راست‌چین و طراحی واکنش‌گرا برای همه‌ی دستگاه‌ها. متصل به REST API بکندِ همین پلتفرم (پروژه‌ی بالا).",
    resumeDescription:
      "فرانت‌اند پلتفرم کاریابی با Next.js 15 و React 19؛ پنل کارفرما (ثبت آگهی، مدیریت درخواست‌ها و مصاحبه‌ها، جستجوی کاندیدا) و پنل کارجو (جستجوی شغل، آپلود رزومه، دریافت پیشنهادهای هوشمند ML)، احراز هویت SSR با کوکی و اعتبارسنجی با Zod.",
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "TailwindCSS",
      "Zod",
      "Axios",
    ],
    demoUrl: "https://karpardaz-frontend.vercel.app/",
    githubUrl: "https://github.com/Amir-username/karpardaz-frontend",
  },
  {
    title: "کارپرداز — پلتفرم کاریابی و استخدام (بکند)",
    description:
      "بکند پلتفرم کاریابی و استخدام با Python و FastAPI؛ بازار دوطرفه با احراز هویت و مسیرهای مجزا برای کارفرما و کارجو. سیستم پیشنهاددهنده‌ی شغل مبتنی بر یادگیری ماشین: پیش‌فیلترینگ آگهی‌ها بر اساس موقعیت مکانی، دورکاری و شرایط کارجو، بردارسازی پروفایل‌ها و آگهی‌ها با one-hot و multi-hot encoding و رتبه‌بندی نتایج با شباهت کسینوسی (scikit-learn). ذخیره‌سازی داده‌ها در PostgreSQL (Supabase) با SQLModel، احراز هویت JWT با OAuth2PasswordBearer و رمزنگاری رمز عبور با bcrypt، سیستم لایک دوطرفه‌ی کارفرما و کارجو، مدیریت درخواست‌های همکاری و زمان‌بندی مصاحبه، آپلود رزومه و تصاویر پروفایل و پنل ادمین با آمار و مدیریت کاربران. مستندات تعاملی OpenAPI (Swagger). فرانت‌اند این پلتفرم به‌صورت پروژه‌ی جداگانه در همین پورتفولیو موجود است.",
    resumeDescription:
      "بکند پلتفرم کاریابی با FastAPI؛ پنل مجزای کارفرما/کارجو با JWT و bcrypt، سیستم پیشنهاددهی شغل با scikit-learn (بردارسازی one-hot/multi-hot و شباهت کسینوسی)، PostgreSQL روی Supabase با SQLModel، سیستم لایک، مصاحبه و پنل ادمین.",
    tech: [
      "Python",
      "FastAPI",
      "SQLModel",
      "PostgreSQL",
      "Supabase",
      "scikit-learn",
      "JWT",
      "bcrypt",
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

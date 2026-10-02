"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import { virtualTours } from "../../data/virtualTours";
import { getInitialLanguage, isRtlLanguage, type Lang } from "../../lib/language";

type Category =
  | "all"
  | "websites"
  | "apps"
  | "custom"
  | "ecommerce"
  | "booking"
  | "menu"
  | "virtual-tours";

type Project = {
  id: string;
  category: Exclude<Category, "all">;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  previewUrl?: string;
  domain: string;
  href?: string;
  hasLivePreview?: boolean;
  tags?: string[];
};

const filters: { id: Category; label: Record<Lang, string> }[] = [
  { id: "all", label: { ar: "الكل", en: "All", ku: "هەموو" } },
  {
    id: "websites",
    label: { ar: "مواقع إلكترونية", en: "Websites", ku: "ماڵپەڕەکان" },
  },
  { id: "apps", label: { ar: "تطبيقات", en: "Applications", ku: "ئەپەکان" } },
  {
    id: "custom",
    label: { ar: "أنظمة مخصصة", en: "Custom Systems", ku: "سیستەمی تایبەت" },
  },
  {
    id: "ecommerce",
    label: { ar: "متاجر إلكترونية", en: "E-commerce", ku: "فرۆشگای ئۆنلاین" },
  },
  {
    id: "booking",
    label: { ar: "حجوزات رقمية", en: "Booking Solutions", ku: "حجزکردنی دیجیتاڵی" },
  },
  {
    id: "menu",
    label: { ar: "منيو رقمي", en: "Digital Menus", ku: "مینیوی دیجیتاڵی" },
  },
  {
    id: "virtual-tours",
    label: { ar: "جولات افتراضية", en: "Virtual Tours", ku: "گەشتی خەیاڵی" },
  },
];

const projects: Project[] = [
  {
    id: "kishib",
    category: "apps",
    title: { ar: "KISHIB", en: "KISHIB", ku: "KISHIB" },
    description: {
      ar: "تطبيق رقمي لتقييم وفهم وتوثيق التحف والمقتنيات.",
      en: "A digital app for evaluating, understanding, and documenting antiques.",
      ku: "ئەپێکی دیجیتاڵی بۆ هەڵسەنگاندن و تۆمارکردنی کۆنەبابەتەکان.",
    },
    previewUrl: "https://antiques-lens.vercel.app/",
    domain: "antiques-lens.vercel.app",
    href: "https://antiques-lens.vercel.app/",
    hasLivePreview: true,
  },
  {
    id: "mismar",
    category: "websites",
    title: {
      ar: "مؤسسة مسمار",
      en: "MISMAR Foundation",
      ku: "دامەزراوەی مسمار",
    },
    description: {
      ar: "منصة رقمية لمشاريع ومبادرات مؤسسة مسمار للفنون والتنمية المستدامة.",
      en: "A digital platform for MISMAR Foundation projects and initiatives.",
      ku: "پلاتفۆرمێکی دیجیتاڵی بۆ پڕۆژە و دەستپێشخەرییەکانی مسمار.",
    },
    previewUrl: "https://www.mismar.ngo/ar",
    domain: "mismar.ngo",
    href: "https://www.mismar.ngo/ar",
    hasLivePreview: true,
    tags: ["Custom Development", "Responsive", "SEO", "Multilingual"],
  },
  {
    id: "kishib-website",
    category: "websites",
    title: {
      ar: "الموقع الإلكتروني لمنصة KISHIB",
      en: "KISHIB Platform Website",
      ku: "ماڵپەڕی پلاتفۆرمی KISHIB",
    },
    description: {
      ar: "موقع تعريفي مصمم لعرض منصة رقمية وشرح خدماتها بوضوح.",
      en: "A clean website created to introduce a digital platform and its services.",
      ku: "ماڵپەڕێکی ڕوون بۆ ناساندنی پلاتفۆرمێکی دیجیتاڵی و خزمەتگوزارییەکانی.",
    },
    previewUrl: "https://kishib-website.vercel.app/",
    domain: "kishib-website.vercel.app",
    href: "https://kishib-website.vercel.app/",
    hasLivePreview: true,
  },
  {
    id: "ghadeer-altaee",
    category: "websites",
    title: {
      ar: "غدير الطائي",
      en: "Ghadeer Al-Taee",
      ku: "غەدیر تەعێ",
    },
    description: {
      ar: "موقع فني يوثق أعمال وتجربة الفنان غدير الطائي.",
      en: "An artist website documenting Ghadeer Al-Taee's work and practice.",
      ku: "ماڵپەڕێکی هونەری بۆ تۆمارکردنی کاری هونەرمەند غەدیر تەعێ.",
    },
    previewUrl: "https://www.ghadeeraltaee.art/ar",
    domain: "ghadeeraltaee.art",
    href: "https://www.ghadeeraltaee.art/ar",
    hasLivePreview: true,
    tags: ["Responsive", "SEO", "Multilingual"],
  },
  {
    id: "house-of-antiques-website",
    category: "websites",
    title: {
      ar: "بيت التحفيات",
      en: "House of Antiques Website",
      ku: "ماڵپەڕی ماڵی کۆنەبابەتەکان",
    },
    description: {
      ar: "موقع إلكتروني يعرض هوية بيت التحفيات وقصته ومعلومات الزائر.",
      en: "A business website presenting the identity, story, and visitor information.",
      ku: "ماڵپەڕێک بۆ پیشاندانی ناسنامە، چیرۆک و زانیاریی سەردانکەر.",
    },
    previewUrl: "https://www.houseof-antiques.com/",
    domain: "houseof-antiques.com",
    href: "https://www.houseof-antiques.com/",
    hasLivePreview: true,
  },
  {
    id: "custom-systems",
    category: "custom",
    title: {
      ar: "أنظمة المؤسسات والشركات",
      en: "Institution & Company Systems",
      ku: "سیستەمی دامەزراوە و کۆمپانیاکان",
    },
    description: {
      ar: "أنظمة رقمية تُبنى من الصفر حسب دورة العمل والصلاحيات والاحتياجات.",
      en: "Digital systems built from scratch around workflows, roles, and needs.",
      ku: "سیستەمی دیجیتاڵی لە بنەڕەتەوە بە پێی پێویستی و ڕێڕەوی کار.",
    },
    domain: "custom-system",
    href: "#contact",
    hasLivePreview: false,
  },
  {
    id: "wissam-radhi",
    category: "websites",
    title: {
      ar: "وسام راضي",
      en: "Wissam Radhi",
      ku: "وسام ڕازی",
    },
    description: {
      ar: "موقع فني لعرض أعمال الفنان وسام راضي وتجربته الفنية.",
      en: "An artist website presenting Wissam Radhi's work and creative practice.",
      ku: "ماڵپەڕێکی هونەری بۆ پیشاندانی کاری هونەرمەند وسام ڕازی.",
    },
    previewUrl: "https://www.wissamradhi.art/",
    domain: "wissamradhi.art",
    href: "https://www.wissamradhi.art/",
    hasLivePreview: true,
    tags: ["Custom Development", "Responsive", "SEO"],
  },
  {
    id: "house-store",
    category: "ecommerce",
    title: {
      ar: "متجر بيت التحفيات",
      en: "House of Antiques Store",
      ku: "فرۆشگای ماڵی کۆنەبابەتەکان",
    },
    description: {
      ar: "متجر إلكتروني لعرض وإدارة وبيع المقتنيات والمنتجات رقمياً.",
      en: "An online store for presenting, managing, and selling collectibles.",
      ku: "فرۆشگایەکی ئۆنلاین بۆ پیشاندان و بەڕێوەبردن و فرۆشتن.",
    },
    previewUrl: "https://www.houseofantiques.store/",
    domain: "houseofantiques.store",
    href: "https://www.houseofantiques.store/",
    hasLivePreview: true,
  },
  {
    id: "fahad-almodares",
    category: "websites",
    title: {
      ar: "فهد المدرس",
      en: "Fahad Almodares",
      ku: "فەهد ئەلمودەرس",
    },
    description: {
      ar: "موقع شخصي ومهني يعرض المسيرة والمشاريع والخبرات.",
      en: "A personal and professional website for work, projects, and experience.",
      ku: "ماڵپەڕێکی کەسی و پیشەیی بۆ پیشاندانی ئەزموون و پڕۆژەکان.",
    },
    previewUrl: "https://www.fahadalmodares.com/",
    domain: "fahadalmodares.com",
    href: "https://www.fahadalmodares.com/",
    hasLivePreview: true,
    tags: ["Responsive", "SEO"],
  },
  {
    id: "booking-system",
    category: "booking",
    title: {
      ar: "نظام الحجوزات الرقمية",
      en: "Digital Booking System",
      ku: "سیستەمی حجزکردنی دیجیتاڵی",
    },
    description: {
      ar: "تجربة حجز رقمية مبسطة لإدارة المواعيد والخدمات والحجوزات.",
      en: "A simple digital booking experience for appointments and services.",
      ku: "ئەزموونی حجزکردنی دیجیتاڵی بۆ کات و خزمەتگوزارییەکان.",
    },
    previewUrl: "https://hoa-booking-seven.vercel.app/",
    domain: "hoa-booking-seven.vercel.app",
    href: "https://hoa-booking-seven.vercel.app/",
    hasLivePreview: true,
  },
  {
    id: "auction-system",
    category: "custom",
    title: {
      ar: "نظام المزاد",
      en: "Auction System",
      ku: "سیستەمی مزایدە",
    },
    description: {
      ar: "نظام رقمي لإدارة المزادات والعمليات المرتبطة بها.",
      en: "A digital system for managing auctions and related operations.",
      ku: "سیستەمێکی دیجیتاڵی بۆ بەڕێوەبردنی مزایدە و کارە پەیوەندیدارەکان.",
    },
    previewUrl: "https://houseofantiques.github.io/auction/",
    domain: "houseofantiques.github.io/auction",
    href: "https://houseofantiques.github.io/auction/",
    hasLivePreview: true,
  },
  {
    id: "digital-menu",
    category: "menu",
    title: {
      ar: "منيو رقمي",
      en: "Digital Menu",
      ku: "مینیوی دیجیتاڵی",
    },
    description: {
      ar: "منيو إلكتروني سريع ومتجاوب يمكن الوصول إليه مباشرة عبر QR.",
      en: "A fast responsive digital menu accessed directly through QR.",
      ku: "مینیویەکی دیجیتاڵی خێرا و وەڵامدەرەوە بە QR.",
    },
    previewUrl: "https://hoa-menu.vercel.app/",
    domain: "hoa-menu.vercel.app",
    href: "https://hoa-menu.vercel.app/",
    hasLivePreview: true,
  },
  ...virtualTours
    .filter((tour) =>
      ["house-of-antiques-2026", "al-mutanabbi-street", "babylon-rotana", "alps-restaurant"].includes(
        tour.slug,
      ),
    )
    .map<Project>((tour) => ({
      id: tour.slug,
      category: "virtual-tours",
      title: tour.title,
      description: {
        ar: "جولة افتراضية ثلاثية الأبعاد و360° لعرض المكان رقمياً.",
        en: "A 3D and 360° virtual tour built to present the space digitally.",
        ku: "گەشتی خەیاڵی سێ ڕەهەندی و 360° بۆ پیشاندانی شوێن بە دیجیتاڵی.",
      },
      previewUrl: tour.matterportUrl,
      domain: "my.matterport.com",
      href: `/virtual-tours/${tour.slug}`,
      hasLivePreview: true,
    })),
];

const pageText = {
  en: {
    title: "Some of Our Work",
    intro:
      "Selected examples of Abaad Al-Iraq projects across websites, applications, digital systems, virtual tours, and tailored solutions.",
    open: "View project",
    model: "View model",
    websiteNote:
      "We build websites from idea to launch, with search-ready structure and improved discoverability across Google.",
    ctaTitle: "Have a different idea?",
    ctaText: "We design the digital solution around your project's need, not around a ready-made template.",
    ctaButton: "Start your project",
  },
  ar: {
    title: "بعض من أعمالنا",
    intro:
      "نماذج من مشاريع أبعاد العراق في المواقع الإلكترونية، التطبيقات، الأنظمة الرقمية، الجولات الافتراضية والحلول المخصصة.",
    open: "عرض المشروع",
    model: "عرض النموذج",
    websiteNote:
      "نبني المواقع من الفكرة إلى الإطلاق، مع تهيئتها لمحركات البحث وتحسين بنيتها للظهور والوصول عبر Google.",
    ctaTitle: "عندك فكرة مختلفة؟",
    ctaText: "نصمم الحل الرقمي حول احتياج مشروعك، وليس حول قالب جاهز.",
    ctaButton: "ابدأ مشروعك",
  },
  ku: {
    title: "بەشێک لە کارەکانمان",
    intro:
      "نمونەیەک لە پڕۆژەکانی ئەبعاد عێراق لە ماڵپەڕ، ئەپ، سیستەمی دیجیتاڵی، گەشتی خەیاڵی و چارەسەری تایبەت.",
    open: "بینینی پڕۆژە",
    model: "بینینی نموونە",
    websiteNote:
      "ماڵپەڕەکان لە بیرۆکەوە تا بڵاوکردنەوە دروست دەکەین، لەگەڵ ئامادەکردنیان بۆ گەڕان و دەرکەوتن لە Google.",
    ctaTitle: "بیرۆکەیەکی جیاوازت هەیە؟",
    ctaText: "چارەسەری دیجیتاڵی بە پێی پێویستی پڕۆژەکەت دیزاین دەکەین، نە بە قالبی ئامادە.",
    ctaButton: "دەست بە پڕۆژەکەت بکە",
  },
};

export default function ProjectsPage() {
  const [lang, setLang] = useState(getInitialLanguage);
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const t = pageText[lang];
  const isRtl = isRtlLanguage(lang);
  const filteredProjects = useMemo(
    () =>
      activeCategory === "all"
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  );

  return (
    <main
      dir={isRtl ? "rtl" : "ltr"}
      className="min-h-screen bg-[#d8d7d1] text-[#141414]"
    >
      <TopBar lang={lang} setLang={setLang} />

      <section className="px-4 pb-10 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1420px]">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e11d48]">
              Abaad Al-Iraq
            </p>
            <h1 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] text-[#111] sm:text-6xl lg:text-7xl">
              {t.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-black/62 sm:text-lg">
              {t.intro}
            </p>
          </div>

          <div className="-mx-4 mt-9 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:px-0">
            <div className="flex min-w-max gap-2">
              {filters.map((filter) => {
                const isActive = activeCategory === filter.id;

                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setActiveCategory(filter.id)}
                    className={`rounded-full border px-4 py-2 text-xs font-bold transition ${
                      isActive
                        ? "border-[#111] bg-[#111] text-white"
                        : "border-black/10 bg-black/[0.035] text-black/52 hover:border-black/25 hover:text-black"
                    }`}
                  >
                    {filter.label[lang]}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="grid grid-cols-1 gap-x-5 gap-y-9 min-[560px]:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map((project, index) => (
                <ProjectItem
                  key={project.id}
                  project={project}
                  lang={lang}
                  label={t.open}
                  modelLabel={t.model}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="px-4 pb-14 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1420px] border-y border-black/10 py-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-3xl text-base font-semibold leading-8 text-black/72">
              {t.websiteNote}
            </p>
            <div className="flex flex-wrap gap-2">
              {["Custom Development", "Responsive", "SEO", "Multilingual"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-black/48"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1420px]">
          <div className="flex flex-col gap-5 border-t border-black/10 pt-9 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-black tracking-[-0.04em] text-[#111] sm:text-4xl">
                {t.ctaTitle}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-black/58 sm:text-base">
                {t.ctaText}
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#111] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#e11d48]"
            >
              {t.ctaButton}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}

function ProjectItem({
  project,
  lang,
  label,
  modelLabel,
  index,
}: {
  project: Project;
  lang: Lang;
  label: string;
  modelLabel: string;
  index: number;
}) {
  const categoryLabel = filters.find((filter) => filter.id === project.category)?.label[lang];
  const actionLabel = project.hasLivePreview ? label : modelLabel;
  const content = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden rounded-[10px] border border-black/10 bg-[#111]">
        <div className="flex h-8 items-center gap-2 border-b border-white/10 bg-[#111] px-3">
          <span className="h-2 w-2 rounded-full bg-white/35" />
          <span className="h-2 w-2 rounded-full bg-white/24" />
          <span className="h-2 w-2 rounded-full bg-white/14" />
          <span className="ms-2 truncate text-[10px] font-semibold tracking-[0.08em] text-white/45">
            {project.domain}
          </span>
        </div>

        <div className="relative h-[calc(100%-2rem)] bg-[#f4f2ec]">
          {project.previewUrl && project.hasLivePreview ? (
            <iframe
              src={project.previewUrl}
              title={project.title.en}
              loading="lazy"
              className="pointer-events-none h-full w-full border-0 bg-white"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e11d48]">
                Custom System
              </p>
              <p className="max-w-xs text-sm font-semibold leading-7 text-black/60">
                {project.description[lang]}
              </p>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#111] px-4 py-2 text-xs font-bold text-white">
                {modelLabel}
                <ArrowUpRight size={14} />
              </span>
            </div>
          )}
        </div>

        {project.href && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/36 group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black text-[#111]">
              {actionLabel}
              <ArrowUpRight size={14} />
            </span>
          </div>
        )}
      </div>

      <div className="pt-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e11d48]">
          {categoryLabel}
        </p>
        <h2 className="mt-2 text-xl font-black leading-tight tracking-[-0.035em] text-[#111]">
          {project.title[lang]}
        </h2>
        <p className="mt-2 line-clamp-1 text-sm leading-6 text-black/56">
          {project.description[lang]}
        </p>

        <div className="mt-3 flex items-center justify-between gap-4">
          <span className="text-sm font-bold text-black/68 transition group-hover:text-[#e11d48]">
            {actionLabel}
          </span>
          <ArrowUpRight
            size={17}
            className="text-black/42 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#e11d48] rtl:group-hover:-translate-x-0.5"
          />
        </div>

        {project.tags && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-black/[0.045] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-black/42"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.42, delay: index * 0.025, ease: "easeOut" }}
      className="group"
    >
      {project.href ? (
        <a
          href={project.href}
          target={project.href.startsWith("#") ? undefined : "_blank"}
          rel={project.href.startsWith("#") ? undefined : "noopener noreferrer"}
          className="block cursor-pointer"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </motion.article>
  );
}

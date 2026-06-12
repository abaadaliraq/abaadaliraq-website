"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";

type Lang = "en" | "ar" | "ku";

const projects = [
  {
    type: {
      en: "Application",
      ar: "تطبيق",
      ku: "ئەپ",
    },
    title: {
      en: "Antique Evaluation Application",
      ar: "تطبيق تقييم التحف",
      ku: "ئەپڵیکەیشنی هەڵسەنگاندنی کۆنەبابەت",
    },
    description: {
      en: "A digital application built to evaluate antiques and collectible pieces through a smart and organized user experience.",
      ar: "تطبيق رقمي مخصص لتقييم التحف والمقتنيات عبر تجربة استخدام ذكية ومنظمة.",
      ku: "ئەپێکی دیجیتاڵی بۆ هەڵسەنگاندنی کۆنەبابەت و کۆکراوەکان بە ئەزموونێکی ڕێکخراو.",
    },
    url: "https://antiques-lens.vercel.app/",
  },
  {
    type: {
      en: "Website",
      ar: "موقع إلكتروني",
      ku: "ماڵپەڕ",
    },
    title: {
      en: "Digital Platform Website",
      ar: "موقع إلكتروني لمنصة رقمية",
      ku: "ماڵپەڕی پلاتفۆرمی دیجیتاڵی",
    },
    description: {
      en: "A clean website created to introduce a digital platform, explain its services, and guide users to the right action.",
      ar: "موقع تعريفي مصمم لعرض منصة رقمية، شرح خدماتها، وتوجيه المستخدم بشكل واضح.",
      ku: "ماڵپەڕێکی ڕوون بۆ ناساندنی پلاتفۆرمێکی دیجیتاڵی و ڕوونکردنەوەی خزمەتگوزارییەکانی.",
    },
    url: "https://kishib-website.vercel.app/",
  },
  {
    type: {
      en: "E-commerce Store",
      ar: "متجر إلكتروني",
      ku: "فرۆشگای ئەلیکترۆنی",
    },
    title: {
      en: "Online Store",
      ar: "متجر إلكتروني",
      ku: "فرۆشگای ئۆنلاین",
    },
    description: {
      en: "An online store designed to present products clearly and support direct digital sales.",
      ar: "متجر إلكتروني مصمم لعرض المنتجات بوضوح ودعم البيع الرقمي المباشر.",
      ku: "فرۆشگایەکی ئۆنلاین بۆ پیشاندانی بەرهەمەکان بە ڕوونی و پشتگیری فرۆشتنی دیجیتاڵی.",
    },
    url: "https://www.houseofantiques.store/",
  },
  {
    type: {
      en: "Website",
      ar: "موقع إلكتروني",
      ku: "ماڵپەڕ",
    },
    title: {
      en: "Business Website",
      ar: "موقع إلكتروني لنشاط تجاري",
      ku: "ماڵپەڕی کاروبار",
    },
    description: {
      en: "A business website created to present identity, story, services, and visitor information in a professional way.",
      ar: "موقع إلكتروني يعرض هوية النشاط، قصته، خدماته، ومعلومات الزائر بصورة احترافية.",
      ku: "ماڵپەڕێک بۆ پیشاندانی ناسنامە، چیرۆک، خزمەتگوزاری، و زانیاریی سەردانکەر.",
    },
    url: "https://www.houseof-antiques.com/",
  },
  {
    type: {
      en: "Food Menu",
      ar: "منيو طعام",
      ku: "مینیوی خواردن",
    },
    title: {
      en: "Digital Food Menu",
      ar: "منيو طعام رقمي",
      ku: "مینیوی دیجیتاڵی خواردن",
    },
    description: {
      en: "A mobile-friendly digital menu built for fast browsing, clear categories, and easy customer access.",
      ar: "منيو رقمي مناسب للهاتف، مصمم للتصفح السريع، وضوح الأقسام، وسهولة وصول الزبون.",
      ku: "مینیویەکی دیجیتاڵی گونجاو بۆ مۆبایل، بە گەڕانی خێرا و بەشە ڕوونەکان.",
    },
    url: "https://hoa-menu.vercel.app/",
  },
  {
    type: {
      en: "Booking Page",
      ar: "صفحة حجوزات",
      ku: "پەڕەی حجزکردن",
    },
    title: {
      en: "Booking Page",
      ar: "صفحة حجوزات",
      ku: "پەڕەی حجزکردن",
    },
    description: {
      en: "A simple booking page created to receive visit requests and organize reservations clearly.",
      ar: "صفحة حجوزات بسيطة لاستقبال طلبات الزيارة وتنظيم الحجوزات بشكل واضح.",
      ku: "پەڕەیەکی سادە بۆ وەرگرتنی داواکاری سەردان و ڕێکخستنی حجزەکان.",
    },
    url: "https://houseofantiques.github.io/Booking-/",
  },
  {
    type: {
      en: "Online Auction Platform",
      ar: "منصة مزاد أونلاين",
      ku: "پلاتفۆرمی مزایدەی ئۆنلاین",
    },
    title: {
      en: "Online Auction Platform",
      ar: "منصة مزاد أونلاين",
      ku: "پلاتفۆرمی مزایدەی ئۆنلاین",
    },
    description: {
      en: "An online auction platform designed to display auction pieces and organize bidding participation.",
      ar: "منصة مزاد أونلاين مصممة لعرض القطع وتنظيم المشاركة في المزايدة.",
      ku: "پلاتفۆرمێکی مزایدەی ئۆنلاین بۆ پیشاندانی پارچەکان و ڕێکخستنی بەشداری.",
    },
    url: "https://houseofantiques.github.io/auction/",
  },
];

const pageText = {
  en: {
    badge: "Completed Projects",
    title: "Part of our completed digital work.",
    text: "A selected collection of websites, applications, stores, menus, booking pages, and online platforms built by Abaad Al-Iraq.",
    note: "Some websites may block iframe preview for security reasons. In that case, use the open project button.",
    open: "Open Project",
    preview: "Live Preview",
  },
  ar: {
    badge: "مشاريعنا المنجزة",
    title: "جزء من أعمالنا الرقمية المنجزة.",
    text: "مجموعة مختارة من المواقع، التطبيقات، المتاجر، المنيوهات، صفحات الحجز، والمنصات الإلكترونية التي نفذتها أبعاد العراق.",
    note: "بعض المواقع قد لا تسمح بالعرض داخل iframe لأسباب أمنية. في هذه الحالة استخدم زر فتح المشروع.",
    open: "فتح المشروع",
    preview: "معاينة مباشرة",
  },
  ku: {
    badge: "پڕۆژە تەواوکراوەکان",
    title: "بەشێک لە کارە دیجیتاڵییە تەواوکراوەکانمان.",
    text: "کۆمەڵێک لە ماڵپەڕ، ئەپ، فرۆشگا، مینیو، پەڕەی حجزکردن، و پلاتفۆرمی ئۆنلاین کە لەلایەن ئەبعاد عێراقەوە جێبەجێ کراون.",
    note: "هەندێک ماڵپەڕ لەبەر هۆکاری ئاسایش ڕێگە بە iframe نادات. لەو کاتەدا دوگمەی کردنەوە بەکاربهێنە.",
    open: "کردنەوەی پڕۆژە",
    preview: "پێشبینینی زیندوو",
  },
};

export default function ProjectsPage() {
  const [lang, setLang] = useState<Lang>("en");

  const t = pageText[lang];
  const isRtl = lang === "ar" || lang === "ku";

  return (
    <main
      dir={isRtl ? "rtl" : "ltr"}
      className="min-h-screen bg-[#d8d7d1] text-[#141414]"
    >
      <TopBar lang={lang} setLang={setLang} />

      <section className="relative overflow-hidden px-4 pb-10 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1420px]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[34px] bg-[#080808] px-6 py-14 text-white shadow-2xl shadow-black/20 sm:px-10 lg:px-14 lg:py-20"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(225,29,72,0.22),transparent_32%),radial-gradient(circle_at_90%_70%,rgba(255,255,255,0.08),transparent_32%)]" />

            <div className="relative max-w-4xl">
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-white/70 backdrop-blur-xl">
                {t.badge}
              </span>

              <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                {t.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
                {t.text}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1420px]">
          <div className="mb-7 rounded-2xl border border-black/10 bg-[#ebe9df] px-5 py-4 text-sm leading-7 text-black/60">
            {t.note}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.url}
                project={project}
                lang={lang}
                openLabel={t.open}
                previewLabel={t.preview}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}

function ProjectCard({
  project,
  lang,
  openLabel,
  previewLabel,
  index,
}: {
  project: (typeof projects)[number];
  lang: Lang;
  openLabel: string;
  previewLabel: string;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: index * 0.04, ease: "easeOut" }}
      className="overflow-hidden rounded-[30px] bg-[#ebe9df] shadow-xl shadow-black/10"
    >
      <div className="border-b border-black/10 px-5 py-5 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#e11d48]">
              {project.type[lang]}
            </p>

            <h2 className="mt-3 text-2xl font-black tracking-[-0.04em] text-[#111]">
              {project.title[lang]}
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-black/60">
              {project.description[lang]}
            </p>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-[#111] px-5 text-sm font-bold text-white transition hover:bg-[#e11d48]"
          >
            {openLabel}
          </a>
        </div>
      </div>

      <div className="bg-[#111] p-3 sm:p-4">
        <div className="mb-3 flex items-center justify-between px-1">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
          </div>

          <p className="hidden text-xs text-white/35 sm:block">{previewLabel}</p>
        </div>

        <div className="relative overflow-hidden rounded-[20px] bg-[#d8d7d1]">
          <div className="hidden h-[430px] lg:block">
            <iframe
              src={project.url}
              title={project.title.en}
              loading="lazy"
              className="h-full w-full border-0"
            />
          </div>

          <div className="block lg:hidden">
            <div className="relative h-[360px] overflow-hidden bg-[#f7f5ee]">
              <iframe
                src={project.url}
                title={project.title.en}
                loading="lazy"
                className="h-full w-full scale-[0.72] border-0"
                style={{
                  width: "138.8%",
                  height: "138.8%",
                  transformOrigin: "top left",
                }}
              />
            </div>

            <div className="border-t border-black/10 bg-[#f7f5ee] p-4">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-full items-center justify-center rounded-full bg-[#111] text-sm font-bold text-white"
              >
                {openLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
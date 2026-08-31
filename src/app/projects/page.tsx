"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import { getInitialLanguage, isRtlLanguage, type Lang } from "../../lib/language";

const projects = [
  {
    type: {
      en: "Application",
      ar: "تطبيق",
      ku: "ئەپ",
    },
    title: {
      en: "Kishib Application",
      ar: "تطبيق كيشيب",
      ku: "ئەپڵیکەیشنی کیشیب",
    },
    description: {
      en: "A professional mobile application by Kishib for antique evaluation and collectible piece review, available on Google Play.",
      ar: "تطبيق كيشيب لتقييم التحف والمقتنيات عبر تجربة استخدام احترافية، متوفر للتحميل من متجر Google Play.",
      ku: "ئەپێکی پیشەیی کیشیب بۆ هەڵسەنگاندنی کۆنەبابەت و کۆکراوەکان، لە Google Play بەردەستە.",
    },
    url: "https://antiques-lens.vercel.app/",
    projectType: "app",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.kishib.app",
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
    url: "https://hoa-booking-seven.vercel.app/",
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
    downloadApp: "Download App",
    preview: "Live Preview",
    capabilitiesBadge: "More than websites",
    capabilitiesTitle: "We build complete digital systems for business growth.",
    capabilitiesText:
      "Alongside websites and applications, Abaad Al-Iraq develops practical systems for restaurants and stores, prepares feasibility studies, and designs professional presentations that help projects explain their value with confidence.",
    capabilities: [
      "Restaurant systems and digital menus",
      "Store and sales management systems",
      "Feasibility studies for new and existing projects",
      "Professional business and investor presentations",
    ],
  },
  ar: {
    badge: "مشاريعنا المنجزة",
    title: "مشاريعنا",
    text: "مجموعة مختارة من المواقع، التطبيقات، المتاجر، المنيوهات، صفحات الحجز، والمنصات الإلكترونية التي نفذتها أبعاد العراق.",
    note: "بعض المواقع قد لا تسمح بالعرض داخل iframe لأسباب أمنية. في هذه الحالة استخدم زر فتح المشروع.",
    open: "فتح المشروع",
    downloadApp: "تحميل التطبيق",
    preview: "معاينة مباشرة",
    capabilitiesBadge: "أكثر من مواقع إلكترونية",
    capabilitiesTitle: "ننفذ حلولاً رقمية متكاملة تساعد المشاريع على النمو.",
    capabilitiesText:
      "إلى جانب تصميم المواقع والتطبيقات، تعمل أبعاد العراق على بناء أنظمة عملية للمطاعم والمتاجر، وإعداد دراسات جدوى، وتصميم عروض تقديمية احترافية تساعد المشروع على عرض فكرته وقيمته بثقة.",
    capabilities: [
      "أنظمة للمطاعم والمنيوهات الرقمية",
      "أنظمة للمتاجر وإدارة المبيعات",
      "دراسات جدوى للمشاريع الجديدة والقائمة",
      "عروض تقديمية احترافية للأعمال والمستثمرين",
    ],
  },
  ku: {
    badge: "پڕۆژە تەواوکراوەکان",
    title: "بەشێک لە کارە دیجیتاڵییە تەواوکراوەکانمان.",
    text: "کۆمەڵێک لە ماڵپەڕ، ئەپ، فرۆشگا، مینیو، پەڕەی حجزکردن، و پلاتفۆرمی ئۆنلاین کە لەلایەن ئەبعاد عێراقەوە جێبەجێ کراون.",
    note: "هەندێک ماڵپەڕ لەبەر هۆکاری ئاسایش ڕێگە بە iframe نادات. لەو کاتەدا دوگمەی کردنەوە بەکاربهێنە.",
    open: "کردنەوەی پڕۆژە",
    downloadApp: "داگرتنی ئەپ",
    preview: "پێشبینینی زیندوو",
    capabilitiesBadge: "زیاتر لە ماڵپەڕ",
    capabilitiesTitle: "چارەسەری دیجیتاڵی تەواو بۆ گەشەی پڕۆژەکان دروست دەکەین.",
    capabilitiesText:
      "لەگەڵ دروستکردنی ماڵپەڕ و ئەپ، ئەبعاد عێراق سیستەمی کارا بۆ چێشتخانە و فرۆشگا، توێژینەوەی جدوى، و پێشکەشکردنی پیشەیی بۆ ناساندنی بەهای پڕۆژەکان ئامادە دەکات.",
    capabilities: [
      "سیستەمی چێشتخانە و مینیوی دیجیتاڵ",
      "سیستەمی فرۆشگا و بەڕێوەبردنی فرۆشتن",
      "توێژینەوەی جدوى بۆ پڕۆژە نوێ و هەنووکەییەکان",
      "پێشکەشکردنی پیشەیی بۆ کار و وەبەرهێنەر",
    ],
  },
};

export default function ProjectsPage() {
  const [lang, setLang] = useState(getInitialLanguage);

  const t = pageText[lang];
  const isRtl = isRtlLanguage(lang);

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

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.url}
                project={project}
                lang={lang}
                openLabel={t.open}
                downloadAppLabel={t.downloadApp}
                previewLabel={t.preview}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1420px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[28px] border border-black/10 bg-[#111] px-5 py-8 text-white shadow-xl shadow-black/10 sm:rounded-[34px] sm:px-8 sm:py-10 lg:px-12"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(225,29,72,0.2),transparent_30%),radial-gradient(circle_at_88%_78%,rgba(255,255,255,0.08),transparent_34%)]" />

            <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70 sm:text-xs">
                  {t.capabilitiesBadge}
                </span>

                <h2 className="mt-5 max-w-3xl text-2xl font-black leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                  {t.capabilitiesTitle}
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68 sm:text-base sm:leading-8">
                  {t.capabilitiesText}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {t.capabilities.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-sm font-bold leading-6 text-white/86 backdrop-blur-xl"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
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
  downloadAppLabel,
  previewLabel,
  index,
}: {
  project: (typeof projects)[number];
  lang: Lang;
  openLabel: string;
  downloadAppLabel: string;
  previewLabel: string;
  index: number;
}) {
  const isApp = project.projectType === "app" && project.googlePlayUrl;
  const actionUrl = isApp ? project.googlePlayUrl : project.url;
  const actionLabel = isApp ? downloadAppLabel : openLabel;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: index * 0.04, ease: "easeOut" }}
      className="project-card flex h-full flex-col rounded-[20px] bg-[#ebe9df] shadow-xl shadow-black/10 sm:rounded-[26px] lg:rounded-[30px]"
    >
      <div className="project-card-content border-b border-black/10 px-3 py-3 sm:px-5 sm:py-5 lg:px-6">
        <div className="project-card-content-inner flex h-full flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0">
            <p className="truncate text-[9px] font-bold uppercase tracking-[0.16em] text-[#e11d48] sm:text-xs sm:tracking-[0.24em]">
              {project.type[lang]}
            </p>

            <h2 className="mt-2 text-base font-black leading-snug tracking-[-0.03em] text-[#111] sm:mt-3 sm:text-2xl sm:tracking-[-0.04em]">
              {project.title[lang]}
            </h2>

            <p className="project-description mt-2 max-w-xl text-[11px] leading-5 text-black/60 sm:mt-3 sm:text-sm sm:leading-7">
              {project.description[lang]}
            </p>
          </div>

          <a
            href={actionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-11 shrink-0 items-center justify-center rounded-full bg-[#111] px-5 text-sm font-bold text-white transition hover:bg-[#e11d48] md:inline-flex"
          >
            {actionLabel}
          </a>

          <a
            href={actionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-mobile-action flex h-8 shrink-0 items-center justify-center rounded-full bg-[#111] px-3 text-center text-[10px] font-bold leading-tight text-white transition hover:bg-[#e11d48] md:hidden"
          >
            {actionLabel}
          </a>
        </div>
      </div>

      <div className="project-card-preview mt-auto bg-[#111] p-2 sm:p-3 lg:p-4">
        <div className="mb-2 flex items-center justify-between px-1 sm:mb-3">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white/25 sm:h-2.5 sm:w-2.5" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/18 sm:h-2.5 sm:w-2.5" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/12 sm:h-2.5 sm:w-2.5" />
          </div>

          <p className="hidden text-xs text-white/35 md:block">{previewLabel}</p>
        </div>

        <div className="relative rounded-[14px] bg-[#d8d7d1] sm:rounded-[20px]">
          <div className="hidden h-[360px] overflow-hidden rounded-[20px] lg:block">
            <iframe
              src={project.url}
              title={project.title.en}
              loading="lazy"
              className="h-full w-full border-0"
            />
          </div>

          <div className="block lg:hidden">
            <div className="project-phone-screen relative bg-[#f7f5ee]">
              <iframe
                src={project.url}
                title={project.title.en}
                loading="lazy"
                className="project-phone-iframe border-0"
              />
            </div>

            <div className="hidden border-t border-black/10 bg-[#f7f5ee] p-2 md:block md:p-3 lg:hidden">
              <a
                href={actionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-full items-center justify-center rounded-full bg-[#111] px-2 text-center text-[11px] font-bold leading-tight text-white sm:h-11 sm:text-sm"
              >
                {actionLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}


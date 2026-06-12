"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Layers3, Orbit } from "lucide-react";
import { Manrope, Noto_Kufi_Arabic } from "next/font/google";

type Lang = "en" | "ar" | "ku";

type ProjectFramesProps = {
  lang: Lang;
};

const arabicFont = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
});

const latinFont = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const content = {
  en: {
    eyebrow: "Our Projects",
    title: "Digital projects shaped around each business.",
    text: "Explore selected work across websites, stores, digital menus, systems, auctions, applications and 360° virtual tours.",
    button: "View Projects",
    note: "Each project is structured around its own goal.",
    items: [
      {
        icon: Code2,
        title: "Programming",
        text: "Websites, stores, menus, systems and platforms.",
      },
      {
        icon: Layers3,
        title: "Custom Build",
        text: "Designed from scratch for each project.",
      },
      {
        icon: Orbit,
        title: "360° Tours",
        text: "Virtual experiences for real spaces.",
      },
    ],
  },

  ar: {
    eyebrow: "مشاريعنا",
    title: "مشاريع رقمية تُبنى حسب طبيعة كل عمل.",
    text: "استعرض نماذج من أعمالنا في المواقع، المتاجر، المنيوهات، الأنظمة، المزادات، التطبيقات والجولات الافتراضية 360°.",
    button: "عرض المشاريع",
    note: "كل مشروع يُصمم وفق هدفه وتجربته الخاصة.",
    items: [
      {
        icon: Code2,
        title: "البرمجة",
        text: "مواقع، متاجر، منيوهات، أنظمة ومنصات.",
      },
      {
        icon: Layers3,
        title: "تنفيذ مخصص",
        text: "تصميم وبرمجة من الصفر لكل مشروع.",
      },
      {
        icon: Orbit,
        title: "جولات 360°",
        text: "تجارب افتراضية للمساحات الحقيقية.",
      },
    ],
  },

  ku: {
    eyebrow: "پرۆژەکانمان",
    title: "پرۆژەی دیجیتاڵی بەپێی سروشتی هەر کارێک.",
    text: "نمونەی کارەکانمان ببینە لە ماڵپەڕ، فرۆشگا، مێنیو، سیستەم، مزاد، ئەپ و گەشتی 360°.",
    button: "بینینی پرۆژەکان",
    note: "هەر پرۆژەیەک بەپێی ئامانج و ئەزموونی خۆی ڕێک دەخرێت.",
    items: [
      {
        icon: Code2,
        title: "پرۆگرامسازی",
        text: "ماڵپەڕ، فرۆشگا، مێنیو، سیستەم و پلاتفۆرم.",
      },
      {
        icon: Layers3,
        title: "دروستکردنی تایبەت",
        text: "لە بنەڕەتەوە بۆ هەر پرۆژەیەک.",
      },
      {
        icon: Orbit,
        title: "گەشتی 360°",
        text: "ئەزموونی مەجازی بۆ شوێنی ڕاستەقینە.",
      },
    ],
  },
};

export default function ProjectFrames({ lang }: ProjectFramesProps) {
  const isRtl = lang === "ar" || lang === "ku";
  const fontClass = isRtl ? arabicFont.className : latinFont.className;
  const t = content[lang];

  return (
    <section
      id="projects"
      dir={isRtl ? "rtl" : "ltr"}
      className={`${fontClass} relative overflow-hidden bg-[#101010] text-white`}
    >
      <div className="relative min-h-[720px] overflow-hidden md:min-h-[820px]">
        <img
          src="/projects-gate.jpg"
          alt="Abaad Al-Iraq Projects"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/42" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#101010] via-black/22 to-[#101010]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_72%,rgba(27,255,216,0.22),transparent_35%)]" />

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl flex-col justify-between px-5 py-24 md:min-h-[820px] md:px-8 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-5xl text-center"
          >
            <p className="mb-6 text-[11px] font-normal tracking-[0.28em] text-white/52">
              {t.eyebrow}
            </p>

            <h2 className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.14] tracking-[-0.05em] text-white md:text-6xl">
              {t.title}
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-sm font-light leading-8 text-white/62 md:text-[15px]">
              {t.text}
            </p>

            <Link
              href="/projects"
              className="mt-9 inline-flex items-center gap-2 rounded-full border border-[#ff4d4d]/45 bg-[#ff4d4d]/12 px-6 py-3 text-[11px] font-semibold text-[#ff6b6b] shadow-lg shadow-[#ff4d4d]/10 transition hover:bg-[#ff4d4d] hover:text-white"
            >
              {t.button}
              <ArrowUpRight size={14} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mx-auto mt-20 grid w-full max-w-5xl gap-3 md:mt-24 md:grid-cols-3"
          >
            {t.items.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/10 bg-black/22 p-5 shadow-2xl shadow-black/25 backdrop-blur-md transition hover:border-white/20 hover:bg-black/30"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex size-11 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.045] text-white/76">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>

                    <span className="text-[10px] font-light text-white/28">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold tracking-[-0.04em] text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[12px] font-light leading-6 text-white/52">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </motion.div>

          <p className="mx-auto mt-10 max-w-xl text-center text-[12px] font-light leading-7 text-white/42">
            {t.note}
          </p>
        </div>
      </div>
    </section>
  );
}
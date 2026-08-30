"use client";

import { Manrope, Noto_Kufi_Arabic } from "next/font/google";
import TopBar from "./TopBar";

type Lang = "en" | "ar" | "ku";

const heroVideo = "/hero.mp4";

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
    eyebrow: "ABAAD IRAQ DIGITAL SOLUTIONS",
    title: "We turn ideas into real digital experiences",
    text: "We build websites, e-commerce platforms, custom digital systems, and immersive 3D virtual tours that help businesses present their services and spaces more professionally.",
    primary: "Explore Our Work",
    secondary: "Contact Us",
    points: ["Websites", "Applications", "Systems", "360° Tours"],
  },

  ar: {
    eyebrow: "أبعاد العراق للحلول الرقمية",
    title: "نحوّل فكرتك إلى تجربة رقمية حقيقية",
    text: "نطوّر المواقع الإلكترونية والمتاجر والأنظمة المخصصة، ونقدّم الجولات الافتراضية ثلاثية الأبعاد لمساعدة المشاريع على تقديم خدماتها وأماكنها بصورة أكثر احترافية ووضوحاً.",
    primary: "استكشف أعمالنا",
    secondary: "تواصل معنا",
    points: ["مواقع", "تطبيقات", "أنظمة", "جولات 360°"],
  },

  ku: {
    eyebrow: "ئەبعاد عێراق",
    title: "چارەسەری دیجیتاڵی بۆ شوێنی نوێ.",
    text: "ماڵپەڕ، ئەپ، سیستەم و ئەزموونی 360° بۆ کارەکان کە پێویستیان بە ئامادەبوونی دیجیتاڵی ڕوونتر هەیە.",
    primary: "بینینی کارەکان",
    secondary: "دەستپێکردنی پرۆژە",
    points: ["ماڵپەڕ", "ئەپ", "سیستەم", "گەشتی 360°"],
  },
};

type HeroProps = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

export default function Hero({ lang, setLang }: HeroProps) {

  const t = content[lang];
  const isRtl = lang === "ar" || lang === "ku";
  const fontClass = isRtl ? arabicFont.className : latinFont.className;

  return (
    <section
      dir={isRtl ? "rtl" : "ltr"}
      className={`${fontClass} relative min-h-screen overflow-hidden bg-[#101010] text-white`}
    >
      <TopBar lang={lang} setLang={setLang} />

      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-85"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/18 via-black/10 to-black/38" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center px-5 pb-44 pt-4 md:px-8 md:pb-40 md:pt-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-[12px] font-normal tracking-[0.16em] text-white/52">
            {t.eyebrow}
          </p>

          <h1 className="mx-auto max-w-5xl text-4xl font-bold leading-[1.22] tracking-[-0.04em] text-white md:text-6xl lg:text-[76px]">
            {t.title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm font-light leading-8 text-white/68 md:text-[15px]">
            {t.text}
          </p>

<div className="mt-7 flex flex-wrap justify-center gap-2.5">            <a
              href="#projects"
              className="rounded-full bg-white px-7 py-3 text-[11px] font-semibold tracking-[0.04em] text-black transition hover:bg-white/85"
            >
              {t.primary}
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-7 py-3 text-[11px] font-light tracking-[0.04em] text-white/78 transition hover:border-white/40 hover:text-white"
            >
              {t.secondary}
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-5 right-5 hidden border-t border-white/10 pt-5 md:block md:left-8 md:right-8">
          <div className="flex flex-wrap justify-center gap-10">
            {t.points.map((point) => (
              <span
                key={point}
                className="text-[11px] font-light tracking-[0.12em] text-white/45"
              >
                {point}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

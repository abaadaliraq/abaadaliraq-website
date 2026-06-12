"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Manrope, Noto_Kufi_Arabic } from "next/font/google";

type Lang = "en" | "ar" | "ku";

type WhyAbaadProps = {
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
    eyebrow: "Why Abaad",
    title: "Digital work built around the real goal.",
    text: "We turn websites, applications, systems and 360° experiences into one clear digital presence for your business.",
    button: "About Abaad",
  },

  ar: {
    eyebrow: "لماذا أبعاد؟",
    title: "عمل رقمي مبني حول الهدف الحقيقي.",
    text: "نحوّل المواقع والتطبيقات والأنظمة وتجارب 360° إلى حضور رقمي واضح يخدم مشروعك.",
    button: "عن أبعاد",
  },

  ku: {
    eyebrow: "بۆچی ئەبعاد؟",
    title: "کاری دیجیتاڵی لەسەر ئامانجی ڕاستەقینە.",
    text: "ماڵپەڕ، ئەپ، سیستەم و ئەزموونی 360° دەکەین بە ئامادەبوونی دیجیتاڵی ڕوون بۆ پرۆژەکەت.",
    button: "دەربارەی ئەبعاد",
  },
};

export default function WhyAbaad({ lang }: WhyAbaadProps) {
  const isRtl = lang === "ar" || lang === "ku";
  const fontClass = isRtl ? arabicFont.className : latinFont.className;
  const t = content[lang];

  return (
    <section
      id="why"
      dir={isRtl ? "rtl" : "ltr"}
className={`${fontClass} relative mt-16 w-full overflow-hidden bg-[#101010] pt-0 text-white md:mt-20 lg:mt-24`}    >
      <div className="relative min-h-[520px] w-full overflow-hidden md:min-h-[650px] lg:min-h-[720px]">
        <img
          src="/why-abaad.jpg"
          alt="Why Abaad Al-Iraq"
          className="absolute inset-0 h-full w-full object-cover"
        />

<div className="absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-[#101010] via-[#101010]/55 to-transparent md:h-56" />
        <div className="absolute inset-0 bg-black/12" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/0 to-black/26" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/16 via-transparent to-black/16" />

        <div className="absolute inset-0 z-20 flex items-center justify-center px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full max-w-3xl rounded-[1.8rem] border border-white/16 bg-white/[0.035] p-6 text-center shadow-2xl shadow-black/25 backdrop-blur-sm md:p-9"
          >
            <p className="mb-4 text-[11px] font-normal tracking-[0.24em] text-white/60">
              {t.eyebrow}
            </p>

            <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-[1.22] tracking-[-0.05em] text-white md:text-5xl">
              {t.title}
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-[13px] font-light leading-7 text-white/72 md:text-sm md:leading-8">
              {t.text}
            </p>

            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[11px] font-semibold text-black transition hover:bg-white/86"
            >
              {t.button}
              <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
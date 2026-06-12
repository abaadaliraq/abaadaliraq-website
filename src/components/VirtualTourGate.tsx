"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Glasses } from "lucide-react";
import { Manrope, Noto_Kufi_Arabic } from "next/font/google";

type Lang = "en" | "ar" | "ku";

type VirtualTourGateProps = {
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
    eyebrow: "Virtual Tours",
    title: "Enter the space before you arrive.",
    text: "A dedicated experience for presenting real locations through 360° virtual tours, VR, mobile, touch screens and desktop viewing.",
    button: "Enter Virtual Tours",
    small: "Built for hotels, factories, museums, showrooms, restaurants and real estate spaces.",
  },

  ar: {
    eyebrow: "الجولات الافتراضية",
    title: "ادخل المكان قبل أن تصل إليه.",
    text: "تجربة مخصصة لعرض المواقع الحقيقية عبر الجولات الافتراضية 360°، ونظارات VR، والهاتف، والشاشات التفاعلية والحواسيب.",
    button: "الدخول إلى الجولات",
    small: "مناسبة للفنادق، المصانع، المتاحف، المعارض، المطاعم والمشاريع العقارية.",
  },

  ku: {
    eyebrow: "گەشتی مەجازی",
    title: "پێش ئەوەی بگەیت، بچۆ ناو شوێنەکە.",
    text: "ئەزموونێکی تایبەت بۆ پیشاندانی شوێنی ڕاستەقینە بە گەشتی 360°، چاویلکەی VR، مۆبایل، شاشەی لمس و کۆمپیوتەر.",
    button: "چوونە ناو گەشتە مەجازییەکان",
    small: "گونجاوە بۆ هوتێل، کارگە، مۆزەخانە، پێشانگا، چێشتخانە و پرۆژەی خانووبەرە.",
  },
};

export default function VirtualTourGate({ lang }: VirtualTourGateProps) {
  const isRtl = lang === "ar" || lang === "ku";
  const fontClass = isRtl ? arabicFont.className : latinFont.className;
  const t = content[lang];

  return (
    <section
      id="virtual-tours"
      dir={isRtl ? "rtl" : "ltr"}
      className={`${fontClass} relative overflow-hidden bg-[#050607] text-white`}
    >
      <div className="relative min-h-[720px] overflow-hidden md:min-h-[860px]">
        <img
          src="/virtual-tour-gate.jpg"
          alt="Virtual Tours"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/44" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#101010] via-black/14 to-[#050607]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_78%,rgba(78,170,255,0.32),transparent_34%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(255,255,255,0.12),transparent_26%)]" />

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl flex-col items-center justify-center px-5 py-24 text-center md:min-h-[860px] md:px-8 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 42, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-5xl"
          >
            <div className="mx-auto mb-7 flex size-14 items-center justify-center rounded-2xl border border-[#77bfff]/25 bg-[#77bfff]/10 text-[#9ed0ff] shadow-2xl shadow-[#77bfff]/10 backdrop-blur-md">
              <Glasses size={25} strokeWidth={1.4} />
            </div>

            <p className="mb-6 text-[11px] font-normal tracking-[0.28em] text-white/56">
              {t.eyebrow}
            </p>

            <h2 className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.12] tracking-[-0.055em] text-white md:text-7xl">
              {t.title}
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-sm font-light leading-8 text-white/64 md:text-[15px]">
              {t.text}
            </p>

            <Link
              href="/virtual-tours"
              className="mt-9 inline-flex items-center gap-2 rounded-full border border-[#77bfff]/45 bg-[#77bfff]/12 px-6 py-3 text-[11px] font-semibold text-[#9ed0ff] shadow-lg shadow-[#77bfff]/10 transition hover:bg-[#77bfff] hover:text-black"
            >
              {t.button}
              <ArrowUpRight size={14} />
            </Link>

            <p className="mx-auto mt-8 max-w-xl text-[12px] font-light leading-7 text-white/42">
              {t.small}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
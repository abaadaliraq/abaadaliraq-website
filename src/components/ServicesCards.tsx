"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Globe2, Smartphone, Orbit } from "lucide-react";
import { Manrope, Noto_Kufi_Arabic } from "next/font/google";

type Lang = "en" | "ar" | "ku";

type ServicesCardsProps = {
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
    items: [
      {
        icon: Globe2,
        title: "Completed Work",
        desc: "Explore part of our websites, platforms, stores, and digital systems.",
        href: "/projects",
        label: "View projects",
      },
      {
        icon: Orbit,
        title: "360° Virtual Tours",
        desc: "See how spaces can be presented through immersive digital tours.",
        href: "/virtual-tours",
        label: "Explore tours",
      },
      {
        icon: Smartphone,
        title: "Contact Us",
        desc: "Tell us about your project and we will suggest the right digital direction.",
        href: "/#contact",
        label: "Start now",
      },
      {
        icon: Code2,
        title: "VR Experience",
        desc: "Discover how VR can support booths, exhibitions, and project presentations.",
        href: "/virtual-tours#vr",
        label: "View VR",
      },
    ],
  },

  ar: {
    items: [
      {
        icon: Globe2,
        title: "أعمالنا المنجزة",
        desc: "استكشف جزءًا من المواقع، المنصات، المتاجر، والأنظمة التي نفذناها.",
        href: "/projects",
        label: "عرض المشاريع",
      },
      {
        icon: Orbit,
        title: "جولات افتراضية 360°",
        desc: "شاهد كيف يمكن عرض المساحات والمشاريع كتجربة رقمية تفاعلية.",
        href: "/virtual-tours",
        label: "استكشف الجولات",
      },
      {
        icon: Smartphone,
        title: "تواصل معنا",
        desc: "أخبرنا عن مشروعك لنقترح لك المسار الرقمي الأنسب.",
        href: "/#contact",
        label: "ابدأ الآن",
      },
      {
        icon: Code2,
        title: "تجربة VR",
        desc: "تعرف على دور الواقع الافتراضي في المعارض والبوثات وعرض المشاريع.",
        href: "/virtual-tours#vr",
        label: "عرض VR",
      },
    ],
  },

  ku: {
    items: [
      {
        icon: Globe2,
        title: "کارە تەواوکراوەکانمان",
        desc: "بەشێک لە ماڵپەڕ، پلاتفۆرم، فرۆشگا و سیستەمە جێبەجێکراوەکان ببینە.",
        href: "/projects",
        label: "بینینی پڕۆژەکان",
      },
      {
        icon: Orbit,
        title: "گەشتی خەیاڵی 360°",
        desc: "ببینە چۆن شوێن و پڕۆژەکان دەبنە ئەزموونێکی دیجیتاڵی تفاعلی.",
        href: "/virtual-tours",
        label: "بینینی گەشتەکان",
      },
      {
        icon: Smartphone,
        title: "پەیوەندی بکە",
        desc: "باسی پڕۆژەکەت بکە تا ڕێگای دیجیتاڵی گونجاو پێشنیار بکەین.",
        href: "/#contact",
        label: "دەست پێ بکە",
      },
      {
        icon: Code2,
        title: "ئەزموونی VR",
        desc: "ڕۆڵی VR لە پیشانگا، بووث و پیشاندانی پڕۆژەکان بناسە.",
        href: "/virtual-tours#vr",
        label: "بینینی VR",
      },
    ],
  },
};

export default function ServicesCards({ lang }: ServicesCardsProps) {
  const isRtl = lang === "ar" || lang === "ku";
  const fontClass = isRtl ? arabicFont.className : latinFont.className;
  const items = content[lang].items;

  return (
    <section
      id="services"
      dir={isRtl ? "rtl" : "ltr"}
      className={`${fontClass} relative z-30 bg-transparent px-4 pb-0 md:px-8`}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 70, rotateX: 18 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="-mt-32 grid grid-cols-2 gap-3 [perspective:1200px] md:-mt-40 md:grid-cols-4 md:gap-5 lg:-mt-48"
        >
          {items.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 60,
                  rotateY: index % 2 === 0 ? -16 : 16,
                  scale: 0.92,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateY: 0,
                  scale: 1,
                }}
                whileHover={{
                  y: -14,
                  rotateX: 7,
                  rotateY: index % 2 === 0 ? -7 : 7,
                  scale: 1.035,
                }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                className="transform-gpu"
              >
                <Link
                  href={service.href}
                  aria-label={service.title}
                  className="group relative block min-h-[150px] overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#101722]/92 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl transition md:min-h-[230px] md:rounded-[1.8rem] md:p-7"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 md:bg-[radial-gradient(circle_at_50%_0%,rgba(255,77,77,0.22),transparent_42%)]" />

                  <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

                  <div className="relative mb-5 flex size-11 items-center justify-center rounded-2xl border border-[#ff4d4d]/25 bg-[#ff4d4d]/10 text-[#ff4d4d] shadow-lg shadow-[#ff4d4d]/10 md:mb-10 md:size-16 md:rounded-3xl">
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="md:h-8 md:w-8"
                    />
                  </div>

                  <div className="relative">
                    <h3 className="text-[15px] font-semibold tracking-[-0.03em] text-white md:text-2xl">
                      {service.title}
                    </h3>

                    <p className="mt-2 max-w-[11rem] text-[11px] font-light leading-5 text-white/50 md:mt-3 md:text-sm md:leading-6">
                      {service.desc}
                    </p>

                    <p className="mt-4 hidden text-xs font-semibold text-[#ff4d4d] transition group-hover:translate-x-1 md:block">
                      {service.label}
                    </p>
                  </div>

                  <div className="absolute bottom-4 end-4 text-[10px] font-light text-white/18 md:bottom-6 md:end-6">
                    0{index + 1}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
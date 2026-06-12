"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Manrope, Noto_Kufi_Arabic } from "next/font/google";

type Lang = "en" | "ar" | "ku";

type ClientsProps = {
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
    eyebrow: "Clients",
    title: "Featured clients",
    text: "Brands and places that trusted Abaad Al-Iraq to present their spaces and digital presence.",
  },
  ar: {
    eyebrow: "عملاؤنا",
    title: "عملاؤنا المميزون",
    text: "جهات وثقت بأبعاد العراق لتنفيذ حضور رقمي وجولات وتجارب تقنية داخل العراق.",
  },
  ku: {
    eyebrow: "کڕیارەکانمان",
    title: "کڕیارە تایبەتەکانمان",
    text: "ئەو شوێن و براندەیە کە متمانەیان بە ئەبعاد عێراق کردووە بۆ ئامادەبوونی دیجیتاڵی و گەشتی مەجازی.",
  },
};

const clients = [
  {
    name: "House of Antiques",
    logo: "/clients/house-of-antiques.png",
  },
  {
    name: "Coral Palace Hotel",
    logo: "/clients/coral-palace.png",
  },
  {
    name: "Horizon",
    logo: "/clients/horizon.png",
  },
  {
    name: "Al Mutahida",
    logo: "/clients/almutahida.png",
  },
];

export default function Clients({ lang }: ClientsProps) {
  const isRtl = lang === "ar" || lang === "ku";
  const fontClass = isRtl ? arabicFont.className : latinFont.className;
  const t = content[lang];

  return (
    <section
      id="clients"
      dir={isRtl ? "rtl" : "ltr"}
      className={`${fontClass} relative overflow-hidden bg-[#101010] px-5 py-24 text-white md:px-8 md:py-32`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,77,77,0.08),transparent_32%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-5 text-[11px] font-normal tracking-[0.28em] text-[#ff4d4d]">
            {t.eyebrow}
          </p>

          <h2 className="text-4xl font-semibold leading-[1.15] tracking-[-0.05em] text-white md:text-6xl">
            {t.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-light leading-8 text-white/56 md:text-[15px]">
            {t.text}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 shadow-2xl shadow-black/30 backdrop-blur-md md:p-6"
        >
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex min-h-[120px] items-center justify-center rounded-[1.4rem] border border-white/8 bg-white/[0.92] p-5 transition hover:-translate-y-1 hover:bg-white md:min-h-[150px]"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={220}
                  height={110}
                  className="max-h-16 w-auto object-contain opacity-85 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 md:max-h-20"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
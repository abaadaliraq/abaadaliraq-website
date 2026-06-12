"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

type Lang = "en" | "ar" | "ku";

type FooterProps = {
  lang?: Lang;
};

const WHATSAPP_NUMBER = "9647770350030";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/abaad_aliraq/?__pwa=1",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61581999430763",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <path
          d="M14.5 8.2H16V5.4C15.7 5.3 14.8 5.2 13.8 5.2C11.7 5.2 10.3 6.5 10.3 8.9V11H8V14.1H10.3V21H13.4V14.1H15.8L16.2 11H13.4V9.2C13.4 8.5 13.6 8.2 14.5 8.2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@abaad.aliraq",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <path
          d="M21 8.4C20.8 7.4 20.1 6.7 19.1 6.5C17.5 6 12 6 12 6C12 6 6.5 6 4.9 6.5C3.9 6.7 3.2 7.4 3 8.4C2.5 10 2.5 12 2.5 12C2.5 12 2.5 14 3 15.6C3.2 16.6 3.9 17.3 4.9 17.5C6.5 18 12 18 12 18C12 18 17.5 18 19.1 17.5C20.1 17.3 20.8 16.6 21 15.6C21.5 14 21.5 12 21.5 12C21.5 12 21.5 10 21 8.4Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M10.3 9.5V14.5L14.7 12L10.3 9.5Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abaad-aliraq-578b17359/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <path
          d="M6.8 9.5H3.8V20H6.8V9.5Z"
          fill="currentColor"
        />
        <path
          d="M5.3 8.1C6.3 8.1 7 7.4 7 6.5C7 5.6 6.3 4.9 5.3 4.9C4.3 4.9 3.6 5.6 3.6 6.5C3.6 7.4 4.3 8.1 5.3 8.1Z"
          fill="currentColor"
        />
        <path
          d="M12 14.4C12 12.9 12.7 12.1 13.9 12.1C15 12.1 15.5 12.9 15.5 14.4V20H18.5V13.9C18.5 11 17 9.3 14.6 9.3C13.3 9.3 12.4 9.9 11.9 10.8V9.5H9V20H12V14.4Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

const footerText = {
  en: {
    brand: "ABAAD AL-IRAQ",
    small: "Digital Solutions",
    desc: "A full-service digital house building websites, platforms, systems, applications, presentations, feasibility studies, and 360° virtual tours with a tailored structure for every project.",
    quick: "Quick links",
    company: "Company",
    contact: "Contact",
    formTitle: "Send a quick request",
    name: "Name",
    phone: "Phone",
    note: "Note",
    send: "Send on WhatsApp",
    rights: "All rights reserved.",
    built: "Designed by Abaad Al-Iraq",
    links: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      tours: "Virtual tours",
      about: "About us",
      privacy: "Privacy policy",
      terms: "Terms & conditions",
      contact: "Contact",
    },
  },
  ar: {
    brand: "أبعاد العراق",
    small: "حلول رقمية",
    desc: "بيت رقمي متكامل لبناء المواقع، المنصات، الأنظمة، التطبيقات، العروض التقديمية، دراسات الجدوى، والجولات الافتراضية 360° بهيكل خاص يناسب كل مشروع.",
    quick: "روابط سريعة",
    company: "الشركة",
    contact: "تواصل",
    formTitle: "أرسل طلب سريع",
    name: "الاسم",
    phone: "رقم الهاتف",
    note: "الملاحظة",
    send: "إرسال عبر واتساب",
    rights: "جميع الحقوق محفوظة.",
    built: "تصميم وتنفيذ أبعاد العراق",
    links: {
      home: "الرئيسية",
      services: "الخدمات",
      projects: "المشاريع",
      tours: "الجولات الافتراضية",
      about: "من نحن",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      contact: "تواصل",
    },
  },
  ku: {
    brand: "ئەبعاد عێراق",
    small: "چارەسەری دیجیتاڵی",
    desc: "ماڵێکی دیجیتاڵی بۆ دروستکردنی ماڵپەڕ، پلاتفۆرم، سیستەم، ئەپ، پێشکەشکردن، توێژینەوەی دارایی، و گەشتی خەیاڵی 360° بە شێوازێکی تایبەت بۆ هەر پڕۆژە.",
    quick: "بەستەری خێرا",
    company: "کۆمپانیا",
    contact: "پەیوەندی",
    formTitle: "داواکارییەک بنێرە",
    name: "ناو",
    phone: "ژمارەی مۆبایل",
    note: "تێبینی",
    send: "ناردن بە واتساپ",
    rights: "هەموو مافەکان پارێزراون.",
    built: "دیزاین و جێبەجێکردنی ئەبعاد عێراق",
    links: {
      home: "سەرەکی",
      services: "خزمەتگوزارییەکان",
      projects: "پڕۆژەکان",
      tours: "گەشتی خەیاڵی",
      about: "دەربارە",
      privacy: "سیاسەتی تایبەتمەندی",
      terms: "مەرج و ڕێنماییەکان",
      contact: "پەیوەندی",
    },
  },
};

export default function Footer({ lang = "en" }: FooterProps) {
  const t = footerText[lang] ?? footerText.en;
  const isRtl = lang === "ar" || lang === "ku";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message =
      lang === "ar"
        ? `مرحباً أبعاد العراق، لدي طلب جديد:%0A%0Aالاسم: ${name}%0Aرقم الهاتف: ${phone}%0Aالملاحظة: ${note}`
        : lang === "ku"
          ? `سڵاو ئەبعاد عێراق، داواکارییەکی نوێم هەیە:%0A%0Aناو: ${name}%0Aژمارە: ${phone}%0Aتێبینی: ${note}`
          : `Hello Abaad Al-Iraq, I have a new request:%0A%0AName: ${name}%0APhone: ${phone}%0ANote: ${note}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const quickLinks = [
    { label: t.links.home, href: "/" },
    { label: t.links.services, href: "/#services" },
    { label: t.links.projects, href: "/projects" },
    { label: t.links.tours, href: "/virtual-tours" },
  ];

  const companyLinks = [
    { label: t.links.about, href: "/about" },
    { label: t.links.privacy, href: "/privacy" },
    { label: t.links.terms, href: "/terms" },
    { label: t.links.contact, href: "/#contact" },
  ];

  return (
    <footer
      id="contact"
      dir={isRtl ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#050505] px-4 py-8 text-white sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-white/10 bg-[#080808] px-5 py-8 shadow-2xl shadow-black/40 sm:px-8 lg:px-10"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(225,29,72,0.16),transparent_34%),radial-gradient(circle_at_90%_80%,rgba(255,255,255,0.08),transparent_30%)]" />

        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.7fr_0.7fr_1fr]">
          <div>
            <Link href="/" className="inline-block">
              <p className="text-2xl font-black tracking-[-0.04em] sm:text-3xl">
                {t.brand}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.34em] text-[#e11d48]">
                {t.small}
              </p>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
              {t.desc}
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/55 transition hover:border-[#e11d48]/60 hover:bg-[#e11d48]/10 hover:text-white"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
              {t.quick}
            </h4>

            <nav className="mt-4 grid gap-2.5">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-white/62 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
              {t.company}
            </h4>

            <nav className="mt-4 grid gap-2.5">
              {companyLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-white/62 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-5 grid gap-2 text-sm text-white/55">
              <a
                href="mailto:abaadaliraq07@gmail.com"
                className="transition hover:text-white"
              >
                abaadaliraq07@gmail.com
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                +964 777 035 0030
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
              {t.formTitle}
            </h4>

            <form onSubmit={handleSubmit} className="mt-4 grid gap-3">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder={t.name}
                className="h-10 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#e11d48]/60"
              />

              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder={t.phone}
                className="h-10 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#e11d48]/60"
              />

              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                required
                placeholder={t.note}
                rows={3}
                className="resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#e11d48]/60"
              />

              <button
                type="submit"
                className="h-10 rounded-xl bg-[#e11d48] px-5 text-sm font-semibold text-white transition hover:bg-[#ff2f61]"
              >
                {t.send}
              </button>
            </form>
          </div>
        </div>

        <div className="relative mt-8 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-3 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {t.brand}. {t.rights}
            </p>
            <p>{t.built}</p>
          </div>

          <div className="pointer-events-none mt-4 select-none overflow-hidden leading-none">
            <p className="text-center text-[13vw] font-black tracking-[-0.09em] text-white/[0.035] sm:text-[10vw] lg:text-[8rem]">
              ABAAD
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
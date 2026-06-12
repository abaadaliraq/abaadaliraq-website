"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Manrope, Noto_Kufi_Arabic } from "next/font/google";

type Lang = "en" | "ar" | "ku";

type TopBarProps = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const arabicFont = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
});

const latinFont = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const nav = {
  en: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Virtual Tours", href: "/virtual-tours" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/#contact" },
  ],
  ar: [
    { label: "الرئيسية", href: "/" },
    { label: "من نحن", href: "/about" },
    { label: "مشاريعنا", href: "/projects" },
    { label: "الجولات", href: "/virtual-tours" },
    { label: "الخدمات", href: "/#services" },
    { label: "تواصل", href: "/#contact" },
  ],
  ku: [
    { label: "سەرەکی", href: "/" },
    { label: "دەربارە", href: "/about" },
    { label: "پڕۆژەکان", href: "/projects" },
    { label: "گەشتەکان", href: "/virtual-tours" },
    { label: "خزمەتگوزاری", href: "/#services" },
    { label: "پەیوەندی", href: "/#contact" },
  ],
};

const languages: { key: Lang; label: string }[] = [
  { key: "en", label: "EN" },
  { key: "ar", label: "AR" },
  { key: "ku", label: "KU" },
];

export default function TopBar({ lang, setLang }: TopBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const isRtl = lang === "ar" || lang === "ku";
  const fontClass = isRtl ? arabicFont.className : latinFont.className;
  useEffect(() => {
  const savedLang = localStorage.getItem("abaad_lang") as Lang | null;

  if (savedLang === "en" || savedLang === "ar" || savedLang === "ku") {
    setLang(savedLang);
  }
}, [setLang]);

const handleLangChange = (value: Lang) => {
  setLang(value);
  localStorage.setItem("abaad_lang", value);
};
  return (
    <header
      dir={isRtl ? "rtl" : "ltr"}
className={`${fontClass} absolute left-0 top-0 z-[100] w-full px-4 pt-4 sm:px-6 lg:px-8`}    >
      <div className="mx-auto max-w-7xl">
        <div className="flex h-[68px] items-center justify-between rounded-full border border-white/12 bg-[#070707]/78 px-4 shadow-2xl shadow-black/25 backdrop-blur-2xl sm:h-[74px] sm:px-5 lg:px-6">
          <Link
            href="/"
            aria-label="Abaad Al-Iraq Home"
            onClick={() => setIsOpen(false)}
            className="flex shrink-0 items-center"
          >
            
            <Image
              src="/logo.png"
              alt="Abaad Al-Iraq Logo"
              width={160}
              height={60}
              priority
              className="h-10 w-auto object-contain sm:h-12"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav[lang].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-[12px] font-medium tracking-[0.03em] text-white/62 transition hover:bg-white/[0.07] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1">
              {languages.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => handleLangChange(item.key)}
                  className={`rounded-full px-3.5 py-1.5 text-[10px] font-bold tracking-[0.12em] transition ${
                    lang === item.key
                      ? "bg-white text-black"
                      : "text-white/42 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((value) => !value)}
            className="grid size-10 place-items-center rounded-full border border-white/12 bg-white/[0.055] text-white/80 backdrop-blur-md transition hover:bg-white/[0.09] lg:hidden"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[90] bg-black/35 lg:hidden"
          />

          <div
            className={`fixed top-[92px] z-[110] w-[calc(100%-2rem)] max-w-[360px] overflow-hidden rounded-[28px] border border-white/12 bg-[#080808]/96 shadow-2xl shadow-black/50 backdrop-blur-2xl lg:hidden ${
              isRtl ? "right-4" : "right-4"
            }`}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
              <Image
                src="/logo.png"
                alt="Abaad Al-Iraq Logo"
                width={122}
                height={46}
                priority
                className="h-9 w-auto object-contain"
              />

              <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1">
                {languages.map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => handleLangChange(item.key)}
                    className={`rounded-full px-2.5 py-1 text-[9px] font-bold tracking-[0.1em] transition ${
                      lang === item.key
                        ? "bg-white text-black"
                        : "text-white/42 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <nav className="grid p-2">
              {nav[lang].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-3.5 text-[15px] font-medium text-white/75 transition hover:bg-white/[0.07] hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
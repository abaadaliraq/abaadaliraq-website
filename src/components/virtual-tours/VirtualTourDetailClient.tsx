"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import TopBar from "../TopBar";
import Footer from "../Footer";
import TourImage from "./TourImage";
import {
  getLocalizedTourValue,
  getRelatedVirtualTours,
  type VirtualTour,
} from "../../data/virtualTours";
import { getInitialLanguage, isRtlLanguage } from "../../lib/language";

type VirtualTourDetailClientProps = {
  tour: VirtualTour;
};

const labels = {
  en: {
    allTours: "All tours",
    year: "Year",
    project: "Project",
    sector: "Sector",
    service: "Service",
    about: "About the project",
    details: "Project information",
    gallery: "Scenes from the tour",
    additionalSpaces: "Other spaces in this project",
    related: "Other tours",
    back: "All tours",
    pendingImage: "Project image coming soon",
  },
  ar: {
    allTours: "جميع الجولات",
    year: "السنة",
    project: "المشروع",
    sector: "القطاع",
    service: "الخدمة",
    about: "عن المشروع",
    details: "معلومات المشروع",
    gallery: "لقطات من الجولة",
    additionalSpaces: "مساحات أخرى ضمن المشروع",
    related: "جولات أخرى",
    back: "جميع الجولات",
    pendingImage: "صورة المشروع قريباً",
  },
  ku: {
    allTours: "هەموو گەشتەکان",
    year: "ساڵ",
    project: "پڕۆژە",
    sector: "کەرت",
    service: "خزمەتگوزاری",
    about: "دەربارەی پڕۆژە",
    details: "زانیاری پڕۆژە",
    gallery: "دیمەنەکانی گەشت",
    additionalSpaces: "شوێنی دیکە لە ناو ئەم پڕۆژەیەدا",
    related: "گەشتی دیکە",
    back: "هەموو گەشتەکان",
    pendingImage: "وێنەی پڕۆژە بەم زووانە",
  },
};

export default function VirtualTourDetailClient({
  tour,
}: VirtualTourDetailClientProps) {
  const [lang, setLang] = useState(getInitialLanguage);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const isRtl = isRtlLanguage(lang);
  const t = labels[lang];
  const title = getLocalizedTourValue(tour.title, lang);
  const category = getLocalizedTourValue(tour.category, lang);
  const sector = getLocalizedTourValue(tour.sector, lang);
  const service = getLocalizedTourValue(tour.service, lang);
  const description = getLocalizedTourValue(tour.description, lang);
  const relatedTours = getRelatedVirtualTours(tour.slug, 3);
  const galleryImages = tour.gallery;
  const metaItems = [tour.year ? String(tour.year) : null, category, service].filter(
    Boolean,
  );
  const infoItems = [
    [t.project, title],
    [t.sector, sector],
    ...(tour.year ? [[t.year, String(tour.year)]] : []),
    [t.service, service],
  ];

  return (
    <main
      dir={isRtl ? "rtl" : "ltr"}
      className="min-h-screen bg-[#d8d7d1] text-[#141414]"
    >
      <TopBar lang={lang} setLang={setLang} />

      <section className="w-screen bg-[#080808]">
        <iframe
          src={tour.matterportUrl}
          title={tour.title.en}
          allow="fullscreen; xr-spatial-tracking"
          allowFullScreen
          loading="lazy"
          className="block h-[66vh] min-h-[420px] w-screen border-0 sm:h-[74vh] sm:min-h-[620px]"
        />
      </section>

      <section className="bg-[#d8d7d1] px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-[1160px]">
          <Link
            href="/virtual-tours"
            className="mb-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-bold text-black/58 transition hover:border-[#e11d48]/50 hover:text-[#e11d48]"
          >
            {isRtl ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
            {t.back}
          </Link>

          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#e11d48] sm:text-xs sm:tracking-[0.28em]">
            {category}
          </p>

          <h1 className="mt-3 max-w-4xl text-[34px] font-black leading-tight tracking-[-0.05em] sm:mt-4 sm:text-6xl">
            {title}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-black text-black/45 sm:mt-4 sm:text-base">
            {metaItems.map((item, index) => (
              <span key={item} className="inline-flex items-center gap-3">
                {index > 0 && <span className="text-[#e11d48]">•</span>}
                <span>{item}</span>
              </span>
            ))}
          </div>

          <section className="mt-6 max-w-4xl sm:mt-8">
            <h2 className="text-2xl font-black tracking-[-0.04em] sm:text-4xl">
              {t.about}
            </h2>
            <p className="mt-3 text-sm leading-7 text-black/68 sm:mt-5 sm:text-base sm:leading-8">
              {description}
            </p>
          </section>

          <section className="mt-6 sm:mt-8">
            <h2 className="text-2xl font-black tracking-[-0.04em] sm:text-3xl">
              {t.details}
            </h2>
            <dl className="mt-3 divide-y divide-black/10 border-y border-black/10 sm:mt-5">
              {infoItems.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[0.72fr_1fr] gap-4 py-3 text-sm sm:grid-cols-[180px_1fr] sm:py-4 sm:text-base"
                >
                  <dt className="font-black text-black/38">{label}</dt>
                  <dd className="font-bold leading-7 text-black/76">{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          {tour.additionalSpaces && tour.additionalSpaces.length > 0 && (
            <section className="mt-6 sm:mt-8">
              <h2 className="text-2xl font-black tracking-[-0.04em] sm:text-3xl">
                {t.additionalSpaces}
              </h2>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {tour.additionalSpaces.map((space) => (
                  <a
                    key={space.matterportId}
                    href={space.matterportUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-[18px] border border-black/10 bg-[#f7f5ee] p-4 transition hover:border-[#e11d48]/60 sm:p-5"
                  >
                    <p className="text-lg font-black">
                      {getLocalizedTourValue(space.title, lang)}
                    </p>
                    <p className="mt-2 text-xs font-black uppercase tracking-[0.22em] text-black/35">
                      Matterport
                    </p>
                  </a>
                ))}
              </div>
            </section>
          )}

          {galleryImages.length > 0 && (
            <section className="mt-8 sm:mt-10">
              <h2 className="text-2xl font-black tracking-[-0.04em] sm:text-4xl">
                {t.gallery}
              </h2>

              <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-6 sm:gap-4 md:grid-cols-4">
                {galleryImages.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => tour.imagesReady && setActiveImage(image)}
                    className={`relative overflow-hidden rounded-[14px] bg-[#111] text-start sm:rounded-[18px] ${
                      index === 0
                        ? "col-span-2 aspect-[16/10] md:row-span-2 md:aspect-auto md:min-h-[430px]"
                        : "aspect-[4/3]"
                    } ${tour.imagesReady ? "cursor-zoom-in" : "cursor-default"}`}
                  >
                    <TourImage
                      src={image}
                      alt={`${title} ${index + 1}`}
                      ready={tour.imagesReady}
                      pendingLabel={t.pendingImage}
                      sizes={
                        index === 0
                          ? "(max-width: 768px) 100vw, 50vw"
                          : "(max-width: 768px) 50vw, 25vw"
                      }
                    />
                  </button>
                ))}
              </div>
            </section>
          )}

          <section className="mt-8 sm:mt-10">
            <div className="mb-4 flex items-center justify-between gap-4 sm:mb-6">
              <h2 className="text-2xl font-black tracking-[-0.04em] sm:text-4xl">
                {t.related}
              </h2>
              <Link
                href="/virtual-tours"
                className="hidden text-sm font-black text-black/45 transition hover:text-[#e11d48] sm:inline-flex sm:items-center sm:gap-2"
              >
                {t.allTours}
                {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
              </Link>
            </div>

            <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-1 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0">
              {relatedTours.map((related) => (
                <Link
                  key={related.slug}
                  href={`/virtual-tours/${related.slug}`}
                  className="group w-[74vw] shrink-0 overflow-hidden rounded-[18px] bg-[#111] text-white transition hover:bg-[#171717] sm:w-auto sm:rounded-[22px]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <TourImage
                      src={related.coverImage}
                      alt={getLocalizedTourValue(related.title, lang)}
                      ready={related.imagesReady}
                      pendingLabel={t.pendingImage}
                      sizes="(max-width: 768px) 74vw, 33vw"
                    />
                  </div>

                  <div className="p-4 sm:p-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#e11d48] sm:text-[11px] sm:tracking-[0.22em]">
                      {getLocalizedTourValue(related.category, lang)}
                    </p>
                    <div className="mt-2 flex items-end justify-between gap-3">
                      <h3 className="text-lg font-black tracking-[-0.04em] sm:text-xl">
                        {getLocalizedTourValue(related.title, lang)}
                      </h3>
                      {related.year && (
                        <p className="shrink-0 text-sm font-black text-white/38">
                          {related.year}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>

      {activeImage && (
        <div className="fixed inset-0 z-[200] grid place-items-center bg-black/85 p-4">
          <button
            type="button"
            aria-label="Close gallery image"
            onClick={() => setActiveImage(null)}
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white text-black"
          >
            <X size={20} />
          </button>
          <div className="relative aspect-video w-full max-w-6xl overflow-hidden rounded-[26px] bg-[#111]">
            <TourImage
              src={activeImage}
              alt={title}
              ready={tour.imagesReady}
              sizes="100vw"
              quality={95}
            />
          </div>
        </div>
      )}

      <Footer lang={lang} />
    </main>
  );
}

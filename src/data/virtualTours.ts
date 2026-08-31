import type { Lang } from "../lib/language";

export type VirtualTour = {
  slug: string;
  title: Record<Lang, string>;
  category: Record<Lang, string>;
  sector: Record<Lang, string>;
  service: Record<Lang, string>;
  year: number | null;
  coverImage: string;
  gallery: string[];
  imagesReady: boolean;
  matterportId: string;
  matterportUrl: string;
  description: Record<Lang, string>;
  additionalSpaces?: {
    title: Record<Lang, string>;
    matterportId: string;
    matterportUrl: string;
  }[];
  seo: {
    title: string;
    description: string;
  };
};

const imageBase = "/images/virtual-tours";

export const virtualTours: VirtualTour[] = [
  {
    slug: "house-of-antiques-2026",
    title: {
      en: "House of Antiques",
      ar: "بيت التحفيات",
      ku: "ماڵی کۆنەبابەتەکان",
    },
    category: {
      en: "Cultural and commercial space",
      ar: "مساحة ثقافية وتجارية",
      ku: "شوێنی کولتووری و بازرگانی",
    },
    sector: {
      en: "Cultural and commercial space",
      ar: "مساحة ثقافية وتجارية",
      ku: "شوێنی کولتووری و بازرگانی",
    },
    service: {
      en: "3D and 360° virtual tour",
      ar: "جولة افتراضية ثلاثية الأبعاد و360°",
      ku: "گەشتی خەیاڵی سێ ڕەهەندی و 360°",
    },
    year: 2026,
    coverImage: `${imageBase}/house-of-antiques-2026/cover.jpg`,
    gallery: [
      `${imageBase}/house-of-antiques-2026/01.jpg`,
      `${imageBase}/house-of-antiques-2026/02.jpg`,
      `${imageBase}/house-of-antiques-2026/03.jpg`,
      `${imageBase}/house-of-antiques-2026/04.jpg`,
      `${imageBase}/house-of-antiques-2026/05.jpg`,
    ],
    imagesReady: true,
    matterportId: "rUWyUPkBTgF",
    matterportUrl: "https://my.matterport.com/show/?m=rUWyUPkBTgF",
    description: {
      en: "A modern 3D virtual tour for House of Antiques, created from the Matterport model dated 13 May 2026 to present the space and its details digitally.",
      ar: "جولة افتراضية حديثة لبيت التحفيات، مبنية على نموذج Matterport بتاريخ 13 May 2026 لعرض المكان وتفاصيله رقمياً.",
      ku: "گەشتی خەیاڵی نوێ بۆ ماڵی کۆنەبابەتەکان، دروستکراو لەسەر مۆدێلی Matterport بە ڕێکەوتی 13 May 2026 بۆ پیشاندانی شوێن و وردەکارییەکانی بە شێوەی دیجیتاڵی.",
    },
    seo: {
      title: "جولة بيت التحفيات الافتراضية 2026 | أبعاد العراق",
      description:
        "جولة افتراضية ثلاثية الأبعاد لبيت التحفيات نُفذت عام 2026 ضمن مشاريع أبعاد العراق لعرض الأماكن الثقافية والتجارية رقمياً.",
    },
  },
  {
    slug: "house-of-antiques-2022",
    title: {
      en: "House of Antiques",
      ar: "بيت التحفيات",
      ku: "ماڵی کۆنەبابەتەکان",
    },
    category: {
      en: "Cultural and heritage space",
      ar: "مساحة ثقافية وتراثية",
      ku: "شوێنی کولتووری و کەلەپووری",
    },
    sector: {
      en: "Culture and heritage",
      ar: "ثقافة وتراث",
      ku: "کولتوور و کەلەپوور",
    },
    service: {
      en: "3D and 360° virtual tour",
      ar: "جولة افتراضية ثلاثية الأبعاد و360°",
      ku: "گەشتی خەیاڵی سێ ڕەهەندی و 360°",
    },
    year: 2022,
    coverImage: `${imageBase}/house-of-antiques-2022/cover.jpg`,
    gallery: [
      `${imageBase}/house-of-antiques-2022/01.jpg`,
      `${imageBase}/house-of-antiques-2022/02.jpg`,
      `${imageBase}/house-of-antiques-2022/03.jpg`,
      `${imageBase}/house-of-antiques-2022/04.jpg`,
    ],
    imagesReady: true,
    matterportId: "3D1J64bs7yu",
    matterportUrl: "https://my.matterport.com/show/?m=3D1J64bs7yu",
    description: {
      en: "A virtual tour for House of Antiques completed in 2022 as part of Abaad Iraq's work documenting and presenting cultural and heritage spaces digitally.",
      ar: "جولة افتراضية لبيت التحفيات نُفذت عام 2022 ضمن أعمال أبعاد العراق في توثيق وعرض الأماكن الثقافية والتراثية رقمياً.",
      ku: "گەشتی خەیاڵی بۆ ماڵی کۆنەبابەتەکان کە لە ساڵی 2022 جێبەجێ کرا، وەک بەشێک لە کارەکانی ئەبعاد عێراق بۆ تۆمارکردن و پیشاندانی شوێنە کولتووری و کەلەپوورییەکان بە شێوەی دیجیتاڵی.",
    },
    seo: {
      title: "جولة بيت التحفيات الافتراضية 2022 | أبعاد العراق",
      description:
        "جولة افتراضية ثلاثية الأبعاد لبيت التحفيات نُفذت عام 2022 ضمن مشاريع أبعاد العراق لتوثيق وعرض الأماكن الثقافية والتراثية رقمياً.",
    },
  },
  {
    slug: "al-mutanabbi-street",
    title: {
      en: "Al-Mutanabbi Street",
      ar: "شارع المتنبي",
      ku: "شەقامی موتەنەبی",
    },
    category: {
      en: "Cultural and heritage site",
      ar: "موقع ثقافي وتراثي",
      ku: "شوێنی کولتووری و کەلەپووری",
    },
    sector: {
      en: "Cultural and heritage site",
      ar: "موقع ثقافي وتراثي",
      ku: "شوێنی کولتووری و کەلەپووری",
    },
    service: {
      en: "3D and 360° virtual tour",
      ar: "جولة افتراضية ثلاثية الأبعاد و360°",
      ku: "گەشتی خەیاڵی سێ ڕەهەندی و 360°",
    },
    year: 2023,
    coverImage: `${imageBase}/al-mutanabbi-street/cover.jpg`,
    gallery: [
      `${imageBase}/al-mutanabbi-street/01.jpg`,
      `${imageBase}/al-mutanabbi-street/02.jpg`,
      `${imageBase}/al-mutanabbi-street/03.jpg`,
      `${imageBase}/al-mutanabbi-street/04.jpg`,
    ],
    imagesReady: true,
    matterportId: "o5utxom1Q1g",
    matterportUrl: "https://my.matterport.com/show/?m=o5utxom1Q1g",
    description: {
      en: "A virtual tour for Al-Mutanabbi Street, created to make the cultural and heritage site easier to explore and present digitally.",
      ar: "جولة افتراضية لشارع المتنبي تساعد على استكشاف الموقع الثقافي والتراثي وعرضه رقمياً بصورة أوضح.",
      ku: "گەشتی خەیاڵی بۆ شەقامی موتەنەبی کە گەڕان و پیشاندانی شوێنە کولتووری و کەلەپوورییەکە بە شێوەی دیجیتاڵی ئاسانتر دەکات.",
    },
    seo: {
      title: "جولة شارع المتنبي الافتراضية | أبعاد العراق",
      description:
        "جولة افتراضية ثلاثية الأبعاد لشارع المتنبي ضمن مشاريع أبعاد العراق لتوثيق وعرض المواقع الثقافية والتراثية رقمياً.",
    },
  },
  {
    slug: "babylon-rotana",
    title: {
      en: "Babylon Rotana",
      ar: "بابل روتانا",
      ku: "بابل ڕۆتانا",
    },
    category: {
      en: "Hotel and hospitality",
      ar: "فندق وضيافة",
      ku: "هۆتێل و میوانداری",
    },
    sector: {
      en: "Hotel and hospitality",
      ar: "فندق وضيافة",
      ku: "هۆتێل و میوانداری",
    },
    service: {
      en: "3D and 360° virtual tour",
      ar: "جولة افتراضية ثلاثية الأبعاد و360°",
      ku: "گەشتی خەیاڵی سێ ڕەهەندی و 360°",
    },
    year: 2023,
    coverImage: `${imageBase}/babylon-rotana/cover.jpg`,
    gallery: [
      `${imageBase}/babylon-rotana/01.jpg`,
      `${imageBase}/babylon-rotana/02.jpg`,
      `${imageBase}/babylon-rotana/03.jpg`,
      `${imageBase}/babylon-rotana/04.jpg`,
    ],
    imagesReady: true,
    matterportId: "vNHafUTWuoT",
    matterportUrl: "https://my.matterport.com/show/?m=vNHafUTWuoT",
    description: {
      en: "A virtual tour for Babylon Rotana, organized as one hospitality project with the main confirmed Matterport experience.",
      ar: "جولة افتراضية لبابل روتانا، منظمة كمشروع ضيافة واحد مع عرض الجولة الأساسية المؤكدة.",
      ku: "گەشتی خەیاڵی بۆ بابل ڕۆتانا، وەک یەک پڕۆژەی میوانداری ڕێکخراوە لەگەڵ ئەزموونی سەرەکیی Matterport پشتڕاستکراو.",
    },
    additionalSpaces: [],
    seo: {
      title: "جولة بابل روتانا الافتراضية | أبعاد العراق",
      description:
        "جولة افتراضية ثلاثية الأبعاد لبابل روتانا ضمن مشاريع أبعاد العراق لعرض مشاريع الفنادق والضيافة رقمياً.",
    },
  },
  {
    slug: "alps-restaurant",
    title: {
      en: "Alps Restaurant",
      ar: "مطعم ألبس",
      ku: "چێشتخانەی ئەڵپس",
    },
    category: {
      en: "Restaurant",
      ar: "مطعم",
      ku: "چێشتخانە",
    },
    sector: {
      en: "Restaurant",
      ar: "مطعم",
      ku: "چێشتخانە",
    },
    service: {
      en: "3D and 360° virtual tour",
      ar: "جولة افتراضية ثلاثية الأبعاد و360°",
      ku: "گەشتی خەیاڵی سێ ڕەهەندی و 360°",
    },
    year: 2022,
    coverImage: `${imageBase}/alps-restaurant/cover.jpg`,
    gallery: [
      `${imageBase}/alps-restaurant/01.jpg`,
      `${imageBase}/alps-restaurant/02.jpg`,
      `${imageBase}/alps-restaurant/03.jpg`,
      `${imageBase}/alps-restaurant/04.jpg`,
    ],
    imagesReady: true,
    matterportId: "eAcdEfFhKUB",
    matterportUrl: "https://my.matterport.com/show/?m=eAcdEfFhKUB",
    description: {
      en: "A virtual tour for Alps Restaurant, built to show the atmosphere, seating, and customer path before arrival.",
      ar: "جولة افتراضية لمطعم ألبس تعرض الأجواء والجلسات ومسار تجربة العميل قبل الوصول.",
      ku: "گەشتی خەیاڵی بۆ چێشتخانەی ئەڵپس کە کەش، دانیشتن، و ڕێڕەوی ئەزموونی کڕیار پێش گەیشتن پیشان دەدات.",
    },
    seo: {
      title: "جولة مطعم ألبس الافتراضية | أبعاد العراق",
      description:
        "جولة افتراضية ثلاثية الأبعاد لمطعم ألبس ضمن مشاريع أبعاد العراق لعرض المطاعم رقمياً بطريقة تفاعلية.",
    },
  },
];

export const sortedVirtualTours = [...virtualTours].sort((a, b) => {
  if (a.year && b.year) {
    return b.year - a.year;
  }

  if (a.year) {
    return -1;
  }

  if (b.year) {
    return 1;
  }

  return 0;
});

export function getVirtualTourBySlug(slug: string) {
  return virtualTours.find((tour) => tour.slug === slug);
}

export function getRelatedVirtualTours(slug: string, limit = 3) {
  return sortedVirtualTours.filter((tour) => tour.slug !== slug).slice(0, limit);
}

export function getLocalizedTourValue(
  values: Record<Lang, string>,
  lang: Lang,
) {
  return values[lang] ?? values.ar;
}

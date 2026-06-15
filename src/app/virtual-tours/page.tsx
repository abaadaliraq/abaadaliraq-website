"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";

type Lang = "en" | "ar" | "ku";

const completedTours = [
  {
    en: "House of Antiques",
    ar: "بيت التحفيات",
    ku: "ماڵی کۆنەبابەتەکان",
    sectorEn: "Cultural / Commercial Space",
    sectorAr: "مساحة ثقافية وتجارية",
    sectorKu: "شوێنی کولتووری و بازرگانی",
    url: "https://my.matterport.com/show/?m=rUWyUPkBTgF",
  },
  {
    en: "Coral Palace Hotel",
    ar: "فندق قصر كورال",
    ku: "هۆتێلی قەسری کۆرال",
    sectorEn: "Hotel",
    sectorAr: "فندق",
    sectorKu: "هۆتێل",
    url: "https://my.matterport.com/show/?m=2EJ9faB8BSD",
  },
{
  en: "Coral Village",
  ar: "قرية كورال",
  ku: "گوندی کۆرال",
  sectorEn: "Hospitality / Residential Village",
  sectorAr: "قرية ضيافة وسكن",
  sectorKu: "گوندی میوانداری و نیشتەجێبوون",
  url: "https://my.matterport.com/show/?m=tC4RfesELZw",
},
  {
    en: "Babylon Rotana Halls",
    ar: "قاعات بابل روتانا",
    ku: "هۆڵەکانی بابل ڕۆتانا",
    sectorEn: "Event Halls",
    sectorAr: "صالات مناسبات",
    sectorKu: "هۆڵی بۆنەکان",
    url: "https://my.matterport.com/show/?m=vNHafUTWuoT",
  },
  {
    en: "Royal Suite",
    ar: "الجناح الملكي",
    ku: "سویتی شاهانە",
    sectorEn: "Hospitality Suite",
    sectorAr: "جناح فندقي",
    sectorKu: "سویتی هۆتێلی",
    url: "https://my.matterport.com/show/?m=1GypfACJ5tc",
  },
  {
    en: "Hotel Room",
    ar: "غرفة فندقية",
    ku: "ژووری هۆتێل",
    sectorEn: "Hotel Room",
    sectorAr: "غرفة فندقية",
    sectorKu: "ژووری هۆتێل",
    url: "https://my.matterport.com/show/?m=sbRGf39bSLh",
  },
  {
    en: "Alps Restaurant",
    ar: "مطعم ألبس",
    ku: "چێشتخانەی ئەڵپس",
    sectorEn: "Restaurant",
    sectorAr: "مطعم",
    sectorKu: "چێشتخانە",
    url: "https://my.matterport.com/show/?m=eAcdEfFhKUB",
  },
  {
    en: "Mutanabbi Street",
    ar: "شارع المتنبي",
    ku: "شەقامی موتەنەبی",
    sectorEn: "Cultural Destination",
    sectorAr: "وجهة ثقافية",
    sectorKu: "شوێنی کولتووری",
    url: "https://my.matterport.com/show/?m=o5utxom1Q1g",
  },
  {
    en: "Exhibition / Showroom Tour",
    ar: "جولة معرض أو قاعة عرض",
    ku: "گەشتی پیشانگا یان هۆڵی پیشاندان",
    sectorEn: "Exhibition / Showroom",
    sectorAr: "معرض / قاعة عرض",
    sectorKu: "پیشانگا / هۆڵی پیشاندان",
    url: "https://my.matterport.com/show/?m=YC54uY9CvVj",
  },
];

const text = {
  en: {
    badge: "Virtual Tours 360°",
    title: "Present your place as a real digital experience.",
    heroText:
      "Virtual tours help clients explore your project before visiting it, understand its details faster, and feel the value of the place through an interactive experience.",
    introTitle: "What is a virtual tour?",
    introText:
      "A virtual tour is an interactive digital experience that allows visitors to move inside a real place through their phone, computer, tablet, touch screen, or VR headset. It is not just a visual display; it is a practical tool for marketing, explanation, sales, and trust building.",
    sectorsTitle: "Who benefits from virtual tours?",
    sectorsText:
      "Virtual tours are useful for any project that needs to show space, details, atmosphere, or customer experience before the actual visit.",
    sectors: [
      "Hotels and resorts",
      "Restaurants and cafés",
      "Event halls",
      "Real estate projects",
      "Museums and galleries",
      "Factories and showrooms",
      "Touristic, heritage, and religious sites",
      "Schools and universities",
      "Clinics and hospitals",
      "Government and corporate buildings",
      "Retail stores and exhibitions",
      "Cultural and entertainment spaces",
    ],
    displayTitle: "Digital display methods",
    displayText:
      "We do not only create the virtual tour. We also think about how it will be presented to your audience, whether through a direct link, website, screens, touch displays, or VR.",
    methods: [
      {
        label: "LINK",
        title: "Interactive direct link",
        text: "A shareable link that works on phones, computers, and tablets. Suitable for websites, social media, QR codes, and quick client access.",
      },
      {
        label: "MOBILE",
        title: "Phones and tablets",
        text: "The easiest way for visitors to explore the place anywhere, without needing special devices.",
      },
      {
        label: "SCREEN",
        title: "Computers and large screens",
        text: "Useful for meetings, sales presentations, receptions, offices, and booth displays.",
      },
      {
        label: "TOUCH",
        title: "Touch screens",
        text: "A strong option for exhibitions, lobbies, showrooms, and public spaces where visitors can explore by themselves.",
      },
      {
        label: "VR",
        title: "Virtual reality experience",
        text: "An immersive experience that gives visitors a stronger feeling of being inside the real place.",
      },
    ],
    whyTitle: "Why does the display method matter?",
    whyCards: [
      {
        title: "Faster understanding",
        text: "The clearer the experience is, the faster the client understands the project and its value.",
      },
      {
        title: "Higher trust",
        text: "A well-organized digital tour reduces hesitation and gives a more professional impression.",
      },
      {
        title: "Stronger value",
        text: "When the project becomes an interactive experience, its image becomes more memorable and convincing.",
      },
    ],
    vrTitle: "VR for exhibitions and international events",
    vrText:
      "In exhibitions, there is no time for long explanations. A VR experience can attract visitors to the booth, let them explore the project in detail, and create a stronger first impression. It is especially useful when the real location is far away, large, or difficult to explain with photos only.",
    vrPoints: [
      "Attract visitors to the booth through an immersive experience.",
      "Let people see the project details within minutes.",
      "Support international marketing when the visitor cannot physically reach the location.",
      "Combine VR with screens, QR codes, and short videos for a complete booth experience.",
    ],
    completedTitle: "Part of our completed virtual tours in Iraq",
    completedText:
      "A selected group of virtual tours executed for different sectors inside Iraq.",
    explore: "Explore Tour",
    addLink: "Add tour link here",
    noteTitle: "Important note",
    noteText:
      "Not every project needs VR. Sometimes a direct link or screen display is the smarter and faster option. The right choice depends on the goal, audience, and place of presentation.",
  },

  ar: {
    badge: "الجولات الافتراضية 360°",
    title: "اعرض مكانك كتجربة رقمية واقعية.",
    heroText:
      "تساعد الجولات الافتراضية العميل على استكشاف مشروعك قبل زيارته، فهم تفاصيله بسرعة أكبر، والشعور بقيمة المكان من خلال تجربة تفاعلية واضحة.",
    introTitle: "ما هي الجولة الافتراضية؟",
    introText:
      "الجولة الافتراضية هي تجربة رقمية تفاعلية تتيح للزائر التنقل داخل مكان حقيقي عبر الهاتف، الحاسوب، التابلت، شاشة اللمس، أو نظارات الواقع الافتراضي. هي ليست مجرد عرض بصري، بل أداة عملية للتسويق، الشرح، البيع، وبناء الثقة.",
    sectorsTitle: "من يستفيد من الجولات الافتراضية؟",
    sectorsText:
      "الجولات الافتراضية مناسبة لأي مشروع يحتاج إلى عرض المساحة، التفاصيل، الأجواء، أو تجربة العميل قبل الزيارة الفعلية.",
    sectors: [
      "الفنادق والمنتجعات",
      "المطاعم والكافيهات",
      "صالات المناسبات",
      "المشاريع العقارية",
      "المتاحف والمعارض الفنية",
      "المصانع وقاعات العرض",
      "المناطق السياحية والأثرية والدينية",
      "المدارس والجامعات",
      "العيادات والمستشفيات",
      "المؤسسات الحكومية والشركات",
      "المتاجر والمعارض التجارية",
      "المساحات الثقافية والترفيهية",
    ],
    displayTitle: "طرق العرض الرقمية",
    displayText:
      "في أبعاد العراق لا نكتفي بتنفيذ الجولة الافتراضية فقط، بل نهتم بطريقة عرضها أمام الجمهور، سواء عبر رابط مباشر، موقع إلكتروني، شاشات، شاشات لمس، أو تجربة VR.",
    methods: [
      {
        label: "LINK",
        title: "رابط تفاعلي مباشر",
        text: "رابط قابل للمشاركة يعمل على الهاتف، الحاسوب، والتابلت. مناسب للمواقع، السوشيال ميديا، QR Code، والوصول السريع للعميل.",
      },
      {
        label: "MOBILE",
        title: "الهاتف والتابلت",
        text: "الطريقة الأسهل ليتمكن الزائر من استكشاف المكان من أي مكان، دون الحاجة إلى أجهزة خاصة.",
      },
      {
        label: "SCREEN",
        title: "الحواسيب والشاشات الكبيرة",
        text: "مناسبة للاجتماعات، العروض البيعية، الاستقبال، المكاتب، والعرض داخل البوثات.",
      },
      {
        label: "TOUCH",
        title: "الشاشات اللمس",
        text: "خيار قوي للمعارض، اللوبيات، قاعات العرض، والأماكن العامة حيث يستطيع الزائر التفاعل بنفسه.",
      },
      {
        label: "VR",
        title: "تجربة الواقع الافتراضي",
        text: "تجربة غامرة تمنح الزائر إحساسًا أقرب للوجود الفعلي داخل المكان.",
      },
    ],
    whyTitle: "لماذا أصبحت طريقة العرض جزءًا أساسيًا؟",
    whyCards: [
      {
        title: "فهم أسرع",
        text: "كلما كانت التجربة أوضح، احتاج العميل وقتًا أقل لفهم المشروع وقيمته.",
      },
      {
        title: "ثقة أعلى",
        text: "الجولة المنظمة تقلل التردد وتعطي انطباعًا مهنيًا أقوى.",
      },
      {
        title: "قيمة أقوى",
        text: "عندما يتحول المشروع إلى تجربة تفاعلية، تصبح صورته أكثر حضورًا وإقناعًا.",
      },
    ],
    vrTitle: "الـ VR في المعارض والفعاليات الدولية",
    vrText:
      "في المعارض لا يوجد وقت طويل للشرح. تجربة VR تستطيع جذب الزوار إلى البوث، وتمنحهم فرصة رؤية المشروع بتفاصيله خلال دقائق. وهي مهمة خصوصًا عندما يكون المشروع بعيدًا، كبيرًا، أو يصعب شرحه بالصور فقط.",
    vrPoints: [
      "جذب الزوار إلى البوث من خلال تجربة مختلفة ومؤثرة.",
      "تمكين الزائر من رؤية تفاصيل المشروع خلال دقائق.",
      "دعم التسويق الدولي عندما لا يستطيع الزائر الوصول للموقع فعليًا.",
      "دمج الـ VR مع الشاشات، QR Code، والفيديوهات القصيرة لتجربة عرض متكاملة.",
    ],
    completedTitle: "جزء من الجولات الافتراضية المنفذة داخل العراق",
    completedText:
      "نماذج مختارة من جولات افتراضية تم تنفيذها لقطاعات مختلفة داخل العراق.",
    explore: "استكشف الجولة",
    addLink: "أضيفي رابط الجولة هنا",
    noteTitle: "نقطة مهمة",
    noteText:
      "ليس كل مشروع يحتاج VR. أحيانًا يكون الرابط المباشر أو العرض على الشاشة هو الخيار الأذكى والأسرع. المهم هو اختيار وسيلة العرض حسب الهدف، الجمهور، ومكان التقديم.",
  },

  ku: {
    badge: "گەشتی خەیاڵی 360°",
    title: "شوێنەکەت وەک ئەزموونێکی دیجیتاڵی ڕاستەقینە پیشان بدە.",
    heroText:
      "گەشتی خەیاڵی یارمەتی کڕیار دەدات پڕۆژەکەت پێش سەردان ببینێت، وردەکارییەکان خێراتر تێبگات، و بەهای شوێنەکە هەست پێ بکات.",
    introTitle: "گەشتی خەیاڵی چییە؟",
    introText:
      "گەشتی خەیاڵی ئەزموونێکی دیجیتاڵی تفاعلییە کە ڕێگە دەدات سەردانکەر لە ناو شوێنێکی ڕاستەقینەدا بگەڕێت بە مۆبایل، کۆمپیوتەر، تابلێت، شاشەی دەستلێدان، یان VR.",
    sectorsTitle: "کێ سوود لە گەشتی خەیاڵی وەردەگرێت؟",
    sectorsText:
      "گەشتی خەیاڵی گونجاوە بۆ هەر پڕۆژەیەک کە پێویستی بە پیشاندانی شوێن، وردەکاری، کەش، یان ئەزموونی کڕیار هەیە پێش سەردانی ڕاستەقینە.",
    sectors: [
      "هۆتێل و شوێنی پشوو",
      "چێشتخانە و کافێ",
      "هۆڵی بۆنەکان",
      "پڕۆژەی خانووبەرە",
      "مۆزەخانە و گەلەری",
      "کارگە و هۆڵی پیشاندان",
      "شوێنی گەشتیاری، مێژوویی و ئایینی",
      "قوتابخانە و زانکۆ",
      "کلینیک و نەخۆشخانە",
      "دامەزراوەی حکومی و کۆمپانیاکان",
      "فرۆشگا و پیشانگاکان",
      "شوێنی کولتووری و کات بەسەربردن",
    ],
    displayTitle: "ڕێگاکانی پیشاندانی دیجیتاڵی",
    displayText:
      "ئێمە تەنها گەشتی خەیاڵی دروست ناکەین، بەڵکو بیر لەوە دەکەینەوە چۆن بە باشترین شێوە پیشانی بینەر بدرێت.",
    methods: [
      {
        label: "LINK",
        title: "بەستەری تفاعلی",
        text: "بەستەرێک کە لە مۆبایل، کۆمپیوتەر و تابلێت کار دەکات و بۆ هاوبەشکردن زۆر گونجاوە.",
      },
      {
        label: "MOBILE",
        title: "مۆبایل و تابلێت",
        text: "ئاسانترین ڕێگا بۆ ئەوەی سەردانکەر لە هەر شوێنێکەوە شوێنەکە بگەڕێت.",
      },
      {
        label: "SCREEN",
        title: "کۆمپیوتەر و شاشەی گەورە",
        text: "گونجاوە بۆ کۆبوونەوە، پیشاندانی فرۆشتن، پێشوازی، ئۆفیس و بووثەکان.",
      },
      {
        label: "TOUCH",
        title: "شاشەی دەستلێدان",
        text: "باشە بۆ پیشانگا، لۆبی، هۆڵی پیشاندان و شوێنە گشتییەکان.",
      },
      {
        label: "VR",
        title: "ئەزموونی VR",
        text: "ئەزموونێکی قووڵتر کە هەستێکی نزیک بە بوونی ڕاستەقینە لە ناو شوێنەکە دەدات.",
      },
    ],
    whyTitle: "بۆچی ڕێگای پیشاندان گرنگە؟",
    whyCards: [
      {
        title: "تێگەیشتنی خێراتر",
        text: "کاتێک ئەزموونەکە ڕوونتر بێت، کڕیار خێراتر تێدەگات.",
      },
      {
        title: "متمانەی زیاتر",
        text: "گەشتێکی ڕێکخراو گومان کەم دەکاتەوە و وێنەیەکی پیشەیی دەدات.",
      },
      {
        title: "بەهای بەهێزتر",
        text: "کاتێک پڕۆژەکە دەبێتە ئەزموون، لە مێشکی بینەر زیاتر دەمێنێتەوە.",
      },
    ],
    vrTitle: "VR لە پیشانگا و ڕووداوە نێودەوڵەتییەکان",
    vrText:
      "لە پیشانگا کاتی زۆر بۆ ڕوونکردنەوە نییە. VR دەتوانێت سەردانکەر بۆ بووث ڕابکێشێت و پڕۆژەکە بە وردەکاری پیشان بدات.",
    vrPoints: [
      "ڕاکێشانی سەردانکەر بۆ بووث.",
      "پیشاندانی وردەکارییەکان لە چەند خولەکدا.",
      "پشتگیری بازاڕکردنی نێودەوڵەتی.",
      "تێکەڵکردنی VR لەگەڵ شاشە، QR Code و ڤیدیۆی کورتی ناساندن.",
    ],
    completedTitle: "بەشێک لە گەشتە خەیاڵییە جێبەجێکراوەکانمان لە عێراق",
    completedText:
      "نمونەی هەڵبژێردراو لە گەشتی خەیاڵی بۆ کەرتە جیاوازەکان لە عێراق.",
    explore: "بینینی گەشت",
    addLink: "لێرە بەستەری گەشت زیاد بکە",
    noteTitle: "تێبینی گرنگ",
    noteText:
      "هەموو پڕۆژەیەک پێویستی بە VR نییە. هەندێک جار بەستەر یان شاشە باشترین و خێراترین هەڵبژاردەیە.",
  },
};

export default function VirtualToursPage() {
  const [lang, setLang] = useState<Lang>("en");

  const t = text[lang];
  const isRtl = lang === "ar" || lang === "ku";

  return (
    <main
      dir={isRtl ? "rtl" : "ltr"}
      className="min-h-screen bg-[#d8d7d1] text-[#141414]"
    >
      <TopBar lang={lang} setLang={setLang} />

      <section className="relative min-h-[82vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/virtual-tour-gate.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-[#d8d7d1]" />

        <div className="relative mx-auto flex min-h-[82vh] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <span className="inline-flex rounded-full border border-white/25 bg-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-white backdrop-blur-xl">
              {t.badge}
            </span>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              {t.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
              {t.heroText}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative -mt-10 px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1420px] rounded-t-[36px] bg-[#ebe9df] px-5 py-8 shadow-2xl shadow-black/15 sm:px-8 lg:px-10 lg:py-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.7 }}
            className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]"
          >
            <div className="rounded-[28px] bg-[#111] p-7 text-white sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e11d48]">
                360° Experience
              </p>
              <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] sm:text-5xl">
                {t.introTitle}
              </h2>
            </div>

            <div className="rounded-[28px] bg-[#d8d7d1] p-7 sm:p-9">
              <p className="text-sm leading-8 text-black/68 sm:text-base">
                {t.introText}
              </p>
            </div>
          </motion.div>

          <section className="mt-6">
            <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div className="rounded-[28px] bg-[#f7f5ee] p-7 shadow-lg shadow-black/5 sm:p-8 lg:sticky lg:top-28">
                <h2 className="text-3xl font-black tracking-[-0.04em]">
                  {t.sectorsTitle}
                </h2>
                <p className="mt-5 text-sm leading-8 text-black/65">
                  {t.sectorsText}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {t.sectors.map((sector, index) => (
                  <motion.div
                    key={sector}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-70px" }}
                    transition={{ duration: 0.5, delay: index * 0.03 }}
                    className="rounded-2xl bg-[#f7f5ee] px-5 py-4 text-sm font-bold text-black/72 shadow-sm"
                  >
                    {sector}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-6 rounded-[32px] bg-[#111] p-6 text-white sm:p-9 lg:p-11">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e11d48]">
                  Display
                </p>
                <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">
                  {t.displayTitle}
                </h2>
                <p className="mt-5 text-sm leading-8 text-white/65">
                  {t.displayText}
                </p>
              </div>

              <div className="grid gap-4">
                {t.methods.map((method, index) => (
                  <motion.article
                    key={method.label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-70px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="rounded-[22px] border border-white/10 bg-white/[0.045] p-5"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-5">
                      <span className="inline-flex w-fit rounded-full bg-[#e11d48] px-4 py-2 text-xs font-black tracking-[0.2em]">
                        {method.label}
                      </span>

                      <div>
                        <h3 className="text-xl font-black">{method.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-white/62">
                          {method.text}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-6">
            <h2 className="mb-5 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
              {t.whyTitle}
            </h2>

            <div className="grid gap-5 md:grid-cols-3">
              {t.whyCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="rounded-[26px] bg-[#f7f5ee] p-6 shadow-lg shadow-black/5"
                >
                  <span className="text-5xl font-black tracking-[-0.08em] text-black/5">
                    0{index + 1}
                  </span>

                  <h3 className="mt-4 text-xl font-black">{card.title}</h3>

                  <p className="mt-4 text-sm leading-8 text-black/65">
                    {card.text}
                  </p>
                </motion.article>
              ))}
            </div>
          </section>

          <section
            id="vr"
            className="mt-6 scroll-mt-28 overflow-hidden rounded-[34px] bg-[#080808] text-white"
          >
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="p-7 sm:p-10 lg:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e11d48]">
                  VR Experience
                </p>

                <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
                  {t.vrTitle}
                </h2>

                <p className="mt-6 text-sm leading-8 text-white/68 sm:text-base">
                  {t.vrText}
                </p>
              </div>

              <div className="bg-white/[0.04] p-7 sm:p-10 lg:p-12">
                <div className="space-y-4">
                  {t.vrPoints.map((point, index) => (
                    <motion.div
                      key={point}
                      initial={{ opacity: 0, x: isRtl ? -16 : 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-70px" }}
                      transition={{ duration: 0.55, delay: index * 0.06 }}
                      className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4"
                    >
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#e11d48]" />
                      <p className="text-sm leading-7 text-white/68">{point}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-6">
            <div className="rounded-[30px] bg-[#f7f5ee] p-7 sm:p-9">
              <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e11d48]">
                    Completed in Iraq
                  </p>

                  <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">
                    {t.completedTitle}
                  </h2>
                </div>

                <p className="text-sm leading-8 text-black/65 sm:text-base">
                  {t.completedText}
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-3">
              {completedTours.map((tour, index) => {
                const hasUrl = tour.url && tour.url !== "#";

                return (
                  <motion.article
                    key={tour.en}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-70px" }}
                    transition={{ duration: 0.6, delay: index * 0.04 }}
                    className="overflow-hidden rounded-[28px] bg-[#111] shadow-xl shadow-black/10"
                  >
                    <div className="border-b border-white/10 px-5 py-4 text-white">
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#e11d48]">
                        {lang === "ar"
                          ? tour.sectorAr
                          : lang === "ku"
                            ? tour.sectorKu
                            : tour.sectorEn}
                      </p>

                      <h3 className="mt-3 text-2xl font-black tracking-[-0.04em]">
                        {lang === "ar"
                          ? tour.ar
                          : lang === "ku"
                            ? tour.ku
                            : tour.en}
                      </h3>
                    </div>

                    <div className="bg-[#0b0b0b] p-3">
                      <div className="mb-3 flex items-center justify-between px-1">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                          <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
                          <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                        </div>

                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">
                          360°
                        </span>
                      </div>

                      <div className="relative overflow-hidden rounded-[20px] bg-[#ebe9df]">
                        {hasUrl ? (
                          <iframe
                            src={tour.url}
                            title={tour.en}
                            loading="lazy"
                            className="h-[320px] w-full border-0"
                          />
                        ) : (
                          <div className="flex h-[320px] items-center justify-center bg-[#d8d7d1] p-6 text-center">
                            <p className="max-w-xs text-sm font-bold leading-7 text-black/45">
                              {t.addLink}
                            </p>
                          </div>
                        )}
                      </div>

                      <a
                        href={hasUrl ? tour.url : "#"}
                        target={hasUrl ? "_blank" : undefined}
                        rel={hasUrl ? "noreferrer" : undefined}
                        className={`mt-3 flex h-11 w-full items-center justify-center rounded-full text-sm font-bold transition ${
                          hasUrl
                            ? "bg-[#e11d48] text-white hover:bg-[#ff2f61]"
                            : "cursor-not-allowed bg-white/10 text-white/35"
                        }`}
                      >
                        {t.explore}
                      </a>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </section>

          <section className="mt-6 rounded-[30px] bg-[#111] p-7 text-white sm:p-9 lg:p-11">
            <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <h2 className="text-3xl font-black tracking-[-0.04em]">
                {t.noteTitle}
              </h2>

              <p className="text-sm leading-8 text-white/68 sm:text-base">
                {t.noteText}
              </p>
            </div>
          </section>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
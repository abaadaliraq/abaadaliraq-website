"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";

type Lang = "en" | "ar" | "ku";

const text = {
  en: {
    badge: "Why Abaad Al-Iraq",
    heroTitle: "We turn your project into a complete digital experience.",
    heroText:
      "Professional digital solutions including websites, e-commerce stores, systems, and virtual tours to present your project in a stronger and more influential way.",
    visionTitle: "Vision",
    visionText:
      "To make Abaad Al-Iraq a leading digital solutions provider in Iraq by delivering practical and modern services that help projects organize, grow, and build a strong, sustainable digital presence.",
    missionTitle: "Mission",
    missionText:
      "We provide integrated digital solutions starting from the idea and reaching full execution, including websites, e-commerce stores, operational systems, and digital service tools, to develop projects, increase efficiency, and improve customer experience.",
    whyTitle: "Why us?",
    whyText:
      "Because we do not treat the project as a separate service. We understand it as a complete system. We build thoughtful solutions that fit the nature of each business, where design, system, and user experience work together to serve the real goal.",
    goalsTitle: "Our goals in brief",
    goalsText:
      "We support projects in Iraq with modern digital solutions that raise work quality, simplify management, and improve customer experience from the digital interface to the systems used every day.",
    goals: [
      {
        title: "Goal 01",
        lines: [
          "Increase project value through realistic presentation.",
          "Build customer trust before the actual visit.",
        ],
      },
      {
        title: "Goal 02",
        lines: [
          "Support marketing with shareable digital materials.",
          "Shorten decision time and improve customer experience.",
        ],
      },
      {
        title: "Goal 03",
        lines: [
          "Present Iraqi projects in a modern image.",
          "Open wider access to local and international audiences.",
        ],
      },
    ],
    ctaTitle: "A digital structure made around your project.",
    ctaText:
      "Every project has its own nature, audience, and goal. That is why we build the experience around the project, not around a ready-made template.",
    ctaButton: "View Projects",
  },

  ar: {
    badge: "لماذا أبعاد العراق",
    heroTitle: "نحوّل مشروعك إلى تجربة رقمية متكاملة.",
    heroText:
      "نقدّم حلولًا رقمية احترافية تشمل تصميم المواقع، المتاجر الإلكترونية، الأنظمة، والجولات الافتراضية لعرض مشروعك بشكل أقوى وأكثر تأثيرًا.",
    visionTitle: "الرؤية",
    visionText:
      "أن تكون أبعاد العراق جهة رائدة في تطوير الحلول الرقمية داخل العراق، عبر تقديم خدمات عملية وحديثة تساعد المشاريع على التنظيم، النمو، وبناء حضور رقمي قوي ومستدام.",
    missionTitle: "الرسالة",
    missionText:
      "نقدّم حلولًا رقمية متكاملة تبدأ من الفكرة وتصل إلى التنفيذ، تشمل تصميم المواقع، المتاجر الإلكترونية، الأنظمة التشغيلية، وأدوات الخدمة الرقمية، بهدف تطوير المشاريع ورفع كفاءتها وتحسين تجربة عملائها.",
    whyTitle: "لماذا نحن؟",
    whyText:
      "لأننا لا نقدّم خدمة منفصلة فقط، بل نفهم المشروع كمنظومة كاملة. نعمل على بناء حلول مدروسة ومناسبة لطبيعة كل نشاط، بحيث يكون التصميم، النظام، وتجربة المستخدم أجزاء مترابطة تخدم الهدف الحقيقي للمشروع.",
    goalsTitle: "أهدافنا باختصار",
    goalsText:
      "نسعى إلى دعم المشاريع داخل العراق بحلول رقمية حديثة ترفع جودة العمل، تبسّط الإدارة، وتحسّن تجربة العميل، بدءًا من الواجهة الرقمية وحتى الأنظمة التي يعتمد عليها المشروع يوميًا.",
    goals: [
      {
        title: "هدف 01",
        lines: [
          "رفع قيمة المشروع عبر عرض واقعي يبرز التفاصيل.",
          "تعزيز ثقة الزبون قبل الزيارة الفعلية.",
        ],
      },
      {
        title: "هدف 02",
        lines: [
          "دعم التسويق بمواد قابلة للمشاركة والانتشار.",
          "اختصار وقت القرار وتحسين تجربة العميل.",
        ],
      },
      {
        title: "هدف 03",
        lines: [
          "إبراز المشاريع العراقية بصورة حديثة تواكب العصر.",
          "فتح آفاق أوسع للوصول لجمهور محلي وخارجي.",
        ],
      },
    ],
    ctaTitle: "هيكل رقمي يُبنى حول مشروعك.",
    ctaText:
      "كل مشروع له طبيعته وجمهوره وهدفه. لذلك نبني التجربة حول المشروع نفسه، وليس حول قالب جاهز.",
    ctaButton: "مشاهدة المشاريع",
  },

  ku: {
    badge: "بۆچی ئەبعاد عێراق",
    heroTitle: "پڕۆژەکەت دەگۆڕین بۆ ئەزموونێکی دیجیتاڵی تەواو.",
    heroText:
      "چارەسەری دیجیتاڵی پیشەیی پێشکەش دەکەین، وەک ماڵپەڕ، فرۆشگای ئەلیکترۆنی، سیستەم، و گەشتی خەیاڵی بۆ پیشاندانی پڕۆژەکەت بە شێوەیەکی بەهێزتر.",
    visionTitle: "بینین",
    visionText:
      "ئەوەی ئەبعاد عێراق ببێتە لایەنێکی پێشەنگ لە پەرەپێدانی چارەسەری دیجیتاڵی لە عێراق، بە پێشکەشکردنی خزمەتگوزاری نوێ و کرداری کە یارمەتی پڕۆژەکان بدات بۆ ڕێکخستن، گەشەکردن، و دروستکردنی ئامادەبوونێکی دیجیتاڵی بەهێز.",
    missionTitle: "ئەرک",
    missionText:
      "ئێمە چارەسەری دیجیتاڵی یەکگرتوو پێشکەش دەکەین لە بیرۆکەوە تا جێبەجێکردن، وەک دیزاینی ماڵپەڕ، فرۆشگای ئەلیکترۆنی، سیستەمی کارگێڕی، و ئامرازە دیجیتاڵییەکانی خزمەتگوزاری.",
    whyTitle: "بۆچی ئێمە؟",
    whyText:
      "چونکە ئێمە تەنها خزمەتگوزارییەکی جیاواز پێشکەش ناکەین، بەڵکو پڕۆژەکە وەک سیستەمێکی تەواو تێدەگەین. چارەسەری گونجاو بۆ سروشتی هەر کاروبارێک دروست دەکەین.",
    goalsTitle: "ئامانجەکانمان بە کورتی",
    goalsText:
      "پشتگیری پڕۆژەکان لە عێراق دەکەین بە چارەسەری دیجیتاڵی نوێ کە کوالێتی کار بەرز دەکاتەوە، بەڕێوەبردن ئاسان دەکات، و ئەزموونی کڕیار باشتر دەکات.",
    goals: [
      {
        title: "ئامانج 01",
        lines: [
          "بەرزکردنەوەی بەهای پڕۆژە بە پیشاندانی ڕاستەقینە.",
          "زیادکردنی متمانەی کڕیار پێش سەردانی ڕاستەقینە.",
        ],
      },
      {
        title: "ئامانج 02",
        lines: [
          "پشتگیری بازاڕکردن بە ماددەی دیجیتاڵی.",
          "کەمکردنەوەی کاتی بڕیار و باشترکردنی ئەزموونی کڕیار.",
        ],
      },
      {
        title: "ئامانج 03",
        lines: [
          "پیشاندانی پڕۆژە عێراقییەکان بە شێوەیەکی نوێ.",
          "گەیشتن بە بینەری ناوخۆیی و دەرەکی.",
        ],
      },
    ],
    ctaTitle: "پێکهاتەیەکی دیجیتاڵی بۆ پڕۆژەکەت.",
    ctaText:
      "هەر پڕۆژەیەک سروشت، بینەر، و ئامانجی تایبەتی هەیە. بۆیە ئەزموونەکە لەسەر بنەمای خودی پڕۆژەکە دروست دەکەین.",
    ctaButton: "بینینی پڕۆژەکان",
  },
};

export default function AboutPage() {
  const [lang, setLang] = useState<Lang>("en");

  const t = text[lang];
  const isRtl = lang === "ar" || lang === "ku";

  return (
    <main
      dir={isRtl ? "rtl" : "ltr"}
      className="min-h-screen bg-[#d8d7d1] text-[#151515]"
    >
      <TopBar lang={lang} setLang={setLang} />

      <section className="relative min-h-[82vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/why-abaad.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-[#d8d7d1]" />

        <div className="relative mx-auto flex min-h-[82vh] max-w-7xl items-end px-5 pb-14 pt-32 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <span className="inline-flex rounded-full border border-white/25 bg-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-white backdrop-blur-xl">
              {t.badge}
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              {t.heroTitle}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              {t.heroText}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="edge-to-edge relative -mt-10 px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1420px] rounded-t-[36px] bg-[#ebe9df] px-5 py-8 shadow-2xl shadow-black/15 sm:px-8 lg:px-10 lg:py-10">
          <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="grid gap-5">
              <InfoCard title={t.visionTitle} text={t.visionText} delay={0} />
              <InfoCard title={t.missionTitle} text={t.missionText} delay={0.08} />
              <InfoCard title={t.whyTitle} text={t.whyText} delay={0.16} />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative overflow-hidden rounded-[28px] bg-[#090909] p-6 text-white shadow-xl shadow-black/20 sm:p-8 lg:min-h-[520px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-55"
                style={{ backgroundImage: "url('/why-abaad.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/20" />

              <div className="relative flex h-full flex-col justify-end">
                <div className="mb-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur">
                    Websites
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur">
                    Systems
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur">
                    360° Tours
                  </span>
                </div>

                <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl">
                  {t.ctaTitle}
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-8 text-white/70 sm:text-base">
                  {t.ctaText}
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-5 rounded-[28px] bg-[#111111] px-6 py-8 text-white sm:px-9 lg:px-11"
          >
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e11d48]">
                  Goals
                </p>
                <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  {t.goalsTitle}
                </h2>
              </div>

              <p className="text-sm leading-8 text-white/70 sm:text-base">
                {t.goalsText}
              </p>
            </div>
          </motion.div>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {t.goals.map((goal, index) => (
              <motion.article
                key={goal.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="rounded-[26px] bg-[#f7f5ee] p-6 shadow-lg shadow-black/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-black">{goal.title}</h3>
                  <span className="text-5xl font-black tracking-[-0.08em] text-black/5">
                    0{index + 1}
                  </span>
                </div>

                <ul className="mt-7 space-y-3 text-sm leading-7 text-black/70">
                  {goal.lines.map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#111111]" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-5 overflow-hidden rounded-[30px] bg-[#f7f5ee] p-7 sm:p-9 lg:p-11"
          >
            <div className="grid gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
                  {t.ctaTitle}
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-8 text-black/65 sm:text-base">
                  {t.ctaText}
                </p>
              </div>

              <div className="flex lg:justify-end">
                <Link
                  href="/projects"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#111111] px-7 text-sm font-bold text-white transition hover:bg-[#e11d48]"
                >
                  {t.ctaButton}
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}

function InfoCard({
  title,
  text,
  delay,
}: {
  title: string;
  text: string;
  delay: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
      className="rounded-[26px] border border-black/10 bg-[#d8d7d1] p-6 shadow-sm sm:p-7"
    >
      <h2 className="text-xl font-black tracking-[-0.02em]">{title}</h2>
      <p className="mt-4 text-sm leading-8 text-black/67 sm:text-[15px]">
        {text}
      </p>
    </motion.article>
  );
}
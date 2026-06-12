"use client";

import { useState } from "react";
import Hero from "../components/Hero";
import ServicesCards from "../components/ServicesCards";
import WhyAbaad from "../components/WhyAbaad";
import ProjectFrames from "../components/ProjectFrames";
import VirtualTourGate from "../components/VirtualTourGate";
import Clients from "../components/Clients";
import Footer from "../components/Footer";

type Lang = "en" | "ar" | "ku";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <main className="bg-[#101010]">
      <Hero lang={lang} setLang={setLang} />
      <ServicesCards lang={lang} />
      <WhyAbaad lang={lang} />
      <ProjectFrames lang={lang} />
      <VirtualTourGate lang={lang} />
      <Clients lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
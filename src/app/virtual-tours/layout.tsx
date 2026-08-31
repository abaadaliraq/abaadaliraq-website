import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "جولات افتراضية 360° في العراق | أبعاد العراق",
  description:
    "جولات افتراضية ثلاثية الأبعاد و360° في العراق للمطاعم والفنادق والمصانع والعقارات والمتاحف والمواقع التجارية والسياحية، بتنفيذ أبعاد العراق.",
  alternates: {
    canonical: "/virtual-tours",
  },
  openGraph: {
    title: "جولات افتراضية 360° في العراق | أبعاد العراق",
    description:
      "جولات افتراضية ثلاثية الأبعاد و360° في العراق للمطاعم والفنادق والمصانع والعقارات والمتاحف والمواقع التجارية والسياحية، بتنفيذ أبعاد العراق.",
    url: "/virtual-tours",
    siteName: "أبعاد العراق",
    locale: "ar_IQ",
    type: "website",
  },
};

export default function VirtualToursLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

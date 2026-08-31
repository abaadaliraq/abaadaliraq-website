import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "مشاريع أبعاد العراق | مواقع، أنظمة وجولات افتراضية",
  description:
    "استكشف مجموعة من مشاريع أبعاد العراق في تطوير المواقع الإلكترونية والمتاجر والأنظمة الرقمية والجولات الافتراضية ثلاثية الأبعاد و360°.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "مشاريع أبعاد العراق | مواقع، أنظمة وجولات افتراضية",
    description:
      "استكشف مجموعة من مشاريع أبعاد العراق في تطوير المواقع الإلكترونية والمتاجر والأنظمة الرقمية والجولات الافتراضية ثلاثية الأبعاد و360°.",
    url: "/projects",
    siteName: "أبعاد العراق",
    locale: "ar_IQ",
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

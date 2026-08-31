import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "من نحن | أبعاد العراق للحلول الرقمية",
  description:
    "تعرف على أبعاد العراق وخدماتنا في تطوير المواقع والأنظمة الرقمية والمتاجر الإلكترونية والجولات الافتراضية ثلاثية الأبعاد للمشاريع في العراق.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "من نحن | أبعاد العراق للحلول الرقمية",
    description:
      "تعرف على أبعاد العراق وخدماتنا في تطوير المواقع والأنظمة الرقمية والمتاجر الإلكترونية والجولات الافتراضية ثلاثية الأبعاد للمشاريع في العراق.",
    url: "/about",
    siteName: "أبعاد العراق",
    locale: "ar_IQ",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

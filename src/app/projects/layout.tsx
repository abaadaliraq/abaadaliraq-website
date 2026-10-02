import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "بعض من أعمالنا | مشاريع أبعاد العراق الرقمية",
  description:
    "نماذج من أعمال أبعاد العراق في المواقع الإلكترونية، التطبيقات، الأنظمة المخصصة، المتاجر، الحجوزات الرقمية، المنيو الرقمي والجولات الافتراضية.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "بعض من أعمالنا | مشاريع أبعاد العراق الرقمية",
    description:
      "نماذج من أعمال أبعاد العراق في المواقع الإلكترونية، التطبيقات، الأنظمة المخصصة، المتاجر، الحجوزات الرقمية، المنيو الرقمي والجولات الافتراضية.",
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

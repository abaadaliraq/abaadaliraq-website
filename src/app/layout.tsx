import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.abaad-aliraq.com"),
  title: "أبعاد العراق | مواقع، أنظمة وجولات افتراضية في العراق",
  description:
    "أبعاد العراق للحلول الرقمية، نطوّر المواقع الإلكترونية والمتاجر والأنظمة المخصصة وننفذ الجولات الافتراضية ثلاثية الأبعاد و360° للشركات والمشاريع في العراق.",
  alternates: {
    canonical: "https://www.abaad-aliraq.com/",
  },
  openGraph: {
    title: "أبعاد العراق | مواقع، أنظمة وجولات افتراضية في العراق",
    description:
      "أبعاد العراق للحلول الرقمية، نطوّر المواقع الإلكترونية والمتاجر والأنظمة المخصصة وننفذ الجولات الافتراضية ثلاثية الأبعاد و360° للشركات والمشاريع في العراق.",
    url: "https://www.abaad-aliraq.com/",
    siteName: "أبعاد العراق",
    locale: "ar_IQ",
    type: "website",
  },
  verification: {
    other: {
      "msvalidate.01": "01BBC0FB5BE3F105123681E741F589C8",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

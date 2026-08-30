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
  title: "أبعاد العراق | مواقع، أنظمة وجولات افتراضية في العراق",
  description:
    "أبعاد العراق شركة متخصصة في تطوير المواقع الإلكترونية والمتاجر والأنظمة الرقمية والجولات الافتراضية ثلاثية الأبعاد و360° للمشاريع والشركات في العراق.",
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

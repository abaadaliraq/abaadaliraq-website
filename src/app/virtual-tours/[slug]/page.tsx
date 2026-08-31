import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VirtualTourDetailClient from "../../../components/virtual-tours/VirtualTourDetailClient";
import {
  getVirtualTourBySlug,
  virtualTours,
} from "../../../data/virtualTours";

type VirtualTourPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return virtualTours.map((tour) => ({
    slug: tour.slug,
  }));
}

export async function generateMetadata({
  params,
}: VirtualTourPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = getVirtualTourBySlug(slug);

  if (!tour) {
    return {};
  }

  const canonical = `https://www.abaad-aliraq.com/virtual-tours/${tour.slug}`;

  return {
    title: tour.seo.title,
    description: tour.seo.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: tour.seo.title,
      description: tour.seo.description,
      url: canonical,
      siteName: "أبعاد العراق",
      locale: "ar_IQ",
      type: "article",
    },
  };
}

export default async function VirtualTourProjectPage({
  params,
}: VirtualTourPageProps) {
  const { slug } = await params;
  const tour = getVirtualTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  return <VirtualTourDetailClient tour={tour} />;
}

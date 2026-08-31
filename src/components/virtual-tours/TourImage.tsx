"use client";

import Image from "next/image";
import { ImageIcon } from "lucide-react";

type TourImageProps = {
  src: string;
  alt: string;
  ready: boolean;
  priority?: boolean;
  className?: string;
  pendingLabel?: string;
  sizes?: string;
  quality?: number;
};

export default function TourImage({
  src,
  alt,
  ready,
  priority = false,
  className = "",
  pendingLabel = "صورة المشروع قريباً",
  sizes = "(max-width: 768px) 100vw, 33vw",
  quality = 90,
}: TourImageProps) {
  if (!ready) {
    return (
      <div
        className={`flex h-full min-h-[150px] flex-col items-center justify-center bg-[#111] p-4 text-center text-white sm:min-h-[220px] sm:p-6 ${className}`}
      >
        <ImageIcon className="mb-3 h-7 w-7 text-white/28 sm:mb-4 sm:h-8 sm:w-8" />
        <p className="text-xs font-bold text-white/42">
          {pendingLabel}
        </p>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      quality={quality}
      priority={priority}
      className={`object-cover ${className}`}
    />
  );
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/sectors.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/virtual-tours/house-of-antiques",
        destination: "/virtual-tours/house-of-antiques-2026",
        permanent: true,
      },
      {
        source: "/virtual-tours/babylon-rotana-halls",
        destination: "/virtual-tours/babylon-rotana",
        permanent: true,
      },
      {
        source: "/virtual-tours/mutanabbi-street",
        destination: "/virtual-tours/al-mutanabbi-street",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

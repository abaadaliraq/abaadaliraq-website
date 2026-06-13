import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/sectors.html",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
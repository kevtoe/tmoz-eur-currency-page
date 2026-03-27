import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "edge.sitecorecloud.io",
      },
    ],
  },
};

export default nextConfig;

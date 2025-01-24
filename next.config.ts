import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.vecteezy.com'
      },
      {
        protocol: 'https',
        hostname: 'cloud.appwrite.io'
      }
    ]
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '100mb',
    },
  },
};


export default nextConfig;

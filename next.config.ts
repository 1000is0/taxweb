import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/taxweb',
  assetPrefix: '/taxweb/',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
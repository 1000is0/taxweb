import type { NextConfig } from "next";

// GitHub Pages용 설정인지 확인
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  ...(isGitHubPages && {
    basePath: '/taxweb',
    assetPrefix: '/taxweb/',
  }),
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
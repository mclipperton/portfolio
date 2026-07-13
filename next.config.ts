import type { NextConfig } from "next";

const sitePath = process.env.NEXT_PUBLIC_SITE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: false,
  },
  basePath: sitePath || undefined,
  assetPrefix: sitePath || undefined,
};

export default nextConfig;

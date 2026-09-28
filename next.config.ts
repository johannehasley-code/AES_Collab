import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/AES_Collab",
  assetPrefix: "/AES_Collab/",
};

export default nextConfig;

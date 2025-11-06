import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  compiler: {
    // Remove all console logs
    removeConsole: process.env.NODE_ENV === "production" ? true : false,
  },
};

export default nextConfig;

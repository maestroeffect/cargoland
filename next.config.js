/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
console.log("API Hostname:", process.env.NEXT_PUBLIC_API_HOSTNAME);
console.log("Storage Hostname:", process.env.NEXT_PUBLIC_STORAGE_HOSTNAME);

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    domains: [
      process.env.NEXT_PUBLIC_API_HOSTNAME, // Server hostname
      process.env.NEXT_PUBLIC_STORAGE_HOSTNAME, // Storage hostname
      "demo-api.foodyman.org",
      "lh3.googleusercontent.com",
    ].filter(Boolean), // Prevents errors if env variables are undefined
    minimumCacheTTL: 3600,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = withBundleAnalyzer(nextConfig);

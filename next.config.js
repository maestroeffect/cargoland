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
      "server.cargolandfood.com", // Replace with actual API hostname
      "cargolandfoods-a42f8.firebasestorage.app",
      "demo-api.foodyman.org",
      "lh3.googleusercontent.com",
    ],
    minimumCacheTTL: 3600,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = withBundleAnalyzer(nextConfig);

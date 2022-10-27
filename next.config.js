/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: { appDir: true },
  images: {
    domains: ["blog.codeminer42.com"],
  },
};

module.exports = nextConfig;

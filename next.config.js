/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Configuración para API Routes
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;

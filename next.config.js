/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/webp'],
    unoptimized: true,
  },
  typescript: {
    // Ignores any error happened during type checking
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignores any warning/error coming from ESLint
    ignoreDuringBuilds: true,
  },
  output: 'export'
};

module.exports = nextConfig; 
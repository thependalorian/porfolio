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
    formats: ['image/webp']
  },
  typescript: {
    // Ignores any error happened during type checking
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignores any warning/error coming from ESLint
    ignoreDuringBuilds: true,
  },
  output: 'standalone'
};

module.exports = nextConfig; 
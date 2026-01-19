/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'standalone', // For Vercel deployment - commented out to fix build issues
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'georgenekwaya.com',
      },
      {
        protocol: 'https',
        hostname: 'www.georgenekwaya.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'api.accredible.com',
      },
      {
        protocol: 'https',
        hostname: 'images.credential.net',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // Security headers
  async headers() {
    const isDev = process.env.NODE_ENV === 'development';
    
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Only add CSP in production - disable in development to avoid conflicts with browser extensions
          ...(isDev ? [] : [{
            key: 'Content-Security-Policy',
            value: [
              // Stricter CSP for production
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: blob: https://api.accredible.com https://images.credential.net https://*.accredible.com",
              "connect-src 'self' https://api.accredible.com https://fonts.googleapis.com",
              "frame-src 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
              "upgrade-insecure-requests",
            ].join('; '),
          }]),
        ],
      },
    ];
  },
  // Webpack configuration for server-side only modules
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    // Ignore modules from parent directories or other projects
    config.resolve.symlinks = false;
    
    return config;
  },
};

module.exports = nextConfig;

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
          {
            key: 'Content-Security-Policy',
            value: isDev
              ? [
                  // More permissive CSP for development
                  "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob:",
                  "script-src 'self' 'unsafe-eval' 'unsafe-inline' http://localhost:* https://localhost:*",
                  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
                  "font-src 'self' https://fonts.gstatic.com data:",
                  "img-src 'self' data: blob: https://api.accredible.com https://images.credential.net https://*.accredible.com",
                  "connect-src 'self' https://api.accredible.com https://fonts.googleapis.com ws://localhost:* wss://localhost:* http://localhost:* https://localhost:*",
                  "frame-src 'self'",
                  "object-src 'none'",
                  "base-uri 'self'",
                  "form-action 'self'",
                ].join('; ')
              : [
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
          },
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
    return config;
  },
};

module.exports = nextConfig;

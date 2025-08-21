/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    localeDetection: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
}

export default nextConfig

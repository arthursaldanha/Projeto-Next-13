/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  env: {
    API_ACCOUNT: '142.93.194.52:3000',
    API_AUTH: '142.93.194.52:3000',
  },
};

module.exports = nextConfig;

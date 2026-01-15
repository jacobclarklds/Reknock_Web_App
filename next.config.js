/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  eslint: {
    // Skip ESLint during builds - run separately
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

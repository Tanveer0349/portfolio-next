/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['github.com', 'raw.githubusercontent.com'],
  },
  eslint: {
    dirs: ['app', 'components', 'lib'],
  },
}

module.exports = nextConfig
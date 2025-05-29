/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/kathan.github.io',
  assetPrefix: '/kathan.github.io/',
  images: {
    unoptimized: true
  },
  eslint: {
    dirs: ['pages', 'components', 'lib', 'data']
  }
}

module.exports = nextConfig
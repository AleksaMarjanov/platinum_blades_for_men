/** @type {import('next').NextConfig} */
const nextConfig = {
  javascript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
  env: {
    mapbox_key: ''
  }
}

module.exports = nextConfig

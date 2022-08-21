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
    mapbox_key: process.env.REACT_APP_MAPBOX_KEY,
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    sanity_token: process.env.REACT_APP_SANITY_TOKEN,

  }
}

module.exports = nextConfig

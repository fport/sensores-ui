/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BBACKEND_URL: process.env.BACKEND_URL,
  }
}

module.exports = nextConfig

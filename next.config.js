/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'assuredgig.com'],
  },
  env: {
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
}

module.exports = nextConfig 
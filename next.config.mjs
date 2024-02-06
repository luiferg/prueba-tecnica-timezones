/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.LOGIN_API}/:path*`, // Proxy to Backend
      },
    ]
  },
}

export default nextConfig

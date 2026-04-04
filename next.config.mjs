/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  compress: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  transpilePackages: [],
}

export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
 eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during Vercel builds
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
}

export default nextConfig;

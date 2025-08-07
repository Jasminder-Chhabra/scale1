/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false, // Ensure ESLint runs during builds
    // Optionally, specify rules to ignore
    // This is not recommended for long-term use
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

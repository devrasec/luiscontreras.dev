const nextConfig = {
  webpack(config) {
    config.module.rules.push({ test: /\.mdx$/, use: 'raw-loader' });
    return config;
  },
  images: {
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};

module.exports = nextConfig;

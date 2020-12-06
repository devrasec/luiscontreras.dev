const nextConfig = {
  webpack(config) {
    config.module.rules.push({ test: /\.mdx$/, use: 'raw-loader' });
    return config;
  },
};

module.exports = nextConfig;

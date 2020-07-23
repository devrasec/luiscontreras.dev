module.exports = {
  webpack(config) {
    config.module.rules.push({ test: /\.mdx$/, use: 'raw-loader' });
    return config;
  },
};

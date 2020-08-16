const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  webpack(config) {
    config.module.rules.push({ test: /\.mdx$/, use: 'raw-loader' });
    return config;
  },
};

module.exports = withPlugins(
  [
    optimizedImages,
    {
      images: {
        handleImages: ['jpeg', 'svg', 'gif'],
      },
    },
  ],
  nextConfig
);

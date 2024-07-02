const path = require('path');

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel', '@babel/preset-env', '@babel/preset-react'],
        },
      },
    });
    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  
};

const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

// '../stories/**/*.stories.mdx',
// '../stories/**/*.stories.@(js|jsx|ts|tsx)',
module.exports = {
  stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (baseConfig) => {
    baseConfig.output.clean = true;

    baseConfig.resolve.plugins = [
      new TsconfigPathsPlugin({ extensions: baseConfig.resolve.extensions }),
    ];

    baseConfig.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, './theme/setInitialTheme.js'),
            to: './theme/setInitialTheme.js',
          },
          {
            from: path.resolve(__dirname, '../public'),
            to: './',
          },
          {
            from: path.resolve(__dirname, './theme/colorThemeConfig.js'),
            to: './theme/colorThemeConfig.js',
          },
        ],
      })
    );

    return baseConfig;
  },
  babel: async (options) => {
    options.presets.push('next/babel');
    options.plugins.push([
      'styled-components',
      {
        ssr: true,
        displayName: true,
        preprocess: false,
      },
    ]);
    return options;
  },
};

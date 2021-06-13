const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
  ],
  webpackFinal: async (baseConfig) => {
    baseConfig.resolve.plugins = [
      new TsconfigPathsPlugin({ extensions: baseConfig.resolve.extensions }),
    ];

    // baseConfig.plugins.push(
    //   new CopyPlugin({
    //     patterns: [{ from: './utils/setInitialTheme', to: './utils/' }],
    //   })
    // );

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

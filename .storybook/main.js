module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  features: {
    postcss: false,
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config) => {
    // Add Babel loader for JSX files
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            ["@babel/preset-react", { runtime: "automatic" }],
          ],
        },
      },
    });

    return config;
  },
};

import path from 'path';
import { defineConfig } from "cypress";
import { NormalModuleReplacementPlugin } from 'webpack';

export default defineConfig({
  projectId: "dhjcdj",

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
      webpackConfig: {
        plugins: [
          new NormalModuleReplacementPlugin(
            /next\/image/,
            require.resolve(path.join(__dirname, 'cypress', 'mocks', 'next', 'image'))
          ),
        ],
      },
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

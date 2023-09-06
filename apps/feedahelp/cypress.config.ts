import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'dhjcdj',
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});

import type { StorybookConfig } from '@storybook/react-native-web-vite';

const config: StorybookConfig = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../components/**/*.stories.?(ts|tsx|js|jsx)", // <--- Add this

  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-actions",
  ],
  "framework": {
    "name": "@storybook/react-native-web-vite",
    "options": {}
  }
};
export default config;
module.exports = {
  components: ['../src/**/*.components.@(js|jsx|ts|tsx)'],
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  typescript: {
      reactDocgen: "none"}
}

module.exports = {
  plugins: ['@iceworks/best-practices'],
  overrides: [
    {
      files: ['package.json'],
      processor: '@iceworks/best-practices/.json',
      rules: {
        quotes: 'off',
        '@iceworks/best-practices/deps-no-ice-scripts': 'warn',
        '@iceworks/best-practices/deps-no-resolutions': 'warn',
        '@iceworks/best-practices/deps-no-router-library': 'warn',
        '@iceworks/best-practices/no-broad-semantic-versioning': 'error',
        '@iceworks/best-practices/recommend-update-rax': 'warn',
      },
    },
  ],
  rules: {
    '@iceworks/best-practices/no-http-url': 'warn',
    '@iceworks/best-practices/no-js-in-ts-project': 'warn',
    '@iceworks/best-practices/no-lowercase-component-name': 'warn',
    '@iceworks/best-practices/no-secret-info': 'error',
    '@iceworks/best-practices/recommend-functional-component': 'warn',
    '@iceworks/best-practices/recommend-polyfill': 'warn',
  },
};

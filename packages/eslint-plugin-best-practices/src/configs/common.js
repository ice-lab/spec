module.exports = {
  plugins: ['@fed/best-practices'],
  overrides: [
    {
      files: ['package.json'],
      processor: '@fed/best-practices/.json',
      rules: {
        quotes: 'off',
        semi: 'off',
        'eol-last': 'off',
        'quote-props': 'off',
        'comma-dangle': 'off',
        '@fed/best-practices/deps-no-ice-scripts': 'warn',
        '@fed/best-practices/deps-no-resolutions': 'warn',
        '@fed/best-practices/deps-no-router-library': 'warn',
        '@fed/best-practices/no-broad-semantic-versioning': 'error',
        '@fed/best-practices/recommend-update-rax': 'warn',
      },
    },
  ],
  rules: {
    'max-len': ['warn', 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    '@fed/best-practices/no-http-url': 'warn',
    '@fed/best-practices/no-js-in-ts-project': 'warn',
    '@fed/best-practices/no-lowercase-component-name': 'warn',
    '@fed/best-practices/no-secret-info': 'error',
    '@fed/best-practices/recommend-add-line-height-unit': 'error',
    '@fed/best-practices/recommend-functional-component': 'warn',
    '@fed/best-practices/recommend-polyfill': 'warn',
  },
};

module.exports = {
  plugins: ['@iceworks/best-practices'],
  overrides: [
    {
      files: ['package.json'],
      processor: '@iceworks/best-practices/.json',
      rules: {
        quotes: 'off',
        semi: 'off',
        'eol-last': 'off',
        'quote-props': 'off',
        'comma-dangle': 'off',
        '@iceworks/best-practices/deps-no-ice-scripts': 'warn',
        '@iceworks/best-practices/deps-no-resolutions': 'warn',
        '@iceworks/best-practices/deps-no-router-library': 'warn',
        '@iceworks/best-practices/no-broad-semantic-versioning': 'error',
        '@iceworks/best-practices/recommend-update-rax': 'warn',
      },
    },
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/*.{j,t}s?(x)',
        '**/test/*.{j,t}s?(x)',
      ],
      env: { jest: true },
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
    semi: 'warn',
    'eol-last': 'warn',
    'quote-props': 'warn',
    '@iceworks/best-practices/no-http-url': 'warn',
    '@iceworks/best-practices/no-js-in-ts-project': 'warn',
    '@iceworks/best-practices/no-lowercase-component-name': 'warn',
    '@iceworks/best-practices/no-secret-info': 'error',
    '@iceworks/best-practices/recommend-add-line-height-unit': 'error',
    '@iceworks/best-practices/recommend-functional-component': 'warn',
    '@iceworks/best-practices/recommend-polyfill': 'warn',
  },
};

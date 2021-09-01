const commonConfig = require('./common');
const { deepmerge } = require('@iceworks/spec');

module.exports = deepmerge(commonConfig, {
  rules: {
    'max-lines': ['warn', { max: 500 }],
    'no-plusplus': 'off',
    'no-return-await': 'off',
    semi: 'off',
    '@typescript-eslint/semi': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
});

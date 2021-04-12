const commonConfig = require('./common');
const { deepmerge } = require('@fed/spec');

module.exports = deepmerge(commonConfig, {
  rules: {
    'max-len': ['error', { code: 150 }],
    'max-lines': ['warn', { max: 500 }],
    'no-plusplus': 'off',
    'no-return-await': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
});

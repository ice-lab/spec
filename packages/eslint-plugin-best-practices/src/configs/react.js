const commonConfig = require('./common');
const { deepmerge } = require('@iceworks/spec');

module.exports = deepmerge(commonConfig, {
  rules: {
    'max-len': ['warn', { code: 150 }],
    'max-lines': ['warn', { max: 500 }],
    'no-plusplus': 'off',
    'no-return-await': 'off',
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
  },
});

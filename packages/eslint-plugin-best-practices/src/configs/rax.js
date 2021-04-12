const commonConfig = require('./common');
const { deepmerge } = require('@fed/spec');

module.exports = deepmerge(commonConfig, {
  rules: {
    'max-lines': ['warn', { max: 500 }],
    'no-plusplus': 'off',
    'no-return-await': 'off',
    'no-unused-vars': 'warn',
  },
});

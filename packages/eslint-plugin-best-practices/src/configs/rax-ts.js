const commonConfig = require('./common');
const deepmerge = require('deepmerge');

module.exports = deepmerge(commonConfig, {
  rules: {
    'max-lines': ['warn', { max: 500 }],
    'no-plusplus': 'off',
    'no-return-await': 'off',
  },
});

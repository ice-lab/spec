const commonConfig = require('./common');
const deepmerge = require('../deepmerge');

module.exports = deepmerge(commonConfig, {
  rules: {
    'max-len': ['warn', { code: 150 }],
    'max-lines': ['warn', { max: 500 }],
    'no-mixed-operators': 'off',
    'no-plusplus': 'off',
    'no-return-await': 'off',
    'react/forbid-prop-types': 'off',
    'react/prop-types': 'off',
  },
});

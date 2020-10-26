const commonConfig = require('./common');

module.exports = Object.assign({}, commonConfig, {
  rules: {
    'max-len': ['error', { code: 150 }],
    'no-mixed-operators': 'off',
    'no-plusplus': 'off',
    'no-return-await': 'off',
    'react/forbid-prop-types': 'off',
    'react/prop-types': 'off',
  },
});

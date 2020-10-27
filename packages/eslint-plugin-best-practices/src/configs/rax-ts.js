const commonConfig = require('./common');
const deepmerge = require('../deepmerge');

module.exports = deepmerge(commonConfig, {
  rules: {
    'no-plusplus': 'off',
  },
});

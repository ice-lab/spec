const { getESLintConfig } = require('./src');

module.exports = getESLintConfig('common-ts', {
  env: {
    jest: true,
  },
});

const { getESLintConfig } = require('./src');

module.exports = getESLintConfig('common', {
  env: {
    jest: true,
  },
});

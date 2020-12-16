const { getESLintConfig } = require('./src');

module.exports = getESLintConfig('vue', {
  env: {
    jest: true,
  },
});

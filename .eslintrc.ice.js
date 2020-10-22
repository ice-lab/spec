const { getESLintConfig } = require('./src');

module.exports = getESLintConfig('ice', {
  env: {
    jest: true
  }
});

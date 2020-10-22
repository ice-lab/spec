const { getESLintConfig } = require('./src');

module.exports = getESLintConfig('rax', {
  env: {
    jest: true
  }
});

const { getESLintConfig } = require('./src');

module.exports = getESLintConfig('rax-ts', {
  env: {
    jest: true
  }
});

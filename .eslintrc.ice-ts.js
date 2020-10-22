const { getESLintConfig } = require('./src');

module.exports = getESLintConfig('ice-ts', {
  env: {
    jest: true
  }
});

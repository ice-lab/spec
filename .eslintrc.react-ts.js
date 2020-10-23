const { getESLintConfig } = require('./src');

module.exports = getESLintConfig('react-ts', {
  env: {
    jest: true
  }
});

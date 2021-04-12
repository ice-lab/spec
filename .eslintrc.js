const { getESLintConfig } = require('./packages/spec/src/');

module.exports = getESLintConfig('react', {
  env: {
    jest: true
  },
  rules: {
    // For test file. This project is no UI project, not use line height.
    '@fed/best-practices/recommend-add-line-height-unit': 'off'
  }
});

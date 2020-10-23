const { getESLintConfig } = require('./packages/spec/src/');

module.exports = getESLintConfig('react', {
  env: {
    jest: true
  }
});

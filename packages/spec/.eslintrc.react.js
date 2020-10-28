const { getESLintConfig } = require('./src');

module.exports = getESLintConfig('react', {
  env: {
    jest: true,
  },
});

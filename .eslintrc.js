const { eslint, deepmerge } = require('./lib');

const eslintConfig = deepmerge(eslint, {
  env: {
    jest: true
  }
});

module.exports = eslintConfig;

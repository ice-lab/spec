const { eslint, deepmerge } = require('./lib');

module.exports = deepmerge(eslint, {
  env: {
    jest: true
  }
});

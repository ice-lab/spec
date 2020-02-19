const { tslint, deepmerge } = require('../../lib');

module.exports = deepmerge(tslint, {
  env: {
    jest: true
  }
});

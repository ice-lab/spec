/* eslint-disable global-require */

module.exports = {
  eslint: require('./eslint'),
  tslint: require('./tslint'),
  stylelint: require('./stylelint'),
  commitlint: require('./commitlint'),
  prettier: require('./prettier'),
  // deprecated, please use tslint
  eslintTS: require('./tslint'),

  deepmerge: require('./deepmerge'),
};

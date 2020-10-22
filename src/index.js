const deepmerge = require('./deepmerge');
const eslint = require('requireindex')(`${__dirname}/eslint`);

function getConfig(configs, rule, customConfig) {
  if (!configs[rule]) {
    throw new Error(`Rule '${rule}' not Support!`);
  }

  return deepmerge(configs[rule], customConfig || {});
}

// ESLint
exports.getESLintConfig = function (rule, customConfig) {
  return getConfig(eslint, rule, customConfig);
};

// stylelint
exports.getStylelintConfig = function (rule, customConfig) {
  // rax ice and react is same
  // https://www.npmjs.com/package/stylelint-config-ali
  return deepmerge({
    extends: 'stylelint-config-ali',
  }, customConfig || {});
};

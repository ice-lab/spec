const deepmerge = require('./deepmerge');
const eslint = require('requireindex')(`${__dirname}/eslint`);
const stylelint = require('requireindex')(`${__dirname}/stylelint`);
const prettier = require('requireindex')(`${__dirname}/prettier`);

function getConfig(configs, rule, customConfig) {
  if (!configs[rule]) {
    throw new Error(`Rule '${rule}' not Support!`);
  }

  return deepmerge(configs[rule], customConfig || {});
}

// ESLint
exports.getESLintConfig = function(rule, customConfig) {
  return getConfig(eslint, rule, customConfig);
};

// stylelint
exports.getStylelintConfig = function(rule, customConfig) {
  return getConfig(stylelint, rule, customConfig);
};

// prettier
exports.getPrettierConfig = function(rule, customConfig) {
  return getConfig(prettier, rule, customConfig);
};

const path = require('path');
const deepmerge = require('./deepmerge');
const requireAll = require('require-all');

const eslint = requireAll({
  dirname: path.resolve(__dirname, 'eslint'),
});
const stylelint = requireAll({
  dirname: path.resolve(__dirname, 'stylelint'),
});
const prettier = requireAll({
  dirname: path.resolve(__dirname, 'prettier'),
});
const commitlint = requireAll({
  dirname: path.resolve(__dirname, 'commitlint'),
});

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
  return getConfig(stylelint, rule, customConfig);
};

// prettier
exports.getPrettierConfig = function (rule, customConfig) {
  return getConfig(prettier, rule, customConfig);
};

// commitlint
exports.getCommitlintConfig = function (rule, customConfig) {
  return getConfig(commitlint, rule, customConfig);
};

// deepmerge for lint rules
// Such as deepmerge({ rules: { 'comma-dangle': [1, 'never'] } }, { rules: { 'comma-dangle': [2, 'always'] } })
// Get { rules: { 'comma-dangle': [2, 'always'] } Not { rules: { 'comma-dangle': [1, 'never', 2, 'always'] }
exports.deepmerge = deepmerge;

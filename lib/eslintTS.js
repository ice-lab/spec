const eslint = require('./eslint');
const deepmerge = require('deepmerge')

const TSConfig = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended"],
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/array-type": ["error", "array"],
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/interface-name-prefix": ["error", "always"],
    "@typescript-eslint/explicit-member-accessibility": ["error", {
      accessibility: 'explicit',
      overrides: {
        constructors: 'no-public',
      }
    }]
  }
}

module.exports = deepmerge(eslint, TSConfig);

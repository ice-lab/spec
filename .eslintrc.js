const { getESLintConfig } = require('./packages/spec/src/');

// script: eslint --ext .js,.jsx,.tsx,.ts ./ --resolve-plugins-relative-to ./packages/spec
module.exports = getESLintConfig('react', {
  rules: {
    // For test file. This project is no UI project, not use line height.
    '@iceworks/best-practices/recommend-add-line-height-unit': 'off',
  },
  parserOptions: {
    babelOptions: {
      // @babel/preset-react is not a ESLint plugin, resolve-plugins-relative-to is not work
      // fix Parsing error: Cannot find module '@babel/preset-react'
      // set presets path to ./packages/spec
      presets: [require.resolve('@babel/preset-react', { paths: ['./packages/spec'] })],
    },
  },
});

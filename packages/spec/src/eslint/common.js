// https://www.npmjs.com/package/eslint-config-ali
// ESlint config for common js project
module.exports = {
  extends: [
    require.resolve('eslint-config-ali'),
  ],
  rules: {
    // Change error to warn
    semi: 'warn',
    'eol-last': 'warn',
    'quote-props': 'warn',
    'no-unused-vars': 'warn',
  },
};

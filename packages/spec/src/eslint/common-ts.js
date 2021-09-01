// https://www.npmjs.com/package/eslint-config-ali
// ESlint config for common ts project
module.exports = {
  extends: [
    require.resolve('eslint-config-ali/typescript'),
  ],
  rules: {
    // Change error to warn
    semi: 'off',
    '@typescript-eslint/semi': 'warn',
    'eol-last': 'warn',
    'quote-props': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
};

// https://www.npmjs.com/package/eslint-config-ali
// ESlint config for common ts project
module.exports = {
  extends: [
    'plugin:prettier/recommended',
    require.resolve('eslint-config-prettier'),
    require.resolve('eslint-config-ali/typescript'),
  ],
  rules: {
    // Change error to warn
    '@typescript-eslint/no-unused-vars': 'warn',
  },
};

// https://www.npmjs.com/package/eslint-config-ali
// ESlint config for Vue TypeScript project
module.exports = {
  extends: [
    require.resolve('eslint-config-ali/typescript/vue'),
  ],
  rules: {
    // Change error to warn
    '@typescript-eslint/no-unused-vars': 'warn',
  },
};

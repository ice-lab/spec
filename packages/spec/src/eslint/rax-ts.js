// https://www.npmjs.com/package/eslint-config-ali
// ESlint config for Rax TypeScript project
const getRaxEslintConfig = require('../getRaxEslintConfig');

module.exports = getRaxEslintConfig({
  extends: [
    require.resolve('eslint-config-ali/typescript/rax'),
    // For some ci and jest test env, we chose require.resolve instead 'plugin:@iceworks/best-practices/rax-ts'
    require.resolve('@iceworks/eslint-plugin-best-practices/src/configs/rax-ts'),
  ],
});

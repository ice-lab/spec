// https://www.npmjs.com/package/eslint-config-ali
// ESlint config for Rax project
module.exports = {
  extends: [
    'plugin:prettier/recommended',
    require.resolve('eslint-config-prettier'),
    require.resolve('eslint-config-ali/rax'),
    // For some ci and jest test env, we chose require.resolve instead 'plugin:@iceworks/best-practices/rax'
    require.resolve('@iceworks/eslint-plugin-best-practices/src/configs/rax'),
  ],
};
